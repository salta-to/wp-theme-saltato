!(function () {
	"use strict";
	function n() {
		(window.ga && window.ga.loaded) ||
			(function (e, t, n) {
				(e[n] = e[n] || []), e[n].push({ "gtm.start": new Date().getTime(), event: "gtm.js" });
				t = t.createElement("script");
				(t["async"] = !0), (t.src = "https://www.googletagmanager.com/gtm.js?id=GTM-53XG2JT"), document.head.appendChild(t);
			})(window, document, "dataLayer");
	}
	var r = "design_system_cookies_policy",
		i = "26179049-17",
		o = "116229859-1",
		a = { analytics: ["_ga", "_gid", "_gat_UA-" + i, "_gat_UA-" + o], essential: ["design_system_cookies_policy"] },
		s = { analytics: !1 };
	function u(e, t, n) {
		if (void 0 === t) return p(e);
		var r;
		!1 === t || null === t
			? u((r = e)) &&
				((document.cookie = r + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/"),
				(document.cookie = r + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT;domain=" + window.location.hostname + ";path=/"),
				(document.cookie = r + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT;domain=." + window.location.hostname + ";path=/"))
			: h(e, t, (n = void 0 === n ? { days: 30 } : n));
	}
	function c() {
		var e,
			t = p(r);
		if (!t) return null;
		try {
			e = JSON.parse(t);
		} catch (n) {
			return null;
		}
		return e;
	}
	function l(e) {
		return e && e.version >= window.GDS_CONSENT_COOKIE_VERSION;
	}
	function t(e) {
		var t,
			n = (n = c()) || JSON.parse(JSON.stringify(s));
		for (t in e) n[t] = e[t];
		delete n.essential, (n.version = window.GDS_CONSENT_COOKIE_VERSION), h(r, JSON.stringify(n), { days: 365 }), d();
	}
	function d() {
		var e,
			t = c();
		for (e in (t = !l(t) ? JSON.parse(JSON.stringify(s)) : t))
			"version" !== e &&
				"essential" !== e &&
				("analytics" === e && t[e] ? ((window["ga-disable-UA-" + i] = !1), (window["ga-disable-UA-" + o] = !1), n()) : ((window["ga-disable-UA-" + i] = !0), (window["ga-disable-UA-" + o] = !0)),
				t[e] ||
					a[e].forEach(function (e) {
						u(e, null);
					}));
	}
	function f(e, t) {
		if ("essential" === e) return !0;
		try {
			return t[e];
		} catch (n) {
			return console.error(n), !1;
		}
	}
	function p(e) {
		for (var t = e + "=", n = document.cookie.split(";"), r = 0, i = n.length; r < i; r++) {
			for (var o = n[r]; " " === o.charAt(0); ) o = o.substring(1, o.length);
			if (0 === o.indexOf(t)) return decodeURIComponent(o.substring(t.length));
		}
		return null;
	}
	function h(e, t, n) {
		!(function (e) {
			if (e === r) return 1;
			var t,
				n = c();
			for (t in (l(n) || (n = s), a)) if ("-1" !== a[t].indexOf(e)) return f(t, n);
		})(e) ||
			((e = e + "=" + t + "; path=/"),
			(n = void 0 === n ? {} : n).days && ((t = new Date()).setTime(t.getTime() + 24 * n.days * 60 * 60 * 1e3), (e = e + "; expires=" + t.toGMTString())),
			"https:" === document.location.protocol && (e += "; Secure"),
			(document.cookie = e));
	}
	var m = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
	function e(e) {
		return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e["default"] : e;
	}
	function y(e, t) {
		return e((t = { exports: {} }), t.exports), t.exports;
	}
	y(function (e, t) {
		(function (e) {
			var a, s, u, c;
			("defineProperty" in Object &&
				(function () {
					try {
						return Object.defineProperty({}, "test", { value: 42 }), !0;
					} catch (e) {
						return !1;
					}
				})()) ||
				((a = Object.defineProperty),
				(s = Object.prototype.hasOwnProperty("__defineGetter__")),
				(u = "Getters & setters cannot be defined on this javascript engine"),
				(c = "A property cannot both have accessors and be writable or have a value"),
				(Object.defineProperty = function (e, t, n) {
					if (a && (e === window || e === document || e === Element.prototype || e instanceof Element)) return a(e, t, n);
					if (null === e || !(e instanceof Object || "object" == typeof e)) throw new TypeError("Object.defineProperty called on non-object");
					if (!(n instanceof Object)) throw new TypeError("Property description must be an object");
					var r = String(t),
						i = "value" in n || "writable" in n,
						o = "get" in n && typeof n.get,
						t = "set" in n && typeof n.set;
					if (o) {
						if ("function" !== o) throw new TypeError("Getter must be a function");
						if (!s) throw new TypeError(u);
						if (i) throw new TypeError(c);
						Object.__defineGetter__.call(e, r, n.get);
					} else e[r] = n.value;
					if (t) {
						if ("function" !== t) throw new TypeError("Setter must be a function");
						if (!s) throw new TypeError(u);
						if (i) throw new TypeError(c);
						Object.__defineSetter__.call(e, r, n.set);
					}
					return "value" in n && (e[r] = n.value), e;
				}));
		}.call(("object" == typeof window && window) || ("object" == typeof self && self) || ("object" == typeof m && m) || {}),
			function (e) {
				"bind" in Function.prototype ||
					Object.defineProperty(Function.prototype, "bind", {
						value: function (t) {
							var e = Array,
								n = Object,
								r = n.prototype,
								e = e.prototype,
								i = function i() {},
								o = r.toString,
								a = "function" == typeof Symbol && "symbol" == typeof Symbol.toStringTag,
								s = Function.prototype.toString,
								u = function u(e) {
									try {
										return s.call(e), !0;
									} catch (t) {
										return !1;
									}
								},
								c = e.slice,
								l = e.concat,
								d = e.push,
								e = Math.max,
								f = this;
							if (
								!(function v(e) {
									if ("function" != typeof e) return !1;
									if (a) return u(e);
									e = o.call(e);
									return "[object Function]" === e || "[object GeneratorFunction]" === e;
								})(f)
							)
								throw new TypeError("Function.prototype.bind called on incompatible " + f);
							for (var p, h = c.call(arguments, 1), m = e(0, f.length - h.length), y = [], g = 0; g < m; g++) d.call(y, "$" + g);
							return (
								(p = Function(
									"binder",
									"return function (" + y.join(",") + "){ return binder.apply(this, arguments); }"
								)(function () {
									if (this instanceof p) {
										var e = f.apply(this, l.call(h, c.call(arguments)));
										return n(e) === e ? e : this;
									}
									return f.apply(t, l.call(h, c.call(arguments)));
								})),
								f.prototype && ((i.prototype = f.prototype), (p.prototype = new i()), (i.prototype = null)),
								p
							);
						},
					});
			}.call(("object" == typeof window && window) || ("object" == typeof self && self) || ("object" == typeof m && m) || {}));
	}),
		y(function (e, t) {
			(function (e) {
				"Window" in this ||
					("undefined" == typeof WorkerGlobalScope &&
						"function" != typeof importScripts &&
						(function (e) {
							e.constructor ? (e.Window = e.constructor) : ((e.Window = e.constructor = new Function("return function Window() {}")()).prototype = this);
						})(this));
			}.call(("object" == typeof window && window) || ("object" == typeof self && self) || ("object" == typeof m && m) || {}),
				function (e) {
					"Document" in this ||
						("undefined" == typeof WorkerGlobalScope &&
							"function" != typeof importScripts &&
							(this.HTMLDocument ? (this.Document = this.HTMLDocument) : ((this.Document = this.HTMLDocument = document.constructor = new Function("return function Document() {}")()), (this.Document.prototype = document))));
				}.call(("object" == typeof window && window) || ("object" == typeof self && self) || ("object" == typeof m && m) || {}),
				function (e) {
					var t, n, s, u, c, l, r, i, o;
					function a() {
						return o-- || clearTimeout(i), !(!document.body || document.body.prototype || !/(complete|interactive)/.test(document.readyState)) && (c(document, !0), i && document.body.prototype && clearTimeout(i), !!document.body.prototype);
					}
					("Element" in this && "HTMLElement" in this) ||
						(!window.Element || window.HTMLElement
							? ((window.Element = window.HTMLElement = new Function("return function Element() {}")()),
								(n = (t = document.appendChild(document.createElement("body"))).appendChild(document.createElement("iframe")).contentWindow.document),
								(s = Element.prototype = n.appendChild(n.createElement("*"))),
								(u = {}),
								(c = function (e, t) {
									var n,
										r,
										i,
										o = e.childNodes || [],
										a = -1;
									if (1 === e.nodeType && e.constructor !== Element) for (n in ((e.constructor = Element), u)) (r = u[n]), (e[n] = r);
									for (; (i = t && o[++a]); ) c(i, t);
									return e;
								}),
								(l = document.getElementsByTagName("*")),
								(r = document.createElement),
								(o = 100),
								s.attachEvent("onpropertychange", function (e) {
									for (var t, n = e.propertyName, r = !u.hasOwnProperty(n), i = s[n], o = u[n], a = -1; (t = l[++a]); ) 1 === t.nodeType && ((!r && t[n] !== o) || (t[n] = i));
									u[n] = i;
								}),
								(s.constructor = Element),
								s.hasAttribute ||
									(s.hasAttribute = function (e) {
										return null !== this.getAttribute(e);
									}),
								a() || ((document.onreadystatechange = a), (i = setInterval(a, 25))),
								(document.createElement = function (e) {
									e = r(String(e).toLowerCase());
									return c(e);
								}),
								document.removeChild(t))
							: (window.HTMLElement = window.Element));
				}.call(("object" == typeof window && window) || ("object" == typeof self && self) || ("object" == typeof m && m) || {}),
				function (e) {
					var a, s, u, c;
					("defineProperty" in Object &&
						(function () {
							try {
								return Object.defineProperty({}, "test", { value: 42 }), !0;
							} catch (e) {
								return !1;
							}
						})()) ||
						((a = Object.defineProperty),
						(s = Object.prototype.hasOwnProperty("__defineGetter__")),
						(u = "Getters & setters cannot be defined on this javascript engine"),
						(c = "A property cannot both have accessors and be writable or have a value"),
						(Object.defineProperty = function (e, t, n) {
							if (a && (e === window || e === document || e === Element.prototype || e instanceof Element)) return a(e, t, n);
							if (null === e || !(e instanceof Object || "object" == typeof e)) throw new TypeError("Object.defineProperty called on non-object");
							if (!(n instanceof Object)) throw new TypeError("Property description must be an object");
							var r = String(t),
								i = "value" in n || "writable" in n,
								o = "get" in n && typeof n.get,
								t = "set" in n && typeof n.set;
							if (o) {
								if ("function" !== o) throw new TypeError("Getter must be a function");
								if (!s) throw new TypeError(u);
								if (i) throw new TypeError(c);
								Object.__defineGetter__.call(e, r, n.get);
							} else e[r] = n.value;
							if (t) {
								if ("function" !== t) throw new TypeError("Setter must be a function");
								if (!s) throw new TypeError(u);
								if (i) throw new TypeError(c);
								Object.__defineSetter__.call(e, r, n.set);
							}
							return "value" in n && (e[r] = n.value), e;
						}));
				}.call(("object" == typeof window && window) || ("object" == typeof self && self) || ("object" == typeof m && m) || {}),
				function (o) {
					var e, n;
					function s(e, t) {
						for (var n = -1, r = e.length; ++n < r; ) if (n in e && e[n] === t) return n;
						return -1;
					}
					!(function (e) {
						if (!("Event" in e)) return !1;
						if ("function" == typeof e.Event) return !0;
						try {
							return new Event("click"), !0;
						} catch (t) {
							return !1;
						}
					})(this) &&
						((n = { click: 1, dblclick: 1, keyup: 1, keypress: 1, keydown: 1, mousedown: 1, mouseup: 1, mousemove: 1, mouseover: 1, mouseenter: 1, mouseleave: 1, mouseout: 1, storage: 1, storagecommit: 1, textinput: 1 }),
						"undefined" != typeof document &&
							"undefined" != typeof window &&
							((e = (window.Event && window.Event.prototype) || null),
							(window.Event = Window.prototype.Event = function Event(e, t) {
								if (!e) throw new Error("Not enough arguments");
								if ("createEvent" in document) {
									var n = document.createEvent("Event"),
										r = !(!t || t.bubbles === o) && t.bubbles,
										i = !(!t || t.cancelable === o) && t.cancelable;
									return n.initEvent(e, r, i), n;
								}
								return ((n = document.createEventObject()).type = e), (n.bubbles = !(!t || t.bubbles === o) && t.bubbles), (n.cancelable = !(!t || t.cancelable === o) && t.cancelable), n;
							}),
							e && Object.defineProperty(window.Event, "prototype", { configurable: !1, enumerable: !1, writable: !0, value: e }),
							"createEvent" in document ||
								((window.addEventListener = Window.prototype.addEventListener = Document.prototype.addEventListener = Element.prototype.addEventListener = function () {
									var a = this,
										e = arguments[0],
										t = arguments[1];
									if (a === window && e in n) throw new Error("In IE8 the event: " + e + " is not available on the window object. Please see https://github.com/Financial-Times/polyfill-service/issues/317 for more information.");
									a._events || (a._events = {}),
										a._events[e] ||
											((a._events[e] = function (e) {
												var t,
													n = a._events[e.type].list,
													r = n.slice(),
													i = -1,
													o = r.length;
												for (
													e.preventDefault = function () {
														!1 !== e.cancelable && (e.returnValue = !1);
													},
														e.stopPropagation = function () {
															e.cancelBubble = !0;
														},
														e.stopImmediatePropagation = function () {
															(e.cancelBubble = !0), (e.cancelImmediate = !0);
														},
														e.currentTarget = a,
														e.relatedTarget = e.fromElement || null,
														e.target = e.target || e.srcElement || a,
														e.timeStamp = new Date().getTime(),
														e.clientX && ((e.pageX = e.clientX + document.documentElement.scrollLeft), (e.pageY = e.clientY + document.documentElement.scrollTop));
													++i < o && !e.cancelImmediate;

												)
													i in r && -1 !== s(n, (t = r[i])) && "function" == typeof t && t.call(a, e);
											}),
											(a._events[e].list = []),
											a.attachEvent && a.attachEvent("on" + e, a._events[e])),
										a._events[e].list.push(t);
								}),
								(window.removeEventListener = Window.prototype.removeEventListener = Document.prototype.removeEventListener = Element.prototype.removeEventListener = function () {
									var e,
										t = this,
										n = arguments[0];
									t._events &&
										t._events[n] &&
										t._events[n].list &&
										-1 !== (e = s(t._events[n].list, arguments[1])) &&
										(t._events[n].list.splice(e, 1), t._events[n].list.length || (t.detachEvent && t.detachEvent("on" + n, t._events[n]), delete t._events[n]));
								}),
								(window.dispatchEvent = Window.prototype.dispatchEvent = Document.prototype.dispatchEvent = Element.prototype.dispatchEvent = function (e) {
									if (!arguments.length) throw new Error("Not enough arguments");
									if (!e || "string" != typeof e.type) throw new Error("DOM Events Exception 0");
									var t,
										n = this,
										r = e.type;
									try {
										e.bubbles ||
											((e.cancelBubble = !0),
											(t = function (e) {
												(e.cancelBubble = !0), (n || window).detachEvent("on" + r, t);
											}),
											this.attachEvent("on" + r, t)),
											this.fireEvent("on" + r, e);
									} catch (i) {
										for (
											e.target = n;
											"_events" in (e.currentTarget = n) && "function" == typeof n._events[r] && n._events[r].call(n, e),
												"function" == typeof n["on" + r] && n["on" + r].call(n, e),
												(n = 9 === n.nodeType ? n.parentWindow : n.parentNode) && !e.cancelBubble;

										);
									}
									return !0;
								}),
								document.attachEvent("onreadystatechange", function () {
									"complete" === document.readyState && document.dispatchEvent(new Event("DOMContentLoaded", { bubbles: !0 }));
								}))));
				}.call(("object" == typeof window && window) || ("object" == typeof self && self) || ("object" == typeof m && m) || {}));
		});
	var g = y(function (e, t) {
			((t = t).nodeListForEach = function (e, t) {
				if (window.NodeList.prototype.forEach) return e.forEach(t);
				for (var n = 0; n < e.length; n++) t.call(window, e[n], n, e);
			}),
				(t.generateUniqueID = function () {
					var n = new Date().getTime();
					"undefined" != typeof window.performance && "function" == typeof window.performance.now && (n += window.performance.now());
					return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (e) {
						var t = (n + 16 * Math.random()) % 16 | 0;
						return (n = Math.floor(n / 16)), ("x" === e ? t : (3 & t) | 8).toString(16);
					});
				});
		}),
		v = g.nodeListForEach;
	function b(e) {
		this.$module = e;
	}
	function w(e) {
		this.$module = e;
	}
	(b.prototype.init = function () {
		var e;
		(this.$cookieBanner = this.$module),
			(this.$acceptButton = this.$module.querySelector(".js-cookie-banner-accept")),
			(this.$rejectButton = this.$module.querySelector(".js-cookie-banner-reject")),
			(this.$cookieMessage = this.$module.querySelector(".js-cookie-banner-message")),
			(this.$cookieConfirmationAccept = this.$module.querySelector(".js-cookie-banner-confirmation-accept")),
			(this.$cookieConfirmationReject = this.$module.querySelector(".js-cookie-banner-confirmation-reject")),
			(this.$cookieBannerHideButtons = this.$module.querySelectorAll(".js-cookie-banner-hide")),
			this.$cookieBanner &&
				!this.onCookiesPage() &&
				(((e = c()) && l(e)) || (d(), this.$cookieBanner.removeAttribute("hidden")),
				this.$acceptButton.addEventListener("click", this.acceptCookies.bind(this)),
				this.$rejectButton.addEventListener("click", this.rejectCookies.bind(this)),
				v(
					this.$cookieBannerHideButtons,
					function (e) {
						e.addEventListener("click", this.hideBanner.bind(this));
					}.bind(this)
				));
	}),
		(b.prototype.hideBanner = function () {
			this.$cookieBanner.setAttribute("hidden", !0);
		}),
		(b.prototype.acceptCookies = function () {
			t({ analytics: !0 }), this.$cookieMessage.setAttribute("hidden", !0), this.revealConfirmationMessage(this.$cookieConfirmationAccept);
		}),
		(b.prototype.rejectCookies = function () {
			t({ analytics: !1 }), this.$cookieMessage.setAttribute("hidden", !0), this.revealConfirmationMessage(this.$cookieConfirmationReject);
		}),
		(b.prototype.revealConfirmationMessage = function (e) {
			e.removeAttribute("hidden"),
				e.getAttribute("tabindex") ||
					(e.setAttribute("tabindex", "-1"),
					e.addEventListener("blur", function () {
						e.removeAttribute("tabindex");
					})),
				e.focus();
		}),
		(b.prototype.onCookiesPage = function () {
			return "/cookies/" === window.location.pathname;
		}),
		(w.prototype.init = function () {
			if (this.$module) {
				if (!("IntersectionObserver" in window)) return this.$module.classList.remove("app-back-to-top--hidden");
				var n,
					r,
					i,
					e,
					o = document.querySelector(".app-footer"),
					a = document.querySelector(".app-subnav");
				o &&
					a &&
					((r = n = !1),
					(i = 0),
					(e = new window.IntersectionObserver(
						function (e) {
							var t = e.find(function (e) {
									return e.target === o;
								}),
								e = e.find(function (e) {
									return e.target === a;
								});
							t && (n = t.isIntersecting),
								e && ((r = e.isIntersecting), (i = e.intersectionRatio)),
								r || n ? this.$module.classList.remove("app-back-to-top--fixed") : this.$module.classList.add("app-back-to-top--fixed"),
								r && 1 === i ? this.$module.classList.add("app-back-to-top--hidden") : this.$module.classList.remove("app-back-to-top--hidden");
						}.bind(this)
					)).observe(o),
					e.observe(a));
			}
		});
	var x = {
		iframeResizer: y(function (e) {
			function c() {
				return window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver;
			}
			function w(e, t, n) {
				"addEventListener" in window ? e.addEventListener(t, n, !1) : "attachEvent" in window && e.attachEvent("on" + t, n);
			}
			function x(e, t, n) {
				"removeEventListener" in window ? e.removeEventListener(t, n, !1) : "detachEvent" in window && e.detachEvent("on" + t, n);
			}
			function i(e) {
				return F + "[" + ((e = "Host page: " + (t = e)), (e = window.top !== window.self ? (window.parentIFrame && window.parentIFrame.getId ? window.parentIFrame.getId() + ": " + t : "Nested host page: " + t) : e)) + "]";
				var t;
			}
			function n(e) {
				return D[e] ? D[e].log : y;
			}
			function E(e, t) {
				r("log", e, t, n(e));
			}
			function S(e, t) {
				r("info", e, t, n(e));
			}
			function k(e, t) {
				r("warn", e, t, !0);
			}
			function r(e, t, n, r) {
				!0 === r && "object" == typeof window.console && console[e](i(t), n);
			}
			function t(t) {
				function n() {
					e("Height"),
						e("Width"),
						I(
							function () {
								A(v), L(b), l("resizedCallback", v);
							},
							v,
							"init"
						);
				}
				function e(e) {
					var t = Number(D[b]["max" + e]),
						n = Number(D[b]["min" + e]),
						r = e.toLowerCase(),
						e = Number(v[r]);
					E(b, "Checking " + r + " is in range " + n + "-" + t), e < n && ((e = n), E(b, "Set " + r + " to min value")), t < e && ((e = t), E(b, "Set " + r + " to max value")), (v[r] = "" + e);
				}
				function r() {
					function e() {
						return r.constructor === Array
							? (function () {
									var e = 0,
										t = !1;
									for (E(b, "Checking connection is from allowed list of origins: " + r); e < r.length; e++)
										if (r[e] === n) {
											t = !0;
											break;
										}
									return t;
								})()
							: ((e = D[b] && D[b].remoteHost), E(b, "Checking connection is from: " + e), n === e);
						var e;
					}
					var n = t.origin,
						r = D[b] && D[b].checkOrigin;
					if (r && "" + n != "null" && !e())
						throw new Error(
							"Unexpected message received from: " + n + " for " + v.iframe.id + ". Message was: " + t.data + ". This error can be disabled by setting the checkOrigin: false option or by providing of array of trusted domains."
						);
					return 1;
				}
				function a(e) {
					return g.substr(g.indexOf(":") + M + e);
				}
				function s(n, r) {
					var e, t, i;
					(e = function () {
						var e, t;
						N(
							"Send Page Info",
							"pageInfo:" +
								((e = document.body.getBoundingClientRect()),
								(t = v.iframe.getBoundingClientRect()),
								JSON.stringify({
									iframeHeight: t.height,
									iframeWidth: t.width,
									clientHeight: Math.max(document.documentElement.clientHeight, window.innerHeight || 0),
									clientWidth: Math.max(document.documentElement.clientWidth, window.innerWidth || 0),
									offsetTop: parseInt(t.top - e.top, 10),
									offsetLeft: parseInt(t.left - e.left, 10),
									scrollTop: window.pageYOffset,
									scrollLeft: window.pageXOffset,
								})),
							n,
							r
						);
					}),
						(t = 32),
						q[(i = r)] ||
							(q[i] = setTimeout(function () {
								(q[i] = null), e();
							}, t));
				}
				function i(e) {
					e = e.getBoundingClientRect();
					return O(b), { x: Math.floor(Number(e.left) + Number(Q.x)), y: Math.floor(Number(e.top) + Number(Q.y)) };
				}
				function u(e) {
					var t = e ? i(v.iframe) : { x: 0, y: 0 },
						n = { x: Number(v.width) + t.x, y: Number(v.height) + t.y };
					E(b, "Reposition requested from iFrame (offset x:" + t.x + " y:" + t.y + ")"),
						window.top !== window.self ? (window.parentIFrame ? window.parentIFrame["scrollTo" + (e ? "Offset" : "")](n.x, n.y) : k(b, "Unable to scroll to requested position, window.parentIFrame not found")) : ((Q = n), o(), E(b, "--"));
				}
				function o() {
					!1 !== l("scrollCallback", Q) ? L(b) : C();
				}
				function c(e) {
					var t,
						n = e.split("#")[1] || "",
						e = decodeURIComponent(n),
						r = document.getElementById(e) || document.getElementsByName(e)[0];
					r
						? ((t = i(r)), E(b, "Moving to in page link (#" + n + ") at x: " + t.x + " y: " + t.y), (Q = { x: t.x, y: t.y }), o(), E(b, "--"))
						: window.top !== window.self
						? window.parentIFrame
							? window.parentIFrame.moveToAnchor(n)
							: E(b, "In page link #" + n + " not found and window.parentIFrame not found")
						: E(b, "In page link #" + n + " not found");
				}
				function l(e, t) {
					return T(b, e, t);
				}
				function d() {
					switch ((D[b] && D[b].firstRun && D[b] && (D[b].firstRun = !1), v.type)) {
						case "close":
							D[b].closeRequestCallback ? T(b, "closeRequestCallback", D[b].iframe) : _(v.iframe);
							break;
						case "message":
							(t = a(6)), E(b, "MessageCallback passed: {iframe: " + v.iframe.id + ", message: " + t + "}"), l("messageCallback", { iframe: v.iframe, message: JSON.parse(t) }), E(b, "--");
							break;
						case "scrollTo":
							u(!1);
							break;
						case "scrollToOffset":
							u(!0);
							break;
						case "pageInfo":
							s(D[b] && D[b].iframe, b), (o = b), e("Add ", w), D[o] && (D[o].stopPageInfo = i);
							break;
						case "pageInfoStop":
							D[b] && D[b].stopPageInfo && (D[b].stopPageInfo(), delete D[b].stopPageInfo);
							break;
						case "inPageLink":
							c(a(9));
							break;
						case "reset":
							j(v);
							break;
						case "init":
							n(), l("initCallback", v.iframe);
							break;
						default:
							n();
					}
					function e(t, n) {
						function r() {
							D[o] ? s(D[o].iframe, o) : i();
						}
						["scroll", "resize"].forEach(function (e) {
							E(o, t + e + " listener for sendPageInfo"), n(window, e, r);
						});
					}
					function i() {
						e("Remove ", x);
					}
					var o, t;
				}
				var f,
					p,
					h,
					m,
					y,
					g = t.data,
					v = {},
					b = null;
				"[iFrameResizerChild]Ready" === g
					? (function () {
							for (var e in D) N("iFrame requested init", P(e), document.getElementById(e), e);
						})()
					: F === ("" + g).substr(0, R) && g.substr(R).split(":")[0] in D
					? ((y = g.substr(R).split(":")),
						(v = { iframe: D[y[0]] && D[y[0]].iframe, id: y[0], height: y[1], width: y[2], type: y[3] }),
						(b = v.id),
						D[b] && (D[b].loaded = !0),
						(m = v.type in { true: 1, false: 1, undefined: 1 }) && E(b, "Ignoring init message from meta parent page"),
						!m &&
							((h = !0), D[(p = b)] || ((h = !1), k(v.type + " No settings for " + p + ". Message was: " + g)), h) &&
							(E(b, "Received: " + g), (f = !0), null === v.iframe && (k(b, "IFrame (" + v.id + ") not found"), (f = !1)), f && r() && d()))
					: S(b, "Ignored: " + g);
			}
			function T(e, t, n) {
				var r = null,
					i = null;
				if (D[e]) {
					if ("function" != typeof (r = D[e][t])) throw new TypeError(t + " on iFrame[" + e + "] is not a function");
					i = r(n);
				}
				return i;
			}
			function l(e) {
				e = e.id;
				delete D[e];
			}
			function _(e) {
				var t = e.id;
				E(t, "Removing iFrame: " + t);
				try {
					e.parentNode && e.parentNode.removeChild(e);
				} catch (n) {}
				T(t, "closedCallback", t), E(t, "--"), l(e);
			}
			function O(e) {
				null === Q &&
					E(e, "Get page position: " + (Q = { x: window.pageXOffset !== h ? window.pageXOffset : document.documentElement.scrollLeft, y: window.pageYOffset !== h ? window.pageYOffset : document.documentElement.scrollTop }).x + "," + Q.y);
			}
			function L(e) {
				null !== Q && (window.scrollTo(Q.x, Q.y), E(e, "Set page position: " + Q.x + "," + Q.y), C());
			}
			function C() {
				Q = null;
			}
			function j(e) {
				E(e.id, "Size reset requested by " + ("init" === e.type ? "host page" : "iFrame")),
					O(e.id),
					I(
						function () {
							A(e), N("reset", "reset", e.iframe, e.id);
						},
						e,
						"reset"
					);
			}
			function A(i) {
				function n(e) {
					function t() {
						for (var e in D)
							!(function (t) {
								function e(e) {
									return "0px" === (D[t] && D[t].iframe.style[e]);
								}
								D[t] && null !== D[t].iframe.offsetParent && (e("height") || e("width")) && N("Visibility change", "resize", D[t].iframe, t);
							})(e);
					}
					function n(e) {
						E("window", "Mutation observed: " + e[0].target + " " + e[0].type), a(t, 16);
					}
					var r;
					g ||
						"0" !== i[e] ||
						((g = !0),
						E(o, "Hidden iFrame detected, creating visibility listener"),
						(r = c()) &&
							(function () {
								var e = document.querySelector("body");
								new r(n).observe(e, { attributes: !0, attributeOldValue: !1, characterData: !0, characterDataOldValue: !1, childList: !0, subtree: !0 });
							})());
				}
				function e(e) {
					var t;
					(t = e), i.id ? ((i.iframe.style[t] = i[t] + "px"), E(i.id, "IFrame (" + o + ") " + t + " set to " + i[t] + "px")) : E("undefined", "messageData id not set"), n(e);
				}
				var o = i.iframe.id;
				D[o] && (D[o].sizeHeight && e("height"), D[o].sizeWidth && e("width"));
			}
			function I(e, t, n) {
				n !== t.type && v ? (E(t.id, "Requesting animation frame"), v(e)) : e();
			}
			function N(t, n, r, i, e) {
				function o() {
					var e;
					r && "contentWindow" in r && null !== r.contentWindow
						? ((e = D[i] && D[i].targetOrigin), E(i, "[" + t + "] Sending msg to iframe[" + i + "] (" + n + ") targetOrigin: " + e), r.contentWindow.postMessage(F + n, e))
						: k(i, "[" + t + "] IFrame(" + i + ") not found");
				}
				function a() {
					e &&
						D[i] &&
						D[i].warningTimeout &&
						(D[i].msgTimeout = setTimeout(function () {
							!D[i] ||
								D[i].loaded ||
								s ||
								((s = !0),
								k(
									i,
									"IFrame has not responded within " +
										D[i].warningTimeout / 1e3 +
										" seconds. Check iFrameResizer.contentWindow.js has been loaded in iFrame. This message can be ignored if everything is working, or you can set the warningTimeout option to a higher value or zero to suppress this warning."
								));
						}, D[i].warningTimeout));
				}
				var s = !1;
				(i = i || r.id), D[i] && (o(), a());
			}
			function P(e) {
				return (
					e +
					":" +
					D[e].bodyMarginV1 +
					":" +
					D[e].sizeWidth +
					":" +
					D[e].log +
					":" +
					D[e].interval +
					":" +
					D[e].enablePublicMethods +
					":" +
					D[e].autoResize +
					":" +
					D[e].bodyMargin +
					":" +
					D[e].heightCalculationMethod +
					":" +
					D[e].bodyBackground +
					":" +
					D[e].bodyPadding +
					":" +
					D[e].tolerance +
					":" +
					D[e].inPageLinks +
					":" +
					D[e].resizeFrom +
					":" +
					D[e].widthCalculationMethod
				);
			}
			function o(r, e) {
				function t(n) {
					var e,
						t = c();
					t &&
						((e = t),
						r.parentNode &&
							new e(function (e) {
								e.forEach(function (e) {
									Array.prototype.slice.call(e.removedNodes).forEach(function (e) {
										e === r && _(r);
									});
								});
							}).observe(r.parentNode, { childList: !0 })),
						w(r, "load", function () {
							var e, t;
							N("iFrame.onload", n, r, h, !0), (e = D[a] && D[a].firstRun), (t = D[a] && D[a].heightCalculationMethod in b), !e && t && j({ iframe: r, height: 0, width: 0, type: "init" });
						}),
						N("init", n, r, h, !0);
				}
				function n(e) {
					(e = e || {}),
						(D[a] = { firstRun: !0, iframe: r, remoteHost: r.src.split("/").slice(0, 3).join("/") }),
						(function (e) {
							if ("object" != typeof e) throw new TypeError("Options is not an object");
						})(e),
						(function (e) {
							for (var t in $) $.hasOwnProperty(t) && (D[a][t] = (e.hasOwnProperty(t) ? e : $)[t]);
						})(e),
						D[a] && (D[a].targetOrigin = !0 === D[a].checkOrigin ? ("" === (e = D[a].remoteHost) || "file://" === e ? "*" : e) : "*");
				}
				var i,
					o,
					a = ((i = r.id), "" === i && ((r.id = ((o = (e && e.id) || $.id + m++), null !== document.getElementById(o) && (o += m++), (i = o))), (y = (e || {}).log), E(i, "Added missing iframe ID: " + i + " (" + r.src + ")")), i);
				function s(e) {
					Infinity !== D[a][e] && 0 !== D[a][e] && ((r.style[e] = D[a][e] + "px"), E(a, "Set " + e + " = " + D[a][e] + "px"));
				}
				function u(e) {
					if (D[a]["min" + e] > D[a]["max" + e]) throw new Error("Value for min" + e + " can not be greater than max" + e);
				}
				a in D && "iFrameResizer" in r
					? k(a, "Ignored iFrame, already setup.")
					: (n(e),
						(function () {
							switch ((E(a, "IFrame scrolling " + (D[a] && D[a].scrolling ? "enabled" : "disabled") + " for " + a), (r.style.overflow = !1 === (D[a] && D[a].scrolling) ? "hidden" : "auto"), D[a] && D[a].scrolling)) {
								case "omit":
									break;
								case !0:
									r.scrolling = "yes";
									break;
								case !1:
									r.scrolling = "no";
									break;
								default:
									r.scrolling = D[a] ? D[a].scrolling : "no";
							}
						})(),
						u("Height"),
						u("Width"),
						s("maxHeight"),
						s("minHeight"),
						s("maxWidth"),
						s("minWidth"),
						("number" != typeof (D[a] && D[a].bodyMargin) && "0" !== (D[a] && D[a].bodyMargin)) || ((D[a].bodyMarginV1 = D[a].bodyMargin), (D[a].bodyMargin = D[a].bodyMargin + "px")),
						t(P(a)),
						Function.prototype.bind &&
							D[a] &&
							(D[a].iframe.iFrameResizer = {
								close: _.bind(null, D[a].iframe),
								removeListeners: l.bind(null, D[a].iframe),
								resize: N.bind(null, "Window resize", "resize", D[a].iframe),
								moveToAnchor: function (e) {
									N("Move to anchor", "moveToAnchor:" + e, D[a].iframe, a);
								},
								sendMessage: function (e) {
									N("Send Message", "message:" + (e = JSON.stringify(e)), D[a].iframe, a);
								},
							}));
			}
			function a(e, t) {
				null === B &&
					(B = setTimeout(function () {
						(B = null), e();
					}, t));
			}
			function s(e) {
				E("window", "Trigger event: " + e),
					a(function () {
						d("Window " + e, "resize");
					}, 16);
			}
			function u() {
				"hidden" !== document.visibilityState &&
					(E("document", "Trigger event: Visiblity change"),
					a(function () {
						d("Tab Visable", "resize");
					}, 16));
			}
			function d(e, t) {
				for (var n in D) D[(r = n)] && "parent" === D[r].resizeFrom && D[r].autoResize && !D[r].firstRun && N(e, t, document.getElementById(n), n);
				var r;
			}
			function f() {
				function r(e, t) {
					t &&
						((function () {
							if (!t.tagName) throw new TypeError("Object is not a valid DOM element");
							if ("IFRAME" !== t.tagName.toUpperCase()) throw new TypeError("Expected <IFRAME> tag, found <" + t.tagName + ">");
						})(),
						o(t, e),
						i.push(t));
				}
				var i;
				return (
					(function () {
						for (var e = ["moz", "webkit", "o", "ms"], t = 0; t < e.length && !v; t += 1) v = window[e[t] + "RequestAnimationFrame"];
						v || E("setup", "RequestAnimationFrame not supported");
					})(),
					w(window, "message", t),
					w(window, "resize", function () {
						s("resize");
					}),
					w(document, "visibilitychange", u),
					w(document, "-webkit-visibilitychange", u),
					w(window, "focusin", function () {
						s("focus");
					}),
					w(window, "focus", function () {
						s("focus");
					}),
					function (e, t) {
						var n;
						switch (((i = []), (n = e) && n.enablePublicMethods && k("enablePublicMethods option has been removed, public methods are now always available in the iFrame"), typeof t)) {
							case "undefined":
							case "string":
								Array.prototype.forEach.call(document.querySelectorAll(t || "iframe"), r.bind(h, e));
								break;
							case "object":
								r(e, t);
								break;
							default:
								throw new TypeError("Unexpected data type (" + typeof t + ")");
						}
						return i;
					}
				);
			}
			function p(e) {
				e.fn
					? e.fn.iFrameResize ||
						(e.fn.iFrameResize = function (n) {
							return this.filter("iframe")
								.each(function (e, t) {
									o(t, n);
								})
								.end();
						})
					: S("", "Unable to bind to jQuery, it is not fully loaded.");
			}
			var h, m, y, g, M, F, R, Q, v, b, D, B, $, q;
			"undefined" != typeof window &&
				((M = "message".length),
				(R = (F = "[iFrameSizer]").length),
				(v = window.requestAnimationFrame),
				($ = {
					autoResize: !(B = Q = null),
					bodyBackground: null,
					bodyMargin: null,
					bodyMarginV1: 8,
					bodyPadding: null,
					checkOrigin: !(g = y = !(b = { max: 1, scroll: 1, bodyScroll: 1, documentElementScroll: 1 })),
					inPageLinks: !"Host Page",
					enablePublicMethods: !(m = 0),
					heightCalculationMethod: "bodyOffset",
					id: "iFrameResizer",
					interval: 32,
					log: !(D = {}),
					maxHeight: Infinity,
					maxWidth: Infinity,
					minHeight: 0,
					minWidth: 0,
					resizeFrom: "parent",
					scrolling: !1,
					sizeHeight: !0,
					sizeWidth: !1,
					warningTimeout: 5e3,
					tolerance: 0,
					widthCalculationMethod: "scroll",
					closedCallback: function () {},
					initCallback: function () {},
					messageCallback: function () {
						k("MessageCallback function not defined");
					},
					resizedCallback: function () {},
					scrollCallback: function () {
						return !0;
					},
				}),
				(q = {}),
				window.jQuery && p(window.jQuery),
				"function" == typeof h && h.amd ? h([], f) : (e.exports = f()),
				(window.iFrameResize = window.iFrameResize || f()));
		}),
		iframeResizerContentWindow: y(function (Ie) {
			!(function (l) {
				if ("undefined" != typeof window) {
					var n = !0,
						i = 10,
						r = "",
						o = 0,
						a = "",
						t = null,
						s = "",
						u = !1,
						c = { resize: 1, click: 1 },
						d = 128,
						f = !0,
						p = 1,
						h = "bodyOffset",
						m = h,
						y = !0,
						g = "",
						v = {},
						b = 32,
						e = null,
						w = !1,
						x = "[iFrameSizer]",
						E = x.length,
						S = "",
						k = { max: 1, min: 1, bodyScroll: 1, documentElementScroll: 1 },
						T = "child",
						_ = !0,
						O = window.parent,
						L = "*",
						C = 0,
						j = !1,
						A = null,
						I = 16,
						N = 1,
						P = "scroll",
						M = P,
						F = window,
						R = function () {
							se("MessageCallback function not defined");
						},
						Q = function () {},
						D = function () {},
						B = {
							height: function () {
								return se("Custom height calculation function not defined"), document.documentElement.offsetHeight;
							},
							width: function () {
								return se("Custom width calculation function not defined"), document.body.scrollWidth;
							},
						},
						$ = {},
						q = !1;
					try {
						var z = Object.create(
							{},
							{
								passive: {
									get: function () {
										q = !0;
									},
								},
								once: { get: function () {} },
							}
						);
						window.addEventListener("test", te, z), window.removeEventListener("test", te, z);
					} catch (Ae) {}
					var H,
						V,
						W,
						U,
						G,
						J,
						K,
						Y =
							Date.now ||
							function () {
								return new Date().getTime();
							},
						X = {
							bodyOffset: function () {
								return document.body.offsetHeight + ve("marginTop") + ve("marginBottom");
							},
							offset: function () {
								return X.bodyOffset();
							},
							bodyScroll: function () {
								return document.body.scrollHeight;
							},
							custom: function () {
								return B.height();
							},
							documentElementOffset: function () {
								return document.documentElement.offsetHeight;
							},
							documentElementScroll: function () {
								return document.documentElement.scrollHeight;
							},
							max: function () {
								return Math.max.apply(null, we(X));
							},
							min: function () {
								return Math.min.apply(null, we(X));
							},
							grow: function () {
								return X.max();
							},
							lowestElement: function () {
								return Math.max(X.bodyOffset() || X.documentElementOffset(), be("bottom", Ee()));
							},
							taggedElement: function () {
								return xe("bottom", "data-iframe-height");
							},
						},
						Z = {
							bodyScroll: function () {
								return document.body.scrollWidth;
							},
							bodyOffset: function () {
								return document.body.offsetWidth;
							},
							custom: function () {
								return B.width();
							},
							documentElementScroll: function () {
								return document.documentElement.scrollWidth;
							},
							documentElementOffset: function () {
								return document.documentElement.offsetWidth;
							},
							scroll: function () {
								return Math.max(Z.bodyScroll(), Z.documentElementScroll());
							},
							max: function () {
								return Math.max.apply(null, we(Z));
							},
							min: function () {
								return Math.min.apply(null, we(Z));
							},
							rightMostElement: function () {
								return be("right", Ee());
							},
							taggedElement: function () {
								return xe("right", "data-iframe-width");
							},
						},
						ee =
							((H = Se),
							(G = null),
							(J = 0),
							(K = function () {
								(J = Y()), (G = null), (U = H.apply(V, W)), G || (V = W = null);
							}),
							function () {
								var e = Y(),
									t = I - (e - (J = J || e));
								return (V = this), (W = arguments), t <= 0 || I < t ? (G && (clearTimeout(G), (G = null)), (J = e), (U = H.apply(V, W)), G || (V = W = null)) : (G = G || setTimeout(K, t)), U;
							});
					ne(window, "message", Ce), ne(window, "readystatechange", je), je();
				}
				function te() {}
				function ne(e, t, n, r) {
					"addEventListener" in window ? e.addEventListener(t, n, !!q && (r || {})) : "attachEvent" in window && e.attachEvent("on" + t, n);
				}
				function re(e, t, n) {
					"removeEventListener" in window ? e.removeEventListener(t, n, !1) : "detachEvent" in window && e.detachEvent("on" + t, n);
				}
				function ie(e) {
					return e.charAt(0).toUpperCase() + e.slice(1);
				}
				function oe(e) {
					return x + "[" + S + "] " + e;
				}
				function ae(e) {
					w && "object" == typeof window.console && console.log(oe(e));
				}
				function se(e) {
					"object" == typeof window.console && console.warn(oe(e));
				}
				function ue() {
					function e(e) {
						return "true" === e;
					}
					var t;
					(t = g.substr(E).split(":")),
						(S = t[0]),
						(o = l !== t[1] ? Number(t[1]) : o),
						(u = l !== t[2] ? e(t[2]) : u),
						(w = l !== t[3] ? e(t[3]) : w),
						(b = l !== t[4] ? Number(t[4]) : b),
						(n = l !== t[6] ? e(t[6]) : n),
						(a = t[7]),
						(m = l !== t[8] ? t[8] : m),
						(r = t[9]),
						(s = t[10]),
						(C = l !== t[11] ? Number(t[11]) : C),
						(v.enable = l !== t[12] && e(t[12])),
						(T = l !== t[13] ? t[13] : T),
						(M = l !== t[14] ? t[14] : M),
						ae("Initialising iFrame (" + location.href + ")"),
						(function () {
							function e(e, t) {
								return "function" == typeof e && (ae("Setup custom " + t + "CalcMethod"), (B[t] = e), (e = "custom")), e;
							}
							"iFrameResizer" in window &&
								Object === window.iFrameResizer.constructor &&
								((function () {
									var e = window.iFrameResizer;
									ae("Reading data from page: " + JSON.stringify(e)),
										(R = "messageCallback" in e ? e.messageCallback : R),
										(Q = "readyCallback" in e ? e.readyCallback : Q),
										(L = "targetOrigin" in e ? e.targetOrigin : L),
										(m = "heightCalculationMethod" in e ? e.heightCalculationMethod : m),
										(M = "widthCalculationMethod" in e ? e.widthCalculationMethod : M);
								})(),
								(m = e(m, "height")),
								(M = e(M, "width")));
							ae("TargetOrigin for parent set to: " + L);
						})(),
						(function () {
							l === a && (a = o + "px");
							ce(
								"margin",
								(function (e, t) {
									-1 !== t.indexOf("-") && (se("Negative CSS value ignored for " + e), (t = ""));
									return t;
								})("margin", a)
							);
						})(),
						ce("background", r),
						ce("padding", s),
						((t = document.createElement("div")).style.clear = "both"),
						(t.style.display = "block"),
						document.body.appendChild(t),
						pe(),
						he(),
						(document.documentElement.style.height = ""),
						(document.body.style.height = ""),
						ae('HTML & body height set to "auto"'),
						ae("Enable public methods"),
						(F.parentIFrame = {
							autoResize: function (e) {
								return !0 === e && !1 === n ? ((n = !0), me()) : !1 === e && !0 === n && ((n = !1), ye()), n;
							},
							close: function () {
								Le(0, 0, "close"), ae("Disable outgoing messages"), (_ = !1), ae("Remove event listener: Message"), re(window, "message", Ce), !0 === n && ye();
							},
							getId: function () {
								return S;
							},
							getPageInfo: function (e) {
								"function" == typeof e ? ((D = e), Le(0, 0, "pageInfo")) : ((D = function () {}), Le(0, 0, "pageInfoStop"));
							},
							moveToAnchor: function (e) {
								v.findTarget(e);
							},
							reset: function () {
								Oe("parentIFrame.reset");
							},
							scrollTo: function (e, t) {
								Le(t, e, "scrollTo");
							},
							scrollToOffset: function (e, t) {
								Le(t, e, "scrollToOffset");
							},
							sendMessage: function (e, t) {
								Le(0, 0, "message", JSON.stringify(e), t);
							},
							setHeightCalculationMethod: function (e) {
								(m = e), pe();
							},
							setWidthCalculationMethod: function (e) {
								(M = e), he();
							},
							setTargetOrigin: function (e) {
								ae("Set targetOrigin: " + e), (L = e);
							},
							size: function (e, t) {
								ke("size", "parentIFrame.size(" + ((e || "") + (t ? "," + t : "")) + ")", e, t);
							},
						}),
						me(),
						(v = (function () {
							function i(e) {
								var t = e.getBoundingClientRect(),
									e = { x: window.pageXOffset !== l ? window.pageXOffset : document.documentElement.scrollLeft, y: window.pageYOffset !== l ? window.pageYOffset : document.documentElement.scrollTop };
								return { x: parseInt(t.left, 10) + parseInt(e.x, 10), y: parseInt(t.top, 10) + parseInt(e.y, 10) };
							}
							function t(e) {
								var t,
									n = e.split("#")[1] || e,
									e = decodeURIComponent(n),
									r = document.getElementById(e) || document.getElementsByName(e)[0];
								l !== r
									? ((t = i((t = r))), ae("Moving to in page link (#" + n + ") at x: " + t.x + " y: " + t.y), Le(t.y, t.x, "scrollToOffset"))
									: (ae("In page link (#" + n + ") not found in iFrame, so sending to parent"), Le(0, 0, "inPageLink", "#" + n));
							}
							function e() {
								"" !== location.hash && "#" !== location.hash && t(location.href);
							}
							function n() {
								Array.prototype.forEach.call(document.querySelectorAll('a[href^="#"]'), function (e) {
									"#" !== e.getAttribute("href") &&
										ne(e, "click", function (e) {
											e.preventDefault(), t(this.getAttribute("href"));
										});
								});
							}
							function r() {
								Array.prototype.forEach && document.querySelectorAll
									? (ae("Setting up location.hash handlers"), n(), ne(window, "hashchange", e), setTimeout(e, d))
									: se("In page linking not fully supported in this browser! (See README.md for IE8 workaround)");
							}
							v.enable ? r() : ae("In page linking not enabled");
							return { findTarget: t };
						})()),
						ke("init", "Init message from host page"),
						Q();
				}
				function ce(e, t) {
					l !== t && "" !== t && "null" !== t && ae("Body " + e + ' set to "' + (document.body.style[e] = t) + '"');
				}
				function le(n) {
					var e = {
						add: function (e) {
							function t() {
								ke(n.eventName, n.eventType);
							}
							($[e] = t), ne(window, e, t, { passive: !0 });
						},
						remove: function (e) {
							var t = $[e];
							delete $[e], re(window, e, t);
						},
					};
					n.eventNames && Array.prototype.map ? ((n.eventName = n.eventNames[0]), n.eventNames.map(e[n.method])) : e[n.method](n.eventName), ae(ie(n.method) + " event listener: " + n.eventType);
				}
				function de(e) {
					le({ method: e, eventType: "Animation Start", eventNames: ["animationstart", "webkitAnimationStart"] }),
						le({ method: e, eventType: "Animation Iteration", eventNames: ["animationiteration", "webkitAnimationIteration"] }),
						le({ method: e, eventType: "Animation End", eventNames: ["animationend", "webkitAnimationEnd"] }),
						le({ method: e, eventType: "Input", eventName: "input" }),
						le({ method: e, eventType: "Mouse Up", eventName: "mouseup" }),
						le({ method: e, eventType: "Mouse Down", eventName: "mousedown" }),
						le({ method: e, eventType: "Orientation Change", eventName: "orientationchange" }),
						le({ method: e, eventType: "Print", eventName: ["afterprint", "beforeprint"] }),
						le({ method: e, eventType: "Ready State Change", eventName: "readystatechange" }),
						le({ method: e, eventType: "Touch Start", eventName: "touchstart" }),
						le({ method: e, eventType: "Touch End", eventName: "touchend" }),
						le({ method: e, eventType: "Touch Cancel", eventName: "touchcancel" }),
						le({ method: e, eventType: "Transition Start", eventNames: ["transitionstart", "webkitTransitionStart", "MSTransitionStart", "oTransitionStart", "otransitionstart"] }),
						le({ method: e, eventType: "Transition Iteration", eventNames: ["transitioniteration", "webkitTransitionIteration", "MSTransitionIteration", "oTransitionIteration", "otransitioniteration"] }),
						le({ method: e, eventType: "Transition End", eventNames: ["transitionend", "webkitTransitionEnd", "MSTransitionEnd", "oTransitionEnd", "otransitionend"] }),
						"child" === T && le({ method: e, eventType: "IFrame Resized", eventName: "resize" });
				}
				function fe(e, t, n, r) {
					return t !== e && (e in n || (se(e + " is not a valid option for " + r + "CalculationMethod."), (e = t)), ae(r + ' calculation method set to "' + e + '"')), e;
				}
				function pe() {
					m = fe(m, h, X, "height");
				}
				function he() {
					M = fe(M, P, Z, "width");
				}
				function me() {
					var e;
					!0 === n
						? (de("add"),
							(e = b < 0),
							window.MutationObserver || window.WebKitMutationObserver
								? e
									? ge()
									: (t = (function () {
											function t(e) {
												function t(e) {
													!1 === e.complete && (ae("Attach listeners to " + e.src), e.addEventListener("load", i, !1), e.addEventListener("error", o, !1), s.push(e));
												}
												"attributes" === e.type && "src" === e.attributeName ? t(e.target) : "childList" === e.type && Array.prototype.forEach.call(e.target.querySelectorAll("img"), t);
											}
											function r(e) {
												ae("Remove listeners from " + e.src), e.removeEventListener("load", i, !1), e.removeEventListener("error", o, !1), s.splice(s.indexOf(e), 1);
											}
											function n(e, t, n) {
												r(e.target), ke(t, n + ": " + e.target.src, l, l);
											}
											function i(e) {
												n(e, "imageLoad", "Image loaded");
											}
											function o(e) {
												n(e, "imageLoadFailed", "Image load failed");
											}
											function a(e) {
												ke("mutationObserver", "mutationObserver: " + e[0].target + " " + e[0].type), e.forEach(t);
											}
											var s = [],
												u = window.MutationObserver || window.WebKitMutationObserver,
												c = (function () {
													var e = document.querySelector("body");
													return (c = new u(a)), ae("Create body MutationObserver"), c.observe(e, { attributes: !0, attributeOldValue: !1, characterData: !0, characterDataOldValue: !1, childList: !0, subtree: !0 }), c;
												})();
											return {
												disconnect: function () {
													"disconnect" in c && (ae("Disconnect body MutationObserver"), c.disconnect(), s.forEach(r));
												},
											};
										})())
								: (ae("MutationObserver not supported in this browser!"), ge()))
						: ae("Auto Resize disabled");
				}
				function ye() {
					de("remove"), null !== t && t.disconnect(), clearInterval(e);
				}
				function ge() {
					0 !== b &&
						(ae("setInterval: " + b + "ms"),
						(e = setInterval(function () {
							ke("interval", "setInterval: " + b);
						}, Math.abs(b))));
				}
				function ve(e, r) {
					var t = 0;
					return (
						(r = r || document.body),
						(t =
							"defaultView" in document && "getComputedStyle" in document.defaultView
								? null !== (t = document.defaultView.getComputedStyle(r, null))
									? t[e]
									: 0
								: (function (e) {
										if (/^\d+(px)?$/i.test(e)) return parseInt(e, i);
										var t = r.style.left,
											n = r.runtimeStyle.left;
										return (r.runtimeStyle.left = r.currentStyle.left), (r.style.left = e || 0), (e = r.style.pixelLeft), (r.style.left = t), (r.runtimeStyle.left = n), e;
									})(r.currentStyle[e])),
						parseInt(t, i)
					);
				}
				function be(e, t) {
					for (var n, r = t.length, i = 0, o = ie(e), a = Y(), s = 0; s < r; s++) i < (n = t[s].getBoundingClientRect()[e] + ve("margin" + o, t[s])) && (i = n);
					return (a = Y() - a), ae("Parsed " + r + " HTML elements"), ae("Element position calculated in " + a + "ms"), I / 2 < (a = a) && ae("Event throttle increased to " + (I = 2 * a) + "ms"), i;
				}
				function we(e) {
					return [e.bodyOffset(), e.bodyScroll(), e.documentElementOffset(), e.documentElementScroll()];
				}
				function xe(e, t) {
					var n = document.querySelectorAll("[" + t + "]");
					return 0 === n.length && (se("No tagged elements (" + t + ") found on page"), document.querySelectorAll("body *")), be(e, n);
				}
				function Ee() {
					return document.querySelectorAll("body *");
				}
				function Se(e, t, n, r) {
					function i() {
						e in { init: 1, interval: 1, size: 1 } || !(m in k || (u && M in k)) ? e in { interval: 1 } || ae("No change in size detected") : Oe(t);
					}
					var o, a;
					function s(e, t) {
						return !(Math.abs(e - t) <= C);
					}
					(o = l !== n ? n : X[m]()), (a = l !== r ? r : Z[M]()), s(p, o) || (u && s(N, a)) || "init" === e ? (Te(), Le((p = o), (N = a), e)) : i();
				}
				function ke(e, t, n, r) {
					j && e in c ? ae("Trigger event cancelled: " + e) : (e in { reset: 1, resetPage: 1, init: 1 } || ae("Trigger event: " + t), ("init" === e ? Se : ee)(e, t, n, r));
				}
				function Te() {
					j || ((j = !0), ae("Trigger event lock on")),
						clearTimeout(A),
						(A = setTimeout(function () {
							(j = !1), ae("Trigger event lock off"), ae("--");
						}, d));
				}
				function _e(e) {
					(p = X[m]()), (N = Z[M]()), Le(p, N, e);
				}
				function Oe(e) {
					var t = m;
					(m = h), ae("Reset trigger event: " + e), Te(), _e("reset"), (m = t);
				}
				function Le(e, t, n, r, i) {
					var o;
					!0 === _ && (l === i ? (i = L) : ae("Message targetOrigin: " + i), ae("Sending message to host page (" + (o = S + ":" + (e + ":" + t) + ":" + n + (l !== r ? ":" + r : "")) + ")"), O.postMessage(x + o, i));
				}
				function Ce(t) {
					var n = {
						init: function () {
							(g = t.data),
								(O = t.source),
								ue(),
								(f = !1),
								setTimeout(function () {
									y = !1;
								}, d);
						},
						reset: function () {
							y ? ae("Page reset ignored by init") : (ae("Page size reset by host page"), _e("resetPage"));
						},
						resize: function () {
							ke("resizeParent", "Parent window requested size check");
						},
						moveToAnchor: function () {
							v.findTarget(i());
						},
						inPageLink: function () {
							this.moveToAnchor();
						},
						pageInfo: function () {
							var e = i();
							ae("PageInfoFromParent called from parent: " + e), D(JSON.parse(e)), ae(" --");
						},
						message: function () {
							var e = i();
							ae("MessageCallback called from parent: " + e), R(JSON.parse(e)), ae(" --");
						},
					};
					function r() {
						return t.data.split("]")[1].split(":")[0];
					}
					function i() {
						return t.data.substr(t.data.indexOf(":") + 1);
					}
					function o() {
						return t.data.split(":")[2] in { true: 1, false: 1 };
					}
					function e() {
						var e = r();
						e in n ? n[e]() : (!Ie.exports && "iFrameResize" in window) || ("jQuery" in window && "iFrameResize" in window.jQuery.prototype) || o() || se("Unexpected message (" + t.data + ")");
					}
					x === ("" + t.data).substr(0, E) && (!1 === f ? e() : o() ? n.init() : ae('Ignored message of type "' + r() + '". Received before initialization.'));
				}
				function je() {
					"loading" !== document.readyState && window.parent.postMessage("[iFrameResizerChild]Ready", "*");
				}
			})();
		}),
	};
	function E(e) {
		this.$module = e;
	}
	(E.prototype.init = function () {
		this.$module && this.resize();
	}),
		(E.prototype.resize = function () {
			var e = this.$module;
			try {
				x.iframeResizer({ scrolling: "auto", autoResize: !0 }, e);
			} catch (t) {
				t && console.error(t.message);
			}
		});
	y(function (e, t) {
		(function (e) {
			var a, s, u, c;
			("defineProperty" in Object &&
				(function () {
					try {
						return Object.defineProperty({}, "test", { value: 42 }), !0;
					} catch (e) {
						return !1;
					}
				})()) ||
				((a = Object.defineProperty),
				(s = Object.prototype.hasOwnProperty("__defineGetter__")),
				(u = "Getters & setters cannot be defined on this javascript engine"),
				(c = "A property cannot both have accessors and be writable or have a value"),
				(Object.defineProperty = function (e, t, n) {
					if (a && (e === window || e === document || e === Element.prototype || e instanceof Element)) return a(e, t, n);
					if (null === e || !(e instanceof Object || "object" == typeof e)) throw new TypeError("Object.defineProperty called on non-object");
					if (!(n instanceof Object)) throw new TypeError("Property description must be an object");
					var r = String(t),
						i = "value" in n || "writable" in n,
						o = "get" in n && typeof n.get,
						t = "set" in n && typeof n.set;
					if (o) {
						if ("function" !== o) throw new TypeError("Getter must be a function");
						if (!s) throw new TypeError(u);
						if (i) throw new TypeError(c);
						Object.__defineGetter__.call(e, r, n.get);
					} else e[r] = n.value;
					if (t) {
						if ("function" !== t) throw new TypeError("Setter must be a function");
						if (!s) throw new TypeError(u);
						if (i) throw new TypeError(c);
						Object.__defineSetter__.call(e, r, n.set);
					}
					return "value" in n && (e[r] = n.value), e;
				}));
		}.call(("object" == typeof window && window) || ("object" == typeof self && self) || ("object" == typeof m && m) || {}),
			function (n) {
				var e, r, i;
				("DOMTokenList" in this && (!("classList" in (e = document.createElement("x"))) || (!e.classList.toggle("x", !1) && !e.className))) ||
					(("DOMTokenList" in (e = this) &&
						e.DOMTokenList &&
						(!document.createElementNS || !document.createElementNS("http://www.w3.org/2000/svg", "svg") || document.createElementNS("http://www.w3.org/2000/svg", "svg").classList instanceof DOMTokenList)) ||
						(e.DOMTokenList = (function () {
							var i = !0,
								t = function (e, t, n, r) {
									Object.defineProperty ? Object.defineProperty(e, t, { configurable: !1 === i || !!r, get: n }) : e.__defineGetter__(t, n);
								};
							try {
								t({}, "support");
							} catch (e) {
								i = !1;
							}
							return function (i, o) {
								var a = this,
									s = [],
									u = {},
									c = 0,
									e = 0,
									l = function () {
										if (e <= c)
											for (; e < c; ++e)
												!(function (e) {
													t(
														a,
														e,
														function () {
															return d(), s[e];
														},
														!1
													);
												})(e);
									},
									d = function () {
										var e,
											t,
											n = arguments,
											r = /\s+/;
										if (n.length) for (t = 0; t < n.length; ++t) if (r.test(n[t])) throw (((e = new SyntaxError('String "' + n[t] + '" contains an invalid character')).code = 5), (e.name = "InvalidCharacterError"), e);
										for ("" === (s = ("object" == typeof i[o] ? "" + i[o].baseVal : "" + i[o]).replace(/^\s+|\s+$/g, "").split(r))[0] && (s = []), u = {}, t = 0; t < s.length; ++t) u[s[t]] = !0;
										(c = s.length), l();
									};
								return (
									d(),
									t(a, "length", function () {
										return d(), c;
									}),
									(a.toLocaleString = a.toString = function () {
										return d(), s.join(" ");
									}),
									(a.item = function (e) {
										return d(), s[e];
									}),
									(a.contains = function (e) {
										return d(), !!u[e];
									}),
									(a.add = function () {
										d.apply(a, (e = arguments));
										for (var e, t, n = 0, r = e.length; n < r; ++n) u[(t = e[n])] || (s.push(t), (u[t] = !0));
										c !== s.length && ((c = s.length >>> 0), "object" == typeof i[o] ? (i[o].baseVal = s.join(" ")) : (i[o] = s.join(" ")), l());
									}),
									(a.remove = function () {
										d.apply(a, (e = arguments));
										for (var e, t = {}, n = 0, r = []; n < e.length; ++n) (t[e[n]] = !0), delete u[e[n]];
										for (n = 0; n < s.length; ++n) t[s[n]] || r.push(s[n]);
										(c = (s = r).length >>> 0), "object" == typeof i[o] ? (i[o].baseVal = s.join(" ")) : (i[o] = s.join(" ")), l();
									}),
									(a.toggle = function (e, t) {
										return d.apply(a, [e]), n !== t ? (t ? (a.add(e), !0) : (a.remove(e), !1)) : u[e] ? (a.remove(e), !1) : (a.add(e), !0);
									}),
									a
								);
							};
						})()),
					"classList" in (e = document.createElement("span")) &&
						(e.classList.toggle("x", !1),
						e.classList.contains("x") &&
							(e.classList.constructor.prototype.toggle = function (e) {
								var t = arguments[1];
								if (t !== n) return this[(t = !!t) ? "add" : "remove"](e), t;
								t = !this.contains(e);
								return this[t ? "add" : "remove"](e), t;
							})),
					"classList" in (e = document.createElement("span")) &&
						(e.classList.add("a", "b"),
						e.classList.contains("b") ||
							((r = e.classList.constructor.prototype.add),
							(e.classList.constructor.prototype.add = function () {
								for (var e = arguments, t = arguments.length, n = 0; n < t; n++) r.call(this, e[n]);
							}))),
					"classList" in (e = document.createElement("span")) &&
						(e.classList.add("a"),
						e.classList.add("b"),
						e.classList.remove("a", "b"),
						e.classList.contains("b") &&
							((i = e.classList.constructor.prototype.remove),
							(e.classList.constructor.prototype.remove = function () {
								for (var e = arguments, t = arguments.length, n = 0; n < t; n++) i.call(this, e[n]);
							}))));
			}.call(("object" == typeof window && window) || ("object" == typeof self && self) || ("object" == typeof m && m) || {}),
			function (e) {
				"Document" in this ||
					("undefined" == typeof WorkerGlobalScope &&
						"function" != typeof importScripts &&
						(this.HTMLDocument ? (this.Document = this.HTMLDocument) : ((this.Document = this.HTMLDocument = document.constructor = new Function("return function Document() {}")()), (this.Document.prototype = document))));
			}.call(("object" == typeof window && window) || ("object" == typeof self && self) || ("object" == typeof m && m) || {}),
			function (e) {
				var t, n, s, u, c, l, r, i, o;
				function a() {
					return o-- || clearTimeout(i), !(!document.body || document.body.prototype || !/(complete|interactive)/.test(document.readyState)) && (c(document, !0), i && document.body.prototype && clearTimeout(i), !!document.body.prototype);
				}
				("Element" in this && "HTMLElement" in this) ||
					(!window.Element || window.HTMLElement
						? ((window.Element = window.HTMLElement = new Function("return function Element() {}")()),
							(n = (t = document.appendChild(document.createElement("body"))).appendChild(document.createElement("iframe")).contentWindow.document),
							(s = Element.prototype = n.appendChild(n.createElement("*"))),
							(u = {}),
							(c = function (e, t) {
								var n,
									r,
									i,
									o = e.childNodes || [],
									a = -1;
								if (1 === e.nodeType && e.constructor !== Element) for (n in ((e.constructor = Element), u)) (r = u[n]), (e[n] = r);
								for (; (i = t && o[++a]); ) c(i, t);
								return e;
							}),
							(l = document.getElementsByTagName("*")),
							(r = document.createElement),
							(o = 100),
							s.attachEvent("onpropertychange", function (e) {
								for (var t, n = e.propertyName, r = !u.hasOwnProperty(n), i = s[n], o = u[n], a = -1; (t = l[++a]); ) 1 === t.nodeType && ((!r && t[n] !== o) || (t[n] = i));
								u[n] = i;
							}),
							(s.constructor = Element),
							s.hasAttribute ||
								(s.hasAttribute = function (e) {
									return null !== this.getAttribute(e);
								}),
							a() || ((document.onreadystatechange = a), (i = setInterval(a, 25))),
							(document.createElement = function (e) {
								e = r(String(e).toLowerCase());
								return c(e);
							}),
							document.removeChild(t))
						: (window.HTMLElement = window.Element));
			}.call(("object" == typeof window && window) || ("object" == typeof self && self) || ("object" == typeof m && m) || {}),
			function (e) {
				var t;
				("document" in this && "classList" in document.documentElement && "Element" in this && "classList" in Element.prototype && ((t = document.createElement("span")).classList.add("a", "b"), t.classList.contains("b"))) ||
					(function (e) {
						var l = !0,
							d = function (e, t, n, r) {
								Object.defineProperty ? Object.defineProperty(e, t, { configurable: !1 === l || !!r, get: n }) : e.__defineGetter__(t, n);
							};
						try {
							d({}, "support");
						} catch (t) {
							l = !1;
						}
						var f = function (e, u, c) {
							d(
								e.prototype,
								u,
								function () {
									var e,
										t = this,
										n = "__defineGetter__DEFINE_PROPERTY" + u;
									if (t[n]) return e;
									if (!(t[n] = !0) === l) {
										for (var r, i = f.mirror || document.createElement("div"), o = i.childNodes, a = o.length, s = 0; s < a; ++s)
											if (o[s]._R === t) {
												r = o[s];
												break;
											}
										(r = r || i.appendChild(document.createElement("div"))), (e = DOMTokenList.call(r, t, c));
									} else e = new DOMTokenList(t, c);
									return (
										d(t, u, function () {
											return e;
										}),
										delete t[n],
										e
									);
								},
								!0
							);
						};
						f(e.Element, "classList", "className"), f(e.HTMLElement, "classList", "className"), f(e.HTMLLinkElement, "relList", "rel"), f(e.HTMLAnchorElement, "relList", "rel"), f(e.HTMLAreaElement, "relList", "rel");
					})(this);
			}.call(("object" == typeof window && window) || ("object" == typeof self && self) || ("object" == typeof m && m) || {}));
	});
	var S = g.nodeListForEach,
		k = "app-tabs__item",
		T = k + "--current",
		_ = "js-tabs__item",
		O = "app-tabs__heading",
		L = O + "--current",
		C = "app-tabs__container--hidden",
		j = "." + _ + " a";
	function A(e) {
		(this.$module = e),
			(this.$allTabContainers = this.$module.querySelectorAll(".js-tabs__container")),
			(this.$allTabTogglers = this.$module.querySelectorAll(j)),
			(this.$allTabTogglersMarkedOpen = this.$module.querySelectorAll(".js-tabs__item--open a")),
			(this.$mobileTabs = this.$module.querySelectorAll(".js-tabs__heading a"));
	}
	(A.prototype.init = function () {
		this.$module &&
			(this.enhanceMobileButtons(this.$mobileTabs),
			this.resetTabs(),
			this.$module.addEventListener("click", this.handleClick.bind(this)),
			S(this.$allTabTogglersMarkedOpen, function (e) {
				e.click();
			}));
	}),
		(A.prototype.activateAndToggle = function (e) {
			e.preventDefault();
			var t,
				n = e.target,
				e = this.$module.querySelectorAll('[aria-controls="' + n.getAttribute("aria-controls") + '"]');
			try {
				t = this.$module.querySelector("#" + n.getAttribute("aria-controls"));
			} catch (r) {
				throw new Error("Invalid example ID given: " + r);
			}
			n = "true" === n.getAttribute("aria-expanded");
			t &&
				(n
					? (t.classList.add(C),
						t.setAttribute("aria-hidden", "true"),
						S(e, function (e) {
							e.setAttribute("aria-expanded", "false"), e.parentNode.classList.remove(T, L);
						}))
					: (this.resetTabs(),
						t.classList.remove(C),
						t.setAttribute("aria-hidden", "false"),
						S(e, function (e) {
							e.setAttribute("aria-expanded", "true"), e.parentNode.classList.contains(k) ? e.parentNode.classList.add(T) : e.parentNode.classList.contains(O) && e.parentNode.classList.add(L);
						})));
		}),
		(A.prototype.enhanceMobileButtons = function (e) {
			S(e, function (e) {
				var t = document.createElement("button");
				t.setAttribute("aria-controls", e.getAttribute("aria-controls")),
					t.setAttribute("data-track", e.getAttribute("data-track")),
					t.classList.add("app-tabs__heading-button"),
					(t.innerHTML = e.innerHTML),
					e.parentNode.appendChild(t),
					e.parentNode.removeChild(e);
			}),
				(this.$allTabTogglers = this.$module.querySelectorAll(j));
		}),
		(A.prototype.resetTabs = function () {
			S(this.$allTabContainers, function (e) {
				e.classList.contains("js-tabs__container--no-tabs") || (e.classList.add(C), e.setAttribute("aria-hidden", "true"));
			}),
				S(this.$allTabTogglers, function (e) {
					e.setAttribute("aria-expanded", "false"), e.parentNode.classList.remove(T, L);
				});
		}),
		(A.prototype.handleClick = function (e) {
			(e.target.parentNode.classList.contains(_) || e.target.parentNode.classList.contains("js-tabs__heading")) && this.activateAndToggle(e);
		});
	var I = e(
		y(function (e, t) {
			var n;
			(n = function () {
				return (
					(r = {}),
					(i.m = n = [
						function (e, t, n) {
							var r =
									"function" == typeof Symbol && "symbol" == typeof Symbol.iterator
										? function (e) {
												return typeof e;
											}
										: function (e) {
												return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
											},
								i = function (e, t, n) {
									return t && o(e.prototype, t), n && o(e, n), e;
								};
							function o(e, t) {
								for (var n = 0; n < t.length; n++) {
									var r = t[n];
									(r.enumerable = r.enumerable || !1), (r.configurable = !0), "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
								}
							}
							var a = c(n(1)),
								s = c(n(3)),
								u = c(n(4));
							function c(e) {
								return e && e.__esModule ? e : { default: e };
							}
							(function (e, t) {
								if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
								(e.prototype = Object.create(t && t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } })), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : (e.__proto__ = t));
							})(l, s["default"]),
								i(
									l,
									[
										{
											key: "resolveOptions",
											value: function () {
												var e = 0 < arguments.length && arguments[0] !== undefined ? arguments[0] : {};
												(this.action = "function" == typeof e.action ? e.action : this.defaultAction),
													(this.target = "function" == typeof e.target ? e.target : this.defaultTarget),
													(this.text = "function" == typeof e.text ? e.text : this.defaultText),
													(this.container = "object" === r(e.container) ? e.container : document.body);
											},
										},
										{
											key: "listenClick",
											value: function (e) {
												var t = this;
												this.listener = (0, u["default"])(e, "click", function (e) {
													return t.onClick(e);
												});
											},
										},
										{
											key: "onClick",
											value: function (e) {
												e = e.delegateTarget || e.currentTarget;
												this.clipboardAction && (this.clipboardAction = null),
													(this.clipboardAction = new a["default"]({ action: this.action(e), target: this.target(e), text: this.text(e), container: this.container, trigger: e, emitter: this }));
											},
										},
										{
											key: "defaultAction",
											value: function (e) {
												return d("action", e);
											},
										},
										{
											key: "defaultTarget",
											value: function (e) {
												e = d("target", e);
												if (e) return document.querySelector(e);
											},
										},
										{
											key: "defaultText",
											value: function (e) {
												return d("text", e);
											},
										},
										{
											key: "destroy",
											value: function () {
												this.listener.destroy(), this.clipboardAction && (this.clipboardAction.destroy(), (this.clipboardAction = null));
											},
										},
									],
									[
										{
											key: "isSupported",
											value: function () {
												var e = 0 < arguments.length && arguments[0] !== undefined ? arguments[0] : ["copy", "cut"],
													t = !!document.queryCommandSupported;
												return (
													("string" == typeof e ? [e] : e).forEach(function (e) {
														t = t && !!document.queryCommandSupported(e);
													}),
													t
												);
											},
										},
									]
								),
								(i = l);
							function l(e, t) {
								!(function (e, t) {
									if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
								})(this, l);
								var n = (function (e, t) {
									if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
									return !t || ("object" != typeof t && "function" != typeof t) ? e : t;
								})(this, (l.__proto__ || Object.getPrototypeOf(l)).call(this));
								return n.resolveOptions(t), n.listenClick(e), n;
							}
							function d(e, t) {
								e = "data-clipboard-" + e;
								if (t.hasAttribute(e)) return t.getAttribute(e);
							}
							e.exports = i;
						},
						function (e, t, n) {
							var r =
									"function" == typeof Symbol && "symbol" == typeof Symbol.iterator
										? function (e) {
												return typeof e;
											}
										: function (e) {
												return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
											},
								i = function (e, t, n) {
									return t && o(e.prototype, t), n && o(e, n), e;
								};
							function o(e, t) {
								for (var n = 0; n < t.length; n++) {
									var r = t[n];
									(r.enumerable = r.enumerable || !1), (r.configurable = !0), "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
								}
							}
							var a,
								s = n(2),
								u = (a = s) && a.__esModule ? a : { default: a };
							i(c, [
								{
									key: "resolveOptions",
									value: function () {
										var e = 0 < arguments.length && arguments[0] !== undefined ? arguments[0] : {};
										(this.action = e.action), (this.container = e.container), (this.emitter = e.emitter), (this.target = e.target), (this.text = e.text), (this.trigger = e.trigger), (this.selectedText = "");
									},
								},
								{
									key: "initSelection",
									value: function () {
										this.text ? this.selectFake() : this.target && this.selectTarget();
									},
								},
								{
									key: "selectFake",
									value: function () {
										var e = this,
											t = "rtl" == document.documentElement.getAttribute("dir");
										this.removeFake(),
											(this.fakeHandlerCallback = function () {
												return e.removeFake();
											}),
											(this.fakeHandler = this.container.addEventListener("click", this.fakeHandlerCallback) || !0),
											(this.fakeElem = document.createElement("textarea")),
											(this.fakeElem.style.fontSize = "12pt"),
											(this.fakeElem.style.border = "0"),
											(this.fakeElem.style.padding = "0"),
											(this.fakeElem.style.margin = "0"),
											(this.fakeElem.style.position = "absolute"),
											(this.fakeElem.style[t ? "right" : "left"] = "-9999px");
										t = window.pageYOffset || document.documentElement.scrollTop;
										(this.fakeElem.style.top = t + "px"),
											this.fakeElem.setAttribute("readonly", ""),
											(this.fakeElem.value = this.text),
											this.container.appendChild(this.fakeElem),
											(this.selectedText = (0, u["default"])(this.fakeElem)),
											this.copyText();
									},
								},
								{
									key: "removeFake",
									value: function () {
										this.fakeHandler && (this.container.removeEventListener("click", this.fakeHandlerCallback), (this.fakeHandler = null), (this.fakeHandlerCallback = null)),
											this.fakeElem && (this.container.removeChild(this.fakeElem), (this.fakeElem = null));
									},
								},
								{
									key: "selectTarget",
									value: function () {
										(this.selectedText = (0, u["default"])(this.target)), this.copyText();
									},
								},
								{
									key: "copyText",
									value: function () {
										var e = void 0;
										try {
											e = document.execCommand(this.action);
										} catch (t) {
											e = !1;
										}
										this.handleResult(e);
									},
								},
								{
									key: "handleResult",
									value: function (e) {
										this.emitter.emit(e ? "success" : "error", { action: this.action, text: this.selectedText, trigger: this.trigger, clearSelection: this.clearSelection.bind(this) });
									},
								},
								{
									key: "clearSelection",
									value: function () {
										this.trigger && this.trigger.focus(), window.getSelection().removeAllRanges();
									},
								},
								{
									key: "destroy",
									value: function () {
										this.removeFake();
									},
								},
								{
									key: "action",
									set: function () {
										var e = 0 < arguments.length && arguments[0] !== undefined ? arguments[0] : "copy";
										if (((this._action = e), "copy" !== this._action && "cut" !== this._action)) throw new Error('Invalid "action" value, use either "copy" or "cut"');
									},
									get: function () {
										return this._action;
									},
								},
								{
									key: "target",
									set: function (e) {
										if (e !== undefined) {
											if (!e || "object" !== (void 0 === e ? "undefined" : r(e)) || 1 !== e.nodeType) throw new Error('Invalid "target" value, use a valid Element');
											if ("copy" === this.action && e.hasAttribute("disabled")) throw new Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute');
											if ("cut" === this.action && (e.hasAttribute("readonly") || e.hasAttribute("disabled"))) throw new Error('Invalid "target" attribute. You can\'t cut text from elements with "readonly" or "disabled" attributes');
											this._target = e;
										}
									},
									get: function () {
										return this._target;
									},
								},
							]),
								(i = c);
							function c(e) {
								!(function (e, t) {
									if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
								})(this, c),
									this.resolveOptions(e),
									this.initSelection();
							}
							e.exports = i;
						},
						function (e, t) {
							e.exports = function (e) {
								var t,
									n =
										"SELECT" === e.nodeName
											? (e.focus(), e.value)
											: "INPUT" === e.nodeName || "TEXTAREA" === e.nodeName
											? ((t = e.hasAttribute("readonly")) || e.setAttribute("readonly", ""), e.select(), e.setSelectionRange(0, e.value.length), t || e.removeAttribute("readonly"), e.value)
											: (e.hasAttribute("contenteditable") && e.focus(), (n = window.getSelection()), (t = document.createRange()).selectNodeContents(e), n.removeAllRanges(), n.addRange(t), n.toString());
								return n;
							};
						},
						function (e, t) {
							function n() {}
							(n.prototype = {
								on: function (e, t, n) {
									var r = this.e || (this.e = {});
									return (r[e] || (r[e] = [])).push({ fn: t, ctx: n }), this;
								},
								once: function (e, t, n) {
									var r = this;
									function i() {
										r.off(e, i), t.apply(n, arguments);
									}
									return (i._ = t), this.on(e, i, n);
								},
								emit: function (e) {
									for (var t = [].slice.call(arguments, 1), n = ((this.e || (this.e = {}))[e] || []).slice(), r = 0, i = n.length; r < i; r++) n[r].fn.apply(n[r].ctx, t);
									return this;
								},
								off: function (e, t) {
									var n = this.e || (this.e = {}),
										r = n[e],
										i = [];
									if (r && t) for (var o = 0, a = r.length; o < a; o++) r[o].fn !== t && r[o].fn._ !== t && i.push(r[o]);
									return i.length ? (n[e] = i) : delete n[e], this;
								},
							}),
								(e.exports = n);
						},
						function (e, t, n) {
							var c = n(5),
								l = n(6);
							e.exports = function (e, t, n) {
								if (!e && !t && !n) throw new Error("Missing required arguments");
								if (!c.string(t)) throw new TypeError("Second argument must be a String");
								if (!c.fn(n)) throw new TypeError("Third argument must be a Function");
								if (c.node(e))
									return (
										(s = t),
										(u = n),
										(a = e).addEventListener(s, u),
										{
											destroy: function () {
												a.removeEventListener(s, u);
											},
										}
									);
								if (c.nodeList(e))
									return (
										(r = e),
										(i = t),
										(o = n),
										Array.prototype.forEach.call(r, function (e) {
											e.addEventListener(i, o);
										}),
										{
											destroy: function () {
												Array.prototype.forEach.call(r, function (e) {
													e.removeEventListener(i, o);
												});
											},
										}
									);
								if (c.string(e)) return l(document.body, e, t, n);
								throw new TypeError("First argument must be a String, HTMLElement, HTMLCollection, or NodeList");
								var r, i, o, a, s, u;
							};
						},
						function (e, n) {
							(n.node = function (e) {
								return e !== undefined && e instanceof HTMLElement && 1 === e.nodeType;
							}),
								(n.nodeList = function (e) {
									var t = Object.prototype.toString.call(e);
									return e !== undefined && ("[object NodeList]" === t || "[object HTMLCollection]" === t) && "length" in e && (0 === e.length || n.node(e[0]));
								}),
								(n.string = function (e) {
									return "string" == typeof e || e instanceof String;
								}),
								(n.fn = function (e) {
									return "[object Function]" === Object.prototype.toString.call(e);
								});
						},
						function (e, t, n) {
							var a = n(7);
							function o(e, t, n, r, i) {
								var o = function (t, n, e, r) {
									return function (e) {
										(e.delegateTarget = a(e.target, n)), e.delegateTarget && r.call(t, e);
									};
								}.apply(this, arguments);
								return (
									e.addEventListener(n, o, i),
									{
										destroy: function () {
											e.removeEventListener(n, o, i);
										},
									}
								);
							}
							e.exports = function (e, t, n, r, i) {
								return "function" == typeof e.addEventListener
									? o.apply(null, arguments)
									: "function" == typeof n
									? o.bind(null, document).apply(null, arguments)
									: ("string" == typeof e && (e = document.querySelectorAll(e)),
										Array.prototype.map.call(e, function (e) {
											return o(e, t, n, r, i);
										}));
							};
						},
						function (e, t) {
							var n;
							"undefined" == typeof Element || Element.prototype.matches || ((n = Element.prototype).matches = n.matchesSelector || n.mozMatchesSelector || n.msMatchesSelector || n.oMatchesSelector || n.webkitMatchesSelector),
								(e.exports = function (e, t) {
									for (; e && 9 !== e.nodeType; ) {
										if ("function" == typeof e.matches && e.matches(t)) return e;
										e = e.parentNode;
									}
								});
						},
					]),
					(i.c = r),
					(i.d = function (e, t, n) {
						i.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: n });
					}),
					(i.r = function (e) {
						"undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e, "__esModule", { value: !0 });
					}),
					(i.t = function (t, e) {
						if ((1 & e && (t = i(t)), 8 & e)) return t;
						if (4 & e && "object" == typeof t && t && t.__esModule) return t;
						var n = Object.create(null);
						if ((i.r(n), Object.defineProperty(n, "default", { enumerable: !0, value: t }), 2 & e && "string" != typeof t))
							for (var r in t)
								i.d(
									n,
									r,
									function (e) {
										return t[e];
									}.bind(null, r)
								);
						return n;
					}),
					(i.n = function (e) {
						var t =
							e && e.__esModule
								? function () {
										return e["default"];
									}
								: function () {
										return e;
									};
						return i.d(t, "a", t), t;
					}),
					(i.o = function (e, t) {
						return Object.prototype.hasOwnProperty.call(e, t);
					}),
					(i.p = ""),
					i((i.s = 0))
				);
				function i(e) {
					if (r[e]) return r[e].exports;
					var t = (r[e] = { i: e, l: !1, exports: {} });
					return n[e].call(t.exports, t, t.exports, i), (t.l = !0), t.exports;
				}
				var n, r;
			}),
				(e.exports = n());
		})
	);
	function N(e) {
		this.$module = e;
	}
	(N.prototype.init = function () {
		var e,
			t = this.$module;
		t && (((e = document.createElement("button")).className = "app-copy-button js-copy-button"), e.setAttribute("aria-live", "assertive"), (e.textContent = "Copy code"), t.insertBefore(e, t.firstChild), this.copyAction());
	}),
		(N.prototype.copyAction = function () {
			try {
				new I(".js-copy-button", {
					target: function (e) {
						return e.nextElementSibling;
					},
				}).on("success", function (e) {
					(e.trigger.textContent = "Code copied"),
						e.clearSelection(),
						setTimeout(function () {
							e.trigger.textContent = "Copy code";
						}, 5e3);
				});
			} catch (e) {
				e && console.log(e.message);
			}
		});
	var P = g.nodeListForEach,
		M = "app-mobile-nav--active",
		F = "app-header-mobile-nav-toggler--active",
		R = "app-mobile-nav__subnav--active",
		Q = "app-mobile-nav__subnav-toggler--active";
	function D(e) {
		(this.$module = e || document), (this.$nav = this.$module.querySelector(".js-app-mobile-nav")), (this.$navToggler = this.$module.querySelector(".js-app-mobile-nav-toggler"));
	}
	(D.prototype.bindUIEvents = function () {
		var t = this.$nav,
			n = this.$navToggler;
		n.addEventListener("click", function (e) {
			t.classList.contains(M)
				? (t.classList.remove(M), t.setAttribute("aria-hidden", "true"), n.classList.remove(F), n.setAttribute("aria-expanded", "false"))
				: (t.classList.add(M), t.setAttribute("aria-hidden", "false"), n.setAttribute("aria-expanded", "true"), n.classList.add(F));
		}),
			t.addEventListener("click", function (e) {
				var t,
					n,
					r = e.target;
				!r.classList.contains("js-mobile-nav-subnav-toggler") ||
					((n = (t = r.parentNode).parentNode.querySelector(".js-app-mobile-nav-subnav")) &&
						(n.classList.contains(R)
							? (n.classList.remove(R), t.classList.remove(Q), n.setAttribute("aria-hidden", "true"), r.setAttribute("aria-expanded", "false"))
							: (n.classList.add(R), t.classList.add(Q), n.setAttribute("aria-hidden", "false"), r.setAttribute("aria-expanded", "true")),
						e.preventDefault()));
			});
	}),
		(D.prototype.addHeadings = function () {
			var e = this.$nav.querySelectorAll(".js-app-mobile-nav-subnav__link-heading");
			P(e, function (e) {
				var t = document.createElement("h3");
				t.classList.add("app-mobile-nav-subnav__link-heading"), e.parentNode.appendChild(t), t.appendChild(e);
			});
		}),
		(D.prototype.includeAria = function () {
			this.$nav.setAttribute("aria-hidden", "true"), this.$navToggler.setAttribute("aria-expanded", "false");
			var e = this.$module.querySelectorAll(".js-mobile-nav-subnav-toggler");
			P(e, function (e, t) {
				var n,
					r,
					i = e.parentNode.parentNode.querySelector(".js-app-mobile-nav-subnav");
				i &&
					((n = i.classList.contains(R)),
					(r = "js-mobile-nav-subnav-toggler-" + t),
					i.setAttribute("id", (t = "js-mobile-nav__subnav-" + t)),
					i.setAttribute("aria-hidden", n ? "false" : "true"),
					e.setAttribute("id", r),
					e.setAttribute("aria-expanded", n ? "true" : "false"),
					e.setAttribute("aria-controls", t));
			});
		}),
		(D.prototype.init = function () {
			"querySelector" in document && "addEventListener" in window && (this.addHeadings(), this.includeAria(), this.bindUIEvents());
		});
	var B = e(
			y(function (e, t) {
				var n;
				window,
					(n = function () {
						return (
							(r = {}),
							(i.m = n = [
								function (e, t, n) {
									var h = n(1),
										m = n(6),
										y = n(7),
										g = n(16),
										v = n(18),
										b = "prototype",
										w = function (e, t, n) {
											var r,
												i,
												o,
												a = e & w.F,
												s = e & w.G,
												u = e & w.S,
												c = e & w.P,
												l = e & w.B,
												d = s ? h : u ? h[t] || (h[t] = {}) : (h[t] || {})[b],
												f = s ? m : m[t] || (m[t] = {}),
												p = f[b] || (f[b] = {});
											for (r in (n = s ? t : n))
												(i = ((o = !a && d && d[r] !== undefined) ? d : n)[r]), (o = l && o ? v(i, h) : c && "function" == typeof i ? v(Function.call, i) : i), d && g(d, r, i, e & w.U), f[r] != i && y(f, r, o), c && p[r] != i && (p[r] = i);
										};
									(h.core = m), (w.F = 1), (w.G = 2), (w.S = 4), (w.P = 8), (w.B = 16), (w.W = 32), (w.U = 64), (w.R = 128), (e.exports = w);
								},
								function (e, t) {
									e = e.exports = "undefined" != typeof window && window.Math == Math ? window : "undefined" != typeof self && self.Math == Math ? self : Function("return this")();
									"number" == typeof __g && (__g = e);
								},
								function (e, t) {
									e.exports = function (e) {
										return "object" == typeof e ? null !== e : "function" == typeof e;
									};
								},
								function (e, t, n) {
									e.exports = !n(4)(function () {
										return (
											7 !=
											Object.defineProperty({}, "a", {
												get: function () {
													return 7;
												},
											}).a
										);
									});
								},
								function (e, t) {
									e.exports = function (e) {
										try {
											return !!e();
										} catch (t) {
											return !0;
										}
									};
								},
								function (e, t, n) {
									n.r(t),
										n.d(t, "h", function () {
											return r;
										}),
										n.d(t, "createElement", function () {
											return r;
										}),
										n.d(t, "cloneElement", function () {
											return o;
										}),
										n.d(t, "Component", function () {
											return v;
										}),
										n.d(t, "render", function () {
											return b;
										}),
										n.d(t, "rerender", function () {
											return f;
										}),
										n.d(t, "options", function () {
											return E;
										});
									var u = function u() {},
										E = {},
										c = [],
										l = [];
									function r(e, t) {
										for (var n, r, i, o = l, a = arguments.length; 2 < a--; ) c.push(arguments[a]);
										for (t && null != t.children && (c.length || c.push(t.children), delete t.children); c.length; )
											if ((r = c.pop()) && r.pop !== undefined) for (a = r.length; a--; ) c.push(r[a]);
											else
												"boolean" == typeof r && (r = null),
													(i = "function" != typeof e) && (null == r ? (r = "") : "number" == typeof r ? (r = String(r)) : "string" != typeof r && (i = !1)),
													i && n ? (o[o.length - 1] += r) : o === l ? (o = [r]) : o.push(r),
													(n = i);
										var s = new u();
										return (s.nodeName = e), (s.children = o), (s.attributes = null == t ? undefined : t), (s.key = null == t ? undefined : t.key), E.vnode !== undefined && E.vnode(s), s;
									}
									function S(e, t) {
										for (var n in t) e[n] = t[n];
										return e;
									}
									var i = "function" == typeof Promise ? Promise.resolve().then.bind(Promise.resolve()) : setTimeout;
									function o(e, t) {
										return r(e.nodeName, S(S({}, e.attributes), t), 2 < arguments.length ? [].slice.call(arguments, 2) : e.children);
									}
									var s = /acit|ex(?:s|g|n|p|$)|rph|ows|mnc|ntw|ine[ch]|zoo|^ord/i,
										a = [];
									function d(e) {
										!e._dirty && (e._dirty = !0) && 1 == a.push(e) && (E.debounceRendering || i)(f);
									}
									function f() {
										var e,
											t = a;
										for (a = []; (e = t.pop()); ) e._dirty && R(e);
									}
									function T(e, t) {
										return e.normalizedNodeName === t || e.nodeName.toLowerCase() === t.toLowerCase();
									}
									function k(e) {
										var t = S({}, e.attributes);
										t.children = e.children;
										var n = e.nodeName.defaultProps;
										if (n !== undefined) for (var r in n) t[r] === undefined && (t[r] = n[r]);
										return t;
									}
									function _(e) {
										var t = e.parentNode;
										t && t.removeChild(e);
									}
									function p(e, t, n, r, i) {
										if ("key" !== (t = "className" === t ? "class" : t))
											if ("ref" === t) n && n(null), r && r(e);
											else if ("class" !== t || i)
												if ("style" === t) {
													if (((r && "string" != typeof r && "string" != typeof n) || (e.style.cssText = r || ""), r && "object" == typeof r)) {
														if ("string" != typeof n) for (var o in n) o in r || (e.style[o] = "");
														for (var o in r) e.style[o] = "number" == typeof r[o] && !1 === s.test(o) ? r[o] + "px" : r[o];
													}
												} else if ("dangerouslySetInnerHTML" === t) r && (e.innerHTML = r.__html || "");
												else if ("o" == t[0] && "n" == t[1]) {
													var a = t !== (t = t.replace(/Capture$/, ""));
													(t = t.toLowerCase().substring(2)), r ? n || e.addEventListener(t, h, a) : e.removeEventListener(t, h, a), ((e._listeners || (e._listeners = {}))[t] = r);
												} else if ("list" !== t && "type" !== t && !i && t in e) {
													try {
														e[t] = null == r ? "" : r;
													} catch (u) {}
													(null != r && !1 !== r) || "spellcheck" == t || e.removeAttribute(t);
												} else {
													i = i && t !== (t = t.replace(/^xlink:?/, ""));
													null == r || !1 === r
														? i
															? e.removeAttributeNS("http://www.w3.org/1999/xlink", t.toLowerCase())
															: e.removeAttribute(t)
														: "function" != typeof r && (i ? e.setAttributeNS("http://www.w3.org/1999/xlink", t.toLowerCase(), r) : e.setAttribute(t, r));
												}
											else e.className = r || "";
									}
									function h(e) {
										return this._listeners[e.type]((E.event && E.event(e)) || e);
									}
									var O = [],
										L = 0,
										C = !1,
										j = !1;
									function A() {
										for (var e; (e = O.pop()); ) E.afterMount && E.afterMount(e), e.componentDidMount && e.componentDidMount();
									}
									function I(e, t, n, r, i, o) {
										L++ || ((C = null != i && i.ownerSVGElement !== undefined), (j = null != e && !("__preactattr_" in e)));
										r = N(e, t, n, r, o);
										return i && r.parentNode !== i && i.appendChild(r), --L || ((j = !1), o || A()), r;
									}
									function N(e, t, n, r, i) {
										var o = e,
											a = C;
										if ("string" == typeof (t = null == t || "boolean" == typeof t ? "" : t) || "number" == typeof t)
											return (
												e && e.splitText !== undefined && e.parentNode && (!e._component || i) ? e.nodeValue != t && (e.nodeValue = t) : ((o = document.createTextNode(t)), e && (e.parentNode && e.parentNode.replaceChild(o, e), P(e, !0))),
												(o.__preactattr_ = !0),
												o
											);
										var s = t.nodeName;
										if ("function" == typeof s)
											return (function h(e, t, n, r) {
												for (var i = e && e._component, o = i, a = e, s = i && e._componentConstructor === t.nodeName, u = s, c = k(t); i && !u && (i = i._parentComponent); ) u = i.constructor === t.nodeName;
												return (
													i && u && (!r || i._component)
														? (F(i, c, 3, n, r), (e = i.base))
														: (o && !s && (Q(o), (e = a = null)), (i = M(t.nodeName, c, n)), e && !i.nextBase && ((i.nextBase = e), (a = null)), F(i, c, 1, n, r), (e = i.base), a && e !== a && ((a._component = null), P(a, !1))),
													e
												);
											})(e, t, n, r);
										if (
											((C = "svg" === s || ("foreignObject" !== s && C)),
											(s = String(s)),
											(!e || !T(e, s)) &&
												((o = (function m(e, t) {
													t = t ? document.createElementNS("http://www.w3.org/2000/svg", e) : document.createElement(e);
													return (t.normalizedNodeName = e), t;
												})(s, C)),
												e))
										) {
											for (; e.firstChild; ) o.appendChild(e.firstChild);
											e.parentNode && e.parentNode.replaceChild(o, e), P(e, !0);
										}
										var i = o.firstChild,
											u = o.__preactattr_,
											s = t.children;
										if (null == u) for (var u = (o.__preactattr_ = {}), c = o.attributes, l = c.length; l--; ) u[c[l].name] = c[l].value;
										return (
											!j && s && 1 === s.length && "string" == typeof s[0] && null != i && i.splitText !== undefined && null == i.nextSibling
												? i.nodeValue != s[0] && (i.nodeValue = s[0])
												: ((s && s.length) || null != i) &&
													(function (e, t, n, r, i) {
														var o,
															a,
															s,
															u,
															c,
															l,
															d = e.childNodes,
															f = [],
															p = {},
															h = 0,
															m = 0,
															y = d.length,
															g = 0,
															v = t ? t.length : 0;
														if (0 !== y)
															for (var b = 0; b < y; b++) {
																var w = d[b],
																	x = w.__preactattr_;
																null != (S = v && x ? (w._component ? w._component.__key : x.key) : null) ? (h++, (p[S] = w)) : (x || (w.splitText !== undefined ? !i || w.nodeValue.trim() : i)) && (f[g++] = w);
															}
														if (0 !== v)
															for (b = 0; b < v; b++) {
																var E,
																	S,
																	k = null;
																if (null != (S = (E = t[b]).key)) h && p[S] !== undefined && ((k = p[S]), (p[S] = undefined), h--);
																else if (m < g)
																	for (o = m; o < g; o++)
																		if (
																			f[o] !== undefined &&
																			((u = a = f[o]),
																			(l = i),
																			"string" == typeof (c = E) || "number" == typeof c
																				? u.splitText !== undefined
																				: "string" == typeof c.nodeName
																				? !u._componentConstructor && T(u, c.nodeName)
																				: l || u._componentConstructor === c.nodeName)
																		) {
																			(k = a), (f[o] = undefined), o === g - 1 && g--, o === m && m++;
																			break;
																		}
																(k = N(k, E, n, r)), (s = d[b]), k && k !== e && k !== s && (null == s ? e.appendChild(k) : k === s.nextSibling ? _(s) : e.insertBefore(k, s));
															}
														if (h) for (var b in p) p[b] !== undefined && P(p[b], !1);
														for (; m <= g; ) (k = f[g--]) !== undefined && P(k, !1);
													})(o, s, n, r, j || null != u.dangerouslySetInnerHTML),
											(function y(e, t, n) {
												for (var r in n) (t && null != t[r]) || null == n[r] || p(e, r, n[r], (n[r] = undefined), C);
												for (r in t) "children" === r || "innerHTML" === r || (r in n && t[r] === ("value" === r || "checked" === r ? e : n)[r]) || p(e, r, n[r], (n[r] = t[r]), C);
											})(o, t.attributes, u),
											(C = a),
											o
										);
									}
									function P(e, t) {
										var n = e._component;
										n ? Q(n) : (null != e.__preactattr_ && e.__preactattr_.ref && e.__preactattr_.ref(null), (!1 !== t && null != e.__preactattr_) || _(e), m(e));
									}
									function m(e) {
										for (e = e.lastChild; e; ) {
											var t = e.previousSibling;
											P(e, !0), (e = t);
										}
									}
									var y = [];
									function M(e, t, n) {
										var r,
											i = y.length;
										for (e.prototype && e.prototype.render ? ((r = new e(t, n)), v.call(r, t, n)) : (((r = new v(t, n)).constructor = e), (r.render = g)); i--; )
											if (y[i].constructor === e) return (r.nextBase = y[i].nextBase), y.splice(i, 1), r;
										return r;
									}
									function g(e, t, n) {
										return this.constructor(e, n);
									}
									function F(e, t, n, r, i) {
										e._disable ||
											((e._disable = !0),
											(e.__ref = t.ref),
											(e.__key = t.key),
											delete t.ref,
											delete t.key,
											"undefined" == typeof e.constructor.getDerivedStateFromProps && (!e.base || i ? e.componentWillMount && e.componentWillMount() : e.componentWillReceiveProps && e.componentWillReceiveProps(t, r)),
											r && r !== e.context && (e.prevContext || (e.prevContext = e.context), (e.context = r)),
											e.prevProps || (e.prevProps = e.props),
											(e.props = t),
											(e._disable = !1),
											0 !== n && (1 !== n && !1 === E.syncComponentUpdates && e.base ? d(e) : R(e, 1, i)),
											e.__ref && e.__ref(e));
									}
									function R(e, t, n, r) {
										if (!e._disable) {
											var i,
												o = e.props,
												a = e.state,
												s = e.context,
												u = e.prevProps || o,
												c = e.prevState || a,
												l = e.prevContext || s,
												d = e.base,
												f = e.nextBase,
												p = d || f,
												h = e._component,
												m = !1,
												y = l;
											if (
												(e.constructor.getDerivedStateFromProps && ((a = S(S({}, a), e.constructor.getDerivedStateFromProps(o, a))), (e.state = a)),
												d &&
													((e.props = u),
													(e.state = c),
													(e.context = l),
													2 !== t && e.shouldComponentUpdate && !1 === e.shouldComponentUpdate(o, a, s) ? (m = !0) : e.componentWillUpdate && e.componentWillUpdate(o, a, s),
													(e.props = o),
													(e.state = a),
													(e.context = s)),
												(e.prevProps = e.prevState = e.prevContext = e.nextBase = null),
												(e._dirty = !1),
												!m)
											) {
												(o = e.render(o, a, s)), e.getChildContext && (s = S(S({}, s), e.getChildContext())), d && e.getSnapshotBeforeUpdate && (y = e.getSnapshotBeforeUpdate(u, c));
												var g,
													v,
													b,
													a = o && o.nodeName;
												if (
													("function" == typeof a
														? ((b = k(o)),
															(i = h) && i.constructor === a && b.key == i.__key ? F(i, b, 1, s, !1) : ((g = i), (e._component = i = M(a, b, s)), (i.nextBase = i.nextBase || f), (i._parentComponent = e), F(i, b, 0, s, !1), R(i, 1, n, !0)),
															(v = i.base))
														: ((b = p),
															(g = h) && (b = e._component = null),
															(!p && 1 !== t) ||
																(b && (b._component = null),
																(v = (function I(e, t, n, r, i, o) {
																	L++ || ((C = null != i && i.ownerSVGElement !== undefined), (j = null != e && !("__preactattr_" in e)));
																	r = N(e, t, n, r, o);
																	return i && r.parentNode !== i && i.appendChild(r), --L || ((j = !1), o || A()), r;
																})(b, o, s, n || !d, p && p.parentNode, !0)))),
													!p || v === p || i === h || ((h = p.parentNode) && v !== h && (h.replaceChild(v, p), g || ((p._component = null), P(p, !1)))),
													g && Q(g),
													(e.base = v) && !r)
												) {
													for (var w = e, x = e; (x = x._parentComponent); ) (w = x).base = v;
													(v._component = w), (v._componentConstructor = w.constructor);
												}
											}
											for (!d || n ? O.unshift(e) : m || (e.componentDidUpdate && e.componentDidUpdate(u, c, y), E.afterUpdate && E.afterUpdate(e)); e._renderCallbacks.length; ) e._renderCallbacks.pop().call(e);
											L || r || A();
										}
									}
									function Q(e) {
										E.beforeUnmount && E.beforeUnmount(e);
										var t = e.base;
										(e._disable = !0), e.componentWillUnmount && e.componentWillUnmount(), (e.base = null);
										var n = e._component;
										n ? Q(n) : t && (t.__preactattr_ && t.__preactattr_.ref && t.__preactattr_.ref(null), _((e.nextBase = t)), y.push(e), m(t)), e.__ref && e.__ref(null);
									}
									function v(e, t) {
										(this._dirty = !0), (this.context = t), (this.props = e), (this.state = this.state || {}), (this._renderCallbacks = []);
									}
									function b(e, t, n) {
										return I(n, e, {}, !1, t, !1);
									}
									S(v.prototype, {
										setState: function (e, t) {
											this.prevState || (this.prevState = this.state), (this.state = S(S({}, this.state), "function" == typeof e ? e(this.state, this.props) : e)), t && this._renderCallbacks.push(t), d(this);
										},
										forceUpdate: function (e) {
											e && this._renderCallbacks.push(e), R(this, 2);
										},
										render: function b() {},
									}),
										(t["default"] = { h: r, createElement: r, cloneElement: o, Component: v, render: b, rerender: f, options: E });
								},
								function (e, t) {
									e = e.exports = { version: "2.5.7" };
									"number" == typeof __e && (__e = e);
								},
								function (e, t, n) {
									var r = n(8),
										i = n(40);
									e.exports = n(3)
										? function (e, t, n) {
												return r.f(e, t, i(1, n));
											}
										: function (e, t, n) {
												return (e[t] = n), e;
											};
								},
								function (e, t, n) {
									var i = n(9),
										o = n(38),
										a = n(39),
										s = Object.defineProperty;
									t.f = n(3)
										? Object.defineProperty
										: function (e, t, n) {
												if ((i(e), (t = a(t, !0)), i(n), o))
													try {
														return s(e, t, n);
													} catch (r) {}
												if ("get" in n || "set" in n) throw TypeError("Accessors not supported!");
												return "value" in n && (e[t] = n.value), e;
											};
								},
								function (e, t, n) {
									var r = n(2);
									e.exports = function (e) {
										if (!r(e)) throw TypeError(e + " is not an object!");
										return e;
									};
								},
								function (e, t) {
									var n = 0,
										r = Math.random();
									e.exports = function (e) {
										return "Symbol(".concat(e === undefined ? "" : e, ")_", (++n + r).toString(36));
									};
								},
								function (e, t, n) {
									var r = n(22);
									e.exports = Object("z").propertyIsEnumerable(0)
										? Object
										: function (e) {
												return "String" == r(e) ? e.split("") : Object(e);
											};
								},
								function (e, t) {
									e.exports = function (e) {
										if (e == undefined) throw TypeError("Can't call method on  " + e);
										return e;
									};
								},
								function (e, t, n) {
									var r = n(4);
									e.exports = function (e, t) {
										return (
											!!e &&
											r(function () {
												t ? e.call(null, function () {}, 1) : e.call(null);
											})
										);
									};
								},
								function (e, t, n) {
									var r = n(0);
									r(r.S + r.F, "Object", { assign: n(41) });
								},
								function (e, t, n) {
									var r = n(2),
										i = n(1).document,
										o = r(i) && r(i.createElement);
									e.exports = function (e) {
										return o ? i.createElement(e) : {};
									};
								},
								function (e, t, n) {
									var o = n(1),
										a = n(7),
										s = n(17),
										u = n(10)("src"),
										r = "toString",
										i = Function[r],
										c = ("" + i).split(r);
									(n(6).inspectSource = function (e) {
										return i.call(e);
									}),
										(e.exports = function (e, t, n, r) {
											var i = "function" == typeof n;
											i && (s(n, "name") || a(n, "name", t)), e[t] !== n && (i && (s(n, u) || a(n, u, e[t] ? "" + e[t] : c.join(String(t)))), e === o ? (e[t] = n) : r ? (e[t] ? (e[t] = n) : a(e, t, n)) : (delete e[t], a(e, t, n)));
										})(Function.prototype, r, function () {
											return ("function" == typeof this && this[u]) || i.call(this);
										});
								},
								function (e, t) {
									var n = {}.hasOwnProperty;
									e.exports = function (e, t) {
										return n.call(e, t);
									};
								},
								function (e, t, n) {
									var o = n(19);
									e.exports = function (r, i, e) {
										if ((o(r), i === undefined)) return r;
										switch (e) {
											case 1:
												return function (e) {
													return r.call(i, e);
												};
											case 2:
												return function (e, t) {
													return r.call(i, e, t);
												};
											case 3:
												return function (e, t, n) {
													return r.call(i, e, t, n);
												};
										}
										return function () {
											return r.apply(i, arguments);
										};
									};
								},
								function (e, t) {
									e.exports = function (e) {
										if ("function" != typeof e) throw TypeError(e + " is not a function!");
										return e;
									};
								},
								function (e, t, n) {
									var r = n(42),
										i = n(28);
									e.exports =
										Object.keys ||
										function (e) {
											return r(e, i);
										};
								},
								function (e, t, n) {
									var r = n(11),
										i = n(12);
									e.exports = function (e) {
										return r(i(e));
									};
								},
								function (e, t) {
									var n = {}.toString;
									e.exports = function (e) {
										return n.call(e).slice(8, -1);
									};
								},
								function (e, t, n) {
									var u = n(21),
										c = n(24),
										l = n(43);
									e.exports = function (s) {
										return function (e, t, n) {
											var r,
												i = u(e),
												o = c(i.length),
												a = l(n, o);
											if (s && t != t) {
												for (; a < o; ) if ((r = i[a++]) != r) return !0;
											} else for (; a < o; a++) if ((s || a in i) && i[a] === t) return s || a || 0;
											return !s && -1;
										};
									};
								},
								function (e, t, n) {
									var r = n(25),
										i = Math.min;
									e.exports = function (e) {
										return 0 < e ? i(r(e), 9007199254740991) : 0;
									};
								},
								function (e, t) {
									var n = Math.ceil,
										r = Math.floor;
									e.exports = function (e) {
										return isNaN((e = +e)) ? 0 : (0 < e ? r : n)(e);
									};
								},
								function (e, t, n) {
									var r = n(27)("keys"),
										i = n(10);
									e.exports = function (e) {
										return r[e] || (r[e] = i(e));
									};
								},
								function (e, t, n) {
									var r = n(6),
										i = n(1),
										o = "__core-js_shared__",
										a = i[o] || (i[o] = {});
									(e.exports = function (e, t) {
										return a[e] || (a[e] = t !== undefined ? t : {});
									})("versions", []).push({ version: r.version, mode: n(44) ? "pure" : "global", copyright: "© 2018 Denis Pushkarev (zloirock.ru)" });
								},
								function (e, t) {
									e.exports = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",");
								},
								function (e, t, n) {
									var r = n(12);
									e.exports = function (e) {
										return Object(r(e));
									};
								},
								function (e, t, n) {
									var r = n(8).f,
										i = Function.prototype,
										o = /^\s*function ([^ (]*)/;
									"name" in i ||
										(n(3) &&
											r(i, "name", {
												configurable: !0,
												get: function () {
													try {
														return ("" + this).match(o)[1];
													} catch (e) {
														return "";
													}
												},
											}));
								},
								function (e, t, n) {
									var r = n(0),
										i = n(32)(1);
									r(r.P + r.F * !n(13)([].map, !0), "Array", {
										map: function (e) {
											return i(this, e, arguments[1]);
										},
									});
								},
								function (e, t, n) {
									var b = n(18),
										w = n(11),
										x = n(29),
										E = n(24),
										r = n(47);
									e.exports = function (d, e) {
										var f = 1 == d,
											p = 2 == d,
											h = 3 == d,
											m = 4 == d,
											y = 6 == d,
											g = 5 == d || y,
											v = e || r;
										return function (e, t, n) {
											for (var r, i, o = x(e), a = w(o), s = b(t, n, 3), u = E(a.length), c = 0, l = f ? v(e, u) : p ? v(e, 0) : undefined; c < u; c++)
												if ((g || c in a) && ((i = s((r = a[c]), c, o)), d))
													if (f) l[c] = i;
													else if (i)
														switch (d) {
															case 3:
																return !0;
															case 5:
																return r;
															case 6:
																return c;
															case 2:
																l.push(r);
														}
													else if (m) return !1;
											return y ? -1 : h || m ? m : l;
										};
									};
								},
								function (e, t, n) {
									var r = n(22);
									e.exports =
										Array.isArray ||
										function (e) {
											return "Array" == r(e);
										};
								},
								function (e, t, n) {
									var r = n(27)("wks"),
										i = n(10),
										o = n(1).Symbol,
										a = "function" == typeof o;
									(e.exports = function (e) {
										return r[e] || (r[e] = (a && o[e]) || (a ? o : i)("Symbol." + e));
									}).store = r;
								},
								function (e, t, n) {
									var r = n(0),
										i = n(23)(!1),
										o = [].indexOf,
										a = !!o && 1 / [1].indexOf(1, -0) < 0;
									r(r.P + r.F * (a || !n(13)(o)), "Array", {
										indexOf: function (e) {
											return a ? o.apply(this, arguments) || 0 : i(this, e, arguments[1]);
										},
									});
								},
								function (e, t, n) {
									var r = n(0);
									r(r.S, "Object", { create: n(52) });
								},
								function (e, t, n) {
									(t.__esModule = !0), (t["default"] = void 0), n(14), n(30), n(31), n(35), n(49), n(50);
									var r = n(5),
										i = (n = n(51)) && n.__esModule ? n : { default: n };
									function o(e) {
										if (!e.element) throw new Error("element is not defined");
										if (!e.id) throw new Error("id is not defined");
										if (!e.source) throw new Error("source is not defined");
										Array.isArray(e.source) && (e.source = a(e.source)), (0, r.render)((0, r.createElement)(i["default"], e), e.element);
									}
									var a = function a(n) {
										return function (t, e) {
											e(
												n.filter(function (e) {
													return -1 !== e.toLowerCase().indexOf(t.toLowerCase());
												})
											);
										};
									};
									(o.enhanceSelectElement = function (n) {
										if (!n.selectElement) throw new Error("selectElement is not defined");
										var e;
										n.source ||
											((e = [].filter.call(n.selectElement.options, function (e) {
												return e.value || n.preserveNullOptions;
											})),
											(n.source = e.map(function (e) {
												return e.textContent || e.innerText;
											}))),
											(n.onConfirm =
												n.onConfirm ||
												function (t) {
													var e = [].filter.call(n.selectElement.options, function (e) {
														return (e.textContent || e.innerText) === t;
													})[0];
													e && (e.selected = !0);
												}),
											(!n.selectElement.value && n.defaultValue !== undefined) || ((t = n.selectElement.options[n.selectElement.options.selectedIndex]), (n.defaultValue = t.textContent || t.innerText)),
											n.name === undefined && (n.name = ""),
											n.id === undefined && (n.selectElement.id === undefined ? (n.id = "") : (n.id = n.selectElement.id)),
											n.autoselect === undefined && (n.autoselect = !0);
										var t = document.createElement("div");
										n.selectElement.parentNode.insertBefore(t, n.selectElement), o(Object.assign({}, n, { element: t })), (n.selectElement.style.display = "none"), (n.selectElement.id = n.selectElement.id + "-select");
									}),
										(t["default"] = o);
								},
								function (e, t, n) {
									e.exports =
										!n(3) &&
										!n(4)(function () {
											return (
												7 !=
												Object.defineProperty(n(15)("div"), "a", {
													get: function () {
														return 7;
													},
												}).a
											);
										});
								},
								function (e, t, n) {
									var i = n(2);
									e.exports = function (e, t) {
										if (!i(e)) return e;
										var n, r;
										if (t && "function" == typeof (n = e.toString) && !i((r = n.call(e)))) return r;
										if ("function" == typeof (n = e.valueOf) && !i((r = n.call(e)))) return r;
										if (!t && "function" == typeof (n = e.toString) && !i((r = n.call(e)))) return r;
										throw TypeError("Can't convert object to primitive value");
									};
								},
								function (e, t) {
									e.exports = function (e, t) {
										return { enumerable: !(1 & e), configurable: !(2 & e), writable: !(4 & e), value: t };
									};
								},
								function (e, t, n) {
									var f = n(20),
										p = n(45),
										h = n(46),
										m = n(29),
										y = n(11),
										i = Object.assign;
									e.exports =
										!i ||
										n(4)(function () {
											var e = {},
												t = {},
												n = Symbol(),
												r = "abcdefghijklmnopqrst";
											return (
												(e[n] = 7),
												r.split("").forEach(function (e) {
													t[e] = e;
												}),
												7 != i({}, e)[n] || Object.keys(i({}, t)).join("") != r
											);
										})
											? function (e, t) {
													for (var n = m(e), r = arguments.length, i = 1, o = p.f, a = h.f; i < r; )
														for (var s, u = y(arguments[i++]), c = o ? f(u).concat(o(u)) : f(u), l = c.length, d = 0; d < l; ) a.call(u, (s = c[d++])) && (n[s] = u[s]);
													return n;
												}
											: i;
								},
								function (e, t, n) {
									var a = n(17),
										s = n(21),
										u = n(23)(!1),
										c = n(26)("IE_PROTO");
									e.exports = function (e, t) {
										var n,
											r = s(e),
											i = 0,
											o = [];
										for (n in r) n != c && a(r, n) && o.push(n);
										for (; t.length > i; ) a(r, (n = t[i++])) && (~u(o, n) || o.push(n));
										return o;
									};
								},
								function (e, t, n) {
									var r = n(25),
										i = Math.max,
										o = Math.min;
									e.exports = function (e, t) {
										return (e = r(e)) < 0 ? i(e + t, 0) : o(e, t);
									};
								},
								function (e, t) {
									e.exports = !1;
								},
								function (e, t) {
									t.f = Object.getOwnPropertySymbols;
								},
								function (e, t) {
									t.f = {}.propertyIsEnumerable;
								},
								function (e, t, n) {
									var r = n(48);
									e.exports = function (e, t) {
										return new (r(e))(t);
									};
								},
								function (e, t, n) {
									var r = n(2),
										i = n(33),
										o = n(34)("species");
									e.exports = function (e) {
										var t;
										return i(e) && ("function" != typeof (t = e.constructor) || (t !== Array && !i(t.prototype)) || (t = undefined), r(t) && null === (t = t[o]) && (t = undefined)), t === undefined ? Array : t;
									};
								},
								function (e, t, n) {
									var r = n(0),
										i = n(32)(2);
									r(r.P + r.F * !n(13)([].filter, !0), "Array", {
										filter: function (e) {
											return i(this, e, arguments[1]);
										},
									});
								},
								function (e, t, n) {
									var r = n(0);
									r(r.S, "Array", { isArray: n(33) });
								},
								function (e, t, n) {
									(t.__esModule = !0), (t["default"] = void 0), n(14), n(36), n(30), n(31), n(35), n(55), n(58);
									var Q = n(5),
										D = i(n(60)),
										r = i(n(61));
									function i(e) {
										return e && e.__esModule ? e : { default: e };
									}
									function B() {
										return (B =
											Object.assign ||
											function (e) {
												for (var t = 1; t < arguments.length; t++) {
													var n,
														r = arguments[t];
													for (n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
												}
												return e;
											}).apply(this, arguments);
									}
									function o(e) {
										if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
										return e;
									}
									var a = { 13: "enter", 27: "escape", 32: "space", 38: "up", 40: "down" };
									function $() {
										return !(!navigator.userAgent.match(/(iPod|iPhone|iPad)/g) || !navigator.userAgent.match(/AppleWebKit/g));
									}
									var s,
										u,
										n =
											((function r(e, t) {
												(e.prototype = Object.create(t.prototype)), ((e.prototype.constructor = e).__proto__ = t);
											})(c, (s = Q.Component)),
											((u = c.prototype).isQueryAnOption = function (e, t) {
												var n = this;
												return (
													-1 !==
													t
														.map(function (e) {
															return n.templateInputValue(e).toLowerCase();
														})
														.indexOf(e.toLowerCase())
												);
											}),
											(u.componentDidMount = function () {
												this.pollInputElement();
											}),
											(u.componentWillUnmount = function () {
												clearTimeout(this.$pollInput);
											}),
											(u.pollInputElement = function () {
												var e = this;
												this.getDirectInputChanges(),
													(this.$pollInput = setTimeout(function () {
														e.pollInputElement();
													}, 100));
											}),
											(u.getDirectInputChanges = function () {
												var e = this.elementReferences[-1];
												e && e.value !== this.state.query && this.handleInputChange({ target: { value: e.value } });
											}),
											(u.componentDidUpdate = function (e, t) {
												var n = this.state.focused,
													r = t.focused !== n;
												!r || null === n || this.elementReferences[n].focus();
												t = r && null === t.focused;
												-1 === n && t && (n = this.elementReferences[n]).setSelectionRange(0, n.value.length);
											}),
											(u.hasAutoselect = function () {
												return !$() && this.props.autoselect;
											}),
											(u.templateInputValue = function (e) {
												var t = this.props.templates && this.props.templates.inputValue;
												return t ? t(e) : e;
											}),
											(u.templateSuggestion = function (e) {
												var t = this.props.templates && this.props.templates.suggestion;
												return t ? t(e) : e;
											}),
											(u.handleComponentBlur = function (e) {
												var t,
													n = this.state,
													r = n.options,
													i = n.query,
													n = n.selected;
												this.props.confirmOnBlur ? ((t = e.query || i), this.props.onConfirm(r[n])) : (t = i),
													this.setState({ focused: null, menuOpen: e.menuOpen || !1, query: t, selected: null, validChoiceMade: this.isQueryAnOption(t, r) });
											}),
											(u.handleListMouseLeave = function (e) {
												this.setState({ hovered: null });
											}),
											(u.handleOptionBlur = function (e, t) {
												var n = this.state,
													r = n.focused,
													i = n.menuOpen,
													o = n.options,
													a = n.selected,
													n = null === e.relatedTarget,
													e = e.relatedTarget === this.elementReferences[-1],
													r = r !== t && -1 !== r;
												((!r && n) || (!r && !e)) && ((i = i && $()), this.handleComponentBlur({ menuOpen: i, query: this.templateInputValue(o[a]) }));
											}),
											(u.handleInputBlur = function (e) {
												var t = this.state,
													n = t.focused,
													r = t.menuOpen,
													i = t.options,
													o = t.query,
													t = t.selected;
												-1 === n && ((r = r && $()), (t = $() ? o : this.templateInputValue(i[t])), this.handleComponentBlur({ menuOpen: r, query: t }));
											}),
											(u.handleInputChange = function (e) {
												var n = this,
													t = this.props,
													r = t.minLength,
													i = t.source,
													o = t.showAllValues,
													a = this.hasAutoselect(),
													s = e.target.value,
													t = 0 === s.length,
													e = this.state.query.length !== s.length,
													r = s.length >= r;
												this.setState({ query: s, ariaHint: t }),
													o || (!t && e && r)
														? i(s, function (e) {
																var t = 0 < e.length;
																n.setState({ menuOpen: t, options: e, selected: a && t ? 0 : -1, validChoiceMade: !1 });
															})
														: (!t && r) || this.setState({ menuOpen: !1, options: [] });
											}),
											(u.handleInputClick = function (e) {
												this.handleInputChange(e);
											}),
											(u.handleInputFocus = function (e) {
												var t = this.state,
													n = t.query,
													r = t.validChoiceMade,
													i = t.options,
													t = this.props.minLength,
													o = !r && n.length >= t && 0 < i.length;
												o
													? this.setState(function (e) {
															e = e.menuOpen;
															return { focused: -1, menuOpen: o || e, selected: -1 };
														})
													: this.setState({ focused: -1 });
											}),
											(u.handleOptionFocus = function (e) {
												this.setState({ focused: e, hovered: null, selected: e });
											}),
											(u.handleOptionMouseEnter = function (e, t) {
												$() || this.setState({ hovered: t });
											}),
											(u.handleOptionClick = function (e, t) {
												var n = this.state.options[t],
													t = this.templateInputValue(n);
												this.props.onConfirm(n), this.setState({ focused: -1, hovered: null, menuOpen: !1, query: t, selected: -1, validChoiceMade: !0 }), this.forceUpdate();
											}),
											(u.handleOptionMouseDown = function (e) {
												e.preventDefault();
											}),
											(u.handleUpArrow = function (e) {
												e.preventDefault();
												var t = this.state,
													e = t.menuOpen,
													t = t.selected;
												-1 !== t && e && this.handleOptionFocus(t - 1);
											}),
											(u.handleDownArrow = function (e) {
												var t,
													n,
													r = this;
												e.preventDefault(),
													this.props.showAllValues && !1 === this.state.menuOpen
														? (e.preventDefault(),
															this.props.source("", function (e) {
																r.setState({ menuOpen: !0, options: e, selected: 0, focused: 0, hovered: null });
															}))
														: !0 === this.state.menuOpen && ((t = (n = this.state).menuOpen), (e = n.options), (n = n.selected) !== e.length - 1 && t && this.handleOptionFocus(n + 1));
											}),
											(u.handleSpace = function (e) {
												var t = this;
												this.props.showAllValues &&
													!1 === this.state.menuOpen &&
													"" === this.state.query &&
													(e.preventDefault(),
													this.props.source("", function (e) {
														t.setState({ menuOpen: !0, options: e });
													})),
													-1 !== this.state.focused && (e.preventDefault(), this.handleOptionClick(e, this.state.focused));
											}),
											(u.handleEnter = function (e) {
												this.state.menuOpen && (e.preventDefault(), 0 <= this.state.selected && this.handleOptionClick(e, this.state.selected));
											}),
											(u.handlePrintableKey = function (e) {
												var t = this.elementReferences[-1];
												e.target === t || t.focus();
											}),
											(u.handleKeyDown = function (e) {
												switch (a[e.keyCode]) {
													case "up":
														this.handleUpArrow(e);
														break;
													case "down":
														this.handleDownArrow(e);
														break;
													case "space":
														this.handleSpace(e);
														break;
													case "enter":
														this.handleEnter(e);
														break;
													case "escape":
														this.handleComponentBlur({ query: this.state.query });
														break;
													default:
														!(function u(e) {
															return (47 < e && e < 58) || 32 === e || 8 === e || (64 < e && e < 91) || (95 < e && e < 112) || (185 < e && e < 193) || (218 < e && e < 223);
														})(e.keyCode) || this.handlePrintableKey(e);
												}
											}),
											(u.render = function () {
												var e,
													o = this,
													t = this.props,
													n = t.cssNamespace,
													r = t.displayMenu,
													a = t.id,
													i = t.minLength,
													s = t.name,
													u = t.placeholder,
													c = t.required,
													l = t.showAllValues,
													d = t.tNoResults,
													f = t.tStatusQueryTooShort,
													p = t.tStatusNoResults,
													h = t.tStatusSelectedOption,
													m = t.tStatusResults,
													y = t.tAssistiveHint,
													g = t.dropdownArrow,
													v = this.state,
													b = v.focused,
													w = v.hovered,
													x = v.menuOpen,
													E = v.options,
													S = v.query,
													k = v.selected,
													T = v.ariaHint,
													_ = v.validChoiceMade,
													O = this.hasAutoselect(),
													L = 0 === E.length,
													C = 0 !== S.length,
													j = S.length >= i,
													A = this.props.showNoOptionsFound && -1 === b && L && C && j,
													I = n + "__wrapper",
													N = n + "__input",
													P = null !== b ? " " + N + "--focused" : "",
													M = this.props.showAllValues ? " " + N + "--show-all-values" : " " + N + "--default",
													F = n + "__dropdown-arrow-down",
													t = -1 !== b && null !== b,
													v = n + "__menu",
													L = v + "--" + r,
													C = v + "--" + (x || A ? "visible" : "hidden"),
													R = n + "__option",
													j = n + "__hint",
													r = this.templateInputValue(E[k]),
													O = r && 0 === r.toLowerCase().indexOf(S.toLowerCase()) && O ? S + r.substr(S.length) : "",
													r = a + "__assistiveHint",
													T = T ? { "aria-describedby": r } : null;
												return (
													l && "string" == typeof (e = g({ className: F })) && (e = (0, Q.createElement)("div", { className: n + "__dropdown-arrow-down-wrapper", dangerouslySetInnerHTML: { __html: e } })),
													(0, Q.createElement)(
														"div",
														{ className: I, onKeyDown: this.handleKeyDown },
														(0, Q.createElement)(D["default"], {
															id: a,
															length: E.length,
															queryLength: S.length,
															minQueryLength: i,
															selectedOption: this.templateInputValue(E[k]),
															selectedOptionIndex: k,
															validChoiceMade: _,
															isInFocus: null !== this.state.focused,
															tQueryTooShort: f,
															tNoResults: p,
															tSelectedOption: h,
															tResults: m,
														}),
														O && (0, Q.createElement)("span", null, (0, Q.createElement)("input", { className: j, readonly: !0, tabIndex: "-1", value: O })),
														(0, Q.createElement)(
															"input",
															B(
																{ "aria-expanded": x ? "true" : "false", "aria-activedescendant": !!t && a + "__option--" + b, "aria-owns": a + "__listbox", "aria-autocomplete": this.hasAutoselect() ? "both" : "list" },
																T,
																{
																	autoComplete: "off",
																	className: N + P + M,
																	id: a,
																	onClick: function (e) {
																		return o.handleInputClick(e);
																	},
																	onBlur: this.handleInputBlur,
																},
																{ onInput: this.handleInputChange },
																{
																	onFocus: this.handleInputFocus,
																	name: s,
																	placeholder: u,
																	ref: function (e) {
																		o.elementReferences[-1] = e;
																	},
																	type: "text",
																	role: "combobox",
																	required: c,
																	value: S,
																}
															)
														),
														e,
														(0, Q.createElement)(
															"ul",
															{
																className: v + " " + L + " " + C,
																onMouseLeave: function (e) {
																	return o.handleListMouseLeave(e);
																},
																id: a + "__listbox",
																role: "listbox",
															},
															E.map(function (e, t) {
																var n = (-1 === b ? k === t : b === t) && null === w ? " " + R + "--focused" : "",
																	r = t % 2 ? " " + R + "--odd" : "",
																	i = $()
																		? "<span id=" +
																			a +
																			"__option-suffix--" +
																			t +
																			' style="border:0;clip:rect(0 0 0 0);height:1px;marginBottom:-1px;marginRight:-1px;overflow:hidden;padding:0;position:absolute;whiteSpace:nowrap;width:1px"> ' +
																			(t + 1) +
																			" of " +
																			E.length +
																			"</span>"
																		: "";
																return (0, Q.createElement)("li", {
																	"aria-selected": b === t ? "true" : "false",
																	className: R + n + r,
																	dangerouslySetInnerHTML: { __html: o.templateSuggestion(e) + i },
																	id: a + "__option--" + t,
																	key: t,
																	onBlur: function (e) {
																		return o.handleOptionBlur(e, t);
																	},
																	onClick: function (e) {
																		return o.handleOptionClick(e, t);
																	},
																	onMouseDown: o.handleOptionMouseDown,
																	onMouseEnter: function (e) {
																		return o.handleOptionMouseEnter(e, t);
																	},
																	ref: function (e) {
																		o.elementReferences[t] = e;
																	},
																	role: "option",
																	tabIndex: "-1",
																	"aria-posinset": t + 1,
																	"aria-setsize": E.length,
																});
															}),
															A && (0, Q.createElement)("li", { className: R + " " + R + "--no-results" }, d())
														),
														(0, Q.createElement)("span", { id: r, style: { display: "none" } }, y())
													)
												);
											}),
											c);
									function c(e) {
										var t;
										return (
											((t = s.call(this, e) || this).elementReferences = {}),
											(t.state = { focused: null, hovered: null, menuOpen: !1, options: e.defaultValue ? [e.defaultValue] : [], query: e.defaultValue, validChoiceMade: !1, selected: null, ariaHint: !0 }),
											(t.handleComponentBlur = t.handleComponentBlur.bind(o(o(t)))),
											(t.handleKeyDown = t.handleKeyDown.bind(o(o(t)))),
											(t.handleUpArrow = t.handleUpArrow.bind(o(o(t)))),
											(t.handleDownArrow = t.handleDownArrow.bind(o(o(t)))),
											(t.handleEnter = t.handleEnter.bind(o(o(t)))),
											(t.handlePrintableKey = t.handlePrintableKey.bind(o(o(t)))),
											(t.handleListMouseLeave = t.handleListMouseLeave.bind(o(o(t)))),
											(t.handleOptionBlur = t.handleOptionBlur.bind(o(o(t)))),
											(t.handleOptionClick = t.handleOptionClick.bind(o(o(t)))),
											(t.handleOptionFocus = t.handleOptionFocus.bind(o(o(t)))),
											(t.handleOptionMouseDown = t.handleOptionMouseDown.bind(o(o(t)))),
											(t.handleOptionMouseEnter = t.handleOptionMouseEnter.bind(o(o(t)))),
											(t.handleInputBlur = t.handleInputBlur.bind(o(o(t)))),
											(t.handleInputChange = t.handleInputChange.bind(o(o(t)))),
											(t.handleInputFocus = t.handleInputFocus.bind(o(o(t)))),
											(t.pollInputElement = t.pollInputElement.bind(o(o(t)))),
											(t.getDirectInputChanges = t.getDirectInputChanges.bind(o(o(t)))),
											t
										);
									}
									(t["default"] = n).defaultProps = {
										autoselect: !1,
										cssNamespace: "autocomplete",
										defaultValue: "",
										displayMenu: "inline",
										minLength: 0,
										name: "input-autocomplete",
										placeholder: "",
										onConfirm: function () {},
										confirmOnBlur: !0,
										showNoOptionsFound: !0,
										showAllValues: !1,
										required: !1,
										tNoResults: function () {
											return "No results found";
										},
										tAssistiveHint: function () {
											return "When autocomplete results are available use up and down arrows to review and enter to select.  Touch device users, explore by touch or with swipe gestures.";
										},
										dropdownArrow: r["default"],
									};
								},
								function (e, t, n) {
									var r = n(9),
										i = n(53),
										o = n(28),
										a = n(26)("IE_PROTO"),
										s = function () {},
										u = "prototype",
										c = function () {
											var e = n(15)("iframe"),
												t = o.length;
											for (e.style.display = "none", n(54).appendChild(e), e.src = "javascript:", (e = e.contentWindow.document).open(), e.write("<script>document.F=Object</script>"), e.close(), c = e.F; t--; ) delete c[u][o[t]];
											return c();
										};
									e.exports =
										Object.create ||
										function (e, t) {
											var n;
											return null !== e ? ((s[u] = r(e)), (n = new s()), (s[u] = null), (n[a] = e)) : (n = c()), t === undefined ? n : i(n, t);
										};
								},
								function (e, t, n) {
									var a = n(8),
										s = n(9),
										u = n(20);
									e.exports = n(3)
										? Object.defineProperties
										: function (e, t) {
												s(e);
												for (var n, r = u(t), i = r.length, o = 0; o < i; ) a.f(e, (n = r[o++]), t[n]);
												return e;
											};
								},
								function (e, t, n) {
									n = n(1).document;
									e.exports = n && n.documentElement;
								},
								function (e, t, n) {
									var r = n(0);
									r(r.P, "Function", { bind: n(56) });
								},
								function (e, t, n) {
									var o = n(19),
										a = n(2),
										s = n(57),
										u = [].slice,
										c = {};
									e.exports =
										Function.bind ||
										function (t) {
											var n = o(this),
												r = u.call(arguments, 1),
												i = function () {
													var e = r.concat(u.call(arguments));
													return this instanceof i
														? (function (e, t, n) {
																if (!(t in c)) {
																	for (var r = [], i = 0; i < t; i++) r[i] = "a[" + i + "]";
																	c[t] = Function("F,a", "return new F(" + r.join(",") + ")");
																}
																return c[t](e, n);
															})(n, e.length, e)
														: s(n, e, t);
												};
											return a(n.prototype) && (i.prototype = n.prototype), i;
										};
								},
								function (e, t) {
									e.exports = function (e, t, n) {
										var r = n === undefined;
										switch (t.length) {
											case 0:
												return r ? e() : e.call(n);
											case 1:
												return r ? e(t[0]) : e.call(n, t[0]);
											case 2:
												return r ? e(t[0], t[1]) : e.call(n, t[0], t[1]);
											case 3:
												return r ? e(t[0], t[1], t[2]) : e.call(n, t[0], t[1], t[2]);
											case 4:
												return r ? e(t[0], t[1], t[2], t[3]) : e.call(n, t[0], t[1], t[2], t[3]);
										}
										return e.apply(n, t);
									};
								},
								function (e, t, n) {
									n(59)("match", 1, function (r, i, e) {
										return [
											function (e) {
												var t = r(this),
													n = e == undefined ? undefined : e[i];
												return n !== undefined ? n.call(e, t) : new RegExp(e)[i](String(t));
											},
											e,
										];
									});
								},
								function (e, t, n) {
									var a = n(7),
										s = n(16),
										u = n(4),
										c = n(12),
										l = n(34);
									e.exports = function (t, e, n) {
										var r = l(t),
											i = n(c, r, ""[t]),
											n = i[0],
											o = i[1];
										u(function () {
											var e = {};
											return (
												(e[r] = function () {
													return 7;
												}),
												7 != ""[t](e)
											);
										}) &&
											(s(String.prototype, t, n),
											a(
												RegExp.prototype,
												r,
												2 == e
													? function (e, t) {
															return o.call(e, this, t);
														}
													: function (e) {
															return o.call(e, this);
														}
											));
									};
								},
								function (e, t, n) {
									(t.__esModule = !0), (t["default"] = void 0), n(36);
									var h = n(5),
										r = function r(i, o, a) {
											var s;
											return function () {
												var e = this,
													t = arguments,
													n = function n() {
														(s = null), a || i.apply(e, t);
													},
													r = a && !s;
												clearTimeout(s), (s = setTimeout(n, o)), r && i.apply(e, t);
											};
										},
										i = (function (i) {
											function e() {
												for (var e, t = arguments.length, n = new Array(t), r = 0; r < t; r++) n[r] = arguments[r];
												return ((e = i.call.apply(i, [this].concat(n)) || this).state = { bump: !1, debounced: !1 }), e;
											}
											!(function n(e, t) {
												(e.prototype = Object.create(t.prototype)), ((e.prototype.constructor = e).__proto__ = t);
											})(e, i);
											var t = e.prototype;
											return (
												(t.componentWillMount = function () {
													var e = this;
													this.debounceStatusUpdate = r(function () {
														var t;
														e.state.debounced ||
															((t = !e.props.isInFocus || e.props.validChoiceMade),
															e.setState(function (e) {
																return { bump: !e.bump, debounced: !0, silenced: t };
															}));
													}, 1400);
												}),
												(t.componentWillReceiveProps = function (e) {
													e.queryLength, this.setState({ debounced: !1 });
												}),
												(t.render = function () {
													var e = this.props,
														t = e.id,
														n = e.length,
														r = e.queryLength,
														i = e.minQueryLength,
														o = e.selectedOption,
														a = e.selectedOptionIndex,
														s = e.tQueryTooShort,
														u = e.tNoResults,
														c = e.tSelectedOption,
														l = e.tResults,
														d = this.state,
														f = d.bump,
														p = d.debounced,
														e = d.silenced,
														d = r < i,
														r = 0 === n,
														o = o ? c(o, n, a) : "",
														a = d ? s(i) : r ? u() : l(n, o);
													return (
														this.debounceStatusUpdate(),
														(0, h.createElement)(
															"div",
															{ style: { border: "0", clip: "rect(0 0 0 0)", height: "1px", marginBottom: "-1px", marginRight: "-1px", overflow: "hidden", padding: "0", position: "absolute", whiteSpace: "nowrap", width: "1px" } },
															(0, h.createElement)("div", { id: t + "__status--A", role: "status", "aria-atomic": "true", "aria-live": "polite" }, !e && p && f ? a : ""),
															(0, h.createElement)("div", { id: t + "__status--B", role: "status", "aria-atomic": "true", "aria-live": "polite" }, e || !p || f ? "" : a)
														)
													);
												}),
												e
											);
										})(h.Component);
									(t["default"] = i).defaultProps = {
										tQueryTooShort: function (e) {
											return "Type in " + e + " or more characters for results";
										},
										tNoResults: function () {
											return "No search results";
										},
										tSelectedOption: function (e, t, n) {
											return e + " " + (n + 1) + " of " + t + " is highlighted";
										},
										tResults: function (e, t) {
											return e + " " + (1 === e ? "result" : "results") + " " + (1 === e ? "is" : "are") + " available. " + t;
										},
									};
								},
								function (e, t, n) {
									(t.__esModule = !0), (t["default"] = void 0);
									var r = n(5);
									t["default"] = function (e) {
										e = e.className;
										return (0, r.createElement)(
											"svg",
											{ version: "1.1", xmlns: "http://www.w3.org/2000/svg", className: e, focusable: "false" },
											(0, r.createElement)("g", { stroke: "none", fill: "none", "fill-rule": "evenodd" }, (0, r.createElement)("polygon", { fill: "#000000", points: "0 0 22 0 11 17" }))
										);
									};
								},
							]),
							(i.c = r),
							(i.d = function (e, t, n) {
								i.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: n });
							}),
							(i.r = function (e) {
								"undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e, "__esModule", { value: !0 });
							}),
							(i.t = function (t, e) {
								if ((1 & e && (t = i(t)), 8 & e)) return t;
								if (4 & e && "object" == typeof t && t && t.__esModule) return t;
								var n = Object.create(null);
								if ((i.r(n), Object.defineProperty(n, "default", { enumerable: !0, value: t }), 2 & e && "string" != typeof t))
									for (var r in t)
										i.d(
											n,
											r,
											function (e) {
												return t[e];
											}.bind(null, r)
										);
								return n;
							}),
							(i.n = function (e) {
								var t =
									e && e.__esModule
										? function () {
												return e["default"];
											}
										: function () {
												return e;
											};
								return i.d(t, "a", t), t;
							}),
							(i.o = function (e, t) {
								return Object.prototype.hasOwnProperty.call(e, t);
							}),
							(i.p = "/"),
							i((i.s = 37))["default"]
						);
						function i(e) {
							if (r[e]) return r[e].exports;
							var t = (r[e] = { i: e, l: !1, exports: {} });
							return n[e].call(t.exports, t, t.exports, i), (t.l = !0), t.exports;
						}
						var n, r;
					}),
					(e.exports = n());
			})
		),
		$ = y(function (r, e) {
			!(function () {
				var t,
					c,
					l,
					e,
					d,
					f,
					p,
					h,
					m,
					y,
					g,
					v,
					b,
					w,
					x,
					E,
					S,
					k,
					T,
					_,
					O,
					L,
					C,
					j,
					A,
					n,
					R = function (e) {
						var t = new R.Builder();
						return t.pipeline.add(R.trimmer, R.stopWordFilter, R.stemmer), t.searchPipeline.add(R.stemmer), e.call(t, t), t.build();
					};
				(R.version = "2.3.6"),
					(R.utils = {}),
					(R.utils.warn =
						((t = this),
						function (e) {
							t.console && console.warn && console.warn(e);
						})),
					(R.utils.asString = function (e) {
						return null == e ? "" : e.toString();
					}),
					(R.utils.clone = function (e) {
						if (null === e || e === undefined) return e;
						for (var t = Object.create(null), n = Object.keys(e), r = 0; r < n.length; r++) {
							var i = n[r],
								o = e[i];
							if (Array.isArray(o)) t[i] = o.slice();
							else {
								if ("string" != typeof o && "number" != typeof o && "boolean" != typeof o) throw new TypeError("clone is not deep and does not support nested objects");
								t[i] = o;
							}
						}
						return t;
					}),
					(R.FieldRef = function (e, t, n) {
						(this.docRef = e), (this.fieldName = t), (this._stringValue = n);
					}),
					(R.FieldRef.joiner = "/"),
					(R.FieldRef.fromString = function (e) {
						var t = e.indexOf(R.FieldRef.joiner);
						if (-1 === t) throw "malformed field ref string";
						var n = e.slice(0, t),
							t = e.slice(t + 1);
						return new R.FieldRef(t, n, e);
					}),
					(R.FieldRef.prototype.toString = function () {
						return this._stringValue == undefined && (this._stringValue = this.fieldName + R.FieldRef.joiner + this.docRef), this._stringValue;
					}),
					(R.Set = function (e) {
						if (((this.elements = Object.create(null)), e)) {
							this.length = e.length;
							for (var t = 0; t < this.length; t++) this.elements[e[t]] = !0;
						} else this.length = 0;
					}),
					(R.Set.complete = {
						intersect: function (e) {
							return e;
						},
						union: function (e) {
							return e;
						},
						contains: function () {
							return !0;
						},
					}),
					(R.Set.empty = {
						intersect: function () {
							return this;
						},
						union: function (e) {
							return e;
						},
						contains: function () {
							return !1;
						},
					}),
					(R.Set.prototype.contains = function (e) {
						return !!this.elements[e];
					}),
					(R.Set.prototype.intersect = function (e) {
						var t,
							n = [];
						if (e === R.Set.complete) return this;
						if (e === R.Set.empty) return e;
						for (var r = this.length < e.length ? ((t = this), e) : ((t = e), this), i = Object.keys(t.elements), o = 0; o < i.length; o++) {
							var a = i[o];
							a in r.elements && n.push(a);
						}
						return new R.Set(n);
					}),
					(R.Set.prototype.union = function (e) {
						return e === R.Set.complete ? R.Set.complete : e === R.Set.empty ? this : new R.Set(Object.keys(this.elements).concat(Object.keys(e.elements)));
					}),
					(R.idf = function (e, t) {
						var n,
							r = 0;
						for (n in e) "_index" != n && (r += Object.keys(e[n]).length);
						return Math.log(1 + Math.abs((t - r + 0.5) / (r + 0.5)));
					}),
					(R.Token = function (e, t) {
						(this.str = e || ""), (this.metadata = t || {});
					}),
					(R.Token.prototype.toString = function () {
						return this.str;
					}),
					(R.Token.prototype.update = function (e) {
						return (this.str = e(this.str, this.metadata)), this;
					}),
					(R.Token.prototype.clone = function (e) {
						return new R.Token(
							(e =
								e ||
								function (e) {
									return e;
								})(this.str, this.metadata),
							this.metadata
						);
					}),
					(R.tokenizer = function (e, t) {
						if (null == e || e == undefined) return [];
						if (Array.isArray(e))
							return e.map(function (e) {
								return new R.Token(R.utils.asString(e).toLowerCase(), R.utils.clone(t));
							});
						for (var n = e.toString().trim().toLowerCase(), r = n.length, i = [], o = 0, a = 0; o <= r; o++) {
							var s,
								u = o - a;
							(!n.charAt(o).match(R.tokenizer.separator) && o != r) || (0 < u && (((s = R.utils.clone(t) || {}).position = [a, u]), (s.index = i.length), i.push(new R.Token(n.slice(a, o), s))), (a = o + 1));
						}
						return i;
					}),
					(R.tokenizer.separator = /[\s\-]+/),
					(R.Pipeline = function () {
						this._stack = [];
					}),
					(R.Pipeline.registeredFunctions = Object.create(null)),
					(R.Pipeline.registerFunction = function (e, t) {
						t in this.registeredFunctions && R.utils.warn("Overwriting existing registered function: " + t), (e.label = t), (R.Pipeline.registeredFunctions[e.label] = e);
					}),
					(R.Pipeline.warnIfFunctionNotRegistered = function (e) {
						(e.label && e.label in this.registeredFunctions) || R.utils.warn("Function is not registered with pipeline. This may cause problems when serialising the index.\n", e);
					}),
					(R.Pipeline.load = function (e) {
						var n = new R.Pipeline();
						return (
							e.forEach(function (e) {
								var t = R.Pipeline.registeredFunctions[e];
								if (!t) throw new Error("Cannot load unregistered function: " + e);
								n.add(t);
							}),
							n
						);
					}),
					(R.Pipeline.prototype.add = function () {
						Array.prototype.slice.call(arguments).forEach(function (e) {
							R.Pipeline.warnIfFunctionNotRegistered(e), this._stack.push(e);
						}, this);
					}),
					(R.Pipeline.prototype.after = function (e, t) {
						R.Pipeline.warnIfFunctionNotRegistered(t);
						e = this._stack.indexOf(e);
						if (-1 == e) throw new Error("Cannot find existingFn");
						this._stack.splice((e += 1), 0, t);
					}),
					(R.Pipeline.prototype.before = function (e, t) {
						R.Pipeline.warnIfFunctionNotRegistered(t);
						e = this._stack.indexOf(e);
						if (-1 == e) throw new Error("Cannot find existingFn");
						this._stack.splice(e, 0, t);
					}),
					(R.Pipeline.prototype.remove = function (e) {
						e = this._stack.indexOf(e);
						-1 != e && this._stack.splice(e, 1);
					}),
					(R.Pipeline.prototype.run = function (e) {
						for (var t = this._stack.length, n = 0; n < t; n++) {
							for (var r = this._stack[n], i = [], o = 0; o < e.length; o++) {
								var a = r(e[o], o, e);
								if (void 0 !== a && "" !== a)
									if (Array.isArray(a)) for (var s = 0; s < a.length; s++) i.push(a[s]);
									else i.push(a);
							}
							e = i;
						}
						return e;
					}),
					(R.Pipeline.prototype.runString = function (e, t) {
						t = new R.Token(e, t);
						return this.run([t]).map(function (e) {
							return e.toString();
						});
					}),
					(R.Pipeline.prototype.reset = function () {
						this._stack = [];
					}),
					(R.Pipeline.prototype.toJSON = function () {
						return this._stack.map(function (e) {
							return R.Pipeline.warnIfFunctionNotRegistered(e), e.label;
						});
					}),
					(R.Vector = function (e) {
						(this._magnitude = 0), (this.elements = e || []);
					}),
					(R.Vector.prototype.positionForIndex = function (e) {
						if (0 == this.elements.length) return 0;
						for (var t = 0, n = this.elements.length / 2, r = n - t, i = Math.floor(r / 2), o = this.elements[2 * i]; 1 < r && (o < e && (t = i), e < o && (n = i), o != e); )
							(r = n - t), (i = t + Math.floor(r / 2)), (o = this.elements[2 * i]);
						return o == e || e < o ? 2 * i : o < e ? 2 * (i + 1) : void 0;
					}),
					(R.Vector.prototype.insert = function (e, t) {
						this.upsert(e, t, function () {
							throw "duplicate index";
						});
					}),
					(R.Vector.prototype.upsert = function (e, t, n) {
						this._magnitude = 0;
						var r = this.positionForIndex(e);
						this.elements[r] == e ? (this.elements[r + 1] = n(this.elements[r + 1], t)) : this.elements.splice(r, 0, e, t);
					}),
					(R.Vector.prototype.magnitude = function () {
						if (this._magnitude) return this._magnitude;
						for (var e = 0, t = this.elements.length, n = 1; n < t; n += 2) {
							var r = this.elements[n];
							e += r * r;
						}
						return (this._magnitude = Math.sqrt(e));
					}),
					(R.Vector.prototype.dot = function (e) {
						for (var t, n, r = 0, i = this.elements, o = e.elements, a = i.length, s = o.length, u = 0, c = 0; u < a && c < s; )
							(t = i[u]) < (n = o[c]) ? (u += 2) : n < t ? (c += 2) : t == n && ((r += i[u + 1] * o[c + 1]), (u += 2), (c += 2));
						return r;
					}),
					(R.Vector.prototype.similarity = function (e) {
						return this.dot(e) / this.magnitude() || 0;
					}),
					(R.Vector.prototype.toArray = function () {
						for (var e = new Array(this.elements.length / 2), t = 1, n = 0; t < this.elements.length; t += 2, n++) e[n] = this.elements[t];
						return e;
					}),
					(R.Vector.prototype.toJSON = function () {
						return this.elements;
					}),
					(R.stemmer =
						((c = {
							ational: "ate",
							tional: "tion",
							enci: "ence",
							anci: "ance",
							izer: "ize",
							bli: "ble",
							alli: "al",
							entli: "ent",
							eli: "e",
							ousli: "ous",
							ization: "ize",
							ation: "ate",
							ator: "ate",
							alism: "al",
							iveness: "ive",
							fulness: "ful",
							ousness: "ous",
							aliti: "al",
							iviti: "ive",
							biliti: "ble",
							logi: "log",
						}),
						(l = { icate: "ic", ative: "", alize: "al", iciti: "ic", ical: "ic", ful: "", ness: "" }),
						(n = "[aeiouy]"),
						(e = "[^aeiou][^aeiouy]*"),
						(d = new RegExp("^([^aeiou][^aeiouy]*)?[aeiouy][aeiou]*[^aeiou][^aeiouy]*")),
						(f = new RegExp("^([^aeiou][^aeiouy]*)?[aeiouy][aeiou]*[^aeiou][^aeiouy]*[aeiouy][aeiou]*[^aeiou][^aeiouy]*")),
						(p = new RegExp("^([^aeiou][^aeiouy]*)?[aeiouy][aeiou]*[^aeiou][^aeiouy]*([aeiouy][aeiou]*)?$")),
						(h = new RegExp("^([^aeiou][^aeiouy]*)?[aeiouy]")),
						(m = /^(.+?)(ss|i)es$/),
						(y = /^(.+?)([^s])s$/),
						(g = /^(.+?)eed$/),
						(v = /^(.+?)(ed|ing)$/),
						(b = /.$/),
						(w = /(at|bl|iz)$/),
						(x = new RegExp("([^aeiouylsz])\\1$")),
						(E = new RegExp("^" + e + n + "[^aeiouwxy]$")),
						(S = /^(.+?[^aeiou])y$/),
						(k = /^(.+?)(ational|tional|enci|anci|izer|bli|alli|entli|eli|ousli|ization|ation|ator|alism|iveness|fulness|ousness|aliti|iviti|biliti|logi)$/),
						(T = /^(.+?)(icate|ative|alize|iciti|ical|ful|ness)$/),
						(_ = /^(.+?)(al|ance|ence|er|ic|able|ible|ant|ement|ment|ent|ou|ism|ate|iti|ous|ive|ize)$/),
						(O = /^(.+?)(s|t)(ion)$/),
						(L = /^(.+?)e$/),
						(C = /ll$/),
						(j = new RegExp("^" + e + n + "[^aeiouwxy]$")),
						(A = function A(e) {
							var t, n, r, i, o, a, s, u;
							return e.length < 3
								? e
								: ("y" == (n = e.substr(0, 1)) && (e = n.toUpperCase() + e.substr(1)),
									(s = y),
									(o = m).test(e) ? (e = e.replace(o, "$1$2")) : s.test(e) && (e = e.replace(s, "$1$2")),
									(s = v),
									(o = g).test(e)
										? ((u = o.exec(e)), (o = d).test(u[1]) && (e = e.replace((o = b), "")))
										: s.test(e) && ((a = (u = s.exec(e))[1]), (s = h).test(a) && ((r = x), (i = E), (s = w).test((e = a)) ? (e += "e") : r.test(e) ? (e = e.replace((o = b), "")) : i.test(e) && (e += "e"))),
									(o = S).test(e) && (e = (a = (u = o.exec(e))[1]) + "i"),
									(o = k).test(e) && ((a = (u = o.exec(e))[1]), (t = u[2]), (o = d).test(a) && (e = a + c[t])),
									(o = T).test(e) && ((a = (u = o.exec(e))[1]), (t = u[2]), (o = d).test(a) && (e = a + l[t])),
									(s = O),
									(o = _).test(e) ? ((a = (u = o.exec(e))[1]), (o = f).test(a) && (e = a)) : s.test(e) && ((a = (u = s.exec(e))[1] + u[2]), (s = f).test(a) && (e = a)),
									(o = L).test(e) && ((a = (u = o.exec(e))[1]), (s = p), (r = j), ((o = f).test(a) || (s.test(a) && !r.test(a))) && (e = a)),
									(s = f),
									(o = C).test(e) && s.test(e) && (e = e.replace((o = b), "")),
									"y" == n ? n.toLowerCase() + e.substr(1) : e);
						}),
						function (e) {
							return e.update(A);
						})),
					R.Pipeline.registerFunction(R.stemmer, "stemmer"),
					(R.generateStopWordFilter = function (e) {
						var t = e.reduce(function (e, t) {
							return (e[t] = t), e;
						}, {});
						return function (e) {
							if (e && t[e.toString()] !== e.toString()) return e;
						};
					}),
					(R.stopWordFilter = R.generateStopWordFilter([
						"a",
						"able",
						"about",
						"across",
						"after",
						"all",
						"almost",
						"also",
						"am",
						"among",
						"an",
						"and",
						"any",
						"are",
						"as",
						"at",
						"be",
						"because",
						"been",
						"but",
						"by",
						"can",
						"cannot",
						"could",
						"dear",
						"did",
						"do",
						"does",
						"either",
						"else",
						"ever",
						"every",
						"for",
						"from",
						"get",
						"got",
						"had",
						"has",
						"have",
						"he",
						"her",
						"hers",
						"him",
						"his",
						"how",
						"however",
						"i",
						"if",
						"in",
						"into",
						"is",
						"it",
						"its",
						"just",
						"least",
						"let",
						"like",
						"likely",
						"may",
						"me",
						"might",
						"most",
						"must",
						"my",
						"neither",
						"no",
						"nor",
						"not",
						"of",
						"off",
						"often",
						"on",
						"only",
						"or",
						"other",
						"our",
						"own",
						"rather",
						"said",
						"say",
						"says",
						"she",
						"should",
						"since",
						"so",
						"some",
						"than",
						"that",
						"the",
						"their",
						"them",
						"then",
						"there",
						"these",
						"they",
						"this",
						"tis",
						"to",
						"too",
						"twas",
						"us",
						"wants",
						"was",
						"we",
						"were",
						"what",
						"when",
						"where",
						"which",
						"while",
						"who",
						"whom",
						"why",
						"will",
						"with",
						"would",
						"yet",
						"you",
						"your",
					])),
					R.Pipeline.registerFunction(R.stopWordFilter, "stopWordFilter"),
					(R.trimmer = function (e) {
						return e.update(function (e) {
							return e.replace(/^\W+/, "").replace(/\W+$/, "");
						});
					}),
					R.Pipeline.registerFunction(R.trimmer, "trimmer"),
					(R.TokenSet = function () {
						(this["final"] = !1), (this.edges = {}), (this.id = R.TokenSet._nextId), (R.TokenSet._nextId += 1);
					}),
					(R.TokenSet._nextId = 1),
					(R.TokenSet.fromArray = function (e) {
						for (var t = new R.TokenSet.Builder(), n = 0, r = e.length; n < r; n++) t.insert(e[n]);
						return t.finish(), t.root;
					}),
					(R.TokenSet.fromClause = function (e) {
						return "editDistance" in e ? R.TokenSet.fromFuzzyString(e.term, e.editDistance) : R.TokenSet.fromString(e.term);
					}),
					(R.TokenSet.fromFuzzyString = function (e, t) {
						for (var n = new R.TokenSet(), r = [{ node: n, editsRemaining: t, str: e }]; r.length; ) {
							var i,
								o,
								a,
								s,
								u,
								c,
								l = r.pop();
							0 < l.str.length &&
								((u = l.str.charAt(0)) in l.node.edges ? (i = l.node.edges[u]) : ((i = new R.TokenSet()), (l.node.edges[u] = i)),
								1 == l.str.length && (i["final"] = !0),
								r.push({ node: i, editsRemaining: l.editsRemaining, str: l.str.slice(1) })),
								0 != l.editsRemaining &&
									("*" in l.node.edges ? (o = l.node.edges["*"]) : ((o = new R.TokenSet()), (l.node.edges["*"] = o)),
									0 == l.str.length && (o["final"] = !0),
									r.push({ node: o, editsRemaining: l.editsRemaining - 1, str: l.str }),
									1 < l.str.length && r.push({ node: l.node, editsRemaining: l.editsRemaining - 1, str: l.str.slice(1) }),
									1 == l.str.length && (l.node["final"] = !0),
									1 <= l.str.length &&
										("*" in l.node.edges ? (a = l.node.edges["*"]) : ((a = new R.TokenSet()), (l.node.edges["*"] = a)), 1 == l.str.length && (a["final"] = !0), r.push({ node: a, editsRemaining: l.editsRemaining - 1, str: l.str.slice(1) })),
									1 < l.str.length &&
										((s = l.str.charAt(0)),
										(u = l.str.charAt(1)) in l.node.edges ? (c = l.node.edges[u]) : ((c = new R.TokenSet()), (l.node.edges[u] = c)),
										1 == l.str.length && (c["final"] = !0),
										r.push({ node: c, editsRemaining: l.editsRemaining - 1, str: s + l.str.slice(2) })));
						}
						return n;
					}),
					(R.TokenSet.fromString = function (e) {
						for (var t = new R.TokenSet(), n = t, r = 0, i = e.length; r < i; r++) {
							var o,
								a = e[r],
								s = r == i - 1;
							"*" == a ? ((t.edges[a] = t)["final"] = s) : (((o = new R.TokenSet())["final"] = s), (t.edges[a] = o), (t = o));
						}
						return n;
					}),
					(R.TokenSet.prototype.toArray = function () {
						for (var e = [], t = [{ prefix: "", node: this }]; t.length; ) {
							var n = t.pop(),
								r = Object.keys(n.node.edges),
								i = r.length;
							n.node["final"] && (n.prefix.charAt(0), e.push(n.prefix));
							for (var o = 0; o < i; o++) {
								var a = r[o];
								t.push({ prefix: n.prefix.concat(a), node: n.node.edges[a] });
							}
						}
						return e;
					}),
					(R.TokenSet.prototype.toString = function () {
						if (this._str) return this._str;
						for (var e = this["final"] ? "1" : "0", t = Object.keys(this.edges).sort(), n = t.length, r = 0; r < n; r++) var i = t[r], e = e + i + this.edges[i].id;
						return e;
					}),
					(R.TokenSet.prototype.intersect = function (e) {
						for (var t = new R.TokenSet(), n = undefined, r = [{ qNode: e, output: t, node: this }]; r.length; )
							for (var n = r.pop(), i = Object.keys(n.qNode.edges), o = i.length, a = Object.keys(n.node.edges), s = a.length, u = 0; u < o; u++)
								for (var c = i[u], l = 0; l < s; l++) {
									var d,
										f,
										p,
										h,
										m = a[l];
									(m != c && "*" != c) ||
										((d = n.node.edges[m]),
										(f = n.qNode.edges[c]),
										(p = d["final"] && f["final"]),
										(h = undefined),
										m in n.output.edges ? ((h = n.output.edges[m])["final"] = h["final"] || p) : (((h = new R.TokenSet())["final"] = p), (n.output.edges[m] = h)),
										r.push({ qNode: f, output: h, node: d }));
								}
						return t;
					}),
					(R.TokenSet.Builder = function () {
						(this.previousWord = ""), (this.root = new R.TokenSet()), (this.uncheckedNodes = []), (this.minimizedNodes = {});
					}),
					(R.TokenSet.Builder.prototype.insert = function (e) {
						var t = 0;
						if (e < this.previousWord) throw new Error("Out of order word insertion");
						for (var n = 0; n < e.length && n < this.previousWord.length && e[n] == this.previousWord[n]; n++) t++;
						this.minimize(t);
						for (var r = 0 == this.uncheckedNodes.length ? this.root : this.uncheckedNodes[this.uncheckedNodes.length - 1].child, n = t; n < e.length; n++) {
							var i = new R.TokenSet(),
								o = e[n];
							(r.edges[o] = i), this.uncheckedNodes.push({ parent: r, char: o, child: i }), (r = i);
						}
						(r["final"] = !0), (this.previousWord = e);
					}),
					(R.TokenSet.Builder.prototype.finish = function () {
						this.minimize(0);
					}),
					(R.TokenSet.Builder.prototype.minimize = function (e) {
						for (var t = this.uncheckedNodes.length - 1; e <= t; t--) {
							var n = this.uncheckedNodes[t],
								r = n.child.toString();
							r in this.minimizedNodes ? (n.parent.edges[n["char"]] = this.minimizedNodes[r]) : ((n.child._str = r), (this.minimizedNodes[r] = n.child)), this.uncheckedNodes.pop();
						}
					}),
					(R.Index = function (e) {
						(this.invertedIndex = e.invertedIndex), (this.fieldVectors = e.fieldVectors), (this.tokenSet = e.tokenSet), (this.fields = e.fields), (this.pipeline = e.pipeline);
					}),
					(R.Index.prototype.search = function (t) {
						return this.query(function (e) {
							new R.QueryParser(t, e).parse();
						});
					}),
					(R.Index.prototype.query = function (e) {
						for (var t = new R.Query(this.fields), n = Object.create(null), r = Object.create(null), i = Object.create(null), o = Object.create(null), a = Object.create(null), s = 0; s < this.fields.length; s++)
							r[this.fields[s]] = new R.Vector();
						e.call(t, t);
						for (s = 0; s < t.clauses.length; s++) {
							for (var u = t.clauses[s], c = null, l = R.Set.complete, c = u.usePipeline ? this.pipeline.runString(u.term, { fields: u.fields }) : [u.term], d = 0; d < c.length; d++) {
								var f = c[d];
								u.term = f;
								var f = R.TokenSet.fromClause(u),
									p = this.tokenSet.intersect(f).toArray();
								if (0 === p.length && u.presence === R.Query.presence.REQUIRED) {
									for (var h = 0; h < u.fields.length; h++) o[(O = u.fields[h])] = R.Set.empty;
									break;
								}
								for (var m = 0; m < p.length; m++)
									for (var y = p[m], g = this.invertedIndex[y], v = g._index, h = 0; h < u.fields.length; h++) {
										var b = g[(O = u.fields[h])],
											w = Object.keys(b),
											x = y + "/" + O,
											E = new R.Set(w);
										if ((u.presence == R.Query.presence.REQUIRED && ((l = l.union(E)), o[O] === undefined && (o[O] = R.Set.complete)), u.presence != R.Query.presence.PROHIBITED)) {
											if (
												(r[O].upsert(v, u.boost, function (e, t) {
													return e + t;
												}),
												!i[x])
											) {
												for (var S = 0; S < w.length; S++) {
													var k = w[S],
														T = new R.FieldRef(k, O),
														_ = b[k];
													(k = n[T]) === undefined ? (n[T] = new R.MatchData(y, O, _)) : k.add(y, O, _);
												}
												i[x] = !0;
											}
										} else a[O] === undefined && (a[O] = R.Set.empty), (a[O] = a[O].union(E));
									}
							}
							if (u.presence === R.Query.presence.REQUIRED) for (h = 0; h < u.fields.length; h++) o[(O = u.fields[h])] = o[O].intersect(l);
						}
						for (var O, L = R.Set.complete, C = R.Set.empty, s = 0; s < this.fields.length; s++) o[(O = this.fields[s])] && (L = L.intersect(o[O])), a[O] && (C = C.union(a[O]));
						var j = Object.keys(n),
							A = [],
							I = Object.create(null);
						if (t.isNegated())
							for (j = Object.keys(this.fieldVectors), s = 0; s < j.length; s++) {
								var T = j[s],
									N = R.FieldRef.fromString(T);
								n[T] = new R.MatchData();
							}
						for (s = 0; s < j.length; s++) {
							var P,
								M,
								F = (N = R.FieldRef.fromString(j[s])).docRef;
							L.contains(F) &&
								(C.contains(F) ||
									((P = this.fieldVectors[N]), (M = r[N.fieldName].similarity(P)), (P = I[F]) !== undefined ? ((P.score += M), P.matchData.combine(n[N])) : ((M = { ref: F, score: M, matchData: n[N] }), (I[F] = M), A.push(M))));
						}
						return A.sort(function (e, t) {
							return t.score - e.score;
						});
					}),
					(R.Index.prototype.toJSON = function () {
						var e = Object.keys(this.invertedIndex)
								.sort()
								.map(function (e) {
									return [e, this.invertedIndex[e]];
								}, this),
							t = Object.keys(this.fieldVectors).map(function (e) {
								return [e, this.fieldVectors[e].toJSON()];
							}, this);
						return { version: R.version, fields: this.fields, fieldVectors: t, invertedIndex: e, pipeline: this.pipeline.toJSON() };
					}),
					(R.Index.load = function (e) {
						var t = {},
							n = {},
							r = e.fieldVectors,
							i = Object.create(null),
							o = e.invertedIndex,
							a = new R.TokenSet.Builder(),
							s = R.Pipeline.load(e.pipeline);
						e.version != R.version && R.utils.warn("Version mismatch when loading serialised index. Current version of lunr '" + R.version + "' does not match serialized index '" + e.version + "'");
						for (var u = 0; u < r.length; u++) {
							var c = (d = r[u])[0],
								l = d[1];
							n[c] = new R.Vector(l);
						}
						for (u = 0; u < o.length; u++) {
							var d,
								f = (d = o[u])[0],
								p = d[1];
							a.insert(f), (i[f] = p);
						}
						return a.finish(), (t.fields = e.fields), (t.fieldVectors = n), (t.invertedIndex = i), (t.tokenSet = a.root), (t.pipeline = s), new R.Index(t);
					}),
					(R.Builder = function () {
						(this._ref = "id"),
							(this._fields = Object.create(null)),
							(this._documents = Object.create(null)),
							(this.invertedIndex = Object.create(null)),
							(this.fieldTermFrequencies = {}),
							(this.fieldLengths = {}),
							(this.tokenizer = R.tokenizer),
							(this.pipeline = new R.Pipeline()),
							(this.searchPipeline = new R.Pipeline()),
							(this.documentCount = 0),
							(this._b = 0.75),
							(this._k1 = 1.2),
							(this.termIndex = 0),
							(this.metadataWhitelist = []);
					}),
					(R.Builder.prototype.ref = function (e) {
						this._ref = e;
					}),
					(R.Builder.prototype.field = function (e, t) {
						if (/\//.test(e)) throw new RangeError("Field '" + e + "' contains illegal character '/'");
						this._fields[e] = t || {};
					}),
					(R.Builder.prototype.b = function (e) {
						this._b = e < 0 ? 0 : 1 < e ? 1 : e;
					}),
					(R.Builder.prototype.k1 = function (e) {
						this._k1 = e;
					}),
					(R.Builder.prototype.add = function (e, t) {
						var n = e[this._ref],
							r = Object.keys(this._fields);
						(this._documents[n] = t || {}), (this.documentCount += 1);
						for (var i = 0; i < r.length; i++) {
							var o = r[i],
								a = this._fields[o].extractor,
								a = a ? a(e) : e[o],
								a = this.tokenizer(a, { fields: [o] }),
								s = this.pipeline.run(a),
								a = new R.FieldRef(n, o),
								u = Object.create(null);
							(this.fieldTermFrequencies[a] = u), (this.fieldLengths[a] = 0), (this.fieldLengths[a] += s.length);
							for (var c = 0; c < s.length; c++) {
								var l = s[c];
								if ((u[l] == undefined && (u[l] = 0), (u[l] += 1), this.invertedIndex[l] == undefined)) {
									var d = Object.create(null);
									(d._index = this.termIndex), (this.termIndex += 1);
									for (var f = 0; f < r.length; f++) d[r[f]] = Object.create(null);
									this.invertedIndex[l] = d;
								}
								this.invertedIndex[l][o][n] == undefined && (this.invertedIndex[l][o][n] = Object.create(null));
								for (var p = 0; p < this.metadataWhitelist.length; p++) {
									var h = this.metadataWhitelist[p],
										m = l.metadata[h];
									this.invertedIndex[l][o][n][h] == undefined && (this.invertedIndex[l][o][n][h] = []), this.invertedIndex[l][o][n][h].push(m);
								}
							}
						}
					}),
					(R.Builder.prototype.calculateAverageFieldLengths = function () {
						for (var e = Object.keys(this.fieldLengths), t = e.length, n = {}, r = {}, i = 0; i < t; i++) {
							var o = R.FieldRef.fromString(e[i]),
								a = o.fieldName;
							r[a] || (r[a] = 0), (r[a] += 1), n[a] || (n[a] = 0), (n[a] += this.fieldLengths[o]);
						}
						for (var s = Object.keys(this._fields), i = 0; i < s.length; i++) {
							var u = s[i];
							n[u] = n[u] / r[u];
						}
						this.averageFieldLength = n;
					}),
					(R.Builder.prototype.createFieldVectors = function () {
						for (var e = {}, t = Object.keys(this.fieldTermFrequencies), n = t.length, r = Object.create(null), i = 0; i < n; i++) {
							for (
								var o = R.FieldRef.fromString(t[i]),
									a = o.fieldName,
									s = this.fieldLengths[o],
									u = new R.Vector(),
									c = this.fieldTermFrequencies[o],
									l = Object.keys(c),
									d = l.length,
									f = this._fields[a].boost || 1,
									p = this._documents[o.docRef].boost || 1,
									h = 0;
								h < d;
								h++
							) {
								var m,
									y = l[h],
									g = c[y],
									v = this.invertedIndex[y]._index;
								r[y] === undefined ? ((m = R.idf(this.invertedIndex[y], this.documentCount)), (r[y] = m)) : (m = r[y]),
									(g = (m * ((this._k1 + 1) * g)) / (this._k1 * (1 - this._b + this._b * (s / this.averageFieldLength[a])) + g)),
									(g *= f),
									(g *= p),
									(g = Math.round(1e3 * g) / 1e3),
									u.insert(v, g);
							}
							e[o] = u;
						}
						this.fieldVectors = e;
					}),
					(R.Builder.prototype.createTokenSet = function () {
						this.tokenSet = R.TokenSet.fromArray(Object.keys(this.invertedIndex).sort());
					}),
					(R.Builder.prototype.build = function () {
						return (
							this.calculateAverageFieldLengths(),
							this.createFieldVectors(),
							this.createTokenSet(),
							new R.Index({ invertedIndex: this.invertedIndex, fieldVectors: this.fieldVectors, tokenSet: this.tokenSet, fields: Object.keys(this._fields), pipeline: this.searchPipeline })
						);
					}),
					(R.Builder.prototype.use = function (e) {
						var t = Array.prototype.slice.call(arguments, 1);
						t.unshift(this), e.apply(this, t);
					}),
					(R.MatchData = function (e, t, n) {
						for (var r = Object.create(null), i = Object.keys(n || {}), o = 0; o < i.length; o++) {
							var a = i[o];
							r[a] = n[a].slice();
						}
						(this.metadata = Object.create(null)), e !== undefined && ((this.metadata[e] = Object.create(null)), (this.metadata[e][t] = r));
					}),
					(R.MatchData.prototype.combine = function (e) {
						for (var t = Object.keys(e.metadata), n = 0; n < t.length; n++) {
							var r = t[n],
								i = Object.keys(e.metadata[r]);
							this.metadata[r] == undefined && (this.metadata[r] = Object.create(null));
							for (var o = 0; o < i.length; o++) {
								var a = i[o],
									s = Object.keys(e.metadata[r][a]);
								this.metadata[r][a] == undefined && (this.metadata[r][a] = Object.create(null));
								for (var u = 0; u < s.length; u++) {
									var c = s[u];
									this.metadata[r][a][c] == undefined ? (this.metadata[r][a][c] = e.metadata[r][a][c]) : (this.metadata[r][a][c] = this.metadata[r][a][c].concat(e.metadata[r][a][c]));
								}
							}
						}
					}),
					(R.MatchData.prototype.add = function (e, t, n) {
						if (!(e in this.metadata)) return (this.metadata[e] = Object.create(null)), void (this.metadata[e][t] = n);
						if (t in this.metadata[e])
							for (var r = Object.keys(n), i = 0; i < r.length; i++) {
								var o = r[i];
								o in this.metadata[e][t] ? (this.metadata[e][t][o] = this.metadata[e][t][o].concat(n[o])) : (this.metadata[e][t][o] = n[o]);
							}
						else this.metadata[e][t] = n;
					}),
					(R.Query = function (e) {
						(this.clauses = []), (this.allFields = e);
					}),
					(R.Query.wildcard = new String("*")),
					(R.Query.wildcard.NONE = 0),
					(R.Query.wildcard.LEADING = 1),
					(R.Query.wildcard.TRAILING = 2),
					(R.Query.presence = { OPTIONAL: 1, REQUIRED: 2, PROHIBITED: 3 }),
					(R.Query.prototype.clause = function (e) {
						return (
							"fields" in e || (e.fields = this.allFields),
							"boost" in e || (e.boost = 1),
							"usePipeline" in e || (e.usePipeline = !0),
							"wildcard" in e || (e.wildcard = R.Query.wildcard.NONE),
							e.wildcard & R.Query.wildcard.LEADING && e.term.charAt(0) != R.Query.wildcard && (e.term = "*" + e.term),
							e.wildcard & R.Query.wildcard.TRAILING && e.term.slice(-1) != R.Query.wildcard && (e.term = e.term + "*"),
							"presence" in e || (e.presence = R.Query.presence.OPTIONAL),
							this.clauses.push(e),
							this
						);
					}),
					(R.Query.prototype.isNegated = function () {
						for (var e = 0; e < this.clauses.length; e++) if (this.clauses[e].presence != R.Query.presence.PROHIBITED) return !1;
						return !0;
					}),
					(R.Query.prototype.term = function (e, t) {
						if (Array.isArray(e))
							return (
								e.forEach(function (e) {
									this.term(e, R.utils.clone(t));
								}, this),
								this
							);
						var n = t || {};
						return (n.term = e.toString()), this.clause(n), this;
					}),
					(R.QueryParseError = function (e, t, n) {
						(this.name = "QueryParseError"), (this.message = e), (this.start = t), (this.end = n);
					}),
					(R.QueryParseError.prototype = new Error()),
					(R.QueryLexer = function (e) {
						(this.lexemes = []), (this.str = e), (this.length = e.length), (this.pos = 0), (this.start = 0), (this.escapeCharPositions = []);
					}),
					(R.QueryLexer.prototype.run = function () {
						for (var e = R.QueryLexer.lexText; e; ) e = e(this);
					}),
					(R.QueryLexer.prototype.sliceString = function () {
						for (var e, t = [], n = this.start, r = (this.pos, 0); r < this.escapeCharPositions.length; r++) (e = this.escapeCharPositions[r]), t.push(this.str.slice(n, e)), (n = e + 1);
						return t.push(this.str.slice(n, this.pos)), (this.escapeCharPositions.length = 0), t.join("");
					}),
					(R.QueryLexer.prototype.emit = function (e) {
						this.lexemes.push({ type: e, str: this.sliceString(), start: this.start, end: this.pos }), (this.start = this.pos);
					}),
					(R.QueryLexer.prototype.escapeCharacter = function () {
						this.escapeCharPositions.push(this.pos - 1), (this.pos += 1);
					}),
					(R.QueryLexer.prototype.next = function () {
						if (this.pos >= this.length) return R.QueryLexer.EOS;
						var e = this.str.charAt(this.pos);
						return (this.pos += 1), e;
					}),
					(R.QueryLexer.prototype.width = function () {
						return this.pos - this.start;
					}),
					(R.QueryLexer.prototype.ignore = function () {
						this.start == this.pos && (this.pos += 1), (this.start = this.pos);
					}),
					(R.QueryLexer.prototype.backup = function () {
						--this.pos;
					}),
					(R.QueryLexer.prototype.acceptDigitRun = function () {
						for (var e, t; 47 < (t = (e = this.next()).charCodeAt(0)) && t < 58; );
						e != R.QueryLexer.EOS && this.backup();
					}),
					(R.QueryLexer.prototype.more = function () {
						return this.pos < this.length;
					}),
					(R.QueryLexer.EOS = "EOS"),
					(R.QueryLexer.FIELD = "FIELD"),
					(R.QueryLexer.TERM = "TERM"),
					(R.QueryLexer.EDIT_DISTANCE = "EDIT_DISTANCE"),
					(R.QueryLexer.BOOST = "BOOST"),
					(R.QueryLexer.PRESENCE = "PRESENCE"),
					(R.QueryLexer.lexField = function (e) {
						return e.backup(), e.emit(R.QueryLexer.FIELD), e.ignore(), R.QueryLexer.lexText;
					}),
					(R.QueryLexer.lexTerm = function (e) {
						if ((1 < e.width() && (e.backup(), e.emit(R.QueryLexer.TERM)), e.ignore(), e.more())) return R.QueryLexer.lexText;
					}),
					(R.QueryLexer.lexEditDistance = function (e) {
						return e.ignore(), e.acceptDigitRun(), e.emit(R.QueryLexer.EDIT_DISTANCE), R.QueryLexer.lexText;
					}),
					(R.QueryLexer.lexBoost = function (e) {
						return e.ignore(), e.acceptDigitRun(), e.emit(R.QueryLexer.BOOST), R.QueryLexer.lexText;
					}),
					(R.QueryLexer.lexEOS = function (e) {
						0 < e.width() && e.emit(R.QueryLexer.TERM);
					}),
					(R.QueryLexer.termSeparator = R.tokenizer.separator),
					(R.QueryLexer.lexText = function (e) {
						for (;;) {
							var t = e.next();
							if (t == R.QueryLexer.EOS) return R.QueryLexer.lexEOS;
							if (92 != t.charCodeAt(0)) {
								if (":" == t) return R.QueryLexer.lexField;
								if ("~" == t) return e.backup(), 0 < e.width() && e.emit(R.QueryLexer.TERM), R.QueryLexer.lexEditDistance;
								if ("^" == t) return e.backup(), 0 < e.width() && e.emit(R.QueryLexer.TERM), R.QueryLexer.lexBoost;
								if ("+" == t && 1 === e.width()) return e.emit(R.QueryLexer.PRESENCE), R.QueryLexer.lexText;
								if ("-" == t && 1 === e.width()) return e.emit(R.QueryLexer.PRESENCE), R.QueryLexer.lexText;
								if (t.match(R.QueryLexer.termSeparator)) return R.QueryLexer.lexTerm;
							} else e.escapeCharacter();
						}
					}),
					(R.QueryParser = function (e, t) {
						(this.lexer = new R.QueryLexer(e)), (this.query = t), (this.currentClause = {}), (this.lexemeIdx = 0);
					}),
					(R.QueryParser.prototype.parse = function () {
						this.lexer.run(), (this.lexemes = this.lexer.lexemes);
						for (var e = R.QueryParser.parseClause; e; ) e = e(this);
						return this.query;
					}),
					(R.QueryParser.prototype.peekLexeme = function () {
						return this.lexemes[this.lexemeIdx];
					}),
					(R.QueryParser.prototype.consumeLexeme = function () {
						var e = this.peekLexeme();
						return (this.lexemeIdx += 1), e;
					}),
					(R.QueryParser.prototype.nextClause = function () {
						var e = this.currentClause;
						this.query.clause(e), (this.currentClause = {});
					}),
					(R.QueryParser.parseClause = function (e) {
						var t = e.peekLexeme();
						if (t != undefined)
							switch (t.type) {
								case R.QueryLexer.PRESENCE:
									return R.QueryParser.parsePresence;
								case R.QueryLexer.FIELD:
									return R.QueryParser.parseField;
								case R.QueryLexer.TERM:
									return R.QueryParser.parseTerm;
								default:
									var n = "expected either a field or a term, found " + t.type;
									throw (1 <= t.str.length && (n += " with value '" + t.str + "'"), new R.QueryParseError(n, t.start, t.end));
							}
					}),
					(R.QueryParser.parsePresence = function (e) {
						var t = e.consumeLexeme();
						if (t != undefined) {
							switch (t.str) {
								case "-":
									e.currentClause.presence = R.Query.presence.PROHIBITED;
									break;
								case "+":
									e.currentClause.presence = R.Query.presence.REQUIRED;
									break;
								default:
									var n = "unrecognised presence operator'" + t.str + "'";
									throw new R.QueryParseError(n, t.start, t.end);
							}
							var r = e.peekLexeme();
							if (r == undefined) throw new R.QueryParseError((n = "expecting term or field, found nothing"), t.start, t.end);
							switch (r.type) {
								case R.QueryLexer.FIELD:
									return R.QueryParser.parseField;
								case R.QueryLexer.TERM:
									return R.QueryParser.parseTerm;
								default:
									n = "expecting term or field, found '" + r.type + "'";
									throw new R.QueryParseError(n, r.start, r.end);
							}
						}
					}),
					(R.QueryParser.parseField = function (e) {
						var t = e.consumeLexeme();
						if (t != undefined) {
							if (-1 == e.query.allFields.indexOf(t.str)) {
								var n = e.query.allFields
										.map(function (e) {
											return "'" + e + "'";
										})
										.join(", "),
									n = "unrecognised field '" + t.str + "', possible fields: " + n;
								throw new R.QueryParseError(n, t.start, t.end);
							}
							e.currentClause.fields = [t.str];
							e = e.peekLexeme();
							if (e == undefined) throw new R.QueryParseError((n = "expecting term, found nothing"), t.start, t.end);
							if (e.type === R.QueryLexer.TERM) return R.QueryParser.parseTerm;
							n = "expecting term, found '" + e.type + "'";
							throw new R.QueryParseError(n, e.start, e.end);
						}
					}),
					(R.QueryParser.parseTerm = function (e) {
						var t = e.consumeLexeme();
						if (t != undefined) {
							(e.currentClause.term = t.str.toLowerCase()), -1 != t.str.indexOf("*") && (e.currentClause.usePipeline = !1);
							var n = e.peekLexeme();
							if (n != undefined)
								switch (n.type) {
									case R.QueryLexer.TERM:
										return e.nextClause(), R.QueryParser.parseTerm;
									case R.QueryLexer.FIELD:
										return e.nextClause(), R.QueryParser.parseField;
									case R.QueryLexer.EDIT_DISTANCE:
										return R.QueryParser.parseEditDistance;
									case R.QueryLexer.BOOST:
										return R.QueryParser.parseBoost;
									case R.QueryLexer.PRESENCE:
										return e.nextClause(), R.QueryParser.parsePresence;
									default:
										var r = "Unexpected lexeme type '" + n.type + "'";
										throw new R.QueryParseError(r, n.start, n.end);
								}
							else e.nextClause();
						}
					}),
					(R.QueryParser.parseEditDistance = function (e) {
						var t = e.consumeLexeme();
						if (t != undefined) {
							var n = parseInt(t.str, 10);
							if (isNaN(n)) throw new R.QueryParseError((i = "edit distance must be numeric"), t.start, t.end);
							e.currentClause.editDistance = n;
							var r = e.peekLexeme();
							if (r != undefined)
								switch (r.type) {
									case R.QueryLexer.TERM:
										return e.nextClause(), R.QueryParser.parseTerm;
									case R.QueryLexer.FIELD:
										return e.nextClause(), R.QueryParser.parseField;
									case R.QueryLexer.EDIT_DISTANCE:
										return R.QueryParser.parseEditDistance;
									case R.QueryLexer.BOOST:
										return R.QueryParser.parseBoost;
									case R.QueryLexer.PRESENCE:
										return e.nextClause(), R.QueryParser.parsePresence;
									default:
										var i = "Unexpected lexeme type '" + r.type + "'";
										throw new R.QueryParseError(i, r.start, r.end);
								}
							else e.nextClause();
						}
					}),
					(R.QueryParser.parseBoost = function (e) {
						var t = e.consumeLexeme();
						if (t != undefined) {
							var n = parseInt(t.str, 10);
							if (isNaN(n)) throw new R.QueryParseError((i = "boost must be numeric"), t.start, t.end);
							e.currentClause.boost = n;
							var r = e.peekLexeme();
							if (r != undefined)
								switch (r.type) {
									case R.QueryLexer.TERM:
										return e.nextClause(), R.QueryParser.parseTerm;
									case R.QueryLexer.FIELD:
										return e.nextClause(), R.QueryParser.parseField;
									case R.QueryLexer.EDIT_DISTANCE:
										return R.QueryParser.parseEditDistance;
									case R.QueryLexer.BOOST:
										return R.QueryParser.parseBoost;
									case R.QueryLexer.PRESENCE:
										return e.nextClause(), R.QueryParser.parsePresence;
									default:
										var i = "Unexpected lexeme type '" + r.type + "'";
										throw new R.QueryParseError(i, r.start, r.end);
								}
							else e.nextClause();
						}
					}),
					(n = function () {
						return R;
					}),
					"function" == typeof undefined && undefined.amd ? undefined(n) : (r.exports = R);
			})();
		});
	function q(e) {
		(window.dataLayer = window.dataLayer || []), window.dataLayer.push(e);
	}
	function z(e) {
		return (e = (e = (e = (e = e.replace(/[^\s=/?&]+(?:@|%40)[^\s=/?&]+/g, "[REDACTED EMAIL]")).replace(/\b[A-PR-UWYZ][A-HJ-Z]?[0-9][0-9A-HJKMNPR-Y]?(?:[\s+]|%20)*[0-9](?!refund)[ABD-HJLNPQ-Z]{2,3}\b/gi, "[REDACTED POSTCODE]")).replace(
			/^\s*[a-zA-Z]{2}(?:\s*\d\s*){6}[a-zA-Z]?\s*$/g,
			"[REDACTED NI NUMBER]"
		)).replace(/[0-9]+/g, "[REDACTED NUMBER]"));
	}
	var H = null,
		V = null,
		W = null,
		U = "",
		G = function () {},
		J = [],
		K = null;
	function Y(e) {
		this.$module = e;
	}
	(Y.prototype.fetchSearchIndex = function (e, t) {
		var n = new XMLHttpRequest();
		n.open("GET", e, !0),
			(n.timeout = 1e4),
			(W = "Loading search index"),
			(n.onreadystatechange = function () {
				var e;
				4 === n.readyState && (200 === n.status ? ((e = n.responseText), (e = JSON.parse(e)), (W = "No results found"), (H = $.Index.load(e.index)), (V = e.store), t(e)) : (W = "Failed to load the search index"));
			}),
			n.send();
	}),
		(Y.prototype.renderResults = function () {
			if (!H || !V) return G(J);
			var e = H.query(function (e) {
				e.term($.tokenizer(U), { wildcard: $.Query.wildcard.TRAILING });
			});
			(J = e.map(function (e) {
				return V[e.ref];
			})),
				G(J);
		}),
		(Y.prototype.handleSearchQuery = function (e, t) {
			(U = e),
				(G = t),
				clearTimeout(K),
				(K = setTimeout(
					function () {
						var e, t, n;
						(e = U),
							(t = J),
							window.DO_NOT_TRACK_ENABLED ||
								((n = z(e)),
								(e = 0 < t.length),
								(t = t.map(function (e, t) {
									return { name: e.title, category: e.section, list: n, position: t + 1 };
								})),
								q({ event: "site-search", eventDetails: { category: "site search", action: e ? "results" : "no result", label: n }, ecommerce: { impressions: t } }));
					},
					void 0 !== (t = window.__SITE_SEARCH_TRACKING_TIMEOUT) ? t : 2e3
				)),
				this.renderResults();
		}),
		(Y.prototype.handleOnConfirm = function (e) {
			var t,
				n,
				r,
				i,
				o = e.path;
			o &&
				((t = U),
				(n = J),
				(r = e),
				window.DO_NOT_TRACK_ENABLED ||
					((i = z(t)),
					(n = n
						.map(function (e, t) {
							return { name: e.title, category: e.section, list: i, position: t + 1 };
						})
						.filter(function (e) {
							return e.name === r.title;
						})),
					q({ event: "site-search", eventDetails: { category: "site search", action: "click", label: i + " | " + r.title }, ecommerce: { click: { actionField: { list: i }, products: n } } })),
				(window.location.href = "/" + o));
		}),
		(Y.prototype.inputValueTemplate = function (e) {
			if (e) return e.title;
		}),
		(Y.prototype.resultTemplate = function (e) {
			if (e) {
				var t,
					n,
					r = document.createElement("span"),
					i = e.title;
				(r.textContent = i),
					e.aliases &&
						((t = e.aliases.split(",").map(function (e) {
							return e.trim();
						})),
						(n = []),
						0 <
							(n =
								-1 === i.toLowerCase().indexOf(U)
									? t.filter(function (e) {
											return -1 !== e.toLowerCase().indexOf(U.toLowerCase());
										})
									: n).length && (((o = document.createElement("span")).className = "app-site-search__aliases"), (o.textContent = n.join(", ")), r.appendChild(o)));
				var o = document.createElement("span");
				return (o.className = "app-site-search--section"), (o.innerHTML = e.section), r.appendChild(o), r.innerHTML;
			}
		}),
		(Y.prototype.init = function () {
			var e = this.$module;
			e &&
				"querySelector" in document &&
				"addEventListener" in window &&
				!(!Array.prototype || !Array.prototype.forEach) &&
				(B({
					element: e,
					id: "app-site-search__input",
					cssNamespace: "app-site-search",
					displayMenu: "overlay",
					placeholder: "Search",
					confirmOnBlur: !1,
					autoselect: !0,
					source: this.handleSearchQuery.bind(this),
					onConfirm: this.handleOnConfirm,
					templates: { inputValue: this.inputValueTemplate, suggestion: this.resultTemplate },
					tNoResults: function () {
						return W;
					},
				}),
				e.querySelector(".app-site-search__input").addEventListener("blur", function (e) {
					clearTimeout(K);
				}),
				(e = e.getAttribute("data-search-index")),
				this.fetchSearchIndex(
					e,
					function () {
						this.renderResults();
					}.bind(this)
				));
		});
	var X = {
			init: function () {
				X.expandMacroOptions();
			},
			expandMacroOptions: function () {
				var e,
					t,
					n,
					r,
					i,
					o,
					a,
					s = window.location.hash;
				s.match("^#options-") &&
					((a = s.split("#options-")[1]),
					(a = (e = -1 < s.indexOf("--")) ? a.split("--")[0] : a) &&
						((n = (t = document.querySelector('a[href="#' + a + '-nunjucks"]')) ? t.parentNode : null),
						(r = document.getElementById("options-" + a + "-details")),
						n &&
							r &&
							((i = r.parentNode),
							(o = r.querySelector(".govuk-details__summary")),
							(a = r.querySelector(".govuk-details__text")),
							o &&
								a &&
								(t.setAttribute("aria-expanded", !0),
								(n.className += " app-tabs__item--current"),
								i.classList.remove("app-tabs__container--hidden"),
								i.setAttribute("aria-hidden", !1),
								r.setAttribute("open", "open"),
								o.setAttribute("aria-expanded", !0),
								a.setAttribute("aria-hidden", !1),
								(a.style.display = ""),
								window.setTimeout(function () {
									t.focus(), e && document.querySelector(s).scrollIntoView();
								}, 0)))));
			},
		},
		Z = g.nodeListForEach;
	function ee(e) {
		this.$module = e;
	}
	(ee.prototype.init = function () {
		(this.$cookiePage = this.$module),
			this.$cookiePage &&
				((this.$cookieForm = this.$cookiePage.querySelector(".js-cookies-page-form")),
				(this.$cookieFormFieldsets = this.$cookieForm.querySelectorAll(".js-cookies-page-form-fieldset")),
				(this.$successNotification = this.$cookiePage.querySelector(".js-cookies-page-success")),
				Z(
					this.$cookieFormFieldsets,
					function (e) {
						this.showUserPreference(e, c()), e.removeAttribute("hidden");
					}.bind(this)
				),
				this.$cookieForm.querySelector(".js-cookies-form-button").removeAttribute("hidden"),
				this.$cookieForm.addEventListener("submit", this.savePreferences.bind(this)));
	}),
		(ee.prototype.savePreferences = function (e) {
			e.preventDefault();
			var n = {};
			Z(
				this.$cookieFormFieldsets,
				function (e) {
					var t = this.getCookieType(e),
						e = e.querySelector("input[name=" + t + "]:checked").value;
					n[t] = "yes" === e;
				}.bind(this)
			),
				t(n),
				this.showSuccessNotification();
		}),
		(ee.prototype.showUserPreference = function (e, t) {
			var n = this.getCookieType(e),
				r = !1;
			n && t && t[n] !== undefined && (r = t[n]), (e.querySelector("input[name=" + n + "][value=" + (r ? "yes" : "no") + "]").checked = !0);
		}),
		(ee.prototype.showSuccessNotification = function () {
			this.$successNotification.removeAttribute("hidden"), this.$successNotification.getAttribute("tabindex") || this.$successNotification.setAttribute("tabindex", "-1"), this.$successNotification.focus(), window.scrollTo(0, 0);
		}),
		(ee.prototype.getCookieType = function (e) {
			return e.id;
		});
	var te = g.nodeListForEach;
	new b(document.querySelector('[data-module="govuk-cookie-banner"]')).init();
	g = c();
	g && l(g) && g.analytics && n(),
		te(document.querySelectorAll('[data-module="app-example-frame"]'), function (e) {
			new E(e).init();
		}),
		te(document.querySelectorAll('[data-module="app-tabs"]'), function (e) {
			new A(e).init();
		}),
		X.init(),
		te(document.querySelectorAll('[data-module="app-copy"]'), function (e) {
			new N(e).init();
		}),
		new D().init(),
		new Y(document.querySelector('[data-module="app-search"]')).init(),
		new w(document.querySelector('[data-module="app-back-to-top"]')).init(),
		new ee(document.querySelector('[data-module="app-cookies-page"]')).init();
})();

