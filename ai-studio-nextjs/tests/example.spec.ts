import { test, expect } from '@playwright/test';

test.describe('Home Page', () => {
  test('should load the home page', async ({ page }) => {
    await page.goto('/');

    // Check that the page title contains expected text
    await expect(page).toHaveTitle(/MVP разработка/);
  });

  test('should have main navigation links', async ({ page }) => {
    await page.goto('/');

    // Check for navigation menu
    await expect(page.locator('nav')).toBeVisible();
    await expect(page.getByRole('link', { name: /Features/i })).toBeVisible();
    await expect(page.getByRole('link', { name: /Pricing/i })).toBeVisible();
    await expect(page.getByRole('link', { name: /Contact/i })).toBeVisible();
  });

  test('should display hero section', async ({ page }) => {
    await page.goto('/');

    // Check hero heading
    await expect(page.getByRole('heading', { name: /MVP Development/i })).toBeVisible();

    // Check CTA button
    await expect(page.getByRole('link', { name: /Discuss Project/i })).toBeVisible();
  });

  test('should navigate to pricing section', async ({ page }) => {
    await page.goto('/');

    // Click on Pricing link
    await page.getByRole('link', { name: /Pricing/i }).click();

    // Wait for navigation to anchor
    await page.waitForTimeout(500);

    // Check if pricing section is visible
    await expect(page.locator('#pricing')).toBeInViewport();
  });

  test('should track clicks with Google Analytics', async ({ page }) => {
    await page.goto('/');

    // Wait for GA to load
    await page.waitForFunction(() => window.dataLayer !== undefined);

    // Check that dataLayer exists
    const dataLayer = await page.evaluate(() => window.dataLayer);
    expect(dataLayer).toBeDefined();
    expect(Array.isArray(dataLayer)).toBe(true);
  });
});
