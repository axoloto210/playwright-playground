import {test, expect} from '@playwright/test'

test('home display test', async ({page})=>{
    await page.goto('http://localhost:3000')
    await expect(page.getByRole('heading')).toHaveText('heading 1')
    await expect(page.getByRole('button', {name: /plus 1/})).toBeVisible()

    // Check button
    // Check initial count display
    await expect(page.locator('p').nth(1)).toHaveText('0')

    // Click button and check updated count
    await page.getByRole('button', { name: /plus 1/ }).click()
    await expect(page.locator('p').nth(1)).toHaveText('1')
})