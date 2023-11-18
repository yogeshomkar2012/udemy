"use strict";
function iife() {
  console.log("IIFE");
}
// iife();
(function iife() {
  console.log("IIFE");
})();
(() => {
  console.log("IIFE Arrow function");
})();
