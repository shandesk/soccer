if (function(e, t) {
        "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function(e) {
            if (!e.document) throw new Error("jQuery requires a window with a document");
            return t(e)
        } : t(e)
    }("undefined" != typeof window ? window : this, function(e, t) {
        var n = [],
            i = e.document,
            o = n.slice,
            r = n.concat,
            s = n.push,
            a = n.indexOf,
            l = {},
            c = l.toString,
            u = l.hasOwnProperty,
            d = {},
            p = function(e, t) {
                return new p.fn.init(e, t)
            },
            h = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
            f = /^-ms-/,
            g = /-([\da-z])/gi,
            m = function(e, t) {
                return t.toUpperCase()
            };

        function v(e) {
            var t = !!e && "length" in e && e.length,
                n = p.type(e);
            return "function" !== n && !p.isWindow(e) && ("array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e)
        }
        p.fn = p.prototype = {
            jquery: "2.2.4",
            constructor: p,
            selector: "",
            length: 0,
            toArray: function() {
                return o.call(this)
            },
            get: function(e) {
                return null != e ? 0 > e ? this[e + this.length] : this[e] : o.call(this)
            },
            pushStack: function(e) {
                var t = p.merge(this.constructor(), e);
                return t.prevObject = this, t.context = this.context, t
            },
            each: function(e) {
                return p.each(this, e)
            },
            map: function(e) {
                return this.pushStack(p.map(this, function(t, n) {
                    return e.call(t, n, t)
                }))
            },
            slice: function() {
                return this.pushStack(o.apply(this, arguments))
            },
            first: function() {
                return this.eq(0)
            },
            last: function() {
                return this.eq(-1)
            },
            eq: function(e) {
                var t = this.length,
                    n = +e + (0 > e ? t : 0);
                return this.pushStack(n >= 0 && t > n ? [this[n]] : [])
            },
            end: function() {
                return this.prevObject || this.constructor()
            },
            push: s,
            sort: n.sort,
            splice: n.splice
        }, p.extend = p.fn.extend = function() {
            var e, t, n, i, o, r, s = arguments[0] || {},
                a = 1,
                l = arguments.length,
                c = !1;
            for ("boolean" == typeof s && (c = s, s = arguments[a] || {}, a++), "object" == typeof s || p.isFunction(s) || (s = {}), a === l && (s = this, a--); l > a; a++)
                if (null != (e = arguments[a]))
                    for (t in e) n = s[t], i = e[t], s !== i && (c && i && (p.isPlainObject(i) || (o = p.isArray(i))) ? (o ? (o = !1, r = n && p.isArray(n) ? n : []) : r = n && p.isPlainObject(n) ? n : {}, s[t] = p.extend(c, r, i)) : void 0 !== i && (s[t] = i));
            return s
        }, p.extend({
            expando: "jQuery" + ("2.2.4" + Math.random()).replace(/\D/g, ""),
            isReady: !0,
            error: function(e) {
                throw new Error(e)
            },
            noop: function() {},
            isFunction: function(e) {
                return "function" === p.type(e)
            },
            isArray: Array.isArray,
            isWindow: function(e) {
                return null != e && e === e.window
            },
            isNumeric: function(e) {
                var t = e && e.toString();
                return !p.isArray(e) && t - parseFloat(t) + 1 >= 0
            },
            isPlainObject: function(e) {
                var t;
                if ("object" !== p.type(e) || e.nodeType || p.isWindow(e)) return !1;
                if (e.constructor && !u.call(e, "constructor") && !u.call(e.constructor.prototype || {}, "isPrototypeOf")) return !1;
                for (t in e);
                return void 0 === t || u.call(e, t)
            },
            isEmptyObject: function(e) {
                var t;
                for (t in e) return !1;
                return !0
            },
            type: function(e) {
                return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? l[c.call(e)] || "object" : typeof e
            },
            globalEval: function(e) {
                var t, n = eval;
                (e = p.trim(e)) && (1 === e.indexOf("use strict") ? ((t = i.createElement("script")).text = e, i.head.appendChild(t).parentNode.removeChild(t)) : n(e))
            },
            camelCase: function(e) {
                return e.replace(f, "ms-").replace(g, m)
            },
            nodeName: function(e, t) {
                return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
            },
            each: function(e, t) {
                var n, i = 0;
                if (v(e))
                    for (n = e.length; n > i && !1 !== t.call(e[i], i, e[i]); i++);
                else
                    for (i in e)
                        if (!1 === t.call(e[i], i, e[i])) break; return e
            },
            trim: function(e) {
                return null == e ? "" : (e + "").replace(h, "")
            },
            makeArray: function(e, t) {
                var n = t || [];
                return null != e && (v(Object(e)) ? p.merge(n, "string" == typeof e ? [e] : e) : s.call(n, e)), n
            },
            inArray: function(e, t, n) {
                return null == t ? -1 : a.call(t, e, n)
            },
            merge: function(e, t) {
                for (var n = +t.length, i = 0, o = e.length; n > i; i++) e[o++] = t[i];
                return e.length = o, e
            },
            grep: function(e, t, n) {
                for (var i, o = [], r = 0, s = e.length, a = !n; s > r; r++) i = !t(e[r], r), i !== a && o.push(e[r]);
                return o
            },
            map: function(e, t, n) {
                var i, o, s = 0,
                    a = [];
                if (v(e))
                    for (i = e.length; i > s; s++) o = t(e[s], s, n), null != o && a.push(o);
                else
                    for (s in e) o = t(e[s], s, n), null != o && a.push(o);
                return r.apply([], a)
            },
            guid: 1,
            proxy: function(e, t) {
                var n, i, r;
                return "string" == typeof t && (n = e[t], t = e, e = n), p.isFunction(e) ? (i = o.call(arguments, 2), (r = function() {
                    return e.apply(t || this, i.concat(o.call(arguments)))
                }).guid = e.guid = e.guid || p.guid++, r) : void 0
            },
            now: Date.now,
            support: d
        }), "function" == typeof Symbol && (p.fn[Symbol.iterator] = n[Symbol.iterator]), p.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(e, t) {
            l["[object " + t + "]"] = t.toLowerCase()
        });
        var y = function(e) {
            var t, n, i, o, r, s, a, l, c, u, d, p, h, f, g, m, v, y, b, x = "sizzle" + 1 * new Date,
                w = e.document,
                C = 0,
                k = 0,
                T = re(),
                j = re(),
                E = re(),
                S = function(e, t) {
                    return e === t && (d = !0), 0
                },
                A = 1 << 31,
                N = {}.hasOwnProperty,
                $ = [],
                D = $.pop,
                O = $.push,
                I = $.push,
                Q = $.slice,
                H = function(e, t) {
                    for (var n = 0, i = e.length; i > n; n++)
                        if (e[n] === t) return n;
                    return -1
                },
                R = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
                L = "[\\x20\\t\\r\\n\\f]",
                P = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
                _ = "\\[" + L + "*(" + P + ")(?:" + L + "*([*^$|!~]?=)" + L + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + P + "))|)" + L + "*\\]",
                q = ":(" + P + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + _ + ")*)|.*)\\)|)",
                F = new RegExp(L + "+", "g"),
                M = new RegExp("^" + L + "+|((?:^|[^\\\\])(?:\\\\.)*)" + L + "+$", "g"),
                W = new RegExp("^" + L + "*," + L + "*"),
                B = new RegExp("^" + L + "*([>+~]|" + L + ")" + L + "*"),
                U = new RegExp("=" + L + "*([^\\]'\"]*?)" + L + "*\\]", "g"),
                z = new RegExp(q),
                V = new RegExp("^" + P + "$"),
                Y = {
                    ID: new RegExp("^#(" + P + ")"),
                    CLASS: new RegExp("^\\.(" + P + ")"),
                    TAG: new RegExp("^(" + P + "|[*])"),
                    ATTR: new RegExp("^" + _),
                    PSEUDO: new RegExp("^" + q),
                    CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + L + "*(even|odd|(([+-]|)(\\d*)n|)" + L + "*(?:([+-]|)" + L + "*(\\d+)|))" + L + "*\\)|)", "i"),
                    bool: new RegExp("^(?:" + R + ")$", "i"),
                    needsContext: new RegExp("^" + L + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + L + "*((?:-\\d)?\\d*)" + L + "*\\)|)(?=[^-]|$)", "i")
                },
                X = /^(?:input|select|textarea|button)$/i,
                G = /^h\d$/i,
                J = /^[^{]+\{\s*\[native \w/,
                K = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
                Z = /[+~]/,
                ee = /'|\\/g,
                te = new RegExp("\\\\([\\da-f]{1,6}" + L + "?|(" + L + ")|.)", "ig"),
                ne = function(e, t, n) {
                    var i = "0x" + t - 65536;
                    return i != i || n ? t : 0 > i ? String.fromCharCode(i + 65536) : String.fromCharCode(i >> 10 | 55296, 1023 & i | 56320)
                },
                ie = function() {
                    p()
                };
            try {
                I.apply($ = Q.call(w.childNodes), w.childNodes), $[w.childNodes.length].nodeType
            } catch (e) {
                I = {
                    apply: $.length ? function(e, t) {
                        O.apply(e, Q.call(t))
                    } : function(e, t) {
                        for (var n = e.length, i = 0; e[n++] = t[i++];);
                        e.length = n - 1
                    }
                }
            }

            function oe(e, t, i, o) {
                var r, a, c, u, d, f, v, y, C = t && t.ownerDocument,
                    k = t ? t.nodeType : 9;
                if (i = i || [], "string" != typeof e || !e || 1 !== k && 9 !== k && 11 !== k) return i;
                if (!o && ((t ? t.ownerDocument || t : w) !== h && p(t), t = t || h, g)) {
                    if (11 !== k && (f = K.exec(e)))
                        if (r = f[1]) {
                            if (9 === k) {
                                if (!(c = t.getElementById(r))) return i;
                                if (c.id === r) return i.push(c), i
                            } else if (C && (c = C.getElementById(r)) && b(t, c) && c.id === r) return i.push(c), i
                        } else {
                            if (f[2]) return I.apply(i, t.getElementsByTagName(e)), i;
                            if ((r = f[3]) && n.getElementsByClassName && t.getElementsByClassName) return I.apply(i, t.getElementsByClassName(r)), i
                        }
                    if (n.qsa && !E[e + " "] && (!m || !m.test(e))) {
                        if (1 !== k) C = t, y = e;
                        else if ("object" !== t.nodeName.toLowerCase()) {
                            for ((u = t.getAttribute("id")) ? u = u.replace(ee, "\\$&") : t.setAttribute("id", u = x), a = (v = s(e)).length, d = V.test(u) ? "#" + u : "[id='" + u + "']"; a--;) v[a] = d + " " + ge(v[a]);
                            y = v.join(","), C = Z.test(e) && he(t.parentNode) || t
                        }
                        if (y) try {
                            return I.apply(i, C.querySelectorAll(y)), i
                        } catch (e) {} finally {
                            u === x && t.removeAttribute("id")
                        }
                    }
                }
                return l(e.replace(M, "$1"), t, i, o)
            }

            function re() {
                var e = [];
                return function t(n, o) {
                    return e.push(n + " ") > i.cacheLength && delete t[e.shift()], t[n + " "] = o
                }
            }

            function se(e) {
                return e[x] = !0, e
            }

            function ae(e) {
                var t = h.createElement("div");
                try {
                    return !!e(t)
                } catch (e) {
                    return !1
                } finally {
                    t.parentNode && t.parentNode.removeChild(t), t = null
                }
            }

            function le(e, t) {
                for (var n = e.split("|"), o = n.length; o--;) i.attrHandle[n[o]] = t
            }

            function ce(e, t) {
                var n = t && e,
                    i = n && 1 === e.nodeType && 1 === t.nodeType && (~t.sourceIndex || A) - (~e.sourceIndex || A);
                if (i) return i;
                if (n)
                    for (; n = n.nextSibling;)
                        if (n === t) return -1;
                return e ? 1 : -1
            }

            function ue(e) {
                return function(t) {
                    return "input" === t.nodeName.toLowerCase() && t.type === e
                }
            }

            function de(e) {
                return function(t) {
                    var n = t.nodeName.toLowerCase();
                    return ("input" === n || "button" === n) && t.type === e
                }
            }

            function pe(e) {
                return se(function(t) {
                    return t = +t, se(function(n, i) {
                        for (var o, r = e([], n.length, t), s = r.length; s--;) n[o = r[s]] && (n[o] = !(i[o] = n[o]))
                    })
                })
            }

            function he(e) {
                return e && void 0 !== e.getElementsByTagName && e
            }
            n = oe.support = {}, r = oe.isXML = function(e) {
                var t = e && (e.ownerDocument || e).documentElement;
                return !!t && "HTML" !== t.nodeName
            }, p = oe.setDocument = function(e) {
                var t, o, s = e ? e.ownerDocument || e : w;
                return s !== h && 9 === s.nodeType && s.documentElement ? (f = (h = s).documentElement, g = !r(h), (o = h.defaultView) && o.top !== o && (o.addEventListener ? o.addEventListener("unload", ie, !1) : o.attachEvent && o.attachEvent("onunload", ie)), n.attributes = ae(function(e) {
                    return e.className = "i", !e.getAttribute("className")
                }), n.getElementsByTagName = ae(function(e) {
                    return e.appendChild(h.createComment("")), !e.getElementsByTagName("*").length
                }), n.getElementsByClassName = J.test(h.getElementsByClassName), n.getById = ae(function(e) {
                    return f.appendChild(e).id = x, !h.getElementsByName || !h.getElementsByName(x).length
                }), n.getById ? (i.find.ID = function(e, t) {
                    if (void 0 !== t.getElementById && g) {
                        var n = t.getElementById(e);
                        return n ? [n] : []
                    }
                }, i.filter.ID = function(e) {
                    var t = e.replace(te, ne);
                    return function(e) {
                        return e.getAttribute("id") === t
                    }
                }) : (delete i.find.ID, i.filter.ID = function(e) {
                    var t = e.replace(te, ne);
                    return function(e) {
                        var n = void 0 !== e.getAttributeNode && e.getAttributeNode("id");
                        return n && n.value === t
                    }
                }), i.find.TAG = n.getElementsByTagName ? function(e, t) {
                    return void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e) : n.qsa ? t.querySelectorAll(e) : void 0
                } : function(e, t) {
                    var n, i = [],
                        o = 0,
                        r = t.getElementsByTagName(e);
                    if ("*" === e) {
                        for (; n = r[o++];) 1 === n.nodeType && i.push(n);
                        return i
                    }
                    return r
                }, i.find.CLASS = n.getElementsByClassName && function(e, t) {
                    return void 0 !== t.getElementsByClassName && g ? t.getElementsByClassName(e) : void 0
                }, v = [], m = [], (n.qsa = J.test(h.querySelectorAll)) && (ae(function(e) {
                    f.appendChild(e).innerHTML = "<a id='" + x + "'></a><select id='" + x + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && m.push("[*^$]=" + L + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || m.push("\\[" + L + "*(?:value|" + R + ")"), e.querySelectorAll("[id~=" + x + "-]").length || m.push("~="), e.querySelectorAll(":checked").length || m.push(":checked"), e.querySelectorAll("a#" + x + "+*").length || m.push(".#.+[+~]")
                }), ae(function(e) {
                    var t = h.createElement("input");
                    t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && m.push("name" + L + "*[*^$|!~]?="), e.querySelectorAll(":enabled").length || m.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), m.push(",.*:")
                })), (n.matchesSelector = J.test(y = f.matches || f.webkitMatchesSelector || f.mozMatchesSelector || f.oMatchesSelector || f.msMatchesSelector)) && ae(function(e) {
                    n.disconnectedMatch = y.call(e, "div"), y.call(e, "[s!='']:x"), v.push("!=", q)
                }), m = m.length && new RegExp(m.join("|")), v = v.length && new RegExp(v.join("|")), t = J.test(f.compareDocumentPosition), b = t || J.test(f.contains) ? function(e, t) {
                    var n = 9 === e.nodeType ? e.documentElement : e,
                        i = t && t.parentNode;
                    return e === i || !(!i || 1 !== i.nodeType || !(n.contains ? n.contains(i) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(i)))
                } : function(e, t) {
                    if (t)
                        for (; t = t.parentNode;)
                            if (t === e) return !0;
                    return !1
                }, S = t ? function(e, t) {
                    if (e === t) return d = !0, 0;
                    var i = !e.compareDocumentPosition - !t.compareDocumentPosition;
                    return i || (1 & (i = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !n.sortDetached && t.compareDocumentPosition(e) === i ? e === h || e.ownerDocument === w && b(w, e) ? -1 : t === h || t.ownerDocument === w && b(w, t) ? 1 : u ? H(u, e) - H(u, t) : 0 : 4 & i ? -1 : 1)
                } : function(e, t) {
                    if (e === t) return d = !0, 0;
                    var n, i = 0,
                        o = e.parentNode,
                        r = t.parentNode,
                        s = [e],
                        a = [t];
                    if (!o || !r) return e === h ? -1 : t === h ? 1 : o ? -1 : r ? 1 : u ? H(u, e) - H(u, t) : 0;
                    if (o === r) return ce(e, t);
                    for (n = e; n = n.parentNode;) s.unshift(n);
                    for (n = t; n = n.parentNode;) a.unshift(n);
                    for (; s[i] === a[i];) i++;
                    return i ? ce(s[i], a[i]) : s[i] === w ? -1 : a[i] === w ? 1 : 0
                }, h) : h
            }, oe.matches = function(e, t) {
                return oe(e, null, null, t)
            }, oe.matchesSelector = function(e, t) {
                if ((e.ownerDocument || e) !== h && p(e), t = t.replace(U, "='$1']"), n.matchesSelector && g && !E[t + " "] && (!v || !v.test(t)) && (!m || !m.test(t))) try {
                    var i = y.call(e, t);
                    if (i || n.disconnectedMatch || e.document && 11 !== e.document.nodeType) return i
                } catch (e) {}
                return oe(t, h, null, [e]).length > 0
            }, oe.contains = function(e, t) {
                return (e.ownerDocument || e) !== h && p(e), b(e, t)
            }, oe.attr = function(e, t) {
                (e.ownerDocument || e) !== h && p(e);
                var o = i.attrHandle[t.toLowerCase()],
                    r = o && N.call(i.attrHandle, t.toLowerCase()) ? o(e, t, !g) : void 0;
                return void 0 !== r ? r : n.attributes || !g ? e.getAttribute(t) : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
            }, oe.error = function(e) {
                throw new Error("Syntax error, unrecognized expression: " + e)
            }, oe.uniqueSort = function(e) {
                var t, i = [],
                    o = 0,
                    r = 0;
                if (d = !n.detectDuplicates, u = !n.sortStable && e.slice(0), e.sort(S), d) {
                    for (; t = e[r++];) t === e[r] && (o = i.push(r));
                    for (; o--;) e.splice(i[o], 1)
                }
                return u = null, e
            }, o = oe.getText = function(e) {
                var t, n = "",
                    i = 0,
                    r = e.nodeType;
                if (r) {
                    if (1 === r || 9 === r || 11 === r) {
                        if ("string" == typeof e.textContent) return e.textContent;
                        for (e = e.firstChild; e; e = e.nextSibling) n += o(e)
                    } else if (3 === r || 4 === r) return e.nodeValue
                } else
                    for (; t = e[i++];) n += o(t);
                return n
            }, (i = oe.selectors = {
                cacheLength: 50,
                createPseudo: se,
                match: Y,
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
                        return e[1] = e[1].replace(te, ne), e[3] = (e[3] || e[4] || e[5] || "").replace(te, ne), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                    },
                    CHILD: function(e) {
                        return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || oe.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && oe.error(e[0]), e
                    },
                    PSEUDO: function(e) {
                        var t, n = !e[6] && e[2];
                        return Y.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && z.test(n) && (t = s(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
                    }
                },
                filter: {
                    TAG: function(e) {
                        var t = e.replace(te, ne).toLowerCase();
                        return "*" === e ? function() {
                            return !0
                        } : function(e) {
                            return e.nodeName && e.nodeName.toLowerCase() === t
                        }
                    },
                    CLASS: function(e) {
                        var t = T[e + " "];
                        return t || (t = new RegExp("(^|" + L + ")" + e + "(" + L + "|$)")) && T(e, function(e) {
                            return t.test("string" == typeof e.className && e.className || void 0 !== e.getAttribute && e.getAttribute("class") || "")
                        })
                    },
                    ATTR: function(e, t, n) {
                        return function(i) {
                            var o = oe.attr(i, e);
                            return null == o ? "!=" === t : !t || (o += "", "=" === t ? o === n : "!=" === t ? o !== n : "^=" === t ? n && 0 === o.indexOf(n) : "*=" === t ? n && o.indexOf(n) > -1 : "$=" === t ? n && o.slice(-n.length) === n : "~=" === t ? (" " + o.replace(F, " ") + " ").indexOf(n) > -1 : "|=" === t && (o === n || o.slice(0, n.length + 1) === n + "-"))
                        }
                    },
                    CHILD: function(e, t, n, i, o) {
                        var r = "nth" !== e.slice(0, 3),
                            s = "last" !== e.slice(-4),
                            a = "of-type" === t;
                        return 1 === i && 0 === o ? function(e) {
                            return !!e.parentNode
                        } : function(t, n, l) {
                            var c, u, d, p, h, f, g = r !== s ? "nextSibling" : "previousSibling",
                                m = t.parentNode,
                                v = a && t.nodeName.toLowerCase(),
                                y = !l && !a,
                                b = !1;
                            if (m) {
                                if (r) {
                                    for (; g;) {
                                        for (p = t; p = p[g];)
                                            if (a ? p.nodeName.toLowerCase() === v : 1 === p.nodeType) return !1;
                                        f = g = "only" === e && !f && "nextSibling"
                                    }
                                    return !0
                                }
                                if (f = [s ? m.firstChild : m.lastChild], s && y) {
                                    for (b = (h = (c = (u = (d = (p = m)[x] || (p[x] = {}))[p.uniqueID] || (d[p.uniqueID] = {}))[e] || [])[0] === C && c[1]) && c[2], p = h && m.childNodes[h]; p = ++h && p && p[g] || (b = h = 0) || f.pop();)
                                        if (1 === p.nodeType && ++b && p === t) {
                                            u[e] = [C, h, b];
                                            break
                                        }
                                } else if (y && (p = t, d = p[x] || (p[x] = {}), u = d[p.uniqueID] || (d[p.uniqueID] = {}), c = u[e] || [], h = c[0] === C && c[1], b = h), !1 === b)
                                    for (;
                                        (p = ++h && p && p[g] || (b = h = 0) || f.pop()) && ((a ? p.nodeName.toLowerCase() !== v : 1 !== p.nodeType) || !++b || (y && (d = p[x] || (p[x] = {}), u = d[p.uniqueID] || (d[p.uniqueID] = {}), u[e] = [C, b]), p !== t)););
                                return (b -= o) === i || b % i == 0 && b / i >= 0
                            }
                        }
                    },
                    PSEUDO: function(e, t) {
                        var n, o = i.pseudos[e] || i.setFilters[e.toLowerCase()] || oe.error("unsupported pseudo: " + e);
                        return o[x] ? o(t) : o.length > 1 ? (n = [e, e, "", t], i.setFilters.hasOwnProperty(e.toLowerCase()) ? se(function(e, n) {
                            for (var i, r = o(e, t), s = r.length; s--;) i = H(e, r[s]), e[i] = !(n[i] = r[s])
                        }) : function(e) {
                            return o(e, 0, n)
                        }) : o
                    }
                },
                pseudos: {
                    not: se(function(e) {
                        var t = [],
                            n = [],
                            i = a(e.replace(M, "$1"));
                        return i[x] ? se(function(e, t, n, o) {
                            for (var r, s = i(e, null, o, []), a = e.length; a--;)(r = s[a]) && (e[a] = !(t[a] = r))
                        }) : function(e, o, r) {
                            return t[0] = e, i(t, null, r, n), t[0] = null, !n.pop()
                        }
                    }),
                    has: se(function(e) {
                        return function(t) {
                            return oe(e, t).length > 0
                        }
                    }),
                    contains: se(function(e) {
                        return e = e.replace(te, ne),
                            function(t) {
                                return (t.textContent || t.innerText || o(t)).indexOf(e) > -1
                            }
                    }),
                    lang: se(function(e) {
                        return V.test(e || "") || oe.error("unsupported lang: " + e), e = e.replace(te, ne).toLowerCase(),
                            function(t) {
                                var n;
                                do {
                                    if (n = g ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return n = n.toLowerCase(), n === e || 0 === n.indexOf(e + "-")
                                } while ((t = t.parentNode) && 1 === t.nodeType);
                                return !1
                            }
                    }),
                    target: function(t) {
                        var n = e.location && e.location.hash;
                        return n && n.slice(1) === t.id
                    },
                    root: function(e) {
                        return e === f
                    },
                    focus: function(e) {
                        return e === h.activeElement && (!h.hasFocus || h.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                    },
                    enabled: function(e) {
                        return !1 === e.disabled
                    },
                    disabled: function(e) {
                        return !0 === e.disabled
                    },
                    checked: function(e) {
                        var t = e.nodeName.toLowerCase();
                        return "input" === t && !!e.checked || "option" === t && !!e.selected
                    },
                    selected: function(e) {
                        return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
                    },
                    empty: function(e) {
                        for (e = e.firstChild; e; e = e.nextSibling)
                            if (e.nodeType < 6) return !1;
                        return !0
                    },
                    parent: function(e) {
                        return !i.pseudos.empty(e)
                    },
                    header: function(e) {
                        return G.test(e.nodeName)
                    },
                    input: function(e) {
                        return X.test(e.nodeName)
                    },
                    button: function(e) {
                        var t = e.nodeName.toLowerCase();
                        return "input" === t && "button" === e.type || "button" === t
                    },
                    text: function(e) {
                        var t;
                        return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                    },
                    first: pe(function() {
                        return [0]
                    }),
                    last: pe(function(e, t) {
                        return [t - 1]
                    }),
                    eq: pe(function(e, t, n) {
                        return [0 > n ? n + t : n]
                    }),
                    even: pe(function(e, t) {
                        for (var n = 0; t > n; n += 2) e.push(n);
                        return e
                    }),
                    odd: pe(function(e, t) {
                        for (var n = 1; t > n; n += 2) e.push(n);
                        return e
                    }),
                    lt: pe(function(e, t, n) {
                        for (var i = 0 > n ? n + t : n; --i >= 0;) e.push(i);
                        return e
                    }),
                    gt: pe(function(e, t, n) {
                        for (var i = 0 > n ? n + t : n; ++i < t;) e.push(i);
                        return e
                    })
                }
            }).pseudos.nth = i.pseudos.eq;
            for (t in {
                    radio: !0,
                    checkbox: !0,
                    file: !0,
                    password: !0,
                    image: !0
                }) i.pseudos[t] = ue(t);
            for (t in {
                    submit: !0,
                    reset: !0
                }) i.pseudos[t] = de(t);

            function fe() {}

            function ge(e) {
                for (var t = 0, n = e.length, i = ""; n > t; t++) i += e[t].value;
                return i
            }

            function me(e, t, n) {
                var i = t.dir,
                    o = n && "parentNode" === i,
                    r = k++;
                return t.first ? function(t, n, r) {
                    for (; t = t[i];)
                        if (1 === t.nodeType || o) return e(t, n, r)
                } : function(t, n, s) {
                    var a, l, c, u = [C, r];
                    if (s) {
                        for (; t = t[i];)
                            if ((1 === t.nodeType || o) && e(t, n, s)) return !0
                    } else
                        for (; t = t[i];)
                            if (1 === t.nodeType || o) {
                                if ((a = (l = (c = t[x] || (t[x] = {}))[t.uniqueID] || (c[t.uniqueID] = {}))[i]) && a[0] === C && a[1] === r) return u[2] = a[2];
                                if (l[i] = u, u[2] = e(t, n, s)) return !0
                            }
                }
            }

            function ve(e) {
                return e.length > 1 ? function(t, n, i) {
                    for (var o = e.length; o--;)
                        if (!e[o](t, n, i)) return !1;
                    return !0
                } : e[0]
            }

            function ye(e, t, n, i, o) {
                for (var r, s = [], a = 0, l = e.length, c = null != t; l > a; a++)(r = e[a]) && (n && !n(r, i, o) || (s.push(r), c && t.push(a)));
                return s
            }

            function be(e, t, n, i, o, r) {
                return i && !i[x] && (i = be(i)), o && !o[x] && (o = be(o, r)), se(function(r, s, a, l) {
                    var c, u, d, p = [],
                        h = [],
                        f = s.length,
                        g = r || function(e, t, n) {
                            for (var i = 0, o = t.length; o > i; i++) oe(e, t[i], n);
                            return n
                        }(t || "*", a.nodeType ? [a] : a, []),
                        m = !e || !r && t ? g : ye(g, p, e, a, l),
                        v = n ? o || (r ? e : f || i) ? [] : s : m;
                    if (n && n(m, v, a, l), i)
                        for (c = ye(v, h), i(c, [], a, l), u = c.length; u--;)(d = c[u]) && (v[h[u]] = !(m[h[u]] = d));
                    if (r) {
                        if (o || e) {
                            if (o) {
                                for (c = [], u = v.length; u--;)(d = v[u]) && c.push(m[u] = d);
                                o(null, v = [], c, l)
                            }
                            for (u = v.length; u--;)(d = v[u]) && (c = o ? H(r, d) : p[u]) > -1 && (r[c] = !(s[c] = d))
                        }
                    } else v = ye(v === s ? v.splice(f, v.length) : v), o ? o(null, s, v, l) : I.apply(s, v)
                })
            }

            function xe(e) {
                for (var t, n, o, r = e.length, s = i.relative[e[0].type], a = s || i.relative[" "], l = s ? 1 : 0, u = me(function(e) {
                        return e === t
                    }, a, !0), d = me(function(e) {
                        return H(t, e) > -1
                    }, a, !0), p = [function(e, n, i) {
                        var o = !s && (i || n !== c) || ((t = n).nodeType ? u(e, n, i) : d(e, n, i));
                        return t = null, o
                    }]; r > l; l++)
                    if (n = i.relative[e[l].type]) p = [me(ve(p), n)];
                    else {
                        if ((n = i.filter[e[l].type].apply(null, e[l].matches))[x]) {
                            for (o = ++l; r > o && !i.relative[e[o].type]; o++);
                            return be(l > 1 && ve(p), l > 1 && ge(e.slice(0, l - 1).concat({
                                value: " " === e[l - 2].type ? "*" : ""
                            })).replace(M, "$1"), n, o > l && xe(e.slice(l, o)), r > o && xe(e = e.slice(o)), r > o && ge(e))
                        }
                        p.push(n)
                    }
                return ve(p)
            }
            return fe.prototype = i.filters = i.pseudos, i.setFilters = new fe, s = oe.tokenize = function(e, t) {
                var n, o, r, s, a, l, c, u = j[e + " "];
                if (u) return t ? 0 : u.slice(0);
                for (a = e, l = [], c = i.preFilter; a;) {
                    n && !(o = W.exec(a)) || (o && (a = a.slice(o[0].length) || a), l.push(r = [])), n = !1, (o = B.exec(a)) && (n = o.shift(), r.push({
                        value: n,
                        type: o[0].replace(M, " ")
                    }), a = a.slice(n.length));
                    for (s in i.filter) !(o = Y[s].exec(a)) || c[s] && !(o = c[s](o)) || (n = o.shift(), r.push({
                        value: n,
                        type: s,
                        matches: o
                    }), a = a.slice(n.length));
                    if (!n) break
                }
                return t ? a.length : a ? oe.error(e) : j(e, l).slice(0)
            }, a = oe.compile = function(e, t) {
                var n, o, r, a, l, u, d = [],
                    f = [],
                    m = E[e + " "];
                if (!m) {
                    for (t || (t = s(e)), n = t.length; n--;) m = xe(t[n]), m[x] ? d.push(m) : f.push(m);
                    (m = E(e, (o = f, a = (r = d).length > 0, l = o.length > 0, u = function(e, t, n, s, u) {
                        var d, f, m, v = 0,
                            y = "0",
                            b = e && [],
                            x = [],
                            w = c,
                            k = e || l && i.find.TAG("*", u),
                            T = C += null == w ? 1 : Math.random() || .1,
                            j = k.length;
                        for (u && (c = t === h || t || u); y !== j && null != (d = k[y]); y++) {
                            if (l && d) {
                                for (f = 0, t || d.ownerDocument === h || (p(d), n = !g); m = o[f++];)
                                    if (m(d, t || h, n)) {
                                        s.push(d);
                                        break
                                    }
                                u && (C = T)
                            }
                            a && ((d = !m && d) && v--, e && b.push(d))
                        }
                        if (v += y, a && y !== v) {
                            for (f = 0; m = r[f++];) m(b, x, t, n);
                            if (e) {
                                if (v > 0)
                                    for (; y--;) b[y] || x[y] || (x[y] = D.call(s));
                                x = ye(x)
                            }
                            I.apply(s, x), u && !e && x.length > 0 && v + r.length > 1 && oe.uniqueSort(s)
                        }
                        return u && (C = T, c = w), b
                    }, a ? se(u) : u))).selector = e
                }
                return m
            }, l = oe.select = function(e, t, o, r) {
                var l, c, u, d, p, h = "function" == typeof e && e,
                    f = !r && s(e = h.selector || e);
                if (o = o || [], 1 === f.length) {
                    if ((c = f[0] = f[0].slice(0)).length > 2 && "ID" === (u = c[0]).type && n.getById && 9 === t.nodeType && g && i.relative[c[1].type]) {
                        if (!(t = (i.find.ID(u.matches[0].replace(te, ne), t) || [])[0])) return o;
                        h && (t = t.parentNode), e = e.slice(c.shift().value.length)
                    }
                    for (l = Y.needsContext.test(e) ? 0 : c.length; l-- && (u = c[l], !i.relative[d = u.type]);)
                        if ((p = i.find[d]) && (r = p(u.matches[0].replace(te, ne), Z.test(c[0].type) && he(t.parentNode) || t))) {
                            if (c.splice(l, 1), !(e = r.length && ge(c))) return I.apply(o, r), o;
                            break
                        }
                }
                return (h || a(e, f))(r, t, !g, o, !t || Z.test(e) && he(t.parentNode) || t), o
            }, n.sortStable = x.split("").sort(S).join("") === x, n.detectDuplicates = !!d, p(), n.sortDetached = ae(function(e) {
                return 1 & e.compareDocumentPosition(h.createElement("div"))
            }), ae(function(e) {
                return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
            }) || le("type|href|height|width", function(e, t, n) {
                return n ? void 0 : e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
            }), n.attributes && ae(function(e) {
                return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
            }) || le("value", function(e, t, n) {
                return n || "input" !== e.nodeName.toLowerCase() ? void 0 : e.defaultValue
            }), ae(function(e) {
                return null == e.getAttribute("disabled")
            }) || le(R, function(e, t, n) {
                var i;
                return n ? void 0 : !0 === e[t] ? t.toLowerCase() : (i = e.getAttributeNode(t)) && i.specified ? i.value : null
            }), oe
        }(e);
        p.find = y, p.expr = y.selectors, p.expr[":"] = p.expr.pseudos, p.uniqueSort = p.unique = y.uniqueSort, p.text = y.getText, p.isXMLDoc = y.isXML, p.contains = y.contains;
        var b = function(e, t, n) {
                for (var i = [], o = void 0 !== n;
                    (e = e[t]) && 9 !== e.nodeType;)
                    if (1 === e.nodeType) {
                        if (o && p(e).is(n)) break;
                        i.push(e)
                    }
                return i
            },
            x = function(e, t) {
                for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
                return n
            },
            w = p.expr.match.needsContext,
            C = /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,
            k = /^.[^:#\[\.,]*$/;

        function T(e, t, n) {
            if (p.isFunction(t)) return p.grep(e, function(e, i) {
                return !!t.call(e, i, e) !== n
            });
            if (t.nodeType) return p.grep(e, function(e) {
                return e === t !== n
            });
            if ("string" == typeof t) {
                if (k.test(t)) return p.filter(t, e, n);
                t = p.filter(t, e)
            }
            return p.grep(e, function(e) {
                return a.call(t, e) > -1 !== n
            })
        }
        p.filter = function(e, t, n) {
            var i = t[0];
            return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === i.nodeType ? p.find.matchesSelector(i, e) ? [i] : [] : p.find.matches(e, p.grep(t, function(e) {
                return 1 === e.nodeType
            }))
        }, p.fn.extend({
            find: function(e) {
                var t, n = this.length,
                    i = [],
                    o = this;
                if ("string" != typeof e) return this.pushStack(p(e).filter(function() {
                    for (t = 0; n > t; t++)
                        if (p.contains(o[t], this)) return !0
                }));
                for (t = 0; n > t; t++) p.find(e, o[t], i);
                return (i = this.pushStack(n > 1 ? p.unique(i) : i)).selector = this.selector ? this.selector + " " + e : e, i
            },
            filter: function(e) {
                return this.pushStack(T(this, e || [], !1))
            },
            not: function(e) {
                return this.pushStack(T(this, e || [], !0))
            },
            is: function(e) {
                return !!T(this, "string" == typeof e && w.test(e) ? p(e) : e || [], !1).length
            }
        });
        var j, E = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/;
        (p.fn.init = function(e, t, n) {
            var o, r;
            if (!e) return this;
            if (n = n || j, "string" == typeof e) {
                if (!(o = "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3 ? [null, e, null] : E.exec(e)) || !o[1] && t) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
                if (o[1]) {
                    if (t = t instanceof p ? t[0] : t, p.merge(this, p.parseHTML(o[1], t && t.nodeType ? t.ownerDocument || t : i, !0)), C.test(o[1]) && p.isPlainObject(t))
                        for (o in t) p.isFunction(this[o]) ? this[o](t[o]) : this.attr(o, t[o]);
                    return this
                }
                return (r = i.getElementById(o[2])) && r.parentNode && (this.length = 1, this[0] = r), this.context = i, this.selector = e, this
            }
            return e.nodeType ? (this.context = this[0] = e, this.length = 1, this) : p.isFunction(e) ? void 0 !== n.ready ? n.ready(e) : e(p) : (void 0 !== e.selector && (this.selector = e.selector, this.context = e.context), p.makeArray(e, this))
        }).prototype = p.fn, j = p(i);
        var S = /^(?:parents|prev(?:Until|All))/,
            A = {
                children: !0,
                contents: !0,
                next: !0,
                prev: !0
            };

        function N(e, t) {
            for (;
                (e = e[t]) && 1 !== e.nodeType;);
            return e
        }
        p.fn.extend({
            has: function(e) {
                var t = p(e, this),
                    n = t.length;
                return this.filter(function() {
                    for (var e = 0; n > e; e++)
                        if (p.contains(this, t[e])) return !0
                })
            },
            closest: function(e, t) {
                for (var n, i = 0, o = this.length, r = [], s = w.test(e) || "string" != typeof e ? p(e, t || this.context) : 0; o > i; i++)
                    for (n = this[i]; n && n !== t; n = n.parentNode)
                        if (n.nodeType < 11 && (s ? s.index(n) > -1 : 1 === n.nodeType && p.find.matchesSelector(n, e))) {
                            r.push(n);
                            break
                        }
                return this.pushStack(r.length > 1 ? p.uniqueSort(r) : r)
            },
            index: function(e) {
                return e ? "string" == typeof e ? a.call(p(e), this[0]) : a.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
            },
            add: function(e, t) {
                return this.pushStack(p.uniqueSort(p.merge(this.get(), p(e, t))))
            },
            addBack: function(e) {
                return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
            }
        }), p.each({
            parent: function(e) {
                var t = e.parentNode;
                return t && 11 !== t.nodeType ? t : null
            },
            parents: function(e) {
                return b(e, "parentNode")
            },
            parentsUntil: function(e, t, n) {
                return b(e, "parentNode", n)
            },
            next: function(e) {
                return N(e, "nextSibling")
            },
            prev: function(e) {
                return N(e, "previousSibling")
            },
            nextAll: function(e) {
                return b(e, "nextSibling")
            },
            prevAll: function(e) {
                return b(e, "previousSibling")
            },
            nextUntil: function(e, t, n) {
                return b(e, "nextSibling", n)
            },
            prevUntil: function(e, t, n) {
                return b(e, "previousSibling", n)
            },
            siblings: function(e) {
                return x((e.parentNode || {}).firstChild, e)
            },
            children: function(e) {
                return x(e.firstChild)
            },
            contents: function(e) {
                return e.contentDocument || p.merge([], e.childNodes)
            }
        }, function(e, t) {
            p.fn[e] = function(n, i) {
                var o = p.map(this, t, n);
                return "Until" !== e.slice(-5) && (i = n), i && "string" == typeof i && (o = p.filter(i, o)), this.length > 1 && (A[e] || p.uniqueSort(o), S.test(e) && o.reverse()), this.pushStack(o)
            }
        });
        var $, D = /\S+/g;

        function O() {
            i.removeEventListener("DOMContentLoaded", O), e.removeEventListener("load", O), p.ready()
        }
        p.Callbacks = function(e) {
            var t, n;
            e = "string" == typeof e ? (t = e, n = {}, p.each(t.match(D) || [], function(e, t) {
                n[t] = !0
            }), n) : p.extend({}, e);
            var i, o, r, s, a = [],
                l = [],
                c = -1,
                u = function() {
                    for (s = e.once, r = i = !0; l.length; c = -1)
                        for (o = l.shift(); ++c < a.length;) !1 === a[c].apply(o[0], o[1]) && e.stopOnFalse && (c = a.length, o = !1);
                    e.memory || (o = !1), i = !1, s && (a = o ? [] : "")
                },
                d = {
                    add: function() {
                        return a && (o && !i && (c = a.length - 1, l.push(o)), function t(n) {
                            p.each(n, function(n, i) {
                                p.isFunction(i) ? e.unique && d.has(i) || a.push(i) : i && i.length && "string" !== p.type(i) && t(i)
                            })
                        }(arguments), o && !i && u()), this
                    },
                    remove: function() {
                        return p.each(arguments, function(e, t) {
                            for (var n;
                                (n = p.inArray(t, a, n)) > -1;) a.splice(n, 1), c >= n && c--
                        }), this
                    },
                    has: function(e) {
                        return e ? p.inArray(e, a) > -1 : a.length > 0
                    },
                    empty: function() {
                        return a && (a = []), this
                    },
                    disable: function() {
                        return s = l = [], a = o = "", this
                    },
                    disabled: function() {
                        return !a
                    },
                    lock: function() {
                        return s = l = [], o || (a = o = ""), this
                    },
                    locked: function() {
                        return !!s
                    },
                    fireWith: function(e, t) {
                        return s || (t = [e, (t = t || []).slice ? t.slice() : t], l.push(t), i || u()), this
                    },
                    fire: function() {
                        return d.fireWith(this, arguments), this
                    },
                    fired: function() {
                        return !!r
                    }
                };
            return d
        }, p.extend({
            Deferred: function(e) {
                var t = [
                        ["resolve", "done", p.Callbacks("once memory"), "resolved"],
                        ["reject", "fail", p.Callbacks("once memory"), "rejected"],
                        ["notify", "progress", p.Callbacks("memory")]
                    ],
                    n = "pending",
                    i = {
                        state: function() {
                            return n
                        },
                        always: function() {
                            return o.done(arguments).fail(arguments), this
                        },
                        then: function() {
                            var e = arguments;
                            return p.Deferred(function(n) {
                                p.each(t, function(t, r) {
                                    var s = p.isFunction(e[t]) && e[t];
                                    o[r[1]](function() {
                                        var e = s && s.apply(this, arguments);
                                        e && p.isFunction(e.promise) ? e.promise().progress(n.notify).done(n.resolve).fail(n.reject) : n[r[0] + "With"](this === i ? n.promise() : this, s ? [e] : arguments)
                                    })
                                }), e = null
                            }).promise()
                        },
                        promise: function(e) {
                            return null != e ? p.extend(e, i) : i
                        }
                    },
                    o = {};
                return i.pipe = i.then, p.each(t, function(e, r) {
                    var s = r[2],
                        a = r[3];
                    i[r[1]] = s.add, a && s.add(function() {
                        n = a
                    }, t[1 ^ e][2].disable, t[2][2].lock), o[r[0]] = function() {
                        return o[r[0] + "With"](this === o ? i : this, arguments), this
                    }, o[r[0] + "With"] = s.fireWith
                }), i.promise(o), e && e.call(o, o), o
            },
            when: function(e) {
                var t, n, i, r = 0,
                    s = o.call(arguments),
                    a = s.length,
                    l = 1 !== a || e && p.isFunction(e.promise) ? a : 0,
                    c = 1 === l ? e : p.Deferred(),
                    u = function(e, n, i) {
                        return function(r) {
                            n[e] = this, i[e] = arguments.length > 1 ? o.call(arguments) : r, i === t ? c.notifyWith(n, i) : --l || c.resolveWith(n, i)
                        }
                    };
                if (a > 1)
                    for (t = new Array(a), n = new Array(a), i = new Array(a); a > r; r++) s[r] && p.isFunction(s[r].promise) ? s[r].promise().progress(u(r, n, t)).done(u(r, i, s)).fail(c.reject) : --l;
                return l || c.resolveWith(i, s), c.promise()
            }
        }), p.fn.ready = function(e) {
            return p.ready.promise().done(e), this
        }, p.extend({
            isReady: !1,
            readyWait: 1,
            holdReady: function(e) {
                e ? p.readyWait++ : p.ready(!0)
            },
            ready: function(e) {
                (!0 === e ? --p.readyWait : p.isReady) || (p.isReady = !0, !0 !== e && --p.readyWait > 0 || ($.resolveWith(i, [p]), p.fn.triggerHandler && (p(i).triggerHandler("ready"), p(i).off("ready"))))
            }
        }), p.ready.promise = function(t) {
            return $ || ($ = p.Deferred(), "complete" === i.readyState || "loading" !== i.readyState && !i.documentElement.doScroll ? e.setTimeout(p.ready) : (i.addEventListener("DOMContentLoaded", O), e.addEventListener("load", O))), $.promise(t)
        }, p.ready.promise();
        var I = function(e, t, n, i, o, r, s) {
                var a = 0,
                    l = e.length,
                    c = null == n;
                if ("object" === p.type(n)) {
                    o = !0;
                    for (a in n) I(e, t, a, n[a], !0, r, s)
                } else if (void 0 !== i && (o = !0, p.isFunction(i) || (s = !0), c && (s ? (t.call(e, i), t = null) : (c = t, t = function(e, t, n) {
                        return c.call(p(e), n)
                    })), t))
                    for (; l > a; a++) t(e[a], n, s ? i : i.call(e[a], a, t(e[a], n)));
                return o ? e : c ? t.call(e) : l ? t(e[0], n) : r
            },
            Q = function(e) {
                return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
            };

        function H() {
            this.expando = p.expando + H.uid++
        }
        H.uid = 1, H.prototype = {
            register: function(e, t) {
                var n = t || {};
                return e.nodeType ? e[this.expando] = n : Object.defineProperty(e, this.expando, {
                    value: n,
                    writable: !0,
                    configurable: !0
                }), e[this.expando]
            },
            cache: function(e) {
                if (!Q(e)) return {};
                var t = e[this.expando];
                return t || (t = {}, Q(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
                    value: t,
                    configurable: !0
                }))), t
            },
            set: function(e, t, n) {
                var i, o = this.cache(e);
                if ("string" == typeof t) o[t] = n;
                else
                    for (i in t) o[i] = t[i];
                return o
            },
            get: function(e, t) {
                return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][t]
            },
            access: function(e, t, n) {
                var i;
                return void 0 === t || t && "string" == typeof t && void 0 === n ? void 0 !== (i = this.get(e, t)) ? i : this.get(e, p.camelCase(t)) : (this.set(e, t, n), void 0 !== n ? n : t)
            },
            remove: function(e, t) {
                var n, i, o, r = e[this.expando];
                if (void 0 !== r) {
                    if (void 0 === t) this.register(e);
                    else {
                        p.isArray(t) ? i = t.concat(t.map(p.camelCase)) : (o = p.camelCase(t), t in r ? i = [t, o] : i = (i = o) in r ? [i] : i.match(D) || []), n = i.length;
                        for (; n--;) delete r[i[n]]
                    }(void 0 === t || p.isEmptyObject(r)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando])
                }
            },
            hasData: function(e) {
                var t = e[this.expando];
                return void 0 !== t && !p.isEmptyObject(t)
            }
        };
        var R = new H,
            L = new H,
            P = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
            _ = /[A-Z]/g;

        function q(e, t, n) {
            var i;
            if (void 0 === n && 1 === e.nodeType)
                if (i = "data-" + t.replace(_, "-$&").toLowerCase(), n = e.getAttribute(i), "string" == typeof n) {
                    try {
                        n = "true" === n || "false" !== n && ("null" === n ? null : +n + "" === n ? +n : P.test(n) ? p.parseJSON(n) : n)
                    } catch (e) {}
                    L.set(e, t, n)
                } else n = void 0;
            return n
        }
        p.extend({
            hasData: function(e) {
                return L.hasData(e) || R.hasData(e)
            },
            data: function(e, t, n) {
                return L.access(e, t, n)
            },
            removeData: function(e, t) {
                L.remove(e, t)
            },
            _data: function(e, t, n) {
                return R.access(e, t, n)
            },
            _removeData: function(e, t) {
                R.remove(e, t)
            }
        }), p.fn.extend({
            data: function(e, t) {
                var n, i, o, r = this[0],
                    s = r && r.attributes;
                if (void 0 === e) {
                    if (this.length && (o = L.get(r), 1 === r.nodeType && !R.get(r, "hasDataAttrs"))) {
                        for (n = s.length; n--;) s[n] && (i = s[n].name, 0 === i.indexOf("data-") && (i = p.camelCase(i.slice(5)), q(r, i, o[i])));
                        R.set(r, "hasDataAttrs", !0)
                    }
                    return o
                }
                return "object" == typeof e ? this.each(function() {
                    L.set(this, e)
                }) : I(this, function(t) {
                    var n, i;
                    if (r && void 0 === t) {
                        if (void 0 !== (n = L.get(r, e) || L.get(r, e.replace(_, "-$&").toLowerCase()))) return n;
                        if (i = p.camelCase(e), void 0 !== (n = L.get(r, i))) return n;
                        if (void 0 !== (n = q(r, i, void 0))) return n
                    } else i = p.camelCase(e), this.each(function() {
                        var n = L.get(this, i);
                        L.set(this, i, t), e.indexOf("-") > -1 && void 0 !== n && L.set(this, e, t)
                    })
                }, null, t, arguments.length > 1, null, !0)
            },
            removeData: function(e) {
                return this.each(function() {
                    L.remove(this, e)
                })
            }
        }), p.extend({
            queue: function(e, t, n) {
                var i;
                return e ? (t = (t || "fx") + "queue", i = R.get(e, t), n && (!i || p.isArray(n) ? i = R.access(e, t, p.makeArray(n)) : i.push(n)), i || []) : void 0
            },
            dequeue: function(e, t) {
                t = t || "fx";
                var n = p.queue(e, t),
                    i = n.length,
                    o = n.shift(),
                    r = p._queueHooks(e, t);
                "inprogress" === o && (o = n.shift(), i--), o && ("fx" === t && n.unshift("inprogress"), delete r.stop, o.call(e, function() {
                    p.dequeue(e, t)
                }, r)), !i && r && r.empty.fire()
            },
            _queueHooks: function(e, t) {
                var n = t + "queueHooks";
                return R.get(e, n) || R.access(e, n, {
                    empty: p.Callbacks("once memory").add(function() {
                        R.remove(e, [t + "queue", n])
                    })
                })
            }
        }), p.fn.extend({
            queue: function(e, t) {
                var n = 2;
                return "string" != typeof e && (t = e, e = "fx", n--), arguments.length < n ? p.queue(this[0], e) : void 0 === t ? this : this.each(function() {
                    var n = p.queue(this, e, t);
                    p._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && p.dequeue(this, e)
                })
            },
            dequeue: function(e) {
                return this.each(function() {
                    p.dequeue(this, e)
                })
            },
            clearQueue: function(e) {
                return this.queue(e || "fx", [])
            },
            promise: function(e, t) {
                var n, i = 1,
                    o = p.Deferred(),
                    r = this,
                    s = this.length,
                    a = function() {
                        --i || o.resolveWith(r, [r])
                    };
                for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; s--;) n = R.get(r[s], e + "queueHooks"), n && n.empty && (i++, n.empty.add(a));
                return a(), o.promise(t)
            }
        });
        var F = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
            M = new RegExp("^(?:([+-])=|)(" + F + ")([a-z%]*)$", "i"),
            W = ["Top", "Right", "Bottom", "Left"],
            B = function(e, t) {
                return e = t || e, "none" === p.css(e, "display") || !p.contains(e.ownerDocument, e)
            };

        function U(e, t, n, i) {
            var o, r = 1,
                s = 20,
                a = i ? function() {
                    return i.cur()
                } : function() {
                    return p.css(e, t, "")
                },
                l = a(),
                c = n && n[3] || (p.cssNumber[t] ? "" : "px"),
                u = (p.cssNumber[t] || "px" !== c && +l) && M.exec(p.css(e, t));
            if (u && u[3] !== c) {
                c = c || u[3], n = n || [], u = +l || 1;
                do {
                    r = r || ".5", u /= r, p.style(e, t, u + c)
                } while (r !== (r = a() / l) && 1 !== r && --s)
            }
            return n && (u = +u || +l || 0, o = n[1] ? u + (n[1] + 1) * n[2] : +n[2], i && (i.unit = c, i.start = u, i.end = o)), o
        }
        var z = /^(?:checkbox|radio)$/i,
            V = /<([\w:-]+)/,
            Y = /^$|\/(?:java|ecma)script/i,
            X = {
                option: [1, "<select multiple='multiple'>", "</select>"],
                thead: [1, "<table>", "</table>"],
                col: [2, "<table><colgroup>", "</colgroup></table>"],
                tr: [2, "<table><tbody>", "</tbody></table>"],
                td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
                _default: [0, "", ""]
            };

        function G(e, t) {
            var n = void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t || "*") : void 0 !== e.querySelectorAll ? e.querySelectorAll(t || "*") : [];
            return void 0 === t || t && p.nodeName(e, t) ? p.merge([e], n) : n
        }

        function J(e, t) {
            for (var n = 0, i = e.length; i > n; n++) R.set(e[n], "globalEval", !t || R.get(t[n], "globalEval"))
        }
        X.optgroup = X.option, X.tbody = X.tfoot = X.colgroup = X.caption = X.thead, X.th = X.td;
        var K, Z, ee = /<|&#?\w+;/;

        function te(e, t, n, i, o) {
            for (var r, s, a, l, c, u, d = t.createDocumentFragment(), h = [], f = 0, g = e.length; g > f; f++)
                if (r = e[f], r || 0 === r)
                    if ("object" === p.type(r)) p.merge(h, r.nodeType ? [r] : r);
                    else if (ee.test(r)) {
                for (s = s || d.appendChild(t.createElement("div")), a = (V.exec(r) || ["", ""])[1].toLowerCase(), l = X[a] || X._default, s.innerHTML = l[1] + p.htmlPrefilter(r) + l[2], u = l[0]; u--;) s = s.lastChild;
                p.merge(h, s.childNodes), (s = d.firstChild).textContent = ""
            } else h.push(t.createTextNode(r));
            for (d.textContent = "", f = 0; r = h[f++];)
                if (i && p.inArray(r, i) > -1) o && o.push(r);
                else if (c = p.contains(r.ownerDocument, r), s = G(d.appendChild(r), "script"), c && J(s), n)
                for (u = 0; r = s[u++];) Y.test(r.type || "") && n.push(r);
            return d
        }
        K = i.createDocumentFragment().appendChild(i.createElement("div")), (Z = i.createElement("input")).setAttribute("type", "radio"), Z.setAttribute("checked", "checked"), Z.setAttribute("name", "t"), K.appendChild(Z), d.checkClone = K.cloneNode(!0).cloneNode(!0).lastChild.checked, K.innerHTML = "<textarea>x</textarea>", d.noCloneChecked = !!K.cloneNode(!0).lastChild.defaultValue;
        var ne = /^key/,
            ie = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
            oe = /^([^.]*)(?:\.(.+)|)/;

        function re() {
            return !0
        }

        function se() {
            return !1
        }

        function ae() {
            try {
                return i.activeElement
            } catch (e) {}
        }

        function le(e, t, n, i, o, r) {
            var s, a;
            if ("object" == typeof t) {
                "string" != typeof n && (i = i || n, n = void 0);
                for (a in t) le(e, a, n, i, t[a], r);
                return e
            }
            if (null == i && null == o ? (o = n, i = n = void 0) : null == o && ("string" == typeof n ? (o = i, i = void 0) : (o = i, i = n, n = void 0)), !1 === o) o = se;
            else if (!o) return e;
            return 1 === r && (s = o, (o = function(e) {
                return p().off(e), s.apply(this, arguments)
            }).guid = s.guid || (s.guid = p.guid++)), e.each(function() {
                p.event.add(this, t, o, i, n)
            })
        }
        p.event = {
            global: {},
            add: function(e, t, n, i, o) {
                var r, s, a, l, c, u, d, h, f, g, m, v = R.get(e);
                if (v)
                    for (n.handler && (n = (r = n).handler, o = r.selector), n.guid || (n.guid = p.guid++), (l = v.events) || (l = v.events = {}), (s = v.handle) || (s = v.handle = function(t) {
                            return void 0 !== p && p.event.triggered !== t.type ? p.event.dispatch.apply(e, arguments) : void 0
                        }), c = (t = (t || "").match(D) || [""]).length; c--;) a = oe.exec(t[c]) || [], f = m = a[1], g = (a[2] || "").split(".").sort(), f && (d = p.event.special[f] || {}, f = (o ? d.delegateType : d.bindType) || f, d = p.event.special[f] || {}, u = p.extend({
                        type: f,
                        origType: m,
                        data: i,
                        handler: n,
                        guid: n.guid,
                        selector: o,
                        needsContext: o && p.expr.match.needsContext.test(o),
                        namespace: g.join(".")
                    }, r), (h = l[f]) || (h = l[f] = [], h.delegateCount = 0, d.setup && !1 !== d.setup.call(e, i, g, s) || e.addEventListener && e.addEventListener(f, s)), d.add && (d.add.call(e, u), u.handler.guid || (u.handler.guid = n.guid)), o ? h.splice(h.delegateCount++, 0, u) : h.push(u), p.event.global[f] = !0)
            },
            remove: function(e, t, n, i, o) {
                var r, s, a, l, c, u, d, h, f, g, m, v = R.hasData(e) && R.get(e);
                if (v && (l = v.events)) {
                    for (c = (t = (t || "").match(D) || [""]).length; c--;)
                        if (a = oe.exec(t[c]) || [], f = m = a[1], g = (a[2] || "").split(".").sort(), f) {
                            for (d = p.event.special[f] || {}, h = l[f = (i ? d.delegateType : d.bindType) || f] || [], a = a[2] && new RegExp("(^|\\.)" + g.join("\\.(?:.*\\.|)") + "(\\.|$)"), s = r = h.length; r--;) u = h[r], !o && m !== u.origType || n && n.guid !== u.guid || a && !a.test(u.namespace) || i && i !== u.selector && ("**" !== i || !u.selector) || (h.splice(r, 1), u.selector && h.delegateCount--, d.remove && d.remove.call(e, u));
                            s && !h.length && (d.teardown && !1 !== d.teardown.call(e, g, v.handle) || p.removeEvent(e, f, v.handle), delete l[f])
                        } else
                            for (f in l) p.event.remove(e, f + t[c], n, i, !0);
                    p.isEmptyObject(l) && R.remove(e, "handle events")
                }
            },
            dispatch: function(e) {
                e = p.event.fix(e);
                var t, n, i, r, s, a = [],
                    l = o.call(arguments),
                    c = (R.get(this, "events") || {})[e.type] || [],
                    u = p.event.special[e.type] || {};
                if (l[0] = e, e.delegateTarget = this, !u.preDispatch || !1 !== u.preDispatch.call(this, e)) {
                    for (a = p.event.handlers.call(this, e, c), t = 0;
                        (r = a[t++]) && !e.isPropagationStopped();)
                        for (e.currentTarget = r.elem, n = 0;
                            (s = r.handlers[n++]) && !e.isImmediatePropagationStopped();) e.rnamespace && !e.rnamespace.test(s.namespace) || (e.handleObj = s, e.data = s.data, i = ((p.event.special[s.origType] || {}).handle || s.handler).apply(r.elem, l), void 0 !== i && !1 === (e.result = i) && (e.preventDefault(), e.stopPropagation()));
                    return u.postDispatch && u.postDispatch.call(this, e), e.result
                }
            },
            handlers: function(e, t) {
                var n, i, o, r, s = [],
                    a = t.delegateCount,
                    l = e.target;
                if (a && l.nodeType && ("click" !== e.type || isNaN(e.button) || e.button < 1))
                    for (; l !== this; l = l.parentNode || this)
                        if (1 === l.nodeType && (!0 !== l.disabled || "click" !== e.type)) {
                            for (i = [], n = 0; a > n; n++) r = t[n], o = r.selector + " ", void 0 === i[o] && (i[o] = r.needsContext ? p(o, this).index(l) > -1 : p.find(o, this, null, [l]).length), i[o] && i.push(r);
                            i.length && s.push({
                                elem: l,
                                handlers: i
                            })
                        }
                return a < t.length && s.push({
                    elem: this,
                    handlers: t.slice(a)
                }), s
            },
            props: "altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
            fixHooks: {},
            keyHooks: {
                props: "char charCode key keyCode".split(" "),
                filter: function(e, t) {
                    return null == e.which && (e.which = null != t.charCode ? t.charCode : t.keyCode), e
                }
            },
            mouseHooks: {
                props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
                filter: function(e, t) {
                    var n, o, r, s = t.button;
                    return null == e.pageX && null != t.clientX && (o = (n = e.target.ownerDocument || i).documentElement, r = n.body, e.pageX = t.clientX + (o && o.scrollLeft || r && r.scrollLeft || 0) - (o && o.clientLeft || r && r.clientLeft || 0), e.pageY = t.clientY + (o && o.scrollTop || r && r.scrollTop || 0) - (o && o.clientTop || r && r.clientTop || 0)), e.which || void 0 === s || (e.which = 1 & s ? 1 : 2 & s ? 3 : 4 & s ? 2 : 0), e
                }
            },
            fix: function(e) {
                if (e[p.expando]) return e;
                var t, n, o, r = e.type,
                    s = e,
                    a = this.fixHooks[r];
                for (a || (this.fixHooks[r] = a = ie.test(r) ? this.mouseHooks : ne.test(r) ? this.keyHooks : {}), o = a.props ? this.props.concat(a.props) : this.props, e = new p.Event(s), t = o.length; t--;) n = o[t], e[n] = s[n];
                return e.target || (e.target = i), 3 === e.target.nodeType && (e.target = e.target.parentNode), a.filter ? a.filter(e, s) : e
            },
            special: {
                load: {
                    noBubble: !0
                },
                focus: {
                    trigger: function() {
                        return this !== ae() && this.focus ? (this.focus(), !1) : void 0
                    },
                    delegateType: "focusin"
                },
                blur: {
                    trigger: function() {
                        return this === ae() && this.blur ? (this.blur(), !1) : void 0
                    },
                    delegateType: "focusout"
                },
                click: {
                    trigger: function() {
                        return "checkbox" === this.type && this.click && p.nodeName(this, "input") ? (this.click(), !1) : void 0
                    },
                    _default: function(e) {
                        return p.nodeName(e.target, "a")
                    }
                },
                beforeunload: {
                    postDispatch: function(e) {
                        void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                    }
                }
            }
        }, p.removeEvent = function(e, t, n) {
            e.removeEventListener && e.removeEventListener(t, n)
        }, p.Event = function(e, t) {
            return this instanceof p.Event ? (e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? re : se) : this.type = e, t && p.extend(this, t), this.timeStamp = e && e.timeStamp || p.now(), void(this[p.expando] = !0)) : new p.Event(e, t)
        }, p.Event.prototype = {
            constructor: p.Event,
            isDefaultPrevented: se,
            isPropagationStopped: se,
            isImmediatePropagationStopped: se,
            isSimulated: !1,
            preventDefault: function() {
                var e = this.originalEvent;
                this.isDefaultPrevented = re, e && !this.isSimulated && e.preventDefault()
            },
            stopPropagation: function() {
                var e = this.originalEvent;
                this.isPropagationStopped = re, e && !this.isSimulated && e.stopPropagation()
            },
            stopImmediatePropagation: function() {
                var e = this.originalEvent;
                this.isImmediatePropagationStopped = re, e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation()
            }
        }, p.each({
            mouseenter: "mouseover",
            mouseleave: "mouseout",
            pointerenter: "pointerover",
            pointerleave: "pointerout"
        }, function(e, t) {
            p.event.special[e] = {
                delegateType: t,
                bindType: t,
                handle: function(e) {
                    var n, i = e.relatedTarget,
                        o = e.handleObj;
                    return i && (i === this || p.contains(this, i)) || (e.type = o.origType, n = o.handler.apply(this, arguments), e.type = t), n
                }
            }
        }), p.fn.extend({
            on: function(e, t, n, i) {
                return le(this, e, t, n, i)
            },
            one: function(e, t, n, i) {
                return le(this, e, t, n, i, 1)
            },
            off: function(e, t, n) {
                var i, o;
                if (e && e.preventDefault && e.handleObj) return i = e.handleObj, p(e.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this;
                if ("object" == typeof e) {
                    for (o in e) this.off(o, t, e[o]);
                    return this
                }
                return !1 !== t && "function" != typeof t || (n = t, t = void 0), !1 === n && (n = se), this.each(function() {
                    p.event.remove(this, e, n, t)
                })
            }
        });
        var ce = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,
            ue = /<script|<style|<link/i,
            de = /checked\s*(?:[^=]|=\s*.checked.)/i,
            pe = /^true\/(.*)/,
            he = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

        function fe(e, t) {
            return p.nodeName(e, "table") && p.nodeName(11 !== t.nodeType ? t : t.firstChild, "tr") ? e.getElementsByTagName("tbody")[0] || e.appendChild(e.ownerDocument.createElement("tbody")) : e
        }

        function ge(e) {
            return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e
        }

        function me(e) {
            var t = pe.exec(e.type);
            return t ? e.type = t[1] : e.removeAttribute("type"), e
        }

        function ve(e, t) {
            var n, i, o, r, s, a, l, c;
            if (1 === t.nodeType) {
                if (R.hasData(e) && (r = R.access(e), s = R.set(t, r), c = r.events)) {
                    delete s.handle, s.events = {};
                    for (o in c)
                        for (n = 0, i = c[o].length; i > n; n++) p.event.add(t, o, c[o][n])
                }
                L.hasData(e) && (a = L.access(e), l = p.extend({}, a), L.set(t, l))
            }
        }

        function ye(e, t, n, i) {
            t = r.apply([], t);
            var o, s, a, l, c, u, h = 0,
                f = e.length,
                g = f - 1,
                m = t[0],
                v = p.isFunction(m);
            if (v || f > 1 && "string" == typeof m && !d.checkClone && de.test(m)) return e.each(function(o) {
                var r = e.eq(o);
                v && (t[0] = m.call(this, o, r.html())), ye(r, t, n, i)
            });
            if (f && (s = (o = te(t, e[0].ownerDocument, !1, e, i)).firstChild, 1 === o.childNodes.length && (o = s), s || i)) {
                for (l = (a = p.map(G(o, "script"), ge)).length; f > h; h++) c = o, h !== g && (c = p.clone(c, !0, !0), l && p.merge(a, G(c, "script"))), n.call(e[h], c, h);
                if (l)
                    for (u = a[a.length - 1].ownerDocument, p.map(a, me), h = 0; l > h; h++) c = a[h], Y.test(c.type || "") && !R.access(c, "globalEval") && p.contains(u, c) && (c.src ? p._evalUrl && p._evalUrl(c.src) : p.globalEval(c.textContent.replace(he, "")))
            }
            return e
        }

        function be(e, t, n) {
            for (var i, o = t ? p.filter(t, e) : e, r = 0; null != (i = o[r]); r++) n || 1 !== i.nodeType || p.cleanData(G(i)), i.parentNode && (n && p.contains(i.ownerDocument, i) && J(G(i, "script")), i.parentNode.removeChild(i));
            return e
        }
        p.extend({
            htmlPrefilter: function(e) {
                return e.replace(ce, "<$1></$2>")
            },
            clone: function(e, t, n) {
                var i, o, r, s, a, l, c, u = e.cloneNode(!0),
                    h = p.contains(e.ownerDocument, e);
                if (!(d.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || p.isXMLDoc(e)))
                    for (s = G(u), r = G(e), i = 0, o = r.length; o > i; i++) a = r[i], l = s[i], void 0, c = l.nodeName.toLowerCase(), "input" === c && z.test(a.type) ? l.checked = a.checked : "input" !== c && "textarea" !== c || (l.defaultValue = a.defaultValue);
                if (t)
                    if (n)
                        for (r = r || G(e), s = s || G(u), i = 0, o = r.length; o > i; i++) ve(r[i], s[i]);
                    else ve(e, u);
                return (s = G(u, "script")).length > 0 && J(s, !h && G(e, "script")), u
            },
            cleanData: function(e) {
                for (var t, n, i, o = p.event.special, r = 0; void 0 !== (n = e[r]); r++)
                    if (Q(n)) {
                        if (t = n[R.expando]) {
                            if (t.events)
                                for (i in t.events) o[i] ? p.event.remove(n, i) : p.removeEvent(n, i, t.handle);
                            n[R.expando] = void 0
                        }
                        n[L.expando] && (n[L.expando] = void 0)
                    }
            }
        }), p.fn.extend({
            domManip: ye,
            detach: function(e) {
                return be(this, e, !0)
            },
            remove: function(e) {
                return be(this, e)
            },
            text: function(e) {
                return I(this, function(e) {
                    return void 0 === e ? p.text(this) : this.empty().each(function() {
                        1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e)
                    })
                }, null, e, arguments.length)
            },
            append: function() {
                return ye(this, arguments, function(e) {
                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || fe(this, e).appendChild(e)
                })
            },
            prepend: function() {
                return ye(this, arguments, function(e) {
                    if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                        var t = fe(this, e);
                        t.insertBefore(e, t.firstChild)
                    }
                })
            },
            before: function() {
                return ye(this, arguments, function(e) {
                    this.parentNode && this.parentNode.insertBefore(e, this)
                })
            },
            after: function() {
                return ye(this, arguments, function(e) {
                    this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
                })
            },
            empty: function() {
                for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (p.cleanData(G(e, !1)), e.textContent = "");
                return this
            },
            clone: function(e, t) {
                return e = null != e && e, t = null == t ? e : t, this.map(function() {
                    return p.clone(this, e, t)
                })
            },
            html: function(e) {
                return I(this, function(e) {
                    var t = this[0] || {},
                        n = 0,
                        i = this.length;
                    if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
                    if ("string" == typeof e && !ue.test(e) && !X[(V.exec(e) || ["", ""])[1].toLowerCase()]) {
                        e = p.htmlPrefilter(e);
                        try {
                            for (; i > n; n++) t = this[n] || {}, 1 === t.nodeType && (p.cleanData(G(t, !1)), t.innerHTML = e);
                            t = 0
                        } catch (e) {}
                    }
                    t && this.empty().append(e)
                }, null, e, arguments.length)
            },
            replaceWith: function() {
                var e = [];
                return ye(this, arguments, function(t) {
                    var n = this.parentNode;
                    p.inArray(this, e) < 0 && (p.cleanData(G(this)), n && n.replaceChild(t, this))
                }, e)
            }
        }), p.each({
            appendTo: "append",
            prependTo: "prepend",
            insertBefore: "before",
            insertAfter: "after",
            replaceAll: "replaceWith"
        }, function(e, t) {
            p.fn[e] = function(e) {
                for (var n, i = [], o = p(e), r = o.length - 1, a = 0; r >= a; a++) n = a === r ? this : this.clone(!0), p(o[a])[t](n), s.apply(i, n.get());
                return this.pushStack(i)
            }
        });
        var xe, we = {
            HTML: "block",
            BODY: "block"
        };

        function Ce(e, t) {
            var n = p(t.createElement(e)).appendTo(t.body),
                i = p.css(n[0], "display");
            return n.detach(), i
        }

        function ke(e) {
            var t = i,
                n = we[e];
            return n || ("none" !== (n = Ce(e, t)) && n || ((t = (xe = (xe || p("<iframe frameborder='0' width='0' height='0'/>")).appendTo(t.documentElement))[0].contentDocument).write(), t.close(), n = Ce(e, t), xe.detach()), we[e] = n), n
        }
        var Te = /^margin/,
            je = new RegExp("^(" + F + ")(?!px)[a-z%]+$", "i"),
            Ee = function(t) {
                var n = t.ownerDocument.defaultView;
                return n && n.opener || (n = e), n.getComputedStyle(t)
            },
            Se = function(e, t, n, i) {
                var o, r, s = {};
                for (r in t) s[r] = e.style[r], e.style[r] = t[r];
                o = n.apply(e, i || []);
                for (r in t) e.style[r] = s[r];
                return o
            },
            Ae = i.documentElement;

        function Ne(e, t, n) {
            var i, o, r, s, a = e.style;
            return "" !== (s = (n = n || Ee(e)) ? n.getPropertyValue(t) || n[t] : void 0) && void 0 !== s || p.contains(e.ownerDocument, e) || (s = p.style(e, t)), n && !d.pixelMarginRight() && je.test(s) && Te.test(t) && (i = a.width, o = a.minWidth, r = a.maxWidth, a.minWidth = a.maxWidth = a.width = s, s = n.width, a.width = i, a.minWidth = o, a.maxWidth = r), void 0 !== s ? s + "" : s
        }

        function $e(e, t) {
            return {
                get: function() {
                    return e() ? void delete this.get : (this.get = t).apply(this, arguments)
                }
            }
        }! function() {
            var t, n, o, r, s = i.createElement("div"),
                a = i.createElement("div");
            if (a.style) {
                function l() {
                    a.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%", a.innerHTML = "", Ae.appendChild(s);
                    var i = e.getComputedStyle(a);
                    t = "1%" !== i.top, r = "2px" === i.marginLeft, n = "4px" === i.width, a.style.marginRight = "50%", o = "4px" === i.marginRight, Ae.removeChild(s)
                }
                a.style.backgroundClip = "content-box", a.cloneNode(!0).style.backgroundClip = "", d.clearCloneStyle = "content-box" === a.style.backgroundClip, s.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute", s.appendChild(a), p.extend(d, {
                    pixelPosition: function() {
                        return l(), t
                    },
                    boxSizingReliable: function() {
                        return null == n && l(), n
                    },
                    pixelMarginRight: function() {
                        return null == n && l(), o
                    },
                    reliableMarginLeft: function() {
                        return null == n && l(), r
                    },
                    reliableMarginRight: function() {
                        var t, n = a.appendChild(i.createElement("div"));
                        return n.style.cssText = a.style.cssText = "-webkit-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", n.style.marginRight = n.style.width = "0", a.style.width = "1px", Ae.appendChild(s), t = !parseFloat(e.getComputedStyle(n).marginRight), Ae.removeChild(s), a.removeChild(n), t
                    }
                })
            }
        }();
        var De = /^(none|table(?!-c[ea]).+)/,
            Oe = {
                position: "absolute",
                visibility: "hidden",
                display: "block"
            },
            Ie = {
                letterSpacing: "0",
                fontWeight: "400"
            },
            Qe = ["Webkit", "O", "Moz", "ms"],
            He = i.createElement("div").style;

        function Re(e) {
            if (e in He) return e;
            for (var t = e[0].toUpperCase() + e.slice(1), n = Qe.length; n--;)
                if (e = Qe[n] + t, e in He) return e
        }

        function Le(e, t, n) {
            var i = M.exec(t);
            return i ? Math.max(0, i[2] - (n || 0)) + (i[3] || "px") : t
        }

        function Pe(e, t, n, i, o) {
            for (var r = n === (i ? "border" : "content") ? 4 : "width" === t ? 1 : 0, s = 0; 4 > r; r += 2) "margin" === n && (s += p.css(e, n + W[r], !0, o)), i ? ("content" === n && (s -= p.css(e, "padding" + W[r], !0, o)), "margin" !== n && (s -= p.css(e, "border" + W[r] + "Width", !0, o))) : (s += p.css(e, "padding" + W[r], !0, o), "padding" !== n && (s += p.css(e, "border" + W[r] + "Width", !0, o)));
            return s
        }

        function _e(e, t, n) {
            var i = !0,
                o = "width" === t ? e.offsetWidth : e.offsetHeight,
                r = Ee(e),
                s = "border-box" === p.css(e, "boxSizing", !1, r);
            if (0 >= o || null == o) {
                if ((0 > (o = Ne(e, t, r)) || null == o) && (o = e.style[t]), je.test(o)) return o;
                i = s && (d.boxSizingReliable() || o === e.style[t]), o = parseFloat(o) || 0
            }
            return o + Pe(e, t, n || (s ? "border" : "content"), i, r) + "px"
        }

        function qe(e, t) {
            for (var n, i, o, r = [], s = 0, a = e.length; a > s; s++) i = e[s], i.style && (r[s] = R.get(i, "olddisplay"), n = i.style.display, t ? (r[s] || "none" !== n || (i.style.display = ""), "" === i.style.display && B(i) && (r[s] = R.access(i, "olddisplay", ke(i.nodeName)))) : (o = B(i), "none" === n && o || R.set(i, "olddisplay", o ? n : p.css(i, "display"))));
            for (s = 0; a > s; s++) i = e[s], i.style && (t && "none" !== i.style.display && "" !== i.style.display || (i.style.display = t ? r[s] || "" : "none"));
            return e
        }

        function Fe(e, t, n, i, o) {
            return new Fe.prototype.init(e, t, n, i, o)
        }
        p.extend({
            cssHooks: {
                opacity: {
                    get: function(e, t) {
                        if (t) {
                            var n = Ne(e, "opacity");
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
            style: function(e, t, n, i) {
                if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                    var o, r, s, a = p.camelCase(t),
                        l = e.style;
                    return t = p.cssProps[a] || (p.cssProps[a] = Re(a) || a), s = p.cssHooks[t] || p.cssHooks[a], void 0 === n ? s && "get" in s && void 0 !== (o = s.get(e, !1, i)) ? o : l[t] : ("string" === (r = typeof n) && (o = M.exec(n)) && o[1] && (n = U(e, t, o), r = "number"), void(null != n && n == n && ("number" === r && (n += o && o[3] || (p.cssNumber[a] ? "" : "px")), d.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (l[t] = "inherit"), s && "set" in s && void 0 === (n = s.set(e, n, i)) || (l[t] = n))))
                }
            },
            css: function(e, t, n, i) {
                var o, r, s, a = p.camelCase(t);
                return t = p.cssProps[a] || (p.cssProps[a] = Re(a) || a), (s = p.cssHooks[t] || p.cssHooks[a]) && "get" in s && (o = s.get(e, !0, n)), void 0 === o && (o = Ne(e, t, i)), "normal" === o && t in Ie && (o = Ie[t]), "" === n || n ? (r = parseFloat(o), !0 === n || isFinite(r) ? r || 0 : o) : o
            }
        }), p.each(["height", "width"], function(e, t) {
            p.cssHooks[t] = {
                get: function(e, n, i) {
                    return n ? De.test(p.css(e, "display")) && 0 === e.offsetWidth ? Se(e, Oe, function() {
                        return _e(e, t, i)
                    }) : _e(e, t, i) : void 0
                },
                set: function(e, n, i) {
                    var o, r = i && Ee(e),
                        s = i && Pe(e, t, i, "border-box" === p.css(e, "boxSizing", !1, r), r);
                    return s && (o = M.exec(n)) && "px" !== (o[3] || "px") && (e.style[t] = n, n = p.css(e, t)), Le(0, n, s)
                }
            }
        }), p.cssHooks.marginLeft = $e(d.reliableMarginLeft, function(e, t) {
            return t ? (parseFloat(Ne(e, "marginLeft")) || e.getBoundingClientRect().left - Se(e, {
                marginLeft: 0
            }, function() {
                return e.getBoundingClientRect().left
            })) + "px" : void 0
        }), p.cssHooks.marginRight = $e(d.reliableMarginRight, function(e, t) {
            return t ? Se(e, {
                display: "inline-block"
            }, Ne, [e, "marginRight"]) : void 0
        }), p.each({
            margin: "",
            padding: "",
            border: "Width"
        }, function(e, t) {
            p.cssHooks[e + t] = {
                expand: function(n) {
                    for (var i = 0, o = {}, r = "string" == typeof n ? n.split(" ") : [n]; 4 > i; i++) o[e + W[i] + t] = r[i] || r[i - 2] || r[0];
                    return o
                }
            }, Te.test(e) || (p.cssHooks[e + t].set = Le)
        }), p.fn.extend({
            css: function(e, t) {
                return I(this, function(e, t, n) {
                    var i, o, r = {},
                        s = 0;
                    if (p.isArray(t)) {
                        for (i = Ee(e), o = t.length; o > s; s++) r[t[s]] = p.css(e, t[s], !1, i);
                        return r
                    }
                    return void 0 !== n ? p.style(e, t, n) : p.css(e, t)
                }, e, t, arguments.length > 1)
            },
            show: function() {
                return qe(this, !0)
            },
            hide: function() {
                return qe(this)
            },
            toggle: function(e) {
                return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
                    B(this) ? p(this).show() : p(this).hide()
                })
            }
        }), p.Tween = Fe, Fe.prototype = {
            constructor: Fe,
            init: function(e, t, n, i, o, r) {
                this.elem = e, this.prop = n, this.easing = o || p.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = i, this.unit = r || (p.cssNumber[n] ? "" : "px")
            },
            cur: function() {
                var e = Fe.propHooks[this.prop];
                return e && e.get ? e.get(this) : Fe.propHooks._default.get(this)
            },
            run: function(e) {
                var t, n = Fe.propHooks[this.prop];
                return this.options.duration ? this.pos = t = p.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : Fe.propHooks._default.set(this), this
            }
        }, Fe.prototype.init.prototype = Fe.prototype, Fe.propHooks = {
            _default: {
                get: function(e) {
                    var t;
                    return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = p.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0
                },
                set: function(e) {
                    p.fx.step[e.prop] ? p.fx.step[e.prop](e) : 1 !== e.elem.nodeType || null == e.elem.style[p.cssProps[e.prop]] && !p.cssHooks[e.prop] ? e.elem[e.prop] = e.now : p.style(e.elem, e.prop, e.now + e.unit)
                }
            }
        }, Fe.propHooks.scrollTop = Fe.propHooks.scrollLeft = {
            set: function(e) {
                e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
            }
        }, p.easing = {
            linear: function(e) {
                return e
            },
            swing: function(e) {
                return .5 - Math.cos(e * Math.PI) / 2
            },
            _default: "swing"
        }, p.fx = Fe.prototype.init, p.fx.step = {};
        var Me, We, Be, Ue, ze, Ve = /^(?:toggle|show|hide)$/,
            Ye = /queueHooks$/;

        function Xe() {
            return e.setTimeout(function() {
                Me = void 0
            }), Me = p.now()
        }

        function Ge(e, t) {
            var n, i = 0,
                o = {
                    height: e
                };
            for (t = t ? 1 : 0; 4 > i; i += 2 - t) n = W[i], o["margin" + n] = o["padding" + n] = e;
            return t && (o.opacity = o.width = e), o
        }

        function Je(e, t, n) {
            for (var i, o = (Ke.tweeners[t] || []).concat(Ke.tweeners["*"]), r = 0, s = o.length; s > r; r++)
                if (i = o[r].call(n, t, e)) return i
        }

        function Ke(e, t, n) {
            var i, o, r = 0,
                s = Ke.prefilters.length,
                a = p.Deferred().always(function() {
                    delete l.elem
                }),
                l = function() {
                    if (o) return !1;
                    for (var t = Me || Xe(), n = Math.max(0, c.startTime + c.duration - t), i = 1 - (n / c.duration || 0), r = 0, s = c.tweens.length; s > r; r++) c.tweens[r].run(i);
                    return a.notifyWith(e, [c, i, n]), 1 > i && s ? n : (a.resolveWith(e, [c]), !1)
                },
                c = a.promise({
                    elem: e,
                    props: p.extend({}, t),
                    opts: p.extend(!0, {
                        specialEasing: {},
                        easing: p.easing._default
                    }, n),
                    originalProperties: t,
                    originalOptions: n,
                    startTime: Me || Xe(),
                    duration: n.duration,
                    tweens: [],
                    createTween: function(t, n) {
                        var i = p.Tween(e, c.opts, t, n, c.opts.specialEasing[t] || c.opts.easing);
                        return c.tweens.push(i), i
                    },
                    stop: function(t) {
                        var n = 0,
                            i = t ? c.tweens.length : 0;
                        if (o) return this;
                        for (o = !0; i > n; n++) c.tweens[n].run(1);
                        return t ? (a.notifyWith(e, [c, 1, 0]), a.resolveWith(e, [c, t])) : a.rejectWith(e, [c, t]), this
                    }
                }),
                u = c.props;
            for (function(e, t) {
                    var n, i, o, r, s;
                    for (n in e)
                        if (i = p.camelCase(n), o = t[i], r = e[n], p.isArray(r) && (o = r[1], r = e[n] = r[0]), n !== i && (e[i] = r, delete e[n]), s = p.cssHooks[i], s && "expand" in s) {
                            r = s.expand(r), delete e[i];
                            for (n in r) n in e || (e[n] = r[n], t[n] = o)
                        } else t[i] = o
                }(u, c.opts.specialEasing); s > r; r++)
                if (i = Ke.prefilters[r].call(c, e, u, c.opts)) return p.isFunction(i.stop) && (p._queueHooks(c.elem, c.opts.queue).stop = p.proxy(i.stop, i)), i;
            return p.map(u, Je, c), p.isFunction(c.opts.start) && c.opts.start.call(e, c), p.fx.timer(p.extend(l, {
                elem: e,
                anim: c,
                queue: c.opts.queue
            })), c.progress(c.opts.progress).done(c.opts.done, c.opts.complete).fail(c.opts.fail).always(c.opts.always)
        }
        p.Animation = p.extend(Ke, {
            tweeners: {
                "*": [function(e, t) {
                    var n = this.createTween(e, t);
                    return U(n.elem, e, M.exec(t), n), n
                }]
            },
            tweener: function(e, t) {
                p.isFunction(e) ? (t = e, e = ["*"]) : e = e.match(D);
                for (var n, i = 0, o = e.length; o > i; i++) n = e[i], Ke.tweeners[n] = Ke.tweeners[n] || [], Ke.tweeners[n].unshift(t)
            },
            prefilters: [function(e, t, n) {
                var i, o, r, s, a, l, c, u = this,
                    d = {},
                    h = e.style,
                    f = e.nodeType && B(e),
                    g = R.get(e, "fxshow");
                n.queue || (null == (a = p._queueHooks(e, "fx")).unqueued && (a.unqueued = 0, l = a.empty.fire, a.empty.fire = function() {
                    a.unqueued || l()
                }), a.unqueued++, u.always(function() {
                    u.always(function() {
                        a.unqueued--, p.queue(e, "fx").length || a.empty.fire()
                    })
                })), 1 === e.nodeType && ("height" in t || "width" in t) && (n.overflow = [h.overflow, h.overflowX, h.overflowY], "inline" === ("none" === (c = p.css(e, "display")) ? R.get(e, "olddisplay") || ke(e.nodeName) : c) && "none" === p.css(e, "float") && (h.display = "inline-block")), n.overflow && (h.overflow = "hidden", u.always(function() {
                    h.overflow = n.overflow[0], h.overflowX = n.overflow[1], h.overflowY = n.overflow[2]
                }));
                for (i in t)
                    if (o = t[i], Ve.exec(o)) {
                        if (delete t[i], r = r || "toggle" === o, o === (f ? "hide" : "show")) {
                            if ("show" !== o || !g || void 0 === g[i]) continue;
                            f = !0
                        }
                        d[i] = g && g[i] || p.style(e, i)
                    } else c = void 0;
                if (p.isEmptyObject(d)) "inline" === ("none" === c ? ke(e.nodeName) : c) && (h.display = c);
                else {
                    g ? "hidden" in g && (f = g.hidden) : g = R.access(e, "fxshow", {}), r && (g.hidden = !f), f ? p(e).show() : u.done(function() {
                        p(e).hide()
                    }), u.done(function() {
                        var t;
                        R.remove(e, "fxshow");
                        for (t in d) p.style(e, t, d[t])
                    });
                    for (i in d) s = Je(f ? g[i] : 0, i, u), i in g || (g[i] = s.start, f && (s.end = s.start, s.start = "width" === i || "height" === i ? 1 : 0))
                }
            }],
            prefilter: function(e, t) {
                t ? Ke.prefilters.unshift(e) : Ke.prefilters.push(e)
            }
        }), p.speed = function(e, t, n) {
            var i = e && "object" == typeof e ? p.extend({}, e) : {
                complete: n || !n && t || p.isFunction(e) && e,
                duration: e,
                easing: n && t || t && !p.isFunction(t) && t
            };
            return i.duration = p.fx.off ? 0 : "number" == typeof i.duration ? i.duration : i.duration in p.fx.speeds ? p.fx.speeds[i.duration] : p.fx.speeds._default, null != i.queue && !0 !== i.queue || (i.queue = "fx"), i.old = i.complete, i.complete = function() {
                p.isFunction(i.old) && i.old.call(this), i.queue && p.dequeue(this, i.queue)
            }, i
        }, p.fn.extend({
            fadeTo: function(e, t, n, i) {
                return this.filter(B).css("opacity", 0).show().end().animate({
                    opacity: t
                }, e, n, i)
            },
            animate: function(e, t, n, i) {
                var o = p.isEmptyObject(e),
                    r = p.speed(t, n, i),
                    s = function() {
                        var t = Ke(this, p.extend({}, e), r);
                        (o || R.get(this, "finish")) && t.stop(!0)
                    };
                return s.finish = s, o || !1 === r.queue ? this.each(s) : this.queue(r.queue, s)
            },
            stop: function(e, t, n) {
                var i = function(e) {
                    var t = e.stop;
                    delete e.stop, t(n)
                };
                return "string" != typeof e && (n = t, t = e, e = void 0), t && !1 !== e && this.queue(e || "fx", []), this.each(function() {
                    var t = !0,
                        o = null != e && e + "queueHooks",
                        r = p.timers,
                        s = R.get(this);
                    if (o) s[o] && s[o].stop && i(s[o]);
                    else
                        for (o in s) s[o] && s[o].stop && Ye.test(o) && i(s[o]);
                    for (o = r.length; o--;) r[o].elem !== this || null != e && r[o].queue !== e || (r[o].anim.stop(n), t = !1, r.splice(o, 1));
                    !t && n || p.dequeue(this, e)
                })
            },
            finish: function(e) {
                return !1 !== e && (e = e || "fx"), this.each(function() {
                    var t, n = R.get(this),
                        i = n[e + "queue"],
                        o = n[e + "queueHooks"],
                        r = p.timers,
                        s = i ? i.length : 0;
                    for (n.finish = !0, p.queue(this, e, []), o && o.stop && o.stop.call(this, !0), t = r.length; t--;) r[t].elem === this && r[t].queue === e && (r[t].anim.stop(!0), r.splice(t, 1));
                    for (t = 0; s > t; t++) i[t] && i[t].finish && i[t].finish.call(this);
                    delete n.finish
                })
            }
        }), p.each(["toggle", "show", "hide"], function(e, t) {
            var n = p.fn[t];
            p.fn[t] = function(e, i, o) {
                return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(Ge(t, !0), e, i, o)
            }
        }), p.each({
            slideDown: Ge("show"),
            slideUp: Ge("hide"),
            slideToggle: Ge("toggle"),
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
            p.fn[e] = function(e, n, i) {
                return this.animate(t, e, n, i)
            }
        }), p.timers = [], p.fx.tick = function() {
            var e, t = 0,
                n = p.timers;
            for (Me = p.now(); t < n.length; t++) e = n[t], e() || n[t] !== e || n.splice(t--, 1);
            n.length || p.fx.stop(), Me = void 0
        }, p.fx.timer = function(e) {
            p.timers.push(e), e() ? p.fx.start() : p.timers.pop()
        }, p.fx.interval = 13, p.fx.start = function() {
            We || (We = e.setInterval(p.fx.tick, p.fx.interval))
        }, p.fx.stop = function() {
            e.clearInterval(We), We = null
        }, p.fx.speeds = {
            slow: 600,
            fast: 200,
            _default: 400
        }, p.fn.delay = function(t, n) {
            return t = p.fx ? p.fx.speeds[t] || t : t, n = n || "fx", this.queue(n, function(n, i) {
                var o = e.setTimeout(n, t);
                i.stop = function() {
                    e.clearTimeout(o)
                }
            })
        }, Be = i.createElement("input"), Ue = i.createElement("select"), ze = Ue.appendChild(i.createElement("option")), Be.type = "checkbox", d.checkOn = "" !== Be.value, d.optSelected = ze.selected, Ue.disabled = !0, d.optDisabled = !ze.disabled, (Be = i.createElement("input")).value = "t", Be.type = "radio", d.radioValue = "t" === Be.value;
        var Ze, et = p.expr.attrHandle;
        p.fn.extend({
            attr: function(e, t) {
                return I(this, p.attr, e, t, arguments.length > 1)
            },
            removeAttr: function(e) {
                return this.each(function() {
                    p.removeAttr(this, e)
                })
            }
        }), p.extend({
            attr: function(e, t, n) {
                var i, o, r = e.nodeType;
                if (3 !== r && 8 !== r && 2 !== r) return void 0 === e.getAttribute ? p.prop(e, t, n) : (1 === r && p.isXMLDoc(e) || (t = t.toLowerCase(), o = p.attrHooks[t] || (p.expr.match.bool.test(t) ? Ze : void 0)), void 0 !== n ? null === n ? void p.removeAttr(e, t) : o && "set" in o && void 0 !== (i = o.set(e, n, t)) ? i : (e.setAttribute(t, n + ""), n) : o && "get" in o && null !== (i = o.get(e, t)) ? i : (i = p.find.attr(e, t), null == i ? void 0 : i))
            },
            attrHooks: {
                type: {
                    set: function(e, t) {
                        if (!d.radioValue && "radio" === t && p.nodeName(e, "input")) {
                            var n = e.value;
                            return e.setAttribute("type", t), n && (e.value = n), t
                        }
                    }
                }
            },
            removeAttr: function(e, t) {
                var n, i, o = 0,
                    r = t && t.match(D);
                if (r && 1 === e.nodeType)
                    for (; n = r[o++];) i = p.propFix[n] || n, p.expr.match.bool.test(n) && (e[i] = !1), e.removeAttribute(n)
            }
        }), Ze = {
            set: function(e, t, n) {
                return !1 === t ? p.removeAttr(e, n) : e.setAttribute(n, n), n
            }
        }, p.each(p.expr.match.bool.source.match(/\w+/g), function(e, t) {
            var n = et[t] || p.find.attr;
            et[t] = function(e, t, i) {
                var o, r;
                return i || (r = et[t], et[t] = o, o = null != n(e, t, i) ? t.toLowerCase() : null, et[t] = r), o
            }
        });
        var tt = /^(?:input|select|textarea|button)$/i,
            nt = /^(?:a|area)$/i;
        p.fn.extend({
            prop: function(e, t) {
                return I(this, p.prop, e, t, arguments.length > 1)
            },
            removeProp: function(e) {
                return this.each(function() {
                    delete this[p.propFix[e] || e]
                })
            }
        }), p.extend({
            prop: function(e, t, n) {
                var i, o, r = e.nodeType;
                if (3 !== r && 8 !== r && 2 !== r) return 1 === r && p.isXMLDoc(e) || (t = p.propFix[t] || t, o = p.propHooks[t]), void 0 !== n ? o && "set" in o && void 0 !== (i = o.set(e, n, t)) ? i : e[t] = n : o && "get" in o && null !== (i = o.get(e, t)) ? i : e[t]
            },
            propHooks: {
                tabIndex: {
                    get: function(e) {
                        var t = p.find.attr(e, "tabindex");
                        return t ? parseInt(t, 10) : tt.test(e.nodeName) || nt.test(e.nodeName) && e.href ? 0 : -1
                    }
                }
            },
            propFix: {
                for: "htmlFor",
                class: "className"
            }
        }), d.optSelected || (p.propHooks.selected = {
            get: function(e) {
                var t = e.parentNode;
                return t && t.parentNode && t.parentNode.selectedIndex, null
            },
            set: function(e) {
                var t = e.parentNode;
                t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex)
            }
        }), p.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
            p.propFix[this.toLowerCase()] = this
        });
        var it = /[\t\r\n\f]/g;

        function ot(e) {
            return e.getAttribute && e.getAttribute("class") || ""
        }
        p.fn.extend({
            addClass: function(e) {
                var t, n, i, o, r, s, a, l = 0;
                if (p.isFunction(e)) return this.each(function(t) {
                    p(this).addClass(e.call(this, t, ot(this)))
                });
                if ("string" == typeof e && e)
                    for (t = e.match(D) || []; n = this[l++];)
                        if (o = ot(n), i = 1 === n.nodeType && (" " + o + " ").replace(it, " ")) {
                            for (s = 0; r = t[s++];) i.indexOf(" " + r + " ") < 0 && (i += r + " ");
                            o !== (a = p.trim(i)) && n.setAttribute("class", a)
                        }
                return this
            },
            removeClass: function(e) {
                var t, n, i, o, r, s, a, l = 0;
                if (p.isFunction(e)) return this.each(function(t) {
                    p(this).removeClass(e.call(this, t, ot(this)))
                });
                if (!arguments.length) return this.attr("class", "");
                if ("string" == typeof e && e)
                    for (t = e.match(D) || []; n = this[l++];)
                        if (o = ot(n), i = 1 === n.nodeType && (" " + o + " ").replace(it, " ")) {
                            for (s = 0; r = t[s++];)
                                for (; i.indexOf(" " + r + " ") > -1;) i = i.replace(" " + r + " ", " ");
                            o !== (a = p.trim(i)) && n.setAttribute("class", a)
                        }
                return this
            },
            toggleClass: function(e, t) {
                var n = typeof e;
                return "boolean" == typeof t && "string" === n ? t ? this.addClass(e) : this.removeClass(e) : p.isFunction(e) ? this.each(function(n) {
                    p(this).toggleClass(e.call(this, n, ot(this), t), t)
                }) : this.each(function() {
                    var t, i, o, r;
                    if ("string" === n)
                        for (i = 0, o = p(this), r = e.match(D) || []; t = r[i++];) o.hasClass(t) ? o.removeClass(t) : o.addClass(t);
                    else void 0 !== e && "boolean" !== n || (t = ot(this), t && R.set(this, "__className__", t), this.setAttribute && this.setAttribute("class", t || !1 === e ? "" : R.get(this, "__className__") || ""))
                })
            },
            hasClass: function(e) {
                var t, n, i = 0;
                for (t = " " + e + " "; n = this[i++];)
                    if (1 === n.nodeType && (" " + ot(n) + " ").replace(it, " ").indexOf(t) > -1) return !0;
                return !1
            }
        });
        var rt = /\r/g,
            st = /[\x20\t\r\n\f]+/g;
        p.fn.extend({
            val: function(e) {
                var t, n, i, o = this[0];
                return arguments.length ? (i = p.isFunction(e), this.each(function(n) {
                    var o;
                    1 === this.nodeType && (null == (o = i ? e.call(this, n, p(this).val()) : e) ? o = "" : "number" == typeof o ? o += "" : p.isArray(o) && (o = p.map(o, function(e) {
                        return null == e ? "" : e + ""
                    })), (t = p.valHooks[this.type] || p.valHooks[this.nodeName.toLowerCase()]) && "set" in t && void 0 !== t.set(this, o, "value") || (this.value = o))
                })) : o ? (t = p.valHooks[o.type] || p.valHooks[o.nodeName.toLowerCase()]) && "get" in t && void 0 !== (n = t.get(o, "value")) ? n : "string" == typeof(n = o.value) ? n.replace(rt, "") : null == n ? "" : n : void 0
            }
        }), p.extend({
            valHooks: {
                option: {
                    get: function(e) {
                        var t = p.find.attr(e, "value");
                        return null != t ? t : p.trim(p.text(e)).replace(st, " ")
                    }
                },
                select: {
                    get: function(e) {
                        for (var t, n, i = e.options, o = e.selectedIndex, r = "select-one" === e.type || 0 > o, s = r ? null : [], a = r ? o + 1 : i.length, l = 0 > o ? a : r ? o : 0; a > l; l++)
                            if (n = i[l], (n.selected || l === o) && (d.optDisabled ? !n.disabled : null === n.getAttribute("disabled")) && (!n.parentNode.disabled || !p.nodeName(n.parentNode, "optgroup"))) {
                                if (t = p(n).val(), r) return t;
                                s.push(t)
                            }
                        return s
                    },
                    set: function(e, t) {
                        for (var n, i, o = e.options, r = p.makeArray(t), s = o.length; s--;) i = o[s], (i.selected = p.inArray(p.valHooks.option.get(i), r) > -1) && (n = !0);
                        return n || (e.selectedIndex = -1), r
                    }
                }
            }
        }), p.each(["radio", "checkbox"], function() {
            p.valHooks[this] = {
                set: function(e, t) {
                    return p.isArray(t) ? e.checked = p.inArray(p(e).val(), t) > -1 : void 0
                }
            }, d.checkOn || (p.valHooks[this].get = function(e) {
                return null === e.getAttribute("value") ? "on" : e.value
            })
        });
        var at = /^(?:focusinfocus|focusoutblur)$/;
        p.extend(p.event, {
            trigger: function(t, n, o, r) {
                var s, a, l, c, d, h, f, g = [o || i],
                    m = u.call(t, "type") ? t.type : t,
                    v = u.call(t, "namespace") ? t.namespace.split(".") : [];
                if (a = l = o = o || i, 3 !== o.nodeType && 8 !== o.nodeType && !at.test(m + p.event.triggered) && (m.indexOf(".") > -1 && (m = (v = m.split(".")).shift(), v.sort()), d = m.indexOf(":") < 0 && "on" + m, (t = t[p.expando] ? t : new p.Event(m, "object" == typeof t && t)).isTrigger = r ? 2 : 3, t.namespace = v.join("."), t.rnamespace = t.namespace ? new RegExp("(^|\\.)" + v.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = void 0, t.target || (t.target = o), n = null == n ? [t] : p.makeArray(n, [t]), f = p.event.special[m] || {}, r || !f.trigger || !1 !== f.trigger.apply(o, n))) {
                    if (!r && !f.noBubble && !p.isWindow(o)) {
                        for (c = f.delegateType || m, at.test(c + m) || (a = a.parentNode); a; a = a.parentNode) g.push(a), l = a;
                        l === (o.ownerDocument || i) && g.push(l.defaultView || l.parentWindow || e)
                    }
                    for (s = 0;
                        (a = g[s++]) && !t.isPropagationStopped();) t.type = s > 1 ? c : f.bindType || m, h = (R.get(a, "events") || {})[t.type] && R.get(a, "handle"), h && h.apply(a, n), h = d && a[d], h && h.apply && Q(a) && (t.result = h.apply(a, n), !1 === t.result && t.preventDefault());
                    return t.type = m, r || t.isDefaultPrevented() || f._default && !1 !== f._default.apply(g.pop(), n) || !Q(o) || d && p.isFunction(o[m]) && !p.isWindow(o) && ((l = o[d]) && (o[d] = null), p.event.triggered = m, o[m](), p.event.triggered = void 0, l && (o[d] = l)), t.result
                }
            },
            simulate: function(e, t, n) {
                var i = p.extend(new p.Event, n, {
                    type: e,
                    isSimulated: !0
                });
                p.event.trigger(i, null, t)
            }
        }), p.fn.extend({
            trigger: function(e, t) {
                return this.each(function() {
                    p.event.trigger(e, t, this)
                })
            },
            triggerHandler: function(e, t) {
                var n = this[0];
                return n ? p.event.trigger(e, t, n, !0) : void 0
            }
        }), p.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(e, t) {
            p.fn[t] = function(e, n) {
                return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
            }
        }), p.fn.extend({
            hover: function(e, t) {
                return this.mouseenter(e).mouseleave(t || e)
            }
        }), d.focusin = "onfocusin" in e, d.focusin || p.each({
            focus: "focusin",
            blur: "focusout"
        }, function(e, t) {
            var n = function(e) {
                p.event.simulate(t, e.target, p.event.fix(e))
            };
            p.event.special[t] = {
                setup: function() {
                    var i = this.ownerDocument || this,
                        o = R.access(i, t);
                    o || i.addEventListener(e, n, !0), R.access(i, t, (o || 0) + 1)
                },
                teardown: function() {
                    var i = this.ownerDocument || this,
                        o = R.access(i, t) - 1;
                    o ? R.access(i, t, o) : (i.removeEventListener(e, n, !0), R.remove(i, t))
                }
            }
        });
        var lt = e.location,
            ct = p.now(),
            ut = /\?/;
        p.parseJSON = function(e) {
            return JSON.parse(e + "")
        }, p.parseXML = function(t) {
            var n;
            if (!t || "string" != typeof t) return null;
            try {
                n = (new e.DOMParser).parseFromString(t, "text/xml")
            } catch (e) {
                n = void 0
            }
            return n && !n.getElementsByTagName("parsererror").length || p.error("Invalid XML: " + t), n
        };
        var dt = /#.*$/,
            pt = /([?&])_=[^&]*/,
            ht = /^(.*?):[ \t]*([^\r\n]*)$/gm,
            ft = /^(?:GET|HEAD)$/,
            gt = /^\/\//,
            mt = {},
            vt = {},
            yt = "*/".concat("*"),
            bt = i.createElement("a");

        function xt(e) {
            return function(t, n) {
                "string" != typeof t && (n = t, t = "*");
                var i, o = 0,
                    r = t.toLowerCase().match(D) || [];
                if (p.isFunction(n))
                    for (; i = r[o++];) "+" === i[0] ? (i = i.slice(1) || "*", (e[i] = e[i] || []).unshift(n)) : (e[i] = e[i] || []).push(n)
            }
        }

        function wt(e, t, n, i) {
            var o = {},
                r = e === vt;

            function s(a) {
                var l;
                return o[a] = !0, p.each(e[a] || [], function(e, a) {
                    var c = a(t, n, i);
                    return "string" != typeof c || r || o[c] ? r ? !(l = c) : void 0 : (t.dataTypes.unshift(c), s(c), !1)
                }), l
            }
            return s(t.dataTypes[0]) || !o["*"] && s("*")
        }

        function Ct(e, t) {
            var n, i, o = p.ajaxSettings.flatOptions || {};
            for (n in t) void 0 !== t[n] && ((o[n] ? e : i || (i = {}))[n] = t[n]);
            return i && p.extend(!0, e, i), e
        }
        bt.href = lt.href, p.extend({
            active: 0,
            lastModified: {},
            etag: {},
            ajaxSettings: {
                url: lt.href,
                type: "GET",
                isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(lt.protocol),
                global: !0,
                processData: !0,
                async: !0,
                contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                accepts: {
                    "*": yt,
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
                    "text json": p.parseJSON,
                    "text xml": p.parseXML
                },
                flatOptions: {
                    url: !0,
                    context: !0
                }
            },
            ajaxSetup: function(e, t) {
                return t ? Ct(Ct(e, p.ajaxSettings), t) : Ct(p.ajaxSettings, e)
            },
            ajaxPrefilter: xt(mt),
            ajaxTransport: xt(vt),
            ajax: function(t, n) {
                "object" == typeof t && (n = t, t = void 0), n = n || {};
                var o, r, s, a, l, c, u, d, h = p.ajaxSetup({}, n),
                    f = h.context || h,
                    g = h.context && (f.nodeType || f.jquery) ? p(f) : p.event,
                    m = p.Deferred(),
                    v = p.Callbacks("once memory"),
                    y = h.statusCode || {},
                    b = {},
                    x = {},
                    w = 0,
                    C = "canceled",
                    k = {
                        readyState: 0,
                        getResponseHeader: function(e) {
                            var t;
                            if (2 === w) {
                                if (!a)
                                    for (a = {}; t = ht.exec(s);) a[t[1].toLowerCase()] = t[2];
                                t = a[e.toLowerCase()]
                            }
                            return null == t ? null : t
                        },
                        getAllResponseHeaders: function() {
                            return 2 === w ? s : null
                        },
                        setRequestHeader: function(e, t) {
                            var n = e.toLowerCase();
                            return w || (e = x[n] = x[n] || e, b[e] = t), this
                        },
                        overrideMimeType: function(e) {
                            return w || (h.mimeType = e), this
                        },
                        statusCode: function(e) {
                            var t;
                            if (e)
                                if (2 > w)
                                    for (t in e) y[t] = [y[t], e[t]];
                                else k.always(e[k.status]);
                            return this
                        },
                        abort: function(e) {
                            var t = e || C;
                            return o && o.abort(t), T(0, t), this
                        }
                    };
                if (m.promise(k).complete = v.add, k.success = k.done, k.error = k.fail, h.url = ((t || h.url || lt.href) + "").replace(dt, "").replace(gt, lt.protocol + "//"), h.type = n.method || n.type || h.method || h.type, h.dataTypes = p.trim(h.dataType || "*").toLowerCase().match(D) || [""], null == h.crossDomain) {
                    c = i.createElement("a");
                    try {
                        c.href = h.url, c.href = c.href, h.crossDomain = bt.protocol + "//" + bt.host != c.protocol + "//" + c.host
                    } catch (e) {
                        h.crossDomain = !0
                    }
                }
                if (h.data && h.processData && "string" != typeof h.data && (h.data = p.param(h.data, h.traditional)), wt(mt, h, n, k), 2 === w) return k;
                (u = p.event && h.global) && 0 == p.active++ && p.event.trigger("ajaxStart"), h.type = h.type.toUpperCase(), h.hasContent = !ft.test(h.type), r = h.url, h.hasContent || (h.data && (r = h.url += (ut.test(r) ? "&" : "?") + h.data, delete h.data), !1 === h.cache && (h.url = pt.test(r) ? r.replace(pt, "$1_=" + ct++) : r + (ut.test(r) ? "&" : "?") + "_=" + ct++)), h.ifModified && (p.lastModified[r] && k.setRequestHeader("If-Modified-Since", p.lastModified[r]), p.etag[r] && k.setRequestHeader("If-None-Match", p.etag[r])), (h.data && h.hasContent && !1 !== h.contentType || n.contentType) && k.setRequestHeader("Content-Type", h.contentType), k.setRequestHeader("Accept", h.dataTypes[0] && h.accepts[h.dataTypes[0]] ? h.accepts[h.dataTypes[0]] + ("*" !== h.dataTypes[0] ? ", " + yt + "; q=0.01" : "") : h.accepts["*"]);
                for (d in h.headers) k.setRequestHeader(d, h.headers[d]);
                if (h.beforeSend && (!1 === h.beforeSend.call(f, k, h) || 2 === w)) return k.abort();
                C = "abort";
                for (d in {
                        success: 1,
                        error: 1,
                        complete: 1
                    }) k[d](h[d]);
                if (o = wt(vt, h, n, k)) {
                    if (k.readyState = 1, u && g.trigger("ajaxSend", [k, h]), 2 === w) return k;
                    h.async && h.timeout > 0 && (l = e.setTimeout(function() {
                        k.abort("timeout")
                    }, h.timeout));
                    try {
                        w = 1, o.send(b, T)
                    } catch (e) {
                        if (!(2 > w)) throw e;
                        T(-1, e)
                    }
                } else T(-1, "No Transport");

                function T(t, n, i, a) {
                    var c, d, b, x, C, T = n;
                    2 !== w && (w = 2, l && e.clearTimeout(l), o = void 0, s = a || "", k.readyState = t > 0 ? 4 : 0, c = t >= 200 && 300 > t || 304 === t, i && (x = function(e, t, n) {
                        for (var i, o, r, s, a = e.contents, l = e.dataTypes;
                            "*" === l[0];) l.shift(), void 0 === i && (i = e.mimeType || t.getResponseHeader("Content-Type"));
                        if (i)
                            for (o in a)
                                if (a[o] && a[o].test(i)) {
                                    l.unshift(o);
                                    break
                                }
                        if (l[0] in n) r = l[0];
                        else {
                            for (o in n) {
                                if (!l[0] || e.converters[o + " " + l[0]]) {
                                    r = o;
                                    break
                                }
                                s || (s = o)
                            }
                            r = r || s
                        }
                        return r ? (r !== l[0] && l.unshift(r), n[r]) : void 0
                    }(h, k, i)), x = function(e, t, n, i) {
                        var o, r, s, a, l, c = {},
                            u = e.dataTypes.slice();
                        if (u[1])
                            for (s in e.converters) c[s.toLowerCase()] = e.converters[s];
                        for (r = u.shift(); r;)
                            if (e.responseFields[r] && (n[e.responseFields[r]] = t), !l && i && e.dataFilter && (t = e.dataFilter(t, e.dataType)), l = r, r = u.shift())
                                if ("*" === r) r = l;
                                else if ("*" !== l && l !== r) {
                            if (!(s = c[l + " " + r] || c["* " + r]))
                                for (o in c)
                                    if (a = o.split(" "), a[1] === r && (s = c[l + " " + a[0]] || c["* " + a[0]])) {
                                        !0 === s ? s = c[o] : !0 !== c[o] && (r = a[0], u.unshift(a[1]));
                                        break
                                    }
                            if (!0 !== s)
                                if (s && e.throws) t = s(t);
                                else try {
                                    t = s(t)
                                } catch (e) {
                                    return {
                                        state: "parsererror",
                                        error: s ? e : "No conversion from " + l + " to " + r
                                    }
                                }
                        }
                        return {
                            state: "success",
                            data: t
                        }
                    }(h, x, k, c), c ? (h.ifModified && ((C = k.getResponseHeader("Last-Modified")) && (p.lastModified[r] = C), (C = k.getResponseHeader("etag")) && (p.etag[r] = C)), 204 === t || "HEAD" === h.type ? T = "nocontent" : 304 === t ? T = "notmodified" : (T = x.state, d = x.data, c = !(b = x.error))) : (b = T, !t && T || (T = "error", 0 > t && (t = 0))), k.status = t, k.statusText = (n || T) + "", c ? m.resolveWith(f, [d, T, k]) : m.rejectWith(f, [k, T, b]), k.statusCode(y), y = void 0, u && g.trigger(c ? "ajaxSuccess" : "ajaxError", [k, h, c ? d : b]), v.fireWith(f, [k, T]), u && (g.trigger("ajaxComplete", [k, h]), --p.active || p.event.trigger("ajaxStop")))
                }
                return k
            },
            getJSON: function(e, t, n) {
                return p.get(e, t, n, "json")
            },
            getScript: function(e, t) {
                return p.get(e, void 0, t, "script")
            }
        }), p.each(["get", "post"], function(e, t) {
            p[t] = function(e, n, i, o) {
                return p.isFunction(n) && (o = o || i, i = n, n = void 0), p.ajax(p.extend({
                    url: e,
                    type: t,
                    dataType: o,
                    data: n,
                    success: i
                }, p.isPlainObject(e) && e))
            }
        }), p._evalUrl = function(e) {
            return p.ajax({
                url: e,
                type: "GET",
                dataType: "script",
                async: !1,
                global: !1,
                throws: !0
            })
        }, p.fn.extend({
            wrapAll: function(e) {
                var t;
                return p.isFunction(e) ? this.each(function(t) {
                    p(this).wrapAll(e.call(this, t))
                }) : (this[0] && (t = p(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function() {
                    for (var e = this; e.firstElementChild;) e = e.firstElementChild;
                    return e
                }).append(this)), this)
            },
            wrapInner: function(e) {
                return p.isFunction(e) ? this.each(function(t) {
                    p(this).wrapInner(e.call(this, t))
                }) : this.each(function() {
                    var t = p(this),
                        n = t.contents();
                    n.length ? n.wrapAll(e) : t.append(e)
                })
            },
            wrap: function(e) {
                var t = p.isFunction(e);
                return this.each(function(n) {
                    p(this).wrapAll(t ? e.call(this, n) : e)
                })
            },
            unwrap: function() {
                return this.parent().each(function() {
                    p.nodeName(this, "body") || p(this).replaceWith(this.childNodes)
                }).end()
            }
        }), p.expr.filters.hidden = function(e) {
            return !p.expr.filters.visible(e)
        }, p.expr.filters.visible = function(e) {
            return e.offsetWidth > 0 || e.offsetHeight > 0 || e.getClientRects().length > 0
        };
        var kt = /%20/g,
            Tt = /\[\]$/,
            jt = /\r?\n/g,
            Et = /^(?:submit|button|image|reset|file)$/i,
            St = /^(?:input|select|textarea|keygen)/i;

        function At(e, t, n, i) {
            var o;
            if (p.isArray(t)) p.each(t, function(t, o) {
                n || Tt.test(e) ? i(e, o) : At(e + "[" + ("object" == typeof o && null != o ? t : "") + "]", o, n, i)
            });
            else if (n || "object" !== p.type(t)) i(e, t);
            else
                for (o in t) At(e + "[" + o + "]", t[o], n, i)
        }
        p.param = function(e, t) {
            var n, i = [],
                o = function(e, t) {
                    t = p.isFunction(t) ? t() : null == t ? "" : t, i[i.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
                };
            if (void 0 === t && (t = p.ajaxSettings && p.ajaxSettings.traditional), p.isArray(e) || e.jquery && !p.isPlainObject(e)) p.each(e, function() {
                o(this.name, this.value)
            });
            else
                for (n in e) At(n, e[n], t, o);
            return i.join("&").replace(kt, "+")
        }, p.fn.extend({
            serialize: function() {
                return p.param(this.serializeArray())
            },
            serializeArray: function() {
                return this.map(function() {
                    var e = p.prop(this, "elements");
                    return e ? p.makeArray(e) : this
                }).filter(function() {
                    var e = this.type;
                    return this.name && !p(this).is(":disabled") && St.test(this.nodeName) && !Et.test(e) && (this.checked || !z.test(e))
                }).map(function(e, t) {
                    var n = p(this).val();
                    return null == n ? null : p.isArray(n) ? p.map(n, function(e) {
                        return {
                            name: t.name,
                            value: e.replace(jt, "\r\n")
                        }
                    }) : {
                        name: t.name,
                        value: n.replace(jt, "\r\n")
                    }
                }).get()
            }
        }), p.ajaxSettings.xhr = function() {
            try {
                return new e.XMLHttpRequest
            } catch (e) {}
        };
        var Nt = {
                0: 200,
                1223: 204
            },
            $t = p.ajaxSettings.xhr();
        d.cors = !!$t && "withCredentials" in $t, d.ajax = $t = !!$t, p.ajaxTransport(function(t) {
            var n, i;
            return d.cors || $t && !t.crossDomain ? {
                send: function(o, r) {
                    var s, a = t.xhr();
                    if (a.open(t.type, t.url, t.async, t.username, t.password), t.xhrFields)
                        for (s in t.xhrFields) a[s] = t.xhrFields[s];
                    t.mimeType && a.overrideMimeType && a.overrideMimeType(t.mimeType), t.crossDomain || o["X-Requested-With"] || (o["X-Requested-With"] = "XMLHttpRequest");
                    for (s in o) a.setRequestHeader(s, o[s]);
                    n = function(e) {
                        return function() {
                            n && (n = i = a.onload = a.onerror = a.onabort = a.onreadystatechange = null, "abort" === e ? a.abort() : "error" === e ? "number" != typeof a.status ? r(0, "error") : r(a.status, a.statusText) : r(Nt[a.status] || a.status, a.statusText, "text" !== (a.responseType || "text") || "string" != typeof a.responseText ? {
                                binary: a.response
                            } : {
                                text: a.responseText
                            }, a.getAllResponseHeaders()))
                        }
                    }, a.onload = n(), i = a.onerror = n("error"), void 0 !== a.onabort ? a.onabort = i : a.onreadystatechange = function() {
                        4 === a.readyState && e.setTimeout(function() {
                            n && i()
                        })
                    }, n = n("abort");
                    try {
                        a.send(t.hasContent && t.data || null)
                    } catch (e) {
                        if (n) throw e
                    }
                },
                abort: function() {
                    n && n()
                }
            } : void 0
        }), p.ajaxSetup({
            accepts: {
                script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
            },
            contents: {
                script: /\b(?:java|ecma)script\b/
            },
            converters: {
                "text script": function(e) {
                    return p.globalEval(e), e
                }
            }
        }), p.ajaxPrefilter("script", function(e) {
            void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET")
        }), p.ajaxTransport("script", function(e) {
            var t, n;
            if (e.crossDomain) return {
                send: function(o, r) {
                    t = p("<script>").prop({
                        charset: e.scriptCharset,
                        src: e.url
                    }).on("load error", n = function(e) {
                        t.remove(), n = null, e && r("error" === e.type ? 404 : 200, e.type)
                    }), i.head.appendChild(t[0])
                },
                abort: function() {
                    n && n()
                }
            }
        });
        var Dt = [],
            Ot = /(=)\?(?=&|$)|\?\?/;
        p.ajaxSetup({
            jsonp: "callback",
            jsonpCallback: function() {
                var e = Dt.pop() || p.expando + "_" + ct++;
                return this[e] = !0, e
            }
        }), p.ajaxPrefilter("json jsonp", function(t, n, i) {
            var o, r, s, a = !1 !== t.jsonp && (Ot.test(t.url) ? "url" : "string" == typeof t.data && 0 === (t.contentType || "").indexOf("application/x-www-form-urlencoded") && Ot.test(t.data) && "data");
            return a || "jsonp" === t.dataTypes[0] ? (o = t.jsonpCallback = p.isFunction(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, a ? t[a] = t[a].replace(Ot, "$1" + o) : !1 !== t.jsonp && (t.url += (ut.test(t.url) ? "&" : "?") + t.jsonp + "=" + o), t.converters["script json"] = function() {
                return s || p.error(o + " was not called"), s[0]
            }, t.dataTypes[0] = "json", r = e[o], e[o] = function() {
                s = arguments
            }, i.always(function() {
                void 0 === r ? p(e).removeProp(o) : e[o] = r, t[o] && (t.jsonpCallback = n.jsonpCallback, Dt.push(o)), s && p.isFunction(r) && r(s[0]), s = r = void 0
            }), "script") : void 0
        }), p.parseHTML = function(e, t, n) {
            if (!e || "string" != typeof e) return null;
            "boolean" == typeof t && (n = t, t = !1), t = t || i;
            var o = C.exec(e),
                r = !n && [];
            return o ? [t.createElement(o[1])] : (o = te([e], t, r), r && r.length && p(r).remove(), p.merge([], o.childNodes))
        };
        var It = p.fn.load;

        function Qt(e) {
            return p.isWindow(e) ? e : 9 === e.nodeType && e.defaultView
        }
        p.fn.load = function(e, t, n) {
            if ("string" != typeof e && It) return It.apply(this, arguments);
            var i, o, r, s = this,
                a = e.indexOf(" ");
            return a > -1 && (i = p.trim(e.slice(a)), e = e.slice(0, a)), p.isFunction(t) ? (n = t, t = void 0) : t && "object" == typeof t && (o = "POST"), s.length > 0 && p.ajax({
                url: e,
                type: o || "GET",
                dataType: "html",
                data: t
            }).done(function(e) {
                r = arguments, s.html(i ? p("<div>").append(p.parseHTML(e)).find(i) : e)
            }).always(n && function(e, t) {
                s.each(function() {
                    n.apply(this, r || [e.responseText, t, e])
                })
            }), this
        }, p.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
            p.fn[t] = function(e) {
                return this.on(t, e)
            }
        }), p.expr.filters.animated = function(e) {
            return p.grep(p.timers, function(t) {
                return e === t.elem
            }).length
        }, p.offset = {
            setOffset: function(e, t, n) {
                var i, o, r, s, a, l, c = p.css(e, "position"),
                    u = p(e),
                    d = {};
                "static" === c && (e.style.position = "relative"), a = u.offset(), r = p.css(e, "top"), l = p.css(e, "left"), ("absolute" === c || "fixed" === c) && (r + l).indexOf("auto") > -1 ? (s = (i = u.position()).top, o = i.left) : (s = parseFloat(r) || 0, o = parseFloat(l) || 0), p.isFunction(t) && (t = t.call(e, n, p.extend({}, a))), null != t.top && (d.top = t.top - a.top + s), null != t.left && (d.left = t.left - a.left + o), "using" in t ? t.using.call(e, d) : u.css(d)
            }
        }, p.fn.extend({
            offset: function(e) {
                if (arguments.length) return void 0 === e ? this : this.each(function(t) {
                    p.offset.setOffset(this, e, t)
                });
                var t, n, i = this[0],
                    o = {
                        top: 0,
                        left: 0
                    },
                    r = i && i.ownerDocument;
                return r ? (t = r.documentElement, p.contains(t, i) ? (o = i.getBoundingClientRect(), n = Qt(r), {
                    top: o.top + n.pageYOffset - t.clientTop,
                    left: o.left + n.pageXOffset - t.clientLeft
                }) : o) : void 0
            },
            position: function() {
                if (this[0]) {
                    var e, t, n = this[0],
                        i = {
                            top: 0,
                            left: 0
                        };
                    return "fixed" === p.css(n, "position") ? t = n.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), p.nodeName(e[0], "html") || (i = e.offset()), i.top += p.css(e[0], "borderTopWidth", !0), i.left += p.css(e[0], "borderLeftWidth", !0)), {
                        top: t.top - i.top - p.css(n, "marginTop", !0),
                        left: t.left - i.left - p.css(n, "marginLeft", !0)
                    }
                }
            },
            offsetParent: function() {
                return this.map(function() {
                    for (var e = this.offsetParent; e && "static" === p.css(e, "position");) e = e.offsetParent;
                    return e || Ae
                })
            }
        }), p.each({
            scrollLeft: "pageXOffset",
            scrollTop: "pageYOffset"
        }, function(e, t) {
            var n = "pageYOffset" === t;
            p.fn[e] = function(i) {
                return I(this, function(e, i, o) {
                    var r = Qt(e);
                    return void 0 === o ? r ? r[t] : e[i] : void(r ? r.scrollTo(n ? r.pageXOffset : o, n ? o : r.pageYOffset) : e[i] = o)
                }, e, i, arguments.length)
            }
        }), p.each(["top", "left"], function(e, t) {
            p.cssHooks[t] = $e(d.pixelPosition, function(e, n) {
                return n ? (n = Ne(e, t), je.test(n) ? p(e).position()[t] + "px" : n) : void 0
            })
        }), p.each({
            Height: "height",
            Width: "width"
        }, function(e, t) {
            p.each({
                padding: "inner" + e,
                content: t,
                "": "outer" + e
            }, function(n, i) {
                p.fn[i] = function(i, o) {
                    var r = arguments.length && (n || "boolean" != typeof i),
                        s = n || (!0 === i || !0 === o ? "margin" : "border");
                    return I(this, function(t, n, i) {
                        var o;
                        return p.isWindow(t) ? t.document.documentElement["client" + e] : 9 === t.nodeType ? (o = t.documentElement, Math.max(t.body["scroll" + e], o["scroll" + e], t.body["offset" + e], o["offset" + e], o["client" + e])) : void 0 === i ? p.css(t, n, s) : p.style(t, n, i, s)
                    }, t, r ? i : void 0, r, null)
                }
            })
        }), p.fn.extend({
            bind: function(e, t, n) {
                return this.on(e, null, t, n)
            },
            unbind: function(e, t) {
                return this.off(e, null, t)
            },
            delegate: function(e, t, n, i) {
                return this.on(t, e, n, i)
            },
            undelegate: function(e, t, n) {
                return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
            },
            size: function() {
                return this.length
            }
        }), p.fn.andSelf = p.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function() {
            return p
        });
        var Ht = e.jQuery,
            Rt = e.$;
        return p.noConflict = function(t) {
            return e.$ === p && (e.$ = Rt), t && e.jQuery === p && (e.jQuery = Ht), p
        }, t || (e.jQuery = e.$ = p), p
    }), "undefined" == typeof jQuery) throw new Error("Bootstrap's JavaScript requires jQuery");
