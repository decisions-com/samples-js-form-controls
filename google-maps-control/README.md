# Google Maps JS API Wrapper

A JS Control which loads [Google Maps](https://developers.google.com/maps/documentation/javascript/tutorial) into a form / flow run part.

## Inputs
1. key - your Google API Key
1. lat - latitude 
1. lng - longitude
1. zoom - zoom level
1. options - JSON string of a google maps API options object. This overrides the others, and
provides full control.


## Import the Example Project
Here is an example project, demonstrating with some constant inputs how to use the control:

[Google Maps Control Example](./Google&#32;Maps&#32;Control&#32;Example-05012020-112205.zip)

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

