class Dom {
    constructor(selector) {
      this.$el = typeof selector === "string" ? document.querySelector(selector): selector;
    }
  }

  new Dom("myClass");
  new Dom (document.createElement("div"));
  export default Dom;