var PreactDemo = (function() {
  var Component;
  var h;
  var render;

  function PreactDemo() {}

  PreactDemo.renderedElement = undefined;
  PreactDemo.host = undefined;

  PreactDemo.prototype.initialize = function(host, component) {
    // claim host element;
    this.host = host[0];

    // here virtualPath is a global variable in the Decisions client
    // usually something like
    $.when(
      $DP.ScriptLoader.LoadScript(
        virtualPath + "/scripts/FormControls/jsFiles/preact.js"
      )
    ).then(function() {
      Component = window.preact.Component;
      h = window.preact.h;
      render = window.preact.render;

      // Do initialization, etc. that depends on the third party library
      // For this example we are okay with some ES6.
      // save a reference to the App class for setValue to invoke.
      this.App = class App extends Component {
        componentDidMount() {
          this.setState({ message: "Hello!" });
        }
        render(props, state) {
          return h(
            "div",
            { id: "app" },
            h(Header, { message: state.message }),
            h(Main, props)
          );
        }
      };

      /** Components can just be pure functions */
      const Header = props => {
        return h(
          "header",
          null,
          h("h1", null, "Preact App"),
          props.message && h("h2", null, props.message)
        );
      };

      /** Instead of JSX, use: h(type, props, ...children) */
      class Main extends Component {
        render(props) {
          const values = props.values || [1, 2, 3, 4, 5];
          const items = values.map(item =>
            h("li", { id: item }, "Item " + item)
          );
          return h("main", null, h("ul", null, items));
        }
      }

      this.renderedElement = render(
        h(this.App),
        this.host,
        this.renderedElement
      );
    }.bind(this));
  };

  PreactDemo.prototype.setValue = function(data) {
    $.when(
      $DP.ScriptLoader.LoadScript(
        virtualPath + "/scripts/FormControls/jsFiles/preact.js"
      )
    ).then(function() {
      // because the JS control initializer might call setValue before the
      // library is loaded, add the check here as well.
      this.renderedElement = render(
        h(this.App, { values: data["selected values"] }),
        this.host,
        this.renderedElement
      );
    }.bind(this));
  };

  PreactDemo.prototype.getValue = function() {
    return;
  };
  PreactDemo.prototype.resize = function() {};

  return PreactDemo;
})();
