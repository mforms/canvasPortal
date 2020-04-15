({
  doInit: function (component, event, helper) {
    component.set(
      "v.payload",
      JSON.stringify({
        path:
          "/hello/" +
          component.get("v.recordId") +
          "/" +
          component.get("v.sObjectName"),
      })
    );
    setTimeout(
      $A.getCallback(function () {
        component.set(
          "v.width",
          component.find("measurement").getElement().getBoundingClientRect()
            .width + "px"
        );
        component.set("v.ready", true);
      }),
      100
    );
  },
  canvasAppLoad: function (component, event, helper) {
    component.set("v.canvasLoading", false);
  },
  recordUpdated: function (component, event, helper) {
    const changeType = event.getParams().changeType;
    if (changeType === "CHANGED") {
      component.set("v.ready", false);
      component.set("v.canvasLoading", true);
      setTimeout(
        $A.getCallback(function () {
          component.set("v.ready", true);
        })
      );
    }
  },
});
