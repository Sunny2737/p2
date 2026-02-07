"use strict";

function TemplateProcessor(template) {
  this.template = template;
}

TemplateProcessor.prototype.fillIn = function (dictionary) {
  return this.template.replace(/\{\{(\w+)\}\}/g, function (match, key) {
    return Object.prototype.hasOwnProperty.call(dictionary, key)
      ? String(dictionary[key])
      : "";
  });
};

if (typeof module !== "undefined") {
  module.exports = TemplateProcessor;
}
