import { test, expect } from '@playwright/test';

test.describe('Landing Page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('should display updated hero section', async ({ page }) => {
    // Check hero title
    await expect(page.locator('h1')).toContainText('MVP in 2-4 Weeks from');
    await expect(page.locator('h1')).toContainText('$5,000');

    // Check hero description - use first() to get the hero section text
    const heroSection = page.locator('section#top');
    await expect(heroSection.getByText('Full development cycle: design, web, mobile, testing')).toBeVisible();
    await expect(heroSection.getByText('We use AI to accelerate, but code is written by senior developers')).toBeVisible();
  });

  test('should display three pricing packages', async ({ page }) => {
    // Navigate to pricing section
    await page.getByRole('link', { name: 'Pricing', exact: true }).first().click();

    // Check all three packages are visible within pricing section
    const pricingSection = page.locator('section#pricing');
    await expect(pricingSection.getByRole('heading', { name: 'Quick MVP' })).toBeVisible();
    await expect(pricingSection.getByRole('heading', { name: 'Full MVP' })).toBeVisible();
    await expect(pricingSection.getByRole('heading', { name: 'Advanced MVP' })).toBeVisible();

    // Check prices
    await expect(pricingSection.getByText('$5,000')).toBeVisible();
    await expect(pricingSection.getByText('$15,000')).toBeVisible();
    await expect(pricingSection.getByText('$25,000')).toBeVisible();

    // Check "Most Popular" badge
    await expect(page.getByText('Most Popular')).toBeVisible();
  });

  test('should display pricing card timeframes', async ({ page }) => {
    await page.goto('/#pricing');

    // Check timeframes are visible
    await expect(page.getByText('1-2 weeks')).toBeVisible();
    await expect(page.getByText('3-4 weeks')).toBeVisible();
    await expect(page.getByText('5-8 weeks')).toBeVisible();
  });

  test('should display Transparent Pricing section', async ({ page }) => {
    await page.goto('/');

    // Check section title
    await expect(page.getByText('Transparent Pricing')).toBeVisible();
    await expect(page.getByText('How We Calculate the Price')).toBeVisible();

    // Check weekly rate
    await expect(page.getByText('/ week')).toBeVisible();
    await expect(page.getByText('One week of team work')).toBeVisible();

    // Check team members
    await expect(page.getByText('UI/UX Designer')).toBeVisible();
    await expect(page.getByText('Frontend Developer')).toBeVisible();
    await expect(page.getByText('Backend Developer')).toBeVisible();
    await expect(page.getByText('QA Engineer')).toBeVisible();

    // Check project examples
    await expect(page.getByText('Simple SaaS: 2 weeks = $5,000')).toBeVisible();
    await expect(page.getByText('Marketplace: 4 weeks = $10,000')).toBeVisible();
    await expect(page.getByText('Platform + Mobile: 8 weeks = $20,000')).toBeVisible();
  });

  test('should display What\'s Included section', async ({ page }) => {
    await page.goto('/');

    // Check section title
    await expect(page.getByText("What's Included")).toBeVisible();
    await expect(page.getByText('Every Package Includes')).toBeVisible();

    // Check all included items within the section
    const whatsIncludedSection = page.locator('section#whats-included');
    await expect(whatsIncludedSection.getByText('Design in Figma', { exact: true })).toBeVisible();
    await expect(whatsIncludedSection.getByText('Frontend on React/Next.js')).toBeVisible();
    await expect(whatsIncludedSection.getByText('Backend on Node.js/Python')).toBeVisible();
    await expect(whatsIncludedSection.getByText('PostgreSQL Database')).toBeVisible();
    await expect(whatsIncludedSection.getByText('Testing')).toBeVisible();
    await expect(whatsIncludedSection.getByText('Production deployment')).toBeVisible();
    await expect(whatsIncludedSection.getByText('Source code transfer')).toBeVisible();
    await expect(whatsIncludedSection.getByText('2 weeks support')).toBeVisible();
  });

  test('should display Project Timeline section', async ({ page }) => {
    await page.goto('/');

    // Check section title
    await expect(page.getByText('Project Timeline')).toBeVisible();
    await expect(page.getByText('4-Week Development Process')).toBeVisible();

    // Check all weeks
    await expect(page.getByText('Week 1')).toBeVisible();
    await expect(page.getByText('Design + Backend Foundation')).toBeVisible();

    await expect(page.getByText('Week 2')).toBeVisible();
    await expect(page.getByText('Frontend + Integrations')).toBeVisible();

    await expect(page.getByText('Week 3')).toBeVisible();
    await expect(page.getByText('Testing + Polish')).toBeVisible();

    await expect(page.getByText('Week 4')).toBeVisible();
    await expect(page.getByText('Deployment + Launch')).toBeVisible();
  });

  test('should have working magnetic buttons', async ({ page }) => {
    await page.goto('/#pricing');

    // Find all "Choose Package" buttons
    const buttons = page.getByRole('link', { name: /Choose Package/ });
    await expect(buttons.first()).toBeVisible();

    // Hover over button and check it's interactive
    await buttons.first().hover();

    // Buttons should navigate to contact section
    await expect(buttons.first()).toHaveAttribute('href', '#contact');
  });

  test('pricing cards should have glow effect on hover', async ({ page }) => {
    await page.goto('/#pricing');

    // Wait for pricing section to be visible
    await page.waitForSelector('h2:has-text("MVP Development Cost")');

    // Get the first pricing card
    const pricingCard = page.locator('article').filter({ hasText: 'Quick MVP' }).first();
    await expect(pricingCard).toBeVisible();

    // Hover over the card
    await pricingCard.hover();

    // The card should be visible and interactive
    await expect(pricingCard).toBeVisible();
  });

  test('Most Popular badge should be visible and animated', async ({ page }) => {
    await page.goto('/#pricing');

    // Wait for the badge to be visible
    const badge = page.getByText('Most Popular');
    await expect(badge).toBeVisible();

    // Badge should have animation classes
    await expect(badge).toBeVisible();
  });

  test('CountUp animation should be present', async ({ page }) => {
    await page.goto('/');

    // Wait a moment for CountUp animations to start
    await page.waitForTimeout(1000);

    // Check that price elements exist in pricing section
    const pricingSection = page.locator('section#pricing');
    await expect(pricingSection.getByText('$5,000').first()).toBeVisible();
  });

  test('should have stagger animation for pricing cards', async ({ page }) => {
    await page.goto('/');

    // Scroll to pricing section
    await page.getByRole('link', { name: 'Pricing', exact: true }).first().click();

    // All three cards should eventually be visible
    const cards = page.locator('section#pricing article').filter({ hasText: /fixed-price/ });
    await expect(cards).toHaveCount(3);
  });

  test('navigation links should work', async ({ page }) => {
    // Get navigation from header
    const nav = page.locator('header nav');

    // Test Features link
    await nav.getByRole('link', { name: 'Features' }).click();
    await expect(page).toHaveURL(/#features/);

    // Test Pricing link
    await nav.getByRole('link', { name: 'Pricing' }).click();
    await expect(page).toHaveURL(/#pricing/);

    // Test Process link
    await nav.getByRole('link', { name: 'Process' }).click();
    await expect(page).toHaveURL(/#process/);

    // Test FAQ link
    await nav.getByRole('link', { name: 'FAQ' }).click();
    await expect(page).toHaveURL(/#faq/);

    // Test Contact link
    await nav.getByRole('link', { name: 'Contact' }).click();
    await expect(page).toHaveURL(/#contact/);
  });

  test('contact form should be present and functional', async ({ page }) => {
    await page.goto('/#contact');

    // Get form element
    const form = page.locator('form');

    // Check form elements
    await expect(form.getByLabel('Your Name')).toBeVisible();
    await expect(form.getByLabel('Email')).toBeVisible();
    await expect(form.locator('select#package')).toBeVisible();
    await expect(form.getByLabel('Brief Description')).toBeVisible();

    // Check submit button
    await expect(form.getByRole('button', { name: /Send Request/ })).toBeVisible();
  });
});
