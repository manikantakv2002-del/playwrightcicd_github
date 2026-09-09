import { test } from "@playwright/test";

test("login page", async ({ page }) => {
    await page.goto("http://orangehrm.qedgetech.com");
    await page.locator("#txtUsername").fill("Admin");
    await page.locator("#txtPassword").fill("Qedge123!@#");
    await page.locator("#btnLogin").click();
});