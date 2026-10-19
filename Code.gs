// Paste the direct link to your uploaded icon between the quotes.
// Example (GitHub): https://raw.githubusercontent.com/YOUR-USERNAME/twisted-jeopardy/main/twisted-jeopardy-icon.png
var FAVICON_URL = 'https://PASTE-YOUR-IMAGE-LINK-HERE/twisted-jeopardy-icon.png';

function doGet() {
  return HtmlService.createHtmlOutputFromFile('Index')
    .setTitle('Twisted Jeopardy')
    .setFaviconUrl('https://raw.githubusercontent.com/seannymurrs/twisted-jeopardy/refs/heads/main/twisted-jeopardy.ico')
    .addMetaTag('viewport', 'width=device-width, initial-scale=1')
    .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
}