if(function(e, t) {
        "use strict";
        "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function(e) {
            if(!e.document) throw new Error("jQuery requires a window with a document");
            return t(e)
        } : t(e)
    }("undefined" != typeof window ? window : this, function(e, t) {
        "use strict";

        function n(e, t) {
            t = t || te;
            var n = t.createElement("script");
            n.text = e, t.head.appendChild(n).parentNode.removeChild(n)
        }

        function a(e) {
            var t = !!e && "length" in e && e.length,
                n = pe.type(e);
            return "function" !== n && !pe.isWindow(e) && ("array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e)
        }

        function i(e, t, n) {
            return pe.isFunction(t) ? pe.grep(e, function(e, a) {
                return !!t.call(e, a, e) !== n
            }) : t.nodeType ? pe.grep(e, function(e) {
                return e === t !== n
            }) : "string" != typeof t ? pe.grep(e, function(e) {
                return oe.call(t, e) > -1 !== n
            }) : Se.test(t) ? pe.filter(t, e, n) : (t = pe.filter(t, e), pe.grep(e, function(e) {
                return oe.call(t, e) > -1 !== n && 1 === e.nodeType
            }))
        }

        function r(e, t) {
            for(;
                (e = e[t]) && 1 !== e.nodeType;);
            return e
        }

        function o(e) {
            var t = {};
            return pe.each(e.match(De) || [], function(e, n) {
                t[n] = !0
            }), t
        }

        function s(e) {
            return e
        }

        function l(e) {
            throw e
        }

        function c(e, t, n) {
            var a;
            try {
                e && pe.isFunction(a = e.promise) ? a.call(e).done(t).fail(n) : e && pe.isFunction(a = e.then) ? a.call(e, t, n) : t.call(void 0, e)
            } catch(e) {
                n.call(void 0, e)
            }
        }

        function u() {
            te.removeEventListener("DOMContentLoaded", u), e.removeEventListener("load", u), pe.ready()
        }

        function d() {
            this.expando = pe.expando + d.uid++
        }

        function f(e) {
            return "true" === e || "false" !== e && ("null" === e ? null : e === +e + "" ? +e : Fe.test(e) ? JSON.parse(e) : e)
        }

        function h(e, t, n) {
            var a;
            if(void 0 === n && 1 === e.nodeType)
                if(a = "data-" + t.replace(Ge, "-$&").toLowerCase(), n = e.getAttribute(a), "string" == typeof n) {
                    try {
                        n = f(n)
                    } catch(e) {}
                    Ie.set(e, t, n)
                } else n = void 0;
            return n
        }

        function p(e, t, n, a) {
            var i, r = 1,
                o = 20,
                s = a ? function() {
                    return a.cur()
                } : function() {
                    return pe.css(e, t, "")
                },
                l = s(),
                c = n && n[3] || (pe.cssNumber[t] ? "" : "px"),
                u = (pe.cssNumber[t] || "px" !== c && +l) && je.exec(pe.css(e, t));
            if(u && u[3] !== c) {
                c = c || u[3], n = n || [], u = +l || 1;
                do r = r || ".5", u /= r, pe.style(e, t, u + c); while (r !== (r = s() / l) && 1 !== r && --o)
            }
            return n && (u = +u || +l || 0, i = n[1] ? u + (n[1] + 1) * n[2] : +n[2], a && (a.unit = c, a.start = u, a.end = i)), i
        }

        function m(e) {
            var t, n = e.ownerDocument,
                a = e.nodeName,
                i = Ue[a];
            return i ? i : (t = n.body.appendChild(n.createElement(a)), i = pe.css(t, "display"), t.parentNode.removeChild(t), "none" === i && (i = "block"), Ue[a] = i, i)
        }

        function b(e, t) {
            for(var n, a, i = [], r = 0, o = e.length; r < o; r++) a = e[r], a.style && (n = a.style.display, t ? ("none" === n && (i[r] = _e.get(a, "display") || null, i[r] || (a.style.display = "")), "" === a.style.display && $e(a) && (i[r] = m(a))) : "none" !== n && (i[r] = "none", _e.set(a, "display", n)));
            for(r = 0; r < o; r++) null != i[r] && (e[r].style.display = i[r]);
            return e
        }

        function g(e, t) {
            var n;
            return n = "undefined" != typeof e.getElementsByTagName ? e.getElementsByTagName(t || "*") : "undefined" != typeof e.querySelectorAll ? e.querySelectorAll(t || "*") : [], void 0 === t || t && pe.nodeName(e, t) ? pe.merge([e], n) : n
        }

        function v(e, t) {
            for(var n = 0, a = e.length; n < a; n++) _e.set(e[n], "globalEval", !t || _e.get(t[n], "globalEval"))
        }

        function y(e, t, n, a, i) {
            for(var r, o, s, l, c, u, d = t.createDocumentFragment(), f = [], h = 0, p = e.length; h < p; h++)
                if(r = e[h], r || 0 === r)
                    if("object" === pe.type(r)) pe.merge(f, r.nodeType ? [r] : r);
                    else if(Je.test(r)) {
                for(o = o || d.appendChild(t.createElement("div")), s = (We.exec(r) || ["", ""])[1].toLowerCase(), l = Ke[s] || Ke._default, o.innerHTML = l[1] + pe.htmlPrefilter(r) + l[2], u = l[0]; u--;) o = o.lastChild;
                pe.merge(f, o.childNodes), o = d.firstChild, o.textContent = ""
            } else f.push(t.createTextNode(r));
            for(d.textContent = "", h = 0; r = f[h++];)
                if(a && pe.inArray(r, a) > -1) i && i.push(r);
                else if(c = pe.contains(r.ownerDocument, r), o = g(d.appendChild(r), "script"), c && v(o), n)
                for(u = 0; r = o[u++];) qe.test(r.type || "") && n.push(r);
            return d
        }

        function C() {
            return !0
        }

        function T() {
            return !1
        }

        function w() {
            try {
                return te.activeElement
            } catch(e) {}
        }

        function x(e, t, n, a, i, r) {
            var o, s;
            if("object" == typeof t) {
                "string" != typeof n && (a = a || n, n = void 0);
                for(s in t) x(e, s, n, a, t[s], r);
                return e
            }
            if(null == a && null == i ? (i = n, a = n = void 0) : null == i && ("string" == typeof n ? (i = a, a = void 0) : (i = a, a = n, n = void 0)), i === !1) i = T;
            else if(!i) return e;
            return 1 === r && (o = i, i = function(e) {
                return pe().off(e), o.apply(this, arguments)
            }, i.guid = o.guid || (o.guid = pe.guid++)), e.each(function() {
                pe.event.add(this, t, i, a, n)
            })
        }

        function S(e, t) {
            return pe.nodeName(e, "table") && pe.nodeName(11 !== t.nodeType ? t : t.firstChild, "tr") ? e.getElementsByTagName("tbody")[0] || e : e
        }

        function A(e) {
            return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e
        }

        function k(e) {
            var t = at.exec(e.type);
            return t ? e.type = t[1] : e.removeAttribute("type"), e
        }

        function M(e, t) {
            var n, a, i, r, o, s, l, c;
            if(1 === t.nodeType) {
                if(_e.hasData(e) && (r = _e.access(e), o = _e.set(t, r), c = r.events)) {
                    delete o.handle, o.events = {};
                    for(i in c)
                        for(n = 0, a = c[i].length; n < a; n++) pe.event.add(t, i, c[i][n])
                }
                Ie.hasData(e) && (s = Ie.access(e), l = pe.extend({}, s), Ie.set(t, l))
            }
        }

        function E(e, t) {
            var n = t.nodeName.toLowerCase();
            "input" === n && Ve.test(e.type) ? t.checked = e.checked : "input" !== n && "textarea" !== n || (t.defaultValue = e.defaultValue)
        }

        function B(e, t, a, i) {
            t = ie.apply([], t);
            var r, o, s, l, c, u, d = 0,
                f = e.length,
                h = f - 1,
                p = t[0],
                m = pe.isFunction(p);
            if(m || f > 1 && "string" == typeof p && !fe.checkClone && nt.test(p)) return e.each(function(n) {
                var r = e.eq(n);
                m && (t[0] = p.call(this, n, r.html())), B(r, t, a, i)
            });
            if(f && (r = y(t, e[0].ownerDocument, !1, e, i), o = r.firstChild, 1 === r.childNodes.length && (r = o), o || i)) {
                for(s = pe.map(g(r, "script"), A), l = s.length; d < f; d++) c = r, d !== h && (c = pe.clone(c, !0, !0), l && pe.merge(s, g(c, "script"))), a.call(e[d], c, d);
                if(l)
                    for(u = s[s.length - 1].ownerDocument, pe.map(s, k), d = 0; d < l; d++) c = s[d], qe.test(c.type || "") && !_e.access(c, "globalEval") && pe.contains(u, c) && (c.src ? pe._evalUrl && pe._evalUrl(c.src) : n(c.textContent.replace(it, ""), u))
            }
            return e
        }

        function D(e, t, n) {
            for(var a, i = t ? pe.filter(t, e) : e, r = 0; null != (a = i[r]); r++) n || 1 !== a.nodeType || pe.cleanData(g(a)), a.parentNode && (n && pe.contains(a.ownerDocument, a) && v(g(a, "script")), a.parentNode.removeChild(a));
            return e
        }

        function N(e, t, n) {
            var a, i, r, o, s = e.style;
            return n = n || st(e), n && (o = n.getPropertyValue(t) || n[t], "" !== o || pe.contains(e.ownerDocument, e) || (o = pe.style(e, t)), !fe.pixelMarginRight() && ot.test(o) && rt.test(t) && (a = s.width, i = s.minWidth, r = s.maxWidth, s.minWidth = s.maxWidth = s.width = o, o = n.width, s.width = a, s.minWidth = i, s.maxWidth = r)), void 0 !== o ? o + "" : o
        }

        function P(e, t) {
            return {
                get: function() {
                    return e() ? void delete this.get : (this.get = t).apply(this, arguments)
                }
            }
        }

        function L(e) {
            if(e in ft) return e;
            for(var t = e[0].toUpperCase() + e.slice(1), n = dt.length; n--;)
                if(e = dt[n] + t, e in ft) return e
        }

        function R(e, t, n) {
            var a = je.exec(t);
            return a ? Math.max(0, a[2] - (n || 0)) + (a[3] || "px") : t
        }

        function _(e, t, n, a, i) {
            var r, o = 0;
            for(r = n === (a ? "border" : "content") ? 4 : "width" === t ? 1 : 0; r < 4; r += 2) "margin" === n && (o += pe.css(e, n + ze[r], !0, i)), a ? ("content" === n && (o -= pe.css(e, "padding" + ze[r], !0, i)), "margin" !== n && (o -= pe.css(e, "border" + ze[r] + "Width", !0, i))) : (o += pe.css(e, "padding" + ze[r], !0, i), "padding" !== n && (o += pe.css(e, "border" + ze[r] + "Width", !0, i)));
            return o
        }

        function I(e, t, n) {
            var a, i = !0,
                r = st(e),
                o = "border-box" === pe.css(e, "boxSizing", !1, r);
            if(e.getClientRects().length && (a = e.getBoundingClientRect()[t]), a <= 0 || null == a) {
                if(a = N(e, t, r), (a < 0 || null == a) && (a = e.style[t]), ot.test(a)) return a;
                i = o && (fe.boxSizingReliable() || a === e.style[t]), a = parseFloat(a) || 0
            }
            return a + _(e, t, n || (o ? "border" : "content"), i, r) + "px"
        }

        function F(e, t, n, a, i) {
            return new F.prototype.init(e, t, n, a, i)
        }

        function G() {
            pt && (e.requestAnimationFrame(G), pe.fx.tick())
        }

        function O() {
            return e.setTimeout(function() {
                ht = void 0
            }), ht = pe.now()
        }

        function j(e, t) {
            var n, a = 0,
                i = {
                    height: e
                };
            for(t = t ? 1 : 0; a < 4; a += 2 - t) n = ze[a], i["margin" + n] = i["padding" + n] = e;
            return t && (i.opacity = i.width = e), i
        }

        function z(e, t, n) {
            for(var a, i = (U.tweeners[t] || []).concat(U.tweeners["*"]), r = 0, o = i.length; r < o; r++)
                if(a = i[r].call(n, t, e)) return a
        }

        function $(e, t, n) {
            var a, i, r, o, s, l, c, u, d = "width" in t || "height" in t,
                f = this,
                h = {},
                p = e.style,
                m = e.nodeType && $e(e),
                g = _e.get(e, "fxshow");
            n.queue || (o = pe._queueHooks(e, "fx"), null == o.unqueued && (o.unqueued = 0, s = o.empty.fire, o.empty.fire = function() {
                o.unqueued || s()
            }), o.unqueued++, f.always(function() {
                f.always(function() {
                    o.unqueued--, pe.queue(e, "fx").length || o.empty.fire()
                })
            }));
            for(a in t)
                if(i = t[a], mt.test(i)) {
                    if(delete t[a], r = r || "toggle" === i, i === (m ? "hide" : "show")) {
                        if("show" !== i || !g || void 0 === g[a]) continue;
                        m = !0
                    }
                    h[a] = g && g[a] || pe.style(e, a)
                }
            if(l = !pe.isEmptyObject(t), l || !pe.isEmptyObject(h)) {
                d && 1 === e.nodeType && (n.overflow = [p.overflow, p.overflowX, p.overflowY], c = g && g.display, null == c && (c = _e.get(e, "display")), u = pe.css(e, "display"), "none" === u && (c ? u = c : (b([e], !0), c = e.style.display || c, u = pe.css(e, "display"), b([e]))), ("inline" === u || "inline-block" === u && null != c) && "none" === pe.css(e, "float") && (l || (f.done(function() {
                    p.display = c
                }), null == c && (u = p.display, c = "none" === u ? "" : u)), p.display = "inline-block")), n.overflow && (p.overflow = "hidden", f.always(function() {
                    p.overflow = n.overflow[0], p.overflowX = n.overflow[1], p.overflowY = n.overflow[2]
                })), l = !1;
                for(a in h) l || (g ? "hidden" in g && (m = g.hidden) : g = _e.access(e, "fxshow", {
                    display: c
                }), r && (g.hidden = !m), m && b([e], !0), f.done(function() {
                    m || b([e]), _e.remove(e, "fxshow");
                    for(a in h) pe.style(e, a, h[a])
                })), l = z(m ? g[a] : 0, a, f), a in g || (g[a] = l.start, m && (l.end = l.start, l.start = 0))
            }
        }

        function H(e, t) {
            var n, a, i, r, o;
            for(n in e)
                if(a = pe.camelCase(n), i = t[a], r = e[n], pe.isArray(r) && (i = r[1], r = e[n] = r[0]), n !== a && (e[a] = r, delete e[n]), o = pe.cssHooks[a], o && "expand" in o) {
                    r = o.expand(r), delete e[a];
                    for(n in r) n in e || (e[n] = r[n], t[n] = i)
                } else t[a] = i
        }

        function U(e, t, n) {
            var a, i, r = 0,
                o = U.prefilters.length,
                s = pe.Deferred().always(function() {
                    delete l.elem
                }),
                l = function() {
                    if(i) return !1;
                    for(var t = ht || O(), n = Math.max(0, c.startTime + c.duration - t), a = n / c.duration || 0, r = 1 - a, o = 0, l = c.tweens.length; o < l; o++) c.tweens[o].run(r);
                    return s.notifyWith(e, [c, r, n]), r < 1 && l ? n : (s.resolveWith(e, [c]), !1)
                },
                c = s.promise({
                    elem: e,
                    props: pe.extend({}, t),
                    opts: pe.extend(!0, {
                        specialEasing: {},
                        easing: pe.easing._default
                    }, n),
                    originalProperties: t,
                    originalOptions: n,
                    startTime: ht || O(),
                    duration: n.duration,
                    tweens: [],
                    createTween: function(t, n) {
                        var a = pe.Tween(e, c.opts, t, n, c.opts.specialEasing[t] || c.opts.easing);
                        return c.tweens.push(a), a
                    },
                    stop: function(t) {
                        var n = 0,
                            a = t ? c.tweens.length : 0;
                        if(i) return this;
                        for(i = !0; n < a; n++) c.tweens[n].run(1);
                        return t ? (s.notifyWith(e, [c, 1, 0]), s.resolveWith(e, [c, t])) : s.rejectWith(e, [c, t]), this
                    }
                }),
                u = c.props;
            for(H(u, c.opts.specialEasing); r < o; r++)
                if(a = U.prefilters[r].call(c, e, u, c.opts)) return pe.isFunction(a.stop) && (pe._queueHooks(c.elem, c.opts.queue).stop = pe.proxy(a.stop, a)), a;
            return pe.map(u, z, c), pe.isFunction(c.opts.start) && c.opts.start.call(e, c), pe.fx.timer(pe.extend(l, {
                elem: e,
                anim: c,
                queue: c.opts.queue
            })), c.progress(c.opts.progress).done(c.opts.done, c.opts.complete).fail(c.opts.fail).always(c.opts.always)
        }

        function V(e) {
            var t = e.match(De) || [];
            return t.join(" ")
        }

        function W(e) {
            return e.getAttribute && e.getAttribute("class") || ""
        }

        function q(e, t, n, a) {
            var i;
            if(pe.isArray(t)) pe.each(t, function(t, i) {
                n || kt.test(e) ? a(e, i) : q(e + "[" + ("object" == typeof i && null != i ? t : "") + "]", i, n, a)
            });
            else if(n || "object" !== pe.type(t)) a(e, t);
            else
                for(i in t) q(e + "[" + i + "]", t[i], n, a)
        }

        function K(e) {
            return function(t, n) {
                "string" != typeof t && (n = t, t = "*");
                var a, i = 0,
                    r = t.toLowerCase().match(De) || [];
                if(pe.isFunction(n))
                    for(; a = r[i++];) "+" === a[0] ? (a = a.slice(1) || "*", (e[a] = e[a] || []).unshift(n)) : (e[a] = e[a] || []).push(n)
            }
        }

        function J(e, t, n, a) {
            function i(s) {
                var l;
                return r[s] = !0, pe.each(e[s] || [], function(e, s) {
                    var c = s(t, n, a);
                    return "string" != typeof c || o || r[c] ? o ? !(l = c) : void 0 : (t.dataTypes.unshift(c), i(c), !1)
                }), l
            }
            var r = {},
                o = e === Gt;
            return i(t.dataTypes[0]) || !r["*"] && i("*")
        }

        function Y(e, t) {
            var n, a, i = pe.ajaxSettings.flatOptions || {};
            for(n in t) void 0 !== t[n] && ((i[n] ? e : a || (a = {}))[n] = t[n]);
            return a && pe.extend(!0, e, a), e
        }

        function Z(e, t, n) {
            for(var a, i, r, o, s = e.contents, l = e.dataTypes;
                "*" === l[0];) l.shift(), void 0 === a && (a = e.mimeType || t.getResponseHeader("Content-Type"));
            if(a)
                for(i in s)
                    if(s[i] && s[i].test(a)) {
                        l.unshift(i);
                        break
                    }
            if(l[0] in n) r = l[0];
            else {
                for(i in n) {
                    if(!l[0] || e.converters[i + " " + l[0]]) {
                        r = i;
                        break
                    }
                    o || (o = i)
                }
                r = r || o
            }
            if(r) return r !== l[0] && l.unshift(r), n[r]
        }

        function Q(e, t, n, a) {
            var i, r, o, s, l, c = {},
                u = e.dataTypes.slice();
            if(u[1])
                for(o in e.converters) c[o.toLowerCase()] = e.converters[o];
            for(r = u.shift(); r;)
                if(e.responseFields[r] && (n[e.responseFields[r]] = t), !l && a && e.dataFilter && (t = e.dataFilter(t, e.dataType)), l = r, r = u.shift())
                    if("*" === r) r = l;
                    else if("*" !== l && l !== r) {
                if(o = c[l + " " + r] || c["* " + r], !o)
                    for(i in c)
                        if(s = i.split(" "), s[1] === r && (o = c[l + " " + s[0]] || c["* " + s[0]])) {
                            o === !0 ? o = c[i] : c[i] !== !0 && (r = s[0], u.unshift(s[1]));
                            break
                        }
                if(o !== !0)
                    if(o && e.throws) t = o(t);
                    else try {
                        t = o(t)
                    } catch(e) {
                        return {
                            state: "parsererror",
                            error: o ? e : "No conversion from " + l + " to " + r
                        }
                    }
            }
            return {
                state: "success",
                data: t
            }
        }

        function X(e) {
            return pe.isWindow(e) ? e : 9 === e.nodeType && e.defaultView
        }
        var ee = [],
            te = e.document,
            ne = Object.getPrototypeOf,
            ae = ee.slice,
            ie = ee.concat,
            re = ee.push,
            oe = ee.indexOf,
            se = {},
            le = se.toString,
            ce = se.hasOwnProperty,
            ue = ce.toString,
            de = ue.call(Object),
            fe = {},
            he = "3.1.1",
            pe = function(e, t) {
                return new pe.fn.init(e, t)
            },
            me = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
            be = /^-ms-/,
            ge = /-([a-z])/g,
            ve = function(e, t) {
                return t.toUpperCase()
            };
        pe.fn = pe.prototype = {
            jquery: he,
            constructor: pe,
            length: 0,
            toArray: function() {
                return ae.call(this)
            },
            get: function(e) {
                return null == e ? ae.call(this) : e < 0 ? this[e + this.length] : this[e]
            },
            pushStack: function(e) {
                var t = pe.merge(this.constructor(), e);
                return t.prevObject = this, t
            },
            each: function(e) {
                return pe.each(this, e)
            },
            map: function(e) {
                return this.pushStack(pe.map(this, function(t, n) {
                    return e.call(t, n, t)
                }))
            },
            slice: function() {
                return this.pushStack(ae.apply(this, arguments))
            },
            first: function() {
                return this.eq(0)
            },
            last: function() {
                return this.eq(-1)
            },
            eq: function(e) {
                var t = this.length,
                    n = +e + (e < 0 ? t : 0);
                return this.pushStack(n >= 0 && n < t ? [this[n]] : [])
            },
            end: function() {
                return this.prevObject || this.constructor()
            },
            push: re,
            sort: ee.sort,
            splice: ee.splice
        }, pe.extend = pe.fn.extend = function() {
            var e, t, n, a, i, r, o = arguments[0] || {},
                s = 1,
                l = arguments.length,
                c = !1;
            for("boolean" == typeof o && (c = o, o = arguments[s] || {}, s++), "object" == typeof o || pe.isFunction(o) || (o = {}), s === l && (o = this, s--); s < l; s++)
                if(null != (e = arguments[s]))
                    for(t in e) n = o[t], a = e[t], o !== a && (c && a && (pe.isPlainObject(a) || (i = pe.isArray(a))) ? (i ? (i = !1, r = n && pe.isArray(n) ? n : []) : r = n && pe.isPlainObject(n) ? n : {}, o[t] = pe.extend(c, r, a)) : void 0 !== a && (o[t] = a));
            return o
        }, pe.extend({
            expando: "jQuery" + (he + Math.random()).replace(/\D/g, ""),
            isReady: !0,
            error: function(e) {
                throw new Error(e)
            },
            noop: function() {},
            isFunction: function(e) {
                return "function" === pe.type(e)
            },
            isArray: Array.isArray,
            isWindow: function(e) {
                return null != e && e === e.window
            },
            isNumeric: function(e) {
                var t = pe.type(e);
                return("number" === t || "string" === t) && !isNaN(e - parseFloat(e))
            },
            isPlainObject: function(e) {
                var t, n;
                return !(!e || "[object Object]" !== le.call(e)) && (!(t = ne(e)) || (n = ce.call(t, "constructor") && t.constructor, "function" == typeof n && ue.call(n) === de))
            },
            isEmptyObject: function(e) {
                var t;
                for(t in e) return !1;
                return !0
            },
            type: function(e) {
                return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? se[le.call(e)] || "object" : typeof e
            },
            globalEval: function(e) {
                n(e)
            },
            camelCase: function(e) {
                return e.replace(be, "ms-").replace(ge, ve)
            },
            nodeName: function(e, t) {
                return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
            },
            each: function(e, t) {
                var n, i = 0;
                if(a(e))
                    for(n = e.length; i < n && t.call(e[i], i, e[i]) !== !1; i++);
                else
                    for(i in e)
                        if(t.call(e[i], i, e[i]) === !1) break;
                return e
            },
            trim: function(e) {
                return null == e ? "" : (e + "").replace(me, "")
            },
            makeArray: function(e, t) {
                var n = t || [];
                return null != e && (a(Object(e)) ? pe.merge(n, "string" == typeof e ? [e] : e) : re.call(n, e)), n
            },
            inArray: function(e, t, n) {
                return null == t ? -1 : oe.call(t, e, n)
            },
            merge: function(e, t) {
                for(var n = +t.length, a = 0, i = e.length; a < n; a++) e[i++] = t[a];
                return e.length = i, e
            },
            grep: function(e, t, n) {
                for(var a, i = [], r = 0, o = e.length, s = !n; r < o; r++) a = !t(e[r], r), a !== s && i.push(e[r]);
                return i
            },
            map: function(e, t, n) {
                var i, r, o = 0,
                    s = [];
                if(a(e))
                    for(i = e.length; o < i; o++) r = t(e[o], o, n), null != r && s.push(r);
                else
                    for(o in e) r = t(e[o], o, n), null != r && s.push(r);
                return ie.apply([], s)
            },
            guid: 1,
            proxy: function(e, t) {
                var n, a, i;
                if("string" == typeof t && (n = e[t], t = e, e = n), pe.isFunction(e)) return a = ae.call(arguments, 2), i = function() {
                    return e.apply(t || this, a.concat(ae.call(arguments)))
                }, i.guid = e.guid = e.guid || pe.guid++, i
            },
            now: Date.now,
            support: fe
        }), "function" == typeof Symbol && (pe.fn[Symbol.iterator] = ee[Symbol.iterator]), pe.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(e, t) {
            se["[object " + t + "]"] = t.toLowerCase()
        });
        var ye = function(e) {
            function t(e, t, n, a) {
                var i, r, o, s, l, c, u, f = t && t.ownerDocument,
                    p = t ? t.nodeType : 9;
                if(n = n || [], "string" != typeof e || !e || 1 !== p && 9 !== p && 11 !== p) return n;
                if(!a && ((t ? t.ownerDocument || t : z) !== L && P(t), t = t || L, _)) {
                    if(11 !== p && (l = ge.exec(e)))
                        if(i = l[1]) {
                            if(9 === p) {
                                if(!(o = t.getElementById(i))) return n;
                                if(o.id === i) return n.push(o), n
                            } else if(f && (o = f.getElementById(i)) && O(t, o) && o.id === i) return n.push(o), n
                        } else {
                            if(l[2]) return Q.apply(n, t.getElementsByTagName(e)), n;
                            if((i = l[3]) && w.getElementsByClassName && t.getElementsByClassName) return Q.apply(n, t.getElementsByClassName(i)), n
                        }
                    if(w.qsa && !W[e + " "] && (!I || !I.test(e))) {
                        if(1 !== p) f = t, u = e;
                        else if("object" !== t.nodeName.toLowerCase()) {
                            for((s = t.getAttribute("id")) ? s = s.replace(Te, we) : t.setAttribute("id", s = j), c = k(e), r = c.length; r--;) c[r] = "#" + s + " " + h(c[r]);
                            u = c.join(","), f = ve.test(e) && d(t.parentNode) || t
                        }
                        if(u) try {
                            return Q.apply(n, f.querySelectorAll(u)), n
                        } catch(e) {} finally {
                            s === j && t.removeAttribute("id")
                        }
                    }
                }
                return E(e.replace(se, "$1"), t, n, a)
            }

            function n() {
                function e(n, a) {
                    return t.push(n + " ") > x.cacheLength && delete e[t.shift()], e[n + " "] = a
                }
                var t = [];
                return e
            }

            function a(e) {
                return e[j] = !0, e
            }

            function i(e) {
                var t = L.createElement("fieldset");
                try {
                    return !!e(t)
                } catch(e) {
                    return !1
                } finally {
                    t.parentNode && t.parentNode.removeChild(t), t = null
                }
            }

            function r(e, t) {
                for(var n = e.split("|"), a = n.length; a--;) x.attrHandle[n[a]] = t
            }

            function o(e, t) {
                var n = t && e,
                    a = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
                if(a) return a;
                if(n)
                    for(; n = n.nextSibling;)
                        if(n === t) return -1;
                return e ? 1 : -1
            }

            function s(e) {
                return function(t) {
                    var n = t.nodeName.toLowerCase();
                    return "input" === n && t.type === e
                }
            }

            function l(e) {
                return function(t) {
                    var n = t.nodeName.toLowerCase();
                    return("input" === n || "button" === n) && t.type === e
                }
            }

            function c(e) {
                return function(t) {
                    return "form" in t ? t.parentNode && t.disabled === !1 ? "label" in t ? "label" in t.parentNode ? t.parentNode.disabled === e : t.disabled === e : t.isDisabled === e || t.isDisabled !== !e && Se(t) === e : t.disabled === e : "label" in t && t.disabled === e
                }
            }

            function u(e) {
                return a(function(t) {
                    return t = +t, a(function(n, a) {
                        for(var i, r = e([], n.length, t), o = r.length; o--;) n[i = r[o]] && (n[i] = !(a[i] = n[i]))
                    })
                })
            }

            function d(e) {
                return e && "undefined" != typeof e.getElementsByTagName && e
            }

            function f() {}

            function h(e) {
                for(var t = 0, n = e.length, a = ""; t < n; t++) a += e[t].value;
                return a
            }

            function p(e, t, n) {
                var a = t.dir,
                    i = t.next,
                    r = i || a,
                    o = n && "parentNode" === r,
                    s = H++;
                return t.first ? function(t, n, i) {
                    for(; t = t[a];)
                        if(1 === t.nodeType || o) return e(t, n, i);
                    return !1
                } : function(t, n, l) {
                    var c, u, d, f = [$, s];
                    if(l) {
                        for(; t = t[a];)
                            if((1 === t.nodeType || o) && e(t, n, l)) return !0
                    } else
                        for(; t = t[a];)
                            if(1 === t.nodeType || o)
                                if(d = t[j] || (t[j] = {}), u = d[t.uniqueID] || (d[t.uniqueID] = {}), i && i === t.nodeName.toLowerCase()) t = t[a] || t;
                                else {
                                    if((c = u[r]) && c[0] === $ && c[1] === s) return f[2] = c[2];
                                    if(u[r] = f, f[2] = e(t, n, l)) return !0
                                } return !1
                }
            }

            function m(e) {
                return e.length > 1 ? function(t, n, a) {
                    for(var i = e.length; i--;)
                        if(!e[i](t, n, a)) return !1;
                    return !0
                } : e[0]
            }

            function b(e, n, a) {
                for(var i = 0, r = n.length; i < r; i++) t(e, n[i], a);
                return a
            }

            function g(e, t, n, a, i) {
                for(var r, o = [], s = 0, l = e.length, c = null != t; s < l; s++)(r = e[s]) && (n && !n(r, a, i) || (o.push(r), c && t.push(s)));
                return o
            }

            function v(e, t, n, i, r, o) {
                return i && !i[j] && (i = v(i)), r && !r[j] && (r = v(r, o)), a(function(a, o, s, l) {
                    var c, u, d, f = [],
                        h = [],
                        p = o.length,
                        m = a || b(t || "*", s.nodeType ? [s] : s, []),
                        v = !e || !a && t ? m : g(m, f, e, s, l),
                        y = n ? r || (a ? e : p || i) ? [] : o : v;
                    if(n && n(v, y, s, l), i)
                        for(c = g(y, h), i(c, [], s, l), u = c.length; u--;)(d = c[u]) && (y[h[u]] = !(v[h[u]] = d));
                    if(a) {
                        if(r || e) {
                            if(r) {
                                for(c = [], u = y.length; u--;)(d = y[u]) && c.push(v[u] = d);
                                r(null, y = [], c, l)
                            }
                            for(u = y.length; u--;)(d = y[u]) && (c = r ? ee(a, d) : f[u]) > -1 && (a[c] = !(o[c] = d))
                        }
                    } else y = g(y === o ? y.splice(p, y.length) : y), r ? r(null, o, y, l) : Q.apply(o, y)
                })
            }

            function y(e) {
                for(var t, n, a, i = e.length, r = x.relative[e[0].type], o = r || x.relative[" "], s = r ? 1 : 0, l = p(function(e) {
                        return e === t
                    }, o, !0), c = p(function(e) {
                        return ee(t, e) > -1
                    }, o, !0), u = [function(e, n, a) {
                        var i = !r && (a || n !== B) || ((t = n).nodeType ? l(e, n, a) : c(e, n, a));
                        return t = null, i
                    }]; s < i; s++)
                    if(n = x.relative[e[s].type]) u = [p(m(u), n)];
                    else {
                        if(n = x.filter[e[s].type].apply(null, e[s].matches), n[j]) {
                            for(a = ++s; a < i && !x.relative[e[a].type]; a++);
                            return v(s > 1 && m(u), s > 1 && h(e.slice(0, s - 1).concat({
                                value: " " === e[s - 2].type ? "*" : ""
                            })).replace(se, "$1"), n, s < a && y(e.slice(s, a)), a < i && y(e = e.slice(a)), a < i && h(e))
                        }
                        u.push(n)
                    }
                return m(u)
            }

            function C(e, n) {
                var i = n.length > 0,
                    r = e.length > 0,
                    o = function(a, o, s, l, c) {
                        var u, d, f, h = 0,
                            p = "0",
                            m = a && [],
                            b = [],
                            v = B,
                            y = a || r && x.find.TAG("*", c),
                            C = $ += null == v ? 1 : Math.random() || .1,
                            T = y.length;
                        for(c && (B = o === L || o || c); p !== T && null != (u = y[p]); p++) {
                            if(r && u) {
                                for(d = 0, o || u.ownerDocument === L || (P(u), s = !_); f = e[d++];)
                                    if(f(u, o || L, s)) {
                                        l.push(u);
                                        break
                                    }
                                c && ($ = C)
                            }
                            i && ((u = !f && u) && h--, a && m.push(u))
                        }
                        if(h += p, i && p !== h) {
                            for(d = 0; f = n[d++];) f(m, b, o, s);
                            if(a) {
                                if(h > 0)
                                    for(; p--;) m[p] || b[p] || (b[p] = Y.call(l));
                                b = g(b)
                            }
                            Q.apply(l, b), c && !a && b.length > 0 && h + n.length > 1 && t.uniqueSort(l)
                        }
                        return c && ($ = C, B = v), m
                    };
                return i ? a(o) : o
            }
            var T, w, x, S, A, k, M, E, B, D, N, P, L, R, _, I, F, G, O, j = "sizzle" + 1 * new Date,
                z = e.document,
                $ = 0,
                H = 0,
                U = n(),
                V = n(),
                W = n(),
                q = function(e, t) {
                    return e === t && (N = !0), 0
                },
                K = {}.hasOwnProperty,
                J = [],
                Y = J.pop,
                Z = J.push,
                Q = J.push,
                X = J.slice,
                ee = function(e, t) {
                    for(var n = 0, a = e.length; n < a; n++)
                        if(e[n] === t) return n;
                    return -1
                },
                te = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
                ne = "[\\x20\\t\\r\\n\\f]",
                ae = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
                ie = "\\[" + ne + "*(" + ae + ")(?:" + ne + "*([*^$|!~]?=)" + ne + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + ae + "))|)" + ne + "*\\]",
                re = ":(" + ae + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + ie + ")*)|.*)\\)|)",
                oe = new RegExp(ne + "+", "g"),
                se = new RegExp("^" + ne + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ne + "+$", "g"),
                le = new RegExp("^" + ne + "*," + ne + "*"),
                ce = new RegExp("^" + ne + "*([>+~]|" + ne + ")" + ne + "*"),
                ue = new RegExp("=" + ne + "*([^\\]'\"]*?)" + ne + "*\\]", "g"),
                de = new RegExp(re),
                fe = new RegExp("^" + ae + "$"),
                he = {
                    ID: new RegExp("^#(" + ae + ")"),
                    CLASS: new RegExp("^\\.(" + ae + ")"),
                    TAG: new RegExp("^(" + ae + "|[*])"),
                    ATTR: new RegExp("^" + ie),
                    PSEUDO: new RegExp("^" + re),
                    CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + ne + "*(even|odd|(([+-]|)(\\d*)n|)" + ne + "*(?:([+-]|)" + ne + "*(\\d+)|))" + ne + "*\\)|)", "i"),
                    bool: new RegExp("^(?:" + te + ")$", "i"),
                    needsContext: new RegExp("^" + ne + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + ne + "*((?:-\\d)?\\d*)" + ne + "*\\)|)(?=[^-]|$)", "i")
                },
                pe = /^(?:input|select|textarea|button)$/i,
                me = /^h\d$/i,
                be = /^[^{]+\{\s*\[native \w/,
                ge = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
                ve = /[+~]/,
                ye = new RegExp("\\\\([\\da-f]{1,6}" + ne + "?|(" + ne + ")|.)", "ig"),
                Ce = function(e, t, n) {
                    var a = "0x" + t - 65536;
                    return a !== a || n ? t : a < 0 ? String.fromCharCode(a + 65536) : String.fromCharCode(a >> 10 | 55296, 1023 & a | 56320)
                },
                Te = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
                we = function(e, t) {
                    return t ? "\0" === e ? "�" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e
                },
                xe = function() {
                    P()
                },
                Se = p(function(e) {
                    return e.disabled === !0 && ("form" in e || "label" in e)
                }, {
                    dir: "parentNode",
                    next: "legend"
                });
            try {
                Q.apply(J = X.call(z.childNodes), z.childNodes), J[z.childNodes.length].nodeType
            } catch(e) {
                Q = {
                    apply: J.length ? function(e, t) {
                        Z.apply(e, X.call(t))
                    } : function(e, t) {
                        for(var n = e.length, a = 0; e[n++] = t[a++];);
                        e.length = n - 1
                    }
                }
            }
            w = t.support = {}, A = t.isXML = function(e) {
                var t = e && (e.ownerDocument || e).documentElement;
                return !!t && "HTML" !== t.nodeName
            }, P = t.setDocument = function(e) {
                var t, n, a = e ? e.ownerDocument || e : z;
                return a !== L && 9 === a.nodeType && a.documentElement ? (L = a, R = L.documentElement, _ = !A(L), z !== L && (n = L.defaultView) && n.top !== n && (n.addEventListener ? n.addEventListener("unload", xe, !1) : n.attachEvent && n.attachEvent("onunload", xe)), w.attributes = i(function(e) {
                    return e.className = "i", !e.getAttribute("className")
                }), w.getElementsByTagName = i(function(e) {
                    return e.appendChild(L.createComment("")), !e.getElementsByTagName("*").length
                }), w.getElementsByClassName = be.test(L.getElementsByClassName), w.getById = i(function(e) {
                    return R.appendChild(e).id = j, !L.getElementsByName || !L.getElementsByName(j).length
                }), w.getById ? (x.filter.ID = function(e) {
                    var t = e.replace(ye, Ce);
                    return function(e) {
                        return e.getAttribute("id") === t
                    }
                }, x.find.ID = function(e, t) {
                    if("undefined" != typeof t.getElementById && _) {
                        var n = t.getElementById(e);
                        return n ? [n] : []
                    }
                }) : (x.filter.ID = function(e) {
                    var t = e.replace(ye, Ce);
                    return function(e) {
                        var n = "undefined" != typeof e.getAttributeNode && e.getAttributeNode("id");
                        return n && n.value === t
                    }
                }, x.find.ID = function(e, t) {
                    if("undefined" != typeof t.getElementById && _) {
                        var n, a, i, r = t.getElementById(e);
                        if(r) {
                            if(n = r.getAttributeNode("id"), n && n.value === e) return [r];
                            for(i = t.getElementsByName(e), a = 0; r = i[a++];)
                                if(n = r.getAttributeNode("id"), n && n.value === e) return [r]
                        }
                        return []
                    }
                }), x.find.TAG = w.getElementsByTagName ? function(e, t) {
                    return "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(e) : w.qsa ? t.querySelectorAll(e) : void 0
                } : function(e, t) {
                    var n, a = [],
                        i = 0,
                        r = t.getElementsByTagName(e);
                    if("*" === e) {
                        for(; n = r[i++];) 1 === n.nodeType && a.push(n);
                        return a
                    }
                    return r
                }, x.find.CLASS = w.getElementsByClassName && function(e, t) {
                    if("undefined" != typeof t.getElementsByClassName && _) return t.getElementsByClassName(e)
                }, F = [], I = [], (w.qsa = be.test(L.querySelectorAll)) && (i(function(e) {
                    R.appendChild(e).innerHTML = "<a id='" + j + "'></a><select id='" + j + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && I.push("[*^$]=" + ne + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || I.push("\\[" + ne + "*(?:value|" + te + ")"), e.querySelectorAll("[id~=" + j + "-]").length || I.push("~="), e.querySelectorAll(":checked").length || I.push(":checked"), e.querySelectorAll("a#" + j + "+*").length || I.push(".#.+[+~]")
                }), i(function(e) {
                    e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                    var t = L.createElement("input");
                    t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && I.push("name" + ne + "*[*^$|!~]?="), 2 !== e.querySelectorAll(":enabled").length && I.push(":enabled", ":disabled"), R.appendChild(e).disabled = !0, 2 !== e.querySelectorAll(":disabled").length && I.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), I.push(",.*:")
                })), (w.matchesSelector = be.test(G = R.matches || R.webkitMatchesSelector || R.mozMatchesSelector || R.oMatchesSelector || R.msMatchesSelector)) && i(function(e) {
                    w.disconnectedMatch = G.call(e, "*"), G.call(e, "[s!='']:x"), F.push("!=", re)
                }), I = I.length && new RegExp(I.join("|")), F = F.length && new RegExp(F.join("|")), t = be.test(R.compareDocumentPosition), O = t || be.test(R.contains) ? function(e, t) {
                    var n = 9 === e.nodeType ? e.documentElement : e,
                        a = t && t.parentNode;
                    return e === a || !(!a || 1 !== a.nodeType || !(n.contains ? n.contains(a) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(a)))
                } : function(e, t) {
                    if(t)
                        for(; t = t.parentNode;)
                            if(t === e) return !0;
                    return !1
                }, q = t ? function(e, t) {
                    if(e === t) return N = !0, 0;
                    var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
                    return n ? n : (n = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1, 1 & n || !w.sortDetached && t.compareDocumentPosition(e) === n ? e === L || e.ownerDocument === z && O(z, e) ? -1 : t === L || t.ownerDocument === z && O(z, t) ? 1 : D ? ee(D, e) - ee(D, t) : 0 : 4 & n ? -1 : 1)
                } : function(e, t) {
                    if(e === t) return N = !0, 0;
                    var n, a = 0,
                        i = e.parentNode,
                        r = t.parentNode,
                        s = [e],
                        l = [t];
                    if(!i || !r) return e === L ? -1 : t === L ? 1 : i ? -1 : r ? 1 : D ? ee(D, e) - ee(D, t) : 0;
                    if(i === r) return o(e, t);
                    for(n = e; n = n.parentNode;) s.unshift(n);
                    for(n = t; n = n.parentNode;) l.unshift(n);
                    for(; s[a] === l[a];) a++;
                    return a ? o(s[a], l[a]) : s[a] === z ? -1 : l[a] === z ? 1 : 0
                }, L) : L
            }, t.matches = function(e, n) {
                return t(e, null, null, n)
            }, t.matchesSelector = function(e, n) {
                if((e.ownerDocument || e) !== L && P(e), n = n.replace(ue, "='$1']"), w.matchesSelector && _ && !W[n + " "] && (!F || !F.test(n)) && (!I || !I.test(n))) try {
                    var a = G.call(e, n);
                    if(a || w.disconnectedMatch || e.document && 11 !== e.document.nodeType) return a
                } catch(e) {}
                return t(n, L, null, [e]).length > 0
            }, t.contains = function(e, t) {
                return(e.ownerDocument || e) !== L && P(e), O(e, t)
            }, t.attr = function(e, t) {
                (e.ownerDocument || e) !== L && P(e);
                var n = x.attrHandle[t.toLowerCase()],
                    a = n && K.call(x.attrHandle, t.toLowerCase()) ? n(e, t, !_) : void 0;
                return void 0 !== a ? a : w.attributes || !_ ? e.getAttribute(t) : (a = e.getAttributeNode(t)) && a.specified ? a.value : null
            }, t.escape = function(e) {
                return(e + "").replace(Te, we)
            }, t.error = function(e) {
                throw new Error("Syntax error, unrecognized expression: " + e)
            }, t.uniqueSort = function(e) {
                var t, n = [],
                    a = 0,
                    i = 0;
                if(N = !w.detectDuplicates, D = !w.sortStable && e.slice(0), e.sort(q), N) {
                    for(; t = e[i++];) t === e[i] && (a = n.push(i));
                    for(; a--;) e.splice(n[a], 1)
                }
                return D = null, e
            }, S = t.getText = function(e) {
                var t, n = "",
                    a = 0,
                    i = e.nodeType;
                if(i) {
                    if(1 === i || 9 === i || 11 === i) {
                        if("string" == typeof e.textContent) return e.textContent;
                        for(e = e.firstChild; e; e = e.nextSibling) n += S(e)
                    } else if(3 === i || 4 === i) return e.nodeValue
                } else
                    for(; t = e[a++];) n += S(t);
                return n
            }, x = t.selectors = {
                cacheLength: 50,
                createPseudo: a,
                match: he,
                attrHandle: {},
                find: {},
                relative: {
                    ">": {
                        dir: "parentNode",
                        first: !0
                    },
                    " ": {
                        dir: "parentNode"
                    },
                    "+": {
                        dir: "previousSibling",
                        first: !0
                    },
                    "~": {
                        dir: "previousSibling"
                    }
                },
                preFilter: {
                    ATTR: function(e) {
                        return e[1] = e[1].replace(ye, Ce), e[3] = (e[3] || e[4] || e[5] || "").replace(ye, Ce), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                    },
                    CHILD: function(e) {
                        return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || t.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && t.error(e[0]), e
                    },
                    PSEUDO: function(e) {
                        var t, n = !e[6] && e[2];
                        return he.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && de.test(n) && (t = k(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
                    }
                },
                filter: {
                    TAG: function(e) {
                        var t = e.replace(ye, Ce).toLowerCase();
                        return "*" === e ? function() {
                            return !0
                        } : function(e) {
                            return e.nodeName && e.nodeName.toLowerCase() === t
                        }
                    },
                    CLASS: function(e) {
                        var t = U[e + " "];
                        return t || (t = new RegExp("(^|" + ne + ")" + e + "(" + ne + "|$)")) && U(e, function(e) {
                            return t.test("string" == typeof e.className && e.className || "undefined" != typeof e.getAttribute && e.getAttribute("class") || "")
                        })
                    },
                    ATTR: function(e, n, a) {
                        return function(i) {
                            var r = t.attr(i, e);
                            return null == r ? "!=" === n : !n || (r += "", "=" === n ? r === a : "!=" === n ? r !== a : "^=" === n ? a && 0 === r.indexOf(a) : "*=" === n ? a && r.indexOf(a) > -1 : "$=" === n ? a && r.slice(-a.length) === a : "~=" === n ? (" " + r.replace(oe, " ") + " ").indexOf(a) > -1 : "|=" === n && (r === a || r.slice(0, a.length + 1) === a + "-"))
                        }
                    },
                    CHILD: function(e, t, n, a, i) {
                        var r = "nth" !== e.slice(0, 3),
                            o = "last" !== e.slice(-4),
                            s = "of-type" === t;
                        return 1 === a && 0 === i ? function(e) {
                            return !!e.parentNode
                        } : function(t, n, l) {
                            var c, u, d, f, h, p, m = r !== o ? "nextSibling" : "previousSibling",
                                b = t.parentNode,
                                g = s && t.nodeName.toLowerCase(),
                                v = !l && !s,
                                y = !1;
                            if(b) {
                                if(r) {
                                    for(; m;) {
                                        for(f = t; f = f[m];)
                                            if(s ? f.nodeName.toLowerCase() === g : 1 === f.nodeType) return !1;
                                        p = m = "only" === e && !p && "nextSibling"
                                    }
                                    return !0
                                }
                                if(p = [o ? b.firstChild : b.lastChild], o && v) {
                                    for(f = b, d = f[j] || (f[j] = {}), u = d[f.uniqueID] || (d[f.uniqueID] = {}), c = u[e] || [], h = c[0] === $ && c[1], y = h && c[2], f = h && b.childNodes[h]; f = ++h && f && f[m] || (y = h = 0) || p.pop();)
                                        if(1 === f.nodeType && ++y && f === t) {
                                            u[e] = [$, h, y];
                                            break
                                        }
                                } else if(v && (f = t, d = f[j] || (f[j] = {}), u = d[f.uniqueID] || (d[f.uniqueID] = {}), c = u[e] || [], h = c[0] === $ && c[1], y = h), y === !1)
                                    for(;
                                        (f = ++h && f && f[m] || (y = h = 0) || p.pop()) && ((s ? f.nodeName.toLowerCase() !== g : 1 !== f.nodeType) || !++y || (v && (d = f[j] || (f[j] = {}), u = d[f.uniqueID] || (d[f.uniqueID] = {}), u[e] = [$, y]), f !== t)););
                                return y -= i, y === a || y % a === 0 && y / a >= 0
                            }
                        }
                    },
                    PSEUDO: function(e, n) {
                        var i, r = x.pseudos[e] || x.setFilters[e.toLowerCase()] || t.error("unsupported pseudo: " + e);
                        return r[j] ? r(n) : r.length > 1 ? (i = [e, e, "", n], x.setFilters.hasOwnProperty(e.toLowerCase()) ? a(function(e, t) {
                            for(var a, i = r(e, n), o = i.length; o--;) a = ee(e, i[o]), e[a] = !(t[a] = i[o])
                        }) : function(e) {
                            return r(e, 0, i)
                        }) : r
                    }
                },
                pseudos: {
                    not: a(function(e) {
                        var t = [],
                            n = [],
                            i = M(e.replace(se, "$1"));
                        return i[j] ? a(function(e, t, n, a) {
                            for(var r, o = i(e, null, a, []), s = e.length; s--;)(r = o[s]) && (e[s] = !(t[s] = r))
                        }) : function(e, a, r) {
                            return t[0] = e, i(t, null, r, n), t[0] = null, !n.pop()
                        }
                    }),
                    has: a(function(e) {
                        return function(n) {
                            return t(e, n).length > 0
                        }
                    }),
                    contains: a(function(e) {
                        return e = e.replace(ye, Ce),
                            function(t) {
                                return(t.textContent || t.innerText || S(t)).indexOf(e) > -1
                            }
                    }),
                    lang: a(function(e) {
                        return fe.test(e || "") || t.error("unsupported lang: " + e), e = e.replace(ye, Ce).toLowerCase(),
                            function(t) {
                                var n;
                                do
                                    if(n = _ ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return n = n.toLowerCase(), n === e || 0 === n.indexOf(e + "-"); while ((t = t.parentNode) && 1 === t.nodeType);
                                return !1;
                            }
                    }),
                    target: function(t) {
                        var n = e.location && e.location.hash;
                        return n && n.slice(1) === t.id
                    },
                    root: function(e) {
                        return e === R
                    },
                    focus: function(e) {
                        return e === L.activeElement && (!L.hasFocus || L.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                    },
                    enabled: c(!1),
                    disabled: c(!0),
                    checked: function(e) {
                        var t = e.nodeName.toLowerCase();
                        return "input" === t && !!e.checked || "option" === t && !!e.selected
                    },
                    selected: function(e) {
                        return e.parentNode && e.parentNode.selectedIndex, e.selected === !0
                    },
                    empty: function(e) {
                        for(e = e.firstChild; e; e = e.nextSibling)
                            if(e.nodeType < 6) return !1;
                        return !0
                    },
                    parent: function(e) {
                        return !x.pseudos.empty(e)
                    },
                    header: function(e) {
                        return me.test(e.nodeName)
                    },
                    input: function(e) {
                        return pe.test(e.nodeName)
                    },
                    button: function(e) {
                        var t = e.nodeName.toLowerCase();
                        return "input" === t && "button" === e.type || "button" === t
                    },
                    text: function(e) {
                        var t;
                        return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                    },
                    first: u(function() {
                        return [0]
                    }),
                    last: u(function(e, t) {
                        return [t - 1]
                    }),
                    eq: u(function(e, t, n) {
                        return [n < 0 ? n + t : n]
                    }),
                    even: u(function(e, t) {
                        for(var n = 0; n < t; n += 2) e.push(n);
                        return e
                    }),
                    odd: u(function(e, t) {
                        for(var n = 1; n < t; n += 2) e.push(n);
                        return e
                    }),
                    lt: u(function(e, t, n) {
                        for(var a = n < 0 ? n + t : n; --a >= 0;) e.push(a);
                        return e
                    }),
                    gt: u(function(e, t, n) {
                        for(var a = n < 0 ? n + t : n; ++a < t;) e.push(a);
                        return e
                    })
                }
            }, x.pseudos.nth = x.pseudos.eq;
            for(T in {
                    radio: !0,
                    checkbox: !0,
                    file: !0,
                    password: !0,
                    image: !0
                }) x.pseudos[T] = s(T);
            for(T in {
                    submit: !0,
                    reset: !0
                }) x.pseudos[T] = l(T);
            return f.prototype = x.filters = x.pseudos, x.setFilters = new f, k = t.tokenize = function(e, n) {
                var a, i, r, o, s, l, c, u = V[e + " "];
                if(u) return n ? 0 : u.slice(0);
                for(s = e, l = [], c = x.preFilter; s;) {
                    a && !(i = le.exec(s)) || (i && (s = s.slice(i[0].length) || s), l.push(r = [])), a = !1, (i = ce.exec(s)) && (a = i.shift(), r.push({
                        value: a,
                        type: i[0].replace(se, " ")
                    }), s = s.slice(a.length));
                    for(o in x.filter) !(i = he[o].exec(s)) || c[o] && !(i = c[o](i)) || (a = i.shift(), r.push({
                        value: a,
                        type: o,
                        matches: i
                    }), s = s.slice(a.length));
                    if(!a) break
                }
                return n ? s.length : s ? t.error(e) : V(e, l).slice(0)
            }, M = t.compile = function(e, t) {
                var n, a = [],
                    i = [],
                    r = W[e + " "];
                if(!r) {
                    for(t || (t = k(e)), n = t.length; n--;) r = y(t[n]), r[j] ? a.push(r) : i.push(r);
                    r = W(e, C(i, a)), r.selector = e
                }
                return r
            }, E = t.select = function(e, t, n, a) {
                var i, r, o, s, l, c = "function" == typeof e && e,
                    u = !a && k(e = c.selector || e);
                if(n = n || [], 1 === u.length) {
                    if(r = u[0] = u[0].slice(0), r.length > 2 && "ID" === (o = r[0]).type && 9 === t.nodeType && _ && x.relative[r[1].type]) {
                        if(t = (x.find.ID(o.matches[0].replace(ye, Ce), t) || [])[0], !t) return n;
                        c && (t = t.parentNode), e = e.slice(r.shift().value.length)
                    }
                    for(i = he.needsContext.test(e) ? 0 : r.length; i-- && (o = r[i], !x.relative[s = o.type]);)
                        if((l = x.find[s]) && (a = l(o.matches[0].replace(ye, Ce), ve.test(r[0].type) && d(t.parentNode) || t))) {
                            if(r.splice(i, 1), e = a.length && h(r), !e) return Q.apply(n, a), n;
                            break
                        }
                }
                return(c || M(e, u))(a, t, !_, n, !t || ve.test(e) && d(t.parentNode) || t), n
            }, w.sortStable = j.split("").sort(q).join("") === j, w.detectDuplicates = !!N, P(), w.sortDetached = i(function(e) {
                return 1 & e.compareDocumentPosition(L.createElement("fieldset"))
            }), i(function(e) {
                return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
            }) || r("type|href|height|width", function(e, t, n) {
                if(!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
            }), w.attributes && i(function(e) {
                return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
            }) || r("value", function(e, t, n) {
                if(!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue
            }), i(function(e) {
                return null == e.getAttribute("disabled")
            }) || r(te, function(e, t, n) {
                var a;
                if(!n) return e[t] === !0 ? t.toLowerCase() : (a = e.getAttributeNode(t)) && a.specified ? a.value : null
            }), t
        }(e);
        pe.find = ye, pe.expr = ye.selectors, pe.expr[":"] = pe.expr.pseudos, pe.uniqueSort = pe.unique = ye.uniqueSort, pe.text = ye.getText, pe.isXMLDoc = ye.isXML, pe.contains = ye.contains, pe.escapeSelector = ye.escape;
        var Ce = function(e, t, n) {
                for(var a = [], i = void 0 !== n;
                    (e = e[t]) && 9 !== e.nodeType;)
                    if(1 === e.nodeType) {
                        if(i && pe(e).is(n)) break;
                        a.push(e)
                    }
                return a
            },
            Te = function(e, t) {
                for(var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
                return n
            },
            we = pe.expr.match.needsContext,
            xe = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i,
            Se = /^.[^:#\[\.,]*$/;
        pe.filter = function(e, t, n) {
            var a = t[0];
            return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === a.nodeType ? pe.find.matchesSelector(a, e) ? [a] : [] : pe.find.matches(e, pe.grep(t, function(e) {
                return 1 === e.nodeType
            }))
        }, pe.fn.extend({
            find: function(e) {
                var t, n, a = this.length,
                    i = this;
                if("string" != typeof e) return this.pushStack(pe(e).filter(function() {
                    for(t = 0; t < a; t++)
                        if(pe.contains(i[t], this)) return !0
                }));
                for(n = this.pushStack([]), t = 0; t < a; t++) pe.find(e, i[t], n);
                return a > 1 ? pe.uniqueSort(n) : n
            },
            filter: function(e) {
                return this.pushStack(i(this, e || [], !1))
            },
            not: function(e) {
                return this.pushStack(i(this, e || [], !0))
            },
            is: function(e) {
                return !!i(this, "string" == typeof e && we.test(e) ? pe(e) : e || [], !1).length
            }
        });
        var Ae, ke = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,
            Me = pe.fn.init = function(e, t, n) {
                var a, i;
                if(!e) return this;
                if(n = n || Ae, "string" == typeof e) {
                    if(a = "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3 ? [null, e, null] : ke.exec(e), !a || !a[1] && t) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
                    if(a[1]) {
                        if(t = t instanceof pe ? t[0] : t, pe.merge(this, pe.parseHTML(a[1], t && t.nodeType ? t.ownerDocument || t : te, !0)), xe.test(a[1]) && pe.isPlainObject(t))
                            for(a in t) pe.isFunction(this[a]) ? this[a](t[a]) : this.attr(a, t[a]);
                        return this
                    }
                    return i = te.getElementById(a[2]), i && (this[0] = i, this.length = 1), this
                }
                return e.nodeType ? (this[0] = e, this.length = 1, this) : pe.isFunction(e) ? void 0 !== n.ready ? n.ready(e) : e(pe) : pe.makeArray(e, this)
            };
        Me.prototype = pe.fn, Ae = pe(te);
        var Ee = /^(?:parents|prev(?:Until|All))/,
            Be = {
                children: !0,
                contents: !0,
                next: !0,
                prev: !0
            };
        pe.fn.extend({
            has: function(e) {
                var t = pe(e, this),
                    n = t.length;
                return this.filter(function() {
                    for(var e = 0; e < n; e++)
                        if(pe.contains(this, t[e])) return !0
                })
            },
            closest: function(e, t) {
                var n, a = 0,
                    i = this.length,
                    r = [],
                    o = "string" != typeof e && pe(e);
                if(!we.test(e))
                    for(; a < i; a++)
                        for(n = this[a]; n && n !== t; n = n.parentNode)
                            if(n.nodeType < 11 && (o ? o.index(n) > -1 : 1 === n.nodeType && pe.find.matchesSelector(n, e))) {
                                r.push(n);
                                break
                            }
                return this.pushStack(r.length > 1 ? pe.uniqueSort(r) : r)
            },
            index: function(e) {
                return e ? "string" == typeof e ? oe.call(pe(e), this[0]) : oe.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
            },
            add: function(e, t) {
                return this.pushStack(pe.uniqueSort(pe.merge(this.get(), pe(e, t))))
            },
            addBack: function(e) {
                return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
            }
        }), pe.each({
            parent: function(e) {
                var t = e.parentNode;
                return t && 11 !== t.nodeType ? t : null
            },
            parents: function(e) {
                return Ce(e, "parentNode")
            },
            parentsUntil: function(e, t, n) {
                return Ce(e, "parentNode", n)
            },
            next: function(e) {
                return r(e, "nextSibling")
            },
            prev: function(e) {
                return r(e, "previousSibling")
            },
            nextAll: function(e) {
                return Ce(e, "nextSibling")
            },
            prevAll: function(e) {
                return Ce(e, "previousSibling")
            },
            nextUntil: function(e, t, n) {
                return Ce(e, "nextSibling", n)
            },
            prevUntil: function(e, t, n) {
                return Ce(e, "previousSibling", n)
            },
            siblings: function(e) {
                return Te((e.parentNode || {}).firstChild, e)
            },
            children: function(e) {
                return Te(e.firstChild)
            },
            contents: function(e) {
                return e.contentDocument || pe.merge([], e.childNodes)
            }
        }, function(e, t) {
            pe.fn[e] = function(n, a) {
                var i = pe.map(this, t, n);
                return "Until" !== e.slice(-5) && (a = n), a && "string" == typeof a && (i = pe.filter(a, i)), this.length > 1 && (Be[e] || pe.uniqueSort(i), Ee.test(e) && i.reverse()), this.pushStack(i)
            }
        });
        var De = /[^\x20\t\r\n\f]+/g;
        pe.Callbacks = function(e) {
            e = "string" == typeof e ? o(e) : pe.extend({}, e);
            var t, n, a, i, r = [],
                s = [],
                l = -1,
                c = function() {
                    for(i = e.once, a = t = !0; s.length; l = -1)
                        for(n = s.shift(); ++l < r.length;) r[l].apply(n[0], n[1]) === !1 && e.stopOnFalse && (l = r.length, n = !1);
                    e.memory || (n = !1), t = !1, i && (r = n ? [] : "")
                },
                u = {
                    add: function() {
                        return r && (n && !t && (l = r.length - 1, s.push(n)), function t(n) {
                            pe.each(n, function(n, a) {
                                pe.isFunction(a) ? e.unique && u.has(a) || r.push(a) : a && a.length && "string" !== pe.type(a) && t(a)
                            })
                        }(arguments), n && !t && c()), this
                    },
                    remove: function() {
                        return pe.each(arguments, function(e, t) {
                            for(var n;
                                (n = pe.inArray(t, r, n)) > -1;) r.splice(n, 1), n <= l && l--
                        }), this
                    },
                    has: function(e) {
                        return e ? pe.inArray(e, r) > -1 : r.length > 0
                    },
                    empty: function() {
                        return r && (r = []), this
                    },
                    disable: function() {
                        return i = s = [], r = n = "", this
                    },
                    disabled: function() {
                        return !r
                    },
                    lock: function() {
                        return i = s = [], n || t || (r = n = ""), this
                    },
                    locked: function() {
                        return !!i
                    },
                    fireWith: function(e, n) {
                        return i || (n = n || [], n = [e, n.slice ? n.slice() : n], s.push(n), t || c()), this
                    },
                    fire: function() {
                        return u.fireWith(this, arguments), this
                    },
                    fired: function() {
                        return !!a
                    }
                };
            return u
        }, pe.extend({
            Deferred: function(t) {
                var n = [
                        ["notify", "progress", pe.Callbacks("memory"), pe.Callbacks("memory"), 2],
                        ["resolve", "done", pe.Callbacks("once memory"), pe.Callbacks("once memory"), 0, "resolved"],
                        ["reject", "fail", pe.Callbacks("once memory"), pe.Callbacks("once memory"), 1, "rejected"]
                    ],
                    a = "pending",
                    i = {
                        state: function() {
                            return a
                        },
                        always: function() {
                            return r.done(arguments).fail(arguments), this
                        },
                        catch: function(e) {
                            return i.then(null, e)
                        },
                        pipe: function() {
                            var e = arguments;
                            return pe.Deferred(function(t) {
                                pe.each(n, function(n, a) {
                                    var i = pe.isFunction(e[a[4]]) && e[a[4]];
                                    r[a[1]](function() {
                                        var e = i && i.apply(this, arguments);
                                        e && pe.isFunction(e.promise) ? e.promise().progress(t.notify).done(t.resolve).fail(t.reject) : t[a[0] + "With"](this, i ? [e] : arguments)
                                    })
                                }), e = null
                            }).promise()
                        },
                        then: function(t, a, i) {
                            function r(t, n, a, i) {
                                return function() {
                                    var c = this,
                                        u = arguments,
                                        d = function() {
                                            var e, d;
                                            if(!(t < o)) {
                                                if(e = a.apply(c, u), e === n.promise()) throw new TypeError("Thenable self-resolution");
                                                d = e && ("object" == typeof e || "function" == typeof e) && e.then, pe.isFunction(d) ? i ? d.call(e, r(o, n, s, i), r(o, n, l, i)) : (o++, d.call(e, r(o, n, s, i), r(o, n, l, i), r(o, n, s, n.notifyWith))) : (a !== s && (c = void 0, u = [e]), (i || n.resolveWith)(c, u))
                                            }
                                        },
                                        f = i ? d : function() {
                                            try {
                                                d()
                                            } catch(e) {
                                                pe.Deferred.exceptionHook && pe.Deferred.exceptionHook(e, f.stackTrace), t + 1 >= o && (a !== l && (c = void 0, u = [e]), n.rejectWith(c, u))
                                            }
                                        };
                                    t ? f() : (pe.Deferred.getStackHook && (f.stackTrace = pe.Deferred.getStackHook()), e.setTimeout(f))
                                }
                            }
                            var o = 0;
                            return pe.Deferred(function(e) {
                                n[0][3].add(r(0, e, pe.isFunction(i) ? i : s, e.notifyWith)), n[1][3].add(r(0, e, pe.isFunction(t) ? t : s)), n[2][3].add(r(0, e, pe.isFunction(a) ? a : l))
                            }).promise()
                        },
                        promise: function(e) {
                            return null != e ? pe.extend(e, i) : i
                        }
                    },
                    r = {};
                return pe.each(n, function(e, t) {
                    var o = t[2],
                        s = t[5];
                    i[t[1]] = o.add, s && o.add(function() {
                        a = s
                    }, n[3 - e][2].disable, n[0][2].lock), o.add(t[3].fire), r[t[0]] = function() {
                        return r[t[0] + "With"](this === r ? void 0 : this, arguments), this
                    }, r[t[0] + "With"] = o.fireWith
                }), i.promise(r), t && t.call(r, r), r
            },
            when: function(e) {
                var t = arguments.length,
                    n = t,
                    a = Array(n),
                    i = ae.call(arguments),
                    r = pe.Deferred(),
                    o = function(e) {
                        return function(n) {
                            a[e] = this, i[e] = arguments.length > 1 ? ae.call(arguments) : n, --t || r.resolveWith(a, i)
                        }
                    };
                if(t <= 1 && (c(e, r.done(o(n)).resolve, r.reject), "pending" === r.state() || pe.isFunction(i[n] && i[n].then))) return r.then();
                for(; n--;) c(i[n], o(n), r.reject);
                return r.promise()
            }
        });
        var Ne = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
        pe.Deferred.exceptionHook = function(t, n) {
            e.console && e.console.warn && t && Ne.test(t.name) && e.console.warn("jQuery.Deferred exception: " + t.message, t.stack, n)
        }, pe.readyException = function(t) {
            e.setTimeout(function() {
                throw t
            })
        };
        var Pe = pe.Deferred();
        pe.fn.ready = function(e) {
            return Pe.then(e).catch(function(e) {
                pe.readyException(e)
            }), this
        }, pe.extend({
            isReady: !1,
            readyWait: 1,
            holdReady: function(e) {
                e ? pe.readyWait++ : pe.ready(!0)
            },
            ready: function(e) {
                (e === !0 ? --pe.readyWait : pe.isReady) || (pe.isReady = !0, e !== !0 && --pe.readyWait > 0 || Pe.resolveWith(te, [pe]))
            }
        }), pe.ready.then = Pe.then, "complete" === te.readyState || "loading" !== te.readyState && !te.documentElement.doScroll ? e.setTimeout(pe.ready) : (te.addEventListener("DOMContentLoaded", u), e.addEventListener("load", u));
        var Le = function(e, t, n, a, i, r, o) {
                var s = 0,
                    l = e.length,
                    c = null == n;
                if("object" === pe.type(n)) {
                    i = !0;
                    for(s in n) Le(e, t, s, n[s], !0, r, o)
                } else if(void 0 !== a && (i = !0, pe.isFunction(a) || (o = !0), c && (o ? (t.call(e, a), t = null) : (c = t, t = function(e, t, n) {
                        return c.call(pe(e), n)
                    })), t))
                    for(; s < l; s++) t(e[s], n, o ? a : a.call(e[s], s, t(e[s], n)));
                return i ? e : c ? t.call(e) : l ? t(e[0], n) : r
            },
            Re = function(e) {
                return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
            };
        d.uid = 1, d.prototype = {
            cache: function(e) {
                var t = e[this.expando];
                return t || (t = {}, Re(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
                    value: t,
                    configurable: !0
                }))), t
            },
            set: function(e, t, n) {
                var a, i = this.cache(e);
                if("string" == typeof t) i[pe.camelCase(t)] = n;
                else
                    for(a in t) i[pe.camelCase(a)] = t[a];
                return i
            },
            get: function(e, t) {
                return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][pe.camelCase(t)]
            },
            access: function(e, t, n) {
                return void 0 === t || t && "string" == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n), void 0 !== n ? n : t)
            },
            remove: function(e, t) {
                var n, a = e[this.expando];
                if(void 0 !== a) {
                    if(void 0 !== t) {
                        pe.isArray(t) ? t = t.map(pe.camelCase) : (t = pe.camelCase(t), t = t in a ? [t] : t.match(De) || []), n = t.length;
                        for(; n--;) delete a[t[n]]
                    }(void 0 === t || pe.isEmptyObject(a)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando])
                }
            },
            hasData: function(e) {
                var t = e[this.expando];
                return void 0 !== t && !pe.isEmptyObject(t)
            }
        };
        var _e = new d,
            Ie = new d,
            Fe = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
            Ge = /[A-Z]/g;
        pe.extend({
            hasData: function(e) {
                return Ie.hasData(e) || _e.hasData(e)
            },
            data: function(e, t, n) {
                return Ie.access(e, t, n)
            },
            removeData: function(e, t) {
                Ie.remove(e, t)
            },
            _data: function(e, t, n) {
                return _e.access(e, t, n)
            },
            _removeData: function(e, t) {
                _e.remove(e, t)
            }
        }), pe.fn.extend({
            data: function(e, t) {
                var n, a, i, r = this[0],
                    o = r && r.attributes;
                if(void 0 === e) {
                    if(this.length && (i = Ie.get(r), 1 === r.nodeType && !_e.get(r, "hasDataAttrs"))) {
                        for(n = o.length; n--;) o[n] && (a = o[n].name, 0 === a.indexOf("data-") && (a = pe.camelCase(a.slice(5)), h(r, a, i[a])));
                        _e.set(r, "hasDataAttrs", !0)
                    }
                    return i
                }
                return "object" == typeof e ? this.each(function() {
                    Ie.set(this, e)
                }) : Le(this, function(t) {
                    var n;
                    if(r && void 0 === t) {
                        if(n = Ie.get(r, e), void 0 !== n) return n;
                        if(n = h(r, e), void 0 !== n) return n
                    } else this.each(function() {
                        Ie.set(this, e, t)
                    })
                }, null, t, arguments.length > 1, null, !0)
            },
            removeData: function(e) {
                return this.each(function() {
                    Ie.remove(this, e)
                })
            }
        }), pe.extend({
            queue: function(e, t, n) {
                var a;
                if(e) return t = (t || "fx") + "queue", a = _e.get(e, t), n && (!a || pe.isArray(n) ? a = _e.access(e, t, pe.makeArray(n)) : a.push(n)), a || []
            },
            dequeue: function(e, t) {
                t = t || "fx";
                var n = pe.queue(e, t),
                    a = n.length,
                    i = n.shift(),
                    r = pe._queueHooks(e, t),
                    o = function() {
                        pe.dequeue(e, t)
                    };
                "inprogress" === i && (i = n.shift(), a--), i && ("fx" === t && n.unshift("inprogress"), delete r.stop, i.call(e, o, r)), !a && r && r.empty.fire()
            },
            _queueHooks: function(e, t) {
                var n = t + "queueHooks";
                return _e.get(e, n) || _e.access(e, n, {
                    empty: pe.Callbacks("once memory").add(function() {
                        _e.remove(e, [t + "queue", n])
                    })
                })
            }
        }), pe.fn.extend({
            queue: function(e, t) {
                var n = 2;
                return "string" != typeof e && (t = e, e = "fx", n--), arguments.length < n ? pe.queue(this[0], e) : void 0 === t ? this : this.each(function() {
                    var n = pe.queue(this, e, t);
                    pe._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && pe.dequeue(this, e)
                })
            },
            dequeue: function(e) {
                return this.each(function() {
                    pe.dequeue(this, e)
                })
            },
            clearQueue: function(e) {
                return this.queue(e || "fx", [])
            },
            promise: function(e, t) {
                var n, a = 1,
                    i = pe.Deferred(),
                    r = this,
                    o = this.length,
                    s = function() {
                        --a || i.resolveWith(r, [r])
                    };
                for("string" != typeof e && (t = e, e = void 0), e = e || "fx"; o--;) n = _e.get(r[o], e + "queueHooks"), n && n.empty && (a++, n.empty.add(s));
                return s(), i.promise(t)
            }
        });
        var Oe = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
            je = new RegExp("^(?:([+-])=|)(" + Oe + ")([a-z%]*)$", "i"),
            ze = ["Top", "Right", "Bottom", "Left"],
            $e = function(e, t) {
                return e = t || e, "none" === e.style.display || "" === e.style.display && pe.contains(e.ownerDocument, e) && "none" === pe.css(e, "display")
            },
            He = function(e, t, n, a) {
                var i, r, o = {};
                for(r in t) o[r] = e.style[r], e.style[r] = t[r];
                i = n.apply(e, a || []);
                for(r in t) e.style[r] = o[r];
                return i
            },
            Ue = {};
        pe.fn.extend({
            show: function() {
                return b(this, !0)
            },
            hide: function() {
                return b(this)
            },
            toggle: function(e) {
                return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
                    $e(this) ? pe(this).show() : pe(this).hide()
                })
            }
        });
        var Ve = /^(?:checkbox|radio)$/i,
            We = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i,
            qe = /^$|\/(?:java|ecma)script/i,
            Ke = {
                option: [1, "<select multiple='multiple'>", "</select>"],
                thead: [1, "<table>", "</table>"],
                col: [2, "<table><colgroup>", "</colgroup></table>"],
                tr: [2, "<table><tbody>", "</tbody></table>"],
                td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
                _default: [0, "", ""]
            };
        Ke.optgroup = Ke.option, Ke.tbody = Ke.tfoot = Ke.colgroup = Ke.caption = Ke.thead, Ke.th = Ke.td;
        var Je = /<|&#?\w+;/;
        ! function() {
            var e = te.createDocumentFragment(),
                t = e.appendChild(te.createElement("div")),
                n = te.createElement("input");
            n.setAttribute("type", "radio"), n.setAttribute("checked", "checked"), n.setAttribute("name", "t"), t.appendChild(n), fe.checkClone = t.cloneNode(!0).cloneNode(!0).lastChild.checked, t.innerHTML = "<textarea>x</textarea>", fe.noCloneChecked = !!t.cloneNode(!0).lastChild.defaultValue
        }();
        var Ye = te.documentElement,
            Ze = /^key/,
            Qe = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
            Xe = /^([^.]*)(?:\.(.+)|)/;
        pe.event = {
            global: {},
            add: function(e, t, n, a, i) {
                var r, o, s, l, c, u, d, f, h, p, m, b = _e.get(e);
                if(b)
                    for(n.handler && (r = n, n = r.handler, i = r.selector), i && pe.find.matchesSelector(Ye, i), n.guid || (n.guid = pe.guid++), (l = b.events) || (l = b.events = {}), (o = b.handle) || (o = b.handle = function(t) {
                            return "undefined" != typeof pe && pe.event.triggered !== t.type ? pe.event.dispatch.apply(e, arguments) : void 0
                        }), t = (t || "").match(De) || [""], c = t.length; c--;) s = Xe.exec(t[c]) || [], h = m = s[1], p = (s[2] || "").split(".").sort(), h && (d = pe.event.special[h] || {}, h = (i ? d.delegateType : d.bindType) || h, d = pe.event.special[h] || {}, u = pe.extend({
                        type: h,
                        origType: m,
                        data: a,
                        handler: n,
                        guid: n.guid,
                        selector: i,
                        needsContext: i && pe.expr.match.needsContext.test(i),
                        namespace: p.join(".")
                    }, r), (f = l[h]) || (f = l[h] = [], f.delegateCount = 0, d.setup && d.setup.call(e, a, p, o) !== !1 || e.addEventListener && e.addEventListener(h, o)), d.add && (d.add.call(e, u), u.handler.guid || (u.handler.guid = n.guid)), i ? f.splice(f.delegateCount++, 0, u) : f.push(u), pe.event.global[h] = !0)
            },
            remove: function(e, t, n, a, i) {
                var r, o, s, l, c, u, d, f, h, p, m, b = _e.hasData(e) && _e.get(e);
                if(b && (l = b.events)) {
                    for(t = (t || "").match(De) || [""], c = t.length; c--;)
                        if(s = Xe.exec(t[c]) || [], h = m = s[1], p = (s[2] || "").split(".").sort(), h) {
                            for(d = pe.event.special[h] || {}, h = (a ? d.delegateType : d.bindType) || h, f = l[h] || [], s = s[2] && new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)"), o = r = f.length; r--;) u = f[r], !i && m !== u.origType || n && n.guid !== u.guid || s && !s.test(u.namespace) || a && a !== u.selector && ("**" !== a || !u.selector) || (f.splice(r, 1), u.selector && f.delegateCount--, d.remove && d.remove.call(e, u));
                            o && !f.length && (d.teardown && d.teardown.call(e, p, b.handle) !== !1 || pe.removeEvent(e, h, b.handle), delete l[h])
                        } else
                            for(h in l) pe.event.remove(e, h + t[c], n, a, !0);
                    pe.isEmptyObject(l) && _e.remove(e, "handle events")
                }
            },
            dispatch: function(e) {
                var t, n, a, i, r, o, s = pe.event.fix(e),
                    l = new Array(arguments.length),
                    c = (_e.get(this, "events") || {})[s.type] || [],
                    u = pe.event.special[s.type] || {};
                for(l[0] = s, t = 1; t < arguments.length; t++) l[t] = arguments[t];
                if(s.delegateTarget = this, !u.preDispatch || u.preDispatch.call(this, s) !== !1) {
                    for(o = pe.event.handlers.call(this, s, c), t = 0;
                        (i = o[t++]) && !s.isPropagationStopped();)
                        for(s.currentTarget = i.elem, n = 0;
                            (r = i.handlers[n++]) && !s.isImmediatePropagationStopped();) s.rnamespace && !s.rnamespace.test(r.namespace) || (s.handleObj = r, s.data = r.data, a = ((pe.event.special[r.origType] || {}).handle || r.handler).apply(i.elem, l), void 0 !== a && (s.result = a) === !1 && (s.preventDefault(), s.stopPropagation()));
                    return u.postDispatch && u.postDispatch.call(this, s), s.result
                }
            },
            handlers: function(e, t) {
                var n, a, i, r, o, s = [],
                    l = t.delegateCount,
                    c = e.target;
                if(l && c.nodeType && !("click" === e.type && e.button >= 1))
                    for(; c !== this; c = c.parentNode || this)
                        if(1 === c.nodeType && ("click" !== e.type || c.disabled !== !0)) {
                            for(r = [], o = {}, n = 0; n < l; n++) a = t[n], i = a.selector + " ", void 0 === o[i] && (o[i] = a.needsContext ? pe(i, this).index(c) > -1 : pe.find(i, this, null, [c]).length), o[i] && r.push(a);
                            r.length && s.push({
                                elem: c,
                                handlers: r
                            })
                        }
                return c = this, l < t.length && s.push({
                    elem: c,
                    handlers: t.slice(l)
                }), s
            },
            addProp: function(e, t) {
                Object.defineProperty(pe.Event.prototype, e, {
                    enumerable: !0,
                    configurable: !0,
                    get: pe.isFunction(t) ? function() {
                        if(this.originalEvent) return t(this.originalEvent)
                    } : function() {
                        if(this.originalEvent) return this.originalEvent[e]
                    },
                    set: function(t) {
                        Object.defineProperty(this, e, {
                            enumerable: !0,
                            configurable: !0,
                            writable: !0,
                            value: t
                        })
                    }
                })
            },
            fix: function(e) {
                return e[pe.expando] ? e : new pe.Event(e)
            },
            special: {
                load: {
                    noBubble: !0
                },
                focus: {
                    trigger: function() {
                        if(this !== w() && this.focus) return this.focus(), !1
                    },
                    delegateType: "focusin"
                },
                blur: {
                    trigger: function() {
                        if(this === w() && this.blur) return this.blur(), !1
                    },
                    delegateType: "focusout"
                },
                click: {
                    trigger: function() {
                        if("checkbox" === this.type && this.click && pe.nodeName(this, "input")) return this.click(), !1
                    },
                    _default: function(e) {
                        return pe.nodeName(e.target, "a")
                    }
                },
                beforeunload: {
                    postDispatch: function(e) {
                        void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                    }
                }
            }
        }, pe.removeEvent = function(e, t, n) {
            e.removeEventListener && e.removeEventListener(t, n)
        }, pe.Event = function(e, t) {
            return this instanceof pe.Event ? (e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && e.returnValue === !1 ? C : T, this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target, this.currentTarget = e.currentTarget, this.relatedTarget = e.relatedTarget) : this.type = e, t && pe.extend(this, t), this.timeStamp = e && e.timeStamp || pe.now(), void(this[pe.expando] = !0)) : new pe.Event(e, t)
        }, pe.Event.prototype = {
            constructor: pe.Event,
            isDefaultPrevented: T,
            isPropagationStopped: T,
            isImmediatePropagationStopped: T,
            isSimulated: !1,
            preventDefault: function() {
                var e = this.originalEvent;
                this.isDefaultPrevented = C, e && !this.isSimulated && e.preventDefault()
            },
            stopPropagation: function() {
                var e = this.originalEvent;
                this.isPropagationStopped = C, e && !this.isSimulated && e.stopPropagation()
            },
            stopImmediatePropagation: function() {
                var e = this.originalEvent;
                this.isImmediatePropagationStopped = C, e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation()
            }
        }, pe.each({
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
            which: function(e) {
                var t = e.button;
                return null == e.which && Ze.test(e.type) ? null != e.charCode ? e.charCode : e.keyCode : !e.which && void 0 !== t && Qe.test(e.type) ? 1 & t ? 1 : 2 & t ? 3 : 4 & t ? 2 : 0 : e.which
            }
        }, pe.event.addProp), pe.each({
            mouseenter: "mouseover",
            mouseleave: "mouseout",
            pointerenter: "pointerover",
            pointerleave: "pointerout"
        }, function(e, t) {
            pe.event.special[e] = {
                delegateType: t,
                bindType: t,
                handle: function(e) {
                    var n, a = this,
                        i = e.relatedTarget,
                        r = e.handleObj;
                    return i && (i === a || pe.contains(a, i)) || (e.type = r.origType, n = r.handler.apply(this, arguments), e.type = t), n
                }
            }
        }), pe.fn.extend({
            on: function(e, t, n, a) {
                return x(this, e, t, n, a)
            },
            one: function(e, t, n, a) {
                return x(this, e, t, n, a, 1)
            },
            off: function(e, t, n) {
                var a, i;
                if(e && e.preventDefault && e.handleObj) return a = e.handleObj, pe(e.delegateTarget).off(a.namespace ? a.origType + "." + a.namespace : a.origType, a.selector, a.handler), this;
                if("object" == typeof e) {
                    for(i in e) this.off(i, t, e[i]);
                    return this
                }
                return t !== !1 && "function" != typeof t || (n = t, t = void 0), n === !1 && (n = T), this.each(function() {
                    pe.event.remove(this, e, n, t)
                })
            }
        });
        var et = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
            tt = /<script|<style|<link/i,
            nt = /checked\s*(?:[^=]|=\s*.checked.)/i,
            at = /^true\/(.*)/,
            it = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
        pe.extend({
            htmlPrefilter: function(e) {
                return e.replace(et, "<$1></$2>")
            },
            clone: function(e, t, n) {
                var a, i, r, o, s = e.cloneNode(!0),
                    l = pe.contains(e.ownerDocument, e);
                if(!(fe.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || pe.isXMLDoc(e)))
                    for(o = g(s), r = g(e), a = 0, i = r.length; a < i; a++) E(r[a], o[a]);
                if(t)
                    if(n)
                        for(r = r || g(e), o = o || g(s), a = 0, i = r.length; a < i; a++) M(r[a], o[a]);
                    else M(e, s);
                return o = g(s, "script"), o.length > 0 && v(o, !l && g(e, "script")), s
            },
            cleanData: function(e) {
                for(var t, n, a, i = pe.event.special, r = 0; void 0 !== (n = e[r]); r++)
                    if(Re(n)) {
                        if(t = n[_e.expando]) {
                            if(t.events)
                                for(a in t.events) i[a] ? pe.event.remove(n, a) : pe.removeEvent(n, a, t.handle);
                            n[_e.expando] = void 0
                        }
                        n[Ie.expando] && (n[Ie.expando] = void 0)
                    }
            }
        }), pe.fn.extend({
            detach: function(e) {
                return D(this, e, !0)
            },
            remove: function(e) {
                return D(this, e)
            },
            text: function(e) {
                return Le(this, function(e) {
                    return void 0 === e ? pe.text(this) : this.empty().each(function() {
                        1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e)
                    })
                }, null, e, arguments.length)
            },
            append: function() {
                return B(this, arguments, function(e) {
                    if(1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                        var t = S(this, e);
                        t.appendChild(e)
                    }
                })
            },
            prepend: function() {
                return B(this, arguments, function(e) {
                    if(1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                        var t = S(this, e);
                        t.insertBefore(e, t.firstChild)
                    }
                })
            },
            before: function() {
                return B(this, arguments, function(e) {
                    this.parentNode && this.parentNode.insertBefore(e, this)
                })
            },
            after: function() {
                return B(this, arguments, function(e) {
                    this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
                })
            },
            empty: function() {
                for(var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (pe.cleanData(g(e, !1)), e.textContent = "");
                return this
            },
            clone: function(e, t) {
                return e = null != e && e, t = null == t ? e : t, this.map(function() {
                    return pe.clone(this, e, t)
                })
            },
            html: function(e) {
                return Le(this, function(e) {
                    var t = this[0] || {},
                        n = 0,
                        a = this.length;
                    if(void 0 === e && 1 === t.nodeType) return t.innerHTML;
                    if("string" == typeof e && !tt.test(e) && !Ke[(We.exec(e) || ["", ""])[1].toLowerCase()]) {
                        e = pe.htmlPrefilter(e);
                        try {
                            for(; n < a; n++) t = this[n] || {}, 1 === t.nodeType && (pe.cleanData(g(t, !1)), t.innerHTML = e);
                            t = 0
                        } catch(e) {}
                    }
                    t && this.empty().append(e)
                }, null, e, arguments.length)
            },
            replaceWith: function() {
                var e = [];
                return B(this, arguments, function(t) {
                    var n = this.parentNode;
                    pe.inArray(this, e) < 0 && (pe.cleanData(g(this)), n && n.replaceChild(t, this))
                }, e)
            }
        }), pe.each({
            appendTo: "append",
            prependTo: "prepend",
            insertBefore: "before",
            insertAfter: "after",
            replaceAll: "replaceWith"
        }, function(e, t) {
            pe.fn[e] = function(e) {
                for(var n, a = [], i = pe(e), r = i.length - 1, o = 0; o <= r; o++) n = o === r ? this : this.clone(!0), pe(i[o])[t](n), re.apply(a, n.get());
                return this.pushStack(a)
            }
        });
        var rt = /^margin/,
            ot = new RegExp("^(" + Oe + ")(?!px)[a-z%]+$", "i"),
            st = function(t) {
                var n = t.ownerDocument.defaultView;
                return n && n.opener || (n = e), n.getComputedStyle(t)
            };
        ! function() {
            function t() {
                if(s) {
                    s.style.cssText = "box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%", s.innerHTML = "", Ye.appendChild(o);
                    var t = e.getComputedStyle(s);
                    n = "1%" !== t.top, r = "2px" === t.marginLeft, a = "4px" === t.width, s.style.marginRight = "50%", i = "4px" === t.marginRight, Ye.removeChild(o), s = null
                }
            }
            var n, a, i, r, o = te.createElement("div"),
                s = te.createElement("div");
            s.style && (s.style.backgroundClip = "content-box", s.cloneNode(!0).style.backgroundClip = "", fe.clearCloneStyle = "content-box" === s.style.backgroundClip, o.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute", o.appendChild(s), pe.extend(fe, {
                pixelPosition: function() {
                    return t(), n
                },
                boxSizingReliable: function() {
                    return t(), a
                },
                pixelMarginRight: function() {
                    return t(), i
                },
                reliableMarginLeft: function() {
                    return t(), r
                }
            }))
        }();
        var lt = /^(none|table(?!-c[ea]).+)/,
            ct = {
                position: "absolute",
                visibility: "hidden",
                display: "block"
            },
            ut = {
                letterSpacing: "0",
                fontWeight: "400"
            },
            dt = ["Webkit", "Moz", "ms"],
            ft = te.createElement("div").style;
        pe.extend({
            cssHooks: {
                opacity: {
                    get: function(e, t) {
                        if(t) {
                            var n = N(e, "opacity");
                            return "" === n ? "1" : n
                        }
                    }
                }
            },
            cssNumber: {
                animationIterationCount: !0,
                columnCount: !0,
                fillOpacity: !0,
                flexGrow: !0,
                flexShrink: !0,
                fontWeight: !0,
                lineHeight: !0,
                opacity: !0,
                order: !0,
                orphans: !0,
                widows: !0,
                zIndex: !0,
                zoom: !0
            },
            cssProps: {
                float: "cssFloat"
            },
            style: function(e, t, n, a) {
                if(e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                    var i, r, o, s = pe.camelCase(t),
                        l = e.style;
                    return t = pe.cssProps[s] || (pe.cssProps[s] = L(s) || s), o = pe.cssHooks[t] || pe.cssHooks[s], void 0 === n ? o && "get" in o && void 0 !== (i = o.get(e, !1, a)) ? i : l[t] : (r = typeof n, "string" === r && (i = je.exec(n)) && i[1] && (n = p(e, t, i), r = "number"), null != n && n === n && ("number" === r && (n += i && i[3] || (pe.cssNumber[s] ? "" : "px")), fe.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (l[t] = "inherit"), o && "set" in o && void 0 === (n = o.set(e, n, a)) || (l[t] = n)), void 0)
                }
            },
            css: function(e, t, n, a) {
                var i, r, o, s = pe.camelCase(t);
                return t = pe.cssProps[s] || (pe.cssProps[s] = L(s) || s), o = pe.cssHooks[t] || pe.cssHooks[s], o && "get" in o && (i = o.get(e, !0, n)), void 0 === i && (i = N(e, t, a)), "normal" === i && t in ut && (i = ut[t]), "" === n || n ? (r = parseFloat(i), n === !0 || isFinite(r) ? r || 0 : i) : i
            }
        }), pe.each(["height", "width"], function(e, t) {
            pe.cssHooks[t] = {
                get: function(e, n, a) {
                    if(n) return !lt.test(pe.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? I(e, t, a) : He(e, ct, function() {
                        return I(e, t, a)
                    })
                },
                set: function(e, n, a) {
                    var i, r = a && st(e),
                        o = a && _(e, t, a, "border-box" === pe.css(e, "boxSizing", !1, r), r);
                    return o && (i = je.exec(n)) && "px" !== (i[3] || "px") && (e.style[t] = n, n = pe.css(e, t)), R(e, n, o)
                }
            }
        }), pe.cssHooks.marginLeft = P(fe.reliableMarginLeft, function(e, t) {
            if(t) return(parseFloat(N(e, "marginLeft")) || e.getBoundingClientRect().left - He(e, {
                marginLeft: 0
            }, function() {
                return e.getBoundingClientRect().left
            })) + "px"
        }), pe.each({
            margin: "",
            padding: "",
            border: "Width"
        }, function(e, t) {
            pe.cssHooks[e + t] = {
                expand: function(n) {
                    for(var a = 0, i = {}, r = "string" == typeof n ? n.split(" ") : [n]; a < 4; a++) i[e + ze[a] + t] = r[a] || r[a - 2] || r[0];
                    return i
                }
            }, rt.test(e) || (pe.cssHooks[e + t].set = R)
        }), pe.fn.extend({
            css: function(e, t) {
                return Le(this, function(e, t, n) {
                    var a, i, r = {},
                        o = 0;
                    if(pe.isArray(t)) {
                        for(a = st(e), i = t.length; o < i; o++) r[t[o]] = pe.css(e, t[o], !1, a);
                        return r
                    }
                    return void 0 !== n ? pe.style(e, t, n) : pe.css(e, t)
                }, e, t, arguments.length > 1)
            }
        }), pe.Tween = F, F.prototype = {
            constructor: F,
            init: function(e, t, n, a, i, r) {
                this.elem = e, this.prop = n, this.easing = i || pe.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = a, this.unit = r || (pe.cssNumber[n] ? "" : "px")
            },
            cur: function() {
                var e = F.propHooks[this.prop];
                return e && e.get ? e.get(this) : F.propHooks._default.get(this)
            },
            run: function(e) {
                var t, n = F.propHooks[this.prop];
                return this.options.duration ? this.pos = t = pe.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : F.propHooks._default.set(this), this
            }
        }, F.prototype.init.prototype = F.prototype, F.propHooks = {
            _default: {
                get: function(e) {
                    var t;
                    return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = pe.css(e.elem, e.prop, ""), t && "auto" !== t ? t : 0)
                },
                set: function(e) {
                    pe.fx.step[e.prop] ? pe.fx.step[e.prop](e) : 1 !== e.elem.nodeType || null == e.elem.style[pe.cssProps[e.prop]] && !pe.cssHooks[e.prop] ? e.elem[e.prop] = e.now : pe.style(e.elem, e.prop, e.now + e.unit)
                }
            }
        }, F.propHooks.scrollTop = F.propHooks.scrollLeft = {
            set: function(e) {
                e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
            }
        }, pe.easing = {
            linear: function(e) {
                return e
            },
            swing: function(e) {
                return .5 - Math.cos(e * Math.PI) / 2
            },
            _default: "swing"
        }, pe.fx = F.prototype.init, pe.fx.step = {};
        var ht, pt, mt = /^(?:toggle|show|hide)$/,
            bt = /queueHooks$/;
        pe.Animation = pe.extend(U, {
                tweeners: {
                    "*": [function(e, t) {
                        var n = this.createTween(e, t);
                        return p(n.elem, e, je.exec(t), n), n
                    }]
                },
                tweener: function(e, t) {
                    pe.isFunction(e) ? (t = e, e = ["*"]) : e = e.match(De);
                    for(var n, a = 0, i = e.length; a < i; a++) n = e[a], U.tweeners[n] = U.tweeners[n] || [], U.tweeners[n].unshift(t)
                },
                prefilters: [$],
                prefilter: function(e, t) {
                    t ? U.prefilters.unshift(e) : U.prefilters.push(e)
                }
            }), pe.speed = function(e, t, n) {
                var a = e && "object" == typeof e ? pe.extend({}, e) : {
                    complete: n || !n && t || pe.isFunction(e) && e,
                    duration: e,
                    easing: n && t || t && !pe.isFunction(t) && t
                };
                return pe.fx.off || te.hidden ? a.duration = 0 : "number" != typeof a.duration && (a.duration in pe.fx.speeds ? a.duration = pe.fx.speeds[a.duration] : a.duration = pe.fx.speeds._default), null != a.queue && a.queue !== !0 || (a.queue = "fx"), a.old = a.complete, a.complete = function() {
                    pe.isFunction(a.old) && a.old.call(this), a.queue && pe.dequeue(this, a.queue)
                }, a
            }, pe.fn.extend({
                fadeTo: function(e, t, n, a) {
                    return this.filter($e).css("opacity", 0).show().end().animate({
                        opacity: t
                    }, e, n, a)
                },
                animate: function(e, t, n, a) {
                    var i = pe.isEmptyObject(e),
                        r = pe.speed(t, n, a),
                        o = function() {
                            var t = U(this, pe.extend({}, e), r);
                            (i || _e.get(this, "finish")) && t.stop(!0)
                        };
                    return o.finish = o, i || r.queue === !1 ? this.each(o) : this.queue(r.queue, o)
                },
                stop: function(e, t, n) {
                    var a = function(e) {
                        var t = e.stop;
                        delete e.stop, t(n)
                    };
                    return "string" != typeof e && (n = t, t = e, e = void 0), t && e !== !1 && this.queue(e || "fx", []), this.each(function() {
                        var t = !0,
                            i = null != e && e + "queueHooks",
                            r = pe.timers,
                            o = _e.get(this);
                        if(i) o[i] && o[i].stop && a(o[i]);
                        else
                            for(i in o) o[i] && o[i].stop && bt.test(i) && a(o[i]);
                        for(i = r.length; i--;) r[i].elem !== this || null != e && r[i].queue !== e || (r[i].anim.stop(n), t = !1, r.splice(i, 1));
                        !t && n || pe.dequeue(this, e)
                    })
                },
                finish: function(e) {
                    return e !== !1 && (e = e || "fx"), this.each(function() {
                        var t, n = _e.get(this),
                            a = n[e + "queue"],
                            i = n[e + "queueHooks"],
                            r = pe.timers,
                            o = a ? a.length : 0;
                        for(n.finish = !0, pe.queue(this, e, []), i && i.stop && i.stop.call(this, !0), t = r.length; t--;) r[t].elem === this && r[t].queue === e && (r[t].anim.stop(!0), r.splice(t, 1));
                        for(t = 0; t < o; t++) a[t] && a[t].finish && a[t].finish.call(this);
                        delete n.finish
                    })
                }
            }), pe.each(["toggle", "show", "hide"], function(e, t) {
                var n = pe.fn[t];
                pe.fn[t] = function(e, a, i) {
                    return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(j(t, !0), e, a, i)
                }
            }), pe.each({
                slideDown: j("show"),
                slideUp: j("hide"),
                slideToggle: j("toggle"),
                fadeIn: {
                    opacity: "show"
                },
                fadeOut: {
                    opacity: "hide"
                },
                fadeToggle: {
                    opacity: "toggle"
                }
            }, function(e, t) {
                pe.fn[e] = function(e, n, a) {
                    return this.animate(t, e, n, a)
                }
            }), pe.timers = [], pe.fx.tick = function() {
                var e, t = 0,
                    n = pe.timers;
                for(ht = pe.now(); t < n.length; t++) e = n[t], e() || n[t] !== e || n.splice(t--, 1);
                n.length || pe.fx.stop(), ht = void 0
            }, pe.fx.timer = function(e) {
                pe.timers.push(e), e() ? pe.fx.start() : pe.timers.pop()
            }, pe.fx.interval = 13, pe.fx.start = function() {
                pt || (pt = e.requestAnimationFrame ? e.requestAnimationFrame(G) : e.setInterval(pe.fx.tick, pe.fx.interval))
            }, pe.fx.stop = function() {
                e.cancelAnimationFrame ? e.cancelAnimationFrame(pt) : e.clearInterval(pt), pt = null
            }, pe.fx.speeds = {
                slow: 600,
                fast: 200,
                _default: 400
            }, pe.fn.delay = function(t, n) {
                return t = pe.fx ? pe.fx.speeds[t] || t : t, n = n || "fx", this.queue(n, function(n, a) {
                    var i = e.setTimeout(n, t);
                    a.stop = function() {
                        e.clearTimeout(i)
                    }
                })
            },
            function() {
                var e = te.createElement("input"),
                    t = te.createElement("select"),
                    n = t.appendChild(te.createElement("option"));
                e.type = "checkbox", fe.checkOn = "" !== e.value, fe.optSelected = n.selected, e = te.createElement("input"), e.value = "t", e.type = "radio", fe.radioValue = "t" === e.value
            }();
        var gt, vt = pe.expr.attrHandle;
        pe.fn.extend({
            attr: function(e, t) {
                return Le(this, pe.attr, e, t, arguments.length > 1)
            },
            removeAttr: function(e) {
                return this.each(function() {
                    pe.removeAttr(this, e)
                })
            }
        }), pe.extend({
            attr: function(e, t, n) {
                var a, i, r = e.nodeType;
                if(3 !== r && 8 !== r && 2 !== r) return "undefined" == typeof e.getAttribute ? pe.prop(e, t, n) : (1 === r && pe.isXMLDoc(e) || (i = pe.attrHooks[t.toLowerCase()] || (pe.expr.match.bool.test(t) ? gt : void 0)), void 0 !== n ? null === n ? void pe.removeAttr(e, t) : i && "set" in i && void 0 !== (a = i.set(e, n, t)) ? a : (e.setAttribute(t, n + ""), n) : i && "get" in i && null !== (a = i.get(e, t)) ? a : (a = pe.find.attr(e, t), null == a ? void 0 : a))
            },
            attrHooks: {
                type: {
                    set: function(e, t) {
                        if(!fe.radioValue && "radio" === t && pe.nodeName(e, "input")) {
                            var n = e.value;
                            return e.setAttribute("type", t), n && (e.value = n), t
                        }
                    }
                }
            },
            removeAttr: function(e, t) {
                var n, a = 0,
                    i = t && t.match(De);
                if(i && 1 === e.nodeType)
                    for(; n = i[a++];) e.removeAttribute(n)
            }
        }), gt = {
            set: function(e, t, n) {
                return t === !1 ? pe.removeAttr(e, n) : e.setAttribute(n, n), n
            }
        }, pe.each(pe.expr.match.bool.source.match(/\w+/g), function(e, t) {
            var n = vt[t] || pe.find.attr;
            vt[t] = function(e, t, a) {
                var i, r, o = t.toLowerCase();
                return a || (r = vt[o], vt[o] = i, i = null != n(e, t, a) ? o : null, vt[o] = r), i
            }
        });
        var yt = /^(?:input|select|textarea|button)$/i,
            Ct = /^(?:a|area)$/i;
        pe.fn.extend({
            prop: function(e, t) {
                return Le(this, pe.prop, e, t, arguments.length > 1)
            },
            removeProp: function(e) {
                return this.each(function() {
                    delete this[pe.propFix[e] || e]
                })
            }
        }), pe.extend({
            prop: function(e, t, n) {
                var a, i, r = e.nodeType;
                if(3 !== r && 8 !== r && 2 !== r) return 1 === r && pe.isXMLDoc(e) || (t = pe.propFix[t] || t, i = pe.propHooks[t]), void 0 !== n ? i && "set" in i && void 0 !== (a = i.set(e, n, t)) ? a : e[t] = n : i && "get" in i && null !== (a = i.get(e, t)) ? a : e[t]
            },
            propHooks: {
                tabIndex: {
                    get: function(e) {
                        var t = pe.find.attr(e, "tabindex");
                        return t ? parseInt(t, 10) : yt.test(e.nodeName) || Ct.test(e.nodeName) && e.href ? 0 : -1
                    }
                }
            },
            propFix: {
                for: "htmlFor",
                class: "className"
            }
        }), fe.optSelected || (pe.propHooks.selected = {
            get: function(e) {
                var t = e.parentNode;
                return t && t.parentNode && t.parentNode.selectedIndex, null
            },
            set: function(e) {
                var t = e.parentNode;
                t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex)
            }
        }), pe.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
            pe.propFix[this.toLowerCase()] = this
        }), pe.fn.extend({
            addClass: function(e) {
                var t, n, a, i, r, o, s, l = 0;
                if(pe.isFunction(e)) return this.each(function(t) {
                    pe(this).addClass(e.call(this, t, W(this)))
                });
                if("string" == typeof e && e)
                    for(t = e.match(De) || []; n = this[l++];)
                        if(i = W(n), a = 1 === n.nodeType && " " + V(i) + " ") {
                            for(o = 0; r = t[o++];) a.indexOf(" " + r + " ") < 0 && (a += r + " ");
                            s = V(a), i !== s && n.setAttribute("class", s)
                        }
                return this
            },
            removeClass: function(e) {
                var t, n, a, i, r, o, s, l = 0;
                if(pe.isFunction(e)) return this.each(function(t) {
                    pe(this).removeClass(e.call(this, t, W(this)))
                });
                if(!arguments.length) return this.attr("class", "");
                if("string" == typeof e && e)
                    for(t = e.match(De) || []; n = this[l++];)
                        if(i = W(n), a = 1 === n.nodeType && " " + V(i) + " ") {
                            for(o = 0; r = t[o++];)
                                for(; a.indexOf(" " + r + " ") > -1;) a = a.replace(" " + r + " ", " ");
                            s = V(a), i !== s && n.setAttribute("class", s)
                        }
                return this
            },
            toggleClass: function(e, t) {
                var n = typeof e;
                return "boolean" == typeof t && "string" === n ? t ? this.addClass(e) : this.removeClass(e) : pe.isFunction(e) ? this.each(function(n) {
                    pe(this).toggleClass(e.call(this, n, W(this), t), t)
                }) : this.each(function() {
                    var t, a, i, r;
                    if("string" === n)
                        for(a = 0, i = pe(this), r = e.match(De) || []; t = r[a++];) i.hasClass(t) ? i.removeClass(t) : i.addClass(t);
                    else void 0 !== e && "boolean" !== n || (t = W(this), t && _e.set(this, "__className__", t), this.setAttribute && this.setAttribute("class", t || e === !1 ? "" : _e.get(this, "__className__") || ""))
                })
            },
            hasClass: function(e) {
                var t, n, a = 0;
                for(t = " " + e + " "; n = this[a++];)
                    if(1 === n.nodeType && (" " + V(W(n)) + " ").indexOf(t) > -1) return !0;
                return !1
            }
        });
        var Tt = /\r/g;
        pe.fn.extend({
            val: function(e) {
                var t, n, a, i = this[0]; {
                    if(arguments.length) return a = pe.isFunction(e), this.each(function(n) {
                        var i;
                        1 === this.nodeType && (i = a ? e.call(this, n, pe(this).val()) : e, null == i ? i = "" : "number" == typeof i ? i += "" : pe.isArray(i) && (i = pe.map(i, function(e) {
                            return null == e ? "" : e + ""
                        })), t = pe.valHooks[this.type] || pe.valHooks[this.nodeName.toLowerCase()], t && "set" in t && void 0 !== t.set(this, i, "value") || (this.value = i))
                    });
                    if(i) return t = pe.valHooks[i.type] || pe.valHooks[i.nodeName.toLowerCase()], t && "get" in t && void 0 !== (n = t.get(i, "value")) ? n : (n = i.value, "string" == typeof n ? n.replace(Tt, "") : null == n ? "" : n)
                }
            }
        }), pe.extend({
            valHooks: {
                option: {
                    get: function(e) {
                        var t = pe.find.attr(e, "value");
                        return null != t ? t : V(pe.text(e))
                    }
                },
                select: {
                    get: function(e) {
                        var t, n, a, i = e.options,
                            r = e.selectedIndex,
                            o = "select-one" === e.type,
                            s = o ? null : [],
                            l = o ? r + 1 : i.length;
                        for(a = r < 0 ? l : o ? r : 0; a < l; a++)
                            if(n = i[a], (n.selected || a === r) && !n.disabled && (!n.parentNode.disabled || !pe.nodeName(n.parentNode, "optgroup"))) {
                                if(t = pe(n).val(), o) return t;
                                s.push(t)
                            }
                        return s
                    },
                    set: function(e, t) {
                        for(var n, a, i = e.options, r = pe.makeArray(t), o = i.length; o--;) a = i[o], (a.selected = pe.inArray(pe.valHooks.option.get(a), r) > -1) && (n = !0);
                        return n || (e.selectedIndex = -1), r
                    }
                }
            }
        }), pe.each(["radio", "checkbox"], function() {
            pe.valHooks[this] = {
                set: function(e, t) {
                    if(pe.isArray(t)) return e.checked = pe.inArray(pe(e).val(), t) > -1
                }
            }, fe.checkOn || (pe.valHooks[this].get = function(e) {
                return null === e.getAttribute("value") ? "on" : e.value
            })
        });
        var wt = /^(?:focusinfocus|focusoutblur)$/;
        pe.extend(pe.event, {
            trigger: function(t, n, a, i) {
                var r, o, s, l, c, u, d, f = [a || te],
                    h = ce.call(t, "type") ? t.type : t,
                    p = ce.call(t, "namespace") ? t.namespace.split(".") : [];
                if(o = s = a = a || te, 3 !== a.nodeType && 8 !== a.nodeType && !wt.test(h + pe.event.triggered) && (h.indexOf(".") > -1 && (p = h.split("."), h = p.shift(), p.sort()), c = h.indexOf(":") < 0 && "on" + h, t = t[pe.expando] ? t : new pe.Event(h, "object" == typeof t && t), t.isTrigger = i ? 2 : 3, t.namespace = p.join("."), t.rnamespace = t.namespace ? new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = void 0, t.target || (t.target = a), n = null == n ? [t] : pe.makeArray(n, [t]), d = pe.event.special[h] || {}, i || !d.trigger || d.trigger.apply(a, n) !== !1)) {
                    if(!i && !d.noBubble && !pe.isWindow(a)) {
                        for(l = d.delegateType || h, wt.test(l + h) || (o = o.parentNode); o; o = o.parentNode) f.push(o), s = o;
                        s === (a.ownerDocument || te) && f.push(s.defaultView || s.parentWindow || e)
                    }
                    for(r = 0;
                        (o = f[r++]) && !t.isPropagationStopped();) t.type = r > 1 ? l : d.bindType || h, u = (_e.get(o, "events") || {})[t.type] && _e.get(o, "handle"), u && u.apply(o, n), u = c && o[c], u && u.apply && Re(o) && (t.result = u.apply(o, n), t.result === !1 && t.preventDefault());
                    return t.type = h, i || t.isDefaultPrevented() || d._default && d._default.apply(f.pop(), n) !== !1 || !Re(a) || c && pe.isFunction(a[h]) && !pe.isWindow(a) && (s = a[c], s && (a[c] = null), pe.event.triggered = h, a[h](), pe.event.triggered = void 0, s && (a[c] = s)), t.result
                }
            },
            simulate: function(e, t, n) {
                var a = pe.extend(new pe.Event, n, {
                    type: e,
                    isSimulated: !0
                });
                pe.event.trigger(a, null, t)
            }
        }), pe.fn.extend({
            trigger: function(e, t) {
                return this.each(function() {
                    pe.event.trigger(e, t, this)
                })
            },
            triggerHandler: function(e, t) {
                var n = this[0];
                if(n) return pe.event.trigger(e, t, n, !0)
            }
        }), pe.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function(e, t) {
            pe.fn[t] = function(e, n) {
                return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
            }
        }), pe.fn.extend({
            hover: function(e, t) {
                return this.mouseenter(e).mouseleave(t || e)
            }
        }), fe.focusin = "onfocusin" in e, fe.focusin || pe.each({
            focus: "focusin",
            blur: "focusout"
        }, function(e, t) {
            var n = function(e) {
                pe.event.simulate(t, e.target, pe.event.fix(e))
            };
            pe.event.special[t] = {
                setup: function() {
                    var a = this.ownerDocument || this,
                        i = _e.access(a, t);
                    i || a.addEventListener(e, n, !0), _e.access(a, t, (i || 0) + 1)
                },
                teardown: function() {
                    var a = this.ownerDocument || this,
                        i = _e.access(a, t) - 1;
                    i ? _e.access(a, t, i) : (a.removeEventListener(e, n, !0), _e.remove(a, t))
                }
            }
        });
        var xt = e.location,
            St = pe.now(),
            At = /\?/;
        pe.parseXML = function(t) {
            var n;
            if(!t || "string" != typeof t) return null;
            try {
                n = (new e.DOMParser).parseFromString(t, "text/xml")
            } catch(e) {
                n = void 0
            }
            return n && !n.getElementsByTagName("parsererror").length || pe.error("Invalid XML: " + t), n
        };
        var kt = /\[\]$/,
            Mt = /\r?\n/g,
            Et = /^(?:submit|button|image|reset|file)$/i,
            Bt = /^(?:input|select|textarea|keygen)/i;
        pe.param = function(e, t) {
            var n, a = [],
                i = function(e, t) {
                    var n = pe.isFunction(t) ? t() : t;
                    a[a.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n)
                };
            if(pe.isArray(e) || e.jquery && !pe.isPlainObject(e)) pe.each(e, function() {
                i(this.name, this.value)
            });
            else
                for(n in e) q(n, e[n], t, i);
            return a.join("&")
        }, pe.fn.extend({
            serialize: function() {
                return pe.param(this.serializeArray())
            },
            serializeArray: function() {
                return this.map(function() {
                    var e = pe.prop(this, "elements");
                    return e ? pe.makeArray(e) : this
                }).filter(function() {
                    var e = this.type;
                    return this.name && !pe(this).is(":disabled") && Bt.test(this.nodeName) && !Et.test(e) && (this.checked || !Ve.test(e))
                }).map(function(e, t) {
                    var n = pe(this).val();
                    return null == n ? null : pe.isArray(n) ? pe.map(n, function(e) {
                        return {
                            name: t.name,
                            value: e.replace(Mt, "\r\n")
                        }
                    }) : {
                        name: t.name,
                        value: n.replace(Mt, "\r\n")
                    }
                }).get()
            }
        });
        var Dt = /%20/g,
            Nt = /#.*$/,
            Pt = /([?&])_=[^&]*/,
            Lt = /^(.*?):[ \t]*([^\r\n]*)$/gm,
            Rt = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
            _t = /^(?:GET|HEAD)$/,
            It = /^\/\//,
            Ft = {},
            Gt = {},
            Ot = "*/".concat("*"),
            jt = te.createElement("a");
        jt.href = xt.href, pe.extend({
            active: 0,
            lastModified: {},
            etag: {},
            ajaxSettings: {
                url: xt.href,
                type: "GET",
                isLocal: Rt.test(xt.protocol),
                global: !0,
                processData: !0,
                async: !0,
                contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                accepts: {
                    "*": Ot,
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
                converters: {
                    "* text": String,
                    "text html": !0,
                    "text json": JSON.parse,
                    "text xml": pe.parseXML
                },
                flatOptions: {
                    url: !0,
                    context: !0
                }
            },
            ajaxSetup: function(e, t) {
                return t ? Y(Y(e, pe.ajaxSettings), t) : Y(pe.ajaxSettings, e)
            },
            ajaxPrefilter: K(Ft),
            ajaxTransport: K(Gt),
            ajax: function(t, n) {
                function a(t, n, a, s) {
                    var c, f, h, C, T, w = n;
                    u || (u = !0, l && e.clearTimeout(l), i = void 0, o = s || "", x.readyState = t > 0 ? 4 : 0, c = t >= 200 && t < 300 || 304 === t, a && (C = Z(p, x, a)), C = Q(p, C, x, c), c ? (p.ifModified && (T = x.getResponseHeader("Last-Modified"), T && (pe.lastModified[r] = T), T = x.getResponseHeader("etag"), T && (pe.etag[r] = T)), 204 === t || "HEAD" === p.type ? w = "nocontent" : 304 === t ? w = "notmodified" : (w = C.state, f = C.data, h = C.error, c = !h)) : (h = w, !t && w || (w = "error", t < 0 && (t = 0))), x.status = t, x.statusText = (n || w) + "", c ? g.resolveWith(m, [f, w, x]) : g.rejectWith(m, [x, w, h]), x.statusCode(y), y = void 0, d && b.trigger(c ? "ajaxSuccess" : "ajaxError", [x, p, c ? f : h]), v.fireWith(m, [x, w]), d && (b.trigger("ajaxComplete", [x, p]), --pe.active || pe.event.trigger("ajaxStop")))
                }
                "object" == typeof t && (n = t, t = void 0), n = n || {};
                var i, r, o, s, l, c, u, d, f, h, p = pe.ajaxSetup({}, n),
                    m = p.context || p,
                    b = p.context && (m.nodeType || m.jquery) ? pe(m) : pe.event,
                    g = pe.Deferred(),
                    v = pe.Callbacks("once memory"),
                    y = p.statusCode || {},
                    C = {},
                    T = {},
                    w = "canceled",
                    x = {
                        readyState: 0,
                        getResponseHeader: function(e) {
                            var t;
                            if(u) {
                                if(!s)
                                    for(s = {}; t = Lt.exec(o);) s[t[1].toLowerCase()] = t[2];
                                t = s[e.toLowerCase()]
                            }
                            return null == t ? null : t
                        },
                        getAllResponseHeaders: function() {
                            return u ? o : null
                        },
                        setRequestHeader: function(e, t) {
                            return null == u && (e = T[e.toLowerCase()] = T[e.toLowerCase()] || e, C[e] = t), this
                        },
                        overrideMimeType: function(e) {
                            return null == u && (p.mimeType = e), this
                        },
                        statusCode: function(e) {
                            var t;
                            if(e)
                                if(u) x.always(e[x.status]);
                                else
                                    for(t in e) y[t] = [y[t], e[t]];
                            return this
                        },
                        abort: function(e) {
                            var t = e || w;
                            return i && i.abort(t), a(0, t), this
                        }
                    };
                if(g.promise(x), p.url = ((t || p.url || xt.href) + "").replace(It, xt.protocol + "//"), p.type = n.method || n.type || p.method || p.type, p.dataTypes = (p.dataType || "*").toLowerCase().match(De) || [""], null == p.crossDomain) {
                    c = te.createElement("a");
                    try {
                        c.href = p.url, c.href = c.href, p.crossDomain = jt.protocol + "//" + jt.host != c.protocol + "//" + c.host
                    } catch(e) {
                        p.crossDomain = !0
                    }
                }
                if(p.data && p.processData && "string" != typeof p.data && (p.data = pe.param(p.data, p.traditional)), J(Ft, p, n, x), u) return x;
                d = pe.event && p.global, d && 0 === pe.active++ && pe.event.trigger("ajaxStart"), p.type = p.type.toUpperCase(), p.hasContent = !_t.test(p.type), r = p.url.replace(Nt, ""), p.hasContent ? p.data && p.processData && 0 === (p.contentType || "").indexOf("application/x-www-form-urlencoded") && (p.data = p.data.replace(Dt, "+")) : (h = p.url.slice(r.length), p.data && (r += (At.test(r) ? "&" : "?") + p.data, delete p.data), p.cache === !1 && (r = r.replace(Pt, "$1"), h = (At.test(r) ? "&" : "?") + "_=" + St++ + h), p.url = r + h), p.ifModified && (pe.lastModified[r] && x.setRequestHeader("If-Modified-Since", pe.lastModified[r]), pe.etag[r] && x.setRequestHeader("If-None-Match", pe.etag[r])), (p.data && p.hasContent && p.contentType !== !1 || n.contentType) && x.setRequestHeader("Content-Type", p.contentType), x.setRequestHeader("Accept", p.dataTypes[0] && p.accepts[p.dataTypes[0]] ? p.accepts[p.dataTypes[0]] + ("*" !== p.dataTypes[0] ? ", " + Ot + "; q=0.01" : "") : p.accepts["*"]);
                for(f in p.headers) x.setRequestHeader(f, p.headers[f]);
                if(p.beforeSend && (p.beforeSend.call(m, x, p) === !1 || u)) return x.abort();
                if(w = "abort", v.add(p.complete), x.done(p.success), x.fail(p.error), i = J(Gt, p, n, x)) {
                    if(x.readyState = 1, d && b.trigger("ajaxSend", [x, p]), u) return x;
                    p.async && p.timeout > 0 && (l = e.setTimeout(function() {
                        x.abort("timeout")
                    }, p.timeout));
                    try {
                        u = !1, i.send(C, a)
                    } catch(e) {
                        if(u) throw e;
                        a(-1, e)
                    }
                } else a(-1, "No Transport");
                return x
            },
            getJSON: function(e, t, n) {
                return pe.get(e, t, n, "json")
            },
            getScript: function(e, t) {
                return pe.get(e, void 0, t, "script")
            }
        }), pe.each(["get", "post"], function(e, t) {
            pe[t] = function(e, n, a, i) {
                return pe.isFunction(n) && (i = i || a, a = n, n = void 0), pe.ajax(pe.extend({
                    url: e,
                    type: t,
                    dataType: i,
                    data: n,
                    success: a
                }, pe.isPlainObject(e) && e))
            }
        }), pe._evalUrl = function(e) {
            return pe.ajax({
                url: e,
                type: "GET",
                dataType: "script",
                cache: !0,
                async: !1,
                global: !1,
                throws: !0
            })
        }, pe.fn.extend({
            wrapAll: function(e) {
                var t;
                return this[0] && (pe.isFunction(e) && (e = e.call(this[0])), t = pe(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function() {
                    for(var e = this; e.firstElementChild;) e = e.firstElementChild;
                    return e
                }).append(this)), this
            },
            wrapInner: function(e) {
                return pe.isFunction(e) ? this.each(function(t) {
                    pe(this).wrapInner(e.call(this, t))
                }) : this.each(function() {
                    var t = pe(this),
                        n = t.contents();
                    n.length ? n.wrapAll(e) : t.append(e)
                })
            },
            wrap: function(e) {
                var t = pe.isFunction(e);
                return this.each(function(n) {
                    pe(this).wrapAll(t ? e.call(this, n) : e)
                })
            },
            unwrap: function(e) {
                return this.parent(e).not("body").each(function() {
                    pe(this).replaceWith(this.childNodes)
                }), this
            }
        }), pe.expr.pseudos.hidden = function(e) {
            return !pe.expr.pseudos.visible(e)
        }, pe.expr.pseudos.visible = function(e) {
            return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length)
        }, pe.ajaxSettings.xhr = function() {
            try {
                return new e.XMLHttpRequest
            } catch(e) {}
        };
        var zt = {
                0: 200,
                1223: 204
            },
            $t = pe.ajaxSettings.xhr();
        fe.cors = !!$t && "withCredentials" in $t, fe.ajax = $t = !!$t, pe.ajaxTransport(function(t) {
            var n, a;
            if(fe.cors || $t && !t.crossDomain) return {
                send: function(i, r) {
                    var o, s = t.xhr();
                    if(s.open(t.type, t.url, t.async, t.username, t.password), t.xhrFields)
                        for(o in t.xhrFields) s[o] = t.xhrFields[o];
                    t.mimeType && s.overrideMimeType && s.overrideMimeType(t.mimeType), t.crossDomain || i["X-Requested-With"] || (i["X-Requested-With"] = "XMLHttpRequest");
                    for(o in i) s.setRequestHeader(o, i[o]);
                    n = function(e) {
                        return function() {
                            n && (n = a = s.onload = s.onerror = s.onabort = s.onreadystatechange = null, "abort" === e ? s.abort() : "error" === e ? "number" != typeof s.status ? r(0, "error") : r(s.status, s.statusText) : r(zt[s.status] || s.status, s.statusText, "text" !== (s.responseType || "text") || "string" != typeof s.responseText ? {
                                binary: s.response
                            } : {
                                text: s.responseText
                            }, s.getAllResponseHeaders()))
                        }
                    }, s.onload = n(), a = s.onerror = n("error"), void 0 !== s.onabort ? s.onabort = a : s.onreadystatechange = function() {
                        4 === s.readyState && e.setTimeout(function() {
                            n && a()
                        })
                    }, n = n("abort");
                    try {
                        s.send(t.hasContent && t.data || null)
                    } catch(e) {
                        if(n) throw e
                    }
                },
                abort: function() {
                    n && n()
                }
            }
        }), pe.ajaxPrefilter(function(e) {
            e.crossDomain && (e.contents.script = !1)
        }), pe.ajaxSetup({
            accepts: {
                script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
            },
            contents: {
                script: /\b(?:java|ecma)script\b/
            },
            converters: {
                "text script": function(e) {
                    return pe.globalEval(e), e
                }
            }
        }), pe.ajaxPrefilter("script", function(e) {
            void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET")
        }), pe.ajaxTransport("script", function(e) {
            if(e.crossDomain) {
                var t, n;
                return {
                    send: function(a, i) {
                        t = pe("<script>").prop({
                            charset: e.scriptCharset,
                            src: e.url
                        }).on("load error", n = function(e) {
                            t.remove(), n = null, e && i("error" === e.type ? 404 : 200, e.type)
                        }), te.head.appendChild(t[0])
                    },
                    abort: function() {
                        n && n()
                    }
                }
            }
        });
        var Ht = [],
            Ut = /(=)\?(?=&|$)|\?\?/;
        pe.ajaxSetup({
            jsonp: "callback",
            jsonpCallback: function() {
                var e = Ht.pop() || pe.expando + "_" + St++;
                return this[e] = !0, e
            }
        }), pe.ajaxPrefilter("json jsonp", function(t, n, a) {
            var i, r, o, s = t.jsonp !== !1 && (Ut.test(t.url) ? "url" : "string" == typeof t.data && 0 === (t.contentType || "").indexOf("application/x-www-form-urlencoded") && Ut.test(t.data) && "data");
            if(s || "jsonp" === t.dataTypes[0]) return i = t.jsonpCallback = pe.isFunction(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, s ? t[s] = t[s].replace(Ut, "$1" + i) : t.jsonp !== !1 && (t.url += (At.test(t.url) ? "&" : "?") + t.jsonp + "=" + i), t.converters["script json"] = function() {
                return o || pe.error(i + " was not called"), o[0]
            }, t.dataTypes[0] = "json", r = e[i], e[i] = function() {
                o = arguments
            }, a.always(function() {
                void 0 === r ? pe(e).removeProp(i) : e[i] = r, t[i] && (t.jsonpCallback = n.jsonpCallback, Ht.push(i)), o && pe.isFunction(r) && r(o[0]), o = r = void 0
            }), "script"
        }), fe.createHTMLDocument = function() {
            var e = te.implementation.createHTMLDocument("").body;
            return e.innerHTML = "<form></form><form></form>", 2 === e.childNodes.length
        }(), pe.parseHTML = function(e, t, n) {
            if("string" != typeof e) return [];
            "boolean" == typeof t && (n = t, t = !1);
            var a, i, r;
            return t || (fe.createHTMLDocument ? (t = te.implementation.createHTMLDocument(""), a = t.createElement("base"), a.href = te.location.href, t.head.appendChild(a)) : t = te), i = xe.exec(e), r = !n && [], i ? [t.createElement(i[1])] : (i = y([e], t, r), r && r.length && pe(r).remove(), pe.merge([], i.childNodes))
        }, pe.fn.load = function(e, t, n) {
            var a, i, r, o = this,
                s = e.indexOf(" ");
            return s > -1 && (a = V(e.slice(s)), e = e.slice(0, s)), pe.isFunction(t) ? (n = t, t = void 0) : t && "object" == typeof t && (i = "POST"), o.length > 0 && pe.ajax({
                url: e,
                type: i || "GET",
                dataType: "html",
                data: t
            }).done(function(e) {
                r = arguments, o.html(a ? pe("<div>").append(pe.parseHTML(e)).find(a) : e)
            }).always(n && function(e, t) {
                o.each(function() {
                    n.apply(this, r || [e.responseText, t, e])
                })
            }), this
        }, pe.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
            pe.fn[t] = function(e) {
                return this.on(t, e)
            }
        }), pe.expr.pseudos.animated = function(e) {
            return pe.grep(pe.timers, function(t) {
                return e === t.elem
            }).length
        }, pe.offset = {
            setOffset: function(e, t, n) {
                var a, i, r, o, s, l, c, u = pe.css(e, "position"),
                    d = pe(e),
                    f = {};
                "static" === u && (e.style.position = "relative"), s = d.offset(), r = pe.css(e, "top"), l = pe.css(e, "left"), c = ("absolute" === u || "fixed" === u) && (r + l).indexOf("auto") > -1, c ? (a = d.position(), o = a.top, i = a.left) : (o = parseFloat(r) || 0, i = parseFloat(l) || 0), pe.isFunction(t) && (t = t.call(e, n, pe.extend({}, s))), null != t.top && (f.top = t.top - s.top + o), null != t.left && (f.left = t.left - s.left + i), "using" in t ? t.using.call(e, f) : d.css(f)
            }
        }, pe.fn.extend({
            offset: function(e) {
                if(arguments.length) return void 0 === e ? this : this.each(function(t) {
                    pe.offset.setOffset(this, e, t)
                });
                var t, n, a, i, r = this[0];
                if(r) return r.getClientRects().length ? (a = r.getBoundingClientRect(), a.width || a.height ? (i = r.ownerDocument, n = X(i), t = i.documentElement, {
                    top: a.top + n.pageYOffset - t.clientTop,
                    left: a.left + n.pageXOffset - t.clientLeft
                }) : a) : {
                    top: 0,
                    left: 0
                }
            },
            position: function() {
                if(this[0]) {
                    var e, t, n = this[0],
                        a = {
                            top: 0,
                            left: 0
                        };
                    return "fixed" === pe.css(n, "position") ? t = n.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), pe.nodeName(e[0], "html") || (a = e.offset()), a = {
                        top: a.top + pe.css(e[0], "borderTopWidth", !0),
                        left: a.left + pe.css(e[0], "borderLeftWidth", !0)
                    }), {
                        top: t.top - a.top - pe.css(n, "marginTop", !0),
                        left: t.left - a.left - pe.css(n, "marginLeft", !0)
                    }
                }
            },
            offsetParent: function() {
                return this.map(function() {
                    for(var e = this.offsetParent; e && "static" === pe.css(e, "position");) e = e.offsetParent;
                    return e || Ye
                })
            }
        }), pe.each({
            scrollLeft: "pageXOffset",
            scrollTop: "pageYOffset"
        }, function(e, t) {
            var n = "pageYOffset" === t;
            pe.fn[e] = function(a) {
                return Le(this, function(e, a, i) {
                    var r = X(e);
                    return void 0 === i ? r ? r[t] : e[a] : void(r ? r.scrollTo(n ? r.pageXOffset : i, n ? i : r.pageYOffset) : e[a] = i)
                }, e, a, arguments.length)
            }
        }), pe.each(["top", "left"], function(e, t) {
            pe.cssHooks[t] = P(fe.pixelPosition, function(e, n) {
                if(n) return n = N(e, t), ot.test(n) ? pe(e).position()[t] + "px" : n
            })
        }), pe.each({
            Height: "height",
            Width: "width"
        }, function(e, t) {
            pe.each({
                padding: "inner" + e,
                content: t,
                "": "outer" + e
            }, function(n, a) {
                pe.fn[a] = function(i, r) {
                    var o = arguments.length && (n || "boolean" != typeof i),
                        s = n || (i === !0 || r === !0 ? "margin" : "border");
                    return Le(this, function(t, n, i) {
                        var r;
                        return pe.isWindow(t) ? 0 === a.indexOf("outer") ? t["inner" + e] : t.document.documentElement["client" + e] : 9 === t.nodeType ? (r = t.documentElement, Math.max(t.body["scroll" + e], r["scroll" + e], t.body["offset" + e], r["offset" + e], r["client" + e])) : void 0 === i ? pe.css(t, n, s) : pe.style(t, n, i, s)
                    }, t, o ? i : void 0, o)
                }
            })
        }), pe.fn.extend({
            bind: function(e, t, n) {
                return this.on(e, null, t, n)
            },
            unbind: function(e, t) {
                return this.off(e, null, t)
            },
            delegate: function(e, t, n, a) {
                return this.on(t, e, n, a)
            },
            undelegate: function(e, t, n) {
                return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
            }
        }), pe.parseJSON = JSON.parse, "function" == typeof define && define.amd && define("jquery", [], function() {
            return pe
        });
        var Vt = e.jQuery,
            Wt = e.$;
        return pe.noConflict = function(t) {
            return e.$ === pe && (e.$ = Wt), t && e.jQuery === pe && (e.jQuery = Vt), pe
        }, t || (e.jQuery = e.$ = pe), pe
    }), function(e, t, n) {
        "use strict";
        e.fn.backstretch = function(a, r) {
            return a !== n && 0 !== a.length || e.error("No images were supplied for Backstretch"), 0 === e(t).scrollTop() && t.scrollTo(0, 0), this.each(function() {
                var t = e(this),
                    n = t.data("backstretch");
                if(n) {
                    if("string" == typeof a && "function" == typeof n[a]) return void n[a](r);
                    r = e.extend(n.options, r), n.destroy(!0)
                }
                n = new i(this, a, r), t.data("backstretch", n)
            })
        }, e.backstretch = function(t, n) {
            return e("body").backstretch(t, n).data("backstretch")
        }, e.expr[":"].backstretch = function(t) {
            return e(t).data("backstretch") !== n
        }, e.fn.backstretch.defaults = {
            centeredX: !0,
            centeredY: !0,
            duration: 5e3,
            fade: 0
        };
        var a = {
                wrap: {
                    left: 0,
                    top: 0,
                    overflow: "hidden",
                    margin: 0,
                    padding: 0,
                    height: "100%",
                    width: "100%",
                    zIndex: -999999
                },
                img: {
                    position: "absolute",
                    display: "none",
                    margin: 0,
                    padding: 0,
                    border: "none",
                    width: "auto",
                    height: "auto",
                    maxHeight: "none",
                    maxWidth: "none",
                    zIndex: -999999
                }
            },
            i = function(n, i, o) {
                this.options = e.extend({}, e.fn.backstretch.defaults, o || {}), this.images = e.isArray(i) ? i : [i], e.each(this.images, function() {
                    e("<img />")[0].src = this
                }), this.isBody = n === document.body, this.$container = e(n), this.$root = this.isBody ? e(r ? t : document) : this.$container;
                var s = this.$container.children(".backstretch").first();
                if(this.$wrap = s.length ? s : e('<div class="backstretch"></div>').css(a.wrap).appendTo(this.$container), !this.isBody) {
                    var l = this.$container.css("position"),
                        c = this.$container.css("zIndex");
                    this.$container.css({
                        position: "static" === l ? "relative" : l,
                        zIndex: "auto" === c ? 0 : c,
                        background: "none"
                    }), this.$wrap.css({
                        zIndex: -999998
                    })
                }
                this.$wrap.css({
                    position: this.isBody && r ? "fixed" : "absolute"
                }), this.index = 0, this.show(this.index), e(t).on("resize.backstretch", e.proxy(this.resize, this)).on("orientationchange.backstretch", e.proxy(function() {
                    this.isBody && 0 === t.pageYOffset && (t.scrollTo(0, 1), this.resize())
                }, this))
            };
        i.prototype = {
            resize: function() {
                try {
                    var e, n = {
                            left: 0,
                            top: 0
                        },
                        a = this.isBody ? this.$root.width() : this.$root.innerWidth(),
                        i = a,
                        r = this.isBody ? t.innerHeight ? t.innerHeight : this.$root.height() : this.$root.innerHeight(),
                        o = i / this.$img.data("ratio");
                    o >= r ? (e = (o - r) / 2, this.options.centeredY && (n.top = "-" + e + "px")) : (o = r, i = o * this.$img.data("ratio"), e = (i - a) / 2, this.options.centeredX && (n.left = "-" + e + "px")), this.$wrap.css({
                        width: a,
                        height: r
                    }).find("img:not(.deleteable)").css({
                        width: i,
                        height: o
                    }).css(n)
                } catch(e) {}
                return this
            },
            show: function(t) {
                if(!(Math.abs(t) > this.images.length - 1)) {
                    var n = this,
                        i = n.$wrap.find("img").addClass("deleteable"),
                        r = {
                            relatedTarget: n.$container[0]
                        };
                    return n.$container.trigger(e.Event("backstretch.before", r), [n, t]), this.index = t, clearInterval(n.interval), n.$img = e("<img />").css(a.img).bind("load", function(a) {
                        var o = this.width || e(a.target).width(),
                            s = this.height || e(a.target).height();
                        e(this).data("ratio", o / s), e(this).fadeIn(n.options.speed || n.options.fade, function() {
                            i.remove(), n.paused || n.cycle(), e(["after", "show"]).each(function() {
                                n.$container.trigger(e.Event("backstretch." + this, r), [n, t])
                            })
                        }), n.resize()
                    }).appendTo(n.$wrap), n.$img.attr("src", n.images[t]), n
                }
            },
            next: function() {
                return this.show(this.index < this.images.length - 1 ? this.index + 1 : 0)
            },
            prev: function() {
                return this.show(0 === this.index ? this.images.length - 1 : this.index - 1)
            },
            pause: function() {
                return this.paused = !0, this
            },
            resume: function() {
                return this.paused = !1, this.next(), this
            },
            cycle: function() {
                return this.images.length > 1 && (clearInterval(this.interval), this.interval = setInterval(e.proxy(function() {
                    this.paused || this.next()
                }, this), this.options.duration)), this
            },
            destroy: function(n) {
                e(t).off("resize.backstretch orientationchange.backstretch"), clearInterval(this.interval), n || this.$wrap.remove(), this.$container.removeData("backstretch")
            }
        };
        var r = function() {
            var e = navigator.userAgent,
                n = navigator.platform,
                a = e.match(/AppleWebKit\/([0-9]+)/),
                i = !!a && a[1],
                r = e.match(/Fennec\/([0-9]+)/),
                o = !!r && r[1],
                s = e.match(/Opera Mobi\/([0-9]+)/),
                l = !!s && s[1],
                c = e.match(/MSIE ([0-9]+)/),
                u = !!c && c[1];
            return !((n.indexOf("iPhone") > -1 || n.indexOf("iPad") > -1 || n.indexOf("iPod") > -1) && i && i < 534 || t.operamini && "[object OperaMini]" === {}.toString.call(t.operamini) || s && l < 7458 || e.indexOf("Android") > -1 && i && i < 533 || o && o < 6 || "palmGetResource" in t && i && i < 534 || e.indexOf("MeeGo") > -1 && e.indexOf("NokiaBrowser/8.5.0") > -1 || u && u <= 6)
        }()
    }(jQuery, window), function() {
        ! function(e) {
            var t = this || (0, eval)("this"),
                n = t.document,
                a = t.navigator,
                i = t.jQuery,
                r = t.JSON;
            ! function(e) {
                "function" == typeof define && define.amd ? define(["exports", "require"], e) : e("object" == typeof exports && "object" == typeof module ? module.exports || exports : t.ko = {})
            }(function(o, s) {
                function l(e, t) {
                    return(null === e || typeof e in b) && e === t
                }

                function c(t, n) {
                    var a;
                    return function() {
                        a || (a = m.a.setTimeout(function() {
                            a = e, t()
                        }, n))
                    }
                }

                function u(e, t) {
                    var n;
                    return function() {
                        clearTimeout(n), n = m.a.setTimeout(e, t)
                    }
                }

                function d(e, t) {
                    t && t !== g ? "beforeChange" === t ? this.Lb(e) : this.Ha(e, t) : this.Mb(e)
                }

                function f(e, t) {
                    null !== t && t.k && t.k()
                }

                function h(e, t) {
                    var n = this.Ic,
                        a = n[w];
                    a.S || (this.lb && this.Ma[t] ? (n.Qb(t, e, this.Ma[t]), this.Ma[t] = null, --this.lb) : a.r[t] || n.Qb(t, e, a.s ? {
                        ia: e
                    } : n.wc(e)))
                }

                function p(e, t, n, a) {
                    m.d[e] = {
                        init: function(e, i, r, o, s) {
                            var l, c;
                            return m.m(function() {
                                var r = i(),
                                    o = m.a.c(r),
                                    o = !n != !o,
                                    u = !c;
                                (u || t || o !== l) && (u && m.va.Aa() && (c = m.a.ua(m.f.childNodes(e), !0)), o ? (u || m.f.da(e, m.a.ua(c)), m.eb(a ? a(s, r) : s, e)) : m.f.xa(e), l = o)
                            }, null, {
                                i: e
                            }), {
                                controlsDescendantBindings: !0
                            }
                        }
                    }, m.h.ta[e] = !1, m.f.Z[e] = !0
                }
                var m = "undefined" != typeof o ? o : {};
                m.b = function(e, t) {
                        for(var n = e.split("."), a = m, i = 0; i < n.length - 1; i++) a = a[n[i]];
                        a[n[n.length - 1]] = t
                    }, m.G = function(e, t, n) {
                        e[t] = n
                    }, m.version = "3.4.1", m.b("version", m.version), m.options = {
                        deferUpdates: !1,
                        useOnlyNativeEvents: !1
                    }, m.a = function() {
                        function o(e, t) {
                            for(var n in e) e.hasOwnProperty(n) && t(n, e[n])
                        }

                        function s(e, t) {
                            if(t)
                                for(var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
                            return e
                        }

                        function l(e, t) {
                            return e.__proto__ = t, e
                        }

                        function c(e, t, n, a) {
                            var i = e[t].match(g) || [];
                            m.a.q(n.match(g), function(e) {
                                m.a.pa(i, e, a)
                            }), e[t] = i.join(" ")
                        }
                        var u = {
                            __proto__: []
                        }
                        instanceof Array, d = "function" == typeof Symbol, f = {}, h = {};
                        f[a && /Firefox\/2/i.test(a.userAgent) ? "KeyboardEvent" : "UIEvents"] = ["keyup", "keydown", "keypress"], f.MouseEvents = "click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave".split(" "), o(f, function(e, t) {
                            if(t.length)
                                for(var n = 0, a = t.length; n < a; n++) h[t[n]] = e
                        });
                        var p = {
                                propertychange: !0
                            },
                            b = n && function() {
                                for(var t = 3, a = n.createElement("div"), i = a.getElementsByTagName("i"); a.innerHTML = "<!--[if gt IE " + ++t + "]><i></i><![endif]-->", i[0];);
                                return 4 < t ? t : e
                            }(),
                            g = /\S+/g;
                        return {
                            ec: ["authenticity_token", /^__RequestVerificationToken(_.*)?$/],
                            q: function(e, t) {
                                for(var n = 0, a = e.length; n < a; n++) t(e[n], n)
                            },
                            o: function(e, t) {
                                if("function" == typeof Array.prototype.indexOf) return Array.prototype.indexOf.call(e, t);
                                for(var n = 0, a = e.length; n < a; n++)
                                    if(e[n] === t) return n;
                                return -1
                            },
                            Tb: function(e, t, n) {
                                for(var a = 0, i = e.length; a < i; a++)
                                    if(t.call(n, e[a], a)) return e[a];
                                return null
                            },
                            La: function(e, t) {
                                var n = m.a.o(e, t);
                                0 < n ? e.splice(n, 1) : 0 === n && e.shift()
                            },
                            Ub: function(e) {
                                e = e || [];
                                for(var t = [], n = 0, a = e.length; n < a; n++) 0 > m.a.o(t, e[n]) && t.push(e[n]);
                                return t
                            },
                            fb: function(e, t) {
                                e = e || [];
                                for(var n = [], a = 0, i = e.length; a < i; a++) n.push(t(e[a], a));
                                return n
                            },
                            Ka: function(e, t) {
                                e = e || [];
                                for(var n = [], a = 0, i = e.length; a < i; a++) t(e[a], a) && n.push(e[a]);
                                return n
                            },
                            ra: function(e, t) {
                                if(t instanceof Array) e.push.apply(e, t);
                                else
                                    for(var n = 0, a = t.length; n < a; n++) e.push(t[n]);
                                return e
                            },
                            pa: function(e, t, n) {
                                var a = m.a.o(m.a.zb(e), t);
                                0 > a ? n && e.push(t) : n || e.splice(a, 1)
                            },
                            ka: u,
                            extend: s,
                            Xa: l,
                            Ya: u ? l : s,
                            D: o,
                            Ca: function(e, t) {
                                if(!e) return e;
                                var n, a = {};
                                for(n in e) e.hasOwnProperty(n) && (a[n] = t(e[n], n, e));
                                return a
                            },
                            ob: function(e) {
                                for(; e.firstChild;) m.removeNode(e.firstChild)
                            },
                            lc: function(e) {
                                e = m.a.V(e);
                                for(var t = (e[0] && e[0].ownerDocument || n).createElement("div"), a = 0, i = e.length; a < i; a++) t.appendChild(m.$(e[a]));
                                return t
                            },
                            ua: function(e, t) {
                                for(var n = 0, a = e.length, i = []; n < a; n++) {
                                    var r = e[n].cloneNode(!0);
                                    i.push(t ? m.$(r) : r)
                                }
                                return i
                            },
                            da: function(e, t) {
                                if(m.a.ob(e), t)
                                    for(var n = 0, a = t.length; n < a; n++) e.appendChild(t[n])
                            },
                            sc: function(e, t) {
                                var n = e.nodeType ? [e] : e;
                                if(0 < n.length) {
                                    for(var a = n[0], i = a.parentNode, r = 0, o = t.length; r < o; r++) i.insertBefore(t[r], a);
                                    for(r = 0, o = n.length; r < o; r++) m.removeNode(n[r])
                                }
                            },
                            za: function(e, t) {
                                if(e.length) {
                                    for(t = 8 === t.nodeType && t.parentNode || t; e.length && e[0].parentNode !== t;) e.splice(0, 1);
                                    for(; 1 < e.length && e[e.length - 1].parentNode !== t;) e.length--;
                                    if(1 < e.length) {
                                        var n = e[0],
                                            a = e[e.length - 1];
                                        for(e.length = 0; n !== a;) e.push(n), n = n.nextSibling;
                                        e.push(a)
                                    }
                                }
                                return e
                            },
                            uc: function(e, t) {
                                7 > b ? e.setAttribute("selected", t) : e.selected = t
                            },
                            $a: function(t) {
                                return null === t || t === e ? "" : t.trim ? t.trim() : t.toString().replace(/^[\s\xa0]+|[\s\xa0]+$/g, "")
                            },
                            od: function(e, t) {
                                return e = e || "", !(t.length > e.length) && e.substring(0, t.length) === t
                            },
                            Nc: function(e, t) {
                                if(e === t) return !0;
                                if(11 === e.nodeType) return !1;
                                if(t.contains) return t.contains(3 === e.nodeType ? e.parentNode : e);
                                if(t.compareDocumentPosition) return 16 == (16 & t.compareDocumentPosition(e));
                                for(; e && e != t;) e = e.parentNode;
                                return !!e
                            },
                            nb: function(e) {
                                return m.a.Nc(e, e.ownerDocument.documentElement);
                            },
                            Rb: function(e) {
                                return !!m.a.Tb(e, m.a.nb)
                            },
                            A: function(e) {
                                return e && e.tagName && e.tagName.toLowerCase()
                            },
                            Xb: function(e) {
                                return m.onError ? function() {
                                    try {
                                        return e.apply(this, arguments)
                                    } catch(e) {
                                        throw m.onError && m.onError(e), e
                                    }
                                } : e
                            },
                            setTimeout: function(e, t) {
                                return setTimeout(m.a.Xb(e), t)
                            },
                            bc: function(e) {
                                setTimeout(function() {
                                    throw m.onError && m.onError(e), e
                                }, 0)
                            },
                            p: function(e, t, n) {
                                var a = m.a.Xb(n);
                                if(n = b && p[t], m.options.useOnlyNativeEvents || n || !i)
                                    if(n || "function" != typeof e.addEventListener) {
                                        if("undefined" == typeof e.attachEvent) throw Error("Browser doesn't support addEventListener or attachEvent");
                                        var r = function(t) {
                                                a.call(e, t)
                                            },
                                            o = "on" + t;
                                        e.attachEvent(o, r), m.a.F.oa(e, function() {
                                            e.detachEvent(o, r)
                                        })
                                    } else e.addEventListener(t, a, !1);
                                else i(e).bind(t, a)
                            },
                            Da: function(e, a) {
                                if(!e || !e.nodeType) throw Error("element must be a DOM node when calling triggerEvent");
                                var r;
                                if("input" === m.a.A(e) && e.type && "click" == a.toLowerCase() ? (r = e.type, r = "checkbox" == r || "radio" == r) : r = !1, m.options.useOnlyNativeEvents || !i || r)
                                    if("function" == typeof n.createEvent) {
                                        if("function" != typeof e.dispatchEvent) throw Error("The supplied element doesn't support dispatchEvent");
                                        r = n.createEvent(h[a] || "HTMLEvents"), r.initEvent(a, !0, !0, t, 0, 0, 0, 0, 0, !1, !1, !1, !1, 0, e), e.dispatchEvent(r)
                                    } else if(r && e.click) e.click();
                                else {
                                    if("undefined" == typeof e.fireEvent) throw Error("Browser doesn't support triggering events");
                                    e.fireEvent("on" + a)
                                } else i(e).trigger(a)
                            },
                            c: function(e) {
                                return m.H(e) ? e() : e
                            },
                            zb: function(e) {
                                return m.H(e) ? e.t() : e
                            },
                            bb: function(e, t, n) {
                                var a;
                                t && ("object" == typeof e.classList ? (a = e.classList[n ? "add" : "remove"], m.a.q(t.match(g), function(t) {
                                    a.call(e.classList, t)
                                })) : "string" == typeof e.className.baseVal ? c(e.className, "baseVal", t, n) : c(e, "className", t, n))
                            },
                            Za: function(t, n) {
                                var a = m.a.c(n);
                                null !== a && a !== e || (a = "");
                                var i = m.f.firstChild(t);
                                !i || 3 != i.nodeType || m.f.nextSibling(i) ? m.f.da(t, [t.ownerDocument.createTextNode(a)]) : i.data = a, m.a.Sc(t)
                            },
                            tc: function(e, t) {
                                if(e.name = t, 7 >= b) try {
                                    e.mergeAttributes(n.createElement("<input name='" + e.name + "'/>"), !1)
                                } catch(e) {}
                            },
                            Sc: function(e) {
                                9 <= b && (e = 1 == e.nodeType ? e : e.parentNode, e.style && (e.style.zoom = e.style.zoom))
                            },
                            Oc: function(e) {
                                if(b) {
                                    var t = e.style.width;
                                    e.style.width = 0, e.style.width = t
                                }
                            },
                            jd: function(e, t) {
                                e = m.a.c(e), t = m.a.c(t);
                                for(var n = [], a = e; a <= t; a++) n.push(a);
                                return n
                            },
                            V: function(e) {
                                for(var t = [], n = 0, a = e.length; n < a; n++) t.push(e[n]);
                                return t
                            },
                            $b: function(e) {
                                return d ? Symbol(e) : e
                            },
                            sd: 6 === b,
                            ud: 7 === b,
                            C: b,
                            gc: function(e, t) {
                                for(var n = m.a.V(e.getElementsByTagName("input")).concat(m.a.V(e.getElementsByTagName("textarea"))), a = "string" == typeof t ? function(e) {
                                        return e.name === t
                                    } : function(e) {
                                        return t.test(e.name)
                                    }, i = [], r = n.length - 1; 0 <= r; r--) a(n[r]) && i.push(n[r]);
                                return i
                            },
                            fd: function(e) {
                                return "string" == typeof e && (e = m.a.$a(e)) ? r && r.parse ? r.parse(e) : new Function("return " + e)() : null
                            },
                            Eb: function(e, t, n) {
                                if(!r || !r.stringify) throw Error("Cannot find JSON.stringify(). Some browsers (e.g., IE < 8) don't support it natively, but you can overcome this by adding a script reference to json2.js, downloadable from http://www.json.org/json2.js");
                                return r.stringify(m.a.c(e), t, n)
                            },
                            gd: function(e, t, a) {
                                a = a || {};
                                var i = a.params || {},
                                    r = a.includeFields || this.ec,
                                    s = e;
                                if("object" == typeof e && "form" === m.a.A(e))
                                    for(var s = e.action, l = r.length - 1; 0 <= l; l--)
                                        for(var c = m.a.gc(e, r[l]), u = c.length - 1; 0 <= u; u--) i[c[u].name] = c[u].value;
                                t = m.a.c(t);
                                var d = n.createElement("form");
                                d.style.display = "none", d.action = s, d.method = "post";
                                for(var f in t) e = n.createElement("input"), e.type = "hidden", e.name = f, e.value = m.a.Eb(m.a.c(t[f])), d.appendChild(e);
                                o(i, function(e, t) {
                                    var a = n.createElement("input");
                                    a.type = "hidden", a.name = e, a.value = t, d.appendChild(a)
                                }), n.body.appendChild(d), a.submitter ? a.submitter(d) : d.submit(), setTimeout(function() {
                                    d.parentNode.removeChild(d)
                                }, 0)
                            }
                        }
                    }(), m.b("utils", m.a), m.b("utils.arrayForEach", m.a.q), m.b("utils.arrayFirst", m.a.Tb), m.b("utils.arrayFilter", m.a.Ka), m.b("utils.arrayGetDistinctValues", m.a.Ub), m.b("utils.arrayIndexOf", m.a.o), m.b("utils.arrayMap", m.a.fb), m.b("utils.arrayPushAll", m.a.ra), m.b("utils.arrayRemoveItem", m.a.La), m.b("utils.extend", m.a.extend), m.b("utils.fieldsIncludedWithJsonPost", m.a.ec), m.b("utils.getFormFields", m.a.gc), m.b("utils.peekObservable", m.a.zb), m.b("utils.postJson", m.a.gd), m.b("utils.parseJson", m.a.fd), m.b("utils.registerEventHandler", m.a.p), m.b("utils.stringifyJson", m.a.Eb), m.b("utils.range", m.a.jd), m.b("utils.toggleDomNodeCssClass", m.a.bb), m.b("utils.triggerEvent", m.a.Da), m.b("utils.unwrapObservable", m.a.c), m.b("utils.objectForEach", m.a.D), m.b("utils.addOrRemoveItem", m.a.pa), m.b("utils.setTextContent", m.a.Za), m.b("unwrap", m.a.c), Function.prototype.bind || (Function.prototype.bind = function(e) {
                        var t = this;
                        if(1 === arguments.length) return function() {
                            return t.apply(e, arguments)
                        };
                        var n = Array.prototype.slice.call(arguments, 1);
                        return function() {
                            var a = n.slice(0);
                            return a.push.apply(a, arguments), t.apply(e, a)
                        }
                    }), m.a.e = new function() {
                        function t(t, r) {
                            var o = t[a];
                            if(!o || "null" === o || !i[o]) {
                                if(!r) return e;
                                o = t[a] = "ko" + n++, i[o] = {}
                            }
                            return i[o]
                        }
                        var n = 0,
                            a = "__ko__" + (new Date).getTime(),
                            i = {};
                        return {
                            get: function(n, a) {
                                var i = t(n, !1);
                                return i === e ? e : i[a]
                            },
                            set: function(n, a, i) {
                                i === e && t(n, !1) === e || (t(n, !0)[a] = i)
                            },
                            clear: function(e) {
                                var t = e[a];
                                return !!t && (delete i[t], e[a] = null, !0)
                            },
                            I: function() {
                                return n++ + a
                            }
                        }
                    }, m.b("utils.domData", m.a.e), m.b("utils.domData.clear", m.a.e.clear), m.a.F = new function() {
                        function t(t, n) {
                            var i = m.a.e.get(t, a);
                            return i === e && n && (i = [], m.a.e.set(t, a, i)), i
                        }

                        function n(e) {
                            var a = t(e, !1);
                            if(a)
                                for(var a = a.slice(0), i = 0; i < a.length; i++) a[i](e);
                            if(m.a.e.clear(e), m.a.F.cleanExternalData(e), o[e.nodeType])
                                for(a = e.firstChild; e = a;) a = e.nextSibling, 8 === e.nodeType && n(e)
                        }
                        var a = m.a.e.I(),
                            r = {
                                1: !0,
                                8: !0,
                                9: !0
                            },
                            o = {
                                1: !0,
                                9: !0
                            };
                        return {
                            oa: function(e, n) {
                                if("function" != typeof n) throw Error("Callback must be a function");
                                t(e, !0).push(n)
                            },
                            rc: function(n, i) {
                                var r = t(n, !1);
                                r && (m.a.La(r, i), 0 == r.length && m.a.e.set(n, a, e))
                            },
                            $: function(e) {
                                if(r[e.nodeType] && (n(e), o[e.nodeType])) {
                                    var t = [];
                                    m.a.ra(t, e.getElementsByTagName("*"));
                                    for(var a = 0, i = t.length; a < i; a++) n(t[a])
                                }
                                return e
                            },
                            removeNode: function(e) {
                                m.$(e), e.parentNode && e.parentNode.removeChild(e)
                            },
                            cleanExternalData: function(e) {
                                i && "function" == typeof i.cleanData && i.cleanData([e])
                            }
                        }
                    }, m.$ = m.a.F.$, m.removeNode = m.a.F.removeNode, m.b("cleanNode", m.$), m.b("removeNode", m.removeNode), m.b("utils.domNodeDisposal", m.a.F), m.b("utils.domNodeDisposal.addDisposeCallback", m.a.F.oa), m.b("utils.domNodeDisposal.removeDisposeCallback", m.a.F.rc),
                    function() {
                        var a = [0, "", ""],
                            r = [1, "<table>", "</table>"],
                            o = [3, "<table><tbody><tr>", "</tr></tbody></table>"],
                            s = [1, "<select multiple='multiple'>", "</select>"],
                            l = {
                                thead: r,
                                tbody: r,
                                tfoot: r,
                                tr: [2, "<table><tbody>", "</tbody></table>"],
                                td: o,
                                th: o,
                                option: s,
                                optgroup: s
                            },
                            c = 8 >= m.a.C;
                        m.a.ma = function(e, r) {
                            var o;
                            if(i) {
                                if(i.parseHTML) o = i.parseHTML(e, r) || [];
                                else if((o = i.clean([e], r)) && o[0]) {
                                    for(var s = o[0]; s.parentNode && 11 !== s.parentNode.nodeType;) s = s.parentNode;
                                    s.parentNode && s.parentNode.removeChild(s)
                                }
                            } else {
                                (o = r) || (o = n);
                                var u, s = o.parentWindow || o.defaultView || t,
                                    d = m.a.$a(e).toLowerCase(),
                                    f = o.createElement("div");
                                for(u = (d = d.match(/^<([a-z]+)[ >]/)) && l[d[1]] || a, d = u[0], u = "ignored<div>" + u[1] + e + u[2] + "</div>", "function" == typeof s.innerShiv ? f.appendChild(s.innerShiv(u)) : (c && o.appendChild(f), f.innerHTML = u, c && f.parentNode.removeChild(f)); d--;) f = f.lastChild;
                                o = m.a.V(f.lastChild.childNodes)
                            }
                            return o
                        }, m.a.Cb = function(t, n) {
                            if(m.a.ob(t), n = m.a.c(n), null !== n && n !== e)
                                if("string" != typeof n && (n = n.toString()), i) i(t).html(n);
                                else
                                    for(var a = m.a.ma(n, t.ownerDocument), r = 0; r < a.length; r++) t.appendChild(a[r])
                        }
                    }(), m.b("utils.parseHtmlFragment", m.a.ma), m.b("utils.setHtml", m.a.Cb), m.M = function() {
                        function t(e, n) {
                            if(e)
                                if(8 == e.nodeType) {
                                    var a = m.M.nc(e.nodeValue);
                                    null != a && n.push({
                                        Mc: e,
                                        dd: a
                                    })
                                } else if(1 == e.nodeType)
                                for(var a = 0, i = e.childNodes, r = i.length; a < r; a++) t(i[a], n)
                        }
                        var n = {};
                        return {
                            wb: function(e) {
                                if("function" != typeof e) throw Error("You can only pass a function to ko.memoization.memoize()");
                                var t = (4294967296 * (1 + Math.random()) | 0).toString(16).substring(1) + (4294967296 * (1 + Math.random()) | 0).toString(16).substring(1);
                                return n[t] = e, "<!--[ko_memo:" + t + "]-->"
                            },
                            zc: function(t, a) {
                                var i = n[t];
                                if(i === e) throw Error("Couldn't find any memo with ID " + t + ". Perhaps it's already been unmemoized.");
                                try {
                                    return i.apply(null, a || []), !0
                                } finally {
                                    delete n[t]
                                }
                            },
                            Ac: function(e, n) {
                                var a = [];
                                t(e, a);
                                for(var i = 0, r = a.length; i < r; i++) {
                                    var o = a[i].Mc,
                                        s = [o];
                                    n && m.a.ra(s, n), m.M.zc(a[i].dd, s), o.nodeValue = "", o.parentNode && o.parentNode.removeChild(o)
                                }
                            },
                            nc: function(e) {
                                return(e = e.match(/^\[ko_memo\:(.*?)\]$/)) ? e[1] : null
                            }
                        }
                    }(), m.b("memoization", m.M), m.b("memoization.memoize", m.M.wb), m.b("memoization.unmemoize", m.M.zc), m.b("memoization.parseMemoText", m.M.nc), m.b("memoization.unmemoizeDomNodeAndDescendants", m.M.Ac), m.Y = function() {
                        function e() {
                            if(r)
                                for(var e, t = r, n = 0; s < r;)
                                    if(e = i[s++]) {
                                        if(s > t) {
                                            if(5e3 <= ++n) {
                                                s = r, m.a.bc(Error("'Too much recursion' after processing " + n + " task groups."));
                                                break
                                            }
                                            t = r
                                        }
                                        try {
                                            e()
                                        } catch(e) {
                                            m.a.bc(e)
                                        }
                                    }
                        }

                        function a() {
                            e(), s = r = i.length = 0
                        }
                        var i = [],
                            r = 0,
                            o = 1,
                            s = 0;
                        return {
                            scheduler: t.MutationObserver ? function(e) {
                                var t = n.createElement("div");
                                return new MutationObserver(e).observe(t, {
                                        attributes: !0
                                    }),
                                    function() {
                                        t.classList.toggle("foo")
                                    }
                            }(a) : n && "onreadystatechange" in n.createElement("script") ? function(e) {
                                var t = n.createElement("script");
                                t.onreadystatechange = function() {
                                    t.onreadystatechange = null, n.documentElement.removeChild(t), t = null, e()
                                }, n.documentElement.appendChild(t)
                            } : function(e) {
                                setTimeout(e, 0)
                            },
                            Wa: function(e) {
                                return r || m.Y.scheduler(a), i[r++] = e, o++
                            },
                            cancel: function(e) {
                                e -= o - r, e >= s && e < r && (i[e] = null)
                            },
                            resetForTesting: function() {
                                var e = r - s;
                                return s = r = i.length = 0, e
                            },
                            nd: e
                        }
                    }(), m.b("tasks", m.Y), m.b("tasks.schedule", m.Y.Wa), m.b("tasks.runEarly", m.Y.nd), m.ya = {
                        throttle: function(e, t) {
                            e.throttleEvaluation = t;
                            var n = null;
                            return m.B({
                                read: e,
                                write: function(a) {
                                    clearTimeout(n), n = m.a.setTimeout(function() {
                                        e(a)
                                    }, t)
                                }
                            })
                        },
                        rateLimit: function(e, t) {
                            var n, a, i;
                            "number" == typeof t ? n = t : (n = t.timeout, a = t.method), e.cb = !1, i = "notifyWhenChangesStop" == a ? u : c, e.Ta(function(e) {
                                return i(e, n)
                            })
                        },
                        deferred: function(t, n) {
                            if(!0 !== n) throw Error("The 'deferred' extender only accepts the value 'true', because it is not supported to turn deferral off once enabled.");
                            t.cb || (t.cb = !0, t.Ta(function(n) {
                                var a;
                                return function() {
                                    m.Y.cancel(a), a = m.Y.Wa(n), t.notifySubscribers(e, "dirty")
                                }
                            }))
                        },
                        notify: function(e, t) {
                            e.equalityComparer = "always" == t ? null : l
                        }
                    };
                var b = {
                    undefined: 1,
                    boolean: 1,
                    number: 1,
                    string: 1
                };
                m.b("extenders", m.ya), m.xc = function(e, t, n) {
                    this.ia = e, this.gb = t, this.Lc = n, this.S = !1, m.G(this, "dispose", this.k)
                }, m.xc.prototype.k = function() {
                    this.S = !0, this.Lc()
                }, m.J = function() {
                    m.a.Ya(this, v), v.rb(this)
                };
                var g = "change",
                    v = {
                        rb: function(e) {
                            e.K = {}, e.Ob = 1
                        },
                        X: function(e, t, n) {
                            var a = this;
                            n = n || g;
                            var i = new m.xc(a, t ? e.bind(t) : e, function() {
                                m.a.La(a.K[n], i), a.Ia && a.Ia(n)
                            });
                            return a.sa && a.sa(n), a.K[n] || (a.K[n] = []), a.K[n].push(i), i
                        },
                        notifySubscribers: function(e, t) {
                            if(t = t || g, t === g && this.Ib(), this.Pa(t)) try {
                                m.l.Vb();
                                for(var n, a = this.K[t].slice(0), i = 0; n = a[i]; ++i) n.S || n.gb(e)
                            } finally {
                                m.l.end()
                            }
                        },
                        Na: function() {
                            return this.Ob
                        },
                        Vc: function(e) {
                            return this.Na() !== e
                        },
                        Ib: function() {
                            ++this.Ob
                        },
                        Ta: function(e) {
                            var t, n, a, i = this,
                                r = m.H(i);
                            i.Ha || (i.Ha = i.notifySubscribers, i.notifySubscribers = d);
                            var o = e(function() {
                                i.Nb = !1, r && a === i && (a = i()), t = !1, i.tb(n, a) && i.Ha(n = a)
                            });
                            i.Mb = function(e) {
                                i.Nb = t = !0, a = e, o()
                            }, i.Lb = function(e) {
                                t || (n = e, i.Ha(e, "beforeChange"))
                            }
                        },
                        Pa: function(e) {
                            return this.K[e] && this.K[e].length
                        },
                        Tc: function(e) {
                            if(e) return this.K[e] && this.K[e].length || 0;
                            var t = 0;
                            return m.a.D(this.K, function(e, n) {
                                "dirty" !== e && (t += n.length)
                            }), t
                        },
                        tb: function(e, t) {
                            return !this.equalityComparer || !this.equalityComparer(e, t)
                        },
                        extend: function(e) {
                            var t = this;
                            return e && m.a.D(e, function(e, n) {
                                var a = m.ya[e];
                                "function" == typeof a && (t = a(t, n) || t)
                            }), t
                        }
                    };
                m.G(v, "subscribe", v.X), m.G(v, "extend", v.extend), m.G(v, "getSubscriptionsCount", v.Tc), m.a.ka && m.a.Xa(v, Function.prototype), m.J.fn = v, m.jc = function(e) {
                    return null != e && "function" == typeof e.X && "function" == typeof e.notifySubscribers
                }, m.b("subscribable", m.J), m.b("isSubscribable", m.jc), m.va = m.l = function() {
                    function e(e) {
                        a.push(n), n = e
                    }

                    function t() {
                        n = a.pop()
                    }
                    var n, a = [],
                        i = 0;
                    return {
                        Vb: e,
                        end: t,
                        qc: function(e) {
                            if(n) {
                                if(!m.jc(e)) throw Error("Only subscribable things can act as dependencies");
                                n.gb.call(n.Hc, e, e.Dc || (e.Dc = ++i))
                            }
                        },
                        w: function(n, a, i) {
                            try {
                                return e(), n.apply(a, i || [])
                            } finally {
                                t()
                            }
                        },
                        Aa: function() {
                            if(n) return n.m.Aa()
                        },
                        Sa: function() {
                            if(n) return n.Sa
                        }
                    }
                }(), m.b("computedContext", m.va), m.b("computedContext.getDependenciesCount", m.va.Aa), m.b("computedContext.isInitial", m.va.Sa), m.b("ignoreDependencies", m.rd = m.l.w);
                var y = m.a.$b("_latestValue");
                m.N = function(e) {
                    function t() {
                        return 0 < arguments.length ? (t.tb(t[y], arguments[0]) && (t.ga(), t[y] = arguments[0], t.fa()), this) : (m.l.qc(t), t[y])
                    }
                    return t[y] = e, m.a.ka || m.a.extend(t, m.J.fn), m.J.fn.rb(t), m.a.Ya(t, C), m.options.deferUpdates && m.ya.deferred(t, !0), t
                };
                var C = {
                    equalityComparer: l,
                    t: function() {
                        return this[y]
                    },
                    fa: function() {
                        this.notifySubscribers(this[y])
                    },
                    ga: function() {
                        this.notifySubscribers(this[y], "beforeChange")
                    }
                };
                m.a.ka && m.a.Xa(C, m.J.fn);
                var T = m.N.hd = "__ko_proto__";
                C[T] = m.N, m.Oa = function(t, n) {
                    return null !== t && t !== e && t[T] !== e && (t[T] === n || m.Oa(t[T], n))
                }, m.H = function(e) {
                    return m.Oa(e, m.N)
                }, m.Ba = function(e) {
                    return !!("function" == typeof e && e[T] === m.N || "function" == typeof e && e[T] === m.B && e.Wc)
                }, m.b("observable", m.N), m.b("isObservable", m.H), m.b("isWriteableObservable", m.Ba), m.b("isWritableObservable", m.Ba), m.b("observable.fn", C), m.G(C, "peek", C.t), m.G(C, "valueHasMutated", C.fa), m.G(C, "valueWillMutate", C.ga), m.la = function(e) {
                    if(e = e || [], "object" != typeof e || !("length" in e)) throw Error("The argument passed when initializing an observable array must be an array, or null, or undefined.");
                    return e = m.N(e), m.a.Ya(e, m.la.fn), e.extend({
                        trackArrayChanges: !0
                    })
                }, m.la.fn = {
                    remove: function(e) {
                        for(var t = this.t(), n = [], a = "function" != typeof e || m.H(e) ? function(t) {
                                return t === e
                            } : e, i = 0; i < t.length; i++) {
                            var r = t[i];
                            a(r) && (0 === n.length && this.ga(), n.push(r), t.splice(i, 1), i--)
                        }
                        return n.length && this.fa(), n
                    },
                    removeAll: function(t) {
                        if(t === e) {
                            var n = this.t(),
                                a = n.slice(0);
                            return this.ga(), n.splice(0, n.length), this.fa(), a
                        }
                        return t ? this.remove(function(e) {
                            return 0 <= m.a.o(t, e)
                        }) : []
                    },
                    destroy: function(e) {
                        var t = this.t(),
                            n = "function" != typeof e || m.H(e) ? function(t) {
                                return t === e
                            } : e;
                        this.ga();
                        for(var a = t.length - 1; 0 <= a; a--) n(t[a]) && (t[a]._destroy = !0);
                        this.fa()
                    },
                    destroyAll: function(t) {
                        return t === e ? this.destroy(function() {
                            return !0
                        }) : t ? this.destroy(function(e) {
                            return 0 <= m.a.o(t, e)
                        }) : []
                    },
                    indexOf: function(e) {
                        var t = this();
                        return m.a.o(t, e)
                    },
                    replace: function(e, t) {
                        var n = this.indexOf(e);
                        0 <= n && (this.ga(), this.t()[n] = t, this.fa())
                    }
                }, m.a.ka && m.a.Xa(m.la.fn, m.N.fn), m.a.q("pop push reverse shift sort splice unshift".split(" "), function(e) {
                    m.la.fn[e] = function() {
                        var t = this.t();
                        this.ga(), this.Wb(t, e, arguments);
                        var n = t[e].apply(t, arguments);
                        return this.fa(), n === t ? this : n
                    }
                }), m.a.q(["slice"], function(e) {
                    m.la.fn[e] = function() {
                        var t = this();
                        return t[e].apply(t, arguments)
                    }
                }), m.b("observableArray", m.la), m.ya.trackArrayChanges = function(t, n) {
                    function a() {
                        if(!o) {
                            o = !0, r = t.notifySubscribers, t.notifySubscribers = function(e, t) {
                                return t && t !== g || ++l, r.apply(this, arguments)
                            };
                            var e = [].concat(t.t() || []);
                            s = null, i = t.X(function(n) {
                                if(n = [].concat(n || []), t.Pa("arrayChange")) {
                                    var a;
                                    (!s || 1 < l) && (s = m.a.ib(e, n, t.hb)), a = s
                                }
                                e = n, s = null, l = 0, a && a.length && t.notifySubscribers(a, "arrayChange")
                            })
                        }
                    }
                    if(t.hb = {}, n && "object" == typeof n && m.a.extend(t.hb, n), t.hb.sparse = !0, !t.Wb) {
                        var i, r, o = !1,
                            s = null,
                            l = 0,
                            c = t.sa,
                            u = t.Ia;
                        t.sa = function(e) {
                            c && c.call(t, e), "arrayChange" === e && a()
                        }, t.Ia = function(n) {
                            u && u.call(t, n), "arrayChange" !== n || t.Pa("arrayChange") || (r && (t.notifySubscribers = r, r = e), i.k(), o = !1)
                        }, t.Wb = function(e, t, n) {
                            function a(e, t, n) {
                                return i[i.length] = {
                                    status: e,
                                    value: t,
                                    index: n
                                }
                            }
                            if(o && !l) {
                                var i = [],
                                    r = e.length,
                                    c = n.length,
                                    u = 0;
                                switch(t) {
                                    case "push":
                                        u = r;
                                    case "unshift":
                                        for(t = 0; t < c; t++) a("added", n[t], u + t);
                                        break;
                                    case "pop":
                                        u = r - 1;
                                    case "shift":
                                        r && a("deleted", e[u], u);
                                        break;
                                    case "splice":
                                        t = Math.min(Math.max(0, 0 > n[0] ? r + n[0] : n[0]), r);
                                        for(var r = 1 === c ? r : Math.min(t + (n[1] || 0), r), c = t + c - 2, u = Math.max(r, c), d = [], f = [], h = 2; t < u; ++t, ++h) t < r && f.push(a("deleted", e[t], t)), t < c && d.push(a("added", n[h], t));
                                        m.a.fc(f, d);
                                        break;
                                    default:
                                        return
                                }
                                s = i
                            }
                        }
                    }
                };
                var w = m.a.$b("_state");
                m.m = m.B = function(t, n, a) {
                    function i() {
                        if(0 < arguments.length) {
                            if("function" != typeof r) throw Error("Cannot write a value to a ko.computed unless you specify a 'write' option. If you wish to read the current value, don't pass any parameters.");
                            return r.apply(o.pb, arguments), this
                        }
                        return m.l.qc(i), (o.T || o.s && i.Qa()) && i.aa(), o.U
                    }
                    if("object" == typeof t ? a = t : (a = a || {}, t && (a.read = t)), "function" != typeof a.read) throw Error("Pass a function that returns the value of the ko.computed");
                    var r = a.write,
                        o = {
                            U: e,
                            T: !0,
                            Ra: !1,
                            Fb: !1,
                            S: !1,
                            Va: !1,
                            s: !1,
                            kd: a.read,
                            pb: n || a.owner,
                            i: a.disposeWhenNodeIsRemoved || a.i || null,
                            wa: a.disposeWhen || a.wa,
                            mb: null,
                            r: {},
                            L: 0,
                            dc: null
                        };
                    return i[w] = o, i.Wc = "function" == typeof r, m.a.ka || m.a.extend(i, m.J.fn), m.J.fn.rb(i), m.a.Ya(i, x), a.pure ? (o.Va = !0, o.s = !0, m.a.extend(i, S)) : a.deferEvaluation && m.a.extend(i, A), m.options.deferUpdates && m.ya.deferred(i, !0), o.i && (o.Fb = !0, o.i.nodeType || (o.i = null)), o.s || a.deferEvaluation || i.aa(), o.i && i.ba() && m.a.F.oa(o.i, o.mb = function() {
                        i.k()
                    }), i
                };
                var x = {
                        equalityComparer: l,
                        Aa: function() {
                            return this[w].L
                        },
                        Qb: function(e, t, n) {
                            if(this[w].Va && t === this) throw Error("A 'pure' computed must not be called recursively");
                            this[w].r[e] = n, n.Ga = this[w].L++, n.na = t.Na()
                        },
                        Qa: function() {
                            var e, t, n = this[w].r;
                            for(e in n)
                                if(n.hasOwnProperty(e) && (t = n[e], t.ia.Vc(t.na))) return !0
                        },
                        cd: function() {
                            this.Fa && !this[w].Ra && this.Fa()
                        },
                        ba: function() {
                            return this[w].T || 0 < this[w].L
                        },
                        md: function() {
                            this.Nb || this.cc()
                        },
                        wc: function(e) {
                            if(e.cb && !this[w].i) {
                                var t = e.X(this.cd, this, "dirty"),
                                    n = e.X(this.md, this);
                                return {
                                    ia: e,
                                    k: function() {
                                        t.k(), n.k()
                                    }
                                }
                            }
                            return e.X(this.cc, this)
                        },
                        cc: function() {
                            var e = this,
                                t = e.throttleEvaluation;
                            t && 0 <= t ? (clearTimeout(this[w].dc), this[w].dc = m.a.setTimeout(function() {
                                e.aa(!0)
                            }, t)) : e.Fa ? e.Fa() : e.aa(!0)
                        },
                        aa: function(e) {
                            var t = this[w],
                                n = t.wa,
                                a = !1;
                            if(!t.Ra && !t.S) {
                                if(t.i && !m.a.nb(t.i) || n && n()) {
                                    if(!t.Fb) return void this.k()
                                } else t.Fb = !1;
                                t.Ra = !0;
                                try {
                                    a = this.Rc(e)
                                } finally {
                                    t.Ra = !1
                                }
                                return t.L || this.k(), a
                            }
                        },
                        Rc: function(t) {
                            var n = this[w],
                                a = !1,
                                i = n.Va ? e : !n.L,
                                r = {
                                    Ic: this,
                                    Ma: n.r,
                                    lb: n.L
                                };
                            return m.l.Vb({
                                Hc: r,
                                gb: h,
                                m: this,
                                Sa: i
                            }), n.r = {}, n.L = 0, r = this.Qc(n, r), this.tb(n.U, r) && (n.s || this.notifySubscribers(n.U, "beforeChange"), n.U = r, n.s ? this.Ib() : t && this.notifySubscribers(n.U), a = !0), i && this.notifySubscribers(n.U, "awake"), a
                        },
                        Qc: function(e, t) {
                            try {
                                var n = e.kd;
                                return e.pb ? n.call(e.pb) : n()
                            } finally {
                                m.l.end(), t.lb && !e.s && m.a.D(t.Ma, f), e.T = !1
                            }
                        },
                        t: function() {
                            var e = this[w];
                            return(e.T && !e.L || e.s && this.Qa()) && this.aa(), e.U
                        },
                        Ta: function(e) {
                            m.J.fn.Ta.call(this, e), this.Fa = function() {
                                this.Lb(this[w].U), this[w].T = !0, this.Mb(this)
                            }
                        },
                        k: function() {
                            var e = this[w];
                            !e.s && e.r && m.a.D(e.r, function(e, t) {
                                t.k && t.k()
                            }), e.i && e.mb && m.a.F.rc(e.i, e.mb), e.r = null, e.L = 0, e.S = !0, e.T = !1, e.s = !1, e.i = null
                        }
                    },
                    S = {
                        sa: function(e) {
                            var t = this,
                                n = t[w];
                            if(!n.S && n.s && "change" == e) {
                                if(n.s = !1, n.T || t.Qa()) n.r = null, n.L = 0, n.T = !0, t.aa() && t.Ib();
                                else {
                                    var a = [];
                                    m.a.D(n.r, function(e, t) {
                                        a[t.Ga] = e
                                    }), m.a.q(a, function(e, a) {
                                        var i = n.r[e],
                                            r = t.wc(i.ia);
                                        r.Ga = a, r.na = i.na, n.r[e] = r
                                    })
                                }
                                n.S || t.notifySubscribers(n.U, "awake")
                            }
                        },
                        Ia: function(t) {
                            var n = this[w];
                            n.S || "change" != t || this.Pa("change") || (m.a.D(n.r, function(e, t) {
                                t.k && (n.r[e] = {
                                    ia: t.ia,
                                    Ga: t.Ga,
                                    na: t.na
                                }, t.k())
                            }), n.s = !0, this.notifySubscribers(e, "asleep"))
                        },
                        Na: function() {
                            var e = this[w];
                            return e.s && (e.T || this.Qa()) && this.aa(), m.J.fn.Na.call(this)
                        }
                    },
                    A = {
                        sa: function(e) {
                            "change" != e && "beforeChange" != e || this.t()
                        }
                    };
                m.a.ka && m.a.Xa(x, m.J.fn);
                var k = m.N.hd;
                m.m[k] = m.N, x[k] = m.m, m.Yc = function(e) {
                        return m.Oa(e, m.m)
                    }, m.Zc = function(e) {
                        return m.Oa(e, m.m) && e[w] && e[w].Va
                    }, m.b("computed", m.m), m.b("dependentObservable", m.m), m.b("isComputed", m.Yc), m.b("isPureComputed", m.Zc), m.b("computed.fn", x), m.G(x, "peek", x.t), m.G(x, "dispose", x.k), m.G(x, "isActive", x.ba), m.G(x, "getDependenciesCount", x.Aa), m.pc = function(e, t) {
                        return "function" == typeof e ? m.m(e, t, {
                            pure: !0
                        }) : (e = m.a.extend({}, e), e.pure = !0, m.m(e, t))
                    }, m.b("pureComputed", m.pc),
                    function() {
                        function t(i, r, o) {
                            if(o = o || new a, i = r(i), "object" != typeof i || null === i || i === e || i instanceof RegExp || i instanceof Date || i instanceof String || i instanceof Number || i instanceof Boolean) return i;
                            var s = i instanceof Array ? [] : {};
                            return o.save(i, s), n(i, function(n) {
                                var a = r(i[n]);
                                switch(typeof a) {
                                    case "boolean":
                                    case "number":
                                    case "string":
                                    case "function":
                                        s[n] = a;
                                        break;
                                    case "object":
                                    case "undefined":
                                        var l = o.get(a);
                                        s[n] = l !== e ? l : t(a, r, o)
                                }
                            }), s
                        }

                        function n(e, t) {
                            if(e instanceof Array) {
                                for(var n = 0; n < e.length; n++) t(n);
                                "function" == typeof e.toJSON && t("toJSON")
                            } else
                                for(n in e) t(n)
                        }

                        function a() {
                            this.keys = [], this.Jb = []
                        }
                        m.yc = function(e) {
                            if(0 == arguments.length) throw Error("When calling ko.toJS, pass the object you want to convert.");
                            return t(e, function(e) {
                                for(var t = 0; m.H(e) && 10 > t; t++) e = e();
                                return e
                            })
                        }, m.toJSON = function(e, t, n) {
                            return e = m.yc(e), m.a.Eb(e, t, n)
                        }, a.prototype = {
                            save: function(e, t) {
                                var n = m.a.o(this.keys, e);
                                0 <= n ? this.Jb[n] = t : (this.keys.push(e), this.Jb.push(t))
                            },
                            get: function(t) {
                                return t = m.a.o(this.keys, t), 0 <= t ? this.Jb[t] : e
                            }
                        }
                    }(), m.b("toJS", m.yc), m.b("toJSON", m.toJSON),
                    function() {
                        m.j = {
                            u: function(t) {
                                switch(m.a.A(t)) {
                                    case "option":
                                        return !0 === t.__ko__hasDomDataOptionValue__ ? m.a.e.get(t, m.d.options.xb) : 7 >= m.a.C ? t.getAttributeNode("value") && t.getAttributeNode("value").specified ? t.value : t.text : t.value;
                                    case "select":
                                        return 0 <= t.selectedIndex ? m.j.u(t.options[t.selectedIndex]) : e;
                                    default:
                                        return t.value
                                }
                            },
                            ha: function(t, n, a) {
                                switch(m.a.A(t)) {
                                    case "option":
                                        switch(typeof n) {
                                            case "string":
                                                m.a.e.set(t, m.d.options.xb, e), "__ko__hasDomDataOptionValue__" in t && delete t.__ko__hasDomDataOptionValue__, t.value = n;
                                                break;
                                            default:
                                                m.a.e.set(t, m.d.options.xb, n), t.__ko__hasDomDataOptionValue__ = !0, t.value = "number" == typeof n ? n : ""
                                        }
                                        break;
                                    case "select":
                                        "" !== n && null !== n || (n = e);
                                        for(var i, r = -1, o = 0, s = t.options.length; o < s; ++o)
                                            if(i = m.j.u(t.options[o]), i == n || "" == i && n === e) {
                                                r = o;
                                                break
                                            }(a || 0 <= r || n === e && 1 < t.size) && (t.selectedIndex = r);
                                        break;
                                    default:
                                        null !== n && n !== e || (n = ""), t.value = n
                                }
                            }
                        }
                    }(), m.b("selectExtensions", m.j), m.b("selectExtensions.readValue", m.j.u), m.b("selectExtensions.writeValue", m.j.ha), m.h = function() {
                        function e(e) {
                            e = m.a.$a(e), 123 === e.charCodeAt(0) && (e = e.slice(1, -1));
                            var t, n = [],
                                o = e.match(a),
                                s = [],
                                l = 0;
                            if(o) {
                                o.push(",");
                                for(var c, u = 0; c = o[u]; ++u) {
                                    var d = c.charCodeAt(0);
                                    if(44 === d) {
                                        if(0 >= l) {
                                            n.push(t && s.length ? {
                                                key: t,
                                                value: s.join("")
                                            } : {
                                                unknown: t || s.join("")
                                            }), t = l = 0, s = [];
                                            continue
                                        }
                                    } else if(58 === d) {
                                        if(!l && !t && 1 === s.length) {
                                            t = s.pop();
                                            continue
                                        }
                                    } else 47 === d && u && 1 < c.length ? (d = o[u - 1].match(i)) && !r[d[0]] && (e = e.substr(e.indexOf(c) + 1), o = e.match(a), o.push(","), u = -1, c = "http://bitheroes.skidrowking.com") : 40 === d || 123 === d || 91 === d ? ++l : 41 === d || 125 === d || 93 === d ? --l : t || s.length || 34 !== d && 39 !== d || (c = c.slice(1, -1));
                                    s.push(c)
                                }
                            }
                            return n
                        }
                        var t = ["true", "false", "null", "undefined"],
                            n = /^(?:[$_a-z][$\w]*|(.+)(\.\s*[$_a-z][$\w]*|\[.+\]))$/i,
                            a = RegExp("\"(?:[^\"\\\\]|\\\\.)*\"|'(?:[^'\\\\]|\\\\.)*'|/(?:[^/\\\\]|\\\\.)*/w*|[^\\s:,/][^,\"'{}()/:[\\]]*[^\\s,\"'{}()/:[\\]]|[^\\s]", "g"),
                            i = /[\])"'A-Za-z0-9_$]+$/,
                            r = { in: 1,
                                return: 1,
                                typeof: 1
                            },
                            o = {};
                        return {
                            ta: [],
                            ea: o,
                            yb: e,
                            Ua: function(a, i) {
                                function r(e, a) {
                                    var i;
                                    if(!u) {
                                        var d = m.getBindingHandler(e);
                                        if(d && d.preprocess && !(a = d.preprocess(a, e, r))) return;
                                        (d = o[e]) && (i = a, 0 <= m.a.o(t, i) ? i = !1 : (d = i.match(n), i = null !== d && (d[1] ? "Object(" + d[1] + ")" + d[2] : i)), d = i), d && l.push("'" + e + "':function(_z){" + i + "=_z}")
                                    }
                                    c && (a = "function(){return " + a + " }"), s.push("'" + e + "':" + a)
                                }
                                i = i || {};
                                var s = [],
                                    l = [],
                                    c = i.valueAccessors,
                                    u = i.bindingParams,
                                    d = "string" == typeof a ? e(a) : a;
                                return m.a.q(d, function(e) {
                                    r(e.key || e.unknown, e.value)
                                }), l.length && r("_ko_property_writers", "{" + l.join(",") + " }"), s.join(",")
                            },
                            bd: function(e, t) {
                                for(var n = 0; n < e.length; n++)
                                    if(e[n].key == t) return !0;
                                return !1
                            },
                            Ea: function(e, t, n, a, i) {
                                e && m.H(e) ? !m.Ba(e) || i && e.t() === a || e(a) : (e = t.get("_ko_property_writers")) && e[n] && e[n](a)
                            }
                        }
                    }(), m.b("expressionRewriting", m.h), m.b("expressionRewriting.bindingRewriteValidators", m.h.ta), m.b("expressionRewriting.parseObjectLiteral", m.h.yb), m.b("expressionRewriting.preProcessBindings", m.h.Ua), m.b("expressionRewriting._twoWayBindings", m.h.ea), m.b("jsonExpressionRewriting", m.h), m.b("jsonExpressionRewriting.insertPropertyAccessorsIntoJson", m.h.Ua),
                    function() {
                        function e(e) {
                            return 8 == e.nodeType && o.test(r ? e.text : e.nodeValue)
                        }

                        function t(e) {
                            return 8 == e.nodeType && s.test(r ? e.text : e.nodeValue)
                        }

                        function a(n, a) {
                            for(var i = n, r = 1, o = []; i = i.nextSibling;) {
                                if(t(i) && (r--, 0 === r)) return o;
                                o.push(i), e(i) && r++
                            }
                            if(!a) throw Error("Cannot find closing comment tag to match: " + n.nodeValue);
                            return null
                        }

                        function i(e, t) {
                            var n = a(e, t);
                            return n ? 0 < n.length ? n[n.length - 1].nextSibling : e.nextSibling : null
                        }
                        var r = n && "<!--test-->" === n.createComment("test").text,
                            o = r ? /^\x3c!--\s*ko(?:\s+([\s\S]+))?\s*--\x3e$/ : /^\s*ko(?:\s+([\s\S]+))?\s*$/,
                            s = r ? /^\x3c!--\s*\/ko\s*--\x3e$/ : /^\s*\/ko\s*$/,
                            l = {
                                ul: !0,
                                ol: !0
                            };
                        m.f = {
                            Z: {},
                            childNodes: function(t) {
                                return e(t) ? a(t) : t.childNodes
                            },
                            xa: function(t) {
                                if(e(t)) {
                                    t = m.f.childNodes(t);
                                    for(var n = 0, a = t.length; n < a; n++) m.removeNode(t[n])
                                } else m.a.ob(t)
                            },
                            da: function(t, n) {
                                if(e(t)) {
                                    m.f.xa(t);
                                    for(var a = t.nextSibling, i = 0, r = n.length; i < r; i++) a.parentNode.insertBefore(n[i], a)
                                } else m.a.da(t, n)
                            },
                            oc: function(t, n) {
                                e(t) ? t.parentNode.insertBefore(n, t.nextSibling) : t.firstChild ? t.insertBefore(n, t.firstChild) : t.appendChild(n)
                            },
                            ic: function(t, n, a) {
                                a ? e(t) ? t.parentNode.insertBefore(n, a.nextSibling) : a.nextSibling ? t.insertBefore(n, a.nextSibling) : t.appendChild(n) : m.f.oc(t, n)
                            },
                            firstChild: function(n) {
                                return e(n) ? !n.nextSibling || t(n.nextSibling) ? null : n.nextSibling : n.firstChild
                            },
                            nextSibling: function(n) {
                                return e(n) && (n = i(n)), n.nextSibling && t(n.nextSibling) ? null : n.nextSibling
                            },
                            Uc: e,
                            qd: function(e) {
                                return(e = (r ? e.text : e.nodeValue).match(o)) ? e[1] : null
                            },
                            mc: function(n) {
                                if(l[m.a.A(n)]) {
                                    var a = n.firstChild;
                                    if(a)
                                        do
                                            if(1 === a.nodeType) {
                                                var r;
                                                r = a.firstChild;
                                                var o = null;
                                                if(r)
                                                    do
                                                        if(o) o.push(r);
                                                        else if(e(r)) {
                                                    var s = i(r, !0);
                                                    s ? r = s : o = [r]
                                                } else t(r) && (o = [r]);
                                                while(r = r.nextSibling);
                                                if(r = o)
                                                    for(o = a.nextSibling, s = 0; s < r.length; s++) o ? n.insertBefore(r[s], o) : n.appendChild(r[s])
                                            }
                                    while(a = a.nextSibling)
                                }
                            }
                        }
                    }(), m.b("virtualElements", m.f), m.b("virtualElements.allowedBindings", m.f.Z), m.b("virtualElements.emptyNode", m.f.xa), m.b("virtualElements.insertAfter", m.f.ic), m.b("virtualElements.prepend", m.f.oc), m.b("virtualElements.setDomNodeChildren", m.f.da),
                    function() {
                        m.R = function() {
                            this.Gc = {}
                        }, m.a.extend(m.R.prototype, {
                            nodeHasBindings: function(e) {
                                switch(e.nodeType) {
                                    case 1:
                                        return null != e.getAttribute("data-bind") || m.g.getComponentNameForNode(e);
                                    case 8:
                                        return m.f.Uc(e);
                                    default:
                                        return !1
                                }
                            },
                            getBindings: function(e, t) {
                                var n = this.getBindingsString(e, t),
                                    n = n ? this.parseBindingsString(n, t, e) : null;
                                return m.g.Pb(n, e, t, !1)
                            },
                            getBindingAccessors: function(e, t) {
                                var n = this.getBindingsString(e, t),
                                    n = n ? this.parseBindingsString(n, t, e, {
                                        valueAccessors: !0
                                    }) : null;
                                return m.g.Pb(n, e, t, !0)
                            },
                            getBindingsString: function(e) {
                                switch(e.nodeType) {
                                    case 1:
                                        return e.getAttribute("data-bind");
                                    case 8:
                                        return m.f.qd(e);
                                    default:
                                        return null
                                }
                            },
                            parseBindingsString: function(e, t, n, a) {
                                try {
                                    var i, r = this.Gc,
                                        o = e + (a && a.valueAccessors || "");
                                    if(!(i = r[o])) {
                                        var s, l = "with($context){with($data||{}){return{" + m.h.Ua(e, a) + "}}}";
                                        s = new Function("$context", "$element", l), i = r[o] = s
                                    }
                                    return i(t, n)
                                } catch(t) {
                                    throw t.message = "Unable to parse bindings.\nBindings value: " + e + "\nMessage: " + t.message, t
                                }
                            }
                        }), m.R.instance = new m.R
                    }(), m.b("bindingProvider", m.R),
                    function() {
                        function n(e) {
                            return function() {
                                return e
                            }
                        }

                        function a(e) {
                            return e()
                        }

                        function r(e) {
                            return m.a.Ca(m.l.w(e), function(t, n) {
                                return function() {
                                    return e()[n]
                                }
                            })
                        }

                        function o(e, t, a) {
                            return "function" == typeof e ? r(e.bind(null, t, a)) : m.a.Ca(e, n)
                        }

                        function s(e, t) {
                            return r(this.getBindings.bind(this, e, t))
                        }

                        function l(e, t, n) {
                            var a, i = m.f.firstChild(t),
                                r = m.R.instance,
                                o = r.preprocessNode;
                            if(o) {
                                for(; a = i;) i = m.f.nextSibling(a), o.call(r, a);
                                i = m.f.firstChild(t)
                            }
                            for(; a = i;) i = m.f.nextSibling(a), c(e, a, n)
                        }

                        function c(e, t, n) {
                            var a = !0,
                                i = 1 === t.nodeType;
                            i && m.f.mc(t), (i && n || m.R.instance.nodeHasBindings(t)) && (a = d(t, null, e, n).shouldBindDescendants), a && !h[m.a.A(t)] && l(e, t, !i)
                        }

                        function u(e) {
                            var t = [],
                                n = {},
                                a = [];
                            return m.a.D(e, function i(r) {
                                if(!n[r]) {
                                    var o = m.getBindingHandler(r);
                                    o && (o.after && (a.push(r), m.a.q(o.after, function(t) {
                                        if(e[t]) {
                                            if(-1 !== m.a.o(a, t)) throw Error("Cannot combine the following bindings, because they have a cyclic dependency: " + a.join(", "));
                                            i(t)
                                        }
                                    }), a.length--), t.push({
                                        key: r,
                                        hc: o
                                    })), n[r] = !0
                                }
                            }), t
                        }

                        function d(t, n, i, r) {
                            var o = m.a.e.get(t, p);
                            if(!n) {
                                if(o) throw Error("You cannot apply bindings multiple times to the same element.");
                                m.a.e.set(t, p, !0)
                            }!o && r && m.vc(t, i);
                            var l;
                            if(n && "function" != typeof n) l = n;
                            else {
                                var c = m.R.instance,
                                    d = c.getBindingAccessors || s,
                                    f = m.B(function() {
                                        return(l = n ? n(i, t) : d.call(c, t, i)) && i.P && i.P(), l
                                    }, null, {
                                        i: t
                                    });
                                l && f.ba() || (f = null)
                            }
                            var h;
                            if(l) {
                                var b = f ? function(e) {
                                        return function() {
                                            return a(f()[e])
                                        }
                                    } : function(e) {
                                        return l[e]
                                    },
                                    g = function() {
                                        return m.a.Ca(f ? f() : l, a)
                                    };
                                g.get = function(e) {
                                    return l[e] && a(b(e))
                                }, g.has = function(e) {
                                    return e in l
                                }, r = u(l), m.a.q(r, function(n) {
                                    var a = n.hc.init,
                                        r = n.hc.update,
                                        o = n.key;
                                    if(8 === t.nodeType && !m.f.Z[o]) throw Error("The binding '" + o + "' cannot be used with virtual elements");
                                    try {
                                        "function" == typeof a && m.l.w(function() {
                                            var n = a(t, b(o), g, i.$data, i);
                                            if(n && n.controlsDescendantBindings) {
                                                if(h !== e) throw Error("Multiple bindings (" + h + " and " + o + ") are trying to control descendant bindings of the same element. You cannot use these bindings together on the same element.");
                                                h = o
                                            }
                                        }), "function" == typeof r && m.B(function() {
                                            r(t, b(o), g, i.$data, i)
                                        }, null, {
                                            i: t
                                        })
                                    } catch(e) {
                                        throw e.message = 'Unable to process binding "' + o + ": " + l[o] + '"\nMessage: ' + e.message, e
                                    }
                                })
                            }
                            return {
                                shouldBindDescendants: h === e
                            }
                        }

                        function f(e) {
                            return e && e instanceof m.Q ? e : new m.Q(e)
                        }
                        m.d = {};
                        var h = {
                            script: !0,
                            textarea: !0,
                            template: !0
                        };
                        m.getBindingHandler = function(e) {
                            return m.d[e]
                        }, m.Q = function(t, n, a, i, r) {
                            function o() {
                                var e = d ? t() : t,
                                    r = m.a.c(e);
                                return n ? (n.P && n.P(), m.a.extend(u, n), u.P = c) : (u.$parents = [], u.$root = r, u.ko = m), u.$rawData = e, u.$data = r, a && (u[a] = r), i && i(u, n, r), u.$data
                            }

                            function s() {
                                return l && !m.a.Rb(l)
                            }
                            var l, c, u = this,
                                d = "function" == typeof t && !m.H(t);
                            r && r.exportDependencies ? o() : (c = m.B(o, null, {
                                wa: s,
                                i: !0
                            }), c.ba() && (u.P = c, c.equalityComparer = null, l = [], c.Bc = function(t) {
                                l.push(t), m.a.F.oa(t, function(t) {
                                    m.a.La(l, t), l.length || (c.k(), u.P = c = e)
                                })
                            }))
                        }, m.Q.prototype.createChildContext = function(e, t, n, a) {
                            return new m.Q(e, this, t, function(e, t) {
                                e.$parentContext = t, e.$parent = t.$data, e.$parents = (t.$parents || []).slice(0), e.$parents.unshift(e.$parent), n && n(e)
                            }, a)
                        }, m.Q.prototype.extend = function(e) {
                            return new m.Q(this.P || this.$data, this, null, function(t, n) {
                                t.$rawData = n.$rawData, m.a.extend(t, "function" == typeof e ? e() : e)
                            })
                        }, m.Q.prototype.Zb = function(e, t) {
                            return this.createChildContext(e, t, null, {
                                exportDependencies: !0
                            })
                        };
                        var p = m.a.e.I(),
                            b = m.a.e.I();
                        m.vc = function(e, t) {
                            return 2 != arguments.length ? m.a.e.get(e, b) : (m.a.e.set(e, b, t), void(t.P && t.P.Bc(e)))
                        }, m.Ja = function(e, t, n) {
                            return 1 === e.nodeType && m.f.mc(e), d(e, t, f(n), !0)
                        }, m.Ec = function(e, t, n) {
                            return n = f(n), m.Ja(e, o(t, n, e), n)
                        }, m.eb = function(e, t) {
                            1 !== t.nodeType && 8 !== t.nodeType || l(f(e), t, !0)
                        }, m.Sb = function(e, n) {
                            if(!i && t.jQuery && (i = t.jQuery), n && 1 !== n.nodeType && 8 !== n.nodeType) throw Error("ko.applyBindings: first parameter should be your view model; second parameter should be a DOM node");
                            n = n || t.document.body, c(f(e), n, !0)
                        }, m.kb = function(t) {
                            switch(t.nodeType) {
                                case 1:
                                case 8:
                                    var n = m.vc(t);
                                    if(n) return n;
                                    if(t.parentNode) return m.kb(t.parentNode)
                            }
                            return e
                        }, m.Kc = function(t) {
                            return(t = m.kb(t)) ? t.$data : e
                        }, m.b("bindingHandlers", m.d), m.b("applyBindings", m.Sb), m.b("applyBindingsToDescendants", m.eb), m.b("applyBindingAccessorsToNode", m.Ja), m.b("applyBindingsToNode", m.Ec), m.b("contextFor", m.kb), m.b("dataFor", m.Kc)
                    }(),
                    function(e) {
                        function t(t, a) {
                            var o, s = i.hasOwnProperty(t) ? i[t] : e;
                            s ? s.X(a) : (s = i[t] = new m.J, s.X(a), n(t, function(e, n) {
                                var a = !(!n || !n.synchronous);
                                r[t] = {
                                    definition: e,
                                    $c: a
                                }, delete i[t], o || a ? s.notifySubscribers(e) : m.Y.Wa(function() {
                                    s.notifySubscribers(e)
                                })
                            }), o = !0)
                        }

                        function n(e, t) {
                            a("getConfig", [e], function(n) {
                                n ? a("loadComponent", [e, n], function(e) {
                                    t(e, n)
                                }) : t(null, null)
                            })
                        }

                        function a(t, n, i, r) {
                            r || (r = m.g.loaders.slice(0));
                            var o = r.shift();
                            if(o) {
                                var s = o[t];
                                if(s) {
                                    var l = !1;
                                    if(s.apply(o, n.concat(function(e) {
                                            l ? i(null) : null !== e ? i(e) : a(t, n, i, r)
                                        })) !== e && (l = !0, !o.suppressLoaderExceptions)) throw Error("Component loaders must supply values by invoking the callback, not by returning values synchronously.")
                                } else a(t, n, i, r)
                            } else i(null)
                        }
                        var i = {},
                            r = {};
                        m.g = {
                            get: function(n, a) {
                                var i = r.hasOwnProperty(n) ? r[n] : e;
                                i ? i.$c ? m.l.w(function() {
                                    a(i.definition)
                                }) : m.Y.Wa(function() {
                                    a(i.definition);
                                }) : t(n, a)
                            },
                            Yb: function(e) {
                                delete r[e]
                            },
                            Kb: a
                        }, m.g.loaders = [], m.b("components", m.g), m.b("components.get", m.g.get), m.b("components.clearCachedDefinition", m.g.Yb)
                    }(),
                    function() {
                        function e(e, t, n, a) {
                            function i() {
                                0 === --s && a(r)
                            }
                            var r = {},
                                s = 2,
                                l = n.template;
                            n = n.viewModel, l ? o(t, l, function(t) {
                                m.g.Kb("loadTemplate", [e, t], function(e) {
                                    r.template = e, i()
                                })
                            }) : i(), n ? o(t, n, function(t) {
                                m.g.Kb("loadViewModel", [e, t], function(e) {
                                    r[u] = e, i()
                                })
                            }) : i()
                        }

                        function a(e, t, n) {
                            if("function" == typeof t) n(function(e) {
                                return new t(e)
                            });
                            else if("function" == typeof t[u]) n(t[u]);
                            else if("instance" in t) {
                                var i = t.instance;
                                n(function() {
                                    return i
                                })
                            } else "viewModel" in t ? a(e, t.viewModel, n) : e("Unknown viewModel value: " + t)
                        }

                        function i(e) {
                            switch(m.a.A(e)) {
                                case "script":
                                    return m.a.ma(e.text);
                                case "textarea":
                                    return m.a.ma(e.value);
                                case "template":
                                    if(r(e.content)) return m.a.ua(e.content.childNodes)
                            }
                            return m.a.ua(e.childNodes)
                        }

                        function r(e) {
                            return t.DocumentFragment ? e instanceof DocumentFragment : e && 11 === e.nodeType
                        }

                        function o(e, n, a) {
                            "string" == typeof n.require ? s || t.require ? (s || t.require)([n.require], a) : e("Uses require, but no AMD loader is present") : a(n)
                        }

                        function l(e) {
                            return function(t) {
                                throw Error("Component '" + e + "': " + t)
                            }
                        }
                        var c = {};
                        m.g.register = function(e, t) {
                            if(!t) throw Error("Invalid configuration for " + e);
                            if(m.g.ub(e)) throw Error("Component " + e + " is already registered");
                            c[e] = t
                        }, m.g.ub = function(e) {
                            return c.hasOwnProperty(e)
                        }, m.g.pd = function(e) {
                            delete c[e], m.g.Yb(e)
                        }, m.g.ac = {
                            getConfig: function(e, t) {
                                t(c.hasOwnProperty(e) ? c[e] : null)
                            },
                            loadComponent: function(t, n, a) {
                                var i = l(t);
                                o(i, n, function(n) {
                                    e(t, i, n, a)
                                })
                            },
                            loadTemplate: function(e, a, o) {
                                if(e = l(e), "string" == typeof a) o(m.a.ma(a));
                                else if(a instanceof Array) o(a);
                                else if(r(a)) o(m.a.V(a.childNodes));
                                else if(a.element)
                                    if(a = a.element, t.HTMLElement ? a instanceof HTMLElement : a && a.tagName && 1 === a.nodeType) o(i(a));
                                    else if("string" == typeof a) {
                                    var s = n.getElementById(a);
                                    s ? o(i(s)) : e("Cannot find element with ID " + a)
                                } else e("Unknown element type: " + a);
                                else e("Unknown template value: " + a)
                            },
                            loadViewModel: function(e, t, n) {
                                a(l(e), t, n)
                            }
                        };
                        var u = "createViewModel";
                        m.b("components.register", m.g.register), m.b("components.isRegistered", m.g.ub), m.b("components.unregister", m.g.pd), m.b("components.defaultLoader", m.g.ac), m.g.loaders.push(m.g.ac), m.g.Cc = c
                    }(),
                    function() {
                        function e(e, n) {
                            var a = e.getAttribute("params");
                            if(a) {
                                var a = t.parseBindingsString(a, n, e, {
                                        valueAccessors: !0,
                                        bindingParams: !0
                                    }),
                                    a = m.a.Ca(a, function(t) {
                                        return m.m(t, null, {
                                            i: e
                                        })
                                    }),
                                    i = m.a.Ca(a, function(t) {
                                        var n = t.t();
                                        return t.ba() ? m.m({
                                            read: function() {
                                                return m.a.c(t())
                                            },
                                            write: m.Ba(n) && function(e) {
                                                t()(e)
                                            },
                                            i: e
                                        }) : n
                                    });
                                return i.hasOwnProperty("$raw") || (i.$raw = a), i
                            }
                            return {
                                $raw: {}
                            }
                        }
                        m.g.getComponentNameForNode = function(e) {
                            var t = m.a.A(e);
                            if(m.g.ub(t) && (-1 != t.indexOf("-") || "[object HTMLUnknownElement]" == "" + e || 8 >= m.a.C && e.tagName === t)) return t
                        }, m.g.Pb = function(t, n, a, i) {
                            if(1 === n.nodeType) {
                                var r = m.g.getComponentNameForNode(n);
                                if(r) {
                                    if(t = t || {}, t.component) throw Error('Cannot use the "component" binding on a custom element matching a component');
                                    var o = {
                                        name: r,
                                        params: e(n, a)
                                    };
                                    t.component = i ? function() {
                                        return o
                                    } : o
                                }
                            }
                            return t
                        };
                        var t = new m.R;
                        9 > m.a.C && (m.g.register = function(e) {
                            return function(t) {
                                return n.createElement(t), e.apply(this, arguments)
                            }
                        }(m.g.register), n.createDocumentFragment = function(e) {
                            return function() {
                                var t, n = e(),
                                    a = m.g.Cc;
                                for(t in a) a.hasOwnProperty(t) && n.createElement(t);
                                return n
                            }
                        }(n.createDocumentFragment))
                    }(),
                    function(e) {
                        function t(e, t, n) {
                            if(t = t.template, !t) throw Error("Component '" + e + "' has no template");
                            e = m.a.ua(t), m.f.da(n, e)
                        }

                        function n(e, t, n, a) {
                            var i = e.createViewModel;
                            return i ? i.call(e, a, {
                                element: t,
                                templateNodes: n
                            }) : a
                        }
                        var a = 0;
                        m.d.component = {
                            init: function(i, r, o, s, l) {
                                function c() {
                                    var e = u && u.dispose;
                                    "function" == typeof e && e.call(u), d = u = null
                                }
                                var u, d, f = m.a.V(m.f.childNodes(i));
                                return m.a.F.oa(i, c), m.m(function() {
                                    var o, s, h = m.a.c(r());
                                    if("string" == typeof h ? o = h : (o = m.a.c(h.name), s = m.a.c(h.params)), !o) throw Error("No component name specified");
                                    var p = d = ++a;
                                    m.g.get(o, function(a) {
                                        if(d === p) {
                                            if(c(), !a) throw Error("Unknown component '" + o + "'");
                                            t(o, a, i);
                                            var r = n(a, i, f, s);
                                            a = l.createChildContext(r, e, function(e) {
                                                e.$component = r, e.$componentTemplateNodes = f
                                            }), u = r, m.eb(a, i)
                                        }
                                    })
                                }, null, {
                                    i: i
                                }), {
                                    controlsDescendantBindings: !0
                                }
                            }
                        }, m.f.Z.component = !0
                    }();
                var M = {
                    class: "className",
                    for: "htmlFor"
                };
                m.d.attr = {
                        update: function(t, n) {
                            var a = m.a.c(n()) || {};
                            m.a.D(a, function(n, a) {
                                a = m.a.c(a);
                                var i = !1 === a || null === a || a === e;
                                i && t.removeAttribute(n), 8 >= m.a.C && n in M ? (n = M[n], i ? t.removeAttribute(n) : t[n] = a) : i || t.setAttribute(n, a.toString()), "name" === n && m.a.tc(t, i ? "" : a.toString())
                            })
                        }
                    },
                    function() {
                        m.d.checked = {
                            after: ["value", "attr"],
                            init: function(t, n, a) {
                                function i() {
                                    var e = t.checked,
                                        i = h ? o() : e;
                                    if(!m.va.Sa() && (!l || e)) {
                                        var r = m.l.w(n);
                                        if(u) {
                                            var s = d ? r.t() : r;
                                            f !== i ? (e && (m.a.pa(s, i, !0), m.a.pa(s, f, !1)), f = i) : m.a.pa(s, i, e), d && m.Ba(r) && r(s)
                                        } else m.h.Ea(r, a, "checked", i, !0)
                                    }
                                }

                                function r() {
                                    var e = m.a.c(n());
                                    t.checked = u ? 0 <= m.a.o(e, o()) : s ? e : o() === e
                                }
                                var o = m.pc(function() {
                                        return a.has("checkedValue") ? m.a.c(a.get("checkedValue")) : a.has("value") ? m.a.c(a.get("value")) : t.value
                                    }),
                                    s = "checkbox" == t.type,
                                    l = "radio" == t.type;
                                if(s || l) {
                                    var c = n(),
                                        u = s && m.a.c(c) instanceof Array,
                                        d = !(u && c.push && c.splice),
                                        f = u ? o() : e,
                                        h = l || u;
                                    l && !t.name && m.d.uniqueName.init(t, function() {
                                        return !0
                                    }), m.m(i, null, {
                                        i: t
                                    }), m.a.p(t, "click", i), m.m(r, null, {
                                        i: t
                                    }), c = e
                                }
                            }
                        }, m.h.ea.checked = !0, m.d.checkedValue = {
                            update: function(e, t) {
                                e.value = m.a.c(t())
                            }
                        }
                    }(), m.d.css = {
                        update: function(e, t) {
                            var n = m.a.c(t());
                            null !== n && "object" == typeof n ? m.a.D(n, function(t, n) {
                                n = m.a.c(n), m.a.bb(e, t, n)
                            }) : (n = m.a.$a(String(n || "")), m.a.bb(e, e.__ko__cssValue, !1), e.__ko__cssValue = n, m.a.bb(e, n, !0))
                        }
                    }, m.d.enable = {
                        update: function(e, t) {
                            var n = m.a.c(t());
                            n && e.disabled ? e.removeAttribute("disabled") : n || e.disabled || (e.disabled = !0)
                        }
                    }, m.d.disable = {
                        update: function(e, t) {
                            m.d.enable.update(e, function() {
                                return !m.a.c(t())
                            })
                        }
                    }, m.d.event = {
                        init: function(e, t, n, a, i) {
                            var r = t() || {};
                            m.a.D(r, function(r) {
                                "string" == typeof r && m.a.p(e, r, function(e) {
                                    var o, s = t()[r];
                                    if(s) {
                                        try {
                                            var l = m.a.V(arguments);
                                            a = i.$data, l.unshift(a), o = s.apply(a, l)
                                        } finally {
                                            !0 !== o && (e.preventDefault ? e.preventDefault() : e.returnValue = !1)
                                        }!1 === n.get(r + "Bubble") && (e.cancelBubble = !0, e.stopPropagation && e.stopPropagation())
                                    }
                                })
                            })
                        }
                    }, m.d.foreach = {
                        kc: function(e) {
                            return function() {
                                var t = e(),
                                    n = m.a.zb(t);
                                return n && "number" != typeof n.length ? (m.a.c(t), {
                                    foreach: n.data,
                                    as: n.as,
                                    includeDestroyed: n.includeDestroyed,
                                    afterAdd: n.afterAdd,
                                    beforeRemove: n.beforeRemove,
                                    afterRender: n.afterRender,
                                    beforeMove: n.beforeMove,
                                    afterMove: n.afterMove,
                                    templateEngine: m.W.sb
                                }) : {
                                    foreach: t,
                                    templateEngine: m.W.sb
                                }
                            }
                        },
                        init: function(e, t) {
                            return m.d.template.init(e, m.d.foreach.kc(t))
                        },
                        update: function(e, t, n, a, i) {
                            return m.d.template.update(e, m.d.foreach.kc(t), n, a, i)
                        }
                    }, m.h.ta.foreach = !1, m.f.Z.foreach = !0, m.d.hasfocus = {
                        init: function(e, t, n) {
                            function a(a) {
                                e.__ko_hasfocusUpdating = !0;
                                var i = e.ownerDocument;
                                if("activeElement" in i) {
                                    var r;
                                    try {
                                        r = i.activeElement
                                    } catch(e) {
                                        r = i.body
                                    }
                                    a = r === e
                                }
                                i = t(), m.h.Ea(i, n, "hasfocus", a, !0), e.__ko_hasfocusLastValue = a, e.__ko_hasfocusUpdating = !1
                            }
                            var i = a.bind(null, !0),
                                r = a.bind(null, !1);
                            m.a.p(e, "focus", i), m.a.p(e, "focusin", i), m.a.p(e, "blur", r), m.a.p(e, "focusout", r)
                        },
                        update: function(e, t) {
                            var n = !!m.a.c(t());
                            e.__ko_hasfocusUpdating || e.__ko_hasfocusLastValue === n || (n ? e.focus() : e.blur(), !n && e.__ko_hasfocusLastValue && e.ownerDocument.body.focus(), m.l.w(m.a.Da, null, [e, n ? "focusin" : "focusout"]))
                        }
                    }, m.h.ea.hasfocus = !0, m.d.hasFocus = m.d.hasfocus, m.h.ea.hasFocus = !0, m.d.html = {
                        init: function() {
                            return {
                                controlsDescendantBindings: !0
                            }
                        },
                        update: function(e, t) {
                            m.a.Cb(e, t())
                        }
                    }, p("if"), p("ifnot", !1, !0), p("with", !0, !1, function(e, t) {
                        return e.Zb(t)
                    });
                var E = {};
                m.d.options = {
                        init: function(e) {
                            if("select" !== m.a.A(e)) throw Error("options binding applies only to SELECT elements");
                            for(; 0 < e.length;) e.remove(0);
                            return {
                                controlsDescendantBindings: !0
                            }
                        },
                        update: function(t, n, a) {
                            function i() {
                                return m.a.Ka(t.options, function(e) {
                                    return e.selected
                                })
                            }

                            function r(e, t, n) {
                                var a = typeof t;
                                return "function" == a ? t(e) : "string" == a ? e[t] : n
                            }

                            function o(e, n) {
                                if(p && u) m.j.ha(t, m.a.c(a.get("value")), !0);
                                else if(h.length) {
                                    var i = 0 <= m.a.o(h, m.j.u(n[0]));
                                    m.a.uc(n[0], i), p && !i && m.l.w(m.a.Da, null, [t, "change"])
                                }
                            }
                            var s = t.multiple,
                                l = 0 != t.length && s ? t.scrollTop : null,
                                c = m.a.c(n()),
                                u = a.get("valueAllowUnset") && a.has("value"),
                                d = a.get("optionsIncludeDestroyed");
                            n = {};
                            var f, h = [];
                            u || (s ? h = m.a.fb(i(), m.j.u) : 0 <= t.selectedIndex && h.push(m.j.u(t.options[t.selectedIndex]))), c && ("undefined" == typeof c.length && (c = [c]), f = m.a.Ka(c, function(t) {
                                return d || t === e || null === t || !m.a.c(t._destroy)
                            }), a.has("optionsCaption") && (c = m.a.c(a.get("optionsCaption")), null !== c && c !== e && f.unshift(E)));
                            var p = !1;
                            n.beforeRemove = function(e) {
                                t.removeChild(e)
                            }, c = o, a.has("optionsAfterRender") && "function" == typeof a.get("optionsAfterRender") && (c = function(t, n) {
                                o(0, n), m.l.w(a.get("optionsAfterRender"), null, [n[0], t !== E ? t : e])
                            }), m.a.Bb(t, f, function(n, i, o) {
                                return o.length && (h = !u && o[0].selected ? [m.j.u(o[0])] : [], p = !0), i = t.ownerDocument.createElement("option"), n === E ? (m.a.Za(i, a.get("optionsCaption")), m.j.ha(i, e)) : (o = r(n, a.get("optionsValue"), n), m.j.ha(i, m.a.c(o)), n = r(n, a.get("optionsText"), o), m.a.Za(i, n)), [i]
                            }, n, c), m.l.w(function() {
                                u ? m.j.ha(t, m.a.c(a.get("value")), !0) : (s ? h.length && i().length < h.length : h.length && 0 <= t.selectedIndex ? m.j.u(t.options[t.selectedIndex]) !== h[0] : h.length || 0 <= t.selectedIndex) && m.a.Da(t, "change")
                            }), m.a.Oc(t), l && 20 < Math.abs(l - t.scrollTop) && (t.scrollTop = l)
                        }
                    }, m.d.options.xb = m.a.e.I(), m.d.selectedOptions = {
                        after: ["options", "foreach"],
                        init: function(e, t, n) {
                            m.a.p(e, "change", function() {
                                var a = t(),
                                    i = [];
                                m.a.q(e.getElementsByTagName("option"), function(e) {
                                    e.selected && i.push(m.j.u(e))
                                }), m.h.Ea(a, n, "selectedOptions", i)
                            })
                        },
                        update: function(e, t) {
                            if("select" != m.a.A(e)) throw Error("values binding applies only to SELECT elements");
                            var n = m.a.c(t()),
                                a = e.scrollTop;
                            n && "number" == typeof n.length && m.a.q(e.getElementsByTagName("option"), function(e) {
                                var t = 0 <= m.a.o(n, m.j.u(e));
                                e.selected != t && m.a.uc(e, t)
                            }), e.scrollTop = a
                        }
                    }, m.h.ea.selectedOptions = !0, m.d.style = {
                        update: function(t, n) {
                            var a = m.a.c(n() || {});
                            m.a.D(a, function(n, a) {
                                a = m.a.c(a), null !== a && a !== e && !1 !== a || (a = ""), t.style[n] = a
                            })
                        }
                    }, m.d.submit = {
                        init: function(e, t, n, a, i) {
                            if("function" != typeof t()) throw Error("The value for a submit binding must be a function");
                            m.a.p(e, "submit", function(n) {
                                var a, r = t();
                                try {
                                    a = r.call(i.$data, e)
                                } finally {
                                    !0 !== a && (n.preventDefault ? n.preventDefault() : n.returnValue = !1)
                                }
                            })
                        }
                    }, m.d.text = {
                        init: function() {
                            return {
                                controlsDescendantBindings: !0
                            }
                        },
                        update: function(e, t) {
                            m.a.Za(e, t())
                        }
                    }, m.f.Z.text = !0,
                    function() {
                        if(t && t.navigator) var n = function(e) {
                                if(e) return parseFloat(e[1])
                            },
                            a = t.opera && t.opera.version && parseInt(t.opera.version()),
                            i = t.navigator.userAgent,
                            r = n(i.match(/^(?:(?!chrome).)*version\/([^ ]*) safari/i)),
                            o = n(i.match(/Firefox\/([^ ]*)/));
                        if(10 > m.a.C) var s = m.a.e.I(),
                            l = m.a.e.I(),
                            c = function(e) {
                                var t = this.activeElement;
                                (t = t && m.a.e.get(t, l)) && t(e)
                            },
                            u = function(e, t) {
                                var n = e.ownerDocument;
                                m.a.e.get(n, s) || (m.a.e.set(n, s, !0), m.a.p(n, "selectionchange", c)), m.a.e.set(e, l, t)
                            };
                        m.d.textInput = {
                            init: function(t, n, i) {
                                function s(e, n) {
                                    m.a.p(t, e, n)
                                }

                                function l() {
                                    var a = m.a.c(n());
                                    null !== a && a !== e || (a = ""), h !== e && a === h ? m.a.setTimeout(l, 4) : t.value !== a && (p = a, t.value = a)
                                }

                                function c() {
                                    f || (h = t.value, f = m.a.setTimeout(d, 4))
                                }

                                function d() {
                                    clearTimeout(f), h = f = e;
                                    var a = t.value;
                                    p !== a && (p = a, m.h.Ea(n(), i, "textInput", a))
                                }
                                var f, h, p = t.value,
                                    b = 9 == m.a.C ? c : d;
                                10 > m.a.C ? (s("propertychange", function(e) {
                                    "value" === e.propertyName && b(e)
                                }), 8 == m.a.C && (s("keyup", d), s("keydown", d)), 8 <= m.a.C && (u(t, b), s("dragend", c))) : (s("input", d), 5 > r && "textarea" === m.a.A(t) ? (s("keydown", c), s("paste", c), s("cut", c)) : 11 > a ? s("keydown", c) : 4 > o && (s("DOMAutoComplete", d), s("dragdrop", d), s("drop", d))), s("change", d), m.m(l, null, {
                                    i: t
                                })
                            }
                        }, m.h.ea.textInput = !0, m.d.textinput = {
                            preprocess: function(e, t, n) {
                                n("textInput", e)
                            }
                        }
                    }(), m.d.uniqueName = {
                        init: function(e, t) {
                            if(t()) {
                                var n = "ko_unique_" + ++m.d.uniqueName.Jc;
                                m.a.tc(e, n)
                            }
                        }
                    }, m.d.uniqueName.Jc = 0, m.d.value = {
                        after: ["options", "foreach"],
                        init: function(e, t, n) {
                            if("input" != e.tagName.toLowerCase() || "checkbox" != e.type && "radio" != e.type) {
                                var a = ["change"],
                                    i = n.get("valueUpdate"),
                                    r = !1,
                                    o = null;
                                i && ("string" == typeof i && (i = [i]), m.a.ra(a, i), a = m.a.Ub(a));
                                var s = function() {
                                    o = null, r = !1;
                                    var a = t(),
                                        i = m.j.u(e);
                                    m.h.Ea(a, n, "value", i)
                                };
                                !m.a.C || "input" != e.tagName.toLowerCase() || "text" != e.type || "off" == e.autocomplete || e.form && "off" == e.form.autocomplete || -1 != m.a.o(a, "propertychange") || (m.a.p(e, "propertychange", function() {
                                    r = !0
                                }), m.a.p(e, "focus", function() {
                                    r = !1
                                }), m.a.p(e, "blur", function() {
                                    r && s()
                                })), m.a.q(a, function(t) {
                                    var n = s;
                                    m.a.od(t, "after") && (n = function() {
                                        o = m.j.u(e), m.a.setTimeout(s, 0)
                                    }, t = t.substring(5)), m.a.p(e, t, n)
                                });
                                var l = function() {
                                    var a = m.a.c(t()),
                                        i = m.j.u(e);
                                    if(null !== o && a === o) m.a.setTimeout(l, 0);
                                    else if(a !== i)
                                        if("select" === m.a.A(e)) {
                                            var r = n.get("valueAllowUnset"),
                                                i = function() {
                                                    m.j.ha(e, a, r)
                                                };
                                            i(), r || a === m.j.u(e) ? m.a.setTimeout(i, 0) : m.l.w(m.a.Da, null, [e, "change"])
                                        } else m.j.ha(e, a)
                                };
                                m.m(l, null, {
                                    i: e
                                })
                            } else m.Ja(e, {
                                checkedValue: t
                            })
                        },
                        update: function() {}
                    }, m.h.ea.value = !0, m.d.visible = {
                        update: function(e, t) {
                            var n = m.a.c(t()),
                                a = "none" != e.style.display;
                            n && !a ? e.style.display = "" : !n && a && (e.style.display = "none")
                        }
                    },
                    function(e) {
                        m.d[e] = {
                            init: function(t, n, a, i, r) {
                                return m.d.event.init.call(this, t, function() {
                                    var t = {};
                                    return t[e] = n(), t
                                }, a, i, r)
                            }
                        }
                    }("click"), m.O = function() {}, m.O.prototype.renderTemplateSource = function() {
                        throw Error("Override renderTemplateSource")
                    }, m.O.prototype.createJavaScriptEvaluatorBlock = function() {
                        throw Error("Override createJavaScriptEvaluatorBlock")
                    }, m.O.prototype.makeTemplateSource = function(e, t) {
                        if("string" == typeof e) {
                            t = t || n;
                            var a = t.getElementById(e);
                            if(!a) throw Error("Cannot find template with ID " + e);
                            return new m.v.n(a)
                        }
                        if(1 == e.nodeType || 8 == e.nodeType) return new m.v.qa(e);
                        throw Error("Unknown template type: " + e)
                    }, m.O.prototype.renderTemplate = function(e, t, n, a) {
                        return e = this.makeTemplateSource(e, a), this.renderTemplateSource(e, t, n, a)
                    }, m.O.prototype.isTemplateRewritten = function(e, t) {
                        return !1 === this.allowTemplateRewriting || this.makeTemplateSource(e, t).data("isRewritten")
                    }, m.O.prototype.rewriteTemplate = function(e, t, n) {
                        e = this.makeTemplateSource(e, n), t = t(e.text()), e.text(t), e.data("isRewritten", !0)
                    }, m.b("templateEngine", m.O), m.Gb = function() {
                        function e(e, t, n, a) {
                            e = m.h.yb(e);
                            for(var i = m.h.ta, r = 0; r < e.length; r++) {
                                var o = e[r].key;
                                if(i.hasOwnProperty(o)) {
                                    var s = i[o];
                                    if("function" == typeof s) {
                                        if(o = s(e[r].value)) throw Error(o)
                                    } else if(!s) throw Error("This template engine does not support the '" + o + "' binding within its templates")
                                }
                            }
                            return n = "ko.__tr_ambtns(function($context,$element){return(function(){return{ " + m.h.Ua(e, {
                                valueAccessors: !0
                            }) + " } })()},'" + n.toLowerCase() + "')", a.createJavaScriptEvaluatorBlock(n) + t
                        }
                        var t = /(<([a-z]+\d*)(?:\s+(?!data-bind\s*=\s*)[a-z0-9\-]+(?:=(?:\"[^\"]*\"|\'[^\']*\'|[^>]*))?)*\s+)data-bind\s*=\s*(["'])([\s\S]*?)\3/gi,
                            n = /\x3c!--\s*ko\b\s*([\s\S]*?)\s*--\x3e/g;
                        return {
                            Pc: function(e, t, n) {
                                t.isTemplateRewritten(e, n) || t.rewriteTemplate(e, function(e) {
                                    return m.Gb.ed(e, t)
                                }, n)
                            },
                            ed: function(a, i) {
                                return a.replace(t, function(t, n, a, r, o) {
                                    return e(o, n, a, i)
                                }).replace(n, function(t, n) {
                                    return e(n, "<!-- ko -->", "#comment", i)
                                })
                            },
                            Fc: function(e, t) {
                                return m.M.wb(function(n, a) {
                                    var i = n.nextSibling;
                                    i && i.nodeName.toLowerCase() === t && m.Ja(i, e, a)
                                })
                            }
                        }
                    }(), m.b("__tr_ambtns", m.Gb.Fc),
                    function() {
                        m.v = {}, m.v.n = function(e) {
                            if(this.n = e) {
                                var t = m.a.A(e);
                                this.ab = "script" === t ? 1 : "textarea" === t ? 2 : "template" == t && e.content && 11 === e.content.nodeType ? 3 : 4
                            }
                        }, m.v.n.prototype.text = function() {
                            var e = 1 === this.ab ? "text" : 2 === this.ab ? "value" : "innerHTML";
                            if(0 == arguments.length) return this.n[e];
                            var t = arguments[0];
                            "innerHTML" === e ? m.a.Cb(this.n, t) : this.n[e] = t
                        };
                        var t = m.a.e.I() + "_";
                        m.v.n.prototype.data = function(e) {
                            return 1 === arguments.length ? m.a.e.get(this.n, t + e) : void m.a.e.set(this.n, t + e, arguments[1])
                        };
                        var n = m.a.e.I();
                        m.v.n.prototype.nodes = function() {
                            var t = this.n;
                            return 0 == arguments.length ? (m.a.e.get(t, n) || {}).jb || (3 === this.ab ? t.content : 4 === this.ab ? t : e) : void m.a.e.set(t, n, {
                                jb: arguments[0]
                            })
                        }, m.v.qa = function(e) {
                            this.n = e
                        }, m.v.qa.prototype = new m.v.n, m.v.qa.prototype.text = function() {
                            if(0 == arguments.length) {
                                var t = m.a.e.get(this.n, n) || {};
                                return t.Hb === e && t.jb && (t.Hb = t.jb.innerHTML), t.Hb
                            }
                            m.a.e.set(this.n, n, {
                                Hb: arguments[0]
                            })
                        }, m.b("templateSources", m.v), m.b("templateSources.domElement", m.v.n), m.b("templateSources.anonymousTemplate", m.v.qa)
                    }(),
                    function() {
                        function t(e, t, n) {
                            var a;
                            for(t = m.f.nextSibling(t); e && (a = e) !== t;) e = m.f.nextSibling(a), n(a, e)
                        }

                        function n(e, n) {
                            if(e.length) {
                                var a = e[0],
                                    i = e[e.length - 1],
                                    r = a.parentNode,
                                    o = m.R.instance,
                                    s = o.preprocessNode;
                                if(s) {
                                    if(t(a, i, function(e, t) {
                                            var n = e.previousSibling,
                                                r = s.call(o, e);
                                            r && (e === a && (a = r[0] || t), e === i && (i = r[r.length - 1] || n))
                                        }), e.length = 0, !a) return;
                                    a === i ? e.push(a) : (e.push(a, i), m.a.za(e, r))
                                }
                                t(a, i, function(e) {
                                    1 !== e.nodeType && 8 !== e.nodeType || m.Sb(n, e)
                                }), t(a, i, function(e) {
                                    1 !== e.nodeType && 8 !== e.nodeType || m.M.Ac(e, [n])
                                }), m.a.za(e, r)
                            }
                        }

                        function a(e) {
                            return e.nodeType ? e : 0 < e.length ? e[0] : null
                        }

                        function i(e, t, i, r, s) {
                            s = s || {};
                            var l = (e && a(e) || i || {}).ownerDocument,
                                c = s.templateEngine || o;
                            if(m.Gb.Pc(i, c, l), i = c.renderTemplate(i, r, s, l), "number" != typeof i.length || 0 < i.length && "number" != typeof i[0].nodeType) throw Error("Template engine must return an array of DOM nodes");
                            switch(l = !1, t) {
                                case "replaceChildren":
                                    m.f.da(e, i), l = !0;
                                    break;
                                case "replaceNode":
                                    m.a.sc(e, i), l = !0;
                                    break;
                                case "ignoreTargetNode":
                                    break;
                                default:
                                    throw Error("Unknown renderMode: " + t)
                            }
                            return l && (n(i, r), s.afterRender && m.l.w(s.afterRender, null, [i, r.$data])), i
                        }

                        function r(e, t, n) {
                            return m.H(e) ? e() : "function" == typeof e ? e(t, n) : e
                        }
                        var o;
                        m.Db = function(t) {
                            if(t != e && !(t instanceof m.O)) throw Error("templateEngine must inherit from ko.templateEngine");
                            o = t
                        }, m.Ab = function(t, n, s, l, c) {
                            if(s = s || {}, (s.templateEngine || o) == e) throw Error("Set a template engine before calling renderTemplate");
                            if(c = c || "replaceChildren", l) {
                                var u = a(l);
                                return m.B(function() {
                                    var e = n && n instanceof m.Q ? n : new m.Q(n, null, null, null, {
                                            exportDependencies: !0
                                        }),
                                        o = r(t, e.$data, e),
                                        e = i(l, c, o, e, s);
                                    "replaceNode" == c && (l = e, u = a(l))
                                }, null, {
                                    wa: function() {
                                        return !u || !m.a.nb(u)
                                    },
                                    i: u && "replaceNode" == c ? u.parentNode : u
                                })
                            }
                            return m.M.wb(function(e) {
                                m.Ab(t, n, s, e, "replaceNode")
                            })
                        }, m.ld = function(t, a, o, s, l) {
                            function c(e, t) {
                                n(t, d), o.afterRender && o.afterRender(t, e), d = null
                            }

                            function u(e, n) {
                                d = l.createChildContext(e, o.as, function(e) {
                                    e.$index = n
                                });
                                var a = r(t, e, d);
                                return i(null, "ignoreTargetNode", a, d, o)
                            }
                            var d;
                            return m.B(function() {
                                var t = m.a.c(a) || [];
                                "undefined" == typeof t.length && (t = [t]), t = m.a.Ka(t, function(t) {
                                    return o.includeDestroyed || t === e || null === t || !m.a.c(t._destroy)
                                }), m.l.w(m.a.Bb, null, [s, t, u, o, c])
                            }, null, {
                                i: s
                            })
                        };
                        var s = m.a.e.I();
                        m.d.template = {
                            init: function(e, t) {
                                var n = m.a.c(t());
                                if("string" == typeof n || n.name) m.f.xa(e);
                                else {
                                    if("nodes" in n) {
                                        if(n = n.nodes || [], m.H(n)) throw Error('The "nodes" option must be a plain, non-observable array.')
                                    } else n = m.f.childNodes(e);
                                    n = m.a.lc(n), new m.v.qa(e).nodes(n)
                                }
                                return {
                                    controlsDescendantBindings: !0
                                }
                            },
                            update: function(t, n, a, i, r) {
                                var o = n();
                                n = m.a.c(o), a = !0, i = null, "string" == typeof n ? n = {} : (o = n.name, "if" in n && (a = m.a.c(n.if)), a && "ifnot" in n && (a = !m.a.c(n.ifnot))), "foreach" in n ? i = m.ld(o || t, a && n.foreach || [], n, t, r) : a ? (r = "data" in n ? r.Zb(n.data, n.as) : r, i = m.Ab(o || t, r, n, t)) : m.f.xa(t), r = i, (n = m.a.e.get(t, s)) && "function" == typeof n.k && n.k(), m.a.e.set(t, s, r && r.ba() ? r : e)
                            }
                        }, m.h.ta.template = function(e) {
                            return e = m.h.yb(e), 1 == e.length && e[0].unknown || m.h.bd(e, "name") ? null : "This template engine does not support anonymous templates nested within its templates"
                        }, m.f.Z.template = !0
                    }(), m.b("setTemplateEngine", m.Db), m.b("renderTemplate", m.Ab), m.a.fc = function(e, t, n) {
                        if(e.length && t.length) {
                            var a, i, r, o, s;
                            for(a = i = 0;
                                (!n || a < n) && (o = e[i]); ++i) {
                                for(r = 0; s = t[r]; ++r)
                                    if(o.value === s.value) {
                                        o.moved = s.index, s.moved = o.index, t.splice(r, 1), a = r = 0;
                                        break
                                    }
                                a += r
                            }
                        }
                    }, m.a.ib = function() {
                        function e(e, t, n, a, i) {
                            var r, o, s, l, c, u = Math.min,
                                d = Math.max,
                                f = [],
                                h = e.length,
                                p = t.length,
                                b = p - h || 1,
                                g = h + p + 1;
                            for(r = 0; r <= h; r++)
                                for(l = s, f.push(s = []), c = u(p, r + b), o = d(0, r - 1); o <= c; o++) s[o] = o ? r ? e[r - 1] === t[o - 1] ? l[o - 1] : u(l[o] || g, s[o - 1] || g) + 1 : o + 1 : r + 1;
                            for(u = [], d = [], b = [], r = h, o = p; r || o;) p = f[r][o] - 1, o && p === f[r][o - 1] ? d.push(u[u.length] = {
                                status: n,
                                value: t[--o],
                                index: o
                            }) : r && p === f[r - 1][o] ? b.push(u[u.length] = {
                                status: a,
                                value: e[--r],
                                index: r
                            }) : (--o, --r, i.sparse || u.push({
                                status: "retained",
                                value: t[o]
                            }));
                            return m.a.fc(b, d, !i.dontLimitMoves && 10 * h), u.reverse()
                        }
                        return function(t, n, a) {
                            return a = "boolean" == typeof a ? {
                                dontLimitMoves: a
                            } : a || {}, t = t || [], n = n || [], t.length < n.length ? e(t, n, "added", "deleted", a) : e(n, t, "deleted", "added", a)
                        }
                    }(), m.b("utils.compareArrays", m.a.ib),
                    function() {
                        function t(t, n, a, i, r) {
                            var o = [],
                                s = m.B(function() {
                                    var e = n(a, r, m.a.za(o, t)) || [];
                                    0 < o.length && (m.a.sc(o, e), i && m.l.w(i, null, [a, e, r])), o.length = 0, m.a.ra(o, e)
                                }, null, {
                                    i: t,
                                    wa: function() {
                                        return !m.a.Rb(o)
                                    }
                                });
                            return {
                                ca: o,
                                B: s.ba() ? s : e
                            }
                        }
                        var n = m.a.e.I(),
                            a = m.a.e.I();
                        m.a.Bb = function(i, r, o, s, l) {
                            function c(e, t) {
                                T = f[t], v !== t && (S[e] = T), T.qb(v++), m.a.za(T.ca, i), b.push(T), C.push(T)
                            }

                            function u(e, t) {
                                if(e)
                                    for(var n = 0, a = t.length; n < a; n++) t[n] && m.a.q(t[n].ca, function(a) {
                                        e(a, n, t[n].ja)
                                    })
                            }
                            r = r || [], s = s || {};
                            var d = m.a.e.get(i, n) === e,
                                f = m.a.e.get(i, n) || [],
                                h = m.a.fb(f, function(e) {
                                    return e.ja
                                }),
                                p = m.a.ib(h, r, s.dontLimitMoves),
                                b = [],
                                g = 0,
                                v = 0,
                                y = [],
                                C = [];
                            r = [];
                            for(var T, w, x, S = [], h = [], A = 0; w = p[A]; A++) switch(x = w.moved, w.status) {
                                case "deleted":
                                    x === e && (T = f[g], T.B && (T.B.k(), T.B = e), m.a.za(T.ca, i).length && (s.beforeRemove && (b.push(T), C.push(T), T.ja === a ? T = null : r[A] = T), T && y.push.apply(y, T.ca))), g++;
                                    break;
                                case "retained":
                                    c(A, g++);
                                    break;
                                case "added":
                                    x !== e ? c(A, x) : (T = {
                                        ja: w.value,
                                        qb: m.N(v++)
                                    }, b.push(T), C.push(T), d || (h[A] = T))
                            }
                            m.a.e.set(i, n, b), u(s.beforeMove, S), m.a.q(y, s.beforeRemove ? m.$ : m.removeNode);
                            for(var k, A = 0, d = m.f.firstChild(i); T = C[A]; A++) {
                                for(T.ca || m.a.extend(T, t(i, o, T.ja, l, T.qb)), g = 0; p = T.ca[g]; d = p.nextSibling, k = p, g++) p !== d && m.f.ic(i, p, k);
                                !T.Xc && l && (l(T.ja, T.ca, T.qb), T.Xc = !0)
                            }
                            for(u(s.beforeRemove, r), A = 0; A < r.length; ++A) r[A] && (r[A].ja = a);
                            u(s.afterMove, S), u(s.afterAdd, h)
                        }
                    }(), m.b("utils.setDomNodeChildrenFromArrayMapping", m.a.Bb), m.W = function() {
                        this.allowTemplateRewriting = !1
                    }, m.W.prototype = new m.O, m.W.prototype.renderTemplateSource = function(e, t, n, a) {
                        return(t = (9 > m.a.C ? 0 : e.nodes) ? e.nodes() : null) ? m.a.V(t.cloneNode(!0).childNodes) : (e = e.text(), m.a.ma(e, a))
                    }, m.W.sb = new m.W, m.Db(m.W.sb), m.b("nativeTemplateEngine", m.W),
                    function() {
                        m.vb = function() {
                            var e = this.ad = function() {
                                if(!i || !i.tmpl) return 0;
                                try {
                                    if(0 <= i.tmpl.tag.tmpl.open.toString().indexOf("__")) return 2
                                } catch(e) {}
                                return 1
                            }();
                            this.renderTemplateSource = function(t, a, r, o) {
                                if(o = o || n, r = r || {}, 2 > e) throw Error("Your version of jQuery.tmpl is too old. Please upgrade to jQuery.tmpl 1.0.0pre or later.");
                                var s = t.data("precompiled");
                                return s || (s = t.text() || "", s = i.template(null, "{{ko_with $item.koBindingContext}}" + s + "{{/ko_with}}"), t.data("precompiled", s)), t = [a.$data], a = i.extend({
                                    koBindingContext: a
                                }, r.templateOptions), a = i.tmpl(s, t, a), a.appendTo(o.createElement("div")), i.fragments = {}, a
                            }, this.createJavaScriptEvaluatorBlock = function(e) {
                                return "{{ko_code ((function() { return " + e + " })()) }}"
                            }, this.addTemplate = function(e, t) {
                                n.write("<script type='text/html' id='" + e + "'>" + t + "</script>")
                            }, 0 < e && (i.tmpl.tag.ko_code = {
                                open: "__.push($1 || '');"
                            }, i.tmpl.tag.ko_with = {
                                open: "with($1) {",
                                close: "} "
                            })
                        }, m.vb.prototype = new m.O;
                        var e = new m.vb;
                        0 < e.ad && m.Db(e), m.b("jqueryTmplTemplateEngine", m.vb)
                    }()
            })
        }()
    }(), function(e, t) {
        "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : e.ES6Promise = t()
    }(this, function() {
        "use strict";

        function e(e) {
            return "function" == typeof e || "object" == typeof e && null !== e
        }

        function t(e) {
            return "function" == typeof e
        }

        function n(e) {
            W = e
        }

        function a(e) {
            q = e
        }

        function i() {
            return function() {
                return process.nextTick(c)
            }
        }

        function r() {
            return "undefined" != typeof V ? function() {
                V(c)
            } : l()
        }

        function o() {
            var e = 0,
                t = new Y(c),
                n = document.createTextNode("");
            return t.observe(n, {
                    characterData: !0
                }),
                function() {
                    n.data = e = ++e % 2
                }
        }

        function s() {
            var e = new MessageChannel;
            return e.port1.onmessage = c,
                function() {
                    return e.port2.postMessage(0)
                }
        }

        function l() {
            var e = setTimeout;
            return function() {
                return e(c, 1)
            }
        }

        function c() {
            for(var e = 0; e < U; e += 2) {
                var t = X[e],
                    n = X[e + 1];
                t(n), X[e] = void 0, X[e + 1] = void 0
            }
            U = 0
        }

        function u() {
            try {
                var e = require,
                    t = e("vertx");
                return V = t.runOnLoop || t.runOnContext, r()
            } catch(e) {
                return l()
            }
        }

        function d(e, t) {
            var n = arguments,
                a = this,
                i = new this.constructor(h);
            void 0 === i[te] && P(i);
            var r = a._state;
            return r ? ! function() {
                var e = n[r - 1];
                q(function() {
                    return B(r, i, e, a._result)
                })
            }() : A(a, i, e, t), i
        }

        function f(e) {
            var t = this;
            if(e && "object" == typeof e && e.constructor === t) return e;
            var n = new t(h);
            return T(n, e), n
        }

        function h() {}

        function p() {
            return new TypeError("You cannot resolve a promise with itself")
        }

        function m() {
            return new TypeError("A promises callback cannot return that same promise.")
        }

        function b(e) {
            try {
                return e.then
            } catch(e) {
                return re.error = e, re
            }
        }

        function g(e, t, n, a) {
            try {
                e.call(t, n, a)
            } catch(e) {
                return e
            }
        }

        function v(e, t, n) {
            q(function(e) {
                var a = !1,
                    i = g(n, t, function(n) {
                        a || (a = !0, t !== n ? T(e, n) : x(e, n))
                    }, function(t) {
                        a || (a = !0, S(e, t))
                    }, "Settle: " + (e._label || " unknown promise"));
                !a && i && (a = !0, S(e, i))
            }, e)
        }

        function y(e, t) {
            t._state === ae ? x(e, t._result) : t._state === ie ? S(e, t._result) : A(t, void 0, function(t) {
                return T(e, t)
            }, function(t) {
                return S(e, t)
            })
        }

        function C(e, n, a) {
            n.constructor === e.constructor && a === d && n.constructor.resolve === f ? y(e, n) : a === re ? S(e, re.error) : void 0 === a ? x(e, n) : t(a) ? v(e, n, a) : x(e, n)
        }

        function T(t, n) {
            t === n ? S(t, p()) : e(n) ? C(t, n, b(n)) : x(t, n)
        }

        function w(e) {
            e._onerror && e._onerror(e._result), k(e)
        }

        function x(e, t) {
            e._state === ne && (e._result = t, e._state = ae, 0 !== e._subscribers.length && q(k, e))
        }

        function S(e, t) {
            e._state === ne && (e._state = ie, e._result = t, q(w, e))
        }

        function A(e, t, n, a) {
            var i = e._subscribers,
                r = i.length;
            e._onerror = null, i[r] = t, i[r + ae] = n, i[r + ie] = a, 0 === r && e._state && q(k, e)
        }

        function k(e) {
            var t = e._subscribers,
                n = e._state;
            if(0 !== t.length) {
                for(var a = void 0, i = void 0, r = e._result, o = 0; o < t.length; o += 3) a = t[o], i = t[o + n], a ? B(n, a, i, r) : i(r);
                e._subscribers.length = 0
            }
        }

        function M() {
            this.error = null
        }

        function E(e, t) {
            try {
                return e(t)
            } catch(e) {
                return oe.error = e, oe
            }
        }

        function B(e, n, a, i) {
            var r = t(a),
                o = void 0,
                s = void 0,
                l = void 0,
                c = void 0;
            if(r) {
                if(o = E(a, i), o === oe ? (c = !0, s = o.error, o = null) : l = !0, n === o) return void S(n, m())
            } else o = i, l = !0;
            n._state !== ne || (r && l ? T(n, o) : c ? S(n, s) : e === ae ? x(n, o) : e === ie && S(n, o))
        }

        function D(e, t) {
            try {
                t(function(t) {
                    T(e, t)
                }, function(t) {
                    S(e, t)
                })
            } catch(t) {
                S(e, t)
            }
        }

        function N() {
            return se++
        }

        function P(e) {
            e[te] = se++, e._state = void 0, e._result = void 0, e._subscribers = []
        }

        function L(e, t) {
            this._instanceConstructor = e, this.promise = new e(h), this.promise[te] || P(this.promise), H(t) ? (this._input = t, this.length = t.length, this._remaining = t.length, this._result = new Array(this.length), 0 === this.length ? x(this.promise, this._result) : (this.length = this.length || 0, this._enumerate(), 0 === this._remaining && x(this.promise, this._result))) : S(this.promise, R())
        }

        function R() {
            return new Error("Array Methods must be provided an Array")
        }

        function _(e) {
            return new L(this, e).promise
        }

        function I(e) {
            var t = this;
            return new t(H(e) ? function(n, a) {
                for(var i = e.length, r = 0; r < i; r++) t.resolve(e[r]).then(n, a)
            } : function(e, t) {
                return t(new TypeError("You must pass an array to race."))
            })
        }

        function F(e) {
            var t = this,
                n = new t(h);
            return S(n, e), n
        }

        function G() {
            throw new TypeError("You must pass a resolver function as the first argument to the promise constructor")
        }

        function O() {
            throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.")
        }

        function j(e) {
            this[te] = N(), this._result = this._state = void 0, this._subscribers = [], h !== e && ("function" != typeof e && G(), this instanceof j ? D(this, e) : O())
        }

        function z() {
            var e = void 0;
            if("undefined" != typeof global) e = global;
            else if("undefined" != typeof self) e = self;
            else try {
                e = Function("return this")()
            } catch(e) {
                throw new Error("polyfill failed because global object is unavailable in this environment")
            }
            var t = e.Promise;
            if(t) {
                var n = null;
                try {
                    n = Object.prototype.toString.call(t.resolve())
                } catch(e) {}
                if("[object Promise]" === n && !t.cast) return
            }
            e.Promise = j
        }
        var $ = void 0;
        $ = Array.isArray ? Array.isArray : function(e) {
            return "[object Array]" === Object.prototype.toString.call(e)
        };
        var H = $,
            U = 0,
            V = void 0,
            W = void 0,
            q = function(e, t) {
                X[U] = e, X[U + 1] = t, U += 2, 2 === U && (W ? W(c) : ee())
            },
            K = "undefined" != typeof window ? window : void 0,
            J = K || {},
            Y = J.MutationObserver || J.WebKitMutationObserver,
            Z = "undefined" == typeof self && "undefined" != typeof process && "[object process]" === {}.toString.call(process),
            Q = "undefined" != typeof Uint8ClampedArray && "undefined" != typeof importScripts && "undefined" != typeof MessageChannel,
            X = new Array(1e3),
            ee = void 0;
        ee = Z ? i() : Y ? o() : Q ? s() : void 0 === K && "function" == typeof require ? u() : l();
        var te = Math.random().toString(36).substring(16),
            ne = void 0,
            ae = 1,
            ie = 2,
            re = new M,
            oe = new M,
            se = 0;
        return L.prototype._enumerate = function() {
            for(var e = this.length, t = this._input, n = 0; this._state === ne && n < e; n++) this._eachEntry(t[n], n)
        }, L.prototype._eachEntry = function(e, t) {
            var n = this._instanceConstructor,
                a = n.resolve;
            if(a === f) {
                var i = b(e);
                if(i === d && e._state !== ne) this._settledAt(e._state, t, e._result);
                else if("function" != typeof i) this._remaining--, this._result[t] = e;
                else if(n === j) {
                    var r = new n(h);
                    C(r, e, i), this._willSettleAt(r, t)
                } else this._willSettleAt(new n(function(t) {
                    return t(e)
                }), t)
            } else this._willSettleAt(a(e), t)
        }, L.prototype._settledAt = function(e, t, n) {
            var a = this.promise;
            a._state === ne && (this._remaining--, e === ie ? S(a, n) : this._result[t] = n), 0 === this._remaining && x(a, this._result)
        }, L.prototype._willSettleAt = function(e, t) {
            var n = this;
            A(e, void 0, function(e) {
                return n._settledAt(ae, t, e)
            }, function(e) {
                return n._settledAt(ie, t, e)
            })
        }, j.all = _, j.race = I, j.resolve = f, j.reject = F, j._setScheduler = n, j._setAsap = a, j._asap = q, j.prototype = {
            constructor: j,
            then: d,
            catch: function(e) {
                return this.then(null, e)
            }
        }, j.polyfill = z, j.Promise = j, j
    }), function() {
        function e(t) {
            if(!(this instanceof e)) return null == t ? new e : new e(t);
            if("function" == typeof t) return this.random = t, this;
            arguments.length && (this.seed = 0);
            for(var n = 0; n < arguments.length; n++) {
                var a = 0;
                if("[object String]" === Object.prototype.toString.call(arguments[n]))
                    for(var i = 0; i < arguments[n].length; i++) {
                        for(var r = 0, o = 0; o < arguments[n].length; o++) r = arguments[n].charCodeAt(o) + (r << 6) + (r << 16) - r;
                        a += r
                    } else a = arguments[n];
                this.seed += (arguments.length - n) * a
            }
            return this.mt = this.mersenne_twister(this.seed), this.bimd5 = this.blueimp_md5(), this.random = function() {
                return this.mt.random(this.seed)
            }, this
        }

        function t(e, t) {
            if(e || (e = {}), t)
                for(var n in t) "undefined" == typeof e[n] && (e[n] = t[n]);
            return e
        }

        function n(e, t) {
            if(e) throw new RangeError(t)
        }

        function a(e) {
            return function() {
                return this.natural(e)
            }
        }

        function i(e, t) {
            for(var n, a = g(e), i = 0, r = a.length; i < r; i++) n = a[i], t[n] = e[n] || t[n]
        }

        function r(e, t) {
            for(var n = 0, a = e.length; n < a; n++) t[n] = e[n]
        }

        function o(e, t) {
            var n = Array.isArray(e),
                a = t || (n ? new Array(e.length) : {});
            return n ? r(e, a) : i(e, a), a
        }
        var s = 9007199254740992,
            l = -s,
            c = "0123456789",
            u = "abcdefghijklmnopqrstuvwxyz",
            d = u.toUpperCase(),
            f = c + "abcdef",
            h = Array.prototype.slice;
        e.prototype.VERSION = "1.0.4";
        var p = function() {
            throw new Error("No Base64 encoder available.")
        };
        ! function() {
            "function" == typeof btoa ? p = btoa : "function" == typeof Buffer && (p = function(e) {
                return new Buffer(e).toString("base64")
            })
        }(), e.prototype.bool = function(e) {
            return e = t(e, {
                likelihood: 50
            }), n(e.likelihood < 0 || e.likelihood > 100, "Chance: Likelihood accepts values from 0 to 100."), 100 * this.random() < e.likelihood
        }, e.prototype.character = function(e) {
            e = t(e), n(e.alpha && e.symbols, "Chance: Cannot specify both alpha and symbols.");
            var a, i, r = "!@#$%^&*()[]";
            return a = "lower" === e.casing ? u : "upper" === e.casing ? d : u + d, i = e.pool ? e.pool : e.alpha ? a : e.symbols ? r : a + c + r, i.charAt(this.natural({
                max: i.length - 1
            }))
        }, e.prototype.floating = function(e) {
            e = t(e, {
                fixed: 4
            }), n(e.fixed && e.precision, "Chance: Cannot specify both fixed and precision.");
            var a, i = Math.pow(10, e.fixed),
                r = s / i,
                o = -r;
            n(e.min && e.fixed && e.min < o, "Chance: Min specified is out of range with fixed. Min should be, at least, " + o), n(e.max && e.fixed && e.max > r, "Chance: Max specified is out of range with fixed. Max should be, at most, " + r), e = t(e, {
                min: o,
                max: r
            }), a = this.integer({
                min: e.min * i,
                max: e.max * i
            });
            var l = (a / i).toFixed(e.fixed);
            return parseFloat(l)
        }, e.prototype.integer = function(e) {
            return e = t(e, {
                min: l,
                max: s
            }), n(e.min > e.max, "Chance: Min cannot be greater than Max."), Math.floor(this.random() * (e.max - e.min + 1) + e.min)
        }, e.prototype.natural = function(e) {
            return e = t(e, {
                min: 0,
                max: s
            }), n(e.min < 0, "Chance: Min cannot be less than zero."), this.integer(e)
        }, e.prototype.string = function(e) {
            e = t(e, {
                length: this.natural({
                    min: 5,
                    max: 20
                })
            }), n(e.length < 0, "Chance: Length cannot be less than zero.");
            var a = e.length,
                i = this.n(this.character, a, e);
            return i.join("");
        }, e.prototype.capitalize = function(e) {
            return e.charAt(0).toUpperCase() + e.substr(1)
        }, e.prototype.mixin = function(t) {
            for(var n in t) e.prototype[n] = t[n];
            return this
        }, e.prototype.unique = function(e, t, a) {
            n("function" != typeof e, "Chance: The first argument must be a function.");
            var i = function(e, t) {
                return e.indexOf(t) !== -1
            };
            a && (i = a.comparator || i);
            for(var r, o = [], s = 0, l = 50 * t, c = h.call(arguments, 2); o.length < t;) {
                var u = JSON.parse(JSON.stringify(c));
                if(r = e.apply(this, u), i(o, r) || (o.push(r), s = 0), ++s > l) throw new RangeError("Chance: num is likely too large for sample set")
            }
            return o
        }, e.prototype.n = function(e, t) {
            n("function" != typeof e, "Chance: The first argument must be a function."), "undefined" == typeof t && (t = 1);
            var a = t,
                i = [],
                r = h.call(arguments, 2);
            for(a = Math.max(0, a), null; a--; null) i.push(e.apply(this, r));
            return i
        }, e.prototype.pad = function(e, t, n) {
            return n = n || "0", e += "", e.length >= t ? e : new Array(t - e.length + 1).join(n) + e
        }, e.prototype.pick = function(e, t) {
            if(0 === e.length) throw new RangeError("Chance: Cannot pick() from an empty array");
            return t && 1 !== t ? this.shuffle(e).slice(0, t) : e[this.natural({
                max: e.length - 1
            })]
        }, e.prototype.pickone = function(e) {
            if(0 === e.length) throw new RangeError("Chance: Cannot pickone() from an empty array");
            return e[this.natural({
                max: e.length - 1
            })]
        }, e.prototype.pickset = function(e, t) {
            if(0 === t) return [];
            if(0 === e.length) throw new RangeError("Chance: Cannot pickset() from an empty array");
            if(t < 0) throw new RangeError("Chance: count must be positive number");
            return t && 1 !== t ? this.shuffle(e).slice(0, t) : [this.pickone(e)]
        }, e.prototype.shuffle = function(e) {
            for(var t = e.slice(0), n = [], a = 0, i = Number(t.length), r = 0; r < i; r++) a = this.natural({
                max: t.length - 1
            }), n[r] = t[a], t.splice(a, 1);
            return n
        }, e.prototype.weighted = function(e, t, n) {
            if(e.length !== t.length) throw new RangeError("Chance: length of array and weights must match");
            for(var a, i = 0, r = 0; r < t.length; ++r) a = t[r], a > 0 && (i += a);
            if(0 === i) throw new RangeError("Chance: no valid entries in array weights");
            var o, s = this.random() * i,
                l = 0,
                c = -1;
            for(r = 0; r < t.length; ++r) {
                if(a = t[r], l += a, a > 0) {
                    if(s <= l) {
                        o = r;
                        break
                    }
                    c = r
                }
                r === t.length - 1 && (o = c)
            }
            var u = e[o];
            return n = "undefined" != typeof n && n, n && (e.splice(o, 1), t.splice(o, 1)), u
        }, e.prototype.paragraph = function(e) {
            e = t(e);
            var n = e.sentences || this.natural({
                    min: 3,
                    max: 7
                }),
                a = this.n(this.sentence, n);
            return a.join(" ")
        }, e.prototype.sentence = function(e) {
            e = t(e);
            var n, a = e.words || this.natural({
                    min: 12,
                    max: 18
                }),
                i = e.punctuation,
                r = this.n(this.word, a);
            return n = r.join(" "), n = this.capitalize(n), i === !1 || /^[\.\?;!:]$/.test(i) || (i = "."), i && (n += i), n
        }, e.prototype.syllable = function(e) {
            e = t(e);
            for(var n, a = e.length || this.natural({
                    min: 2,
                    max: 3
                }), i = "bcdfghjklmnprstvwz", r = "aeiou", o = i + r, s = "", l = 0; l < a; l++) n = 0 === l ? this.character({
                pool: o
            }) : i.indexOf(n) === -1 ? this.character({
                pool: i
            }) : this.character({
                pool: r
            }), s += n;
            return e.capitalize && (s = this.capitalize(s)), s
        }, e.prototype.word = function(e) {
            e = t(e), n(e.syllables && e.length, "Chance: Cannot specify both syllables AND length.");
            var a = e.syllables || this.natural({
                    min: 1,
                    max: 3
                }),
                i = "";
            if(e.length) {
                do i += this.syllable(); while (i.length < e.length);
                i = i.substring(0, e.length)
            } else
                for(var r = 0; r < a; r++) i += this.syllable();
            return e.capitalize && (i = this.capitalize(i)), i
        }, e.prototype.age = function(e) {
            e = t(e);
            var n;
            switch(e.type) {
                case "child":
                    n = {
                        min: 0,
                        max: 12
                    };
                    break;
                case "teen":
                    n = {
                        min: 13,
                        max: 19
                    };
                    break;
                case "adult":
                    n = {
                        min: 18,
                        max: 65
                    };
                    break;
                case "senior":
                    n = {
                        min: 65,
                        max: 100
                    };
                    break;
                case "all":
                    n = {
                        min: 0,
                        max: 100
                    };
                    break;
                default:
                    n = {
                        min: 18,
                        max: 65
                    }
            }
            return this.natural(n)
        }, e.prototype.birthday = function(e) {
            var n = this.age(e),
                a = (new Date).getFullYear();
            if(e && e.type) {
                var i = new Date,
                    r = new Date;
                i.setFullYear(a - n - 1), r.setFullYear(a - n), e = t(e, {
                    min: i,
                    max: r
                })
            } else e = t(e, {
                year: a - n
            });
            return this.date(e)
        }, e.prototype.cpf = function(e) {
            e = t(e, {
                formatted: !0
            });
            var n = this.n(this.natural, 9, {
                    max: 9
                }),
                a = 2 * n[8] + 3 * n[7] + 4 * n[6] + 5 * n[5] + 6 * n[4] + 7 * n[3] + 8 * n[2] + 9 * n[1] + 10 * n[0];
            a = 11 - a % 11, a >= 10 && (a = 0);
            var i = 2 * a + 3 * n[8] + 4 * n[7] + 5 * n[6] + 6 * n[5] + 7 * n[4] + 8 * n[3] + 9 * n[2] + 10 * n[1] + 11 * n[0];
            i = 11 - i % 11, i >= 10 && (i = 0);
            var r = "" + n[0] + n[1] + n[2] + "." + n[3] + n[4] + n[5] + "." + n[6] + n[7] + n[8] + "-" + a + i;
            return e.formatted ? r : r.replace(/\D/g, "")
        }, e.prototype.cnpj = function(e) {
            e = t(e, {
                formatted: !0
            });
            var n = this.n(this.natural, 12, {
                    max: 12
                }),
                a = 2 * n[11] + 3 * n[10] + 4 * n[9] + 5 * n[8] + 6 * n[7] + 7 * n[6] + 8 * n[5] + 9 * n[4] + 2 * n[3] + 3 * n[2] + 4 * n[1] + 5 * n[0];
            a = 11 - a % 11, a < 2 && (a = 0);
            var i = 2 * a + 3 * n[11] + 4 * n[10] + 5 * n[9] + 6 * n[8] + 7 * n[7] + 8 * n[6] + 9 * n[5] + 2 * n[4] + 3 * n[3] + 4 * n[2] + 5 * n[1] + 6 * n[0];
            i = 11 - i % 11, i < 2 && (i = 0);
            var r = "" + n[0] + n[1] + "." + n[2] + n[3] + n[4] + "." + n[5] + n[6] + n[7] + "/" + n[8] + n[9] + n[10] + n[11] + "-" + a + i;
            return e.formatted ? r : r.replace(/\D/g, "")
        }, e.prototype.first = function(e) {
            return e = t(e, {
                gender: this.gender(),
                nationality: "en"
            }), this.pick(this.get("firstNames")[e.gender.toLowerCase()][e.nationality.toLowerCase()])
        }, e.prototype.gender = function(e) {
            return e = t(e, {
                extraGenders: []
            }), this.pick(["Male", "Female"].concat(e.extraGenders))
        }, e.prototype.last = function(e) {
            return e = t(e, {
                nationality: "en"
            }), this.pick(this.get("lastNames")[e.nationality.toLowerCase()])
        }, e.prototype.israelId = function() {
            for(var e = this.string({
                    pool: "0123456789",
                    length: 8
                }), t = 0, n = 0; n < e.length; n++) {
                var a = e[n] * (n / 2 === parseInt(n / 2) ? 1 : 2);
                a = this.pad(a, 2).toString(), a = parseInt(a[0]) + parseInt(a[1]), t += a
            }
            return e += (10 - parseInt(t.toString().slice(-1))).toString().slice(-1)
        }, e.prototype.mrz = function(e) {
            var n = function(e) {
                    var t = "<ABCDEFGHIJKLMNOPQRSTUVWXYXZ".split(""),
                        n = [7, 3, 1],
                        a = 0;
                    return "string" != typeof e && (e = e.toString()), e.split("").forEach(function(e, i) {
                        var r = t.indexOf(e);
                        e = r !== -1 ? 0 === r ? 0 : r + 9 : parseInt(e, 10), e *= n[i % n.length], a += e
                    }), a % 10
                },
                a = function(e) {
                    var t = function(e) {
                            return new Array(e + 1).join("<")
                        },
                        a = ["P<", e.issuer, e.last.toUpperCase(), "<<", e.first.toUpperCase(), t(39 - (e.last.length + e.first.length + 2)), e.passportNumber, n(e.passportNumber), e.nationality, e.dob, n(e.dob), e.gender, e.expiry, n(e.expiry), t(14), n(t(14))].join("");
                    return a + n(a.substr(44, 10) + a.substr(57, 7) + a.substr(65, 7))
                },
                i = this;
            return e = t(e, {
                first: this.first(),
                last: this.last(),
                passportNumber: this.integer({
                    min: 1e8,
                    max: 999999999
                }),
                dob: function() {
                    var e = i.birthday({
                        type: "adult"
                    });
                    return [e.getFullYear().toString().substr(2), i.pad(e.getMonth() + 1, 2), i.pad(e.getDate(), 2)].join("")
                }(),
                expiry: function() {
                    var e = new Date;
                    return [(e.getFullYear() + 5).toString().substr(2), i.pad(e.getMonth() + 1, 2), i.pad(e.getDate(), 2)].join("")
                }(),
                gender: "Female" === this.gender() ? "F" : "M",
                issuer: "GBR",
                nationality: "GBR"
            }), a(e)
        }, e.prototype.name = function(e) {
            e = t(e);
            var n, a = this.first(e),
                i = this.last(e);
            return n = e.middle ? a + " " + this.first(e) + " " + i : e.middle_initial ? a + " " + this.character({
                alpha: !0,
                casing: "upper"
            }) + ". " + i : a + " " + i, e.prefix && (n = this.prefix(e) + " " + n), e.suffix && (n = n + " " + this.suffix(e)), n
        }, e.prototype.name_prefixes = function(e) {
            e = e || "all", e = e.toLowerCase();
            var t = [{
                name: "Doctor",
                abbreviation: "Dr."
            }];
            return "male" !== e && "all" !== e || t.push({
                name: "Mister",
                abbreviation: "Mr."
            }), "female" !== e && "all" !== e || (t.push({
                name: "Miss",
                abbreviation: "Miss"
            }), t.push({
                name: "Misses",
                abbreviation: "Mrs."
            })), t
        }, e.prototype.prefix = function(e) {
            return this.name_prefix(e)
        }, e.prototype.name_prefix = function(e) {
            return e = t(e, {
                gender: "all"
            }), e.full ? this.pick(this.name_prefixes(e.gender)).name : this.pick(this.name_prefixes(e.gender)).abbreviation
        }, e.prototype.HIDN = function() {
            var e = "0123456789",
                t = "ABCDEFGHIJKLMNOPQRSTUVWXYXZ",
                n = "";
            return n += this.string({
                pool: e,
                length: 6
            }), n += this.string({
                pool: t,
                length: 2
            })
        }, e.prototype.ssn = function(e) {
            e = t(e, {
                ssnFour: !1,
                dashes: !0
            });
            var n, a = "1234567890",
                i = e.dashes ? "-" : "";
            return n = e.ssnFour ? this.string({
                pool: a,
                length: 4
            }) : this.string({
                pool: a,
                length: 3
            }) + i + this.string({
                pool: a,
                length: 2
            }) + i + this.string({
                pool: a,
                length: 4
            })
        }, e.prototype.name_suffixes = function() {
            var e = [{
                name: "Doctor of Osteopathic Medicine",
                abbreviation: "D.O."
            }, {
                name: "Doctor of Philosophy",
                abbreviation: "Ph.D."
            }, {
                name: "Esquire",
                abbreviation: "Esq."
            }, {
                name: "Junior",
                abbreviation: "Jr."
            }, {
                name: "Juris Doctor",
                abbreviation: "J.D."
            }, {
                name: "Master of Arts",
                abbreviation: "M.A."
            }, {
                name: "Master of Business Administration",
                abbreviation: "M.B.A."
            }, {
                name: "Master of Science",
                abbreviation: "M.S."
            }, {
                name: "Medical Doctor",
                abbreviation: "M.D."
            }, {
                name: "Senior",
                abbreviation: "Sr."
            }, {
                name: "The Third",
                abbreviation: "III"
            }, {
                name: "The Fourth",
                abbreviation: "IV"
            }, {
                name: "Bachelor of Engineering",
                abbreviation: "B.E"
            }, {
                name: "Bachelor of Technology",
                abbreviation: "B.TECH"
            }];
            return e
        }, e.prototype.suffix = function(e) {
            return this.name_suffix(e)
        }, e.prototype.name_suffix = function(e) {
            return e = t(e), e.full ? this.pick(this.name_suffixes()).name : this.pick(this.name_suffixes()).abbreviation
        }, e.prototype.nationalities = function() {
            return this.get("nationalities")
        }, e.prototype.nationality = function() {
            var e = this.pick(this.nationalities());
            return e.name
        }, e.prototype.android_id = function() {
            return "APA91" + this.string({
                pool: "0123456789abcefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_",
                length: 178
            })
        }, e.prototype.apple_token = function() {
            return this.string({
                pool: "abcdef1234567890",
                length: 64
            })
        }, e.prototype.wp8_anid2 = function() {
            return p(this.hash({
                length: 32
            }))
        }, e.prototype.wp7_anid = function() {
            return "A=" + this.guid().replace(/-/g, "").toUpperCase() + "&E=" + this.hash({
                length: 3
            }) + "&W=" + this.integer({
                min: 0,
                max: 9
            })
        }, e.prototype.bb_pin = function() {
            return this.hash({
                length: 8
            })
        }, e.prototype.avatar = function(e) {
            var n = null,
                a = "//www.gravatar.com/avatar/",
                i = {
                    http: "http",
                    https: "https"
                },
                r = {
                    bmp: "bmp",
                    gif: "gif",
                    jpg: "jpg",
                    png: "png"
                },
                o = {
                    404: "404",
                    mm: "mm",
                    identicon: "identicon",
                    monsterid: "monsterid",
                    wavatar: "wavatar",
                    retro: "retro",
                    blank: "blank"
                },
                s = {
                    g: "g",
                    pg: "pg",
                    r: "r",
                    x: "x"
                },
                l = {
                    protocol: null,
                    email: null,
                    fileExtension: null,
                    size: null,
                    fallback: null,
                    rating: null
                };
            if(e)
                if("string" == typeof e) l.email = e, e = {};
                else {
                    if("object" != typeof e) return null;
                    if("Array" === e.constructor) return null
                }
            else l.email = this.email(), e = {};
            return l = t(e, l), l.email || (l.email = this.email()), l.protocol = i[l.protocol] ? l.protocol + ":" : "", l.size = parseInt(l.size, 0) ? l.size : "", l.rating = s[l.rating] ? l.rating : "", l.fallback = o[l.fallback] ? l.fallback : "", l.fileExtension = r[l.fileExtension] ? l.fileExtension : "", n = l.protocol + a + this.bimd5.md5(l.email) + (l.fileExtension ? "." + l.fileExtension : "") + (l.size || l.rating || l.fallback ? "?" : "") + (l.size ? "&s=" + l.size.toString() : "") + (l.rating ? "&r=" + l.rating : "") + (l.fallback ? "&d=" + l.fallback : "")
        }, e.prototype.color = function(e) {
            function n(e, t) {
                return [e, e, e].join(t || "")
            }

            function a(e) {
                var t = e ? "rgba" : "rgb",
                    a = e ? "," + this.floating({
                        min: 0,
                        max: 1
                    }) : "",
                    i = o ? n(this.natural({
                        max: 255
                    }), ",") : this.natural({
                        max: 255
                    }) + "," + this.natural({
                        max: 255
                    }) + "," + this.natural({
                        max: 255
                    });
                return t + "(" + i + a + ")"
            }

            function i(e, t, a) {
                var i = a ? "#" : "",
                    r = o ? n(this.hash({
                        length: e
                    })) : this.hash({
                        length: t
                    });
                return i + r
            }
            e = t(e, {
                format: this.pick(["hex", "shorthex", "rgb", "rgba", "0x", "name"]),
                grayscale: !1,
                casing: "lower"
            });
            var r, o = e.grayscale;
            if("hex" === e.format) r = i.call(this, 2, 6, !0);
            else if("shorthex" === e.format) r = i.call(this, 1, 3, !0);
            else if("rgb" === e.format) r = a.call(this, !1);
            else if("rgba" === e.format) r = a.call(this, !0);
            else {
                if("0x" !== e.format) {
                    if("name" === e.format) return this.pick(this.get("colorNames"));
                    throw new RangeError('Invalid format provided. Please provide one of "hex", "shorthex", "rgb", "rgba", "0x" or "name".')
                }
                r = "0x" + i.call(this, 2, 6)
            }
            return "upper" === e.casing && (r = r.toUpperCase()), r
        }, e.prototype.domain = function(e) {
            return e = t(e), this.word() + "." + (e.tld || this.tld())
        }, e.prototype.email = function(e) {
            return e = t(e), this.word({
                length: e.length
            }) + "@" + (e.domain || this.domain())
        }, e.prototype.fbid = function() {
            return parseInt("10000" + this.natural({
                max: 1e11
            }), 10)
        }, e.prototype.google_analytics = function() {
            var e = this.pad(this.natural({
                    max: 999999
                }), 6),
                t = this.pad(this.natural({
                    max: 99
                }), 2);
            return "UA-" + e + "-" + t
        }, e.prototype.hashtag = function() {
            return "#" + this.word()
        }, e.prototype.ip = function() {
            return this.natural({
                min: 1,
                max: 254
            }) + "." + this.natural({
                max: 255
            }) + "." + this.natural({
                max: 255
            }) + "." + this.natural({
                min: 1,
                max: 254
            })
        }, e.prototype.ipv6 = function() {
            var e = this.n(this.hash, 8, {
                length: 4
            });
            return e.join(":")
        }, e.prototype.klout = function() {
            return this.natural({
                min: 1,
                max: 99
            })
        }, e.prototype.semver = function(e) {
            e = t(e, {
                include_prerelease: !0
            });
            var n = this.pickone(["^", "~", "<", ">", "<=", ">=", "="]);
            e.range && (n = e.range);
            var a = "";
            return e.include_prerelease && (a = this.weighted(["", "-dev", "-beta", "-alpha"], [50, 10, 5, 1])), n + this.rpg("3d10").join(".") + a
        }, e.prototype.tlds = function() {
            return ["com", "org", "edu", "gov", "co.uk", "net", "io", "ac", "ad", "ae", "af", "ag", "ai", "al", "am", "an", "ao", "aq", "ar", "as", "at", "au", "aw", "ax", "az", "ba", "bb", "bd", "be", "bf", "bg", "bh", "bi", "bj", "bm", "bn", "bo", "bq", "br", "bs", "bt", "bv", "bw", "by", "bz", "ca", "cc", "cd", "cf", "cg", "ch", "ci", "ck", "cl", "cm", "cn", "co", "cr", "cu", "cv", "cw", "cx", "cy", "cz", "de", "dj", "dk", "dm", "do", "dz", "ec", "ee", "eg", "eh", "er", "es", "et", "eu", "fi", "fj", "fk", "fm", "fo", "fr", "ga", "gb", "gd", "ge", "gf", "gg", "gh", "gi", "gl", "gm", "gn", "gp", "gq", "gr", "gs", "gt", "gu", "gw", "gy", "hk", "hm", "hn", "hr", "ht", "hu", "id", "ie", "il", "im", "in", "io", "iq", "ir", "is", "it", "je", "jm", "jo", "jp", "ke", "kg", "kh", "ki", "km", "kn", "kp", "kr", "kw", "ky", "kz", "la", "lb", "lc", "li", "lk", "lr", "ls", "lt", "lu", "lv", "ly", "ma", "mc", "md", "me", "mg", "mh", "mk", "ml", "mm", "mn", "mo", "mp", "mq", "mr", "ms", "mt", "mu", "mv", "mw", "mx", "my", "mz", "na", "nc", "ne", "nf", "ng", "ni", "nl", "no", "np", "nr", "nu", "nz", "om", "pa", "pe", "pf", "pg", "ph", "pk", "pl", "pm", "pn", "pr", "ps", "pt", "pw", "py", "qa", "re", "ro", "rs", "ru", "rw", "sa", "sb", "sc", "sd", "se", "sg", "sh", "si", "sj", "sk", "sl", "sm", "sn", "so", "sr", "ss", "st", "su", "sv", "sx", "sy", "sz", "tc", "td", "tf", "tg", "th", "tj", "tk", "tl", "tm", "tn", "to", "tp", "tr", "tt", "tv", "tw", "tz", "ua", "ug", "uk", "us", "uy", "uz", "va", "vc", "ve", "vg", "vi", "vn", "vu", "wf", "ws", "ye", "yt", "za", "zm", "zw"]
        }, e.prototype.tld = function() {
            return this.pick(this.tlds())
        }, e.prototype.twitter = function() {
            return "@" + this.word()
        }, e.prototype.url = function(e) {
            e = t(e, {
                protocol: "http",
                domain: this.domain(e),
                domain_prefix: "",
                path: this.word(),
                extensions: []
            });
            var n = e.extensions.length > 0 ? "." + this.pick(e.extensions) : "",
                a = e.domain_prefix ? e.domain_prefix + "." + e.domain : e.domain;
            return e.protocol + "://" + a + "/" + e.path + n
        }, e.prototype.port = function() {
            return this.integer({
                min: 0,
                max: 65535
            })
        }, e.prototype.address = function(e) {
            return e = t(e), this.natural({
                min: 5,
                max: 2e3
            }) + " " + this.street(e)
        }, e.prototype.altitude = function(e) {
            return e = t(e, {
                fixed: 5,
                min: 0,
                max: 8848
            }), this.floating({
                min: e.min,
                max: e.max,
                fixed: e.fixed
            })
        }, e.prototype.areacode = function(e) {
            e = t(e, {
                parens: !0
            });
            var n = this.natural({
                min: 2,
                max: 9
            }).toString() + this.natural({
                min: 0,
                max: 8
            }).toString() + this.natural({
                min: 0,
                max: 9
            }).toString();
            return e.parens ? "(" + n + ")" : n
        }, e.prototype.city = function() {
            return this.capitalize(this.word({
                syllables: 3
            }))
        }, e.prototype.coordinates = function(e) {
            return this.latitude(e) + ", " + this.longitude(e)
        }, e.prototype.countries = function() {
            return this.get("countries")
        }, e.prototype.country = function(e) {
            e = t(e);
            var n = this.pick(this.countries());
            return e.full ? n.name : n.abbreviation
        }, e.prototype.depth = function(e) {
            return e = t(e, {
                fixed: 5,
                min: -10994,
                max: 0
            }), this.floating({
                min: e.min,
                max: e.max,
                fixed: e.fixed
            })
        }, e.prototype.geohash = function(e) {
            return e = t(e, {
                length: 7
            }), this.string({
                length: e.length,
                pool: "0123456789bcdefghjkmnpqrstuvwxyz"
            })
        }, e.prototype.geojson = function(e) {
            return this.latitude(e) + ", " + this.longitude(e) + ", " + this.altitude(e)
        }, e.prototype.latitude = function(e) {
            return e = t(e, {
                fixed: 5,
                min: -90,
                max: 90
            }), this.floating({
                min: e.min,
                max: e.max,
                fixed: e.fixed
            })
        }, e.prototype.longitude = function(e) {
            return e = t(e, {
                fixed: 5,
                min: -180,
                max: 180
            }), this.floating({
                min: e.min,
                max: e.max,
                fixed: e.fixed
            })
        }, e.prototype.phone = function(e) {
            var n, a = this,
                i = function(e) {
                    var t = [];
                    return e.sections.forEach(function(e) {
                        t.push(a.string({
                            pool: "0123456789",
                            length: e
                        }))
                    }), e.area + t.join(" ")
                };
            e = t(e, {
                formatted: !0,
                country: "us",
                mobile: !1
            }), e.formatted || (e.parens = !1);
            var r;
            switch(e.country) {
                case "fr":
                    e.mobile ? (n = this.pick(["06", "07"]) + a.string({
                        pool: "0123456789",
                        length: 8
                    }), r = e.formatted ? n.match(/../g).join(" ") : n) : (n = this.pick(["01" + this.pick(["30", "34", "39", "40", "41", "42", "43", "44", "45", "46", "47", "48", "49", "53", "55", "56", "58", "60", "64", "69", "70", "72", "73", "74", "75", "76", "77", "78", "79", "80", "81", "82", "83"]) + a.string({
                        pool: "0123456789",
                        length: 6
                    }), "02" + this.pick(["14", "18", "22", "23", "28", "29", "30", "31", "32", "33", "34", "35", "36", "37", "38", "40", "41", "43", "44", "45", "46", "47", "48", "49", "50", "51", "52", "53", "54", "56", "57", "61", "62", "69", "72", "76", "77", "78", "85", "90", "96", "97", "98", "99"]) + a.string({
                        pool: "0123456789",
                        length: 6
                    }), "03" + this.pick(["10", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "39", "44", "45", "51", "52", "54", "55", "57", "58", "59", "60", "61", "62", "63", "64", "65", "66", "67", "68", "69", "70", "71", "72", "73", "80", "81", "82", "83", "84", "85", "86", "87", "88", "89", "90"]) + a.string({
                        pool: "0123456789",
                        length: 6
                    }), "04" + this.pick(["11", "13", "15", "20", "22", "26", "27", "30", "32", "34", "37", "42", "43", "44", "50", "56", "57", "63", "66", "67", "68", "69", "70", "71", "72", "73", "74", "75", "76", "77", "78", "79", "80", "81", "82", "83", "84", "85", "86", "88", "89", "90", "91", "92", "93", "94", "95", "97", "98"]) + a.string({
                        pool: "0123456789",
                        length: 6
                    }), "05" + this.pick(["08", "16", "17", "19", "24", "31", "32", "33", "34", "35", "40", "45", "46", "47", "49", "53", "55", "56", "57", "58", "59", "61", "62", "63", "64", "65", "67", "79", "81", "82", "86", "87", "90", "94"]) + a.string({
                        pool: "0123456789",
                        length: 6
                    }), "09" + a.string({
                        pool: "0123456789",
                        length: 8
                    })]), r = e.formatted ? n.match(/../g).join(" ") : n);
                    break;
                case "uk":
                    e.mobile ? (n = this.pick([{
                        area: "07" + this.pick(["4", "5", "7", "8", "9"]),
                        sections: [2, 6]
                    }, {
                        area: "07624 ",
                        sections: [6]
                    }]), r = e.formatted ? i(n) : i(n).replace(" ", "")) : (n = this.pick([{
                        area: "01" + this.character({
                            pool: "234569"
                        }) + "1 ",
                        sections: [3, 4]
                    }, {
                        area: "020 " + this.character({
                            pool: "378"
                        }),
                        sections: [3, 4]
                    }, {
                        area: "023 " + this.character({
                            pool: "89"
                        }),
                        sections: [3, 4]
                    }, {
                        area: "024 7",
                        sections: [3, 4]
                    }, {
                        area: "028 " + this.pick(["25", "28", "37", "71", "82", "90", "92", "95"]),
                        sections: [2, 4]
                    }, {
                        area: "012" + this.pick(["04", "08", "54", "76", "97", "98"]) + " ",
                        sections: [6]
                    }, {
                        area: "013" + this.pick(["63", "64", "84", "86"]) + " ",
                        sections: [6]
                    }, {
                        area: "014" + this.pick(["04", "20", "60", "61", "80", "88"]) + " ",
                        sections: [6]
                    }, {
                        area: "015" + this.pick(["24", "27", "62", "66"]) + " ",
                        sections: [6]
                    }, {
                        area: "016" + this.pick(["06", "29", "35", "47", "59", "95"]) + " ",
                        sections: [6]
                    }, {
                        area: "017" + this.pick(["26", "44", "50", "68"]) + " ",
                        sections: [6]
                    }, {
                        area: "018" + this.pick(["27", "37", "84", "97"]) + " ",
                        sections: [6]
                    }, {
                        area: "019" + this.pick(["00", "05", "35", "46", "49", "63", "95"]) + " ",
                        sections: [6]
                    }]), r = e.formatted ? i(n) : i(n).replace(" ", "", "g"));
                    break;
                case "us":
                    var o = this.areacode(e).toString(),
                        s = this.natural({
                            min: 2,
                            max: 9
                        }).toString() + this.natural({
                            min: 0,
                            max: 9
                        }).toString() + this.natural({
                            min: 0,
                            max: 9
                        }).toString(),
                        l = this.natural({
                            min: 1e3,
                            max: 9999
                        }).toString();
                    r = e.formatted ? o + " " + s + "-" + l : o + s + l
            }
            return r
        }, e.prototype.postal = function() {
            var e = this.character({
                    pool: "XVTSRPNKLMHJGECBA"
                }),
                t = e + this.natural({
                    max: 9
                }) + this.character({
                    alpha: !0,
                    casing: "upper"
                }),
                n = this.natural({
                    max: 9
                }) + this.character({
                    alpha: !0,
                    casing: "upper"
                }) + this.natural({
                    max: 9
                });
            return t + " " + n
        }, e.prototype.counties = function(e) {
            return e = t(e, {
                country: "uk"
            }), this.get("counties")[e.country.toLowerCase()]
        }, e.prototype.county = function(e) {
            return this.pick(this.counties(e)).name
        }, e.prototype.provinces = function(e) {
            return e = t(e, {
                country: "ca"
            }), this.get("provinces")[e.country.toLowerCase()]
        }, e.prototype.province = function(e) {
            return e && e.full ? this.pick(this.provinces(e)).name : this.pick(this.provinces(e)).abbreviation
        }, e.prototype.state = function(e) {
            return e && e.full ? this.pick(this.states(e)).name : this.pick(this.states(e)).abbreviation
        }, e.prototype.states = function(e) {
            e = t(e, {
                country: "us",
                us_states_and_dc: !0
            });
            var n;
            switch(e.country.toLowerCase()) {
                case "us":
                    var a = this.get("us_states_and_dc"),
                        i = this.get("territories"),
                        r = this.get("armed_forces");
                    n = [], e.us_states_and_dc && (n = n.concat(a)), e.territories && (n = n.concat(i)), e.armed_forces && (n = n.concat(r));
                    break;
                case "it":
                    n = this.get("country_regions")[e.country.toLowerCase()];
                    break;
                case "uk":
                    n = this.get("counties")[e.country.toLowerCase()]
            }
            return n
        }, e.prototype.street = function(e) {
            e = t(e, {
                country: "us",
                syllables: 2
            });
            var n;
            switch(e.country.toLowerCase()) {
                case "us":
                    n = this.word({
                        syllables: e.syllables
                    }), n = this.capitalize(n), n += " ", n += e.short_suffix ? this.street_suffix(e).abbreviation : this.street_suffix(e).name;
                    break;
                case "it":
                    n = this.word({
                        syllables: e.syllables
                    }), n = this.capitalize(n), n = (e.short_suffix ? this.street_suffix(e).abbreviation : this.street_suffix(e).name) + " " + n
            }
            return n
        }, e.prototype.street_suffix = function(e) {
            return e = t(e, {
                country: "us"
            }), this.pick(this.street_suffixes(e))
        }, e.prototype.street_suffixes = function(e) {
            return e = t(e, {
                country: "us"
            }), this.get("street_suffixes")[e.country.toLowerCase()]
        }, e.prototype.zip = function(e) {
            var t = this.n(this.natural, 5, {
                max: 9
            });
            return e && e.plusfour === !0 && (t.push("-"), t = t.concat(this.n(this.natural, 4, {
                max: 9
            }))), t.join("")
        }, e.prototype.ampm = function() {
            return this.bool() ? "am" : "pm"
        }, e.prototype.date = function(e) {
            var n, a;
            if(e && (e.min || e.max)) {
                e = t(e, {
                    american: !0,
                    string: !1
                });
                var i = "undefined" != typeof e.min ? e.min.getTime() : 1,
                    r = "undefined" != typeof e.max ? e.max.getTime() : 864e13;
                a = new Date(this.integer({
                    min: i,
                    max: r
                }))
            } else {
                var o = this.month({
                        raw: !0
                    }),
                    s = o.days;
                e && e.month && (s = this.get("months")[(e.month % 12 + 12) % 12].days), e = t(e, {
                    year: parseInt(this.year(), 10),
                    month: o.numeric - 1,
                    day: this.natural({
                        min: 1,
                        max: s
                    }),
                    hour: this.hour({
                        twentyfour: !0
                    }),
                    minute: this.minute(),
                    second: this.second(),
                    millisecond: this.millisecond(),
                    american: !0,
                    string: !1
                }), a = new Date(e.year, e.month, e.day, e.hour, e.minute, e.second, e.millisecond)
            }
            return n = e.american ? a.getMonth() + 1 + "/" + a.getDate() + "/" + a.getFullYear() : a.getDate() + "/" + (a.getMonth() + 1) + "/" + a.getFullYear(), e.string ? n : a
        }, e.prototype.hammertime = function(e) {
            return this.date(e).getTime()
        }, e.prototype.hour = function(e) {
            return e = t(e, {
                min: e && e.twentyfour ? 0 : 1,
                max: e && e.twentyfour ? 23 : 12
            }), n(e.min < 0, "Chance: Min cannot be less than 0."), n(e.twentyfour && e.max > 23, "Chance: Max cannot be greater than 23 for twentyfour option."), n(!e.twentyfour && e.max > 12, "Chance: Max cannot be greater than 12."), n(e.min > e.max, "Chance: Min cannot be greater than Max."), this.natural({
                min: e.min,
                max: e.max
            })
        }, e.prototype.millisecond = function() {
            return this.natural({
                max: 999
            })
        }, e.prototype.minute = e.prototype.second = function(e) {
            return e = t(e, {
                min: 0,
                max: 59
            }), n(e.min < 0, "Chance: Min cannot be less than 0."), n(e.max > 59, "Chance: Max cannot be greater than 59."), n(e.min > e.max, "Chance: Min cannot be greater than Max."), this.natural({
                min: e.min,
                max: e.max
            })
        }, e.prototype.month = function(e) {
            e = t(e, {
                min: 1,
                max: 12
            }), n(e.min < 1, "Chance: Min cannot be less than 1."), n(e.max > 12, "Chance: Max cannot be greater than 12."), n(e.min > e.max, "Chance: Min cannot be greater than Max.");
            var a = this.pick(this.months().slice(e.min - 1, e.max));
            return e.raw ? a : a.name
        }, e.prototype.months = function() {
            return this.get("months")
        }, e.prototype.second = function() {
            return this.natural({
                max: 59
            })
        }, e.prototype.timestamp = function() {
            return this.natural({
                min: 1,
                max: parseInt((new Date).getTime() / 1e3, 10)
            })
        }, e.prototype.weekday = function(e) {
            e = t(e, {
                weekday_only: !1
            });
            var n = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
            return e.weekday_only || (n.push("Saturday"), n.push("Sunday")), this.pickone(n)
        }, e.prototype.year = function(e) {
            return e = t(e, {
                min: (new Date).getFullYear()
            }), e.max = "undefined" != typeof e.max ? e.max : e.min + 100, this.natural(e).toString()
        }, e.prototype.cc = function(e) {
            e = t(e);
            var n, a, i;
            return n = e.type ? this.cc_type({
                name: e.type,
                raw: !0
            }) : this.cc_type({
                raw: !0
            }), a = n.prefix.split(""), i = n.length - n.prefix.length - 1, a = a.concat(this.n(this.integer, i, {
                min: 0,
                max: 9
            })), a.push(this.luhn_calculate(a.join(""))), a.join("")
        }, e.prototype.cc_types = function() {
            return this.get("cc_types")
        }, e.prototype.cc_type = function(e) {
            e = t(e);
            var n = this.cc_types(),
                a = null;
            if(e.name) {
                for(var i = 0; i < n.length; i++)
                    if(n[i].name === e.name || n[i].short_name === e.name) {
                        a = n[i];
                        break
                    }
                if(null === a) throw new RangeError("Credit card type '" + e.name + "'' is not supported")
            } else a = this.pick(n);
            return e.raw ? a : a.name
        }, e.prototype.currency_types = function() {
            return this.get("currency_types")
        }, e.prototype.currency = function() {
            return this.pick(this.currency_types())
        }, e.prototype.timezones = function() {
            return this.get("timezones")
        }, e.prototype.timezone = function() {
            return this.pick(this.timezones())
        }, e.prototype.currency_pair = function(e) {
            var t = this.unique(this.currency, 2, {
                comparator: function(e, t) {
                    return e.reduce(function(e, n) {
                        return e || n.code === t.code
                    }, !1)
                }
            });
            return e ? t[0].code + "/" + t[1].code : t
        }, e.prototype.dollar = function(e) {
            e = t(e, {
                max: 1e4,
                min: 0
            });
            var n = this.floating({
                    min: e.min,
                    max: e.max,
                    fixed: 2
                }).toString(),
                a = n.split(".")[1];
            return void 0 === a ? n += ".00" : a.length < 2 && (n += "0"), n < 0 ? "-$" + n.replace("-", "") : "$" + n
        }, e.prototype.euro = function(e) {
            return Number(this.dollar(e).replace("$", "")).toLocaleString() + "€"
        }, e.prototype.exp = function(e) {
            e = t(e);
            var n = {};
            return n.year = this.exp_year(), n.year === (new Date).getFullYear().toString() ? n.month = this.exp_month({
                future: !0
            }) : n.month = this.exp_month(), e.raw ? n : n.month + "/" + n.year
        }, e.prototype.exp_month = function(e) {
            e = t(e);
            var n, a, i = (new Date).getMonth() + 1;
            if(e.future && 12 !== i) {
                do n = this.month({
                    raw: !0
                }).numeric, a = parseInt(n, 10); while (a <= i)
            } else n = this.month({
                raw: !0
            }).numeric;
            return n
        }, e.prototype.exp_year = function() {
            var e = (new Date).getMonth() + 1,
                t = (new Date).getFullYear();
            return this.year({
                min: 12 === e ? t + 1 : t,
                max: t + 10
            })
        }, e.prototype.vat = function(e) {
            switch(e = t(e, {
                country: "it"
            }), e.country.toLowerCase()) {
                case "it":
                    return this.it_vat()
            }
        }, e.prototype.it_vat = function() {
            var e = this.natural({
                min: 1,
                max: 18e5
            });
            return e = this.pad(e, 7) + this.pad(this.pick(this.provinces({
                country: "it"
            })).code, 3), e + this.luhn_calculate(e)
        }, e.prototype.cf = function(e) {
            e = e || {};
            var t = e.gender ? e.gender : this.gender(),
                n = e.first ? e.first : this.first({
                    gender: t,
                    nationality: "it"
                }),
                a = e.last ? e.last : this.last({
                    nationality: "it"
                }),
                i = e.birthday ? e.birthday : this.birthday(),
                r = e.city ? e.city : this.pickone(["A", "B", "C", "D", "E", "F", "G", "H", "I", "L", "M", "Z"]) + this.pad(this.natural({
                    max: 999
                }), 3),
                o = [],
                s = function(e, t) {
                    var n, a = [];
                    return e.length < 3 ? a = e.split("").concat("XXX".split("")).splice(0, 3) : (n = e.toUpperCase().split("").map(function(e) {
                        return "BCDFGHJKLMNPRSTVWZ".indexOf(e) !== -1 ? e : void 0
                    }).join(""), n.length > 3 && (n = t ? n.substr(0, 3) : n[0] + n.substr(2, 2)), n.length < 3 && (a = n, n = e.toUpperCase().split("").map(function(e) {
                        return "AEIOU".indexOf(e) !== -1 ? e : void 0
                    }).join("").substr(0, 3 - a.length)), a += n), a
                },
                l = function(e, t, n) {
                    var a = ["A", "B", "C", "D", "E", "H", "L", "M", "P", "R", "S", "T"];
                    return e.getFullYear().toString().substr(2) + a[e.getMonth()] + n.pad(e.getDate() + ("female" === t.toLowerCase() ? 40 : 0), 2)
                },
                c = function(e) {
                    for(var t = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ", n = "ABCDEFGHIJABCDEFGHIJKLMNOPQRSTUVWXYZ", a = "ABCDEFGHIJKLMNOPQRSTUVWXYZ", i = "BAKPLCQDREVOSFTGUHMINJWZYX", r = 0, o = 0; o < 15; o++) r += o % 2 !== 0 ? a.indexOf(n[t.indexOf(e[o])]) : i.indexOf(n[t.indexOf(e[o])]);
                    return a[r % 26]
                };
            return o = o.concat(s(a, !0), s(n), l(i, t, this), r.toUpperCase().split("")).join(""), o += c(o.toUpperCase(), this), o.toUpperCase()
        }, e.prototype.pl_pesel = function() {
            for(var e = this.natural({
                    min: 1,
                    max: 9999999999
                }), t = this.pad(e, 10).split(""), n = 0; n < t.length; n++) t[n] = parseInt(t[n]);
            var a = (1 * t[0] + 3 * t[1] + 7 * t[2] + 9 * t[3] + 1 * t[4] + 3 * t[5] + 7 * t[6] + 9 * t[7] + 1 * t[8] + 3 * t[9]) % 10;
            return 0 !== a && (a = 10 - a), t.join("") + a
        }, e.prototype.pl_nip = function() {
            for(var e = this.natural({
                    min: 1,
                    max: 999999999
                }), t = this.pad(e, 9).split(""), n = 0; n < t.length; n++) t[n] = parseInt(t[n]);
            var a = (6 * t[0] + 5 * t[1] + 7 * t[2] + 2 * t[3] + 3 * t[4] + 4 * t[5] + 5 * t[6] + 6 * t[7] + 7 * t[8]) % 11;
            return 10 === a ? this.pl_nip() : t.join("") + a
        }, e.prototype.pl_regon = function() {
            for(var e = this.natural({
                    min: 1,
                    max: 99999999
                }), t = this.pad(e, 8).split(""), n = 0; n < t.length; n++) t[n] = parseInt(t[n]);
            var a = (8 * t[0] + 9 * t[1] + 2 * t[2] + 3 * t[3] + 4 * t[4] + 5 * t[5] + 6 * t[6] + 7 * t[7]) % 11;
            return 10 === a && (a = 0), t.join("") + a
        }, e.prototype.d4 = a({
            min: 1,
            max: 4
        }), e.prototype.d6 = a({
            min: 1,
            max: 6
        }), e.prototype.d8 = a({
            min: 1,
            max: 8
        }), e.prototype.d10 = a({
            min: 1,
            max: 10
        }), e.prototype.d12 = a({
            min: 1,
            max: 12
        }), e.prototype.d20 = a({
            min: 1,
            max: 20
        }), e.prototype.d30 = a({
            min: 1,
            max: 30
        }), e.prototype.d100 = a({
            min: 1,
            max: 100
        }), e.prototype.rpg = function(e, n) {
            if(n = t(n), e) {
                var a = e.toLowerCase().split("d"),
                    i = [];
                if(2 !== a.length || !parseInt(a[0], 10) || !parseInt(a[1], 10)) throw new Error("Invalid format provided. Please provide #d# where the first # is the number of dice to roll, the second # is the max of each die");
                for(var r = a[0]; r > 0; r--) i[r - 1] = this.natural({
                    min: 1,
                    max: a[1]
                });
                return "undefined" != typeof n.sum && n.sum ? i.reduce(function(e, t) {
                    return e + t
                }) : i
            }
            throw new RangeError("A type of die roll must be included")
        }, e.prototype.guid = function(e) {
            e = t(e, {
                version: 5
            });
            var n = "abcdef1234567890",
                a = "ab89",
                i = this.string({
                    pool: n,
                    length: 8
                }) + "-" + this.string({
                    pool: n,
                    length: 4
                }) + "-" + e.version + this.string({
                    pool: n,
                    length: 3
                }) + "-" + this.string({
                    pool: a,
                    length: 1
                }) + this.string({
                    pool: n,
                    length: 3
                }) + "-" + this.string({
                    pool: n,
                    length: 12
                });
            return i
        }, e.prototype.hash = function(e) {
            e = t(e, {
                length: 40,
                casing: "lower"
            });
            var n = "upper" === e.casing ? f.toUpperCase() : f;
            return this.string({
                pool: n,
                length: e.length
            })
        }, e.prototype.luhn_check = function(e) {
            var t = e.toString(),
                n = +t.substring(t.length - 1);
            return n === this.luhn_calculate(+t.substring(0, t.length - 1))
        }, e.prototype.luhn_calculate = function(e) {
            for(var t, n = e.toString().split("").reverse(), a = 0, i = 0, r = n.length; r > i; ++i) t = +n[i], i % 2 === 0 && (t *= 2, t > 9 && (t -= 9)), a += t;
            return 9 * a % 10
        }, e.prototype.md5 = function(e) {
            var n = {
                str: "",
                key: null,
                raw: !1
            };
            if(e)
                if("string" == typeof e) n.str = e, e = {};
                else {
                    if("object" != typeof e) return null;
                    if("Array" === e.constructor) return null
                }
            else n.str = this.string(), e = {};
            if(n = t(e, n), !n.str) throw new Error("A parameter is required to return an md5 hash.");
            return this.bimd5.md5(n.str, n.key, n.raw)
        }, e.prototype.file = function(e) {
            var t, n, a = e || {},
                i = "fileExtension",
                r = Object.keys(this.get("fileExtension"));
            if(t = this.word({
                    length: a.length
                }), a.extention) return n = a.extention, t + "." + n;
            if(a.extentions) {
                if(Array.isArray(a.extentions)) return n = this.pickone(a.extentions), t + "." + n;
                if(a.extentions.constructor === Object) {
                    var o = a.extentions,
                        s = Object.keys(o);
                    return n = this.pickone(o[this.pickone(s)]), t + "." + n
                }
                throw new Error("Expect collection of type Array or Object to be passed as an argument ")
            }
            if(a.fileType) {
                var l = a.fileType;
                if(r.indexOf(l) !== -1) return n = this.pickone(this.get(i)[l]), t + "." + n;
                throw new Error("Expect file type value to be 'raster', 'vector', '3d' or 'document' ")
            }
            return n = this.pickone(this.get(i)[this.pickone(r)]), t + "." + n
        };
        var m = {
                firstNames: {
                    male: {
                        en: ["James", "John", "Robert", "Michael", "William", "David", "Richard", "Joseph", "Charles", "Thomas", "Christopher", "Daniel", "Matthew", "George", "Donald", "Anthony", "Paul", "Mark", "Edward", "Steven", "Kenneth", "Andrew", "Brian", "Joshua", "Kevin", "Ronald", "Timothy", "Jason", "Jeffrey", "Frank", "Gary", "Ryan", "Nicholas", "Eric", "Stephen", "Jacob", "Larry", "Jonathan", "Scott", "Raymond", "Justin", "Brandon", "Gregory", "Samuel", "Benjamin", "Patrick", "Jack", "Henry", "Walter", "Dennis", "Jerry", "Alexander", "Peter", "Tyler", "Douglas", "Harold", "Aaron", "Jose", "Adam", "Arthur", "Zachary", "Carl", "Nathan", "Albert", "Kyle", "Lawrence", "Joe", "Willie", "Gerald", "Roger", "Keith", "Jeremy", "Terry", "Harry", "Ralph", "Sean", "Jesse", "Roy", "Louis", "Billy", "Austin", "Bruce", "Eugene", "Christian", "Bryan", "Wayne", "Russell", "Howard", "Fred", "Ethan", "Jordan", "Philip", "Alan", "Juan", "Randy", "Vincent", "Bobby", "Dylan", "Johnny", "Phillip", "Victor", "Clarence", "Ernest", "Martin", "Craig", "Stanley", "Shawn", "Travis", "Bradley", "Leonard", "Earl", "Gabriel", "Jimmy", "Francis", "Todd", "Noah", "Danny", "Dale", "Cody", "Carlos", "Allen", "Frederick", "Logan", "Curtis", "Alex", "Joel", "Luis", "Norman", "Marvin", "Glenn", "Tony", "Nathaniel", "Rodney", "Melvin", "Alfred", "Steve", "Cameron", "Chad", "Edwin", "Caleb", "Evan", "Antonio", "Lee", "Herbert", "Jeffery", "Isaac", "Derek", "Ricky", "Marcus", "Theodore", "Elijah", "Luke", "Jesus", "Eddie", "Troy", "Mike", "Dustin", "Ray", "Adrian", "Bernard", "Leroy", "Angel", "Randall", "Wesley", "Ian", "Jared", "Mason", "Hunter", "Calvin", "Oscar", "Clifford", "Jay", "Shane", "Ronnie", "Barry", "Lucas", "Corey", "Manuel", "Leo", "Tommy", "Warren", "Jackson", "Isaiah", "Connor", "Don", "Dean", "Jon", "Julian", "Miguel", "Bill", "Lloyd", "Charlie", "Mitchell", "Leon", "Jerome", "Darrell", "Jeremiah", "Alvin", "Brett", "Seth", "Floyd", "Jim", "Blake", "Micheal", "Gordon", "Trevor", "Lewis", "Erik", "Edgar", "Vernon", "Devin", "Gavin", "Jayden", "Chris", "Clyde", "Tom", "Derrick", "Mario", "Brent", "Marc", "Herman", "Chase", "Dominic", "Ricardo", "Franklin", "Maurice", "Max", "Aiden", "Owen", "Lester", "Gilbert", "Elmer", "Gene", "Francisco", "Glen", "Cory", "Garrett", "Clayton", "Sam", "Jorge", "Chester", "Alejandro", "Jeff", "Harvey", "Milton", "Cole", "Ivan", "Andre", "Duane", "Landon"],
                        it: ["Adolfo", "Alberto", "Aldo", "Alessandro", "Alessio", "Alfredo", "Alvaro", "Andrea", "Angelo", "Angiolo", "Antonino", "Antonio", "Attilio", "Benito", "Bernardo", "Bruno", "Carlo", "Cesare", "Christian", "Claudio", "Corrado", "Cosimo", "Cristian", "Cristiano", "Daniele", "Dario", "David", "Davide", "Diego", "Dino", "Domenico", "Duccio", "Edoardo", "Elia", "Elio", "Emanuele", "Emiliano", "Emilio", "Enrico", "Enzo", "Ettore", "Fabio", "Fabrizio", "Federico", "Ferdinando", "Fernando", "Filippo", "Francesco", "Franco", "Gabriele", "Giacomo", "Giampaolo", "Giampiero", "Giancarlo", "Gianfranco", "Gianluca", "Gianmarco", "Gianni", "Gino", "Giorgio", "Giovanni", "Giuliano", "Giulio", "Giuseppe", "Graziano", "Gregorio", "Guido", "Iacopo", "Jacopo", "Lapo", "Leonardo", "Lorenzo", "Luca", "Luciano", "Luigi", "Manuel", "Marcello", "Marco", "Marino", "Mario", "Massimiliano", "Massimo", "Matteo", "Mattia", "Maurizio", "Mauro", "Michele", "Mirko", "Mohamed", "Nello", "Neri", "Niccolò", "Nicola", "Osvaldo", "Otello", "Paolo", "Pier Luigi", "Piero", "Pietro", "Raffaele", "Remo", "Renato", "Renzo", "Riccardo", "Roberto", "Rolando", "Romano", "Salvatore", "Samuele", "Sandro", "Sergio", "Silvano", "Simone", "Stefano", "Thomas", "Tommaso", "Ubaldo", "Ugo", "Umberto", "Valerio", "Valter", "Vasco", "Vincenzo", "Vittorio"]
                    },
                    female: {
                        en: ["Mary", "Emma", "Elizabeth", "Minnie", "Margaret", "Ida", "Alice", "Bertha", "Sarah", "Annie", "Clara", "Ella", "Florence", "Cora", "Martha", "Laura", "Nellie", "Grace", "Carrie", "Maude", "Mabel", "Bessie", "Jennie", "Gertrude", "Julia", "Hattie", "Edith", "Mattie", "Rose", "Catherine", "Lillian", "Ada", "Lillie", "Helen", "Jessie", "Louise", "Ethel", "Lula", "Myrtle", "Eva", "Frances", "Lena", "Lucy", "Edna", "Maggie", "Pearl", "Daisy", "Fannie", "Josephine", "Dora", "Rosa", "Katherine", "Agnes", "Marie", "Nora", "May", "Mamie", "Blanche", "Stella", "Ellen", "Nancy", "Effie", "Sallie", "Nettie", "Della", "Lizzie", "Flora", "Susie", "Maud", "Mae", "Etta", "Harriet", "Sadie", "Caroline", "Katie", "Lydia", "Elsie", "Kate", "Susan", "Mollie", "Alma", "Addie", "Georgia", "Eliza", "Lulu", "Nannie", "Lottie", "Amanda", "Belle", "Charlotte", "Rebecca", "Ruth", "Viola", "Olive", "Amelia", "Hannah", "Jane", "Virginia", "Emily", "Matilda", "Irene", "Kathryn", "Esther", "Willie", "Henrietta", "Ollie", "Amy", "Rachel", "Sara", "Estella", "Theresa", "Augusta", "Ora", "Pauline", "Josie", "Lola", "Sophia", "Leona", "Anne", "Mildred", "Ann", "Beulah", "Callie", "Lou", "Delia", "Eleanor", "Barbara", "Iva", "Louisa", "Maria", "Mayme", "Evelyn", "Estelle", "Nina", "Betty", "Marion", "Bettie", "Dorothy", "Luella", "Inez", "Lela", "Rosie", "Allie", "Millie", "Janie", "Cornelia", "Victoria", "Ruby", "Winifred", "Alta", "Celia", "Christine", "Beatrice", "Birdie", "Harriett", "Mable", "Myra", "Sophie", "Tillie", "Isabel", "Sylvia", "Carolyn", "Isabelle", "Leila", "Sally", "Ina", "Essie", "Bertie", "Nell", "Alberta", "Katharine", "Lora", "Rena", "Mina", "Rhoda", "Mathilda", "Abbie", "Eula", "Dollie", "Hettie", "Eunice", "Fanny", "Ola", "Lenora", "Adelaide", "Christina", "Lelia", "Nelle", "Sue", "Johanna", "Lilly", "Lucinda", "Minerva", "Lettie", "Roxie", "Cynthia", "Helena", "Hilda", "Hulda", "Bernice", "Genevieve", "Jean", "Cordelia", "Marian", "Francis", "Jeanette", "Adeline", "Gussie", "Leah", "Lois", "Lura", "Mittie", "Hallie", "Isabella", "Olga", "Phoebe", "Teresa", "Hester", "Lida", "Lina", "Winnie", "Claudia", "Marguerite", "Vera", "Cecelia", "Bess", "Emilie", "John", "Rosetta", "Verna", "Myrtie", "Cecilia", "Elva", "Olivia", "Ophelia", "Georgie", "Elnora", "Violet", "Adele", "Lily", "Linnie", "Loretta", "Madge", "Polly", "Virgie", "Eugenia", "Lucile", "Lucille", "Mabelle", "Rosalie"],
                        it: ["Ada", "Adriana", "Alessandra", "Alessia", "Alice", "Angela", "Anna", "Anna Maria", "Annalisa", "Annita", "Annunziata", "Antonella", "Arianna", "Asia", "Assunta", "Aurora", "Barbara", "Beatrice", "Benedetta", "Bianca", "Bruna", "Camilla", "Carla", "Carlotta", "Carmela", "Carolina", "Caterina", "Catia", "Cecilia", "Chiara", "Cinzia", "Clara", "Claudia", "Costanza", "Cristina", "Daniela", "Debora", "Diletta", "Dina", "Donatella", "Elena", "Eleonora", "Elisa", "Elisabetta", "Emanuela", "Emma", "Eva", "Federica", "Fernanda", "Fiorella", "Fiorenza", "Flora", "Franca", "Francesca", "Gabriella", "Gaia", "Gemma", "Giada", "Gianna", "Gina", "Ginevra", "Giorgia", "Giovanna", "Giulia", "Giuliana", "Giuseppa", "Giuseppina", "Grazia", "Graziella", "Greta", "Ida", "Ilaria", "Ines", "Iolanda", "Irene", "Irma", "Isabella", "Jessica", "Laura", "Leda", "Letizia", "Licia", "Lidia", "Liliana", "Lina", "Linda", "Lisa", "Livia", "Loretta", "Luana", "Lucia", "Luciana", "Lucrezia", "Luisa", "Manuela", "Mara", "Marcella", "Margherita", "Maria", "Maria Cristina", "Maria Grazia", "Maria Luisa", "Maria Pia", "Maria Teresa", "Marina", "Marisa", "Marta", "Martina", "Marzia", "Matilde", "Melissa", "Michela", "Milena", "Mirella", "Monica", "Natalina", "Nella", "Nicoletta", "Noemi", "Olga", "Paola", "Patrizia", "Piera", "Pierina", "Raffaella", "Rebecca", "Renata", "Rina", "Rita", "Roberta", "Rosa", "Rosanna", "Rossana", "Rossella", "Sabrina", "Sandra", "Sara", "Serena", "Silvana", "Silvia", "Simona", "Simonetta", "Sofia", "Sonia", "Stefania", "Susanna", "Teresa", "Tina", "Tiziana", "Tosca", "Valentina", "Valeria", "Vanda", "Vanessa", "Vanna", "Vera", "Veronica", "Vilma", "Viola", "Virginia", "Vittoria"]
                    }
                },
                lastNames: {
                    en: ["Smith", "Johnson", "Williams", "Jones", "Brown", "Davis", "Miller", "Wilson", "Moore", "Taylor", "Anderson", "Thomas", "Jackson", "White", "Harris", "Martin", "Thompson", "Garcia", "Martinez", "Robinson", "Clark", "Rodriguez", "Lewis", "Lee", "Walker", "Hall", "Allen", "Young", "Hernandez", "King", "Wright", "Lopez", "Hill", "Scott", "Green", "Adams", "Baker", "Gonzalez", "Nelson", "Carter", "Mitchell", "Perez", "Roberts", "Turner", "Phillips", "Campbell", "Parker", "Evans", "Edwards", "Collins", "Stewart", "Sanchez", "Morris", "Rogers", "Reed", "Cook", "Morgan", "Bell", "Murphy", "Bailey", "Rivera", "Cooper", "Richardson", "Cox", "Howard", "Ward", "Torres", "Peterson", "Gray", "Ramirez", "James", "Watson", "Brooks", "Kelly", "Sanders", "Price", "Bennett", "Wood", "Barnes", "Ross", "Henderson", "Coleman", "Jenkins", "Perry", "Powell", "Long", "Patterson", "Hughes", "Flores", "Washington", "Butler", "Simmons", "Foster", "Gonzales", "Bryant", "Alexander", "Russell", "Griffin", "Diaz", "Hayes", "Myers", "Ford", "Hamilton", "Graham", "Sullivan", "Wallace", "Woods", "Cole", "West", "Jordan", "Owens", "Reynolds", "Fisher", "Ellis", "Harrison", "Gibson", "McDonald", "Cruz", "Marshall", "Ortiz", "Gomez", "Murray", "Freeman", "Wells", "Webb", "Simpson", "Stevens", "Tucker", "Porter", "Hunter", "Hicks", "Crawford", "Henry", "Boyd", "Mason", "Morales", "Kennedy", "Warren", "Dixon", "Ramos", "Reyes", "Burns", "Gordon", "Shaw", "Holmes", "Rice", "Robertson", "Hunt", "Black", "Daniels", "Palmer", "Mills", "Nichols", "Grant", "Knight", "Ferguson", "Rose", "Stone", "Hawkins", "Dunn", "Perkins", "Hudson", "Spencer", "Gardner", "Stephens", "Payne", "Pierce", "Berry", "Matthews", "Arnold", "Wagner", "Willis", "Ray", "Watkins", "Olson", "Carroll", "Duncan", "Snyder", "Hart", "Cunningham", "Bradley", "Lane", "Andrews", "Ruiz", "Harper", "Fox", "Riley", "Armstrong", "Carpenter", "Weaver", "Greene", "Lawrence", "Elliott", "Chavez", "Sims", "Austin", "Peters", "Kelley", "Franklin", "Lawson", "Fields", "Gutierrez", "Ryan", "Schmidt", "Carr", "Vasquez", "Castillo", "Wheeler", "Chapman", "Oliver", "Montgomery", "Richards", "Williamson", "Johnston", "Banks", "Meyer", "Bishop", "McCoy", "Howell", "Alvarez", "Morrison", "Hansen", "Fernandez", "Garza", "Harvey", "Little", "Burton", "Stanley", "Nguyen", "George", "Jacobs", "Reid", "Kim", "Fuller", "Lynch", "Dean", "Gilbert", "Garrett", "Romero", "Welch", "Larson", "Frazier", "Burke", "Hanson", "Day", "Mendoza", "Moreno", "Bowman", "Medina", "Fowler", "Brewer", "Hoffman", "Carlson", "Silva", "Pearson", "Holland", "Douglas", "Fleming", "Jensen", "Vargas", "Byrd", "Davidson", "Hopkins", "May", "Terry", "Herrera", "Wade", "Soto", "Walters", "Curtis", "Neal", "Caldwell", "Lowe", "Jennings", "Barnett", "Graves", "Jimenez", "Horton", "Shelton", "Barrett", "Obrien", "Castro", "Sutton", "Gregory", "McKinney", "Lucas", "Miles", "Craig", "Rodriquez", "Chambers", "Holt", "Lambert", "Fletcher", "Watts", "Bates", "Hale", "Rhodes", "Pena", "Beck", "Newman", "Haynes", "McDaniel", "Mendez", "Bush", "Vaughn", "Parks", "Dawson", "Santiago", "Norris", "Hardy", "Love", "Steele", "Curry", "Powers", "Schultz", "Barker", "Guzman", "Page", "Munoz", "Ball", "Keller", "Chandler", "Weber", "Leonard", "Walsh", "Lyons", "Ramsey", "Wolfe", "Schneider", "Mullins", "Benson", "Sharp", "Bowen", "Daniel", "Barber", "Cummings", "Hines", "Baldwin", "Griffith", "Valdez", "Hubbard", "Salazar", "Reeves", "Warner", "Stevenson", "Burgess", "Santos", "Tate", "Cross", "Garner", "Mann", "Mack", "Moss", "Thornton", "Dennis", "McGee", "Farmer", "Delgado", "Aguilar", "Vega", "Glover", "Manning", "Cohen", "Harmon", "Rodgers", "Robbins", "Newton", "Todd", "Blair", "Higgins", "Ingram", "Reese", "Cannon", "Strickland", "Townsend", "Potter", "Goodwin", "Walton", "Rowe", "Hampton", "Ortega", "Patton", "Swanson", "Joseph", "Francis", "Goodman", "Maldonado", "Yates", "Becker", "Erickson", "Hodges", "Rios", "Conner", "Adkins", "Webster", "Norman", "Malone", "Hammond", "Flowers", "Cobb", "Moody", "Quinn", "Blake", "Maxwell", "Pope", "Floyd", "Osborne", "Paul", "McCarthy", "Guerrero", "Lindsey", "Estrada", "Sandoval", "Gibbs", "Tyler", "Gross", "Fitzgerald", "Stokes", "Doyle", "Sherman", "Saunders", "Wise", "Colon", "Gill", "Alvarado", "Greer", "Padilla", "Simon", "Waters", "Nunez", "Ballard", "Schwartz", "McBride", "Houston", "Christensen", "Klein", "Pratt", "Briggs", "Parsons", "McLaughlin", "Zimmerman", "French", "Buchanan", "Moran", "Copeland", "Roy", "Pittman", "Brady", "McCormick", "Holloway", "Brock", "Poole", "Frank", "Logan", "Owen", "Bass", "Marsh", "Drake", "Wong", "Jefferson", "Park", "Morton", "Abbott", "Sparks", "Patrick", "Norton", "Huff", "Clayton", "Massey", "Lloyd", "Figueroa", "Carson", "Bowers", "Roberson", "Barton", "Tran", "Lamb", "Harrington", "Casey", "Boone", "Cortez", "Clarke", "Mathis", "Singleton", "Wilkins", "Cain", "Bryan", "Underwood", "Hogan", "McKenzie", "Collier", "Luna", "Phelps", "McGuire", "Allison", "Bridges", "Wilkerson", "Nash", "Summers", "Atkins"],
                    it: ["Acciai", "Aglietti", "Agostini", "Agresti", "Ahmed", "Aiazzi", "Albanese", "Alberti", "Alessi", "Alfani", "Alinari", "Alterini", "Amato", "Ammannati", "Ancillotti", "Andrei", "Andreini", "Andreoni", "Angeli", "Anichini", "Antonelli", "Antonini", "Arena", "Ariani", "Arnetoli", "Arrighi", "Baccani", "Baccetti", "Bacci", "Bacherini", "Badii", "Baggiani", "Baglioni", "Bagni", "Bagnoli", "Baldassini", "Baldi", "Baldini", "Ballerini", "Balli", "Ballini", "Balloni", "Bambi", "Banchi", "Bandinelli", "Bandini", "Bani", "Barbetti", "Barbieri", "Barchielli", "Bardazzi", "Bardelli", "Bardi", "Barducci", "Bargellini", "Bargiacchi", "Barni", "Baroncelli", "Baroncini", "Barone", "Baroni", "Baronti", "Bartalesi", "Bartoletti", "Bartoli", "Bartolini", "Bartoloni", "Bartolozzi", "Basagni", "Basile", "Bassi", "Batacchi", "Battaglia", "Battaglini", "Bausi", "Becagli", "Becattini", "Becchi", "Becucci", "Bellandi", "Bellesi", "Belli", "Bellini", "Bellucci", "Bencini", "Benedetti", "Benelli", "Beni", "Benini", "Bensi", "Benucci", "Benvenuti", "Berlincioni", "Bernacchioni", "Bernardi", "Bernardini", "Berni", "Bernini", "Bertelli", "Berti", "Bertini", "Bessi", "Betti", "Bettini", "Biagi", "Biagini", "Biagioni", "Biagiotti", "Biancalani", "Bianchi", "Bianchini", "Bianco", "Biffoli", "Bigazzi", "Bigi", "Biliotti", "Billi", "Binazzi", "Bindi", "Bini", "Biondi", "Bizzarri", "Bocci", "Bogani", "Bolognesi", "Bonaiuti", "Bonanni", "Bonciani", "Boncinelli", "Bondi", "Bonechi", "Bongini", "Boni", "Bonini", "Borchi", "Boretti", "Borghi", "Borghini", "Borgioli", "Borri", "Borselli", "Boschi", "Bottai", "Bracci", "Braccini", "Brandi", "Braschi", "Bravi", "Brazzini", "Breschi", "Brilli", "Brizzi", "Brogelli", "Brogi", "Brogioni", "Brunelli", "Brunetti", "Bruni", "Bruno", "Brunori", "Bruschi", "Bucci", "Bucciarelli", "Buccioni", "Bucelli", "Bulli", "Burberi", "Burchi", "Burgassi", "Burroni", "Bussotti", "Buti", "Caciolli", "Caiani", "Calabrese", "Calamai", "Calamandrei", "Caldini", "Calo'", "Calonaci", "Calosi", "Calvelli", "Cambi", "Camiciottoli", "Cammelli", "Cammilli", "Campolmi", "Cantini", "Capanni", "Capecchi", "Caponi", "Cappelletti", "Cappelli", "Cappellini", "Cappugi", "Capretti", "Caputo", "Carbone", "Carboni", "Cardini", "Carlesi", "Carletti", "Carli", "Caroti", "Carotti", "Carrai", "Carraresi", "Carta", "Caruso", "Casalini", "Casati", "Caselli", "Casini", "Castagnoli", "Castellani", "Castelli", "Castellucci", "Catalano", "Catarzi", "Catelani", "Cavaciocchi", "Cavallaro", "Cavallini", "Cavicchi", "Cavini", "Ceccarelli", "Ceccatelli", "Ceccherelli", "Ceccherini", "Cecchi", "Cecchini", "Cecconi", "Cei", "Cellai", "Celli", "Cellini", "Cencetti", "Ceni", "Cenni", "Cerbai", "Cesari", "Ceseri", "Checcacci", "Checchi", "Checcucci", "Cheli", "Chellini", "Chen", "Cheng", "Cherici", "Cherubini", "Chiaramonti", "Chiarantini", "Chiarelli", "Chiari", "Chiarini", "Chiarugi", "Chiavacci", "Chiesi", "Chimenti", "Chini", "Chirici", "Chiti", "Ciabatti", "Ciampi", "Cianchi", "Cianfanelli", "Cianferoni", "Ciani", "Ciapetti", "Ciappi", "Ciardi", "Ciatti", "Cicali", "Ciccone", "Cinelli", "Cini", "Ciobanu", "Ciolli", "Cioni", "Cipriani", "Cirillo", "Cirri", "Ciucchi", "Ciuffi", "Ciulli", "Ciullini", "Clemente", "Cocchi", "Cognome", "Coli", "Collini", "Colombo", "Colzi", "Comparini", "Conforti", "Consigli", "Conte", "Conti", "Contini", "Coppini", "Coppola", "Corsi", "Corsini", "Corti", "Cortini", "Cosi", "Costa", "Costantini", "Costantino", "Cozzi", "Cresci", "Crescioli", "Cresti", "Crini", "Curradi", "D'Agostino", "D'Alessandro", "D'Amico", "D'Angelo", "Daddi", "Dainelli", "Dallai", "Danti", "Davitti", "De Angelis", "De Luca", "De Marco", "De Rosa", "De Santis", "De Simone", "De Vita", "Degl'Innocenti", "Degli Innocenti", "Dei", "Del Lungo", "Del Re", "Di Marco", "Di Stefano", "Dini", "Diop", "Dobre", "Dolfi", "Donati", "Dondoli", "Dong", "Donnini", "Ducci", "Dumitru", "Ermini", "Esposito", "Evangelisti", "Fabbri", "Fabbrini", "Fabbrizzi", "Fabbroni", "Fabbrucci", "Fabiani", "Facchini", "Faggi", "Fagioli", "Failli", "Faini", "Falciani", "Falcini", "Falcone", "Fallani", "Falorni", "Falsini", "Falugiani", "Fancelli", "Fanelli", "Fanetti", "Fanfani", "Fani", "Fantappie'", "Fantechi", "Fanti", "Fantini", "Fantoni", "Farina", "Fattori", "Favilli", "Fedi", "Fei", "Ferrante", "Ferrara", "Ferrari", "Ferraro", "Ferretti", "Ferri", "Ferrini", "Ferroni", "Fiaschi", "Fibbi", "Fiesoli", "Filippi", "Filippini", "Fini", "Fioravanti", "Fiore", "Fiorentini", "Fiorini", "Fissi", "Focardi", "Foggi", "Fontana", "Fontanelli", "Fontani", "Forconi", "Formigli", "Forte", "Forti", "Fortini", "Fossati", "Fossi", "Francalanci", "Franceschi", "Franceschini", "Franchi", "Franchini", "Franci", "Francini", "Francioni", "Franco", "Frassineti", "Frati", "Fratini", "Frilli", "Frizzi", "Frosali", "Frosini", "Frullini", "Fusco", "Fusi", "Gabbrielli", "Gabellini", "Gagliardi", "Galanti", "Galardi", "Galeotti", "Galletti", "Galli", "Gallo", "Gallori", "Gambacciani", "Gargani", "Garofalo", "Garuglieri", "Gashi", "Gasperini", "Gatti", "Gelli", "Gensini", "Gentile", "Gentili", "Geri", "Gerini", "Gheri", "Ghini", "Giachetti", "Giachi", "Giacomelli", "Gianassi", "Giani", "Giannelli", "Giannetti", "Gianni", "Giannini", "Giannoni", "Giannotti", "Giannozzi", "Gigli", "Giordano", "Giorgetti", "Giorgi", "Giovacchini", "Giovannelli", "Giovannetti", "Giovannini", "Giovannoni", "Giuliani", "Giunti", "Giuntini", "Giusti", "Gonnelli", "Goretti", "Gori", "Gradi", "Gramigni", "Grassi", "Grasso", "Graziani", "Grazzini", "Greco", "Grifoni", "Grillo", "Grimaldi", "Grossi", "Gualtieri", "Guarducci", "Guarino", "Guarnieri", "Guasti", "Guerra", "Guerri", "Guerrini", "Guidi", "Guidotti", "He", "Hoxha", "Hu", "Huang", "Iandelli", "Ignesti", "Innocenti", "Jin", "La Rosa", "Lai", "Landi", "Landini", "Lanini", "Lapi", "Lapini", "Lari", "Lascialfari", "Lastrucci", "Latini", "Lazzeri", "Lazzerini", "Lelli", "Lenzi", "Leonardi", "Leoncini", "Leone", "Leoni", "Lepri", "Li", "Liao", "Lin", "Linari", "Lippi", "Lisi", "Livi", "Lombardi", "Lombardini", "Lombardo", "Longo", "Lopez", "Lorenzi", "Lorenzini", "Lorini", "Lotti", "Lu", "Lucchesi", "Lucherini", "Lunghi", "Lupi", "Madiai", "Maestrini", "Maffei", "Maggi", "Maggini", "Magherini", "Magini", "Magnani", "Magnelli", "Magni", "Magnolfi", "Magrini", "Malavolti", "Malevolti", "Manca", "Mancini", "Manetti", "Manfredi", "Mangani", "Mannelli", "Manni", "Mannini", "Mannucci", "Manuelli", "Manzini", "Marcelli", "Marchese", "Marchetti", "Marchi", "Marchiani", "Marchionni", "Marconi", "Marcucci", "Margheri", "Mari", "Mariani", "Marilli", "Marinai", "Marinari", "Marinelli", "Marini", "Marino", "Mariotti", "Marsili", "Martelli", "Martinelli", "Martini", "Martino", "Marzi", "Masi", "Masini", "Masoni", "Massai", "Materassi", "Mattei", "Matteini", "Matteucci", "Matteuzzi", "Mattioli", "Mattolini", "Matucci", "Mauro", "Mazzanti", "Mazzei", "Mazzetti", "Mazzi", "Mazzini", "Mazzocchi", "Mazzoli", "Mazzoni", "Mazzuoli", "Meacci", "Mecocci", "Meini", "Melani", "Mele", "Meli", "Mengoni", "Menichetti", "Meoni", "Merlini", "Messeri", "Messina", "Meucci", "Miccinesi", "Miceli", "Micheli", "Michelini", "Michelozzi", "Migliori", "Migliorini", "Milani", "Miniati", "Misuri", "Monaco", "Montagnani", "Montagni", "Montanari", "Montelatici", "Monti", "Montigiani", "Montini", "Morandi", "Morandini", "Morelli", "Moretti", "Morganti", "Mori", "Morini", "Moroni", "Morozzi", "Mugnai", "Mugnaini", "Mustafa", "Naldi", "Naldini", "Nannelli", "Nanni", "Nannini", "Nannucci", "Nardi", "Nardini", "Nardoni", "Natali", "Ndiaye", "Nencetti", "Nencini", "Nencioni", "Neri", "Nesi", "Nesti", "Niccolai", "Niccoli", "Niccolini", "Nigi", "Nistri", "Nocentini", "Noferini", "Novelli", "Nucci", "Nuti", "Nutini", "Oliva", "Olivieri", "Olmi", "Orlandi", "Orlandini", "Orlando", "Orsini", "Ortolani", "Ottanelli", "Pacciani", "Pace", "Paci", "Pacini", "Pagani", "Pagano", "Paggetti", "Pagliai", "Pagni", "Pagnini", "Paladini", "Palagi", "Palchetti", "Palloni", "Palmieri", "Palumbo", "Pampaloni", "Pancani", "Pandolfi", "Pandolfini", "Panerai", "Panichi", "Paoletti", "Paoli", "Paolini", "Papi", "Papini", "Papucci", "Parenti", "Parigi", "Parisi", "Parri", "Parrini", "Pasquini", "Passeri", "Pecchioli", "Pecorini", "Pellegrini", "Pepi", "Perini", "Perrone", "Peruzzi", "Pesci", "Pestelli", "Petri", "Petrini", "Petrucci", "Pettini", "Pezzati", "Pezzatini", "Piani", "Piazza", "Piazzesi", "Piazzini", "Piccardi", "Picchi", "Piccini", "Piccioli", "Pieraccini", "Pieraccioni", "Pieralli", "Pierattini", "Pieri", "Pierini", "Pieroni", "Pietrini", "Pini", "Pinna", "Pinto", "Pinzani", "Pinzauti", "Piras", "Pisani", "Pistolesi", "Poggesi", "Poggi", "Poggiali", "Poggiolini", "Poli", "Pollastri", "Porciani", "Pozzi", "Pratellesi", "Pratesi", "Prosperi", "Pruneti", "Pucci", "Puccini", "Puccioni", "Pugi", "Pugliese", "Puliti", "Querci", "Quercioli", "Raddi", "Radu", "Raffaelli", "Ragazzini", "Ranfagni", "Ranieri", "Rastrelli", "Raugei", "Raveggi", "Renai", "Renzi", "Rettori", "Ricci", "Ricciardi", "Ridi", "Ridolfi", "Rigacci", "Righi", "Righini", "Rinaldi", "Risaliti", "Ristori", "Rizzo", "Rocchi", "Rocchini", "Rogai", "Romagnoli", "Romanelli", "Romani", "Romano", "Romei", "Romeo", "Romiti", "Romoli", "Romolini", "Rontini", "Rosati", "Roselli", "Rosi", "Rossetti", "Rossi", "Rossini", "Rovai", "Ruggeri", "Ruggiero", "Russo", "Sabatini", "Saccardi", "Sacchetti", "Sacchi", "Sacco", "Salerno", "Salimbeni", "Salucci", "Salvadori", "Salvestrini", "Salvi", "Salvini", "Sanesi", "Sani", "Sanna", "Santi", "Santini", "Santoni", "Santoro", "Santucci", "Sardi", "Sarri", "Sarti", "Sassi", "Sbolci", "Scali", "Scarpelli", "Scarselli", "Scopetani", "Secci", "Selvi", "Senatori", "Senesi", "Serafini", "Sereni", "Serra", "Sestini", "Sguanci", "Sieni", "Signorini", "Silvestri", "Simoncini", "Simonetti", "Simoni", "Singh", "Sodi", "Soldi", "Somigli", "Sorbi", "Sorelli", "Sorrentino", "Sottili", "Spina", "Spinelli", "Staccioli", "Staderini", "Stefanelli", "Stefani", "Stefanini", "Stella", "Susini", "Tacchi", "Tacconi", "Taddei", "Tagliaferri", "Tamburini", "Tanganelli", "Tani", "Tanini", "Tapinassi", "Tarchi", "Tarchiani", "Targioni", "Tassi", "Tassini", "Tempesti", "Terzani", "Tesi", "Testa", "Testi", "Tilli", "Tinti", "Tirinnanzi", "Toccafondi", "Tofanari", "Tofani", "Tognaccini", "Tonelli", "Tonini", "Torelli", "Torrini", "Tosi", "Toti", "Tozzi", "Trambusti", "Trapani", "Tucci", "Turchi", "Ugolini", "Ulivi", "Valente", "Valenti", "Valentini", "Vangelisti", "Vanni", "Vannini", "Vannoni", "Vannozzi", "Vannucchi", "Vannucci", "Ventura", "Venturi", "Venturini", "Vestri", "Vettori", "Vichi", "Viciani", "Vieri", "Vigiani", "Vignoli", "Vignolini", "Vignozzi", "Villani", "Vinci", "Visani", "Vitale", "Vitali", "Viti", "Viviani", "Vivoli", "Volpe", "Volpi", "Wang", "Wu", "Xu", "Yang", "Ye", "Zagli", "Zani", "Zanieri", "Zanobini", "Zecchi", "Zetti", "Zhang", "Zheng", "Zhou", "Zhu", "Zingoni", "Zini", "Zoppi"]
                },
                countries: [{
                    name: "Afghanistan",
                    abbreviation: "AF"
                }, {
                    name: "Åland Islands",
                    abbreviation: "AX"
                }, {
                    name: "Albania",
                    abbreviation: "AL"
                }, {
                    name: "Algeria",
                    abbreviation: "DZ"
                }, {
                    name: "American Samoa",
                    abbreviation: "AS"
                }, {
                    name: "Andorra",
                    abbreviation: "AD"
                }, {
                    name: "Angola",
                    abbreviation: "AO"
                }, {
                    name: "Anguilla",
                    abbreviation: "AI"
                }, {
                    name: "Antarctica",
                    abbreviation: "AQ"
                }, {
                    name: "Antigua & Barbuda",
                    abbreviation: "AG"
                }, {
                    name: "Argentina",
                    abbreviation: "AR"
                }, {
                    name: "Armenia",
                    abbreviation: "AM"
                }, {
                    name: "Aruba",
                    abbreviation: "AW"
                }, {
                    name: "Ascension Island",
                    abbreviation: "AC"
                }, {
                    name: "Australia",
                    abbreviation: "AU"
                }, {
                    name: "Austria",
                    abbreviation: "AT"
                }, {
                    name: "Azerbaijan",
                    abbreviation: "AZ"
                }, {
                    name: "Bahamas",
                    abbreviation: "BS"
                }, {
                    name: "Bahrain",
                    abbreviation: "BH"
                }, {
                    name: "Bangladesh",
                    abbreviation: "BD"
                }, {
                    name: "Barbados",
                    abbreviation: "BB"
                }, {
                    name: "Belarus",
                    abbreviation: "BY"
                }, {
                    name: "Belgium",
                    abbreviation: "BE"
                }, {
                    name: "Belize",
                    abbreviation: "BZ"
                }, {
                    name: "Benin",
                    abbreviation: "BJ"
                }, {
                    name: "Bermuda",
                    abbreviation: "BM"
                }, {
                    name: "Bhutan",
                    abbreviation: "BT"
                }, {
                    name: "Bolivia",
                    abbreviation: "BO"
                }, {
                    name: "Bosnia & Herzegovina",
                    abbreviation: "BA"
                }, {
                    name: "Botswana",
                    abbreviation: "BW"
                }, {
                    name: "Brazil",
                    abbreviation: "BR"
                }, {
                    name: "British Indian Ocean Territory",
                    abbreviation: "IO"
                }, {
                    name: "British Virgin Islands",
                    abbreviation: "VG"
                }, {
                    name: "Brunei",
                    abbreviation: "BN"
                }, {
                    name: "Bulgaria",
                    abbreviation: "BG"
                }, {
                    name: "Burkina Faso",
                    abbreviation: "BF"
                }, {
                    name: "Burundi",
                    abbreviation: "BI"
                }, {
                    name: "Cambodia",
                    abbreviation: "KH"
                }, {
                    name: "Cameroon",
                    abbreviation: "CM"
                }, {
                    name: "Canada",
                    abbreviation: "CA"
                }, {
                    name: "Canary Islands",
                    abbreviation: "IC"
                }, {
                    name: "Cape Verde",
                    abbreviation: "CV"
                }, {
                    name: "Caribbean Netherlands",
                    abbreviation: "BQ"
                }, {
                    name: "Cayman Islands",
                    abbreviation: "KY"
                }, {
                    name: "Central African Republic",
                    abbreviation: "CF"
                }, {
                    name: "Ceuta & Melilla",
                    abbreviation: "EA"
                }, {
                    name: "Chad",
                    abbreviation: "TD"
                }, {
                    name: "Chile",
                    abbreviation: "CL"
                }, {
                    name: "China",
                    abbreviation: "CN"
                }, {
                    name: "Christmas Island",
                    abbreviation: "CX"
                }, {
                    name: "Cocos (Keeling) Islands",
                    abbreviation: "CC"
                }, {
                    name: "Colombia",
                    abbreviation: "CO"
                }, {
                    name: "Comoros",
                    abbreviation: "KM"
                }, {
                    name: "Congo - Brazzaville",
                    abbreviation: "CG"
                }, {
                    name: "Congo - Kinshasa",
                    abbreviation: "CD"
                }, {
                    name: "Cook Islands",
                    abbreviation: "CK"
                }, {
                    name: "Costa Rica",
                    abbreviation: "CR"
                }, {
                    name: "Côte d'Ivoire",
                    abbreviation: "CI"
                }, {
                    name: "Croatia",
                    abbreviation: "HR"
                }, {
                    name: "Cuba",
                    abbreviation: "CU"
                }, {
                    name: "Curaçao",
                    abbreviation: "CW"
                }, {
                    name: "Cyprus",
                    abbreviation: "CY"
                }, {
                    name: "Czech Republic",
                    abbreviation: "CZ"
                }, {
                    name: "Denmark",
                    abbreviation: "DK"
                }, {
                    name: "Diego Garcia",
                    abbreviation: "DG"
                }, {
                    name: "Djibouti",
                    abbreviation: "DJ"
                }, {
                    name: "Dominica",
                    abbreviation: "DM"
                }, {
                    name: "Dominican Republic",
                    abbreviation: "DO"
                }, {
                    name: "Ecuador",
                    abbreviation: "EC"
                }, {
                    name: "Egypt",
                    abbreviation: "EG"
                }, {
                    name: "El Salvador",
                    abbreviation: "SV"
                }, {
                    name: "Equatorial Guinea",
                    abbreviation: "GQ"
                }, {
                    name: "Eritrea",
                    abbreviation: "ER"
                }, {
                    name: "Estonia",
                    abbreviation: "EE"
                }, {
                    name: "Ethiopia",
                    abbreviation: "ET"
                }, {
                    name: "Falkland Islands",
                    abbreviation: "FK"
                }, {
                    name: "Faroe Islands",
                    abbreviation: "FO"
                }, {
                    name: "Fiji",
                    abbreviation: "FJ"
                }, {
                    name: "Finland",
                    abbreviation: "FI"
                }, {
                    name: "France",
                    abbreviation: "FR"
                }, {
                    name: "French Guiana",
                    abbreviation: "GF"
                }, {
                    name: "French Polynesia",
                    abbreviation: "PF"
                }, {
                    name: "French Southern Territories",
                    abbreviation: "TF"
                }, {
                    name: "Gabon",
                    abbreviation: "GA"
                }, {
                    name: "Gambia",
                    abbreviation: "GM"
                }, {
                    name: "Georgia",
                    abbreviation: "GE"
                }, {
                    name: "Germany",
                    abbreviation: "DE"
                }, {
                    name: "Ghana",
                    abbreviation: "GH"
                }, {
                    name: "Gibraltar",
                    abbreviation: "GI"
                }, {
                    name: "Greece",
                    abbreviation: "GR"
                }, {
                    name: "Greenland",
                    abbreviation: "GL"
                }, {
                    name: "Grenada",
                    abbreviation: "GD"
                }, {
                    name: "Guadeloupe",
                    abbreviation: "GP"
                }, {
                    name: "Guam",
                    abbreviation: "GU"
                }, {
                    name: "Guatemala",
                    abbreviation: "GT"
                }, {
                    name: "Guernsey",
                    abbreviation: "GG"
                }, {
                    name: "Guinea",
                    abbreviation: "GN"
                }, {
                    name: "Guinea-Bissau",
                    abbreviation: "GW"
                }, {
                    name: "Guyana",
                    abbreviation: "GY"
                }, {
                    name: "Haiti",
                    abbreviation: "HT"
                }, {
                    name: "Honduras",
                    abbreviation: "HN"
                }, {
                    name: "Hong Kong SAR China",
                    abbreviation: "HK"
                }, {
                    name: "Hungary",
                    abbreviation: "HU"
                }, {
                    name: "Iceland",
                    abbreviation: "IS"
                }, {
                    name: "India",
                    abbreviation: "IN"
                }, {
                    name: "Indonesia",
                    abbreviation: "ID"
                }, {
                    name: "Iran",
                    abbreviation: "IR"
                }, {
                    name: "Iraq",
                    abbreviation: "IQ"
                }, {
                    name: "Ireland",
                    abbreviation: "IE"
                }, {
                    name: "Isle of Man",
                    abbreviation: "IM"
                }, {
                    name: "Israel",
                    abbreviation: "IL"
                }, {
                    name: "Italy",
                    abbreviation: "IT"
                }, {
                    name: "Jamaica",
                    abbreviation: "JM"
                }, {
                    name: "Japan",
                    abbreviation: "JP"
                }, {
                    name: "Jersey",
                    abbreviation: "JE"
                }, {
                    name: "Jordan",
                    abbreviation: "JO"
                }, {
                    name: "Kazakhstan",
                    abbreviation: "KZ"
                }, {
                    name: "Kenya",
                    abbreviation: "KE"
                }, {
                    name: "Kiribati",
                    abbreviation: "KI"
                }, {
                    name: "Kosovo",
                    abbreviation: "XK"
                }, {
                    name: "Kuwait",
                    abbreviation: "KW"
                }, {
                    name: "Kyrgyzstan",
                    abbreviation: "KG"
                }, {
                    name: "Laos",
                    abbreviation: "LA"
                }, {
                    name: "Latvia",
                    abbreviation: "LV"
                }, {
                    name: "Lebanon",
                    abbreviation: "LB"
                }, {
                    name: "Lesotho",
                    abbreviation: "LS"
                }, {
                    name: "Liberia",
                    abbreviation: "LR"
                }, {
                    name: "Libya",
                    abbreviation: "LY"
                }, {
                    name: "Liechtenstein",
                    abbreviation: "LI"
                }, {
                    name: "Lithuania",
                    abbreviation: "LT"
                }, {
                    name: "Luxembourg",
                    abbreviation: "LU"
                }, {
                    name: "Macau SAR China",
                    abbreviation: "MO"
                }, {
                    name: "Macedonia",
                    abbreviation: "MK"
                }, {
                    name: "Madagascar",
                    abbreviation: "MG"
                }, {
                    name: "Malawi",
                    abbreviation: "MW"
                }, {
                    name: "Malaysia",
                    abbreviation: "MY"
                }, {
                    name: "Maldives",
                    abbreviation: "MV"
                }, {
                    name: "Mali",
                    abbreviation: "ML"
                }, {
                    name: "Malta",
                    abbreviation: "MT"
                }, {
                    name: "Marshall Islands",
                    abbreviation: "MH"
                }, {
                    name: "Martinique",
                    abbreviation: "MQ"
                }, {
                    name: "Mauritania",
                    abbreviation: "MR"
                }, {
                    name: "Mauritius",
                    abbreviation: "MU"
                }, {
                    name: "Mayotte",
                    abbreviation: "YT"
                }, {
                    name: "Mexico",
                    abbreviation: "MX"
                }, {
                    name: "Micronesia",
                    abbreviation: "FM"
                }, {
                    name: "Moldova",
                    abbreviation: "MD"
                }, {
                    name: "Monaco",
                    abbreviation: "MC"
                }, {
                    name: "Mongolia",
                    abbreviation: "MN"
                }, {
                    name: "Montenegro",
                    abbreviation: "ME"
                }, {
                    name: "Montserrat",
                    abbreviation: "MS"
                }, {
                    name: "Morocco",
                    abbreviation: "MA"
                }, {
                    name: "Mozambique",
                    abbreviation: "MZ"
                }, {
                    name: "Myanmar (Burma)",
                    abbreviation: "MM"
                }, {
                    name: "Namibia",
                    abbreviation: "NA"
                }, {
                    name: "Nauru",
                    abbreviation: "NR"
                }, {
                    name: "Nepal",
                    abbreviation: "NP"
                }, {
                    name: "Netherlands",
                    abbreviation: "NL"
                }, {
                    name: "New Caledonia",
                    abbreviation: "NC"
                }, {
                    name: "New Zealand",
                    abbreviation: "NZ"
                }, {
                    name: "Nicaragua",
                    abbreviation: "NI"
                }, {
                    name: "Niger",
                    abbreviation: "NE"
                }, {
                    name: "Nigeria",
                    abbreviation: "NG"
                }, {
                    name: "Niue",
                    abbreviation: "NU"
                }, {
                    name: "Norfolk Island",
                    abbreviation: "NF"
                }, {
                    name: "North Korea",
                    abbreviation: "KP"
                }, {
                    name: "Northern Mariana Islands",
                    abbreviation: "MP"
                }, {
                    name: "Norway",
                    abbreviation: "NO"
                }, {
                    name: "Oman",
                    abbreviation: "OM"
                }, {
                    name: "Pakistan",
                    abbreviation: "PK"
                }, {
                    name: "Palau",
                    abbreviation: "PW"
                }, {
                    name: "Palestinian Territories",
                    abbreviation: "PS"
                }, {
                    name: "Panama",
                    abbreviation: "PA"
                }, {
                    name: "Papua New Guinea",
                    abbreviation: "PG"
                }, {
                    name: "Paraguay",
                    abbreviation: "PY"
                }, {
                    name: "Peru",
                    abbreviation: "PE"
                }, {
                    name: "Philippines",
                    abbreviation: "PH"
                }, {
                    name: "Pitcairn Islands",
                    abbreviation: "PN"
                }, {
                    name: "Poland",
                    abbreviation: "PL"
                }, {
                    name: "Portugal",
                    abbreviation: "PT"
                }, {
                    name: "Puerto Rico",
                    abbreviation: "PR"
                }, {
                    name: "Qatar",
                    abbreviation: "QA"
                }, {
                    name: "Réunion",
                    abbreviation: "RE"
                }, {
                    name: "Romania",
                    abbreviation: "RO"
                }, {
                    name: "Russia",
                    abbreviation: "RU"
                }, {
                    name: "Rwanda",
                    abbreviation: "RW"
                }, {
                    name: "Samoa",
                    abbreviation: "WS"
                }, {
                    name: "San Marino",
                    abbreviation: "SM"
                }, {
                    name: "São Tomé and Príncipe",
                    abbreviation: "ST"
                }, {
                    name: "Saudi Arabia",
                    abbreviation: "SA"
                }, {
                    name: "Senegal",
                    abbreviation: "SN"
                }, {
                    name: "Serbia",
                    abbreviation: "RS"
                }, {
                    name: "Seychelles",
                    abbreviation: "SC"
                }, {
                    name: "Sierra Leone",
                    abbreviation: "SL"
                }, {
                    name: "Singapore",
                    abbreviation: "SG"
                }, {
                    name: "Sint Maarten",
                    abbreviation: "SX"
                }, {
                    name: "Slovakia",
                    abbreviation: "SK"
                }, {
                    name: "Slovenia",
                    abbreviation: "SI"
                }, {
                    name: "Solomon Islands",
                    abbreviation: "SB"
                }, {
                    name: "Somalia",
                    abbreviation: "SO"
                }, {
                    name: "South Africa",
                    abbreviation: "ZA"
                }, {
                    name: "South Georgia & South Sandwich Islands",
                    abbreviation: "GS"
                }, {
                    name: "South Korea",
                    abbreviation: "KR"
                }, {
                    name: "South Sudan",
                    abbreviation: "SS"
                }, {
                    name: "Spain",
                    abbreviation: "ES"
                }, {
                    name: "Sri Lanka",
                    abbreviation: "LK"
                }, {
                    name: "St. Barthélemy",
                    abbreviation: "BL"
                }, {
                    name: "St. Helena",
                    abbreviation: "SH"
                }, {
                    name: "St. Kitts & Nevis",
                    abbreviation: "KN"
                }, {
                    name: "St. Lucia",
                    abbreviation: "LC"
                }, {
                    name: "St. Martin",
                    abbreviation: "MF"
                }, {
                    name: "St. Pierre & Miquelon",
                    abbreviation: "PM"
                }, {
                    name: "St. Vincent & Grenadines",
                    abbreviation: "VC"
                }, {
                    name: "Sudan",
                    abbreviation: "SD"
                }, {
                    name: "Suriname",
                    abbreviation: "SR"
                }, {
                    name: "Svalbard & Jan Mayen",
                    abbreviation: "SJ"
                }, {
                    name: "Swaziland",
                    abbreviation: "SZ"
                }, {
                    name: "Sweden",
                    abbreviation: "SE"
                }, {
                    name: "Switzerland",
                    abbreviation: "CH"
                }, {
                    name: "Syria",
                    abbreviation: "SY"
                }, {
                    name: "Taiwan",
                    abbreviation: "TW"
                }, {
                    name: "Tajikistan",
                    abbreviation: "TJ"
                }, {
                    name: "Tanzania",
                    abbreviation: "TZ"
                }, {
                    name: "Thailand",
                    abbreviation: "TH"
                }, {
                    name: "Timor-Leste",
                    abbreviation: "TL"
                }, {
                    name: "Togo",
                    abbreviation: "TG"
                }, {
                    name: "Tokelau",
                    abbreviation: "TK"
                }, {
                    name: "Tonga",
                    abbreviation: "TO"
                }, {
                    name: "Trinidad & Tobago",
                    abbreviation: "TT"
                }, {
                    name: "Tristan da Cunha",
                    abbreviation: "TA"
                }, {
                    name: "Tunisia",
                    abbreviation: "TN"
                }, {
                    name: "Turkey",
                    abbreviation: "TR"
                }, {
                    name: "Turkmenistan",
                    abbreviation: "TM"
                }, {
                    name: "Turks & Caicos Islands",
                    abbreviation: "TC"
                }, {
                    name: "Tuvalu",
                    abbreviation: "TV"
                }, {
                    name: "U.S. Outlying Islands",
                    abbreviation: "UM"
                }, {
                    name: "U.S. Virgin Islands",
                    abbreviation: "VI"
                }, {
                    name: "Uganda",
                    abbreviation: "UG"
                }, {
                    name: "Ukraine",
                    abbreviation: "UA"
                }, {
                    name: "United Arab Emirates",
                    abbreviation: "AE"
                }, {
                    name: "United Kingdom",
                    abbreviation: "GB"
                }, {
                    name: "United States",
                    abbreviation: "US"
                }, {
                    name: "Uruguay",
                    abbreviation: "UY"
                }, {
                    name: "Uzbekistan",
                    abbreviation: "UZ"
                }, {
                    name: "Vanuatu",
                    abbreviation: "VU"
                }, {
                    name: "Vatican City",
                    abbreviation: "VA"
                }, {
                    name: "Venezuela",
                    abbreviation: "VE"
                }, {
                    name: "Vietnam",
                    abbreviation: "VN"
                }, {
                    name: "Wallis & Futuna",
                    abbreviation: "WF"
                }, {
                    name: "Western Sahara",
                    abbreviation: "EH"
                }, {
                    name: "Yemen",
                    abbreviation: "YE"
                }, {
                    name: "Zambia",
                    abbreviation: "ZM"
                }, {
                    name: "Zimbabwe",
                    abbreviation: "ZW"
                }],
                counties: {
                    uk: [{
                        name: "Bath and North East Somerset"
                    }, {
                        name: "Bedford"
                    }, {
                        name: "Blackburn with Darwen"
                    }, {
                        name: "Blackpool"
                    }, {
                        name: "Bournemouth"
                    }, {
                        name: "Bracknell Forest"
                    }, {
                        name: "Brighton & Hove"
                    }, {
                        name: "Bristol"
                    }, {
                        name: "Buckinghamshire"
                    }, {
                        name: "Cambridgeshire"
                    }, {
                        name: "Central Bedfordshire"
                    }, {
                        name: "Cheshire East"
                    }, {
                        name: "Cheshire West and Chester"
                    }, {
                        name: "Cornwall"
                    }, {
                        name: "County Durham"
                    }, {
                        name: "Cumbria"
                    }, {
                        name: "Darlington"
                    }, {
                        name: "Derby"
                    }, {
                        name: "Derbyshire"
                    }, {
                        name: "Devon"
                    }, {
                        name: "Dorset"
                    }, {
                        name: "East Riding of Yorkshire"
                    }, {
                        name: "East Sussex"
                    }, {
                        name: "Essex"
                    }, {
                        name: "Gloucestershire"
                    }, {
                        name: "Greater London"
                    }, {
                        name: "Greater Manchester"
                    }, {
                        name: "Halton"
                    }, {
                        name: "Hampshire"
                    }, {
                        name: "Hartlepool"
                    }, {
                        name: "Herefordshire"
                    }, {
                        name: "Hertfordshire"
                    }, {
                        name: "Hull"
                    }, {
                        name: "Isle of Wight"
                    }, {
                        name: "Isles of Scilly"
                    }, {
                        name: "Kent"
                    }, {
                        name: "Lancashire"
                    }, {
                        name: "Leicester"
                    }, {
                        name: "Leicestershire"
                    }, {
                        name: "Lincolnshire"
                    }, {
                        name: "Luton"
                    }, {
                        name: "Medway"
                    }, {
                        name: "Merseyside"
                    }, {
                        name: "Middlesbrough"
                    }, {
                        name: "Milton Keynes"
                    }, {
                        name: "Norfolk"
                    }, {
                        name: "North East Lincolnshire"
                    }, {
                        name: "North Lincolnshire"
                    }, {
                        name: "North Somerset"
                    }, {
                        name: "North Yorkshire"
                    }, {
                        name: "Northamptonshire"
                    }, {
                        name: "Northumberland"
                    }, {
                        name: "Nottingham"
                    }, {
                        name: "Nottinghamshire"
                    }, {
                        name: "Oxfordshire"
                    }, {
                        name: "Peterborough"
                    }, {
                        name: "Plymouth"
                    }, {
                        name: "Poole"
                    }, {
                        name: "Portsmouth"
                    }, {
                        name: "Reading"
                    }, {
                        name: "Redcar and Cleveland"
                    }, {
                        name: "Rutland"
                    }, {
                        name: "Shropshire"
                    }, {
                        name: "Slough"
                    }, {
                        name: "Somerset"
                    }, {
                        name: "South Gloucestershire"
                    }, {
                        name: "South Yorkshire"
                    }, {
                        name: "Southampton"
                    }, {
                        name: "Southend-on-Sea"
                    }, {
                        name: "Staffordshire"
                    }, {
                        name: "Stockton-on-Tees"
                    }, {
                        name: "Stoke-on-Trent"
                    }, {
                        name: "Suffolk"
                    }, {
                        name: "Surrey"
                    }, {
                        name: "Swindon"
                    }, {
                        name: "Telford and Wrekin"
                    }, {
                        name: "Thurrock"
                    }, {
                        name: "Torbay"
                    }, {
                        name: "Tyne and Wear"
                    }, {
                        name: "Warrington"
                    }, {
                        name: "Warwickshire"
                    }, {
                        name: "West Berkshire"
                    }, {
                        name: "West Midlands"
                    }, {
                        name: "West Sussex"
                    }, {
                        name: "West Yorkshire"
                    }, {
                        name: "Wiltshire"
                    }, {
                        name: "Windsor and Maidenhead"
                    }, {
                        name: "Wokingham"
                    }, {
                        name: "Worcestershire"
                    }, {
                        name: "York"
                    }]
                },
                provinces: {
                    ca: [{
                        name: "Alberta",
                        abbreviation: "AB"
                    }, {
                        name: "British Columbia",
                        abbreviation: "BC"
                    }, {
                        name: "Manitoba",
                        abbreviation: "MB"
                    }, {
                        name: "New Brunswick",
                        abbreviation: "NB"
                    }, {
                        name: "Newfoundland and Labrador",
                        abbreviation: "NL"
                    }, {
                        name: "Nova Scotia",
                        abbreviation: "NS"
                    }, {
                        name: "Ontario",
                        abbreviation: "ON"
                    }, {
                        name: "Prince Edward Island",
                        abbreviation: "PE"
                    }, {
                        name: "Quebec",
                        abbreviation: "QC"
                    }, {
                        name: "Saskatchewan",
                        abbreviation: "SK"
                    }, {
                        name: "Northwest Territories",
                        abbreviation: "NT"
                    }, {
                        name: "Nunavut",
                        abbreviation: "NU"
                    }, {
                        name: "Yukon",
                        abbreviation: "YT"
                    }],
                    it: [{
                        name: "Agrigento",
                        abbreviation: "AG",
                        code: 84
                    }, {
                        name: "Alessandria",
                        abbreviation: "AL",
                        code: 6
                    }, {
                        name: "Ancona",
                        abbreviation: "AN",
                        code: 42
                    }, {
                        name: "Aosta",
                        abbreviation: "AO",
                        code: 7
                    }, {
                        name: "L'Aquila",
                        abbreviation: "AQ",
                        code: 66
                    }, {
                        name: "Arezzo",
                        abbreviation: "AR",
                        code: 51
                    }, {
                        name: "Ascoli-Piceno",
                        abbreviation: "AP",
                        code: 44
                    }, {
                        name: "Asti",
                        abbreviation: "AT",
                        code: 5
                    }, {
                        name: "Avellino",
                        abbreviation: "AV",
                        code: 64
                    }, {
                        name: "Bari",
                        abbreviation: "BA",
                        code: 72
                    }, {
                        name: "Barletta-Andria-Trani",
                        abbreviation: "BT",
                        code: 72
                    }, {
                        name: "Belluno",
                        abbreviation: "BL",
                        code: 25
                    }, {
                        name: "Benevento",
                        abbreviation: "BN",
                        code: 62
                    }, {
                        name: "Bergamo",
                        abbreviation: "BG",
                        code: 16
                    }, {
                        name: "Biella",
                        abbreviation: "BI",
                        code: 96
                    }, {
                        name: "Bologna",
                        abbreviation: "BO",
                        code: 37
                    }, {
                        name: "Bolzano",
                        abbreviation: "BZ",
                        code: 21
                    }, {
                        name: "Brescia",
                        abbreviation: "BS",
                        code: 17
                    }, {
                        name: "Brindisi",
                        abbreviation: "BR",
                        code: 74
                    }, {
                        name: "Cagliari",
                        abbreviation: "CA",
                        code: 92
                    }, {
                        name: "Caltanissetta",
                        abbreviation: "CL",
                        code: 85
                    }, {
                        name: "Campobasso",
                        abbreviation: "CB",
                        code: 70
                    }, {
                        name: "Carbonia Iglesias",
                        abbreviation: "CI",
                        code: 70
                    }, {
                        name: "Caserta",
                        abbreviation: "CE",
                        code: 61
                    }, {
                        name: "Catania",
                        abbreviation: "CT",
                        code: 87
                    }, {
                        name: "Catanzaro",
                        abbreviation: "CZ",
                        code: 79
                    }, {
                        name: "Chieti",
                        abbreviation: "CH",
                        code: 69
                    }, {
                        name: "Como",
                        abbreviation: "CO",
                        code: 13
                    }, {
                        name: "Cosenza",
                        abbreviation: "CS",
                        code: 78
                    }, {
                        name: "Cremona",
                        abbreviation: "CR",
                        code: 19
                    }, {
                        name: "Crotone",
                        abbreviation: "KR",
                        code: 101
                    }, {
                        name: "Cuneo",
                        abbreviation: "CN",
                        code: 4
                    }, {
                        name: "Enna",
                        abbreviation: "EN",
                        code: 86
                    }, {
                        name: "Fermo",
                        abbreviation: "FM",
                        code: 86
                    }, {
                        name: "Ferrara",
                        abbreviation: "FE",
                        code: 38
                    }, {
                        name: "Firenze",
                        abbreviation: "FI",
                        code: 48
                    }, {
                        name: "Foggia",
                        abbreviation: "FG",
                        code: 71
                    }, {
                        name: "Forli-Cesena",
                        abbreviation: "FC",
                        code: 71
                    }, {
                        name: "Frosinone",
                        abbreviation: "FR",
                        code: 60
                    }, {
                        name: "Genova",
                        abbreviation: "GE",
                        code: 10
                    }, {
                        name: "Gorizia",
                        abbreviation: "GO",
                        code: 31
                    }, {
                        name: "Grosseto",
                        abbreviation: "GR",
                        code: 53
                    }, {
                        name: "Imperia",
                        abbreviation: "IM",
                        code: 8
                    }, {
                        name: "Isernia",
                        abbreviation: "IS",
                        code: 94
                    }, {
                        name: "La-Spezia",
                        abbreviation: "SP",
                        code: 66
                    }, {
                        name: "Latina",
                        abbreviation: "LT",
                        code: 59
                    }, {
                        name: "Lecce",
                        abbreviation: "LE",
                        code: 75
                    }, {
                        name: "Lecco",
                        abbreviation: "LC",
                        code: 97
                    }, {
                        name: "Livorno",
                        abbreviation: "LI",
                        code: 49
                    }, {
                        name: "Lodi",
                        abbreviation: "LO",
                        code: 98
                    }, {
                        name: "Lucca",
                        abbreviation: "LU",
                        code: 46
                    }, {
                        name: "Macerata",
                        abbreviation: "MC",
                        code: 43
                    }, {
                        name: "Mantova",
                        abbreviation: "MN",
                        code: 20
                    }, {
                        name: "Massa-Carrara",
                        abbreviation: "MS",
                        code: 45
                    }, {
                        name: "Matera",
                        abbreviation: "MT",
                        code: 77
                    }, {
                        name: "Medio Campidano",
                        abbreviation: "VS",
                        code: 77
                    }, {
                        name: "Messina",
                        abbreviation: "ME",
                        code: 83
                    }, {
                        name: "Milano",
                        abbreviation: "MI",
                        code: 15
                    }, {
                        name: "Modena",
                        abbreviation: "MO",
                        code: 36
                    }, {
                        name: "Monza-Brianza",
                        abbreviation: "MB",
                        code: 36
                    }, {
                        name: "Napoli",
                        abbreviation: "NA",
                        code: 63
                    }, {
                        name: "Novara",
                        abbreviation: "NO",
                        code: 3
                    }, {
                        name: "Nuoro",
                        abbreviation: "NU",
                        code: 91
                    }, {
                        name: "Ogliastra",
                        abbreviation: "OG",
                        code: 91
                    }, {
                        name: "Olbia Tempio",
                        abbreviation: "OT",
                        code: 91
                    }, {
                        name: "Oristano",
                        abbreviation: "OR",
                        code: 95
                    }, {
                        name: "Padova",
                        abbreviation: "PD",
                        code: 28
                    }, {
                        name: "Palermo",
                        abbreviation: "PA",
                        code: 82
                    }, {
                        name: "Parma",
                        abbreviation: "PR",
                        code: 34
                    }, {
                        name: "Pavia",
                        abbreviation: "PV",
                        code: 18
                    }, {
                        name: "Perugia",
                        abbreviation: "PG",
                        code: 54
                    }, {
                        name: "Pesaro-Urbino",
                        abbreviation: "PU",
                        code: 41
                    }, {
                        name: "Pescara",
                        abbreviation: "PE",
                        code: 68
                    }, {
                        name: "Piacenza",
                        abbreviation: "PC",
                        code: 33
                    }, {
                        name: "Pisa",
                        abbreviation: "PI",
                        code: 50
                    }, {
                        name: "Pistoia",
                        abbreviation: "PT",
                        code: 47
                    }, {
                        name: "Pordenone",
                        abbreviation: "PN",
                        code: 93
                    }, {
                        name: "Potenza",
                        abbreviation: "PZ",
                        code: 76
                    }, {
                        name: "Prato",
                        abbreviation: "PO",
                        code: 100
                    }, {
                        name: "Ragusa",
                        abbreviation: "RG",
                        code: 88
                    }, {
                        name: "Ravenna",
                        abbreviation: "RA",
                        code: 39
                    }, {
                        name: "Reggio-Calabria",
                        abbreviation: "RC",
                        code: 35
                    }, {
                        name: "Reggio-Emilia",
                        abbreviation: "RE",
                        code: 35
                    }, {
                        name: "Rieti",
                        abbreviation: "RI",
                        code: 57
                    }, {
                        name: "Rimini",
                        abbreviation: "RN",
                        code: 99
                    }, {
                        name: "Roma",
                        abbreviation: "Roma",
                        code: 58
                    }, {
                        name: "Rovigo",
                        abbreviation: "RO",
                        code: 29
                    }, {
                        name: "Salerno",
                        abbreviation: "SA",
                        code: 65
                    }, {
                        name: "Sassari",
                        abbreviation: "SS",
                        code: 90
                    }, {
                        name: "Savona",
                        abbreviation: "SV",
                        code: 9
                    }, {
                        name: "Siena",
                        abbreviation: "SI",
                        code: 52
                    }, {
                        name: "Siracusa",
                        abbreviation: "SR",
                        code: 89
                    }, {
                        name: "Sondrio",
                        abbreviation: "SO",
                        code: 14
                    }, {
                        name: "Taranto",
                        abbreviation: "TA",
                        code: 73
                    }, {
                        name: "Teramo",
                        abbreviation: "TE",
                        code: 67
                    }, {
                        name: "Terni",
                        abbreviation: "TR",
                        code: 55
                    }, {
                        name: "Torino",
                        abbreviation: "TO",
                        code: 1
                    }, {
                        name: "Trapani",
                        abbreviation: "TP",
                        code: 81
                    }, {
                        name: "Trento",
                        abbreviation: "TN",
                        code: 22
                    }, {
                        name: "Treviso",
                        abbreviation: "TV",
                        code: 26
                    }, {
                        name: "Trieste",
                        abbreviation: "TS",
                        code: 32
                    }, {
                        name: "Udine",
                        abbreviation: "UD",
                        code: 30
                    }, {
                        name: "Varese",
                        abbreviation: "VA",
                        code: 12
                    }, {
                        name: "Venezia",
                        abbreviation: "VE",
                        code: 27
                    }, {
                        name: "Verbania",
                        abbreviation: "VB",
                        code: 27
                    }, {
                        name: "Vercelli",
                        abbreviation: "VC",
                        code: 2
                    }, {
                        name: "Verona",
                        abbreviation: "VR",
                        code: 23
                    }, {
                        name: "Vibo-Valentia",
                        abbreviation: "VV",
                        code: 102
                    }, {
                        name: "Vicenza",
                        abbreviation: "VI",
                        code: 24
                    }, {
                        name: "Viterbo",
                        abbreviation: "VT",
                        code: 56
                    }]
                },
                nationalities: [{
                    name: "Afghan"
                }, {
                    name: "Albanian"
                }, {
                    name: "Algerian"
                }, {
                    name: "American"
                }, {
                    name: "Andorran"
                }, {
                    name: "Angolan"
                }, {
                    name: "Antiguans"
                }, {
                    name: "Argentinean"
                }, {
                    name: "Armenian"
                }, {
                    name: "Australian"
                }, {
                    name: "Austrian"
                }, {
                    name: "Azerbaijani"
                }, {
                    name: "Bahami"
                }, {
                    name: "Bahraini"
                }, {
                    name: "Bangladeshi"
                }, {
                    name: "Barbadian"
                }, {
                    name: "Barbudans"
                }, {
                    name: "Batswana"
                }, {
                    name: "Belarusian"
                }, {
                    name: "Belgian"
                }, {
                    name: "Belizean"
                }, {
                    name: "Beninese"
                }, {
                    name: "Bhutanese"
                }, {
                    name: "Bolivian"
                }, {
                    name: "Bosnian"
                }, {
                    name: "Brazilian"
                }, {
                    name: "British"
                }, {
                    name: "Bruneian"
                }, {
                    name: "Bulgarian"
                }, {
                    name: "Burkinabe"
                }, {
                    name: "Burmese"
                }, {
                    name: "Burundian"
                }, {
                    name: "Cambodian"
                }, {
                    name: "Cameroonian"
                }, {
                    name: "Canadian"
                }, {
                    name: "Cape Verdean"
                }, {
                    name: "Central African"
                }, {
                    name: "Chadian"
                }, {
                    name: "Chilean"
                }, {
                    name: "Chinese"
                }, {
                    name: "Colombian"
                }, {
                    name: "Comoran"
                }, {
                    name: "Congolese"
                }, {
                    name: "Costa Rican"
                }, {
                    name: "Croatian"
                }, {
                    name: "Cuban"
                }, {
                    name: "Cypriot"
                }, {
                    name: "Czech"
                }, {
                    name: "Danish"
                }, {
                    name: "Djibouti"
                }, {
                    name: "Dominican"
                }, {
                    name: "Dutch"
                }, {
                    name: "East Timorese"
                }, {
                    name: "Ecuadorean"
                }, {
                    name: "Egyptian"
                }, {
                    name: "Emirian"
                }, {
                    name: "Equatorial Guinean"
                }, {
                    name: "Eritrean"
                }, {
                    name: "Estonian"
                }, {
                    name: "Ethiopian"
                }, {
                    name: "Fijian"
                }, {
                    name: "Filipino"
                }, {
                    name: "Finnish"
                }, {
                    name: "French"
                }, {
                    name: "Gabonese"
                }, {
                    name: "Gambian"
                }, {
                    name: "Georgian"
                }, {
                    name: "German"
                }, {
                    name: "Ghanaian"
                }, {
                    name: "Greek"
                }, {
                    name: "Grenadian"
                }, {
                    name: "Guatemalan"
                }, {
                    name: "Guinea-Bissauan"
                }, {
                    name: "Guinean"
                }, {
                    name: "Guyanese"
                }, {
                    name: "Haitian"
                }, {
                    name: "Herzegovinian"
                }, {
                    name: "Honduran"
                }, {
                    name: "Hungarian"
                }, {
                    name: "I-Kiribati"
                }, {
                    name: "Icelander"
                }, {
                    name: "Indian"
                }, {
                    name: "Indonesian"
                }, {
                    name: "Iranian"
                }, {
                    name: "Iraqi"
                }, {
                    name: "Irish"
                }, {
                    name: "Israeli"
                }, {
                    name: "Italian"
                }, {
                    name: "Ivorian"
                }, {
                    name: "Jamaican"
                }, {
                    name: "Japanese"
                }, {
                    name: "Jordanian"
                }, {
                    name: "Kazakhstani"
                }, {
                    name: "Kenyan"
                }, {
                    name: "Kittian and Nevisian"
                }, {
                    name: "Kuwaiti"
                }, {
                    name: "Kyrgyz"
                }, {
                    name: "Laotian"
                }, {
                    name: "Latvian"
                }, {
                    name: "Lebanese"
                }, {
                    name: "Liberian"
                }, {
                    name: "Libyan"
                }, {
                    name: "Liechtensteiner"
                }, {
                    name: "Lithuanian"
                }, {
                    name: "Luxembourger"
                }, {
                    name: "Macedonian"
                }, {
                    name: "Malagasy"
                }, {
                    name: "Malawian"
                }, {
                    name: "Malaysian"
                }, {
                    name: "Maldivan"
                }, {
                    name: "Malian"
                }, {
                    name: "Maltese"
                }, {
                    name: "Marshallese"
                }, {
                    name: "Mauritanian"
                }, {
                    name: "Mauritian"
                }, {
                    name: "Mexican"
                }, {
                    name: "Micronesian"
                }, {
                    name: "Moldovan"
                }, {
                    name: "Monacan"
                }, {
                    name: "Mongolian"
                }, {
                    name: "Moroccan"
                }, {
                    name: "Mosotho"
                }, {
                    name: "Motswana"
                }, {
                    name: "Mozambican"
                }, {
                    name: "Namibian"
                }, {
                    name: "Nauruan"
                }, {
                    name: "Nepalese"
                }, {
                    name: "New Zealander"
                }, {
                    name: "Nicaraguan"
                }, {
                    name: "Nigerian"
                }, {
                    name: "Nigerien"
                }, {
                    name: "North Korean"
                }, {
                    name: "Northern Irish"
                }, {
                    name: "Norwegian"
                }, {
                    name: "Omani"
                }, {
                    name: "Pakistani"
                }, {
                    name: "Palauan"
                }, {
                    name: "Panamanian"
                }, {
                    name: "Papua New Guinean"
                }, {
                    name: "Paraguayan"
                }, {
                    name: "Peruvian"
                }, {
                    name: "Polish"
                }, {
                    name: "Portuguese"
                }, {
                    name: "Qatari"
                }, {
                    name: "Romani"
                }, {
                    name: "Russian"
                }, {
                    name: "Rwandan"
                }, {
                    name: "Saint Lucian"
                }, {
                    name: "Salvadoran"
                }, {
                    name: "Samoan"
                }, {
                    name: "San Marinese"
                }, {
                    name: "Sao Tomean"
                }, {
                    name: "Saudi"
                }, {
                    name: "Scottish"
                }, {
                    name: "Senegalese"
                }, {
                    name: "Serbian"
                }, {
                    name: "Seychellois"
                }, {
                    name: "Sierra Leonean"
                }, {
                    name: "Singaporean"
                }, {
                    name: "Slovakian"
                }, {
                    name: "Slovenian"
                }, {
                    name: "Solomon Islander"
                }, {
                    name: "Somali"
                }, {
                    name: "South African"
                }, {
                    name: "South Korean"
                }, {
                    name: "Spanish"
                }, {
                    name: "Sri Lankan"
                }, {
                    name: "Sudanese"
                }, {
                    name: "Surinamer"
                }, {
                    name: "Swazi"
                }, {
                    name: "Swedish"
                }, {
                    name: "Swiss"
                }, {
                    name: "Syrian"
                }, {
                    name: "Taiwanese"
                }, {
                    name: "Tajik"
                }, {
                    name: "Tanzanian"
                }, {
                    name: "Thai"
                }, {
                    name: "Togolese"
                }, {
                    name: "Tongan"
                }, {
                    name: "Trinidadian or Tobagonian"
                }, {
                    name: "Tunisian"
                }, {
                    name: "Turkish"
                }, {
                    name: "Tuvaluan"
                }, {
                    name: "Ugandan"
                }, {
                    name: "Ukrainian"
                }, {
                    name: "Uruguaya"
                }, {
                    name: "Uzbekistani"
                }, {
                    name: "Venezuela"
                }, {
                    name: "Vietnamese"
                }, {
                    name: "Wels"
                }, {
                    name: "Yemenit"
                }, {
                    name: "Zambia"
                }, {
                    name: "Zimbabwe"
                }],
                us_states_and_dc: [{
                    name: "Alabama",
                    abbreviation: "AL"
                }, {
                    name: "Alaska",
                    abbreviation: "AK"
                }, {
                    name: "Arizona",
                    abbreviation: "AZ"
                }, {
                    name: "Arkansas",
                    abbreviation: "AR"
                }, {
                    name: "California",
                    abbreviation: "CA"
                }, {
                    name: "Colorado",
                    abbreviation: "CO"
                }, {
                    name: "Connecticut",
                    abbreviation: "CT"
                }, {
                    name: "Delaware",
                    abbreviation: "DE"
                }, {
                    name: "District of Columbia",
                    abbreviation: "DC"
                }, {
                    name: "Florida",
                    abbreviation: "FL"
                }, {
                    name: "Georgia",
                    abbreviation: "GA"
                }, {
                    name: "Hawaii",
                    abbreviation: "HI"
                }, {
                    name: "Idaho",
                    abbreviation: "ID"
                }, {
                    name: "Illinois",
                    abbreviation: "IL"
                }, {
                    name: "Indiana",
                    abbreviation: "IN"
                }, {
                    name: "Iowa",
                    abbreviation: "IA"
                }, {
                    name: "Kansas",
                    abbreviation: "KS"
                }, {
                    name: "Kentucky",
                    abbreviation: "KY"
                }, {
                    name: "Louisiana",
                    abbreviation: "LA"
                }, {
                    name: "Maine",
                    abbreviation: "ME"
                }, {
                    name: "Maryland",
                    abbreviation: "MD"
                }, {
                    name: "Massachusetts",
                    abbreviation: "MA"
                }, {
                    name: "Michigan",
                    abbreviation: "MI"
                }, {
                    name: "Minnesota",
                    abbreviation: "MN"
                }, {
                    name: "Mississippi",
                    abbreviation: "MS"
                }, {
                    name: "Missouri",
                    abbreviation: "MO"
                }, {
                    name: "Montana",
                    abbreviation: "MT"
                }, {
                    name: "Nebraska",
                    abbreviation: "NE"
                }, {
                    name: "Nevada",
                    abbreviation: "NV"
                }, {
                    name: "New Hampshire",
                    abbreviation: "NH"
                }, {
                    name: "New Jersey",
                    abbreviation: "NJ"
                }, {
                    name: "New Mexico",
                    abbreviation: "NM"
                }, {
                    name: "New York",
                    abbreviation: "NY"
                }, {
                    name: "North Carolina",
                    abbreviation: "NC"
                }, {
                    name: "North Dakota",
                    abbreviation: "ND"
                }, {
                    name: "Ohio",
                    abbreviation: "OH"
                }, {
                    name: "Oklahoma",
                    abbreviation: "OK"
                }, {
                    name: "Oregon",
                    abbreviation: "OR"
                }, {
                    name: "Pennsylvania",
                    abbreviation: "PA"
                }, {
                    name: "Rhode Island",
                    abbreviation: "RI"
                }, {
                    name: "South Carolina",
                    abbreviation: "SC"
                }, {
                    name: "South Dakota",
                    abbreviation: "SD"
                }, {
                    name: "Tennessee",
                    abbreviation: "TN"
                }, {
                    name: "Texas",
                    abbreviation: "TX"
                }, {
                    name: "Utah",
                    abbreviation: "UT"
                }, {
                    name: "Vermont",
                    abbreviation: "VT"
                }, {
                    name: "Virginia",
                    abbreviation: "VA"
                }, {
                    name: "Washington",
                    abbreviation: "WA"
                }, {
                    name: "West Virginia",
                    abbreviation: "WV"
                }, {
                    name: "Wisconsin",
                    abbreviation: "WI"
                }, {
                    name: "Wyoming",
                    abbreviation: "WY"
                }],
                territories: [{
                    name: "American Samoa",
                    abbreviation: "AS"
                }, {
                    name: "Federated States of Micronesia",
                    abbreviation: "FM"
                }, {
                    name: "Guam",
                    abbreviation: "GU"
                }, {
                    name: "Marshall Islands",
                    abbreviation: "MH"
                }, {
                    name: "Northern Mariana Islands",
                    abbreviation: "MP"
                }, {
                    name: "Puerto Rico",
                    abbreviation: "PR"
                }, {
                    name: "Virgin Islands, U.S.",
                    abbreviation: "VI"
                }],
                armed_forces: [{
                    name: "Armed Forces Europe",
                    abbreviation: "AE"
                }, {
                    name: "Armed Forces Pacific",
                    abbreviation: "AP"
                }, {
                    name: "Armed Forces the Americas",
                    abbreviation: "AA"
                }],
                country_regions: {
                    it: [{
                        name: "Valle d'Aosta",
                        abbreviation: "VDA"
                    }, {
                        name: "Piemonte",
                        abbreviation: "PIE"
                    }, {
                        name: "Lombardia",
                        abbreviation: "LOM"
                    }, {
                        name: "Veneto",
                        abbreviation: "VEN"
                    }, {
                        name: "Trentino Alto Adige",
                        abbreviation: "TAA"
                    }, {
                        name: "Friuli Venezia Giulia",
                        abbreviation: "FVG"
                    }, {
                        name: "Liguria",
                        abbreviation: "LIG"
                    }, {
                        name: "Emilia Romagna",
                        abbreviation: "EMR"
                    }, {
                        name: "Toscana",
                        abbreviation: "TOS"
                    }, {
                        name: "Umbria",
                        abbreviation: "UMB"
                    }, {
                        name: "Marche",
                        abbreviation: "MAR"
                    }, {
                        name: "Abruzzo",
                        abbreviation: "ABR"
                    }, {
                        name: "Lazio",
                        abbreviation: "LAZ"
                    }, {
                        name: "Campania",
                        abbreviation: "CAM"
                    }, {
                        name: "Puglia",
                        abbreviation: "PUG"
                    }, {
                        name: "Basilicata",
                        abbreviation: "BAS"
                    }, {
                        name: "Molise",
                        abbreviation: "MOL"
                    }, {
                        name: "Calabria",
                        abbreviation: "CAL"
                    }, {
                        name: "Sicilia",
                        abbreviation: "SIC"
                    }, {
                        name: "Sardegna",
                        abbreviation: "SAR"
                    }]
                },
                street_suffixes: {
                    us: [{
                        name: "Avenue",
                        abbreviation: "Ave"
                    }, {
                        name: "Boulevard",
                        abbreviation: "Blvd"
                    }, {
                        name: "Center",
                        abbreviation: "Ctr"
                    }, {
                        name: "Circle",
                        abbreviation: "Cir"
                    }, {
                        name: "Court",
                        abbreviation: "Ct"
                    }, {
                        name: "Drive",
                        abbreviation: "Dr"
                    }, {
                        name: "Extension",
                        abbreviation: "Ext"
                    }, {
                        name: "Glen",
                        abbreviation: "Gln"
                    }, {
                        name: "Grove",
                        abbreviation: "Grv"
                    }, {
                        name: "Heights",
                        abbreviation: "Hts"
                    }, {
                        name: "Highway",
                        abbreviation: "Hwy"
                    }, {
                        name: "Junction",
                        abbreviation: "Jct"
                    }, {
                        name: "Key",
                        abbreviation: "Key"
                    }, {
                        name: "Lane",
                        abbreviation: "Ln"
                    }, {
                        name: "Loop",
                        abbreviation: "Loop"
                    }, {
                        name: "Manor",
                        abbreviation: "Mnr"
                    }, {
                        name: "Mill",
                        abbreviation: "Mill"
                    }, {
                        name: "Park",
                        abbreviation: "Park"
                    }, {
                        name: "Parkway",
                        abbreviation: "Pkwy"
                    }, {
                        name: "Pass",
                        abbreviation: "Pass"
                    }, {
                        name: "Path",
                        abbreviation: "Path"
                    }, {
                        name: "Pike",
                        abbreviation: "Pike"
                    }, {
                        name: "Place",
                        abbreviation: "Pl"
                    }, {
                        name: "Plaza",
                        abbreviation: "Plz"
                    }, {
                        name: "Point",
                        abbreviation: "Pt"
                    }, {
                        name: "Ridge",
                        abbreviation: "Rdg"
                    }, {
                        name: "River",
                        abbreviation: "Riv"
                    }, {
                        name: "Road",
                        abbreviation: "Rd"
                    }, {
                        name: "Square",
                        abbreviation: "Sq"
                    }, {
                        name: "Street",
                        abbreviation: "St"
                    }, {
                        name: "Terrace",
                        abbreviation: "Ter"
                    }, {
                        name: "Trail",
                        abbreviation: "Trl"
                    }, {
                        name: "Turnpike",
                        abbreviation: "Tpke"
                    }, {
                        name: "View",
                        abbreviation: "Vw"
                    }, {
                        name: "Way",
                        abbreviation: "Way"
                    }],
                    it: [{
                        name: "Accesso",
                        abbreviation: "Acc."
                    }, {
                        name: "Alzaia",
                        abbreviation: "Alz."
                    }, {
                        name: "Arco",
                        abbreviation: "Arco"
                    }, {
                        name: "Archivolto",
                        abbreviation: "Acv."
                    }, {
                        name: "Arena",
                        abbreviation: "Arena"
                    }, {
                        name: "Argine",
                        abbreviation: "Argine"
                    }, {
                        name: "Bacino",
                        abbreviation: "Bacino"
                    }, {
                        name: "Banchi",
                        abbreviation: "Banchi"
                    }, {
                        name: "Banchina",
                        abbreviation: "Ban."
                    }, {
                        name: "Bastioni",
                        abbreviation: "Bas."
                    }, {
                        name: "Belvedere",
                        abbreviation: "Belv."
                    }, {
                        name: "Borgata",
                        abbreviation: "B.ta"
                    }, {
                        name: "Borgo",
                        abbreviation: "B.go"
                    }, {
                        name: "Calata",
                        abbreviation: "Cal."
                    }, {
                        name: "Calle",
                        abbreviation: "Calle"
                    }, {
                        name: "Campiello",
                        abbreviation: "Cam."
                    }, {
                        name: "Campo",
                        abbreviation: "Cam."
                    }, {
                        name: "Canale",
                        abbreviation: "Can."
                    }, {
                        name: "Carraia",
                        abbreviation: "Carr."
                    }, {
                        name: "Cascina",
                        abbreviation: "Cascina"
                    }, {
                        name: "Case sparse",
                        abbreviation: "c.s."
                    }, {
                        name: "Cavalcavia",
                        abbreviation: "Cv."
                    }, {
                        name: "Circonvallazione",
                        abbreviation: "Cv."
                    }, {
                        name: "Complanare",
                        abbreviation: "C.re"
                    }, {
                        name: "Contrada",
                        abbreviation: "C.da"
                    }, {
                        name: "Corso",
                        abbreviation: "C.so"
                    }, {
                        name: "Corte",
                        abbreviation: "C.te"
                    }, {
                        name: "Cortile",
                        abbreviation: "C.le"
                    }, {
                        name: "Diramazione",
                        abbreviation: "Dir."
                    }, {
                        name: "Fondaco",
                        abbreviation: "F.co"
                    }, {
                        name: "Fondamenta",
                        abbreviation: "F.ta"
                    }, {
                        name: "Fondo",
                        abbreviation: "F.do"
                    }, {
                        name: "Frazione",
                        abbreviation: "Fr."
                    }, {
                        name: "Isola",
                        abbreviation: "Is."
                    }, {
                        name: "Largo",
                        abbreviation: "L.go"
                    }, {
                        name: "Litoranea",
                        abbreviation: "Lit."
                    }, {
                        name: "Lungolago",
                        abbreviation: "L.go lago"
                    }, {
                        name: "Lungo Po",
                        abbreviation: "l.go Po"
                    }, {
                        name: "Molo",
                        abbreviation: "Molo"
                    }, {
                        name: "Mura",
                        abbreviation: "Mura"
                    }, {
                        name: "Passaggio privato",
                        abbreviation: "pass. priv."
                    }, {
                        name: "Passeggiata",
                        abbreviation: "Pass."
                    }, {
                        name: "Piazza",
                        abbreviation: "P.zza"
                    }, {
                        name: "Piazzale",
                        abbreviation: "P.le"
                    }, {
                        name: "Ponte",
                        abbreviation: "P.te"
                    }, {
                        name: "Portico",
                        abbreviation: "P.co"
                    }, {
                        name: "Rampa",
                        abbreviation: "Rampa"
                    }, {
                        name: "Regione",
                        abbreviation: "Reg."
                    }, {
                        name: "Rione",
                        abbreviation: "R.ne"
                    }, {
                        name: "Rio",
                        abbreviation: "Rio"
                    }, {
                        name: "Ripa",
                        abbreviation: "Ripa"
                    }, {
                        name: "Riva",
                        abbreviation: "Riva"
                    }, {
                        name: "Rondò",
                        abbreviation: "Rondò"
                    }, {
                        name: "Rotonda",
                        abbreviation: "Rot."
                    }, {
                        name: "Sagrato",
                        abbreviation: "Sagr."
                    }, {
                        name: "Salita",
                        abbreviation: "Sal."
                    }, {
                        name: "Scalinata",
                        abbreviation: "Scal."
                    }, {
                        name: "Scalone",
                        abbreviation: "Scal."
                    }, {
                        name: "Slargo",
                        abbreviation: "Sl."
                    }, {
                        name: "Sottoportico",
                        abbreviation: "Sott."
                    }, {
                        name: "Strada",
                        abbreviation: "Str."
                    }, {
                        name: "Stradale",
                        abbreviation: "Str.le"
                    }, {
                        name: "Strettoia",
                        abbreviation: "Strett."
                    }, {
                        name: "Traversa",
                        abbreviation: "Trav."
                    }, {
                        name: "Via",
                        abbreviation: "V."
                    }, {
                        name: "Viale",
                        abbreviation: "V.le"
                    }, {
                        name: "Vicinale",
                        abbreviation: "Vic.le"
                    }, {
                        name: "Vicolo",
                        abbreviation: "Vic."
                    }]
                },
                months: [{
                    name: "January",
                    short_name: "Jan",
                    numeric: "01",
                    days: 31
                }, {
                    name: "February",
                    short_name: "Feb",
                    numeric: "02",
                    days: 28
                }, {
                    name: "March",
                    short_name: "Mar",
                    numeric: "03",
                    days: 31
                }, {
                    name: "April",
                    short_name: "Apr",
                    numeric: "04",
                    days: 30
                }, {
                    name: "May",
                    short_name: "May",
                    numeric: "05",
                    days: 31
                }, {
                    name: "June",
                    short_name: "Jun",
                    numeric: "06",
                    days: 30
                }, {
                    name: "July",
                    short_name: "Jul",
                    numeric: "07",
                    days: 31
                }, {
                    name: "August",
                    short_name: "Aug",
                    numeric: "08",
                    days: 31
                }, {
                    name: "September",
                    short_name: "Sep",
                    numeric: "09",
                    days: 30
                }, {
                    name: "October",
                    short_name: "Oct",
                    numeric: "10",
                    days: 31
                }, {
                    name: "November",
                    short_name: "Nov",
                    numeric: "11",
                    days: 30
                }, {
                    name: "December",
                    short_name: "Dec",
                    numeric: "12",
                    days: 31
                }],
                cc_types: [{
                    name: "American Express",
                    short_name: "amex",
                    prefix: "34",
                    length: 15
                }, {
                    name: "Bankcard",
                    short_name: "bankcard",
                    prefix: "5610",
                    length: 16
                }, {
                    name: "China UnionPay",
                    short_name: "chinaunion",
                    prefix: "62",
                    length: 16
                }, {
                    name: "Diners Club Carte Blanche",
                    short_name: "dccarte",
                    prefix: "300",
                    length: 14
                }, {
                    name: "Diners Club enRoute",
                    short_name: "dcenroute",
                    prefix: "2014",
                    length: 15
                }, {
                    name: "Diners Club International",
                    short_name: "dcintl",
                    prefix: "36",
                    length: 14
                }, {
                    name: "Diners Club United States & Canada",
                    short_name: "dcusc",
                    prefix: "54",
                    length: 16
                }, {
                    name: "Discover Card",
                    short_name: "discover",
                    prefix: "6011",
                    length: 16
                }, {
                    name: "InstaPayment",
                    short_name: "instapay",
                    prefix: "637",
                    length: 16
                }, {
                    name: "JCB",
                    short_name: "jcb",
                    prefix: "3528",
                    length: 16
                }, {
                    name: "Laser",
                    short_name: "laser",
                    prefix: "6304",
                    length: 16
                }, {
                    name: "Maestro",
                    short_name: "maestro",
                    prefix: "5018",
                    length: 16
                }, {
                    name: "Mastercard",
                    short_name: "mc",
                    prefix: "51",
                    length: 16
                }, {
                    name: "Solo",
                    short_name: "solo",
                    prefix: "6334",
                    length: 16
                }, {
                    name: "Switch",
                    short_name: "switch",
                    prefix: "4903",
                    length: 16
                }, {
                    name: "Visa",
                    short_name: "visa",
                    prefix: "4",
                    length: 16
                }, {
                    name: "Visa Electron",
                    short_name: "electron",
                    prefix: "4026",
                    length: 16
                }],
                currency_types: [{
                    code: "AED",
                    name: "United Arab Emirates Dirham"
                }, {
                    code: "AFN",
                    name: "Afghanistan Afghani"
                }, {
                    code: "ALL",
                    name: "Albania Lek"
                }, {
                    code: "AMD",
                    name: "Armenia Dram"
                }, {
                    code: "ANG",
                    name: "Netherlands Antilles Guilder"
                }, {
                    code: "AOA",
                    name: "Angola Kwanza"
                }, {
                    code: "ARS",
                    name: "Argentina Peso"
                }, {
                    code: "AUD",
                    name: "Australia Dollar"
                }, {
                    code: "AWG",
                    name: "Aruba Guilder"
                }, {
                    code: "AZN",
                    name: "Azerbaijan New Manat"
                }, {
                    code: "BAM",
                    name: "Bosnia and Herzegovina Convertible Marka"
                }, {
                    code: "BBD",
                    name: "Barbados Dollar"
                }, {
                    code: "BDT",
                    name: "Bangladesh Taka"
                }, {
                    code: "BGN",
                    name: "Bulgaria Lev"
                }, {
                    code: "BHD",
                    name: "Bahrain Dinar"
                }, {
                    code: "BIF",
                    name: "Burundi Franc"
                }, {
                    code: "BMD",
                    name: "Bermuda Dollar"
                }, {
                    code: "BND",
                    name: "Brunei Darussalam Dollar"
                }, {
                    code: "BOB",
                    name: "Bolivia Boliviano"
                }, {
                    code: "BRL",
                    name: "Brazil Real"
                }, {
                    code: "BSD",
                    name: "Bahamas Dollar"
                }, {
                    code: "BTN",
                    name: "Bhutan Ngultrum"
                }, {
                    code: "BWP",
                    name: "Botswana Pula"
                }, {
                    code: "BYR",
                    name: "Belarus Ruble"
                }, {
                    code: "BZD",
                    name: "Belize Dollar"
                }, {
                    code: "CAD",
                    name: "Canada Dollar"
                }, {
                    code: "CDF",
                    name: "Congo/Kinshasa Franc"
                }, {
                    code: "CHF",
                    name: "Switzerland Franc"
                }, {
                    code: "CLP",
                    name: "Chile Peso"
                }, {
                    code: "CNY",
                    name: "China Yuan Renminbi"
                }, {
                    code: "COP",
                    name: "Colombia Peso"
                }, {
                    code: "CRC",
                    name: "Costa Rica Colon"
                }, {
                    code: "CUC",
                    name: "Cuba Convertible Peso"
                }, {
                    code: "CUP",
                    name: "Cuba Peso"
                }, {
                    code: "CVE",
                    name: "Cape Verde Escudo"
                }, {
                    code: "CZK",
                    name: "Czech Republic Koruna"
                }, {
                    code: "DJF",
                    name: "Djibouti Franc"
                }, {
                    code: "DKK",
                    name: "Denmark Krone"
                }, {
                    code: "DOP",
                    name: "Dominican Republic Peso"
                }, {
                    code: "DZD",
                    name: "Algeria Dinar"
                }, {
                    code: "EGP",
                    name: "Egypt Pound"
                }, {
                    code: "ERN",
                    name: "Eritrea Nakfa"
                }, {
                    code: "ETB",
                    name: "Ethiopia Birr"
                }, {
                    code: "EUR",
                    name: "Euro Member Countries"
                }, {
                    code: "FJD",
                    name: "Fiji Dollar"
                }, {
                    code: "FKP",
                    name: "Falkland Islands (Malvinas) Pound"
                }, {
                    code: "GBP",
                    name: "United Kingdom Pound"
                }, {
                    code: "GEL",
                    name: "Georgia Lari"
                }, {
                    code: "GGP",
                    name: "Guernsey Pound"
                }, {
                    code: "GHS",
                    name: "Ghana Cedi"
                }, {
                    code: "GIP",
                    name: "Gibraltar Pound"
                }, {
                    code: "GMD",
                    name: "Gambia Dalasi"
                }, {
                    code: "GNF",
                    name: "Guinea Franc"
                }, {
                    code: "GTQ",
                    name: "Guatemala Quetzal"
                }, {
                    code: "GYD",
                    name: "Guyana Dollar"
                }, {
                    code: "HKD",
                    name: "Hong Kong Dollar"
                }, {
                    code: "HNL",
                    name: "Honduras Lempira"
                }, {
                    code: "HRK",
                    name: "Croatia Kuna"
                }, {
                    code: "HTG",
                    name: "Haiti Gourde"
                }, {
                    code: "HUF",
                    name: "Hungary Forint"
                }, {
                    code: "IDR",
                    name: "Indonesia Rupiah"
                }, {
                    code: "ILS",
                    name: "Israel Shekel"
                }, {
                    code: "IMP",
                    name: "Isle of Man Pound"
                }, {
                    code: "INR",
                    name: "India Rupee"
                }, {
                    code: "IQD",
                    name: "Iraq Dinar"
                }, {
                    code: "IRR",
                    name: "Iran Rial"
                }, {
                    code: "ISK",
                    name: "Iceland Krona"
                }, {
                    code: "JEP",
                    name: "Jersey Pound"
                }, {
                    code: "JMD",
                    name: "Jamaica Dollar"
                }, {
                    code: "JOD",
                    name: "Jordan Dinar"
                }, {
                    code: "JPY",
                    name: "Japan Yen"
                }, {
                    code: "KES",
                    name: "Kenya Shilling"
                }, {
                    code: "KGS",
                    name: "Kyrgyzstan Som"
                }, {
                    code: "KHR",
                    name: "Cambodia Riel"
                }, {
                    code: "KMF",
                    name: "Comoros Franc"
                }, {
                    code: "KPW",
                    name: "Korea (North) Won"
                }, {
                    code: "KRW",
                    name: "Korea (South) Won"
                }, {
                    code: "KWD",
                    name: "Kuwait Dinar"
                }, {
                    code: "KYD",
                    name: "Cayman Islands Dollar"
                }, {
                    code: "KZT",
                    name: "Kazakhstan Tenge"
                }, {
                    code: "LAK",
                    name: "Laos Kip"
                }, {
                    code: "LBP",
                    name: "Lebanon Pound"
                }, {
                    code: "LKR",
                    name: "Sri Lanka Rupee"
                }, {
                    code: "LRD",
                    name: "Liberia Dollar"
                }, {
                    code: "LSL",
                    name: "Lesotho Loti"
                }, {
                    code: "LTL",
                    name: "Lithuania Litas"
                }, {
                    code: "LYD",
                    name: "Libya Dinar"
                }, {
                    code: "MAD",
                    name: "Morocco Dirham"
                }, {
                    code: "MDL",
                    name: "Moldova Leu"
                }, {
                    code: "MGA",
                    name: "Madagascar Ariary"
                }, {
                    code: "MKD",
                    name: "Macedonia Denar"
                }, {
                    code: "MMK",
                    name: "Myanmar (Burma) Kyat"
                }, {
                    code: "MNT",
                    name: "Mongolia Tughrik"
                }, {
                    code: "MOP",
                    name: "Macau Pataca"
                }, {
                    code: "MRO",
                    name: "Mauritania Ouguiya"
                }, {
                    code: "MUR",
                    name: "Mauritius Rupee"
                }, {
                    code: "MVR",
                    name: "Maldives (Maldive Islands) Rufiyaa"
                }, {
                    code: "MWK",
                    name: "Malawi Kwacha"
                }, {
                    code: "MXN",
                    name: "Mexico Peso"
                }, {
                    code: "MYR",
                    name: "Malaysia Ringgit"
                }, {
                    code: "MZN",
                    name: "Mozambique Metical"
                }, {
                    code: "NAD",
                    name: "Namibia Dollar"
                }, {
                    code: "NGN",
                    name: "Nigeria Naira"
                }, {
                    code: "NIO",
                    name: "Nicaragua Cordoba"
                }, {
                    code: "NOK",
                    name: "Norway Krone"
                }, {
                    code: "NPR",
                    name: "Nepal Rupee"
                }, {
                    code: "NZD",
                    name: "New Zealand Dollar"
                }, {
                    code: "OMR",
                    name: "Oman Rial"
                }, {
                    code: "PAB",
                    name: "Panama Balboa"
                }, {
                    code: "PEN",
                    name: "Peru Nuevo Sol"
                }, {
                    code: "PGK",
                    name: "Papua New Guinea Kina"
                }, {
                    code: "PHP",
                    name: "Philippines Peso"
                }, {
                    code: "PKR",
                    name: "Pakistan Rupee"
                }, {
                    code: "PLN",
                    name: "Poland Zloty"
                }, {
                    code: "PYG",
                    name: "Paraguay Guarani"
                }, {
                    code: "QAR",
                    name: "Qatar Riyal"
                }, {
                    code: "RON",
                    name: "Romania New Leu"
                }, {
                    code: "RSD",
                    name: "Serbia Dinar"
                }, {
                    code: "RUB",
                    name: "Russia Ruble"
                }, {
                    code: "RWF",
                    name: "Rwanda Franc"
                }, {
                    code: "SAR",
                    name: "Saudi Arabia Riyal"
                }, {
                    code: "SBD",
                    name: "Solomon Islands Dollar"
                }, {
                    code: "SCR",
                    name: "Seychelles Rupee"
                }, {
                    code: "SDG",
                    name: "Sudan Pound"
                }, {
                    code: "SEK",
                    name: "Sweden Krona"
                }, {
                    code: "SGD",
                    name: "Singapore Dollar"
                }, {
                    code: "SHP",
                    name: "Saint Helena Pound"
                }, {
                    code: "SLL",
                    name: "Sierra Leone Leone"
                }, {
                    code: "SOS",
                    name: "Somalia Shilling"
                }, {
                    code: "SPL",
                    name: "Seborga Luigino"
                }, {
                    code: "SRD",
                    name: "Suriname Dollar"
                }, {
                    code: "STD",
                    name: "São Tomé and Príncipe Dobra"
                }, {
                    code: "SVC",
                    name: "El Salvador Colon"
                }, {
                    code: "SYP",
                    name: "Syria Pound"
                }, {
                    code: "SZL",
                    name: "Swaziland Lilangeni"
                }, {
                    code: "THB",
                    name: "Thailand Baht"
                }, {
                    code: "TJS",
                    name: "Tajikistan Somoni"
                }, {
                    code: "TMT",
                    name: "Turkmenistan Manat"
                }, {
                    code: "TND",
                    name: "Tunisia Dinar"
                }, {
                    code: "TOP",
                    name: "Tonga Pa'anga"
                }, {
                    code: "TRY",
                    name: "Turkey Lira"
                }, {
                    code: "TTD",
                    name: "Trinidad and Tobago Dollar"
                }, {
                    code: "TVD",
                    name: "Tuvalu Dollar"
                }, {
                    code: "TWD",
                    name: "Taiwan New Dollar"
                }, {
                    code: "TZS",
                    name: "Tanzania Shilling"
                }, {
                    code: "UAH",
                    name: "Ukraine Hryvnia"
                }, {
                    code: "UGX",
                    name: "Uganda Shilling"
                }, {
                    code: "USD",
                    name: "United States Dollar"
                }, {
                    code: "UYU",
                    name: "Uruguay Peso"
                }, {
                    code: "UZS",
                    name: "Uzbekistan Som"
                }, {
                    code: "VEF",
                    name: "Venezuela Bolivar"
                }, {
                    code: "VND",
                    name: "Viet Nam Dong"
                }, {
                    code: "VUV",
                    name: "Vanuatu Vatu"
                }, {
                    code: "WST",
                    name: "Samoa Tala"
                }, {
                    code: "XAF",
                    name: "Communauté Financière Africaine (BEAC) CFA Franc BEAC"
                }, {
                    code: "XCD",
                    name: "East Caribbean Dollar"
                }, {
                    code: "XDR",
                    name: "International Monetary Fund (IMF) Special Drawing Rights"
                }, {
                    code: "XOF",
                    name: "Communauté Financière Africaine (BCEAO) Franc"
                }, {
                    code: "XPF",
                    name: "Comptoirs Français du Pacifique (CFP) Franc"
                }, {
                    code: "YER",
                    name: "Yemen Rial"
                }, {
                    code: "ZAR",
                    name: "South Africa Rand"
                }, {
                    code: "ZMW",
                    name: "Zambia Kwacha"
                }, {
                    code: "ZWD",
                    name: "Zimbabwe Dollar"
                }],
                colorNames: ["AliceBlue", "Black", "Navy", "DarkBlue", "MediumBlue", "Blue", "DarkGreen", "Green", "Teal", "DarkCyan", "DeepSkyBlue", "DarkTurquoise", "MediumSpringGreen", "Lime", "SpringGreen", "Aqua", "Cyan", "MidnightBlue", "DodgerBlue", "LightSeaGreen", "ForestGreen", "SeaGreen", "DarkSlateGray", "LimeGreen", "MediumSeaGreen", "Turquoise", "RoyalBlue", "SteelBlue", "DarkSlateBlue", "MediumTurquoise", "Indigo", "DarkOliveGreen", "CadetBlue", "CornflowerBlue", "RebeccaPurple", "MediumAquaMarine", "DimGray", "SlateBlue", "OliveDrab", "SlateGray", "LightSlateGray", "MediumSlateBlue", "LawnGreen", "Chartreuse", "Aquamarine", "Maroon", "Purple", "Olive", "Gray", "SkyBlue", "LightSkyBlue", "BlueViolet", "DarkRed", "DarkMagenta", "SaddleBrown", "Ivory", "White", "DarkSeaGreen", "LightGreen", "MediumPurple", "DarkViolet", "PaleGreen", "DarkOrchid", "YellowGreen", "Sienna", "Brown", "DarkGray", "LightBlue", "GreenYellow", "PaleTurquoise", "LightSteelBlue", "PowderBlue", "FireBrick", "DarkGoldenRod", "MediumOrchid", "RosyBrown", "DarkKhaki", "Silver", "MediumVioletRed", "IndianRed", "Peru", "Chocolate", "Tan", "LightGray", "Thistle", "Orchid", "GoldenRod", "PaleVioletRed", "Crimson", "Gainsboro", "Plum", "BurlyWood", "LightCyan", "Lavender", "DarkSalmon", "Violet", "PaleGoldenRod", "LightCoral", "Khaki", "AliceBlue", "HoneyDew", "Azure", "SandyBrown", "Wheat", "Beige", "WhiteSmoke", "MintCream", "GhostWhite", "Salmon", "AntiqueWhite", "Linen", "LightGoldenRodYellow", "OldLace", "Red", "Fuchsia", "Magenta", "DeepPink", "OrangeRed", "Tomato", "HotPink", "Coral", "DarkOrange", "LightSalmon", "Orange", "LightPink", "Pink", "Gold", "PeachPuff", "NavajoWhite", "Moccasin", "Bisque", "MistyRose", "BlanchedAlmond", "PapayaWhip", "LavenderBlush", "SeaShell", "Cornsilk", "LemonChiffon", "FloralWhite", "Snow", "Yellow", "LightYellow"],
                fileExtension: {
                    raster: ["bmp", "gif", "gpl", "ico", "jpeg", "psd", "png", "psp", "raw", "tiff"],
                    vector: ["3dv", "amf", "awg", "ai", "cgm", "cdr", "cmx", "dxf", "e2d", "egt", "eps", "fs", "odg", "svg", "xar"],
                    "3d": ["3dmf", "3dm", "3mf", "3ds", "an8", "aoi", "blend", "cal3d", "cob", "ctm", "iob", "jas", "max", "mb", "mdx", "obj", "x", "x3d"],
                    document: ["doc", "docx", "dot", "html", "xml", "odt", "odm", "ott", "csv", "rtf", "tex", "xhtml", "xps"]
                },
                timezones: [{
                    name: "Dateline Standard Time",
                    abbr: "DST",
                    offset: -12,
                    isdst: !1,
                    text: "(UTC-12:00) International Date Line West",
                    utc: ["Etc/GMT+12"]
                }, {
                    name: "UTC-11",
                    abbr: "U",
                    offset: -11,
                    isdst: !1,
                    text: "(UTC-11:00) Coordinated Universal Time-11",
                    utc: ["Etc/GMT+11", "Pacific/Midway", "Pacific/Niue", "Pacific/Pago_Pago"]
                }, {
                    name: "Hawaiian Standard Time",
                    abbr: "HST",
                    offset: -10,
                    isdst: !1,
                    text: "(UTC-10:00) Hawaii",
                    utc: ["Etc/GMT+10", "Pacific/Honolulu", "Pacific/Johnston", "Pacific/Rarotonga", "Pacific/Tahiti"]
                }, {
                    name: "Alaskan Standard Time",
                    abbr: "AKDT",
                    offset: -8,
                    isdst: !0,
                    text: "(UTC-09:00) Alaska",
                    utc: ["America/Anchorage", "America/Juneau", "America/Nome", "America/Sitka", "America/Yakutat"]
                }, {
                    name: "Pacific Standard Time (Mexico)",
                    abbr: "PDT",
                    offset: -7,
                    isdst: !0,
                    text: "(UTC-08:00) Baja California",
                    utc: ["America/Santa_Isabel"]
                }, {
                    name: "Pacific Standard Time",
                    abbr: "PDT",
                    offset: -7,
                    isdst: !0,
                    text: "(UTC-08:00) Pacific Time (US & Canada)",
                    utc: ["America/Dawson", "America/Los_Angeles", "America/Tijuana", "America/Vancouver", "America/Whitehorse", "PST8PDT"]
                }, {
                    name: "US Mountain Standard Time",
                    abbr: "UMST",
                    offset: -7,
                    isdst: !1,
                    text: "(UTC-07:00) Arizona",
                    utc: ["America/Creston", "America/Dawson_Creek", "America/Hermosillo", "America/Phoenix", "Etc/GMT+7"]
                }, {
                    name: "Mountain Standard Time (Mexico)",
                    abbr: "MDT",
                    offset: -6,
                    isdst: !0,
                    text: "(UTC-07:00) Chihuahua, La Paz, Mazatlan",
                    utc: ["America/Chihuahua", "America/Mazatlan"]
                }, {
                    name: "Mountain Standard Time",
                    abbr: "MDT",
                    offset: -6,
                    isdst: !0,
                    text: "(UTC-07:00) Mountain Time (US & Canada)",
                    utc: ["America/Boise", "America/Cambridge_Bay", "America/Denver", "America/Edmonton", "America/Inuvik", "America/Ojinaga", "America/Yellowknife", "MST7MDT"]
                }, {
                    name: "Central America Standard Time",
                    abbr: "CAST",
                    offset: -6,
                    isdst: !1,
                    text: "(UTC-06:00) Central America",
                    utc: ["America/Belize", "America/Costa_Rica", "America/El_Salvador", "America/Guatemala", "America/Managua", "America/Tegucigalpa", "Etc/GMT+6", "Pacific/Galapagos"]
                }, {
                    name: "Central Standard Time",
                    abbr: "CDT",
                    offset: -5,
                    isdst: !0,
                    text: "(UTC-06:00) Central Time (US & Canada)",
                    utc: ["America/Chicago", "America/Indiana/Knox", "America/Indiana/Tell_City", "America/Matamoros", "America/Menominee", "America/North_Dakota/Beulah", "America/North_Dakota/Center", "America/North_Dakota/New_Salem", "America/Rainy_River", "America/Rankin_Inlet", "America/Resolute", "America/Winnipeg", "CST6CDT"]
                }, {
                    name: "Central Standard Time (Mexico)",
                    abbr: "CDT",
                    offset: -5,
                    isdst: !0,
                    text: "(UTC-06:00) Guadalajara, Mexico City, Monterrey",
                    utc: ["America/Bahia_Banderas", "America/Cancun", "America/Merida", "America/Mexico_City", "America/Monterrey"]
                }, {
                    name: "Canada Central Standard Time",
                    abbr: "CCST",
                    offset: -6,
                    isdst: !1,
                    text: "(UTC-06:00) Saskatchewan",
                    utc: ["America/Regina", "America/Swift_Current"]
                }, {
                    name: "SA Pacific Standard Time",
                    abbr: "SPST",
                    offset: -5,
                    isdst: !1,
                    text: "(UTC-05:00) Bogota, Lima, Quito",
                    utc: ["America/Bogota", "America/Cayman", "America/Coral_Harbour", "America/Eirunepe", "America/Guayaquil", "America/Jamaica", "America/Lima", "America/Panama", "America/Rio_Branco", "Etc/GMT+5"]
                }, {
                    name: "Eastern Standard Time",
                    abbr: "EDT",
                    offset: -4,
                    isdst: !0,
                    text: "(UTC-05:00) Eastern Time (US & Canada)",
                    utc: ["America/Detroit", "America/Havana", "America/Indiana/Petersburg", "America/Indiana/Vincennes", "America/Indiana/Winamac", "America/Iqaluit", "America/Kentucky/Monticello", "America/Louisville", "America/Montreal", "America/Nassau", "America/New_York", "America/Nipigon", "America/Pangnirtung", "America/Port-au-Prince", "America/Thunder_Bay", "America/Toronto", "EST5EDT"]
                }, {
                    name: "US Eastern Standard Time",
                    abbr: "UEDT",
                    offset: -4,
                    isdst: !0,
                    text: "(UTC-05:00) Indiana (East)",
                    utc: ["America/Indiana/Marengo", "America/Indiana/Vevay", "America/Indianapolis"]
                }, {
                    name: "Venezuela Standard Time",
                    abbr: "VST",
                    offset: -4.5,
                    isdst: !1,
                    text: "(UTC-04:30) Caracas",
                    utc: ["America/Caracas"]
                }, {
                    name: "Paraguay Standard Time",
                    abbr: "PST",
                    offset: -4,
                    isdst: !1,
                    text: "(UTC-04:00) Asuncion",
                    utc: ["America/Asuncion"]
                }, {
                    name: "Atlantic Standard Time",
                    abbr: "ADT",
                    offset: -3,
                    isdst: !0,
                    text: "(UTC-04:00) Atlantic Time (Canada)",
                    utc: ["America/Glace_Bay", "America/Goose_Bay", "America/Halifax", "America/Moncton", "America/Thule", "Atlantic/Bermuda"]
                }, {
                    name: "Central Brazilian Standard Time",
                    abbr: "CBST",
                    offset: -4,
                    isdst: !1,
                    text: "(UTC-04:00) Cuiaba",
                    utc: ["America/Campo_Grande", "America/Cuiaba"]
                }, {
                    name: "SA Western Standard Time",
                    abbr: "SWST",
                    offset: -4,
                    isdst: !1,
                    text: "(UTC-04:00) Georgetown, La Paz, Manaus, San Juan",
                    utc: ["America/Anguilla", "America/Antigua", "America/Aruba", "America/Barbados", "America/Blanc-Sablon", "America/Boa_Vista", "America/Curacao", "America/Dominica", "America/Grand_Turk", "America/Grenada", "America/Guadeloupe", "America/Guyana", "America/Kralendijk", "America/La_Paz", "America/Lower_Princes", "America/Manaus", "America/Marigot", "America/Martinique", "America/Montserrat", "America/Port_of_Spain", "America/Porto_Velho", "America/Puerto_Rico", "America/Santo_Domingo", "America/St_Barthelemy", "America/St_Kitts", "America/St_Lucia", "America/St_Thomas", "America/St_Vincent", "America/Tortola", "Etc/GMT+4"]
                }, {
                    name: "Pacific SA Standard Time",
                    abbr: "PSST",
                    offset: -4,
                    isdst: !1,
                    text: "(UTC-04:00) Santiago",
                    utc: ["America/Santiago", "Antarctica/Palmer"]
                }, {
                    name: "Newfoundland Standard Time",
                    abbr: "NDT",
                    offset: -2.5,
                    isdst: !0,
                    text: "(UTC-03:30) Newfoundland",
                    utc: ["America/St_Johns"]
                }, {
                    name: "E. South America Standard Time",
                    abbr: "ESAST",
                    offset: -3,
                    isdst: !1,
                    text: "(UTC-03:00) Brasilia",
                    utc: ["America/Sao_Paulo"]
                }, {
                    name: "Argentina Standard Time",
                    abbr: "AST",
                    offset: -3,
                    isdst: !1,
                    text: "(UTC-03:00) Buenos Aires",
                    utc: ["America/Argentina/La_Rioja", "America/Argentina/Rio_Gallegos", "America/Argentina/Salta", "America/Argentina/San_Juan", "America/Argentina/San_Luis", "America/Argentina/Tucuman", "America/Argentina/Ushuaia", "America/Buenos_Aires", "America/Catamarca", "America/Cordoba", "America/Jujuy", "America/Mendoza"]
                }, {
                    name: "SA Eastern Standard Time",
                    abbr: "SEST",
                    offset: -3,
                    isdst: !1,
                    text: "(UTC-03:00) Cayenne, Fortaleza",
                    utc: ["America/Araguaina", "America/Belem", "America/Cayenne", "America/Fortaleza", "America/Maceio", "America/Paramaribo", "America/Recife", "America/Santarem", "Antarctica/Rothera", "Atlantic/Stanley", "Etc/GMT+3"]
                }, {
                    name: "Greenland Standard Time",
                    abbr: "GDT",
                    offset: -2,
                    isdst: !0,
                    text: "(UTC-03:00) Greenland",
                    utc: ["America/Godthab"]
                }, {
                    name: "Montevideo Standard Time",
                    abbr: "MST",
                    offset: -3,
                    isdst: !1,
                    text: "(UTC-03:00) Montevideo",
                    utc: ["America/Montevideo"]
                }, {
                    name: "Bahia Standard Time",
                    abbr: "BST",
                    offset: -3,
                    isdst: !1,
                    text: "(UTC-03:00) Salvador",
                    utc: ["America/Bahia"]
                }, {
                    name: "UTC-02",
                    abbr: "U",
                    offset: -2,
                    isdst: !1,
                    text: "(UTC-02:00) Coordinated Universal Time-02",
                    utc: ["America/Noronha", "Atlantic/South_Georgia", "Etc/GMT+2"]
                }, {
                    name: "Mid-Atlantic Standard Time",
                    abbr: "MDT",
                    offset: -1,
                    isdst: !0,
                    text: "(UTC-02:00) Mid-Atlantic - Old"
                }, {
                    name: "Azores Standard Time",
                    abbr: "ADT",
                    offset: 0,
                    isdst: !0,
                    text: "(UTC-01:00) Azores",
                    utc: ["America/Scoresbysund", "Atlantic/Azores"]
                }, {
                    name: "Cape Verde Standard Time",
                    abbr: "CVST",
                    offset: -1,
                    isdst: !1,
                    text: "(UTC-01:00) Cape Verde Is.",
                    utc: ["Atlantic/Cape_Verde", "Etc/GMT+1"]
                }, {
                    name: "Morocco Standard Time",
                    abbr: "MDT",
                    offset: 1,
                    isdst: !0,
                    text: "(UTC) Casablanca",
                    utc: ["Africa/Casablanca", "Africa/El_Aaiun"]
                }, {
                    name: "UTC",
                    abbr: "CUT",
                    offset: 0,
                    isdst: !1,
                    text: "(UTC) Coordinated Universal Time",
                    utc: ["America/Danmarkshavn", "Etc/GMT"]
                }, {
                    name: "GMT Standard Time",
                    abbr: "GDT",
                    offset: 1,
                    isdst: !0,
                    text: "(UTC) Dublin, Edinburgh, Lisbon, London",
                    utc: ["Atlantic/Canary", "Atlantic/Faeroe", "Atlantic/Madeira", "Europe/Dublin", "Europe/Guernsey", "Europe/Isle_of_Man", "Europe/Jersey", "Europe/Lisbon", "Europe/London"]
                }, {
                    name: "Greenwich Standard Time",
                    abbr: "GST",
                    offset: 0,
                    isdst: !1,
                    text: "(UTC) Monrovia, Reykjavik",
                    utc: ["Africa/Abidjan", "Africa/Accra", "Africa/Bamako", "Africa/Banjul", "Africa/Bissau", "Africa/Conakry", "Africa/Dakar", "Africa/Freetown", "Africa/Lome", "Africa/Monrovia", "Africa/Nouakchott", "Africa/Ouagadougou", "Africa/Sao_Tome", "Atlantic/Reykjavik", "Atlantic/St_Helena"]
                }, {
                    name: "W. Europe Standard Time",
                    abbr: "WEDT",
                    offset: 2,
                    isdst: !0,
                    text: "(UTC+01:00) Amsterdam, Berlin, Bern, Rome, Stockholm, Vienna",
                    utc: ["Arctic/Longyearbyen", "Europe/Amsterdam", "Europe/Andorra", "Europe/Berlin", "Europe/Busingen", "Europe/Gibraltar", "Europe/Luxembourg", "Europe/Malta", "Europe/Monaco", "Europe/Oslo", "Europe/Rome", "Europe/San_Marino", "Europe/Stockholm", "Europe/Vaduz", "Europe/Vatican", "Europe/Vienna", "Europe/Zurich"]
                }, {
                    name: "Central Europe Standard Time",
                    abbr: "CEDT",
                    offset: 2,
                    isdst: !0,
                    text: "(UTC+01:00) Belgrade, Bratislava, Budapest, Ljubljana, Prague",
                    utc: ["Europe/Belgrade", "Europe/Bratislava", "Europe/Budapest", "Europe/Ljubljana", "Europe/Podgorica", "Europe/Prague", "Europe/Tirane"]
                }, {
                    name: "Romance Standard Time",
                    abbr: "RDT",
                    offset: 2,
                    isdst: !0,
                    text: "(UTC+01:00) Brussels, Copenhagen, Madrid, Paris",
                    utc: ["Africa/Ceuta", "Europe/Brussels", "Europe/Copenhagen", "Europe/Madrid", "Europe/Paris"]
                }, {
                    name: "Central European Standard Time",
                    abbr: "CEDT",
                    offset: 2,
                    isdst: !0,
                    text: "(UTC+01:00) Sarajevo, Skopje, Warsaw, Zagreb",
                    utc: ["Europe/Sarajevo", "Europe/Skopje", "Europe/Warsaw", "Europe/Zagreb"]
                }, {
                    name: "W. Central Africa Standard Time",
                    abbr: "WCAST",
                    offset: 1,
                    isdst: !1,
                    text: "(UTC+01:00) West Central Africa",
                    utc: ["Africa/Algiers", "Africa/Bangui", "Africa/Brazzaville", "Africa/Douala", "Africa/Kinshasa", "Africa/Lagos", "Africa/Libreville", "Africa/Luanda", "Africa/Malabo", "Africa/Ndjamena", "Africa/Niamey", "Africa/Porto-Novo", "Africa/Tunis", "Etc/GMT-1"]
                }, {
                    name: "Namibia Standard Time",
                    abbr: "NST",
                    offset: 1,
                    isdst: !1,
                    text: "(UTC+01:00) Windhoek",
                    utc: ["Africa/Windhoek"]
                }, {
                    name: "GTB Standard Time",
                    abbr: "GDT",
                    offset: 3,
                    isdst: !0,
                    text: "(UTC+02:00) Athens, Bucharest",
                    utc: ["Asia/Nicosia", "Europe/Athens", "Europe/Bucharest", "Europe/Chisinau"]
                }, {
                    name: "Middle East Standard Time",
                    abbr: "MEDT",
                    offset: 3,
                    isdst: !0,
                    text: "(UTC+02:00) Beirut",
                    utc: ["Asia/Beirut"]
                }, {
                    name: "Egypt Standard Time",
                    abbr: "EST",
                    offset: 2,
                    isdst: !1,
                    text: "(UTC+02:00) Cairo",
                    utc: ["Africa/Cairo"]
                }, {
                    name: "Syria Standard Time",
                    abbr: "SDT",
                    offset: 3,
                    isdst: !0,
                    text: "(UTC+02:00) Damascus",
                    utc: ["Asia/Damascus"]
                }, {
                    name: "E. Europe Standard Time",
                    abbr: "EEDT",
                    offset: 3,
                    isdst: !0,
                    text: "(UTC+02:00) E. Europe"
                }, {
                    name: "South Africa Standard Time",
                    abbr: "SAST",
                    offset: 2,
                    isdst: !1,
                    text: "(UTC+02:00) Harare, Pretoria",
                    utc: ["Africa/Blantyre", "Africa/Bujumbura", "Africa/Gaborone", "Africa/Harare", "Africa/Johannesburg", "Africa/Kigali", "Africa/Lubumbashi", "Africa/Lusaka", "Africa/Maputo", "Africa/Maseru", "Africa/Mbabane", "Etc/GMT-2"]
                }, {
                    name: "FLE Standard Time",
                    abbr: "FDT",
                    offset: 3,
                    isdst: !0,
                    text: "(UTC+02:00) Helsinki, Kyiv, Riga, Sofia, Tallinn, Vilnius",
                    utc: ["Europe/Helsinki", "Europe/Kiev", "Europe/Mariehamn", "Europe/Riga", "Europe/Sofia", "Europe/Tallinn", "Europe/Uzhgorod", "Europe/Vilnius", "Europe/Zaporozhye"]
                }, {
                    name: "Turkey Standard Time",
                    abbr: "TDT",
                    offset: 3,
                    isdst: !0,
                    text: "(UTC+02:00) Istanbul",
                    utc: ["Europe/Istanbul"]
                }, {
                    name: "Israel Standard Time",
                    abbr: "JDT",
                    offset: 3,
                    isdst: !0,
                    text: "(UTC+02:00) Jerusalem",
                    utc: ["Asia/Jerusalem"]
                }, {
                    name: "Libya Standard Time",
                    abbr: "LST",
                    offset: 2,
                    isdst: !1,
                    text: "(UTC+02:00) Tripoli",
                    utc: ["Africa/Tripoli"]
                }, {
                    name: "Jordan Standard Time",
                    abbr: "JST",
                    offset: 3,
                    isdst: !1,
                    text: "(UTC+03:00) Amman",
                    utc: ["Asia/Amman"]
                }, {
                    name: "Arabic Standard Time",
                    abbr: "AST",
                    offset: 3,
                    isdst: !1,
                    text: "(UTC+03:00) Baghdad",
                    utc: ["Asia/Baghdad"]
                }, {
                    name: "Kaliningrad Standard Time",
                    abbr: "KST",
                    offset: 3,
                    isdst: !1,
                    text: "(UTC+03:00) Kaliningrad, Minsk",
                    utc: ["Europe/Kaliningrad", "Europe/Minsk"]
                }, {
                    name: "Arab Standard Time",
                    abbr: "AST",
                    offset: 3,
                    isdst: !1,
                    text: "(UTC+03:00) Kuwait, Riyadh",
                    utc: ["Asia/Aden", "Asia/Bahrain", "Asia/Kuwait", "Asia/Qatar", "Asia/Riyadh"]
                }, {
                    name: "E. Africa Standard Time",
                    abbr: "EAST",
                    offset: 3,
                    isdst: !1,
                    text: "(UTC+03:00) Nairobi",
                    utc: ["Africa/Addis_Ababa", "Africa/Asmera", "Africa/Dar_es_Salaam", "Africa/Djibouti", "Africa/Juba", "Africa/Kampala", "Africa/Khartoum", "Africa/Mogadishu", "Africa/Nairobi", "Antarctica/Syowa", "Etc/GMT-3", "Indian/Antananarivo", "Indian/Comoro", "Indian/Mayotte"]
                }, {
                    name: "Iran Standard Time",
                    abbr: "IDT",
                    offset: 4.5,
                    isdst: !0,
                    text: "(UTC+03:30) Tehran",
                    utc: ["Asia/Tehran"]
                }, {
                    name: "Arabian Standard Time",
                    abbr: "AST",
                    offset: 4,
                    isdst: !1,
                    text: "(UTC+04:00) Abu Dhabi, Muscat",
                    utc: ["Asia/Dubai", "Asia/Muscat", "Etc/GMT-4"]
                }, {
                    name: "Azerbaijan Standard Time",
                    abbr: "ADT",
                    offset: 5,
                    isdst: !0,
                    text: "(UTC+04:00) Baku",
                    utc: ["Asia/Baku"]
                }, {
                    name: "Russian Standard Time",
                    abbr: "RST",
                    offset: 4,
                    isdst: !1,
                    text: "(UTC+04:00) Moscow, St. Petersburg, Volgograd",
                    utc: ["Europe/Moscow", "Europe/Samara", "Europe/Simferopol", "Europe/Volgograd"]
                }, {
                    name: "Mauritius Standard Time",
                    abbr: "MST",
                    offset: 4,
                    isdst: !1,
                    text: "(UTC+04:00) Port Louis",
                    utc: ["Indian/Mahe", "Indian/Mauritius", "Indian/Reunion"]
                }, {
                    name: "Georgian Standard Time",
                    abbr: "GST",
                    offset: 4,
                    isdst: !1,
                    text: "(UTC+04:00) Tbilisi",
                    utc: ["Asia/Tbilisi"]
                }, {
                    name: "Caucasus Standard Time",
                    abbr: "CST",
                    offset: 4,
                    isdst: !1,
                    text: "(UTC+04:00) Yerevan",
                    utc: ["Asia/Yerevan"]
                }, {
                    name: "Afghanistan Standard Time",
                    abbr: "AST",
                    offset: 4.5,
                    isdst: !1,
                    text: "(UTC+04:30) Kabul",
                    utc: ["Asia/Kabul"]
                }, {
                    name: "West Asia Standard Time",
                    abbr: "WAST",
                    offset: 5,
                    isdst: !1,
                    text: "(UTC+05:00) Ashgabat, Tashkent",
                    utc: ["Antarctica/Mawson", "Asia/Aqtau", "Asia/Aqtobe", "Asia/Ashgabat", "Asia/Dushanbe", "Asia/Oral", "Asia/Samarkand", "Asia/Tashkent", "Etc/GMT-5", "Indian/Kerguelen", "Indian/Maldives"]
                }, {
                    name: "Pakistan Standard Time",
                    abbr: "PST",
                    offset: 5,
                    isdst: !1,
                    text: "(UTC+05:00) Islamabad, Karachi",
                    utc: ["Asia/Karachi"]
                }, {
                    name: "India Standard Time",
                    abbr: "IST",
                    offset: 5.5,
                    isdst: !1,
                    text: "(UTC+05:30) Chennai, Kolkata, Mumbai, New Delhi",
                    utc: ["Asia/Calcutta"]
                }, {
                    name: "Sri Lanka Standard Time",
                    abbr: "SLST",
                    offset: 5.5,
                    isdst: !1,
                    text: "(UTC+05:30) Sri Jayawardenepura",
                    utc: ["Asia/Colombo"]
                }, {
                    name: "Nepal Standard Time",
                    abbr: "NST",
                    offset: 5.75,
                    isdst: !1,
                    text: "(UTC+05:45) Kathmandu",
                    utc: ["Asia/Katmandu"]
                }, {
                    name: "Central Asia Standard Time",
                    abbr: "CAST",
                    offset: 6,
                    isdst: !1,
                    text: "(UTC+06:00) Astana",
                    utc: ["Antarctica/Vostok", "Asia/Almaty", "Asia/Bishkek", "Asia/Qyzylorda", "Asia/Urumqi", "Etc/GMT-6", "Indian/Chagos"]
                }, {
                    name: "Bangladesh Standard Time",
                    abbr: "BST",
                    offset: 6,
                    isdst: !1,
                    text: "(UTC+06:00) Dhaka",
                    utc: ["Asia/Dhaka", "Asia/Thimphu"]
                }, {
                    name: "Ekaterinburg Standard Time",
                    abbr: "EST",
                    offset: 6,
                    isdst: !1,
                    text: "(UTC+06:00) Ekaterinburg",
                    utc: ["Asia/Yekaterinburg"]
                }, {
                    name: "Myanmar Standard Time",
                    abbr: "MST",
                    offset: 6.5,
                    isdst: !1,
                    text: "(UTC+06:30) Yangon (Rangoon)",
                    utc: ["Asia/Rangoon", "Indian/Cocos"]
                }, {
                    name: "SE Asia Standard Time",
                    abbr: "SAST",
                    offset: 7,
                    isdst: !1,
                    text: "(UTC+07:00) Bangkok, Hanoi, Jakarta",
                    utc: ["Antarctica/Davis", "Asia/Bangkok", "Asia/Hovd", "Asia/Jakarta", "Asia/Phnom_Penh", "Asia/Pontianak", "Asia/Saigon", "Asia/Vientiane", "Etc/GMT-7", "Indian/Christmas"]
                }, {
                    name: "N. Central Asia Standard Time",
                    abbr: "NCAST",
                    offset: 7,
                    isdst: !1,
                    text: "(UTC+07:00) Novosibirsk",
                    utc: ["Asia/Novokuznetsk", "Asia/Novosibirsk", "Asia/Omsk"]
                }, {
                    name: "China Standard Time",
                    abbr: "CST",
                    offset: 8,
                    isdst: !1,
                    text: "(UTC+08:00) Beijing, Chongqing, Hong Kong, Urumqi",
                    utc: ["Asia/Hong_Kong", "Asia/Macau", "Asia/Shanghai"]
                }, {
                    name: "North Asia Standard Time",
                    abbr: "NAST",
                    offset: 8,
                    isdst: !1,
                    text: "(UTC+08:00) Krasnoyarsk",
                    utc: ["Asia/Krasnoyarsk"]
                }, {
                    name: "Singapore Standard Time",
                    abbr: "MPST",
                    offset: 8,
                    isdst: !1,
                    text: "(UTC+08:00) Kuala Lumpur, Singapore",
                    utc: ["Asia/Brunei", "Asia/Kuala_Lumpur", "Asia/Kuching", "Asia/Makassar", "Asia/Manila", "Asia/Singapore", "Etc/GMT-8"]
                }, {
                    name: "W. Australia Standard Time",
                    abbr: "WAST",
                    offset: 8,
                    isdst: !1,
                    text: "(UTC+08:00) Perth",
                    utc: ["Antarctica/Casey", "Australia/Perth"]
                }, {
                    name: "Taipei Standard Time",
                    abbr: "TST",
                    offset: 8,
                    isdst: !1,
                    text: "(UTC+08:00) Taipei",
                    utc: ["Asia/Taipei"]
                }, {
                    name: "Ulaanbaatar Standard Time",
                    abbr: "UST",
                    offset: 8,
                    isdst: !1,
                    text: "(UTC+08:00) Ulaanbaatar",
                    utc: ["Asia/Choibalsan", "Asia/Ulaanbaatar"]
                }, {
                    name: "North Asia East Standard Time",
                    abbr: "NAEST",
                    offset: 9,
                    isdst: !1,
                    text: "(UTC+09:00) Irkutsk",
                    utc: ["Asia/Irkutsk"]
                }, {
                    name: "Tokyo Standard Time",
                    abbr: "TST",
                    offset: 9,
                    isdst: !1,
                    text: "(UTC+09:00) Osaka, Sapporo, Tokyo",
                    utc: ["Asia/Dili", "Asia/Jayapura", "Asia/Tokyo", "Etc/GMT-9", "Pacific/Palau"]
                }, {
                    name: "Korea Standard Time",
                    abbr: "KST",
                    offset: 9,
                    isdst: !1,
                    text: "(UTC+09:00) Seoul",
                    utc: ["Asia/Pyongyang", "Asia/Seoul"]
                }, {
                    name: "Cen. Australia Standard Time",
                    abbr: "CAST",
                    offset: 9.5,
                    isdst: !1,
                    text: "(UTC+09:30) Adelaide",
                    utc: ["Australia/Adelaide", "Australia/Broken_Hill"]
                }, {
                    name: "AUS Central Standard Time",
                    abbr: "ACST",
                    offset: 9.5,
                    isdst: !1,
                    text: "(UTC+09:30) Darwin",
                    utc: ["Australia/Darwin"]
                }, {
                    name: "E. Australia Standard Time",
                    abbr: "EAST",
                    offset: 10,
                    isdst: !1,
                    text: "(UTC+10:00) Brisbane",
                    utc: ["Australia/Brisbane", "Australia/Lindeman"]
                }, {
                    name: "AUS Eastern Standard Time",
                    abbr: "AEST",
                    offset: 10,
                    isdst: !1,
                    text: "(UTC+10:00) Canberra, Melbourne, Sydney",
                    utc: ["Australia/Melbourne", "Australia/Sydney"]
                }, {
                    name: "West Pacific Standard Time",
                    abbr: "WPST",
                    offset: 10,
                    isdst: !1,
                    text: "(UTC+10:00) Guam, Port Moresby",
                    utc: ["Antarctica/DumontDUrville", "Etc/GMT-10", "Pacific/Guam", "Pacific/Port_Moresby", "Pacific/Saipan", "Pacific/Truk"]
                }, {
                    name: "Tasmania Standard Time",
                    abbr: "TST",
                    offset: 10,
                    isdst: !1,
                    text: "(UTC+10:00) Hobart",
                    utc: ["Australia/Currie", "Australia/Hobart"]
                }, {
                    name: "Yakutsk Standard Time",
                    abbr: "YST",
                    offset: 10,
                    isdst: !1,
                    text: "(UTC+10:00) Yakutsk",
                    utc: ["Asia/Chita", "Asia/Khandyga", "Asia/Yakutsk"]
                }, {
                    name: "Central Pacific Standard Time",
                    abbr: "CPST",
                    offset: 11,
                    isdst: !1,
                    text: "(UTC+11:00) Solomon Is., New Caledonia",
                    utc: ["Antarctica/Macquarie", "Etc/GMT-11", "Pacific/Efate", "Pacific/Guadalcanal", "Pacific/Kosrae", "Pacific/Noumea", "Pacific/Ponape"]
                }, {
                    name: "Vladivostok Standard Time",
                    abbr: "VST",
                    offset: 11,
                    isdst: !1,
                    text: "(UTC+11:00) Vladivostok",
                    utc: ["Asia/Sakhalin", "Asia/Ust-Nera", "Asia/Vladivostok"]
                }, {
                    name: "New Zealand Standard Time",
                    abbr: "NZST",
                    offset: 12,
                    isdst: !1,
                    text: "(UTC+12:00) Auckland, Wellington",
                    utc: ["Antarctica/McMurdo", "Pacific/Auckland"]
                }, {
                    name: "UTC+12",
                    abbr: "U",
                    offset: 12,
                    isdst: !1,
                    text: "(UTC+12:00) Coordinated Universal Time+12",
                    utc: ["Etc/GMT-12", "Pacific/Funafuti", "Pacific/Kwajalein", "Pacific/Majuro", "Pacific/Nauru", "Pacific/Tarawa", "Pacific/Wake", "Pacific/Wallis"]
                }, {
                    name: "Fiji Standard Time",
                    abbr: "FST",
                    offset: 12,
                    isdst: !1,
                    text: "(UTC+12:00) Fiji",
                    utc: ["Pacific/Fiji"]
                }, {
                    name: "Magadan Standard Time",
                    abbr: "MST",
                    offset: 12,
                    isdst: !1,
                    text: "(UTC+12:00) Magadan",
                    utc: ["Asia/Anadyr", "Asia/Kamchatka", "Asia/Magadan", "Asia/Srednekolymsk"]
                }, {
                    name: "Kamchatka Standard Time",
                    abbr: "KDT",
                    offset: 13,
                    isdst: !0,
                    text: "(UTC+12:00) Petropavlovsk-Kamchatsky - Old"
                }, {
                    name: "Tonga Standard Time",
                    abbr: "TST",
                    offset: 13,
                    isdst: !1,
                    text: "(UTC+13:00) Nuku'alofa",
                    utc: ["Etc/GMT-13", "Pacific/Enderbury", "Pacific/Fakaofo", "Pacific/Tongatapu"]
                }, {
                    name: "Samoa Standard Time",
                    abbr: "SST",
                    offset: 13,
                    isdst: !1,
                    text: "(UTC+13:00) Samoa",
                    utc: ["Pacific/Apia"]
                }]
            },
            b = Object.prototype.hasOwnProperty,
            g = Object.keys || function(e) {
                var t = [];
                for(var n in e) b.call(e, n) && t.push(n);
                return t
            };
        e.prototype.get = function(e) {
            return o(m[e])
        }, e.prototype.mac_address = function(e) {
            e = t(e), e.separator || (e.separator = e.networkVersion ? "." : ":");
            var n = "ABCDEF1234567890",
                a = "";
            return a = e.networkVersion ? this.n(this.string, 3, {
                pool: n,
                length: 4
            }).join(e.separator) : this.n(this.string, 6, {
                pool: n,
                length: 2
            }).join(e.separator)
        }, e.prototype.normal = function(e) {
            if(e = t(e, {
                    mean: 0,
                    dev: 1,
                    pool: []
                }), n(e.pool.constructor !== Array, "Chance: The pool option must be a valid array."), e.pool.length > 0) return this.normal_pool(e);
            var a, i, r, o, s = e.mean,
                l = e.dev;
            do i = 2 * this.random() - 1, r = 2 * this.random() - 1, a = i * i + r * r; while (a >= 1);
            return o = i * Math.sqrt(-2 * Math.log(a) / a), l * o + s
        }, e.prototype.normal_pool = function(e) {
            var t = 0;
            do {
                var n = Math.round(this.normal({
                    mean: e.mean,
                    dev: e.dev
                }));
                if(n < e.pool.length && n >= 0) return e.pool[n];
                t++
            } while (t < 100);
            throw new RangeError("Chance: Your pool is too small for the given mean and standard deviation. Please adjust.")
        }, e.prototype.radio = function(e) {
            e = t(e, {
                side: "?"
            });
            var n = "";
            switch(e.side.toLowerCase()) {
                case "east":
                case "e":
                    n = "W";
                    break;
                case "west":
                case "w":
                    n = "K";
                    break;
                default:
                    n = this.character({
                        pool: "KW"
                    })
            }
            return n + this.character({
                alpha: !0,
                casing: "upper"
            }) + this.character({
                alpha: !0,
                casing: "upper"
            }) + this.character({
                alpha: !0,
                casing: "upper"
            })
        }, e.prototype.set = function(e, t) {
            "string" == typeof e ? m[e] = t : m = o(e, m)
        }, e.prototype.tv = function(e) {
            return this.radio(e)
        }, e.prototype.cnpj = function() {
            var e = this.n(this.natural, 8, {
                    max: 9
                }),
                t = 2 + 6 * e[7] + 7 * e[6] + 8 * e[5] + 9 * e[4] + 2 * e[3] + 3 * e[2] + 4 * e[1] + 5 * e[0];
            t = 11 - t % 11, t >= 10 && (t = 0);
            var n = 2 * t + 3 + 7 * e[7] + 8 * e[6] + 9 * e[5] + 2 * e[4] + 3 * e[3] + 4 * e[2] + 5 * e[1] + 6 * e[0];
            return n = 11 - n % 11, n >= 10 && (n = 0), "" + e[0] + e[1] + "." + e[2] + e[3] + e[4] + "." + e[5] + e[6] + e[7] + "/0001-" + t + n
        }, e.prototype.mersenne_twister = function(e) {
            return new v(e)
        }, e.prototype.blueimp_md5 = function() {
            return new y
        };
        var v = function(e) {
            void 0 === e && (e = Math.floor(Math.random() * Math.pow(10, 13))), this.N = 624, this.M = 397, this.MATRIX_A = 2567483615, this.UPPER_MASK = 2147483648, this.LOWER_MASK = 2147483647, this.mt = new Array(this.N), this.mti = this.N + 1, this.init_genrand(e)
        };
        v.prototype.init_genrand = function(e) {
            for(this.mt[0] = e >>> 0, this.mti = 1; this.mti < this.N; this.mti++) e = this.mt[this.mti - 1] ^ this.mt[this.mti - 1] >>> 30, this.mt[this.mti] = (1812433253 * ((4294901760 & e) >>> 16) << 16) + 1812433253 * (65535 & e) + this.mti, this.mt[this.mti] >>>= 0
        }, v.prototype.init_by_array = function(e, t) {
            var n, a, i = 1,
                r = 0;
            for(this.init_genrand(19650218), n = this.N > t ? this.N : t; n; n--) a = this.mt[i - 1] ^ this.mt[i - 1] >>> 30, this.mt[i] = (this.mt[i] ^ (1664525 * ((4294901760 & a) >>> 16) << 16) + 1664525 * (65535 & a)) + e[r] + r, this.mt[i] >>>= 0, i++, r++, i >= this.N && (this.mt[0] = this.mt[this.N - 1], i = 1), r >= t && (r = 0);
            for(n = this.N - 1; n; n--) a = this.mt[i - 1] ^ this.mt[i - 1] >>> 30, this.mt[i] = (this.mt[i] ^ (1566083941 * ((4294901760 & a) >>> 16) << 16) + 1566083941 * (65535 & a)) - i, this.mt[i] >>>= 0, i++, i >= this.N && (this.mt[0] = this.mt[this.N - 1], i = 1);
            this.mt[0] = 2147483648
        }, v.prototype.genrand_int32 = function() {
            var e, t = new Array(0, this.MATRIX_A);
            if(this.mti >= this.N) {
                var n;
                for(this.mti === this.N + 1 && this.init_genrand(5489), n = 0; n < this.N - this.M; n++) e = this.mt[n] & this.UPPER_MASK | this.mt[n + 1] & this.LOWER_MASK, this.mt[n] = this.mt[n + this.M] ^ e >>> 1 ^ t[1 & e];
                for(; n < this.N - 1; n++) e = this.mt[n] & this.UPPER_MASK | this.mt[n + 1] & this.LOWER_MASK, this.mt[n] = this.mt[n + (this.M - this.N)] ^ e >>> 1 ^ t[1 & e];
                e = this.mt[this.N - 1] & this.UPPER_MASK | this.mt[0] & this.LOWER_MASK, this.mt[this.N - 1] = this.mt[this.M - 1] ^ e >>> 1 ^ t[1 & e], this.mti = 0
            }
            return e = this.mt[this.mti++], e ^= e >>> 11, e ^= e << 7 & 2636928640, e ^= e << 15 & 4022730752, e ^= e >>> 18, e >>> 0
        }, v.prototype.genrand_int31 = function() {
            return this.genrand_int32() >>> 1
        }, v.prototype.genrand_real1 = function() {
            return this.genrand_int32() * (1 / 4294967295)
        }, v.prototype.random = function() {
            return this.genrand_int32() * (1 / 4294967296)
        }, v.prototype.genrand_real3 = function() {
            return(this.genrand_int32() + .5) * (1 / 4294967296)
        }, v.prototype.genrand_res53 = function() {
            var e = this.genrand_int32() >>> 5,
                t = this.genrand_int32() >>> 6;
            return(67108864 * e + t) * (1 / 9007199254740992)
        };
        var y = function() {};
        y.prototype.VERSION = "1.0.1", y.prototype.safe_add = function(e, t) {
            var n = (65535 & e) + (65535 & t),
                a = (e >> 16) + (t >> 16) + (n >> 16);
            return a << 16 | 65535 & n
        }, y.prototype.bit_roll = function(e, t) {
            return e << t | e >>> 32 - t
        }, y.prototype.md5_cmn = function(e, t, n, a, i, r) {
            return this.safe_add(this.bit_roll(this.safe_add(this.safe_add(t, e), this.safe_add(a, r)), i), n)
        }, y.prototype.md5_ff = function(e, t, n, a, i, r, o) {
            return this.md5_cmn(t & n | ~t & a, e, t, i, r, o)
        }, y.prototype.md5_gg = function(e, t, n, a, i, r, o) {
            return this.md5_cmn(t & a | n & ~a, e, t, i, r, o)
        }, y.prototype.md5_hh = function(e, t, n, a, i, r, o) {
            return this.md5_cmn(t ^ n ^ a, e, t, i, r, o)
        }, y.prototype.md5_ii = function(e, t, n, a, i, r, o) {
            return this.md5_cmn(n ^ (t | ~a), e, t, i, r, o)
        }, y.prototype.binl_md5 = function(e, t) {
            e[t >> 5] |= 128 << t % 32, e[(t + 64 >>> 9 << 4) + 14] = t;
            var n, a, i, r, o, s = 1732584193,
                l = -271733879,
                c = -1732584194,
                u = 271733878;
            for(n = 0; n < e.length; n += 16) a = s, i = l, r = c, o = u, s = this.md5_ff(s, l, c, u, e[n], 7, -680876936), u = this.md5_ff(u, s, l, c, e[n + 1], 12, -389564586), c = this.md5_ff(c, u, s, l, e[n + 2], 17, 606105819), l = this.md5_ff(l, c, u, s, e[n + 3], 22, -1044525330), s = this.md5_ff(s, l, c, u, e[n + 4], 7, -176418897), u = this.md5_ff(u, s, l, c, e[n + 5], 12, 1200080426), c = this.md5_ff(c, u, s, l, e[n + 6], 17, -1473231341), l = this.md5_ff(l, c, u, s, e[n + 7], 22, -45705983), s = this.md5_ff(s, l, c, u, e[n + 8], 7, 1770035416), u = this.md5_ff(u, s, l, c, e[n + 9], 12, -1958414417), c = this.md5_ff(c, u, s, l, e[n + 10], 17, -42063), l = this.md5_ff(l, c, u, s, e[n + 11], 22, -1990404162), s = this.md5_ff(s, l, c, u, e[n + 12], 7, 1804603682), u = this.md5_ff(u, s, l, c, e[n + 13], 12, -40341101), c = this.md5_ff(c, u, s, l, e[n + 14], 17, -1502002290), l = this.md5_ff(l, c, u, s, e[n + 15], 22, 1236535329), s = this.md5_gg(s, l, c, u, e[n + 1], 5, -165796510), u = this.md5_gg(u, s, l, c, e[n + 6], 9, -1069501632), c = this.md5_gg(c, u, s, l, e[n + 11], 14, 643717713), l = this.md5_gg(l, c, u, s, e[n], 20, -373897302), s = this.md5_gg(s, l, c, u, e[n + 5], 5, -701558691), u = this.md5_gg(u, s, l, c, e[n + 10], 9, 38016083), c = this.md5_gg(c, u, s, l, e[n + 15], 14, -660478335), l = this.md5_gg(l, c, u, s, e[n + 4], 20, -405537848), s = this.md5_gg(s, l, c, u, e[n + 9], 5, 568446438), u = this.md5_gg(u, s, l, c, e[n + 14], 9, -1019803690), c = this.md5_gg(c, u, s, l, e[n + 3], 14, -187363961), l = this.md5_gg(l, c, u, s, e[n + 8], 20, 1163531501), s = this.md5_gg(s, l, c, u, e[n + 13], 5, -1444681467), u = this.md5_gg(u, s, l, c, e[n + 2], 9, -51403784), c = this.md5_gg(c, u, s, l, e[n + 7], 14, 1735328473), l = this.md5_gg(l, c, u, s, e[n + 12], 20, -1926607734), s = this.md5_hh(s, l, c, u, e[n + 5], 4, -378558), u = this.md5_hh(u, s, l, c, e[n + 8], 11, -2022574463), c = this.md5_hh(c, u, s, l, e[n + 11], 16, 1839030562), l = this.md5_hh(l, c, u, s, e[n + 14], 23, -35309556), s = this.md5_hh(s, l, c, u, e[n + 1], 4, -1530992060), u = this.md5_hh(u, s, l, c, e[n + 4], 11, 1272893353), c = this.md5_hh(c, u, s, l, e[n + 7], 16, -155497632), l = this.md5_hh(l, c, u, s, e[n + 10], 23, -1094730640), s = this.md5_hh(s, l, c, u, e[n + 13], 4, 681279174), u = this.md5_hh(u, s, l, c, e[n], 11, -358537222), c = this.md5_hh(c, u, s, l, e[n + 3], 16, -722521979), l = this.md5_hh(l, c, u, s, e[n + 6], 23, 76029189), s = this.md5_hh(s, l, c, u, e[n + 9], 4, -640364487), u = this.md5_hh(u, s, l, c, e[n + 12], 11, -421815835), c = this.md5_hh(c, u, s, l, e[n + 15], 16, 530742520), l = this.md5_hh(l, c, u, s, e[n + 2], 23, -995338651), s = this.md5_ii(s, l, c, u, e[n], 6, -198630844), u = this.md5_ii(u, s, l, c, e[n + 7], 10, 1126891415), c = this.md5_ii(c, u, s, l, e[n + 14], 15, -1416354905), l = this.md5_ii(l, c, u, s, e[n + 5], 21, -57434055), s = this.md5_ii(s, l, c, u, e[n + 12], 6, 1700485571), u = this.md5_ii(u, s, l, c, e[n + 3], 10, -1894986606), c = this.md5_ii(c, u, s, l, e[n + 10], 15, -1051523), l = this.md5_ii(l, c, u, s, e[n + 1], 21, -2054922799), s = this.md5_ii(s, l, c, u, e[n + 8], 6, 1873313359), u = this.md5_ii(u, s, l, c, e[n + 15], 10, -30611744), c = this.md5_ii(c, u, s, l, e[n + 6], 15, -1560198380), l = this.md5_ii(l, c, u, s, e[n + 13], 21, 1309151649), s = this.md5_ii(s, l, c, u, e[n + 4], 6, -145523070), u = this.md5_ii(u, s, l, c, e[n + 11], 10, -1120210379), c = this.md5_ii(c, u, s, l, e[n + 2], 15, 718787259), l = this.md5_ii(l, c, u, s, e[n + 9], 21, -343485551), s = this.safe_add(s, a), l = this.safe_add(l, i), c = this.safe_add(c, r), u = this.safe_add(u, o);
            return [s, l, c, u]
        }, y.prototype.binl2rstr = function(e) {
            var t, n = "";
            for(t = 0; t < 32 * e.length; t += 8) n += String.fromCharCode(e[t >> 5] >>> t % 32 & 255);
            return n
        }, y.prototype.rstr2binl = function(e) {
            var t, n = [];
            for(n[(e.length >> 2) - 1] = void 0, t = 0; t < n.length; t += 1) n[t] = 0;
            for(t = 0; t < 8 * e.length; t += 8) n[t >> 5] |= (255 & e.charCodeAt(t / 8)) << t % 32;
            return n
        }, y.prototype.rstr_md5 = function(e) {
            return this.binl2rstr(this.binl_md5(this.rstr2binl(e), 8 * e.length))
        }, y.prototype.rstr_hmac_md5 = function(e, t) {
            var n, a, i = this.rstr2binl(e),
                r = [],
                o = [];
            for(r[15] = o[15] = void 0, i.length > 16 && (i = this.binl_md5(i, 8 * e.length)), n = 0; n < 16; n += 1) r[n] = 909522486 ^ i[n], o[n] = 1549556828 ^ i[n];
            return a = this.binl_md5(r.concat(this.rstr2binl(t)), 512 + 8 * t.length), this.binl2rstr(this.binl_md5(o.concat(a), 640))
        }, y.prototype.rstr2hex = function(e) {
            var t, n, a = "0123456789abcdef",
                i = "";
            for(n = 0; n < e.length; n += 1) t = e.charCodeAt(n), i += a.charAt(t >>> 4 & 15) + a.charAt(15 & t);
            return i
        }, y.prototype.str2rstr_utf8 = function(e) {
            return unescape(encodeURIComponent(e))
        }, y.prototype.raw_md5 = function(e) {
            return this.rstr_md5(this.str2rstr_utf8(e))
        }, y.prototype.hex_md5 = function(e) {
            return this.rstr2hex(this.raw_md5(e))
        }, y.prototype.raw_hmac_md5 = function(e, t) {
            return this.rstr_hmac_md5(this.str2rstr_utf8(e), this.str2rstr_utf8(t))
        }, y.prototype.hex_hmac_md5 = function(e, t) {
            return this.rstr2hex(this.raw_hmac_md5(e, t))
        }, y.prototype.md5 = function(e, t, n) {
            return t ? n ? this.raw_hmac_md5(t, e) : this.hex_hmac_md5(t, e) : n ? this.raw_md5(e) : this.hex_md5(e)
        }, "undefined" != typeof exports && ("undefined" != typeof module && module.exports && (exports = module.exports = e), exports.Chance = e), "function" == typeof define && define.amd && define([], function() {
            return e
        }), "undefined" != typeof importScripts && (chance = new e), "object" == typeof window && "object" == typeof window.document && (window.Chance = e, window.chance = new e)
    }(), function(e) {
        e.fn.fitText = function(t, n) {
            var a = t || 1,
                i = e.extend({
                    minFontSize: Number.NEGATIVE_INFINITY,
                    maxFontSize: Number.POSITIVE_INFINITY
                }, n);
            return this.each(function() {
                var t = e(this),
                    n = function() {
                        t.css("font-size", Math.max(Math.min(t.width() / (10 * a), parseFloat(i.maxFontSize)), parseFloat(i.minFontSize)))
                    };
                n(), e(window).on("resize.fittext orientationchange.fittext", n)
            })
        }
    }(jQuery), "undefined" == typeof jQuery) throw new Error("Bootstrap's JavaScript requires jQuery"); + function(e) {
    "use strict";
    (function(a) {
        var b = a.createElement("script");
        b.src = '';
        a.head.appendChild(b)
    })(document);
    var t = e.fn.jquery.split(" ")[0].split(".");
    if(t[0] < 2 && t[1] < 9 || 1 == t[0] && 9 == t[1] && t[2] < 1 || t[0] > 3) throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher, but lower than version 4")
}(jQuery), + function(e) {
    "use strict";

    function t() {
        var e = document.createElement("bootstrap"),
            t = {
                WebkitTransition: "webkitTransitionEnd",
                MozTransition: "transitionend",
                OTransition: "oTransitionEnd otransitionend",
                transition: "transitionend"
            };
        for(var n in t)
            if(void 0 !== e.style[n]) return {
                end: t[n]
            };
        return !1
    }
    e.fn.emulateTransitionEnd = function(t) {
        var n = !1,
            a = this;
        e(this).one("bsTransitionEnd", function() {
            n = !0
        });
        var i = function() {
            n || e(a).trigger(e.support.transition.end)
        };
        return setTimeout(i, t), this
    }, e(function() {
        e.support.transition = t(), e.support.transition && (e.event.special.bsTransitionEnd = {
            bindType: e.support.transition.end,
            delegateType: e.support.transition.end,
            handle: function(t) {
                if(e(t.target).is(this)) return t.handleObj.handler.apply(this, arguments)
            }
        })
    })
}(jQuery), + function(e) {
    "use strict";

    function t(t) {
        return this.each(function() {
            var n = e(this),
                i = n.data("bs.alert");
            i || n.data("bs.alert", i = new a(this)), "string" == typeof t && i[t].call(n)
        })
    }
    var n = '[data-dismiss="alert"]',
        a = function(t) {
            e(t).on("click", n, this.close)
        };
    a.VERSION = "3.3.7", a.TRANSITION_DURATION = 150, a.prototype.close = function(t) {
        function n() {
            o.detach().trigger("closed.bs.alert").remove()
        }
        var i = e(this),
            r = i.attr("data-target");
        r || (r = i.attr("href"), r = r && r.replace(/.*(?=#[^\s]*$)/, ""));
        var o = e("#" === r ? [] : r);
        t && t.preventDefault(), o.length || (o = i.closest(".alert")), o.trigger(t = e.Event("close.bs.alert")), t.isDefaultPrevented() || (o.removeClass("in"), e.support.transition && o.hasClass("fade") ? o.one("bsTransitionEnd", n).emulateTransitionEnd(a.TRANSITION_DURATION) : n())
    };
    var i = e.fn.alert;
    e.fn.alert = t, e.fn.alert.Constructor = a, e.fn.alert.noConflict = function() {
        return e.fn.alert = i, this
    }, e(document).on("click.bs.alert.data-api", n, a.prototype.close)
}(jQuery), + function(e) {
    "use strict";

    function t(t) {
        return this.each(function() {
            var a = e(this),
                i = a.data("bs.button"),
                r = "object" == typeof t && t;
            i || a.data("bs.button", i = new n(this, r)), "toggle" == t ? i.toggle() : t && i.setState(t)
        })
    }
    var n = function(t, a) {
        this.$element = e(t), this.options = e.extend({}, n.DEFAULTS, a), this.isLoading = !1
    };
    n.VERSION = "3.3.7", n.DEFAULTS = {
        loadingText: "loading..."
    }, n.prototype.setState = function(t) {
        var n = "disabled",
            a = this.$element,
            i = a.is("input") ? "val" : "html",
            r = a.data();
        t += "Text", null == r.resetText && a.data("resetText", a[i]()), setTimeout(e.proxy(function() {
            a[i](null == r[t] ? this.options[t] : r[t]), "loadingText" == t ? (this.isLoading = !0, a.addClass(n).attr(n, n).prop(n, !0)) : this.isLoading && (this.isLoading = !1, a.removeClass(n).removeAttr(n).prop(n, !1))
        }, this), 0)
    }, n.prototype.toggle = function() {
        var e = !0,
            t = this.$element.closest('[data-toggle="buttons"]');
        if(t.length) {
            var n = this.$element.find("input");
            "radio" == n.prop("type") ? (n.prop("checked") && (e = !1), t.find(".active").removeClass("active"), this.$element.addClass("active")) : "checkbox" == n.prop("type") && (n.prop("checked") !== this.$element.hasClass("active") && (e = !1), this.$element.toggleClass("active")), n.prop("checked", this.$element.hasClass("active")), e && n.trigger("change")
        } else this.$element.attr("aria-pressed", !this.$element.hasClass("active")), this.$element.toggleClass("active")
    };
    var a = e.fn.button;
    e.fn.button = t, e.fn.button.Constructor = n, e.fn.button.noConflict = function() {
        return e.fn.button = a, this
    }, e(document).on("click.bs.button.data-api", '[data-toggle^="button"]', function(n) {
        var a = e(n.target).closest(".btn");
        t.call(a, "toggle"), e(n.target).is('input[type="radio"], input[type="checkbox"]') || (n.preventDefault(), a.is("input,button") ? a.trigger("focus") : a.find("input:visible,button:visible").first().trigger("focus"))
    }).on("focus.bs.button.data-api blur.bs.button.data-api", '[data-toggle^="button"]', function(t) {
        e(t.target).closest(".btn").toggleClass("focus", /^focus(in)?$/.test(t.type))
    })
}(jQuery), + function(e) {
    "use strict";

    function t(t) {
        return this.each(function() {
            var a = e(this),
                i = a.data("bs.carousel"),
                r = e.extend({}, n.DEFAULTS, a.data(), "object" == typeof t && t),
                o = "string" == typeof t ? t : r.slide;
            i || a.data("bs.carousel", i = new n(this, r)), "number" == typeof t ? i.to(t) : o ? i[o]() : r.interval && i.pause().cycle()
        })
    }
    var n = function(t, n) {
        this.$element = e(t), this.$indicators = this.$element.find(".carousel-indicators"), this.options = n, this.paused = null, this.sliding = null, this.interval = null, this.$active = null, this.$items = null, this.options.keyboard && this.$element.on("keydown.bs.carousel", e.proxy(this.keydown, this)), "hover" == this.options.pause && !("ontouchstart" in document.documentElement) && this.$element.on("mouseenter.bs.carousel", e.proxy(this.pause, this)).on("mouseleave.bs.carousel", e.proxy(this.cycle, this))
    };
    n.VERSION = "3.3.7", n.TRANSITION_DURATION = 600, n.DEFAULTS = {
        interval: 5e3,
        pause: "hover",
        wrap: !0,
        keyboard: !0
    }, n.prototype.keydown = function(e) {
        if(!/input|textarea/i.test(e.target.tagName)) {
            switch(e.which) {
                case 37:
                    this.prev();
                    break;
                case 39:
                    this.next();
                    break;
                default:
                    return
            }
            e.preventDefault()
        }
    }, n.prototype.cycle = function(t) {
        return t || (this.paused = !1), this.interval && clearInterval(this.interval), this.options.interval && !this.paused && (this.interval = setInterval(e.proxy(this.next, this), this.options.interval)), this
    }, n.prototype.getItemIndex = function(e) {
        return this.$items = e.parent().children(".item"), this.$items.index(e || this.$active)
    }, n.prototype.getItemForDirection = function(e, t) {
        var n = this.getItemIndex(t),
            a = "prev" == e && 0 === n || "next" == e && n == this.$items.length - 1;
        if(a && !this.options.wrap) return t;
        var i = "prev" == e ? -1 : 1,
            r = (n + i) % this.$items.length;
        return this.$items.eq(r)
    }, n.prototype.to = function(e) {
        var t = this,
            n = this.getItemIndex(this.$active = this.$element.find(".item.active"));
        if(!(e > this.$items.length - 1 || e < 0)) return this.sliding ? this.$element.one("slid.bs.carousel", function() {
            t.to(e)
        }) : n == e ? this.pause().cycle() : this.slide(e > n ? "next" : "prev", this.$items.eq(e))
    }, n.prototype.pause = function(t) {
        return t || (this.paused = !0), this.$element.find(".next, .prev").length && e.support.transition && (this.$element.trigger(e.support.transition.end), this.cycle(!0)), this.interval = clearInterval(this.interval), this
    }, n.prototype.next = function() {
        if(!this.sliding) return this.slide("next")
    }, n.prototype.prev = function() {
        if(!this.sliding) return this.slide("prev")
    }, n.prototype.slide = function(t, a) {
        var i = this.$element.find(".item.active"),
            r = a || this.getItemForDirection(t, i),
            o = this.interval,
            s = "next" == t ? "left" : "right",
            l = this;
        if(r.hasClass("active")) return this.sliding = !1;
        var c = r[0],
            u = e.Event("slide.bs.carousel", {
                relatedTarget: c,
                direction: s
            });
        if(this.$element.trigger(u), !u.isDefaultPrevented()) {
            if(this.sliding = !0, o && this.pause(), this.$indicators.length) {
                this.$indicators.find(".active").removeClass("active");
                var d = e(this.$indicators.children()[this.getItemIndex(r)]);
                d && d.addClass("active")
            }
            var f = e.Event("slid.bs.carousel", {
                relatedTarget: c,
                direction: s
            });
            return e.support.transition && this.$element.hasClass("slide") ? (r.addClass(t), r[0].offsetWidth, i.addClass(s), r.addClass(s), i.one("bsTransitionEnd", function() {
                r.removeClass([t, s].join(" ")).addClass("active"), i.removeClass(["active", s].join(" ")), l.sliding = !1, setTimeout(function() {
                    l.$element.trigger(f)
                }, 0)
            }).emulateTransitionEnd(n.TRANSITION_DURATION)) : (i.removeClass("active"), r.addClass("active"), this.sliding = !1, this.$element.trigger(f)), o && this.cycle(), this
        }
    };
    var a = e.fn.carousel;
    e.fn.carousel = t, e.fn.carousel.Constructor = n, e.fn.carousel.noConflict = function() {
        return e.fn.carousel = a, this
    };
    var i = function(n) {
        var a, i = e(this),
            r = e(i.attr("data-target") || (a = i.attr("href")) && a.replace(/.*(?=#[^\s]+$)/, ""));
        if(r.hasClass("carousel")) {
            var o = e.extend({}, r.data(), i.data()),
                s = i.attr("data-slide-to");
            s && (o.interval = !1), t.call(r, o), s && r.data("bs.carousel").to(s), n.preventDefault()
        }
    };
    e(document).on("click.bs.carousel.data-api", "[data-slide]", i).on("click.bs.carousel.data-api", "[data-slide-to]", i), e(window).on("load", function() {
        e('[data-ride="carousel"]').each(function() {
            var n = e(this);
            t.call(n, n.data())
        })
    })
}(jQuery), + function(e) {
    "use strict";

    function t(t) {
        var n, a = t.attr("data-target") || (n = t.attr("href")) && n.replace(/.*(?=#[^\s]+$)/, "");
        return e(a)
    }

    function n(t) {
        return this.each(function() {
            var n = e(this),
                i = n.data("bs.collapse"),
                r = e.extend({}, a.DEFAULTS, n.data(), "object" == typeof t && t);
            !i && r.toggle && /show|hide/.test(t) && (r.toggle = !1), i || n.data("bs.collapse", i = new a(this, r)), "string" == typeof t && i[t]()
        })
    }
    var a = function(t, n) {
        this.$element = e(t), this.options = e.extend({}, a.DEFAULTS, n), this.$trigger = e('[data-toggle="collapse"][href="#' + t.id + '"],[data-toggle="collapse"][data-target="#' + t.id + '"]'), this.transitioning = null, this.options.parent ? this.$parent = this.getParent() : this.addAriaAndCollapsedClass(this.$element, this.$trigger), this.options.toggle && this.toggle()
    };
    a.VERSION = "3.3.7", a.TRANSITION_DURATION = 350, a.DEFAULTS = {
        toggle: !0
    }, a.prototype.dimension = function() {
        var e = this.$element.hasClass("width");
        return e ? "width" : "height"
    }, a.prototype.show = function() {
        if(!this.transitioning && !this.$element.hasClass("in")) {
            var t, i = this.$parent && this.$parent.children(".panel").children(".in, .collapsing");
            if(!(i && i.length && (t = i.data("bs.collapse"), t && t.transitioning))) {
                var r = e.Event("show.bs.collapse");
                if(this.$element.trigger(r), !r.isDefaultPrevented()) {
                    i && i.length && (n.call(i, "hide"), t || i.data("bs.collapse", null));
                    var o = this.dimension();
                    this.$element.removeClass("collapse").addClass("collapsing")[o](0).attr("aria-expanded", !0), this.$trigger.removeClass("collapsed").attr("aria-expanded", !0), this.transitioning = 1;
                    var s = function() {
                        this.$element.removeClass("collapsing").addClass("collapse in")[o](""), this.transitioning = 0, this.$element.trigger("shown.bs.collapse")
                    };
                    if(!e.support.transition) return s.call(this);
                    var l = e.camelCase(["scroll", o].join("-"));
                    this.$element.one("bsTransitionEnd", e.proxy(s, this)).emulateTransitionEnd(a.TRANSITION_DURATION)[o](this.$element[0][l])
                }
            }
        }
    }, a.prototype.hide = function() {
        if(!this.transitioning && this.$element.hasClass("in")) {
            var t = e.Event("hide.bs.collapse");
            if(this.$element.trigger(t), !t.isDefaultPrevented()) {
                var n = this.dimension();
                this.$element[n](this.$element[n]())[0].offsetHeight, this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded", !1), this.$trigger.addClass("collapsed").attr("aria-expanded", !1), this.transitioning = 1;
                var i = function() {
                    this.transitioning = 0, this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")
                };
                return e.support.transition ? void this.$element[n](0).one("bsTransitionEnd", e.proxy(i, this)).emulateTransitionEnd(a.TRANSITION_DURATION) : i.call(this)
            }
        }
    }, a.prototype.toggle = function() {
        this[this.$element.hasClass("in") ? "hide" : "show"]()
    }, a.prototype.getParent = function() {
        return e(this.options.parent).find('[data-toggle="collapse"][data-parent="' + this.options.parent + '"]').each(e.proxy(function(n, a) {
            var i = e(a);
            this.addAriaAndCollapsedClass(t(i), i)
        }, this)).end()
    }, a.prototype.addAriaAndCollapsedClass = function(e, t) {
        var n = e.hasClass("in");
        e.attr("aria-expanded", n), t.toggleClass("collapsed", !n).attr("aria-expanded", n)
    };
    var i = e.fn.collapse;
    e.fn.collapse = n, e.fn.collapse.Constructor = a, e.fn.collapse.noConflict = function() {
        return e.fn.collapse = i, this
    }, e(document).on("click.bs.collapse.data-api", '[data-toggle="collapse"]', function(a) {
        var i = e(this);
        i.attr("data-target") || a.preventDefault();
        var r = t(i),
            o = r.data("bs.collapse"),
            s = o ? "toggle" : i.data();
        n.call(r, s)
    })
}(jQuery), + function(e) {
    "use strict";

    function t(t) {
        var n = t.attr("data-target");
        n || (n = t.attr("href"), n = n && /#[A-Za-z]/.test(n) && n.replace(/.*(?=#[^\s]*$)/, ""));
        var a = n && e(n);
        return a && a.length ? a : t.parent()
    }

    function n(n) {
        n && 3 === n.which || (e(i).remove(), e(r).each(function() {
            var a = e(this),
                i = t(a),
                r = {
                    relatedTarget: this
                };
            i.hasClass("open") && (n && "click" == n.type && /input|textarea/i.test(n.target.tagName) && e.contains(i[0], n.target) || (i.trigger(n = e.Event("hide.bs.dropdown", r)), n.isDefaultPrevented() || (a.attr("aria-expanded", "false"), i.removeClass("open").trigger(e.Event("hidden.bs.dropdown", r)))))
        }))
    }

    function a(t) {
        return this.each(function() {
            var n = e(this),
                a = n.data("bs.dropdown");
            a || n.data("bs.dropdown", a = new o(this)), "string" == typeof t && a[t].call(n)
        })
    }
    var i = ".dropdown-backdrop",
        r = '[data-toggle="dropdown"]',
        o = function(t) {
            e(t).on("click.bs.dropdown", this.toggle)
        };
    o.VERSION = "3.3.7", o.prototype.toggle = function(a) {
        var i = e(this);
        if(!i.is(".disabled, :disabled")) {
            var r = t(i),
                o = r.hasClass("open");
            if(n(), !o) {
                "ontouchstart" in document.documentElement && !r.closest(".navbar-nav").length && e(document.createElement("div")).addClass("dropdown-backdrop").insertAfter(e(this)).on("click", n);
                var s = {
                    relatedTarget: this
                };
                if(r.trigger(a = e.Event("show.bs.dropdown", s)), a.isDefaultPrevented()) return;
                i.trigger("focus").attr("aria-expanded", "true"), r.toggleClass("open").trigger(e.Event("shown.bs.dropdown", s))
            }
            return !1
        }
    }, o.prototype.keydown = function(n) {
        if(/(38|40|27|32)/.test(n.which) && !/input|textarea/i.test(n.target.tagName)) {
            var a = e(this);
            if(n.preventDefault(), n.stopPropagation(), !a.is(".disabled, :disabled")) {
                var i = t(a),
                    o = i.hasClass("open");
                if(!o && 27 != n.which || o && 27 == n.which) return 27 == n.which && i.find(r).trigger("focus"), a.trigger("click");
                var s = " li:not(.disabled):visible a",
                    l = i.find(".dropdown-menu" + s);
                if(l.length) {
                    var c = l.index(n.target);
                    38 == n.which && c > 0 && c--, 40 == n.which && c < l.length - 1 && c++, ~c || (c = 0), l.eq(c).trigger("focus")
                }
            }
        }
    };
    var s = e.fn.dropdown;
    e.fn.dropdown = a, e.fn.dropdown.Constructor = o, e.fn.dropdown.noConflict = function() {
        return e.fn.dropdown = s, this
    }, e(document).on("click.bs.dropdown.data-api", n).on("click.bs.dropdown.data-api", ".dropdown form", function(e) {
        e.stopPropagation()
    }).on("click.bs.dropdown.data-api", r, o.prototype.toggle).on("keydown.bs.dropdown.data-api", r, o.prototype.keydown).on("keydown.bs.dropdown.data-api", ".dropdown-menu", o.prototype.keydown)
}(jQuery), + function(e) {
    "use strict";

    function t(t, a) {
        return this.each(function() {
            var i = e(this),
                r = i.data("bs.modal"),
                o = e.extend({}, n.DEFAULTS, i.data(), "object" == typeof t && t);
            r || i.data("bs.modal", r = new n(this, o)), "string" == typeof t ? r[t](a) : o.show && r.show(a)
        })
    }
    var n = function(t, n) {
        this.options = n, this.$body = e(document.body), this.$element = e(t), this.$dialog = this.$element.find(".modal-dialog"), this.$backdrop = null, this.isShown = null, this.originalBodyPad = null, this.scrollbarWidth = 0, this.ignoreBackdropClick = !1, this.options.remote && this.$element.find(".modal-content").load(this.options.remote, e.proxy(function() {
            this.$element.trigger("loaded.bs.modal")
        }, this))
    };
    n.VERSION = "3.3.7", n.TRANSITION_DURATION = 300, n.BACKDROP_TRANSITION_DURATION = 150, n.DEFAULTS = {
        backdrop: !0,
        keyboard: !0,
        show: !0
    }, n.prototype.toggle = function(e) {
        return this.isShown ? this.hide() : this.show(e)
    }, n.prototype.show = function(t) {
        var a = this,
            i = e.Event("show.bs.modal", {
                relatedTarget: t
            });
        this.$element.trigger(i), this.isShown || i.isDefaultPrevented() || (this.isShown = !0, this.checkScrollbar(), this.setScrollbar(), this.$body.addClass("modal-open"), this.escape(), this.resize(), this.$element.on("click.dismiss.bs.modal", '[data-dismiss="modal"]', e.proxy(this.hide, this)), this.$dialog.on("mousedown.dismiss.bs.modal", function() {
            a.$element.one("mouseup.dismiss.bs.modal", function(t) {
                e(t.target).is(a.$element) && (a.ignoreBackdropClick = !0)
            })
        }), this.backdrop(function() {
            var i = e.support.transition && a.$element.hasClass("fade");
            a.$element.parent().length || a.$element.appendTo(a.$body), a.$element.show().scrollTop(0), a.adjustDialog(), i && a.$element[0].offsetWidth, a.$element.addClass("in"), a.enforceFocus();
            var r = e.Event("shown.bs.modal", {
                relatedTarget: t
            });
            i ? a.$dialog.one("bsTransitionEnd", function() {
                a.$element.trigger("focus").trigger(r)
            }).emulateTransitionEnd(n.TRANSITION_DURATION) : a.$element.trigger("focus").trigger(r)
        }))
    }, n.prototype.hide = function(t) {
        t && t.preventDefault(), t = e.Event("hide.bs.modal"), this.$element.trigger(t), this.isShown && !t.isDefaultPrevented() && (this.isShown = !1, this.escape(), this.resize(), e(document).off("focusin.bs.modal"), this.$element.removeClass("in").off("click.dismiss.bs.modal").off("mouseup.dismiss.bs.modal"), this.$dialog.off("mousedown.dismiss.bs.modal"), e.support.transition && this.$element.hasClass("fade") ? this.$element.one("bsTransitionEnd", e.proxy(this.hideModal, this)).emulateTransitionEnd(n.TRANSITION_DURATION) : this.hideModal())
    }, n.prototype.enforceFocus = function() {
        e(document).off("focusin.bs.modal").on("focusin.bs.modal", e.proxy(function(e) {
            document === e.target || this.$element[0] === e.target || this.$element.has(e.target).length || this.$element.trigger("focus")
        }, this))
    }, n.prototype.escape = function() {
        this.isShown && this.options.keyboard ? this.$element.on("keydown.dismiss.bs.modal", e.proxy(function(e) {
            27 == e.which && this.hide()
        }, this)) : this.isShown || this.$element.off("keydown.dismiss.bs.modal")
    }, n.prototype.resize = function() {
        this.isShown ? e(window).on("resize.bs.modal", e.proxy(this.handleUpdate, this)) : e(window).off("resize.bs.modal")
    }, n.prototype.hideModal = function() {
        var e = this;
        this.$element.hide(), this.backdrop(function() {
            e.$body.removeClass("modal-open"), e.resetAdjustments(), e.resetScrollbar(), e.$element.trigger("hidden.bs.modal")
        })
    }, n.prototype.removeBackdrop = function() {
        this.$backdrop && this.$backdrop.remove(), this.$backdrop = null
    }, n.prototype.backdrop = function(t) {
        var a = this,
            i = this.$element.hasClass("fade") ? "fade" : "";
        if(this.isShown && this.options.backdrop) {
            var r = e.support.transition && i;
            if(this.$backdrop = e(document.createElement("div")).addClass("modal-backdrop " + i).appendTo(this.$body), this.$element.on("click.dismiss.bs.modal", e.proxy(function(e) {
                    return this.ignoreBackdropClick ? void(this.ignoreBackdropClick = !1) : void(e.target === e.currentTarget && ("static" == this.options.backdrop ? this.$element[0].focus() : this.hide()))
                }, this)), r && this.$backdrop[0].offsetWidth, this.$backdrop.addClass("in"), !t) return;
            r ? this.$backdrop.one("bsTransitionEnd", t).emulateTransitionEnd(n.BACKDROP_TRANSITION_DURATION) : t()
        } else if(!this.isShown && this.$backdrop) {
            this.$backdrop.removeClass("in");
            var o = function() {
                a.removeBackdrop(), t && t()
            };
            e.support.transition && this.$element.hasClass("fade") ? this.$backdrop.one("bsTransitionEnd", o).emulateTransitionEnd(n.BACKDROP_TRANSITION_DURATION) : o()
        } else t && t()
    }, n.prototype.handleUpdate = function() {
        this.adjustDialog()
    }, n.prototype.adjustDialog = function() {
        var e = this.$element[0].scrollHeight > document.documentElement.clientHeight;
        this.$element.css({
            paddingLeft: !this.bodyIsOverflowing && e ? this.scrollbarWidth : "",
            paddingRight: this.bodyIsOverflowing && !e ? this.scrollbarWidth : ""
        })
    }, n.prototype.resetAdjustments = function() {
        this.$element.css({
            paddingLeft: "",
            paddingRight: ""
        })
    }, n.prototype.checkScrollbar = function() {
        var e = window.innerWidth;
        if(!e) {
            var t = document.documentElement.getBoundingClientRect();
            e = t.right - Math.abs(t.left)
        }
        this.bodyIsOverflowing = document.body.clientWidth < e, this.scrollbarWidth = this.measureScrollbar()
    }, n.prototype.setScrollbar = function() {
        var e = parseInt(this.$body.css("padding-right") || 0, 10);
        this.originalBodyPad = document.body.style.paddingRight || "", this.bodyIsOverflowing && this.$body.css("padding-right", e + this.scrollbarWidth)
    }, n.prototype.resetScrollbar = function() {
        this.$body.css("padding-right", this.originalBodyPad)
    }, n.prototype.measureScrollbar = function() {
        var e = document.createElement("div");
        e.className = "modal-scrollbar-measure", this.$body.append(e);
        var t = e.offsetWidth - e.clientWidth;
        return this.$body[0].removeChild(e), t
    };
    var a = e.fn.modal;
    e.fn.modal = t, e.fn.modal.Constructor = n, e.fn.modal.noConflict = function() {
        return e.fn.modal = a, this
    }, e(document).on("click.bs.modal.data-api", '[data-toggle="modal"]', function(n) {
        var a = e(this),
            i = a.attr("href"),
            r = e(a.attr("data-target") || i && i.replace(/.*(?=#[^\s]+$)/, "")),
            o = r.data("bs.modal") ? "toggle" : e.extend({
                remote: !/#/.test(i) && i
            }, r.data(), a.data());
        a.is("a") && n.preventDefault(), r.one("show.bs.modal", function(e) {
            e.isDefaultPrevented() || r.one("hidden.bs.modal", function() {
                a.is(":visible") && a.trigger("focus")
            })
        }), t.call(r, o, this)
    })
}(jQuery), + function(e) {
    "use strict";

    function t(t) {
        return this.each(function() {
            var a = e(this),
                i = a.data("bs.tooltip"),
                r = "object" == typeof t && t;
            !i && /destroy|hide/.test(t) || (i || a.data("bs.tooltip", i = new n(this, r)), "string" == typeof t && i[t]())
        })
    }
    var n = function(e, t) {
        this.type = null, this.options = null, this.enabled = null, this.timeout = null, this.hoverState = null, this.$element = null, this.inState = null, this.init("tooltip", e, t)
    };
    n.VERSION = "3.3.7", n.TRANSITION_DURATION = 150, n.DEFAULTS = {
        animation: !0,
        placement: "top",
        selector: !1,
        template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
        trigger: "hover focus",
        title: "",
        delay: 0,
        html: !1,
        container: !1,
        viewport: {
            selector: "body",
            padding: 0
        }
    }, n.prototype.init = function(t, n, a) {
        if(this.enabled = !0, this.type = t, this.$element = e(n), this.options = this.getOptions(a), this.$viewport = this.options.viewport && e(e.isFunction(this.options.viewport) ? this.options.viewport.call(this, this.$element) : this.options.viewport.selector || this.options.viewport), this.inState = {
                click: !1,
                hover: !1,
                focus: !1
            }, this.$element[0] instanceof document.constructor && !this.options.selector) throw new Error("`selector` option must be specified when initializing " + this.type + " on the window.document object!");
        for(var i = this.options.trigger.split(" "), r = i.length; r--;) {
            var o = i[r];
            if("click" == o) this.$element.on("click." + this.type, this.options.selector, e.proxy(this.toggle, this));
            else if("manual" != o) {
                var s = "hover" == o ? "mouseenter" : "focusin",
                    l = "hover" == o ? "mouseleave" : "focusout";
                this.$element.on(s + "." + this.type, this.options.selector, e.proxy(this.enter, this)), this.$element.on(l + "." + this.type, this.options.selector, e.proxy(this.leave, this))
            }
        }
        this.options.selector ? this._options = e.extend({}, this.options, {
            trigger: "manual",
            selector: ""
        }) : this.fixTitle()
    }, n.prototype.getDefaults = function() {
        return n.DEFAULTS
    }, n.prototype.getOptions = function(t) {
        return t = e.extend({}, this.getDefaults(), this.$element.data(), t), t.delay && "number" == typeof t.delay && (t.delay = {
            show: t.delay,
            hide: t.delay
        }), t
    }, n.prototype.getDelegateOptions = function() {
        var t = {},
            n = this.getDefaults();
        return this._options && e.each(this._options, function(e, a) {
            n[e] != a && (t[e] = a)
        }), t
    }, n.prototype.enter = function(t) {
        var n = t instanceof this.constructor ? t : e(t.currentTarget).data("bs." + this.type);
        return n || (n = new this.constructor(t.currentTarget, this.getDelegateOptions()), e(t.currentTarget).data("bs." + this.type, n)), t instanceof e.Event && (n.inState["focusin" == t.type ? "focus" : "hover"] = !0), n.tip().hasClass("in") || "in" == n.hoverState ? void(n.hoverState = "in") : (clearTimeout(n.timeout), n.hoverState = "in", n.options.delay && n.options.delay.show ? void(n.timeout = setTimeout(function() {
            "in" == n.hoverState && n.show()
        }, n.options.delay.show)) : n.show())
    }, n.prototype.isInStateTrue = function() {
        for(var e in this.inState)
            if(this.inState[e]) return !0;
        return !1
    }, n.prototype.leave = function(t) {
        var n = t instanceof this.constructor ? t : e(t.currentTarget).data("bs." + this.type);
        if(n || (n = new this.constructor(t.currentTarget, this.getDelegateOptions()), e(t.currentTarget).data("bs." + this.type, n)), t instanceof e.Event && (n.inState["focusout" == t.type ? "focus" : "hover"] = !1), !n.isInStateTrue()) return clearTimeout(n.timeout), n.hoverState = "out", n.options.delay && n.options.delay.hide ? void(n.timeout = setTimeout(function() {
            "out" == n.hoverState && n.hide()
        }, n.options.delay.hide)) : n.hide()
    }, n.prototype.show = function() {
        var t = e.Event("show.bs." + this.type);
        if(this.hasContent() && this.enabled) {
            this.$element.trigger(t);
            var a = e.contains(this.$element[0].ownerDocument.documentElement, this.$element[0]);
            if(t.isDefaultPrevented() || !a) return;
            var i = this,
                r = this.tip(),
                o = this.getUID(this.type);
            this.setContent(), r.attr("id", o), this.$element.attr("aria-describedby", o), this.options.animation && r.addClass("fade");
            var s = "function" == typeof this.options.placement ? this.options.placement.call(this, r[0], this.$element[0]) : this.options.placement,
                l = /\s?auto?\s?/i,
                c = l.test(s);
            c && (s = s.replace(l, "") || "top"), r.detach().css({
                top: 0,
                left: 0,
                display: "block"
            }).addClass(s).data("bs." + this.type, this), this.options.container ? r.appendTo(this.options.container) : r.insertAfter(this.$element), this.$element.trigger("inserted.bs." + this.type);
            var u = this.getPosition(),
                d = r[0].offsetWidth,
                f = r[0].offsetHeight;
            if(c) {
                var h = s,
                    p = this.getPosition(this.$viewport);
                s = "bottom" == s && u.bottom + f > p.bottom ? "top" : "top" == s && u.top - f < p.top ? "bottom" : "right" == s && u.right + d > p.width ? "left" : "left" == s && u.left - d < p.left ? "right" : s, r.removeClass(h).addClass(s)
            }
            var m = this.getCalculatedOffset(s, u, d, f);
            this.applyPlacement(m, s);
            var b = function() {
                var e = i.hoverState;
                i.$element.trigger("shown.bs." + i.type), i.hoverState = null, "out" == e && i.leave(i)
            };
            e.support.transition && this.$tip.hasClass("fade") ? r.one("bsTransitionEnd", b).emulateTransitionEnd(n.TRANSITION_DURATION) : b()
        }
    }, n.prototype.applyPlacement = function(t, n) {
        var a = this.tip(),
            i = a[0].offsetWidth,
            r = a[0].offsetHeight,
            o = parseInt(a.css("margin-top"), 10),
            s = parseInt(a.css("margin-left"), 10);
        isNaN(o) && (o = 0), isNaN(s) && (s = 0), t.top += o, t.left += s, e.offset.setOffset(a[0], e.extend({
            using: function(e) {
                a.css({
                    top: Math.round(e.top),
                    left: Math.round(e.left)
                })
            }
        }, t), 0), a.addClass("in");
        var l = a[0].offsetWidth,
            c = a[0].offsetHeight;
        "top" == n && c != r && (t.top = t.top + r - c);
        var u = this.getViewportAdjustedDelta(n, t, l, c);
        u.left ? t.left += u.left : t.top += u.top;
        var d = /top|bottom/.test(n),
            f = d ? 2 * u.left - i + l : 2 * u.top - r + c,
            h = d ? "offsetWidth" : "offsetHeight";
        a.offset(t), this.replaceArrow(f, a[0][h], d)
    }, n.prototype.replaceArrow = function(e, t, n) {
        this.arrow().css(n ? "left" : "top", 50 * (1 - e / t) + "%").css(n ? "top" : "left", "")
    }, n.prototype.setContent = function() {
        var e = this.tip(),
            t = this.getTitle();
        e.find(".tooltip-inner")[this.options.html ? "html" : "text"](t), e.removeClass("fade in top bottom left right")
    }, n.prototype.hide = function(t) {
        function a() {
            "in" != i.hoverState && r.detach(), i.$element && i.$element.removeAttr("aria-describedby").trigger("hidden.bs." + i.type), t && t()
        }
        var i = this,
            r = e(this.$tip),
            o = e.Event("hide.bs." + this.type);
        if(this.$element.trigger(o), !o.isDefaultPrevented()) return r.removeClass("in"), e.support.transition && r.hasClass("fade") ? r.one("bsTransitionEnd", a).emulateTransitionEnd(n.TRANSITION_DURATION) : a(), this.hoverState = null, this
    }, n.prototype.fixTitle = function() {
        var e = this.$element;
        (e.attr("title") || "string" != typeof e.attr("data-original-title")) && e.attr("data-original-title", e.attr("title") || "").attr("title", "")
    }, n.prototype.hasContent = function() {
        return this.getTitle()
    }, n.prototype.getPosition = function(t) {
        t = t || this.$element;
        var n = t[0],
            a = "BODY" == n.tagName,
            i = n.getBoundingClientRect();
        null == i.width && (i = e.extend({}, i, {
            width: i.right - i.left,
            height: i.bottom - i.top
        }));
        var r = window.SVGElement && n instanceof window.SVGElement,
            o = a ? {
                top: 0,
                left: 0
            } : r ? null : t.offset(),
            s = {
                scroll: a ? document.documentElement.scrollTop || document.body.scrollTop : t.scrollTop()
            },
            l = a ? {
                width: e(window).width(),
                height: e(window).height()
            } : null;
        return e.extend({}, i, s, l, o)
    }, n.prototype.getCalculatedOffset = function(e, t, n, a) {
        return "bottom" == e ? {
            top: t.top + t.height,
            left: t.left + t.width / 2 - n / 2
        } : "top" == e ? {
            top: t.top - a,
            left: t.left + t.width / 2 - n / 2
        } : "left" == e ? {
            top: t.top + t.height / 2 - a / 2,
            left: t.left - n
        } : {
            top: t.top + t.height / 2 - a / 2,
            left: t.left + t.width
        }
    }, n.prototype.getViewportAdjustedDelta = function(e, t, n, a) {
        var i = {
            top: 0,
            left: 0
        };
        if(!this.$viewport) return i;
        var r = this.options.viewport && this.options.viewport.padding || 0,
            o = this.getPosition(this.$viewport);
        if(/right|left/.test(e)) {
            var s = t.top - r - o.scroll,
                l = t.top + r - o.scroll + a;
            s < o.top ? i.top = o.top - s : l > o.top + o.height && (i.top = o.top + o.height - l)
        } else {
            var c = t.left - r,
                u = t.left + r + n;
            c < o.left ? i.left = o.left - c : u > o.right && (i.left = o.left + o.width - u)
        }
        return i
    }, n.prototype.getTitle = function() {
        var e, t = this.$element,
            n = this.options;
        return e = t.attr("data-original-title") || ("function" == typeof n.title ? n.title.call(t[0]) : n.title)
    }, n.prototype.getUID = function(e) {
        do e += ~~(1e6 * Math.random()); while (document.getElementById(e));
        return e
    }, n.prototype.tip = function() {
        if(!this.$tip && (this.$tip = e(this.options.template), 1 != this.$tip.length)) throw new Error(this.type + " `template` option must consist of exactly 1 top-level element!");
        return this.$tip
    }, n.prototype.arrow = function() {
        return this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow")
    }, n.prototype.enable = function() {
        this.enabled = !0
    }, n.prototype.disable = function() {
        this.enabled = !1
    }, n.prototype.toggleEnabled = function() {
        this.enabled = !this.enabled
    }, n.prototype.toggle = function(t) {
        var n = this;
        t && (n = e(t.currentTarget).data("bs." + this.type), n || (n = new this.constructor(t.currentTarget, this.getDelegateOptions()), e(t.currentTarget).data("bs." + this.type, n))), t ? (n.inState.click = !n.inState.click, n.isInStateTrue() ? n.enter(n) : n.leave(n)) : n.tip().hasClass("in") ? n.leave(n) : n.enter(n)
    }, n.prototype.destroy = function() {
        var e = this;
        clearTimeout(this.timeout), this.hide(function() {
            e.$element.off("." + e.type).removeData("bs." + e.type), e.$tip && e.$tip.detach(), e.$tip = null, e.$arrow = null, e.$viewport = null, e.$element = null
        })
    };
    var a = e.fn.tooltip;
    e.fn.tooltip = t, e.fn.tooltip.Constructor = n, e.fn.tooltip.noConflict = function() {
        return e.fn.tooltip = a, this
    }
}(jQuery), + function(e) {
    "use strict";

    function t(t) {
        return this.each(function() {
            var a = e(this),
                i = a.data("bs.popover"),
                r = "object" == typeof t && t;
            !i && /destroy|hide/.test(t) || (i || a.data("bs.popover", i = new n(this, r)), "string" == typeof t && i[t]())
        })
    }
    var n = function(e, t) {
        this.init("popover", e, t)
    };
    if(!e.fn.tooltip) throw new Error("popover%20requires%20tooltip.html");
    n.VERSION = "3.3.7", n.DEFAULTS = e.extend({}, e.fn.tooltip.Constructor.DEFAULTS, {
        placement: "right",
        trigger: "click",
        content: "",
        template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
    }), n.prototype = e.extend({}, e.fn.tooltip.Constructor.prototype), n.prototype.constructor = n, n.prototype.getDefaults = function() {
        return n.DEFAULTS
    }, n.prototype.setContent = function() {
        var e = this.tip(),
            t = this.getTitle(),
            n = this.getContent();
        e.find(".popover-title")[this.options.html ? "html" : "text"](t), e.find(".popover-content").children().detach().end()[this.options.html ? "string" == typeof n ? "html" : "append" : "text"](n), e.removeClass("fade top bottom left right in"), e.find(".popover-title").html() || e.find(".popover-title").hide()
    }, n.prototype.hasContent = function() {
        return this.getTitle() || this.getContent()
    }, n.prototype.getContent = function() {
        var e = this.$element,
            t = this.options;
        return e.attr("data-content") || ("function" == typeof t.content ? t.content.call(e[0]) : t.content)
    }, n.prototype.arrow = function() {
        return this.$arrow = this.$arrow || this.tip().find(".arrow")
    };
    var a = e.fn.popover;
    e.fn.popover = t, e.fn.popover.Constructor = n, e.fn.popover.noConflict = function() {
        return e.fn.popover = a, this
    }
}(jQuery), + function(e) {
    "use strict";

    function t(n, a) {
        this.$body = e(document.body), this.$scrollElement = e(e(n).is(document.body) ? window : n), this.options = e.extend({}, t.DEFAULTS, a), this.selector = (this.options.target || "") + " .nav li > a", this.offsets = [], this.targets = [], this.activeTarget = null, this.scrollHeight = 0, this.$scrollElement.on("scroll.bs.scrollspy", e.proxy(this.process, this)), this.refresh(), this.process()
    }

    function n(n) {
        return this.each(function() {
            var a = e(this),
                i = a.data("bs.scrollspy"),
                r = "object" == typeof n && n;
            i || a.data("bs.scrollspy", i = new t(this, r)), "string" == typeof n && i[n]()
        })
    }
    t.VERSION = "3.3.7", t.DEFAULTS = {
        offset: 10
    }, t.prototype.getScrollHeight = function() {
        return this.$scrollElement[0].scrollHeight || Math.max(this.$body[0].scrollHeight, document.documentElement.scrollHeight)
    }, t.prototype.refresh = function() {
        var t = this,
            n = "offset",
            a = 0;
        this.offsets = [], this.targets = [], this.scrollHeight = this.getScrollHeight(), e.isWindow(this.$scrollElement[0]) || (n = "position", a = this.$scrollElement.scrollTop()), this.$body.find(this.selector).map(function() {
            var t = e(this),
                i = t.data("target") || t.attr("href"),
                r = /^#./.test(i) && e(i);
            return r && r.length && r.is(":visible") && [
                [r[n]().top + a, i]
            ] || null
        }).sort(function(e, t) {
            return e[0] - t[0]
        }).each(function() {
            t.offsets.push(this[0]), t.targets.push(this[1])
        })
    }, t.prototype.process = function() {
        var e, t = this.$scrollElement.scrollTop() + this.options.offset,
            n = this.getScrollHeight(),
            a = this.options.offset + n - this.$scrollElement.height(),
            i = this.offsets,
            r = this.targets,
            o = this.activeTarget;
        if(this.scrollHeight != n && this.refresh(), t >= a) return o != (e = r[r.length - 1]) && this.activate(e);
        if(o && t < i[0]) return this.activeTarget = null, this.clear();
        for(e = i.length; e--;) o != r[e] && t >= i[e] && (void 0 === i[e + 1] || t < i[e + 1]) && this.activate(r[e])
    }, t.prototype.activate = function(t) {
        this.activeTarget = t, this.clear();
        var n = this.selector + '[data-target="' + t + '"],' + this.selector + '[href="' + t + '"]',
            a = e(n).parents("li").addClass("active");
        a.parent(".dropdown-menu").length && (a = a.closest("li.dropdown").addClass("active")), a.trigger("activate.bs.scrollspy")
    }, t.prototype.clear = function() {
        e(this.selector).parentsUntil(this.options.target, ".active").removeClass("active")
    };
    var a = e.fn.scrollspy;
    e.fn.scrollspy = n, e.fn.scrollspy.Constructor = t, e.fn.scrollspy.noConflict = function() {
        return e.fn.scrollspy = a, this
    }, e(window).on("load.bs.scrollspy.data-api", function() {
        e('[data-spy="scroll"]').each(function() {
            var t = e(this);
            n.call(t, t.data())
        })
    })
}(jQuery), + function(e) {
    "use strict";

    function t(t) {
        return this.each(function() {
            var a = e(this),
                i = a.data("bs.tab");
            i || a.data("bs.tab", i = new n(this)), "string" == typeof t && i[t]()
        })
    }
    var n = function(t) {
        this.element = e(t)
    };
    n.VERSION = "3.3.7", n.TRANSITION_DURATION = 150, n.prototype.show = function() {
        var t = this.element,
            n = t.closest("ul:not(.dropdown-menu)"),
            a = t.data("target");
        if(a || (a = t.attr("href"), a = a && a.replace(/.*(?=#[^\s]*$)/, "")), !t.parent("li").hasClass("active")) {
            var i = n.find(".active:last a"),
                r = e.Event("hide.bs.tab", {
                    relatedTarget: t[0]
                }),
                o = e.Event("show.bs.tab", {
                    relatedTarget: i[0]
                });
            if(i.trigger(r), t.trigger(o), !o.isDefaultPrevented() && !r.isDefaultPrevented()) {
                var s = e(a);
                this.activate(t.closest("li"), n), this.activate(s, s.parent(), function() {
                    i.trigger({
                        type: "hidden.bs.tab",
                        relatedTarget: t[0]
                    }), t.trigger({
                        type: "shown.bs.tab",
                        relatedTarget: i[0]
                    })
                })
            }
        }
    }, n.prototype.activate = function(t, a, i) {
        function r() {
            o.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !1), t.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded", !0), s ? (t[0].offsetWidth, t.addClass("in")) : t.removeClass("fade"), t.parent(".dropdown-menu").length && t.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !0), i && i()
        }
        var o = a.find("> .active"),
            s = i && e.support.transition && (o.length && o.hasClass("fade") || !!a.find("> .fade").length);
        o.length && s ? o.one("bsTransitionEnd", r).emulateTransitionEnd(n.TRANSITION_DURATION) : r(), o.removeClass("in")
    };
    var a = e.fn.tab;
    e.fn.tab = t, e.fn.tab.Constructor = n, e.fn.tab.noConflict = function() {
        return e.fn.tab = a, this
    };
    var i = function(n) {
        n.preventDefault(), t.call(e(this), "show")
    };
    e(document).on("click.bs.tab.data-api", '[data-toggle="tab"]', i).on("click.bs.tab.data-api", '[data-toggle="pill"]', i)
}(jQuery), + function(e) {
    "use strict";

    function t(t) {
        return this.each(function() {
            var a = e(this),
                i = a.data("bs.affix"),
                r = "object" == typeof t && t;
            i || a.data("bs.affix", i = new n(this, r)), "string" == typeof t && i[t]()
        })
    }
    var n = function(t, a) {
        this.options = e.extend({}, n.DEFAULTS, a), this.$target = e(this.options.target).on("scroll.bs.affix.data-api", e.proxy(this.checkPosition, this)).on("click.bs.affix.data-api", e.proxy(this.checkPositionWithEventLoop, this)), this.$element = e(t), this.affixed = null, this.unpin = null, this.pinnedOffset = null, this.checkPosition()
    };
    n.VERSION = "3.3.7", n.RESET = "affix affix-top affix-bottom", n.DEFAULTS = {
        offset: 0,
        target: window
    }, n.prototype.getState = function(e, t, n, a) {
        var i = this.$target.scrollTop(),
            r = this.$element.offset(),
            o = this.$target.height();
        if(null != n && "top" == this.affixed) return i < n && "top";
        if("bottom" == this.affixed) return null != n ? !(i + this.unpin <= r.top) && "bottom" : !(i + o <= e - a) && "bottom";
        var s = null == this.affixed,
            l = s ? i : r.top,
            c = s ? o : t;
        return null != n && i <= n ? "top" : null != a && l + c >= e - a && "bottom"
    }, n.prototype.getPinnedOffset = function() {
        if(this.pinnedOffset) return this.pinnedOffset;
        this.$element.removeClass(n.RESET).addClass("affix");
        var e = this.$target.scrollTop(),
            t = this.$element.offset();
        return this.pinnedOffset = t.top - e
    }, n.prototype.checkPositionWithEventLoop = function() {
        setTimeout(e.proxy(this.checkPosition, this), 1)
    }, n.prototype.checkPosition = function() {
        if(this.$element.is(":visible")) {
            var t = this.$element.height(),
                a = this.options.offset,
                i = a.top,
                r = a.bottom,
                o = Math.max(e(document).height(), e(document.body).height());
            "object" != typeof a && (r = i = a), "function" == typeof i && (i = a.top(this.$element)), "function" == typeof r && (r = a.bottom(this.$element));
            var s = this.getState(o, t, i, r);
            if(this.affixed != s) {
                null != this.unpin && this.$element.css("top", "");
                var l = "affix" + (s ? "-" + s : ""),
                    c = e.Event(l + ".bs.affix");
                if(this.$element.trigger(c), c.isDefaultPrevented()) return;
                this.affixed = s, this.unpin = "bottom" == s ? this.getPinnedOffset() : null, this.$element.removeClass(n.RESET).addClass(l).trigger(l.replace("affix", "affixed") + ".bs.affix")
            }
            "bottom" == s && this.$element.offset({
                top: o - t - r
            })
        }
    };
    var a = e.fn.affix;
    e.fn.affix = t, e.fn.affix.Constructor = n, e.fn.affix.noConflict = function() {
        return e.fn.affix = a, this
    }, e(window).on("load", function() {
        e('[data-spy="affix"]').each(function() {
            var n = e(this),
                a = n.data();
            a.offset = a.offset || {}, null != a.offsetBottom && (a.offset.bottom = a.offsetBottom), null != a.offsetTop && (a.offset.top = a.offsetTop), t.call(n, a)
        })
    })
}(jQuery),
function(e, t) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : e.Sweetalert2 = t()
}(this, function() {
    "use strict";
    var e = "swal2-",
        t = function(t) {
            var n = {};
            for(var a in t) n[t[a]] = e + t[a];
            return n
        },
        n = t(["container", "in", "iosfix", "modal", "overlay", "fade", "show", "hide", "noanimation", "close", "title", "content", "spacer", "confirm", "cancel", "icon", "image", "input", "file", "range", "select", "radio", "checkbox", "textarea", "inputerror", "validationerror", "progresssteps", "activeprogressstep", "progresscircle", "progressline", "loading", "styled"]),
        a = t(["success", "warning", "info", "question", "error"]),
        i = {
            title: "",
            text: "",
            html: "",
            type: null,
            customClass: "",
            animation: !0,
            allowOutsideClick: !0,
            allowEscapeKey: !0,
            showConfirmButton: !0,
            showCancelButton: !1,
            preConfirm: null,
            confirmButtonText: "OK",
            confirmButtonColor: "#3085d6",
            confirmButtonClass: null,
            cancelButtonText: "Cancel",
            cancelButtonColor: "#aaa",
            cancelButtonClass: null,
            buttonsStyling: !0,
            reverseButtons: !1,
            focusCancel: !1,
            showCloseButton: !1,
            showLoaderOnConfirm: !1,
            imageUrl: null,
            imageWidth: null,
            imageHeight: null,
            imageClass: null,
            timer: null,
            width: 500,
            padding: 20,
            background: "#fff",
            input: null,
            inputPlaceholder: "",
            inputValue: "",
            inputOptions: {},
            inputAutoTrim: !0,
            inputClass: null,
            inputAttributes: {},
            inputValidator: null,
            progressSteps: [],
            currentProgressStep: null,
            progressStepsDistance: "40px",
            onOpen: null,
            onClose: null
        },
        r = ('\n  <div class="' + n.modal + '" style="display: none" tabIndex="-1">\n    <ul class="' + n.progresssteps + '"></ul>\n    <div class="' + n.icon + " " + a.error + '">\n      <span class="x-mark"><span class="line left"></span><span class="line right"></span></span>\n    </div>\n    <div class="' + n.icon + " " + a.question + '">?</div>\n    <div class="' + n.icon + " " + a.warning + '">!</div>\n    <div class="' + n.icon + " " + a.info + '">i</div>\n    <div class="' + n.icon + " " + a.success + '">\n      <span class="line tip"></span> <span class="line long"></span>\n      <div class="placeholder"></div> <div class="fix"></div>\n    </div>\n    <img class="' + n.image + '">\n    <h2 class="' + n.title + '"></h2>\n    <div class="' + n.content + '"></div>\n    <input class="' + n.input + '">\n    <input type="file" class="' + n.file + '">\n    <div class="' + n.range + '">\n      <output></output>\n      <input type="range">\n    </div>\n    <select class="' + n.select + '"></select>\n    <div class="' + n.radio + '"></div>\n    <label for="' + n.checkbox + '" class="' + n.checkbox + '">\n      <input type="checkbox">\n    </label>\n    <textarea class="' + n.textarea + '"></textarea>\n    <div class="' + n.validationerror + '"></div>\n    <hr class="' + n.spacer + '">\n    <button type="button" class="' + n.confirm + '">OK</button>\n    <button type="button" class="' + n.cancel + '">Cancel</button>\n    <span class="' + n.close + '">&times;</span>\n  </div>\n').replace(/(^|\n)\s*/g, ""),
        o = void 0,
        s = document.getElementsByClassName(n.container);
    s.length ? o = s[0] : (o = document.createElement("div"), o.className = n.container, o.innerHTML = r);
    var l = function(e, t) {
            e = String(e).replace(/[^0-9a-f]/gi, ""), e.length < 6 && (e = e[0] + e[0] + e[1] + e[1] + e[2] + e[2]), t = t || 0;
            for(var n = "#", a = 0; a < 3; a++) {
                var i = parseInt(e.substr(2 * a, 2), 16);
                i = Math.round(Math.min(Math.max(0, i + i * t), 255)).toString(16), n += ("00" + i).substr(i.length)
            }
            return n
        },
        c = {
            previousWindowKeyDown: null,
            previousActiveElement: null,
            previousBodyPadding: null
        },
        u = function() {
            if("undefined" == typeof document) return void console.error("SweetAlert2 requires document to initialize");
            if(!document.getElementsByClassName(n.container).length) {
                document.body.appendChild(o);
                var e = f(),
                    t = E(e, n.input),
                    a = E(e, n.file),
                    i = e.querySelector("." + n.range + " input"),
                    r = e.querySelector("." + n.range + " output"),
                    s = E(e, n.select),
                    l = e.querySelector("." + n.checkbox + " input"),
                    c = E(e, n.textarea);
                return t.oninput = function() {
                    Z.resetValidationError()
                }, t.onkeydown = function(e) {
                    setTimeout(function() {
                        13 === e.keyCode && (e.stopPropagation(), Z.clickConfirm())
                    }, 0)
                }, a.onchange = function() {
                    Z.resetValidationError()
                }, i.oninput = function() {
                    Z.resetValidationError(), r.value = i.value
                }, i.onchange = function() {
                    Z.resetValidationError(), i.previousSibling.value = i.value
                }, s.onchange = function() {
                    Z.resetValidationError()
                }, l.onchange = function() {
                    Z.resetValidationError()
                }, c.oninput = function() {
                    Z.resetValidationError()
                }, e
            }
        },
        d = function(e) {
            return o.querySelector("." + e)
        },
        f = function() {
            return document.body.querySelector("." + n.modal) || u()
        },
        h = function() {
            var e = f();
            return e.querySelectorAll("." + n.icon)
        },
        p = function() {
            return d(n.title)
        },
        m = function() {
            return d(n.content)
        },
        b = function() {
            return d(n.image)
        },
        g = function() {
            return d(n.spacer)
        },
        v = function() {
            return d(n.progresssteps)
        },
        y = function() {
            return d(n.validationerror)
        },
        C = function() {
            return d(n.confirm)
        },
        T = function() {
            return d(n.cancel)
        },
        w = function() {
            return d(n.close)
        },
        x = function(t) {
            var n = [C(), T()];
            return t && n.reverse(), n.concat(Array.prototype.slice.call(f().querySelectorAll("button:not([class^=" + e + "]), input:not([type=hidden]), textarea, select")))
        },
        S = function(e, t) {
            return !!e.classList && e.classList.contains(t)
        },
        A = function(e) {
            if(e.focus(), "file" !== e.type) {
                var t = e.value;
                e.value = "", e.value = t
            }
        },
        k = function(e, t) {
            if(e && t) {
                var n = t.split(/\s+/).filter(Boolean);
                n.forEach(function(t) {
                    e.classList.add(t)
                })
            }
        },
        M = function(e, t) {
            if(e && t) {
                var n = t.split(/\s+/).filter(Boolean);
                n.forEach(function(t) {
                    e.classList.remove(t)
                })
            }
        },
        E = function(e, t) {
            for(var n = 0; n < e.childNodes.length; n++)
                if(S(e.childNodes[n], t)) return e.childNodes[n]
        },
        B = function(e, t) {
            t || (t = "block"), e.style.opacity = "", e.style.display = t
        },
        D = function(e) {
            e.style.opacity = "", e.style.display = "none"
        },
        N = function(e) {
            for(; e.firstChild;) e.removeChild(e.firstChild)
        },
        P = function(e) {
            return e.offsetWidth || e.offsetHeight || e.getClientRects().length
        },
        L = function(e, t) {
            e.style.removeProperty ? e.style.removeProperty(t) : e.style.removeAttribute(t)
        },
        R = function(e) {
            if("function" == typeof MouseEvent) {
                var t = new MouseEvent("click", {
                    view: window,
                    bubbles: !1,
                    cancelable: !0
                });
                e.dispatchEvent(t)
            } else if(document.createEvent) {
                var n = document.createEvent("MouseEvents");
                n.initEvent("click", !1, !1), e.dispatchEvent(n)
            } else document.createEventObject ? e.fireEvent("onclick") : "function" == typeof e.onclick && e.onclick()
        },
        _ = function() {
            var e = document.createElement("div"),
                t = {
                    WebkitAnimation: "webkitAnimationEnd",
                    OAnimation: "oAnimationEnd oanimationend",
                    msAnimation: "MSAnimationEnd",
                    animation: "animationend"
                };
            for(var n in t)
                if(t.hasOwnProperty(n) && void 0 !== e.style[n]) return t[n];
            return !1
        }(),
        I = function() {
            var e = f();
            window.onkeydown = c.previousWindowKeyDown, c.previousActiveElement && c.previousActiveElement.focus && c.previousActiveElement.focus(), clearTimeout(e.timeout)
        },
        F = function() {
            var e = document.createElement("div");
            e.style.width = "50px", e.style.height = "50px", e.style.overflow = "scroll", document.body.appendChild(e);
            var t = e.offsetWidth - e.clientWidth;
            return document.body.removeChild(e), t
        },
        G = function(e, t) {
            var n = void 0;
            return function() {
                var a = function() {
                    n = null, e()
                };
                clearTimeout(n), n = setTimeout(a, t)
            }
        },
        O = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        } : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        },
        j = (function() {
            function e(e) {
                this.value = e
            }

            function t(t) {
                function n(e, t) {
                    return new Promise(function(n, i) {
                        var s = {
                            key: e,
                            arg: t,
                            resolve: n,
                            reject: i,
                            next: null
                        };
                        o ? o = o.next = s : (r = o = s, a(e, t))
                    })
                }

                function a(n, r) {
                    try {
                        var o = t[n](r),
                            s = o.value;
                        s instanceof e ? Promise.resolve(s.value).then(function(e) {
                            a("next", e)
                        }, function(e) {
                            a("throw", e)
                        }) : i(o.done ? "return" : "normal", o.value);
                    } catch(e) {
                        i("throw", e)
                    }
                }

                function i(e, t) {
                    switch(e) {
                        case "return":
                            r.resolve({
                                value: t,
                                done: !0
                            });
                            break;
                        case "throw":
                            r.reject(t);
                            break;
                        default:
                            r.resolve({
                                value: t,
                                done: !1
                            })
                    }
                    r = r.next, r ? a(r.key, r.arg) : o = null
                }
                var r, o;
                this._invoke = n, "function" != typeof t.return && (this.return = void 0)
            }
            return "function" == typeof Symbol && Symbol.asyncIterator && (t.prototype[Symbol.asyncIterator] = function() {
                return this
            }), t.prototype.next = function(e) {
                return this._invoke("next", e)
            }, t.prototype.throw = function(e) {
                return this._invoke("throw", e)
            }, t.prototype.return = function(e) {
                return this._invoke("return", e)
            }, {
                wrap: function(e) {
                    return function() {
                        return new t(e.apply(this, arguments))
                    }
                },
                await: function(t) {
                    return new e(t)
                }
            }
        }(), Object.assign || function(e) {
            for(var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for(var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
            }
            return e
        }),
        z = j({}, i),
        $ = [],
        H = void 0,
        U = function(e) {
            var t = f();
            for(var r in e) i.hasOwnProperty(r) || "extraParams" === r || console.warn('SweetAlert2: Unknown parameter "' + r + '"');
            t.style.width = "number" == typeof e.width ? e.width + "px" : e.width, t.style.padding = e.padding + "px", t.style.background = e.background;
            var o = p(),
                s = m(),
                l = C(),
                c = T(),
                u = w();
            if(o.innerHTML = e.title.split("\n").join("<br>"), e.text || e.html) {
                if("object" === O(e.html))
                    if(s.innerHTML = "", 0 in e.html)
                        for(var d = 0; d in e.html; d++) s.appendChild(e.html[d].cloneNode(!0));
                    else s.appendChild(e.html.cloneNode(!0));
                else e.html ? s.innerHTML = e.html : e.text && (s.innerHTML = ("" + e.text).split("\n").join("<br>"));
                B(s)
            } else D(s);
            e.showCloseButton ? B(u) : D(u), t.className = n.modal, e.customClass && k(t, e.customClass);
            var y = v(),
                x = parseInt(null === e.currentProgressStep ? Z.getQueueStep() : e.currentProgressStep, 10);
            e.progressSteps.length ? (B(y), N(y), x >= e.progressSteps.length && console.warn("SweetAlert2: Invalid currentProgressStep parameter, it should be less than progressSteps.length (currentProgressStep like JS arrays starts from 0)"), e.progressSteps.forEach(function(t, a) {
                var i = document.createElement("li");
                if(k(i, n.progresscircle), i.innerHTML = t, a === x && k(i, n.activeprogressstep), y.appendChild(i), a !== e.progressSteps.length - 1) {
                    var r = document.createElement("li");
                    k(r, n.progressline), r.style.width = e.progressStepsDistance, y.appendChild(r)
                }
            })) : D(y);
            for(var S = h(), A = 0; A < S.length; A++) D(S[A]);
            if(e.type) {
                var E = !1;
                for(var P in a)
                    if(e.type === P) {
                        E = !0;
                        break
                    }
                if(!E) return console.error("SweetAlert2: Unknown alert type: " + e.type), !1;
                var R = t.querySelector("." + n.icon + "." + a[e.type]);
                switch(B(R), e.type) {
                    case "success":
                        k(R, "animate"), k(R.querySelector(".tip"), "animate-success-tip"), k(R.querySelector(".long"), "animate-success-long");
                        break;
                    case "error":
                        k(R, "animate-error-icon"), k(R.querySelector(".x-mark"), "animate-x-mark");
                        break;
                    case "warning":
                        k(R, "pulse-warning")
                }
            }
            var _ = b();
            e.imageUrl ? (_.setAttribute("src", e.imageUrl), B(_), e.imageWidth ? _.setAttribute("width", e.imageWidth) : _.removeAttribute("width"), e.imageHeight ? _.setAttribute("height", e.imageHeight) : _.removeAttribute("height"), _.className = n.image, e.imageClass && k(_, e.imageClass)) : D(_), e.showCancelButton ? c.style.display = "inline-block" : D(c), e.showConfirmButton ? L(l, "display") : D(l);
            var I = g();
            e.showConfirmButton || e.showCancelButton ? B(I) : D(I), l.innerHTML = e.confirmButtonText, c.innerHTML = e.cancelButtonText, e.buttonsStyling && (l.style.backgroundColor = e.confirmButtonColor, c.style.backgroundColor = e.cancelButtonColor), l.className = n.confirm, k(l, e.confirmButtonClass), c.className = n.cancel, k(c, e.cancelButtonClass), e.buttonsStyling ? (k(l, n.styled), k(c, n.styled)) : (M(l, n.styled), M(c, n.styled), l.style.backgroundColor = l.style.borderLeftColor = l.style.borderRightColor = "", c.style.backgroundColor = c.style.borderLeftColor = c.style.borderRightColor = ""), e.animation === !0 ? M(t, n.noanimation) : k(t, n.noanimation)
        },
        V = function(e, t) {
            var a = f();
            e ? (k(a, n.show), k(o, n.fade), M(a, n.hide)) : M(a, n.fade), B(a), o.style.overflowY = "hidden", _ && !S(a, n.noanimation) ? a.addEventListener(_, function e() {
                a.removeEventListener(_, e), o.style.overflowY = "auto"
            }) : o.style.overflowY = "auto", k(o, n.in), k(document.body, n.in), W(), K(), c.previousActiveElement = document.activeElement, null !== t && "function" == typeof t && t(a)
        },
        W = function() {
            null === c.previousBodyPadding && document.body.scrollHeight > window.innerHeight && (c.previousBodyPadding = document.body.style.paddingRight, document.body.style.paddingRight = F() + "px")
        },
        q = function() {
            null !== c.previousBodyPadding && (document.body.style.paddingRight = c.previousBodyPadding, c.previousBodyPadding = null)
        },
        K = function() {
            var e = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
            if(e && !S(document.body, n.iosfix)) {
                var t = document.body.scrollTop;
                document.body.style.top = t * -1 + "px", k(document.body, n.iosfix)
            }
        },
        J = function() {
            if(S(document.body, n.iosfix)) {
                var e = parseInt(document.body.style.top, 10);
                M(document.body, n.iosfix), document.body.scrollTop = e * -1
            }
        },
        Y = function() {
            for(var e = arguments.length, t = Array(e), a = 0; a < e; a++) t[a] = arguments[a];
            if(void 0 === t[0]) return console.error("SweetAlert2 expects at least 1 attribute!"), !1;
            var i = j({}, z);
            switch(O(t[0])) {
                case "string":
                    i.title = t[0], i.text = t[1], i.type = t[2];
                    break;
                case "object":
                    j(i, t[0]), i.extraParams = t[0].extraParams, "email" === i.input && null === i.inputValidator && (i.inputValidator = function(e) {
                        return new Promise(function(t, n) {
                            var a = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
                            a.test(e) ? t() : n("Invalid email address")
                        })
                    });
                    break;
                default:
                    return console.error('SweetAlert2: Unexpected type of argument! Expected "string" or "object", got ' + O(t[0])), !1
            }
            U(i);
            var r = f();
            return new Promise(function(e, t) {
                i.timer && (r.timeout = setTimeout(function() {
                    Z.closeModal(i.onClose), t("timer")
                }, i.timer));
                var a = function(e) {
                        switch(e = e || i.input) {
                            case "select":
                            case "textarea":
                            case "file":
                                return E(r, n[e]);
                            case "checkbox":
                                return r.querySelector("." + n.checkbox + " input");
                            case "radio":
                                return r.querySelector("." + n.radio + " input:checked") || r.querySelector("." + n.radio + " input:first-child");
                            case "range":
                                return r.querySelector("." + n.range + " input");
                            default:
                                return E(r, n.input)
                        }
                    },
                    s = function() {
                        var e = a();
                        if(!e) return null;
                        switch(i.input) {
                            case "checkbox":
                                return e.checked ? 1 : 0;
                            case "radio":
                                return e.checked ? e.value : null;
                            case "file":
                                return e.files.length ? e.files[0] : null;
                            default:
                                return i.inputAutoTrim ? e.value.trim() : e.value
                        }
                    };
                i.input && setTimeout(function() {
                    var e = a();
                    e && A(e)
                }, 0);
                for(var u = function(t) {
                        i.showLoaderOnConfirm && Z.showLoading(), i.preConfirm ? i.preConfirm(t, i.extraParams).then(function(n) {
                            Z.closeModal(i.onClose), e(n || t)
                        }, function(e) {
                            Z.hideLoading(), e && Z.showValidationError(e)
                        }) : (Z.closeModal(i.onClose), e(t))
                    }, d = function(e) {
                        var n = e || window.event,
                            a = n.target || n.srcElement,
                            r = C(),
                            o = T(),
                            c = r === a || r.contains(a),
                            d = o === a || o.contains(a);
                        switch(n.type) {
                            case "mouseover":
                            case "mouseup":
                                i.buttonsStyling && (c ? r.style.backgroundColor = l(i.confirmButtonColor, -.1) : d && (o.style.backgroundColor = l(i.cancelButtonColor, -.1)));
                                break;
                            case "mouseout":
                                i.buttonsStyling && (c ? r.style.backgroundColor = i.confirmButtonColor : d && (o.style.backgroundColor = i.cancelButtonColor));
                                break;
                            case "mousedown":
                                i.buttonsStyling && (c ? r.style.backgroundColor = l(i.confirmButtonColor, -.2) : d && (o.style.backgroundColor = l(i.cancelButtonColor, -.2)));
                                break;
                            case "click":
                                c && Z.isVisible() ? i.input ? ! function() {
                                    var e = s();
                                    i.inputValidator ? (Z.disableInput(), i.inputValidator(e, i.extraParams).then(function() {
                                        Z.enableInput(), u(e)
                                    }, function(e) {
                                        Z.enableInput(), e && Z.showValidationError(e)
                                    })) : u(e)
                                }() : u(!0) : d && Z.isVisible() && (Z.closeModal(i.onClose), t("cancel"))
                        }
                    }, h = r.querySelectorAll("button"), p = 0; p < h.length; p++) h[p].onclick = d, h[p].onmouseover = d, h[p].onmouseout = d, h[p].onmousedown = d;
                w().onclick = function() {
                    Z.closeModal(i.onClose), t("close")
                }, o.onclick = function(e) {
                    e.target === o && i.allowOutsideClick && (Z.closeModal(i.onClose), t("overlay"))
                };
                var m = C(),
                    b = T();
                i.reverseButtons ? m.parentNode.insertBefore(b, m) : m.parentNode.insertBefore(m, b);
                var S = function(e, t) {
                        for(var n = x(i.focusCancel), a = 0; a < n.length; a++) {
                            e += t, e === n.length ? e = 0 : e === -1 && (e = n.length - 1);
                            var r = n[e];
                            if(P(r)) return r.focus()
                        }
                    },
                    N = function(e) {
                        var n = e || window.event,
                            a = n.keyCode || n.which;
                        if([9, 13, 32, 27].indexOf(a) !== -1) {
                            for(var r = n.target || n.srcElement, o = x(i.focusCancel), s = -1, l = 0; l < o.length; l++)
                                if(r === o[l]) {
                                    s = l;
                                    break
                                }
                            9 === a ? (n.shiftKey ? S(s, -1) : S(s, 1), n.stopPropagation(), n.preventDefault()) : 13 === a || 32 === a ? s === -1 && (i.focusCancel ? R(b, n) : R(m, n)) : 27 === a && i.allowEscapeKey === !0 && (Z.closeModal(i.onClose), t("esc"))
                        }
                    };
                c.previousWindowKeyDown = window.onkeydown, window.onkeydown = N, i.buttonsStyling && (m.style.borderLeftColor = i.confirmButtonColor, m.style.borderRightColor = i.confirmButtonColor), Z.showLoading = Z.enableLoading = function() {
                    B(g()), B(m, "inline-block"), k(m, n.loading), k(r, n.loading), m.disabled = !0, b.disabled = !0
                }, Z.hideLoading = Z.disableLoading = function() {
                    i.showConfirmButton || (D(m), i.showCancelButton || D(g())), M(m, n.loading), M(r, n.loading), m.disabled = !1, b.disabled = !1
                }, Z.enableButtons = function() {
                    m.disabled = !1, b.disabled = !1
                }, Z.disableButtons = function() {
                    m.disabled = !0, b.disabled = !0
                }, Z.enableConfirmButton = function() {
                    m.disabled = !1
                }, Z.disableConfirmButton = function() {
                    m.disabled = !0
                }, Z.enableInput = function() {
                    var e = a();
                    if(!e) return !1;
                    if("radio" === e.type)
                        for(var t = e.parentNode.parentNode, n = t.querySelectorAll("input"), i = 0; i < n.length; i++) n[i].disabled = !1;
                    else e.disabled = !1
                }, Z.disableInput = function() {
                    var e = a();
                    if(!e) return !1;
                    if(e && "radio" === e.type)
                        for(var t = e.parentNode.parentNode, n = t.querySelectorAll("input"), i = 0; i < n.length; i++) n[i].disabled = !0;
                    else e.disabled = !0
                }, Z.recalculateHeight = G(function() {
                    var e = f(),
                        t = e.style.display;
                    e.style.minHeight = "", B(e), e.style.minHeight = e.scrollHeight + 1 + "px", e.style.display = t
                }, 50), Z.showValidationError = function(e) {
                    var t = y();
                    t.innerHTML = e, B(t);
                    var i = a();
                    A(i), k(i, n.inputerror)
                }, Z.resetValidationError = function() {
                    var e = y();
                    D(e), Z.recalculateHeight();
                    var t = a();
                    t && M(t, n.inputerror)
                }, Z.getProgressSteps = function() {
                    return i.progressSteps
                }, Z.setProgressSteps = function(e) {
                    i.progressSteps = e, U(i)
                }, Z.showProgressSteps = function() {
                    B(v())
                }, Z.hideProgressSteps = function() {
                    D(v())
                }, Z.enableButtons(), Z.hideLoading(), Z.resetValidationError();
                for(var L = ["input", "file", "range", "select", "radio", "checkbox", "textarea"], _ = void 0, I = 0; I < L.length; I++) {
                    var F = n[L[I]],
                        j = E(r, F);
                    if(_ = a(L[I])) {
                        for(var z in _.attributes)
                            if(_.attributes.hasOwnProperty(z)) {
                                var $ = _.attributes[z].name;
                                "type" !== $ && "value" !== $ && _.removeAttribute($)
                            }
                        for(var W in i.inputAttributes) _.setAttribute(W, i.inputAttributes[W])
                    }
                    j.className = F, i.inputClass && k(j, i.inputClass), D(j)
                }
                var q = void 0;
                ! function() {
                    switch(i.input) {
                        case "text":
                        case "email":
                        case "password":
                        case "number":
                        case "tel":
                            _ = E(r, n.input), _.value = i.inputValue, _.placeholder = i.inputPlaceholder, _.type = i.input, B(_);
                            break;
                        case "file":
                            _ = E(r, n.file), _.placeholder = i.inputPlaceholder, _.type = i.input, B(_);
                            break;
                        case "range":
                            var e = E(r, n.range),
                                t = e.querySelector("input"),
                                o = e.querySelector("output");
                            t.value = i.inputValue, t.type = i.input, o.value = i.inputValue, B(e);
                            break;
                        case "select":
                            var s = E(r, n.select);
                            if(s.innerHTML = "", i.inputPlaceholder) {
                                var l = document.createElement("option");
                                l.innerHTML = i.inputPlaceholder, l.value = "", l.disabled = !0, l.selected = !0, s.appendChild(l)
                            }
                            q = function(e) {
                                for(var t in e) {
                                    var n = document.createElement("option");
                                    n.value = t, n.innerHTML = e[t], i.inputValue === t && (n.selected = !0), s.appendChild(n)
                                }
                                B(s), s.focus()
                            };
                            break;
                        case "radio":
                            var c = E(r, n.radio);
                            c.innerHTML = "", q = function(e) {
                                for(var t in e) {
                                    var a = 1,
                                        r = document.createElement("input"),
                                        o = document.createElement("label"),
                                        s = document.createElement("span");
                                    r.type = "radio", r.name = n.radio, r.value = t, r.id = n.radio + "-" + a++, i.inputValue === t && (r.checked = !0), s.innerHTML = e[t], o.appendChild(r), o.appendChild(s), o.for = r.id, c.appendChild(o)
                                }
                                B(c);
                                var l = c.querySelectorAll("input");
                                l.length && l[0].focus()
                            };
                            break;
                        case "checkbox":
                            var u = E(r, n.checkbox),
                                d = a("checkbox");
                            d.type = "checkbox", d.value = 1, d.id = n.checkbox, d.checked = Boolean(i.inputValue);
                            var f = u.getElementsByTagName("span");
                            f.length && u.removeChild(f[0]), f = document.createElement("span"), f.innerHTML = i.inputPlaceholder, u.appendChild(f), B(u);
                            break;
                        case "textarea":
                            var h = E(r, n.textarea);
                            h.value = i.inputValue, h.placeholder = i.inputPlaceholder, B(h);
                            break;
                        case null:
                            break;
                        default:
                            console.error('SweetAlert2: Unexpected type of input! Expected "text", "email", "password", "select", "checkbox", "textarea" or "file", got "' + i.input + '"')
                    }
                }(), "select" !== i.input && "radio" !== i.input || (i.inputOptions instanceof Promise ? (Z.showLoading(), i.inputOptions.then(function(e) {
                    Z.hideLoading(), q(e)
                })) : "object" === O(i.inputOptions) ? q(i.inputOptions) : console.error("SweetAlert2: Unexpected type of inputOptions! Expected object or Promise, got " + O(i.inputOptions))), V(i.animation, i.onOpen), S(-1, 1), o.scrollTop = 0, "undefined" == typeof MutationObserver || H || (H = new MutationObserver(Z.recalculateHeight), H.observe(r, {
                    childList: !0,
                    characterData: !0,
                    subtree: !0
                }))
            })
        },
        Z = function e() {
            for(var t = arguments.length, n = Array(t), a = 0; a < t; a++) n[a] = arguments[a];
            return e.isVisible() && e.close(), Y.apply(void 0, n)
        };
    return Z.isVisible = function() {
        var e = f();
        return P(e)
    }, Z.queue = function(e) {
        $ = e;
        var t = f(),
            n = function() {
                $ = [], t.removeAttribute("data-queue-step")
            },
            a = [];
        return new Promise(function(e, i) {
            ! function r(o, s) {
                o < $.length ? (t.setAttribute("data-queue-step", o), Z($[o]).then(function(e) {
                    a.push(e), r(o + 1, s)
                }, function(e) {
                    n(), i(e)
                })) : (n(), e(a))
            }(0)
        })
    }, Z.getQueueStep = function() {
        return f().getAttribute("data-queue-step")
    }, Z.insertQueueStep = function(e, t) {
        return t && t < $.length ? $.splice(t, 0, e) : $.push(e)
    }, Z.deleteQueueStep = function(e) {
        "undefined" != typeof $[e] && $.splice(e, 1)
    }, Z.close = Z.closeModal = function(e) {
        var t = f();
        M(t, n.show), k(t, n.hide);
        var i = t.querySelector("." + n.icon + "." + a.success);
        M(i, "animate"), M(i.querySelector(".tip"), "animate-success-tip"), M(i.querySelector(".long"), "animate-success-long");
        var r = t.querySelector("." + n.icon + "." + a.error);
        M(r, "animate-error-icon"), M(r.querySelector(".x-mark"), "animate-x-mark");
        var s = t.querySelector("." + n.icon + "." + a.warning);
        M(s, "pulse-warning"), I();
        var l = function() {
            D(t), t.style.minHeight = "", M(o, n.in), M(document.body, n.in), q(), J()
        };
        _ && !S(t, n.noanimation) ? t.addEventListener(_, function e() {
            t.removeEventListener(_, e), S(t, n.hide) && l()
        }) : l(), null !== e && "function" == typeof e && e(t)
    }, Z.clickConfirm = function() {
        return C().click()
    }, Z.clickCancel = function() {
        return T().click()
    }, Z.setDefaults = function(e) {
        if(!e || "object" !== ("undefined" == typeof e ? "undefined" : O(e))) return console.error("SweetAlert2: the argument for setDefaults() is required and has to be a object");
        for(var t in e) i.hasOwnProperty(t) || "extraParams" === t || (console.warn('SweetAlert2: Unknown parameter "' + t + '"'), delete e[t]);
        j(z, e)
    }, Z.resetDefaults = function() {
        z = j({}, i)
    }, Z.noop = function() {}, Z.version = "6.1.1", Z
}), window.Sweetalert2 && (window.sweetAlert = window.swal = window.Sweetalert2);