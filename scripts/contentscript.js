"use strict";chrome.extension.onRequest.addListener(function(e,t,n){"getSelection"===e.message&&n({data:window.getSelection().toString()})});
//# sourceMappingURL=contentscript.js.map
