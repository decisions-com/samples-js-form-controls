# Using a third party control

## Overview: 

Adding a JavaScript Control using a third party library.

## Steps:
In order to add a JavaScript library to use in Decisions, you need to add a “Script” Control

* Right click your `Folder > Create Form`
* Choose `JavaScript Control` tab in the **Create Form** dialog
* Select **Add Script** then **Create**

In the **Add JavaScript Control** dialog 
* Enter a name for your library
* Upload the library .js file

For this example, the script control name is “preact” even though the file uploaded is “preact.min.js.”

The name you provide the script will be the name your other JavaScript controls will use at runtime.


## Inside Your Control:

Then inside your JavaScript Control, hook into some exposed Decisions JavaScript to ensure your library is loaded.

```javascript
 PreactDemo.prototype.initialize = function(host, component) {
   // here “virtualPath” is a global variable in the Decisions client, exposing the root URL.
   $.when(
     $DP.ScriptLoader.LoadScript(
       virtualPath + "/scripts/FormControls/jsFiles/preact.js"
     )
   ).then(function() {
      // Do initialization that depends on the 3rd party library
   }.bind(this))
 }  
```

For safety, it’s best to do the same check inside the other Decisions JavaScript Control API methods. e.g.


```javascript
 PreactDemo.prototype.setValue = function(data) {
   $.when(
     $DP.ScriptLoader.LoadScript(
       virtualPath + "/scripts/FormControls/jsFiles/preact.js"
     )
   ).then(function() { /* Update Control */ }.bind(this));
 }
```

View [the example](./third-party-preact.js) for more context.