! function(e) {
    "use strict";
    var t = e.fn.jquery.split(" ")[0].split(".");
    if (t[0] < 2 && t[1] < 9 || 1 == t[0] && 9 == t[1] && t[2] < 1 || t[0] > 3) throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher, but lower than version 4")
}(jQuery),
function(e) {
    "use strict";
    e.fn.emulateTransitionEnd = function(t) {
        var n = !1,
            i = this;
        e(this).one("bsTransitionEnd", function() {
            n = !0
        });
        return setTimeout(function() {
            n || e(i).trigger(e.support.transition.end)
        }, t), this
    }, e(function() {
        e.support.transition = function() {
            var e = document.createElement("bootstrap"),
                t = {
                    WebkitTransition: "webkitTransitionEnd",
                    MozTransition: "transitionend",
                    OTransition: "oTransitionEnd otransitionend",
                    transition: "transitionend"
                };
            for (var n in t)
                if (void 0 !== e.style[n]) return {
                    end: t[n]
                };
            return !1
        }(), e.support.transition && (e.event.special.bsTransitionEnd = {
            bindType: e.support.transition.end,
            delegateType: e.support.transition.end,
            handle: function(t) {
                if (e(t.target).is(this)) return t.handleObj.handler.apply(this, arguments)
            }
        })
    })
}(jQuery),
function(e) {
    "use strict";
    var t = '[data-dismiss="alert"]',
        n = function(n) {
            e(n).on("click", t, this.close)
        };
    n.VERSION = "3.3.7", n.TRANSITION_DURATION = 150, n.prototype.close = function(t) {
        function i() {
            s.detach().trigger("closed.bs.alert").remove()
        }
        var o = e(this),
            r = o.attr("data-target");
        r || (r = (r = o.attr("href")) && r.replace(/.*(?=#[^\s]*$)/, ""));
        var s = e("#" === r ? [] : r);
        t && t.preventDefault(), s.length || (s = o.closest(".alert")), s.trigger(t = e.Event("close.bs.alert")), t.isDefaultPrevented() || (s.removeClass("in"), e.support.transition && s.hasClass("fade") ? s.one("bsTransitionEnd", i).emulateTransitionEnd(n.TRANSITION_DURATION) : i())
    };
    var i = e.fn.alert;
    e.fn.alert = function(t) {
        return this.each(function() {
            var i = e(this),
                o = i.data("bs.alert");
            o || i.data("bs.alert", o = new n(this)), "string" == typeof t && o[t].call(i)
        })
    }, e.fn.alert.Constructor = n, e.fn.alert.noConflict = function() {
        return e.fn.alert = i, this
    }, e(document).on("click.bs.alert.data-api", t, n.prototype.close)
}(jQuery),
function(e) {
    "use strict";

    function t(t) {
        return this.each(function() {
            var i = e(this),
                o = i.data("bs.button"),
                r = "object" == typeof t && t;
            o || i.data("bs.button", o = new n(this, r)), "toggle" == t ? o.toggle() : t && o.setState(t)
        })
    }
    var n = function(t, i) {
        this.$element = e(t), this.options = e.extend({}, n.DEFAULTS, i), this.isLoading = !1
    };
    n.VERSION = "3.3.7", n.DEFAULTS = {
        loadingText: "loading..."
    }, n.prototype.setState = function(t) {
        var n = "disabled",
            i = this.$element,
            o = i.is("input") ? "val" : "html",
            r = i.data();
        t += "Text", null == r.resetText && i.data("resetText", i[o]()), setTimeout(e.proxy(function() {
            i[o](null == r[t] ? this.options[t] : r[t]), "loadingText" == t ? (this.isLoading = !0, i.addClass(n).attr(n, n).prop(n, !0)) : this.isLoading && (this.isLoading = !1, i.removeClass(n).removeAttr(n).prop(n, !1))
        }, this), 0)
    }, n.prototype.toggle = function() {
        var e = !0,
            t = this.$element.closest('[data-toggle="buttons"]');
        if (t.length) {
            var n = this.$element.find("input");
            "radio" == n.prop("type") ? (n.prop("checked") && (e = !1), t.find(".active").removeClass("active"), this.$element.addClass("active")) : "checkbox" == n.prop("type") && (n.prop("checked") !== this.$element.hasClass("active") && (e = !1), this.$element.toggleClass("active")), n.prop("checked", this.$element.hasClass("active")), e && n.trigger("change")
        } else this.$element.attr("aria-pressed", !this.$element.hasClass("active")), this.$element.toggleClass("active")
    };
    var i = e.fn.button;
    e.fn.button = t, e.fn.button.Constructor = n, e.fn.button.noConflict = function() {
        return e.fn.button = i, this
    }, e(document).on("click.bs.button.data-api", '[data-toggle^="button"]', function(n) {
        var i = e(n.target).closest(".btn");
        t.call(i, "toggle"), e(n.target).is('input[type="radio"], input[type="checkbox"]') || (n.preventDefault(), i.is("input,button") ? i.trigger("focus") : i.find("input:visible,button:visible").first().trigger("focus"))
    }).on("focus.bs.button.data-api blur.bs.button.data-api", '[data-toggle^="button"]', function(t) {
        e(t.target).closest(".btn").toggleClass("focus", /^focus(in)?$/.test(t.type))
    })
}(jQuery),
function(e) {
    "use strict";

    function t(t) {
        return this.each(function() {
            var i = e(this),
                o = i.data("bs.carousel"),
                r = e.extend({}, n.DEFAULTS, i.data(), "object" == typeof t && t),
                s = "string" == typeof t ? t : r.slide;
            o || i.data("bs.carousel", o = new n(this, r)), "number" == typeof t ? o.to(t) : s ? o[s]() : r.interval && o.pause().cycle()
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
        if (!/input|textarea/i.test(e.target.tagName)) {
            switch (e.which) {
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
        var n = this.getItemIndex(t);
        if (("prev" == e && 0 === n || "next" == e && n == this.$items.length - 1) && !this.options.wrap) return t;
        var i = (n + ("prev" == e ? -1 : 1)) % this.$items.length;
        return this.$items.eq(i)
    }, n.prototype.to = function(e) {
        var t = this,
            n = this.getItemIndex(this.$active = this.$element.find(".item.active"));
        if (!(e > this.$items.length - 1 || e < 0)) return this.sliding ? this.$element.one("slid.bs.carousel", function() {
            t.to(e)
        }) : n == e ? this.pause().cycle() : this.slide(e > n ? "next" : "prev", this.$items.eq(e))
    }, n.prototype.pause = function(t) {
        return t || (this.paused = !0), this.$element.find(".next, .prev").length && e.support.transition && (this.$element.trigger(e.support.transition.end), this.cycle(!0)), this.interval = clearInterval(this.interval), this
    }, n.prototype.next = function() {
        if (!this.sliding) return this.slide("next")
    }, n.prototype.prev = function() {
        if (!this.sliding) return this.slide("prev")
    }, n.prototype.slide = function(t, i) {
        var o = this.$element.find(".item.active"),
            r = i || this.getItemForDirection(t, o),
            s = this.interval,
            a = "next" == t ? "left" : "right",
            l = this;
        if (r.hasClass("active")) return this.sliding = !1;
        var c = r[0],
            u = e.Event("slide.bs.carousel", {
                relatedTarget: c,
                direction: a
            });
        if (this.$element.trigger(u), !u.isDefaultPrevented()) {
            if (this.sliding = !0, s && this.pause(), this.$indicators.length) {
                this.$indicators.find(".active").removeClass("active");
                var d = e(this.$indicators.children()[this.getItemIndex(r)]);
                d && d.addClass("active")
            }
            var p = e.Event("slid.bs.carousel", {
                relatedTarget: c,
                direction: a
            });
            return e.support.transition && this.$element.hasClass("slide") ? (r.addClass(t), r[0].offsetWidth, o.addClass(a), r.addClass(a), o.one("bsTransitionEnd", function() {
                r.removeClass([t, a].join(" ")).addClass("active"), o.removeClass(["active", a].join(" ")), l.sliding = !1, setTimeout(function() {
                    l.$element.trigger(p)
                }, 0)
            }).emulateTransitionEnd(n.TRANSITION_DURATION)) : (o.removeClass("active"), r.addClass("active"), this.sliding = !1, this.$element.trigger(p)), s && this.cycle(), this
        }
    };
    var i = e.fn.carousel;
    e.fn.carousel = t, e.fn.carousel.Constructor = n, e.fn.carousel.noConflict = function() {
        return e.fn.carousel = i, this
    };
    var o = function(n) {
        var i, o = e(this),
            r = e(o.attr("data-target") || (i = o.attr("href")) && i.replace(/.*(?=#[^\s]+$)/, ""));
        if (r.hasClass("carousel")) {
            var s = e.extend({}, r.data(), o.data()),
                a = o.attr("data-slide-to");
            a && (s.interval = !1), t.call(r, s), a && r.data("bs.carousel").to(a), n.preventDefault()
        }
    };
    e(document).on("click.bs.carousel.data-api", "[data-slide]", o).on("click.bs.carousel.data-api", "[data-slide-to]", o), e(window).on("load", function() {
        e('[data-ride="carousel"]').each(function() {
            var n = e(this);
            t.call(n, n.data())
        })
    })
}(jQuery),
function(e) {
    "use strict";

    function t(t) {
        var n, i = t.attr("data-target") || (n = t.attr("href")) && n.replace(/.*(?=#[^\s]+$)/, "");
        return e(i)
    }

    function n(t) {
        return this.each(function() {
            var n = e(this),
                o = n.data("bs.collapse"),
                r = e.extend({}, i.DEFAULTS, n.data(), "object" == typeof t && t);
            !o && r.toggle && /show|hide/.test(t) && (r.toggle = !1), o || n.data("bs.collapse", o = new i(this, r)), "string" == typeof t && o[t]()
        })
    }
    var i = function(t, n) {
        this.$element = e(t), this.options = e.extend({}, i.DEFAULTS, n), this.$trigger = e('[data-toggle="collapse"][href="#' + t.id + '"],[data-toggle="collapse"][data-target="#' + t.id + '"]'), this.transitioning = null, this.options.parent ? this.$parent = this.getParent() : this.addAriaAndCollapsedClass(this.$element, this.$trigger), this.options.toggle && this.toggle()
    };
    i.VERSION = "3.3.7", i.TRANSITION_DURATION = 350, i.DEFAULTS = {
        toggle: !0
    }, i.prototype.dimension = function() {
        return this.$element.hasClass("width") ? "width" : "height"
    }, i.prototype.show = function() {
        if (!this.transitioning && !this.$element.hasClass("in")) {
            var t, o = this.$parent && this.$parent.children(".panel").children(".in, .collapsing");
            if (!(o && o.length && (t = o.data("bs.collapse"), t && t.transitioning))) {
                var r = e.Event("show.bs.collapse");
                if (this.$element.trigger(r), !r.isDefaultPrevented()) {
                    o && o.length && (n.call(o, "hide"), t || o.data("bs.collapse", null));
                    var s = this.dimension();
                    this.$element.removeClass("collapse").addClass("collapsing")[s](0).attr("aria-expanded", !0), this.$trigger.removeClass("collapsed").attr("aria-expanded", !0), this.transitioning = 1;
                    var a = function() {
                        this.$element.removeClass("collapsing").addClass("collapse in")[s](""), this.transitioning = 0, this.$element.trigger("shown.bs.collapse")
                    };
                    if (!e.support.transition) return a.call(this);
                    var l = e.camelCase(["scroll", s].join("-"));
                    this.$element.one("bsTransitionEnd", e.proxy(a, this)).emulateTransitionEnd(i.TRANSITION_DURATION)[s](this.$element[0][l])
                }
            }
        }
    }, i.prototype.hide = function() {
        if (!this.transitioning && this.$element.hasClass("in")) {
            var t = e.Event("hide.bs.collapse");
            if (this.$element.trigger(t), !t.isDefaultPrevented()) {
                var n = this.dimension();
                this.$element[n](this.$element[n]())[0].offsetHeight, this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded", !1), this.$trigger.addClass("collapsed").attr("aria-expanded", !1), this.transitioning = 1;
                var o = function() {
                    this.transitioning = 0, this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")
                };
                return e.support.transition ? void this.$element[n](0).one("bsTransitionEnd", e.proxy(o, this)).emulateTransitionEnd(i.TRANSITION_DURATION) : o.call(this)
            }
        }
    }, i.prototype.toggle = function() {
        this[this.$element.hasClass("in") ? "hide" : "show"]()
    }, i.prototype.getParent = function() {
        return e(this.options.parent).find('[data-toggle="collapse"][data-parent="' + this.options.parent + '"]').each(e.proxy(function(n, i) {
            var o = e(i);
            this.addAriaAndCollapsedClass(t(o), o)
        }, this)).end()
    }, i.prototype.addAriaAndCollapsedClass = function(e, t) {
        var n = e.hasClass("in");
        e.attr("aria-expanded", n), t.toggleClass("collapsed", !n).attr("aria-expanded", n)
    };
    var o = e.fn.collapse;
    e.fn.collapse = n, e.fn.collapse.Constructor = i, e.fn.collapse.noConflict = function() {
        return e.fn.collapse = o, this
    }, e(document).on("click.bs.collapse.data-api", '[data-toggle="collapse"]', function(i) {
        var o = e(this);
        o.attr("data-target") || i.preventDefault();
        var r = t(o),
            s = r.data("bs.collapse") ? "toggle" : o.data();
        n.call(r, s)
    })
}(jQuery),
function(e) {
    "use strict";

    function t(t) {
        var n = t.attr("data-target");
        n || (n = (n = t.attr("href")) && /#[A-Za-z]/.test(n) && n.replace(/.*(?=#[^\s]*$)/, ""));
        var i = n && e(n);
        return i && i.length ? i : t.parent()
    }

    function n(n) {
        n && 3 === n.which || (e(i).remove(), e(o).each(function() {
            var i = e(this),
                o = t(i),
                r = {
                    relatedTarget: this
                };
            o.hasClass("open") && (n && "click" == n.type && /input|textarea/i.test(n.target.tagName) && e.contains(o[0], n.target) || (o.trigger(n = e.Event("hide.bs.dropdown", r)), n.isDefaultPrevented() || (i.attr("aria-expanded", "false"), o.removeClass("open").trigger(e.Event("hidden.bs.dropdown", r)))))
        }))
    }
    var i = ".dropdown-backdrop",
        o = '[data-toggle="dropdown"]',
        r = function(t) {
            e(t).on("click.bs.dropdown", this.toggle)
        };
    r.VERSION = "3.3.7", r.prototype.toggle = function(i) {
        var o = e(this);
        if (!o.is(".disabled, :disabled")) {
            var r = t(o),
                s = r.hasClass("open");
            if (n(), !s) {
                "ontouchstart" in document.documentElement && !r.closest(".navbar-nav").length && e(document.createElement("div")).addClass("dropdown-backdrop").insertAfter(e(this)).on("click", n);
                var a = {
                    relatedTarget: this
                };
                if (r.trigger(i = e.Event("show.bs.dropdown", a)), i.isDefaultPrevented()) return;
                o.trigger("focus").attr("aria-expanded", "true"), r.toggleClass("open").trigger(e.Event("shown.bs.dropdown", a))
            }
            return !1
        }
    }, r.prototype.keydown = function(n) {
        if (/(38|40|27|32)/.test(n.which) && !/input|textarea/i.test(n.target.tagName)) {
            var i = e(this);
            if (n.preventDefault(), n.stopPropagation(), !i.is(".disabled, :disabled")) {
                var r = t(i),
                    s = r.hasClass("open");
                if (!s && 27 != n.which || s && 27 == n.which) return 27 == n.which && r.find(o).trigger("focus"), i.trigger("click");
                var a = r.find(".dropdown-menu li:not(.disabled):visible a");
                if (a.length) {
                    var l = a.index(n.target);
                    38 == n.which && l > 0 && l--, 40 == n.which && l < a.length - 1 && l++, ~l || (l = 0), a.eq(l).trigger("focus")
                }
            }
        }
    };
    var s = e.fn.dropdown;
    e.fn.dropdown = function(t) {
        return this.each(function() {
            var n = e(this),
                i = n.data("bs.dropdown");
            i || n.data("bs.dropdown", i = new r(this)), "string" == typeof t && i[t].call(n)
        })
    }, e.fn.dropdown.Constructor = r, e.fn.dropdown.noConflict = function() {
        return e.fn.dropdown = s, this
    }, e(document).on("click.bs.dropdown.data-api", n).on("click.bs.dropdown.data-api", ".dropdown form", function(e) {
        e.stopPropagation()
    }).on("click.bs.dropdown.data-api", o, r.prototype.toggle).on("keydown.bs.dropdown.data-api", o, r.prototype.keydown).on("keydown.bs.dropdown.data-api", ".dropdown-menu", r.prototype.keydown)
}(jQuery),
function(e) {
    "use strict";

    function t(t, i) {
        return this.each(function() {
            var o = e(this),
                r = o.data("bs.modal"),
                s = e.extend({}, n.DEFAULTS, o.data(), "object" == typeof t && t);
            r || o.data("bs.modal", r = new n(this, s)), "string" == typeof t ? r[t](i) : s.show && r.show(i)
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
        var i = this,
            o = e.Event("show.bs.modal", {
                relatedTarget: t
            });
        this.$element.trigger(o), this.isShown || o.isDefaultPrevented() || (this.isShown = !0, this.checkScrollbar(), this.setScrollbar(), this.$body.addClass("modal-open"), this.escape(), this.resize(), this.$element.on("click.dismiss.bs.modal", '[data-dismiss="modal"]', e.proxy(this.hide, this)), this.$dialog.on("mousedown.dismiss.bs.modal", function() {
            i.$element.one("mouseup.dismiss.bs.modal", function(t) {
                e(t.target).is(i.$element) && (i.ignoreBackdropClick = !0)
            })
        }), this.backdrop(function() {
            var o = e.support.transition && i.$element.hasClass("fade");
            i.$element.parent().length || i.$element.appendTo(i.$body), i.$element.show().scrollTop(0), i.adjustDialog(), o && i.$element[0].offsetWidth, i.$element.addClass("in"), i.enforceFocus();
            var r = e.Event("shown.bs.modal", {
                relatedTarget: t
            });
            o ? i.$dialog.one("bsTransitionEnd", function() {
                i.$element.trigger("focus").trigger(r)
            }).emulateTransitionEnd(n.TRANSITION_DURATION) : i.$element.trigger("focus").trigger(r)
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
        var i = this,
            o = this.$element.hasClass("fade") ? "fade" : "";
        if (this.isShown && this.options.backdrop) {
            var r = e.support.transition && o;
            if (this.$backdrop = e(document.createElement("div")).addClass("modal-backdrop " + o).appendTo(this.$body), this.$element.on("click.dismiss.bs.modal", e.proxy(function(e) {
                    return this.ignoreBackdropClick ? void(this.ignoreBackdropClick = !1) : void(e.target === e.currentTarget && ("static" == this.options.backdrop ? this.$element[0].focus() : this.hide()))
                }, this)), r && this.$backdrop[0].offsetWidth, this.$backdrop.addClass("in"), !t) return;
            r ? this.$backdrop.one("bsTransitionEnd", t).emulateTransitionEnd(n.BACKDROP_TRANSITION_DURATION) : t()
        } else if (!this.isShown && this.$backdrop) {
            this.$backdrop.removeClass("in");
            var s = function() {
                i.removeBackdrop(), t && t()
            };
            e.support.transition && this.$element.hasClass("fade") ? this.$backdrop.one("bsTransitionEnd", s).emulateTransitionEnd(n.BACKDROP_TRANSITION_DURATION) : s()
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
        if (!e) {
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
    var i = e.fn.modal;
    e.fn.modal = t, e.fn.modal.Constructor = n, e.fn.modal.noConflict = function() {
        return e.fn.modal = i, this
    }, e(document).on("click.bs.modal.data-api", '[data-toggle="modal"]', function(n) {
        var i = e(this),
            o = i.attr("href"),
            r = e(i.attr("data-target") || o && o.replace(/.*(?=#[^\s]+$)/, "")),
            s = r.data("bs.modal") ? "toggle" : e.extend({
                remote: !/#/.test(o) && o
            }, r.data(), i.data());
        i.is("a") && n.preventDefault(), r.one("show.bs.modal", function(e) {
            e.isDefaultPrevented() || r.one("hidden.bs.modal", function() {
                i.is(":visible") && i.trigger("focus")
            })
        }), t.call(r, s, this)
    })
}(jQuery),
function(e) {
    "use strict";
    var t = function(e, t) {
        this.type = null, this.options = null, this.enabled = null, this.timeout = null, this.hoverState = null, this.$element = null, this.inState = null, this.init("tooltip", e, t)
    };
    t.VERSION = "3.3.7", t.TRANSITION_DURATION = 150, t.DEFAULTS = {
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
    }, t.prototype.init = function(t, n, i) {
        if (this.enabled = !0, this.type = t, this.$element = e(n), this.options = this.getOptions(i), this.$viewport = this.options.viewport && e(e.isFunction(this.options.viewport) ? this.options.viewport.call(this, this.$element) : this.options.viewport.selector || this.options.viewport), this.inState = {
                click: !1,
                hover: !1,
                focus: !1
            }, this.$element[0] instanceof document.constructor && !this.options.selector) throw new Error("`selector` option must be specified when initializing " + this.type + " on the window.document object!");
        for (var o = this.options.trigger.split(" "), r = o.length; r--;) {
            var s = o[r];
            if ("click" == s) this.$element.on("click." + this.type, this.options.selector, e.proxy(this.toggle, this));
            else if ("manual" != s) {
                var a = "hover" == s ? "mouseenter" : "focusin",
                    l = "hover" == s ? "mouseleave" : "focusout";
                this.$element.on(a + "." + this.type, this.options.selector, e.proxy(this.enter, this)), this.$element.on(l + "." + this.type, this.options.selector, e.proxy(this.leave, this))
            }
        }
        this.options.selector ? this._options = e.extend({}, this.options, {
            trigger: "manual",
            selector: ""
        }) : this.fixTitle()
    }, t.prototype.getDefaults = function() {
        return t.DEFAULTS
    }, t.prototype.getOptions = function(t) {
        return (t = e.extend({}, this.getDefaults(), this.$element.data(), t)).delay && "number" == typeof t.delay && (t.delay = {
            show: t.delay,
            hide: t.delay
        }), t
    }, t.prototype.getDelegateOptions = function() {
        var t = {},
            n = this.getDefaults();
        return this._options && e.each(this._options, function(e, i) {
            n[e] != i && (t[e] = i)
        }), t
    }, t.prototype.enter = function(t) {
        var n = t instanceof this.constructor ? t : e(t.currentTarget).data("bs." + this.type);
        return n || (n = new this.constructor(t.currentTarget, this.getDelegateOptions()), e(t.currentTarget).data("bs." + this.type, n)), t instanceof e.Event && (n.inState["focusin" == t.type ? "focus" : "hover"] = !0), n.tip().hasClass("in") || "in" == n.hoverState ? void(n.hoverState = "in") : (clearTimeout(n.timeout), n.hoverState = "in", n.options.delay && n.options.delay.show ? void(n.timeout = setTimeout(function() {
            "in" == n.hoverState && n.show()
        }, n.options.delay.show)) : n.show())
    }, t.prototype.isInStateTrue = function() {
        for (var e in this.inState)
            if (this.inState[e]) return !0;
        return !1
    }, t.prototype.leave = function(t) {
        var n = t instanceof this.constructor ? t : e(t.currentTarget).data("bs." + this.type);
        if (n || (n = new this.constructor(t.currentTarget, this.getDelegateOptions()), e(t.currentTarget).data("bs." + this.type, n)), t instanceof e.Event && (n.inState["focusout" == t.type ? "focus" : "hover"] = !1), !n.isInStateTrue()) return clearTimeout(n.timeout), n.hoverState = "out", n.options.delay && n.options.delay.hide ? void(n.timeout = setTimeout(function() {
            "out" == n.hoverState && n.hide()
        }, n.options.delay.hide)) : n.hide()
    }, t.prototype.show = function() {
        var n = e.Event("show.bs." + this.type);
        if (this.hasContent() && this.enabled) {
            this.$element.trigger(n);
            var i = e.contains(this.$element[0].ownerDocument.documentElement, this.$element[0]);
            if (n.isDefaultPrevented() || !i) return;
            var o = this,
                r = this.tip(),
                s = this.getUID(this.type);
            this.setContent(), r.attr("id", s), this.$element.attr("aria-describedby", s), this.options.animation && r.addClass("fade");
            var a = "function" == typeof this.options.placement ? this.options.placement.call(this, r[0], this.$element[0]) : this.options.placement,
                l = /\s?auto?\s?/i,
                c = l.test(a);
            c && (a = a.replace(l, "") || "top"), r.detach().css({
                top: 0,
                left: 0,
                display: "block"
            }).addClass(a).data("bs." + this.type, this), this.options.container ? r.appendTo(this.options.container) : r.insertAfter(this.$element), this.$element.trigger("inserted.bs." + this.type);
            var u = this.getPosition(),
                d = r[0].offsetWidth,
                p = r[0].offsetHeight;
            if (c) {
                var h = a,
                    f = this.getPosition(this.$viewport);
                a = "bottom" == a && u.bottom + p > f.bottom ? "top" : "top" == a && u.top - p < f.top ? "bottom" : "right" == a && u.right + d > f.width ? "left" : "left" == a && u.left - d < f.left ? "right" : a, r.removeClass(h).addClass(a)
            }
            var g = this.getCalculatedOffset(a, u, d, p);
            this.applyPlacement(g, a);
            var m = function() {
                var e = o.hoverState;
                o.$element.trigger("shown.bs." + o.type), o.hoverState = null, "out" == e && o.leave(o)
            };
            e.support.transition && this.$tip.hasClass("fade") ? r.one("bsTransitionEnd", m).emulateTransitionEnd(t.TRANSITION_DURATION) : m()
        }
    }, t.prototype.applyPlacement = function(t, n) {
        var i = this.tip(),
            o = i[0].offsetWidth,
            r = i[0].offsetHeight,
            s = parseInt(i.css("margin-top"), 10),
            a = parseInt(i.css("margin-left"), 10);
        isNaN(s) && (s = 0), isNaN(a) && (a = 0), t.top += s, t.left += a, e.offset.setOffset(i[0], e.extend({
            using: function(e) {
                i.css({
                    top: Math.round(e.top),
                    left: Math.round(e.left)
                })
            }
        }, t), 0), i.addClass("in");
        var l = i[0].offsetWidth,
            c = i[0].offsetHeight;
        "top" == n && c != r && (t.top = t.top + r - c);
        var u = this.getViewportAdjustedDelta(n, t, l, c);
        u.left ? t.left += u.left : t.top += u.top;
        var d = /top|bottom/.test(n),
            p = d ? 2 * u.left - o + l : 2 * u.top - r + c,
            h = d ? "offsetWidth" : "offsetHeight";
        i.offset(t), this.replaceArrow(p, i[0][h], d)
    }, t.prototype.replaceArrow = function(e, t, n) {
        this.arrow().css(n ? "left" : "top", 50 * (1 - e / t) + "%").css(n ? "top" : "left", "")
    }, t.prototype.setContent = function() {
        var e = this.tip(),
            t = this.getTitle();
        e.find(".tooltip-inner")[this.options.html ? "html" : "text"](t), e.removeClass("fade in top bottom left right")
    }, t.prototype.hide = function(n) {
        function i() {
            "in" != o.hoverState && r.detach(), o.$element && o.$element.removeAttr("aria-describedby").trigger("hidden.bs." + o.type), n && n()
        }
        var o = this,
            r = e(this.$tip),
            s = e.Event("hide.bs." + this.type);
        if (this.$element.trigger(s), !s.isDefaultPrevented()) return r.removeClass("in"), e.support.transition && r.hasClass("fade") ? r.one("bsTransitionEnd", i).emulateTransitionEnd(t.TRANSITION_DURATION) : i(), this.hoverState = null, this
    }, t.prototype.fixTitle = function() {
        var e = this.$element;
        (e.attr("title") || "string" != typeof e.attr("data-original-title")) && e.attr("data-original-title", e.attr("title") || "").attr("title", "")
    }, t.prototype.hasContent = function() {
        return this.getTitle()
    }, t.prototype.getPosition = function(t) {
        var n = (t = t || this.$element)[0],
            i = "BODY" == n.tagName,
            o = n.getBoundingClientRect();
        null == o.width && (o = e.extend({}, o, {
            width: o.right - o.left,
            height: o.bottom - o.top
        }));
        var r = window.SVGElement && n instanceof window.SVGElement,
            s = i ? {
                top: 0,
                left: 0
            } : r ? null : t.offset(),
            a = {
                scroll: i ? document.documentElement.scrollTop || document.body.scrollTop : t.scrollTop()
            },
            l = i ? {
                width: e(window).width(),
                height: e(window).height()
            } : null;
        return e.extend({}, o, a, l, s)
    }, t.prototype.getCalculatedOffset = function(e, t, n, i) {
        return "bottom" == e ? {
            top: t.top + t.height,
            left: t.left + t.width / 2 - n / 2
        } : "top" == e ? {
            top: t.top - i,
            left: t.left + t.width / 2 - n / 2
        } : "left" == e ? {
            top: t.top + t.height / 2 - i / 2,
            left: t.left - n
        } : {
            top: t.top + t.height / 2 - i / 2,
            left: t.left + t.width
        }
    }, t.prototype.getViewportAdjustedDelta = function(e, t, n, i) {
        var o = {
            top: 0,
            left: 0
        };
        if (!this.$viewport) return o;
        var r = this.options.viewport && this.options.viewport.padding || 0,
            s = this.getPosition(this.$viewport);
        if (/right|left/.test(e)) {
            var a = t.top - r - s.scroll,
                l = t.top + r - s.scroll + i;
            a < s.top ? o.top = s.top - a : l > s.top + s.height && (o.top = s.top + s.height - l)
        } else {
            var c = t.left - r,
                u = t.left + r + n;
            c < s.left ? o.left = s.left - c : u > s.right && (o.left = s.left + s.width - u)
        }
        return o
    }, t.prototype.getTitle = function() {
        var e = this.$element,
            t = this.options;
        return e.attr("data-original-title") || ("function" == typeof t.title ? t.title.call(e[0]) : t.title)
    }, t.prototype.getUID = function(e) {
        do {
            e += ~~(1e6 * Math.random())
        } while (document.getElementById(e));
        return e
    }, t.prototype.tip = function() {
        if (!this.$tip && (this.$tip = e(this.options.template), 1 != this.$tip.length)) throw new Error(this.type + " `template` option must consist of exactly 1 top-level element!");
        return this.$tip
    }, t.prototype.arrow = function() {
        return this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow")
    }, t.prototype.enable = function() {
        this.enabled = !0
    }, t.prototype.disable = function() {
        this.enabled = !1
    }, t.prototype.toggleEnabled = function() {
        this.enabled = !this.enabled
    }, t.prototype.toggle = function(t) {
        var n = this;
        t && ((n = e(t.currentTarget).data("bs." + this.type)) || (n = new this.constructor(t.currentTarget, this.getDelegateOptions()), e(t.currentTarget).data("bs." + this.type, n))), t ? (n.inState.click = !n.inState.click, n.isInStateTrue() ? n.enter(n) : n.leave(n)) : n.tip().hasClass("in") ? n.leave(n) : n.enter(n)
    }, t.prototype.destroy = function() {
        var e = this;
        clearTimeout(this.timeout), this.hide(function() {
            e.$element.off("." + e.type).removeData("bs." + e.type), e.$tip && e.$tip.detach(), e.$tip = null, e.$arrow = null, e.$viewport = null, e.$element = null
        })
    };
    var n = e.fn.tooltip;
    e.fn.tooltip = function(n) {
        return this.each(function() {
            var i = e(this),
                o = i.data("bs.tooltip"),
                r = "object" == typeof n && n;
            !o && /destroy|hide/.test(n) || (o || i.data("bs.tooltip", o = new t(this, r)), "string" == typeof n && o[n]())
        })
    }, e.fn.tooltip.Constructor = t, e.fn.tooltip.noConflict = function() {
        return e.fn.tooltip = n, this
    }
}(jQuery),
function(e) {
    "use strict";
    var t = function(e, t) {
        this.init("popover", e, t)
    };
    if (!e.fn.tooltip) throw new Error("Popover requires tooltip.js");
    t.VERSION = "3.3.7", t.DEFAULTS = e.extend({}, e.fn.tooltip.Constructor.DEFAULTS, {
        placement: "right",
        trigger: "click",
        content: "",
        template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
    }), t.prototype = e.extend({}, e.fn.tooltip.Constructor.prototype), t.prototype.constructor = t, t.prototype.getDefaults = function() {
        return t.DEFAULTS
    }, t.prototype.setContent = function() {
        var e = this.tip(),
            t = this.getTitle(),
            n = this.getContent();
        e.find(".popover-title")[this.options.html ? "html" : "text"](t), e.find(".popover-content").children().detach().end()[this.options.html ? "string" == typeof n ? "html" : "append" : "text"](n), e.removeClass("fade top bottom left right in"), e.find(".popover-title").html() || e.find(".popover-title").hide()
    }, t.prototype.hasContent = function() {
        return this.getTitle() || this.getContent()
    }, t.prototype.getContent = function() {
        var e = this.$element,
            t = this.options;
        return e.attr("data-content") || ("function" == typeof t.content ? t.content.call(e[0]) : t.content)
    }, t.prototype.arrow = function() {
        return this.$arrow = this.$arrow || this.tip().find(".arrow")
    };
    var n = e.fn.popover;
    e.fn.popover = function(n) {
        return this.each(function() {
            var i = e(this),
                o = i.data("bs.popover"),
                r = "object" == typeof n && n;
            !o && /destroy|hide/.test(n) || (o || i.data("bs.popover", o = new t(this, r)), "string" == typeof n && o[n]())
        })
    }, e.fn.popover.Constructor = t, e.fn.popover.noConflict = function() {
        return e.fn.popover = n, this
    }
}(jQuery),
function(e) {
    "use strict";

    function t(n, i) {
        this.$body = e(document.body), this.$scrollElement = e(e(n).is(document.body) ? window : n), this.options = e.extend({}, t.DEFAULTS, i), this.selector = (this.options.target || "") + " .nav li > a", this.offsets = [], this.targets = [], this.activeTarget = null, this.scrollHeight = 0, this.$scrollElement.on("scroll.bs.scrollspy", e.proxy(this.process, this)), this.refresh(), this.process()
    }

    function n(n) {
        return this.each(function() {
            var i = e(this),
                o = i.data("bs.scrollspy"),
                r = "object" == typeof n && n;
            o || i.data("bs.scrollspy", o = new t(this, r)), "string" == typeof n && o[n]()
        })
    }
    t.VERSION = "3.3.7", t.DEFAULTS = {
        offset: 10
    }, t.prototype.getScrollHeight = function() {
        return this.$scrollElement[0].scrollHeight || Math.max(this.$body[0].scrollHeight, document.documentElement.scrollHeight)
    }, t.prototype.refresh = function() {
        var t = this,
            n = "offset",
            i = 0;
        this.offsets = [], this.targets = [], this.scrollHeight = this.getScrollHeight(), e.isWindow(this.$scrollElement[0]) || (n = "position", i = this.$scrollElement.scrollTop()), this.$body.find(this.selector).map(function() {
            var t = e(this),
                o = t.data("target") || t.attr("href"),
                r = /^#./.test(o) && e(o);
            return r && r.length && r.is(":visible") && [
                [r[n]().top + i, o]
            ] || null
        }).sort(function(e, t) {
            return e[0] - t[0]
        }).each(function() {
            t.offsets.push(this[0]), t.targets.push(this[1])
        })
    }, t.prototype.process = function() {
        var e, t = this.$scrollElement.scrollTop() + this.options.offset,
            n = this.getScrollHeight(),
            i = this.options.offset + n - this.$scrollElement.height(),
            o = this.offsets,
            r = this.targets,
            s = this.activeTarget;
        if (this.scrollHeight != n && this.refresh(), t >= i) return s != (e = r[r.length - 1]) && this.activate(e);
        if (s && t < o[0]) return this.activeTarget = null, this.clear();
        for (e = o.length; e--;) s != r[e] && t >= o[e] && (void 0 === o[e + 1] || t < o[e + 1]) && this.activate(r[e])
    }, t.prototype.activate = function(t) {
        this.activeTarget = t, this.clear();
        var n = this.selector + '[data-target="' + t + '"],' + this.selector + '[href="' + t + '"]',
            i = e(n).parents("li").addClass("active");
        i.parent(".dropdown-menu").length && (i = i.closest("li.dropdown").addClass("active")), i.trigger("activate.bs.scrollspy")
    }, t.prototype.clear = function() {
        e(this.selector).parentsUntil(this.options.target, ".active").removeClass("active")
    };
    var i = e.fn.scrollspy;
    e.fn.scrollspy = n, e.fn.scrollspy.Constructor = t, e.fn.scrollspy.noConflict = function() {
        return e.fn.scrollspy = i, this
    }, e(window).on("load.bs.scrollspy.data-api", function() {
        e('[data-spy="scroll"]').each(function() {
            var t = e(this);
            n.call(t, t.data())
        })
    })
}(jQuery),
function(e) {
    "use strict";

    function t(t) {
        return this.each(function() {
            var i = e(this),
                o = i.data("bs.tab");
            o || i.data("bs.tab", o = new n(this)), "string" == typeof t && o[t]()
        })
    }
    var n = function(t) {
        this.element = e(t)
    };
    n.VERSION = "3.3.7", n.TRANSITION_DURATION = 150, n.prototype.show = function() {
        var t = this.element,
            n = t.closest("ul:not(.dropdown-menu)"),
            i = t.data("target");
        if (i || (i = (i = t.attr("href")) && i.replace(/.*(?=#[^\s]*$)/, "")), !t.parent("li").hasClass("active")) {
            var o = n.find(".active:last a"),
                r = e.Event("hide.bs.tab", {
                    relatedTarget: t[0]
                }),
                s = e.Event("show.bs.tab", {
                    relatedTarget: o[0]
                });
            if (o.trigger(r), t.trigger(s), !s.isDefaultPrevented() && !r.isDefaultPrevented()) {
                var a = e(i);
                this.activate(t.closest("li"), n), this.activate(a, a.parent(), function() {
                    o.trigger({
                        type: "hidden.bs.tab",
                        relatedTarget: t[0]
                    }), t.trigger({
                        type: "shown.bs.tab",
                        relatedTarget: o[0]
                    })
                })
            }
        }
    }, n.prototype.activate = function(t, i, o) {
        function r() {
            s.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !1), t.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded", !0), a ? (t[0].offsetWidth, t.addClass("in")) : t.removeClass("fade"), t.parent(".dropdown-menu").length && t.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !0), o && o()
        }
        var s = i.find("> .active"),
            a = o && e.support.transition && (s.length && s.hasClass("fade") || !!i.find("> .fade").length);
        s.length && a ? s.one("bsTransitionEnd", r).emulateTransitionEnd(n.TRANSITION_DURATION) : r(), s.removeClass("in")
    };
    var i = e.fn.tab;
    e.fn.tab = t, e.fn.tab.Constructor = n, e.fn.tab.noConflict = function() {
        return e.fn.tab = i, this
    };
    var o = function(n) {
        n.preventDefault(), t.call(e(this), "show")
    };
    e(document).on("click.bs.tab.data-api", '[data-toggle="tab"]', o).on("click.bs.tab.data-api", '[data-toggle="pill"]', o)
}(jQuery),
function(e) {
    "use strict";

    function t(t) {
        return this.each(function() {
            var i = e(this),
                o = i.data("bs.affix"),
                r = "object" == typeof t && t;
            o || i.data("bs.affix", o = new n(this, r)), "string" == typeof t && o[t]()
        })
    }
    var n = function(t, i) {
        this.options = e.extend({}, n.DEFAULTS, i), this.$target = e(this.options.target).on("scroll.bs.affix.data-api", e.proxy(this.checkPosition, this)).on("click.bs.affix.data-api", e.proxy(this.checkPositionWithEventLoop, this)), this.$element = e(t), this.affixed = null, this.unpin = null, this.pinnedOffset = null, this.checkPosition()
    };
    n.VERSION = "3.3.7", n.RESET = "affix affix-top affix-bottom", n.DEFAULTS = {
        offset: 0,
        target: window
    }, n.prototype.getState = function(e, t, n, i) {
        var o = this.$target.scrollTop(),
            r = this.$element.offset(),
            s = this.$target.height();
        if (null != n && "top" == this.affixed) return o < n && "top";
        if ("bottom" == this.affixed) return null != n ? !(o + this.unpin <= r.top) && "bottom" : !(o + s <= e - i) && "bottom";
        var a = null == this.affixed,
            l = a ? o : r.top;
        return null != n && o <= n ? "top" : null != i && l + (a ? s : t) >= e - i && "bottom"
    }, n.prototype.getPinnedOffset = function() {
        if (this.pinnedOffset) return this.pinnedOffset;
        this.$element.removeClass(n.RESET).addClass("affix");
        var e = this.$target.scrollTop(),
            t = this.$element.offset();
        return this.pinnedOffset = t.top - e
    }, n.prototype.checkPositionWithEventLoop = function() {
        setTimeout(e.proxy(this.checkPosition, this), 1)
    }, n.prototype.checkPosition = function() {
        if (this.$element.is(":visible")) {
            var t = this.$element.height(),
                i = this.options.offset,
                o = i.top,
                r = i.bottom,
                s = Math.max(e(document).height(), e(document.body).height());
            "object" != typeof i && (r = o = i), "function" == typeof o && (o = i.top(this.$element)), "function" == typeof r && (r = i.bottom(this.$element));
            var a = this.getState(s, t, o, r);
            if (this.affixed != a) {
                null != this.unpin && this.$element.css("top", "");
                var l = "affix" + (a ? "-" + a : ""),
                    c = e.Event(l + ".bs.affix");
                if (this.$element.trigger(c), c.isDefaultPrevented()) return;
                this.affixed = a, this.unpin = "bottom" == a ? this.getPinnedOffset() : null, this.$element.removeClass(n.RESET).addClass(l).trigger(l.replace("affix", "affixed") + ".bs.affix")
            }
            "bottom" == a && this.$element.offset({
                top: s - t - r
            })
        }
    };
    var i = e.fn.affix;
    e.fn.affix = t, e.fn.affix.Constructor = n, e.fn.affix.noConflict = function() {
        return e.fn.affix = i, this
    }, e(window).on("load", function() {
        e('[data-spy="affix"]').each(function() {
            var n = e(this),
                i = n.data();
            i.offset = i.offset || {}, null != i.offsetBottom && (i.offset.bottom = i.offsetBottom), null != i.offsetTop && (i.offset.top = i.offsetTop), t.call(n, i)
        })
    })
}(jQuery),
function(e) {
    e.fn.extend({
        slimScroll: function(n) {
            var i = e.extend({
                width: "auto",
                height: "250px",
                size: "7px",
                color: "#000",
                position: "right",
                distance: "1px",
                start: "top",
                opacity: .4,
                alwaysVisible: !1,
                disableFadeOut: !1,
                railVisible: !1,
                railColor: "#333",
                railOpacity: .2,
                railDraggable: !0,
                railClass: "slimScrollRail",
                barClass: "slimScrollBar",
                wrapperClass: "slimScrollDiv",
                allowPageScroll: !1,
                wheelStep: 20,
                touchScrollStep: 200,
                borderRadius: "7px",
                railBorderRadius: "7px"
            }, n);
            return this.each(function() {
                function o(t) {
                    if (c) {
                        var n = 0;
                        (t = t || window.event).wheelDelta && (n = -t.wheelDelta / 120), t.detail && (n = t.detail / 3), e(t.target || t.srcTarget || t.srcElement).closest("." + i.wrapperClass).is(y.parent()) && r(n, !0), t.preventDefault && !v && t.preventDefault(), v || (t.returnValue = !1)
                    }
                }

                function r(e, t, n) {
                    v = !1;
                    var o = e,
                        r = y.outerHeight() - x.outerHeight();
                    t && (o = parseInt(x.css("top")) + e * parseInt(i.wheelStep) / 100 * x.outerHeight(), o = Math.min(Math.max(o, 0), r), o = 0 < e ? Math.ceil(o) : Math.floor(o), x.css({
                        top: o + "px"
                    })), o = (g = parseInt(x.css("top")) / (y.outerHeight() - x.outerHeight())) * (y[0].scrollHeight - y.outerHeight()), n && (e = (o = e) / y[0].scrollHeight * y.outerHeight(), e = Math.min(Math.max(e, 0), r), x.css({
                        top: e + "px"
                    })), y.scrollTop(o), y.trigger("slimscrolling", ~~o), a(), l()
                }

                function s() {
                    f = Math.max(y.outerHeight() / y[0].scrollHeight * y.outerHeight(), 30), x.css({
                        height: f + "px"
                    });
                    var e = f == y.outerHeight() ? "none" : "block";
                    x.css({
                        display: e
                    })
                }

                function a() {
                    s(), clearTimeout(p), g == ~~g ? (v = i.allowPageScroll, m != g && y.trigger("slimscroll", 0 == ~~g ? "top" : "bottom")) : v = !1, m = g, f >= y.outerHeight() ? v = !0 : (x.stop(!0, !0).fadeIn("fast"), i.railVisible && w.stop(!0, !0).fadeIn("fast"))
                }

                function l() {
                    i.alwaysVisible || (p = setTimeout(function() {
                        i.disableFadeOut && c || u || d || (x.fadeOut("slow"), w.fadeOut("slow"))
                    }, 1e3))
                }
                var c, u, d, p, h, f, g, m, v = !1,
                    y = e(this);
                if (y.parent().hasClass(i.wrapperClass)) {
                    var b = y.scrollTop(),
                        x = y.siblings("." + i.barClass),
                        w = y.siblings("." + i.railClass);
                    if (s(), e.isPlainObject(n)) {
                        if ("height" in n && "auto" == n.height) {
                            y.parent().css("height", "auto"), y.css("height", "auto");
                            var C = y.parent().parent().height();
                            y.parent().css("height", C), y.css("height", C)
                        } else "height" in n && (C = n.height, y.parent().css("height", C), y.css("height", C));
                        if ("scrollTo" in n) b = parseInt(i.scrollTo);
                        else if ("scrollBy" in n) b += parseInt(i.scrollBy);
                        else if ("destroy" in n) return x.remove(), w.remove(), void y.unwrap();
                        r(b, !1, !0)
                    }
                } else if (!(e.isPlainObject(n) && "destroy" in n)) {
                    i.height = "auto" == i.height ? y.parent().height() : i.height, b = e("<div></div>").addClass(i.wrapperClass).css({
                        position: "relative",
                        overflow: "hidden",
                        width: i.width,
                        height: i.height
                    }), y.css({
                        overflow: "hidden",
                        width: i.width,
                        height: i.height
                    });
                    w = e("<div></div>").addClass(i.railClass).css({
                        width: i.size,
                        height: "100%",
                        position: "absolute",
                        top: 0,
                        display: i.alwaysVisible && i.railVisible ? "block" : "none",
                        "border-radius": i.railBorderRadius,
                        background: i.railColor,
                        opacity: i.railOpacity,
                        zIndex: 90
                    }), x = e("<div></div>").addClass(i.barClass).css({
                        background: i.color,
                        width: i.size,
                        position: "absolute",
                        top: 0,
                        opacity: i.opacity,
                        display: i.alwaysVisible ? "block" : "none",
                        "border-radius": i.borderRadius,
                        BorderRadius: i.borderRadius,
                        MozBorderRadius: i.borderRadius,
                        WebkitBorderRadius: i.borderRadius,
                        zIndex: 99
                    }), C = "right" == i.position ? {
                        right: i.distance
                    } : {
                        left: i.distance
                    };
                    w.css(C), x.css(C), y.wrap(b), y.parent().append(x), y.parent().append(w), i.railDraggable && x.bind("mousedown", function(n) {
                        var i = e(document);
                        return d = !0, t = parseFloat(x.css("top")), pageY = n.pageY, i.bind("mousemove.slimscroll", function(e) {
                            currTop = t + e.pageY - pageY, x.css("top", currTop), r(0, x.position().top, !1)
                        }), i.bind("mouseup.slimscroll", function(e) {
                            d = !1, l(), i.unbind(".slimscroll")
                        }), !1
                    }).bind("selectstart.slimscroll", function(e) {
                        return e.stopPropagation(), e.preventDefault(), !1
                    }), w.hover(function() {
                        a()
                    }, function() {
                        l()
                    }), x.hover(function() {
                        u = !0
                    }, function() {
                        u = !1
                    }), y.hover(function() {
                        c = !0, a(), l()
                    }, function() {
                        c = !1, l()
                    }), y.bind("touchstart", function(e, t) {
                        e.originalEvent.touches.length && (h = e.originalEvent.touches[0].pageY)
                    }), y.bind("touchmove", function(e) {
                        v || e.originalEvent.preventDefault(), e.originalEvent.touches.length && (r((h - e.originalEvent.touches[0].pageY) / i.touchScrollStep, !0), h = e.originalEvent.touches[0].pageY)
                    }), s(), "bottom" === i.start ? (x.css({
                        top: y.outerHeight() - x.outerHeight()
                    }), r(0, !0)) : "top" !== i.start && (r(e(i.start).position().top, null, !0), i.alwaysVisible || x.hide()), window.addEventListener ? (this.addEventListener("DOMMouseScroll", o, !1), this.addEventListener("mousewheel", o, !1)) : document.attachEvent("onmousewheel", o)
                }
            }), this
        }
    }), e.fn.extend({
        slimscroll: e.fn.slimScroll
    })
}(jQuery),
function(e) {
    "function" == typeof define && define.amd ? define(["jquery"], e) : e(jQuery)
}(function(e) {
    "use strict";
    var t, n = 32,
        i = 33,
        o = 34,
        r = 35,
        s = 36,
        a = 38,
        l = 40,
        c = function(t, n) {
            var i, o, r = n.scrollTop(),
                s = n.prop("scrollHeight"),
                a = n.prop("clientHeight"),
                l = t.originalEvent.wheelDelta || -1 * t.originalEvent.detail || -1 * t.originalEvent.deltaY,
                c = 0;
            return "wheel" === t.type ? (i = n.height() / e(window).height(), c = t.originalEvent.deltaY * i) : this.options.touch && "touchmove" === t.type && (l = t.originalEvent.changedTouches[0].clientY - this.startClientY), {
                prevent: (o = l > 0 && r + c <= 0) || l < 0 && r + c >= s - a,
                top: o,
                scrollTop: r,
                deltaY: c
            }
        },
        u = function(e, t) {
            var c, u, d = t.scrollTop(),
                p = {
                    top: !1,
                    bottom: !1
                };
            return p.top = 0 === d && (e.keyCode === i || e.keyCode === s || e.keyCode === a), p.top || (c = t.prop("scrollHeight"), u = t.prop("clientHeight"), p.bottom = c === d + u && (e.keyCode === n || e.keyCode === o || e.keyCode === r || e.keyCode === l)), p
        },
        d = function(t, n) {
            this.$element = t, this.options = e.extend({}, d.DEFAULTS, this.$element.data(), n), this.enabled = !0, this.startClientY = 0, this.options.unblock && this.$element.on(d.CORE.wheelEventName + d.NAMESPACE, this.options.unblock, e.proxy(d.CORE.unblockHandler, this)), this.$element.on(d.CORE.wheelEventName + d.NAMESPACE, this.options.selector, e.proxy(d.CORE.handler, this)), this.options.touch && (this.$element.on("touchstart" + d.NAMESPACE, this.options.selector, e.proxy(d.CORE.touchHandler, this)), this.$element.on("touchmove" + d.NAMESPACE, this.options.selector, e.proxy(d.CORE.handler, this)), this.options.unblock && this.$element.on("touchmove" + d.NAMESPACE, this.options.unblock, e.proxy(d.CORE.unblockHandler, this))), this.options.keyboard && (this.$element.attr("tabindex", this.options.keyboard.tabindex || 0), this.$element.on("keydown" + d.NAMESPACE, this.options.selector, e.proxy(d.CORE.keyboardHandler, this)), this.options.unblock && this.$element.on("keydown" + d.NAMESPACE, this.options.unblock, e.proxy(d.CORE.unblockHandler, this)))
        };
    d.NAME = "ScrollLock", d.VERSION = "3.1.2", d.NAMESPACE = ".scrollLock", d.ANIMATION_NAMESPACE = d.NAMESPACE + ".effect", d.DEFAULTS = {
        strict: !1,
        strictFn: function(e) {
            return e.prop("scrollHeight") > e.prop("clientHeight")
        },
        selector: !1,
        animation: !1,
        touch: "ontouchstart" in window,
        keyboard: !1,
        unblock: !1
    }, d.CORE = {
        wheelEventName: "onwheel" in document.createElement("div") ? "wheel" : void 0 !== document.onmousewheel ? "mousewheel" : "DOMMouseScroll",
        animationEventName: ["webkitAnimationEnd", "mozAnimationEnd", "MSAnimationEnd", "oanimationend", "animationend"].join(d.ANIMATION_NAMESPACE + " ") + d.ANIMATION_NAMESPACE,
        unblockHandler: function(e) {
            e.__currentTarget = e.currentTarget
        },
        handler: function(t) {
            var n, i, o;
            this.enabled && !t.ctrlKey && (n = e(t.currentTarget), (!0 !== this.options.strict || this.options.strictFn(n)) && (t.stopPropagation(), i = e.proxy(c, this)(t, n), t.__currentTarget && (i.prevent &= e.proxy(c, this)(t, e(t.__currentTarget)).prevent), i.prevent && (t.preventDefault(), i.deltaY && n.scrollTop(i.scrollTop + i.deltaY), o = i.top ? "top" : "bottom", this.options.animation && setTimeout(d.CORE.animationHandler.bind(this, n, o), 0), n.trigger(e.Event(o + d.NAMESPACE)))))
        },
        touchHandler: function(e) {
            this.startClientY = e.originalEvent.touches[0].clientY
        },
        animationHandler: function(e, t) {
            var n = this.options.animation[t],
                i = this.options.animation.top + " " + this.options.animation.bottom;
            e.off(d.ANIMATION_NAMESPACE).removeClass(i).addClass(n).one(d.CORE.animationEventName, function() {
                e.removeClass(n)
            })
        },
        keyboardHandler: function(t) {
            var n, i = e(t.currentTarget),
                o = (i.scrollTop(), u(t, i));
            return t.__currentTarget && (n = u(t, e(t.__currentTarget)), o.top &= n.top, o.bottom &= n.bottom), o.top ? (i.trigger(e.Event("top" + d.NAMESPACE)), this.options.animation && setTimeout(d.CORE.animationHandler.bind(this, i, "top"), 0), !1) : o.bottom ? (i.trigger(e.Event("bottom" + d.NAMESPACE)), this.options.animation && setTimeout(d.CORE.animationHandler.bind(this, i, "bottom"), 0), !1) : void 0
        }
    }, d.prototype.toggleStrict = function() {
        this.options.strict = !this.options.strict
    }, d.prototype.enable = function() {
        this.enabled = !0
    }, d.prototype.disable = function() {
        this.enabled = !1
    }, d.prototype.destroy = function() {
        this.disable(), this.$element.off(d.NAMESPACE), this.$element = null, this.options = null
    }, t = e.fn.scrollLock, e.fn.scrollLock = function(t) {
        return this.each(function() {
            var n = e(this),
                i = "object" == typeof t && t,
                o = n.data(d.NAME);
            (o || "destroy" !== t) && (o || n.data(d.NAME, o = new d(n, i)), "string" == typeof t && o[t]())
        })
    }, e.fn.scrollLock.defaults = d.DEFAULTS, e.fn.scrollLock.noConflict = function() {
        return e.fn.scrollLock = t, this
    }
}),
function(e) {
    e.fn.appear = function(t, n) {
        var i = e.extend({
            data: void 0,
            one: !0,
            accX: 0,
            accY: 0
        }, n);
        return this.each(function() {
            var n = e(this);
            if (n.appeared = !1, t) {
                var o = e(window),
                    r = function() {
                        if (n.is(":visible")) {
                            var e = o.scrollLeft(),
                                t = o.scrollTop(),
                                r = n.offset(),
                                s = r.left,
                                a = r.top,
                                l = i.accX,
                                c = i.accY,
                                u = n.height(),
                                d = o.height(),
                                p = n.width(),
                                h = o.width();
                            a + u + c >= t && t + d + c >= a && s + p + l >= e && e + h + l >= s ? n.appeared || n.trigger("appear", i.data) : n.appeared = !1
                        } else n.appeared = !1
                    },
                    s = function() {
                        if (n.appeared = !0, i.one) {
                            o.unbind("scroll", r);
                            var s = e.inArray(r, e.fn.appear.checks);
                            s >= 0 && e.fn.appear.checks.splice(s, 1)
                        }
                        t.apply(this, arguments)
                    };
                i.one ? n.one("appear", i.data, s) : n.bind("appear", i.data, s), o.scroll(r), e.fn.appear.checks.push(r), r()
            } else n.trigger("appear", i.data)
        })
    }, e.extend(e.fn.appear, {
        checks: [],
        timeout: null,
        checkAll: function() {
            var t = e.fn.appear.checks.length;
            if (t > 0)
                for (; t--;) e.fn.appear.checks[t]()
        },
        run: function() {
            e.fn.appear.timeout && clearTimeout(e.fn.appear.timeout), e.fn.appear.timeout = setTimeout(e.fn.appear.checkAll, 20)
        }
    }), e.each(["append", "prepend", "after", "before", "attr", "removeAttr", "addClass", "removeClass", "toggleClass", "remove", "css", "show", "hide"], function(t, n) {
        var i = e.fn[n];
        i && (e.fn[n] = function() {
            var t = i.apply(this, arguments);
            return e.fn.appear.run(), t
        })
    })
}(jQuery),
function(e) {
    "function" == typeof define && define.amd ? define(["jquery"], e) : e("object" == typeof exports ? require("jquery") : jQuery)
}(function(e) {
    var t = function(n, i) {
        this.$element = e(n), this.options = e.extend({}, t.DEFAULTS, this.dataOptions(), i), this.init()
    };
    t.DEFAULTS = {
        from: 0,
        to: 0,
        speed: 1e3,
        refreshInterval: 100,
        decimals: 0,
        formatter: function(e, t) {
            return e.toFixed(t.decimals)
        },
        onUpdate: null,
        onComplete: null
    }, t.prototype.init = function() {
        this.value = this.options.from, this.loops = Math.ceil(this.options.speed / this.options.refreshInterval), this.loopCount = 0, this.increment = (this.options.to - this.options.from) / this.loops
    }, t.prototype.dataOptions = function() {
        var e = {
                from: this.$element.data("from"),
                to: this.$element.data("to"),
                speed: this.$element.data("speed"),
                refreshInterval: this.$element.data("refresh-interval"),
                decimals: this.$element.data("decimals")
            },
            t = Object.keys(e);
        for (var n in t) {
            var i = t[n];
            void 0 === e[i] && delete e[i]
        }
        return e
    }, t.prototype.update = function() {
        this.value += this.increment, this.loopCount++, this.render(), "function" == typeof this.options.onUpdate && this.options.onUpdate.call(this.$element, this.value), this.loopCount >= this.loops && (clearInterval(this.interval), this.value = this.options.to, "function" == typeof this.options.onComplete && this.options.onComplete.call(this.$element, this.value))
    }, t.prototype.render = function() {
        var e = this.options.formatter.call(this.$element, this.value, this.options);
        this.$element.text(e)
    }, t.prototype.restart = function() {
        this.stop(), this.init(), this.start()
    }, t.prototype.start = function() {
        this.stop(), this.render(), this.interval = setInterval(this.update.bind(this), this.options.refreshInterval)
    }, t.prototype.stop = function() {
        this.interval && clearInterval(this.interval)
    }, t.prototype.toggle = function() {
        this.interval ? this.stop() : this.start()
    }, e.fn.countTo = function(n) {
        return this.each(function() {
            var i = e(this),
                o = i.data("countTo"),
                r = "object" == typeof n ? n : {},
                s = "string" == typeof n ? n : "start";
            (!o || "object" == typeof n) && (o && o.stop(), i.data("countTo", o = new t(this, r))), o[s].call(o)
        })
    }
}),
function(e) {
    "function" == typeof define && define.amd ? define(["jquery"], e) : e("object" == typeof module && module.exports ? require("jquery") : jQuery)
}(function(e) {
    function t(t, n) {
        var o = e(this);
        if (this.value === o.attr(s ? "placeholder-x" : "placeholder") && o.hasClass(p.customClass))
            if (this.value = "", o.removeClass(p.customClass), o.data("placeholder-password")) {
                if (o = o.hide().nextAll('input[type="password"]:first').show().attr("id", o.removeAttr("id").data("placeholder-id")), !0 === t) return o[0].value = n, n;
                o.focus()
            } else this == i() && this.select()
    }

    function n(n) {
        var i, o, r, a, l = e(this),
            c = this.id;
        if (!n || "blur" !== n.type || !l.hasClass(p.customClass))
            if ("" === this.value) {
                if ("password" === this.type) {
                    if (!l.data("placeholder-textinput")) {
                        try {
                            i = l.clone().prop({
                                type: "text"
                            })
                        } catch (t) {
                            i = e("<input>").attr(e.extend((o = this, r = {}, a = /^jQuery\d+$/, e.each(o.attributes, function(e, t) {
                                t.specified && !a.test(t.name) && (r[t.name] = t.value)
                            }), r), {
                                type: "text"
                            }))
                        }
                        i.removeAttr("name").data({
                            "placeholder-enabled": !0,
                            "placeholder-password": l,
                            "placeholder-id": c
                        }).bind("focus.placeholder", t), l.data({
                            "placeholder-textinput": i,
                            "placeholder-id": c
                        }).before(i)
                    }
                    this.value = "", l = l.removeAttr("id").hide().prevAll('input[type="text"]:first').attr("id", l.data("placeholder-id")).show()
                } else {
                    var u = l.data("placeholder-password");
                    u && (u[0].value = "", l.attr("id", l.data("placeholder-id")).show().nextAll('input[type="password"]:last').hide().removeAttr("id"))
                }
                l.addClass(p.customClass), l[0].value = l.attr(s ? "placeholder-x" : "placeholder")
            } else l.removeClass(p.customClass)
    }

    function i() {
        try {
            return document.activeElement
        } catch (e) {}
    }
    var o, r, s = !1,
        a = "[object OperaMini]" === Object.prototype.toString.call(window.operamini),
        l = "placeholder" in document.createElement("input") && !a && !s,
        c = "placeholder" in document.createElement("textarea") && !a && !s,
        u = e.valHooks,
        d = e.propHooks,
        p = {};
    l && c ? ((r = e.fn.placeholder = function() {
        return this
    }).input = !0, r.textarea = !0) : ((r = e.fn.placeholder = function(i) {
        return p = e.extend({}, {
            customClass: "placeholder"
        }, i), this.filter((l ? "textarea" : ":input") + "[" + (s ? "placeholder-x" : "placeholder") + "]").not("." + p.customClass).not(":radio, :checkbox, [type=hidden]").bind({
            "focus.placeholder": t,
            "blur.placeholder": n
        }).data("placeholder-enabled", !0).trigger("blur.placeholder")
    }).input = l, r.textarea = c, o = {
        get: function(t) {
            var n = e(t),
                i = n.data("placeholder-password");
            return i ? i[0].value : n.data("placeholder-enabled") && n.hasClass(p.customClass) ? "" : t.value
        },
        set: function(o, r) {
            var s, a, l = e(o);
            return "" !== r && (s = l.data("placeholder-textinput"), a = l.data("placeholder-password"), s ? (t.call(s[0], !0, r) || (o.value = r), s[0].value = r) : a && (t.call(o, !0, r) || (a[0].value = r), o.value = r)), l.data("placeholder-enabled") ? ("" === r ? (o.value = r, o != i() && n.call(o)) : (l.hasClass(p.customClass) && t.call(o), o.value = r), l) : (o.value = r, l)
        }
    }, l || (u.input = o, d.value = o), c || (u.textarea = o, d.value = o), e(function() {
        e(document).delegate("form", "submit.placeholder", function() {
            var i = e("." + p.customClass, this).each(function() {
                t.call(this, !0, "")
            });
            setTimeout(function() {
                i.each(n)
            }, 10)
        })
    }), e(window).bind("beforeunload.placeholder", function() {
        var t = !0;
        try {
            "javascript:void(0)" === document.activeElement.toString() && (t = !1)
        } catch (e) {}
        t && e("." + p.customClass).each(function() {
            this.value = ""
        })
    }))
}),
function(e) {
    var t = !1;
    if ("function" == typeof define && define.amd && (define(e), t = !0), "object" == typeof exports && (module.exports = e(), t = !0), !t) {
        var n = window.Cookies,
            i = window.Cookies = e();
        i.noConflict = function() {
            return window.Cookies = n, i
        }
    }
}(function() {
    function e() {
        for (var e = 0, t = {}; e < arguments.length; e++) {
            var n = arguments[e];
            for (var i in n) t[i] = n[i]
        }
        return t
    }
    return function t(n) {
        function i(t, o, r) {
            var s;
            if ("undefined" != typeof document) {
                if (arguments.length > 1) {
                    if ("number" == typeof(r = e({
                            path: "/"
                        }, i.defaults, r)).expires) {
                        var a = new Date;
                        a.setMilliseconds(a.getMilliseconds() + 864e5 * r.expires), r.expires = a
                    }
                    r.expires = r.expires ? r.expires.toUTCString() : "";
                    try {
                        s = JSON.stringify(o), /^[\{\[]/.test(s) && (o = s)
                    } catch (e) {}
                    o = n.write ? n.write(o, t) : encodeURIComponent(o + "").replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g, decodeURIComponent), t = (t = (t = encodeURIComponent(t + "")).replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent)).replace(/[\(\)]/g, escape);
                    var l = "";
                    for (var c in r) r[c] && (l += "; " + c, !0 !== r[c] && (l += "=" + r[c]));
                    return document.cookie = t + "=" + o + l
                }
                t || (s = {});
                for (var u = document.cookie ? document.cookie.split("; ") : [], d = /(%[0-9A-Z]{2})+/g, p = 0; p < u.length; p++) {
                    var h = u[p].split("="),
                        f = h.slice(1).join("=");
                    this.json || '"' !== f.charAt(0) || (f = f.slice(1, -1));
                    try {
                        var g = h[0].replace(d, decodeURIComponent);
                        if (f = n.read ? n.read(f, g) : n(f, g) || f.replace(d, decodeURIComponent), this.json) try {
                            f = JSON.parse(f)
                        } catch (e) {}
                        if (t === g) {
                            s = f;
                            break
                        }
                        t || (s[g] = f)
                    } catch (e) {}
                }
                return s
            }
        }
        return i.set = i, i.get = function(e) {
            return i.call(i, e)
        }, i.getJSON = function() {
            return i.apply({
                json: !0
            }, [].slice.call(arguments))
        }, i.defaults = {}, i.remove = function(t, n) {
            i(t, "", e(n, {
                expires: -1
            }))
        }, i.withConverter = t, i
    }(function() {})
});
var App = function() {
        var e, t, n, i, o, r, s, a, l, c, u = function() {
                e = jQuery("html"), t = jQuery("body"), n = jQuery("#page-container"), i = jQuery("#sidebar"), o = jQuery("#sidebar-scroll"), r = jQuery("#side-overlay"), s = jQuery("#side-overlay-scroll"), a = jQuery("#header-navbar"), l = jQuery("#main-container"), c = jQuery("#page-footer"), jQuery('[data-toggle="tooltip"], .js-tooltip').tooltip({
                    container: "body",
                    animation: !1
                }), jQuery('[data-toggle="popover"], .js-popover').popover({
                    container: "body",
                    animation: !0,
                    trigger: "hover"
                }), jQuery('[data-toggle="tabs"] a, .js-tabs a').click(function(e) {
                    e.preventDefault(), jQuery(this).tab("show")
                }), jQuery(".form-control").placeholder()
            },
            d = function() {
                var t;
                l.length && (p(), jQuery(window).on("resize orientationchange", function() {
                    clearTimeout(t), t = setTimeout(function() {
                        p()
                    }, 150)
                })), h("init"), n.hasClass("header-navbar-fixed") && n.hasClass("header-navbar-transparent") && jQuery(window).on("scroll", function() {
                    jQuery(this).scrollTop() > 20 ? n.addClass("header-navbar-scroll") : n.removeClass("header-navbar-scroll")
                }), jQuery('[data-toggle="layout"]').on("click", function() {
                    var t = jQuery(this);
                    f(t.data("action")), e.hasClass("no-focus") && t.blur()
                })
            },
            p = function() {
                var e = jQuery(window).height(),
                    t = a.outerHeight(),
                    i = c.outerHeight();
                n.hasClass("header-navbar-fixed") ? l.css("min-height", e - i) : l.css("min-height", e - (t + i))
            },
            h = function(e) {
                var t, a = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
                "init" === e ? (h(), jQuery(window).on("resize orientationchange", function() {
                    clearTimeout(t), t = setTimeout(function() {
                        h()
                    }, 150)
                })) : a > 991 && n.hasClass("side-scroll") ? (jQuery(i).scrollLock("disable"), jQuery(r).scrollLock("disable"), o.length && !o.parent(".slimScrollDiv").length ? o.slimScroll({
                    height: i.outerHeight(),
                    color: "#fff",
                    size: "5px",
                    opacity: .35,
                    wheelStep: 15,
                    distance: "2px",
                    railVisible: !1,
                    railOpacity: 1
                }) : o.add(o.parent()).css("height", i.outerHeight()), s.length && !s.parent(".slimScrollDiv").length ? s.slimScroll({
                    height: r.outerHeight(),
                    color: "#000",
                    size: "5px",
                    opacity: .35,
                    wheelStep: 15,
                    distance: "2px",
                    railVisible: !1,
                    railOpacity: 1
                }) : s.add(s.parent()).css("height", r.outerHeight())) : (jQuery(i).scrollLock("enable"), jQuery(r).scrollLock("enable"), o.length && o.parent(".slimScrollDiv").length && (o.slimScroll({
                    destroy: !0
                }), o.attr("style", "")), s.length && s.parent(".slimScrollDiv").length && (s.slimScroll({
                    destroy: !0
                }), s.attr("style", "")))
            },
            f = function(e) {
                var t = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
                switch (e) {
                    case "sidebar_pos_toggle":
                        n.toggleClass("sidebar-l sidebar-r");
                        break;
                    case "sidebar_pos_left":
                        n.removeClass("sidebar-r").addClass("sidebar-l");
                        break;
                    case "sidebar_pos_right":
                        n.removeClass("sidebar-l").addClass("sidebar-r");
                        break;
                    case "sidebar_toggle":
                        t > 991 ? n.toggleClass("sidebar-o") : n.toggleClass("sidebar-o-xs");
                        break;
                    case "sidebar_open":
                        t > 991 ? n.addClass("sidebar-o") : n.addClass("sidebar-o-xs");
                        break;
                    case "sidebar_close":
                        t > 991 ? n.removeClass("sidebar-o") : n.removeClass("sidebar-o-xs");
                        break;
                    case "sidebar_mini_toggle":
                        t > 991 && n.toggleClass("sidebar-mini");
                        break;
                    case "sidebar_mini_on":
                        t > 991 && n.addClass("sidebar-mini");
                        break;
                    case "sidebar_mini_off":
                        t > 991 && n.removeClass("sidebar-mini");
                        break;
                    case "side_overlay_toggle":
                        n.toggleClass("side-overlay-o");
                        break;
                    case "side_overlay_open":
                        n.addClass("side-overlay-o");
                        break;
                    case "side_overlay_close":
                        n.removeClass("side-overlay-o");
                        break;
                    case "side_overlay_hoverable_toggle":
                        n.toggleClass("side-overlay-hover");
                        break;
                    case "side_overlay_hoverable_on":
                        n.addClass("side-overlay-hover");
                        break;
                    case "side_overlay_hoverable_off":
                        n.removeClass("side-overlay-hover");
                        break;
                    case "header_fixed_toggle":
                        n.toggleClass("header-navbar-fixed");
                        break;
                    case "header_fixed_on":
                        n.addClass("header-navbar-fixed");
                        break;
                    case "header_fixed_off":
                        n.removeClass("header-navbar-fixed");
                        break;
                    case "side_scroll_toggle":
                        n.toggleClass("side-scroll"), h();
                        break;
                    case "side_scroll_on":
                        n.addClass("side-scroll"), h();
                        break;
                    case "side_scroll_off":
                        n.removeClass("side-scroll"), h();
                        break;
                    default:
                        return !1
                }
            },
            g = function() {
                jQuery('[data-toggle="nav-submenu"]').on("click", function(t) {
                    var n = jQuery(this),
                        i = n.parent("li");
                    return i.hasClass("open") ? i.removeClass("open") : (n.closest("ul").find("> li").removeClass("open"), i.addClass("open")), e.hasClass("no-focus") && n.blur(), !1
                })
            },
            m = function() {
                v(!1, "init"), jQuery('[data-toggle="block-option"]').on("click", function() {
                    v(jQuery(this).closest(".block"), jQuery(this).data("action"))
                })
            },
            v = function(e, t) {
                var n = "si si-size-fullscreen",
                    i = "si si-size-actual",
                    o = "si si-arrow-up",
                    r = "si si-arrow-down";
                if ("init" === t) jQuery('[data-toggle="block-option"][data-action="fullscreen_toggle"]').each(function() {
                    jQuery(this).html('<i class="' + (jQuery(this).closest(".block").hasClass("block-opt-fullscreen") ? i : n) + '"></i>')
                }), jQuery('[data-toggle="block-option"][data-action="content_toggle"]').each(function() {
                    var e = jQuery(this);
                    e.html('<i class="' + (e.closest(".block").hasClass("block-opt-hidden") ? r : o) + '"></i>')
                });
                else {
                    var s = e instanceof jQuery ? e : jQuery(e);
                    if (s.length) {
                        var a = jQuery('[data-toggle="block-option"][data-action="fullscreen_toggle"]', s),
                            l = jQuery('[data-toggle="block-option"][data-action="content_toggle"]', s);
                        switch (t) {
                            case "fullscreen_toggle":
                                s.toggleClass("block-opt-fullscreen"), s.hasClass("block-opt-fullscreen") ? jQuery(s).scrollLock("enable") : jQuery(s).scrollLock("disable"), a.length && (s.hasClass("block-opt-fullscreen") ? jQuery("i", a).removeClass(n).addClass(i) : jQuery("i", a).removeClass(i).addClass(n));
                                break;
                            case "fullscreen_on":
                                s.addClass("block-opt-fullscreen"), jQuery(s).scrollLock("enable"), a.length && jQuery("i", a).removeClass(n).addClass(i);
                                break;
                            case "fullscreen_off":
                                s.removeClass("block-opt-fullscreen"), jQuery(s).scrollLock("disable"), a.length && jQuery("i", a).removeClass(i).addClass(n);
                                break;
                            case "content_toggle":
                                s.toggleClass("block-opt-hidden"), l.length && (s.hasClass("block-opt-hidden") ? jQuery("i", l).removeClass(o).addClass(r) : jQuery("i", l).removeClass(r).addClass(o));
                                break;
                            case "content_hide":
                                s.addClass("block-opt-hidden"), l.length && jQuery("i", l).removeClass(o).addClass(r);
                                break;
                            case "content_show":
                                s.removeClass("block-opt-hidden"), l.length && jQuery("i", l).removeClass(r).addClass(o);
                                break;
                            case "refresh_toggle":
                                s.toggleClass("block-opt-refresh"), jQuery('[data-toggle="block-option"][data-action="refresh_toggle"][data-action-mode="demo"]', s).length && setTimeout(function() {
                                    s.removeClass("block-opt-refresh")
                                }, 2e3);
                                break;
                            case "state_loading":
                                s.addClass("block-opt-refresh");
                                break;
                            case "state_normal":
                                s.removeClass("block-opt-refresh");
                                break;
                            case "close":
                                s.hide();
                                break;
                            case "open":
                                s.show();
                                break;
                            default:
                                return !1
                        }
                    }
                }
            },
            y = function() {
                jQuery(".form-material.floating > .form-control").each(function() {
                    var e = jQuery(this),
                        t = e.parent(".form-material");
                    setTimeout(function() {
                        e.val() && t.addClass("open")
                    }, 150), e.on("change", function() {
                        e.val() ? t.addClass("open") : t.removeClass("open")
                    })
                })
            },
            b = function() {
                var e = jQuery("#css-theme"),
                    t = !!n.hasClass("enable-cookies");
                if (t) {
                    var i = Cookies.get("colorTheme") || !1;
                    i && ("default" === i ? e.length && e.remove() : e.length ? e.attr("href", i) : jQuery("#css-main").after('<link rel="stylesheet" id="css-theme" href="' + i + '">')), e = jQuery("#css-theme")
                }
                jQuery('[data-toggle="theme"][data-theme="' + (e.length ? e.attr("href") : "default") + '"]').parent("li").addClass("active"), jQuery('[data-toggle="theme"]').on("click", function() {
                    var n = jQuery(this).data("theme");
                    jQuery('[data-toggle="theme"]').parent("li").removeClass("active"), jQuery('[data-toggle="theme"][data-theme="' + n + '"]').parent("li").addClass("active"), "default" === n ? e.length && e.remove() : e.length ? e.attr("href", n) : jQuery("#css-main").after('<link rel="stylesheet" id="css-theme" href="' + n + '">'), e = jQuery("#css-theme"), t && Cookies.set("colorTheme", n, {
                        expires: 7
                    })
                })
            },
            x = function() {
                jQuery('[data-toggle="scroll-to"]').on("click", function() {
                    var e = jQuery(this),
                        t = e.data("target"),
                        i = e.data("speed") || 1e3,
                        o = a.length && n.hasClass("header-navbar-fixed") ? a.outerHeight() : 0;
                    jQuery("html, body").animate({
                        scrollTop: jQuery(t).offset().top - o
                    }, i)
                })
            },
            w = function() {
                jQuery('[data-toggle="class-toggle"]').on("click", function() {
                    var t = jQuery(this);
                    jQuery(t.data("target").toString()).toggleClass(t.data("class").toString()), e.hasClass("no-focus") && t.blur()
                })
            },
            C = function() {
                var e = new Date,
                    t = jQuery(".js-year-copy"),
                    n = t.length > 0 && t.html().length > 0 ? t.html() : e.getFullYear();
                parseInt(n) >= e.getFullYear() ? t.text(e.getFullYear()) : t.text(n + "-" + e.getFullYear().toString().substr(2, 2))
            },
            k = function(e) {
                var n = jQuery("#page-loader");
                return "show" === e ? n.length ? n.fadeIn(250) : t.prepend('<div id="page-loader"></div>') : "hide" === e && n.length && n.fadeOut(250), !1
            },
            T = function(e, t) {
                t ? e.closest("tr").addClass("active") : e.closest("tr").removeClass("active")
            };
        return {
            init: function(e) {
                switch (e) {
                    case "uiInit":
                        u();
                        break;
                    case "uiLayout":
                        d();
                        break;
                    case "uiNav":
                        g();
                        break;
                    case "uiBlocks":
                        m();
                        break;
                    case "uiForms":
                        y();
                        break;
                    case "uiHandleTheme":
                        b();
                        break;
                    case "uiToggleClass":
                        w();
                        break;
                    case "uiScrollTo":
                        x();
                        break;
                    case "uiYearCopy":
                        C();
                        break;
                    case "uiLoader":
                        k("hide");
                        break;
                    default:
                        u(), d(), g(), m(), y(), b(), w(), x(), C(), k("hide")
                }
            },
            layout: function(e) {
                f(e)
            },
            loader: function(e) {
                k(e)
            },
            blocks: function(e, t) {
                v(e, t)
            },
            initHelper: function(t) {
                switch (t) {
                    case "print-page":
                        i = n.prop("class"), n.prop("class", ""), window.print(), n.prop("class", i);
                        break;
                    case "table-tools":
                        jQuery(".js-table-sections").each(function() {
                            var e = jQuery(this);
                            jQuery(".js-table-sections-header > tr", e).on("click", function(t) {
                                var n = jQuery(this).parent("tbody");
                                n.hasClass("open") || jQuery("tbody", e).removeClass("open"), n.toggleClass("open")
                            })
                        }), jQuery(".js-table-checkable").each(function() {
                            var e = jQuery(this);
                            jQuery("thead input:checkbox", e).on("click", function() {
                                var t = jQuery(this).prop("checked");
                                jQuery("tbody input:checkbox", e).each(function() {
                                    var e = jQuery(this);
                                    e.prop("checked", t), T(e, t)
                                })
                            }), jQuery("tbody input:checkbox", e).on("click", function() {
                                var e = jQuery(this);
                                T(e, e.prop("checked"))
                            }), jQuery("tbody > tr", e).on("click", function(e) {
                                if ("checkbox" !== e.target.type && "button" !== e.target.type && "a" !== e.target.tagName.toLowerCase() && !jQuery(e.target).parent("label").length) {
                                    var t = jQuery("input:checkbox", this),
                                        n = t.prop("checked");
                                    t.prop("checked", !n), T(t, !n)
                                }
                            })
                        });
                        break;
                    case "appear":
                        jQuery('[data-toggle="appear"]').each(function() {
                            var t = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth,
                                n = jQuery(this);
                            n.appear(function() {
                                setTimeout(function() {
                                    n.removeClass("visibility-hidden").addClass(n.data("class") || "animated fadeIn")
                                }, e.hasClass("ie9") || t < 992 ? 0 : n.data("timeout") || 0)
                            }, {
                                accY: n.data("offset") || 0
                            })
                        });
                        break;
                    case "appear-countTo":
                        jQuery('[data-toggle="countTo"]').each(function() {
                            var e = jQuery(this),
                                t = e.data("after"),
                                n = e.data("before");
                            e.appear(function() {
                                e.countTo({
                                    speed: e.data("speed") || 1500,
                                    refreshInterval: e.data("interval") || 15,
                                    onComplete: function() {
                                        t ? e.html(e.html() + t) : n && e.html(n + e.html())
                                    }
                                })
                            })
                        });
                        break;
                    case "slimscroll":
                        jQuery('[data-toggle="slimscroll"]').each(function() {
                            var e = jQuery(this);
                            e.slimScroll({
                                height: e.data("height") || "200px",
                                size: e.data("size") || "5px",
                                position: e.data("position") || "right",
                                color: e.data("color") || "#000",
                                alwaysVisible: !!e.data("always-visible"),
                                railVisible: !!e.data("rail-visible"),
                                railColor: e.data("rail-color") || "#999",
                                railOpacity: e.data("rail-opacity") || .3
                            })
                        });
                        break;
                    case "magnific-popup":
                        jQuery(".js-gallery").each(function() {
                            jQuery(this).magnificPopup({
                                delegate: "a.img-link",
                                type: "image",
                                gallery: {
                                    enabled: !0
                                }
                            })
                        }), jQuery(".js-gallery-advanced").each(function() {
                            jQuery(this).magnificPopup({
                                delegate: "a.img-lightbox",
                                type: "image",
                                gallery: {
                                    enabled: !0
                                }
                            })
                        });
                        break;
                    case "ckeditor":
                        CKEDITOR.disableAutoInline = !0, jQuery("#js-ckeditor-inline").length && CKEDITOR.inline("js-ckeditor-inline"), jQuery("#js-ckeditor").length && CKEDITOR.replace("js-ckeditor");
                        break;
                    case "summernote":
                        jQuery(".js-summernote-air").summernote({
                            airMode: !0
                        }), jQuery(".js-summernote").summernote({
                            height: 350,
                            minHeight: null,
                            maxHeight: null
                        });
                        break;
                    case "slick":
                        jQuery(".js-slider").each(function() {
                            var e = jQuery(this);
                            e.slick({
                                arrows: e.data("slider-arrows") || !1,
                                dots: e.data("slider-dots") || !1,
                                slidesToShow: e.data("slider-num") || 1,
                                autoplay: e.data("slider-autoplay") || !1,
                                autoplaySpeed: e.data("slider-autoplay-speed") || 3e3
                            })
                        });
                        break;
                    case "datepicker":
                        jQuery(".js-datepicker").add(".input-daterange").each(function() {
                            var e = jQuery(this);
                            e.datepicker({
                                weekStart: 1,
                                autoclose: !0,
                                todayHighlight: !0,
                                orientation: e.data("orientation") || "auto"
                            })
                        });
                        break;
                    case "colorpicker":
                        jQuery(".js-colorpicker").each(function() {
                            var e = jQuery(this);
                            e.colorpicker({
                                format: e.data("colorpicker-mode") || "hex",
                                inline: !!e.data("colorpicker-inline")
                            })
                        });
                        break;
                    case "tags-inputs":
                        jQuery(".js-tags-input").tagsInput({
                            height: "36px",
                            width: "100%",
                            defaultText: "Add tag",
                            removeWithBackspace: !0,
                            delimiter: [","]
                        });
                        break;
                    case "masked-inputs":
                        jQuery(".js-masked-date").mask("99/99/9999"), jQuery(".js-masked-date-dash").mask("99-99-9999"), jQuery(".js-masked-phone").mask("(999) 999-9999"), jQuery(".js-masked-phone-ext").mask("(999) 999-9999? x99999"), jQuery(".js-masked-taxid").mask("99-9999999"), jQuery(".js-masked-ssn").mask("999-99-9999"), jQuery(".js-masked-pkey").mask("a*-999-a999"), jQuery(".js-masked-time").mask("99:99");
                        break;
                    case "select2":
                        jQuery(".js-select2").select2();
                        break;
                    case "highlightjs":
                        hljs.initHighlightingOnLoad();
                        break;
                    case "notify":
                        jQuery(".js-notify").on("click", function() {
                            var e = jQuery(this);
                            jQuery.notify({
                                icon: e.data("notify-icon") || "",
                                message: e.data("notify-message"),
                                url: e.data("notify-url") || ""
                            }, {
                                element: "body",
                                type: e.data("notify-type") || "info",
                                allow_dismiss: !0,
                                newest_on_top: !0,
                                showProgressbar: !1,
                                placement: {
                                    from: e.data("notify-from") || "top",
                                    align: e.data("notify-align") || "right"
                                },
                                offset: 20,
                                spacing: 10,
                                z_index: 1033,
                                delay: 5e3,
                                timer: 1e3,
                                animate: {
                                    enter: "animated fadeIn",
                                    exit: "animated fadeOutDown"
                                }
                            })
                        });
                        break;
                    case "draggable-items":
                        jQuery(".js-draggable-items > .draggable-column").sortable({
                            connectWith: ".draggable-column",
                            items: ".draggable-item",
                            dropOnEmpty: !0,
                            opacity: .75,
                            handle: ".draggable-handler",
                            placeholder: "draggable-placeholder",
                            tolerance: "pointer",
                            start: function(e, t) {
                                t.placeholder.css({
                                    height: t.item.outerHeight(),
                                    "margin-bottom": t.item.css("margin-bottom")
                                })
                            }
                        });
                        break;
                    case "easy-pie-chart":
                        jQuery(".js-pie-chart").each(function() {
                            var e = jQuery(this);
                            e.easyPieChart({
                                barColor: e.data("bar-color") || "#777777",
                                trackColor: e.data("track-color") || "#eeeeee",
                                lineWidth: e.data("line-width") || 3,
                                size: e.data("size") || "80",
                                animate: 750,
                                scaleColor: e.data("scale-color") || !1
                            })
                        });
                        break;
                    case "maxlength":
                        jQuery(".js-maxlength").each(function() {
                            var e = jQuery(this);
                            e.maxlength({
                                alwaysShow: !!e.data("always-show"),
                                threshold: e.data("threshold") || 10,
                                warningClass: e.data("warning-class") || "label label-warning",
                                limitReachedClass: e.data("limit-reached-class") || "label label-danger",
                                placement: e.data("placement") || "bottom",
                                preText: e.data("pre-text") || "",
                                separator: e.data("separator") || "/",
                                postText: e.data("post-text") || ""
                            })
                        });
                        break;
                    case "datetimepicker":
                        jQuery(".js-datetimepicker").each(function() {
                            var e = jQuery(this);
                            e.datetimepicker({
                                format: e.data("format") || !1,
                                useCurrent: e.data("use-current") || !1,
                                locale: moment.locale("" + (e.data("locale") || "")),
                                showTodayButton: e.data("show-today-button") || !1,
                                showClear: e.data("show-clear") || !1,
                                showClose: e.data("show-close") || !1,
                                sideBySide: e.data("side-by-side") || !1,
                                inline: e.data("inline") || !1,
                                icons: {
                                    time: "si si-clock",
                                    date: "si si-calendar",
                                    up: "si si-arrow-up",
                                    down: "si si-arrow-down",
                                    previous: "si si-arrow-left",
                                    next: "si si-arrow-right",
                                    today: "si si-size-actual",
                                    clear: "si si-trash",
                                    close: "si si-close"
                                }
                            })
                        });
                        break;
                    case "rangeslider":
                        jQuery(".js-rangeslider").each(function() {
                            jQuery(this).ionRangeSlider({
                                input_values_separator: ";"
                            })
                        });
                        break;
                    case "simplemde":
                        jQuery(".js-simplemde").each(function() {
                            var e = jQuery(this);
                            new SimpleMDE({
                                element: e[0]
                            })
                        });
                        break;
                    case "masonry":
                        ! function() {
                            var e = jQuery(".js-masonry");
                            l.css("overflow-x", "visible"), l.find(".row").css("margin", "0 -14px"), jQuery(".js-masonry-item > div").css("min-width", "282px");
                            var t = e.imagesLoaded(function() {
                                t.masonry({
                                    itemSelector: ".js-masonry-item",
                                    columnWidth: ".js-masonry-sizer",
                                    percentPosition: !0
                                })
                            })
                        }();
                        break;
                    case "autonumeric":
                        jQuery(".js-autonumeric-dollar").length > 0 && new AutoNumeric.multiple(".js-autonumeric-dollar", AutoNumeric.getPredefinedOptions().NorthAmerican), jQuery(".js-autonumeric-euro").length > 0 && new AutoNumeric.multiple(".js-autonumeric-euro", AutoNumeric.getPredefinedOptions().French), jQuery(".js-autonumeric-pound").length > 0 && new AutoNumeric.multiple(".js-autonumeric-pound", AutoNumeric.getPredefinedOptions().British), jQuery(".js-autonumeric-franc").length > 0 && new AutoNumeric.multiple(".js-autonumeric-franc", AutoNumeric.getPredefinedOptions().Swiss), jQuery(".js-autonumeric-yen").length > 0 && new AutoNumeric.multiple(".js-autonumeric-yen", AutoNumeric.getPredefinedOptions().Japanese), jQuery(".js-autonumeric-yuan").length > 0 && new AutoNumeric.multiple(".js-autonumeric-yuan", AutoNumeric.getPredefinedOptions().Chinese), jQuery(".js-autonumeric-brl").length > 0 && new AutoNumeric.multiple(".js-autonumeric-brl", AutoNumeric.getPredefinedOptions().Brazilian);
                        break;
                    default:
                        return !1
                }
                var i
            },
            initHelpers: function(e) {
                if (e instanceof Array)
                    for (var t in e) App.initHelper(e[t]);
                else App.initHelper(e)
            }
        }
    }(),
    OneUI = App;
jQuery(function() {
    "undefined" == typeof angular && App.init()
});