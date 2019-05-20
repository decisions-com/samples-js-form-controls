// ES5 JS just in case

var InfoIcon = (function() {
    function InfoIcon() {}
  
    InfoIcon.prototype.initialize = function(host, component) {
      this.el = document.createElement("div");
      this.el.className = "infoIcon";
  
      this.host = host[0].appendChild(this.el);
    };
  
    InfoIcon.prototype.setValue = function(data) {
      this.el.innerText = data.character || "i";
      this.el.title = data.tooltip;
  
      if (!!data.appendStyle) {
        var style = document.createElement("style");
        style.innerText = [
          ".infoIcon {",
          "  border: solid 2px blue;",
          "  width: 1.5rem;",
          "  height: 1.5rem;",
          "  color: blue;",
          "  border-radius: 50%;",
          "  vertical-align: middle;",
          "  text-align: center;",
          "  line-height: 1.5rem;",
          "  font-size: 1.25rem;",
          "  cursor: pointer;",
          "}"
        ].join("");
        this.host.appendChild(style);
      }
      InfoIcon.prototype.getValue = function() {
        return;
      };
      InfoIcon.prototype.resize = function() {};
    };
  
    return InfoIcon;
  })();
  