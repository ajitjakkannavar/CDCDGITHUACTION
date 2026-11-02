
const { test, expect } = require('@playwright/test');

test('OrangeHRM Login Test', async ({ page }) => {

    // Navigate to login page
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

    // Enter username
    await page.locator('input[name="username"]').fill('Admin');

    // Enter password
    await page.locator('input[name="password"]').fill('admin123');

    // Click Login
    await page.locator('button[type="submit"]').click();

    // Verify successful login
    await expect(page).toHaveURL(/dashboard/);

    // Verify Dashboard is visible
    await expect(page.locator('.oxd-topbar-header-breadcrumb-module'))
        .toHaveText('Dashboard');

});
