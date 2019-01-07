# Selectable Map Form Control

## This form control:

1. Adds interactions to a map rendered in `svg`.
1. Handles input of selected and disabled states
1. Tracks user selection
1. Has a tool-tip on state hover.
1. Returns user selections

_To simply use this control, download and import the [.decObj file](ElementRegistration__[54f5f53dfdea4aecb47a10aced784987]__USMap.decObj)_

To learn from this as an example on how to develop a control, read on.

## Files in this example:

### The Control Itself: [map.js](./map.js)

This is the form control. The definitions for the methods Decisions uses to interact with the map, namely `setValue` , `getValue`, `initialize`, and `resize` begin on line 66.

### TestBed / Development Support Files
It's advisable to have an environment to develop and test a form control, prior to uploading it to Decisions. In this example we have:

1. index.html - a test-bed HTML file to test a form control in development
2. [script.js](./script.js) - test-bed JavaScript, which apes the calls Decisions will make to control. Doc comments explaining those calls.
3. style.css - provide some simple styles to the dev environment. This should closely emulate the expected Decisions CSS context were you expect to use your control.

## Tools At Play

1. Vanilla JS - of course. 
1. jQuery - Decisions loads jQuery by default, so this example uses jQuery.
1. Browser Sync - Browser Sync serves and syncs contents from a directory to browsers,
so it's a handy tool for quickly iterating content & testing across browsers.
