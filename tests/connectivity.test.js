describe('Test suite connectivity', () => {
  beforeAll(async () => {
    await page.goto('http://localhost:4000');
  });

  it('Page title for finished starter', async () => {
    await expect(page.title()).resolves.toMatch('finished-starter | Home');
  });

  it('Home page contains H1 with "What you do, in clear words"', async () => {
    await expect(page).toMatchElement('h1', {
      text: 'What you do'
    });
  });
});
