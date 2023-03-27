// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"2ntYF":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "04c3a0646690e0da";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, globalThis, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets, assetsToDispose, assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/"); // Web extension context
    var extCtx = typeof chrome === "undefined" ? typeof browser === "undefined" ? null : browser : chrome; // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    } // $FlowFixMe
    ws.onmessage = async function(event) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH); // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear(); // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets); // Dispose all old assets.
                let processedAssets = {} /*: {|[string]: boolean|} */ ;
                for(let i = 0; i < assetsToDispose.length; i++){
                    let id = assetsToDispose[i][1];
                    if (!processedAssets[id]) {
                        hmrDispose(assetsToDispose[i][0], id);
                        processedAssets[id] = true;
                    }
                } // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] ✨ Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          🚨 ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>📝 <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", link.getAttribute("href").split("?")[0] + "?" + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension bugfix for Chromium
                    // https://bugs.chromium.org/p/chromium/issues/detail?id=1255412#c12
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3) {
                        if (typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                            extCtx.runtime.reload();
                            return;
                        }
                        asset.url = extCtx.runtime.getURL("/__parcel_hmr_proxy__?url=" + encodeURIComponent(asset.url + "?t=" + Date.now()));
                        return hmrDownload(asset);
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
             // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id]; // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
     // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDispose(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle, id) {
    // Execute the module.
    bundle(id); // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) {
            assetsToAlsoAccept.forEach(function(a) {
                hmrDispose(a[0], a[1]);
            }); // $FlowFixMe[method-unbinding]
            assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
        }
    });
}

},{}],"2OpUZ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _redom = require("redom");
var _cleaveJs = require("cleave.js");
var _cleaveJsDefault = parcelHelpers.interopDefault(_cleaveJs);
console.log("работаем пацаны!");
createSpan = (data)=>{
    const span = (0, _redom.el)("span", {
        className: `${data.class}`
    }, `${data.value}`);
    return span;
};
const createCreditCart = ()=>{
    const creditCard = (0, _redom.el)("div", {
        className: "credit-card"
    });
    const cardPersonal = (0, _redom.el)("div", {
        className: "card__personal"
    });
    (0, _redom.setChildren)(cardPersonal, [
        createSpan({
            class: "card__name",
            value: "____ _____"
        }),
        createSpan({
            class: "card__date",
            value: "**/**"
        })
    ]);
    (0, _redom.setChildren)(creditCard, [
        createSpan({
            class: "card__number",
            value: "xxxx xxxx xxxx xxxx"
        }),
        cardPersonal
    ]);
    return creditCard;
};
const createInputWrapper = ({ classNameDiv , classNameLabel , valueLabel , typeInput =null , classNameInput , idInput =null  })=>{
    const inputWrapper = (0, _redom.el)("div", {
        className: `form__input-wrap ${classNameDiv}`
    });
    (0, _redom.setChildren)(inputWrapper, [
        (0, _redom.el)("label", `${valueLabel}`, {
            className: `form__label ${classNameLabel}`
        }),
        (0, _redom.el)("input", {
            className: `input ${classNameInput}`,
            type: `${typeInput}`,
            id: `${idInput}`
        })
    ]);
    if (inputWrapper.querySelector(".input").getAttribute("id") === "null") inputWrapper.querySelector(".input").removeAttribute("id");
    if (inputWrapper.querySelector(".input").getAttribute("type") === "null") inputWrapper.querySelector(".input").removeAttribute("type");
    return inputWrapper;
};
const formShow = (name, number, date, cvv, form)=>{
    form.addEventListener("input", (e)=>{
        target = e.target;
        if (target === name) {
            name.value = name.value.replace(/[\d_+-@`!?#$^*&%А-Яа-яё]/g, "");
            document.querySelector(".card__name").innerHTML = name.value.toUpperCase();
        }
        if (target === number) {
            const cleave = new (0, _cleaveJsDefault.default)(number, {
                creditCard: true
            });
            document.querySelector(".card__number").innerHTML = number.value;
        }
        if (target === date) {
            const cleave = new (0, _cleaveJsDefault.default)(date, {
                date: true,
                datePattern: [
                    "m",
                    "y"
                ]
            });
            document.querySelector(".card__date").innerHTML = date.value;
        }
        if (target === cvv) {
            var cleave = new (0, _cleaveJsDefault.default)(cvv, {
                delimiter: "",
                blocks: [
                    1,
                    1,
                    1
                ]
            });
            cvv.value = cvv.value.replace(/[\D]/g, "");
        }
    });
    form.addEventListener("submit", (e)=>{
        e.preventDefault();
        form.reset();
    });
};
const createForm = ()=>{
    const wrapper = (0, _redom.el)("div", {
        className: "wrapper"
    });
    (0, _redom.setChildren)(wrapper, (0, _redom.el)("div", {
        className: "card"
    }));
    const card = wrapper.querySelector(".card");
    const formCard = (0, _redom.el)("form", {
        className: "form",
        id: "form",
        action: "#"
    });
    (0, _redom.setChildren)(formCard, [
        createInputWrapper({
            classNameDiv: "form__input-wrap_holder",
            classNameLabel: "form__holder-label",
            valueLabel: "Card Holder",
            typeInput: "text",
            classNameInput: "input__holder"
        }),
        createInputWrapper({
            classNameDiv: "form__input-wrap_number",
            classNameLabel: "form__number-label",
            valueLabel: "Card Number",
            typeInput: "",
            classNameInput: "input__number",
            idInput: "cardNumber"
        }),
        createInputWrapper({
            classNameDiv: "form__input-wrap_date",
            classNameLabel: "form__date-label",
            valueLabel: "Card Expiry",
            typeInput: "text",
            classNameInput: "input__date"
        }),
        createInputWrapper({
            classNameDiv: "form__input-wrap_cvv",
            classNameLabel: "form__cvv-label",
            valueLabel: "CVV",
            typeInput: "text",
            classNameInput: "input__cvv"
        }),
        (0, _redom.el)("button", {
            className: "form__button"
        }, "CHECK OUT")
    ]);
    (0, _redom.setChildren)(card, [
        (0, _redom.el)("p", {
            className: "secure"
        }, "Secure Checkout"),
        createCreditCart(),
        formCard
    ]);
    (0, _redom.setChildren)(wrapper, card);
    (0, _redom.setChildren)(document.body, wrapper);
    formShow(formCard.querySelector(".form__input-wrap_holder .input"), formCard.querySelector(".form__input-wrap_number .input"), formCard.querySelector(".form__input-wrap_date .input"), formCard.querySelector(".form__input-wrap_cvv .input"), formCard);
};
createForm();

},{"redom":"iahd6","cleave.js":"dYrzx","@parcel/transformer-js/src/esmodule-helpers.js":"8jubI"}],"iahd6":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "List", ()=>List);
parcelHelpers.export(exports, "ListPool", ()=>ListPool);
parcelHelpers.export(exports, "Place", ()=>Place);
parcelHelpers.export(exports, "Router", ()=>Router);
parcelHelpers.export(exports, "el", ()=>el);
parcelHelpers.export(exports, "h", ()=>h);
parcelHelpers.export(exports, "html", ()=>html);
parcelHelpers.export(exports, "list", ()=>list);
parcelHelpers.export(exports, "listPool", ()=>listPool);
parcelHelpers.export(exports, "mount", ()=>mount);
parcelHelpers.export(exports, "place", ()=>place);
parcelHelpers.export(exports, "router", ()=>router);
parcelHelpers.export(exports, "s", ()=>s);
parcelHelpers.export(exports, "setAttr", ()=>setAttr);
parcelHelpers.export(exports, "setChildren", ()=>setChildren);
parcelHelpers.export(exports, "setData", ()=>setData);
parcelHelpers.export(exports, "setStyle", ()=>setStyle);
parcelHelpers.export(exports, "setXlink", ()=>setXlink);
parcelHelpers.export(exports, "svg", ()=>svg);
parcelHelpers.export(exports, "text", ()=>text);
parcelHelpers.export(exports, "unmount", ()=>unmount);
function createElement(query, ns) {
    var ref = parse(query);
    var tag = ref.tag;
    var id = ref.id;
    var className = ref.className;
    var element = ns ? document.createElementNS(ns, tag) : document.createElement(tag);
    if (id) element.id = id;
    if (className) {
        if (ns) element.setAttribute("class", className);
        else element.className = className;
    }
    return element;
}
function parse(query) {
    var chunks = query.split(/([.#])/);
    var className = "";
    var id = "";
    for(var i = 1; i < chunks.length; i += 2)switch(chunks[i]){
        case ".":
            className += " " + chunks[i + 1];
            break;
        case "#":
            id = chunks[i + 1];
    }
    return {
        className: className.trim(),
        tag: chunks[0] || "div",
        id: id
    };
}
function unmount(parent, child) {
    var parentEl = getEl(parent);
    var childEl = getEl(child);
    if (child === childEl && childEl.__redom_view) // try to look up the view if not provided
    child = childEl.__redom_view;
    if (childEl.parentNode) {
        doUnmount(child, childEl, parentEl);
        parentEl.removeChild(childEl);
    }
    return child;
}
function doUnmount(child, childEl, parentEl) {
    var hooks = childEl.__redom_lifecycle;
    if (hooksAreEmpty(hooks)) {
        childEl.__redom_lifecycle = {};
        return;
    }
    var traverse = parentEl;
    if (childEl.__redom_mounted) trigger(childEl, "onunmount");
    while(traverse){
        var parentHooks = traverse.__redom_lifecycle || {};
        for(var hook in hooks)if (parentHooks[hook]) parentHooks[hook] -= hooks[hook];
        if (hooksAreEmpty(parentHooks)) traverse.__redom_lifecycle = null;
        traverse = traverse.parentNode;
    }
}
function hooksAreEmpty(hooks) {
    if (hooks == null) return true;
    for(var key in hooks){
        if (hooks[key]) return false;
    }
    return true;
}
/* global Node, ShadowRoot */ var hookNames = [
    "onmount",
    "onremount",
    "onunmount"
];
var shadowRootAvailable = typeof window !== "undefined" && "ShadowRoot" in window;
function mount(parent, child, before, replace) {
    var parentEl = getEl(parent);
    var childEl = getEl(child);
    if (child === childEl && childEl.__redom_view) // try to look up the view if not provided
    child = childEl.__redom_view;
    if (child !== childEl) childEl.__redom_view = child;
    var wasMounted = childEl.__redom_mounted;
    var oldParent = childEl.parentNode;
    if (wasMounted && oldParent !== parentEl) doUnmount(child, childEl, oldParent);
    if (before != null) {
        if (replace) {
            var beforeEl = getEl(before);
            if (beforeEl.__redom_mounted) trigger(beforeEl, "onunmount");
            parentEl.replaceChild(childEl, beforeEl);
        } else parentEl.insertBefore(childEl, getEl(before));
    } else parentEl.appendChild(childEl);
    doMount(child, childEl, parentEl, oldParent);
    return child;
}
function trigger(el, eventName) {
    if (eventName === "onmount" || eventName === "onremount") el.__redom_mounted = true;
    else if (eventName === "onunmount") el.__redom_mounted = false;
    var hooks = el.__redom_lifecycle;
    if (!hooks) return;
    var view = el.__redom_view;
    var hookCount = 0;
    view && view[eventName] && view[eventName]();
    for(var hook in hooks)if (hook) hookCount++;
    if (hookCount) {
        var traverse = el.firstChild;
        while(traverse){
            var next = traverse.nextSibling;
            trigger(traverse, eventName);
            traverse = next;
        }
    }
}
function doMount(child, childEl, parentEl, oldParent) {
    var hooks = childEl.__redom_lifecycle || (childEl.__redom_lifecycle = {});
    var remount = parentEl === oldParent;
    var hooksFound = false;
    for(var i = 0, list = hookNames; i < list.length; i += 1){
        var hookName = list[i];
        if (!remount) {
            if (child !== childEl) {
                if (hookName in child) hooks[hookName] = (hooks[hookName] || 0) + 1;
            }
        }
        if (hooks[hookName]) hooksFound = true;
    }
    if (!hooksFound) {
        childEl.__redom_lifecycle = {};
        return;
    }
    var traverse = parentEl;
    var triggered = false;
    if (remount || traverse && traverse.__redom_mounted) {
        trigger(childEl, remount ? "onremount" : "onmount");
        triggered = true;
    }
    while(traverse){
        var parent = traverse.parentNode;
        var parentHooks = traverse.__redom_lifecycle || (traverse.__redom_lifecycle = {});
        for(var hook in hooks)parentHooks[hook] = (parentHooks[hook] || 0) + hooks[hook];
        if (triggered) break;
        else {
            if (traverse.nodeType === Node.DOCUMENT_NODE || shadowRootAvailable && traverse instanceof ShadowRoot || parent && parent.__redom_mounted) {
                trigger(traverse, remount ? "onremount" : "onmount");
                triggered = true;
            }
            traverse = parent;
        }
    }
}
function setStyle(view, arg1, arg2) {
    var el = getEl(view);
    if (typeof arg1 === "object") for(var key in arg1)setStyleValue(el, key, arg1[key]);
    else setStyleValue(el, arg1, arg2);
}
function setStyleValue(el, key, value) {
    el.style[key] = value == null ? "" : value;
}
/* global SVGElement */ var xlinkns = "http://www.w3.org/1999/xlink";
function setAttr(view, arg1, arg2) {
    setAttrInternal(view, arg1, arg2);
}
function setAttrInternal(view, arg1, arg2, initial) {
    var el = getEl(view);
    var isObj = typeof arg1 === "object";
    if (isObj) for(var key in arg1)setAttrInternal(el, key, arg1[key], initial);
    else {
        var isSVG = el instanceof SVGElement;
        var isFunc = typeof arg2 === "function";
        if (arg1 === "style" && typeof arg2 === "object") setStyle(el, arg2);
        else if (isSVG && isFunc) el[arg1] = arg2;
        else if (arg1 === "dataset") setData(el, arg2);
        else if (!isSVG && (arg1 in el || isFunc) && arg1 !== "list") el[arg1] = arg2;
        else {
            if (isSVG && arg1 === "xlink") {
                setXlink(el, arg2);
                return;
            }
            if (initial && arg1 === "class") arg2 = el.className + " " + arg2;
            if (arg2 == null) el.removeAttribute(arg1);
            else el.setAttribute(arg1, arg2);
        }
    }
}
function setXlink(el, arg1, arg2) {
    if (typeof arg1 === "object") for(var key in arg1)setXlink(el, key, arg1[key]);
    else if (arg2 != null) el.setAttributeNS(xlinkns, arg1, arg2);
    else el.removeAttributeNS(xlinkns, arg1, arg2);
}
function setData(el, arg1, arg2) {
    if (typeof arg1 === "object") for(var key in arg1)setData(el, key, arg1[key]);
    else if (arg2 != null) el.dataset[arg1] = arg2;
    else delete el.dataset[arg1];
}
function text(str) {
    return document.createTextNode(str != null ? str : "");
}
function parseArgumentsInternal(element, args, initial) {
    for(var i = 0, list = args; i < list.length; i += 1){
        var arg = list[i];
        if (arg !== 0 && !arg) continue;
        var type = typeof arg;
        if (type === "function") arg(element);
        else if (type === "string" || type === "number") element.appendChild(text(arg));
        else if (isNode(getEl(arg))) mount(element, arg);
        else if (arg.length) parseArgumentsInternal(element, arg, initial);
        else if (type === "object") setAttrInternal(element, arg, null, initial);
    }
}
function ensureEl(parent) {
    return typeof parent === "string" ? html(parent) : getEl(parent);
}
function getEl(parent) {
    return parent.nodeType && parent || !parent.el && parent || getEl(parent.el);
}
function isNode(arg) {
    return arg && arg.nodeType;
}
function html(query) {
    var args = [], len = arguments.length - 1;
    while(len-- > 0)args[len] = arguments[len + 1];
    var element;
    var type = typeof query;
    if (type === "string") element = createElement(query);
    else if (type === "function") {
        var Query = query;
        element = new (Function.prototype.bind.apply(Query, [
            null
        ].concat(args)));
    } else throw new Error("At least one argument required");
    parseArgumentsInternal(getEl(element), args, true);
    return element;
}
var el = html;
var h = html;
html.extend = function extendHtml() {
    var args = [], len = arguments.length;
    while(len--)args[len] = arguments[len];
    return html.bind.apply(html, [
        this
    ].concat(args));
};
function setChildren(parent) {
    var children = [], len = arguments.length - 1;
    while(len-- > 0)children[len] = arguments[len + 1];
    var parentEl = getEl(parent);
    var current = traverse(parent, children, parentEl.firstChild);
    while(current){
        var next = current.nextSibling;
        unmount(parent, current);
        current = next;
    }
}
function traverse(parent, children, _current) {
    var current = _current;
    var childEls = Array(children.length);
    for(var i = 0; i < children.length; i++)childEls[i] = children[i] && getEl(children[i]);
    for(var i$1 = 0; i$1 < children.length; i$1++){
        var child = children[i$1];
        if (!child) continue;
        var childEl = childEls[i$1];
        if (childEl === current) {
            current = current.nextSibling;
            continue;
        }
        if (isNode(childEl)) {
            var next = current && current.nextSibling;
            var exists = child.__redom_index != null;
            var replace = exists && next === childEls[i$1 + 1];
            mount(parent, child, current, replace);
            if (replace) current = next;
            continue;
        }
        if (child.length != null) current = traverse(parent, child, current);
    }
    return current;
}
function listPool(View, key, initData) {
    return new ListPool(View, key, initData);
}
var ListPool = function ListPool(View, key, initData) {
    this.View = View;
    this.initData = initData;
    this.oldLookup = {};
    this.lookup = {};
    this.oldViews = [];
    this.views = [];
    if (key != null) this.key = typeof key === "function" ? key : propKey(key);
};
ListPool.prototype.update = function update(data, context) {
    var ref = this;
    var View = ref.View;
    var key = ref.key;
    var initData = ref.initData;
    var keySet = key != null;
    var oldLookup = this.lookup;
    var newLookup = {};
    var newViews = Array(data.length);
    var oldViews = this.views;
    for(var i = 0; i < data.length; i++){
        var item = data[i];
        var view = void 0;
        if (keySet) {
            var id = key(item);
            view = oldLookup[id] || new View(initData, item, i, data);
            newLookup[id] = view;
            view.__redom_id = id;
        } else view = oldViews[i] || new View(initData, item, i, data);
        view.update && view.update(item, i, data, context);
        var el = getEl(view.el);
        el.__redom_view = view;
        newViews[i] = view;
    }
    this.oldViews = oldViews;
    this.views = newViews;
    this.oldLookup = oldLookup;
    this.lookup = newLookup;
};
function propKey(key) {
    return function(item) {
        return item[key];
    };
}
function list(parent, View, key, initData) {
    return new List(parent, View, key, initData);
}
var List = function List(parent, View, key, initData) {
    this.View = View;
    this.initData = initData;
    this.views = [];
    this.pool = new ListPool(View, key, initData);
    this.el = ensureEl(parent);
    this.keySet = key != null;
};
List.prototype.update = function update(data, context) {
    if (data === void 0) data = [];
    var ref = this;
    var keySet = ref.keySet;
    var oldViews = this.views;
    this.pool.update(data, context);
    var ref$1 = this.pool;
    var views = ref$1.views;
    var lookup = ref$1.lookup;
    if (keySet) for(var i = 0; i < oldViews.length; i++){
        var oldView = oldViews[i];
        var id = oldView.__redom_id;
        if (lookup[id] == null) {
            oldView.__redom_index = null;
            unmount(this, oldView);
        }
    }
    for(var i$1 = 0; i$1 < views.length; i$1++){
        var view = views[i$1];
        view.__redom_index = i$1;
    }
    setChildren(this, views);
    if (keySet) this.lookup = lookup;
    this.views = views;
};
List.extend = function extendList(parent, View, key, initData) {
    return List.bind(List, parent, View, key, initData);
};
list.extend = List.extend;
/* global Node */ function place(View, initData) {
    return new Place(View, initData);
}
var Place = function Place(View, initData) {
    this.el = text("");
    this.visible = false;
    this.view = null;
    this._placeholder = this.el;
    if (View instanceof Node) this._el = View;
    else if (View.el instanceof Node) {
        this._el = View;
        this.view = View;
    } else this._View = View;
    this._initData = initData;
};
Place.prototype.update = function update(visible, data) {
    var placeholder = this._placeholder;
    var parentNode = this.el.parentNode;
    if (visible) {
        if (!this.visible) {
            if (this._el) {
                mount(parentNode, this._el, placeholder);
                unmount(parentNode, placeholder);
                this.el = getEl(this._el);
                this.visible = visible;
            } else {
                var View = this._View;
                var view = new View(this._initData);
                this.el = getEl(view);
                this.view = view;
                mount(parentNode, view, placeholder);
                unmount(parentNode, placeholder);
            }
        }
        this.view && this.view.update && this.view.update(data);
    } else if (this.visible) {
        if (this._el) {
            mount(parentNode, placeholder, this._el);
            unmount(parentNode, this._el);
            this.el = placeholder;
            this.visible = visible;
            return;
        }
        mount(parentNode, placeholder, this.view);
        unmount(parentNode, this.view);
        this.el = placeholder;
        this.view = null;
    }
    this.visible = visible;
};
/* global Node */ function router(parent, Views, initData) {
    return new Router(parent, Views, initData);
}
var Router = function Router(parent, Views, initData) {
    this.el = ensureEl(parent);
    this.Views = Views;
    this.initData = initData;
};
Router.prototype.update = function update(route, data) {
    if (route !== this.route) {
        var Views = this.Views;
        var View = Views[route];
        this.route = route;
        if (View && (View instanceof Node || View.el instanceof Node)) this.view = View;
        else this.view = View && new View(this.initData, data);
        setChildren(this.el, [
            this.view
        ]);
    }
    this.view && this.view.update && this.view.update(data, route);
};
var ns = "http://www.w3.org/2000/svg";
function svg(query) {
    var args = [], len = arguments.length - 1;
    while(len-- > 0)args[len] = arguments[len + 1];
    var element;
    var type = typeof query;
    if (type === "string") element = createElement(query, ns);
    else if (type === "function") {
        var Query = query;
        element = new (Function.prototype.bind.apply(Query, [
            null
        ].concat(args)));
    } else throw new Error("At least one argument required");
    parseArgumentsInternal(getEl(element), args, true);
    return element;
}
var s = svg;
svg.extend = function extendSvg() {
    var args = [], len = arguments.length;
    while(len--)args[len] = arguments[len];
    return svg.bind.apply(svg, [
        this
    ].concat(args));
};
svg.ns = ns;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"8jubI"}],"8jubI":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"dYrzx":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var global = arguments[3];
var commonjsGlobal = typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};
var NumeralFormatter = function(numeralDecimalMark, numeralIntegerScale, numeralDecimalScale, numeralThousandsGroupStyle, numeralPositiveOnly, stripLeadingZeroes, prefix, signBeforePrefix, tailPrefix, delimiter) {
    var owner = this;
    owner.numeralDecimalMark = numeralDecimalMark || ".";
    owner.numeralIntegerScale = numeralIntegerScale > 0 ? numeralIntegerScale : 0;
    owner.numeralDecimalScale = numeralDecimalScale >= 0 ? numeralDecimalScale : 2;
    owner.numeralThousandsGroupStyle = numeralThousandsGroupStyle || NumeralFormatter.groupStyle.thousand;
    owner.numeralPositiveOnly = !!numeralPositiveOnly;
    owner.stripLeadingZeroes = stripLeadingZeroes !== false;
    owner.prefix = prefix || prefix === "" ? prefix : "";
    owner.signBeforePrefix = !!signBeforePrefix;
    owner.tailPrefix = !!tailPrefix;
    owner.delimiter = delimiter || delimiter === "" ? delimiter : ",";
    owner.delimiterRE = delimiter ? new RegExp("\\" + delimiter, "g") : "";
};
NumeralFormatter.groupStyle = {
    thousand: "thousand",
    lakh: "lakh",
    wan: "wan",
    none: "none"
};
NumeralFormatter.prototype = {
    getRawValue: function(value) {
        return value.replace(this.delimiterRE, "").replace(this.numeralDecimalMark, ".");
    },
    format: function(value) {
        var owner = this, parts, partSign, partSignAndPrefix, partInteger, partDecimal = "";
        // strip alphabet letters
        value = value.replace(/[A-Za-z]/g, "")// replace the first decimal mark with reserved placeholder
        .replace(owner.numeralDecimalMark, "M")// strip non numeric letters except minus and "M"
        // this is to ensure prefix has been stripped
        .replace(/[^\dM-]/g, "")// replace the leading minus with reserved placeholder
        .replace(/^\-/, "N")// strip the other minus sign (if present)
        .replace(/\-/g, "")// replace the minus sign (if present)
        .replace("N", owner.numeralPositiveOnly ? "" : "-")// replace decimal mark
        .replace("M", owner.numeralDecimalMark);
        // strip any leading zeros
        if (owner.stripLeadingZeroes) value = value.replace(/^(-)?0+(?=\d)/, "$1");
        partSign = value.slice(0, 1) === "-" ? "-" : "";
        if (typeof owner.prefix != "undefined") {
            if (owner.signBeforePrefix) partSignAndPrefix = partSign + owner.prefix;
            else partSignAndPrefix = owner.prefix + partSign;
        } else partSignAndPrefix = partSign;
        partInteger = value;
        if (value.indexOf(owner.numeralDecimalMark) >= 0) {
            parts = value.split(owner.numeralDecimalMark);
            partInteger = parts[0];
            partDecimal = owner.numeralDecimalMark + parts[1].slice(0, owner.numeralDecimalScale);
        }
        if (partSign === "-") partInteger = partInteger.slice(1);
        if (owner.numeralIntegerScale > 0) partInteger = partInteger.slice(0, owner.numeralIntegerScale);
        switch(owner.numeralThousandsGroupStyle){
            case NumeralFormatter.groupStyle.lakh:
                partInteger = partInteger.replace(/(\d)(?=(\d\d)+\d$)/g, "$1" + owner.delimiter);
                break;
            case NumeralFormatter.groupStyle.wan:
                partInteger = partInteger.replace(/(\d)(?=(\d{4})+$)/g, "$1" + owner.delimiter);
                break;
            case NumeralFormatter.groupStyle.thousand:
                partInteger = partInteger.replace(/(\d)(?=(\d{3})+$)/g, "$1" + owner.delimiter);
                break;
        }
        if (owner.tailPrefix) return partSign + partInteger.toString() + (owner.numeralDecimalScale > 0 ? partDecimal.toString() : "") + owner.prefix;
        return partSignAndPrefix + partInteger.toString() + (owner.numeralDecimalScale > 0 ? partDecimal.toString() : "");
    }
};
var NumeralFormatter_1 = NumeralFormatter;
var DateFormatter = function(datePattern, dateMin, dateMax) {
    var owner = this;
    owner.date = [];
    owner.blocks = [];
    owner.datePattern = datePattern;
    owner.dateMin = dateMin.split("-").reverse().map(function(x) {
        return parseInt(x, 10);
    });
    if (owner.dateMin.length === 2) owner.dateMin.unshift(0);
    owner.dateMax = dateMax.split("-").reverse().map(function(x) {
        return parseInt(x, 10);
    });
    if (owner.dateMax.length === 2) owner.dateMax.unshift(0);
    owner.initBlocks();
};
DateFormatter.prototype = {
    initBlocks: function() {
        var owner = this;
        owner.datePattern.forEach(function(value) {
            if (value === "Y") owner.blocks.push(4);
            else owner.blocks.push(2);
        });
    },
    getISOFormatDate: function() {
        var owner = this, date = owner.date;
        return date[2] ? date[2] + "-" + owner.addLeadingZero(date[1]) + "-" + owner.addLeadingZero(date[0]) : "";
    },
    getBlocks: function() {
        return this.blocks;
    },
    getValidatedDate: function(value) {
        var owner = this, result = "";
        value = value.replace(/[^\d]/g, "");
        owner.blocks.forEach(function(length, index) {
            if (value.length > 0) {
                var sub = value.slice(0, length), sub0 = sub.slice(0, 1), rest = value.slice(length);
                switch(owner.datePattern[index]){
                    case "d":
                        if (sub === "00") sub = "01";
                        else if (parseInt(sub0, 10) > 3) sub = "0" + sub0;
                        else if (parseInt(sub, 10) > 31) sub = "31";
                        break;
                    case "m":
                        if (sub === "00") sub = "01";
                        else if (parseInt(sub0, 10) > 1) sub = "0" + sub0;
                        else if (parseInt(sub, 10) > 12) sub = "12";
                        break;
                }
                result += sub;
                // update remaining string
                value = rest;
            }
        });
        return this.getFixedDateString(result);
    },
    getFixedDateString: function(value) {
        var owner = this, datePattern = owner.datePattern, date = [], dayIndex = 0, monthIndex = 0, yearIndex = 0, dayStartIndex = 0, monthStartIndex = 0, yearStartIndex = 0, day, month, year, fullYearDone = false;
        // mm-dd || dd-mm
        if (value.length === 4 && datePattern[0].toLowerCase() !== "y" && datePattern[1].toLowerCase() !== "y") {
            dayStartIndex = datePattern[0] === "d" ? 0 : 2;
            monthStartIndex = 2 - dayStartIndex;
            day = parseInt(value.slice(dayStartIndex, dayStartIndex + 2), 10);
            month = parseInt(value.slice(monthStartIndex, monthStartIndex + 2), 10);
            date = this.getFixedDate(day, month, 0);
        }
        // yyyy-mm-dd || yyyy-dd-mm || mm-dd-yyyy || dd-mm-yyyy || dd-yyyy-mm || mm-yyyy-dd
        if (value.length === 8) {
            datePattern.forEach(function(type, index) {
                switch(type){
                    case "d":
                        dayIndex = index;
                        break;
                    case "m":
                        monthIndex = index;
                        break;
                    default:
                        yearIndex = index;
                        break;
                }
            });
            yearStartIndex = yearIndex * 2;
            dayStartIndex = dayIndex <= yearIndex ? dayIndex * 2 : dayIndex * 2 + 2;
            monthStartIndex = monthIndex <= yearIndex ? monthIndex * 2 : monthIndex * 2 + 2;
            day = parseInt(value.slice(dayStartIndex, dayStartIndex + 2), 10);
            month = parseInt(value.slice(monthStartIndex, monthStartIndex + 2), 10);
            year = parseInt(value.slice(yearStartIndex, yearStartIndex + 4), 10);
            fullYearDone = value.slice(yearStartIndex, yearStartIndex + 4).length === 4;
            date = this.getFixedDate(day, month, year);
        }
        // mm-yy || yy-mm
        if (value.length === 4 && (datePattern[0] === "y" || datePattern[1] === "y")) {
            monthStartIndex = datePattern[0] === "m" ? 0 : 2;
            yearStartIndex = 2 - monthStartIndex;
            month = parseInt(value.slice(monthStartIndex, monthStartIndex + 2), 10);
            year = parseInt(value.slice(yearStartIndex, yearStartIndex + 2), 10);
            fullYearDone = value.slice(yearStartIndex, yearStartIndex + 2).length === 2;
            date = [
                0,
                month,
                year
            ];
        }
        // mm-yyyy || yyyy-mm
        if (value.length === 6 && (datePattern[0] === "Y" || datePattern[1] === "Y")) {
            monthStartIndex = datePattern[0] === "m" ? 0 : 4;
            yearStartIndex = 2 - 0.5 * monthStartIndex;
            month = parseInt(value.slice(monthStartIndex, monthStartIndex + 2), 10);
            year = parseInt(value.slice(yearStartIndex, yearStartIndex + 4), 10);
            fullYearDone = value.slice(yearStartIndex, yearStartIndex + 4).length === 4;
            date = [
                0,
                month,
                year
            ];
        }
        date = owner.getRangeFixedDate(date);
        owner.date = date;
        var result = date.length === 0 ? value : datePattern.reduce(function(previous, current) {
            switch(current){
                case "d":
                    return previous + (date[0] === 0 ? "" : owner.addLeadingZero(date[0]));
                case "m":
                    return previous + (date[1] === 0 ? "" : owner.addLeadingZero(date[1]));
                case "y":
                    return previous + (fullYearDone ? owner.addLeadingZeroForYear(date[2], false) : "");
                case "Y":
                    return previous + (fullYearDone ? owner.addLeadingZeroForYear(date[2], true) : "");
            }
        }, "");
        return result;
    },
    getRangeFixedDate: function(date) {
        var owner = this, datePattern = owner.datePattern, dateMin = owner.dateMin || [], dateMax = owner.dateMax || [];
        if (!date.length || dateMin.length < 3 && dateMax.length < 3) return date;
        if (datePattern.find(function(x) {
            return x.toLowerCase() === "y";
        }) && date[2] === 0) return date;
        if (dateMax.length && (dateMax[2] < date[2] || dateMax[2] === date[2] && (dateMax[1] < date[1] || dateMax[1] === date[1] && dateMax[0] < date[0]))) return dateMax;
        if (dateMin.length && (dateMin[2] > date[2] || dateMin[2] === date[2] && (dateMin[1] > date[1] || dateMin[1] === date[1] && dateMin[0] > date[0]))) return dateMin;
        return date;
    },
    getFixedDate: function(day, month, year) {
        day = Math.min(day, 31);
        month = Math.min(month, 12);
        year = parseInt(year || 0, 10);
        if (month < 7 && month % 2 === 0 || month > 8 && month % 2 === 1) day = Math.min(day, month === 2 ? this.isLeapYear(year) ? 29 : 28 : 30);
        return [
            day,
            month,
            year
        ];
    },
    isLeapYear: function(year) {
        return year % 4 === 0 && year % 100 !== 0 || year % 400 === 0;
    },
    addLeadingZero: function(number) {
        return (number < 10 ? "0" : "") + number;
    },
    addLeadingZeroForYear: function(number, fullYearMode) {
        if (fullYearMode) return (number < 10 ? "000" : number < 100 ? "00" : number < 1000 ? "0" : "") + number;
        return (number < 10 ? "0" : "") + number;
    }
};
var DateFormatter_1 = DateFormatter;
var TimeFormatter = function(timePattern, timeFormat) {
    var owner = this;
    owner.time = [];
    owner.blocks = [];
    owner.timePattern = timePattern;
    owner.timeFormat = timeFormat;
    owner.initBlocks();
};
TimeFormatter.prototype = {
    initBlocks: function() {
        var owner = this;
        owner.timePattern.forEach(function() {
            owner.blocks.push(2);
        });
    },
    getISOFormatTime: function() {
        var owner = this, time = owner.time;
        return time[2] ? owner.addLeadingZero(time[0]) + ":" + owner.addLeadingZero(time[1]) + ":" + owner.addLeadingZero(time[2]) : "";
    },
    getBlocks: function() {
        return this.blocks;
    },
    getTimeFormatOptions: function() {
        var owner = this;
        if (String(owner.timeFormat) === "12") return {
            maxHourFirstDigit: 1,
            maxHours: 12,
            maxMinutesFirstDigit: 5,
            maxMinutes: 60
        };
        return {
            maxHourFirstDigit: 2,
            maxHours: 23,
            maxMinutesFirstDigit: 5,
            maxMinutes: 60
        };
    },
    getValidatedTime: function(value) {
        var owner = this, result = "";
        value = value.replace(/[^\d]/g, "");
        var timeFormatOptions = owner.getTimeFormatOptions();
        owner.blocks.forEach(function(length, index) {
            if (value.length > 0) {
                var sub = value.slice(0, length), sub0 = sub.slice(0, 1), rest = value.slice(length);
                switch(owner.timePattern[index]){
                    case "h":
                        if (parseInt(sub0, 10) > timeFormatOptions.maxHourFirstDigit) sub = "0" + sub0;
                        else if (parseInt(sub, 10) > timeFormatOptions.maxHours) sub = timeFormatOptions.maxHours + "";
                        break;
                    case "m":
                    case "s":
                        if (parseInt(sub0, 10) > timeFormatOptions.maxMinutesFirstDigit) sub = "0" + sub0;
                        else if (parseInt(sub, 10) > timeFormatOptions.maxMinutes) sub = timeFormatOptions.maxMinutes + "";
                        break;
                }
                result += sub;
                // update remaining string
                value = rest;
            }
        });
        return this.getFixedTimeString(result);
    },
    getFixedTimeString: function(value) {
        var owner = this, timePattern = owner.timePattern, time = [], secondIndex = 0, minuteIndex = 0, hourIndex = 0, secondStartIndex = 0, minuteStartIndex = 0, hourStartIndex = 0, second, minute, hour;
        if (value.length === 6) {
            timePattern.forEach(function(type, index) {
                switch(type){
                    case "s":
                        secondIndex = index * 2;
                        break;
                    case "m":
                        minuteIndex = index * 2;
                        break;
                    case "h":
                        hourIndex = index * 2;
                        break;
                }
            });
            hourStartIndex = hourIndex;
            minuteStartIndex = minuteIndex;
            secondStartIndex = secondIndex;
            second = parseInt(value.slice(secondStartIndex, secondStartIndex + 2), 10);
            minute = parseInt(value.slice(minuteStartIndex, minuteStartIndex + 2), 10);
            hour = parseInt(value.slice(hourStartIndex, hourStartIndex + 2), 10);
            time = this.getFixedTime(hour, minute, second);
        }
        if (value.length === 4 && owner.timePattern.indexOf("s") < 0) {
            timePattern.forEach(function(type, index) {
                switch(type){
                    case "m":
                        minuteIndex = index * 2;
                        break;
                    case "h":
                        hourIndex = index * 2;
                        break;
                }
            });
            hourStartIndex = hourIndex;
            minuteStartIndex = minuteIndex;
            second = 0;
            minute = parseInt(value.slice(minuteStartIndex, minuteStartIndex + 2), 10);
            hour = parseInt(value.slice(hourStartIndex, hourStartIndex + 2), 10);
            time = this.getFixedTime(hour, minute, second);
        }
        owner.time = time;
        return time.length === 0 ? value : timePattern.reduce(function(previous, current) {
            switch(current){
                case "s":
                    return previous + owner.addLeadingZero(time[2]);
                case "m":
                    return previous + owner.addLeadingZero(time[1]);
                case "h":
                    return previous + owner.addLeadingZero(time[0]);
            }
        }, "");
    },
    getFixedTime: function(hour, minute, second) {
        second = Math.min(parseInt(second || 0, 10), 60);
        minute = Math.min(minute, 60);
        hour = Math.min(hour, 60);
        return [
            hour,
            minute,
            second
        ];
    },
    addLeadingZero: function(number) {
        return (number < 10 ? "0" : "") + number;
    }
};
var TimeFormatter_1 = TimeFormatter;
var PhoneFormatter = function(formatter, delimiter) {
    var owner = this;
    owner.delimiter = delimiter || delimiter === "" ? delimiter : " ";
    owner.delimiterRE = delimiter ? new RegExp("\\" + delimiter, "g") : "";
    owner.formatter = formatter;
};
PhoneFormatter.prototype = {
    setFormatter: function(formatter) {
        this.formatter = formatter;
    },
    format: function(phoneNumber) {
        var owner = this;
        owner.formatter.clear();
        // only keep number and +
        phoneNumber = phoneNumber.replace(/[^\d+]/g, "");
        // strip non-leading +
        phoneNumber = phoneNumber.replace(/^\+/, "B").replace(/\+/g, "").replace("B", "+");
        // strip delimiter
        phoneNumber = phoneNumber.replace(owner.delimiterRE, "");
        var result = "", current, validated = false;
        for(var i = 0, iMax = phoneNumber.length; i < iMax; i++){
            current = owner.formatter.inputDigit(phoneNumber.charAt(i));
            // has ()- or space inside
            if (/[\s()-]/g.test(current)) {
                result = current;
                validated = true;
            } else if (!validated) result = current;
        }
        // strip ()
        // e.g. US: 7161234567 returns (716) 123-4567
        result = result.replace(/[()]/g, "");
        // replace library delimiter with user customized delimiter
        result = result.replace(/[\s-]/g, owner.delimiter);
        return result;
    }
};
var PhoneFormatter_1 = PhoneFormatter;
var CreditCardDetector = {
    blocks: {
        uatp: [
            4,
            5,
            6
        ],
        amex: [
            4,
            6,
            5
        ],
        diners: [
            4,
            6,
            4
        ],
        discover: [
            4,
            4,
            4,
            4
        ],
        mastercard: [
            4,
            4,
            4,
            4
        ],
        dankort: [
            4,
            4,
            4,
            4
        ],
        instapayment: [
            4,
            4,
            4,
            4
        ],
        jcb15: [
            4,
            6,
            5
        ],
        jcb: [
            4,
            4,
            4,
            4
        ],
        maestro: [
            4,
            4,
            4,
            4
        ],
        visa: [
            4,
            4,
            4,
            4
        ],
        mir: [
            4,
            4,
            4,
            4
        ],
        unionPay: [
            4,
            4,
            4,
            4
        ],
        general: [
            4,
            4,
            4,
            4
        ]
    },
    re: {
        // starts with 1; 15 digits, not starts with 1800 (jcb card)
        uatp: /^(?!1800)1\d{0,14}/,
        // starts with 34/37; 15 digits
        amex: /^3[47]\d{0,13}/,
        // starts with 6011/65/644-649; 16 digits
        discover: /^(?:6011|65\d{0,2}|64[4-9]\d?)\d{0,12}/,
        // starts with 300-305/309 or 36/38/39; 14 digits
        diners: /^3(?:0([0-5]|9)|[689]\d?)\d{0,11}/,
        // starts with 51-55/2221–2720; 16 digits
        mastercard: /^(5[1-5]\d{0,2}|22[2-9]\d{0,1}|2[3-7]\d{0,2})\d{0,12}/,
        // starts with 5019/4175/4571; 16 digits
        dankort: /^(5019|4175|4571)\d{0,12}/,
        // starts with 637-639; 16 digits
        instapayment: /^63[7-9]\d{0,13}/,
        // starts with 2131/1800; 15 digits
        jcb15: /^(?:2131|1800)\d{0,11}/,
        // starts with 2131/1800/35; 16 digits
        jcb: /^(?:35\d{0,2})\d{0,12}/,
        // starts with 50/56-58/6304/67; 16 digits
        maestro: /^(?:5[0678]\d{0,2}|6304|67\d{0,2})\d{0,12}/,
        // starts with 22; 16 digits
        mir: /^220[0-4]\d{0,12}/,
        // starts with 4; 16 digits
        visa: /^4\d{0,15}/,
        // starts with 62/81; 16 digits
        unionPay: /^(62|81)\d{0,14}/
    },
    getStrictBlocks: function(block) {
        var total = block.reduce(function(prev, current) {
            return prev + current;
        }, 0);
        return block.concat(19 - total);
    },
    getInfo: function(value, strictMode) {
        var blocks = CreditCardDetector.blocks, re = CreditCardDetector.re;
        // Some credit card can have up to 19 digits number.
        // Set strictMode to true will remove the 16 max-length restrain,
        // however, I never found any website validate card number like
        // this, hence probably you don't want to enable this option.
        strictMode = !!strictMode;
        for(var key in re)if (re[key].test(value)) {
            var matchedBlocks = blocks[key];
            return {
                type: key,
                blocks: strictMode ? this.getStrictBlocks(matchedBlocks) : matchedBlocks
            };
        }
        return {
            type: "unknown",
            blocks: strictMode ? this.getStrictBlocks(blocks.general) : blocks.general
        };
    }
};
var CreditCardDetector_1 = CreditCardDetector;
var Util = {
    noop: function() {},
    strip: function(value, re) {
        return value.replace(re, "");
    },
    getPostDelimiter: function(value, delimiter, delimiters) {
        // single delimiter
        if (delimiters.length === 0) return value.slice(-delimiter.length) === delimiter ? delimiter : "";
        // multiple delimiters
        var matchedDelimiter = "";
        delimiters.forEach(function(current) {
            if (value.slice(-current.length) === current) matchedDelimiter = current;
        });
        return matchedDelimiter;
    },
    getDelimiterREByDelimiter: function(delimiter) {
        return new RegExp(delimiter.replace(/([.?*+^$[\]\\(){}|-])/g, "\\$1"), "g");
    },
    getNextCursorPosition: function(prevPos, oldValue, newValue, delimiter, delimiters) {
        // If cursor was at the end of value, just place it back.
        // Because new value could contain additional chars.
        if (oldValue.length === prevPos) return newValue.length;
        return prevPos + this.getPositionOffset(prevPos, oldValue, newValue, delimiter, delimiters);
    },
    getPositionOffset: function(prevPos, oldValue, newValue, delimiter, delimiters) {
        var oldRawValue, newRawValue, lengthOffset;
        oldRawValue = this.stripDelimiters(oldValue.slice(0, prevPos), delimiter, delimiters);
        newRawValue = this.stripDelimiters(newValue.slice(0, prevPos), delimiter, delimiters);
        lengthOffset = oldRawValue.length - newRawValue.length;
        return lengthOffset !== 0 ? lengthOffset / Math.abs(lengthOffset) : 0;
    },
    stripDelimiters: function(value, delimiter, delimiters) {
        var owner = this;
        // single delimiter
        if (delimiters.length === 0) {
            var delimiterRE = delimiter ? owner.getDelimiterREByDelimiter(delimiter) : "";
            return value.replace(delimiterRE, "");
        }
        // multiple delimiters
        delimiters.forEach(function(current) {
            current.split("").forEach(function(letter) {
                value = value.replace(owner.getDelimiterREByDelimiter(letter), "");
            });
        });
        return value;
    },
    headStr: function(str, length) {
        return str.slice(0, length);
    },
    getMaxLength: function(blocks) {
        return blocks.reduce(function(previous, current) {
            return previous + current;
        }, 0);
    },
    // strip prefix
    // Before type  |   After type    |     Return value
    // PEFIX-...    |   PEFIX-...     |     ''
    // PREFIX-123   |   PEFIX-123     |     123
    // PREFIX-123   |   PREFIX-23     |     23
    // PREFIX-123   |   PREFIX-1234   |     1234
    getPrefixStrippedValue: function(value, prefix, prefixLength, prevResult, delimiter, delimiters, noImmediatePrefix, tailPrefix, signBeforePrefix) {
        // No prefix
        if (prefixLength === 0) return value;
        // Value is prefix
        if (value === prefix && value !== "") return "";
        if (signBeforePrefix && value.slice(0, 1) == "-") {
            var prev = prevResult.slice(0, 1) == "-" ? prevResult.slice(1) : prevResult;
            return "-" + this.getPrefixStrippedValue(value.slice(1), prefix, prefixLength, prev, delimiter, delimiters, noImmediatePrefix, tailPrefix, signBeforePrefix);
        }
        // Pre result prefix string does not match pre-defined prefix
        if (prevResult.slice(0, prefixLength) !== prefix && !tailPrefix) {
            // Check if the first time user entered something
            if (noImmediatePrefix && !prevResult && value) return value;
            return "";
        } else if (prevResult.slice(-prefixLength) !== prefix && tailPrefix) {
            // Check if the first time user entered something
            if (noImmediatePrefix && !prevResult && value) return value;
            return "";
        }
        var prevValue = this.stripDelimiters(prevResult, delimiter, delimiters);
        // New value has issue, someone typed in between prefix letters
        // Revert to pre value
        if (value.slice(0, prefixLength) !== prefix && !tailPrefix) return prevValue.slice(prefixLength);
        else if (value.slice(-prefixLength) !== prefix && tailPrefix) return prevValue.slice(0, -prefixLength - 1);
        // No issue, strip prefix for new value
        return tailPrefix ? value.slice(0, -prefixLength) : value.slice(prefixLength);
    },
    getFirstDiffIndex: function(prev, current) {
        var index = 0;
        while(prev.charAt(index) === current.charAt(index)){
            if (prev.charAt(index++) === "") return -1;
        }
        return index;
    },
    getFormattedValue: function(value, blocks, blocksLength, delimiter, delimiters, delimiterLazyShow) {
        var result = "", multipleDelimiters = delimiters.length > 0, currentDelimiter = "";
        // no options, normal input
        if (blocksLength === 0) return value;
        blocks.forEach(function(length, index) {
            if (value.length > 0) {
                var sub = value.slice(0, length), rest = value.slice(length);
                if (multipleDelimiters) currentDelimiter = delimiters[delimiterLazyShow ? index - 1 : index] || currentDelimiter;
                else currentDelimiter = delimiter;
                if (delimiterLazyShow) {
                    if (index > 0) result += currentDelimiter;
                    result += sub;
                } else {
                    result += sub;
                    if (sub.length === length && index < blocksLength - 1) result += currentDelimiter;
                }
                // update remaining string
                value = rest;
            }
        });
        return result;
    },
    // move cursor to the end
    // the first time user focuses on an input with prefix
    fixPrefixCursor: function(el, prefix, delimiter, delimiters) {
        if (!el) return;
        var val = el.value, appendix = delimiter || delimiters[0] || " ";
        if (!el.setSelectionRange || !prefix || prefix.length + appendix.length <= val.length) return;
        var len = val.length * 2;
        // set timeout to avoid blink
        setTimeout(function() {
            el.setSelectionRange(len, len);
        }, 1);
    },
    // Check if input field is fully selected
    checkFullSelection: function(value) {
        try {
            var selection = window.getSelection() || document.getSelection() || {};
            return selection.toString().length === value.length;
        } catch (ex) {
        // Ignore
        }
        return false;
    },
    setSelection: function(element, position, doc) {
        if (element !== this.getActiveElement(doc)) return;
        // cursor is already in the end
        if (element && element.value.length <= position) return;
        if (element.createTextRange) {
            var range = element.createTextRange();
            range.move("character", position);
            range.select();
        } else try {
            element.setSelectionRange(position, position);
        } catch (e) {
            // eslint-disable-next-line
            console.warn("The input element type does not support selection");
        }
    },
    getActiveElement: function(parent) {
        var activeElement = parent.activeElement;
        if (activeElement && activeElement.shadowRoot) return this.getActiveElement(activeElement.shadowRoot);
        return activeElement;
    },
    isAndroid: function() {
        return navigator && /android/i.test(navigator.userAgent);
    },
    // On Android chrome, the keyup and keydown events
    // always return key code 229 as a composition that
    // buffers the user’s keystrokes
    // see https://github.com/nosir/cleave.js/issues/147
    isAndroidBackspaceKeydown: function(lastInputValue, currentInputValue) {
        if (!this.isAndroid() || !lastInputValue || !currentInputValue) return false;
        return currentInputValue === lastInputValue.slice(0, -1);
    }
};
var Util_1 = Util;
/**
 * Props Assignment
 *
 * Separate this, so react module can share the usage
 */ var DefaultProperties = {
    // Maybe change to object-assign
    // for now just keep it as simple
    assign: function(target, opts) {
        target = target || {};
        opts = opts || {};
        // credit card
        target.creditCard = !!opts.creditCard;
        target.creditCardStrictMode = !!opts.creditCardStrictMode;
        target.creditCardType = "";
        target.onCreditCardTypeChanged = opts.onCreditCardTypeChanged || function() {};
        // phone
        target.phone = !!opts.phone;
        target.phoneRegionCode = opts.phoneRegionCode || "AU";
        target.phoneFormatter = {};
        // time
        target.time = !!opts.time;
        target.timePattern = opts.timePattern || [
            "h",
            "m",
            "s"
        ];
        target.timeFormat = opts.timeFormat || "24";
        target.timeFormatter = {};
        // date
        target.date = !!opts.date;
        target.datePattern = opts.datePattern || [
            "d",
            "m",
            "Y"
        ];
        target.dateMin = opts.dateMin || "";
        target.dateMax = opts.dateMax || "";
        target.dateFormatter = {};
        // numeral
        target.numeral = !!opts.numeral;
        target.numeralIntegerScale = opts.numeralIntegerScale > 0 ? opts.numeralIntegerScale : 0;
        target.numeralDecimalScale = opts.numeralDecimalScale >= 0 ? opts.numeralDecimalScale : 2;
        target.numeralDecimalMark = opts.numeralDecimalMark || ".";
        target.numeralThousandsGroupStyle = opts.numeralThousandsGroupStyle || "thousand";
        target.numeralPositiveOnly = !!opts.numeralPositiveOnly;
        target.stripLeadingZeroes = opts.stripLeadingZeroes !== false;
        target.signBeforePrefix = !!opts.signBeforePrefix;
        target.tailPrefix = !!opts.tailPrefix;
        // others
        target.swapHiddenInput = !!opts.swapHiddenInput;
        target.numericOnly = target.creditCard || target.date || !!opts.numericOnly;
        target.uppercase = !!opts.uppercase;
        target.lowercase = !!opts.lowercase;
        target.prefix = target.creditCard || target.date ? "" : opts.prefix || "";
        target.noImmediatePrefix = !!opts.noImmediatePrefix;
        target.prefixLength = target.prefix.length;
        target.rawValueTrimPrefix = !!opts.rawValueTrimPrefix;
        target.copyDelimiter = !!opts.copyDelimiter;
        target.initValue = opts.initValue !== undefined && opts.initValue !== null ? opts.initValue.toString() : "";
        target.delimiter = opts.delimiter || opts.delimiter === "" ? opts.delimiter : opts.date ? "/" : opts.time ? ":" : opts.numeral ? "," : opts.phone ? " " : " ";
        target.delimiterLength = target.delimiter.length;
        target.delimiterLazyShow = !!opts.delimiterLazyShow;
        target.delimiters = opts.delimiters || [];
        target.blocks = opts.blocks || [];
        target.blocksLength = target.blocks.length;
        target.root = typeof commonjsGlobal === "object" && commonjsGlobal ? commonjsGlobal : window;
        target.document = opts.document || target.root.document;
        target.maxLength = 0;
        target.backspace = false;
        target.result = "";
        target.onValueChanged = opts.onValueChanged || function() {};
        return target;
    }
};
var DefaultProperties_1 = DefaultProperties;
/**
 * Construct a new Cleave instance by passing the configuration object
 *
 * @param {String | HTMLElement} element
 * @param {Object} opts
 */ var Cleave = function(element, opts) {
    var owner = this;
    var hasMultipleElements = false;
    if (typeof element === "string") {
        owner.element = document.querySelector(element);
        hasMultipleElements = document.querySelectorAll(element).length > 1;
    } else if (typeof element.length !== "undefined" && element.length > 0) {
        owner.element = element[0];
        hasMultipleElements = element.length > 1;
    } else owner.element = element;
    if (!owner.element) throw new Error("[cleave.js] Please check the element");
    if (hasMultipleElements) try {
        // eslint-disable-next-line
        console.warn("[cleave.js] Multiple input fields matched, cleave.js will only take the first one.");
    } catch (e) {
    // Old IE
    }
    opts.initValue = owner.element.value;
    owner.properties = Cleave.DefaultProperties.assign({}, opts);
    owner.init();
};
Cleave.prototype = {
    init: function() {
        var owner = this, pps = owner.properties;
        // no need to use this lib
        if (!pps.numeral && !pps.phone && !pps.creditCard && !pps.time && !pps.date && pps.blocksLength === 0 && !pps.prefix) {
            owner.onInput(pps.initValue);
            return;
        }
        pps.maxLength = Cleave.Util.getMaxLength(pps.blocks);
        owner.isAndroid = Cleave.Util.isAndroid();
        owner.lastInputValue = "";
        owner.isBackward = "";
        owner.onChangeListener = owner.onChange.bind(owner);
        owner.onKeyDownListener = owner.onKeyDown.bind(owner);
        owner.onFocusListener = owner.onFocus.bind(owner);
        owner.onCutListener = owner.onCut.bind(owner);
        owner.onCopyListener = owner.onCopy.bind(owner);
        owner.initSwapHiddenInput();
        owner.element.addEventListener("input", owner.onChangeListener);
        owner.element.addEventListener("keydown", owner.onKeyDownListener);
        owner.element.addEventListener("focus", owner.onFocusListener);
        owner.element.addEventListener("cut", owner.onCutListener);
        owner.element.addEventListener("copy", owner.onCopyListener);
        owner.initPhoneFormatter();
        owner.initDateFormatter();
        owner.initTimeFormatter();
        owner.initNumeralFormatter();
        // avoid touch input field if value is null
        // otherwise Firefox will add red box-shadow for <input required />
        if (pps.initValue || pps.prefix && !pps.noImmediatePrefix) owner.onInput(pps.initValue);
    },
    initSwapHiddenInput: function() {
        var owner = this, pps = owner.properties;
        if (!pps.swapHiddenInput) return;
        var inputFormatter = owner.element.cloneNode(true);
        owner.element.parentNode.insertBefore(inputFormatter, owner.element);
        owner.elementSwapHidden = owner.element;
        owner.elementSwapHidden.type = "hidden";
        owner.element = inputFormatter;
        owner.element.id = "";
    },
    initNumeralFormatter: function() {
        var owner = this, pps = owner.properties;
        if (!pps.numeral) return;
        pps.numeralFormatter = new Cleave.NumeralFormatter(pps.numeralDecimalMark, pps.numeralIntegerScale, pps.numeralDecimalScale, pps.numeralThousandsGroupStyle, pps.numeralPositiveOnly, pps.stripLeadingZeroes, pps.prefix, pps.signBeforePrefix, pps.tailPrefix, pps.delimiter);
    },
    initTimeFormatter: function() {
        var owner = this, pps = owner.properties;
        if (!pps.time) return;
        pps.timeFormatter = new Cleave.TimeFormatter(pps.timePattern, pps.timeFormat);
        pps.blocks = pps.timeFormatter.getBlocks();
        pps.blocksLength = pps.blocks.length;
        pps.maxLength = Cleave.Util.getMaxLength(pps.blocks);
    },
    initDateFormatter: function() {
        var owner = this, pps = owner.properties;
        if (!pps.date) return;
        pps.dateFormatter = new Cleave.DateFormatter(pps.datePattern, pps.dateMin, pps.dateMax);
        pps.blocks = pps.dateFormatter.getBlocks();
        pps.blocksLength = pps.blocks.length;
        pps.maxLength = Cleave.Util.getMaxLength(pps.blocks);
    },
    initPhoneFormatter: function() {
        var owner = this, pps = owner.properties;
        if (!pps.phone) return;
        // Cleave.AsYouTypeFormatter should be provided by
        // external google closure lib
        try {
            pps.phoneFormatter = new Cleave.PhoneFormatter(new pps.root.Cleave.AsYouTypeFormatter(pps.phoneRegionCode), pps.delimiter);
        } catch (ex) {
            throw new Error("[cleave.js] Please include phone-type-formatter.{country}.js lib");
        }
    },
    onKeyDown: function(event) {
        var owner = this, charCode = event.which || event.keyCode;
        owner.lastInputValue = owner.element.value;
        owner.isBackward = charCode === 8;
    },
    onChange: function(event) {
        var owner = this, pps = owner.properties, Util = Cleave.Util;
        owner.isBackward = owner.isBackward || event.inputType === "deleteContentBackward";
        var postDelimiter = Util.getPostDelimiter(owner.lastInputValue, pps.delimiter, pps.delimiters);
        if (owner.isBackward && postDelimiter) pps.postDelimiterBackspace = postDelimiter;
        else pps.postDelimiterBackspace = false;
        this.onInput(this.element.value);
    },
    onFocus: function() {
        var owner = this, pps = owner.properties;
        owner.lastInputValue = owner.element.value;
        if (pps.prefix && pps.noImmediatePrefix && !owner.element.value) this.onInput(pps.prefix);
        Cleave.Util.fixPrefixCursor(owner.element, pps.prefix, pps.delimiter, pps.delimiters);
    },
    onCut: function(e) {
        if (!Cleave.Util.checkFullSelection(this.element.value)) return;
        this.copyClipboardData(e);
        this.onInput("");
    },
    onCopy: function(e) {
        if (!Cleave.Util.checkFullSelection(this.element.value)) return;
        this.copyClipboardData(e);
    },
    copyClipboardData: function(e) {
        var owner = this, pps = owner.properties, Util = Cleave.Util, inputValue = owner.element.value, textToCopy = "";
        if (!pps.copyDelimiter) textToCopy = Util.stripDelimiters(inputValue, pps.delimiter, pps.delimiters);
        else textToCopy = inputValue;
        try {
            if (e.clipboardData) e.clipboardData.setData("Text", textToCopy);
            else window.clipboardData.setData("Text", textToCopy);
            e.preventDefault();
        } catch (ex) {
        //  empty
        }
    },
    onInput: function(value) {
        var owner = this, pps = owner.properties, Util = Cleave.Util;
        // case 1: delete one more character "4"
        // 1234*| -> hit backspace -> 123|
        // case 2: last character is not delimiter which is:
        // 12|34* -> hit backspace -> 1|34*
        // note: no need to apply this for numeral mode
        var postDelimiterAfter = Util.getPostDelimiter(value, pps.delimiter, pps.delimiters);
        if (!pps.numeral && pps.postDelimiterBackspace && !postDelimiterAfter) value = Util.headStr(value, value.length - pps.postDelimiterBackspace.length);
        // phone formatter
        if (pps.phone) {
            if (pps.prefix && (!pps.noImmediatePrefix || value.length)) pps.result = pps.prefix + pps.phoneFormatter.format(value).slice(pps.prefix.length);
            else pps.result = pps.phoneFormatter.format(value);
            owner.updateValueState();
            return;
        }
        // numeral formatter
        if (pps.numeral) {
            // Do not show prefix when noImmediatePrefix is specified
            // This mostly because we need to show user the native input placeholder
            if (pps.prefix && pps.noImmediatePrefix && value.length === 0) pps.result = "";
            else pps.result = pps.numeralFormatter.format(value);
            owner.updateValueState();
            return;
        }
        // date
        if (pps.date) value = pps.dateFormatter.getValidatedDate(value);
        // time
        if (pps.time) value = pps.timeFormatter.getValidatedTime(value);
        // strip delimiters
        value = Util.stripDelimiters(value, pps.delimiter, pps.delimiters);
        // strip prefix
        value = Util.getPrefixStrippedValue(value, pps.prefix, pps.prefixLength, pps.result, pps.delimiter, pps.delimiters, pps.noImmediatePrefix, pps.tailPrefix, pps.signBeforePrefix);
        // strip non-numeric characters
        value = pps.numericOnly ? Util.strip(value, /[^\d]/g) : value;
        // convert case
        value = pps.uppercase ? value.toUpperCase() : value;
        value = pps.lowercase ? value.toLowerCase() : value;
        // prevent from showing prefix when no immediate option enabled with empty input value
        if (pps.prefix) {
            if (pps.tailPrefix) value = value + pps.prefix;
            else value = pps.prefix + value;
            // no blocks specified, no need to do formatting
            if (pps.blocksLength === 0) {
                pps.result = value;
                owner.updateValueState();
                return;
            }
        }
        // update credit card props
        if (pps.creditCard) owner.updateCreditCardPropsByValue(value);
        // strip over length characters
        value = Util.headStr(value, pps.maxLength);
        // apply blocks
        pps.result = Util.getFormattedValue(value, pps.blocks, pps.blocksLength, pps.delimiter, pps.delimiters, pps.delimiterLazyShow);
        owner.updateValueState();
    },
    updateCreditCardPropsByValue: function(value) {
        var owner = this, pps = owner.properties, Util = Cleave.Util, creditCardInfo;
        // At least one of the first 4 characters has changed
        if (Util.headStr(pps.result, 4) === Util.headStr(value, 4)) return;
        creditCardInfo = Cleave.CreditCardDetector.getInfo(value, pps.creditCardStrictMode);
        pps.blocks = creditCardInfo.blocks;
        pps.blocksLength = pps.blocks.length;
        pps.maxLength = Util.getMaxLength(pps.blocks);
        // credit card type changed
        if (pps.creditCardType !== creditCardInfo.type) {
            pps.creditCardType = creditCardInfo.type;
            pps.onCreditCardTypeChanged.call(owner, pps.creditCardType);
        }
    },
    updateValueState: function() {
        var owner = this, Util = Cleave.Util, pps = owner.properties;
        if (!owner.element) return;
        var endPos = owner.element.selectionEnd;
        var oldValue = owner.element.value;
        var newValue = pps.result;
        endPos = Util.getNextCursorPosition(endPos, oldValue, newValue, pps.delimiter, pps.delimiters);
        // fix Android browser type="text" input field
        // cursor not jumping issue
        if (owner.isAndroid) {
            window.setTimeout(function() {
                owner.element.value = newValue;
                Util.setSelection(owner.element, endPos, pps.document, false);
                owner.callOnValueChanged();
            }, 1);
            return;
        }
        owner.element.value = newValue;
        if (pps.swapHiddenInput) owner.elementSwapHidden.value = owner.getRawValue();
        Util.setSelection(owner.element, endPos, pps.document, false);
        owner.callOnValueChanged();
    },
    callOnValueChanged: function() {
        var owner = this, pps = owner.properties;
        pps.onValueChanged.call(owner, {
            target: {
                name: owner.element.name,
                value: pps.result,
                rawValue: owner.getRawValue()
            }
        });
    },
    setPhoneRegionCode: function(phoneRegionCode) {
        var owner = this, pps = owner.properties;
        pps.phoneRegionCode = phoneRegionCode;
        owner.initPhoneFormatter();
        owner.onChange();
    },
    setRawValue: function(value) {
        var owner = this, pps = owner.properties;
        value = value !== undefined && value !== null ? value.toString() : "";
        if (pps.numeral) value = value.replace(".", pps.numeralDecimalMark);
        pps.postDelimiterBackspace = false;
        owner.element.value = value;
        owner.onInput(value);
    },
    getRawValue: function() {
        var owner = this, pps = owner.properties, Util = Cleave.Util, rawValue = owner.element.value;
        if (pps.rawValueTrimPrefix) rawValue = Util.getPrefixStrippedValue(rawValue, pps.prefix, pps.prefixLength, pps.result, pps.delimiter, pps.delimiters, pps.noImmediatePrefix, pps.tailPrefix, pps.signBeforePrefix);
        if (pps.numeral) rawValue = pps.numeralFormatter.getRawValue(rawValue);
        else rawValue = Util.stripDelimiters(rawValue, pps.delimiter, pps.delimiters);
        return rawValue;
    },
    getISOFormatDate: function() {
        var owner = this, pps = owner.properties;
        return pps.date ? pps.dateFormatter.getISOFormatDate() : "";
    },
    getISOFormatTime: function() {
        var owner = this, pps = owner.properties;
        return pps.time ? pps.timeFormatter.getISOFormatTime() : "";
    },
    getFormattedValue: function() {
        return this.element.value;
    },
    destroy: function() {
        var owner = this;
        owner.element.removeEventListener("input", owner.onChangeListener);
        owner.element.removeEventListener("keydown", owner.onKeyDownListener);
        owner.element.removeEventListener("focus", owner.onFocusListener);
        owner.element.removeEventListener("cut", owner.onCutListener);
        owner.element.removeEventListener("copy", owner.onCopyListener);
    },
    toString: function() {
        return "[Cleave Object]";
    }
};
Cleave.NumeralFormatter = NumeralFormatter_1;
Cleave.DateFormatter = DateFormatter_1;
Cleave.TimeFormatter = TimeFormatter_1;
Cleave.PhoneFormatter = PhoneFormatter_1;
Cleave.CreditCardDetector = CreditCardDetector_1;
Cleave.Util = Util_1;
Cleave.DefaultProperties = DefaultProperties_1;
(// for angular directive
typeof commonjsGlobal === "object" && commonjsGlobal ? commonjsGlobal : window)["Cleave"] = Cleave;
// CommonJS
var Cleave_1 = Cleave;
exports.default = Cleave_1;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"8jubI"}]},["2ntYF","2OpUZ"], "2OpUZ", "parcelRequire7921")

//# sourceMappingURL=index.6690e0da.js.map
