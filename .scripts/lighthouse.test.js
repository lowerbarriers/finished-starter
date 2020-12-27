/**
 * @file
 * Test the site homepage using the Lighthouse suite.
 */

const chromeLauncher = require('chrome-launcher');
let config = require('lighthouse/lighthouse-core/config/lr-desktop-config.js');
const fs = require('fs');
const lighthouse = require('lighthouse');
const puppeteer = require('puppeteer');
const reportGenerator = require('lighthouse/lighthouse-core/report/report-generator');
const request = require('request');
const util = require('util');

const homeURL = 'http://localhost:4000';
const options = {
  logLevel: 'info',
  output: 'json',
  disableDeviceEmulation: true,
  defaultViewport: {
    width: 1200,
    height: 900
  },
  chromeFlags: ['--disable-mobile-emulation']
};

// Set up budgets from the budgets.json file.
let rawBudgets = fs.readFileSync('_data/budget.json');
config.settings.budgets = JSON.parse(rawBudgets);

async function lighthouseFromPuppeteer(url, options, config = null) {
  // Launch chrome using chrome-launcher
  const chrome = await chromeLauncher.launch(options);
  options.port = chrome.port;

  // Connect chrome-launcher to puppeteer
  const resp = await util.promisify(request)(`http://localhost:${options.port}/json/version`);
  const { webSocketDebuggerUrl } = JSON.parse(resp.body);
  const browser = await puppeteer.connect({ browserWSEndpoint: webSocketDebuggerUrl });

  // Run Lighthouse
  const { lhr } = await lighthouse(url, options, config);
  await browser.disconnect();
  await chrome.kill();

  const json = reportGenerator.generateReport(lhr, 'json');
  fs.writeFile('_data/lighthouse.json', json, function (err) {
    if (err) throw err;
  });
}

lighthouseFromPuppeteer(homeURL, options, config);
