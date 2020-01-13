# Chart.js JS Control

Control wrapper around Chart.js consumes:

1. type - chart type
1. labels - chart category labels
1. datasets - JSON string values of dataset objects for your chart. (This can handle data objects, but at time of writing most verisons of Decisions do not pass complex data types to JS Controls.)

The control normalizes basic Chart.js "options" for each chart type. If the need to override the "options" value, there is also an "raw" input that supercedes the others, which shoud allow use of anything in the Chart.js API.

## Import the Example Project
Here is an example project, demonstrating with some constant inputs how to use the control:

[Chart.js Control Example-05012020-064552.zip](./Chart.js&#32;Control&#32;Example-05012020-064552.zip)

## Contributing to this Control 
### Requirements

This project relies on NodeJS 8.2+ for dev server and compilation.

### Language
This configuration uses `ts-loader` to transpile ES6+ JavaScript to ES5 JavaScript.

### Parts

1. index.js - creates a frame-app to test this in webpack dev server
1. value.js - A set of canned values to test the control against in the sandbox
1. js-control.js - the control file itself. This is ES6+ / TS boilerplate for a control.

### Commands

Below are the npm script commands available.

#### `npm run start`
Launch dev sandbox, in order to dial in your control prior to uploading it to Decisions.

#### `npm run build`
Compile your JS control and create a JS bundle you can upload. This has a hashed file-name to help with cache busting.

#### `npm run build-map`
Compile your JS control with heavy, but helpful inline source-maps. These will enable you to debug your control within Decisions, but add significant bloat to the JS file size. For debugging only.

