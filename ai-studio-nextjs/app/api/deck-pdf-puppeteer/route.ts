import { NextRequest, NextResponse } from "next/server";
import puppeteer from "puppeteer";

export async function GET(request: NextRequest) {
  let browser;

  try {
    const protocol = request.headers.get("x-forwarded-proto") || "http";
    const host = request.headers.get("host") || "localhost:3000";
    const baseUrl = `${protocol}://${host}`;

    console.log("Launching Puppeteer...");

    // Launch browser
    browser = await puppeteer.launch({
      headless: true,
      args: [
        "--no-sandbox",
        "--disable-setuid-sandbox",
        "--disable-dev-shm-usage",
        "--disable-gpu",
      ],
    });

    const page = await browser.newPage();

    // Set viewport to 1920x1080 (16:9 landscape)
    await page.setViewport({
      width: 1920,
      height: 1080,
      deviceScaleFactor: 1.5,
    });

    console.log("Navigating to print page...");

    // Navigate to the print page with ?pdf=true to disable auto-print
    await page.goto(`${baseUrl}/deck/print?pdf=true`, {
      waitUntil: "load",
      timeout: 30000,
    });

    // Wait for content to fully render
    await page.waitForSelector(".page-break-after-always", { timeout: 15000 });

    // Give extra time for images, fonts, and animations to load
    await new Promise((resolve) => setTimeout(resolve, 5000));

    console.log("Generating PDF...");

    // Generate PDF
    const pdf = await page.pdf({
      format: "A4",
      landscape: true,
      printBackground: true,
      margin: { top: 0, right: 0, bottom: 0, left: 0 },
      preferCSSPageSize: false,
    });

    await browser.close();
    console.log("PDF generated successfully!");

    return new NextResponse(Buffer.from(pdf), {
      status: 200,
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": 'attachment; filename="BuildItFast-Deck.pdf"',
        "Cache-Control": "no-store",
      },
    });
  } catch (error) {
    console.error("PDF generation error:", error);
    if (browser) {
      await browser.close();
    }
    return NextResponse.json(
      { error: "Failed to generate PDF", details: String(error) },
      { status: 500 }
    );
  }
}

export const dynamic = "force-dynamic";
export const maxDuration = 60;
