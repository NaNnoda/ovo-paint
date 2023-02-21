(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf, __hasOwnProp = Object.prototype.hasOwnProperty;
  var __commonJS = (cb, mod) => function() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from == "object" || typeof from == "function")
      for (let key of __getOwnPropNames(from))
        !__hasOwnProp.call(to, key) && key !== except && __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    return to;
  };
  var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
    // If the importer is in node compatibility mode or this is not an ESM
    // file that has been converted to a CommonJS file using a Babel-
    // compatible transform (i.e. "__esModule" has not been set), then set
    // "default" to the CommonJS "module.exports" for node compatibility.
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: !0 }) : target,
    mod
  ));

  // node_modules/jquery/dist/jquery.js
  var require_jquery = __commonJS({
    "node_modules/jquery/dist/jquery.js"(exports, module) {
      (function(global, factory) {
        "use strict";
        typeof module == "object" && typeof module.exports == "object" ? module.exports = global.document ? factory(global, !0) : function(w) {
          if (!w.document)
            throw new Error("jQuery requires a window with a document");
          return factory(w);
        } : factory(global);
      })(typeof window < "u" ? window : exports, function(window2, noGlobal) {
        "use strict";
        var arr = [], getProto = Object.getPrototypeOf, slice = arr.slice, flat = arr.flat ? function(array) {
          return arr.flat.call(array);
        } : function(array) {
          return arr.concat.apply([], array);
        }, push = arr.push, indexOf = arr.indexOf, class2type = {}, toString = class2type.toString, hasOwn = class2type.hasOwnProperty, fnToString = hasOwn.toString, ObjectFunctionString = fnToString.call(Object), support = {}, isFunction = function(obj) {
          return typeof obj == "function" && typeof obj.nodeType != "number" && typeof obj.item != "function";
        }, isWindow = function(obj) {
          return obj != null && obj === obj.window;
        }, document2 = window2.document, preservedScriptAttributes = {
          type: !0,
          src: !0,
          nonce: !0,
          noModule: !0
        };
        function DOMEval(code, node, doc) {
          doc = doc || document2;
          var i, val, script = doc.createElement("script");
          if (script.text = code, node)
            for (i in preservedScriptAttributes)
              val = node[i] || node.getAttribute && node.getAttribute(i), val && script.setAttribute(i, val);
          doc.head.appendChild(script).parentNode.removeChild(script);
        }
        function toType(obj) {
          return obj == null ? obj + "" : typeof obj == "object" || typeof obj == "function" ? class2type[toString.call(obj)] || "object" : typeof obj;
        }
        var version = "3.6.3", jQuery = function(selector, context) {
          return new jQuery.fn.init(selector, context);
        };
        jQuery.fn = jQuery.prototype = {
          // The current version of jQuery being used
          jquery: version,
          constructor: jQuery,
          // The default length of a jQuery object is 0
          length: 0,
          toArray: function() {
            return slice.call(this);
          },
          // Get the Nth element in the matched element set OR
          // Get the whole matched element set as a clean array
          get: function(num) {
            return num == null ? slice.call(this) : num < 0 ? this[num + this.length] : this[num];
          },
          // Take an array of elements and push it onto the stack
          // (returning the new matched element set)
          pushStack: function(elems) {
            var ret = jQuery.merge(this.constructor(), elems);
            return ret.prevObject = this, ret;
          },
          // Execute a callback for every element in the matched set.
          each: function(callback) {
            return jQuery.each(this, callback);
          },
          map: function(callback) {
            return this.pushStack(jQuery.map(this, function(elem, i) {
              return callback.call(elem, i, elem);
            }));
          },
          slice: function() {
            return this.pushStack(slice.apply(this, arguments));
          },
          first: function() {
            return this.eq(0);
          },
          last: function() {
            return this.eq(-1);
          },
          even: function() {
            return this.pushStack(jQuery.grep(this, function(_elem, i) {
              return (i + 1) % 2;
            }));
          },
          odd: function() {
            return this.pushStack(jQuery.grep(this, function(_elem, i) {
              return i % 2;
            }));
          },
          eq: function(i) {
            var len = this.length, j = +i + (i < 0 ? len : 0);
            return this.pushStack(j >= 0 && j < len ? [this[j]] : []);
          },
          end: function() {
            return this.prevObject || this.constructor();
          },
          // For internal use only.
          // Behaves like an Array's method, not like a jQuery method.
          push,
          sort: arr.sort,
          splice: arr.splice
        }, jQuery.extend = jQuery.fn.extend = function() {
          var options, name, src, copy, copyIsArray, clone, target = arguments[0] || {}, i = 1, length = arguments.length, deep = !1;
          for (typeof target == "boolean" && (deep = target, target = arguments[i] || {}, i++), typeof target != "object" && !isFunction(target) && (target = {}), i === length && (target = this, i--); i < length; i++)
            if ((options = arguments[i]) != null)
              for (name in options)
                copy = options[name], !(name === "__proto__" || target === copy) && (deep && copy && (jQuery.isPlainObject(copy) || (copyIsArray = Array.isArray(copy))) ? (src = target[name], copyIsArray && !Array.isArray(src) ? clone = [] : !copyIsArray && !jQuery.isPlainObject(src) ? clone = {} : clone = src, copyIsArray = !1, target[name] = jQuery.extend(deep, clone, copy)) : copy !== void 0 && (target[name] = copy));
          return target;
        }, jQuery.extend({
          // Unique for each copy of jQuery on the page
          expando: "jQuery" + (version + Math.random()).replace(/\D/g, ""),
          // Assume jQuery is ready without the ready module
          isReady: !0,
          error: function(msg) {
            throw new Error(msg);
          },
          noop: function() {
          },
          isPlainObject: function(obj) {
            var proto, Ctor;
            return !obj || toString.call(obj) !== "[object Object]" ? !1 : (proto = getProto(obj), proto ? (Ctor = hasOwn.call(proto, "constructor") && proto.constructor, typeof Ctor == "function" && fnToString.call(Ctor) === ObjectFunctionString) : !0);
          },
          isEmptyObject: function(obj) {
            var name;
            for (name in obj)
              return !1;
            return !0;
          },
          // Evaluates a script in a provided context; falls back to the global one
          // if not specified.
          globalEval: function(code, options, doc) {
            DOMEval(code, { nonce: options && options.nonce }, doc);
          },
          each: function(obj, callback) {
            var length, i = 0;
            if (isArrayLike(obj))
              for (length = obj.length; i < length && callback.call(obj[i], i, obj[i]) !== !1; i++)
                ;
            else
              for (i in obj)
                if (callback.call(obj[i], i, obj[i]) === !1)
                  break;
            return obj;
          },
          // results is for internal usage only
          makeArray: function(arr2, results) {
            var ret = results || [];
            return arr2 != null && (isArrayLike(Object(arr2)) ? jQuery.merge(
              ret,
              typeof arr2 == "string" ? [arr2] : arr2
            ) : push.call(ret, arr2)), ret;
          },
          inArray: function(elem, arr2, i) {
            return arr2 == null ? -1 : indexOf.call(arr2, elem, i);
          },
          // Support: Android <=4.0 only, PhantomJS 1 only
          // push.apply(_, arraylike) throws on ancient WebKit
          merge: function(first, second) {
            for (var len = +second.length, j = 0, i = first.length; j < len; j++)
              first[i++] = second[j];
            return first.length = i, first;
          },
          grep: function(elems, callback, invert) {
            for (var callbackInverse, matches = [], i = 0, length = elems.length, callbackExpect = !invert; i < length; i++)
              callbackInverse = !callback(elems[i], i), callbackInverse !== callbackExpect && matches.push(elems[i]);
            return matches;
          },
          // arg is for internal usage only
          map: function(elems, callback, arg) {
            var length, value, i = 0, ret = [];
            if (isArrayLike(elems))
              for (length = elems.length; i < length; i++)
                value = callback(elems[i], i, arg), value != null && ret.push(value);
            else
              for (i in elems)
                value = callback(elems[i], i, arg), value != null && ret.push(value);
            return flat(ret);
          },
          // A global GUID counter for objects
          guid: 1,
          // jQuery.support is not used in Core but other projects attach their
          // properties to it so it needs to exist.
          support
        }), typeof Symbol == "function" && (jQuery.fn[Symbol.iterator] = arr[Symbol.iterator]), jQuery.each(
          "Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),
          function(_i, name) {
            class2type["[object " + name + "]"] = name.toLowerCase();
          }
        );
        function isArrayLike(obj) {
          var length = !!obj && "length" in obj && obj.length, type = toType(obj);
          return isFunction(obj) || isWindow(obj) ? !1 : type === "array" || length === 0 || typeof length == "number" && length > 0 && length - 1 in obj;
        }
        var Sizzle = (
          /*!
           * Sizzle CSS Selector Engine v2.3.9
           * https://sizzlejs.com/
           *
           * Copyright JS Foundation and other contributors
           * Released under the MIT license
           * https://js.foundation/
           *
           * Date: 2022-12-19
           */
          function(window3) {
            var i, support2, Expr, getText, isXML, tokenize, compile, select, outermostContext, sortInput, hasDuplicate, setDocument, document3, docElem, documentIsHTML, rbuggyQSA, rbuggyMatches, matches, contains, expando = "sizzle" + 1 * new Date(), preferredDoc = window3.document, dirruns = 0, done = 0, classCache = createCache(), tokenCache = createCache(), compilerCache = createCache(), nonnativeSelectorCache = createCache(), sortOrder = function(a, b) {
              return a === b && (hasDuplicate = !0), 0;
            }, hasOwn2 = {}.hasOwnProperty, arr2 = [], pop = arr2.pop, pushNative = arr2.push, push2 = arr2.push, slice2 = arr2.slice, indexOf2 = function(list, elem) {
              for (var i2 = 0, len = list.length; i2 < len; i2++)
                if (list[i2] === elem)
                  return i2;
              return -1;
            }, booleans = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", whitespace2 = "[\\x20\\t\\r\\n\\f]", identifier = "(?:\\\\[\\da-fA-F]{1,6}" + whitespace2 + "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+", attributes = "\\[" + whitespace2 + "*(" + identifier + ")(?:" + whitespace2 + // Operator (capture 2)
            "*([*^$|!~]?=)" + whitespace2 + // "Attribute values must be CSS identifiers [capture 5]
            // or strings [capture 3 or capture 4]"
            `*(?:'((?:\\\\.|[^\\\\'])*)'|"((?:\\\\.|[^\\\\"])*)"|(` + identifier + "))|)" + whitespace2 + "*\\]", pseudos = ":(" + identifier + `)(?:\\((('((?:\\\\.|[^\\\\'])*)'|"((?:\\\\.|[^\\\\"])*)")|((?:\\\\.|[^\\\\()[\\]]|` + attributes + ")*)|.*)\\)|)", rwhitespace = new RegExp(whitespace2 + "+", "g"), rtrim2 = new RegExp("^" + whitespace2 + "+|((?:^|[^\\\\])(?:\\\\.)*)" + whitespace2 + "+$", "g"), rcomma = new RegExp("^" + whitespace2 + "*," + whitespace2 + "*"), rcombinators = new RegExp("^" + whitespace2 + "*([>+~]|" + whitespace2 + ")" + whitespace2 + "*"), rdescend = new RegExp(whitespace2 + "|>"), rpseudo = new RegExp(pseudos), ridentifier = new RegExp("^" + identifier + "$"), matchExpr = {
              ID: new RegExp("^#(" + identifier + ")"),
              CLASS: new RegExp("^\\.(" + identifier + ")"),
              TAG: new RegExp("^(" + identifier + "|[*])"),
              ATTR: new RegExp("^" + attributes),
              PSEUDO: new RegExp("^" + pseudos),
              CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + whitespace2 + "*(even|odd|(([+-]|)(\\d*)n|)" + whitespace2 + "*(?:([+-]|)" + whitespace2 + "*(\\d+)|))" + whitespace2 + "*\\)|)", "i"),
              bool: new RegExp("^(?:" + booleans + ")$", "i"),
              // For use in libraries implementing .is()
              // We use this for POS matching in `select`
              needsContext: new RegExp("^" + whitespace2 + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + whitespace2 + "*((?:-\\d)?\\d*)" + whitespace2 + "*\\)|)(?=[^-]|$)", "i")
            }, rhtml2 = /HTML$/i, rinputs = /^(?:input|select|textarea|button)$/i, rheader = /^h\d$/i, rnative = /^[^{]+\{\s*\[native \w/, rquickExpr2 = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, rsibling = /[+~]/, runescape = new RegExp("\\\\[\\da-fA-F]{1,6}" + whitespace2 + "?|\\\\([^\\r\\n\\f])", "g"), funescape = function(escape, nonHex) {
              var high = "0x" + escape.slice(1) - 65536;
              return nonHex || // Replace a hexadecimal escape sequence with the encoded Unicode code point
              // Support: IE <=11+
              // For values outside the Basic Multilingual Plane (BMP), manually construct a
              // surrogate pair
              (high < 0 ? String.fromCharCode(high + 65536) : String.fromCharCode(high >> 10 | 55296, high & 1023 | 56320));
            }, rcssescape = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g, fcssescape = function(ch, asCodePoint) {
              return asCodePoint ? ch === "\0" ? "\uFFFD" : ch.slice(0, -1) + "\\" + ch.charCodeAt(ch.length - 1).toString(16) + " " : "\\" + ch;
            }, unloadHandler = function() {
              setDocument();
            }, inDisabledFieldset = addCombinator(
              function(elem) {
                return elem.disabled === !0 && elem.nodeName.toLowerCase() === "fieldset";
              },
              { dir: "parentNode", next: "legend" }
            );
            try {
              push2.apply(
                arr2 = slice2.call(preferredDoc.childNodes),
                preferredDoc.childNodes
              ), arr2[preferredDoc.childNodes.length].nodeType;
            } catch {
              push2 = {
                apply: arr2.length ? (
                  // Leverage slice if possible
                  function(target, els) {
                    pushNative.apply(target, slice2.call(els));
                  }
                ) : (
                  // Support: IE<9
                  // Otherwise append directly
                  function(target, els) {
                    for (var j = target.length, i2 = 0; target[j++] = els[i2++]; )
                      ;
                    target.length = j - 1;
                  }
                )
              };
            }
            function Sizzle2(selector, context, results, seed) {
              var m, i2, elem, nid, match, groups, newSelector, newContext = context && context.ownerDocument, nodeType = context ? context.nodeType : 9;
              if (results = results || [], typeof selector != "string" || !selector || nodeType !== 1 && nodeType !== 9 && nodeType !== 11)
                return results;
              if (!seed && (setDocument(context), context = context || document3, documentIsHTML)) {
                if (nodeType !== 11 && (match = rquickExpr2.exec(selector)))
                  if (m = match[1]) {
                    if (nodeType === 9)
                      if (elem = context.getElementById(m)) {
                        if (elem.id === m)
                          return results.push(elem), results;
                      } else
                        return results;
                    else if (newContext && (elem = newContext.getElementById(m)) && contains(context, elem) && elem.id === m)
                      return results.push(elem), results;
                  } else {
                    if (match[2])
                      return push2.apply(results, context.getElementsByTagName(selector)), results;
                    if ((m = match[3]) && support2.getElementsByClassName && context.getElementsByClassName)
                      return push2.apply(results, context.getElementsByClassName(m)), results;
                  }
                if (support2.qsa && !nonnativeSelectorCache[selector + " "] && (!rbuggyQSA || !rbuggyQSA.test(selector)) && // Support: IE 8 only
                // Exclude object elements
                (nodeType !== 1 || context.nodeName.toLowerCase() !== "object")) {
                  if (newSelector = selector, newContext = context, nodeType === 1 && (rdescend.test(selector) || rcombinators.test(selector))) {
                    for (newContext = rsibling.test(selector) && testContext(context.parentNode) || context, (newContext !== context || !support2.scope) && ((nid = context.getAttribute("id")) ? nid = nid.replace(rcssescape, fcssescape) : context.setAttribute("id", nid = expando)), groups = tokenize(selector), i2 = groups.length; i2--; )
                      groups[i2] = (nid ? "#" + nid : ":scope") + " " + toSelector(groups[i2]);
                    newSelector = groups.join(",");
                  }
                  try {
                    if (support2.cssSupportsSelector && // eslint-disable-next-line no-undef
                    !CSS.supports("selector(:is(" + newSelector + "))"))
                      throw new Error();
                    return push2.apply(
                      results,
                      newContext.querySelectorAll(newSelector)
                    ), results;
                  } catch {
                    nonnativeSelectorCache(selector, !0);
                  } finally {
                    nid === expando && context.removeAttribute("id");
                  }
                }
              }
              return select(selector.replace(rtrim2, "$1"), context, results, seed);
            }
            function createCache() {
              var keys = [];
              function cache(key, value) {
                return keys.push(key + " ") > Expr.cacheLength && delete cache[keys.shift()], cache[key + " "] = value;
              }
              return cache;
            }
            function markFunction(fn) {
              return fn[expando] = !0, fn;
            }
            function assert(fn) {
              var el = document3.createElement("fieldset");
              try {
                return !!fn(el);
              } catch {
                return !1;
              } finally {
                el.parentNode && el.parentNode.removeChild(el), el = null;
              }
            }
            function addHandle(attrs, handler) {
              for (var arr3 = attrs.split("|"), i2 = arr3.length; i2--; )
                Expr.attrHandle[arr3[i2]] = handler;
            }
            function siblingCheck(a, b) {
              var cur = b && a, diff = cur && a.nodeType === 1 && b.nodeType === 1 && a.sourceIndex - b.sourceIndex;
              if (diff)
                return diff;
              if (cur) {
                for (; cur = cur.nextSibling; )
                  if (cur === b)
                    return -1;
              }
              return a ? 1 : -1;
            }
            function createInputPseudo(type) {
              return function(elem) {
                var name = elem.nodeName.toLowerCase();
                return name === "input" && elem.type === type;
              };
            }
            function createButtonPseudo(type) {
              return function(elem) {
                var name = elem.nodeName.toLowerCase();
                return (name === "input" || name === "button") && elem.type === type;
              };
            }
            function createDisabledPseudo(disabled) {
              return function(elem) {
                return "form" in elem ? elem.parentNode && elem.disabled === !1 ? "label" in elem ? "label" in elem.parentNode ? elem.parentNode.disabled === disabled : elem.disabled === disabled : elem.isDisabled === disabled || // Where there is no isDisabled, check manually
                /* jshint -W018 */
                elem.isDisabled !== !disabled && inDisabledFieldset(elem) === disabled : elem.disabled === disabled : "label" in elem ? elem.disabled === disabled : !1;
              };
            }
            function createPositionalPseudo(fn) {
              return markFunction(function(argument) {
                return argument = +argument, markFunction(function(seed, matches2) {
                  for (var j, matchIndexes = fn([], seed.length, argument), i2 = matchIndexes.length; i2--; )
                    seed[j = matchIndexes[i2]] && (seed[j] = !(matches2[j] = seed[j]));
                });
              });
            }
            function testContext(context) {
              return context && typeof context.getElementsByTagName < "u" && context;
            }
            support2 = Sizzle2.support = {}, isXML = Sizzle2.isXML = function(elem) {
              var namespace = elem && elem.namespaceURI, docElem2 = elem && (elem.ownerDocument || elem).documentElement;
              return !rhtml2.test(namespace || docElem2 && docElem2.nodeName || "HTML");
            }, setDocument = Sizzle2.setDocument = function(node) {
              var hasCompare, subWindow, doc = node ? node.ownerDocument || node : preferredDoc;
              return doc == document3 || doc.nodeType !== 9 || !doc.documentElement || (document3 = doc, docElem = document3.documentElement, documentIsHTML = !isXML(document3), preferredDoc != document3 && (subWindow = document3.defaultView) && subWindow.top !== subWindow && (subWindow.addEventListener ? subWindow.addEventListener("unload", unloadHandler, !1) : subWindow.attachEvent && subWindow.attachEvent("onunload", unloadHandler)), support2.scope = assert(function(el) {
                return docElem.appendChild(el).appendChild(document3.createElement("div")), typeof el.querySelectorAll < "u" && !el.querySelectorAll(":scope fieldset div").length;
              }), support2.cssSupportsSelector = assert(function() {
                return CSS.supports("selector(*)") && // Support: Firefox 78-81 only
                // In old Firefox, `:is()` didn't use forgiving parsing. In that case,
                // fail this test as there's no selector to test against that.
                // `CSS.supports` uses unforgiving parsing
                document3.querySelectorAll(":is(:jqfake)") && // `*` is needed as Safari & newer Chrome implemented something in between
                // for `:has()` - it throws in `qSA` if it only contains an unsupported
                // argument but multiple ones, one of which is supported, are fine.
                // We want to play safe in case `:is()` gets the same treatment.
                !CSS.supports("selector(:is(*,:jqfake))");
              }), support2.attributes = assert(function(el) {
                return el.className = "i", !el.getAttribute("className");
              }), support2.getElementsByTagName = assert(function(el) {
                return el.appendChild(document3.createComment("")), !el.getElementsByTagName("*").length;
              }), support2.getElementsByClassName = rnative.test(document3.getElementsByClassName), support2.getById = assert(function(el) {
                return docElem.appendChild(el).id = expando, !document3.getElementsByName || !document3.getElementsByName(expando).length;
              }), support2.getById ? (Expr.filter.ID = function(id) {
                var attrId = id.replace(runescape, funescape);
                return function(elem) {
                  return elem.getAttribute("id") === attrId;
                };
              }, Expr.find.ID = function(id, context) {
                if (typeof context.getElementById < "u" && documentIsHTML) {
                  var elem = context.getElementById(id);
                  return elem ? [elem] : [];
                }
              }) : (Expr.filter.ID = function(id) {
                var attrId = id.replace(runescape, funescape);
                return function(elem) {
                  var node2 = typeof elem.getAttributeNode < "u" && elem.getAttributeNode("id");
                  return node2 && node2.value === attrId;
                };
              }, Expr.find.ID = function(id, context) {
                if (typeof context.getElementById < "u" && documentIsHTML) {
                  var node2, i2, elems, elem = context.getElementById(id);
                  if (elem) {
                    if (node2 = elem.getAttributeNode("id"), node2 && node2.value === id)
                      return [elem];
                    for (elems = context.getElementsByName(id), i2 = 0; elem = elems[i2++]; )
                      if (node2 = elem.getAttributeNode("id"), node2 && node2.value === id)
                        return [elem];
                  }
                  return [];
                }
              }), Expr.find.TAG = support2.getElementsByTagName ? function(tag, context) {
                if (typeof context.getElementsByTagName < "u")
                  return context.getElementsByTagName(tag);
                if (support2.qsa)
                  return context.querySelectorAll(tag);
              } : function(tag, context) {
                var elem, tmp = [], i2 = 0, results = context.getElementsByTagName(tag);
                if (tag === "*") {
                  for (; elem = results[i2++]; )
                    elem.nodeType === 1 && tmp.push(elem);
                  return tmp;
                }
                return results;
              }, Expr.find.CLASS = support2.getElementsByClassName && function(className, context) {
                if (typeof context.getElementsByClassName < "u" && documentIsHTML)
                  return context.getElementsByClassName(className);
              }, rbuggyMatches = [], rbuggyQSA = [], (support2.qsa = rnative.test(document3.querySelectorAll)) && (assert(function(el) {
                var input;
                docElem.appendChild(el).innerHTML = "<a id='" + expando + "'></a><select id='" + expando + "-\r\\' msallowcapture=''><option selected=''></option></select>", el.querySelectorAll("[msallowcapture^='']").length && rbuggyQSA.push("[*^$]=" + whitespace2 + `*(?:''|"")`), el.querySelectorAll("[selected]").length || rbuggyQSA.push("\\[" + whitespace2 + "*(?:value|" + booleans + ")"), el.querySelectorAll("[id~=" + expando + "-]").length || rbuggyQSA.push("~="), input = document3.createElement("input"), input.setAttribute("name", ""), el.appendChild(input), el.querySelectorAll("[name='']").length || rbuggyQSA.push("\\[" + whitespace2 + "*name" + whitespace2 + "*=" + whitespace2 + `*(?:''|"")`), el.querySelectorAll(":checked").length || rbuggyQSA.push(":checked"), el.querySelectorAll("a#" + expando + "+*").length || rbuggyQSA.push(".#.+[+~]"), el.querySelectorAll("\\\f"), rbuggyQSA.push("[\\r\\n\\f]");
              }), assert(function(el) {
                el.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                var input = document3.createElement("input");
                input.setAttribute("type", "hidden"), el.appendChild(input).setAttribute("name", "D"), el.querySelectorAll("[name=d]").length && rbuggyQSA.push("name" + whitespace2 + "*[*^$|!~]?="), el.querySelectorAll(":enabled").length !== 2 && rbuggyQSA.push(":enabled", ":disabled"), docElem.appendChild(el).disabled = !0, el.querySelectorAll(":disabled").length !== 2 && rbuggyQSA.push(":enabled", ":disabled"), el.querySelectorAll("*,:x"), rbuggyQSA.push(",.*:");
              })), (support2.matchesSelector = rnative.test(matches = docElem.matches || docElem.webkitMatchesSelector || docElem.mozMatchesSelector || docElem.oMatchesSelector || docElem.msMatchesSelector)) && assert(function(el) {
                support2.disconnectedMatch = matches.call(el, "*"), matches.call(el, "[s!='']:x"), rbuggyMatches.push("!=", pseudos);
              }), support2.cssSupportsSelector || rbuggyQSA.push(":has"), rbuggyQSA = rbuggyQSA.length && new RegExp(rbuggyQSA.join("|")), rbuggyMatches = rbuggyMatches.length && new RegExp(rbuggyMatches.join("|")), hasCompare = rnative.test(docElem.compareDocumentPosition), contains = hasCompare || rnative.test(docElem.contains) ? function(a, b) {
                var adown = a.nodeType === 9 && a.documentElement || a, bup = b && b.parentNode;
                return a === bup || !!(bup && bup.nodeType === 1 && (adown.contains ? adown.contains(bup) : a.compareDocumentPosition && a.compareDocumentPosition(bup) & 16));
              } : function(a, b) {
                if (b) {
                  for (; b = b.parentNode; )
                    if (b === a)
                      return !0;
                }
                return !1;
              }, sortOrder = hasCompare ? function(a, b) {
                if (a === b)
                  return hasDuplicate = !0, 0;
                var compare = !a.compareDocumentPosition - !b.compareDocumentPosition;
                return compare || (compare = (a.ownerDocument || a) == (b.ownerDocument || b) ? a.compareDocumentPosition(b) : (
                  // Otherwise we know they are disconnected
                  1
                ), compare & 1 || !support2.sortDetached && b.compareDocumentPosition(a) === compare ? a == document3 || a.ownerDocument == preferredDoc && contains(preferredDoc, a) ? -1 : b == document3 || b.ownerDocument == preferredDoc && contains(preferredDoc, b) ? 1 : sortInput ? indexOf2(sortInput, a) - indexOf2(sortInput, b) : 0 : compare & 4 ? -1 : 1);
              } : function(a, b) {
                if (a === b)
                  return hasDuplicate = !0, 0;
                var cur, i2 = 0, aup = a.parentNode, bup = b.parentNode, ap = [a], bp = [b];
                if (!aup || !bup)
                  return a == document3 ? -1 : b == document3 ? 1 : (
                    /* eslint-enable eqeqeq */
                    aup ? -1 : bup ? 1 : sortInput ? indexOf2(sortInput, a) - indexOf2(sortInput, b) : 0
                  );
                if (aup === bup)
                  return siblingCheck(a, b);
                for (cur = a; cur = cur.parentNode; )
                  ap.unshift(cur);
                for (cur = b; cur = cur.parentNode; )
                  bp.unshift(cur);
                for (; ap[i2] === bp[i2]; )
                  i2++;
                return i2 ? (
                  // Do a sibling check if the nodes have a common ancestor
                  siblingCheck(ap[i2], bp[i2])
                ) : (
                  // Otherwise nodes in our document sort first
                  // Support: IE 11+, Edge 17 - 18+
                  // IE/Edge sometimes throw a "Permission denied" error when strict-comparing
                  // two documents; shallow comparisons work.
                  /* eslint-disable eqeqeq */
                  ap[i2] == preferredDoc ? -1 : bp[i2] == preferredDoc ? 1 : (
                    /* eslint-enable eqeqeq */
                    0
                  )
                );
              }), document3;
            }, Sizzle2.matches = function(expr, elements) {
              return Sizzle2(expr, null, null, elements);
            }, Sizzle2.matchesSelector = function(elem, expr) {
              if (setDocument(elem), support2.matchesSelector && documentIsHTML && !nonnativeSelectorCache[expr + " "] && (!rbuggyMatches || !rbuggyMatches.test(expr)) && (!rbuggyQSA || !rbuggyQSA.test(expr)))
                try {
                  var ret = matches.call(elem, expr);
                  if (ret || support2.disconnectedMatch || // As well, disconnected nodes are said to be in a document
                  // fragment in IE 9
                  elem.document && elem.document.nodeType !== 11)
                    return ret;
                } catch {
                  nonnativeSelectorCache(expr, !0);
                }
              return Sizzle2(expr, document3, null, [elem]).length > 0;
            }, Sizzle2.contains = function(context, elem) {
              return (context.ownerDocument || context) != document3 && setDocument(context), contains(context, elem);
            }, Sizzle2.attr = function(elem, name) {
              (elem.ownerDocument || elem) != document3 && setDocument(elem);
              var fn = Expr.attrHandle[name.toLowerCase()], val = fn && hasOwn2.call(Expr.attrHandle, name.toLowerCase()) ? fn(elem, name, !documentIsHTML) : void 0;
              return val !== void 0 ? val : support2.attributes || !documentIsHTML ? elem.getAttribute(name) : (val = elem.getAttributeNode(name)) && val.specified ? val.value : null;
            }, Sizzle2.escape = function(sel) {
              return (sel + "").replace(rcssescape, fcssescape);
            }, Sizzle2.error = function(msg) {
              throw new Error("Syntax error, unrecognized expression: " + msg);
            }, Sizzle2.uniqueSort = function(results) {
              var elem, duplicates = [], j = 0, i2 = 0;
              if (hasDuplicate = !support2.detectDuplicates, sortInput = !support2.sortStable && results.slice(0), results.sort(sortOrder), hasDuplicate) {
                for (; elem = results[i2++]; )
                  elem === results[i2] && (j = duplicates.push(i2));
                for (; j--; )
                  results.splice(duplicates[j], 1);
              }
              return sortInput = null, results;
            }, getText = Sizzle2.getText = function(elem) {
              var node, ret = "", i2 = 0, nodeType = elem.nodeType;
              if (nodeType) {
                if (nodeType === 1 || nodeType === 9 || nodeType === 11) {
                  if (typeof elem.textContent == "string")
                    return elem.textContent;
                  for (elem = elem.firstChild; elem; elem = elem.nextSibling)
                    ret += getText(elem);
                } else if (nodeType === 3 || nodeType === 4)
                  return elem.nodeValue;
              } else
                for (; node = elem[i2++]; )
                  ret += getText(node);
              return ret;
            }, Expr = Sizzle2.selectors = {
              // Can be adjusted by the user
              cacheLength: 50,
              createPseudo: markFunction,
              match: matchExpr,
              attrHandle: {},
              find: {},
              relative: {
                ">": { dir: "parentNode", first: !0 },
                " ": { dir: "parentNode" },
                "+": { dir: "previousSibling", first: !0 },
                "~": { dir: "previousSibling" }
              },
              preFilter: {
                ATTR: function(match) {
                  return match[1] = match[1].replace(runescape, funescape), match[3] = (match[3] || match[4] || match[5] || "").replace(runescape, funescape), match[2] === "~=" && (match[3] = " " + match[3] + " "), match.slice(0, 4);
                },
                CHILD: function(match) {
                  return match[1] = match[1].toLowerCase(), match[1].slice(0, 3) === "nth" ? (match[3] || Sizzle2.error(match[0]), match[4] = +(match[4] ? match[5] + (match[6] || 1) : 2 * (match[3] === "even" || match[3] === "odd")), match[5] = +(match[7] + match[8] || match[3] === "odd")) : match[3] && Sizzle2.error(match[0]), match;
                },
                PSEUDO: function(match) {
                  var excess, unquoted = !match[6] && match[2];
                  return matchExpr.CHILD.test(match[0]) ? null : (match[3] ? match[2] = match[4] || match[5] || "" : unquoted && rpseudo.test(unquoted) && // Get excess from tokenize (recursively)
                  (excess = tokenize(unquoted, !0)) && // advance to the next closing parenthesis
                  (excess = unquoted.indexOf(")", unquoted.length - excess) - unquoted.length) && (match[0] = match[0].slice(0, excess), match[2] = unquoted.slice(0, excess)), match.slice(0, 3));
                }
              },
              filter: {
                TAG: function(nodeNameSelector) {
                  var nodeName2 = nodeNameSelector.replace(runescape, funescape).toLowerCase();
                  return nodeNameSelector === "*" ? function() {
                    return !0;
                  } : function(elem) {
                    return elem.nodeName && elem.nodeName.toLowerCase() === nodeName2;
                  };
                },
                CLASS: function(className) {
                  var pattern = classCache[className + " "];
                  return pattern || (pattern = new RegExp("(^|" + whitespace2 + ")" + className + "(" + whitespace2 + "|$)")) && classCache(
                    className,
                    function(elem) {
                      return pattern.test(
                        typeof elem.className == "string" && elem.className || typeof elem.getAttribute < "u" && elem.getAttribute("class") || ""
                      );
                    }
                  );
                },
                ATTR: function(name, operator, check) {
                  return function(elem) {
                    var result = Sizzle2.attr(elem, name);
                    return result == null ? operator === "!=" : operator ? (result += "", operator === "=" ? result === check : operator === "!=" ? result !== check : operator === "^=" ? check && result.indexOf(check) === 0 : operator === "*=" ? check && result.indexOf(check) > -1 : operator === "$=" ? check && result.slice(-check.length) === check : operator === "~=" ? (" " + result.replace(rwhitespace, " ") + " ").indexOf(check) > -1 : operator === "|=" ? result === check || result.slice(0, check.length + 1) === check + "-" : !1) : !0;
                  };
                },
                CHILD: function(type, what, _argument, first, last) {
                  var simple = type.slice(0, 3) !== "nth", forward = type.slice(-4) !== "last", ofType = what === "of-type";
                  return first === 1 && last === 0 ? (
                    // Shortcut for :nth-*(n)
                    function(elem) {
                      return !!elem.parentNode;
                    }
                  ) : function(elem, _context, xml) {
                    var cache, uniqueCache, outerCache, node, nodeIndex, start, dir2 = simple !== forward ? "nextSibling" : "previousSibling", parent = elem.parentNode, name = ofType && elem.nodeName.toLowerCase(), useCache = !xml && !ofType, diff = !1;
                    if (parent) {
                      if (simple) {
                        for (; dir2; ) {
                          for (node = elem; node = node[dir2]; )
                            if (ofType ? node.nodeName.toLowerCase() === name : node.nodeType === 1)
                              return !1;
                          start = dir2 = type === "only" && !start && "nextSibling";
                        }
                        return !0;
                      }
                      if (start = [forward ? parent.firstChild : parent.lastChild], forward && useCache) {
                        for (node = parent, outerCache = node[expando] || (node[expando] = {}), uniqueCache = outerCache[node.uniqueID] || (outerCache[node.uniqueID] = {}), cache = uniqueCache[type] || [], nodeIndex = cache[0] === dirruns && cache[1], diff = nodeIndex && cache[2], node = nodeIndex && parent.childNodes[nodeIndex]; node = ++nodeIndex && node && node[dir2] || // Fallback to seeking `elem` from the start
                        (diff = nodeIndex = 0) || start.pop(); )
                          if (node.nodeType === 1 && ++diff && node === elem) {
                            uniqueCache[type] = [dirruns, nodeIndex, diff];
                            break;
                          }
                      } else if (useCache && (node = elem, outerCache = node[expando] || (node[expando] = {}), uniqueCache = outerCache[node.uniqueID] || (outerCache[node.uniqueID] = {}), cache = uniqueCache[type] || [], nodeIndex = cache[0] === dirruns && cache[1], diff = nodeIndex), diff === !1)
                        for (; (node = ++nodeIndex && node && node[dir2] || (diff = nodeIndex = 0) || start.pop()) && !((ofType ? node.nodeName.toLowerCase() === name : node.nodeType === 1) && ++diff && (useCache && (outerCache = node[expando] || (node[expando] = {}), uniqueCache = outerCache[node.uniqueID] || (outerCache[node.uniqueID] = {}), uniqueCache[type] = [dirruns, diff]), node === elem)); )
                          ;
                      return diff -= last, diff === first || diff % first === 0 && diff / first >= 0;
                    }
                  };
                },
                PSEUDO: function(pseudo, argument) {
                  var args, fn = Expr.pseudos[pseudo] || Expr.setFilters[pseudo.toLowerCase()] || Sizzle2.error("unsupported pseudo: " + pseudo);
                  return fn[expando] ? fn(argument) : fn.length > 1 ? (args = [pseudo, pseudo, "", argument], Expr.setFilters.hasOwnProperty(pseudo.toLowerCase()) ? markFunction(function(seed, matches2) {
                    for (var idx, matched = fn(seed, argument), i2 = matched.length; i2--; )
                      idx = indexOf2(seed, matched[i2]), seed[idx] = !(matches2[idx] = matched[i2]);
                  }) : function(elem) {
                    return fn(elem, 0, args);
                  }) : fn;
                }
              },
              pseudos: {
                // Potentially complex pseudos
                not: markFunction(function(selector) {
                  var input = [], results = [], matcher = compile(selector.replace(rtrim2, "$1"));
                  return matcher[expando] ? markFunction(function(seed, matches2, _context, xml) {
                    for (var elem, unmatched = matcher(seed, null, xml, []), i2 = seed.length; i2--; )
                      (elem = unmatched[i2]) && (seed[i2] = !(matches2[i2] = elem));
                  }) : function(elem, _context, xml) {
                    return input[0] = elem, matcher(input, null, xml, results), input[0] = null, !results.pop();
                  };
                }),
                has: markFunction(function(selector) {
                  return function(elem) {
                    return Sizzle2(selector, elem).length > 0;
                  };
                }),
                contains: markFunction(function(text) {
                  return text = text.replace(runescape, funescape), function(elem) {
                    return (elem.textContent || getText(elem)).indexOf(text) > -1;
                  };
                }),
                // "Whether an element is represented by a :lang() selector
                // is based solely on the element's language value
                // being equal to the identifier C,
                // or beginning with the identifier C immediately followed by "-".
                // The matching of C against the element's language value is performed case-insensitively.
                // The identifier C does not have to be a valid language name."
                // http://www.w3.org/TR/selectors/#lang-pseudo
                lang: markFunction(function(lang) {
                  return ridentifier.test(lang || "") || Sizzle2.error("unsupported lang: " + lang), lang = lang.replace(runescape, funescape).toLowerCase(), function(elem) {
                    var elemLang;
                    do
                      if (elemLang = documentIsHTML ? elem.lang : elem.getAttribute("xml:lang") || elem.getAttribute("lang"))
                        return elemLang = elemLang.toLowerCase(), elemLang === lang || elemLang.indexOf(lang + "-") === 0;
                    while ((elem = elem.parentNode) && elem.nodeType === 1);
                    return !1;
                  };
                }),
                // Miscellaneous
                target: function(elem) {
                  var hash = window3.location && window3.location.hash;
                  return hash && hash.slice(1) === elem.id;
                },
                root: function(elem) {
                  return elem === docElem;
                },
                focus: function(elem) {
                  return elem === document3.activeElement && (!document3.hasFocus || document3.hasFocus()) && !!(elem.type || elem.href || ~elem.tabIndex);
                },
                // Boolean properties
                enabled: createDisabledPseudo(!1),
                disabled: createDisabledPseudo(!0),
                checked: function(elem) {
                  var nodeName2 = elem.nodeName.toLowerCase();
                  return nodeName2 === "input" && !!elem.checked || nodeName2 === "option" && !!elem.selected;
                },
                selected: function(elem) {
                  return elem.parentNode && elem.parentNode.selectedIndex, elem.selected === !0;
                },
                // Contents
                empty: function(elem) {
                  for (elem = elem.firstChild; elem; elem = elem.nextSibling)
                    if (elem.nodeType < 6)
                      return !1;
                  return !0;
                },
                parent: function(elem) {
                  return !Expr.pseudos.empty(elem);
                },
                // Element/input types
                header: function(elem) {
                  return rheader.test(elem.nodeName);
                },
                input: function(elem) {
                  return rinputs.test(elem.nodeName);
                },
                button: function(elem) {
                  var name = elem.nodeName.toLowerCase();
                  return name === "input" && elem.type === "button" || name === "button";
                },
                text: function(elem) {
                  var attr;
                  return elem.nodeName.toLowerCase() === "input" && elem.type === "text" && // Support: IE <10 only
                  // New HTML5 attribute values (e.g., "search") appear with elem.type === "text"
                  ((attr = elem.getAttribute("type")) == null || attr.toLowerCase() === "text");
                },
                // Position-in-collection
                first: createPositionalPseudo(function() {
                  return [0];
                }),
                last: createPositionalPseudo(function(_matchIndexes, length) {
                  return [length - 1];
                }),
                eq: createPositionalPseudo(function(_matchIndexes, length, argument) {
                  return [argument < 0 ? argument + length : argument];
                }),
                even: createPositionalPseudo(function(matchIndexes, length) {
                  for (var i2 = 0; i2 < length; i2 += 2)
                    matchIndexes.push(i2);
                  return matchIndexes;
                }),
                odd: createPositionalPseudo(function(matchIndexes, length) {
                  for (var i2 = 1; i2 < length; i2 += 2)
                    matchIndexes.push(i2);
                  return matchIndexes;
                }),
                lt: createPositionalPseudo(function(matchIndexes, length, argument) {
                  for (var i2 = argument < 0 ? argument + length : argument > length ? length : argument; --i2 >= 0; )
                    matchIndexes.push(i2);
                  return matchIndexes;
                }),
                gt: createPositionalPseudo(function(matchIndexes, length, argument) {
                  for (var i2 = argument < 0 ? argument + length : argument; ++i2 < length; )
                    matchIndexes.push(i2);
                  return matchIndexes;
                })
              }
            }, Expr.pseudos.nth = Expr.pseudos.eq;
            for (i in { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 })
              Expr.pseudos[i] = createInputPseudo(i);
            for (i in { submit: !0, reset: !0 })
              Expr.pseudos[i] = createButtonPseudo(i);
            function setFilters() {
            }
            setFilters.prototype = Expr.filters = Expr.pseudos, Expr.setFilters = new setFilters(), tokenize = Sizzle2.tokenize = function(selector, parseOnly) {
              var matched, match, tokens, type, soFar, groups, preFilters, cached = tokenCache[selector + " "];
              if (cached)
                return parseOnly ? 0 : cached.slice(0);
              for (soFar = selector, groups = [], preFilters = Expr.preFilter; soFar; ) {
                (!matched || (match = rcomma.exec(soFar))) && (match && (soFar = soFar.slice(match[0].length) || soFar), groups.push(tokens = [])), matched = !1, (match = rcombinators.exec(soFar)) && (matched = match.shift(), tokens.push({
                  value: matched,
                  // Cast descendant combinators to space
                  type: match[0].replace(rtrim2, " ")
                }), soFar = soFar.slice(matched.length));
                for (type in Expr.filter)
                  (match = matchExpr[type].exec(soFar)) && (!preFilters[type] || (match = preFilters[type](match))) && (matched = match.shift(), tokens.push({
                    value: matched,
                    type,
                    matches: match
                  }), soFar = soFar.slice(matched.length));
                if (!matched)
                  break;
              }
              return parseOnly ? soFar.length : soFar ? Sizzle2.error(selector) : (
                // Cache the tokens
                tokenCache(selector, groups).slice(0)
              );
            };
            function toSelector(tokens) {
              for (var i2 = 0, len = tokens.length, selector = ""; i2 < len; i2++)
                selector += tokens[i2].value;
              return selector;
            }
            function addCombinator(matcher, combinator, base) {
              var dir2 = combinator.dir, skip = combinator.next, key = skip || dir2, checkNonElements = base && key === "parentNode", doneName = done++;
              return combinator.first ? (
                // Check against closest ancestor/preceding element
                function(elem, context, xml) {
                  for (; elem = elem[dir2]; )
                    if (elem.nodeType === 1 || checkNonElements)
                      return matcher(elem, context, xml);
                  return !1;
                }
              ) : (
                // Check against all ancestor/preceding elements
                function(elem, context, xml) {
                  var oldCache, uniqueCache, outerCache, newCache = [dirruns, doneName];
                  if (xml) {
                    for (; elem = elem[dir2]; )
                      if ((elem.nodeType === 1 || checkNonElements) && matcher(elem, context, xml))
                        return !0;
                  } else
                    for (; elem = elem[dir2]; )
                      if (elem.nodeType === 1 || checkNonElements)
                        if (outerCache = elem[expando] || (elem[expando] = {}), uniqueCache = outerCache[elem.uniqueID] || (outerCache[elem.uniqueID] = {}), skip && skip === elem.nodeName.toLowerCase())
                          elem = elem[dir2] || elem;
                        else {
                          if ((oldCache = uniqueCache[key]) && oldCache[0] === dirruns && oldCache[1] === doneName)
                            return newCache[2] = oldCache[2];
                          if (uniqueCache[key] = newCache, newCache[2] = matcher(elem, context, xml))
                            return !0;
                        }
                  return !1;
                }
              );
            }
            function elementMatcher(matchers) {
              return matchers.length > 1 ? function(elem, context, xml) {
                for (var i2 = matchers.length; i2--; )
                  if (!matchers[i2](elem, context, xml))
                    return !1;
                return !0;
              } : matchers[0];
            }
            function multipleContexts(selector, contexts, results) {
              for (var i2 = 0, len = contexts.length; i2 < len; i2++)
                Sizzle2(selector, contexts[i2], results);
              return results;
            }
            function condense(unmatched, map, filter, context, xml) {
              for (var elem, newUnmatched = [], i2 = 0, len = unmatched.length, mapped = map != null; i2 < len; i2++)
                (elem = unmatched[i2]) && (!filter || filter(elem, context, xml)) && (newUnmatched.push(elem), mapped && map.push(i2));
              return newUnmatched;
            }
            function setMatcher(preFilter, selector, matcher, postFilter, postFinder, postSelector) {
              return postFilter && !postFilter[expando] && (postFilter = setMatcher(postFilter)), postFinder && !postFinder[expando] && (postFinder = setMatcher(postFinder, postSelector)), markFunction(function(seed, results, context, xml) {
                var temp, i2, elem, preMap = [], postMap = [], preexisting = results.length, elems = seed || multipleContexts(
                  selector || "*",
                  context.nodeType ? [context] : context,
                  []
                ), matcherIn = preFilter && (seed || !selector) ? condense(elems, preMap, preFilter, context, xml) : elems, matcherOut = matcher ? (
                  // If we have a postFinder, or filtered seed, or non-seed postFilter or preexisting results,
                  postFinder || (seed ? preFilter : preexisting || postFilter) ? (
                    // ...intermediate processing is necessary
                    []
                  ) : (
                    // ...otherwise use results directly
                    results
                  )
                ) : matcherIn;
                if (matcher && matcher(matcherIn, matcherOut, context, xml), postFilter)
                  for (temp = condense(matcherOut, postMap), postFilter(temp, [], context, xml), i2 = temp.length; i2--; )
                    (elem = temp[i2]) && (matcherOut[postMap[i2]] = !(matcherIn[postMap[i2]] = elem));
                if (seed) {
                  if (postFinder || preFilter) {
                    if (postFinder) {
                      for (temp = [], i2 = matcherOut.length; i2--; )
                        (elem = matcherOut[i2]) && temp.push(matcherIn[i2] = elem);
                      postFinder(null, matcherOut = [], temp, xml);
                    }
                    for (i2 = matcherOut.length; i2--; )
                      (elem = matcherOut[i2]) && (temp = postFinder ? indexOf2(seed, elem) : preMap[i2]) > -1 && (seed[temp] = !(results[temp] = elem));
                  }
                } else
                  matcherOut = condense(
                    matcherOut === results ? matcherOut.splice(preexisting, matcherOut.length) : matcherOut
                  ), postFinder ? postFinder(null, results, matcherOut, xml) : push2.apply(results, matcherOut);
              });
            }
            function matcherFromTokens(tokens) {
              for (var checkContext, matcher, j, len = tokens.length, leadingRelative = Expr.relative[tokens[0].type], implicitRelative = leadingRelative || Expr.relative[" "], i2 = leadingRelative ? 1 : 0, matchContext = addCombinator(function(elem) {
                return elem === checkContext;
              }, implicitRelative, !0), matchAnyContext = addCombinator(function(elem) {
                return indexOf2(checkContext, elem) > -1;
              }, implicitRelative, !0), matchers = [function(elem, context, xml) {
                var ret = !leadingRelative && (xml || context !== outermostContext) || ((checkContext = context).nodeType ? matchContext(elem, context, xml) : matchAnyContext(elem, context, xml));
                return checkContext = null, ret;
              }]; i2 < len; i2++)
                if (matcher = Expr.relative[tokens[i2].type])
                  matchers = [addCombinator(elementMatcher(matchers), matcher)];
                else {
                  if (matcher = Expr.filter[tokens[i2].type].apply(null, tokens[i2].matches), matcher[expando]) {
                    for (j = ++i2; j < len && !Expr.relative[tokens[j].type]; j++)
                      ;
                    return setMatcher(
                      i2 > 1 && elementMatcher(matchers),
                      i2 > 1 && toSelector(
                        // If the preceding token was a descendant combinator, insert an implicit any-element `*`
                        tokens.slice(0, i2 - 1).concat({ value: tokens[i2 - 2].type === " " ? "*" : "" })
                      ).replace(rtrim2, "$1"),
                      matcher,
                      i2 < j && matcherFromTokens(tokens.slice(i2, j)),
                      j < len && matcherFromTokens(tokens = tokens.slice(j)),
                      j < len && toSelector(tokens)
                    );
                  }
                  matchers.push(matcher);
                }
              return elementMatcher(matchers);
            }
            function matcherFromGroupMatchers(elementMatchers, setMatchers) {
              var bySet = setMatchers.length > 0, byElement = elementMatchers.length > 0, superMatcher = function(seed, context, xml, results, outermost) {
                var elem, j, matcher, matchedCount = 0, i2 = "0", unmatched = seed && [], setMatched = [], contextBackup = outermostContext, elems = seed || byElement && Expr.find.TAG("*", outermost), dirrunsUnique = dirruns += contextBackup == null ? 1 : Math.random() || 0.1, len = elems.length;
                for (outermost && (outermostContext = context == document3 || context || outermost); i2 !== len && (elem = elems[i2]) != null; i2++) {
                  if (byElement && elem) {
                    for (j = 0, !context && elem.ownerDocument != document3 && (setDocument(elem), xml = !documentIsHTML); matcher = elementMatchers[j++]; )
                      if (matcher(elem, context || document3, xml)) {
                        results.push(elem);
                        break;
                      }
                    outermost && (dirruns = dirrunsUnique);
                  }
                  bySet && ((elem = !matcher && elem) && matchedCount--, seed && unmatched.push(elem));
                }
                if (matchedCount += i2, bySet && i2 !== matchedCount) {
                  for (j = 0; matcher = setMatchers[j++]; )
                    matcher(unmatched, setMatched, context, xml);
                  if (seed) {
                    if (matchedCount > 0)
                      for (; i2--; )
                        unmatched[i2] || setMatched[i2] || (setMatched[i2] = pop.call(results));
                    setMatched = condense(setMatched);
                  }
                  push2.apply(results, setMatched), outermost && !seed && setMatched.length > 0 && matchedCount + setMatchers.length > 1 && Sizzle2.uniqueSort(results);
                }
                return outermost && (dirruns = dirrunsUnique, outermostContext = contextBackup), unmatched;
              };
              return bySet ? markFunction(superMatcher) : superMatcher;
            }
            return compile = Sizzle2.compile = function(selector, match) {
              var i2, setMatchers = [], elementMatchers = [], cached = compilerCache[selector + " "];
              if (!cached) {
                for (match || (match = tokenize(selector)), i2 = match.length; i2--; )
                  cached = matcherFromTokens(match[i2]), cached[expando] ? setMatchers.push(cached) : elementMatchers.push(cached);
                cached = compilerCache(
                  selector,
                  matcherFromGroupMatchers(elementMatchers, setMatchers)
                ), cached.selector = selector;
              }
              return cached;
            }, select = Sizzle2.select = function(selector, context, results, seed) {
              var i2, tokens, token, type, find, compiled = typeof selector == "function" && selector, match = !seed && tokenize(selector = compiled.selector || selector);
              if (results = results || [], match.length === 1) {
                if (tokens = match[0] = match[0].slice(0), tokens.length > 2 && (token = tokens[0]).type === "ID" && context.nodeType === 9 && documentIsHTML && Expr.relative[tokens[1].type]) {
                  if (context = (Expr.find.ID(token.matches[0].replace(runescape, funescape), context) || [])[0], context)
                    compiled && (context = context.parentNode);
                  else
                    return results;
                  selector = selector.slice(tokens.shift().value.length);
                }
                for (i2 = matchExpr.needsContext.test(selector) ? 0 : tokens.length; i2-- && (token = tokens[i2], !Expr.relative[type = token.type]); )
                  if ((find = Expr.find[type]) && (seed = find(
                    token.matches[0].replace(runescape, funescape),
                    rsibling.test(tokens[0].type) && testContext(context.parentNode) || context
                  ))) {
                    if (tokens.splice(i2, 1), selector = seed.length && toSelector(tokens), !selector)
                      return push2.apply(results, seed), results;
                    break;
                  }
              }
              return (compiled || compile(selector, match))(
                seed,
                context,
                !documentIsHTML,
                results,
                !context || rsibling.test(selector) && testContext(context.parentNode) || context
              ), results;
            }, support2.sortStable = expando.split("").sort(sortOrder).join("") === expando, support2.detectDuplicates = !!hasDuplicate, setDocument(), support2.sortDetached = assert(function(el) {
              return el.compareDocumentPosition(document3.createElement("fieldset")) & 1;
            }), assert(function(el) {
              return el.innerHTML = "<a href='#'></a>", el.firstChild.getAttribute("href") === "#";
            }) || addHandle("type|href|height|width", function(elem, name, isXML2) {
              if (!isXML2)
                return elem.getAttribute(name, name.toLowerCase() === "type" ? 1 : 2);
            }), (!support2.attributes || !assert(function(el) {
              return el.innerHTML = "<input/>", el.firstChild.setAttribute("value", ""), el.firstChild.getAttribute("value") === "";
            })) && addHandle("value", function(elem, _name, isXML2) {
              if (!isXML2 && elem.nodeName.toLowerCase() === "input")
                return elem.defaultValue;
            }), assert(function(el) {
              return el.getAttribute("disabled") == null;
            }) || addHandle(booleans, function(elem, name, isXML2) {
              var val;
              if (!isXML2)
                return elem[name] === !0 ? name.toLowerCase() : (val = elem.getAttributeNode(name)) && val.specified ? val.value : null;
            }), Sizzle2;
          }(window2)
        );
        jQuery.find = Sizzle, jQuery.expr = Sizzle.selectors, jQuery.expr[":"] = jQuery.expr.pseudos, jQuery.uniqueSort = jQuery.unique = Sizzle.uniqueSort, jQuery.text = Sizzle.getText, jQuery.isXMLDoc = Sizzle.isXML, jQuery.contains = Sizzle.contains, jQuery.escapeSelector = Sizzle.escape;
        var dir = function(elem, dir2, until) {
          for (var matched = [], truncate = until !== void 0; (elem = elem[dir2]) && elem.nodeType !== 9; )
            if (elem.nodeType === 1) {
              if (truncate && jQuery(elem).is(until))
                break;
              matched.push(elem);
            }
          return matched;
        }, siblings = function(n, elem) {
          for (var matched = []; n; n = n.nextSibling)
            n.nodeType === 1 && n !== elem && matched.push(n);
          return matched;
        }, rneedsContext = jQuery.expr.match.needsContext;
        function nodeName(elem, name) {
          return elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase();
        }
        var rsingleTag = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
        function winnow(elements, qualifier, not) {
          return isFunction(qualifier) ? jQuery.grep(elements, function(elem, i) {
            return !!qualifier.call(elem, i, elem) !== not;
          }) : qualifier.nodeType ? jQuery.grep(elements, function(elem) {
            return elem === qualifier !== not;
          }) : typeof qualifier != "string" ? jQuery.grep(elements, function(elem) {
            return indexOf.call(qualifier, elem) > -1 !== not;
          }) : jQuery.filter(qualifier, elements, not);
        }
        jQuery.filter = function(expr, elems, not) {
          var elem = elems[0];
          return not && (expr = ":not(" + expr + ")"), elems.length === 1 && elem.nodeType === 1 ? jQuery.find.matchesSelector(elem, expr) ? [elem] : [] : jQuery.find.matches(expr, jQuery.grep(elems, function(elem2) {
            return elem2.nodeType === 1;
          }));
        }, jQuery.fn.extend({
          find: function(selector) {
            var i, ret, len = this.length, self = this;
            if (typeof selector != "string")
              return this.pushStack(jQuery(selector).filter(function() {
                for (i = 0; i < len; i++)
                  if (jQuery.contains(self[i], this))
                    return !0;
              }));
            for (ret = this.pushStack([]), i = 0; i < len; i++)
              jQuery.find(selector, self[i], ret);
            return len > 1 ? jQuery.uniqueSort(ret) : ret;
          },
          filter: function(selector) {
            return this.pushStack(winnow(this, selector || [], !1));
          },
          not: function(selector) {
            return this.pushStack(winnow(this, selector || [], !0));
          },
          is: function(selector) {
            return !!winnow(
              this,
              // If this is a positional/relative selector, check membership in the returned set
              // so $("p:first").is("p:last") won't return true for a doc with two "p".
              typeof selector == "string" && rneedsContext.test(selector) ? jQuery(selector) : selector || [],
              !1
            ).length;
          }
        });
        var rootjQuery, rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/, init = jQuery.fn.init = function(selector, context, root) {
          var match, elem;
          if (!selector)
            return this;
          if (root = root || rootjQuery, typeof selector == "string")
            if (selector[0] === "<" && selector[selector.length - 1] === ">" && selector.length >= 3 ? match = [null, selector, null] : match = rquickExpr.exec(selector), match && (match[1] || !context))
              if (match[1]) {
                if (context = context instanceof jQuery ? context[0] : context, jQuery.merge(this, jQuery.parseHTML(
                  match[1],
                  context && context.nodeType ? context.ownerDocument || context : document2,
                  !0
                )), rsingleTag.test(match[1]) && jQuery.isPlainObject(context))
                  for (match in context)
                    isFunction(this[match]) ? this[match](context[match]) : this.attr(match, context[match]);
                return this;
              } else
                return elem = document2.getElementById(match[2]), elem && (this[0] = elem, this.length = 1), this;
            else
              return !context || context.jquery ? (context || root).find(selector) : this.constructor(context).find(selector);
          else {
            if (selector.nodeType)
              return this[0] = selector, this.length = 1, this;
            if (isFunction(selector))
              return root.ready !== void 0 ? root.ready(selector) : (
                // Execute immediately if ready is not present
                selector(jQuery)
              );
          }
          return jQuery.makeArray(selector, this);
        };
        init.prototype = jQuery.fn, rootjQuery = jQuery(document2);
        var rparentsprev = /^(?:parents|prev(?:Until|All))/, guaranteedUnique = {
          children: !0,
          contents: !0,
          next: !0,
          prev: !0
        };
        jQuery.fn.extend({
          has: function(target) {
            var targets = jQuery(target, this), l = targets.length;
            return this.filter(function() {
              for (var i = 0; i < l; i++)
                if (jQuery.contains(this, targets[i]))
                  return !0;
            });
          },
          closest: function(selectors, context) {
            var cur, i = 0, l = this.length, matched = [], targets = typeof selectors != "string" && jQuery(selectors);
            if (!rneedsContext.test(selectors)) {
              for (; i < l; i++)
                for (cur = this[i]; cur && cur !== context; cur = cur.parentNode)
                  if (cur.nodeType < 11 && (targets ? targets.index(cur) > -1 : (
                    // Don't pass non-elements to Sizzle
                    cur.nodeType === 1 && jQuery.find.matchesSelector(cur, selectors)
                  ))) {
                    matched.push(cur);
                    break;
                  }
            }
            return this.pushStack(matched.length > 1 ? jQuery.uniqueSort(matched) : matched);
          },
          // Determine the position of an element within the set
          index: function(elem) {
            return elem ? typeof elem == "string" ? indexOf.call(jQuery(elem), this[0]) : indexOf.call(
              this,
              // If it receives a jQuery object, the first element is used
              elem.jquery ? elem[0] : elem
            ) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
          },
          add: function(selector, context) {
            return this.pushStack(
              jQuery.uniqueSort(
                jQuery.merge(this.get(), jQuery(selector, context))
              )
            );
          },
          addBack: function(selector) {
            return this.add(
              selector == null ? this.prevObject : this.prevObject.filter(selector)
            );
          }
        });
        function sibling(cur, dir2) {
          for (; (cur = cur[dir2]) && cur.nodeType !== 1; )
            ;
          return cur;
        }
        jQuery.each({
          parent: function(elem) {
            var parent = elem.parentNode;
            return parent && parent.nodeType !== 11 ? parent : null;
          },
          parents: function(elem) {
            return dir(elem, "parentNode");
          },
          parentsUntil: function(elem, _i, until) {
            return dir(elem, "parentNode", until);
          },
          next: function(elem) {
            return sibling(elem, "nextSibling");
          },
          prev: function(elem) {
            return sibling(elem, "previousSibling");
          },
          nextAll: function(elem) {
            return dir(elem, "nextSibling");
          },
          prevAll: function(elem) {
            return dir(elem, "previousSibling");
          },
          nextUntil: function(elem, _i, until) {
            return dir(elem, "nextSibling", until);
          },
          prevUntil: function(elem, _i, until) {
            return dir(elem, "previousSibling", until);
          },
          siblings: function(elem) {
            return siblings((elem.parentNode || {}).firstChild, elem);
          },
          children: function(elem) {
            return siblings(elem.firstChild);
          },
          contents: function(elem) {
            return elem.contentDocument != null && // Support: IE 11+
            // <object> elements with no `data` attribute has an object
            // `contentDocument` with a `null` prototype.
            getProto(elem.contentDocument) ? elem.contentDocument : (nodeName(elem, "template") && (elem = elem.content || elem), jQuery.merge([], elem.childNodes));
          }
        }, function(name, fn) {
          jQuery.fn[name] = function(until, selector) {
            var matched = jQuery.map(this, fn, until);
            return name.slice(-5) !== "Until" && (selector = until), selector && typeof selector == "string" && (matched = jQuery.filter(selector, matched)), this.length > 1 && (guaranteedUnique[name] || jQuery.uniqueSort(matched), rparentsprev.test(name) && matched.reverse()), this.pushStack(matched);
          };
        });
        var rnothtmlwhite = /[^\x20\t\r\n\f]+/g;
        function createOptions(options) {
          var object = {};
          return jQuery.each(options.match(rnothtmlwhite) || [], function(_, flag) {
            object[flag] = !0;
          }), object;
        }
        jQuery.Callbacks = function(options) {
          options = typeof options == "string" ? createOptions(options) : jQuery.extend({}, options);
          var firing, memory, fired, locked, list = [], queue = [], firingIndex = -1, fire = function() {
            for (locked = locked || options.once, fired = firing = !0; queue.length; firingIndex = -1)
              for (memory = queue.shift(); ++firingIndex < list.length; )
                list[firingIndex].apply(memory[0], memory[1]) === !1 && options.stopOnFalse && (firingIndex = list.length, memory = !1);
            options.memory || (memory = !1), firing = !1, locked && (memory ? list = [] : list = "");
          }, self = {
            // Add a callback or a collection of callbacks to the list
            add: function() {
              return list && (memory && !firing && (firingIndex = list.length - 1, queue.push(memory)), function add(args) {
                jQuery.each(args, function(_, arg) {
                  isFunction(arg) ? (!options.unique || !self.has(arg)) && list.push(arg) : arg && arg.length && toType(arg) !== "string" && add(arg);
                });
              }(arguments), memory && !firing && fire()), this;
            },
            // Remove a callback from the list
            remove: function() {
              return jQuery.each(arguments, function(_, arg) {
                for (var index; (index = jQuery.inArray(arg, list, index)) > -1; )
                  list.splice(index, 1), index <= firingIndex && firingIndex--;
              }), this;
            },
            // Check if a given callback is in the list.
            // If no argument is given, return whether or not list has callbacks attached.
            has: function(fn) {
              return fn ? jQuery.inArray(fn, list) > -1 : list.length > 0;
            },
            // Remove all callbacks from the list
            empty: function() {
              return list && (list = []), this;
            },
            // Disable .fire and .add
            // Abort any current/pending executions
            // Clear all callbacks and values
            disable: function() {
              return locked = queue = [], list = memory = "", this;
            },
            disabled: function() {
              return !list;
            },
            // Disable .fire
            // Also disable .add unless we have memory (since it would have no effect)
            // Abort any pending executions
            lock: function() {
              return locked = queue = [], !memory && !firing && (list = memory = ""), this;
            },
            locked: function() {
              return !!locked;
            },
            // Call all callbacks with the given context and arguments
            fireWith: function(context, args) {
              return locked || (args = args || [], args = [context, args.slice ? args.slice() : args], queue.push(args), firing || fire()), this;
            },
            // Call all the callbacks with the given arguments
            fire: function() {
              return self.fireWith(this, arguments), this;
            },
            // To know if the callbacks have already been called at least once
            fired: function() {
              return !!fired;
            }
          };
          return self;
        };
        function Identity(v) {
          return v;
        }
        function Thrower(ex) {
          throw ex;
        }
        function adoptValue(value, resolve, reject, noValue) {
          var method;
          try {
            value && isFunction(method = value.promise) ? method.call(value).done(resolve).fail(reject) : value && isFunction(method = value.then) ? method.call(value, resolve, reject) : resolve.apply(void 0, [value].slice(noValue));
          } catch (value2) {
            reject.apply(void 0, [value2]);
          }
        }
        jQuery.extend({
          Deferred: function(func) {
            var tuples = [
              // action, add listener, callbacks,
              // ... .then handlers, argument index, [final state]
              [
                "notify",
                "progress",
                jQuery.Callbacks("memory"),
                jQuery.Callbacks("memory"),
                2
              ],
              [
                "resolve",
                "done",
                jQuery.Callbacks("once memory"),
                jQuery.Callbacks("once memory"),
                0,
                "resolved"
              ],
              [
                "reject",
                "fail",
                jQuery.Callbacks("once memory"),
                jQuery.Callbacks("once memory"),
                1,
                "rejected"
              ]
            ], state = "pending", promise = {
              state: function() {
                return state;
              },
              always: function() {
                return deferred.done(arguments).fail(arguments), this;
              },
              catch: function(fn) {
                return promise.then(null, fn);
              },
              // Keep pipe for back-compat
              pipe: function() {
                var fns = arguments;
                return jQuery.Deferred(function(newDefer) {
                  jQuery.each(tuples, function(_i, tuple) {
                    var fn = isFunction(fns[tuple[4]]) && fns[tuple[4]];
                    deferred[tuple[1]](function() {
                      var returned = fn && fn.apply(this, arguments);
                      returned && isFunction(returned.promise) ? returned.promise().progress(newDefer.notify).done(newDefer.resolve).fail(newDefer.reject) : newDefer[tuple[0] + "With"](
                        this,
                        fn ? [returned] : arguments
                      );
                    });
                  }), fns = null;
                }).promise();
              },
              then: function(onFulfilled, onRejected, onProgress) {
                var maxDepth = 0;
                function resolve(depth, deferred2, handler, special) {
                  return function() {
                    var that = this, args = arguments, mightThrow = function() {
                      var returned, then;
                      if (!(depth < maxDepth)) {
                        if (returned = handler.apply(that, args), returned === deferred2.promise())
                          throw new TypeError("Thenable self-resolution");
                        then = returned && // Support: Promises/A+ section 2.3.4
                        // https://promisesaplus.com/#point-64
                        // Only check objects and functions for thenability
                        (typeof returned == "object" || typeof returned == "function") && returned.then, isFunction(then) ? special ? then.call(
                          returned,
                          resolve(maxDepth, deferred2, Identity, special),
                          resolve(maxDepth, deferred2, Thrower, special)
                        ) : (maxDepth++, then.call(
                          returned,
                          resolve(maxDepth, deferred2, Identity, special),
                          resolve(maxDepth, deferred2, Thrower, special),
                          resolve(
                            maxDepth,
                            deferred2,
                            Identity,
                            deferred2.notifyWith
                          )
                        )) : (handler !== Identity && (that = void 0, args = [returned]), (special || deferred2.resolveWith)(that, args));
                      }
                    }, process = special ? mightThrow : function() {
                      try {
                        mightThrow();
                      } catch (e) {
                        jQuery.Deferred.exceptionHook && jQuery.Deferred.exceptionHook(
                          e,
                          process.stackTrace
                        ), depth + 1 >= maxDepth && (handler !== Thrower && (that = void 0, args = [e]), deferred2.rejectWith(that, args));
                      }
                    };
                    depth ? process() : (jQuery.Deferred.getStackHook && (process.stackTrace = jQuery.Deferred.getStackHook()), window2.setTimeout(process));
                  };
                }
                return jQuery.Deferred(function(newDefer) {
                  tuples[0][3].add(
                    resolve(
                      0,
                      newDefer,
                      isFunction(onProgress) ? onProgress : Identity,
                      newDefer.notifyWith
                    )
                  ), tuples[1][3].add(
                    resolve(
                      0,
                      newDefer,
                      isFunction(onFulfilled) ? onFulfilled : Identity
                    )
                  ), tuples[2][3].add(
                    resolve(
                      0,
                      newDefer,
                      isFunction(onRejected) ? onRejected : Thrower
                    )
                  );
                }).promise();
              },
              // Get a promise for this deferred
              // If obj is provided, the promise aspect is added to the object
              promise: function(obj) {
                return obj != null ? jQuery.extend(obj, promise) : promise;
              }
            }, deferred = {};
            return jQuery.each(tuples, function(i, tuple) {
              var list = tuple[2], stateString = tuple[5];
              promise[tuple[1]] = list.add, stateString && list.add(
                function() {
                  state = stateString;
                },
                // rejected_callbacks.disable
                // fulfilled_callbacks.disable
                tuples[3 - i][2].disable,
                // rejected_handlers.disable
                // fulfilled_handlers.disable
                tuples[3 - i][3].disable,
                // progress_callbacks.lock
                tuples[0][2].lock,
                // progress_handlers.lock
                tuples[0][3].lock
              ), list.add(tuple[3].fire), deferred[tuple[0]] = function() {
                return deferred[tuple[0] + "With"](this === deferred ? void 0 : this, arguments), this;
              }, deferred[tuple[0] + "With"] = list.fireWith;
            }), promise.promise(deferred), func && func.call(deferred, deferred), deferred;
          },
          // Deferred helper
          when: function(singleValue) {
            var remaining = arguments.length, i = remaining, resolveContexts = Array(i), resolveValues = slice.call(arguments), primary = jQuery.Deferred(), updateFunc = function(i2) {
              return function(value) {
                resolveContexts[i2] = this, resolveValues[i2] = arguments.length > 1 ? slice.call(arguments) : value, --remaining || primary.resolveWith(resolveContexts, resolveValues);
              };
            };
            if (remaining <= 1 && (adoptValue(
              singleValue,
              primary.done(updateFunc(i)).resolve,
              primary.reject,
              !remaining
            ), primary.state() === "pending" || isFunction(resolveValues[i] && resolveValues[i].then)))
              return primary.then();
            for (; i--; )
              adoptValue(resolveValues[i], updateFunc(i), primary.reject);
            return primary.promise();
          }
        });
        var rerrorNames = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
        jQuery.Deferred.exceptionHook = function(error, stack) {
          window2.console && window2.console.warn && error && rerrorNames.test(error.name) && window2.console.warn("jQuery.Deferred exception: " + error.message, error.stack, stack);
        }, jQuery.readyException = function(error) {
          window2.setTimeout(function() {
            throw error;
          });
        };
        var readyList = jQuery.Deferred();
        jQuery.fn.ready = function(fn) {
          return readyList.then(fn).catch(function(error) {
            jQuery.readyException(error);
          }), this;
        }, jQuery.extend({
          // Is the DOM ready to be used? Set to true once it occurs.
          isReady: !1,
          // A counter to track how many items to wait for before
          // the ready event fires. See trac-6781
          readyWait: 1,
          // Handle when the DOM is ready
          ready: function(wait) {
            (wait === !0 ? --jQuery.readyWait : jQuery.isReady) || (jQuery.isReady = !0, !(wait !== !0 && --jQuery.readyWait > 0) && readyList.resolveWith(document2, [jQuery]));
          }
        }), jQuery.ready.then = readyList.then;
        function completed() {
          document2.removeEventListener("DOMContentLoaded", completed), window2.removeEventListener("load", completed), jQuery.ready();
        }
        document2.readyState === "complete" || document2.readyState !== "loading" && !document2.documentElement.doScroll ? window2.setTimeout(jQuery.ready) : (document2.addEventListener("DOMContentLoaded", completed), window2.addEventListener("load", completed));
        var access = function(elems, fn, key, value, chainable, emptyGet, raw) {
          var i = 0, len = elems.length, bulk = key == null;
          if (toType(key) === "object") {
            chainable = !0;
            for (i in key)
              access(elems, fn, i, key[i], !0, emptyGet, raw);
          } else if (value !== void 0 && (chainable = !0, isFunction(value) || (raw = !0), bulk && (raw ? (fn.call(elems, value), fn = null) : (bulk = fn, fn = function(elem, _key, value2) {
            return bulk.call(jQuery(elem), value2);
          })), fn))
            for (; i < len; i++)
              fn(
                elems[i],
                key,
                raw ? value : value.call(elems[i], i, fn(elems[i], key))
              );
          return chainable ? elems : bulk ? fn.call(elems) : len ? fn(elems[0], key) : emptyGet;
        }, rmsPrefix = /^-ms-/, rdashAlpha = /-([a-z])/g;
        function fcamelCase(_all, letter) {
          return letter.toUpperCase();
        }
        function camelCase(string) {
          return string.replace(rmsPrefix, "ms-").replace(rdashAlpha, fcamelCase);
        }
        var acceptData = function(owner) {
          return owner.nodeType === 1 || owner.nodeType === 9 || !+owner.nodeType;
        };
        function Data() {
          this.expando = jQuery.expando + Data.uid++;
        }
        Data.uid = 1, Data.prototype = {
          cache: function(owner) {
            var value = owner[this.expando];
            return value || (value = {}, acceptData(owner) && (owner.nodeType ? owner[this.expando] = value : Object.defineProperty(owner, this.expando, {
              value,
              configurable: !0
            }))), value;
          },
          set: function(owner, data, value) {
            var prop, cache = this.cache(owner);
            if (typeof data == "string")
              cache[camelCase(data)] = value;
            else
              for (prop in data)
                cache[camelCase(prop)] = data[prop];
            return cache;
          },
          get: function(owner, key) {
            return key === void 0 ? this.cache(owner) : (
              // Always use camelCase key (gh-2257)
              owner[this.expando] && owner[this.expando][camelCase(key)]
            );
          },
          access: function(owner, key, value) {
            return key === void 0 || key && typeof key == "string" && value === void 0 ? this.get(owner, key) : (this.set(owner, key, value), value !== void 0 ? value : key);
          },
          remove: function(owner, key) {
            var i, cache = owner[this.expando];
            if (cache !== void 0) {
              if (key !== void 0)
                for (Array.isArray(key) ? key = key.map(camelCase) : (key = camelCase(key), key = key in cache ? [key] : key.match(rnothtmlwhite) || []), i = key.length; i--; )
                  delete cache[key[i]];
              (key === void 0 || jQuery.isEmptyObject(cache)) && (owner.nodeType ? owner[this.expando] = void 0 : delete owner[this.expando]);
            }
          },
          hasData: function(owner) {
            var cache = owner[this.expando];
            return cache !== void 0 && !jQuery.isEmptyObject(cache);
          }
        };
        var dataPriv = new Data(), dataUser = new Data(), rbrace = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/, rmultiDash = /[A-Z]/g;
        function getData(data) {
          return data === "true" ? !0 : data === "false" ? !1 : data === "null" ? null : data === +data + "" ? +data : rbrace.test(data) ? JSON.parse(data) : data;
        }
        function dataAttr(elem, key, data) {
          var name;
          if (data === void 0 && elem.nodeType === 1)
            if (name = "data-" + key.replace(rmultiDash, "-$&").toLowerCase(), data = elem.getAttribute(name), typeof data == "string") {
              try {
                data = getData(data);
              } catch {
              }
              dataUser.set(elem, key, data);
            } else
              data = void 0;
          return data;
        }
        jQuery.extend({
          hasData: function(elem) {
            return dataUser.hasData(elem) || dataPriv.hasData(elem);
          },
          data: function(elem, name, data) {
            return dataUser.access(elem, name, data);
          },
          removeData: function(elem, name) {
            dataUser.remove(elem, name);
          },
          // TODO: Now that all calls to _data and _removeData have been replaced
          // with direct calls to dataPriv methods, these can be deprecated.
          _data: function(elem, name, data) {
            return dataPriv.access(elem, name, data);
          },
          _removeData: function(elem, name) {
            dataPriv.remove(elem, name);
          }
        }), jQuery.fn.extend({
          data: function(key, value) {
            var i, name, data, elem = this[0], attrs = elem && elem.attributes;
            if (key === void 0) {
              if (this.length && (data = dataUser.get(elem), elem.nodeType === 1 && !dataPriv.get(elem, "hasDataAttrs"))) {
                for (i = attrs.length; i--; )
                  attrs[i] && (name = attrs[i].name, name.indexOf("data-") === 0 && (name = camelCase(name.slice(5)), dataAttr(elem, name, data[name])));
                dataPriv.set(elem, "hasDataAttrs", !0);
              }
              return data;
            }
            return typeof key == "object" ? this.each(function() {
              dataUser.set(this, key);
            }) : access(this, function(value2) {
              var data2;
              if (elem && value2 === void 0)
                return data2 = dataUser.get(elem, key), data2 !== void 0 || (data2 = dataAttr(elem, key), data2 !== void 0) ? data2 : void 0;
              this.each(function() {
                dataUser.set(this, key, value2);
              });
            }, null, value, arguments.length > 1, null, !0);
          },
          removeData: function(key) {
            return this.each(function() {
              dataUser.remove(this, key);
            });
          }
        }), jQuery.extend({
          queue: function(elem, type, data) {
            var queue;
            if (elem)
              return type = (type || "fx") + "queue", queue = dataPriv.get(elem, type), data && (!queue || Array.isArray(data) ? queue = dataPriv.access(elem, type, jQuery.makeArray(data)) : queue.push(data)), queue || [];
          },
          dequeue: function(elem, type) {
            type = type || "fx";
            var queue = jQuery.queue(elem, type), startLength = queue.length, fn = queue.shift(), hooks = jQuery._queueHooks(elem, type), next = function() {
              jQuery.dequeue(elem, type);
            };
            fn === "inprogress" && (fn = queue.shift(), startLength--), fn && (type === "fx" && queue.unshift("inprogress"), delete hooks.stop, fn.call(elem, next, hooks)), !startLength && hooks && hooks.empty.fire();
          },
          // Not public - generate a queueHooks object, or return the current one
          _queueHooks: function(elem, type) {
            var key = type + "queueHooks";
            return dataPriv.get(elem, key) || dataPriv.access(elem, key, {
              empty: jQuery.Callbacks("once memory").add(function() {
                dataPriv.remove(elem, [type + "queue", key]);
              })
            });
          }
        }), jQuery.fn.extend({
          queue: function(type, data) {
            var setter = 2;
            return typeof type != "string" && (data = type, type = "fx", setter--), arguments.length < setter ? jQuery.queue(this[0], type) : data === void 0 ? this : this.each(function() {
              var queue = jQuery.queue(this, type, data);
              jQuery._queueHooks(this, type), type === "fx" && queue[0] !== "inprogress" && jQuery.dequeue(this, type);
            });
          },
          dequeue: function(type) {
            return this.each(function() {
              jQuery.dequeue(this, type);
            });
          },
          clearQueue: function(type) {
            return this.queue(type || "fx", []);
          },
          // Get a promise resolved when queues of a certain type
          // are emptied (fx is the type by default)
          promise: function(type, obj) {
            var tmp, count = 1, defer = jQuery.Deferred(), elements = this, i = this.length, resolve = function() {
              --count || defer.resolveWith(elements, [elements]);
            };
            for (typeof type != "string" && (obj = type, type = void 0), type = type || "fx"; i--; )
              tmp = dataPriv.get(elements[i], type + "queueHooks"), tmp && tmp.empty && (count++, tmp.empty.add(resolve));
            return resolve(), defer.promise(obj);
          }
        });
        var pnum = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source, rcssNum = new RegExp("^(?:([+-])=|)(" + pnum + ")([a-z%]*)$", "i"), cssExpand = ["Top", "Right", "Bottom", "Left"], documentElement = document2.documentElement, isAttached = function(elem) {
          return jQuery.contains(elem.ownerDocument, elem);
        }, composed = { composed: !0 };
        documentElement.getRootNode && (isAttached = function(elem) {
          return jQuery.contains(elem.ownerDocument, elem) || elem.getRootNode(composed) === elem.ownerDocument;
        });
        var isHiddenWithinTree = function(elem, el) {
          return elem = el || elem, elem.style.display === "none" || elem.style.display === "" && // Otherwise, check computed style
          // Support: Firefox <=43 - 45
          // Disconnected elements can have computed display: none, so first confirm that elem is
          // in the document.
          isAttached(elem) && jQuery.css(elem, "display") === "none";
        };
        function adjustCSS(elem, prop, valueParts, tween) {
          var adjusted, scale, maxIterations = 20, currentValue = tween ? function() {
            return tween.cur();
          } : function() {
            return jQuery.css(elem, prop, "");
          }, initial = currentValue(), unit = valueParts && valueParts[3] || (jQuery.cssNumber[prop] ? "" : "px"), initialInUnit = elem.nodeType && (jQuery.cssNumber[prop] || unit !== "px" && +initial) && rcssNum.exec(jQuery.css(elem, prop));
          if (initialInUnit && initialInUnit[3] !== unit) {
            for (initial = initial / 2, unit = unit || initialInUnit[3], initialInUnit = +initial || 1; maxIterations--; )
              jQuery.style(elem, prop, initialInUnit + unit), (1 - scale) * (1 - (scale = currentValue() / initial || 0.5)) <= 0 && (maxIterations = 0), initialInUnit = initialInUnit / scale;
            initialInUnit = initialInUnit * 2, jQuery.style(elem, prop, initialInUnit + unit), valueParts = valueParts || [];
          }
          return valueParts && (initialInUnit = +initialInUnit || +initial || 0, adjusted = valueParts[1] ? initialInUnit + (valueParts[1] + 1) * valueParts[2] : +valueParts[2], tween && (tween.unit = unit, tween.start = initialInUnit, tween.end = adjusted)), adjusted;
        }
        var defaultDisplayMap = {};
        function getDefaultDisplay(elem) {
          var temp, doc = elem.ownerDocument, nodeName2 = elem.nodeName, display = defaultDisplayMap[nodeName2];
          return display || (temp = doc.body.appendChild(doc.createElement(nodeName2)), display = jQuery.css(temp, "display"), temp.parentNode.removeChild(temp), display === "none" && (display = "block"), defaultDisplayMap[nodeName2] = display, display);
        }
        function showHide(elements, show) {
          for (var display, elem, values = [], index = 0, length = elements.length; index < length; index++)
            elem = elements[index], elem.style && (display = elem.style.display, show ? (display === "none" && (values[index] = dataPriv.get(elem, "display") || null, values[index] || (elem.style.display = "")), elem.style.display === "" && isHiddenWithinTree(elem) && (values[index] = getDefaultDisplay(elem))) : display !== "none" && (values[index] = "none", dataPriv.set(elem, "display", display)));
          for (index = 0; index < length; index++)
            values[index] != null && (elements[index].style.display = values[index]);
          return elements;
        }
        jQuery.fn.extend({
          show: function() {
            return showHide(this, !0);
          },
          hide: function() {
            return showHide(this);
          },
          toggle: function(state) {
            return typeof state == "boolean" ? state ? this.show() : this.hide() : this.each(function() {
              isHiddenWithinTree(this) ? jQuery(this).show() : jQuery(this).hide();
            });
          }
        });
        var rcheckableType = /^(?:checkbox|radio)$/i, rtagName = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i, rscriptType = /^$|^module$|\/(?:java|ecma)script/i;
        (function() {
          var fragment = document2.createDocumentFragment(), div = fragment.appendChild(document2.createElement("div")), input = document2.createElement("input");
          input.setAttribute("type", "radio"), input.setAttribute("checked", "checked"), input.setAttribute("name", "t"), div.appendChild(input), support.checkClone = div.cloneNode(!0).cloneNode(!0).lastChild.checked, div.innerHTML = "<textarea>x</textarea>", support.noCloneChecked = !!div.cloneNode(!0).lastChild.defaultValue, div.innerHTML = "<option></option>", support.option = !!div.lastChild;
        })();
        var wrapMap = {
          // XHTML parsers do not magically insert elements in the
          // same way that tag soup parsers do. So we cannot shorten
          // this by omitting <tbody> or other required elements.
          thead: [1, "<table>", "</table>"],
          col: [2, "<table><colgroup>", "</colgroup></table>"],
          tr: [2, "<table><tbody>", "</tbody></table>"],
          td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
          _default: [0, "", ""]
        };
        wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead, wrapMap.th = wrapMap.td, support.option || (wrapMap.optgroup = wrapMap.option = [1, "<select multiple='multiple'>", "</select>"]);
        function getAll(context, tag) {
          var ret;
          return typeof context.getElementsByTagName < "u" ? ret = context.getElementsByTagName(tag || "*") : typeof context.querySelectorAll < "u" ? ret = context.querySelectorAll(tag || "*") : ret = [], tag === void 0 || tag && nodeName(context, tag) ? jQuery.merge([context], ret) : ret;
        }
        function setGlobalEval(elems, refElements) {
          for (var i = 0, l = elems.length; i < l; i++)
            dataPriv.set(
              elems[i],
              "globalEval",
              !refElements || dataPriv.get(refElements[i], "globalEval")
            );
        }
        var rhtml = /<|&#?\w+;/;
        function buildFragment(elems, context, scripts, selection, ignored) {
          for (var elem, tmp, tag, wrap, attached, j, fragment = context.createDocumentFragment(), nodes = [], i = 0, l = elems.length; i < l; i++)
            if (elem = elems[i], elem || elem === 0)
              if (toType(elem) === "object")
                jQuery.merge(nodes, elem.nodeType ? [elem] : elem);
              else if (!rhtml.test(elem))
                nodes.push(context.createTextNode(elem));
              else {
                for (tmp = tmp || fragment.appendChild(context.createElement("div")), tag = (rtagName.exec(elem) || ["", ""])[1].toLowerCase(), wrap = wrapMap[tag] || wrapMap._default, tmp.innerHTML = wrap[1] + jQuery.htmlPrefilter(elem) + wrap[2], j = wrap[0]; j--; )
                  tmp = tmp.lastChild;
                jQuery.merge(nodes, tmp.childNodes), tmp = fragment.firstChild, tmp.textContent = "";
              }
          for (fragment.textContent = "", i = 0; elem = nodes[i++]; ) {
            if (selection && jQuery.inArray(elem, selection) > -1) {
              ignored && ignored.push(elem);
              continue;
            }
            if (attached = isAttached(elem), tmp = getAll(fragment.appendChild(elem), "script"), attached && setGlobalEval(tmp), scripts)
              for (j = 0; elem = tmp[j++]; )
                rscriptType.test(elem.type || "") && scripts.push(elem);
          }
          return fragment;
        }
        var rtypenamespace = /^([^.]*)(?:\.(.+)|)/;
        function returnTrue() {
          return !0;
        }
        function returnFalse() {
          return !1;
        }
        function expectSync(elem, type) {
          return elem === safeActiveElement() == (type === "focus");
        }
        function safeActiveElement() {
          try {
            return document2.activeElement;
          } catch {
          }
        }
        function on(elem, types, selector, data, fn, one) {
          var origFn, type;
          if (typeof types == "object") {
            typeof selector != "string" && (data = data || selector, selector = void 0);
            for (type in types)
              on(elem, type, selector, data, types[type], one);
            return elem;
          }
          if (data == null && fn == null ? (fn = selector, data = selector = void 0) : fn == null && (typeof selector == "string" ? (fn = data, data = void 0) : (fn = data, data = selector, selector = void 0)), fn === !1)
            fn = returnFalse;
          else if (!fn)
            return elem;
          return one === 1 && (origFn = fn, fn = function(event) {
            return jQuery().off(event), origFn.apply(this, arguments);
          }, fn.guid = origFn.guid || (origFn.guid = jQuery.guid++)), elem.each(function() {
            jQuery.event.add(this, types, fn, data, selector);
          });
        }
        jQuery.event = {
          global: {},
          add: function(elem, types, handler, data, selector) {
            var handleObjIn, eventHandle, tmp, events, t, handleObj, special, handlers, type, namespaces, origType, elemData = dataPriv.get(elem);
            if (acceptData(elem))
              for (handler.handler && (handleObjIn = handler, handler = handleObjIn.handler, selector = handleObjIn.selector), selector && jQuery.find.matchesSelector(documentElement, selector), handler.guid || (handler.guid = jQuery.guid++), (events = elemData.events) || (events = elemData.events = /* @__PURE__ */ Object.create(null)), (eventHandle = elemData.handle) || (eventHandle = elemData.handle = function(e) {
                return typeof jQuery < "u" && jQuery.event.triggered !== e.type ? jQuery.event.dispatch.apply(elem, arguments) : void 0;
              }), types = (types || "").match(rnothtmlwhite) || [""], t = types.length; t--; )
                tmp = rtypenamespace.exec(types[t]) || [], type = origType = tmp[1], namespaces = (tmp[2] || "").split(".").sort(), type && (special = jQuery.event.special[type] || {}, type = (selector ? special.delegateType : special.bindType) || type, special = jQuery.event.special[type] || {}, handleObj = jQuery.extend({
                  type,
                  origType,
                  data,
                  handler,
                  guid: handler.guid,
                  selector,
                  needsContext: selector && jQuery.expr.match.needsContext.test(selector),
                  namespace: namespaces.join(".")
                }, handleObjIn), (handlers = events[type]) || (handlers = events[type] = [], handlers.delegateCount = 0, (!special.setup || special.setup.call(elem, data, namespaces, eventHandle) === !1) && elem.addEventListener && elem.addEventListener(type, eventHandle)), special.add && (special.add.call(elem, handleObj), handleObj.handler.guid || (handleObj.handler.guid = handler.guid)), selector ? handlers.splice(handlers.delegateCount++, 0, handleObj) : handlers.push(handleObj), jQuery.event.global[type] = !0);
          },
          // Detach an event or set of events from an element
          remove: function(elem, types, handler, selector, mappedTypes) {
            var j, origCount, tmp, events, t, handleObj, special, handlers, type, namespaces, origType, elemData = dataPriv.hasData(elem) && dataPriv.get(elem);
            if (!(!elemData || !(events = elemData.events))) {
              for (types = (types || "").match(rnothtmlwhite) || [""], t = types.length; t--; ) {
                if (tmp = rtypenamespace.exec(types[t]) || [], type = origType = tmp[1], namespaces = (tmp[2] || "").split(".").sort(), !type) {
                  for (type in events)
                    jQuery.event.remove(elem, type + types[t], handler, selector, !0);
                  continue;
                }
                for (special = jQuery.event.special[type] || {}, type = (selector ? special.delegateType : special.bindType) || type, handlers = events[type] || [], tmp = tmp[2] && new RegExp("(^|\\.)" + namespaces.join("\\.(?:.*\\.|)") + "(\\.|$)"), origCount = j = handlers.length; j--; )
                  handleObj = handlers[j], (mappedTypes || origType === handleObj.origType) && (!handler || handler.guid === handleObj.guid) && (!tmp || tmp.test(handleObj.namespace)) && (!selector || selector === handleObj.selector || selector === "**" && handleObj.selector) && (handlers.splice(j, 1), handleObj.selector && handlers.delegateCount--, special.remove && special.remove.call(elem, handleObj));
                origCount && !handlers.length && ((!special.teardown || special.teardown.call(elem, namespaces, elemData.handle) === !1) && jQuery.removeEvent(elem, type, elemData.handle), delete events[type]);
              }
              jQuery.isEmptyObject(events) && dataPriv.remove(elem, "handle events");
            }
          },
          dispatch: function(nativeEvent) {
            var i, j, ret, matched, handleObj, handlerQueue, args = new Array(arguments.length), event = jQuery.event.fix(nativeEvent), handlers = (dataPriv.get(this, "events") || /* @__PURE__ */ Object.create(null))[event.type] || [], special = jQuery.event.special[event.type] || {};
            for (args[0] = event, i = 1; i < arguments.length; i++)
              args[i] = arguments[i];
            if (event.delegateTarget = this, !(special.preDispatch && special.preDispatch.call(this, event) === !1)) {
              for (handlerQueue = jQuery.event.handlers.call(this, event, handlers), i = 0; (matched = handlerQueue[i++]) && !event.isPropagationStopped(); )
                for (event.currentTarget = matched.elem, j = 0; (handleObj = matched.handlers[j++]) && !event.isImmediatePropagationStopped(); )
                  (!event.rnamespace || handleObj.namespace === !1 || event.rnamespace.test(handleObj.namespace)) && (event.handleObj = handleObj, event.data = handleObj.data, ret = ((jQuery.event.special[handleObj.origType] || {}).handle || handleObj.handler).apply(matched.elem, args), ret !== void 0 && (event.result = ret) === !1 && (event.preventDefault(), event.stopPropagation()));
              return special.postDispatch && special.postDispatch.call(this, event), event.result;
            }
          },
          handlers: function(event, handlers) {
            var i, handleObj, sel, matchedHandlers, matchedSelectors, handlerQueue = [], delegateCount = handlers.delegateCount, cur = event.target;
            if (delegateCount && // Support: IE <=9
            // Black-hole SVG <use> instance trees (trac-13180)
            cur.nodeType && // Support: Firefox <=42
            // Suppress spec-violating clicks indicating a non-primary pointer button (trac-3861)
            // https://www.w3.org/TR/DOM-Level-3-Events/#event-type-click
            // Support: IE 11 only
            // ...but not arrow key "clicks" of radio inputs, which can have `button` -1 (gh-2343)
            !(event.type === "click" && event.button >= 1)) {
              for (; cur !== this; cur = cur.parentNode || this)
                if (cur.nodeType === 1 && !(event.type === "click" && cur.disabled === !0)) {
                  for (matchedHandlers = [], matchedSelectors = {}, i = 0; i < delegateCount; i++)
                    handleObj = handlers[i], sel = handleObj.selector + " ", matchedSelectors[sel] === void 0 && (matchedSelectors[sel] = handleObj.needsContext ? jQuery(sel, this).index(cur) > -1 : jQuery.find(sel, this, null, [cur]).length), matchedSelectors[sel] && matchedHandlers.push(handleObj);
                  matchedHandlers.length && handlerQueue.push({ elem: cur, handlers: matchedHandlers });
                }
            }
            return cur = this, delegateCount < handlers.length && handlerQueue.push({ elem: cur, handlers: handlers.slice(delegateCount) }), handlerQueue;
          },
          addProp: function(name, hook) {
            Object.defineProperty(jQuery.Event.prototype, name, {
              enumerable: !0,
              configurable: !0,
              get: isFunction(hook) ? function() {
                if (this.originalEvent)
                  return hook(this.originalEvent);
              } : function() {
                if (this.originalEvent)
                  return this.originalEvent[name];
              },
              set: function(value) {
                Object.defineProperty(this, name, {
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                  value
                });
              }
            });
          },
          fix: function(originalEvent) {
            return originalEvent[jQuery.expando] ? originalEvent : new jQuery.Event(originalEvent);
          },
          special: {
            load: {
              // Prevent triggered image.load events from bubbling to window.load
              noBubble: !0
            },
            click: {
              // Utilize native event to ensure correct state for checkable inputs
              setup: function(data) {
                var el = this || data;
                return rcheckableType.test(el.type) && el.click && nodeName(el, "input") && leverageNative(el, "click", returnTrue), !1;
              },
              trigger: function(data) {
                var el = this || data;
                return rcheckableType.test(el.type) && el.click && nodeName(el, "input") && leverageNative(el, "click"), !0;
              },
              // For cross-browser consistency, suppress native .click() on links
              // Also prevent it if we're currently inside a leveraged native-event stack
              _default: function(event) {
                var target = event.target;
                return rcheckableType.test(target.type) && target.click && nodeName(target, "input") && dataPriv.get(target, "click") || nodeName(target, "a");
              }
            },
            beforeunload: {
              postDispatch: function(event) {
                event.result !== void 0 && event.originalEvent && (event.originalEvent.returnValue = event.result);
              }
            }
          }
        };
        function leverageNative(el, type, expectSync2) {
          if (!expectSync2) {
            dataPriv.get(el, type) === void 0 && jQuery.event.add(el, type, returnTrue);
            return;
          }
          dataPriv.set(el, type, !1), jQuery.event.add(el, type, {
            namespace: !1,
            handler: function(event) {
              var notAsync, result, saved = dataPriv.get(this, type);
              if (event.isTrigger & 1 && this[type]) {
                if (saved.length)
                  (jQuery.event.special[type] || {}).delegateType && event.stopPropagation();
                else if (saved = slice.call(arguments), dataPriv.set(this, type, saved), notAsync = expectSync2(this, type), this[type](), result = dataPriv.get(this, type), saved !== result || notAsync ? dataPriv.set(this, type, !1) : result = {}, saved !== result)
                  return event.stopImmediatePropagation(), event.preventDefault(), result && result.value;
              } else
                saved.length && (dataPriv.set(this, type, {
                  value: jQuery.event.trigger(
                    // Support: IE <=9 - 11+
                    // Extend with the prototype to reset the above stopImmediatePropagation()
                    jQuery.extend(saved[0], jQuery.Event.prototype),
                    saved.slice(1),
                    this
                  )
                }), event.stopImmediatePropagation());
            }
          });
        }
        jQuery.removeEvent = function(elem, type, handle) {
          elem.removeEventListener && elem.removeEventListener(type, handle);
        }, jQuery.Event = function(src, props) {
          if (!(this instanceof jQuery.Event))
            return new jQuery.Event(src, props);
          src && src.type ? (this.originalEvent = src, this.type = src.type, this.isDefaultPrevented = src.defaultPrevented || src.defaultPrevented === void 0 && // Support: Android <=2.3 only
          src.returnValue === !1 ? returnTrue : returnFalse, this.target = src.target && src.target.nodeType === 3 ? src.target.parentNode : src.target, this.currentTarget = src.currentTarget, this.relatedTarget = src.relatedTarget) : this.type = src, props && jQuery.extend(this, props), this.timeStamp = src && src.timeStamp || Date.now(), this[jQuery.expando] = !0;
        }, jQuery.Event.prototype = {
          constructor: jQuery.Event,
          isDefaultPrevented: returnFalse,
          isPropagationStopped: returnFalse,
          isImmediatePropagationStopped: returnFalse,
          isSimulated: !1,
          preventDefault: function() {
            var e = this.originalEvent;
            this.isDefaultPrevented = returnTrue, e && !this.isSimulated && e.preventDefault();
          },
          stopPropagation: function() {
            var e = this.originalEvent;
            this.isPropagationStopped = returnTrue, e && !this.isSimulated && e.stopPropagation();
          },
          stopImmediatePropagation: function() {
            var e = this.originalEvent;
            this.isImmediatePropagationStopped = returnTrue, e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation();
          }
        }, jQuery.each({
          altKey: !0,
          bubbles: !0,
          cancelable: !0,
          changedTouches: !0,
          ctrlKey: !0,
          detail: !0,
          eventPhase: !0,
          metaKey: !0,
          pageX: !0,
          pageY: !0,
          shiftKey: !0,
          view: !0,
          char: !0,
          code: !0,
          charCode: !0,
          key: !0,
          keyCode: !0,
          button: !0,
          buttons: !0,
          clientX: !0,
          clientY: !0,
          offsetX: !0,
          offsetY: !0,
          pointerId: !0,
          pointerType: !0,
          screenX: !0,
          screenY: !0,
          targetTouches: !0,
          toElement: !0,
          touches: !0,
          which: !0
        }, jQuery.event.addProp), jQuery.each({ focus: "focusin", blur: "focusout" }, function(type, delegateType) {
          jQuery.event.special[type] = {
            // Utilize native event if possible so blur/focus sequence is correct
            setup: function() {
              return leverageNative(this, type, expectSync), !1;
            },
            trigger: function() {
              return leverageNative(this, type), !0;
            },
            // Suppress native focus or blur if we're currently inside
            // a leveraged native-event stack
            _default: function(event) {
              return dataPriv.get(event.target, type);
            },
            delegateType
          };
        }), jQuery.each({
          mouseenter: "mouseover",
          mouseleave: "mouseout",
          pointerenter: "pointerover",
          pointerleave: "pointerout"
        }, function(orig, fix) {
          jQuery.event.special[orig] = {
            delegateType: fix,
            bindType: fix,
            handle: function(event) {
              var ret, target = this, related = event.relatedTarget, handleObj = event.handleObj;
              return (!related || related !== target && !jQuery.contains(target, related)) && (event.type = handleObj.origType, ret = handleObj.handler.apply(this, arguments), event.type = fix), ret;
            }
          };
        }), jQuery.fn.extend({
          on: function(types, selector, data, fn) {
            return on(this, types, selector, data, fn);
          },
          one: function(types, selector, data, fn) {
            return on(this, types, selector, data, fn, 1);
          },
          off: function(types, selector, fn) {
            var handleObj, type;
            if (types && types.preventDefault && types.handleObj)
              return handleObj = types.handleObj, jQuery(types.delegateTarget).off(
                handleObj.namespace ? handleObj.origType + "." + handleObj.namespace : handleObj.origType,
                handleObj.selector,
                handleObj.handler
              ), this;
            if (typeof types == "object") {
              for (type in types)
                this.off(type, selector, types[type]);
              return this;
            }
            return (selector === !1 || typeof selector == "function") && (fn = selector, selector = void 0), fn === !1 && (fn = returnFalse), this.each(function() {
              jQuery.event.remove(this, types, fn, selector);
            });
          }
        });
        var rnoInnerhtml = /<script|<style|<link/i, rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i, rcleanScript = /^\s*<!\[CDATA\[|\]\]>\s*$/g;
        function manipulationTarget(elem, content) {
          return nodeName(elem, "table") && nodeName(content.nodeType !== 11 ? content : content.firstChild, "tr") && jQuery(elem).children("tbody")[0] || elem;
        }
        function disableScript(elem) {
          return elem.type = (elem.getAttribute("type") !== null) + "/" + elem.type, elem;
        }
        function restoreScript(elem) {
          return (elem.type || "").slice(0, 5) === "true/" ? elem.type = elem.type.slice(5) : elem.removeAttribute("type"), elem;
        }
        function cloneCopyEvent(src, dest) {
          var i, l, type, pdataOld, udataOld, udataCur, events;
          if (dest.nodeType === 1) {
            if (dataPriv.hasData(src) && (pdataOld = dataPriv.get(src), events = pdataOld.events, events)) {
              dataPriv.remove(dest, "handle events");
              for (type in events)
                for (i = 0, l = events[type].length; i < l; i++)
                  jQuery.event.add(dest, type, events[type][i]);
            }
            dataUser.hasData(src) && (udataOld = dataUser.access(src), udataCur = jQuery.extend({}, udataOld), dataUser.set(dest, udataCur));
          }
        }
        function fixInput(src, dest) {
          var nodeName2 = dest.nodeName.toLowerCase();
          nodeName2 === "input" && rcheckableType.test(src.type) ? dest.checked = src.checked : (nodeName2 === "input" || nodeName2 === "textarea") && (dest.defaultValue = src.defaultValue);
        }
        function domManip(collection, args, callback, ignored) {
          args = flat(args);
          var fragment, first, scripts, hasScripts, node, doc, i = 0, l = collection.length, iNoClone = l - 1, value = args[0], valueIsFunction = isFunction(value);
          if (valueIsFunction || l > 1 && typeof value == "string" && !support.checkClone && rchecked.test(value))
            return collection.each(function(index) {
              var self = collection.eq(index);
              valueIsFunction && (args[0] = value.call(this, index, self.html())), domManip(self, args, callback, ignored);
            });
          if (l && (fragment = buildFragment(args, collection[0].ownerDocument, !1, collection, ignored), first = fragment.firstChild, fragment.childNodes.length === 1 && (fragment = first), first || ignored)) {
            for (scripts = jQuery.map(getAll(fragment, "script"), disableScript), hasScripts = scripts.length; i < l; i++)
              node = fragment, i !== iNoClone && (node = jQuery.clone(node, !0, !0), hasScripts && jQuery.merge(scripts, getAll(node, "script"))), callback.call(collection[i], node, i);
            if (hasScripts)
              for (doc = scripts[scripts.length - 1].ownerDocument, jQuery.map(scripts, restoreScript), i = 0; i < hasScripts; i++)
                node = scripts[i], rscriptType.test(node.type || "") && !dataPriv.access(node, "globalEval") && jQuery.contains(doc, node) && (node.src && (node.type || "").toLowerCase() !== "module" ? jQuery._evalUrl && !node.noModule && jQuery._evalUrl(node.src, {
                  nonce: node.nonce || node.getAttribute("nonce")
                }, doc) : DOMEval(node.textContent.replace(rcleanScript, ""), node, doc));
          }
          return collection;
        }
        function remove(elem, selector, keepData) {
          for (var node, nodes = selector ? jQuery.filter(selector, elem) : elem, i = 0; (node = nodes[i]) != null; i++)
            !keepData && node.nodeType === 1 && jQuery.cleanData(getAll(node)), node.parentNode && (keepData && isAttached(node) && setGlobalEval(getAll(node, "script")), node.parentNode.removeChild(node));
          return elem;
        }
        jQuery.extend({
          htmlPrefilter: function(html) {
            return html;
          },
          clone: function(elem, dataAndEvents, deepDataAndEvents) {
            var i, l, srcElements, destElements, clone = elem.cloneNode(!0), inPage = isAttached(elem);
            if (!support.noCloneChecked && (elem.nodeType === 1 || elem.nodeType === 11) && !jQuery.isXMLDoc(elem))
              for (destElements = getAll(clone), srcElements = getAll(elem), i = 0, l = srcElements.length; i < l; i++)
                fixInput(srcElements[i], destElements[i]);
            if (dataAndEvents)
              if (deepDataAndEvents)
                for (srcElements = srcElements || getAll(elem), destElements = destElements || getAll(clone), i = 0, l = srcElements.length; i < l; i++)
                  cloneCopyEvent(srcElements[i], destElements[i]);
              else
                cloneCopyEvent(elem, clone);
            return destElements = getAll(clone, "script"), destElements.length > 0 && setGlobalEval(destElements, !inPage && getAll(elem, "script")), clone;
          },
          cleanData: function(elems) {
            for (var data, elem, type, special = jQuery.event.special, i = 0; (elem = elems[i]) !== void 0; i++)
              if (acceptData(elem)) {
                if (data = elem[dataPriv.expando]) {
                  if (data.events)
                    for (type in data.events)
                      special[type] ? jQuery.event.remove(elem, type) : jQuery.removeEvent(elem, type, data.handle);
                  elem[dataPriv.expando] = void 0;
                }
                elem[dataUser.expando] && (elem[dataUser.expando] = void 0);
              }
          }
        }), jQuery.fn.extend({
          detach: function(selector) {
            return remove(this, selector, !0);
          },
          remove: function(selector) {
            return remove(this, selector);
          },
          text: function(value) {
            return access(this, function(value2) {
              return value2 === void 0 ? jQuery.text(this) : this.empty().each(function() {
                (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) && (this.textContent = value2);
              });
            }, null, value, arguments.length);
          },
          append: function() {
            return domManip(this, arguments, function(elem) {
              if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
                var target = manipulationTarget(this, elem);
                target.appendChild(elem);
              }
            });
          },
          prepend: function() {
            return domManip(this, arguments, function(elem) {
              if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
                var target = manipulationTarget(this, elem);
                target.insertBefore(elem, target.firstChild);
              }
            });
          },
          before: function() {
            return domManip(this, arguments, function(elem) {
              this.parentNode && this.parentNode.insertBefore(elem, this);
            });
          },
          after: function() {
            return domManip(this, arguments, function(elem) {
              this.parentNode && this.parentNode.insertBefore(elem, this.nextSibling);
            });
          },
          empty: function() {
            for (var elem, i = 0; (elem = this[i]) != null; i++)
              elem.nodeType === 1 && (jQuery.cleanData(getAll(elem, !1)), elem.textContent = "");
            return this;
          },
          clone: function(dataAndEvents, deepDataAndEvents) {
            return dataAndEvents = dataAndEvents ?? !1, deepDataAndEvents = deepDataAndEvents ?? dataAndEvents, this.map(function() {
              return jQuery.clone(this, dataAndEvents, deepDataAndEvents);
            });
          },
          html: function(value) {
            return access(this, function(value2) {
              var elem = this[0] || {}, i = 0, l = this.length;
              if (value2 === void 0 && elem.nodeType === 1)
                return elem.innerHTML;
              if (typeof value2 == "string" && !rnoInnerhtml.test(value2) && !wrapMap[(rtagName.exec(value2) || ["", ""])[1].toLowerCase()]) {
                value2 = jQuery.htmlPrefilter(value2);
                try {
                  for (; i < l; i++)
                    elem = this[i] || {}, elem.nodeType === 1 && (jQuery.cleanData(getAll(elem, !1)), elem.innerHTML = value2);
                  elem = 0;
                } catch {
                }
              }
              elem && this.empty().append(value2);
            }, null, value, arguments.length);
          },
          replaceWith: function() {
            var ignored = [];
            return domManip(this, arguments, function(elem) {
              var parent = this.parentNode;
              jQuery.inArray(this, ignored) < 0 && (jQuery.cleanData(getAll(this)), parent && parent.replaceChild(elem, this));
            }, ignored);
          }
        }), jQuery.each({
          appendTo: "append",
          prependTo: "prepend",
          insertBefore: "before",
          insertAfter: "after",
          replaceAll: "replaceWith"
        }, function(name, original) {
          jQuery.fn[name] = function(selector) {
            for (var elems, ret = [], insert = jQuery(selector), last = insert.length - 1, i = 0; i <= last; i++)
              elems = i === last ? this : this.clone(!0), jQuery(insert[i])[original](elems), push.apply(ret, elems.get());
            return this.pushStack(ret);
          };
        });
        var rnumnonpx = new RegExp("^(" + pnum + ")(?!px)[a-z%]+$", "i"), rcustomProp = /^--/, getStyles = function(elem) {
          var view = elem.ownerDocument.defaultView;
          return (!view || !view.opener) && (view = window2), view.getComputedStyle(elem);
        }, swap = function(elem, options, callback) {
          var ret, name, old = {};
          for (name in options)
            old[name] = elem.style[name], elem.style[name] = options[name];
          ret = callback.call(elem);
          for (name in options)
            elem.style[name] = old[name];
          return ret;
        }, rboxStyle = new RegExp(cssExpand.join("|"), "i"), whitespace = "[\\x20\\t\\r\\n\\f]", rtrimCSS = new RegExp(
          "^" + whitespace + "+|((?:^|[^\\\\])(?:\\\\.)*)" + whitespace + "+$",
          "g"
        );
        (function() {
          function computeStyleTests() {
            if (div) {
              container.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0", div.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%", documentElement.appendChild(container).appendChild(div);
              var divStyle = window2.getComputedStyle(div);
              pixelPositionVal = divStyle.top !== "1%", reliableMarginLeftVal = roundPixelMeasures(divStyle.marginLeft) === 12, div.style.right = "60%", pixelBoxStylesVal = roundPixelMeasures(divStyle.right) === 36, boxSizingReliableVal = roundPixelMeasures(divStyle.width) === 36, div.style.position = "absolute", scrollboxSizeVal = roundPixelMeasures(div.offsetWidth / 3) === 12, documentElement.removeChild(container), div = null;
            }
          }
          function roundPixelMeasures(measure) {
            return Math.round(parseFloat(measure));
          }
          var pixelPositionVal, boxSizingReliableVal, scrollboxSizeVal, pixelBoxStylesVal, reliableTrDimensionsVal, reliableMarginLeftVal, container = document2.createElement("div"), div = document2.createElement("div");
          div.style && (div.style.backgroundClip = "content-box", div.cloneNode(!0).style.backgroundClip = "", support.clearCloneStyle = div.style.backgroundClip === "content-box", jQuery.extend(support, {
            boxSizingReliable: function() {
              return computeStyleTests(), boxSizingReliableVal;
            },
            pixelBoxStyles: function() {
              return computeStyleTests(), pixelBoxStylesVal;
            },
            pixelPosition: function() {
              return computeStyleTests(), pixelPositionVal;
            },
            reliableMarginLeft: function() {
              return computeStyleTests(), reliableMarginLeftVal;
            },
            scrollboxSize: function() {
              return computeStyleTests(), scrollboxSizeVal;
            },
            // Support: IE 9 - 11+, Edge 15 - 18+
            // IE/Edge misreport `getComputedStyle` of table rows with width/height
            // set in CSS while `offset*` properties report correct values.
            // Behavior in IE 9 is more subtle than in newer versions & it passes
            // some versions of this test; make sure not to make it pass there!
            //
            // Support: Firefox 70+
            // Only Firefox includes border widths
            // in computed dimensions. (gh-4529)
            reliableTrDimensions: function() {
              var table, tr, trChild, trStyle;
              return reliableTrDimensionsVal == null && (table = document2.createElement("table"), tr = document2.createElement("tr"), trChild = document2.createElement("div"), table.style.cssText = "position:absolute;left:-11111px;border-collapse:separate", tr.style.cssText = "border:1px solid", tr.style.height = "1px", trChild.style.height = "9px", trChild.style.display = "block", documentElement.appendChild(table).appendChild(tr).appendChild(trChild), trStyle = window2.getComputedStyle(tr), reliableTrDimensionsVal = parseInt(trStyle.height, 10) + parseInt(trStyle.borderTopWidth, 10) + parseInt(trStyle.borderBottomWidth, 10) === tr.offsetHeight, documentElement.removeChild(table)), reliableTrDimensionsVal;
            }
          }));
        })();
        function curCSS(elem, name, computed) {
          var width, minWidth, maxWidth, ret, isCustomProp = rcustomProp.test(name), style = elem.style;
          return computed = computed || getStyles(elem), computed && (ret = computed.getPropertyValue(name) || computed[name], isCustomProp && ret && (ret = ret.replace(rtrimCSS, "$1") || void 0), ret === "" && !isAttached(elem) && (ret = jQuery.style(elem, name)), !support.pixelBoxStyles() && rnumnonpx.test(ret) && rboxStyle.test(name) && (width = style.width, minWidth = style.minWidth, maxWidth = style.maxWidth, style.minWidth = style.maxWidth = style.width = ret, ret = computed.width, style.width = width, style.minWidth = minWidth, style.maxWidth = maxWidth)), ret !== void 0 ? (
            // Support: IE <=9 - 11 only
            // IE returns zIndex value as an integer.
            ret + ""
          ) : ret;
        }
        function addGetHookIf(conditionFn, hookFn) {
          return {
            get: function() {
              if (conditionFn()) {
                delete this.get;
                return;
              }
              return (this.get = hookFn).apply(this, arguments);
            }
          };
        }
        var cssPrefixes = ["Webkit", "Moz", "ms"], emptyStyle = document2.createElement("div").style, vendorProps = {};
        function vendorPropName(name) {
          for (var capName = name[0].toUpperCase() + name.slice(1), i = cssPrefixes.length; i--; )
            if (name = cssPrefixes[i] + capName, name in emptyStyle)
              return name;
        }
        function finalPropName(name) {
          var final = jQuery.cssProps[name] || vendorProps[name];
          return final || (name in emptyStyle ? name : vendorProps[name] = vendorPropName(name) || name);
        }
        var rdisplayswap = /^(none|table(?!-c[ea]).+)/, cssShow = { position: "absolute", visibility: "hidden", display: "block" }, cssNormalTransform = {
          letterSpacing: "0",
          fontWeight: "400"
        };
        function setPositiveNumber(_elem, value, subtract) {
          var matches = rcssNum.exec(value);
          return matches ? (
            // Guard against undefined "subtract", e.g., when used as in cssHooks
            Math.max(0, matches[2] - (subtract || 0)) + (matches[3] || "px")
          ) : value;
        }
        function boxModelAdjustment(elem, dimension, box, isBorderBox, styles, computedVal) {
          var i = dimension === "width" ? 1 : 0, extra = 0, delta = 0;
          if (box === (isBorderBox ? "border" : "content"))
            return 0;
          for (; i < 4; i += 2)
            box === "margin" && (delta += jQuery.css(elem, box + cssExpand[i], !0, styles)), isBorderBox ? (box === "content" && (delta -= jQuery.css(elem, "padding" + cssExpand[i], !0, styles)), box !== "margin" && (delta -= jQuery.css(elem, "border" + cssExpand[i] + "Width", !0, styles))) : (delta += jQuery.css(elem, "padding" + cssExpand[i], !0, styles), box !== "padding" ? delta += jQuery.css(elem, "border" + cssExpand[i] + "Width", !0, styles) : extra += jQuery.css(elem, "border" + cssExpand[i] + "Width", !0, styles));
          return !isBorderBox && computedVal >= 0 && (delta += Math.max(0, Math.ceil(
            elem["offset" + dimension[0].toUpperCase() + dimension.slice(1)] - computedVal - delta - extra - 0.5
            // If offsetWidth/offsetHeight is unknown, then we can't determine content-box scroll gutter
            // Use an explicit zero to avoid NaN (gh-3964)
          )) || 0), delta;
        }
        function getWidthOrHeight(elem, dimension, extra) {
          var styles = getStyles(elem), boxSizingNeeded = !support.boxSizingReliable() || extra, isBorderBox = boxSizingNeeded && jQuery.css(elem, "boxSizing", !1, styles) === "border-box", valueIsBorderBox = isBorderBox, val = curCSS(elem, dimension, styles), offsetProp = "offset" + dimension[0].toUpperCase() + dimension.slice(1);
          if (rnumnonpx.test(val)) {
            if (!extra)
              return val;
            val = "auto";
          }
          return (!support.boxSizingReliable() && isBorderBox || // Support: IE 10 - 11+, Edge 15 - 18+
          // IE/Edge misreport `getComputedStyle` of table rows with width/height
          // set in CSS while `offset*` properties report correct values.
          // Interestingly, in some cases IE 9 doesn't suffer from this issue.
          !support.reliableTrDimensions() && nodeName(elem, "tr") || // Fall back to offsetWidth/offsetHeight when value is "auto"
          // This happens for inline elements with no explicit setting (gh-3571)
          val === "auto" || // Support: Android <=4.1 - 4.3 only
          // Also use offsetWidth/offsetHeight for misreported inline dimensions (gh-3602)
          !parseFloat(val) && jQuery.css(elem, "display", !1, styles) === "inline") && // Make sure the element is visible & connected
          elem.getClientRects().length && (isBorderBox = jQuery.css(elem, "boxSizing", !1, styles) === "border-box", valueIsBorderBox = offsetProp in elem, valueIsBorderBox && (val = elem[offsetProp])), val = parseFloat(val) || 0, val + boxModelAdjustment(
            elem,
            dimension,
            extra || (isBorderBox ? "border" : "content"),
            valueIsBorderBox,
            styles,
            // Provide the current computed size to request scroll gutter calculation (gh-3589)
            val
          ) + "px";
        }
        jQuery.extend({
          // Add in style property hooks for overriding the default
          // behavior of getting and setting a style property
          cssHooks: {
            opacity: {
              get: function(elem, computed) {
                if (computed) {
                  var ret = curCSS(elem, "opacity");
                  return ret === "" ? "1" : ret;
                }
              }
            }
          },
          // Don't automatically add "px" to these possibly-unitless properties
          cssNumber: {
            animationIterationCount: !0,
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            gridArea: !0,
            gridColumn: !0,
            gridColumnEnd: !0,
            gridColumnStart: !0,
            gridRow: !0,
            gridRowEnd: !0,
            gridRowStart: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
          },
          // Add in properties whose names you wish to fix before
          // setting or getting the value
          cssProps: {},
          // Get and set the style property on a DOM Node
          style: function(elem, name, value, extra) {
            if (!(!elem || elem.nodeType === 3 || elem.nodeType === 8 || !elem.style)) {
              var ret, type, hooks, origName = camelCase(name), isCustomProp = rcustomProp.test(name), style = elem.style;
              if (isCustomProp || (name = finalPropName(origName)), hooks = jQuery.cssHooks[name] || jQuery.cssHooks[origName], value !== void 0) {
                if (type = typeof value, type === "string" && (ret = rcssNum.exec(value)) && ret[1] && (value = adjustCSS(elem, name, ret), type = "number"), value == null || value !== value)
                  return;
                type === "number" && !isCustomProp && (value += ret && ret[3] || (jQuery.cssNumber[origName] ? "" : "px")), !support.clearCloneStyle && value === "" && name.indexOf("background") === 0 && (style[name] = "inherit"), (!hooks || !("set" in hooks) || (value = hooks.set(elem, value, extra)) !== void 0) && (isCustomProp ? style.setProperty(name, value) : style[name] = value);
              } else
                return hooks && "get" in hooks && (ret = hooks.get(elem, !1, extra)) !== void 0 ? ret : style[name];
            }
          },
          css: function(elem, name, extra, styles) {
            var val, num, hooks, origName = camelCase(name), isCustomProp = rcustomProp.test(name);
            return isCustomProp || (name = finalPropName(origName)), hooks = jQuery.cssHooks[name] || jQuery.cssHooks[origName], hooks && "get" in hooks && (val = hooks.get(elem, !0, extra)), val === void 0 && (val = curCSS(elem, name, styles)), val === "normal" && name in cssNormalTransform && (val = cssNormalTransform[name]), extra === "" || extra ? (num = parseFloat(val), extra === !0 || isFinite(num) ? num || 0 : val) : val;
          }
        }), jQuery.each(["height", "width"], function(_i, dimension) {
          jQuery.cssHooks[dimension] = {
            get: function(elem, computed, extra) {
              if (computed)
                return rdisplayswap.test(jQuery.css(elem, "display")) && // Support: Safari 8+
                // Table columns in Safari have non-zero offsetWidth & zero
                // getBoundingClientRect().width unless display is changed.
                // Support: IE <=11 only
                // Running getBoundingClientRect on a disconnected node
                // in IE throws an error.
                (!elem.getClientRects().length || !elem.getBoundingClientRect().width) ? swap(elem, cssShow, function() {
                  return getWidthOrHeight(elem, dimension, extra);
                }) : getWidthOrHeight(elem, dimension, extra);
            },
            set: function(elem, value, extra) {
              var matches, styles = getStyles(elem), scrollboxSizeBuggy = !support.scrollboxSize() && styles.position === "absolute", boxSizingNeeded = scrollboxSizeBuggy || extra, isBorderBox = boxSizingNeeded && jQuery.css(elem, "boxSizing", !1, styles) === "border-box", subtract = extra ? boxModelAdjustment(
                elem,
                dimension,
                extra,
                isBorderBox,
                styles
              ) : 0;
              return isBorderBox && scrollboxSizeBuggy && (subtract -= Math.ceil(
                elem["offset" + dimension[0].toUpperCase() + dimension.slice(1)] - parseFloat(styles[dimension]) - boxModelAdjustment(elem, dimension, "border", !1, styles) - 0.5
              )), subtract && (matches = rcssNum.exec(value)) && (matches[3] || "px") !== "px" && (elem.style[dimension] = value, value = jQuery.css(elem, dimension)), setPositiveNumber(elem, value, subtract);
            }
          };
        }), jQuery.cssHooks.marginLeft = addGetHookIf(
          support.reliableMarginLeft,
          function(elem, computed) {
            if (computed)
              return (parseFloat(curCSS(elem, "marginLeft")) || elem.getBoundingClientRect().left - swap(elem, { marginLeft: 0 }, function() {
                return elem.getBoundingClientRect().left;
              })) + "px";
          }
        ), jQuery.each({
          margin: "",
          padding: "",
          border: "Width"
        }, function(prefix, suffix) {
          jQuery.cssHooks[prefix + suffix] = {
            expand: function(value) {
              for (var i = 0, expanded = {}, parts = typeof value == "string" ? value.split(" ") : [value]; i < 4; i++)
                expanded[prefix + cssExpand[i] + suffix] = parts[i] || parts[i - 2] || parts[0];
              return expanded;
            }
          }, prefix !== "margin" && (jQuery.cssHooks[prefix + suffix].set = setPositiveNumber);
        }), jQuery.fn.extend({
          css: function(name, value) {
            return access(this, function(elem, name2, value2) {
              var styles, len, map = {}, i = 0;
              if (Array.isArray(name2)) {
                for (styles = getStyles(elem), len = name2.length; i < len; i++)
                  map[name2[i]] = jQuery.css(elem, name2[i], !1, styles);
                return map;
              }
              return value2 !== void 0 ? jQuery.style(elem, name2, value2) : jQuery.css(elem, name2);
            }, name, value, arguments.length > 1);
          }
        });
        function Tween(elem, options, prop, end, easing) {
          return new Tween.prototype.init(elem, options, prop, end, easing);
        }
        jQuery.Tween = Tween, Tween.prototype = {
          constructor: Tween,
          init: function(elem, options, prop, end, easing, unit) {
            this.elem = elem, this.prop = prop, this.easing = easing || jQuery.easing._default, this.options = options, this.start = this.now = this.cur(), this.end = end, this.unit = unit || (jQuery.cssNumber[prop] ? "" : "px");
          },
          cur: function() {
            var hooks = Tween.propHooks[this.prop];
            return hooks && hooks.get ? hooks.get(this) : Tween.propHooks._default.get(this);
          },
          run: function(percent) {
            var eased, hooks = Tween.propHooks[this.prop];
            return this.options.duration ? this.pos = eased = jQuery.easing[this.easing](
              percent,
              this.options.duration * percent,
              0,
              1,
              this.options.duration
            ) : this.pos = eased = percent, this.now = (this.end - this.start) * eased + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), hooks && hooks.set ? hooks.set(this) : Tween.propHooks._default.set(this), this;
          }
        }, Tween.prototype.init.prototype = Tween.prototype, Tween.propHooks = {
          _default: {
            get: function(tween) {
              var result;
              return tween.elem.nodeType !== 1 || tween.elem[tween.prop] != null && tween.elem.style[tween.prop] == null ? tween.elem[tween.prop] : (result = jQuery.css(tween.elem, tween.prop, ""), !result || result === "auto" ? 0 : result);
            },
            set: function(tween) {
              jQuery.fx.step[tween.prop] ? jQuery.fx.step[tween.prop](tween) : tween.elem.nodeType === 1 && (jQuery.cssHooks[tween.prop] || tween.elem.style[finalPropName(tween.prop)] != null) ? jQuery.style(tween.elem, tween.prop, tween.now + tween.unit) : tween.elem[tween.prop] = tween.now;
            }
          }
        }, Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = {
          set: function(tween) {
            tween.elem.nodeType && tween.elem.parentNode && (tween.elem[tween.prop] = tween.now);
          }
        }, jQuery.easing = {
          linear: function(p) {
            return p;
          },
          swing: function(p) {
            return 0.5 - Math.cos(p * Math.PI) / 2;
          },
          _default: "swing"
        }, jQuery.fx = Tween.prototype.init, jQuery.fx.step = {};
        var fxNow, inProgress, rfxtypes = /^(?:toggle|show|hide)$/, rrun = /queueHooks$/;
        function schedule() {
          inProgress && (document2.hidden === !1 && window2.requestAnimationFrame ? window2.requestAnimationFrame(schedule) : window2.setTimeout(schedule, jQuery.fx.interval), jQuery.fx.tick());
        }
        function createFxNow() {
          return window2.setTimeout(function() {
            fxNow = void 0;
          }), fxNow = Date.now();
        }
        function genFx(type, includeWidth) {
          var which, i = 0, attrs = { height: type };
          for (includeWidth = includeWidth ? 1 : 0; i < 4; i += 2 - includeWidth)
            which = cssExpand[i], attrs["margin" + which] = attrs["padding" + which] = type;
          return includeWidth && (attrs.opacity = attrs.width = type), attrs;
        }
        function createTween(value, prop, animation) {
          for (var tween, collection = (Animation.tweeners[prop] || []).concat(Animation.tweeners["*"]), index = 0, length = collection.length; index < length; index++)
            if (tween = collection[index].call(animation, prop, value))
              return tween;
        }
        function defaultPrefilter(elem, props, opts) {
          var prop, value, toggle, hooks, oldfire, propTween, restoreDisplay, display, isBox = "width" in props || "height" in props, anim = this, orig = {}, style = elem.style, hidden = elem.nodeType && isHiddenWithinTree(elem), dataShow = dataPriv.get(elem, "fxshow");
          opts.queue || (hooks = jQuery._queueHooks(elem, "fx"), hooks.unqueued == null && (hooks.unqueued = 0, oldfire = hooks.empty.fire, hooks.empty.fire = function() {
            hooks.unqueued || oldfire();
          }), hooks.unqueued++, anim.always(function() {
            anim.always(function() {
              hooks.unqueued--, jQuery.queue(elem, "fx").length || hooks.empty.fire();
            });
          }));
          for (prop in props)
            if (value = props[prop], rfxtypes.test(value)) {
              if (delete props[prop], toggle = toggle || value === "toggle", value === (hidden ? "hide" : "show"))
                if (value === "show" && dataShow && dataShow[prop] !== void 0)
                  hidden = !0;
                else
                  continue;
              orig[prop] = dataShow && dataShow[prop] || jQuery.style(elem, prop);
            }
          if (propTween = !jQuery.isEmptyObject(props), !(!propTween && jQuery.isEmptyObject(orig))) {
            isBox && elem.nodeType === 1 && (opts.overflow = [style.overflow, style.overflowX, style.overflowY], restoreDisplay = dataShow && dataShow.display, restoreDisplay == null && (restoreDisplay = dataPriv.get(elem, "display")), display = jQuery.css(elem, "display"), display === "none" && (restoreDisplay ? display = restoreDisplay : (showHide([elem], !0), restoreDisplay = elem.style.display || restoreDisplay, display = jQuery.css(elem, "display"), showHide([elem]))), (display === "inline" || display === "inline-block" && restoreDisplay != null) && jQuery.css(elem, "float") === "none" && (propTween || (anim.done(function() {
              style.display = restoreDisplay;
            }), restoreDisplay == null && (display = style.display, restoreDisplay = display === "none" ? "" : display)), style.display = "inline-block")), opts.overflow && (style.overflow = "hidden", anim.always(function() {
              style.overflow = opts.overflow[0], style.overflowX = opts.overflow[1], style.overflowY = opts.overflow[2];
            })), propTween = !1;
            for (prop in orig)
              propTween || (dataShow ? "hidden" in dataShow && (hidden = dataShow.hidden) : dataShow = dataPriv.access(elem, "fxshow", { display: restoreDisplay }), toggle && (dataShow.hidden = !hidden), hidden && showHide([elem], !0), anim.done(function() {
                hidden || showHide([elem]), dataPriv.remove(elem, "fxshow");
                for (prop in orig)
                  jQuery.style(elem, prop, orig[prop]);
              })), propTween = createTween(hidden ? dataShow[prop] : 0, prop, anim), prop in dataShow || (dataShow[prop] = propTween.start, hidden && (propTween.end = propTween.start, propTween.start = 0));
          }
        }
        function propFilter(props, specialEasing) {
          var index, name, easing, value, hooks;
          for (index in props)
            if (name = camelCase(index), easing = specialEasing[name], value = props[index], Array.isArray(value) && (easing = value[1], value = props[index] = value[0]), index !== name && (props[name] = value, delete props[index]), hooks = jQuery.cssHooks[name], hooks && "expand" in hooks) {
              value = hooks.expand(value), delete props[name];
              for (index in value)
                index in props || (props[index] = value[index], specialEasing[index] = easing);
            } else
              specialEasing[name] = easing;
        }
        function Animation(elem, properties, options) {
          var result, stopped, index = 0, length = Animation.prefilters.length, deferred = jQuery.Deferred().always(function() {
            delete tick.elem;
          }), tick = function() {
            if (stopped)
              return !1;
            for (var currentTime = fxNow || createFxNow(), remaining = Math.max(0, animation.startTime + animation.duration - currentTime), temp = remaining / animation.duration || 0, percent = 1 - temp, index2 = 0, length2 = animation.tweens.length; index2 < length2; index2++)
              animation.tweens[index2].run(percent);
            return deferred.notifyWith(elem, [animation, percent, remaining]), percent < 1 && length2 ? remaining : (length2 || deferred.notifyWith(elem, [animation, 1, 0]), deferred.resolveWith(elem, [animation]), !1);
          }, animation = deferred.promise({
            elem,
            props: jQuery.extend({}, properties),
            opts: jQuery.extend(!0, {
              specialEasing: {},
              easing: jQuery.easing._default
            }, options),
            originalProperties: properties,
            originalOptions: options,
            startTime: fxNow || createFxNow(),
            duration: options.duration,
            tweens: [],
            createTween: function(prop, end) {
              var tween = jQuery.Tween(
                elem,
                animation.opts,
                prop,
                end,
                animation.opts.specialEasing[prop] || animation.opts.easing
              );
              return animation.tweens.push(tween), tween;
            },
            stop: function(gotoEnd) {
              var index2 = 0, length2 = gotoEnd ? animation.tweens.length : 0;
              if (stopped)
                return this;
              for (stopped = !0; index2 < length2; index2++)
                animation.tweens[index2].run(1);
              return gotoEnd ? (deferred.notifyWith(elem, [animation, 1, 0]), deferred.resolveWith(elem, [animation, gotoEnd])) : deferred.rejectWith(elem, [animation, gotoEnd]), this;
            }
          }), props = animation.props;
          for (propFilter(props, animation.opts.specialEasing); index < length; index++)
            if (result = Animation.prefilters[index].call(animation, elem, props, animation.opts), result)
              return isFunction(result.stop) && (jQuery._queueHooks(animation.elem, animation.opts.queue).stop = result.stop.bind(result)), result;
          return jQuery.map(props, createTween, animation), isFunction(animation.opts.start) && animation.opts.start.call(elem, animation), animation.progress(animation.opts.progress).done(animation.opts.done, animation.opts.complete).fail(animation.opts.fail).always(animation.opts.always), jQuery.fx.timer(
            jQuery.extend(tick, {
              elem,
              anim: animation,
              queue: animation.opts.queue
            })
          ), animation;
        }
        jQuery.Animation = jQuery.extend(Animation, {
          tweeners: {
            "*": [function(prop, value) {
              var tween = this.createTween(prop, value);
              return adjustCSS(tween.elem, prop, rcssNum.exec(value), tween), tween;
            }]
          },
          tweener: function(props, callback) {
            isFunction(props) ? (callback = props, props = ["*"]) : props = props.match(rnothtmlwhite);
            for (var prop, index = 0, length = props.length; index < length; index++)
              prop = props[index], Animation.tweeners[prop] = Animation.tweeners[prop] || [], Animation.tweeners[prop].unshift(callback);
          },
          prefilters: [defaultPrefilter],
          prefilter: function(callback, prepend) {
            prepend ? Animation.prefilters.unshift(callback) : Animation.prefilters.push(callback);
          }
        }), jQuery.speed = function(speed, easing, fn) {
          var opt = speed && typeof speed == "object" ? jQuery.extend({}, speed) : {
            complete: fn || !fn && easing || isFunction(speed) && speed,
            duration: speed,
            easing: fn && easing || easing && !isFunction(easing) && easing
          };
          return jQuery.fx.off ? opt.duration = 0 : typeof opt.duration != "number" && (opt.duration in jQuery.fx.speeds ? opt.duration = jQuery.fx.speeds[opt.duration] : opt.duration = jQuery.fx.speeds._default), (opt.queue == null || opt.queue === !0) && (opt.queue = "fx"), opt.old = opt.complete, opt.complete = function() {
            isFunction(opt.old) && opt.old.call(this), opt.queue && jQuery.dequeue(this, opt.queue);
          }, opt;
        }, jQuery.fn.extend({
          fadeTo: function(speed, to, easing, callback) {
            return this.filter(isHiddenWithinTree).css("opacity", 0).show().end().animate({ opacity: to }, speed, easing, callback);
          },
          animate: function(prop, speed, easing, callback) {
            var empty = jQuery.isEmptyObject(prop), optall = jQuery.speed(speed, easing, callback), doAnimation = function() {
              var anim = Animation(this, jQuery.extend({}, prop), optall);
              (empty || dataPriv.get(this, "finish")) && anim.stop(!0);
            };
            return doAnimation.finish = doAnimation, empty || optall.queue === !1 ? this.each(doAnimation) : this.queue(optall.queue, doAnimation);
          },
          stop: function(type, clearQueue, gotoEnd) {
            var stopQueue = function(hooks) {
              var stop = hooks.stop;
              delete hooks.stop, stop(gotoEnd);
            };
            return typeof type != "string" && (gotoEnd = clearQueue, clearQueue = type, type = void 0), clearQueue && this.queue(type || "fx", []), this.each(function() {
              var dequeue = !0, index = type != null && type + "queueHooks", timers = jQuery.timers, data = dataPriv.get(this);
              if (index)
                data[index] && data[index].stop && stopQueue(data[index]);
              else
                for (index in data)
                  data[index] && data[index].stop && rrun.test(index) && stopQueue(data[index]);
              for (index = timers.length; index--; )
                timers[index].elem === this && (type == null || timers[index].queue === type) && (timers[index].anim.stop(gotoEnd), dequeue = !1, timers.splice(index, 1));
              (dequeue || !gotoEnd) && jQuery.dequeue(this, type);
            });
          },
          finish: function(type) {
            return type !== !1 && (type = type || "fx"), this.each(function() {
              var index, data = dataPriv.get(this), queue = data[type + "queue"], hooks = data[type + "queueHooks"], timers = jQuery.timers, length = queue ? queue.length : 0;
              for (data.finish = !0, jQuery.queue(this, type, []), hooks && hooks.stop && hooks.stop.call(this, !0), index = timers.length; index--; )
                timers[index].elem === this && timers[index].queue === type && (timers[index].anim.stop(!0), timers.splice(index, 1));
              for (index = 0; index < length; index++)
                queue[index] && queue[index].finish && queue[index].finish.call(this);
              delete data.finish;
            });
          }
        }), jQuery.each(["toggle", "show", "hide"], function(_i, name) {
          var cssFn = jQuery.fn[name];
          jQuery.fn[name] = function(speed, easing, callback) {
            return speed == null || typeof speed == "boolean" ? cssFn.apply(this, arguments) : this.animate(genFx(name, !0), speed, easing, callback);
          };
        }), jQuery.each({
          slideDown: genFx("show"),
          slideUp: genFx("hide"),
          slideToggle: genFx("toggle"),
          fadeIn: { opacity: "show" },
          fadeOut: { opacity: "hide" },
          fadeToggle: { opacity: "toggle" }
        }, function(name, props) {
          jQuery.fn[name] = function(speed, easing, callback) {
            return this.animate(props, speed, easing, callback);
          };
        }), jQuery.timers = [], jQuery.fx.tick = function() {
          var timer, i = 0, timers = jQuery.timers;
          for (fxNow = Date.now(); i < timers.length; i++)
            timer = timers[i], !timer() && timers[i] === timer && timers.splice(i--, 1);
          timers.length || jQuery.fx.stop(), fxNow = void 0;
        }, jQuery.fx.timer = function(timer) {
          jQuery.timers.push(timer), jQuery.fx.start();
        }, jQuery.fx.interval = 13, jQuery.fx.start = function() {
          inProgress || (inProgress = !0, schedule());
        }, jQuery.fx.stop = function() {
          inProgress = null;
        }, jQuery.fx.speeds = {
          slow: 600,
          fast: 200,
          // Default speed
          _default: 400
        }, jQuery.fn.delay = function(time, type) {
          return time = jQuery.fx && jQuery.fx.speeds[time] || time, type = type || "fx", this.queue(type, function(next, hooks) {
            var timeout = window2.setTimeout(next, time);
            hooks.stop = function() {
              window2.clearTimeout(timeout);
            };
          });
        }, function() {
          var input = document2.createElement("input"), select = document2.createElement("select"), opt = select.appendChild(document2.createElement("option"));
          input.type = "checkbox", support.checkOn = input.value !== "", support.optSelected = opt.selected, input = document2.createElement("input"), input.value = "t", input.type = "radio", support.radioValue = input.value === "t";
        }();
        var boolHook, attrHandle = jQuery.expr.attrHandle;
        jQuery.fn.extend({
          attr: function(name, value) {
            return access(this, jQuery.attr, name, value, arguments.length > 1);
          },
          removeAttr: function(name) {
            return this.each(function() {
              jQuery.removeAttr(this, name);
            });
          }
        }), jQuery.extend({
          attr: function(elem, name, value) {
            var ret, hooks, nType = elem.nodeType;
            if (!(nType === 3 || nType === 8 || nType === 2)) {
              if (typeof elem.getAttribute > "u")
                return jQuery.prop(elem, name, value);
              if ((nType !== 1 || !jQuery.isXMLDoc(elem)) && (hooks = jQuery.attrHooks[name.toLowerCase()] || (jQuery.expr.match.bool.test(name) ? boolHook : void 0)), value !== void 0) {
                if (value === null) {
                  jQuery.removeAttr(elem, name);
                  return;
                }
                return hooks && "set" in hooks && (ret = hooks.set(elem, value, name)) !== void 0 ? ret : (elem.setAttribute(name, value + ""), value);
              }
              return hooks && "get" in hooks && (ret = hooks.get(elem, name)) !== null ? ret : (ret = jQuery.find.attr(elem, name), ret ?? void 0);
            }
          },
          attrHooks: {
            type: {
              set: function(elem, value) {
                if (!support.radioValue && value === "radio" && nodeName(elem, "input")) {
                  var val = elem.value;
                  return elem.setAttribute("type", value), val && (elem.value = val), value;
                }
              }
            }
          },
          removeAttr: function(elem, value) {
            var name, i = 0, attrNames = value && value.match(rnothtmlwhite);
            if (attrNames && elem.nodeType === 1)
              for (; name = attrNames[i++]; )
                elem.removeAttribute(name);
          }
        }), boolHook = {
          set: function(elem, value, name) {
            return value === !1 ? jQuery.removeAttr(elem, name) : elem.setAttribute(name, name), name;
          }
        }, jQuery.each(jQuery.expr.match.bool.source.match(/\w+/g), function(_i, name) {
          var getter = attrHandle[name] || jQuery.find.attr;
          attrHandle[name] = function(elem, name2, isXML) {
            var ret, handle, lowercaseName = name2.toLowerCase();
            return isXML || (handle = attrHandle[lowercaseName], attrHandle[lowercaseName] = ret, ret = getter(elem, name2, isXML) != null ? lowercaseName : null, attrHandle[lowercaseName] = handle), ret;
          };
        });
        var rfocusable = /^(?:input|select|textarea|button)$/i, rclickable = /^(?:a|area)$/i;
        jQuery.fn.extend({
          prop: function(name, value) {
            return access(this, jQuery.prop, name, value, arguments.length > 1);
          },
          removeProp: function(name) {
            return this.each(function() {
              delete this[jQuery.propFix[name] || name];
            });
          }
        }), jQuery.extend({
          prop: function(elem, name, value) {
            var ret, hooks, nType = elem.nodeType;
            if (!(nType === 3 || nType === 8 || nType === 2))
              return (nType !== 1 || !jQuery.isXMLDoc(elem)) && (name = jQuery.propFix[name] || name, hooks = jQuery.propHooks[name]), value !== void 0 ? hooks && "set" in hooks && (ret = hooks.set(elem, value, name)) !== void 0 ? ret : elem[name] = value : hooks && "get" in hooks && (ret = hooks.get(elem, name)) !== null ? ret : elem[name];
          },
          propHooks: {
            tabIndex: {
              get: function(elem) {
                var tabindex = jQuery.find.attr(elem, "tabindex");
                return tabindex ? parseInt(tabindex, 10) : rfocusable.test(elem.nodeName) || rclickable.test(elem.nodeName) && elem.href ? 0 : -1;
              }
            }
          },
          propFix: {
            for: "htmlFor",
            class: "className"
          }
        }), support.optSelected || (jQuery.propHooks.selected = {
          get: function(elem) {
            var parent = elem.parentNode;
            return parent && parent.parentNode && parent.parentNode.selectedIndex, null;
          },
          set: function(elem) {
            var parent = elem.parentNode;
            parent && (parent.selectedIndex, parent.parentNode && parent.parentNode.selectedIndex);
          }
        }), jQuery.each([
          "tabIndex",
          "readOnly",
          "maxLength",
          "cellSpacing",
          "cellPadding",
          "rowSpan",
          "colSpan",
          "useMap",
          "frameBorder",
          "contentEditable"
        ], function() {
          jQuery.propFix[this.toLowerCase()] = this;
        });
        function stripAndCollapse(value) {
          var tokens = value.match(rnothtmlwhite) || [];
          return tokens.join(" ");
        }
        function getClass(elem) {
          return elem.getAttribute && elem.getAttribute("class") || "";
        }
        function classesToArray(value) {
          return Array.isArray(value) ? value : typeof value == "string" ? value.match(rnothtmlwhite) || [] : [];
        }
        jQuery.fn.extend({
          addClass: function(value) {
            var classNames, cur, curValue, className, i, finalValue;
            return isFunction(value) ? this.each(function(j) {
              jQuery(this).addClass(value.call(this, j, getClass(this)));
            }) : (classNames = classesToArray(value), classNames.length ? this.each(function() {
              if (curValue = getClass(this), cur = this.nodeType === 1 && " " + stripAndCollapse(curValue) + " ", cur) {
                for (i = 0; i < classNames.length; i++)
                  className = classNames[i], cur.indexOf(" " + className + " ") < 0 && (cur += className + " ");
                finalValue = stripAndCollapse(cur), curValue !== finalValue && this.setAttribute("class", finalValue);
              }
            }) : this);
          },
          removeClass: function(value) {
            var classNames, cur, curValue, className, i, finalValue;
            return isFunction(value) ? this.each(function(j) {
              jQuery(this).removeClass(value.call(this, j, getClass(this)));
            }) : arguments.length ? (classNames = classesToArray(value), classNames.length ? this.each(function() {
              if (curValue = getClass(this), cur = this.nodeType === 1 && " " + stripAndCollapse(curValue) + " ", cur) {
                for (i = 0; i < classNames.length; i++)
                  for (className = classNames[i]; cur.indexOf(" " + className + " ") > -1; )
                    cur = cur.replace(" " + className + " ", " ");
                finalValue = stripAndCollapse(cur), curValue !== finalValue && this.setAttribute("class", finalValue);
              }
            }) : this) : this.attr("class", "");
          },
          toggleClass: function(value, stateVal) {
            var classNames, className, i, self, type = typeof value, isValidValue = type === "string" || Array.isArray(value);
            return isFunction(value) ? this.each(function(i2) {
              jQuery(this).toggleClass(
                value.call(this, i2, getClass(this), stateVal),
                stateVal
              );
            }) : typeof stateVal == "boolean" && isValidValue ? stateVal ? this.addClass(value) : this.removeClass(value) : (classNames = classesToArray(value), this.each(function() {
              if (isValidValue)
                for (self = jQuery(this), i = 0; i < classNames.length; i++)
                  className = classNames[i], self.hasClass(className) ? self.removeClass(className) : self.addClass(className);
              else
                (value === void 0 || type === "boolean") && (className = getClass(this), className && dataPriv.set(this, "__className__", className), this.setAttribute && this.setAttribute(
                  "class",
                  className || value === !1 ? "" : dataPriv.get(this, "__className__") || ""
                ));
            }));
          },
          hasClass: function(selector) {
            var className, elem, i = 0;
            for (className = " " + selector + " "; elem = this[i++]; )
              if (elem.nodeType === 1 && (" " + stripAndCollapse(getClass(elem)) + " ").indexOf(className) > -1)
                return !0;
            return !1;
          }
        });
        var rreturn = /\r/g;
        jQuery.fn.extend({
          val: function(value) {
            var hooks, ret, valueIsFunction, elem = this[0];
            return arguments.length ? (valueIsFunction = isFunction(value), this.each(function(i) {
              var val;
              this.nodeType === 1 && (valueIsFunction ? val = value.call(this, i, jQuery(this).val()) : val = value, val == null ? val = "" : typeof val == "number" ? val += "" : Array.isArray(val) && (val = jQuery.map(val, function(value2) {
                return value2 == null ? "" : value2 + "";
              })), hooks = jQuery.valHooks[this.type] || jQuery.valHooks[this.nodeName.toLowerCase()], (!hooks || !("set" in hooks) || hooks.set(this, val, "value") === void 0) && (this.value = val));
            })) : elem ? (hooks = jQuery.valHooks[elem.type] || jQuery.valHooks[elem.nodeName.toLowerCase()], hooks && "get" in hooks && (ret = hooks.get(elem, "value")) !== void 0 ? ret : (ret = elem.value, typeof ret == "string" ? ret.replace(rreturn, "") : ret ?? "")) : void 0;
          }
        }), jQuery.extend({
          valHooks: {
            option: {
              get: function(elem) {
                var val = jQuery.find.attr(elem, "value");
                return val ?? // Support: IE <=10 - 11 only
                // option.text throws exceptions (trac-14686, trac-14858)
                // Strip and collapse whitespace
                // https://html.spec.whatwg.org/#strip-and-collapse-whitespace
                stripAndCollapse(jQuery.text(elem));
              }
            },
            select: {
              get: function(elem) {
                var value, option, i, options = elem.options, index = elem.selectedIndex, one = elem.type === "select-one", values = one ? null : [], max = one ? index + 1 : options.length;
                for (index < 0 ? i = max : i = one ? index : 0; i < max; i++)
                  if (option = options[i], (option.selected || i === index) && // Don't return options that are disabled or in a disabled optgroup
                  !option.disabled && (!option.parentNode.disabled || !nodeName(option.parentNode, "optgroup"))) {
                    if (value = jQuery(option).val(), one)
                      return value;
                    values.push(value);
                  }
                return values;
              },
              set: function(elem, value) {
                for (var optionSet, option, options = elem.options, values = jQuery.makeArray(value), i = options.length; i--; )
                  option = options[i], (option.selected = jQuery.inArray(jQuery.valHooks.option.get(option), values) > -1) && (optionSet = !0);
                return optionSet || (elem.selectedIndex = -1), values;
              }
            }
          }
        }), jQuery.each(["radio", "checkbox"], function() {
          jQuery.valHooks[this] = {
            set: function(elem, value) {
              if (Array.isArray(value))
                return elem.checked = jQuery.inArray(jQuery(elem).val(), value) > -1;
            }
          }, support.checkOn || (jQuery.valHooks[this].get = function(elem) {
            return elem.getAttribute("value") === null ? "on" : elem.value;
          });
        }), support.focusin = "onfocusin" in window2;
        var rfocusMorph = /^(?:focusinfocus|focusoutblur)$/, stopPropagationCallback = function(e) {
          e.stopPropagation();
        };
        jQuery.extend(jQuery.event, {
          trigger: function(event, data, elem, onlyHandlers) {
            var i, cur, tmp, bubbleType, ontype, handle, special, lastElement, eventPath = [elem || document2], type = hasOwn.call(event, "type") ? event.type : event, namespaces = hasOwn.call(event, "namespace") ? event.namespace.split(".") : [];
            if (cur = lastElement = tmp = elem = elem || document2, !(elem.nodeType === 3 || elem.nodeType === 8) && !rfocusMorph.test(type + jQuery.event.triggered) && (type.indexOf(".") > -1 && (namespaces = type.split("."), type = namespaces.shift(), namespaces.sort()), ontype = type.indexOf(":") < 0 && "on" + type, event = event[jQuery.expando] ? event : new jQuery.Event(type, typeof event == "object" && event), event.isTrigger = onlyHandlers ? 2 : 3, event.namespace = namespaces.join("."), event.rnamespace = event.namespace ? new RegExp("(^|\\.)" + namespaces.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, event.result = void 0, event.target || (event.target = elem), data = data == null ? [event] : jQuery.makeArray(data, [event]), special = jQuery.event.special[type] || {}, !(!onlyHandlers && special.trigger && special.trigger.apply(elem, data) === !1))) {
              if (!onlyHandlers && !special.noBubble && !isWindow(elem)) {
                for (bubbleType = special.delegateType || type, rfocusMorph.test(bubbleType + type) || (cur = cur.parentNode); cur; cur = cur.parentNode)
                  eventPath.push(cur), tmp = cur;
                tmp === (elem.ownerDocument || document2) && eventPath.push(tmp.defaultView || tmp.parentWindow || window2);
              }
              for (i = 0; (cur = eventPath[i++]) && !event.isPropagationStopped(); )
                lastElement = cur, event.type = i > 1 ? bubbleType : special.bindType || type, handle = (dataPriv.get(cur, "events") || /* @__PURE__ */ Object.create(null))[event.type] && dataPriv.get(cur, "handle"), handle && handle.apply(cur, data), handle = ontype && cur[ontype], handle && handle.apply && acceptData(cur) && (event.result = handle.apply(cur, data), event.result === !1 && event.preventDefault());
              return event.type = type, !onlyHandlers && !event.isDefaultPrevented() && (!special._default || special._default.apply(eventPath.pop(), data) === !1) && acceptData(elem) && ontype && isFunction(elem[type]) && !isWindow(elem) && (tmp = elem[ontype], tmp && (elem[ontype] = null), jQuery.event.triggered = type, event.isPropagationStopped() && lastElement.addEventListener(type, stopPropagationCallback), elem[type](), event.isPropagationStopped() && lastElement.removeEventListener(type, stopPropagationCallback), jQuery.event.triggered = void 0, tmp && (elem[ontype] = tmp)), event.result;
            }
          },
          // Piggyback on a donor event to simulate a different one
          // Used only for `focus(in | out)` events
          simulate: function(type, elem, event) {
            var e = jQuery.extend(
              new jQuery.Event(),
              event,
              {
                type,
                isSimulated: !0
              }
            );
            jQuery.event.trigger(e, null, elem);
          }
        }), jQuery.fn.extend({
          trigger: function(type, data) {
            return this.each(function() {
              jQuery.event.trigger(type, data, this);
            });
          },
          triggerHandler: function(type, data) {
            var elem = this[0];
            if (elem)
              return jQuery.event.trigger(type, data, elem, !0);
          }
        }), support.focusin || jQuery.each({ focus: "focusin", blur: "focusout" }, function(orig, fix) {
          var handler = function(event) {
            jQuery.event.simulate(fix, event.target, jQuery.event.fix(event));
          };
          jQuery.event.special[fix] = {
            setup: function() {
              var doc = this.ownerDocument || this.document || this, attaches = dataPriv.access(doc, fix);
              attaches || doc.addEventListener(orig, handler, !0), dataPriv.access(doc, fix, (attaches || 0) + 1);
            },
            teardown: function() {
              var doc = this.ownerDocument || this.document || this, attaches = dataPriv.access(doc, fix) - 1;
              attaches ? dataPriv.access(doc, fix, attaches) : (doc.removeEventListener(orig, handler, !0), dataPriv.remove(doc, fix));
            }
          };
        });
        var location = window2.location, nonce = { guid: Date.now() }, rquery = /\?/;
        jQuery.parseXML = function(data) {
          var xml, parserErrorElem;
          if (!data || typeof data != "string")
            return null;
          try {
            xml = new window2.DOMParser().parseFromString(data, "text/xml");
          } catch {
          }
          return parserErrorElem = xml && xml.getElementsByTagName("parsererror")[0], (!xml || parserErrorElem) && jQuery.error("Invalid XML: " + (parserErrorElem ? jQuery.map(parserErrorElem.childNodes, function(el) {
            return el.textContent;
          }).join(`
`) : data)), xml;
        };
        var rbracket = /\[\]$/, rCRLF = /\r?\n/g, rsubmitterTypes = /^(?:submit|button|image|reset|file)$/i, rsubmittable = /^(?:input|select|textarea|keygen)/i;
        function buildParams(prefix, obj, traditional, add) {
          var name;
          if (Array.isArray(obj))
            jQuery.each(obj, function(i, v) {
              traditional || rbracket.test(prefix) ? add(prefix, v) : buildParams(
                prefix + "[" + (typeof v == "object" && v != null ? i : "") + "]",
                v,
                traditional,
                add
              );
            });
          else if (!traditional && toType(obj) === "object")
            for (name in obj)
              buildParams(prefix + "[" + name + "]", obj[name], traditional, add);
          else
            add(prefix, obj);
        }
        jQuery.param = function(a, traditional) {
          var prefix, s = [], add = function(key, valueOrFunction) {
            var value = isFunction(valueOrFunction) ? valueOrFunction() : valueOrFunction;
            s[s.length] = encodeURIComponent(key) + "=" + encodeURIComponent(value ?? "");
          };
          if (a == null)
            return "";
          if (Array.isArray(a) || a.jquery && !jQuery.isPlainObject(a))
            jQuery.each(a, function() {
              add(this.name, this.value);
            });
          else
            for (prefix in a)
              buildParams(prefix, a[prefix], traditional, add);
          return s.join("&");
        }, jQuery.fn.extend({
          serialize: function() {
            return jQuery.param(this.serializeArray());
          },
          serializeArray: function() {
            return this.map(function() {
              var elements = jQuery.prop(this, "elements");
              return elements ? jQuery.makeArray(elements) : this;
            }).filter(function() {
              var type = this.type;
              return this.name && !jQuery(this).is(":disabled") && rsubmittable.test(this.nodeName) && !rsubmitterTypes.test(type) && (this.checked || !rcheckableType.test(type));
            }).map(function(_i, elem) {
              var val = jQuery(this).val();
              return val == null ? null : Array.isArray(val) ? jQuery.map(val, function(val2) {
                return { name: elem.name, value: val2.replace(rCRLF, `\r
`) };
              }) : { name: elem.name, value: val.replace(rCRLF, `\r
`) };
            }).get();
          }
        });
        var r20 = /%20/g, rhash = /#.*$/, rantiCache = /([?&])_=[^&]*/, rheaders = /^(.*?):[ \t]*([^\r\n]*)$/mg, rlocalProtocol = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/, rnoContent = /^(?:GET|HEAD)$/, rprotocol = /^\/\//, prefilters = {}, transports = {}, allTypes = "*/".concat("*"), originAnchor = document2.createElement("a");
        originAnchor.href = location.href;
        function addToPrefiltersOrTransports(structure) {
          return function(dataTypeExpression, func) {
            typeof dataTypeExpression != "string" && (func = dataTypeExpression, dataTypeExpression = "*");
            var dataType, i = 0, dataTypes = dataTypeExpression.toLowerCase().match(rnothtmlwhite) || [];
            if (isFunction(func))
              for (; dataType = dataTypes[i++]; )
                dataType[0] === "+" ? (dataType = dataType.slice(1) || "*", (structure[dataType] = structure[dataType] || []).unshift(func)) : (structure[dataType] = structure[dataType] || []).push(func);
          };
        }
        function inspectPrefiltersOrTransports(structure, options, originalOptions, jqXHR) {
          var inspected = {}, seekingTransport = structure === transports;
          function inspect(dataType) {
            var selected;
            return inspected[dataType] = !0, jQuery.each(structure[dataType] || [], function(_, prefilterOrFactory) {
              var dataTypeOrTransport = prefilterOrFactory(options, originalOptions, jqXHR);
              if (typeof dataTypeOrTransport == "string" && !seekingTransport && !inspected[dataTypeOrTransport])
                return options.dataTypes.unshift(dataTypeOrTransport), inspect(dataTypeOrTransport), !1;
              if (seekingTransport)
                return !(selected = dataTypeOrTransport);
            }), selected;
          }
          return inspect(options.dataTypes[0]) || !inspected["*"] && inspect("*");
        }
        function ajaxExtend(target, src) {
          var key, deep, flatOptions = jQuery.ajaxSettings.flatOptions || {};
          for (key in src)
            src[key] !== void 0 && ((flatOptions[key] ? target : deep || (deep = {}))[key] = src[key]);
          return deep && jQuery.extend(!0, target, deep), target;
        }
        function ajaxHandleResponses(s, jqXHR, responses) {
          for (var ct, type, finalDataType, firstDataType, contents = s.contents, dataTypes = s.dataTypes; dataTypes[0] === "*"; )
            dataTypes.shift(), ct === void 0 && (ct = s.mimeType || jqXHR.getResponseHeader("Content-Type"));
          if (ct) {
            for (type in contents)
              if (contents[type] && contents[type].test(ct)) {
                dataTypes.unshift(type);
                break;
              }
          }
          if (dataTypes[0] in responses)
            finalDataType = dataTypes[0];
          else {
            for (type in responses) {
              if (!dataTypes[0] || s.converters[type + " " + dataTypes[0]]) {
                finalDataType = type;
                break;
              }
              firstDataType || (firstDataType = type);
            }
            finalDataType = finalDataType || firstDataType;
          }
          if (finalDataType)
            return finalDataType !== dataTypes[0] && dataTypes.unshift(finalDataType), responses[finalDataType];
        }
        function ajaxConvert(s, response, jqXHR, isSuccess) {
          var conv2, current, conv, tmp, prev, converters = {}, dataTypes = s.dataTypes.slice();
          if (dataTypes[1])
            for (conv in s.converters)
              converters[conv.toLowerCase()] = s.converters[conv];
          for (current = dataTypes.shift(); current; )
            if (s.responseFields[current] && (jqXHR[s.responseFields[current]] = response), !prev && isSuccess && s.dataFilter && (response = s.dataFilter(response, s.dataType)), prev = current, current = dataTypes.shift(), current) {
              if (current === "*")
                current = prev;
              else if (prev !== "*" && prev !== current) {
                if (conv = converters[prev + " " + current] || converters["* " + current], !conv) {
                  for (conv2 in converters)
                    if (tmp = conv2.split(" "), tmp[1] === current && (conv = converters[prev + " " + tmp[0]] || converters["* " + tmp[0]], conv)) {
                      conv === !0 ? conv = converters[conv2] : converters[conv2] !== !0 && (current = tmp[0], dataTypes.unshift(tmp[1]));
                      break;
                    }
                }
                if (conv !== !0)
                  if (conv && s.throws)
                    response = conv(response);
                  else
                    try {
                      response = conv(response);
                    } catch (e) {
                      return {
                        state: "parsererror",
                        error: conv ? e : "No conversion from " + prev + " to " + current
                      };
                    }
              }
            }
          return { state: "success", data: response };
        }
        jQuery.extend({
          // Counter for holding the number of active queries
          active: 0,
          // Last-Modified header cache for next request
          lastModified: {},
          etag: {},
          ajaxSettings: {
            url: location.href,
            type: "GET",
            isLocal: rlocalProtocol.test(location.protocol),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            /*
            timeout: 0,
            data: null,
            dataType: null,
            username: null,
            password: null,
            cache: null,
            throws: false,
            traditional: false,
            headers: {},
            */
            accepts: {
              "*": allTypes,
              text: "text/plain",
              html: "text/html",
              xml: "application/xml, text/xml",
              json: "application/json, text/javascript"
            },
            contents: {
              xml: /\bxml\b/,
              html: /\bhtml/,
              json: /\bjson\b/
            },
            responseFields: {
              xml: "responseXML",
              text: "responseText",
              json: "responseJSON"
            },
            // Data converters
            // Keys separate source (or catchall "*") and destination types with a single space
            converters: {
              // Convert anything to text
              "* text": String,
              // Text to html (true = no transformation)
              "text html": !0,
              // Evaluate text as a json expression
              "text json": JSON.parse,
              // Parse text as xml
              "text xml": jQuery.parseXML
            },
            // For options that shouldn't be deep extended:
            // you can add your own custom options here if
            // and when you create one that shouldn't be
            // deep extended (see ajaxExtend)
            flatOptions: {
              url: !0,
              context: !0
            }
          },
          // Creates a full fledged settings object into target
          // with both ajaxSettings and settings fields.
          // If target is omitted, writes into ajaxSettings.
          ajaxSetup: function(target, settings) {
            return settings ? (
              // Building a settings object
              ajaxExtend(ajaxExtend(target, jQuery.ajaxSettings), settings)
            ) : (
              // Extending ajaxSettings
              ajaxExtend(jQuery.ajaxSettings, target)
            );
          },
          ajaxPrefilter: addToPrefiltersOrTransports(prefilters),
          ajaxTransport: addToPrefiltersOrTransports(transports),
          // Main method
          ajax: function(url, options) {
            typeof url == "object" && (options = url, url = void 0), options = options || {};
            var transport, cacheURL, responseHeadersString, responseHeaders, timeoutTimer, urlAnchor, completed2, fireGlobals, i, uncached, s = jQuery.ajaxSetup({}, options), callbackContext = s.context || s, globalEventContext = s.context && (callbackContext.nodeType || callbackContext.jquery) ? jQuery(callbackContext) : jQuery.event, deferred = jQuery.Deferred(), completeDeferred = jQuery.Callbacks("once memory"), statusCode = s.statusCode || {}, requestHeaders = {}, requestHeadersNames = {}, strAbort = "canceled", jqXHR = {
              readyState: 0,
              // Builds headers hashtable if needed
              getResponseHeader: function(key) {
                var match;
                if (completed2) {
                  if (!responseHeaders)
                    for (responseHeaders = {}; match = rheaders.exec(responseHeadersString); )
                      responseHeaders[match[1].toLowerCase() + " "] = (responseHeaders[match[1].toLowerCase() + " "] || []).concat(match[2]);
                  match = responseHeaders[key.toLowerCase() + " "];
                }
                return match == null ? null : match.join(", ");
              },
              // Raw string
              getAllResponseHeaders: function() {
                return completed2 ? responseHeadersString : null;
              },
              // Caches the header
              setRequestHeader: function(name, value) {
                return completed2 == null && (name = requestHeadersNames[name.toLowerCase()] = requestHeadersNames[name.toLowerCase()] || name, requestHeaders[name] = value), this;
              },
              // Overrides response content-type header
              overrideMimeType: function(type) {
                return completed2 == null && (s.mimeType = type), this;
              },
              // Status-dependent callbacks
              statusCode: function(map) {
                var code;
                if (map)
                  if (completed2)
                    jqXHR.always(map[jqXHR.status]);
                  else
                    for (code in map)
                      statusCode[code] = [statusCode[code], map[code]];
                return this;
              },
              // Cancel the request
              abort: function(statusText) {
                var finalText = statusText || strAbort;
                return transport && transport.abort(finalText), done(0, finalText), this;
              }
            };
            if (deferred.promise(jqXHR), s.url = ((url || s.url || location.href) + "").replace(rprotocol, location.protocol + "//"), s.type = options.method || options.type || s.method || s.type, s.dataTypes = (s.dataType || "*").toLowerCase().match(rnothtmlwhite) || [""], s.crossDomain == null) {
              urlAnchor = document2.createElement("a");
              try {
                urlAnchor.href = s.url, urlAnchor.href = urlAnchor.href, s.crossDomain = originAnchor.protocol + "//" + originAnchor.host != urlAnchor.protocol + "//" + urlAnchor.host;
              } catch {
                s.crossDomain = !0;
              }
            }
            if (s.data && s.processData && typeof s.data != "string" && (s.data = jQuery.param(s.data, s.traditional)), inspectPrefiltersOrTransports(prefilters, s, options, jqXHR), completed2)
              return jqXHR;
            fireGlobals = jQuery.event && s.global, fireGlobals && jQuery.active++ === 0 && jQuery.event.trigger("ajaxStart"), s.type = s.type.toUpperCase(), s.hasContent = !rnoContent.test(s.type), cacheURL = s.url.replace(rhash, ""), s.hasContent ? s.data && s.processData && (s.contentType || "").indexOf("application/x-www-form-urlencoded") === 0 && (s.data = s.data.replace(r20, "+")) : (uncached = s.url.slice(cacheURL.length), s.data && (s.processData || typeof s.data == "string") && (cacheURL += (rquery.test(cacheURL) ? "&" : "?") + s.data, delete s.data), s.cache === !1 && (cacheURL = cacheURL.replace(rantiCache, "$1"), uncached = (rquery.test(cacheURL) ? "&" : "?") + "_=" + nonce.guid++ + uncached), s.url = cacheURL + uncached), s.ifModified && (jQuery.lastModified[cacheURL] && jqXHR.setRequestHeader("If-Modified-Since", jQuery.lastModified[cacheURL]), jQuery.etag[cacheURL] && jqXHR.setRequestHeader("If-None-Match", jQuery.etag[cacheURL])), (s.data && s.hasContent && s.contentType !== !1 || options.contentType) && jqXHR.setRequestHeader("Content-Type", s.contentType), jqXHR.setRequestHeader(
              "Accept",
              s.dataTypes[0] && s.accepts[s.dataTypes[0]] ? s.accepts[s.dataTypes[0]] + (s.dataTypes[0] !== "*" ? ", " + allTypes + "; q=0.01" : "") : s.accepts["*"]
            );
            for (i in s.headers)
              jqXHR.setRequestHeader(i, s.headers[i]);
            if (s.beforeSend && (s.beforeSend.call(callbackContext, jqXHR, s) === !1 || completed2))
              return jqXHR.abort();
            if (strAbort = "abort", completeDeferred.add(s.complete), jqXHR.done(s.success), jqXHR.fail(s.error), transport = inspectPrefiltersOrTransports(transports, s, options, jqXHR), !transport)
              done(-1, "No Transport");
            else {
              if (jqXHR.readyState = 1, fireGlobals && globalEventContext.trigger("ajaxSend", [jqXHR, s]), completed2)
                return jqXHR;
              s.async && s.timeout > 0 && (timeoutTimer = window2.setTimeout(function() {
                jqXHR.abort("timeout");
              }, s.timeout));
              try {
                completed2 = !1, transport.send(requestHeaders, done);
              } catch (e) {
                if (completed2)
                  throw e;
                done(-1, e);
              }
            }
            function done(status, nativeStatusText, responses, headers) {
              var isSuccess, success, error, response, modified, statusText = nativeStatusText;
              completed2 || (completed2 = !0, timeoutTimer && window2.clearTimeout(timeoutTimer), transport = void 0, responseHeadersString = headers || "", jqXHR.readyState = status > 0 ? 4 : 0, isSuccess = status >= 200 && status < 300 || status === 304, responses && (response = ajaxHandleResponses(s, jqXHR, responses)), !isSuccess && jQuery.inArray("script", s.dataTypes) > -1 && jQuery.inArray("json", s.dataTypes) < 0 && (s.converters["text script"] = function() {
              }), response = ajaxConvert(s, response, jqXHR, isSuccess), isSuccess ? (s.ifModified && (modified = jqXHR.getResponseHeader("Last-Modified"), modified && (jQuery.lastModified[cacheURL] = modified), modified = jqXHR.getResponseHeader("etag"), modified && (jQuery.etag[cacheURL] = modified)), status === 204 || s.type === "HEAD" ? statusText = "nocontent" : status === 304 ? statusText = "notmodified" : (statusText = response.state, success = response.data, error = response.error, isSuccess = !error)) : (error = statusText, (status || !statusText) && (statusText = "error", status < 0 && (status = 0))), jqXHR.status = status, jqXHR.statusText = (nativeStatusText || statusText) + "", isSuccess ? deferred.resolveWith(callbackContext, [success, statusText, jqXHR]) : deferred.rejectWith(callbackContext, [jqXHR, statusText, error]), jqXHR.statusCode(statusCode), statusCode = void 0, fireGlobals && globalEventContext.trigger(
                isSuccess ? "ajaxSuccess" : "ajaxError",
                [jqXHR, s, isSuccess ? success : error]
              ), completeDeferred.fireWith(callbackContext, [jqXHR, statusText]), fireGlobals && (globalEventContext.trigger("ajaxComplete", [jqXHR, s]), --jQuery.active || jQuery.event.trigger("ajaxStop")));
            }
            return jqXHR;
          },
          getJSON: function(url, data, callback) {
            return jQuery.get(url, data, callback, "json");
          },
          getScript: function(url, callback) {
            return jQuery.get(url, void 0, callback, "script");
          }
        }), jQuery.each(["get", "post"], function(_i, method) {
          jQuery[method] = function(url, data, callback, type) {
            return isFunction(data) && (type = type || callback, callback = data, data = void 0), jQuery.ajax(jQuery.extend({
              url,
              type: method,
              dataType: type,
              data,
              success: callback
            }, jQuery.isPlainObject(url) && url));
          };
        }), jQuery.ajaxPrefilter(function(s) {
          var i;
          for (i in s.headers)
            i.toLowerCase() === "content-type" && (s.contentType = s.headers[i] || "");
        }), jQuery._evalUrl = function(url, options, doc) {
          return jQuery.ajax({
            url,
            // Make this explicit, since user can override this through ajaxSetup (trac-11264)
            type: "GET",
            dataType: "script",
            cache: !0,
            async: !1,
            global: !1,
            // Only evaluate the response if it is successful (gh-4126)
            // dataFilter is not invoked for failure responses, so using it instead
            // of the default converter is kludgy but it works.
            converters: {
              "text script": function() {
              }
            },
            dataFilter: function(response) {
              jQuery.globalEval(response, options, doc);
            }
          });
        }, jQuery.fn.extend({
          wrapAll: function(html) {
            var wrap;
            return this[0] && (isFunction(html) && (html = html.call(this[0])), wrap = jQuery(html, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && wrap.insertBefore(this[0]), wrap.map(function() {
              for (var elem = this; elem.firstElementChild; )
                elem = elem.firstElementChild;
              return elem;
            }).append(this)), this;
          },
          wrapInner: function(html) {
            return isFunction(html) ? this.each(function(i) {
              jQuery(this).wrapInner(html.call(this, i));
            }) : this.each(function() {
              var self = jQuery(this), contents = self.contents();
              contents.length ? contents.wrapAll(html) : self.append(html);
            });
          },
          wrap: function(html) {
            var htmlIsFunction = isFunction(html);
            return this.each(function(i) {
              jQuery(this).wrapAll(htmlIsFunction ? html.call(this, i) : html);
            });
          },
          unwrap: function(selector) {
            return this.parent(selector).not("body").each(function() {
              jQuery(this).replaceWith(this.childNodes);
            }), this;
          }
        }), jQuery.expr.pseudos.hidden = function(elem) {
          return !jQuery.expr.pseudos.visible(elem);
        }, jQuery.expr.pseudos.visible = function(elem) {
          return !!(elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length);
        }, jQuery.ajaxSettings.xhr = function() {
          try {
            return new window2.XMLHttpRequest();
          } catch {
          }
        };
        var xhrSuccessStatus = {
          // File protocol always yields status code 0, assume 200
          0: 200,
          // Support: IE <=9 only
          // trac-1450: sometimes IE returns 1223 when it should be 204
          1223: 204
        }, xhrSupported = jQuery.ajaxSettings.xhr();
        support.cors = !!xhrSupported && "withCredentials" in xhrSupported, support.ajax = xhrSupported = !!xhrSupported, jQuery.ajaxTransport(function(options) {
          var callback, errorCallback;
          if (support.cors || xhrSupported && !options.crossDomain)
            return {
              send: function(headers, complete) {
                var i, xhr = options.xhr();
                if (xhr.open(
                  options.type,
                  options.url,
                  options.async,
                  options.username,
                  options.password
                ), options.xhrFields)
                  for (i in options.xhrFields)
                    xhr[i] = options.xhrFields[i];
                options.mimeType && xhr.overrideMimeType && xhr.overrideMimeType(options.mimeType), !options.crossDomain && !headers["X-Requested-With"] && (headers["X-Requested-With"] = "XMLHttpRequest");
                for (i in headers)
                  xhr.setRequestHeader(i, headers[i]);
                callback = function(type) {
                  return function() {
                    callback && (callback = errorCallback = xhr.onload = xhr.onerror = xhr.onabort = xhr.ontimeout = xhr.onreadystatechange = null, type === "abort" ? xhr.abort() : type === "error" ? typeof xhr.status != "number" ? complete(0, "error") : complete(
                      // File: protocol always yields status 0; see trac-8605, trac-14207
                      xhr.status,
                      xhr.statusText
                    ) : complete(
                      xhrSuccessStatus[xhr.status] || xhr.status,
                      xhr.statusText,
                      // Support: IE <=9 only
                      // IE9 has no XHR2 but throws on binary (trac-11426)
                      // For XHR2 non-text, let the caller handle it (gh-2498)
                      (xhr.responseType || "text") !== "text" || typeof xhr.responseText != "string" ? { binary: xhr.response } : { text: xhr.responseText },
                      xhr.getAllResponseHeaders()
                    ));
                  };
                }, xhr.onload = callback(), errorCallback = xhr.onerror = xhr.ontimeout = callback("error"), xhr.onabort !== void 0 ? xhr.onabort = errorCallback : xhr.onreadystatechange = function() {
                  xhr.readyState === 4 && window2.setTimeout(function() {
                    callback && errorCallback();
                  });
                }, callback = callback("abort");
                try {
                  xhr.send(options.hasContent && options.data || null);
                } catch (e) {
                  if (callback)
                    throw e;
                }
              },
              abort: function() {
                callback && callback();
              }
            };
        }), jQuery.ajaxPrefilter(function(s) {
          s.crossDomain && (s.contents.script = !1);
        }), jQuery.ajaxSetup({
          accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
          },
          contents: {
            script: /\b(?:java|ecma)script\b/
          },
          converters: {
            "text script": function(text) {
              return jQuery.globalEval(text), text;
            }
          }
        }), jQuery.ajaxPrefilter("script", function(s) {
          s.cache === void 0 && (s.cache = !1), s.crossDomain && (s.type = "GET");
        }), jQuery.ajaxTransport("script", function(s) {
          if (s.crossDomain || s.scriptAttrs) {
            var script, callback;
            return {
              send: function(_, complete) {
                script = jQuery("<script>").attr(s.scriptAttrs || {}).prop({ charset: s.scriptCharset, src: s.url }).on("load error", callback = function(evt) {
                  script.remove(), callback = null, evt && complete(evt.type === "error" ? 404 : 200, evt.type);
                }), document2.head.appendChild(script[0]);
              },
              abort: function() {
                callback && callback();
              }
            };
          }
        });
        var oldCallbacks = [], rjsonp = /(=)\?(?=&|$)|\?\?/;
        jQuery.ajaxSetup({
          jsonp: "callback",
          jsonpCallback: function() {
            var callback = oldCallbacks.pop() || jQuery.expando + "_" + nonce.guid++;
            return this[callback] = !0, callback;
          }
        }), jQuery.ajaxPrefilter("json jsonp", function(s, originalSettings, jqXHR) {
          var callbackName, overwritten, responseContainer, jsonProp = s.jsonp !== !1 && (rjsonp.test(s.url) ? "url" : typeof s.data == "string" && (s.contentType || "").indexOf("application/x-www-form-urlencoded") === 0 && rjsonp.test(s.data) && "data");
          if (jsonProp || s.dataTypes[0] === "jsonp")
            return callbackName = s.jsonpCallback = isFunction(s.jsonpCallback) ? s.jsonpCallback() : s.jsonpCallback, jsonProp ? s[jsonProp] = s[jsonProp].replace(rjsonp, "$1" + callbackName) : s.jsonp !== !1 && (s.url += (rquery.test(s.url) ? "&" : "?") + s.jsonp + "=" + callbackName), s.converters["script json"] = function() {
              return responseContainer || jQuery.error(callbackName + " was not called"), responseContainer[0];
            }, s.dataTypes[0] = "json", overwritten = window2[callbackName], window2[callbackName] = function() {
              responseContainer = arguments;
            }, jqXHR.always(function() {
              overwritten === void 0 ? jQuery(window2).removeProp(callbackName) : window2[callbackName] = overwritten, s[callbackName] && (s.jsonpCallback = originalSettings.jsonpCallback, oldCallbacks.push(callbackName)), responseContainer && isFunction(overwritten) && overwritten(responseContainer[0]), responseContainer = overwritten = void 0;
            }), "script";
        }), support.createHTMLDocument = function() {
          var body = document2.implementation.createHTMLDocument("").body;
          return body.innerHTML = "<form></form><form></form>", body.childNodes.length === 2;
        }(), jQuery.parseHTML = function(data, context, keepScripts) {
          if (typeof data != "string")
            return [];
          typeof context == "boolean" && (keepScripts = context, context = !1);
          var base, parsed, scripts;
          return context || (support.createHTMLDocument ? (context = document2.implementation.createHTMLDocument(""), base = context.createElement("base"), base.href = document2.location.href, context.head.appendChild(base)) : context = document2), parsed = rsingleTag.exec(data), scripts = !keepScripts && [], parsed ? [context.createElement(parsed[1])] : (parsed = buildFragment([data], context, scripts), scripts && scripts.length && jQuery(scripts).remove(), jQuery.merge([], parsed.childNodes));
        }, jQuery.fn.load = function(url, params, callback) {
          var selector, type, response, self = this, off = url.indexOf(" ");
          return off > -1 && (selector = stripAndCollapse(url.slice(off)), url = url.slice(0, off)), isFunction(params) ? (callback = params, params = void 0) : params && typeof params == "object" && (type = "POST"), self.length > 0 && jQuery.ajax({
            url,
            // If "type" variable is undefined, then "GET" method will be used.
            // Make value of this field explicit since
            // user can override it through ajaxSetup method
            type: type || "GET",
            dataType: "html",
            data: params
          }).done(function(responseText) {
            response = arguments, self.html(selector ? (
              // If a selector was specified, locate the right elements in a dummy div
              // Exclude scripts to avoid IE 'Permission Denied' errors
              jQuery("<div>").append(jQuery.parseHTML(responseText)).find(selector)
            ) : (
              // Otherwise use the full result
              responseText
            ));
          }).always(callback && function(jqXHR, status) {
            self.each(function() {
              callback.apply(this, response || [jqXHR.responseText, status, jqXHR]);
            });
          }), this;
        }, jQuery.expr.pseudos.animated = function(elem) {
          return jQuery.grep(jQuery.timers, function(fn) {
            return elem === fn.elem;
          }).length;
        }, jQuery.offset = {
          setOffset: function(elem, options, i) {
            var curPosition, curLeft, curCSSTop, curTop, curOffset, curCSSLeft, calculatePosition, position = jQuery.css(elem, "position"), curElem = jQuery(elem), props = {};
            position === "static" && (elem.style.position = "relative"), curOffset = curElem.offset(), curCSSTop = jQuery.css(elem, "top"), curCSSLeft = jQuery.css(elem, "left"), calculatePosition = (position === "absolute" || position === "fixed") && (curCSSTop + curCSSLeft).indexOf("auto") > -1, calculatePosition ? (curPosition = curElem.position(), curTop = curPosition.top, curLeft = curPosition.left) : (curTop = parseFloat(curCSSTop) || 0, curLeft = parseFloat(curCSSLeft) || 0), isFunction(options) && (options = options.call(elem, i, jQuery.extend({}, curOffset))), options.top != null && (props.top = options.top - curOffset.top + curTop), options.left != null && (props.left = options.left - curOffset.left + curLeft), "using" in options ? options.using.call(elem, props) : curElem.css(props);
          }
        }, jQuery.fn.extend({
          // offset() relates an element's border box to the document origin
          offset: function(options) {
            if (arguments.length)
              return options === void 0 ? this : this.each(function(i) {
                jQuery.offset.setOffset(this, options, i);
              });
            var rect, win, elem = this[0];
            if (elem)
              return elem.getClientRects().length ? (rect = elem.getBoundingClientRect(), win = elem.ownerDocument.defaultView, {
                top: rect.top + win.pageYOffset,
                left: rect.left + win.pageXOffset
              }) : { top: 0, left: 0 };
          },
          // position() relates an element's margin box to its offset parent's padding box
          // This corresponds to the behavior of CSS absolute positioning
          position: function() {
            if (this[0]) {
              var offsetParent, offset, doc, elem = this[0], parentOffset = { top: 0, left: 0 };
              if (jQuery.css(elem, "position") === "fixed")
                offset = elem.getBoundingClientRect();
              else {
                for (offset = this.offset(), doc = elem.ownerDocument, offsetParent = elem.offsetParent || doc.documentElement; offsetParent && (offsetParent === doc.body || offsetParent === doc.documentElement) && jQuery.css(offsetParent, "position") === "static"; )
                  offsetParent = offsetParent.parentNode;
                offsetParent && offsetParent !== elem && offsetParent.nodeType === 1 && (parentOffset = jQuery(offsetParent).offset(), parentOffset.top += jQuery.css(offsetParent, "borderTopWidth", !0), parentOffset.left += jQuery.css(offsetParent, "borderLeftWidth", !0));
              }
              return {
                top: offset.top - parentOffset.top - jQuery.css(elem, "marginTop", !0),
                left: offset.left - parentOffset.left - jQuery.css(elem, "marginLeft", !0)
              };
            }
          },
          // This method will return documentElement in the following cases:
          // 1) For the element inside the iframe without offsetParent, this method will return
          //    documentElement of the parent window
          // 2) For the hidden or detached element
          // 3) For body or html element, i.e. in case of the html node - it will return itself
          //
          // but those exceptions were never presented as a real life use-cases
          // and might be considered as more preferable results.
          //
          // This logic, however, is not guaranteed and can change at any point in the future
          offsetParent: function() {
            return this.map(function() {
              for (var offsetParent = this.offsetParent; offsetParent && jQuery.css(offsetParent, "position") === "static"; )
                offsetParent = offsetParent.offsetParent;
              return offsetParent || documentElement;
            });
          }
        }), jQuery.each({ scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function(method, prop) {
          var top = prop === "pageYOffset";
          jQuery.fn[method] = function(val) {
            return access(this, function(elem, method2, val2) {
              var win;
              if (isWindow(elem) ? win = elem : elem.nodeType === 9 && (win = elem.defaultView), val2 === void 0)
                return win ? win[prop] : elem[method2];
              win ? win.scrollTo(
                top ? win.pageXOffset : val2,
                top ? val2 : win.pageYOffset
              ) : elem[method2] = val2;
            }, method, val, arguments.length);
          };
        }), jQuery.each(["top", "left"], function(_i, prop) {
          jQuery.cssHooks[prop] = addGetHookIf(
            support.pixelPosition,
            function(elem, computed) {
              if (computed)
                return computed = curCSS(elem, prop), rnumnonpx.test(computed) ? jQuery(elem).position()[prop] + "px" : computed;
            }
          );
        }), jQuery.each({ Height: "height", Width: "width" }, function(name, type) {
          jQuery.each({
            padding: "inner" + name,
            content: type,
            "": "outer" + name
          }, function(defaultExtra, funcName) {
            jQuery.fn[funcName] = function(margin, value) {
              var chainable = arguments.length && (defaultExtra || typeof margin != "boolean"), extra = defaultExtra || (margin === !0 || value === !0 ? "margin" : "border");
              return access(this, function(elem, type2, value2) {
                var doc;
                return isWindow(elem) ? funcName.indexOf("outer") === 0 ? elem["inner" + name] : elem.document.documentElement["client" + name] : elem.nodeType === 9 ? (doc = elem.documentElement, Math.max(
                  elem.body["scroll" + name],
                  doc["scroll" + name],
                  elem.body["offset" + name],
                  doc["offset" + name],
                  doc["client" + name]
                )) : value2 === void 0 ? (
                  // Get width or height on the element, requesting but not forcing parseFloat
                  jQuery.css(elem, type2, extra)
                ) : (
                  // Set width or height on the element
                  jQuery.style(elem, type2, value2, extra)
                );
              }, type, chainable ? margin : void 0, chainable);
            };
          });
        }), jQuery.each([
          "ajaxStart",
          "ajaxStop",
          "ajaxComplete",
          "ajaxError",
          "ajaxSuccess",
          "ajaxSend"
        ], function(_i, type) {
          jQuery.fn[type] = function(fn) {
            return this.on(type, fn);
          };
        }), jQuery.fn.extend({
          bind: function(types, data, fn) {
            return this.on(types, null, data, fn);
          },
          unbind: function(types, fn) {
            return this.off(types, null, fn);
          },
          delegate: function(selector, types, data, fn) {
            return this.on(types, selector, data, fn);
          },
          undelegate: function(selector, types, fn) {
            return arguments.length === 1 ? this.off(selector, "**") : this.off(types, selector || "**", fn);
          },
          hover: function(fnOver, fnOut) {
            return this.mouseenter(fnOver).mouseleave(fnOut || fnOver);
          }
        }), jQuery.each(
          "blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),
          function(_i, name) {
            jQuery.fn[name] = function(data, fn) {
              return arguments.length > 0 ? this.on(name, null, data, fn) : this.trigger(name);
            };
          }
        );
        var rtrim = /^[\s\uFEFF\xA0]+|([^\s\uFEFF\xA0])[\s\uFEFF\xA0]+$/g;
        jQuery.proxy = function(fn, context) {
          var tmp, args, proxy;
          if (typeof context == "string" && (tmp = fn[context], context = fn, fn = tmp), !!isFunction(fn))
            return args = slice.call(arguments, 2), proxy = function() {
              return fn.apply(context || this, args.concat(slice.call(arguments)));
            }, proxy.guid = fn.guid = fn.guid || jQuery.guid++, proxy;
        }, jQuery.holdReady = function(hold) {
          hold ? jQuery.readyWait++ : jQuery.ready(!0);
        }, jQuery.isArray = Array.isArray, jQuery.parseJSON = JSON.parse, jQuery.nodeName = nodeName, jQuery.isFunction = isFunction, jQuery.isWindow = isWindow, jQuery.camelCase = camelCase, jQuery.type = toType, jQuery.now = Date.now, jQuery.isNumeric = function(obj) {
          var type = jQuery.type(obj);
          return (type === "number" || type === "string") && // parseFloat NaNs numeric-cast false positives ("")
          // ...but misinterprets leading-number strings, particularly hex literals ("0x...")
          // subtraction forces infinities to NaN
          !isNaN(obj - parseFloat(obj));
        }, jQuery.trim = function(text) {
          return text == null ? "" : (text + "").replace(rtrim, "$1");
        }, typeof define == "function" && define.amd && define("jquery", [], function() {
          return jQuery;
        });
        var _jQuery = window2.jQuery, _$ = window2.$;
        return jQuery.noConflict = function(deep) {
          return window2.$ === jQuery && (window2.$ = _$), deep && window2.jQuery === jQuery && (window2.jQuery = _jQuery), jQuery;
        }, typeof noGlobal > "u" && (window2.jQuery = window2.$ = jQuery), jQuery;
      });
    }
  });

  // src/UI/OVOUIManager.ts
  var import_jquery = __toESM(require_jquery());

  // src/core/src/Documents/Security/User.ts
  if (localStorage.getItem("user") === null) {
    let signature = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
    localStorage.setItem("user", JSON.stringify({
      name: "Anonymous",
      signature,
      userAgent: navigator.userAgent
    }));
  }
  var currUser = JSON.parse(localStorage.getItem("user"));

  // src/core/src/Documents/DocNodes/DocNode.ts
  var DocNode = class {
    constructor(name, offset = [0, 0]) {
      this.blendMode = "source-over";
      this.transparency = {
        onExport: 1,
        onSelect: 1,
        onUnselect: 1
      };
      this.currentTransparency = 1;
      this.name = name, this.offset = offset;
    }
    onSelect() {
      this.currentTransparency = this.transparency.onSelect;
    }
    onUnselect() {
      this.currentTransparency = this.transparency.onUnselect;
    }
  };

  // src/core/src/Documents/DocNodes/GroupNode.ts
  var GroupNode = class extends DocNode {
    constructor(name = "New Group", offset = [0, 0]) {
      super(name, offset);
      this._nodes = [];
    }
    addNode(node) {
      this._nodes.push(node);
    }
    removeNode(node) {
      let index = this._nodes.indexOf(node);
      index !== -1 ? this._nodes.splice(index, 1) : console.log("Node not found");
    }
    _renderBackground(e) {
      for (let node of this._nodes) {
        if (node === e.activeNode) {
          e.reachActiveLayer = !0;
          return;
        }
        node.render(e);
      }
    }
    _getActiveLayerIndex(activeLayer) {
      for (let i = 0; i < this._nodes.length; i++)
        if (this._nodes[i] === activeLayer)
          return i;
      return -1;
    }
    _renderForeground(e) {
      let index = this._getActiveLayerIndex(e.activeNode);
      if (index === -1)
        for (let node of this._nodes)
          node.render(e);
      else {
        e.reachActiveLayer = !0;
        for (let i = index + 1; i < this._nodes.length; i++)
          this._nodes[i].render(e);
      }
    }
    _renderExport(e) {
      for (let node of this._nodes)
        node.render(e);
    }
    render(e) {
      switch (e.renderMode) {
        case "background":
          this._renderBackground(e);
          break;
        case "foreground":
          this._renderForeground(e);
          break;
        case "export":
          this._renderExport(e);
      }
    }
  };

  // src/core/src/Documents/OVODocument.ts
  var OVODocument = class {
    constructor(name, width, height, modifyInfo = {
      modified: !1,
      modifiedBy: currUser
    }) {
      this._history = [];
      if (this.name = name, this._canvas = new OffscreenCanvas(width, height), this._ctx = this._canvas.getContext("2d"), !this._ctx)
        throw new Error("Failed to create OffscreenCanvasRenderingContext2D");
      this.modifyInfo = modifyInfo, this.cache = {
        background: new OffscreenCanvas(width, height),
        foreground: new OffscreenCanvas(width, height)
      };
      let image = new Image();
      image.src = "./assets/paper.png", image.onload = () => {
        this.backgroundFillStyle = this._ctx.createPattern(image, "repeat");
      }, this.backgroundFillStyle = "white", this._rootNode = new GroupNode("root"), this._activeNode = this._rootNode;
    }
    get rootNode() {
      return this._rootNode;
    }
    get content() {
      return this._canvas;
    }
    render(e) {
      switch (e.renderMode) {
        case "export":
          this.drawBackgroundImage(), this._rootNode.render({
            activeNode: this._activeNode,
            reachActiveLayer: !1,
            renderMode: "export",
            canvas: this._canvas,
            ctx: this._ctx
          });
          break;
        case "edit":
          this.drawBackgroundImage(), this._ctx.drawImage(this.cache.background, 0, 0), this._activeNode.render({
            activeNode: this._activeNode,
            reachActiveLayer: !0,
            renderMode: "activeNode",
            canvas: this._canvas,
            ctx: this._ctx
          }), this._ctx.drawImage(this.cache.foreground, 0, 0);
          break;
      }
    }
    drawBackgroundImage() {
      this._ctx.fillStyle = this.backgroundFillStyle, this._ctx.fillRect(0, 0, this._canvas.width, this._canvas.height), this.cache.background = this._canvas;
    }
  };

  // src/UI/CreateUI.ts
  function openCreateWindow(callback, windowWidth = 300, windowHeight = 300, defaultWidth = 100, defaultHeight = 100) {
    window.CreateUICallback = (name, width, height) => {
      console.log("Callback called"), console.log(name, width, height), callback({ name, width, height });
    };
    let createWindow = window.open("", "", "width=300,height=300");
    createWindow && createWindow.document.write(`
                <html>
                    <head>
                        <title>Create</title>
                    </head>
                    <body>
                        <div>Create New Document</div>
                        <div>Name: <input type="text" id="name" value="Untitled"></div>
                        <div>Width: <input type="number" id="width" value="${defaultWidth}"></div>
                        <div>Height: <input type="number" id="height" value="${defaultHeight}"></div>
                        <button onclick="window.opener.CreateUICallback(
                            document.getElementById('name').value,
                            document.getElementById('width').value,
                            document.getElementById('height').value
                        )
                        window.close();
                        ">Create</button>
                    </body>
                </html>
        `);
  }

  // src/UI/DocCanvasManager.ts
  var DocCanvasManager = class {
    constructor(canvas, ovoDoc) {
      this.background = "#c9c9c9";
      if (this.canvas = canvas, this.ctx = canvas.getContext("2d"), !this.ctx)
        throw new Error("Failed to get 2D context from canvas.");
      this.canvasScaleFactor = window.devicePixelRatio, this.updateCanvasSize();
      let callFrame = () => {
        this.frame(), requestAnimationFrame(callFrame);
      };
      callFrame(), window.addEventListener("resize", async () => {
        await this.updateCanvasSize();
      });
    }
    async updateCanvasSize() {
      let scale = Math.max(window.devicePixelRatio, 1);
      this.canvas.width = this.canvas.clientWidth * scale, this.canvas.height = this.canvas.clientHeight * scale, this.canvasScaleFactor = scale, console.log("Resized canvas to " + this.canvas.width + "x" + this.canvas.height);
    }
    /**
     * This function is called every frame.
     */
    frame() {
      let canvas = this.canvas, ctx = this.ctx;
      ctx.save(), this.ctx.scale(this.canvasScaleFactor, this.canvasScaleFactor), ctx.fillStyle = this.background, ctx.fillRect(0, 0, this.canvas.width, this.canvas.height), ctx.moveTo(0, 0), ctx.lineTo(100, 100), ctx.stroke(), ctx.restore();
    }
  };

  // src/UI/OVOUIManager.ts
  var OVOUIManager = class {
    constructor(root, doc = null) {
      this._currentDocument = null;
      this._documentList = [];
      if (doc)
        throw new Error("Not implemented yet");
      this.root = root, doc === null ? this.showNullDocumentUI() : this.currentDocument = doc;
    }
    get currentDocument() {
      return this._currentDocument;
    }
    set currentDocument(doc) {
      this._currentDocument = doc, this._documentList.indexOf(doc) === -1 && this._documentList.push(doc);
    }
    showNullDocumentUI() {
      let root = this.root;
      root.innerHTML = "", (0, import_jquery.default)(root).append(`
            <div>OVO Paint</div>
        `);
      let createBtn = (0, import_jquery.default)("<button>Create</button>").on("click", () => {
        openCreateWindow(
          (arg) => {
            console.log("Create button clicked"), this.currentDocument = new OVODocument(
              arg.name,
              arg.width,
              arg.height
            ), this.showDocumentUI();
          }
        );
      }), openBtn = (0, import_jquery.default)("<button>Open</button>").on("click", () => {
        console.log("Open button clicked");
      });
      (0, import_jquery.default)(root).append(createBtn), (0, import_jquery.default)(root).append(openBtn), console.log(root);
    }
    showDocumentUI() {
      let root = this.root;
      root.innerHTML = "";
      let canvas = document.createElement("canvas");
      canvas.style.width = "100%", canvas.style.height = "100%", (0, import_jquery.default)(root).append(canvas);
      let docCanvasManager = new DocCanvasManager(canvas, this.currentDocument);
    }
  };

  // src/Main.ts
  function main() {
    let root = document.getElementById("ovo-root"), manager = new OVOUIManager(root);
  }
  main();
})();
/*! Bundled license information:

jquery/dist/jquery.js:
  (*!
   * jQuery JavaScript Library v3.6.3
   * https://jquery.com/
   *
   * Includes Sizzle.js
   * https://sizzlejs.com/
   *
   * Copyright OpenJS Foundation and other contributors
   * Released under the MIT license
   * https://jquery.org/license
   *
   * Date: 2022-12-20T21:28Z
   *)
*/
//# sourceMappingURL=main.js.map
