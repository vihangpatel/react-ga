export default function (successCallback, errorCallback) {
  // https://developers.google.com/analytics/devguides/collection/analyticsjs/
  /* eslint-disable */
  (function (i, s, o, g, r, p, q) {
    i['GoogleAnalyticsObject'] = r;
    i[r] = i[r] || function () {
      (i[r].q = i[r].q || []).push(arguments);
    }, i[r].l = 1 * new Date();
    var a = s.createElement(o),
      m = s.getElementsByTagName(o)[0];
    a.async = 1;
    a.src = g;
    a.onload = p;
    a.onerror = q;
    m.parentNode.insertBefore(a, m);
  })(window, document, 'script', 'https://www.google-analytics.com/analytics.js', 'ga', successCallback, errorCallback);
  /* eslint-enable */
}
