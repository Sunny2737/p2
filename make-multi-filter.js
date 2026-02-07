"use strict";

function MakeMultiFilter(originalArray) {
  let currentArray = originalArray;

  function arrayFilterer(filterCriteria, callback) {
    // If called with no arguments, return the current filtered array
    if (arguments.length === 0) {
      return currentArray;
    }

    // Apply filter if a function is provided
    if (typeof filterCriteria === "function") {
      currentArray = currentArray.filter(filterCriteria);
    }

    // Update currentFilter property
    arrayFilterer.currentFilter = currentArray;

    // If callback is provided, call it with this = originalArray
    if (typeof callback === "function") {
      callback.call(originalArray, currentArray);
    }

    // Return itself to allow chaining
    return arrayFilterer;
  }

  // Initial value
  arrayFilterer.currentFilter = currentArray;
  return arrayFilterer;
}

if (typeof module !== "undefined") {
  module.exports = MakeMultiFilter;
}
