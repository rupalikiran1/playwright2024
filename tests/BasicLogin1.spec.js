const { test, expect } = require('@playwright/test')
const exp = require('constants')

test('Verify login functionality with valid credentails',async({page})=>{
//step 1 ==> Navigate to the URL
await page.goto('https://www.saucedemo.com/v1/')

// step 2 ==> Enter UserName
await page.locator('#user-name').fill('standard_user')

//step 3 -->Enter Password
await page.locator('[data-test="password"]').fill('secret_sauce')
//step 4 ==>click on login button
await page.locator('input[id="login-button"]').click()

//step 5 ==>Validation/Assertions
 await expect(page).toHaveURL('https://www.saucedemo.com/v1/inventory.html')
 await expect(page).toHaveTitle('Swag Labs')
})