# Decisions JavaScript Form Controls

Decisions provides an API for creating custom form controls. This repository houses example(s).

1. [Select-able Map](./map-selection-control/README.md) - a rendering of the United States Map where users can select states.
1. [Tooltip Icon](./tool-tip-icon-control/README.md) - A simple HTML tooltip. It has inputs for "icon" character to show and tool tip text.

# How It Works

A JavaScript control must be a JavaScript file that exposes a named constructor,
and maintains the following API in order for Decisions to initialize the control,
get and set the control's data, and handle resize events.

```typescript
/**
 * Any Form Control should define these methods.
 */
interface JavaScriptFormControl {
    initialize(host: JQuery, component: any): void;
    resize(height: number, width: number): void;
    setValue(data: YourInputs): void;
    getValue(): YourOutputs;
}

/**
 * All **Inputs** added to the Form Control in Decisions will
 * be passed to `setValue` as  _key: value_ pairs on an Object.
 */
interface YourInputs {
    [inputName: string]: any;
}

/**
 * All **Outputs** added to the Form Control in Decisions will
 * be expected from `getValue` as _key: value_ pairs on an Object.
 */
interface YourOutputs {
    [outputName: string]: any;
}

```

There is a [basic example](https://documentation.decisions.com/creating-javascript-form-controls/) and an [advanced example](https://documentation.decisions.com/creating-javascript-form-controls-advanced/) at documentation.decisions.com.

# External Libraries or CSS
Decisions loads very few JavaScript libraries on its own (most notably jQuery) - thus you must handle
the loading of any other libraries.

# TODOs

1. Example Loading a 3rd Party Library with a module loader, (e.g. curl, esm-amd-loader, systemjs (require seems dead))
    - just rely on jQuery for this, since it's there?
1. Example with a bundled library (e.g. webpack/rollup)
