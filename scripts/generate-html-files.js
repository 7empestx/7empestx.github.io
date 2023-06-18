// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: MIT-0
const path = require('path');
const { writeFileAsync } = require('./utils/fsAsync');
const { runAsyncTask } = require('./utils/runAsyncTask');
const { outputPath } = require('./config');
const examplesList = require('../examples-list');

function getPageContent(pageName, { title }) {
  return `<!DOCTYPE html>
<html lang="en">
  <head>
    <title>Cloudscape Demos - ${title}</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
    <link href="/vendor.css" rel="stylesheet">
    <link href="/${pageName}.css" rel="stylesheet">
  </head>
  <body id="b">
    <header class="custom-main-header" id="h">
      <ul class="menu-list awsui-context-top-navigation">
        <li class="title"><a href="/">Cloudscape Demos</a></li>
      </ul>
    </header>
    <div id="app"></div>
    <script src="/libs/fake-server.js"></script>
    <script src="/vendor.js"></script>
    <script src="/${pageName}.js"></script>
  </body>
</html>
`;
}


// New function to generate content for the index.html file
function getIndexPageContent(defaultPage) {
  return `
<!DOCTYPE html>
<html>
<head>
    <meta http-equiv="Refresh" content="0; url=${defaultPage}.html" />
</head>
<body>
</body>
</html>
`;
}

function generateHtmlFile(page) {
  const pageName = page.path.split('/').pop();
  const content = getPageContent(pageName, page);
  const filePath = path.join(outputPath, `${pageName}.html`);
  return writeFileAsync(filePath, content);
}

async function generateIndexHtmlFile(defaultPage) {
  const content = getIndexPageContent(defaultPage);
  const filePath = path.join(outputPath, 'index.html');
  await writeFileAsync(filePath, content);
}

const generateHtmlFiles = async () => {
  const promises = [];
  for (const page of examplesList) {
    promises.push(generateHtmlFile(page));

    // If this is the default page, also generate it as index.html
    if (page.path === 'configurable-dashboard') {  // Replace 'cards' with your chosen default page
      const pageName = 'index';  // Set the page name to 'index'
      const content = getPageContent(page.path.split('/').pop(), page);  // Use original page name for CSS and JS files
      const filePath = path.join(outputPath, `${pageName}.html`);
      promises.push(writeFileAsync(filePath, content));
    }
  }

  return Promise.all(promises);
};

runAsyncTask(generateHtmlFiles);
