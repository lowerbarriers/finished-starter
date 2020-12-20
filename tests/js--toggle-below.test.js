describe('"Toggle below" JavaScript functionality', () => {
  beforeAll(async () => {
    await page.goto('http://localhost:4000/docs/content-technical/javascript/');
  });

  it('Toggle button says "Example" and exists on page.', async () => {
    await expect(page).toMatchElement('.js--toggle-below', {
      text: 'Example'
    });
  });
});
