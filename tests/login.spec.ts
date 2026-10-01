import { test, expect } from '@playwright/test';
import { loginPage } from "../pages/login.page";

let login: loginPage;

test.beforeEach(async ({ page }) => {
  login = new loginPage(page);
  await login.acesarSite();
});

test('login com sucesso', async ({ page }) => {
   await login.login("standard_user", "secret_sauce");
});

test('login com falha', async ({ page }) => { 
   await login.login("usuario_errado", "secret_sauce");
   await expect(login.alert).toHaveText("Epic sadface: Username and password do not match any user in this service");
});