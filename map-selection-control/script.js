/**
 * This is example development environment code, not part of the JS Form Control itself
 * 
 * Comments below explain how this mocks how Decisions will interact with a JS control.
 */

$(document).ready(function() {
  // Decisions will call a class / functional constructor on the control...
  var map = new SelectableUsMap();
  // then pass the element it was added to as a jQuery element ref to
  // the initialize function:
  var element = $("#im-the-map");
  map.initialize(element);

  // Then Decisions will call setValue with the inputs provided, as
  // properties on a POJO. 
  map.setValue({
    selectedStates: ["VA", "GA"],
    disabledStates: ["TX"],
    debug: true
  });

  // simulate a subsequent setValue call from Decisions:
  setTimeout(() => {
    map.setValue({
      selectedStates: ["TX", "AK", "HI"],
      disabledStates: ["GA", "FL"],
      debug: true
    });
  }, 3000);
});
