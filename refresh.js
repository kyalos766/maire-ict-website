// Redirect to home page on refresh only (keeps normal navigation intact)
(function () {
  var nav = (window.performance && window.performance.getEntriesByType && window.performance.getEntriesByType("navigation")[0]) || {};
  if (nav.type === "reload") {
    window.location.replace("index.html");
  }
})();