var tns = function() {
    function t() {
        for (var t, e, n, i = arguments[0] || {}, a = 1, r = arguments.length; a < r; a++)
            if (null !== (t = arguments[a]))
                for (e in t) n = t[e], i !== n && void 0 !== n && (i[e] = n);
        return i
    }

    function e(t) {
        return ["true", "false", "null"].indexOf(t) >= 0 ? JSON.parse(t) : t
    }

    function n(t, e) {
        return localStorage.setItem(t, e), e
    }

    function i() {
        var t = window.tnsId;
        return window.tnsId = t ? t + 1 : 1, "tns" + window.tnsId
    }

    function a(t) {
        var e = document.createElement("style");
        return t && e.setAttribute("media", t), document.querySelector("head").appendChild(e), e.sheet ? e.sheet : e.styleSheet
    }

    function r(t) {
        return ("insertRule" in t ? t.cssRules : t.rules).length
    }

    function o(t, e) {
        return Math.atan2(t, e) * (180 / Math.PI)
    }

    function s(t, e) {
        var n = !1,
            i = Math.abs(90 - Math.abs(t));
        return i >= 90 - e ? n = "horizontal" : i <= e && (n = "vertical"), n
    }

    function l(t, e) {
        return t.hasAttribute(e)
    }

    function c(t, e) {
        return t.getAttribute(e)
    }

    function u(t) {
        return void 0 !== t.item
    }

    function d(t, e) {
        if (t = u(t) || t instanceof Array ? t : [t], "[object Object]" === Object.prototype.toString.call(e))
            for (var n = t.length; n--;)
                for (var i in e) t[n].setAttribute(i, e[i])
    }

    function f(t, e) {
        t = u(t) || t instanceof Array ? t : [t], e = e instanceof Array ? e : [e];
        for (var n = e.length, i = t.length; i--;)
            for (var a = n; a--;) t[i].removeAttribute(e[a])
    }

    function v(t) {
        l(t, "hidden") || d(t, {
            hidden: ""
        })
    }

    function p(t) {
        l(t, "hidden") && f(t, "hidden")
    }

    function h(t) {
        return "boolean" == typeof t.complete ? t.complete : "number" == typeof t.naturalWidth ? 0 !== t.naturalWidth : void 0
    }

    function m(t) {
        for (var e = document.createElement("fakeelement"), n = (t.length, 0); n < t.length; n++) {
            var i = t[n];
            if (void 0 !== e.style[i]) return i
        }
        return !1
    }

    function y(t, e) {
        var n = !1;
        return /^Webkit/.test(t) ? n = "webkit" + e + "End" : /^O/.test(t) ? n = "o" + e + "End" : t && (n = e.toLowerCase() + "end"), n
    }

    function g(t, e) {
        for (var n in e) {
            var i = ("touchstart" === n || "touchmove" === n) && w;
            t.addEventListener(n, e[n], i)
        }
    }

    function b(t, e) {
        for (var n in e) {
            var i = ["touchstart", "touchmove"].indexOf(n) >= 0 && w;
            t.removeEventListener(n, e[n], i)
        }
    }

    function x() {
        return {
            topics: {},
            on: function(t, e) {
                this.topics[t] = this.topics[t] || [], this.topics[t].push(e)
            },
            off: function(t, e) {
                if (this.topics[t])
                    for (var n = 0; n < this.topics[t].length; n++)
                        if (this.topics[t][n] === e) {
                            this.topics[t].splice(n, 1);
                            break
                        }
            },
            emit: function(t, e) {
                this.topics[t] && this.topics[t].forEach(function(t) {
                    t(e)
                })
            }
        }
    }

    function T(t, e, n, i, a, r, o) {
        function s() {
            r -= l, u += d, t.style[e] = n + u + c + i, r > 0 ? setTimeout(s, l) : o()
        }
        var l = Math.min(r, 10),
            c = a.indexOf("%") >= 0 ? "%" : "px",
            a = a.replace(c, ""),
            u = Number(t.style[e].replace(n, "").replace(i, "").replace(c, "")),
            d = (a - u) / r * l;
        setTimeout(s, l)
    }
    Object.keys || (Object.keys = function(t) {
            var e = [];
            for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && e.push(n);
            return e
        }),
        function() {
            "use strict";
            "remove" in Element.prototype || (Element.prototype.remove = function() {
                this.parentNode && this.parentNode.removeChild(this)
            })
        }(),
        function() {
            "use strict";
            var t, e, n, i = window,
                a = document,
                r = Object,
                o = "length",
                s = "item contains add remove toggle toString toLocaleString".split(" "),
                l = s[2],
                c = s[3],
                u = s[4],
                d = "prototype",
                f = "defineProperty" in r || "__defineGetter__" in r[d] || null,
                v = function(t, e, n, i) {
                    r.defineProperty ? r.defineProperty(t, e, {
                        configurable: !1 === f || !!i,
                        get: n
                    }) : t.__defineGetter__(e, n)
                },
                p = function(t, e) {
                    var n = this,
                        i = [],
                        a = {},
                        d = 0,
                        f = 0,
                        p = function() {
                            if (d >= f)
                                for (; f < d; ++f) ! function(t) {
                                    v(n, t, function() {
                                        return h(), i[t]
                                    }, !1)
                                }(f)
                        },
                        h = function() {
                            var n, r, s = arguments,
                                l = /\s+/;
                            if (s[o])
                                for (r = 0; r < s[o]; ++r)
                                    if (l.test(s[r])) throw n = new SyntaxError('String "' + s[r] + '" contains an invalid character'), n.code = 5, n.name = "InvalidCharacterError", n;
                            for (i = ("" + t[e]).replace(/^\s+|\s+$/g, "").split(l), "" === i[0] && (i = []), a = {}, r = 0; r < i[o]; ++r) a[i[r]] = !0;
                            d = i[o], p()
                        };
                    return h(), v(n, o, function() {
                            return h(), d
                        }), n[s[6]] = n[s[5]] = function() {
                            return h(), i.join(" ")
                        }, n.item = function(t) {
                            return h(), i[t]
                        }, n.contains = function(t) {
                            return h(), !!a[t]
                        }, n[l] = function() {
                            h.apply(n, r = arguments);
                            for (var r, s, l = 0, c = r[o]; l < c; ++l) s = r[l], a[s] || (i.push(s), a[s] = !0);
                            d !== i[o] && (d = i[o] >>> 0, t[e] = i.join(" "), p())
                        }, n[c] = function() {
                            h.apply(n, r = arguments);
                            for (var r, s = {}, l = 0, c = []; l < r[o]; ++l) s[r[l]] = !0, delete a[r[l]];
                            for (l = 0; l < i[o]; ++l) s[i[l]] || c.push(i[l]);
                            i = c, d = c[o] >>> 0, t[e] = i.join(" "), p()
                        }, n[u] = function(t, e) {
                            return h.apply(n, [t]), void 0 !== e ? e ? (n[l](t), !0) : (n[c](t), !1) : a[t] ? (n[c](t), !1) : (n[l](t), !0)
                        },
                        function(t, e) {
                            if (e)
                                for (var n = 0; n < 7; ++n) e(t, s[n], {
                                    enumerable: !1
                                })
                        }(n, r.defineProperty), n
                },
                h = function(t, e, n) {
                    v(t[d], e, function() {
                        var t, i = this,
                            r = "__defineGetter__defineProperty" + e;
                        if (i[r]) return t;
                        if (i[r] = !0, !1 === f) {
                            for (var s, l = h.mirror = h.mirror || a.createElement("div"), c = l.childNodes, u = c[o], d = 0; d < u; ++d)
                                if (c[d]._R === i) {
                                    s = c[d];
                                    break
                                } s || (s = l.appendChild(a.createElement("div"))), t = p.call(s, i, n)
                        } else t = new p(i, n);
                        return v(i, e, function() {
                            return t
                        }), delete i[r], t
                    }, !0)
                };
            if (i.DOMTokenList) t = a.createElement("div").classList, d = i.DOMTokenList[d], t[l].apply(t, s), 2 > t[o] && (e = d[l], n = d[c], d[l] = function() {
                for (var t = 0, n = arguments; t < n[o]; ++t) e.call(this, n[t])
            }, d[c] = function() {
                for (var t = 0, e = arguments; t < e[o]; ++t) n.call(this, e[t])
            }), t[u]("List", !1) && (d[u] = function(t, e) {
                var n = this;
                return n[(e = void 0 === e ? !n.contains(t) : e) ? l : c](t), !!e
            });
            else {
                if (f) try {
                    v({}, "support")
                } catch (t) {
                    f = !1
                }
                p.polyfill = !0, i.DOMTokenList = p, h(i.Element, "classList", "className"), h(i.HTMLLinkElement, "relList", "rel"), h(i.HTMLAnchorElement, "relList", "rel"), h(i.HTMLAreaElement, "relList", "rel")
            }
        }();
    var E = function() {
            var t = document.styleSheets[0];
            return "insertRule" in t ? function(t, e, n, i) {
                t.insertRule(e + "{" + n + "}", i)
            } : "addRule" in t ? function(t, e, n, i) {
                t.addRule(e, n, i)
            } : void 0
        }(),
        C = !1;
    try {
        var L = Object.defineProperty({}, "passive", {
            get: function() {
                C = !0
            }
        });
        window.addEventListener("test", null, L)
    } catch (t) {}
    var w = !!C && {
            passive: !0
        },
        D = navigator.userAgent,
        O = localStorage;
    O.tnsApp ? O.tnsApp !== D && (O.tnsApp = D, ["tnsCalc", "tnsSubpixel", "tnsCSSMQ", "tnsTf", "tnsTsDu", "tnsTsDe", "tnsAnDu", "tnsAnDe", "tnsTsEn", "tnsAnEn"].forEach(function(t) {
        O.removeItem(t)
    })) : O.tnsApp = D;
    var A = document,
        M = window,
        N = {
            ENTER: 13,
            SPACE: 32,
            PAGEUP: 33,
            PAGEDOWN: 34,
            END: 35,
            HOME: 36,
            LEFT: 37,
            UP: 38,
            RIGHT: 39,
            DOWN: 40
        },
        P = e(O.tnsCalc || n("tnsCalc", function() {
            var t = document,
                e = t.body,
                n = t.createElement("div"),
                i = !1;
            e.appendChild(n);
            try {
                for (var a, r = ["calc(10px)", "-moz-calc(10px)", "-webkit-calc(10px)"], o = 0; o < 3; o++)
                    if (a = r[o], n.style.width = a, 10 === n.offsetWidth) {
                        i = a.replace("(10px)", "");
                        break
                    }
            } catch (t) {}
            return e.removeChild(n), i
        }())),
        k = e(O.tnsSubpixel || n("tnsSubpixel", function() {
            var t, e = document,
                n = e.body,
                i = e.createElement("div"),
                a = e.createElement("div");
            i.style.cssText = "width: 10px", a.style.cssText = "float: left; width: 5.5px; height: 10px;", t = a.cloneNode(!0), i.appendChild(a), i.appendChild(t), n.appendChild(i);
            var r = a.offsetTop !== t.offsetTop;
            return n.removeChild(i), r
        }())),
        S = e(O.tnsCSSMQ || n("tnsCSSMQ", function() {
            var t = document,
                e = t.body,
                n = t.createElement("div");
            n.className = "tns-mq-test", e.appendChild(n);
            var i = window.getComputedStyle ? window.getComputedStyle(n).position : n.currentStyle.position;
            return e.removeChild(n), "absolute" === i
        }())),
        W = e(O.tnsTf || n("tnsTf", m(["transform", "WebkitTransform", "MozTransform", "msTransform", "OTransform"]))),
        I = e(O.tnsTsDu || n("tnsTsDu", m(["transitionDuration", "WebkitTransitionDuration", "MozTransitionDuration", "OTransitionDuration"]))),
        H = e(O.tnsTsDe || n("tnsTsDe", m(["transitionDelay", "WebkitTransitionDelay", "MozTransitionDelay", "OTransitionDelay"]))),
        R = e(O.tnsAnDu || n("tnsAnDu", m(["animationDuration", "WebkitAnimationDuration", "MozAnimationDuration", "OAnimationDuration"]))),
        B = e(O.tnsAnDe || n("tnsAnDe", m(["animationDelay", "WebkitAnimationDelay", "MozAnimationDelay", "OAnimationDelay"]))),
        z = e(O.tnsTsEn || n("tnsTsEn", y(I, "Transition"))),
        j = e(O.tnsAnEn || n("tnsAnEn", y(R, "Animation")));
    return S || (k = !1),
        function(e) {
            function n(t) {
                var n = e[t];
                return !n && ee && te.indexOf(t) >= 0 && ee.forEach(function(e) {
                    Zt[e][t] && (n = !0)
                }), n
            }

            function u(t, n) {
                n = n ? n : $t;
                var i;
                if ("items" === t && u("fixedWidth")) i = Math.floor(n / (u("fixedWidth") + u("gutter")));
                else if ("slideBy" !== t || zt)
                    if ("edgePadding" !== t || zt)
                        if ("autoHeight" !== t || zt && "outer" !== ue) {
                            if (i = e[t], ee && te.indexOf(t) >= 0)
                                for (var a = 0, r = ee.length; a < r; a++) {
                                    var o = ee[a];
                                    if (!(n >= o)) break;
                                    t in Zt[o] && (i = Zt[o][t])
                                }
                        } else i = !0;
                else i = !1;
                else i = "page";
                return "items" === t && (i = Math.max(1, Math.min(Jt, i))), "slideBy" === t && "page" === i && (i = u("items")), i
            }

            function m(t) {
                return P ? P + "(" + 100 * t + "% / " + Ce + ")" : 100 * t / Ce + "%"
            }

            function y(t, e, n) {
                var i = "";
                if (t) {
                    var a = t;
                    e && (a += e), i = n ? "margin: 0px " + ($t % (n + e) + e) / 2 + "px" : Ut ? "margin: 0 " + t + "px 0 " + a + "px;" : "padding: " + a + "px 0 " + t + "px 0;"
                } else if (e && !n) {
                    var r = Ut ? "right" : "bottom";
                    i = "margin-" + r + ": -" + e + "px;"
                }
                return i
            }

            function C(t, e, n) {
                n = Math.min(Jt, n);
                return t ? (t + e) * Ce + "px" : P ? P + "(" + 100 * Ce + "% / " + n + ")" : 100 * Ce / n + "%"
            }

            function L(t, e, n) {
                n = Math.min(Jt, n);
                var i = "";
                if (Ut) {
                    if (i = "width:", t) i += t + e + "px";
                    else {
                        var a = zt ? Ce : Math.min(Jt, n);
                        i += P ? P + "(100% / " + a + ")" : 100 / a + "%"
                    }
                    i += Fe + ";"
                }
                return i
            }

            function w(t) {
                var e = "";
                if (t !== !1) {
                    e = (Ut ? "padding-" : "margin-") + (Ut ? "right" : "bottom") + ": " + t + "px;"
                }
                return e
            }

            function D(t) {
                t = t || M.event, clearTimeout(oe), oe = setTimeout(function() {
                    $t !== Vt.clientWidth && (O(), "outer" === ue && He.emit("outerResized", Wt(t)))
                }, 100)
            }

            function O() {
                var t = ne,
                    n = Me,
                    i = le,
                    a = _e;
                if ($t = Vt.clientWidth, qt = Xt.clientWidth, ee && (ne = G()), t !== ne || ve) {
                    var o = pe,
                        s = ge,
                        l = ve,
                        c = fe,
                        d = de,
                        f = ne > 0 ? Zt[ee[ne - 1]] : e;
                    if (le = u("items"), ce = u("slideBy"), _e = Jt <= le, le !== i && (Se = Ce - le - Pe, Bn()), _e !== a && _e && (Me = zt ? Ee : 0), t !== ne && (he = f.speed || u("speed"), fe = f.edgePadding || u("edgePadding"), de = f.gutter || u("gutter"), ve = f.fixedWidth || u("fixedWidth"), ve !== l && rt(), (ge = u("autoHeight")) !== s && (ge || (Xt.style.height = ""))), pe = !_e && (f.arrowKeys || u("arrowKeys")), pe !== o && (pe ? g(A, Ke) : b(A, Ke)), Je) {
                        var h = sn,
                            m = ln;
                        sn = !_e && (f.controls || u("controls")), ln = f.controlsText || u("controlsText"), sn !== h && (sn ? p(cn) : v(cn)), ln !== m && (nn.innerHTML = ln[0], an.innerHTML = ln[1])
                    }
                    if ($e) {
                        var x = dn;
                        dn = !_e && (f.nav || u("nav")), dn !== x && (dn ? (p(fn), St()) : v(fn))
                    }
                    if (tn) {
                        var T = Sn;
                        Sn = !_e && (f.touch || u("touch")), Sn !== T && zt && (Sn ? g(Kt, Ye) : b(Kt, Ye))
                    }
                    if (en) {
                        var D = Hn;
                        Hn = !_e && (f.mouseDrag || u("mouseDrag")), Hn !== D && zt && (Hn ? g(Kt, Qe) : b(Kt, Qe))
                    }
                    if (Ze) {
                        var O = bn,
                            M = Cn,
                            N = An,
                            P = En;
                        if (_e ? bn = Cn = An = !1 : (bn = f.autoplay || u("autoplay"), bn ? (Cn = f.autoplayHoverPause || u("autoplayHoverPause"), An = f.autoplayResetOnVisibility || u("autoplayResetOnVisibility")) : Cn = An = !1), En = f.autoplayText || u("autoplayText"), xn = f.autoplayTimeout || u("autoplayTimeout"), bn !== O && (bn ? (Ln && p(Ln), wn || pt()) : (Ln && v(Ln), wn && ht())), Cn !== M && (Cn ? g(Kt, Ve) : b(Kt, Ve)), An !== N && (An ? g(A, Xe) : b(A, Xe)), Ln && En !== P) {
                            var k = bn ? 1 : 0,
                                W = Ln.innerHTML,
                                I = W.length - P[k].length;
                            W.substring(I) === P[k] && (Ln.innerHTML = W.substring(0, I) + En[k])
                        }
                    }
                    if (!S) {
                        fe === c && de === d || (Xt.style.cssText = y(fe, de, ve)), zt && Ut && (ve !== l || de !== d || le !== i) && (Kt.style.width = C(ve, de, le));
                        var H = L(ve, de, le);
                        de !== d && (H += w(de)), H.length > 0 && (be.removeRule(r(be) - 1), E(be, "#" + Ge + " .tns-item", H, r(be))), ve || Me !== n || st(0)
                    }
                    Me !== n && (He.emit("indexChanged", Wt()), st(0), Ne = Me), le !== i && (U(), J(), nt(), St(), $(), navigator.msMaxTouchPoints && Q())
                }
                Ut || (Y(), Pt(), rt()), _(), V()
            }

            function G() {
                return ne = 0, ee.forEach(function(t, e) {
                    $t >= t && (ne = e + ie)
                }), ne
            }

            function _() {
                if (ve && Ee)
                    if (_e) {
                        if (!Qt[0].classList.contains("tns-transparent")) {
                            fe && (Xt.style.margin = "0");
                            for (var t = Ee; t--;) Qt[t].classList.add("tns-transparent"), Qt[Ce - t - 1].classList.add("tns-transparent")
                        }
                    } else if (fe && ($t <= ve + de ? "0px" !== Xt.style.margin && (Xt.style.margin = "0") : Xt.style.cssText = y(fe, de, ve)), Qt[0].classList.contains("tns-transparent"))
                    for (var t = Ee; t--;) Qt[t].classList.remove("tns-transparent"), Qt[Ce - t - 1].classList.remove("tns-transparent")
            }

            function F() {
                wn && (ht(), Dn = !0)
            }

            function q() {
                !wn && Dn && (pt(), Dn = !1)
            }

            function U() {
                if (xe) {
                    var t = Me,
                        e = Me + le;
                    for (fe && (t -= 1, e += 1); t < e; t++)[].forEach.call(Qt[t].querySelectorAll(".tns-lazy-img"), function(t) {
                        var e = {};
                        e[z] = function(t) {
                            t.stopPropagation()
                        }, g(t, e), t.classList.contains("loaded") || (t.src = c(t, "data-src"), t.classList.add("loaded"))
                    })
                }
            }

            function V() {
                if (ge) {
                    for (var t = [], e = Me; e < Me + le; e++)[].forEach.call(Qt[e].querySelectorAll("img"), function(e) {
                        t.push(e)
                    });
                    0 === t.length ? K() : X(t)
                }
            }

            function X(t) {
                t.forEach(function(e, n) {
                    h(e) && t.splice(n, 1)
                }), 0 === t.length ? K() : setTimeout(function() {
                    X(t)
                }, 16)
            }

            function K() {
                for (var t, e = [], n = Me; n < Me + le; n++) e.push(Qt[n].offsetHeight);
                t = Math.max.apply(null, e), Xt.style.height !== t && (I && it(he), Xt.style.height = t + "px")
            }

            function Y() {
                re = [0];
                for (var t, e = Qt[0].getBoundingClientRect().top, n = 1; n < Ce; n++) t = Qt[n].getBoundingClientRect().top, re.push(t - e)
            }

            function Q() {
                Vt.style.msScrollSnapPointsX = "snapInterval(0%, " + 100 / le + "%)"
            }

            function J() {
                for (var t = Ce; t--;) {
                    var e = Qt[t];
                    t >= Me && t < Me + le ? l(e, "tabindex") && (d(e, {
                        "aria-hidden": "false"
                    }), f(e, ["tabindex"])) : l(e, "tabindex") || d(e, {
                        "aria-hidden": "true",
                        tabindex: "-1"
                    })
                }
            }

            function $() {
                dn && (mn = hn !== -1 ? hn : (Me - Pe) % Jt, hn = -1, mn !== yn && (d(un[yn], {
                    tabindex: "-1",
                    "aria-selected": "false"
                }), d(un[mn], {
                    tabindex: "0",
                    "aria-selected": "true"
                }), yn = mn))
            }

            function Z(t) {
                return "button" === t.nodeName.toLowerCase()
            }

            function tt(t) {
                return "true" === t.getAttribute("aria-disabled")
            }

            function et(t, e, n) {
                t ? e.disabled = n : e.setAttribute("aria-disabled", n.toString())
            }

            function nt() {
                if (sn && !ye) {
                    var t = rn ? nn.disabled : tt(nn),
                        e = on ? an.disabled : tt(an),
                        n = Me === ke,
                        i = !me && Me === Se;
                    n && !t && et(rn, nn, !0), !n && t && et(rn, nn, !1), i && !e && et(on, an, !0), !i && e && et(on, an, !1)
                }
            }

            function it(t, e) {
                t = t ? t / 1e3 + "s" : "", e = e || Kt, e.style[I] = t, zt || (e.style[R] = t), Ut || (Xt.style[I] = t)
            }

            function at() {
                var t;
                if (Ut)
                    if (ve) t = -(ve + de) * Me + "px";
                    else {
                        var e = W ? Ce : le;
                        t = 100 * -Me / e + "%"
                    }
                else t = -re[Me] + "px";
                return t
            }

            function rt(t) {
                t || (t = at()), Kt.style[De] = Oe + t + Ae
            }

            function ot(t, e, n, i) {
                for (var a = t, r = t + le; a < r; a++) {
                    var o = Qt[a];
                    i || (o.style.left = 100 * (a - Me) / le + "%"), I && it(he, o), _t && H && (o.style[H] = o.style[B] = _t * (a - t) / 1e3 + "s"), o.classList.remove(e), o.classList.add(n), i && Te.push(o)
                }
            }

            function st(t, e) {
                void 0 === t && (t = he), I && it(t), zn(t, e)
            }

            function lt() {
                we && Bn(), Me !== Ne && (He.emit("indexChanged", Wt()), He.emit("transitionStart", Wt()), We = !0, st())
            }

            function ct(t) {
                function e(t) {
                    return t.toLowerCase().replace(/-/g, "")
                }
                if (He.emit("transitionEnd", Wt(t)), !zt && Te.length > 0)
                    for (var n = 0; n < le; n++) {
                        var i = Te[n];
                        i.style.left = "", I && it(0, i), _t && H && (i.style[H] = i.style[B] = ""), i.classList.remove(Gt), i.classList.add(Ft)
                    }
                if (!t || !zt && t.target.parentNode === Kt || t.target === Kt && e(t.propertyName) === e(De)) {
                    if (!we) {
                        var a = Me;
                        Bn(), Me !== a && (I && it(0), rt(), He.emit("indexChanged", Wt()))
                    }
                    J(), dn && vn.indexOf(Me % Jt) === -1 && St(), $(), nt(), U(), V(), "inner" === ue && He.emit("innerLoaded", Wt()), We = !1, Ne = Me
                }
            }

            function ut(t) {
                if (!_e)
                    if ("prev" === t) dt(null, -1);
                    else if ("next" === t) dt(null, 1);
                else if (!We) {
                    var e = Me % Jt,
                        i = 0;
                    if (!ye && n("edgePadding") && e--, e < 0 && (e += Jt), "first" === t) i = -e;
                    else if ("last" === t) i = Jt - le - e;
                    else if ("number" != typeof t && (t = parseInt(t)), !isNaN(t)) {
                        var a = t % Jt;
                        a < 0 && (a += Jt), !ye && fe && (a += 1), i = a - e
                    }
                    Me += i, Me % Jt != Ne % Jt && lt()
                }
            }

            function dt(t, e) {
                if (!We) {
                    var n;
                    if (!e) {
                        t = t || M.event;
                        for (var i = t.target || t.srcElement; i !== cn && !l(i, "data-controls");) i = i.parentNode
                    }
                    i && i === nn || e === -1 ? Me > ke && (Me -= ce, n = !0) : (i && i === an || 1 === e) && (me && Me === Se ? ut(0) : Me < Se && (Me += ce, n = !0)), n && lt()
                }
            }

            function ft(t) {
                if (!We) {
                    t = t || M.event;
                    for (var e, n = t.target || t.srcElement; n !== fn && !l(n, "data-nav");) n = n.parentNode;
                    l(n, "data-nav") && (e = hn = [].indexOf.call(un, n), ut(e))
                }
            }

            function vt(t, e) {
                d(Ln, {
                    "data-action": t
                }), Ln.innerHTML = On[0] + t + On[1] + e
            }

            function pt() {
                yt(), Ln && vt("stop", En[1]), wn = !0
            }

            function ht() {
                mt(), Ln && vt("start", En[0]), wn = !1
            }

            function mt() {
                wn = "paused", clearInterval(gn)
            }

            function yt() {
                wn !== !0 && (clearInterval(gn), gn = setInterval(function() {
                    dt(null, Tn)
                }, xn))
            }

            function gt() {
                wn ? ht() : pt()
            }

            function bt() {
                Mn != A.hidden && wn !== !1 && (A.hidden ? mt() : yt()), Mn = A.hidden
            }

            function xt(t) {
                switch (t = t || M.event, t.keyCode) {
                    case N.LEFT:
                        dt(null, -1);
                        break;
                    case N.RIGHT:
                        dt(null, 1)
                }
            }

            function Tt(t) {
                switch (t = t || M.event, t.keyCode) {
                    case N.LEFT:
                    case N.UP:
                    case N.PAGEUP:
                        nn.disabled || dt(null, -1);
                        break;
                    case N.RIGHT:
                    case N.DOWN:
                    case N.PAGEDOWN:
                        an.disabled || dt(null, 1);
                        break;
                    case N.HOME:
                        ut(0);
                        break;
                    case N.END:
                        ut(Jt - 1)
                }
            }

            function Et(t) {
                t.focus()
            }

            function Ct(t) {
                function n(t) {
                    return e.navContainer ? t : vn[t]
                }
                var i = A.activeElement;
                if (l(i, "data-nav")) {
                    t = t || M.event;
                    var a = t.keyCode,
                        r = [].indexOf.call(un, i),
                        o = vn.length,
                        s = vn.indexOf(r);
                    switch (e.navContainer && (o = Jt, s = r), a) {
                        case N.LEFT:
                        case N.PAGEUP:
                            s > 0 && Et(un[n(s - 1)]);
                            break;
                        case N.UP:
                        case N.HOME:
                            s > 0 && Et(un[n(0)]);
                            break;
                        case N.RIGHT:
                        case N.PAGEDOWN:
                            s < o - 1 && Et(un[n(s + 1)]);
                            break;
                        case N.DOWN:
                        case N.END:
                            s < o - 1 && Et(un[n(o - 1)]);
                            break;
                        case N.ENTER:
                        case N.SPACE:
                            hn = r, ut(r)
                    }
                }
            }

            function Lt() {
                st(0, Kt.scrollLeft()), Ne = Me
            }

            function wt(t) {
                return t.target || t.srcElement
            }

            function Dt(t) {
                return t.type.indexOf("touch") >= 0
            }

            function Ot(t) {
                t.preventDefault ? t.preventDefault() : t.returnValue = !1
            }

            function At(t) {
                t = t || M.event;
                var e;
                Dt(t) ? (e = t.changedTouches[0], He.emit("touchStart", Wt(t))) : (e = t, Ot(t), He.emit("dragStart", Wt(t))), Wn = parseInt(e.clientX), In = parseInt(e.clientY), Nn = parseFloat(Kt.style[De].replace(Oe, "").replace(Ae, ""))
            }

            function Mt(t) {
                if (t = t || M.event, null !== Wn) {
                    var n;
                    if (Dt(t) ? n = t.changedTouches[0] : (n = t, Ot(t)), Pn = parseInt(n.clientX) - Wn, kn = parseInt(n.clientY) - In, s(o(kn, Pn), 15) === e.axis && Pn) {
                        Dt(t) ? He.emit("touchMove", Wt(t)) : (Rn || (Rn = !0), He.emit("dragMove", Wt(t))), se || (se = !0);
                        var i = Nn;
                        if (Ut)
                            if (ve) i += Pn, i += "px";
                            else {
                                var a = W ? Pn * le * 100 / (qt * Ce) : 100 * Pn / qt;
                                i += a, i += "%"
                            }
                        else i += kn, i += "px";
                        W && it(0), Kt.style[De] = Oe + i + Ae
                    }
                }
            }

            function Nt(t) {
                if (t = t || M.event, se) {
                    se = !1;
                    var e;
                    if (Dt(t) ? (e = t.changedTouches[0], He.emit("touchEnd", Wt(t))) : (e = t, He.emit("dragEnd", Wt(t))), Pn = parseInt(e.clientX) - Wn, kn = parseInt(e.clientY) - In, Wn = In = null, Ut) {
                        var n = -Pn * le / qt;
                        n = Pn > 0 ? Math.floor(n) : Math.ceil(n), Me += n
                    } else {
                        var i = -(Nn + kn);
                        if (i <= 0) Me = ke;
                        else if (i >= re[re.length - 1]) Me = Se;
                        else {
                            var a = 0;
                            do {
                                a++, Me = kn < 0 ? a + 1 : a
                            } while (a < Ce && i >= re[a + 1])
                        }
                    }
                    if (lt(), Rn) {
                        Rn = !1;
                        var r = wt(t);
                        g(r, {
                            click: function t(e) {
                                Ot(e), b(r, {
                                    click: t
                                })
                            }
                        })
                    }
                }
            }

            function Pt() {
                Xt.style.height = re[Me + le] - re[Me] + "px"
            }

            function kt() {
                vn = [];
                for (var t = !ye && fe ? Me - 1 : Me, e = t % Jt % le; e < Jt;) !ye && e + le > Jt && (e = Jt - le), vn.push(e), e += le;
                (ye && vn.length * le < Jt || !ye && vn[0] > 0) && vn.unshift(0)
            }

            function St() {
                dn && !e.navContainer && (kt(), vn !== pn && (pn.length > 0 && pn.forEach(function(t) {
                    d(un[t], {
                        hidden: ""
                    })
                }), vn.length > 0 && vn.forEach(function(t) {
                    f(un[t], "hidden")
                }), pn = vn))
            }

            function Wt(t) {
                return {
                    container: Kt,
                    slideItems: Qt,
                    navContainer: fn,
                    navItems: un,
                    controlsContainer: cn,
                    prevButton: nn,
                    nextButton: an,
                    items: le,
                    slideBy: ce,
                    cloneCount: Ee,
                    slideCount: Jt,
                    slideCountNew: Ce,
                    index: Me,
                    indexCached: Ne,
                    navCurrent: mn,
                    navCurrentCached: yn,
                    visibleNavIndexes: vn,
                    visibleNavIndexesCached: pn,
                    event: t || {}
                }
            }
            if (e = t({
                    container: A.querySelector(".slider"),
                    mode: "carousel",
                    axis: "horizontal",
                    items: 1,
                    gutter: 0,
                    edgePadding: 0,
                    fixedWidth: !1,
                    slideBy: 1,
                    controls: !0,
                    controlsText: ["prev", "next"],
                    controlsContainer: !1,
                    nav: !0,
                    navContainer: !1,
                    arrowKeys: !1,
                    speed: 300,
                    autoplay: !1,
                    autoplayTimeout: 5e3,
                    autoplayDirection: "forward",
                    autoplayText: ["start", "stop"],
                    autoplayHoverPause: !1,
                    autoplayButton: !1,
                    autoplayButtonOutput: !0,
                    autoplayResetOnVisibility: !0,
                    loop: !0,
                    rewind: !1,
                    autoHeight: !1,
                    responsive: !1,
                    lazyload: !1,
                    touch: !0,
                    mouseDrag: !1,
                    nested: !1,
                    onInit: !1
                }, e || {}), ["container", "controlsContainer", "navContainer", "autoplayButton"].forEach(function(t) {
                    "string" == typeof e[t] && (e[t] = A.querySelector(e[t]))
                }), e.container && e.container.nodeName && !(e.container.children.length < 2)) {
                if (e.responsive) {
                    var It = {},
                        Ht = e.responsive;
                    for (var Rt in Ht) {
                        var Bt = Ht[Rt];
                        It[Rt] = "number" == typeof Bt ? {
                            items: Bt
                        } : Bt
                    }
                    e.responsive = It, It = null
                }
                var zt = "carousel" === e.mode;
                if (!zt) {
                    e.axis = "horizontal", e.rewind = !1, e.loop = !0;
                    var jt = "tns-fadeIn",
                        Gt = "tns-fadeOut",
                        _t = !1,
                        Ft = e.animateNormal || "tns-normal";
                    z && j && (jt = e.animateIn || jt, Gt = e.animateOut || Gt, _t = e.animateDelay || _t)
                }
                var qt, Ut = "horizontal" === e.axis,
                    Vt = A.createElement("div"),
                    Xt = A.createElement("div"),
                    Kt = e.container,
                    Yt = Kt.parentNode,
                    Qt = Kt.children,
                    Jt = Qt.length,
                    $t = Yt.clientWidth,
                    Zt = e.responsive,
                    te = [],
                    ee = !1,
                    ne = 0,
                    ie = 0;
                if (Zt) {
                    ee = Object.keys(Zt).map(function(t) {
                        return parseInt(t)
                    }).sort(function(t, e) {
                        return t - e
                    }), ee.indexOf(0) < 0 && (ie = 1), ee.forEach(function(t) {
                        te = te.concat(Object.keys(Zt[t]))
                    });
                    var ae = [];
                    te.forEach(function(t) {
                        ae.indexOf(t) < 0 && ae.push(t)
                    }), te = ae, ne = G()
                }
                var re, oe, se, le = u("items"),
                    ce = "page" === u("slideBy") ? le : u("slideBy"),
                    ue = e.nested,
                    de = u("gutter"),
                    fe = u("edgePadding"),
                    ve = u("fixedWidth"),
                    pe = u("arrowKeys"),
                    he = u("speed"),
                    me = e.rewind,
                    ye = !me && e.loop,
                    ge = u("autoHeight"),
                    be = a(),
                    xe = e.lazyload,
                    Te = [],
                    Ee = ye ? 2 * Jt : n("edgePadding") ? 1 : 0,
                    Ce = zt ? Jt + 2 * Ee : Jt + Ee,
                    Le = !(!ve || ye || fe),
                    we = !zt || !ye,
                    De = Ut ? "left" : "top",
                    Oe = "",
                    Ae = "",
                    Me = zt ? Ee : 0,
                    Ne = Me,
                    Pe = !ye && n("edgePadding") ? 1 : 0,
                    ke = Pe,
                    Se = Ce - le - Pe,
                    We = !1,
                    Ie = e.onInit,
                    He = new x,
                    Re = Kt.id,
                    Be = Kt.className,
                    ze = Qt[0].id,
                    je = Qt[0].className,
                    Ge = Kt.id || i(),
                    _e = Jt <= le,
                    Fe = "inner" === ue ? " !important" : "",
                    qe = {
                        click: dt,
                        keydown: Tt
                    },
                    Ue = {
                        click: ft,
                        keydown: Ct
                    },
                    Ve = {
                        mouseover: F,
                        mouseout: q
                    },
                    Xe = {
                        visibilitychange: bt
                    },
                    Ke = {
                        keydown: xt
                    },
                    Ye = {
                        touchstart: At,
                        touchmove: Mt,
                        touchend: Nt,
                        touchcancel: Nt
                    },
                    Qe = {
                        mousedown: At,
                        mousemove: Mt,
                        mouseup: Nt,
                        mouseleave: Nt
                    },
                    Je = n("controls"),
                    $e = n("nav"),
                    Ze = n("autoplay"),
                    tn = n("touch"),
                    en = n("mouseDrag");
                if (Je) var nn, an, rn, on, sn = u("controls"),
                    ln = u("controlsText"),
                    cn = e.controlsContainer;
                if ($e) var un, dn = u("nav"),
                    fn = e.navContainer,
                    vn = [],
                    pn = vn,
                    hn = -1,
                    mn = 0,
                    yn = 0;
                if (Ze) var gn, bn = u("autoplay"),
                    xn = u("autoplayTimeout"),
                    Tn = "forward" === e.autoplayDirection ? 1 : -1,
                    En = u("autoplayText"),
                    Cn = u("autoplayHoverPause"),
                    Ln = e.autoplayButton,
                    wn = !1,
                    Dn = !1,
                    On = ["<span class='tns-visually-hidden'>", " animation</span>"],
                    An = u("autoplayResetOnVisibility"),
                    Mn = !1;
                if (tn) var Nn, Pn, kn, Sn = u("touch"),
                    Wn = null,
                    In = null;
                if (en) var Hn = u("mouseDrag"),
                    Rn = !1;
                _e && (sn = dn = Sn = Hn = pe = bn = Cn = An = !1), W && (De = W, Oe = "translate", Oe += Ut ? "X(" : "Y(", Ae = ")"),
                    function() {
                        Vt.appendChild(Xt), Yt.insertBefore(Vt, Kt), Xt.appendChild(Kt), qt = Xt.clientWidth;
                        var t = "tns-outer",
                            i = "tns-inner",
                            a = " tns-slider tns-" + e.mode;
                        if (zt && (Ut && (n("edgePadding") || n("gutter") && !e.fixedWidth) ? t += " tns-ovh" : i += " tns-ovh"), Vt.className = t, Xt.className = i, Xt.id = Ge + "-iw", ge && (Xt.className += " tns-ah", Xt.style[I] = he / 1e3 + "s"), "" === Kt.id && (Kt.id = Ge), a += k ? " tns-subpixel" : " tns-no-subpixel", a += P ? " tns-calc" : " tns-no-calc", zt && (a += " tns-" + e.axis), Kt.className += a, zt && z) {
                            var o = {};
                            o[z] = ct, g(Kt, o)
                        }
                        t = i = a = null;
                        for (var s = 0; s < Jt; s++) {
                            var l = Qt[s];
                            l.id = Ge + "-item" + s, l.classList.add("tns-item"), !zt && Ft && l.classList.add(Ft), d(l, {
                                "aria-hidden": "true",
                                tabindex: "-1"
                            })
                        }
                        if (ye || fe) {
                            for (var c = A.createDocumentFragment(), p = A.createDocumentFragment(), h = Ee; h--;) {
                                var b = h % Jt,
                                    x = Qt[b].cloneNode(!0);
                                if (f(x, "id"), p.insertBefore(x, p.firstChild), zt) {
                                    var T = Qt[Jt - 1 - b].cloneNode(!0);
                                    f(T, "id"), c.appendChild(T)
                                }
                            }
                            Kt.insertBefore(c, Kt.firstChild), Kt.appendChild(p), Qt = Kt.children
                        }
                        for (var N = Me; N < Me + le; N++) {
                            var l = Qt[N];
                            d(l, {
                                "aria-hidden": "false"
                            }), f(l, ["tabindex"]), zt || (l.style.left = 100 * (N - Me) / le + "%", l.classList.remove(Ft), l.classList.add(jt))
                        }
                        if (zt && Ut)
                            if (k) {
                                var W = M.getComputedStyle(Qt[0]).fontSize;
                                W.indexOf("em") > 0 && (W = 16 * parseFloat(W) + "px"), E(be, "#" + Ge, "font-size:0;", r(be)), E(be, "#" + Ge + " .tns-item", "font-size:" + W + ";", r(be))
                            } else [].forEach.call(Qt, function(t, e) {
                                t.style.marginLeft = m(e)
                            });
                        if (S) {
                            var H = y(e.edgePadding, e.gutter, e.fixedWidth);
                            E(be, "#" + Ge + "-iw", H, r(be)), zt && Ut && (H = "width:" + C(e.fixedWidth, e.gutter, e.items), E(be, "#" + Ge, H, r(be))), (Ut || e.gutter) && (H = L(e.fixedWidth, e.gutter, e.items) + w(e.gutter), E(be, "#" + Ge + " .tns-item", H, r(be)))
                        } else if (Xt.style.cssText = y(fe, de, ve), zt && Ut && (Kt.style.width = C(ve, de, le)), Ut || de) {
                            var H = L(ve, de, le) + w(de);
                            E(be, "#" + Ge + " .tns-item", H, r(be))
                        }
                        if (Ut || (Y(), Pt()), Zt && S && ee.forEach(function(t) {
                                var e = Zt[t],
                                    i = "",
                                    a = "",
                                    r = "",
                                    o = "",
                                    s = u("items", t),
                                    l = u("fixedWidth", t),
                                    c = u("edgePadding", t),
                                    d = u("gutter", t);
                                ("edgePadding" in e || "gutter" in e) && (a = "#" + Ge + "-iw{" + y(c, d, l) + "}"), zt && Ut && ("fixedWidth" in e || "gutter" in e || "items" in e) && (r = "#" + Ge + "{width:" + C(l, d, s) + "}"), ("fixedWidth" in e || n("fixedWidth") && "gutter" in e) && (o += L(l, d, s)), "gutter" in e && (o += w(d)), o.length > 0 && (o = "#" + Ge + " .tns-item{" + o + "}"), i = a + r + o, i.length > 0 && be.insertRule("@media (min-width: " + t / 16 + "em) {" + i + "}", be.cssRules.length)
                            }), zt && rt(), navigator.msMaxTouchPoints && (Vt.classList.add("ms-touch"), g(Vt, {
                                scroll: Lt
                            }), Q()), $e) {
                            if (fn) d(fn, {
                                "aria-label": "Carousel Pagination"
                            }), un = fn.children, [].forEach.call(un, function(t, e) {
                                d(t, {
                                    "data-nav": e,
                                    tabindex: "-1",
                                    "aria-selected": "false",
                                    "aria-controls": Ge + "-item" + e
                                })
                            });
                            else {
                                for (var R = "", N = 0; N < Jt; N++) R += '<button data-nav="' + N + '" tabindex="-1" aria-selected="false" aria-controls="' + Ge + "-item" + N + '" hidden type="button"></button>';
                                R = '<div class="tns-nav" aria-label="Carousel Pagination">' + R + "</div>", Vt.insertAdjacentHTML("afterbegin", R), [].forEach.call(Vt.children, function(t) {
                                    t.classList.contains("tns-nav") && (fn = t)
                                }), un = fn.children, St()
                            }
                            d(un[0], {
                                tabindex: "0",
                                "aria-selected": "true"
                            }), g(fn, Ue), dn || v(fn)
                        }
                        if (Ze) {
                            var B = bn ? "stop" : "start";
                            Ln ? d(Ln, {
                                "data-action": B
                            }) : e.autoplayButtonOutput && (Xt.insertAdjacentHTML("beforebegin", '<button data-action="' + B + '" type="button">' + On[0] + B + On[1] + En[0] + "</button>"), Ln = Vt.querySelector("[data-action]")), Ln && g(Ln, {
                                click: gt
                            }), bn ? (pt(), Cn && g(Kt, Ve), An && g(Kt, Xe)) : Ln && v(Ln)
                        }
                        Je && (cn ? (nn = cn.children[0], an = cn.children[1], d(cn, {
                            "aria-label": "Carousel Navigation",
                            tabindex: "0"
                        }), d(nn, {
                            "data-controls": "prev"
                        }), d(an, {
                            "data-controls": "next"
                        }), d(cn.children, {
                            "aria-controls": Ge,
                            tabindex: "-1"
                        })) : (Vt.insertAdjacentHTML("afterbegin", '<div class="tns-controls" aria-label="Carousel Navigation" tabindex="0"><button data-controls="prev" tabindex="-1" aria-controls="' + Ge + '" type="button">' + ln[0] + '</button><button data-controls="next" tabindex="-1" aria-controls="' + Ge + '" type="button">' + ln[1] + "</button></div>"), [].forEach.call(Vt.children, function(t) {
                            t.classList.contains("tns-controls") && (cn = t)
                        }), nn = cn.children[0], an = cn.children[1]), rn = Z(nn), on = Z(an), ye || et(rn, nn, !0), g(cn, qe), sn || v(cn)), Sn && g(Kt, Ye), Hn && g(Kt, Qe), pe && g(A, Ke), "inner" === ue ? He.on("outerResized", function() {
                            O(), He.emit("innerLoaded", Wt())
                        }) : (g(M, {
                            resize: D
                        }), "outer" === ue && He.on("innerLoaded", V)), U(), V(), _(), "function" == typeof Ie && Ie(Wt()), "inner" === ue && He.emit("innerLoaded", Wt())
                    }();
                var Bn = function() {
                        return ye ? function() {
                            var t = ke,
                                e = Se;
                            zt && (t += ce, e -= ce);
                            var n = de ? de : 0;
                            if (ve && $t % (ve + n) > n && (e -= 1), Me > e)
                                for (; Me >= t + Jt;) Me -= Jt;
                            else if (Me < t)
                                for (; Me <= e - Jt;) Me += Jt
                        } : function() {
                            Me = Math.max(ke, Math.min(Se, Me))
                        }
                    }(),
                    zn = function() {
                        return zt ? function(t, e) {
                            if (e || (e = at()), Le && Me === Se) {
                                var n = W ? 100 * -((Ce - le) / Ce) : 100 * -(Ce / le - 1);
                                e = Math.max(parseFloat(e), n) + "%"
                            }
                            I || !t ? (rt(e), 0 === he && ct()) : T(Kt, De, Oe, Ae, e, he, ct), Ut || Pt()
                        } : function() {
                            Te = [];
                            var t = {};
                            t[z] = t[j] = ct, b(Qt[Ne], t), g(Qt[Me], t), ot(Ne, jt, Gt, !0), ot(Me, Ft, jt), z && j && 0 !== he || setTimeout(ct, 0)
                        }
                    }();
                return {
                    getInfo: Wt,
                    events: He,
                    goTo: ut,
                    destroy: function() {
                        if (be.disabled = !0, ye)
                            for (var t = Ee; t--;) Qt[0].remove(), Qt[Qt.length - 1].remove();
                        for (var n = Jt; n--;) Qt[n].id = ze || "", Qt[n].className = je || "";
                        if (f(Qt, ["style", "aria-hidden", "tabindex"]), Qt = Ge = Jt = Ce = Ee = null, sn && (b(cn, qe), e.controlsContainer && (f(cn, ["aria-label", "tabindex"]), f(cn.children, ["aria-controls", "aria-disabled", "tabindex"])), cn = nn = an = null), dn && (b(fn, Ue), e.navContainer && (f(fn, ["aria-label"]), f(un, ["aria-selected", "aria-controls", "tabindex"])), fn = un = null), bn && (Ln && b(Ln, {
                                click: gt
                            }), b(Kt, Ve), b(Kt, Xe), e.autoplayButton && f(Ln, ["data-action"])), Kt.id = Re || "", Kt.className = Be || "", Kt.style = "", zt && z) {
                            var i = {};
                            i[z] = ct, b(Kt, i)
                        }
                        b(Kt, Ye), b(Kt, Qe), Yt.insertBefore(Kt, Vt), Vt.remove(), Vt = Xt = Kt = null, b(A, Ke), b(M, {
                            resize: D
                        })
                    }
                }
            }
        }
}();
//# sourceMappingURL=../sourcemaps/tiny-slider.js.map


const slider = tns({
    container: document.querySelector(".slider"),
    nav: false,
    autoplay: true,
    autoplayButton: false,
    items: 1,
    gutter: 0,
    controls: false,
    responsive: {
        640: {
            items: 2
        },
        768: {
            items: 3
        }
    }
});



const slideCount = (() => {

    const info = slider.getInfo();
    const slideCount = `slideCount: ${info.slideCount}`;
    const items = `items: ${info.items}`;

    console.log(slideCount, items);

});

window.onresize = function(e) {
    slideCount();
};

slideCount();
