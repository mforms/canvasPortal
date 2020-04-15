({
  doInit: function(component, event, helper) {
    setTimeout(
      $A.getCallback(function() {
        component.set(
          "v.width",
          component
            .find("measurement")
            .getElement()
            .getBoundingClientRect().width + "px"
        );
        component.set(
          "v.height",
          component
            .find("measurement")
            .getElement()
            .getBoundingClientRect().height + "px"
        );
        component.set("v.ready", true);
      }),
      100
    );
  },
  payloadChange: function(component, event, helper) {
    const newValue = event.getParam("value");
    if (!!newValue) {
      component.set("v.parameters", JSON.stringify(newValue));
    }
  },
  canvasAppLoad: function(component, event, helper) {
    component.set("v.canvasLoading", false);
  }
});
