(function() {
    window.NEJ = window.NEJ || {};
    NEJ.O = {};
    NEJ.R = [];
    NEJ.F = function() {
        return !1
    };
    NEJ.P = function(AX9O) {
        if (!AX9O || !AX9O.length) return null;
        var VN5S = window;
        for (var a = AX9O.split("."), l = a.length, i = a[0] == "window" ? 1 : 0; i < l; VN5S = VN5S[a[i]] = VN5S[a[i]] || {}, i++);
        return VN5S
    };
    NEJ.Q = function(bK0x, AX9O) {
        bK0x = bK0x || NEJ.O;
        var bs0x = AX9O.split(".");
        for (var i = 0, l = bs0x.length; i < l; i++) {
            bK0x = bK0x[bs0x[i]];
            if (!bK0x) break
        }
        return bK0x
    };
    NEJ.C = function() {
        var brV0x = function() {
            return NEJ.O.toString.call(arguments[0]) != "[object Function]"
        };
        var bKH4L = function(z0x, bv0x) {
            for (var x in bv0x) if (z0x == bv0x[x]) return x;
            return null
        };
        var bpH0x = {
                cl1x: 0,
                bk0x: 1,
                bD0x: 2,
                bR0x: 3,
                bH0x: 4,
                eO2x: 5,
                jN4R: 6,
                ee2x: 7
            },
            rY6S = {
                cr1x: 0,
                bl0x: 1,
                bI0x: 2,
                cb1x: 3,
                bM0x: 4,
                gn2x: 5,
                kG4K: 6,
                fM2x: 7
            };
        return function() {
            var eY2x = function() {
                this.bKL4P();
                return this.cl1x.apply(this, arguments)
            };
            eY2x.prototype.bKL4P = NEJ.F;
            eY2x.prototype.cl1x = NEJ.F;
            eY2x.O0x = function(yU8M, btD1x) {
                if (brV0x(yU8M)) return;
                if (btD1x == null || !! btD1x) NEJ.X(this, yU8M, brV0x);
                this.bMz5E = yU8M;
                this.ch1x = yU8M.prototype;
                var bA0x = function() {};
                bA0x.prototype = yU8M.prototype;
                this.prototype = new bA0x;
                var Dm9d = this.prototype;
                Dm9d.constructor = this;
                var dM2x;
                for (var x in bpH0x) {
                    dM2x = bKH4L(bpH0x[x], rY6S);
                    if (!dM2x || !this.ch1x[x]) continue;
                    Dm9d[x] = function(T0x) {
                        return function() {
                            this[T0x].apply(this, arguments)
                        }
                    }(dM2x)
                }
                var Ba9R = {};
                for (var x in rY6S) {
                    dM2x = bKH4L(rY6S[x], bpH0x);
                    if (!dM2x || !this.ch1x[dM2x]) continue;
                    Ba9R[dM2x] = yU8M;
                    Dm9d[x] = function(T0x) {
                        return function() {
                            var n0x, bA0x = this.bpE0x[T0x],
                                Za6U = bA0x.prototype[T0x];
                            this.bpE0x[T0x] = bA0x.bMz5E || yU8M;
                            if ( !! Za6U) n0x = Za6U.apply(this, arguments);
                            this.bpE0x[T0x] = yU8M;
                            return n0x
                        }
                    }(dM2x)
                }
                Dm9d.bKL4P = function() {
                    this.bpE0x = NEJ.X({}, Ba9R)
                };
                Dm9d.cvK2x = Dm9d.cr1x;
                return Dm9d
            };
            return eY2x
        }
    }();
    NEJ.X = function(fU2x, bN0x, dB2x) {
        if (!fU2x || !bN0x) return fU2x;
        dB2x = dB2x || NEJ.F;
        for (var x in bN0x) {
            if (bN0x.hasOwnProperty(x) && !dB2x(bN0x[x], x)) fU2x[x] = bN0x[x]
        }
        return fU2x
    };
    NEJ.EX = function(fU2x, bN0x) {
        if (!fU2x || !bN0x) return fU2x;
        for (var x in fU2x) {
            if (fU2x.hasOwnProperty(x) && bN0x[x] != null) fU2x[x] = bN0x[x]
        }
        return fU2x
    };
    var IB1x = Function.prototype;
    IB1x.dY2x = function(nl5q, bpx0x) {
        var f = NEJ.F,
            bpx0x = bpx0x || f,
            nl5q = nl5q || f,
            da1x = this;
        return function() {
            var d0x = {
                args: NEJ.R.slice.call(arguments, 0)
            };
            nl5q(d0x);
            if (!d0x.stopped) {
                d0x.value = da1x.apply(this, d0x.args);
                bpx0x(d0x)
            }
            return d0x.value
        }
    };
    IB1x.g0x = function() {
        var bg0x = arguments,
            fU2x = arguments[0],
            bpv0x = this;
        return function() {
            var uO7H = NEJ.R.slice.call(bg0x, 1);
            NEJ.R.push.apply(uO7H, arguments);
            return bpv0x.apply(fU2x || window, uO7H)
        }
    };
    IB1x.dX2x = function() {
        var bg0x = arguments,
            fU2x = NEJ.R.shift.call(bg0x),
            bpv0x = this;
        return function() {
            NEJ.R.push.apply(arguments, bg0x);
            return bpv0x.apply(fU2x || window, arguments)
        }
    };
    var IB1x = String.prototype;
    if (!IB1x.trim) {
        IB1x.trim = function() {
            var cO1x = /(?:^\s+)|(?:\s+$)/g;
            return function() {
                return this.replace(cO1x, "")
            }
        }()
    }
    if (!window.MWF) window.MWF = NEJ;
    if (!window.mwf) window.mwf = NEJ.P("nej");
    if (!window.console) {
        NEJ.P("console").log = NEJ.F;
        NEJ.P("console").error = NEJ.F
    }
    var lt, gt, amp, nbsp, quot, apos, copy, reg
})();
(function() {
    var c0x = NEJ.P,
        Y0x = NEJ.O,
        M0x = c0x("nej.p"),
        YX6R = window.navigator.platform,
        tx7q = window.navigator.userAgent;
    var jO4S = {
        mac: YX6R,
        win: YX6R,
        linux: YX6R,
        ipad: tx7q,
        ipod: tx7q,
        iphone: YX6R,
        android: tx7q
    };
    M0x.IN1x = jO4S;
    for (var x in jO4S) jO4S[x] = (new RegExp(x, "i")).test(jO4S[x]);
    jO4S.ios = jO4S.ipad || jO4S.iphone || jO4S.ipod;
    jO4S.tablet = jO4S.ipad;
    jO4S.desktop = jO4S.mac || jO4S.win || jO4S.linux && !jO4S.android;
    var hB3x = {
        engine: "unknow",
        release: "unknow",
        browser: "unknow",
        version: "unknow",
        prefix: {
            css: "",
            pro: "",
            clz: ""
        }
    };
    M0x.cP1x = hB3x;
    if (/msie\s+(.*?);/i.test(tx7q) || /trident\/.+rv:([\d\.]+)/i.test(tx7q)) {
        hB3x.engine = "trident";
        hB3x.browser = "ie";
        hB3x.version = RegExp.$1;
        hB3x.prefix = {
            css: "ms",
            pro: "ms",
            clz: "MS",
            evt: "MS"
        };
        var nx5C = {
            6: "2.0",
            7: "3.0",
            8: "4.0",
            9: "5.0",
            10: "6.0",
            11: "7.0"
        };
        hB3x.release = nx5C[document.documentMode] || nx5C[parseInt(hB3x.version)]
    } else if (/webkit\/?([\d.]+?)(?=\s|$)/i.test(tx7q)) {
        hB3x.engine = "webkit";
        hB3x.release = RegExp.$1 || "";
        hB3x.prefix = {
            css: "webkit",
            pro: "webkit",
            clz: "WebKit"
        }
    } else if (/rv\:(.*?)\)\s+gecko\//i.test(tx7q)) {
        hB3x.engine = "gecko";
        hB3x.release = RegExp.$1 || "";
        hB3x.browser = "firefox";
        hB3x.prefix = {
            css: "Moz",
            pro: "moz",
            clz: "Moz"
        };
        if (/firefox\/(.*?)(?=\s|$)/i.test(tx7q)) hB3x.version = RegExp.$1 || ""
    } else if (/presto\/(.*?)\s/i.test(tx7q)) {
        hB3x.engine = "presto";
        hB3x.release = RegExp.$1 || "";
        hB3x.browser = "opera";
        hB3x.prefix = {
            css: "O",
            pro: "o",
            clz: "O"
        };
        if (/version\/(.*?)(?=\s|$)/i.test(tx7q)) hB3x.version = RegExp.$1 || ""
    }
    if (hB3x.browser == "unknow") {
        var nx5C = ["chrome", "maxthon", "safari"];
        for (var i = 0, l = nx5C.length, T0x; i < l; i++) {
            T0x = nx5C[i] == "safari" ? "version" : nx5C[i];
            if ((new RegExp(T0x + "/(.*?)(?=\\s|$)", "i")).test(tx7q)) {
                hB3x.browser = nx5C[i];
                hB3x.version = RegExp.$1.trim();
                break
            }
        }
    }
    M0x.bvN1x = {};
    var YV6P = hB3x.engine != "trident";
    M0x.lX4b = {
        gecko: hB3x.engine != "gecko",
        webkit: hB3x.engine != "webkit",
        presto: hB3x.engine != "presto",
        trident0: YV6P || hB3x.release > "2.0",
        trident1: YV6P || hB3x.release < "6.0",
        trident2: YV6P || hB3x.release > "3.0",
        trident: YV6P || hB3x.release >= "6.0"
    }
})();
(function() {
    var iq3x = NEJ.P("nej.c"),
        Q0x = {};
    var bpi0x = function() {
        var cO1x = /^([\w]+?:\/\/.*?(?=\/|$))/i;
        return function(V0x) {
            V0x = V0x || "";
            if (cO1x.test(V0x)) return RegExp.$1;
            return location.protocol + "//" + location.host
        }
    }();
    var NB2x = function() {
        var bwA1x = function(i0x, bv0x) {
            if (!i0x || !i0x.length) return;
            for (var i = 0, l = i0x.length, ki4m; i < l; i++) {
                ki4m = i0x[i];
                if (ki4m.indexOf("://") > 0) bv0x[bpi0x(ki4m)] = ki4m
            }
        };
        var bd0x = {
            portrait: {
                name: "portrait",
                dft: "portrait/"
            },
            "ajax.swf": {
                name: "ajax",
                dft: "nej_proxy_flash.swf"
            },
            "chart.swf": {
                name: "chart",
                dft: "nej_flex_chart.swf"
            },
            "audio.swf": {
                name: "audio",
                dft: "nej_player_audio.swf"
            },
            "video.swf": {
                name: "video",
                dft: "nej_player_video.swf"
            },
            "clipboard.swf": {
                name: "clipboard",
                dft: "nej_clipboard.swf"
            }
        };
        return function(bN0x) {
            iq3x.Iy1x("root", bN0x.root || "/res/");
            var bpe0x, fn2x = iq3x.w0x("root");
            for (var x in bd0x) {
                bpe0x = bd0x[x];
                iq3x.Iy1x(x, bN0x[bpe0x.name] || fn2x + bpe0x.dft)
            }
            var xJ8B = bN0x.p_csrf;
            if (xJ8B == !0) {
                xJ8B = {
                    cookie: "AntiCSRF",
                    param: "AntiCSRF"
                }
            }
            iq3x.Iy1x("csrf", NEJ.EX({
                cookie: "",
                param: ""
            }, xJ8B));
            Q0x.frames = {};
            bwA1x(bN0x.p_frame, Q0x.frames);
            Q0x.flashs = {};
            bwA1x(bN0x.p_flash, Q0x.flashs)
        }
    }();
    iq3x.Iy1x = function(J0x, z0x) {
        Q0x[J0x] = z0x
    };
    iq3x.w0x = function(J0x) {
        return Q0x[J0x]
    };
    iq3x.bMB5G = function(V0x) {
        var uA7t = bpi0x(V0x);
        return Q0x.frames[uA7t] || uA7t + "/res/nej_proxy_frame.html"
    };
    iq3x.bMI5N = function(V0x) {
        return Q0x.flashs[bpi0x(V0x)]
    };
    NB2x(window.NEJ_CONF || NEJ.O)
})();
(function() {
    var c0x = NEJ.P,
        M0x = c0x("nej.p"),
        iq3x = c0x("nej.c"),
        bN0x = window.NEJ_CONF || NEJ.O;
    if (M0x.lX4b.trident) return;
    iq3x.Iy1x("storage.swf", bN0x.storage || iq3x.w0x("root") + "nej_storage.swf");
    if (M0x.cP1x.release < "4.0") {
        iq3x.Iy1x("blank.png", bN0x.blank || iq3x.w0x("root") + "nej_blank.gif")
    }
    var i0x = bN0x.xdr,
        fQ2x = /^(https?:\/\/.*?)(?=\/|$)/i,
        jg4k = /[\/?=&]/i;
    var bsg1x = function(V0x) {
        return (fQ2x.test(V0x) ? RegExp.$1 : "").toLowerCase()
    };
    if ( !! i0x && !! i0x.length) for (var i = i0x.length - 1, V0x, J0x; i >= 0; i--) {
        V0x = i0x[i];
        J0x = bsg1x(V0x);
        if ( !! J0x) iq3x.Iy1x(J0x, V0x)
    }
    iq3x.cvF2x = function(V0x) {
        var J0x = bsg1x(V0x);
        if (!J0x) {
            if (jg4k.test(V0x)) {
                J0x = location.protocol + "//" + location.host
            } else if (V0x.indexOf("://") < 0) {
                J0x = location.protocol + "//" + V0x
            } else {
                J0x = V0x
            }
        }
        return iq3x.w0x(J0x) || J0x + "/res/nej_xdomain.html"
    }
})();
(function() {
    var c0x = NEJ.P,
        iq3x = c0x("nej.c"),
        M0x = c0x("nej.g"),
        fR2x = +(new Date);
    M0x.cvE2x = 1e4 - fR2x;
    M0x.bpc0x = 10001 - fR2x;
    M0x.cvC2x = 10002 - fR2x;
    M0x.bzA2x = 10003 - fR2x;
    M0x.bMV5a = 10004 - fR2x;
    M0x.cvA2x = 10005 - fR2x;
    M0x.boU0x = 10006 - fR2x;
    M0x.bNe5j = 10007 - fR2x;
    M0x.wB7u = "Content-Type";
    M0x.cvw2x = "text/plain";
    M0x.CC9t = "multipart/form-data";
    M0x.bNg5l = "application/x-www-form-urlencoded";
    M0x.boP0x = iq3x.w0x("blank.png") || "data:image/gif;base64,R0lGODlhAQABAID/AMDAwAAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="
})();
(function() {
    var c0x = NEJ.P,
        fb2x = NEJ.R,
        M0x = c0x("nej.p"),
        a9j = c0x("nej.e"),
        h0x = c0x("nej.v"),
        k0x = c0x("nej.u"),
        ba0x = c0x("nej.h");
    var kF4J = M0x.cP1x.prefix,
        bxv2x = M0x.bvN1x,
        bNj5o = {
            scale: "scale({x|1},{y|1})",
            rotate: "rotate({a})",
            translate: "translate({x},{y})"
        },
        bNo5t = {
            scale: "scale3d({x|1},{y|1},{z|1})",
            rotate: "rotate3d({x},{y},{z},{a})",
            translate: "translate3d({x},{y},{z})"
        },
        MW2x = {
            transition: !0,
            transform: !0,
            animation: !0,
            keyframes: !0,
            box: !0,
            "box-pack": !0,
            "box-flex": !0,
            marquee: !0,
            "border-radius": !0,
            "user-select": !0
        };
    var NB2x = function() {
        var rh6b = ba0x.bBX2x();
        bxv2x.css3d = !! rh6b && rh6b.m41 != null;
        var cO1x = /-([a-z])/g;
        for (var x in MW2x) {
            MW2x[bEz3x(x)] = MW2x[x]
        }
    };
    var bEz3x = function() {
        var cO1x = /-([a-z])/g;
        return function(T0x) {
            T0x = T0x || "";
            return T0x.replace(cO1x, function($1, $2) {
                return $2.toUpperCase()
            })
        }
    }();
    var bEB3x = function(T0x) {
        return (!bxv2x.css3d ? bNj5o : bNo5t)[T0x]
    };
    var bFk3x = function() {
        var cO1x = /\s+/;
        return function(eY2x) {
            eY2x = (eY2x || "").trim();
            return !!eY2x ? eY2x.split(cO1x) : null
        }
    }();
    var YR6L = function(G0x, t0x, eY2x) {
        G0x = a9j.w0x(G0x);
        if (!G0x) return;
        k0x.be0x(bFk3x(eY2x), function(dH2x) {
            G0x.classList[t0x](dH2x)
        })
    };
    ba0x.Im0x = function(i0x) {
        return fb2x.slice.call(i0x, 0)
    };
    ba0x.boN0x = function(G0x) {
        return ba0x.Im0x(G0x.children)
    };
    ba0x.boM0x = function(G0x, eY2x) {
        return ba0x.Im0x(G0x.getElementsByClassName(eY2x))
    };
    ba0x.boL0x = function(G0x, Il0x) {
        YR6L(G0x, "add", Il0x)
    };
    ba0x.boJ0x = function(G0x, Ij0x) {
        YR6L(G0x, "remove", Ij0x)
    };
    ba0x.MD2x = function(G0x, Ij0x, Il0x) {
        YR6L(G0x, "remove", Ij0x);
        YR6L(G0x, "add", Il0x)
    };
    ba0x.boB0x = function(G0x, eY2x) {
        G0x = a9j.w0x(G0x);
        if (!G0x) return !1;
        var i0x = G0x.classList;
        if (!i0x || !i0x.length) return !1;
        return k0x.cT1x(bFk3x(eY2x), function(dH2x) {
                return i0x.contains(dH2x)
            }) >= 0
    };
    ba0x.boz0x = function(G0x, dH2x) {};
    ba0x.boy0x = function(G0x) {};
    ba0x.bow0x = function(fB2x, mJ5O) {
        fB2x.selectionEnd = mJ5O.end || 0;
        fB2x.selectionStart = mJ5O.start || 0;
        fB2x.focus()
    };
    ba0x.bot0x = function(fB2x) {
        return {
            end: fB2x.selectionEnd,
            start: fB2x.selectionStart
        }
    };
    ba0x.bos0x = function() {
        var BK9B = function(dH2x, d0x) {
            var G0x = h0x.U0x(d0x);
            if (!G0x.value) a9j.x0x(G0x, dH2x)
        };
        var Id0x = function(dH2x, d0x) {
            a9j.y0x(h0x.U0x(d0x), dH2x)
        };
        return function(G0x, eC2x, dH2x) {
            if (eC2x == 1) {
                h0x.q0x(G0x, "blur", BK9B.g0x(null, dH2x))
            }
            if (eC2x == 1 || eC2x == -1) {
                h0x.q0x(G0x, "focus", Id0x.g0x(null, dH2x))
            }
        }
    }();
    ba0x.bop0x = function(E0x) {
        return (new XMLSerializer).serializeToString(E0x) || ""
    };
    ba0x.bom0x = function(xU8M) {
        var fn2x = (new DOMParser).parseFromString(xU8M, "text/xml").documentElement;
        return fn2x.nodeName == "parsererror" ? null : fn2x
    };
    ba0x.bol0x = function(G0x) {};
    ba0x.mE5J = function(G0x) {
        return null
    };
    ba0x.bok0x = function(G0x) {
        return null
    };
    ba0x.boj0x = function(dE2x) {};
    ba0x.boi0x = function() {
        var bg0x = ba0x.Im0x(arguments);
        bg0x[0] = a9j.w0x(bg0x[0]);
        if (!bg0x[0]) return null;
        bg0x[1] = (bg0x[1] || "").toLowerCase();
        if (!bg0x[1]) return null;
        return bg0x
    };
    ba0x.yb8T = function() {
        var uf7Y = {
                touchstart: "mousedown",
                touchmove: "mousemove",
                touchend: "mouseup"
            },
            iw3x = {
                transitionend: "TransitionEnd",
                animationend: "AnimationEnd",
                animationstart: "AnimationStart",
                animationiteration: "AnimationIteration"
            };
        var bNy5D = function(t0x) {
            return (kF4J.evt || kF4J.pro) + t0x
        };
        return function() {
            var bg0x = ba0x.boi0x.apply(ba0x, arguments);
            if (!bg0x) return;
            var YM5R = iw3x[bg0x[1]],
                YL5Q = uf7Y[bg0x[1]];
            if ( !! YM5R) {
                bg0x[4] = bg0x[1];
                bg0x[1] = bNy5D(YM5R)
            } else if ( !! YL5Q) {
                var T0x = "on" + bg0x[1];
                if (!(T0x in bg0x[0])) {
                    bg0x[4] = bg0x[1];
                    bg0x[1] = YL5Q
                }
            }
            return bg0x
        }
    }();
    ba0x.boa0x = function() {
        var bg0x = arguments;
        bg0x[0].addEventListener(bg0x[1], bg0x[2], !! bg0x[3])
    };
    ba0x.YI5N = function() {
        var bg0x = arguments;
        bg0x[0].removeEventListener(bg0x[1], bg0x[2], !! bg0x[3])
    };
    ba0x.bnY0x = function(G0x, t0x, e0x) {
        var d0x = document.createEvent("Event");
        d0x.initEvent(t0x, !0, !0);
        NEJ.X(d0x, e0x);
        G0x.dispatchEvent(d0x)
    };
    ba0x.bBX2x = function() {
        var fQ2x = /\((.*?)\)/,
            jg4k = /\s*,\s*/,
            i0x = ["m11", "m12", "m21", "m22", "m41", "m42"];
        var YH5M = function(rh6b) {
            var id3x = {};
            if (fQ2x.test(rh6b || "")) {
                k0x.be0x(RegExp.$1.split(jg4k), function(z0x, s0x) {
                    id3x[i0x[s0x]] = z0x || ""
                })
            }
            return id3x
        };
        return function(rh6b) {
            if ( !! window.CSSMatrix) return new CSSMatrix(rh6b);
            var T0x = kF4J.clz + "CSSMatrix";
            if ( !! window[T0x]) return new window[T0x](rh6b || "");
            return YH5M(rh6b)
        }
    }();
    ba0x.bqh0x = function() {
        var cO1x = /\{(.*?)\}/g;
        return function(T0x, bv0x) {
            bv0x = bv0x || o;
            var qM6G = bEB3x(T0x);
            return !qM6G ? "" : qM6G.replace(cO1x, function($1, $2) {
                var bs0x = $2.split("|");
                return bv0x[bs0x[0]] || bs0x[1] || "0"
            })
        }
    }();
    ba0x.bnU0x = function(G0x, T0x, z0x) {
        G0x.style[ba0x.bru0x(T0x)] = z0x
    };
    ba0x.bru0x = function() {
        var cO1x = /^[a-z]/,
            bnT0x = kF4J.css;
        var bNB5G = function(T0x) {
            return T0x.replace(cO1x, function($1) {
                return bnT0x + $1.toUpperCase()
            })
        };
        return function(T0x) {
            T0x = bEz3x(T0x);
            var bNH5M = ba0x.bNI5N(T0x, MW2x);
            return bNH5M ? bNB5G(T0x) : T0x
        }
    }();
    ba0x.bNI5N = function() {
        var cO1x = /^([a-z]+?)[A-Z]/;
        return function(T0x, bv0x) {
            if (!bv0x[T0x]) {
                if (cO1x.test(T0x)) T0x = RegExp.$1
            }
            return !!bv0x[T0x]
        }
    }();
    ba0x.bNK5P = function() {
        var cO1x = /\$<(.*?)>/gi,
            bnT0x = "-" + kF4J.css.toLowerCase() + "-";
        return function(jm4q) {
            return jm4q.replace(cO1x, function($1, $2) {
                var eK2x = $2,
                    bs0x = eK2x.split("|"),
                    qM6G = bEB3x(bs0x[0]);
                if ( !! qM6G) {
                    return ba0x.bqh0x(bs0x[0], k0x.ho3x(bs0x[1]))
                }
                return !ba0x.bNL5Q(eK2x, MW2x) ? eK2x : bnT0x + eK2x
            })
        }
    }();
    ba0x.bNL5Q = function(T0x, bv0x) {
        return !!bv0x[T0x]
    };
    ba0x.bnP0x = function(cc1x, jm4q) {
        cc1x.textContent = jm4q
    };
    ba0x.bnO0x = function(cc1x, jm4q) {
        var vY7R = cc1x.sheet,
            bo0x = vY7R.cssRules.length;
        vY7R.insertRule(jm4q, bo0x);
        return vY7R.cssRules[bo0x]
    };
    ba0x.cvk2x = function(G0x, e0x) {};
    ba0x.YE5J = function(YD5I) {
        return (YD5I || "").toLowerCase() != "transparent"
    };
    ba0x.bNM5R = function(G0x) {};
    ba0x.bnL0x = function(G0x, T0x) {
        if ( !! G0x.getAttribute) return G0x.getAttribute(T0x);
        return ""
    };
    ba0x.YC5H = function(eX2x) {
        a9j.cF1x(eX2x)
    };
    NB2x()
})();
(function() {
    var c0x = NEJ.P,
        a9j = c0x("nej.e"),
        h0x = c0x("nej.v"),
        M0x = c0x("nej.p"),
        ba0x = c0x("nej.h");
    if (M0x.lX4b.trident0) return;
    var fR2x = +(new Date);
    Q0x = {};
    ba0x.boz0x = ba0x.boz0x.dY2x(function(d0x) {
        d0x.stopped = !0;
        var bg0x = d0x.args,
            C0x = a9j.kQ4U(bg0x[0]),
            J0x = "hover-" + C0x;
        if (!C0x || !! Q0x[J0x]) return;
        Q0x[J0x] = !0;
        h0x.q0x(C0x, "mouseenter", a9j.y0x.g0x(a9j, C0x, bg0x[1]));
        h0x.q0x(C0x, "mouseleave", a9j.x0x.g0x(a9j, C0x, bg0x[1]))
    });
    ba0x.boy0x = function() {
        var cvi2x = function() {};
        return ba0x.boy0x.dY2x(function(d0x) {
            d0x.stopped = !0;
            var G0x = d0x.args[0],
                C0x = "fixed-" + a9j.kQ4U(G0x);
            if ( !! Q0x[C0x]) return;
            var bd0x = {};
            Q0x[C0x] = bd0x
        })
    }();
    ba0x.bol0x = ba0x.bol0x.dY2x(function(d0x) {
        d0x.stopped = !0;
        var G0x = d0x.args[0],
            cc1x = G0x.style,
            bpV0x = a9j.oN5S();
        cc1x.width = bpV0x.scrollWidth + "px";
        cc1x.height = bpV0x.scrollHeight + "px"
    });
    ba0x.mE5J = ba0x.mE5J.dY2x(function(d0x) {
        d0x.stopped = !0;
        var G0x = d0x.args[0],
            jX4b = Q0x[G0x.msk];
        if (!jX4b) {
            G0x.msk = fR2x++;
            jX4b = a9j.cU1x("iframe");
            jX4b.style.position = "absolute";
            Q0x[G0x.msk] = jX4b
        }
        d0x.value = jX4b;
        var cc1x = jX4b.style;
        cc1x.top = (parseInt(a9j.cX1x(G0x, "top")) || 0) + "px";
        cc1x.left = (parseInt(a9j.cX1x(G0x, "left")) || 0) + "px";
        cc1x.width = G0x.offsetWidth + "px";
        cc1x.height = G0x.offsetHeight + "px";
        G0x.insertAdjacentElement("beforeBegin", jX4b)
    });
    ba0x.bok0x = ba0x.bok0x.dY2x(function(d0x) {
        d0x.stopped = !0;
        var jX4b = Q0x[d0x.args[0].msk];
        if ( !! jX4b) a9j.mf4j(jX4b)
    })
})();
(function() {
    var c0x = NEJ.P,
        M0x = c0x("nej.p"),
        a9j = c0x("nej.e"),
        ba0x = c0x("nej.h");
    if (M0x.lX4b.trident1) return;
    ba0x.yb8T = function() {
        var uf7Y = {
            touchcancel: "MSPointerCancel",
            touchstart: "MSPointerDown",
            touchmove: "MSPointerMove",
            touchend: "MSPointerUp"
        };
        return ba0x.yb8T.dY2x(function(d0x) {
            var bg0x = ba0x.boi0x.apply(ba0x, d0x.args);
            if (!bg0x) {
                d0x.stopped = !0;
                return
            }
            var t0x = uf7Y[bg0x[1]];
            if ( !! t0x && ("on" + t0x).toLowerCase() in bg0x[0]) {
                bg0x[4] = bg0x[1];
                bg0x[1] = t0x;
                d0x.stopped = !0;
                d0x.value = bg0x
            }
        })
    }();
    ba0x.YE5J = function(YD5I) {
        return !0
    };
    ba0x.YC5H = ba0x.YC5H.dY2x(function(d0x) {
        d0x.stopped = !0;
        var eX2x = d0x.args[0];
        a9j.W0x(eX2x, "display", "none");
        try {
            eX2x.contentWindow.document.body.innerHTML = "&nbsp;"
        } catch (ex) {}
    })
})();
(function() {
    var c0x = NEJ.P,
        Y0x = NEJ.O,
        M0x = c0x("nej.p"),
        a9j = c0x("nej.e"),
        h0x = c0x("nej.v"),
        k0x = c0x("nej.u"),
        ba0x = c0x("nej.h"),
        bnJ0x = {};
    if (M0x.lX4b.trident) return;
    ba0x.Im0x = ba0x.Im0x.dY2x(function(d0x) {
        d0x.stopped = !0;
        var i0x = d0x.args[0];
        if (!i0x) {
            d0x.value = null;
            return
        }
        var s0x = 0,
            n0x = [];
        while ( !! i0x[s0x]) {
            n0x.push(i0x[s0x++])
        }
        d0x.value = n0x
    });
    ba0x.boN0x = ba0x.boN0x.dY2x(function(d0x) {
        d0x.stopped = !0;
        var bs0x = [];
        k0x.be0x(d0x.args[0].childNodes, function(f0x) {
            if (f0x.nodeType == 1) bs0x.push(f0x)
        });
        d0x.value = bs0x
    });
    ba0x.boM0x = ba0x.boM0x.dY2x(function(d0x) {
        var G0x = d0x.args[0];
        if ( !! G0x.getElementsByClassName) return;
        d0x.stopped = !0;
        var n0x = [],
            bnI0x = new RegExp("(\\s|^)(?:" + d0x.args[1].replace(/\s+/g, "|") + ")(?=\\s|$)");
        k0x.be0x(G0x.getElementsByTagName("*"), function(f0x) {
            if (bnI0x.test(f0x.className)) n0x.push(f0x)
        });
        d0x.value = n0x
    });
    ba0x.bow0x = ba0x.bow0x.dY2x(function(d0x) {
        var fB2x = d0x.args[0],
            mJ5O = d0x.args[1];
        if (fB2x.selectionStart == null) {
            d0x.stopped = !0;
            var cE1x = fB2x.createTextRange();
            cE1x.collapse(!0);
            cE1x.moveStart("character", mJ5O.start);
            cE1x.moveEnd("character", mJ5O.end - mJ5O.start);
            cE1x.select();
            fB2x.focus()
        }
    });
    ba0x.bot0x = ba0x.bot0x.dY2x(function(d0x) {
        var fB2x = d0x.args[0];
        fB2x.focus();
        if (fB2x.selectionStart == null) {
            d0x.stopped = !0;
            var bwa1x = document.selection.createRange();
            var bwm1x = fB2x.createTextRange();
            bwm1x.moveToBookmark(bwa1x.getBookmark());
            var bnH0x = fB2x.createTextRange();
            bnH0x.collapse(!0);
            bnH0x.setEndPoint("EndToStart", bwm1x);
            var iv3x = bnH0x.text.length;
            d0x.value = {
                start: iv3x,
                end: iv3x + bwa1x.text.length
            }
        }
    });
    ba0x.bop0x = ba0x.bop0x.dY2x(function(d0x) {
        if ( !! window.XMLSerializer) return;
        d0x.stopped = !0;
        var G0x = d0x.args[0];
        d0x.value = G0x.xml != null ? G0x.xml : G0x.outHTML
    });
    ba0x.bom0x = function() {
        var IX1x = ["Msxml2.DOMDocument.6.0", "Msxml2.DOMDocument.3.0"];
        var bNN5S = function() {
            try {
                for (var i = 0, l = IX1x.length; i < l; i++) return new ActiveXObject(IX1x[i])
            } catch (ex) {
                return null
            }
        };
        return ba0x.bom0x.dY2x(function(d0x) {
            if ( !! window.DOMParser) return;
            d0x.stopped = !0;
            var AM9D = bNN5S();
            if ( !! AM9D && AM9D.loadXML(d0x.args[0]) && !AM9D.parseError.errorCode) d0x.value = AM9D.documentElement
        })
    }();
    ba0x.yb8T = function() {
        var iw3x = {
            input: "propertychange",
            load: "readystatechange"
        };
        for (var x in iw3x) bnJ0x[iw3x[x]] = !0;
        var bNS5X = function(G0x, t0x) {
            if ("on" + t0x in G0x) return null;
            return iw3x[t0x] || ""
        };
        var bNT5Y = function(t0x, da1x) {
            var dn1x = da1x;
            switch (t0x) {
                case "readystatechange":
                    dn1x = function(d0x) {
                        var G0x = h0x.U0x(d0x) || this;
                        if (G0x.readyState == "loaded" || G0x.readyState == "complete") {
                            d0x.target = G0x;
                            da1x.call(G0x, d0x)
                        }
                    };
                    break;
                case "propertychange":
                    dn1x = function(d0x) {
                        var G0x = h0x.U0x(d0x) || this;
                        if ("value" in G0x && d0x.propertyName == "value") {
                            d0x.target = G0x;
                            da1x.call(G0x, d0x)
                        }
                    };
                    break
            }
            return dn1x
        };
        return ba0x.yb8T.dY2x(function(d0x) {
            var bg0x = ba0x.boi0x.apply(ba0x, d0x.args);
            if (!bg0x) {
                d0x.stopped = !0;
                return
            }
            var t0x = bNS5X(bg0x[0], bg0x[1]);
            if ( !! t0x) {
                d0x.stopped = !0;
                bg0x[4] = bg0x[1];
                bg0x[1] = t0x;
                if ( !! bg0x[2]) {
                    bg0x[5] = bg0x[2];
                    bg0x[2] = bNT5Y(bg0x[1], bg0x[2])
                }
                d0x.value = bg0x
            }
        }, function(d0x) {
            var bg0x = d0x.value;
            if (!bg0x[0] || !k0x.fV2x(bg0x[2])) return;
            if (!k0x.fV2x(bg0x[5])) bg0x[5] = bg0x[2];
            bg0x[2] = bg0x[2].g0x(bg0x[0])
        })
    }();
    ba0x.boa0x = ba0x.boa0x.dY2x(function(d0x) {
        var bg0x = d0x.args;
        if ( !! bnJ0x[bg0x[1]] || !document.addEventListener) {
            d0x.stopped = !0;
            bg0x[0].attachEvent("on" + bg0x[1], bg0x[2])
        }
    });
    ba0x.YI5N = ba0x.YI5N.dY2x(function(d0x) {
        var bg0x = d0x.args;
        if ( !! bnJ0x[bg0x[1]] || !document.removeEventListener) {
            d0x.stopped = !0;
            bg0x[0].detachEvent("on" + bg0x[1], bg0x[2])
        }
    });
    ba0x.bnY0x = ba0x.bnY0x.dY2x(function(d0x) {
        if (!document.createEvent) {
            d0x.stopped = !0;
            var bg0x = d0x.args,
                bzR2x = document.createEventObject();
            NEJ.X(bzR2x, bg0x[2]);
            try {
                bg0x[0].fireEvent("on" + bg0x[1], bzR2x)
            } catch (ex) {
                console.error(ex.message);
                console.error(ex.stack)
            }
        }
    });
    ba0x.bnU0x = ba0x.bnU0x.dY2x(function(d0x) {
        var bg0x = d0x.args,
            T0x = bg0x[1].toLowerCase();
        if (T0x == "opacity" && !(T0x in document.body.style)) {
            bg0x[1] = "filter";
            bg0x[2] = "alpha(opacity=" + bg0x[2] * 100 + ")"
        }
    });
    ba0x.bnP0x = function() {
        var fY2x = 30;
        return ba0x.bnP0x.dY2x(function(d0x) {
            var G0x = d0x.args[0];
            if (!G0x.styleSheet) return;
            d0x.stopped = !0;
            var jm4q = d0x.args[1];
            var i0x = document.styleSheets;
            if (i0x.length > fY2x) {
                G0x = i0x[fY2x];
                jm4q = G0x.cssText + jm4q
            } else {
                G0x = G0x.styleSheet
            }
            G0x.cssText = jm4q
        })
    }();
    ba0x.bnO0x = ba0x.bnO0x.dY2x(function(d0x) {
        var bg0x = d0x.args,
            vY7R = bg0x[0].sheet;
        if ( !! vY7R) return;
        d0x.stopped = !0;
        var vY7R = bg0x[0].styleSheet,
            bo0x = vY7R.rules.length,
            bs0x = bg0x[1].split(/[\{\}]/);
        vY7R.addRule(bs0x[0], bs0x[1], bo0x);
        d0x.value = vY7R.rules[bo0x]
    });
    ba0x.bos0x = function() {
        var BK9B = function(dH2x, d0x) {
            a9j.x0x(h0x.U0x(d0x), dH2x)
        };
        return ba0x.bos0x.dY2x(function(d0x) {
            if (M0x.cP1x.release >= "4.0") return;
            var bg0x = d0x.args;
            if (bg0x[1] != 1) {
                h0x.q0x(bg0x[0], "blur", BK9B.g0x(null, bg0x[2]));
                bg0x[1] = -1
            }
        })
    }();
    ba0x.YE5J = function(YD5I) {
        return !0
    };
    ba0x.bnL0x = ba0x.bnL0x.dY2x(function(d0x) {
        var bg0x = d0x.args,
            f0x = (bg0x[0].attributes || Y0x)[bg0x[1]];
        if ( !! f0x) {
            d0x.stopped = !0;
            d0x.value = f0x.value
        }
    }, function(d0x) {
        var bg0x = d0x.args;
        if (bg0x[1] == "maxlength" && d0x.value == 2147483647) d0x.value = ""
    });
    if (M0x.cP1x.release < 5) {
        ba0x.boj0x = function() {
            var eR2x, eX2x, jn4r = [],
                bnF0x = "cb-" + +(new Date),
                bi0x = '<script>parent.nej.h["' + bnF0x + '"] = !0;parent.location.hash = decodeURIComponent("#<HASH>");</scr' + "ipt>";
            var bEE3x = function() {
                eR2x = window.clearTimeout(eR2x);
                if (!jn4r.length) return;
                var dE2x = jn4r.shift();
                try {
                    var tJ7C = eX2x.contentWindow.document;
                    tJ7C.open();
                    tJ7C.write("<head><title>");
                    tJ7C.write(document.title);
                    tJ7C.write("</title>");
                    tJ7C.write(bi0x.replace("#<HASH>", encodeURIComponent(dE2x)));
                    tJ7C.write("</head><body></body>");
                    if (location.hostname != document.domain) tJ7C.domain = document.domain;
                    tJ7C.close();
                    ba0x[bnF0x] = !1
                } catch (ex) {
                    console.log(ex.message || ex);
                    jn4r.unshift(dE2x)
                }
                eR2x = window.setTimeout(bEE3x, 50)
            };
            return ba0x.boj0x.dY2x(function(d0x) {
                d0x.stopped = !0;
                var dE2x = d0x.args[0];
                if ( !! ba0x[bnF0x] || !eX2x && !dE2x) return;
                jn4r.push(dE2x);
                if (!eX2x) eX2x = a9j.YB5G();
                bEE3x()
            })
        }()
    }
    try {
        document.execCommand("BackgroundImageCache", !1, !0)
    } catch (e) {}
})();
(function() {
    var c0x = NEJ.P,
        h0x = c0x("nej.v"),
        ba0x = c0x("nej.h"),
        M0x = c0x("nej.p"),
        YA5F = M0x.bvN1x;
    if (M0x.lX4b.gecko) return;
    var NB2x = function() {
        YA5F.css3d = YA5F.css3d || "MozPerspective" in document.body.style;
        if (!document.body.insertAdjacentElement) HTMLElement.prototype.insertAdjacentElement = function(hI3x, G0x) {
            if (!hI3x || !G0x) return;
            switch (hI3x) {
                case "beforeEnd":
                    this.appendChild(G0x);
                    return;
                case "beforeBegin":
                    this.parentNode.insertBefore(G0x, this);
                    return;
                case "afterBegin":
                    !this.firstChild ? this.appendChild(G0x) : this.insertBefore(G0x, this.firstChild);
                    return;
                case "afterEnd":
                    !this.nextSibling ? this.parentNode.appendChild(G0x) : this.parentNode.insertBefore(G0x, this.nextSibling);
                    return
            }
        };
        if (!("innerText" in document.body)) {
            HTMLElement.prototype["__defineGetter__"]("innerText", function() {
                return this.textContent
            });
            HTMLElement.prototype["__defineSetter__"]("innerText", function(bi0x) {
                this.textContent = bi0x
            })
        }
    };
    ba0x.yb8T = function() {
        var fQ2x = /^(?:transitionend|animationend|animationstart|animationiteration)$/i;
        return ba0x.yb8T.dY2x(function(d0x) {
            var bg0x = d0x.args;
            if (fQ2x.test(bg0x[1] || "")) {
                d0x.stopped = !0;
                d0x.value = bg0x
            }
        })
    }();
    ba0x.bNM5R = function() {
        var bOl5q = function(d0x) {
            h0x.bh0x(d0x);
            h0x.U0x(d0x).control.click()
        };
        return function(G0x) {
            h0x.q0x(G0x, "click", bOl5q)
        }
    }();
    NB2x()
})();
(function() {
    var c0x = NEJ.P,
        a9j = c0x("nej.e"),
        ba0x = c0x("nej.h");
    var Yz5E = function() {
        var nx5C = !! document.body.classList;
        return function() {
            return nx5C
        }
    }();
    var bpQ0x = function() {
        var cO1x = /\s+/g;
        return function(eY2x) {
            eY2x = (eY2x || "").trim();
            return !eY2x ? null : new RegExp("(\\s|^)(?:" + eY2x.replace(cO1x, "|") + ")(?=\\s|$)", "g")
        }
    }();
    ba0x.MD2x = ba0x.MD2x.dY2x(function(d0x) {
        if (Yz5E()) return;
        d0x.stopped = !0;
        var bg0x = d0x.args,
            G0x = a9j.w0x(bg0x[0]);
        if (!G0x || !bg0x[1] && !bg0x[2]) return;
        var eY2x = G0x.className || "";
        var Il0x = " " + (bg0x[2] || ""),
            Ij0x = bpQ0x((bg0x[1] || "") + Il0x); !! Ij0x && (eY2x = eY2x.replace(Ij0x, "$1"));
        G0x.className = (eY2x + Il0x).replace(/\s+/g, " ").trim()
    });
    ba0x.boL0x = ba0x.boL0x.dY2x(function(d0x) {
        if (Yz5E()) return;
        d0x.stopped = !0;
        var bg0x = d0x.args;
        ba0x.MD2x(bg0x[0], "", bg0x[1])
    });
    ba0x.boJ0x = ba0x.boJ0x.dY2x(function(d0x) {
        if (Yz5E()) return;
        d0x.stopped = !0;
        var bg0x = d0x.args;
        ba0x.MD2x(bg0x[0], bg0x[1], "")
    });
    ba0x.boB0x = ba0x.boB0x.dY2x(function(d0x) {
        if (Yz5E()) return;
        d0x.stopped = !0;
        var bg0x = d0x.args,
            G0x = a9j.w0x(bg0x[0]);
        if (!G0x) {
            d0x.value = !1;
            return
        }
        var cO1x = bpQ0x(bg0x[1]);
        d0x.value = !cO1x ? !1 : cO1x.test(G0x.className || "")
    })
})();
(function() {
    var c0x = NEJ.P,
        M0x = c0x("nej.p"),
        ba0x = c0x("nej.h");
    if (M0x.lX4b.webkit) return;
    ba0x.YE5J = function(YD5I) {
        return !0
    }
})();
(function() {
    var c0x = NEJ.P,
        ba0x = c0x("nej.h"),
        a9j = c0x("nej.e"),
        k0x = c0x("nej.u"),
        h0x = c0x("nej.v"),
        cJ1x = c0x("nej.x"),
        Q0x = {};
    var bqc0x = function(G0x) {
        G0x = a9j.w0x(G0x);
        if (!G0x || !Q0x[G0x.id]) return;
        var Yx5C = !0,
            C0x = G0x.id;
        k0x.dZ2x(Q0x[C0x], function() {
            Yx5C = !1;
            return !0
        });
        if (Yx5C) delete Q0x[C0x]
    };
    h0x.q0x = cJ1x.q0x = function() {
        var bOo5t = function() {
            var bg0x = ba0x.yb8T.apply(ba0x, arguments);
            if (!bg0x || !bg0x[2]) return;
            var sN6H = a9j.kQ4U(bg0x[0]),
                nu5z = Q0x[sN6H] || {};
            Q0x[sN6H] = nu5z;
            sN6H = bg0x[4] || bg0x[1];
            var yg8Y = nu5z[sN6H] || [];
            nu5z[sN6H] = yg8Y;
            yg8Y.push({
                type: bg0x[1],
                func: bg0x[2],
                capt: !! bg0x[3],
                sfun: bg0x[5] || bg0x[2]
            });
            return bg0x.slice(0, 4)
        };
        return function() {
            var bg0x = bOo5t.apply(null, arguments);
            if ( !! bg0x) ba0x.boa0x.apply(ba0x, bg0x);
            return this
        }
    }();
    h0x.mc4g = cJ1x.mc4g = function() {
        var bOr5w = function() {
            var uO7H = arguments,
                sN6H = a9j.kQ4U(uO7H[0]),
                nu5z = Q0x[sN6H],
                t0x = (uO7H[1] || "").toLowerCase(),
                d0x = uO7H[2];
            if (!nu5z || !t0x || !d0x) return;
            nu5z = nu5z[t0x];
            if (!nu5z) return;
            var bOz5E = !! uO7H[3],
                s0x = k0x.cT1x(nu5z, function(iw3x) {
                    return d0x == iw3x.sfun && bOz5E == iw3x.capt
                });
            if (s0x < 0) return;
            var iw3x = nu5z.splice(s0x, 1)[0];
            return !iw3x ? null : [a9j.w0x(sN6H), iw3x.type, iw3x.func, iw3x.capt]
        };
        return function() {
            var bg0x = bOr5w.apply(null, arguments);
            if ( !! bg0x) {
                ba0x.YI5N.apply(ba0x, bg0x);
                bqc0x(bg0x[0])
            }
            return this
        }
    }();
    h0x.ip3x = cJ1x.ip3x = function() {
        var btN1x = function() {
            var uO7H = arguments,
                sN6H = a9j.kQ4U(uO7H[0]),
                nu5z = Q0x[sN6H],
                yg8Y = (uO7H[1] || "").toLowerCase();
            if (!nu5z || !yg8Y) return;
            var G0x = a9j.w0x(sN6H);
            k0x.lU4Y(nu5z[yg8Y], function(iw3x, s0x, i0x) {
                ba0x.YI5N(G0x, iw3x.type, iw3x.func, iw3x.capt);
                i0x.splice(s0x, 1)
            });
            delete nu5z[yg8Y]
        };
        var bOA5F = function(G0x) {
            G0x = a9j.w0x(G0x);
            if (!G0x) return;
            var C0x = G0x.id;
            k0x.dZ2x(Q0x[C0x], function(i0x, t0x) {
                btN1x(C0x, t0x)
            });
            delete Q0x[C0x]
        };
        return function(G0x, t0x) {
            !t0x ? bOA5F(G0x) : btN1x(G0x, t0x);
            bqc0x(G0x);
            return this
        }
    }();
    h0x.U0x = function() {
        var bnw0x;
        var HG0x = function(T0x, G0x) {
            var bs0x = T0x.split(":");
            if (bs0x.length > 1) {
                if (!bnw0x) bnw0x = {
                    c: a9j.bz0x,
                    d: a9j.u0x,
                    a: a9j.gU2x
                };
                var HF0x = bnw0x[bs0x[0]];
                if ( !! HF0x) return !!HF0x(G0x, bs0x[1]);
                T0x = bs0x[1]
            }
            return !!a9j.gU2x(G0x, T0x) || !! a9j.u0x(G0x, T0x) || a9j.bz0x(G0x, T0x)
        };
        return function(d0x) {
            if (!d0x) return null;
            var G0x = d0x.target || d0x.srcElement,
                dB2x = arguments[1];
            if (!dB2x) return G0x;
            if (k0x.fj2x(dB2x)) dB2x = HG0x.g0x(null, dB2x);
            if (k0x.fV2x(dB2x)) {
                while (G0x) {
                    if ( !! dB2x(G0x)) return G0x;
                    G0x = G0x.parentNode
                }
                return null
            }
            return G0x
        }
    }();
    h0x.bh0x = function(d0x) {
        h0x.rc6W(d0x);
        h0x.cf1x(d0x);
        return this
    };
    h0x.rc6W = function(d0x) {
        if ( !! d0x) { !! d0x.stopPropagation ? d0x.stopPropagation() : d0x.cancelBubble = !0
        }
        return this
    };
    h0x.cf1x = function(d0x) {
        if ( !! d0x) { !! d0x.preventDefault ? d0x.preventDefault() : d0x.returnValue = !1
        }
        return this
    };
    h0x.cuX2x = function() {
        var pu5z = !1;
        var bOE5J = function() {
            if (pu5z) return;
            pu5z = !0;
            h0x.q0x(document, "click", bOX5c, !0)
        };
        var bOX5c = function(d0x) {
            var G0x = h0x.U0x(d0x),
                bPt5y = a9j.u0x(G0x, "stopped");
            if (bPt5y == "true") {
                h0x.bh0x(d0x);
                a9j.u0x(G0x, "stopped", "false")
            }
        };
        return function(d0x) {
            if (!d0x) return;
            if (d0x.type == "click") {
                h0x.bh0x(d0x);
                return
            }
            bOE5J();
            a9j.u0x(h0x.U0x(d0x), "stopped", "true")
        }
    }();
    h0x.kv4z = function(d0x) {
        return d0x.pageX != null ? d0x.pageX : d0x.clientX + a9j.oN5S().scrollLeft
    };
    h0x.nq5v = function(d0x) {
        return d0x.pageY != null ? d0x.pageY : d0x.clientY + a9j.oN5S().scrollTop
    };
    h0x.A0x = cJ1x.A0x = function(G0x, t0x, e0x) {
        var bg0x = ba0x.yb8T(G0x, t0x);
        if ( !! bg0x) ba0x.bnY0x(bg0x[0], bg0x[1], e0x);
        return this
    };
    c0x("dbg").dumpEV = function() {
        return Q0x
    };
    cJ1x.isChange = !0
})();
(function() {
    var o = !0,
        w = null;
    (function(B) {
        function v(a) {
            if ("bug-string-char-index" == a) return "a" != "a" [0];
            var f, c = "json" == a;
            if (c || "json-stringify" == a || "json-parse" == a) {
                if ("json-stringify" == a || c) {
                    var d = k.stringify,
                        b = "function" == typeof d && l;
                    if (b) {
                        (f = function() {
                            return 1
                        }).toJSON = f;
                        try {
                            b = "0" === d(0) && "0" === d(new Number) && '""' == d(new String) && d(m) === r && d(r) === r && d() === r && "1" === d(f) && "[1]" == d([f]) && "[null]" == d([r]) && "null" == d(w) && "[null,null,null]" == d([r, m, w]) && '{"a":[1,true,false,null,"\\u0000\\b\\n\\f\\r\\t"]}' == d({
                                    a: [f, o, !1, w, "\0\b\n\f\r\t"]
                                }) && "1" === d(w, f) && "[\n 1,\n 2\n]" == d([1, 2], w, 1) && '"-271821-04-20T00:00:00.000Z"' == d(new Date(-864e13)) && '"+275760-09-13T00:00:00.000Z"' == d(new Date(864e13)) && '"-000001-01-01T00:00:00.000Z"' == d(new Date(-621987552e5)) && '"1969-12-31T23:59:59.999Z"' == d(new Date(-1))
                        } catch (n) {
                            b = !1
                        }
                    }
                    if (!c) return b
                }
                if ("json-parse" == a || c) {
                    a = k.parse;
                    if ("function" == typeof a) try {
                        if (0 === a("0") && !a(!1)) {
                            f = a('{"a":[1,true,false,null,"\\u0000\\b\\n\\f\\r\\t"]}');
                            var e = 5 == f.a.length && 1 === f.a[0];
                            if (e) {
                                try {
                                    e = !a('"\t"')
                                } catch (g) {}
                                if (e) try {
                                    e = 1 !== a("01")
                                } catch (i) {}
                            }
                        }
                    } catch (O) {
                        e = !1
                    }
                    if (!c) return e
                }
                return b && e
            }
        }
        var m = {}.toString,
            p, C, r, D = typeof define === "function" && define.amd,
            k = "object" == typeof exports && exports;
        k || D ? "object" == typeof JSON && JSON ? k ? (k.stringify = JSON.stringify, k.parse = JSON.parse) : k = JSON : D && (k = B.JSON = {}) : k = B.JSON || (B.JSON = {});
        var l = new Date(-0xc782b5b800cec);
        try {
            l = -109252 == l.getUTCFullYear() && 0 === l.getUTCMonth() && 1 === l.getUTCDate() && 10 == l.getUTCHours() && 37 == l.getUTCMinutes() && 6 == l.getUTCSeconds() && 708 == l.getUTCMilliseconds()
        } catch (P) {}
        if (!v("json")) {
            var s = v("bug-string-char-index");
            if (!l) var t = Math.floor,
                J = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334],
                z = function(a, f) {
                    return J[f] + 365 * (a - 1970) + t((a - 1969 + (f = +(f > 1))) / 4) - t((a - 1901 + f) / 100) + t((a - 1601 + f) / 400)
                };
            if (!(p = {}.hasOwnProperty)) p = function(a) {
                var f = {},
                    c;
                if ((f.__proto__ = w, f.__proto__ = {
                        toString: 1
                    }, f).toString != m) p = function(a) {
                    var f = this.__proto__,
                        a = a in (this.__proto__ = w, this);
                    this.__proto__ = f;
                    return a
                };
                else {
                    c = f.constructor;
                    p = function(a) {
                        var f = (this.constructor || c).prototype;
                        return a in this && !(a in f && this[a] === f[a])
                    }
                }
                f = w;
                return p.call(this, a)
            };
            var K = {
                "boolean": 1,
                number: 1,
                string: 1,
                "undefined": 1
            };
            C = function(a, f) {
                var c = 0,
                    b, h, n;
                (b = function() {
                    this.valueOf = 0
                }).prototype.valueOf = 0;
                h = new b;
                for (n in h) p.call(h, n) && c++;
                b = h = w;
                if (c) c = c == 2 ?
                    function(a, f) {
                        var c = {},
                            b = m.call(a) == "[object Function]",
                            d;
                        for (d in a)!(b && d == "prototype") && !p.call(c, d) && (c[d] = 1) && p.call(a, d) && f(d)
                    } : function(a, f) {
                    var c = m.call(a) == "[object Function]",
                        b, d;
                    for (b in a)!(c && b == "prototype") && p.call(a, b) && !(d = b === "constructor") && f(b);
                    (d || p.call(a, b = "constructor")) && f(b)
                };
                else {
                    h = ["valueOf", "toString", "toLocaleString", "propertyIsEnumerable", "isPrototypeOf", "hasOwnProperty", "constructor"];
                    c = function(a, f) {
                        var c = m.call(a) == "[object Function]",
                            b, d;
                        if (d = !c) if (d = typeof a.constructor != "function") {
                            d = typeof a.hasOwnProperty;
                            d = d == "object" ? !! a.hasOwnProperty : !K[d]
                        }
                        d = d ? a.hasOwnProperty : p;
                        for (b in a)!(c && b == "prototype") && d.call(a, b) && f(b);
                        for (c = h.length; b = h[--c]; d.call(a, b) && f(b));
                    }
                }
                c(a, f)
            };
            if (!v("json-stringify")) {
                var L = {
                        92: "\\\\",
                        34: '\\"',
                        8: "\\b",
                        12: "\\f",
                        10: "\\n",
                        13: "\\r",
                        9: "\\t"
                    },
                    u = function(a, f) {
                        return ("000000" + (f || 0)).slice(-a)
                    },
                    G = function(a) {
                        var f = '"',
                            b = 0,
                            d = a.length,
                            h = d > 10 && s,
                            n;
                        for (h && (n = a.split("")); b < d; b++) {
                            var e = a.charCodeAt(b);
                            switch (e) {
                                case 8:
                                case 9:
                                case 10:
                                case 12:
                                case 13:
                                case 34:
                                case 92:
                                    f = f + L[e];
                                    break;
                                default:
                                    if (e < 32) {
                                        f = f + ("\\u00" + u(2, e.toString(16)));
                                        break
                                    }
                                    f = f + (h ? n[b] : s ? a.charAt(b) : a[b])
                            }
                        }
                        return f + '"'
                    },
                    E = function(a, b, c, d, h, n, e) {
                        var g = b[a],
                            i, j, k, l, q, s, v, x, y;
                        try {
                            g = b[a]
                        } catch (A) {}
                        if (typeof g == "object" && g) {
                            i = m.call(g);
                            if (i == "[object Date]" && !p.call(g, "toJSON")) if (g > -1 / 0 && g < 1 / 0) {
                                if (z) {
                                    k = t(g / 864e5);
                                    for (i = t(k / 365.2425) + 1970 - 1; z(i + 1, 0) <= k; i++);
                                    for (j = t((k - z(i, 0)) / 30.42); z(i, j + 1) <= k; j++);
                                    k = 1 + k - z(i, j);
                                    l = (g % 864e5 + 864e5) % 864e5;
                                    q = t(l / 36e5) % 24;
                                    s = t(l / 6e4) % 60;
                                    v = t(l / 1e3) % 60;
                                    l = l % 1e3
                                } else {
                                    i = g.getUTCFullYear();
                                    j = g.getUTCMonth();
                                    k = g.getUTCDate();
                                    q = g.getUTCHours();
                                    s = g.getUTCMinutes();
                                    v = g.getUTCSeconds();
                                    l = g.getUTCMilliseconds()
                                }
                                g = (i <= 0 || i >= 1e4 ? (i < 0 ? "-" : "+") + u(6, i < 0 ? -i : i) : u(4, i)) + "-" + u(2, j + 1) + "-" + u(2, k) + "T" + u(2, q) + ":" + u(2, s) + ":" + u(2, v) + "." + u(3, l) + "Z"
                            } else g = w;
                            else if (typeof g.toJSON == "function" && (i != "[object Number]" && i != "[object String]" && i != "[object Array]" || p.call(g, "toJSON"))) g = g.toJSON(a)
                        }
                        c && (g = c.call(b, a, g));
                        if (g === w) return "null";
                        i = m.call(g);
                        if (i == "[object Boolean]") return "" + g;
                        if (i == "[object Number]") return g > -1 / 0 && g < 1 / 0 ? "" + g : "null";
                        if (i == "[object String]") return G("" + g);
                        if (typeof g == "object") {
                            for (a = e.length; a--;) if (e[a] === g) throw TypeError();
                            e.push(g);
                            x = [];
                            b = n;
                            n = n + h;
                            if (i == "[object Array]") {
                                j = 0;
                                for (a = g.length; j < a; y || (y = o), j++) {
                                    i = E(j, g, c, d, h, n, e);
                                    x.push(i === r ? "null" : i)
                                }
                                a = y ? h ? "[\n" + n + x.join(",\n" + n) + "\n" + b + "]" : "[" + x.join(",") + "]" : "[]"
                            } else {
                                C(d || g, function(a) {
                                    var b = E(a, g, c, d, h, n, e);
                                    b !== r && x.push(G(a) + ":" + (h ? " " : "") + b);
                                    y || (y = o)
                                });
                                a = y ? h ? "{\n" + n + x.join(",\n" + n) + "\n" + b + "}" : "{" + x.join(",") + "}" : "{}"
                            }
                            e.pop();
                            return a
                        }
                    };
                k.stringify = function(a, b, c) {
                    var d, h, j;
                    if (typeof b == "function" || typeof b == "object" && b) if (m.call(b) == "[object Function]") h = b;
                    else if (m.call(b) == "[object Array]") {
                        j = {};
                        for (var e = 0, g = b.length, i; e < g; i = b[e++], (m.call(i) == "[object String]" || m.call(i) == "[object Number]") && (j[i] = 1));
                    }
                    if (c) if (m.call(c) == "[object Number]") {
                        if ((c = c - c % 1) > 0) {
                            d = "";
                            for (c > 10 && (c = 10); d.length < c; d = d + " ");
                        }
                    } else m.call(c) == "[object String]" && (d = c.length <= 10 ? c : c.slice(0, 10));
                    return E("", (i = {}, i[""] = a, i), h, j, d, "", [])
                }
            }
            if (!v("json-parse")) {
                var M = String.fromCharCode,
                    N = {
                        92: "\\",
                        34: '"',
                        47: "/",
                        98: "\b",
                        116: "\t",
                        110: "\n",
                        102: "\f",
                        114: "\r"
                    },
                    b, A, j = function() {
                        b = A = w;
                        throw SyntaxError()
                    },
                    q = function() {
                        for (var a = A, f = a.length, c, d, h, k, e; b < f;) {
                            e = a.charCodeAt(b);
                            switch (e) {
                                case 9:
                                case 10:
                                case 13:
                                case 32:
                                    b++;
                                    break;
                                case 123:
                                case 125:
                                case 91:
                                case 93:
                                case 58:
                                case 44:
                                    c = s ? a.charAt(b) : a[b];
                                    b++;
                                    return c;
                                case 34:
                                    c = "@";
                                    for (b++; b < f;) {
                                        e = a.charCodeAt(b);
                                        if (e < 32) j();
                                        else if (e == 92) {
                                            e = a.charCodeAt(++b);
                                            switch (e) {
                                                case 92:
                                                case 34:
                                                case 47:
                                                case 98:
                                                case 116:
                                                case 110:
                                                case 102:
                                                case 114:
                                                    c = c + N[e];
                                                    b++;
                                                    break;
                                                case 117:
                                                    d = ++b;
                                                    for (h = b + 4; b < h; b++) {
                                                        e = a.charCodeAt(b);
                                                        e >= 48 && e <= 57 || e >= 97 && e <= 102 || e >= 65 && e <= 70 || j()
                                                    }
                                                    c = c + M("0x" + a.slice(d, b));
                                                    break;
                                                default:
                                                    j()
                                            }
                                        } else {
                                            if (e == 34) break;
                                            e = a.charCodeAt(b);
                                            for (d = b; e >= 32 && e != 92 && e != 34;) e = a.charCodeAt(++b);
                                            c = c + a.slice(d, b)
                                        }
                                    }
                                    if (a.charCodeAt(b) == 34) {
                                        b++;
                                        return c
                                    }
                                    j();
                                default:
                                    d = b;
                                    if (e == 45) {
                                        k = o;
                                        e = a.charCodeAt(++b)
                                    }
                                    if (e >= 48 && e <= 57) {
                                        for (e == 48 && (e = a.charCodeAt(b + 1), e >= 48 && e <= 57) && j(); b < f && (e = a.charCodeAt(b), e >= 48 && e <= 57); b++);
                                        if (a.charCodeAt(b) == 46) {
                                            for (h = ++b; h < f && (e = a.charCodeAt(h), e >= 48 && e <= 57); h++);
                                            h == b && j();
                                            b = h
                                        }
                                        e = a.charCodeAt(b);
                                        if (e == 101 || e == 69) {
                                            e = a.charCodeAt(++b);
                                            (e == 43 || e == 45) && b++;
                                            for (h = b; h < f && (e = a.charCodeAt(h), e >= 48 && e <= 57); h++);
                                            h == b && j();
                                            b = h
                                        }
                                        return +a.slice(d, b)
                                    }
                                    k && j();
                                    if (a.slice(b, b + 4) == "true") {
                                        b = b + 4;
                                        return o
                                    }
                                    if (a.slice(b, b + 5) == "false") {
                                        b = b + 5;
                                        return false
                                    }
                                    if (a.slice(b, b + 4) == "null") {
                                        b = b + 4;
                                        return w
                                    }
                                    j()
                            }
                        }
                        return "$"
                    },
                    F = function(a) {
                        var b, c;
                        a == "$" && j();
                        if (typeof a == "string") {
                            if ((s ? a.charAt(0) : a[0]) == "@") return a.slice(1);
                            if (a == "[") {
                                for (b = [];; c || (c = o)) {
                                    a = q();
                                    if (a == "]") break;
                                    if (c) if (a == ",") {
                                        a = q();
                                        a == "]" && j()
                                    } else j();
                                    a == "," && j();
                                    b.push(F(a))
                                }
                                return b
                            }
                            if (a == "{") {
                                for (b = {};; c || (c = o)) {
                                    a = q();
                                    if (a == "}") break;
                                    if (c) if (a == ",") {
                                        a = q();
                                        a == "}" && j()
                                    } else j();
                                    (a == "," || typeof a != "string" || (s ? a.charAt(0) : a[0]) != "@" || q() != ":") && j();
                                    b[a.slice(1)] = F(q())
                                }
                                return b
                            }
                            j()
                        }
                        return a
                    },
                    I = function(a, b, c) {
                        c = H(a, b, c);
                        c === r ? delete a[b] : a[b] = c
                    },
                    H = function(a, b, c) {
                        var d = a[b],
                            h;
                        if (typeof d == "object" && d) if (m.call(d) == "[object Array]") for (h = d.length; h--;) I(d, h, c);
                        else C(d, function(a) {
                                I(d, a, c)
                            });
                        return c.call(a, b, d)
                    };
                k.parse = function(a, f) {
                    var c, d;
                    b = 0;
                    A = "" + a;
                    c = F(q());
                    q() != "$" && j();
                    b = A = w;
                    return f && m.call(f) == "[object Function]" ? H((d = {}, d[""] = c, d), "", f) : c
                }
            }
        }
        D && define(function() {
            return k
        })
    })(this)
})();
(function() {
    var c0x = NEJ.P,
        M0x = c0x("nej.p");
    if (M0x.lX4b.trident0) return;
    JSON.parse = JSON.parse.dY2x(function(d0x) {
        var cL1x = d0x.args[0] || "";
        if (cL1x.length >= 5e5) {
            d0x.stopped = !0;
            d0x.value = eval("(" + cL1x + ")")
        }
    })
})();
(function() {
    var c0x = NEJ.P,
        Y0x = NEJ.O,
        bm0x = NEJ.F,
        dO2x = c0x("nej.g"),
        a9j = c0x("nej.e"),
        k0x = c0x("nej.u"),
        h0x = c0x("nej.v"),
        ba0x = c0x("nej.h"),
        cJ1x = c0x("nej.x"),
        HA0x, bnv0x = {},
        Q0x = document.createDocumentFragment();
    a9j.kQ4U = cJ1x.kQ4U = function(G0x) {
        G0x = a9j.w0x(G0x);
        if (!G0x) return;
        var C0x = !! G0x.id ? G0x.id : "auto-id-" + k0x.bnt0x(16);
        G0x.id = C0x;
        if (a9j.w0x(C0x) != G0x) bnv0x[C0x] = G0x;
        return C0x
    };
    a9j.w0x = cJ1x.w0x = function(G0x) {
        var f0x = bnv0x["" + G0x];
        if ( !! f0x) return f0x;
        if (!k0x.fj2x(G0x) && !k0x.tT7M(G0x)) return G0x;
        return document.getElementById(G0x)
    };
    a9j.cQ1x = cJ1x.cQ1x = function(G0x, dH2x) {
        G0x = a9j.w0x(G0x);
        if (!G0x) return null;
        var i0x = ba0x.boN0x(G0x);
        if ( !! dH2x) k0x.lU4Y(i0x, function(f0x, s0x) {
            if (!a9j.bz0x(f0x, dH2x)) i0x.splice(s0x, 1)
        });
        return i0x
    };
    a9j.I0x = cJ1x.I0x = function(G0x, eY2x) {
        G0x = a9j.w0x(G0x);
        return !G0x ? null : ba0x.boM0x(G0x, eY2x.trim())
    };
    a9j.bLi4m = cJ1x.bLi4m = function(G0x) {
        G0x = a9j.w0x(G0x);
        if ( !! G0x) {
            G0x = G0x.parentNode;
            while ( !! G0x) {
                if (G0x.scrollHeight > G0x.clientHeight) break;
                G0x = G0x.parentNode
            }
            if ( !! G0x) return G0x
        }
        var nu5z = document.body.scrollHeight,
            yg8Y = document.documentElement.scrollHeight;
        return yg8Y >= nu5z ? document.documentElement : document.body
    };
    a9j.oN5S = function() {
        var bLq4u = function(i0x) {
            var n0x = 0;
            k0x.be0x(i0x, function(gz2x) {
                if (!gz2x) return;
                if (!n0x) {
                    n0x = gz2x
                } else {
                    n0x = Math.min(n0x, gz2x)
                }
            });
            return n0x
        };
        return function(tJ7C) {
            var Hy0x = tJ7C || document,
                yp8h = Hy0x.body,
                yq8i = Hy0x.documentElement,
                n0x = {
                    scrollTop: Math.max(yp8h.scrollTop, yq8i.scrollTop),
                    scrollLeft: Math.max(yp8h.scrollLeft, yq8i.scrollLeft),
                    clientWidth: bLq4u([yp8h.clientWidth, yp8h.offsetWidth, yq8i.clientWidth, yq8i.offsetWidth]),
                    clientHeight: bLq4u([yp8h.clientHeight, yp8h.offsetHeight, yq8i.clientHeight, yq8i.offsetHeight])
                };
            n0x.scrollWidth = Math.max(n0x.clientWidth, yp8h.scrollWidth, yq8i.scrollWidth);
            n0x.scrollHeight = Math.max(n0x.clientHeight, yp8h.scrollHeight, yq8i.scrollHeight);
            return n0x
        }
    }();
    a9j.cuR2x = function(fY2x, no5t) {
        var n0x = NEJ.X({}, no5t),
            brh0x = fY2x.width / fY2x.height,
            Yv5A = no5t.width / no5t.height;
        if (brh0x > Yv5A && no5t.height > fY2x.height) {
            n0x.height = fY2x.height;
            n0x.width = n0x.height * Yv5A
        }
        if (brh0x < Yv5A && no5t.width > fY2x.width) {
            n0x.width = fY2x.width;
            n0x.height = n0x.width / Yv5A
        }
        return n0x
    };
    a9j.cuQ2x = function() {
        var cO1x = /\s+/;
        var sy6s = {
            left: function() {
                return 0
            },
            center: function(gD2x, no5t) {
                return (gD2x.width - no5t.width) / 2
            },
            right: function(gD2x, no5t) {
                return gD2x.width - no5t.width
            },
            top: function() {
                return 0
            },
            middle: function(gD2x, no5t) {
                return (gD2x.height - no5t.height) / 2
            },
            bottom: function(gD2x, no5t) {
                return gD2x.height - no5t.height
            }
        };
        return function(gD2x, no5t, mz5E) {
            var n0x = {},
                bs0x = (mz5E || "").split(cO1x),
                fX2x = sy6s[bs0x[1]] || sy6s.middle,
                fL2x = sy6s[bs0x[0]] || sy6s.center;
            n0x.top = fX2x(gD2x, no5t);
            n0x.left = fL2x(gD2x, no5t);
            return n0x
        }
    }();
    a9j.ry6s = cJ1x.ry6s = function(G0x, dH2x) {
        ba0x.boz0x(G0x, dH2x || a9j.u0x(G0x, "hover") || "js-hover");
        return this
    };
    a9j.Hu0x = cJ1x.Hu0x = function(G0x) {
        G0x = a9j.w0x(G0x);
        if (!G0x) return;
        ba0x.boy0x(G0x)
    };
    a9j.bPy5D = cJ1x.bPy5D = function() {
        var Q0x = {},
            bvj1x = 2;
        var bQu5z = function(C0x, dH2x, d0x) {
            Q0x[C0x] = [h0x.kv4z(d0x), h0x.nq5v(d0x)];
            a9j.y0x(C0x, dH2x)
        };
        var bQV5a = function(C0x, dH2x, d0x) {
            var bE0x = Q0x[C0x];
            if (!k0x.eq2x(bE0x)) return;
            var bRd5i = Math.abs(h0x.kv4z(d0x) - bE0x[0]),
                bRw5B = Math.abs(h0x.nq5v(d0x) - bE0x[1]);
            if (bRd5i > bvj1x || bRw5B > bvj1x) bnp0x(C0x, dH2x)
        };
        var bnp0x = function(C0x, dH2x) {
            if (k0x.eq2x(Q0x[C0x])) {
                Q0x[C0x] = -1;
                a9j.x0x(C0x, dH2x)
            }
        };
        return function(G0x, dH2x) {
            var C0x = a9j.kQ4U(G0x);
            if (!C0x || Q0x[C0x] != null) return;
            Q0x[C0x] = -1;
            dH2x = dH2x || a9j.u0x(C0x, "highlight") || "js-highlight";
            h0x.q0x(C0x, "touchstart", bQu5z.g0x(null, C0x, dH2x));
            h0x.q0x(document, "touchmove", bQV5a.g0x(null, C0x, dH2x));
            h0x.q0x(document, "touchend", bnp0x.g0x(null, C0x, dH2x));
            h0x.q0x(document, "touchcancel", bnp0x.g0x(null, C0x, dH2x))
        }
    }();
    a9j.ys8k = cJ1x.ys8k = function() {
        var bRL6F = function(C0x, dH2x, bSr6l) {
            var G0x = a9j.w0x(C0x),
                d0x = {
                    clazz: dH2x,
                    target: G0x
                };
            if (a9j.bz0x(G0x, dH2x)) {
                d0x.toggled = !1;
                a9j.x0x(G0x, dH2x)
            } else {
                d0x.toggled = !0;
                a9j.y0x(G0x, dH2x)
            }
            bSr6l.call(null, d0x)
        };
        return function(G0x, e0x) {
            G0x = a9j.w0x(G0x);
            if ( !! G0x) {
                var id3x = {
                    ontoggle: bm0x,
                    clazz: "js-toggle",
                    element: G0x.parentNode
                };
                if (k0x.fj2x(e0x)) {
                    var f0x = a9j.w0x(e0x); !! f0x ? id3x.element = f0x : id3x.clazz = e0x
                } else {
                    NEJ.EX(id3x, e0x);
                    id3x.element = a9j.w0x(id3x.element)
                }
                var C0x = a9j.kQ4U(id3x.element);
                h0x.q0x(G0x, "click", bRL6F.g0x(null, C0x, id3x.clazz, id3x.ontoggle || bm0x))
            }
            return this
        }
    }();
    a9j.lv4z = cJ1x.lv4z = function(G0x, e0x) {
        G0x = a9j.w0x(G0x);
        if (!G0x) return;
        var eC2x = 0,
            dH2x = "js-focus";
        if (k0x.tT7M(e0x)) {
            eC2x = e0x
        } else if (k0x.fj2x(e0x)) {
            dH2x = e0x
        } else if (k0x.ke4i(e0x)) {
            eC2x = e0x.mode || eC2x;
            dH2x = e0x.clazz || dH2x
        }
        var z0x = parseInt(a9j.u0x(G0x, "mode"));
        if (!isNaN(z0x)) eC2x = z0x;
        z0x = a9j.u0x(G0x, "focus");
        if ( !! z0x) dH2x = z0x;
        ba0x.bos0x(G0x, eC2x, dH2x);
        return this
    };
    a9j.cU1x = function() {
        var bv0x = {
            a: {
                href: "#",
                hideFocus: !0
            },
            style: {
                type: "text/css"
            },
            link: {
                type: "text/css",
                rel: "stylesheet"
            },
            iframe: {
                frameBorder: 0
            },
            script: {
                defer: !0,
                type: "text/javascript"
            }
        };
        return function(eQ2x, eY2x, bA0x) {
            var G0x = document.createElement(eQ2x);
            NEJ.X(G0x, bv0x[eQ2x.toLowerCase()]);
            if ( !! eY2x) G0x.className = eY2x;
            bA0x = a9j.w0x(bA0x);
            if ( !! bA0x) bA0x.appendChild(G0x);
            return G0x
        }
    }();
    a9j.YB5G = function() {
        var bSN6H = function() {
            if (location.hostname == document.domain) return "about:blank";
            return 'javascript:(function(){document.open();document.domain="' + document.domain + '";document.close();})();'
        };
        var bTf6Z = function(T0x) {
            T0x = T0x.trim();
            if (!T0x) return a9j.cU1x("iframe");
            var eX2x;
            try {
                eX2x = document.createElement('<iframe name="' + T0x + '"></iframe>');
                eX2x.frameBorder = 0
            } catch (e) {
                eX2x = a9j.cU1x("iframe");
                eX2x.name = T0x
            }
            return eX2x
        };
        return function(e0x) {
            e0x = e0x || Y0x;
            var eX2x = bTf6Z(e0x.name || "");
            if (!e0x.visible) eX2x.style.display = "none";
            if (k0x.fV2x(e0x.onload)) h0x.q0x(eX2x, "load", function(d0x) {
                if (!eX2x.src) return;
                h0x.ip3x(eX2x, "load");
                e0x.onload(d0x)
            });
            var bA0x = e0x.parent;
            if (k0x.fV2x(bA0x)) {
                try {
                    bA0x(eX2x)
                } catch (e) {}
            } else {
                (a9j.w0x(bA0x) || document.body).appendChild(eX2x)
            }
            var dt1x = e0x.src || bSN6H();
            window.setTimeout(function() {
                eX2x.src = dt1x
            }, 0);
            return eX2x
        }
    }();
    a9j.cF1x = cJ1x.cF1x = function() {
        var bzM2x = function(PF3x) {
            PF3x.src = dO2x.boP0x
        };
        var bzV2x = function(uN7G) {
            uN7G.src = "about:blank"
        };
        return function(G0x, bTt6n) {
            G0x = a9j.w0x(G0x);
            if (!G0x) return this;
            if (!bTt6n) h0x.ip3x(G0x);
            delete bnv0x[G0x.id];
            var eQ2x = G0x.tagName;
            if (eQ2x == "IFRAME") {
                bzV2x(G0x)
            } else if (eQ2x == "IMG") {
                bzM2x(G0x)
            } else if ( !! G0x.getElementsByTagName) {
                k0x.be0x(G0x.getElementsByTagName("img"), bzM2x);
                k0x.be0x(G0x.getElementsByTagName("iframe"), bzV2x)
            }
            if ( !! G0x.parentNode) {
                G0x.parentNode.removeChild(G0x)
            }
            return this
        }
    }();
    a9j.mf4j = cJ1x.mf4j = function(G0x) {
        G0x = a9j.w0x(G0x);
        if ( !! G0x) Q0x.appendChild(G0x);
        return this
    };
    a9j.bBb2x = cJ1x.bBb2x = function(G0x) {
        G0x = a9j.w0x(G0x);
        if (!G0x) return;
        k0x.lU4Y(G0x.childNodes, function(f0x) {
            a9j.cF1x(f0x)
        })
    };
    a9j.Hn0x = cJ1x.Hn0x = function() {
        var dH2x, fQ2x = /\s+/;
        var bTv6p = function() {
            if ( !! dH2x) return;
            dH2x = a9j.rT6N(".#<uispace>{position:relative;zoom:1;}.#<uispace>-show{position:absolute;top:0;left:100%;cursor:text;white-space:nowrap;overflow:hidden;}");
            a9j.bDx3x()
        };
        return function(G0x, e0x) {
            G0x = a9j.w0x(G0x);
            if (!G0x) return;
            bTv6p();
            e0x = e0x || Y0x;
            var bA0x = G0x.parentNode;
            if (!a9j.bz0x(bA0x, dH2x)) {
                bA0x = a9j.cU1x("span", dH2x);
                G0x.insertAdjacentElement("beforeBegin", bA0x);
                bA0x.appendChild(G0x)
            }
            var bDL3x = e0x.nid || "",
                f0x = a9j.I0x(bA0x, bDL3x || dH2x + "-show")[0];
            if (!f0x) {
                var dC2x = ((e0x.clazz || "") + " " + bDL3x).trim();
                dC2x = dH2x + "-show" + (!dC2x ? "" : " ") + dC2x;
                f0x = a9j.cU1x(e0x.tag || "span", dC2x);
                bA0x.appendChild(f0x)
            }
            var dC2x = e0x.clazz;
            if ( !! dC2x) {
                dC2x = (dC2x || "").trim().split(fQ2x)[0] + "-parent";
                a9j.y0x(bA0x, dC2x)
            }
            return f0x
        }
    }();
    a9j.u0x = cJ1x.u0x = function() {
        var bni0x = {},
            eQ2x = "data-",
            cO1x = /\-(.{1})/gi;
        var CT9K = function(G0x) {
            var C0x = a9j.kQ4U(G0x);
            if ( !! bni0x[C0x]) return;
            var bv0x = {};
            k0x.be0x(G0x.attributes, function(f0x) {
                var J0x = f0x.nodeName;
                if (J0x.indexOf(eQ2x) != 0) return;
                J0x = J0x.replace(eQ2x, "").replace(cO1x, function($1, $2) {
                    return $2.toUpperCase()
                });
                bv0x[J0x] = f0x.nodeValue || ""
            });
            bni0x[C0x] = bv0x
        };
        return function(G0x, J0x, z0x) {
            G0x = a9j.w0x(G0x);
            if (!G0x) return null;
            var Ys5x = G0x.dataset;
            if (!Ys5x) {
                CT9K(G0x);
                Ys5x = bni0x[G0x.id]
            }
            if (z0x !== undefined) Ys5x[J0x] = z0x;
            return Ys5x[J0x]
        }
    }();
    a9j.gU2x = cJ1x.gU2x = function(G0x, T0x, z0x) {
        G0x = a9j.w0x(G0x);
        if (!G0x) return "";
        if (z0x !== undefined && !! G0x.setAttribute) G0x.setAttribute(T0x, z0x);
        return ba0x.bnL0x(G0x, T0x)
    };
    a9j.ni5n = function(dy2x) {
        var pQ5V = document.createElement("div");
        pQ5V.innerHTML = dy2x;
        var i0x = a9j.cQ1x(pQ5V);
        return i0x.length > 1 ? pQ5V : i0x[0]
    };
    a9j.bTw6q = cJ1x.bTw6q = function(G0x) {
        G0x = a9j.w0x(G0x);
        return !G0x ? "" : ba0x.bop0x(G0x)
    };
    a9j.bJg4k = function(xU8M) {
        xU8M = (xU8M || "").trim();
        return !xU8M ? null : ba0x.bom0x(xU8M)
    };
    a9j.bUz6t = function(cY1x, t0x) {
        cY1x = cY1x || "";
        switch (t0x) {
            case "xml":
                cY1x = a9j.bJg4k(cY1x);
                break;
            case "json":
                try {
                    cY1x = JSON.parse(cY1x)
                } catch (ex) {
                    cY1x = null
                }
                break
        }
        return cY1x
    };
    a9j.hO3x = cJ1x.hO3x = function() {
        var bUS6M = function(G0x) {
            return G0x == document.body || G0x == document.documentElement
        };
        return function(dG2x, ng5l) {
            dG2x = a9j.w0x(dG2x);
            if (!dG2x) return null;
            ng5l = a9j.w0x(ng5l) || null;
            var n0x = {
                    x: 0,
                    y: 0
                },
                bnb0x, de1x, Yq5v;
            while ( !! dG2x && dG2x != ng5l) {
                bnb0x = bUS6M(dG2x);
                de1x = bnb0x ? 0 : dG2x.scrollLeft;
                Yq5v = parseInt(a9j.cX1x(dG2x, "borderLeftWidth")) || 0;
                n0x.x += dG2x.offsetLeft + Yq5v - de1x;
                de1x = bnb0x ? 0 : dG2x.scrollTop;
                Yq5v = parseInt(a9j.cX1x(dG2x, "borderTopWidth")) || 0;
                n0x.y += dG2x.offsetTop + Yq5v - de1x;
                dG2x = dG2x.offsetParent
            }
            return n0x
        }
    }();
    a9j.mw5B = cJ1x.mw5B = function(G0x) {
        var bj0x = a9j.hO3x(G0x);
        window.scrollTo(bj0x.x, bj0x.y);
        return this
    };
    a9j.cup2x = function(rh6b) {
        rh6b = (rh6b || "").trim();
        return ba0x.bBX2x(rh6b)
    };
    a9j.bVN6H = cJ1x.bVN6H = function(G0x, T0x, bv0x) {
        G0x = a9j.w0x(G0x);
        if (!G0x) return this;
        var z0x = ba0x.bqh0x(T0x, bv0x);
        if (!z0x) return this;
        a9j.W0x(G0x, "transform", z0x);
        return this
    };
    a9j.fH2x = cJ1x.fH2x = function(G0x, bv0x) {
        G0x = a9j.w0x(G0x);
        if ( !! G0x) k0x.dZ2x(bv0x, function(z0x, T0x) {
            a9j.W0x(G0x, T0x, z0x)
        });
        return this
    };
    a9j.bVR6L = cJ1x.bVR6L = function(fB2x, e0x) {
        fB2x = a9j.w0x(fB2x);
        if (!fB2x) return {
            start: 0,
            end: 0
        };
        if (k0x.tT7M(e0x)) e0x = {
            start: e0x,
            end: e0x
        };
        if (e0x != null) {
            if (e0x.end == null) e0x.end = e0x.start || 0;
            ba0x.bow0x(fB2x, e0x)
        } else {
            e0x = ba0x.bot0x(fB2x)
        }
        return e0x
    };
    a9j.W0x = cJ1x.W0x = function(G0x, T0x, z0x) {
        G0x = a9j.w0x(G0x);
        if ( !! G0x) ba0x.bnU0x(G0x, T0x, z0x);
        return this
    };
    a9j.cX1x = cJ1x.cX1x = function(G0x, T0x) {
        G0x = a9j.w0x(G0x);
        if (!G0x) return "";
        var gf2x = !window.getComputedStyle ? G0x.currentStyle || Y0x : window.getComputedStyle(G0x, null);
        return gf2x[ba0x.bru0x(T0x)] || ""
    };
    a9j.brz0x = function() {
        var cO1x = /[\s\r\n]+/gi;
        return function(cc1x) {
            cc1x = (cc1x || "").trim().replace(cO1x, " ");
            if (!cc1x) return;
            var f0x = a9j.cU1x("style");
            document.head.appendChild(f0x);
            ba0x.bnP0x(f0x, ba0x.bNK5P(cc1x));
            return f0x
        }
    }();
    a9j.brF0x = function(xm8e) {
        try {
            xm8e = xm8e.trim();
            if ( !! xm8e) return (new Function(xm8e))()
        } catch (ex) {
            console.error(ex.message);
            console.error(ex.stack)
        }
    };
    a9j.rT6N = function() {
        var cO1x = /#<.*?>/g,
            fR2x = +(new Date);
        return function(jm4q) {
            if (!HA0x) HA0x = [];
            var eY2x = "auto-" + fR2x++;
            HA0x.push(jm4q.replace(cO1x, eY2x));
            return eY2x
        }
    }();
    a9j.bDx3x = function() {
        if ( !! HA0x) {
            a9j.brz0x(HA0x.join(""));
            HA0x = null
        }
        return this
    };
    a9j.cum2x = function(cc1x, jm4q) {
        cc1x = a9j.w0x(cc1x);
        return !cc1x ? null : ba0x.bnO0x(cc1x, jm4q)
    };
    a9j.y0x = cJ1x.y0x = function() {
        ba0x.boL0x.apply(ba0x, arguments);
        return this
    };
    a9j.x0x = cJ1x.x0x = function() {
        ba0x.boJ0x.apply(ba0x, arguments);
        return this
    };
    a9j.fe2x = cJ1x.fe2x = function() {
        ba0x.MD2x.apply(ba0x, arguments);
        return this
    };
    a9j.bz0x = cJ1x.bz0x = function() {
        return ba0x.boB0x.apply(ba0x, arguments)
    };
    if (!document.head) document.head = document.getElementsByTagName("head")[0] || document.body;
    cJ1x.isChange = !0
})();
(function() {
    var c0x = NEJ.P,
        Y0x = NEJ.O,
        fb2x = NEJ.R,
        bm0x = NEJ.F,
        a9j = c0x("nej.e"),
        ba0x = c0x("nej.h"),
        k0x = c0x("nej.u");
    var Dh9Y = function(j0x, t0x) {
        try {
            t0x = t0x.toLowerCase();
            if (j0x === null) return t0x == "null";
            if (j0x === undefined) return t0x == "undefined";
            return Y0x.toString.call(j0x).toLowerCase() == "[object " + t0x + "]"
        } catch (e) {
            return !1
        }
    };
    k0x.fV2x = function(j0x) {
        return Dh9Y(j0x, "function")
    };
    k0x.fj2x = function(j0x) {
        return Dh9Y(j0x, "string")
    };
    k0x.tT7M = function(j0x) {
        return Dh9Y(j0x, "number")
    };
    k0x.cul2x = function(j0x) {
        return Dh9Y(j0x, "boolean")
    };
    k0x.Yp5u = function(j0x) {
        return Dh9Y(j0x, "date")
    };
    k0x.eq2x = function(j0x) {
        return Dh9Y(j0x, "array")
    };
    k0x.ke4i = function(j0x) {
        return Dh9Y(j0x, "object")
    };
    k0x.fx2x = function() {
        var cO1x = /[^\x00-\xfff]/g;
        return function(bi0x) {
            return ("" + (bi0x || "")).replace(cO1x, "**").length
        }
    }();
    k0x.cT1x = function(i0x, r0x) {
        var dB2x = k0x.fV2x(r0x) ? r0x : function(z0x) {
                return z0x === r0x
            },
            s0x = k0x.dZ2x(i0x, dB2x);
        return s0x != null ? s0x : -1
    };
    k0x.cuk2x = function() {
        var buv1x;
        var Pi3x = function(i0x, nd5i, nc5h) {
            if (nd5i > nc5h) return -1;
            var Di9Z = Math.ceil((nd5i + nc5h) / 2),
                n0x = buv1x(i0x[Di9Z], Di9Z, i0x);
            if (n0x == 0) return Di9Z;
            if (n0x < 0) return Pi3x(i0x, nd5i, Di9Z - 1);
            return Pi3x(i0x, Di9Z + 1, nc5h)
        };
        return function(i0x, HF0x) {
            buv1x = HF0x || bm0x;
            return Pi3x(i0x, 0, i0x.length - 1)
        }
    }();
    k0x.lU4Y = function(i0x, dn1x, iB4F) {
        if (!i0x || !i0x.length || !k0x.fV2x(dn1x)) return null;
        for (var i = i0x.length - 1; i >= 0; i--) if ( !! dn1x.call(iB4F, i0x[i], i, i0x)) return i;
        return null
    };
    k0x.be0x = function(i0x, dn1x, iB4F) {
        if (!i0x || !i0x.length || !k0x.fV2x(dn1x)) return this;
        if ( !! i0x.forEach) {
            i0x.forEach(dn1x, iB4F);
            return this
        }
        for (var i = 0, l = i0x.length; i < l; i++) dn1x.call(iB4F, i0x[i], i, i0x);
        return this
    };
    k0x.dZ2x = function(i0x, dn1x, iB4F) {
        if (!i0x || !k0x.fV2x(dn1x)) return null;
        if (i0x.length != null) {
            if (i0x.length > 0) for (var i = 0, l = i0x.length; i < l; i++) if ( !! dn1x.call(iB4F, i0x[i], i, i0x)) return i
        }
        if (k0x.ke4i(i0x)) {
            for (var x in i0x) if (i0x.hasOwnProperty(x) && !! dn1x.call(iB4F, i0x[x], x, i0x)) return x
        }
        return null
    };
    k0x.bWt6n = function(hY3x, bWu6o, e0x) {
        hY3x = hY3x || [];
        e0x = e0x || Y0x;
        var bwU1x = !! e0x.union,
            ur7k = !! e0x.begin,
            Yo5t = e0x.compare,
            bWv6p = bwU1x && ur7k ? k0x.lU4Y : k0x.be0x;
        bWv6p(bWu6o, function(r0x) {
            if ( !! Yo5t) Yo5t = Yo5t.dX2x(r0x);
            var s0x = k0x.cT1x(hY3x, Yo5t || r0x);
            if (s0x >= 0) hY3x.splice(s0x, 1);
            if (bwU1x) hY3x[ur7k ? "unshift" : "push"](r0x)
        });
        return hY3x
    };
    k0x.DN9E = function(bv0x, bi0x) {
        if (!bv0x || !bi0x || !bi0x.replace) return bi0x || "";
        return bi0x.replace(bv0x.r, function($1) {
            var n0x = bv0x[!bv0x.i ? $1.toLowerCase() : $1];
            return n0x != null ? n0x : $1
        })
    };
    k0x.dK2x = function() {
        var bv0x = {
            r: /\<|\>|\&lt;|\&gt;|\&|\r|\n|\s|\'|\"/g,
            "<": "&lt;",
            ">": "&gt;",
            "&": "&amp;",
            " ": "&nbsp;",
            '"': "&quot;",
            "'": "&#39;",
            "\n": "<br/>",
            "\r": "",
            "&lt;": "&lt;",
            "&gt;": "&gt;"
        };
        return function(bi0x) {
            return k0x.DN9E(bv0x, bi0x)
        }
    }();
    k0x.KC1x = function() {
        var bv0x = {
            r: /\&(?:lt|gt|amp|nbsp|#39|quot)\;|\<br\/\>/gi,
            "&lt;": "<",
            "&gt;": ">",
            "&amp;": "&",
            "&nbsp;": " ",
            "&#39;": "'",
            "&quot;": '"',
            "<br/>": "\n"
        };
        return function(bi0x) {
            return k0x.DN9E(bv0x, bi0x)
        }
    }();
    k0x.lP4T = function() {
        var bv0x = {
                i: !0,
                r: /\byyyy|yy|MM|cM|eM|M|dd|d|HH|H|mm|ms|ss|m|s|w|ct|et\b/g
            },
            bWC6w = ["上午", "下午"],
            bWE6y = ["A.M.", "P.M."],
            bmQ9H = ["日", "一", "二", "三", "四", "五", "六"],
            bWI6C = ["一", "二", "三", "四", "五", "六", "七", "八", "九", "十", "十一", "十二"],
            bWP6J = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"];
        var LB1x = function(fp2x) {
            fp2x = parseInt(fp2x) || 0;
            return (fp2x < 10 ? "0" : "") + fp2x
        };
        var bWX7Q = function(oa5f) {
            return oa5f < 12 ? 0 : 1
        };
        return function(bL0x, GW0x, bXt7m) {
            if (!bL0x || !GW0x) return "";
            bL0x = k0x.Yk5p(bL0x);
            bv0x.yyyy = bL0x.getFullYear();
            bv0x.yy = ("" + bv0x.yyyy).substr(2);
            bv0x.M = bL0x.getMonth() + 1;
            bv0x.MM = LB1x(bv0x.M);
            bv0x.eM = bWP6J[bv0x.M - 1];
            bv0x.cM = bWI6C[bv0x.M - 1];
            bv0x.d = bL0x.getDate();
            bv0x.dd = LB1x(bv0x.d);
            bv0x.H = bL0x.getHours();
            bv0x.HH = LB1x(bv0x.H);
            bv0x.m = bL0x.getMinutes();
            bv0x.mm = LB1x(bv0x.m);
            bv0x.s = bL0x.getSeconds();
            bv0x.ss = LB1x(bv0x.s);
            bv0x.ms = bL0x.getMilliseconds();
            bv0x.w = bmQ9H[bL0x.getDay()];
            var bDu3x = bWX7Q(bv0x.H);
            bv0x.ct = bWC6w[bDu3x];
            bv0x.et = bWE6y[bDu3x];
            if ( !! bXt7m) {
                bv0x.H = bv0x.H % 12
            }
            return k0x.DN9E(bv0x, GW0x)
        }
    }();
    k0x.Yk5p = function(bL0x) {
        var cA1x = bL0x;
        if (k0x.fj2x(bL0x)) cA1x = new Date(Date.parse(bL0x));
        if (!k0x.Yp5u(bL0x)) cA1x = new Date(bL0x);
        return cA1x
    };
    k0x.Hu0x = function(bXA7t, bYF7y) {
        return (new Number(bXA7t)).toFixed(bYF7y)
    };
    k0x.bmK9B = function() {
        var fQ2x = /([^\/:])\/.*$/,
            jg4k = /\/[^\/]+$/,
            Au8m = /[#\?]/,
            bmH9y = location.href.split(/[?#]/)[0],
            rH6B = document.createElement("a");
        var bmF9w = function(lx4B) {
            return (lx4B || "").indexOf("://") > 0
        };
        var bGr3x = function(lx4B) {
            return (lx4B || "").split(Au8m)[0].replace(jg4k, "/")
        };
        var bYX7Q = function(lx4B, fn2x) {
            if (lx4B.indexOf("/") == 0) return fn2x.replace(fQ2x, "$1") + lx4B;
            return bGr3x(fn2x) + lx4B
        };
        bmH9y = bGr3x(bmH9y);
        return function(lx4B, fn2x) {
            lx4B = (lx4B || "").trim();
            if (!bmF9w(fn2x)) fn2x = bmH9y;
            if (!lx4B) return fn2x;
            if (bmF9w(lx4B)) return lx4B;
            lx4B = bYX7Q(lx4B, fn2x);
            rH6B.href = lx4B;
            lx4B = rH6B.href;
            return bmF9w(lx4B) ? lx4B : rH6B.getAttribute("href", 4)
        }
    }();
    k0x.bZk7d = function() {
        var cO1x = /^([\w]+?:\/\/.*?(?=\/|$))/i;
        return function(V0x) {
            if (cO1x.test(V0x || "")) return RegExp.$1.toLowerCase();
            return ""
        }
    }();
    k0x.bHp3x = function(E0x, id3x) {
        if (!E0x) return id3x;
        var T0x = E0x.tagName.toLowerCase(),
            i0x = a9j.cQ1x(E0x);
        if (!i0x || !i0x.length) {
            id3x[T0x] = E0x.textContent || E0x.text || "";
            return id3x
        }
        var dM2x = {};
        id3x[T0x] = dM2x;
        k0x.be0x(i0x, function(f0x) {
            k0x.bHp3x(f0x, dM2x)
        });
        return id3x
    };
    k0x.ctO2x = function(xU8M) {
        try {
            return k0x.bHp3x(a9j.bJg4k(xU8M), {})
        } catch (ex) {
            return null
        }
    };
    k0x.bHH4L = function(hs3x, Ox3x) {
        var id3x = {};
        k0x.be0x((hs3x || "").split(Ox3x), function(T0x) {
            var Yi5n = T0x.split("=");
            if (!Yi5n || !Yi5n.length) return;
            var J0x = Yi5n.shift();
            if (!J0x) return;
            id3x[decodeURIComponent(J0x)] = decodeURIComponent(Yi5n.join("="))
        });
        return id3x
    };
    k0x.xa8S = function(fU2x, Ox3x, bZm7f) {
        if (!fU2x) return "";
        var bs0x = [];
        for (var x in fU2x) {
            bs0x.push(encodeURIComponent(x) + "=" + ( !! bZm7f ? encodeURIComponent(fU2x[x]) : fU2x[x]))
        }
        return bs0x.join(Ox3x || ",")
    };
    k0x.ho3x = function(bB0x) {
        return k0x.bHH4L(bB0x, "&")
    };
    k0x.dh1x = function(fU2x) {
        return k0x.xa8S(fU2x, "&", !0)
    };
    k0x.ctI2x = function(fU2x) {
        return ba0x.Im0x(fU2x)
    };
    k0x.ctH2x = function(i0x, dB2x) {
        var n0x = {};
        k0x.be0x(i0x, function(r0x) {
            var J0x = r0x;
            if ( !! dB2x) {
                J0x = dB2x(r0x)
            }
            n0x[J0x] = r0x
        });
        return n0x
    };
    k0x.ctG2x = function(fp2x, fS2x) {
        var cau7n = ("" + fp2x).length,
            caz7s = Math.max(1, parseInt(fS2x) || 0),
            de1x = caz7s - cau7n;
        if (de1x > 0) {
            fp2x = (new Array(de1x + 1)).join("0") + fp2x
        }
        return "" + fp2x
    };
    k0x.Yg5l = function(fU2x, T0x) {
        if (!k0x.eq2x(T0x)) {
            try {
                delete fU2x[T0x]
            } catch (e) {
                fU2x[T0x] = undefined
            }
            return this
        }
        k0x.be0x(T0x, k0x.Yg5l.g0x(k0x, fU2x));
        return this
    };
    k0x.bnt0x = function() {
        var bqK0x = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz";
        return function(bo0x) {
            bo0x = bo0x || 10;
            var n0x = [];
            for (var i = 0, bqL0x; i < bo0x; ++i) {
                bqL0x = Math.floor(Math.random() * bqK0x.length);
                n0x.push(bqK0x.charAt(bqL0x))
            }
            return n0x.join("")
        }
    }();
    k0x.IS1x = function(gO2x, fY2x) {
        return Math.floor(Math.random() * (fY2x - gO2x) + gO2x)
    };
    k0x.mT5Y = function(bo0x) {
        bo0x = Math.max(0, Math.min(bo0x || 8, 30));
        var gO2x = Math.pow(10, bo0x - 1),
            fY2x = gO2x * 10;
        return k0x.IS1x(gO2x, fY2x).toString()
    };
    k0x.Yf5k = function() {
        var fR2x = +(new Date);
        return function() {
            return "" + fR2x++
        }
    }()
})();
(function() {
    var c0x = NEJ.P,
        Y0x = NEJ.O,
        fb2x = NEJ.R,
        bm0x = NEJ.F,
        h0x = c0x("nej.v"),
        k0x = c0x("nej.u"),
        M0x = c0x("nej.ut"),
        mY5d;
    if ( !! M0x.cC1x) return;
    M0x.cC1x = NEJ.C();
    mY5d = M0x.cC1x.prototype;
    M0x.cC1x.B0x = function(e0x) {
        e0x = e0x || {};
        var cp1x = !! this.yO8G && this.yO8G.shift();
        if (!cp1x) {
            cp1x = new this(e0x);
            this.caA7t = (this.caA7t || 0) + 1
        }
        cp1x.bk0x(e0x);
        return cp1x
    };
    M0x.cC1x.S0x = function() {
        var Ka1x = function(r0x, s0x, i0x) {
            r0x.S0x();
            i0x.splice(s0x, 1)
        };
        return function(cp1x) {
            if (!cp1x) return null;
            if (!k0x.eq2x(cp1x)) {
                if (!(cp1x instanceof this)) {
                    var eY2x = cp1x.constructor;
                    if ( !! eY2x.S0x) eY2x.S0x(cp1x);
                    return null
                }
                if (cp1x == this.eH2x) delete this.eH2x;
                if (cp1x == this.yP8H) delete this.yP8H;
                cp1x.bD0x();
                if (!this.yO8G) this.yO8G = [];
                if (k0x.cT1x(this.yO8G, cp1x) < 0) {
                    this.yO8G.push(cp1x)
                }
                return null
            }
            k0x.lU4Y(cp1x, Ka1x, this)
        }
    }();
    M0x.cC1x.fP2x = function(e0x) {
        e0x = e0x || {};
        if (!this.eH2x) this.eH2x = this.B0x(e0x);
        return this.eH2x
    };
    M0x.cC1x.caG7z = function(e0x, qD6x) {
        e0x = e0x || {};
        if ( !! qD6x && !! this.yP8H) {
            this.yP8H.S0x();
            delete this.yP8H
        }
        if (!this.yP8H) {
            this.yP8H = this.B0x(e0x)
        } else {
            this.yP8H.bk0x(e0x)
        }
        return this.yP8H
    };
    mY5d.cl1x = function() {
        var fR2x = +(new Date);
        return function() {
            this.id = fR2x++;
            this.kV4Z = {};
            this.bua1x = {}
        }
    }();
    mY5d.bk0x = function(e0x) {
        this.bmp9g(e0x)
    };
    mY5d.bD0x = function() {
        this.ip3x();
        this.GL0x()
    };
    mY5d.bU1x = function() {
        var fR2x = +(new Date);
        var caH7A = function(bg0x) {
            if (!bg0x || bg0x.length < 3) return;
            this.bua1x["de-" + fR2x++] = bg0x;
            h0x.q0x.apply(h0x, bg0x)
        };
        return function(i0x) {
            k0x.be0x(i0x, caH7A, this)
        }
    }();
    mY5d.GL0x = function() {
        var caV7O = function(bg0x, J0x, bv0x) {
            delete bv0x[J0x];
            h0x.mc4g.apply(h0x, bg0x)
        };
        return function() {
            k0x.dZ2x(this.bua1x, caV7O)
        }
    }();
    mY5d.cty2x = function(dB2x) {
        dB2x = dB2x || bm0x;
        k0x.dZ2x(this, function(AP9G, J0x, bv0x) {
            if ( !! AP9G && !! AP9G.S0x && !dB2x(AP9G)) {
                delete bv0x[J0x];
                AP9G.S0x()
            }
        })
    };
    mY5d.S0x = function() {
        this.constructor.S0x(this)
    };
    mY5d.bwu1x = function(t0x) {
        var d0x = this.kV4Z[t0x.toLowerCase()];
        return !!d0x && d0x !== bm0x
    };
    mY5d.q0x = function(t0x, d0x) {
        this.tR7K.apply(this, arguments);
        return this
    };
    mY5d.mc4g = function(t0x, d0x) {
        var t0x = (t0x || "").toLowerCase(),
            dF2x = this.kV4Z[t0x];
        if (!k0x.eq2x(dF2x)) {
            if (dF2x == d0x) delete this.kV4Z[t0x];
            return
        }
        k0x.lU4Y(dF2x, function(ex2x, s0x, i0x) {
            if (ex2x == d0x) i0x.splice(s0x, 1)
        })
    };
    mY5d.tR7K = function(t0x, d0x) {
        if ( !! t0x && k0x.fV2x(d0x)) this.kV4Z[t0x.toLowerCase()] = d0x;
        return this
    };
    mY5d.bmp9g = function() {
        var caW7P = function(d0x, t0x) {
            this.tR7K(t0x, d0x)
        };
        return function(dF2x) {
            k0x.dZ2x(dF2x, caW7P, this);
            return this
        }
    }();
    mY5d.ip3x = function() {
        var bmf9W = function(d0x, t0x) {
            this.ip3x(t0x)
        };
        return function(t0x) {
            var t0x = (t0x || "").toLowerCase();
            if ( !! t0x) {
                delete this.kV4Z[t0x]
            } else {
                k0x.dZ2x(this.kV4Z, bmf9W, this)
            }
            return this
        }
    }();
    mY5d.bme9V = function(t0x, d0x) {
        if (!t0x || !k0x.fV2x(d0x)) return this;
        t0x = t0x.toLowerCase();
        var dF2x = this.kV4Z[t0x];
        if (!dF2x) {
            this.kV4Z[t0x] = d0x;
            return this
        }
        if (!k0x.eq2x(dF2x)) {
            this.kV4Z[t0x] = [dF2x]
        }
        this.kV4Z[t0x].push(d0x);
        return this
    };
    mY5d.A0x = function(t0x) {
        var d0x = this.kV4Z[(t0x || "").toLowerCase()];
        if (!d0x) return this;
        var bg0x = fb2x.slice.call(arguments, 1);
        if (!k0x.eq2x(d0x)) return d0x.apply(this, bg0x);
        k0x.be0x(d0x, function(da1x) {
            try {
                da1x.apply(this, bg0x)
            } catch (ex) {
                console.error(ex.message);
                console.error(ex.stack)
            }
        }, this);
        return this
    };
    M0x.XZ5e = function() {
        var Q0x = {};
        return function(C0x, eY2x, e0x) {
            var eF2x = eY2x.cbc7V;
            if (!eF2x) {
                eF2x = k0x.bnt0x(10);
                eY2x.cbc7V = eF2x
            }
            var J0x = C0x + "-" + eF2x,
                cp1x = Q0x[J0x];
            if ( !! e0x && !cp1x) {
                cp1x = eY2x.B0x(e0x);
                cp1x.S0x = cp1x.S0x.dY2x(function(d0x) {
                    delete Q0x[J0x];
                    delete cp1x.S0x
                });
                Q0x[J0x] = cp1x
            }
            return cp1x
        }
    }()
})();
(function() {
    var o = NEJ.O,
        u = NEJ.P("nej.u"),
        j = NEJ.P("nej.j");
    j.gE2x = function() {
        var cA1x = new Date,
            cbE7x = +cA1x,
            blS9J = 864e5;
        var ccx8p = function(T0x) {
            var qv6p = document.cookie,
                rB6v = "\\b" + T0x + "=",
                XW5b = qv6p.search(rB6v);
            if (XW5b < 0) return "";
            XW5b += rB6v.length - 2;
            var zd8V = qv6p.indexOf(";", XW5b);
            if (zd8V < 0) zd8V = qv6p.length;
            return qv6p.substring(XW5b, zd8V) || ""
        };
        return function(T0x, j0x) {
            if (j0x === undefined) return ccx8p(T0x);
            if (u.fj2x(j0x)) {
                if ( !! j0x) {
                    document.cookie = T0x + "=" + j0x + ";";
                    return j0x
                }
                j0x = {
                    expires: -100
                }
            }
            j0x = j0x || o;
            var qv6p = T0x + "=" + (j0x.value || "") + ";";
            delete j0x.value;
            if (j0x.expires !== undefined) {
                cA1x.setTime(cbE7x + j0x.expires * blS9J);
                j0x.expires = cA1x.toGMTString()
            }
            qv6p += u.xa8S(j0x, ";");
            document.cookie = qv6p
        }
    }()
})();
(function() {
    var c0x = NEJ.P,
        bm0x = NEJ.F,
        iq3x = c0x("nej.c"),
        dO2x = c0x("nej.g"),
        a9j = c0x("nej.e"),
        v0x = c0x("nej.j"),
        H0x = c0x("nej.ut"),
        M0x = c0x("nej.ut.j"),
        k0x = c0x("nej.u"),
        b0x;
    if ( !! M0x.GA0x) return;
    M0x.GA0x = NEJ.C();
    b0x = M0x.GA0x.O0x(H0x.cC1x);
    b0x.bk0x = function(e0x) {
        this.bl0x(e0x);
        this.oe5j = {
            noescape: false,
            url: "",
            sync: !1,
            cookie: !1,
            type: "text",
            method: "GET",
            timeout: 6e4
        };
        NEJ.EX(this.oe5j, e0x);
        var xJ8B = iq3x.w0x("csrf");
        if ((/^\/[^\/]/.test(this.oe5j.url) || this.oe5j.url.indexOf(location.protocol + "//" + location.host) == 0) && !! xJ8B.cookie && !! xJ8B.param) {
            var bB0x = encodeURIComponent(xJ8B.param) + "=" + encodeURIComponent(v0x.gE2x(xJ8B.cookie) || ""),
                Ox3x = this.oe5j.url.indexOf("?") < 0 ? "?" : "&";
            this.oe5j.url += Ox3x + bB0x
        }
        this.XV5a = e0x.headers || {};
        var bi0x = this.XV5a[dO2x.wB7u];
        if (bi0x == null) this.XV5a[dO2x.wB7u] = dO2x.bNg5l
    };
    b0x.bD0x = function() {
        this.bI0x();
        delete this.ze8W;
        delete this.oe5j;
        delete this.XV5a
    };
    b0x.ccV8N = function(bi0x) {
        var bv0x = {
            r: /\<|\>/g,
            "<": "&lt;",
            ">": "&gt;"
        };
        if (!this.oe5j.noescape) {
            return k0x.DN9E(bv0x, bi0x)
        } else {
            return bi0x
        }
    };
    b0x.sh6b = function(d0x) {
        var eW2x = d0x.status;
        if (eW2x == -1) {
            this.A0x("onerror", {
                code: dO2x.bzA2x,
                message: "请求[" + this.oe5j.url + "]超时！"
            });
            return
        }
        if (("" + eW2x).indexOf("2") != 0) {
            this.A0x("onerror", {
                data: eW2x,
                code: dO2x.boU0x,
                message: "服务器返回异常状态[" + eW2x + "]!"
            });
            return
        }
        this.A0x("onload", a9j.bUz6t(this.ccV8N(d0x.result), this.oe5j.type))
    };
    b0x.cj1x = bm0x;
    b0x.blF9w = function(j0x) {
        var V0x = this.oe5j.url;
        if (!V0x) {
            this.A0x("onerror", {
                code: dO2x.bpc0x,
                message: "没有输入请求地址！"
            });
            return this
        }
        try {
            this.oe5j.data = j0x == null ? null : j0x;
            var d0x = {
                request: this.oe5j,
                headers: this.XV5a
            };
            try {
                this.A0x("onbeforerequest", d0x)
            } catch (ex) {
                console.error(ex.message);
                console.error(ex.stack)
            }
            this.cj1x(d0x)
        } catch (e) {
            this.A0x("onerror", {
                code: dO2x.boU0x,
                message: "请求[" + V0x + "]失败:" + e.message + "！"
            })
        }
        return this
    };
    b0x.kq4u = bm0x
})();
(function() {
    var c0x = NEJ.P,
        bm0x = NEJ.F,
        ba0x = c0x("nej.h"),
        dO2x = c0x("nej.g"),
        k0x = c0x("nej.u"),
        M0x = c0x("nej.ut.j"),
        Q0x = {},
        IJ1x;
    if ( !! M0x.XS5X) return;
    M0x.XS5X = NEJ.C();
    IJ1x = M0x.XS5X.O0x(M0x.GA0x);
    IJ1x.bD0x = function() {
        this.bI0x();
        window.clearTimeout(this.dI2x);
        delete this.dI2x;
        try {
            this.qr6l.onreadystatechange = bm0x;
            this.qr6l.abort()
        } catch (e) {}
        delete this.qr6l
    };
    IJ1x.cj1x = function() {
        var ccZ8R = function(z0x, J0x) {
            this.qr6l.setRequestHeader(J0x, z0x)
        };
        return function(e0x) {
            var fu2x = e0x.request,
                nb5g = e0x.headers;
            this.qr6l = ba0x.blA9r();
            if (nb5g[dO2x.wB7u] === dO2x.CC9t) {
                delete nb5g[dO2x.wB7u];
                this.qr6l.upload.onprogress = this.hh2x.g0x(this, 1);
                if (fu2x.data.tagName === "FORM") fu2x.data = new FormData(fu2x.data)
            }
            this.qr6l.onreadystatechange = this.hh2x.g0x(this, 2);
            if (fu2x.timeout != 0) {
                this.dI2x = window.setTimeout(this.hh2x.g0x(this, 3), fu2x.timeout)
            }
            this.qr6l.open(fu2x.method, fu2x.url, !fu2x.sync);
            k0x.dZ2x(nb5g, ccZ8R, this);
            if ( !! this.oe5j.cookie && "withCredentials" in this.qr6l) this.qr6l.withCredentials = !0;
            this.qr6l.send(fu2x.data)
        }
    }();
    IJ1x.hh2x = function(t0x) {
        switch (t0x) {
            case 1:
                this.A0x("onuploading", arguments[1]);
                break;
            case 2:
                if (this.qr6l.readyState == 4) this.sh6b({
                    status: this.qr6l.status,
                    result: this.qr6l.responseText || ""
                });
                break;
            case 3:
                this.sh6b({
                    status: -1
                });
                break
        }
    };
    IJ1x.kq4u = function() {
        this.sh6b({
            status: 0
        });
        return this
    }
})();
(function() {
    if (typeof TrimPath === "undefined") {
        TrimPath = {};
        if (typeof exports !== "undefined") TrimPath = exports
    }
    var Jk1x = {},
        XQ5V = [],
        bHM4Q = /\s+/g,
        fR2x = +(new Date),
        Gq0x, bN0x, mF5K;
    var Bl9c = function() {
        var fQ2x = /^\s*[\[\{'"].*?[\]\}'"]\s*$/,
            jg4k = /[\&\|\<\>\+\-\*\/\%\,\(\)\[\]\?\:\!\=\;\s]/,
            Au8m = /^(?:defined|null|undefined|true|false|instanceof|new|this|typeof|\$v|[\d]+)$/i,
            blt9k = /^new\s+/,
            ced8V = /['"]/;
        var cee8W = function(z0x) {
            if (fQ2x.test(z0x)) return;
            z0x = z0x.split(".")[0].trim();
            if (!z0x || ced8V.test(z0x)) return;
            z0x = z0x.replace(blt9k, "");
            try {
                if (Au8m.test(z0x)) return;
                mF5K[z0x] = 1
            } catch (e) {}
        };
        return function(bi0x) {
            bi0x = bi0x || "";
            if (!bi0x || fQ2x.test(bi0x)) return;
            var bs0x = bi0x.split(jg4k);
            for (var i = 0, l = bs0x.length; i < l; i++) cee8W(bs0x[i])
        }
    }();
    var cef8X = function(dk1x) {
        if (dk1x[2] != "in") throw "bad for loop statement: " + dk1x.join(" ");
        XQ5V.push(dk1x[1]);
        Bl9c(dk1x[3]);
        return "var __HASH__" + dk1x[1] + " = " + dk1x[3] + "," + dk1x[1] + "," + dk1x[1] + "_count=0;" + "if (!!__HASH__" + dk1x[1] + ")" + "for(var " + dk1x[1] + "_key in __HASH__" + dk1x[1] + "){" + dk1x[1] + " = __HASH__" + dk1x[1] + "[" + dk1x[1] + "_key];" + "if (typeof(" + dk1x[1] + ')=="function") continue;' + dk1x[1] + "_count++;"
    };
    var ceg8Y = function() {
        var dk1x = XQ5V[XQ5V.length - 1];
        return "}; if(!__HASH__" + dk1x + "||!" + dk1x + "_count){"
    };
    var ceh8Z = function() {
        XQ5V.pop();
        return "};"
    };
    var cek8c = function(dk1x) {
        if (dk1x[2] != "as") throw "bad for list loop statement: " + dk1x.join(" ");
        var KV1x = dk1x[1].split("..");
        if (KV1x.length > 1) {
            Bl9c(KV1x[0]);
            Bl9c(KV1x[1]);
            return "for(var " + dk1x[3] + "," + dk1x[3] + "_index=0," + dk1x[3] + "_beg=" + KV1x[0] + "," + dk1x[3] + "_end=" + KV1x[1] + "," + dk1x[3] + "_length=parseInt(" + dk1x[3] + "_end-" + dk1x[3] + "_beg+1);" + dk1x[3] + "_index<" + dk1x[3] + "_length;" + dk1x[3] + "_index++){" + dk1x[3] + " = " + dk1x[3] + "_beg+" + dk1x[3] + "_index;"
        } else {
            Bl9c(dk1x[1]);
            return "for(var __LIST__" + dk1x[3] + " = " + dk1x[1] + "," + dk1x[3] + "," + dk1x[3] + "_index=0," + dk1x[3] + "_length=__LIST__" + dk1x[3] + ".length;" + dk1x[3] + "_index<" + dk1x[3] + "_length;" + dk1x[3] + "_index++){" + dk1x[3] + " = __LIST__" + dk1x[3] + "[" + dk1x[3] + "_index];"
        }
    };
    var cen8f = function(dk1x) {
        if (!dk1x || !dk1x.length) return;
        dk1x.shift();
        var T0x = dk1x[0].split("(")[0];
        return "var " + T0x + " = function" + dk1x.join("").replace(T0x, "") + "{var __OUT=[];"
    };
    var ceo8g = function(dk1x) {
        if (!dk1x[1]) throw "bad include statement: " + dk1x.join(" ");
        return 'if (typeof inline == "function"){__OUT.push(inline('
    };
    var blr9i = function(kF4J, dk1x) {
        Bl9c(dk1x.slice(1).join(" "));
        return kF4J
    };
    var cep8h = function(dk1x) {
        return blr9i("if(", dk1x)
    };
    var cer8j = function(dk1x) {
        return blr9i("}else if(", dk1x)
    };
    var ces8k = function(dk1x) {
        return blr9i("var ", dk1x)
    };
    bN0x = {
        blk: /^\{(cdata|minify|eval)/i,
        tag: "forelse|for|list|if|elseif|else|var|macro|break|notrim|trim|include",
        def: {
            "if": {
                pfix: cep8h,
                sfix: "){",
                pmin: 1
            },
            "else": {
                pfix: "}else{"
            },
            elseif: {
                pfix: cer8j,
                sfix: "){",
                pdft: "true"
            },
            "/if": {
                pfix: "}"
            },
            "for": {
                pfix: cef8X,
                pmin: 3
            },
            forelse: {
                pfix: ceg8Y
            },
            "/for": {
                pfix: ceh8Z
            },
            list: {
                pfix: cek8c,
                pmin: 3
            },
            "/list": {
                pfix: "};"
            },
            "break": {
                pfix: "break;"
            },
            "var": {
                pfix: ces8k,
                sfix: ";"
            },
            macro: {
                pfix: cen8f
            },
            "/macro": {
                pfix: 'return __OUT.join("");};'
            },
            trim: {
                pfix: function() {
                    Gq0x = !0
                }
            },
            "/trim": {
                pfix: function() {
                    Gq0x = null
                }
            },
            inline: {
                pfix: ceo8g,
                pmin: 1,
                sfix: "));}"
            }
        },
        ext: {
            seed: function(kF4J) {
                return (kF4J || "") + "" + fR2x
            },
            "default": function(z0x, kj4n) {
                return z0x || kj4n
            }
        }
    };
    var cew8o = function() {
        var cex8p = /\\([\{\}])/g;
        return function(bi0x, iC4G) {
            bi0x = bi0x.replace(cex8p, "$1");
            var dk1x = bi0x.slice(1, -1).split(bHM4Q),
                bd0x = bN0x.def[dk1x[0]];
            if (!bd0x) {
                XL5Q(bi0x, iC4G);
                return
            }
            if ( !! bd0x.pmin && bd0x.pmin >= dk1x.length) throw "Statement needs more parameters:" + bi0x;
            iC4G.push( !! bd0x.pfix && typeof bd0x.pfix != "string" ? bd0x.pfix(dk1x) : bd0x.pfix || "");
            if ( !! bd0x.sfix) {
                if (dk1x.length <= 1) {
                    if ( !! bd0x.pdft) iC4G.push(bd0x.pdft)
                } else {
                    for (var i = 1, l = dk1x.length; i < l; i++) {
                        if (i > 1) iC4G.push(" ");
                        iC4G.push(dk1x[i])
                    }
                }
                iC4G.push(bd0x.sfix)
            }
        }
    }();
    var brE0x = function(Gk0x, iC4G) {
        if (!Gk0x || !Gk0x.length) return;
        if (Gk0x.length == 1) {
            var blj9a = Gk0x.pop();
            Bl9c(blj9a);
            iC4G.push(blj9a == "" ? '""' : blj9a);
            return
        }
        var bli9Z = Gk0x.pop().split(":");
        iC4G.push("__MDF['" + bli9Z.shift() + "'](");
        brE0x(Gk0x, iC4G);
        if (bli9Z.length > 0) {
            var bg0x = bli9Z.join(":");
            Bl9c(bg0x);
            iC4G.push("," + bg0x)
        }
        iC4G.push(")")
    };
    var XL5Q = function(bi0x, iC4G) {
        if (!bi0x) return;
        var tL7E = bi0x.split("\n");
        if (!tL7E || !tL7E.length) return;
        for (var i = 0, l = tL7E.length, gR2x; i < l; i++) {
            gR2x = tL7E[i];
            if ( !! Gq0x) {
                gR2x = gR2x.trim();
                if (!gR2x) continue
            }
            ceG8y(gR2x, iC4G);
            if ( !! Gq0x && i < l - 1) iC4G.push("__OUT.push('\\n');")
        }
    };
    var ceG8y = function() {
        var ceU8M = /\|\|/g,
            ceW8O = /#@@#/g;
        return function(bi0x, iC4G) {
            var Nc2x = "}",
                Nj2x = -1,
                bo0x = bi0x.length,
                ur7k, gq2x, Ga0x, XG5L, NC2x;
            while (Nj2x + Nc2x.length < bo0x) {
                ur7k = "${";
                gq2x = "}";
                Ga0x = bi0x.indexOf(ur7k, Nj2x + Nc2x.length);
                if (Ga0x < 0) break;
                if (bi0x.charAt(Ga0x + 2) == "%") {
                    ur7k = "${%";
                    gq2x = "%}"
                }
                XG5L = bi0x.indexOf(gq2x, Ga0x + ur7k.length);
                if (XG5L < 0) break;
                XF5K(bi0x.substring(Nj2x + Nc2x.length, Ga0x), iC4G);
                NC2x = bi0x.substring(Ga0x + ur7k.length, XG5L).replace(ceU8M, "#@@#").split("|");
                for (var i = 0, l = NC2x.length; i < l; NC2x[i] = NC2x[i].replace(ceW8O, "||"), i++);
                iC4G.push("__OUT.push(");
                brE0x(NC2x, iC4G);
                iC4G.push(");");
                Nc2x = gq2x;
                Nj2x = XG5L
            }
            XF5K(bi0x.substring(Nj2x + Nc2x.length), iC4G)
        }
    }();
    var XF5K = function() {
        var bv0x = {
            r: /\n|\\|\'/g,
            "\n": "\\n",
            "\\": "\\\\",
            "'": "\\'"
        };
        var ceY8Q = function(bi0x) {
            return (bi0x || "").replace(bv0x.r, function($1) {
                return bv0x[$1] || $1
            })
        };
        return function(bi0x, iC4G) {
            if (!bi0x) return;
            iC4G.push("__OUT.push('" + ceY8Q(bi0x) + "');")
        }
    }();
    var ceZ8R = function() {
        var cfa8S = /\t/g,
            cfh8Z = /\n/g,
            cgj8b = /\r\n?/g;
        var bwl1x = function(bi0x, ur7k) {
            var s0x = bi0x.indexOf("}", ur7k + 1);
            while (bi0x.charAt(s0x - 1) == "\\") {
                s0x = bi0x.indexOf("}", s0x + 1)
            }
            return s0x
        };
        var cgZ8R = function() {
            var bs0x = [],
                Bu9l = arguments[0];
            for (var x in Bu9l) {
                x = (x || "").trim();
                if (!x) continue;
                bs0x.push(x + "=$v('" + x + "')")
            }
            return bs0x.length > 0 ? "var " + bs0x.join(",") + ";" : ""
        };
        return function(bi0x) {
            mF5K = {};
            bi0x = bi0x.replace(cgj8b, "\n").replace(cfa8S, "    ");
            var pW5b = ["if(!__CTX) return '';", ""];
            pW5b.push("function $v(__NAME){var v = __CTX[__NAME];return v==null?window[__NAME]:v;};");
            pW5b.push("var defined=function(__NAME){return __CTX[__NAME]!=null;},");
            pW5b.push("__OUT=[];");
            var Bv9m = -1,
                bo0x = bi0x.length;
            var me4i, FV0x, OK3x, OR3x, zl8d, OV3x, bkT9K, Pj3x;
            while (Bv9m + 1 < bo0x) {
                me4i = Bv9m;
                me4i = bi0x.indexOf("{", me4i + 1);
                while (me4i >= 0) {
                    FV0x = bwl1x(bi0x, me4i);
                    OK3x = bi0x.substring(me4i, FV0x);
                    OR3x = OK3x.match(bN0x.blk);
                    if ( !! OR3x) {
                        zl8d = OR3x[1].length + 1;
                        OV3x = bi0x.indexOf("}", me4i + zl8d);
                        if (OV3x >= 0) {
                            bkT9K = OV3x - me4i - zl8d <= 0 ? "{/" + OR3x[1] + "}" : OK3x.substr(zl8d + 1);
                            zl8d = bi0x.indexOf(bkT9K, OV3x + 1);
                            if (zl8d >= 0) {
                                XL5Q(bi0x.substring(Bv9m + 1, me4i), pW5b);
                                Pj3x = bi0x.substring(OV3x + 1, zl8d);
                                switch (OR3x[1]) {
                                    case "cdata":
                                        XF5K(Pj3x, pW5b);
                                        break;
                                    case "minify":
                                        XF5K(Pj3x.replace(cfh8Z, " ").replace(bHM4Q, " "), pW5b);
                                        break;
                                    case "eval":
                                        if ( !! Pj3x) pW5b.push("__OUT.push((function(){" + Pj3x + "})());");
                                        break
                                }
                                me4i = Bv9m = zl8d + bkT9K.length - 1
                            }
                        }
                    } else if (bi0x.charAt(me4i - 1) != "$" && bi0x.charAt(me4i - 1) != "\\" && OK3x.substr(OK3x.charAt(1) == "/" ? 2 : 1).search(bN0x.tag) == 0) {
                        break
                    }
                    me4i = bi0x.indexOf("{", me4i + 1)
                }
                if (me4i < 0) break;
                FV0x = bwl1x(bi0x, me4i);
                if (FV0x < 0) break;
                XL5Q(bi0x.substring(Bv9m + 1, me4i), pW5b);
                cew8o(bi0x.substring(me4i, FV0x + 1), pW5b);
                Bv9m = FV0x
            }
            XL5Q(bi0x.substring(Bv9m + 1), pW5b);
            pW5b.push(';return __OUT.join("");');
            pW5b[1] = cgZ8R(mF5K);
            mF5K = null;
            return new Function("__CTX", "__MDF", pW5b.join(""))
        }
    }();
    TrimPath.seed = function() {
        return fR2x
    };
    TrimPath.merge = function() {
        var PC3x = {};
        TrimPath.dump = function() {
            return {
                func: PC3x,
                text: Jk1x
            }
        };
        return function(eF2x, j0x, iO4S) {
            try {
                j0x = j0x || {};
                if (!PC3x[eF2x] && !Jk1x[eF2x]) return "";
                if (!PC3x[eF2x]) {
                    PC3x[eF2x] = ceZ8R(Jk1x[eF2x]);
                    delete Jk1x[eF2x]
                }
                if ( !! iO4S) {
                    for (var x in bN0x.ext) if (!iO4S[x]) iO4S[x] = bN0x.ext[x]
                }
                return PC3x[eF2x](j0x, iO4S || bN0x.ext)
            } catch (ex) {
                return ex.message || ""
            }
        }
    }();
    TrimPath.parse = function() {
        var chf9W = +(new Date);
        return function(bi0x, eF2x) {
            if (!bi0x) return "";
            eF2x = eF2x || "ck_" + chf9W++;
            Jk1x[eF2x] = bi0x;
            return eF2x
        }
    }()
})();
(function() {
    var c0x = NEJ.P,
        a9j = c0x("nej.e"),
        k0x = c0x("nej.u"),
        fl2x = {};
    a9j.FP0x = TrimPath.seed;
    a9j.bQ0x = function() {
        var bzN2x = function(C0x) {
            return !a9j.ih3x ? "" : a9j.ih3x(C0x)
        };
        return function(eF2x, j0x, iO4S) {
            j0x = j0x || {};
            j0x.inline = bzN2x;
            iO4S = NEJ.X(NEJ.X({}, fl2x), iO4S);
            iO4S.rand = k0x.mT5Y;
            iO4S.format = k0x.lP4T;
            iO4S.escape = k0x.dK2x;
            iO4S.inline = bzN2x;
            return TrimPath.merge(eF2x, j0x, iO4S)
        }
    }();
    a9j.eg2x = function(bi0x, chE9v) {
        if (!bi0x) return "";
        var eF2x, G0x = a9j.w0x(bi0x);
        if ( !! G0x) {
            eF2x = G0x.id;
            bi0x = G0x.value || G0x.innerText;
            if (!chE9v) a9j.cF1x(G0x)
        }
        return TrimPath.parse(bi0x, eF2x)
    };
    a9j.dP2x = function(bA0x, eF2x, j0x, iO4S) {
        bA0x = a9j.w0x(bA0x);
        if ( !! bA0x) bA0x.innerHTML = a9j.bQ0x(eF2x, j0x, iO4S);
        return this
    };
    a9j.csM1x = function(bv0x) {
        NEJ.X(fl2x, bv0x)
    };
    c0x("dbg").dumpJST = function() {
        return TrimPath.dump()
    }
})();
(function() {
    var cG1x = NEJ.P("nej.p"),
        M0x = window,
        jO4S = cG1x.IN1x,
        bAU2x = jO4S.ipad || jO4S.iphone;
    if (!bAU2x && !! M0x.requestAnimationFrame && !! M0x.cancelRequestAnimationFrame) return;
    var kF4J = cG1x.cP1x.prefix.pro;
    if (!bAU2x && !! M0x[kF4J + "RequestAnimationFrame"] && !! M0x[kF4J + "CancelRequestAnimationFrame"]) {
        M0x.requestAnimationFrame = M0x[kF4J + "RequestAnimationFrame"];
        M0x.cancelRequestAnimationFrame = M0x[kF4J + "CancelRequestAnimationFrame"];
        return
    }
    var XA5F = jO4S.desktop ? 80 : jO4S.ios ? 50 : 30;
    M0x.requestAnimationFrame = function(dn1x) {
        return window.setTimeout(function() {
            try {
                dn1x(+(new Date))
            } catch (ex) {}
        }, 1e3 / XA5F)
    };
    M0x.cancelRequestAnimationFrame = function(C0x) {
        window.clearTimeout(C0x);
        return this
    }
})();
(function() {
    var c0x = NEJ.P,
        bm0x = NEJ.F,
        k0x = c0x("nej.u"),
        a9j = c0x("nej.e"),
        h0x = c0x("nej.v"),
        ba0x = c0x("nej.h"),
        cJ1x = c0x("nej.x"),
        Xz5E = c0x("nej.ut.j.cb"),
        fW2x;
    if ( !! a9j.pS5X) return;
    a9j.pS5X = cJ1x.pS5X = function() {
        var Q0x = {},
            fQ2x = /^(?:mouse.*|(?:dbl)?click)$/i;
        window.onflashevent = function(d0x) {
            var C0x = decodeURIComponent(d0x.target),
                t0x = d0x.type.toLowerCase();
            var da1x = Q0x[C0x + "-on" + t0x];
            if ( !! da1x) {
                try {
                    da1x(d0x)
                } catch (e) {}
                return
            }
            var cH1x = Q0x[C0x + "-tgt"];
            if ( !! cH1x && fQ2x.test(t0x)) {
                bCe2x(cH1x, d0x)
            }
        };
        var bkO9F = function(e0x) {
            var bA0x = a9j.w0x(e0x.parent) || document.body,
                dy2x = a9j.bQ0x(fW2x, e0x);
            bA0x.insertAdjacentHTML(!e0x.hidden ? "beforeEnd" : "afterBegin", dy2x)
        };
        var bCe2x = function(C0x, d0x) {
            var t0x = d0x.type.toLowerCase();
            requestAnimationFrame(function() {
                h0x.A0x(C0x, t0x)
            })
        };
        var chH9y = function(gV2x) {
            return !!gV2x && !! gV2x.inited && !! gV2x.inited()
        };
        var Jc1x = function(C0x) {
            var bs0x = [document.embeds[C0x], a9j.w0x(C0x), document[C0x], window[C0x]],
                s0x = k0x.dZ2x(bs0x, chH9y),
                gV2x = bs0x[s0x],
                bkM9D = C0x + "-count";
            Q0x[bkM9D]++;
            if ( !! gV2x || Q0x[bkM9D] > 100) {
                Q0x[C0x](gV2x);
                delete Q0x[C0x];
                delete Q0x[bkM9D];
                return
            }
            window.setTimeout(Jc1x.g0x(null, C0x), 300)
        };
        var chN9E = function(e0x) {
            var C0x = e0x.id,
                fI2x = e0x.params;
            if (!fI2x) {
                fI2x = {};
                e0x.params = fI2x
            }
            var mF5K = fI2x.flashvars || "";
            mF5K += (!mF5K ? "" : "&") + ("id=" + C0x);
            if (!e0x.hidden && ( !! e0x.target || ba0x.YE5J(fI2x.wmode))) {
                var gY2x = a9j.kQ4U(e0x.target) || a9j.kQ4U(e0x.parent),
                    Xy5D = k0x.Yf5k();
                Xz5E["cb" + Xy5D] = bCe2x.g0x(null, gY2x);
                mF5K += "&onevent=nej.ut.j.cb.cb" + Xy5D;
                Q0x[C0x + "-tgt"] = gY2x
            }
            fI2x.flashvars = mF5K;
            k0x.dZ2x(e0x, function(z0x, J0x) {
                if (k0x.fV2x(z0x) && J0x != "onready") {
                    Q0x[C0x + "-" + J0x] = z0x
                }
            })
        };
        return function(e0x) {
            e0x = NEJ.X({}, e0x);
            if (!e0x.src) return;
            var C0x = "flash_" + k0x.Yf5k();
            e0x.id = C0x;
            chN9E(e0x);
            bkO9F(e0x);
            if (!e0x.onready) return;
            Q0x[C0x] = e0x.onready;
            Q0x[C0x + "-count"] = 0;
            Jc1x(C0x)
        }
    }();
    fW2x = a9j.eg2x('{var hide  = defined("hidden")&&!!hidden}{var param = defined("params")&&params||NEJ.O}{var width = !hide?width:"1px",height = !hide?height:"1px"}{if hide}<div style="position:absolute;top:0;left:0;width:1px;height:1px;z-index:10000;overflow:hidden;">{/if}<object classid = "clsid:d27cdb6e-ae6d-11cf-96b8-444553540000"codebase = "http://fpdownload.macromedia.com/get/flashplayer/current/swflash.cab"width = "${width|default:"100px"}"height = "${height|default:"100px"}" id="${id}"><param value="${src}" name="movie">{for x in param}<param value="${x}" name="${x_key}"/>{/for}<embed src="${src}" name="${id}"width="${width|default:"100px"}"height="${height|default:"100px"}"pluginspage="http://www.adobe.com/go/getflashplayer"type="application/x-shockwave-flash"{for x in param}${x_key}="${x}" {/for}></embed></object>{if hide}</div>{/if}');
    cJ1x.isChange = !0
})();
(function() {
    var c0x = NEJ.P,
        iq3x = c0x("nej.c"),
        a9j = c0x("nej.e"),
        k0x = c0x("nej.u"),
        M0x = c0x("nej.ut.j"),
        Xz5E = c0x("nej.ut.j.cb"),
        Q0x = {},
        fR2x = +(new Date),
        bkJ9A;
    if ( !! M0x.bkI9z) return;
    Xz5E["ld" + fR2x] = function(J0x, cY1x) {
        var iN4R = Q0x[J0x];
        if (!iN4R) return;
        delete Q0x[J0x];
        iN4R.sh6b({
            status: 200,
            result: cY1x
        })
    };
    Xz5E["er" + fR2x] = function(J0x, eW2x) {
        var iN4R = Q0x[J0x];
        if (!iN4R) return;
        delete Q0x[J0x];
        iN4R.sh6b({
            status: eW2x || 0
        })
    };
    M0x.bkI9z = NEJ.C();
    bkJ9A = M0x.bkI9z.O0x(M0x.GA0x);
    bkJ9A.cj1x = function(e0x) {
        var gV2x = Q0x.flash;
        if (k0x.eq2x(gV2x)) {
            gV2x.push(this.cj1x.g0x(this, e0x));
            return
        }
        if (!gV2x) {
            Q0x.flash = [this.cj1x.g0x(this, e0x)];
            a9j.pS5X({
                hidden: !0,
                src: iq3x.w0x("ajax.swf"),
                onready: function(gV2x) {
                    if (!gV2x) return;
                    var i0x = Q0x.flash;
                    Q0x.flash = gV2x;
                    k0x.lU4Y(i0x, function(da1x) {
                        try {
                            da1x()
                        } catch (e) {}
                    })
                }
            });
            return
        }
        this.ze8W = "swf-" + k0x.mT5Y();
        Q0x[this.ze8W] = this;
        var j0x = NEJ.EX({
            url: "",
            data: null,
            method: "GET"
        }, e0x.request);
        j0x.key = this.ze8W;
        j0x.headers = e0x.headers;
        j0x.onerror = "nej.ut.j.cb.er" + fR2x;
        j0x.onloaded = "nej.ut.j.cb.ld" + fR2x;
        var bFC3x = iq3x.bMI5N(j0x.url);
        if ( !! bFC3x) j0x.policyURL = bFC3x;
        gV2x.request(j0x)
    };
    bkJ9A.kq4u = function() {
        delete Q0x[this.ze8W];
        this.sh6b({
            status: 0
        });
        return this
    }
})();
(function() {
    var c0x = NEJ.P,
        Y0x = NEJ.O,
        ba0x = c0x("nej.h");
    ba0x.bGc3x = function() {
        var cO1x = /^([\w]+?:\/\/.*?(?=\/|$))/i;
        return function(hw3x) {
            hw3x = hw3x || "";
            if (cO1x.test(hw3x)) return RegExp.$1;
            return "*"
        }
    }();
    ba0x.bkH9y = function(j0x) {
        return j0x
    };
    ba0x.bkG9x = function(bHj3x, e0x) {
        if (!bHj3x.postMessage) return;
        e0x = e0x || Y0x;
        bHj3x.postMessage(ba0x.bkH9y(e0x.data), ba0x.bGc3x(e0x.origin))
    }
})();
(function() {
    var c0x = NEJ.P,
        bm0x = NEJ.F,
        a9j = c0x("nej.e"),
        h0x = c0x("nej.v"),
        k0x = c0x("nej.u"),
        M0x = c0x("nej.ut"),
        b0x;
    if ( !! M0x.ft2x) return;
    M0x.ft2x = NEJ.C();
    b0x = M0x.ft2x.O0x(M0x.cC1x);
    b0x.cl1x = function() {
        this.P0x = {};
        this.cr1x()
    };
    b0x.bk0x = function(e0x) {
        this.bl0x(e0x);
        this.Kd1x = a9j.w0x(e0x.element) || window;
        this.bHI4M(e0x.event);
        this.chV9M();
        this.A0x("oninit")
    };
    b0x.bD0x = function() {
        var BE9v = function(z0x, J0x, bv0x) {
            if (!k0x.eq2x(z0x)) {
                k0x.Yg5l(this.Kd1x, J0x)
            }
            delete bv0x[J0x]
        };
        return function() {
            this.bI0x();
            k0x.dZ2x(this.P0x, BE9v, this);
            delete this.Kd1x
        }
    }();
    b0x.Xx5C = function(G0x, t0x) {
        G0x = a9j.w0x(G0x);
        return G0x == this.Kd1x && (!t0x || !! this.P0x["on" + t0x])
    };
    b0x.bHI4M = function(d0x) {
        if (k0x.fj2x(d0x)) {
            var T0x = "on" + d0x;
            if (!this.P0x[T0x]) {
                this.P0x[T0x] = this.ciy9p.g0x(this, d0x)
            }
            this.bIV4Z(d0x);
            return
        }
        if (k0x.eq2x(d0x)) {
            k0x.be0x(d0x, this.bHI4M, this)
        }
    };
    b0x.bIV4Z = function(t0x) {
        var d0x = "on" + t0x,
            da1x = this.Kd1x[d0x],
            bIX4b = this.P0x[d0x];
        if (da1x != bIX4b) {
            this.Xw5B(t0x);
            if ( !! da1x && da1x != bm0x) this.bJy4C(t0x, da1x);
            this.Kd1x[d0x] = bIX4b
        }
    };
    b0x.bJy4C = function(t0x, da1x, ciI9z) {
        var i0x = this.P0x[t0x];
        if (!i0x) {
            i0x = [];
            this.P0x[t0x] = i0x
        }
        if (k0x.fV2x(da1x)) {
            !ciI9z ? i0x.push(da1x) : i0x.unshift(da1x)
        }
    };
    b0x.Xw5B = function(t0x, da1x) {
        var i0x = this.P0x[t0x];
        if (!i0x || !i0x.length) return;
        if (!da1x) {
            delete this.P0x[t0x];
            return
        }
        k0x.lU4Y(i0x, function(z0x, s0x, FK0x) {
            if (da1x === z0x) {
                FK0x.splice(s0x, 1);
                return !0
            }
        })
    };
    b0x.ciy9p = function(t0x, d0x) {
        d0x = d0x || {
                noargs: !0
            };
        d0x.type = t0x;
        this.A0x("ondispatch", d0x);
        if ( !! d0x.stopped) return;
        k0x.be0x(this.P0x[t0x], function(da1x) {
            try {
                da1x(d0x)
            } catch (ex) {
                console.error(ex.message);
                console.error(ex.stack)
            }
        })
    };
    b0x.chV9M = function() {
        var bkB9s = function(d0x) {
            var bg0x = d0x.args,
                t0x = bg0x[1].toLowerCase();
            if (this.Xx5C(bg0x[0], t0x)) {
                d0x.stopped = !0;
                this.bIV4Z(t0x);
                this.bJy4C(t0x, bg0x[2], bg0x[3]);
                this.A0x("oneventadd", {
                    type: t0x,
                    listener: bg0x[2]
                })
            }
        };
        var cji9Z = function(d0x) {
            var bg0x = d0x.args,
                t0x = bg0x[1].toLowerCase();
            if (this.Xx5C(bg0x[0], t0x)) {
                d0x.stopped = !0;
                this.Xw5B(t0x, bg0x[2])
            }
        };
        var bmf9W = function(d0x) {
            var bg0x = d0x.args,
                t0x = (bg0x[1] || "").toLowerCase();
            if (this.Xx5C(bg0x[0])) {
                if ( !! t0x) {
                    this.Xw5B(t0x);
                    return
                }
                k0x.dZ2x(this.P0x, function(z0x, J0x) {
                    if (k0x.eq2x(z0x)) {
                        this.Xw5B(J0x)
                    }
                }, this)
            }
        };
        var cjk9b = function(d0x) {
            var bg0x = d0x.args,
                t0x = bg0x[1].toLowerCase();
            if (this.Xx5C(bg0x[0], t0x)) {
                d0x.stopped = !0;
                bg0x[0]["on" + t0x].apply(bg0x[0], bg0x.slice(2))
            }
        };
        return function() {
            if ( !! this.cjE9v) return;
            this.cjE9v = true;
            h0x.q0x = h0x.q0x.dY2x(bkB9s.g0x(this));
            h0x.mc4g = h0x.mc4g.dY2x(cji9Z.g0x(this));
            h0x.ip3x = h0x.ip3x.dY2x(bmf9W.g0x(this));
            h0x.A0x = h0x.A0x.dY2x(cjk9b.g0x(this))
        }
    }()
})();
(function() {
    var c0x = NEJ.P,
        M0x = c0x("nej.p"),
        ba0x = c0x("nej.h"),
        k0x = c0x("nej.u"),
        h0x = c0x("nej.v"),
        H0x = c0x("nej.ut");
    if (M0x.lX4b.trident) return;
    if ( !! window.postMessage) {
        ba0x.bkH9y = ba0x.bkH9y.dY2x(function(d0x) {
            d0x.stopped = !0;
            d0x.value = JSON.stringify(d0x.args[0])
        });
        return
    }
    var J0x = "MSG|",
        jn4r = [];
    var cjK9B = function() {
        var T0x = unescape(window.name || "").trim();
        if (!T0x || T0x.indexOf(J0x) != 0) return;
        window.name = "";
        var n0x = k0x.bHH4L(T0x.replace(J0x, ""), "|"),
            hw3x = (n0x.origin || "").toLowerCase();
        if ( !! hw3x && hw3x != "*" && location.href.toLowerCase().indexOf(hw3x) != 0) return;
        h0x.A0x(window, "message", {
            data: JSON.parse(n0x.data || "null"),
            source: window.frames[n0x.self] || n0x.self,
            origin: ba0x.bGc3x(n0x.ref || document.referrer)
        })
    };
    var cjT9K = function() {
        var Xs5x;
        var cjU9L = function(bv0x, s0x, i0x) {
            if (k0x.cT1x(Xs5x, bv0x.w) < 0) {
                Xs5x.push(bv0x.w);
                i0x.splice(s0x, 1);
                bv0x.w.name = bv0x.d
            }
        };
        return function() {
            Xs5x = [];
            k0x.lU4Y(jn4r, cjU9L);
            Xs5x = null
        }
    }();
    ba0x.bkG9x = function() {
        var cka9R = function(j0x) {
            var n0x = {};
            j0x = j0x || Y0x;
            n0x.origin = j0x.origin || "";
            n0x.ref = location.href;
            n0x.self = j0x.source;
            n0x.data = JSON.stringify(j0x.data);
            return J0x + k0x.xa8S(n0x, "|", !0)
        };
        return ba0x.bkG9x.dY2x(function(d0x) {
            d0x.stopped = !0;
            var bg0x = d0x.args;
            jn4r.unshift({
                w: bg0x[0],
                d: escape(cka9R(bg0x[1]))
            })
        })
    }();
    H0x.ft2x.B0x({
        element: window,
        event: "message"
    });
    window.setInterval(cjT9K, 100);
    window.setInterval(cjK9B, 20)
})();
(function() {
    var c0x = NEJ.P,
        ba0x = c0x("nej.h"),
        a9j = c0x("nej.e"),
        v0x = c0x("nej.j");
    v0x.ckA9r = function() {
        var in3x = window.name || "_parent",
            ckE9v = {
                fX2x: window.top,
                in3x: window,
                bA0x: window.parent
            };
        return function(cH1x, e0x) {
            if (typeof cH1x == "string") {
                cH1x = ckE9v[cH1x] || window.frames[cH1x];
                if (!cH1x) return this
            }
            var j0x = NEJ.X({
                origin: "*",
                source: in3x
            }, e0x);
            ba0x.bkG9x(cH1x, j0x);
            return this
        }
    }()
})();
(function() {
    var c0x = NEJ.P,
        iq3x = c0x("nej.c"),
        a9j = c0x("nej.e"),
        h0x = c0x("nej.v"),
        k0x = c0x("nej.u"),
        v0x = c0x("nej.j"),
        M0x = c0x("nej.ut.j"),
        Q0x = {},
        Xq5v;
    if ( !! M0x.bkp9g) return;
    M0x.bkp9g = NEJ.C();
    Xq5v = M0x.bkp9g.O0x(M0x.GA0x);
    Xq5v.cl1x = function() {
        var ev2x = "NEJ-AJAX-DATA:",
            CT9K = !1;
        var bko9f = function(d0x) {
            var j0x = d0x.data;
            if (j0x.indexOf(ev2x) != 0) return;
            j0x = JSON.parse(j0x.replace(ev2x, ""));
            var iN4R = Q0x[j0x.key];
            if (!iN4R) return;
            delete Q0x[j0x.key];
            j0x.result = decodeURIComponent(j0x.result || "");
            iN4R.sh6b(j0x)
        };
        var bkn9e = function() {
            if (!CT9K) {
                CT9K = !0;
                h0x.q0x(window, "message", bko9f)
            }
        };
        return function() {
            this.cr1x();
            bkn9e()
        }
    }();
    Xq5v.cj1x = function(e0x) {
        var fu2x = e0x.request,
            iN4R = iq3x.bMB5G(fu2x.url),
            uN7G = Q0x[iN4R];
        if (k0x.eq2x(uN7G)) {
            uN7G.push(this.cj1x.g0x(this, e0x));
            return
        }
        if (!uN7G) {
            Q0x[iN4R] = [this.cj1x.g0x(this, e0x)];
            a9j.YB5G({
                src: iN4R,
                visible: !1,
                onload: function(d0x) {
                    var i0x = Q0x[iN4R];
                    Q0x[iN4R] = h0x.U0x(d0x).contentWindow;
                    k0x.lU4Y(i0x, function(da1x) {
                        try {
                            da1x()
                        } catch (e) {}
                    })
                }
            });
            return
        }
        this.ze8W = "frm-" + k0x.mT5Y();
        Q0x[this.ze8W] = this;
        var j0x = NEJ.EX({
            url: "",
            data: null,
            timeout: 0,
            method: "GET"
        }, fu2x);
        j0x.key = this.ze8W;
        j0x.headers = e0x.headers;
        v0x.ckA9r(Q0x[iN4R], {
            data: j0x
        })
    };
    Xq5v.kq4u = function() {
        delete Q0x[this.ze8W];
        this.sh6b({
            status: 0
        });
        return this
    }
})();
(function() {
    var c0x = NEJ.P,
        Y0x = NEJ.O,
        dO2x = c0x("nej.g"),
        a9j = c0x("nej.e"),
        h0x = c0x("nej.v"),
        k0x = c0x("nej.u"),
        v0x = c0x("nej.j"),
        M0x = c0x("nej.ut.j"),
        Q0x = {},
        FA0x;
    if ( !! M0x.bkm9d) return;
    M0x.bkm9d = NEJ.C();
    FA0x = M0x.bkm9d.O0x(M0x.GA0x);
    FA0x.cl1x = function() {
        var ev2x = "NEJ-UPLOAD-RESULT:",
            CT9K = !1;
        var bko9f = function(d0x) {
            var j0x = d0x.data;
            if (j0x.indexOf(ev2x) != 0) return;
            j0x = JSON.parse(j0x.replace(ev2x, ""));
            var iN4R = Q0x[j0x.key];
            if (!iN4R) return;
            delete Q0x[j0x.key];
            iN4R.sh6b(decodeURIComponent(j0x.result))
        };
        var bkn9e = function() {
            if (!CT9K) {
                CT9K = !0;
                h0x.q0x(window, "message", bko9f)
            }
        };
        return function() {
            this.cr1x();
            bkn9e()
        }
    }();
    FA0x.bD0x = function() {
        this.bI0x();
        a9j.cF1x(this.bkj9a);
        delete this.bkj9a;
        window.clearTimeout(this.dI2x);
        delete this.dI2x
    };
    FA0x.sh6b = function(cY1x) {
        var R0x;
        try {
            R0x = JSON.parse(cY1x);
            this.A0x("onload", R0x)
        } catch (e) {
            this.A0x("onerror", {
                code: dO2x.bMV5a,
                message: cY1x
            })
        }
    };
    FA0x.cj1x = function() {
        var cmj9a = function() {
            var ly4C, cY1x;
            try {
                var ly4C = this.bkj9a.contentWindow.document.body,
                    cY1x = ly4C.innerText || ly4C.textContent
            } catch (e) {
                return
            }
            this.sh6b(cY1x)
        };
        var bkf9W = function(V0x, eC2x, qv6p) {
            v0x.br0x(V0x, {
                type: "json",
                method: "POST",
                cookie: qv6p,
                mode: parseInt(eC2x) || 0,
                onload: function(j0x) {
                    if (!this.dI2x) return;
                    this.A0x("onuploading", j0x);
                    this.dI2x = window.setTimeout(bkf9W.g0x(this, V0x, eC2x, qv6p), 1e3)
                }.g0x(this),
                onerror: function(bP0x) {
                    if (!this.dI2x) return;
                    this.dI2x = window.setTimeout(bkf9W.g0x(this, V0x, eC2x, qv6p), 1e3)
                }.g0x(this)
            })
        };
        return function(e0x) {
            var fu2x = e0x.request,
                nb5g = e0x.headers,
                eB2x = fu2x.data,
                T0x = "fom-" + k0x.mT5Y();
            Q0x[T0x] = this;
            eB2x.target = T0x;
            eB2x.method = "POST";
            eB2x.enctype = dO2x.CC9t;
            eB2x.encoding = dO2x.CC9t;
            var V0x = eB2x.action || "",
                lz4D = V0x.indexOf("?") <= 0 ? "?" : "&";
            eB2x.action = V0x + lz4D + "_proxy_=form";
            this.bkj9a = a9j.YB5G({
                name: T0x,
                onload: function(d0x) {
                    var uN7G = h0x.U0x(d0x);
                    h0x.q0x(uN7G, "load", cmj9a.g0x(this));
                    eB2x.submit();
                    var bsI1x = (eB2x.nej_query || Y0x).value;
                    if (!bsI1x) return;
                    var eC2x = (eB2x.nej_mode || Y0x).value,
                        qv6p = (eB2x.nej_cookie || Y0x).value == "true";
                    this.dI2x = window.setTimeout(bkf9W.g0x(this, bsI1x, eC2x, qv6p), 100)
                }.g0x(this)
            })
        }
    }();
    FA0x.kq4u = function() {
        this.A0x("onerror", {
            code: dO2x.bNe5j,
            message: "客户端终止文件上传"
        });
        return this
    }
})();
(function() {
    var c0x = NEJ.P,
        Y0x = NEJ.O,
        ba0x = c0x("nej.h"),
        M0x = c0x("nej.ut.j");
    ba0x.blA9r = function() {
        return new XMLHttpRequest
    };
    ba0x.bke9V = function(eC2x, Xn5s, e0x) {
        var bv0x = !! Xn5s ? {
            2: M0x.bkm9d
        } : {
            2: M0x.bkp9g,
            3: M0x.bkI9z
        };
        return (bv0x[eC2x] || M0x.XS5X).B0x(e0x)
    }
})();
(function() {
    var c0x = NEJ.P,
        M0x = c0x("nej.p"),
        ba0x = c0x("nej.h");
    if (M0x.lX4b.trident) return;
    ba0x.blA9r = function() {
        var IX1x = ["Msxml2.XMLHTTP.6.0", "Msxml2.XMLHTTP.3.0", "Msxml2.XMLHTTP.4.0", "Msxml2.XMLHTTP.5.0", "MSXML2.XMLHTTP", "Microsoft.XMLHTTP"];
        var cmm0x = function() {
            for (var i = 0, l = IX1x.length; i < l; i++) {
                try {
                    return new ActiveXObject(IX1x[i])
                } catch (e) {}
            }
            return null
        };
        return ba0x.blA9r.dY2x(function(d0x) {
            if ( !! window.XMLHttpRequest) return;
            d0x.stopped = !0;
            d0x.value = cmm0x()
        })
    }();
    ba0x.bke9V = function() {
        var Ba9R = {
            0: 2,
            1: 3
        };
        return ba0x.bke9V.dY2x(function(d0x) {
            var bg0x = d0x.args,
                eC2x = bg0x[0] || 0;
            bg0x[0] = !! bg0x[1] ? 2 : Ba9R[eC2x] || eC2x
        })
    }()
})();
(function() {
    var c0x = NEJ.P,
        Y0x = NEJ.O,
        bm0x = NEJ.F,
        ba0x = c0x("nej.h"),
        dO2x = c0x("nej.g"),
        k0x = c0x("nej.u"),
        v0x = c0x("nej.j"),
        M0x = c0x("nej.ut.j"),
        nn5s = {},
        HG0x = bm0x;
    v0x.kq4u = function(eF2x) {
        var Q0x = nn5s[eF2x];
        if (!Q0x) return this;
        Q0x.req.kq4u();
        return this
    };
    v0x.Xk5p = function(dB2x) {
        HG0x = dB2x || bm0x;
        return this
    };
    v0x.br0x = function() {
        var iE4I = (location.protocol + "//" + location.host).toLowerCase();
        var cmq0x = function(V0x) {
            var hw3x = k0x.bZk7d(V0x);
            return !!hw3x && hw3x != iE4I
        };
        var cmB0x = function(nb5g) {
            return (nb5g || Y0x)[dO2x.wB7u] == dO2x.CC9t
        };
        var cmI0x = function(e0x) {
            var Xn5s = cmB0x(e0x.headers);
            if (!cmq0x(e0x.url) && !Xn5s) return M0x.XS5X.B0x(e0x);
            return ba0x.bke9V(e0x.mode, Xn5s, e0x)
        };
        var BE9v = function(eF2x) {
            var Q0x = nn5s[eF2x];
            if (!Q0x) return;
            if ( !! Q0x.req) Q0x.req.S0x();
            delete nn5s[eF2x]
        };
        var bvq1x = function(eF2x, t0x) {
            var Q0x = nn5s[eF2x];
            if (!Q0x) return;
            BE9v(eF2x);
            try {
                var d0x = {
                    type: t0x,
                    result: arguments[2]
                };
                HG0x(d0x);
                if (!d0x.stopped)(Q0x[t0x] || bm0x)(d0x.result)
            } catch (ex) {
                console.error(ex.message);
                console.error(ex)
            }
        };
        var wp7i = function(eF2x, j0x) {
            bvq1x(eF2x, "onload", j0x)
        };
        var zy8q = function(eF2x, bP0x) {
            bvq1x(eF2x, "onerror", bP0x)
        };
        return function(V0x, e0x) {
            e0x = e0x || {};
            var eF2x = k0x.mT5Y(),
                Q0x = {
                    onload: e0x.onload || bm0x,
                    onerror: e0x.onerror || bm0x
                };
            nn5s[eF2x] = Q0x;
            e0x.onload = wp7i.g0x(null, eF2x);
            e0x.onerror = zy8q.g0x(null, eF2x);
            if ( !! e0x.query) {
                var lz4D = V0x.indexOf("?") < 0 ? "?" : "&",
                    bB0x = e0x.query;
                if (k0x.ke4i(bB0x)) bB0x = k0x.dh1x(bB0x);
                if ( !! bB0x) V0x += lz4D + bB0x
            }
            e0x.url = V0x;
            Q0x.req = cmI0x(e0x);
            Q0x.req.blF9w(e0x.data);
            return eF2x
        }
    }();
    v0x.gd2x = function(eB2x, e0x) {
        var go2x = {
            mode: 0,
            type: "json",
            query: null,
            cookie: !1,
            headers: {},
            onload: null,
            onerror: null,
            onuploading: null,
            onbeforerequest: null
        };
        NEJ.EX(go2x, e0x);
        go2x.data = eB2x;
        go2x.method = "POST";
        go2x.timeout = 0;
        go2x.headers[dO2x.wB7u] = dO2x.CC9t;
        return v0x.br0x(eB2x.action, go2x)
    }
})();
(function() {
    var c0x = NEJ.P,
        bm0x = NEJ.F,
        dO2x = c0x("nej.g"),
        h0x = c0x("nej.v"),
        k0x = c0x("nej.u"),
        H0x = c0x("nej.ut"),
        M0x = c0x("nej.ut.j"),
        lE4I, jb4f = 6e4;
    if ( !! M0x.Oa3x) return;
    M0x.Oa3x = NEJ.C();
    lE4I = M0x.Oa3x.O0x(H0x.cC1x);
    lE4I.cl1x = function() {
        this.cr1x();
        this.Oe3x = {
            onerror: this.cmJ0x.g0x(this),
            onloaded: this.cmL0x.g0x(this)
        };
        if (!this.constructor.P0x) this.constructor.P0x = {
            loaded: {}
        }
    };
    lE4I.bk0x = function(e0x) {
        this.bl0x(e0x);
        this.Fm0x = e0x.version;
        this.bjR9I = e0x.timeout;
        this.Oe3x.version = this.Fm0x;
        this.Oe3x.timeout = this.bjR9I
    };
    lE4I.bxD2x = function(J0x) {
        delete this.constructor.P0x[J0x]
    };
    lE4I.zB8t = function(J0x) {
        return this.constructor.P0x[J0x]
    };
    lE4I.bxS2x = function(J0x, j0x) {
        this.constructor.P0x[J0x] = j0x
    };
    lE4I.Xh5m = bm0x;
    lE4I.byI2x = function(fu2x) {
        h0x.ip3x(fu2x)
    };
    lE4I.bjP9G = function(fu2x) {
        fu2x.src = this.kk4o;
        document.head.appendChild(fu2x)
    };
    lE4I.zD8v = function() {
        var Q0x = this.zB8t(this.kk4o);
        if (!Q0x) return;
        window.clearTimeout(Q0x.timer);
        this.byI2x(Q0x.request);
        delete Q0x.bind;
        delete Q0x.timer;
        delete Q0x.request;
        this.bxD2x(this.kk4o);
        this.zB8t("loaded")[this.kk4o] = !0
    };
    lE4I.Xg5l = function(T0x) {
        var Q0x = this.zB8t(this.kk4o);
        if (!Q0x) return;
        var i0x = Q0x.bind;
        this.zD8v();
        if ( !! i0x && i0x.length > 0) {
            var cp1x;
            while (i0x.length) {
                cp1x = i0x.shift();
                try {
                    cp1x.A0x(T0x, arguments[1])
                } catch (ex) {
                    console.error(ex.message);
                    console.error(ex.stack)
                }
                cp1x.S0x()
            }
        }
    };
    lE4I.eE2x = function(bP0x) {
        this.Xg5l("onerror", bP0x)
    };
    lE4I.bzx2x = function() {
        this.Xg5l("onloaded")
    };
    lE4I.cmR0x = function(V0x) {
        this.constructor.B0x(this.Oe3x).Fg0x(V0x)
    };
    lE4I.bzB2x = function(bP0x) {
        var Q0x = this.zB8t(this.ub7U);
        if (!Q0x) return;
        if ( !! bP0x) Q0x.error++;
        Q0x.loaded++;
        if (Q0x.loaded < Q0x.total) return;
        this.bxD2x(this.ub7U);
        this.A0x(Q0x.error > 0 ? "onerror" : "onloaded")
    };
    lE4I.cmJ0x = function(bP0x) {
        this.bzB2x(!0)
    };
    lE4I.cmL0x = function() {
        this.bzB2x()
    };
    lE4I.Fg0x = function(V0x) {
        V0x = k0x.bmK9B(V0x);
        if (!V0x) {
            this.A0x("onerror", {
                code: dO2x.bpc0x,
                message: "请指定要载入的资源地址！"
            });
            return this
        }
        this.kk4o = V0x;
        if ( !! this.Fm0x) this.kk4o += (this.kk4o.indexOf("?") < 0 ? "?" : "&") + this.Fm0x;
        if (this.zB8t("loaded")[this.kk4o]) {
            try {
                this.A0x("onloaded")
            } catch (ex) {
                console.error(ex.message);
                console.error(ex.stack)
            }
            this.S0x();
            return this
        }
        var Q0x = this.zB8t(this.kk4o),
            fu2x;
        if ( !! Q0x) {
            Q0x.bind.unshift(this);
            Q0x.timer = window.clearTimeout(Q0x.timer)
        } else {
            fu2x = this.Xh5m();
            Q0x = {
                request: fu2x,
                bind: [this]
            };
            this.bxS2x(this.kk4o, Q0x);
            h0x.q0x(fu2x, "load", this.bzx2x.g0x(this));
            h0x.q0x(fu2x, "error", this.eE2x.g0x(this, {
                code: dO2x.boU0x,
                message: "无法加载指定资源文件[" + this.kk4o + "]！"
            }))
        }
        if (this.bjR9I != 0) Q0x.timer = window.setTimeout(this.eE2x.g0x(this, {
            code: dO2x.bzA2x,
            message: "指定资源文件[" + this.kk4o + "]载入超时！"
        }), this.bjR9I || jb4f);
        if ( !! fu2x) this.bjP9G(fu2x);
        this.A0x("onloading");
        return this
    };
    lE4I.bzL2x = function(i0x) {
        if (!i0x || !i0x.length) {
            this.A0x("onerror", {
                code: dO2x.bpc0x,
                message: "请指定要载入的资源队列！"
            });
            return this
        }
        this.ub7U = k0x.mT5Y();
        var Q0x = {
            error: 0,
            loaded: 0,
            total: i0x.length
        };
        this.bxS2x(this.ub7U, Q0x);
        for (var i = 0, l = i0x.length; i < l; i++) {
            if (!i0x[i]) {
                Q0x.total--;
                continue
            }
            this.cmR0x(i0x[i])
        }
        this.A0x("onloading");
        return this
    }
})();
(function() {
    var c0x = NEJ.P,
        Y0x = NEJ.O,
        a9j = c0x("nej.e"),
        ba0x = c0x("nej.h"),
        M0x = c0x("nej.ut.j"),
        Pl3x;
    if ( !! M0x.bjN9E) return;
    M0x.bjN9E = NEJ.C();
    Pl3x = M0x.bjN9E.O0x(M0x.Oa3x);
    Pl3x.Xh5m = function() {
        var eX2x = a9j.cU1x("iframe");
        eX2x.width = 0;
        eX2x.height = 0;
        eX2x.style.display = "none";
        return eX2x
    };
    Pl3x.bjP9G = function(fu2x) {
        fu2x.src = this.kk4o;
        document.body.appendChild(fu2x)
    };
    Pl3x.eE2x = function(bP0x) {
        var eX2x = (this.zB8t(this.kk4o) || Y0x).request;
        this.Xg5l("onerror", bP0x);
        ba0x.YC5H(eX2x)
    };
    Pl3x.bzx2x = function() {
        var ly4C = null,
            eX2x = (this.zB8t(this.kk4o) || Y0x).request;
        try {
            ly4C = eX2x.contentWindow.document.body
        } catch (ex) {}
        this.Xg5l("onloaded", ly4C);
        ba0x.YC5H(eX2x)
    }
})();
(function() {
    var c0x = NEJ.P,
        a9j = c0x("nej.e"),
        M0x = c0x("nej.ut.j"),
        bjJ9A;
    if ( !! M0x.Xc5h) return;
    M0x.Xc5h = NEJ.C();
    bjJ9A = M0x.Xc5h.O0x(M0x.Oa3x);
    bjJ9A.Xh5m = function() {
        return a9j.cU1x("link")
    };
    bjJ9A.bjP9G = function(fu2x) {
        fu2x.href = this.kk4o;
        document.head.appendChild(fu2x)
    }
})();
(function() {
    var c0x = NEJ.P,
        a9j = c0x("nej.e"),
        M0x = c0x("nej.ut.j"),
        Xb5g;
    if ( !! M0x.Xa5f) return;
    M0x.Xa5f = NEJ.C();
    Xb5g = M0x.Xa5f.O0x(M0x.Oa3x);
    Xb5g.bk0x = function(e0x) {
        this.bl0x(e0x);
        this.bAn2x = e0x.async;
        this.bjz9q = e0x.charset;
        this.Oe3x.async = !1;
        this.Oe3x.charset = this.bjz9q
    };
    Xb5g.Xh5m = function() {
        var fu2x = a9j.cU1x("script");
        if (this.bAn2x != null) fu2x.async = !! this.bAn2x;
        if (this.bjz9q != null) fu2x.charset = this.bjz9q;
        return fu2x
    };
    Xb5g.byI2x = function(fu2x) {
        a9j.cF1x(fu2x)
    }
})();
(function() {
    var c0x = NEJ.P,
        v0x = c0x("nej.j"),
        M0x = c0x("nej.ut.j");
    v0x.cmS0x = function(V0x, e0x) {
        M0x.Xa5f.B0x(e0x).Fg0x(V0x);
        return this
    };
    v0x.cns0x = function(i0x, e0x) {
        M0x.Xa5f.B0x(e0x).bzL2x(i0x);
        return this
    };
    v0x.crL1x = function(V0x, e0x) {
        M0x.Xc5h.B0x(e0x).Fg0x(V0x);
        return this
    };
    v0x.cnx0x = function(i0x, e0x) {
        M0x.Xc5h.B0x(e0x).bzL2x(i0x);
        return this
    };
    v0x.bBI2x = function(V0x, e0x) {
        M0x.bjN9E.B0x(e0x).Fg0x(V0x);
        return this
    }
})();
(function() {
    var c0x = NEJ.P,
        Y0x = NEJ.O,
        a9j = c0x("nej.e"),
        h0x = c0x("nej.v"),
        k0x = c0x("nej.u"),
        v0x = c0x("nej.j"),
        H0x = c0x("nej.ut"),
        Q0x = {},
        qZ6T = +(new Date) + "-";
    a9j.cD1x = function() {
        var cg1x = 0;
        var QA3x = function() {
            if (cg1x > 0) return;
            cg1x = 0;
            h0x.A0x(document, "templateready");
            h0x.ip3x(document, "templateready")
        };
        var WS5X = function(fB2x, e0x) {
            var dt1x = a9j.u0x(fB2x, "src");
            if (!dt1x) return;
            e0x = e0x || Y0x;
            var fn2x = e0x.root;
            if (!fn2x) {
                fn2x = fB2x.ownerDocument.location.href
            } else {
                fn2x = k0x.bmK9B(fn2x)
            }
            dt1x = dt1x.split(",");
            k0x.be0x(dt1x, function(z0x, s0x, i0x) {
                i0x[s0x] = k0x.bmK9B(z0x, fn2x)
            });
            return dt1x
        };
        var cnQ0x = function(fB2x, e0x) {
            if (!fB2x) return;
            var dt1x = WS5X(fB2x, e0x);
            if ( !! dt1x) v0x.cnx0x(dt1x, {
                version: a9j.u0x(fB2x, "version")
            });
            a9j.brz0x(fB2x.value)
        };
        var coe0x = function(z0x) {
            cg1x--;
            a9j.brF0x(z0x);
            QA3x()
        };
        var con1x = function(fB2x, e0x) {
            if (!fB2x) return;
            var dt1x = WS5X(fB2x, e0x),
                eK2x = fB2x.value;
            if ( !! dt1x) {
                cg1x++;
                var e0x = {
                    version: a9j.u0x(fB2x, "version"),
                    onloaded: coe0x.g0x(null, eK2x)
                };
                window.setTimeout(v0x.cns0x.g0x(v0x, dt1x, e0x), 0);
                return
            }
            a9j.brF0x(eK2x)
        };
        var cox1x = function(ly4C) {
            cg1x--;
            a9j.cD1x(ly4C);
            QA3x()
        };
        var coN1x = function(fB2x, e0x) {
            if (!fB2x) return;
            var dt1x = WS5X(fB2x, e0x)[0];
            if ( !! dt1x) {
                cg1x++;
                var e0x = {
                    version: a9j.u0x(fB2x, "version"),
                    onloaded: cox1x
                };
                window.setTimeout(v0x.bBI2x.g0x(v0x, dt1x, e0x), 0)
            }
        };
        var cph1x = function(C0x, cY1x) {
            cg1x--;
            a9j.EZ0x(C0x, cY1x || "");
            QA3x()
        };
        var cpo1x = function(fB2x, e0x) {
            if (!fB2x || !fB2x.id) return;
            var C0x = fB2x.id,
                dt1x = WS5X(fB2x, e0x)[0];
            if ( !! dt1x) {
                cg1x++;
                var V0x = dt1x + (dt1x.indexOf("?") < 0 ? "?" : "&") + (a9j.u0x(fB2x, "version") || ""),
                    e0x = {
                        type: "text",
                        method: "GET",
                        onload: cph1x.g0x(null, C0x)
                    };
                window.setTimeout(v0x.br0x.g0x(v0x, V0x, e0x), 0)
            }
        };
        var cpx1x = function(f0x, e0x) {
            var t0x = f0x.name.toLowerCase();
            switch (t0x) {
                case "jst":
                    a9j.eg2x(f0x, !0);
                    return;
                case "txt":
                    a9j.EZ0x(f0x.id, f0x.value || "");
                    return;
                case "ntp":
                    a9j.hN3x(f0x.value || "", f0x.id);
                    return;
                case "js":
                    con1x(f0x, e0x);
                    return;
                case "css":
                    cnQ0x(f0x, e0x);
                    return;
                case "html":
                    coN1x(f0x, e0x);
                    return;
                case "res":
                    cpo1x(f0x, e0x);
                    return
            }
        };
        H0x.ft2x.B0x({
            element: document,
            event: "templateready",
            oneventadd: QA3x
        });
        return function(G0x, e0x) {
            G0x = a9j.w0x(G0x);
            if ( !! G0x) {
                var i0x = G0x.tagName == "TEXTAREA" ? [G0x] : G0x.getElementsByTagName("textarea");
                k0x.be0x(i0x, function(f0x) {
                    cpx1x(f0x, e0x)
                });
                a9j.cF1x(G0x, !0)
            }
            QA3x();
            return this
        }
    }();
    a9j.EZ0x = function(J0x, z0x) {
        Q0x[J0x] = z0x || "";
        return this
    };
    a9j.ih3x = function(J0x) {
        return Q0x[J0x] || ""
    };
    a9j.hN3x = function(G0x, J0x) {
        J0x = J0x || k0x.mT5Y();
        G0x = a9j.w0x(G0x) || G0x;
        a9j.EZ0x(qZ6T + J0x, G0x);
        a9j.mf4j(G0x);
        return J0x
    };
    a9j.dm1x = function(J0x) {
        if (!J0x) return null;
        J0x = qZ6T + J0x;
        var z0x = a9j.ih3x(J0x);
        if (!z0x) return null;
        if (k0x.fj2x(z0x)) {
            z0x = a9j.ni5n(z0x);
            a9j.EZ0x(J0x, z0x)
        }
        return z0x.cloneNode(!0)
    };
    a9j.zJ8B = function() {
        var HG0x = function(z0x, J0x) {
            return J0x == "offset" || J0x == "limit"
        };
        return function(i0x, r0x, e0x) {
            var bs0x = [];
            if (!i0x || !i0x.length || !r0x) return bs0x;
            e0x = e0x || Y0x;
            var dL2x = i0x.length,
                iM4Q = parseInt(e0x.offset) || 0,
                gq2x = Math.min(dL2x, iM4Q + (parseInt(e0x.limit) || dL2x)),
                cn1x = {
                    total: i0x.length,
                    range: [iM4Q, gq2x]
                };
            NEJ.X(cn1x, e0x, HG0x);
            for (var i = iM4Q, cp1x; i < gq2x; i++) {
                cn1x.index = i;
                cn1x.data = i0x[i];
                cp1x = r0x.B0x(cn1x);
                var C0x = cp1x.CL9C();
                Q0x[C0x] = cp1x;
                cp1x.S0x = cp1x.S0x.dY2x(function(C0x, cp1x) {
                    delete Q0x[C0x];
                    delete cp1x.S0x
                }.g0x(null, C0x, cp1x));
                bs0x.push(cp1x)
            }
            return bs0x
        }
    }();
    a9j.bFO3x = function(C0x) {
        return Q0x[C0x]
    };
    a9j.crs1x = function(dC2x, e0x) {
        e0x = e0x || Y0x;
        a9j.cD1x(e0x.tid || "template-box");
        h0x.q0x(document, "templateready", function() {
            dC2x.B0x().A0x("onshow", e0x)
        })
    };
    c0x("dbg").dumpTC = function() {
        return Q0x
    }
})();
(function() {
    var c0x = NEJ.P,
        Y0x = NEJ.O,
        bm0x = NEJ.F,
        a9j = c0x("nej.e"),
        k0x = c0x("nej.u"),
        H0x = c0x("nej.ut"),
        M0x = c0x("nej.ui"),
        b0x;
    if ( !! M0x.eo2x) return;
    M0x.eo2x = NEJ.C();
    b0x = M0x.eo2x.O0x(H0x.cC1x);
    b0x.cl1x = function() {
        this.cr1x();
        a9j.bDx3x();
        this.bX1x();
        this.bR0x()
    };
    b0x.bk0x = function(e0x) {
        this.bl0x(e0x);
        this.cpy1x(e0x.clazz);
        this.bGS3x(e0x.parent)
    };
    b0x.bD0x = function() {
        this.bI0x();
        this.bHc3x();
        delete this.fy2x;
        a9j.mf4j(this.o0x);
        a9j.x0x(this.o0x, this.bjh9Y);
        delete this.bjh9Y
    };
    b0x.bX1x = bm0x;
    b0x.bR0x = function() {
        if (!this.bY1x) this.WO5T();
        this.o0x = a9j.dm1x(this.bY1x);
        if (!this.o0x) this.o0x = a9j.cU1x("div", this.kT4X);
        a9j.y0x(this.o0x, this.kT4X)
    };
    b0x.WO5T = bm0x;
    b0x.cpy1x = function(dH2x) {
        this.bjh9Y = dH2x || "";
        a9j.y0x(this.o0x, this.bjh9Y)
    };
    b0x.cpE1x = function() {
        if (!this.kT4X) return;
        a9j.y0x(this.fy2x, this.kT4X + "-parent")
    };
    b0x.bHc3x = function() {
        if (!this.kT4X) return;
        a9j.x0x(this.fy2x, this.kT4X + "-parent")
    };
    b0x.jV4Z = function() {
        return this.o0x
    };
    b0x.bGS3x = function(bA0x) {
        if (!this.o0x) return this;
        this.bHc3x();
        if (k0x.fV2x(bA0x)) {
            this.fy2x = bA0x(this.o0x)
        } else {
            this.fy2x = a9j.w0x(bA0x);
            if ( !! this.fy2x) this.fy2x.appendChild(this.o0x)
        }
        this.cpE1x();
        return this
    };
    b0x.N0x = function() {
        if (!this.fy2x || !this.o0x || this.o0x.parentNode == this.fy2x) return this;
        this.fy2x.appendChild(this.o0x);
        return this
    };
    b0x.bq0x = function() {
        a9j.mf4j(this.o0x);
        return this
    }
})();
(function() {
    var c0x = NEJ.P,
        Y0x = NEJ.O,
        bm0x = NEJ.F,
        a9j = c0x("nej.e"),
        k0x = c0x("nej.u"),
        ba0x = c0x("nej.h"),
        M0x = c0x("nej.ui"),
        uu7n, bIN4R;
    if ( !! M0x.Kk1x) return;
    M0x.Kk1x = NEJ.C();
    uu7n = M0x.Kk1x.O0x(M0x.eo2x);
    bIN4R = M0x.Kk1x.ch1x;
    uu7n.bk0x = function(e0x) {
        this.bl0x(e0x);
        this.tR7K("oncontentready", e0x.oncontentready || this.cpO1x.g0x(this));
        this.cpR1x = !! e0x.nohack;
        this.cpS1x = !! e0x.destroyable;
        this.ER0x(e0x.content)
    };
    uu7n.bD0x = function() {
        this.A0x("onbeforerecycle");
        this.bI0x();
        this.WL5Q();
        this.ER0x("");
        a9j.fH2x(this.o0x, {
            top: "",
            left: ""
        })
    };
    uu7n.cpO1x = bm0x;
    uu7n.EO0x = bm0x;
    uu7n.WL5Q = function() {
        a9j.mf4j(this.o0x);
        if ( !! this.mE5J) {
            this.mE5J = ba0x.bok0x(this.o0x);
            delete this.mE5J
        }
    };
    uu7n.ER0x = function(bi0x) {
        if (!this.o0x || !this.zO8G || bi0x == null) return this;
        bi0x = bi0x || "";
        k0x.fj2x(bi0x) ? this.zO8G.innerHTML = bi0x : this.zO8G.appendChild(bi0x);
        this.A0x("oncontentready", this.zO8G);
        return this
    };
    uu7n.fO2x = function(bj0x) {
        var z0x = bj0x.top;
        if (z0x != null) {
            z0x += "px";
            a9j.W0x(this.o0x, "top", z0x);
            a9j.W0x(this.mE5J, "top", z0x)
        }
        var z0x = bj0x.left;
        if (z0x != null) {
            z0x += "px";
            a9j.W0x(this.o0x, "left", z0x);
            a9j.W0x(this.mE5J, "left", z0x)
        }
        return this
    };
    uu7n.N0x = function() {
        a9j.W0x(this.o0x, "visibility", "hidden");
        bIN4R.N0x.apply(this, arguments);
        this.EO0x();
        a9j.W0x(this.o0x, "visibility", "");
        if (!this.cpR1x) {
            this.mE5J = ba0x.mE5J(this.o0x)
        }
        return this
    };
    uu7n.bq0x = function() {
        this.cpS1x ? this.S0x() : this.WL5Q();
        return this
    }
})();
(function() {
    var c0x = NEJ.P,
        bm0x = NEJ.F,
        k0x = c0x("nej.u"),
        a9j = c0x("nej.e"),
        M0x = c0x("nej.ui"),
        zQ8I;
    if ( !! M0x.WK5P) return;
    M0x.WK5P = NEJ.C();
    zQ8I = M0x.WK5P.O0x(M0x.eo2x);
    zQ8I.bk0x = function(e0x) {
        this.Ld1x();
        this.bl0x(this.cql1x(e0x));
        this.bS0x.onbeforerecycle = this.S0x.g0x(this);
        this.nt5y = this.biW9N()
    };
    zQ8I.bD0x = function() {
        this.A0x("onbeforerecycle");
        this.bI0x();
        delete this.bS0x;
        a9j.mf4j(this.o0x);
        var zU8M = this.nt5y;
        if ( !! zU8M) {
            delete this.nt5y;
            zU8M.S0x()
        }
    };
    zQ8I.biW9N = bm0x;
    zQ8I.cql1x = function(e0x) {
        var n0x = {};
        k0x.dZ2x(e0x, function(r0x, J0x) {
            this.bS0x.hasOwnProperty(J0x) ? this.bS0x[J0x] = r0x : n0x[J0x] = r0x
        }, this);
        return n0x
    };
    zQ8I.Ld1x = function() {
        this.bS0x = {
            clazz: "",
            parent: null,
            content: this.o0x,
            destroyable: !1,
            oncontentready: null,
            nohack: !1
        }
    };
    zQ8I.N0x = function() {
        if ( !! this.nt5y) this.nt5y.N0x();
        this.A0x("onaftershow");
        return this
    };
    zQ8I.bq0x = function() {
        if ( !! this.nt5y) this.nt5y.bq0x();
        return this
    }
})();
(function() {
    var c0x = NEJ.P,
        dO2x = c0x("nej.g"),
        ba0x = c0x("nej.h"),
        a9j = c0x("nej.e"),
        k0x = c0x("nej.u"),
        h0x = c0x("nej.v"),
        M0x = c0x("nej.ui"),
        Lx1x, bqw0x;
    if ( !! M0x.EG0x) return;
    var hR3x = a9j.rT6N(".#<uispace>{position:fixed;_position:absolute;z-index:100;top:0;bottom:0;left:0;right:0;width:100%;height:100%;background-image:url(" + dO2x.boP0x + ");}");
    M0x.EG0x = NEJ.C();
    Lx1x = M0x.EG0x.O0x(M0x.eo2x);
    bqw0x = M0x.EG0x.ch1x;
    Lx1x.bk0x = function(e0x) {
        this.bl0x(e0x);
        var bi0x = e0x.content || "&nbsp;";
        k0x.fj2x(bi0x) ? this.o0x.innerHTML = bi0x : this.o0x.appendChild(bi0x)
    };
    Lx1x.bD0x = function() {
        this.bI0x();
        this.o0x.innerHTML = "&nbsp;"
    };
    Lx1x.bX1x = function() {
        this.kT4X = hR3x
    };
    Lx1x.N0x = function() {
        ba0x.bol0x(this.o0x);
        bqw0x.N0x.apply(this, arguments);
        return this
    }
})();
(function() {
    var c0x = NEJ.P,
        Y0x = NEJ.O,
        a9j = c0x("nej.e"),
        h0x = c0x("nej.v"),
        M0x = c0x("nej.ut"),
        tI7B;
    if ( !! M0x.vO7H) return;
    M0x.vO7H = NEJ.C();
    tI7B = M0x.vO7H.O0x(M0x.cC1x);
    tI7B.bk0x = function(e0x) {
        this.bl0x(e0x);
        this.cqN1x = !! e0x.overflow;
        this.o0x = a9j.w0x(e0x.body);
        this.zW8O = a9j.w0x(e0x.view) || a9j.bLi4m(this.o0x);
        this.brm0x = a9j.w0x(e0x.mbar) || this.o0x;
        this.WJ5O = parseInt(e0x.direction) || 0;
        if ( !! e0x.isRelative) {
            this.o0x.style.position = "relative";
            this.biU9L = true;
            this.biQ9H()
        }
        this.bU1x([
            [document, "mouseup", this.biP9G.g0x(this)],
            [document, "mousemove", this.biN9E.g0x(this)],
            [this.brm0x, "mousedown", this.Mm1x.g0x(this)]
        ])
    };
    tI7B.biQ9H = function() {
        if ( !! this.biU9L) {
            this.EA0x = a9j.hO3x(this.o0x, this.zW8O);
            this.EA0x.x -= parseInt(a9j.cX1x(this.o0x, "left")) || 0;
            this.EA0x.y -= parseInt(a9j.cX1x(this.o0x, "top")) || 0
        }
    };
    tI7B.bD0x = function() {
        this.bI0x();
        delete this.o0x;
        delete this.brm0x;
        delete this.zW8O
    };
    tI7B.biM9D = function() {
        return {
            x: Math.max(this.zW8O.clientWidth, this.zW8O.scrollWidth) - this.o0x.offsetWidth,
            y: Math.max(this.zW8O.clientHeight, this.zW8O.scrollHeight) - this.o0x.offsetHeight
        }
    };
    tI7B.Mm1x = function(d0x) {
        h0x.bh0x(d0x);
        if ( !! this.hV3x) return;
        this.hV3x = {
            x: h0x.kv4z(d0x),
            y: h0x.nq5v(d0x)
        };
        this.bsw1x = this.biM9D();
        this.A0x("ondragstart", d0x)
    };
    tI7B.biN9E = function(d0x) {
        if (!this.hV3x) return;
        var bj0x = {
            x: h0x.kv4z(d0x),
            y: h0x.nq5v(d0x)
        };
        var rg6a = bj0x.x - this.hV3x.x,
            re6Y = bj0x.y - this.hV3x.y,
            z0x = {
                top: (parseInt(a9j.cX1x(this.o0x, "top")) || 0) + re6Y,
                left: (parseInt(a9j.cX1x(this.o0x, "left")) || 0) + rg6a
            };
        if (this.biU9L) {
            this.biQ9H();
            z0x.top = z0x.top + this.EA0x.y;
            z0x.left = z0x.left + this.EA0x.x
        }
        this.hV3x = bj0x;
        this.fO2x(z0x)
    };
    tI7B.biP9G = function(d0x) {
        if (!this.hV3x) return;
        delete this.bsw1x;
        delete this.hV3x;
        this.A0x("ondragend", this.biL9C())
    };
    tI7B.fO2x = function(d0x) {
        if (!this.cqN1x) {
            var bsL1x = this.bsw1x || this.biM9D();
            d0x.top = Math.min(bsL1x.y, Math.max(0, d0x.top));
            d0x.left = Math.min(bsL1x.x, Math.max(0, d0x.left))
        }
        var cc1x = this.o0x.style;
        if (this.biU9L) {
            this.biQ9H();
            d0x.top = d0x.top - this.EA0x.y;
            d0x.left = d0x.left - this.EA0x.x
        }
        if (this.WJ5O == 0 || this.WJ5O == 2) cc1x.top = d0x.top + "px";
        if (this.WJ5O == 0 || this.WJ5O == 1) cc1x.left = d0x.left + "px";
        this.A0x("onchange", d0x);
        return this
    };
    tI7B.biL9C = function() {
        return {
            left: parseInt(a9j.cX1x(this.o0x, "left")) || 0,
            top: parseInt(a9j.cX1x(this.o0x, "top")) || 0
        }
    }
})();
(function() {
    var c0x = NEJ.P,
        Y0x = NEJ.O,
        a9j = NEJ.P("nej.e"),
        h0x = NEJ.P("nej.v"),
        k0x = NEJ.P("nej.u"),
        H0x = NEJ.P("nej.ut"),
        M0x = NEJ.P("nej.ui"),
        hR3x, fW2x, b0x, K0x;
    if ( !! M0x.WH5M) return;
    M0x.WH5M = NEJ.C();
    b0x = M0x.WH5M.O0x(M0x.Kk1x);
    K0x = M0x.WH5M.ch1x;
    b0x.cl1x = function() {
        this.qc6W = {};
        this.ju4y = {
            onchange: this.biN9E.g0x(this)
        };
        this.cr1x()
    };
    b0x.bk0x = function(e0x) {
        this.bl0x(e0x);
        this.cqU1x(e0x.mask);
        this.cqY1x(e0x.align);
        this.Ad8V(e0x.title);
        if (!e0x.draggable) return;
        this.iL4P = H0x.vO7H.B0x(this.ju4y)
    };
    b0x.bD0x = function() {
        this.bI0x();
        delete this.oL5Q;
        delete this.NA2x;
        if ( !! this.Ae8W) {
            this.Ae8W.S0x();
            delete this.Ae8W
        }
        if ( !! this.iL4P) {
            this.iL4P.S0x();
            delete this.iL4P
        }
    };
    b0x.bX1x = function() {
        this.kT4X = hR3x;
        this.bY1x = fW2x
    };
    b0x.bR0x = function() {
        this.cb1x();
        var i0x = a9j.cQ1x(this.o0x);
        this.zO8G = i0x[1];
        this.ju4y.mbar = i0x[0];
        this.ju4y.body = this.o0x;
        h0x.q0x(i0x[2], "mousedown", this.crc1x.g0x(this));
        h0x.q0x(this.ju4y.mbar, "mousedown", this.Mm1x.g0x(this));
        this.bvK1x = a9j.cQ1x(this.ju4y.mbar)[0]
    };
    b0x.crc1x = function(d0x) {
        h0x.bh0x(d0x);
        this.A0x("onclose", d0x);
        if (!d0x.stopped) {
            this.bq0x()
        }
    };
    b0x.Mm1x = function(d0x) {
        h0x.A0x(document, "click")
    };
    b0x.biN9E = function(d0x) {
        if (!this.mE5J) return;
        a9j.fH2x(this.mE5J, {
            top: d0x.top + "px",
            left: d0x.left + "px"
        })
    };
    b0x.EO0x = function() {
        var ex2x = [function() {
                return 0
            }, function(mD5I, DQ9H, bj0x, J0x) {
                if (J0x == "top" && window.top != window.self) {
                    var WF5K = 0,
                        DY9P = 0;
                    if (top.g_topBarHeight) WF5K = top.g_topBarHeight;
                    if (top.g_bottomBarShow && top.g_bottomBarHeight) DY9P = top.g_bottomBarHeight;
                    if (mD5I.top <= WF5K) {
                        var biF9w = Math.max(0, (DQ9H.height - (WF5K - mD5I.top) - DY9P - bj0x.height) / 2);
                        return biF9w + WF5K
                    } else {
                        var biF9w = Math.max(0, (DQ9H.height - DY9P - bj0x.height) / 2);
                        return biF9w + mD5I.top
                    }
                }
                return Math.max(0, mD5I[J0x] + (DQ9H[hz3x[J0x]] - bj0x[hz3x[J0x]]) / 2)
            }, function(mD5I, DQ9H, bj0x, J0x) {
                return mD5I[J0x] + (DQ9H[hz3x[J0x]] - bj0x[hz3x[J0x]])
            }],
            crb1x = ["left", "top"],
            hz3x = {
                left: "width",
                top: "height"
            };
        return function() {
            var z0x = {},
                cc1x = this.o0x.style,
                iF4J = a9j.oN5S(),
                mD5I = {
                    left: iF4J.scrollLeft,
                    top: iF4J.scrollTop
                },
                DQ9H = {
                    width: iF4J.clientWidth,
                    height: iF4J.clientHeight
                },
                bj0x = {
                    width: this.o0x.offsetWidth,
                    height: this.o0x.offsetHeight
                },
                de1x = {
                    left: iF4J.clientWidth - this.o0x.offsetWidth,
                    top: iF4J.clientHeight - this.o0x.offsetHeight
                };
            k0x.be0x(crb1x, function(J0x, s0x) {
                var da1x = ex2x[this.oL5Q[s0x]];
                if (!da1x) return;
                z0x[J0x] = da1x(mD5I, DQ9H, bj0x, J0x)
            }, this);
            this.fO2x(z0x)
        }
    }();
    b0x.cqZ1x = function() {
        if (!this.Ae8W) {
            if (!this.NA2x) return;
            this.qc6W.parent = this.fy2x;
            this.Ae8W = this.NA2x.B0x(this.qc6W)
        }
        this.Ae8W.N0x()
    };
    b0x.WL5Q = function() {
        if ( !! this.Ae8W) this.Ae8W.bq0x();
        K0x.WL5Q.apply(this, arguments)
    };
    b0x.cqU1x = function(jX4b) {
        if ( !! jX4b) {
            if (jX4b instanceof M0x.EG0x) {
                this.Ae8W = jX4b;
                return
            }
            if (k0x.fV2x(jX4b)) {
                this.NA2x = jX4b;
                return
            }
            this.NA2x = M0x.EG0x;
            if (k0x.fj2x(jX4b)) this.qc6W.clazz = jX4b;
            return
        }
        this.NA2x = null
    };
    b0x.Ad8V = function(eD2x, dy2x) {
        if ( !! this.bvK1x) {
            var Za6U = !dy2x ? "innerText" : "innerHTML";
            this.bvK1x[Za6U] = eD2x || "标题"
        }
        return this
    };
    b0x.cqY1x = function() {
        var cO1x = /\s+/,
            cqX1x = {
                left: 0,
                center: 1,
                right: 2,
                auto: 3
            },
            cqT1x = {
                top: 0,
                middle: 1,
                bottom: 2,
                auto: 3
            };
        return function(mz5E) {
            this.oL5Q = (mz5E || "").split(cO1x);
            var dM2x = cqX1x[this.oL5Q[0]];
            if (dM2x == null) dM2x = 1;
            this.oL5Q[0] = dM2x;
            var dM2x = cqT1x[this.oL5Q[1]];
            if (dM2x == null) dM2x = 1;
            this.oL5Q[1] = dM2x;
            return this
        }
    }();
    b0x.N0x = function() {
        K0x.N0x.apply(this, arguments);
        this.cqZ1x();
        return this
    };
    hR3x = a9j.rT6N(".#<uispace>{position:absolute;z-index:1000;border:1px solid #aaa;background:#fff;}.#<uispace> .zbar{line-height:30px;background:#8098E7;border-bottom:1px solid #aaa;}.#<uispace> .zcnt{padding:10px 5px;}.#<uispace> .zttl{margin-right:20px;text-align:left;}.#<uispace> .zcls{position:absolute;top:5px;right:0;width:20px;height:20px;line-height:20px;cursor:pointer;}");
    fW2x = a9j.hN3x('<div class="' + hR3x + '"><div class="zbar"><div class="zttl">标题</div></div><div class="zcnt"></div><span class="zcls" title="关闭窗体">×</span></div>')
})();
(function() {
    var c0x = NEJ.P,
        k0x = c0x("nej.u"),
        M0x = c0x("nej.ui"),
        biy9p;
    if ( !! M0x.WA5F) return;
    M0x.WA5F = NEJ.C();
    biy9p = M0x.WA5F.O0x(M0x.WK5P);
    biy9p.biW9N = function() {
        return M0x.WH5M.B0x(this.bS0x)
    };
    biy9p.Ld1x = function() {
        M0x.WA5F.ch1x.Ld1x.apply(this, arguments);
        this.bS0x.mask = null;
        this.bS0x.title = "标题";
        this.bS0x.align = "";
        this.bS0x.draggable = !1;
        this.bS0x.onclose = null
    }
})();
(function() {
    var c0x = NEJ.P,
        a9j = c0x("nej.e"),
        bc0x = c0x("nej.ui"),
        m0x = c0x("nm.l"),
        b0x, K0x;
    m0x.dT2x = NEJ.C();
    b0x = m0x.dT2x.O0x(bc0x.WA5F);
    b0x.bk0x = function(e0x) {
        e0x.clazz = "m-layer z-show " + (e0x.clazz || "");
        e0x.nohack = true;
        e0x.draggable = true;
        this.bl0x(e0x)
    };
    b0x.dv1x = function(f0x, bF0x) {
        if (!f0x) return;
        a9j.W0x(f0x, "display", !bF0x ? "none" : "");
        f0x.lastChild.innerText = bF0x || ""
    };
    b0x.dJ2x = function(ga2x, cB1x, Pd3x, Ph3x) {
        var dC2x = "js-lock";
        if (cB1x === undefined) return a9j.bz0x(ga2x, dC2x);
        !cB1x ? a9j.x0x(ga2x, dC2x) : a9j.y0x(ga2x, dC2x);
        ga2x.firstChild.innerText = !cB1x ? Pd3x : Ph3x
    };
    m0x.dT2x.N0x = function(e0x) {
        e0x = e0x || {};
        if (e0x.mask === undefined) e0x.mask = "m-mask";
        if (e0x.parent === undefined) e0x.parent = document.body;
        if (e0x.draggable === undefined) e0x.draggable = true; !! this.eH2x && this.eH2x.S0x();
        this.eH2x = this.B0x(e0x);
        this.eH2x.N0x(e0x);
        return this.eH2x
    };
    m0x.dT2x.bq0x = function() { !! this.eH2x && this.eH2x.S0x()
    }
})();
(function() {
    var c0x = NEJ.P,
        Y0x = NEJ.O,
        a9j = c0x("nej.e"),
        h0x = c0x("nej.v"),
        k0x = c0x("nej.u"),
        p0x = c0x("nm.d"),
        l0x = c0x("nm.x"),
        m0x = c0x("nm.l"),
        b0x, K0x;
    m0x.biv9m = NEJ.C();
    b0x = m0x.biv9m.O0x(m0x.dT2x);
    K0x = m0x.biv9m.ch1x;
    b0x.bk0x = function(e0x) {
        this.bl0x(e0x);
        if (e0x.bubble === undefined) e0x.bubble = true;
        this.Po3x = e0x.bubble;
        this.oE5J = e0x.message || ""
    };
    b0x.bX1x = function() {
        this.bY1x = a9j.hN3x('<div class="lyct f-cb f-tc"></div>')
    };
    b0x.bR0x = function() {
        this.cb1x();
        h0x.q0x(this.o0x, "click", this.cv1x.g0x(this))
    };
    b0x.cv1x = function(d0x) {
        var f0x = h0x.U0x(d0x, "d:action");
        if (!f0x) return;
        if (f0x.href) h0x.cf1x(d0x);
        if (a9j.u0x(f0x, "action") == "close") this.bq0x();
        if (this.Po3x === !1) h0x.rc6W(d0x);
        this.A0x("onaction", a9j.u0x(f0x, "action"))
    };
    b0x.N0x = function() {
        K0x.N0x.call(this);
        this.o0x.innerHTML = this.oE5J
    };
    var fR2x = a9j.eg2x('<div class="f-fs1" style="line-height:22px;">${message|default:""}</div><div class="lybtn">{list buttons as item}<a hidefocus="true" class="u-btn2 ${item.klass} {if item.style}${item.style}{else}u-btn2-w2{/if}" href="#" {if !!item.action}data-action="${item.action}"{/if}><i>${item.text}</i></a>{/list}</div>');
    l0x.lK4O = function() {
        var eR2x;
        var cp1x;
        var biu9l = function(hS3x, X0x) {
            if (k0x.fV2x(hS3x, "function") && hS3x(X0x) != -1) cp1x.S0x()
        };
        var Al8d = function() { !! cp1x && cp1x.bq0x()
        };
        return function(e0x) {
            clearTimeout(eR2x);
            e0x = e0x || {};
            e0x.title = e0x.title || "提示";
            e0x.clazz = e0x.clazz || "";
            e0x.parent = e0x.parent || document.body;
            e0x.buttons = e0x.buttons || [];
            e0x.message = a9j.bQ0x(fR2x, e0x);
            e0x.onaction = biu9l.g0x(null, e0x.action);
            if (e0x.mask === undefined) e0x.mask = true;
            if (e0x.draggable === undefined) e0x.draggable = true; !! cp1x && cp1x.S0x();
            cp1x = m0x.biv9m.B0x(e0x);
            cp1x.N0x();
            if (e0x.autoclose) eR2x = setTimeout(Al8d.g0x(null), 2e3);
            return cp1x
        }
    }();
    l0x.fc2x = function(e0x) {
        e0x = e0x || {};
        e0x.clazz = e0x.clazz || "m-layer-w1";
        e0x.buttons = [{
            klass: "u-btn2-2",
            action: "close",
            text: e0x.btntxt || "确定"
        }];
        var cp1x = l0x.lK4O(e0x);
        return cp1x
    };
    l0x.gM2x = function(e0x) {
        e0x = e0x || {};
        e0x.clazz = e0x.clazz || "m-layer-w2";
        e0x.buttons = [{
            klass: "u-btn2-2",
            action: "ok",
            text: e0x.btnok || "确定",
            style: e0x.okstyle || ""
        }, {
            klass: "u-btn2-1",
            action: "close",
            text: e0x.btncc || "取消",
            style: e0x.ccstyle || ""
        }];
        var cp1x = l0x.lK4O(e0x);
        return cp1x
    }
})();
(function() {
    var c0x = NEJ.P,
        bm0x = NEJ.F,
        a9j = c0x("nej.e"),
        h0x = c0x("nej.v"),
        k0x = c0x("nej.u");
    a9j.cqR1x = function() {
        var fQ2x = /[\r\n]/gi,
            Q0x = {};
        var cqP1x = function(cL1x) {
            return (cL1x || "").replace(fQ2x, "aa").length
        };
        var bAK2x = function(C0x) {
            var bd0x = Q0x[C0x],
                bAR2x = a9j.w0x(C0x),
                wr7k = a9j.w0x(C0x + "-counter");
            if (!bAR2x || !bd0x) return;
            var d0x = {
                input: bAR2x.value
            };
            d0x.length = bd0x.onlength(d0x.input);
            d0x.delta = bd0x.max - d0x.length;
            bd0x.onchange(d0x);
            wr7k.innerHTML = d0x.value || "剩余" + d0x.delta + "个字"
        };
        return function(G0x, e0x) {
            var C0x = a9j.kQ4U(G0x);
            if (!C0x || !! Q0x[C0x]) return;
            var bd0x = NEJ.X({}, e0x);
            bd0x.onchange = bd0x.onchange || bm0x;
            bd0x.onlength = cqP1x;
            if (!bd0x.max) {
                var bAV2x = parseInt(a9j.gU2x(C0x, "maxlength")),
                    bBa2x = parseInt(a9j.u0x(C0x, "maxLength"));
                bd0x.max = bAV2x || bBa2x || 100;
                if (!bAV2x && !! bBa2x) bd0x.onlength = k0x.fx2x
            }
            Q0x[C0x] = bd0x;
            h0x.q0x(C0x, "input", bAK2x.g0x(null, C0x));
            var f0x = a9j.Hn0x(C0x, {
                nid: bd0x.nid || "js-counter",
                clazz: bd0x.clazz
            });
            bd0x.xid = C0x + "-counter";
            f0x.id = bd0x.xid;
            bAK2x(C0x)
        }
    }()
})();
(function() {
    var c0x = NEJ.P,
        a9j = c0x("nej.e"),
        ba0x = c0x("nej.h");
    ba0x.bit9k = function(G0x, dH2x) {}
})();
(function() {
    var c0x = NEJ.P,
        bm0x = NEJ.F,
        M0x = c0x("nej.p"),
        a9j = c0x("nej.e"),
        h0x = c0x("nej.v"),
        ba0x = c0x("nej.h");
    if (M0x.lX4b.trident) return;
    ba0x.bit9k = function() {
        var Q0x = {};
        var Id0x = function(d0x) {
            var cZ1x = h0x.U0x(d0x);
            if ( !! cZ1x.value) return;
            a9j.W0x(a9j.Hn0x(cZ1x), "display", "none")
        };
        var BK9B = function(d0x) {
            var cZ1x = h0x.U0x(d0x);
            if ( !! cZ1x.value) return;
            a9j.W0x(a9j.Hn0x(cZ1x), "display", "")
        };
        var cqM1x = function(cZ1x, dH2x) {
            var C0x = a9j.kQ4U(cZ1x),
                jG4K = a9j.Hn0x(cZ1x, {
                    tag: "label",
                    clazz: dH2x
                });
            jG4K.htmlFor = C0x;
            var cY1x = a9j.gU2x(cZ1x, "placeholder") || "";
            jG4K.innerText = cY1x == "null" ? "" : cY1x;
            var co1x = cZ1x.offsetHeight + "px";
            a9j.fH2x(jG4K, {
                left: 0,
                display: !cZ1x.value ? "" : "none"
            })
        };
        return ba0x.bit9k.dY2x(function(d0x) {
            d0x.stopped = !0;
            var bg0x = d0x.args,
                cZ1x = a9j.w0x(bg0x[0]);
            if ( !! Q0x[cZ1x.id]) return;
            cqM1x(cZ1x, bg0x[1]);
            Q0x[cZ1x.id] = !0;
            h0x.q0x(cZ1x, "blur", BK9B.g0x(null));
            h0x.q0x(cZ1x, "focus", Id0x.g0x(null))
        })
    }()
})();
(function() {
    var c0x = NEJ.P,
        ba0x = c0x("nej.h"),
        a9j = c0x("nej.e"),
        cJ1x = c0x("nej.x");
    a9j.fv2x = cJ1x.fv2x = function(G0x, dH2x) {
        ba0x.bit9k(G0x, a9j.u0x(G0x, "holder") || dH2x || "js-placeholder");
        return this
    };
    cJ1x.isChange = !0
})();
(function() {
    var c0x = NEJ.P,
        Y0x = NEJ.O,
        bm0x = NEJ.F,
        a9j = c0x("nej.e"),
        h0x = c0x("nej.v"),
        k0x = c0x("nej.u"),
        M0x = c0x("nej.ut"),
        ha2x;
    if ( !! M0x.IP1x) return;
    M0x.IP1x = NEJ.C();
    ha2x = M0x.IP1x.O0x(M0x.cC1x);
    ha2x.cl1x = function() {
        this.cr1x();
        this.Ee9V = {
            tp: {
                nid: "js-nej-tp"
            },
            ok: {
                nid: "js-nej-ok"
            },
            er: {
                nid: "js-nej-er"
            }
        }
    };
    ha2x.bk0x = function(e0x) {
        this.bl0x(e0x);
        this.fG2x = document.forms[e0x.form] || a9j.w0x(e0x.form);
        this.bU1x([
            [this.fG2x, "keypress", this.cqL1x.g0x(this)]
        ]);
        this.oE5J = e0x.message || {};
        this.oE5J.pass = this.oE5J.pass || "&nbsp;";
        var eC2x = this.og5l(this.fG2x, "focusMode", 1);
        if (!isNaN(eC2x)) {
            this.bDm3x = {
                mode: eC2x,
                clazz: e0x.focus
            }
        }
        this.Ai8a = e0x.holder;
        this.Ee9V.tp.clazz = "js-mhd " + (e0x.tip || "js-tip");
        this.Ee9V.ok.clazz = "js-mhd " + (e0x.pass || "js-pass");
        this.Ee9V.er.clazz = "js-mhd " + (e0x.error || "js-error");
        this.bDr3x = e0x.invalid || "js-invalid";
        this.cqK1x(e0x);
        this.gC2x();
        if ( !! this.Ah8Z) this.Ah8Z.focus()
    };
    ha2x.bD0x = function() {
        this.bI0x();
        delete this.oE5J;
        delete this.Ah8Z;
        delete this.DW9N;
        delete this.fG2x;
        delete this.bDM3x;
        delete this.Je1x
    };
    ha2x.og5l = function(f0x, DV9M, t0x) {
        var z0x = a9j.u0x(f0x, DV9M);
        switch (t0x) {
            case 1:
                return parseInt(z0x);
            case 2:
                return (z0x || "").toLowerCase() == "true";
            case 3:
                return this.bis9j(z0x)
        }
        return z0x
    };
    ha2x.Ag8Y = function(z0x, t0x) {
        if (t0x == "date") return this.bis9j(z0x);
        return parseInt(z0x)
    };
    ha2x.Wz5E = function() {
        var jg4k = /^button|submit|reset|image|hidden|file$/i;
        return function(f0x) {
            f0x = this.w0x(f0x) || f0x;
            var t0x = f0x.type;
            return !!f0x.name && !jg4k.test(f0x.type || "")
        }
    }();
    ha2x.cqJ1x = function() {
        var jg4k = /^hidden$/i;
        return function(f0x) {
            if (this.Wz5E(f0x)) return !0;
            f0x = this.w0x(f0x) || f0x;
            var t0x = f0x.type || "";
            return jg4k.test(t0x)
        }
    }();
    ha2x.bis9j = function() {
        var cO1x = /[-\/]/;
        var cqI1x = function(z0x) {
            if (!z0x) return "";
            z0x = z0x.split(cO1x);
            z0x.push(z0x.shift());
            return z0x.join("/")
        };
        return function(z0x) {
            if ((z0x || "").toLowerCase() == "now") return +(new Date);
            return Date.parse(cqI1x(z0x))
        }
    }();
    ha2x.cqL1x = function(d0x) {
        if (d0x.keyCode != 13) return;
        this.A0x("onenter", d0x)
    };
    ha2x.cqH1x = function(C0x, T0x) {
        var qw6q = this.Je1x[T0x],
            z0x = this.og5l(C0x, T0x);
        if (!z0x || !qw6q) return;
        this.Wy5D(C0x, qw6q);
        this.bij9a(C0x, T0x, z0x)
    };
    ha2x.cqF1x = function(C0x, T0x) {
        try {
            var bFZ3x = this.og5l(C0x, T0x);
            if (!bFZ3x) return;
            var z0x = new RegExp(bFZ3x);
            this.bij9a(C0x, T0x, z0x);
            this.Wy5D(C0x, this.Je1x[T0x])
        } catch (e) {}
    };
    ha2x.cqE1x = function(C0x, T0x) {
        var qw6q = this.Je1x[T0x];
        if ( !! qw6q && this.og5l(C0x, T0x, 2)) this.Wy5D(C0x, qw6q)
    };
    ha2x.bii9Z = function(C0x, T0x, z0x) {
        z0x = parseInt(z0x);
        if (isNaN(z0x)) return;
        this.bij9a(C0x, T0x, z0x);
        this.Wy5D(C0x, this.Je1x[T0x])
    };
    ha2x.bGe3x = function(C0x, T0x) {
        this.bii9Z(C0x, T0x, this.og5l(C0x, T0x))
    };
    ha2x.bGf3x = function(C0x, T0x) {
        this.bii9Z(C0x, T0x, a9j.gU2x(C0x, T0x))
    };
    ha2x.bGh3x = function(C0x, T0x, t0x) {
        var z0x = this.Ag8Y(this.og5l(C0x, T0x), this.og5l(C0x, "type"));
        this.bii9Z(C0x, T0x, z0x)
    };
    ha2x.cqB1x = function() {
        var fQ2x = /^input|textarea$/i;
        var Id0x = function(d0x) {
            this.oc5h(h0x.U0x(d0x))
        };
        var BK9B = function(d0x) {
            var f0x = h0x.U0x(d0x);
            if (!this.og5l(f0x, "ignore", 2)) {
                this.bGC3x(f0x)
            }
        };
        return function(f0x) {
            if (this.og5l(f0x, "autoFocus", 2)) this.Ah8Z = f0x;
            var oU5Z = a9j.gU2x(f0x, "placeholder");
            if ( !! oU5Z && oU5Z != "null") a9j.fv2x(f0x, this.Ai8a);
            if ( !! this.bDm3x && fQ2x.test(f0x.tagName)) a9j.lv4z(f0x, this.bDm3x);
            var C0x = a9j.kQ4U(f0x);
            this.cqE1x(C0x, "required");
            this.cqH1x(C0x, "type");
            this.cqF1x(C0x, "pattern");
            this.bGf3x(C0x, "maxlength");
            this.bGf3x(C0x, "minlength");
            this.bGe3x(C0x, "maxLength");
            this.bGe3x(C0x, "minLength");
            this.bGh3x(C0x, "min");
            this.bGh3x(C0x, "max");
            var T0x = f0x.name;
            this.oE5J[T0x + "-tip"] = this.og5l(f0x, "tip");
            this.oE5J[T0x + "-error"] = this.og5l(f0x, "message");
            this.oc5h(f0x);
            var bt0x = this.DW9N[C0x],
                j0x = (bt0x || Y0x).data || Y0x,
                JV1x = this.og5l(f0x, "counter", 2);
            if (JV1x && (j0x.maxlength || j0x.maxLength)) {
                a9j.cqR1x(C0x, {
                    nid: this.Ee9V.tp.nid,
                    clazz: "js-counter"
                })
            }
            if ( !! bt0x && fQ2x.test(f0x.tagName)) {
                this.bU1x([
                    [f0x, "focus", Id0x.g0x(this)],
                    [f0x, "blur", BK9B.g0x(this)]
                ])
            } else if (this.og5l(f0x, "focus", 2)) {
                this.bU1x([
                    [f0x, "focus", Id0x.g0x(this)]
                ])
            }
        }
    }();
    ha2x.cqK1x = function() {
        var DT9K = {
            number: /^[\d]+$/i,
            url: /^[a-z]+:\/\/(?:[\w-]+\.)+[a-z]{2,6}.*$/i,
            email: /^[\w-\.]+@(?:[\w-]+\.)+[a-z]{2,6}$/i,
            date: function(v) {
                return !v || !isNaN(this.bis9j(v))
            }
        };
        var cqA1x = {
            required: function(f0x) {
                var t0x = f0x.type,
                    cqz1x = !f0x.value,
                    cqy1x = (t0x == "checkbox" || t0x == "radio") && !f0x.checked;
                if (cqy1x || cqz1x) return -1
            },
            type: function(f0x, e0x) {
                var cO1x = this.bDM3x[e0x.type],
                    eK2x = f0x.value.trim(),
                    cqx1x = !! cO1x.test && !cO1x.test(eK2x),
                    cqw1x = k0x.fV2x(cO1x) && !cO1x.call(this, eK2x);
                if (cqx1x || cqw1x) return -2
            },
            pattern: function(f0x, e0x) {
                if (!e0x.pattern.test(f0x.value)) return -3
            },
            maxlength: function(f0x, e0x) {
                if (f0x.value.length > e0x.maxlength) return -4
            },
            minlength: function(f0x, e0x) {
                if (f0x.value.length < e0x.minlength) return -5
            },
            maxLength: function(f0x, e0x) {
                if (k0x.fx2x(f0x.value) > e0x.maxLength) return -4
            },
            minLength: function(f0x, e0x) {
                if (k0x.fx2x(f0x.value) < e0x.minLength) return -5
            },
            min: function(f0x, e0x) {
                var fp2x = this.Ag8Y(f0x.value, e0x.type);
                if (isNaN(fp2x) || fp2x < e0x.min) return -6
            },
            max: function(f0x, e0x) {
                var fp2x = this.Ag8Y(f0x.value, e0x.type);
                if (isNaN(fp2x) || fp2x > e0x.max) return -7
            }
        };
        return function(e0x) {
            this.bDM3x = NEJ.X(NEJ.X({}, DT9K), e0x.type);
            this.Je1x = NEJ.X(NEJ.X({}, cqA1x), e0x.attr)
        }
    }();
    ha2x.Wy5D = function(C0x, vk7d) {
        if (!k0x.fV2x(vk7d)) return;
        var bt0x = this.DW9N[C0x];
        if (!bt0x || !bt0x.func) {
            bt0x = bt0x || {};
            bt0x.func = [];
            this.DW9N[C0x] = bt0x
        }
        bt0x.func.push(vk7d)
    };
    ha2x.bij9a = function(C0x, T0x, z0x) {
        if (!T0x) return;
        var bt0x = this.DW9N[C0x];
        if (!bt0x || !bt0x.data) {
            bt0x = bt0x || {};
            bt0x.data = {};
            this.DW9N[C0x] = bt0x
        }
        bt0x.data[T0x] = z0x
    };
    ha2x.bGC3x = function(f0x) {
        f0x = this.w0x(f0x) || f0x;
        var bt0x = this.DW9N[a9j.kQ4U(f0x)];
        if (!f0x || !bt0x || !this.Wz5E(f0x)) return !0;
        var n0x;
        k0x.dZ2x(bt0x.func, function(ex2x) {
            n0x = ex2x.call(this, f0x, bt0x.data);
            return n0x != null
        }, this);
        if (n0x == null) {
            var d0x = {
                target: f0x,
                form: this.fG2x
            };
            this.A0x("oncheck", d0x);
            n0x = d0x.value
        }
        var d0x = {
            target: f0x,
            form: this.fG2x
        };
        if (n0x != null) {
            d0x.code = n0x;
            this.A0x("oninvalid", d0x);
            if (!d0x.stopped) {
                this.cqv1x(f0x, d0x.value || this.oE5J[f0x.name + n0x])
            }
        } else {
            this.A0x("onvalid", d0x);
            if (!d0x.stopped) this.cqt1x(f0x, d0x.value)
        }
        return n0x == null
    };
    ha2x.vn7g = function() {
        var cqs1x = function(YM5R, YL5Q) {
            return YM5R == YL5Q ? "block" : "none"
        };
        var cqq1x = function(f0x, t0x, bF0x) {
            var oU5Z = bII4M.call(this, f0x, t0x);
            if (!oU5Z && !! bF0x) oU5Z = a9j.Hn0x(f0x, this.Ee9V[t0x]);
            return oU5Z
        };
        var bII4M = function(f0x, t0x) {
            var oU5Z;
            if (t0x == "tp") oU5Z = a9j.w0x(f0x.name + "-tip");
            if (!oU5Z) oU5Z = a9j.I0x(f0x.parentNode, this.Ee9V[t0x].nid)[0];
            return oU5Z
        };
        return function(f0x, bF0x, t0x) {
            f0x = this.w0x(f0x) || f0x;
            if (!f0x) return;
            t0x == "er" ? a9j.y0x(f0x, this.bDr3x) : a9j.x0x(f0x, this.bDr3x);
            var oU5Z = cqq1x.call(this, f0x, t0x, bF0x);
            if ( !! oU5Z && !! bF0x) oU5Z.innerHTML = bF0x;
            k0x.dZ2x(this.Ee9V, function(z0x, J0x) {
                a9j.W0x(bII4M.call(this, f0x, J0x), "display", cqs1x(t0x, J0x))
            }, this)
        }
    }();
    ha2x.oc5h = function(f0x, bF0x) {
        this.vn7g(f0x, bF0x || this.oE5J[f0x.name + "-tip"], "tp");
        return this
    };
    ha2x.cqt1x = function(f0x, bF0x) {
        this.vn7g(f0x, bF0x || this.oE5J[f0x.name + "-pass"] || this.oE5J.pass, "ok");
        return this
    };
    ha2x.cqv1x = function(f0x, bF0x) {
        this.vn7g(f0x, bF0x || this.oE5J[f0x.name + "-error"], "er");
        return this
    };
    ha2x.hW3x = function() {
        var fQ2x = /^(?:radio|checkbox)$/i;
        var cqp1x = function(z0x) {
            return z0x == null ? "" : z0x
        };
        var bIO4S = function(z0x, f0x) {
            if (fQ2x.test(f0x.type || "")) {
                f0x.checked = z0x == f0x.value
            } else {
                f0x.value = cqp1x(z0x)
            }
        };
        return function(T0x, z0x) {
            var f0x = this.w0x(T0x);
            if (!f0x) return this;
            if (f0x.tagName == "SELECT" || !f0x.length) {
                bIO4S(z0x, f0x)
            } else {
                k0x.be0x(f0x, bIO4S.g0x(null, z0x))
            }
            return this
        }
    }();
    ha2x.w0x = function(T0x) {
        return this.fG2x.elements[T0x]
    };
    ha2x.cri1x = function() {
        return this.fG2x
    };
    ha2x.Wv5A = function() {
        var fQ2x = /^radio|checkbox$/i,
            jg4k = /^number|date$/;
        var cqn1x = function(bv0x, f0x) {
            var T0x = f0x.name,
                z0x = f0x.value,
                bt0x = bv0x[T0x],
                t0x = this.og5l(f0x, "type");
            if (jg4k.test(t0x)) z0x = this.Ag8Y(z0x, t0x);
            if (fQ2x.test(f0x.type) && !f0x.checked) {
                z0x = this.og5l(f0x, "value");
                if (!z0x) return
            }
            if ( !! bt0x) {
                if (!k0x.eq2x(bt0x)) {
                    bt0x = [bt0x];
                    bv0x[T0x] = bt0x
                }
                bt0x.push(z0x)
            } else {
                bv0x[T0x] = z0x
            }
        };
        return function() {
            var n0x = {};
            k0x.be0x(this.fG2x.elements, function(f0x) {
                if (this.cqJ1x(f0x)) cqn1x.call(this, n0x, f0x)
            }, this);
            return n0x
        }
    }();
    ha2x.Wt5y = function() {
        var cqm1x = function(f0x) {
            if (this.Wz5E(f0x)) this.oc5h(f0x)
        };
        return function() {
            this.fG2x.reset();
            k0x.be0x(this.fG2x.elements, cqm1x, this);
            return this
        }
    }();
    ha2x.crj1x = function() {
        this.fG2x.submit();
        return this
    };
    ha2x.gC2x = function() {
        var cqk1x = function(f0x) {
            if (this.Wz5E(f0x)) this.cqB1x(f0x)
        };
        return function() {
            this.DW9N = {};
            k0x.be0x(this.fG2x.elements, cqk1x, this);
            return this
        }
    }();
    ha2x.cqj1x = function(f0x) {
        f0x = this.w0x(f0x) || f0x;
        if ( !! f0x) return this.bGC3x(f0x);
        var n0x = !0;
        k0x.be0x(this.fG2x.elements, function(f0x) {
            var jZ4d = this.cqj1x(f0x);
            n0x = n0x && jZ4d
        }, this);
        return n0x
    }
})();
(function() {
    var c0x = NEJ.P,
        Y0x = NEJ.O,
        a9j = c0x("nej.e"),
        h0x = c0x("nej.v"),
        H0x = c0x("nej.ut"),
        k0x = c0x("nej.u"),
        l0x = c0x("nm.x"),
        m0x = c0x("nm.l"),
        b0x, K0x;
    m0x.Ws5x = NEJ.C();
    b0x = m0x.Ws5x.O0x(m0x.dT2x);
    K0x = m0x.Ws5x.ch1x;
    b0x.bR0x = function() {
        this.cb1x();
        h0x.q0x(this.o0x, "click", this.cv1x.g0x(this));
        h0x.q0x(document, "mousewheel", this.Ab8T.g0x(this));
        if ( !! document.body.addEventListener) document.body.addEventListener("DOMMouseScroll", this.Ab8T.g0x(this))
    };
    b0x.bk0x = function(e0x) {
        this.bl0x(e0x);
        if (e0x.jst) {
            this.o0x.innerHTML = a9j.bQ0x(e0x.jst, e0x.data)
        } else if (e0x.ntp) {
            this.o0x.appendChild(a9j.dm1x(e0x.ntp))
        } else if (e0x.txt) {
            this.o0x.innerHTML = a9j.ih3x(e0x.txt)
        } else if (e0x.html) {
            this.o0x.innerHTML = e0x.html
        }
        var Le1x = this.o0x.getElementsByTagName("form");
        if (Le1x.length) {
            this.fG2x = H0x.IP1x.B0x({
                form: Le1x[0]
            })
        }
        this.DL9C = a9j.cQ1x(this.o0x)[0]
    };
    b0x.bD0x = function() {
        this.A0x("ondestroy");
        this.bI0x();
        this.o0x.innerHTML = "";
        delete this.DL9C
    };
    b0x.cv1x = function(d0x) {
        var f0x = h0x.U0x(d0x, "d:action"),
            j0x = this.fG2x ? this.fG2x.Wv5A() : null,
            d0x = {
                action: a9j.u0x(f0x, "action")
            };
        if (j0x) d0x.data = j0x;
        if (d0x.action) {
            this.A0x("onaction", d0x);
            if (d0x.stopped) return;
            this.bq0x()
        }
    };
    b0x.Ab8T = function(d0x) {
        if (!this.DL9C) return;
        h0x.bh0x(d0x);
        var de1x = d0x.wheelDelta || -d0x.detail;
        this.DL9C.scrollTop -= de1x
    };
    l0x.jl4p = function(e0x) {
        e0x.destroyable = e0x.destroyable || true;
        e0x.title = e0x.title || "提示";
        e0x.draggable = true;
        e0x.parent = document.body;
        e0x.mask = e0x.mask || true;
        var zU8M = m0x.Ws5x.B0x(e0x);
        zU8M.N0x();
        return zU8M
    }
})();
(function() {
    var p = NEJ.P("nej.u");
    var bpS0x = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
        Lk1x = {},
        DI9z = {};
    for (var i = 0, l = bpS0x.length, c; i < l; i++) {
        c = bpS0x.charAt(i);
        Lk1x[i] = c;
        DI9z[c] = i
    }
    var cpX1x = function(iA4E) {
        var s0x = 0,
            c, n0x = [];
        while (s0x < iA4E.length) {
            c = iA4E[s0x];
            if (c < 128) {
                n0x.push(String.fromCharCode(c));
                s0x++
            } else if (c > 191 && c < 224) {
                n0x.push(String.fromCharCode((c & 31) << 6 | iA4E[s0x + 1] & 63));
                s0x += 2
            } else {
                n0x.push(String.fromCharCode((c & 15) << 12 | (iA4E[s0x + 1] & 63) << 6 | iA4E[s0x + 2] & 63));
                s0x += 3
            }
        }
        return n0x.join("")
    };
    var cpW1x = function() {
        var gR2x = /\r\n/g;
        return function(j0x) {
            j0x = j0x.replace(gR2x, "\n");
            var n0x = [],
                nx5C = String.fromCharCode(237);
            if (nx5C.charCodeAt(0) < 0) for (var i = 0, l = j0x.length, c; i < l; i++) {
                c = j0x.charCodeAt(i);
                c > 0 ? n0x.push(c) : n0x.push(256 + c >> 6 | 192, 256 + c & 63 | 128)
            } else for (var i = 0, l = j0x.length, c; i < l; i++) {
                c = j0x.charCodeAt(i);
                if (c < 128) n0x.push(c);
                else if (c > 127 && c < 2048) n0x.push(c >> 6 | 192, c & 63 | 128);
                else n0x.push(c >> 12 | 224, c >> 6 & 63 | 128, c & 63 | 128)
            }
            return n0x
        }
    }();
    var EB0x = function(iA4E) {
        var s0x = 0,
            n0x = [],
            eC2x = iA4E.length % 3;
        if (eC2x == 1) iA4E.push(0, 0);
        if (eC2x == 2) iA4E.push(0);
        while (s0x < iA4E.length) {
            n0x.push(Lk1x[iA4E[s0x] >> 2], Lk1x[(iA4E[s0x] & 3) << 4 | iA4E[s0x + 1] >> 4], Lk1x[(iA4E[s0x + 1] & 15) << 2 | iA4E[s0x + 2] >> 6], Lk1x[iA4E[s0x + 2] & 63]);
            s0x += 3
        }
        if (eC2x == 1) n0x[n0x.length - 1] = n0x[n0x.length - 2] = "=";
        if (eC2x == 2) n0x[n0x.length - 1] = "=";
        return n0x.join("")
    };
    var cpV1x = function() {
        var qD6x = /\n|\r|=/g;
        return function(j0x) {
            var s0x = 0,
                n0x = [];
            j0x = j0x.replace(qD6x, "");
            for (var i = 0, l = j0x.length; i < l; i += 4) n0x.push(DI9z[j0x.charAt(i)] << 2 | DI9z[j0x.charAt(i + 1)] >> 4, (DI9z[j0x.charAt(i + 1)] & 15) << 4 | DI9z[j0x.charAt(i + 2)] >> 2, (DI9z[j0x.charAt(i + 2)] & 3) << 6 | DI9z[j0x.charAt(i + 3)]);
            var bo0x = n0x.length,
                eC2x = j0x.length % 4;
            if (eC2x == 2) n0x = n0x.slice(0, bo0x - 2);
            if (eC2x == 3) n0x = n0x.slice(0, bo0x - 1);
            return n0x
        }
    }();
    p.crl1x = function(j0x) {
        return cpX1x(cpV1x(j0x))
    };
    p.cpP1x = function(j0x) {
        try {
            return window.btoa(j0x)
        } catch (ex) {
            return EB0x(cpW1x(j0x))
        }
    }
})();
(function() {
    var c0x = NEJ.P,
        Y0x = NEJ.O,
        h0x = c0x("nej.v"),
        a9j = c0x("nej.e"),
        v0x = c0x("nej.j"),
        M0x = c0x("nej.p"),
        k0x = c0x("nej.u"),
        m0x = c0x("nm.l"),
        F0x = c0x("nm.w"),
        bG0x = c0x("nej.ui"),
        p0x = c0x("nm.d"),
        l0x = c0x("nm.x"),
        b0x, K0x;
    var TYPE_MAP = {
        13: "playlist",
        17: "program",
        18: "song",
        19: "album"
    };
    m0x.bqx0x = NEJ.C();
    b0x = m0x.bqx0x.O0x(m0x.dT2x);
    b0x.bX1x = function() {
        this.bY1x = "m-download-layer"
    };
    b0x.bR0x = function() {
        this.cb1x();
        var i0x = a9j.I0x(this.o0x, "j-flag");
        this.bhQ8I = i0x[0];
        this.bhP8H = i0x[1];
        this.bqV0x = i0x[2];
        v0x.br0x("/client/version/get", {
            type: "json",
            onload: this.cpN1x.g0x(this)
        });
        if (M0x.IN1x.mac) {
            a9j.x0x(this.bhQ8I.parentNode, "f-hide");
            a9j.y0x(this.bhP8H.parentNode, "f-hide");
            a9j.y0x(this.bqV0x, "f-hide")
        } else {
            a9j.y0x(this.bhQ8I.parentNode, "f-hide");
            a9j.x0x(this.bhP8H.parentNode, "f-hide");
            a9j.x0x(this.bqV0x, "f-hide")
        }
    };
    b0x.bk0x = function(e0x) {
        e0x.clazz = " m-layer-down";
        e0x.parent = e0x.parent || document.body;
        e0x.title = "下载";
        e0x.draggable = !0;
        e0x.destroyalbe = !0;
        e0x.mask = true;
        this.bl0x(e0x);
        this.bU1x([
            [this.o0x, "click", this.bO0x.g0x(this)]
        ]);
        this.er2x = TYPE_MAP[e0x.type];
        this.gp2x = e0x.id
    };
    b0x.bD0x = function() {
        this.bI0x()
    };
    b0x.zY8Q = function() {
        this.bq0x()
    };
    b0x.DC9t = function(d0x) {
        this.A0x("onok", z0x);
        this.bq0x()
    };
    b0x.bO0x = function(d0x) {
        var f0x = h0x.U0x(d0x, "d:action");
        switch (a9j.u0x(f0x, "action")) {
            case "download":
                this.bq0x();
                window.open(a9j.u0x(f0x, "src"));
                break;
            case "orpheus":
                this.bq0x();
                location.href = "orpheus://" + k0x.cpP1x(JSON.stringify({
                        type: this.er2x,
                        id: this.gp2x,
                        cmd: "download"
                    }));
                break
        }
    };
    b0x.cpN1x = function(d0x) {
        if (d0x.code == 200) {
            this.Fm0x = d0x.data;
            this.bhQ8I.innerText = "V" + this.Fm0x.mac;
            this.bhP8H.innerText = "V" + this.Fm0x.pc
        }
    };
    l0x.Wp5u = function(e0x) {
        m0x.bqx0x.B0x(e0x).N0x()
    }
})();
(function() {
    var c0x = NEJ.P,
        Y0x = NEJ.O,
        k0x = c0x("nej.u"),
        p0x = c0x("nm.d"),
        bN0x = {};
    p0x.w0x = function(J0x) {
        return bN0x[J0x]
    };
    p0x.ol5q = function(J0x, bd0x) {
        bN0x[J0x] = bd0x
    };
    p0x.eM2x = function(j0x) {
        k0x.dZ2x(j0x, function(r0x, J0x) {
            var bd0x = bN0x[J0x] || {};
            NEJ.X(bd0x, r0x);
            bN0x[J0x] = bd0x
        })
    }
})();
(function() {
    var c0x = NEJ.P,
        bm0x = NEJ.F,
        ba0x = c0x("nej.h");
    ba0x.Wo5t = function(J0x) {
        return localStorage.getItem(J0x)
    };
    ba0x.Wn5s = function(J0x, z0x) {
        localStorage.setItem(J0x, z0x)
    };
    ba0x.bhJ8B = function(J0x) {
        localStorage.removeItem(J0x)
    };
    ba0x.bhI8A = function() {
        localStorage.clear()
    };
    ba0x.cpM1x = function() {
        var n0x = [];
        for (var i = 0, l = localStorage.length; i < l; i++) n0x.push(localStorage.key(i));
        return n0x
    };
    ba0x.bhH8z = function() {
        (document.onstorageready || bm0x)()
    };
    ba0x.bhG8y = function() {
        return !0
    }
})();
(function() {
    var c0x = NEJ.P,
        M0x = c0x("nej.p"),
        iq3x = c0x("nej.c"),
        ba0x = c0x("nej.h"),
        qX6R;
    if (M0x.lX4b.trident || !! window.localStorage) return;
    var cpL1x = function() {
        var pQ5V, eR2x;
        var bkO9F = function() {
            pQ5V = document.createElement("div");
            NEJ.X(pQ5V.style, {
                position: "absolute",
                top: 0,
                left: 0,
                width: "1px",
                height: "1px",
                zIndex: 1e4,
                overflow: "hidden"
            });
            document.body.insertAdjacentElement("afterBegin", pQ5V);
            pQ5V.innerHTML = '<object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" width="1" height="1"id="f-' + +(new Date) + '" codebase="http://fpdownload.macromedia.com/get/flashplayer/current/swflash.cab"><param name="movie" value="' + iq3x.w0x("storage.swf") + '"/><param name="AllowScriptAccess" value="sameDomain"/></object>'
        };
        var Jc1x = function() {
            eR2x = window.clearTimeout(eR2x);
            var gV2x = pQ5V.getElementsByTagName("object")[0];
            if ( !! gV2x.initStorage) {
                delete pQ5V;
                qX6R = gV2x;
                qX6R.initStorage("nej-storage");
                (document.onstorageready || bm0x)();
                return
            }
            eR2x = window.setTimeout(Jc1x, 500)
        };
        return function() {
            if ( !! qX6R) return;
            bkO9F();
            Jc1x()
        }
    }();
    ba0x.Wo5t = ba0x.Wo5t.dY2x(function(d0x) {
        d0x.stopped = !0;
        if (!qX6R) return;
        d0x.value = qX6R.getItem(d0x.args[0])
    });
    ba0x.Wn5s = ba0x.Wn5s.dY2x(function(d0x) {
        d0x.stopped = !0;
        if (!qX6R) return;
        var bg0x = d0x.args;
        qX6R.setItem(bg0x[0], bg0x[1])
    });
    ba0x.bhJ8B = ba0x.bhJ8B.dY2x(function(d0x) {
        d0x.stopped = !0;
        if (!qX6R) return;
        qX6R.removeItem(d0x.args[0])
    });
    ba0x.bhI8A = ba0x.bhI8A.dY2x(function(d0x) {
        d0x.stopped = !0;
        if ( !! qX6R) qX6R.clear()
    });
    ba0x.bhH8z = ba0x.bhH8z.dY2x(function(d0x) {
        d0x.stopped = !0;
        cpL1x()
    });
    ba0x.bhG8y = ba0x.bhG8y.dY2x(function(d0x) {
        d0x.stopped = !0;
        d0x.value = !! qX6R
    })
})();
(function() {
    var c0x = NEJ.P,
        k0x = c0x("nej.u"),
        h0x = c0x("nej.v"),
        ba0x = c0x("nej.h"),
        v0x = c0x("nej.j"),
        H0x = c0x("nej.ut"),
        Q0x = {};
    v0x.vf7Y = function(J0x, z0x) {
        var bsZ1x = JSON.stringify(z0x);
        try {
            ba0x.Wn5s(J0x, bsZ1x)
        } catch (ex) {
            console.error(ex.message);
            console.error(ex)
        }
        if (bsZ1x != ba0x.Wo5t(J0x)) Q0x[J0x] = z0x;
        return this
    };
    v0x.tl7e = function(J0x) {
        var j0x = JSON.parse(ba0x.Wo5t(J0x) || "null");
        return j0x == null ? Q0x[J0x] : j0x
    };
    v0x.btg1x = function(J0x, z0x) {
        var j0x = v0x.tl7e(J0x);
        if (j0x == null) {
            j0x = z0x;
            v0x.vf7Y(J0x, j0x)
        }
        return j0x
    };
    v0x.Nb2x = function(J0x) {
        delete Q0x[J0x];
        ba0x.bhJ8B(J0x);
        return this
    };
    v0x.cro1x = function() {
        var bhE8w = function(r0x, J0x, bv0x) {
            delete bv0x[J0x]
        };
        return function() {
            k0x.dZ2x(Q0x, bhE8w);
            ba0x.bhI8A();
            return this
        }
    }();
    v0x.crp1x = function(n0x) {
        n0x = n0x || {};
        k0x.be0x(ba0x.cpM1x(), function(J0x) {
            n0x[J0x] = v0x.tl7e(J0x)
        });
        return n0x
    };
    H0x.ft2x.B0x({
        element: document,
        event: "storageready",
        oneventadd: function() {
            if (ba0x.bhG8y()) {
                document.onstorageready()
            }
        }
    });
    var cpI1x = function() {
        var cpH1x = function(z0x, J0x, bv0x) {
            ba0x.Wn5s(J0x, JSON.stringify(z0x));
            delete bv0x[J0x]
        };
        return function() {
            k0x.dZ2x(Q0x, cpH1x)
        }
    }();
    h0x.q0x(document, "storageready", cpI1x);
    ba0x.bhH8z()
})();
(function() {
    var c0x = NEJ.P,
        h0x = c0x("nej.v"),
        k0x = c0x("nej.u"),
        M0x = c0x("nej.ut"),
        EF0x;
    if ( !! M0x.bhA8s) return;
    M0x.bhA8s = NEJ.C();
    EF0x = M0x.bhA8s.O0x(M0x.cC1x);
    EF0x.cl1x = function() {
        var fR2x = +(new Date),
            mm5r = "dat-" + fR2x;
        return function() {
            this.cr1x();
            var Q0x = this.constructor[mm5r];
            if (!Q0x) {
                Q0x = {};
                this.constructor[mm5r] = Q0x
            }
            this.P0x = Q0x
        }
    }();
    EF0x.w0x = function(J0x) {
        return this.P0x[J0x]
    };
    EF0x.ol5q = function(J0x, z0x) {
        var lb4f = this.P0x[J0x];
        this.P0x[J0x] = z0x;
        h0x.A0x(localCache, "cachechange", {
            key: J0x,
            type: "set",
            oldValue: lb4f,
            newValue: z0x
        });
        return this
    };
    EF0x.cF1x = function(J0x) {
        var lb4f = this.P0x[J0x];
        k0x.Yg5l(this.P0x, J0x);
        h0x.A0x(localCache, "cachechange", {
            key: J0x,
            type: "delete",
            oldValue: lb4f,
            newValue: undefined
        });
        return lb4f
    };
    EF0x.Wm5r = function(AX9O) {
        return NEJ.Q(this.P0x, AX9O)
    };
    window.localCache = M0x.bhA8s.B0x();
    M0x.ft2x.B0x({
        element: localCache,
        event: "cachechange"
    })
})();
(function() {
    var c0x = NEJ.P,
        fb2x = NEJ.R,
        bm0x = NEJ.F,
        k0x = c0x("nej.u"),
        v0x = c0x("nej.j"),
        M0x = c0x("nej.ut"),
        mm5r = "dat-" + +(new Date),
        mb4f;
    if ( !! M0x.bhu8m) return;
    M0x.bhu8m = NEJ.C();
    mb4f = M0x.bhu8m.O0x(M0x.cC1x);
    mb4f.cl1x = function() {
        this.cr1x();
        this.P0x = this.constructor[mm5r];
        if (!this.P0x) {
            this.P0x = {};
            this.P0x[mm5r + "-l"] = {};
            this.constructor[mm5r] = this.P0x
        }
    };
    mb4f.qq6k = function(J0x) {
        return this.P0x[J0x]
    };
    mb4f.oh5m = function(J0x, z0x) {
        this.P0x[J0x] = z0x
    };
    mb4f.kx4B = function(J0x, kj4n) {
        var j0x = this.qq6k(J0x);
        if (j0x == null) {
            j0x = kj4n;
            this.oh5m(J0x, j0x)
        }
        return j0x
    };
    mb4f.cpG1x = function(J0x) {
        if (J0x != null) {
            delete this.P0x[J0x];
            return
        }
        k0x.dZ2x(this.P0x, function(r0x, J0x) {
            if (J0x == mm5r + "-l") return;
            this.cpG1x(J0x)
        }, this)
    };
    mb4f.crq1x = function(J0x) {
        if ( !! v0x.Nb2x) return v0x.Nb2x(J0x)
    };
    mb4f.cpD1x = function(J0x) {
        if ( !! v0x.tl7e) return v0x.tl7e(J0x)
    };
    mb4f.cpC1x = function(J0x, z0x) {
        if ( !! v0x.vf7Y) v0x.vf7Y(J0x, z0x)
    };
    mb4f.Dq9h = function(J0x, kj4n) {
        var j0x = this.NY3x(J0x);
        if (j0x == null) {
            j0x = kj4n;
            this.uB7u(J0x, j0x)
        }
        return j0x
    };
    mb4f.NY3x = function(J0x) {
        var j0x = this.qq6k(J0x);
        if (j0x != null) return j0x;
        j0x = this.cpD1x(J0x);
        if (j0x != null) this.oh5m(J0x, j0x);
        return j0x
    };
    mb4f.uB7u = function(J0x, z0x) {
        this.cpC1x(J0x, z0x);
        this.oh5m(J0x, z0x)
    };
    mb4f.bwP1x = function(J0x) {
        if (J0x != null) {
            delete this.P0x[J0x];
            if ( !! v0x.Nb2x) v0x.Nb2x(J0x);
            return
        }
        k0x.dZ2x(this.P0x, function(r0x, J0x) {
            if (J0x == mm5r + "-l") return;
            this.bwP1x(J0x)
        }, this)
    };
    mb4f.crr1x = function() {
        this.bwP1x();
        return this
    };
    mb4f.crt1x = function(J0x) {
        var j0x = this.P0x[mm5r + "-l"];
        delete j0x[J0x]
    };
    mb4f.bhh8Z = function(J0x) {
        var j0x = this.P0x[mm5r + "-l"],
            bg0x = fb2x.slice.call(arguments, 1);
        k0x.be0x(j0x[J0x], function(dn1x) {
            try {
                dn1x.apply(null, bg0x)
            } catch (ex) {
                console.error(ex.message);
                console.error(ex.stack)
            }
        });
        delete j0x[J0x]
    };
    mb4f.bhf8X = function(J0x, dn1x) {
        dn1x = dn1x || bm0x;
        var i0x = this.P0x[mm5r + "-l"][J0x];
        if (!i0x) {
            i0x = [dn1x];
            this.P0x[mm5r + "-l"][J0x] = i0x;
            return !1
        }
        i0x.push(dn1x);
        return !0
    };
    mb4f.cpv1x = function(i0x, bj0x, fS2x) {
        if (!i0x) return !1;
        bj0x = parseInt(bj0x) || 0;
        fS2x = parseInt(fS2x) || 0;
        if (!fS2x) {
            if (!i0x.loaded) return !1;
            fS2x = i0x.length
        }
        if ( !! i0x.loaded) fS2x = Math.min(fS2x, i0x.length - bj0x);
        for (var i = 0; i < fS2x; i++) if (!i0x[bj0x + i]) return !1;
        return !0
    }
})();
(function() {
    var c0x = NEJ.P,
        Y0x = NEJ.O,
        bm0x = NEJ.F,
        k0x = c0x("nej.u"),
        M0x = c0x("nej.ut"),
        b0x, K0x;
    if ( !! M0x.Oo3x) return;
    M0x.Oo3x = NEJ.C();
    b0x = M0x.Oo3x.O0x(M0x.bhu8m);
    K0x = M0x.Oo3x.ch1x;
    b0x.bk0x = function(e0x) {
        this.bl0x(e0x);
        this.ub7U = e0x.key || "id";
        this.bb0x = e0x.data || Y0x;
        this.cpt1x = !! e0x.autogc;
        this.cps1x(e0x.id)
    };
    b0x.bD0x = function() {
        this.bI0x();
        if ( !! this.dI2x) {
            this.bxR2x()
        }
    };
    b0x.cps1x = function(C0x) {
        var Q0x;
        if ( !! C0x) {
            Q0x = this.P0x[C0x];
            if (!Q0x) {
                Q0x = {};
                this.P0x[C0x] = Q0x
            }
        }
        Q0x = Q0x || this.P0x;
        Q0x.hash = Q0x.hash || {};
        this.Ou3x = Q0x
    };
    b0x.bxR2x = function() {
        this.dI2x = window.clearTimeout(this.dI2x);
        var bv0x = {};
        k0x.dZ2x(this.Ou3x, function(i0x, J0x) {
            if (J0x == "hash") return;
            if (!k0x.eq2x(i0x)) return;
            k0x.be0x(i0x, function(r0x) {
                if (!r0x) return;
                bv0x[r0x[this.ub7U]] = !0
            }, this)
        }, this);
        k0x.dZ2x(this.Wi5n(), function(r0x, C0x, dE2x) {
            if (!bv0x[C0x]) {
                delete dE2x[C0x]
            }
        })
    };
    b0x.cpr1x = function() {
        if ( !! this.dI2x) {
            this.dI2x = window.clearTimeout(this.dI2x)
        }
        this.dI2x = window.setTimeout(this.bxR2x.g0x(this), 150)
    };
    b0x.zT8L = function(r0x, Wh5m) {
        r0x = this.byN2x(r0x, Wh5m) || r0x;
        if (!r0x) return null;
        var J0x = r0x[this.ub7U];
        if (J0x != null) {
            var hD3x = this.Wi5n()[J0x];
            if ( !! hD3x) r0x = NEJ.X(hD3x, r0x);
            this.Wi5n()[J0x] = r0x
        }
        delete r0x.byV2x;
        return r0x
    };
    b0x.byN2x = bm0x;
    b0x.bhb8T = function(J0x, r0x) {
        if (!r0x) return;
        if (!k0x.eq2x(r0x)) {
            var i0x = this.gK2x(J0x),
                r0x = this.zT8L(r0x, J0x);
            if ( !! r0x) i0x.unshift(r0x);
            return
        }
        k0x.lU4Y(r0x, this.bhb8T.g0x(this, J0x))
    };
    b0x.OM3x = function(J0x, cu1x) {
        var i0x = this.gK2x(J0x);
        i0x.length = Math.max(i0x.length, cu1x);
        this.bha8S(J0x);
        return this
    };
    b0x.jx4B = function(J0x) {
        return this.gK2x(J0x).length
    };
    b0x.bha8S = function(J0x, nA5F) {
        this.gK2x(J0x).loaded = nA5F != !1;
        return this
    };
    b0x.Wg5l = function(J0x) {
        return !!this.gK2x(J0x).loaded
    };
    b0x.rA6u = function(J0x, i0x) {
        this.tv7o(J0x);
        this.bgY8Q({
            key: J0x,
            offset: 0,
            limit: i0x.length + 1
        }, {
            list: i0x,
            total: i0x.length
        })
    };
    b0x.gK2x = function() {
        var Dk9b = function(J0x) {
            return (J0x || "") + (!J0x ? "" : "-") + "list"
        };
        return function(J0x) {
            var J0x = Dk9b(J0x),
                i0x = this.Ou3x[J0x];
            if (!i0x) {
                i0x = [];
                this.Ou3x[J0x] = i0x
            }
            return i0x
        }
    }();
    b0x.Wi5n = function() {
        var dE2x = this.Ou3x.hash;
        if (!dE2x) {
            dE2x = {};
            this.Ou3x.hash = dE2x
        }
        return dE2x
    };
    b0x.bgR8J = function() {
        var Dk9b = function(e0x) {
            return "r-" + e0x.key
        };
        return function(e0x) {
            var hT3x = NEJ.X({}, e0x),
                mQ5V = Dk9b(hT3x);
            if (!this.bhf8X(mQ5V, this.A0x.g0x(this))) {
                hT3x.rkey = mQ5V;
                hT3x.onload = this.cpp1x.g0x(this, hT3x);
                this.A0x("dopullrefresh", hT3x)
            }
            return this
        }
    }();
    b0x.cpp1x = function(e0x, i0x) {
        this.bhb8T(e0x.key, i0x);
        this.bhh8Z(e0x.rkey, "onpullrefresh", e0x)
    };
    b0x.nv5A = function() {
        var Dk9b = function(e0x) {
            return "r-" + e0x.key + "-" + e0x.offset + "-" + e0x.limit
        };
        return function(e0x) {
            e0x = e0x || Y0x;
            var hT3x = {
                    key: "" + e0x.key || "",
                    ext: e0x.ext || null,
                    data: e0x.data || null,
                    offset: parseInt(e0x.offset) || 0,
                    limit: parseInt(e0x.limit) || 0
                },
                i0x = this.gK2x(hT3x.key);
            if (this.cpv1x(i0x, hT3x.offset, hT3x.limit)) {
                this.A0x("onlistload", hT3x);
                return this
            }
            var mQ5V = Dk9b(hT3x);
            if (!this.bhf8X(mQ5V, this.A0x.g0x(this))) {
                hT3x.rkey = mQ5V;
                hT3x.onload = this.bgY8Q.g0x(this, hT3x);
                this.A0x("doloadlist", hT3x)
            }
            return this
        }
    }();
    b0x.bgY8Q = function() {
        var BE9v = function(r0x, s0x, i0x) {
            if ( !! r0x) {
                return !0
            }
            i0x.splice(s0x, 1)
        };
        return function(e0x, n0x) {
            e0x = e0x || Y0x;
            var J0x = e0x.key,
                bj0x = e0x.offset,
                bAA2x = this.gK2x(J0x);
            var i0x = n0x || [];
            if (!k0x.eq2x(i0x)) {
                i0x = n0x.result || n0x.list || [];
                var cu1x = parseInt(n0x.total);
                if (!isNaN(cu1x) || cu1x > i0x.length) {
                    this.OM3x(J0x, cu1x)
                }
            }
            k0x.be0x(i0x, function(r0x, s0x) {
                bAA2x[bj0x + s0x] = this.zT8L(r0x, J0x)
            }, this);
            if (i0x.length < e0x.limit) {
                this.bha8S(J0x);
                k0x.lU4Y(bAA2x, BE9v)
            }
            this.bhh8Z(e0x.rkey, "onlistload", e0x)
        }
    }();
    b0x.tv7o = function() {
        var BE9v = function(r0x, s0x, i0x) {
            i0x.splice(s0x, 1)
        };
        return function(J0x) {
            var i0x = this.gK2x(J0x);
            k0x.lU4Y(i0x, BE9v);
            this.bha8S(J0x, !1);
            if (this.cpt1x) {
                this.cpr1x()
            }
            return this
        }
    }();
    b0x.bAB2x = function(r0x, Wh5m) {
        return !r0x.byV2x
    };
    b0x.ec2x = function(C0x) {
        return this.Wi5n()[C0x]
    };
    b0x.cru1x = function(C0x) {
        var r0x = this.ec2x(C0x);
        if ( !! r0x) r0x.byV2x = !0
    };
    b0x.Wd5i = function() {
        var Dk9b = function(e0x) {
            return "r-" + e0x.key + "-" + e0x.id
        };
        return function(e0x) {
            e0x = e0x || Y0x;
            var C0x = e0x[this.ub7U],
                hT3x = {
                    id: C0x,
                    ext: e0x.ext,
                    data: e0x.data || {},
                    key: "" + e0x.key || ""
                };
            r0x = this.ec2x(C0x);
            hT3x.data[this.ub7U] = C0x;
            if ( !! r0x && this.bAB2x(r0x, hT3x.key)) {
                this.A0x("onitemload", hT3x);
                return this
            }
            var mQ5V = Dk9b(hT3x);
            if (!this.bhf8X(mQ5V, this.A0x.g0x(this))) {
                hT3x.rkey = mQ5V;
                hT3x.onload = this.cpn1x.g0x(this, hT3x);
                this.A0x("doloaditem", hT3x)
            }
            return this
        }
    }();
    b0x.cpn1x = function(e0x, r0x) {
        e0x = e0x || Y0x;
        this.zT8L(r0x, e0x.key);
        this.bhh8Z(e0x.rkey, "onitemload", e0x)
    };
    b0x.iP4T = function(e0x) {
        e0x = NEJ.X({}, e0x);
        e0x.onload = this.wj7c.g0x(this, e0x);
        this.A0x("doadditem", e0x)
    };
    b0x.wj7c = function(e0x, r0x) {
        var J0x = e0x.key;
        r0x = this.zT8L(r0x, J0x);
        if ( !! r0x) {
            var ev2x = 0,
                i0x = this.gK2x(J0x);
            if (!e0x.push) {
                ev2x = -1;
                var bj0x = e0x.offset || 0;
                i0x.splice(bj0x, 0, r0x)
            } else if (i0x.loaded) {
                ev2x = 1;
                i0x.push(r0x)
            } else {
                i0x.length++
            }
        }
        var d0x = {
            key: J0x,
            flag: ev2x,
            data: r0x,
            action: "add",
            ext: e0x.ext
        };
        this.A0x("onitemadd", d0x);
        return d0x
    };
    b0x.Qn3x = function(e0x) {
        e0x = NEJ.X({}, e0x);
        e0x.onload = this.bgO8G.g0x(this, e0x);
        this.A0x("dodeleteitem", e0x)
    };
    b0x.bgO8G = function(e0x, bBi2x) {
        var r0x, J0x = e0x.key;
        if ( !! bBi2x) {
            r0x = this.ec2x(e0x.id) || null;
            var C0x = e0x.id,
                cpl1x = this.ub7U,
                i0x = this.gK2x(J0x),
                s0x = k0x.cT1x(i0x, function(hD3x) {
                    return !!hD3x && hD3x[cpl1x] == C0x
                });
            if (s0x >= 0) i0x.splice(s0x, 1)
        }
        var d0x = {
            key: J0x,
            data: r0x,
            action: "delete",
            ext: e0x.ext
        };
        this.A0x("onitemdelete", d0x);
        return d0x
    };
    b0x.Wb5g = function(e0x) {
        e0x = NEJ.X({}, e0x);
        e0x.onload = this.cpk1x.g0x(this, e0x);
        this.A0x("doupdateitem", e0x)
    };
    b0x.cpk1x = function(e0x, r0x) {
        var J0x = e0x.key;
        if ( !! r0x) r0x = this.zT8L(r0x, J0x);
        var d0x = {
            key: J0x,
            data: r0x,
            action: "update",
            ext: e0x.ext
        };
        this.A0x("onitemupdate", d0x);
        return d0x
    }
})();
(function() {
    var c0x = NEJ.P,
        Y0x = NEJ.O,
        bm0x = NEJ.F,
        k0x = c0x("nej.u"),
        M0x = c0x("nej.ut"),
        b0x;
    if ( !! M0x.bgK8C) return;
    M0x.bgK8C = NEJ.C();
    b0x = M0x.bgK8C.O0x(M0x.Oo3x);
    b0x.bk0x = function(e0x) {
        this.bl0x(e0x);
        this.bmp9g({
            doloadlist: this.VZ5e.g0x(this),
            doloaditem: this.bgI8A.g0x(this),
            doadditem: this.bBO2x.g0x(this),
            dodeleteitem: this.VY5d.g0x(this),
            doupdateitem: this.VX5c.g0x(this),
            dopullrefresh: this.bCi2x.g0x(this)
        })
    };
    b0x.VZ5e = bm0x;
    b0x.bCi2x = bm0x;
    b0x.bgI8A = bm0x;
    b0x.bBO2x = bm0x;
    b0x.VY5d = bm0x;
    b0x.VX5c = bm0x
})();
(function() {
    var c0x = NEJ.P,
        Y0x = NEJ.O,
        bm0x = NEJ.F,
        k0x = c0x("nej.u"),
        h0x = c0x("nej.v"),
        v0x = c0x("nej.j"),
        H0x = c0x("nej.ut"),
        l0x = c0x("nm.x"),
        p0x = c0x("nm.d"),
        b0x, K0x;
    p0x.gT2x = NEJ.C();
    b0x = p0x.gT2x.O0x(H0x.bgK8C);
    b0x.cj1x = function() {
        var IK1x = location.protocol + "//" + location.host;
        var cpj1x = function(bs0x, j0x) {
            var bv0x = {
                conf: {},
                data: {},
                urls: []
            };
            k0x.be0x(bs0x, function(J0x, s0x, i0x) {
                var bd0x = p0x.w0x(J0x);
                if (!bd0x) return;
                var bgE8w = bCD3x(bd0x.url, j0x[J0x]);
                bv0x.urls.push(bgE8w);
                bv0x.conf[bgE8w] = bd0x;
                bv0x.data[bgE8w] = JSON.stringify(j0x[J0x] == null ? "" : j0x[J0x])
            });
            return bv0x
        };
        var bCD3x = function(V0x, j0x) {
            return V0x.replace(/\{(.*?)\}/gi, function($1, $2) {
                return j0x[$2] || $1
            })
        };
        var bCK3x = function(bd0x, e0x, d0x) {
            h0x.A0x(window, "requesterror", d0x);
            if ( !! d0x.stopped) return;
            var EN0x = bd0x.onerror || e0x.onerror;
            if (k0x.fj2x(EN0x)) {
                this.A0x(EN0x, d0x, e0x)
            } else {
                (EN0x || bm0x).call(this, d0x, e0x)
            }
            var d0x = {
                result: d0x,
                option: e0x
            };
            this.A0x("onerror", d0x);
            if (!d0x.stopped)(bd0x.onmessage || bm0x).call(this, d0x.result.code, d0x.result)
        };
        var bDf3x = function(R0x, bd0x, e0x) {
            var n0x = R0x;
            if (k0x.fV2x(bd0x.format)) {
                n0x = bd0x.format.call(this, R0x, e0x)
            }
            return n0x
        };
        var wp7i = function(R0x, bd0x, e0x, rY6S) {
            if (k0x.fV2x(bd0x.beforeload)) {
                bd0x.beforeload.call(this, R0x, e0x, bd0x)
            }
            if (R0x && R0x.code != null && R0x.code != 200) {
                bCK3x.call(this, bd0x, e0x, {
                    key: e0x.key,
                    code: R0x.code,
                    message: R0x.message || "",
                    captchaId: R0x.captchaId,
                    ext: R0x
                });
                return
            }
            var n0x = R0x;
            if (!rY6S) {
                n0x = bDf3x.call(this, R0x, bd0x, e0x)
            } else if (k0x.fV2x(bd0x.format)) {
                var bgC8u = [];
                k0x.be0x(rY6S.urls, function(V0x) {
                    bgC8u.push(bDf3x.call(this, R0x[V0x], rY6S.conf[V0x], e0x))
                }, this);
                bgC8u.push(e0x);
                n0x = bd0x.format.apply(this, bgC8u)
            }
            var tz7s = bd0x.onload || e0x.onload,
                bDq3x = bd0x.finaly || e0x.finaly || bm0x;
            if (k0x.fj2x(tz7s)) {
                bDq3x.call(this, this.A0x(tz7s, n0x), e0x)
            } else {
                bDq3x.call(this, (tz7s || bm0x).call(this, n0x), e0x)
            }
        };
        var zy8q = function(bd0x, e0x, bP0x) {
            bCK3x.call(this, bd0x, e0x, {
                key: e0x.key,
                code: bP0x.code || -1,
                message: bP0x.message || ""
            })
        };
        return function(bd0x, e0x) {
            if (k0x.fj2x(bd0x)) {
                bd0x = p0x.w0x(bd0x)
            }
            delete e0x.value;
            (bd0x.filter || bm0x).call(this, e0x, bd0x);
            var R0x = e0x.value;
            if ( !! R0x) {
                wp7i.call(this, R0x, bd0x, e0x);
                return
            }
            var V0x, j0x = e0x.data || Y0x,
                wJ7C = {
                    cookie: !0,
                    type: bd0x.rtype || "json",
                    method: bd0x.type || "POST",
                    onerror: zy8q.g0x(this, bd0x, e0x),
                    noescape: bd0x.noescape
                };
            if (k0x.eq2x(bd0x.url)) {
                var rY6S = cpj1x(bd0x.url, j0x);
                V0x = IK1x + "/api/batch";
                wJ7C.data = k0x.dh1x(rY6S.data);
                wJ7C.onload = wp7i.dX2x(this, bd0x, e0x, rY6S);
                wJ7C.headers = {
                    "batch-method": "POST"
                };
                delete rY6S.data
            } else {
                var kF4J = bd0x.url.indexOf(":") < 0 ? IK1x : "";
                V0x = bCD3x(kF4J + bd0x.url, j0x);
                wJ7C.data = k0x.dh1x(e0x.data);
                wJ7C.onload = wp7i.dX2x(this, bd0x, e0x)
            }
            if (wJ7C.method == "GET") wJ7C.query = wJ7C.data;
            return v0x.br0x(V0x, wJ7C)
        }
    }();
    b0x.Db9S = function() {
        var fQ2x = /^get|list|pull$/i;
        return function(bDw3x, e0x) {
            var J0x = e0x.key,
                bd0x = p0x.w0x(J0x.split("-")[0] + "-" + bDw3x);
            if (fQ2x.test(bDw3x) && J0x.indexOf("post-") < 0) bd0x.type = "GET";
            this.cj1x(bd0x, e0x)
        }
    }();
    b0x.crv1x = function(J0x, i0x) {
        var cu1x = i0x.length;
        this.bgY8Q({
            key: J0x,
            offset: 0,
            limit: cu1x + 1
        }, {
            list: i0x,
            total: cu1x
        })
    };
    b0x.VZ5e = function(e0x) {
        this.Db9S("list", e0x)
    };
    b0x.bgI8A = function(e0x) {
        this.Db9S("get", e0x)
    };
    b0x.bCi2x = function(e0x) {
        this.Db9S("pull", e0x)
    };
    b0x.bBO2x = function(e0x) {
        this.Db9S("add", e0x)
    };
    b0x.VY5d = function(e0x) {
        this.Db9S("del", e0x)
    };
    b0x.VX5c = function(e0x) {
        this.Db9S("update", e0x)
    };
    b0x.cpg1x = function(r0x) {
        this.zT8L(r0x)
    };
    H0x.ft2x.B0x({
        element: window,
        event: "requesterror"
    })
})();
(function() {
    var c0x = NEJ.P,
        Y0x = NEJ.O,
        bm0x = NEJ.F,
        h0x = c0x("nej.v"),
        H0x = c0x("nej.ut"),
        p0x = c0x("nm.d"),
        bgz8r = {},
        b0x, K0x;
    var tA7t = function(n0x, e0x) {
        n0x.conf = e0x.conf;
        return n0x
    };
    p0x.eM2x({
        "res-mv-get": {
            type: "GET",
            url: "/api/v1/mv/detail",
            format: function(R0x, e0x) {
                return tA7t({
                    mv: R0x
                }, e0x)
            }
        },
        "res-song-get": {
            type: "GET",
            url: "/api/song/detail",
            format: function(n0x, e0x) {
                if ( !! n0x.songs && n0x.songs.length > 0) n0x.song = n0x.songs[0];
                else n0x.song = bgz8r;
                delete n0x.songs;
                return tA7t(n0x, e0x)
            },
            filter: function(e0x) {
                e0x.data.ids = "[" + e0x.data.id + "]"
            }
        },
        "res-program-get": {
            type: "GET",
            url: "/api/dj/program/detail",
            format: tA7t
        },
        "res-album-get": {
            type: "GET",
            url: "/api/album/{id}",
            format: tA7t
        },
        "res-playlist-get": {
            type: "GET",
            url: "/api/playlist/detail",
            format: function(n0x, e0x) {
                n0x.playlist = n0x.result;
                delete n0x.result;
                return tA7t(n0x, e0x)
            }
        },
        "res-mv-play": {
            type: "GET",
            url: "/api/song/mv/play",
            format: tA7t
        },
        "res-playlist-play": {
            type: "GET",
            url: "/api/playlist/update/playcount",
            format: tA7t
        },
        "res-program-play": {
            type: "GET",
            url: "/api/dj/program/listen",
            format: tA7t
        },
        "res-djradio-get": {
            type: "GET",
            url: "/api/dj/program/byradio",
            filter: function(e0x) {
                var i0x = e0x.data.id.split("-");
                e0x.data.radioId = i0x[0];
                e0x.data.asc = i0x[1] == 2;
                e0x.data.limit = 1e3;
                delete e0x.data.id
            },
            format: function(R0x, e0x) {
                var cpf1x = {
                    id: e0x.data.radioId,
                    programs: R0x.programs
                };
                return tA7t({
                    djradio: cpf1x
                }, e0x)
            }
        },
        "res-hotSongs-get": {
            type: "GET",
            url: "/api/artist/{id}",
            format: tA7t
        },
        "res-lyric-get": {
            type: "GET",
            url: "/api/song/lyric",
            filter: function(e0x) {
                e0x.data.lv = 0;
                e0x.data.tv = 0
            },
            format: function(n0x, e0x) {
                var uU7N = {
                    lyric: "",
                    nolyric: true
                };
                if (n0x.code == 200 && n0x.lrc && n0x.lrc.lyric) {
                    uU7N.lyric = n0x.lrc.lyric;
                    uU7N.nolyric = false
                } else {
                    uU7N.nolyric = true
                }
                return tA7t({
                    lyric: uU7N
                }, e0x)
            }
        }
    });
    p0x.uV7O = NEJ.C();
    b0x = p0x.uV7O.O0x(p0x.gT2x);
    b0x.cpb1x = function(t0x, cy1x) {
        return this.qq6k(this.VU5Z(t0x, cy1x))
    };
    b0x.Jl1x = function(t0x, cy1x, e0x) {
        e0x = e0x || {};
        var j0x = this.qq6k(this.VU5Z(t0x, cy1x));
        if (j0x && (t0x != 13 && t0x != 19 || e0x.conf && e0x.conf.useCache)) {
            this.A0x("onresourceload", t0x, cy1x, j0x, e0x.conf);
            return
        }
        e0x.data = {
            id: cy1x
        };
        e0x.onload = this.cpa1x.g0x(this, t0x, cy1x);
        e0x.onerror = this.coY1x.g0x(this, t0x, cy1x);
        this.cj1x("res-" + this.zN8F(t0x) + "-get", e0x)
    };
    b0x.cpa1x = function(t0x, cy1x, n0x) {
        var j0x = n0x[this.zN8F(t0x)];
        this.oh5m(this.VU5Z(t0x, cy1x), j0x);
        this.A0x("onresourceload", t0x, cy1x, j0x, n0x.conf)
    };
    b0x.coY1x = function(t0x, cy1x, n0x, e0x) {
        if (n0x.code != 404) {
            this.A0x("onresourceerror", t0x, cy1x, n0x.code);
            return
        }
        this.oh5m(this.VU5Z(t0x, cy1x), bgz8r);
        this.A0x("onresourceload", t0x, cy1x, bgz8r, e0x.conf)
    };
    b0x.crw1x = function(t0x, e0x) {
        this.cj1x("res-" + this.zN8F(t0x) + "-play", e0x)
    };
    b0x.VU5Z = function(t0x, cy1x) {
        return "res-" + this.zN8F(t0x) + "-" + cy1x
    };
    b0x.zN8F = function(t0x) {
        var bv0x = {
            2: "hotSongs",
            13: "playlist",
            17: "program",
            18: "song",
            19: "album",
            21: "mv",
            41: "lyric",
            70: "djradio"
        };
        return bv0x[t0x]
    };
    p0x.uV7O.EQ0x = function(t0x, cy1x) {
        if (!this.eH2x) this.eH2x = p0x.uV7O.B0x({});
        return this.eH2x.cpb1x(t0x, cy1x)
    }
})();
(function() {
    var c0x = NEJ.P,
        Y0x = NEJ.O,
        bm0x = NEJ.F,
        h0x = c0x("nej.v"),
        k0x = c0x("nej.u"),
        H0x = c0x("nej.ut"),
        p0x = c0x("nm.d"),
        bgp8h = /^[1-9][0-9]*$/,
        b0x, K0x;
    var LOCAL_LOG_KEY = "local-log";
    p0x.eM2x({
        "bi-log": {
            url: "/api/feedback/weblog"
        },
        "bi-batch-log": {
            url: "/api/feedback/weblog"
        },
        "plus-mv-count": {
            url: "/api/song/mv/play"
        },
        "plus-song-count": {
            url: "/api/song/play"
        },
        "plus-dj-count": {
            type: "GET",
            url: "/api/dj/program/listen"
        },
        "plus-playlist-count": {
            type: "GET",
            url: "/api/playlist/update/playcount"
        }
    });
    p0x.hJ3x = NEJ.C();
    b0x = p0x.hJ3x.O0x(p0x.gT2x);
    b0x.gA2x = function(X0x, bd0x) {
        if (!X0x || !bd0x) return;
        if (k0x.fj2x(bd0x)) {
            try {
                bd0x = JSON.parse(bd0x)
            } catch (_e) {
                if (console && console.warn) {
                    console.warn("bilog error: ", a9j)
                }
            }
        }
        if (!k0x.ke4i(bd0x)) return;
        this.cj1x("bi-log", {
            data: {
                logs: JSON.stringify([{
                    action: X0x,
                    json: bd0x
                }])
            }
        });
        if (typeof GEnvType == "string" && GEnvType == "local") {
            console.log("[BI LOG] action=" + X0x + ", json=" + JSON.stringify(bd0x))
        }
    };
    b0x.VQ5V = function(mt5y) {
        if (!k0x.eq2x(mt5y)) return;
        this.cj1x("bi-batch-log", {
            data: {
                logs: JSON.stringify(mt5y)
            }
        })
    };
    b0x.bGd3x = function(bd0x) {
        if (!bd0x || !bd0x.type || !bd0x.rid) return;
        var mu5z = bd0x.type;
        if (bgp8h.test(mu5z)) {
            mu5z = this.zN8F(mu5z)
        }
        if (!mu5z) return;
        if (mu5z == "playlist") mu5z = "list";
        this.gA2x("search", {
            type: mu5z,
            id: bd0x.rid || null,
            keyword: bd0x.keyword || null
        })
    };
    b0x.JQ1x = function() {
        var coW1x = /^\/m\/(song|album|playlist)\?id=(\d+)/;
        return function(bd0x) {
            if (!bd0x || !bd0x.type || !bd0x.rid) return;
            if (bd0x.play === undefined) bd0x.play = true;
            var mu5z = bd0x.type;
            if (bgp8h.test(mu5z)) {
                mu5z = this.zN8F(mu5z)
            }
            if (!mu5z) return;
            if (mu5z == "playlist") mu5z = "list";
            var R0x = {
                id: bd0x.rid,
                type: mu5z
            };
            if (mu5z == "song" && bd0x.source) {
                R0x.source = this.bGi3x(bd0x.source);
                if ( !! bd0x.sourceid) R0x.sourceid = bd0x.sourceid
            }
            this.gA2x(!bd0x.play ? "addto" : "play", R0x);
            if (mu5z == "song" && bd0x.hash && bd0x.hash.match(coW1x)) {
                this.gA2x(!bd0x.play ? "addto" : "play", {
                    type: RegExp.$1,
                    id: RegExp.$2
                })
            }
        }
    }();
    b0x.bgm8e = function(C0x, bL0x, dG2x, CS9J) {
        var R0x = {
            type: "song",
            wifi: 0,
            download: 0
        };
        var coV1x = {
            1: "ui",
            2: "playend",
            3: "interrupt",
            4: "exception"
        };
        R0x.id = C0x;
        R0x.time = Math.round(bL0x);
        R0x.end = k0x.fj2x(CS9J) ? CS9J : coV1x[CS9J] || "";
        if (dG2x && dG2x.fid) {
            R0x.source = this.bGi3x(dG2x.fid);
            R0x.sourceId = dG2x.fdata
        }
        this.gA2x("play", R0x)
    };
    b0x.bqu0x = function(t0x, cy1x) {
        if (!t0x || !cy1x) return;
        if (bgp8h.test(t0x)) t0x = this.zN8F(t0x);
        if (t0x != "playlist" && t0x != "dj") return;
        var bd0x = p0x.w0x("plus-" + t0x + "-count");
        if (!bd0x) return !1;
        this.cj1x(bd0x, {
            data: {
                id: cy1x
            }
        });
        var Q0x = this.kx4B("play-hist-" + t0x, []);
        if (k0x.cT1x(Q0x, cy1x) < 0) {
            Q0x.push(cy1x);
            return !0
        }
        return !1
    };
    b0x.zN8F = function(t0x) {
        var bv0x = {
            1: "user",
            2: "artist",
            13: "playlist",
            17: "dj",
            18: "song",
            19: "album",
            21: "mv",
            31: "toplist"
        };
        return bv0x[t0x]
    };
    b0x.bGi3x = function(EV0x) {
        var bv0x = {
            1: "user",
            2: "artist",
            13: "list",
            17: "dj",
            18: "song",
            19: "album",
            21: "mv",
            31: "toplist",
            32: "search",
            33: "search",
            34: "event",
            35: "msg"
        };
        return bv0x[EV0x]
    };
    b0x.coR1x = function(gJ2x) {
        var mt5y = this.Dq9h(LOCAL_LOG_KEY, []);
        mt5y.unshift(gJ2x);
        if (mt5y.length > 200) {
            mt5y.length = 200
        }
        this.uB7u(LOCAL_LOG_KEY, mt5y)
    };
    b0x.coO1x = function() {
        return this.NY3x(LOCAL_LOG_KEY)
    }
})();
(function() {
    var c0x = NEJ.P,
        Y0x = NEJ.O,
        bm0x = NEJ.F,
        h0x = c0x("nej.v"),
        v0x = c0x("nej.j"),
        H0x = c0x("nej.ut"),
        a9j = c0x("nej.e"),
        k0x = c0x("nej.u"),
        m0x = c0x("nm.l"),
        l0x = c0x("nm.x"),
        p0x = c0x("nm.d");
    if (!p0x.uV7O) return;
    var Q0x = p0x.uV7O.B0x({
        onresourceload: coM1x
    });
    var CM9D = p0x.hJ3x.fP2x();

    function coM1x(t0x, cy1x, j0x, bd0x) {
        var i0x = [];
        switch (parseInt(t0x)) {
            case 2:
                i0x = j0x;
                break;
            case 13:
                i0x = j0x.tracks;
                break;
            case 18:
                i0x.push(j0x);
                break;
            case 19:
                i0x = j0x.songs;
                break;
            case 21:
                if (j0x.mp && j0x.mp.fee && j0x.mp.pl <= 0) {
                    l0x.bgf8X(j0x.data.id, j0x.mp.fee);
                    return
                }
                break
        }
        if (l0x.EX0x(i0x, true, null, t0x == 19 ? {
                source: "album",
                sourceid: cy1x
            } : null) == 0) {
            return
        }
        l0x.fc2x({
            clazz: "m-layer-w2",
            bubble: !1,
            message: bd0x.message
        })
    }
    function coK1x(d0x, qd6X, vr7k, fl2x) {
        fl2x = fl2x || {};
        if (d0x.action == "ok") {
            if (vr7k) {
                location.dispatch2("/payfee?songId=" + vr7k)
            } else {
                location.dispatch2("/payfee?fee=" + qd6X || 1)
            }
            CM9D.gA2x("click", {
                type: "tobuyvip",
                name: "box",
                source: fl2x.source || "song",
                sourceid: fl2x.sourceid || vr7k || 0
            })
        } else if (d0x.action == "song") {
            location.dispatch2("/payfee?singleSong=true&songId=" + vr7k);
            CM9D.gA2x("click", {
                type: "tobuyone",
                name: "box",
                source: fl2x.source || "song",
                sourceid: fl2x.sourceid || vr7k || 0
            })
        }
    }
    function Kw1x(bF0x) {
        l0x.fc2x({
            clazz: "m-layer-w2",
            bubble: !1,
            message: bF0x,
            btntxt: "知道了"
        })
    }
    function KB1x(bF0x, R0x) {
        Kw1x((R0x || Y0x).toast || bF0x)
    }
    l0x.hQ3x = function(bF0x, C0x, t0x, coJ1x, bf0x) {
        bF0x = bF0x || "由于版权保护，您所在的地区暂时无法使用。";
        if (coJ1x && bf0x && bf0x.privilege && bf0x.privilege.toast) {
            v0x.br0x("/api/song/toast", {
                query: {
                    id: bf0x.id
                },
                type: "json",
                onload: KB1x.g0x(this, bF0x),
                onerror: KB1x.g0x(this, bF0x)
            })
        } else if (C0x && t0x) {
            Q0x.Jl1x(t0x, C0x, {
                conf: {
                    message: bF0x,
                    useCache: t0x != 18
                }
            })
        } else {
            Kw1x(bF0x)
        }
    };
    l0x.tE7x = function(qd6X, vr7k, t0x, fl2x, mh4l) {
        var bN0x, qM6G = "m-popup-info",
            bge8W = "单首购买",
            bgd8V = "马上去开通",
            cx1x = "唱片公司要求，当前歌曲须付费使用。",
            bIR4V = true;
        try {
            bN0x = top.api.feeMessage || {}
        } catch (e) {
            bN0x = {}
        }
        if (qd6X == 1 || qd6X == 8 || qd6X == 16) {
            if (t0x == "song") {
                qM6G = "m-popup-song-buy";
                cx1x = bN0x["vip2"] || cx1x;
                bgd8V = bN0x["vip2button"] || "包月购买";
                bge8W = bN0x["vip2link"] || bge8W;
                if (mh4l && mh4l.flag !== undefined) {
                    var bs0x = mh4l.flag.toString(2).split("");
                    if (parseInt(bs0x.pop(), 10) == 1) {
                        bIR4V = false
                    }
                }
            } else {
                cx1x = bN0x["vip"] || cx1x
            }
        } else if (qd6X == 4) {
            cx1x = bN0x["album"] || cx1x;
            bgd8V = "立即订购"
        } else {
            cx1x = bN0x["unknow"] || cx1x
        }
        l0x.jl4p({
            clazz: "m-layer-w5",
            html: a9j.bQ0x(qM6G, {
                songTxt: bge8W,
                tip: cx1x,
                oktext: bgd8V,
                cctext: "以后再说",
                showSongText: bIR4V
            }),
            onaction: coK1x.dX2x(null, qd6X, vr7k, fl2x)
        })
    };
    l0x.bIS4W = function(hj3x, gX2x) {
        l0x.gM2x({
            title: "提示",
            message: "唱片公司要求，该歌曲须下载后播放",
            btnok: "下载",
            btncc: "取消",
            okstyle: "u-btn2-w1",
            ccstyle: "u-btn2-w1",
            action: function(t0x) {
                if (t0x == "ok") {
                    l0x.Wp5u({
                        id: hj3x,
                        type: gX2x
                    })
                }
            }
        })
    };
    l0x.bgf8X = function(na5f, qd6X) {
        var bN0x, cx1x = "唱片公司要求，当前歌曲须付费使用。";
        try {
            bN0x = top.api.feeMessage || {}
        } catch (e) {
            bN0x = {}
        }
        if (qd6X == 1 || qd6X == 8) {
            cx1x = bN0x["vip"] || cx1x
        } else if (qd6X == 4) {
            cx1x = bN0x["album"] || cx1x
        } else {
            cx1x = bN0x["unknow"] || cx1x
        }
        return l0x.jl4p({
            clazz: "m-layer-w5",
            html: a9j.bQ0x("m-popup-info", {
                tip: cx1x,
                oktext: "马上去开通",
                cctext: "以后再说"
            }),
            onaction: function(d0x) {
                if (d0x.action == "ok") {
                    location.dispatch2("/payfee?mvId=" + na5f);
                    CM9D.gA2x("click", {
                        type: "tobuyone",
                        name: "box",
                        source: "mv",
                        sourceid: na5f || 0
                    })
                }
            }
        })
    };
    l0x.EX0x = function() {
        function compareFee(coH1x, coG1x) {
            var bv0x = {
                1: 99,
                8: 99,
                4: 88,
                16: 99
            };
            return (bv0x[coH1x] || 0) - (bv0x[coG1x] || 0)
        }
        return function(i0x, cx1x, tH7A, fl2x) {
            tH7A = tH7A || {};
            var vk7d = [],
                Fa0x = {},
                bJY4c = 0,
                bKa4e = 0,
                Fc0x = null;
            if (!i0x || !i0x.length) return vk7d;
            k0x.be0x(i0x, function(bf0x) {
                var eU2x = l0x.nU5Z(bf0x);
                if (eU2x == 0) {
                    vk7d.push(bf0x)
                } else if (eU2x == 10) {
                    if (bf0x.privilege) {
                        bf0x.fee = bf0x.privilege.fee
                    }
                    if (compareFee(bf0x.fee, Fa0x.fee) > 0) {
                        Fa0x = bf0x
                    }
                } else if (eU2x == 11) {
                    ++bJY4c;
                    if (!tH7A.play) vk7d.push(bf0x)
                } else if (eU2x == 1e3) {
                    ++bKa4e;
                    if (!tH7A.download) vk7d.push(bf0x)
                } else if (eU2x == 100) {
                    Fc0x = bf0x
                }
            });
            if (vk7d.length == 0 && cx1x) {
                if (bJY4c == i0x.length) {
                    var ra6U = i0x[0].privilege || {};
                    if (ra6U.payed) {
                        l0x.hQ3x("唱片公司要求，该歌曲须下载后播放")
                    } else {
                        l0x.tE7x(ra6U.fee, null, null, fl2x)
                    }
                } else if (bKa4e == i0x.length) {
                    l0x.hQ3x("因版权方要求，该歌曲不支持下载")
                } else if (Fa0x.id) {
                    l0x.tE7x(Fa0x.fee, Fa0x.id, null, fl2x, Fa0x.privilege)
                } else {
                    if (Fc0x && i0x.length == 1 && Fc0x.privilege && Fc0x.privilege.st < 0 && Fc0x.privilege.toast) {
                        l0x.hQ3x(null, null, null, true, Fc0x)
                    } else {
                        l0x.hQ3x()
                    }
                }
            }
            return vk7d
        }
    }();
    l0x.nU5Z = function(bf0x) {
        if (!bf0x) return 0;
        var eU2x = bf0x.privilege;
        if (bf0x.program) return 0;
        if (window.GAbroad) return 100;
        if (eU2x) {
            if (eU2x.st != null && eU2x.st < 0) {
                return 100
            }
            if (eU2x.fee > 0 && eU2x.fee != 8 && eU2x.payed == 0 && eU2x.pl <= 0) return 10;
            if (eU2x.fee == 16) return 11;
            if ((eU2x.fee == 0 || eU2x.payed) && eU2x.pl > 0 && eU2x.dl == 0) return 1e3;
            if (eU2x.pl == 0 && eU2x.dl == 0) return 100;
            return 0
        } else {
            var eW2x = bf0x.status != null ? bf0x.status : bf0x.st != null ? bf0x.st : 0;
            if (bf0x.status >= 0) return 0;
            if (bf0x.fee > 0) return 10;
            return 100
        }
    }
})();
(function() {
    var c0x = NEJ.P,
        Y0x = NEJ.O,
        h0x = c0x("nej.v"),
        a9j = c0x("nej.e"),
        M0x = c0x("nej.ui"),
        b0x;
    if ( !! M0x.VL5Q) return;
    var hR3x = a9j.rT6N(".#<uispace>{position:absolute;background:#fff;}");
    M0x.VL5Q = NEJ.C();
    b0x = M0x.VL5Q.O0x(M0x.Kk1x);
    b0x.bk0x = function(e0x) {
        this.bl0x(e0x);
        this.bU1x([
            [document, "click", this.rv6p.g0x(this)]
        ]);
        this.coD1x = !! e0x.nostop;
        this.bLp4t = {
            top: e0x.top,
            left: e0x.left
        }
    };
    b0x.bD0x = function() {
        delete this.wa7T;
        delete this.bga8S;
        delete this.oL5Q;
        delete this.bLO4S;
        delete this.VK5P;
        delete this.bLp4t;
        this.bI0x()
    };
    b0x.bX1x = function() {
        this.kT4X = hR3x
    };
    b0x.bR0x = function() {
        this.cb1x();
        this.zO8G = this.o0x;
        h0x.q0x(this.o0x, "click", this.coB1x.g0x(this))
    };
    b0x.rv6p = function(d0x) {
        if (d0x.button != 2) this.bq0x()
    };
    b0x.coB1x = function(d0x) {
        if (this.coD1x) return;
        h0x.rc6W(d0x);
        var G0x = h0x.U0x(d0x);
        if (G0x.tagName == "A") h0x.cf1x(d0x)
    };
    b0x.coz1x = function() {
        var cO1x = /\s+/i;
        return function(mz5E) {
            mz5E = (mz5E || "").trim().toLowerCase().split(cO1x);
            mz5E[0] = mz5E[0] || "bottom";
            mz5E[1] = mz5E[1] || "left";
            this.oL5Q = mz5E
        }
    }();
    b0x.coy1x = function(mz5E) {
        var n0x = {},
            mn5s = this.bga8S,
            cry1x = a9j.oN5S(),
            dc1x = this.o0x.offsetWidth,
            co1x = this.o0x.offsetHeight;
        switch (mz5E[0]) {
            case "top":
                n0x.top = mn5s.top - co1x;
                n0x.left = mz5E[1] == "right" ? mn5s.left + mn5s.width - dc1x : mn5s.left;
                break;
            case "left":
                n0x.left = mn5s.left - dc1x;
                n0x.top = mz5E[1] == "bottom" ? mn5s.top + mn5s.height - co1x : mn5s.top;
                break;
            case "right":
                n0x.left = mn5s.left + mn5s.width;
                n0x.top = mz5E[1] == "bottom" ? mn5s.top + mn5s.height - co1x : mn5s.top;
                break;
            default:
                n0x.top = mn5s.top + mn5s.height;
                n0x.left = mz5E[1] == "right" ? mn5s.left + mn5s.width - dc1x : mn5s.left;
                break
        }
        return n0x
    };
    b0x.EO0x = function() {
        if (!this.bLO4S) {
            this.fO2x(this.bLp4t);
            return
        }
        if ( !! this.VK5P) {
            this.fO2x(this.wa7T);
            return
        }
        if ( !! this.bga8S) this.fO2x(this.coy1x(this.oL5Q))
    };
    b0x.cow1x = function(G0x, de1x, d0x) {
        de1x = de1x || Y0x;
        var bql0x = a9j.oN5S(),
            cJ1x = h0x.kv4z(d0x) + (de1x.left || 0),
            gF2x = h0x.nq5v(d0x) + (de1x.top || 0),
            dc1x = G0x.offsetWidth + (de1x.right || 0),
            co1x = G0x.offsetHeight + (de1x.bottom || 0),
            Fj0x = bql0x.scrollWidth,
            bfL8D = bql0x.scrollHeight,
            bfK8C = cJ1x + dc1x,
            bfJ8B = gF2x + co1x;
        switch (this.oL5Q[0]) {
            case "top":
                gF2x = bfJ8B > bfL8D ? gF2x - co1x : gF2x;
                if (this.oL5Q[1] == "right") {
                    cJ1x = cJ1x - dc1x < 0 ? 0 : cJ1x - dc1x
                } else {
                    cJ1x = bfK8C > Fj0x ? Fj0x - dc1x : cJ1x
                }
                break;
            case "left":
                cJ1x = bfK8C > Fj0x ? Fj0x - dc1x : cJ1x;
                if (this.oL5Q[1] == "top") {
                    gF2x = bfJ8B > bfL8D ? gF2x - co1x : gF2x
                } else {
                    gF2x = gF2x - co1x < 0 ? gF2x : gF2x - co1x
                }
                break;
            case "right":
                cJ1x = cJ1x - dc1x < 0 ? 0 : cJ1x - dc1x;
                if (this.oL5Q[1] == "top") {
                    gF2x = bfJ8B > bfL8D ? gF2x - co1x : gF2x
                } else {
                    gF2x = gF2x - co1x < 0 ? gF2x : gF2x - co1x
                }
                break;
            default:
                gF2x = gF2x - co1x < 0 ? gF2x : gF2x - co1x;
                if (this.oL5Q[1] == "left") {
                    cJ1x = bfK8C > Fj0x ? Fj0x - dc1x : cJ1x
                } else {
                    cJ1x = cJ1x - dc1x < 0 ? 0 : cJ1x - dc1x
                }
                break
        }
        return {
            top: gF2x,
            left: cJ1x
        }
    };
    b0x.bfI8A = function() {
        var cou1x = function(G0x, de1x) {
            G0x = a9j.w0x(G0x);
            if (!G0x) return;
            de1x = de1x || Y0x;
            var bj0x = a9j.hO3x(G0x);
            return {
                top: bj0x.y - (de1x.top || 0),
                left: bj0x.x - (de1x.left || 0),
                width: G0x.offsetWidth + (de1x.right || 0),
                height: G0x.offsetHeight + (de1x.bottom || 0)
            }
        };
        return function(e0x) {
            e0x = e0x || Y0x;
            this.VK5P = e0x.event;
            this.coz1x(e0x.align);
            if ( !! this.VK5P) this.wa7T = this.cow1x(e0x.target, e0x.delta, this.VK5P);
            this.bga8S = cou1x(e0x.target, e0x.delta);
            this.bLO4S = !! e0x.fitable;
            this.N0x();
            return this
        }
    }()
})();
(function() {
    var c0x = NEJ.P,
        Y0x = NEJ.O,
        a9j = c0x("nej.e"),
        h0x = c0x("nej.v"),
        k0x = c0x("nej.u"),
        M0x = c0x("nej.ui"),
        b0x, K0x;
    if ( !! M0x.zC8u) return;
    M0x.zC8u = NEJ.C();
    b0x = M0x.zC8u.O0x(M0x.WK5P);
    K0x = M0x.zC8u.ch1x;
    M0x.zC8u.crA1x = function() {
        var cor1x = function(d0x, C0x, eY2x, ji4m, Mt2x) {
            var cp1x, J0x = C0x + "-i",
                Q0x = eY2x.wy7r,
                bqY0x = !! ji4m.noclear,
                brb0x = !! ji4m.toggled;
            if (k0x.fV2x(ji4m.onbeforeclick)) {
                var VI5N = ji4m.noclear,
                    cop1x = ji4m.toggled;
                try {
                    ji4m.onbeforeclick(ji4m)
                } catch (e) {}
                bqY0x = !! ji4m.noclear;
                brb0x = !! ji4m.toggled;
                ji4m.toggled = cop1x;
                ji4m.noclear = VI5N
            }
            var AP9G = Q0x[J0x];
            if (brb0x && !! AP9G) {
                AP9G.bq0x();
                return
            }
            h0x.bh0x(d0x);
            if (!bqY0x) {
                h0x.A0x(document, "click");
                cp1x = eY2x.B0x(ji4m)
            } else {
                cp1x = eY2x.caG7z(ji4m, !0)
            }
            Q0x[J0x] = cp1x;
            cp1x.tR7K("onbeforerecycle", function() {
                delete Q0x[J0x]
            });
            cp1x.bfI8A(Mt2x)
        };
        return function(f0x, e0x) {
            f0x = a9j.w0x(f0x);
            if (!f0x) return this;
            if (!this.wy7r) this.wy7r = {};
            var C0x = a9j.kQ4U(f0x);
            if ( !! this.wy7r[C0x]) return this;
            e0x = NEJ.X({}, e0x);
            var Mt2x = NEJ.EX({
                align: "",
                delta: null,
                fitable: !1
            }, e0x);
            Mt2x.target = C0x;
            e0x.destroyable = !0;
            if (!e0x.fixed) {
                Mt2x.fitable = !0;
                e0x.parent = document.body
            }
            this.wy7r[C0x] = [C0x, e0x.event || "click", cor1x.dX2x(null, C0x, this, e0x, Mt2x)];
            h0x.q0x.apply(h0x, this.wy7r[C0x]);
            return this
        }
    }();
    M0x.zC8u.crB1x = function(f0x) {
        if (!this.wy7r) return this;
        var C0x = a9j.kQ4U(f0x),
            d0x = this.wy7r[C0x];
        if (!d0x) return this;
        delete this.wy7r[C0x];
        h0x.mc4g.apply(h0x, d0x);
        var cp1x = this.wy7r[C0x + "-i"];
        if ( !! cp1x) cp1x.bq0x();
        return this
    };
    b0x.biW9N = function() {
        return M0x.VL5Q.B0x(this.bS0x)
    };
    b0x.Ld1x = function() {
        K0x.Ld1x.apply(this, arguments);
        this.bS0x.top = null;
        this.bS0x.left = null;
        this.bS0x.nostop = !1
    };
    b0x.bfI8A = function(e0x) {
        if ( !! this.nt5y) this.nt5y.bfI8A(e0x);
        return this
    }
})();
(function() {
    var c0x = NEJ.P,
        bc0x = c0x("nej.ui"),
        m0x = c0x("nm.l"),
        b0x, K0x;
    m0x.bfB8t = NEJ.C();
    b0x = m0x.bfB8t.O0x(bc0x.zC8u);
    b0x.bk0x = function(e0x) {
        e0x.nohack = true;
        this.bl0x(e0x)
    }
})();
(function() {
    var c0x = NEJ.P,
        a9j = c0x("nej.e"),
        m0x = c0x("nm.l"),
        b0x, K0x;
    m0x.Z0x = NEJ.C();
    b0x = m0x.Z0x.O0x(m0x.bfB8t);
    K0x = m0x.Z0x.ch1x;
    b0x.bk0x = function(e0x) {
        this.bl0x(e0x);
        this.er2x = e0x.type || 1
    };
    b0x.bR0x = function() {
        this.cb1x();
        this.o0x = a9j.ni5n(this.com0x());
        var i0x = a9j.cQ1x(this.o0x);
        this.wD7w = i0x[0];
        this.ck1x = i0x[1]
    };
    b0x.com0x = function() {
        return '<div class="sysmsg"><i class="u-icn u-icn-31"></i><span></span></div>'
    };
    b0x.EO0x = function() {
        var z0x = {},
            cc1x = this.o0x.style,
            iF4J = a9j.oN5S(),
            mD5I = {
                left: iF4J.scrollLeft,
                top: iF4J.scrollTop
            },
            de1x = {
                left: iF4J.clientWidth - this.o0x.offsetWidth,
                top: iF4J.clientHeight - this.o0x.offsetHeight
            };
        z0x.top = Math.max(0, mD5I.top + de1x.top / 2);
        z0x.left = Math.max(0, mD5I.left + de1x.left / 2);
        this.nt5y.fO2x(z0x)
    };
    b0x.N0x = function(e0x) {
        K0x.N0x.call(this);
        this.EO0x();
        this.er2x == 1 ? a9j.fe2x(this.wD7w, "u-icn-32", "u-icn-31") : a9j.fe2x(this.wD7w, "u-icn-31", "u-icn-32");
        this.ck1x.innerHTML = e0x.tip || ""
    };
    m0x.Z0x.N0x = function() {
        var eR2x;
        return function(e0x) {
            clearTimeout(eR2x);
            if (e0x.parent === undefined) e0x.parent = document.body;
            if (e0x.autoclose === undefined) e0x.autoclose = true;
            e0x.clazz = "m-sysmsg"; !! this.eH2x && this.eH2x.S0x();
            this.eH2x = this.B0x(e0x);
            this.eH2x.N0x(e0x);
            if (e0x.autoclose) eR2x = setTimeout(this.bq0x.g0x(this), 2e3)
        }
    }();
    m0x.Z0x.bq0x = function() { !! this.eH2x && this.eH2x.bq0x()
    }
})();
(function() {
    var c0x = NEJ.P,
        v0x = c0x("nej.j"),
        k0x = c0x("nej.u");
    if (window["GRef"] && window["GRef"] == "mail") {
        v0x.br0x = v0x.br0x.dY2x(function(d0x) {
            e0x = d0x.args[1];
            e0x.query = e0x.query || {};
            if (k0x.fj2x(e0x.query)) e0x.query = k0x.ho3x(e0x.query);
            e0x.query.ref = "mail"
        })
    }
})();
(function() {
    var c0x = NEJ.P,
        bm0x = NEJ.F,
        fb2x = NEJ.R,
        H0x = c0x("nej.ut"),
        k0x = c0x("nej.u"),
        h0x = c0x("nej.v"),
        v0x = c0x("nej.j"),
        p0x = c0x("nm.d"),
        m0x = c0x("nm.l"),
        J0x = "playlist-tracks_",
        b0x;
    p0x.eM2x({
        "playlist_my-list": {
            url: "/api/user/playlist",
            type: "GET",
            format: function(R0x, e0x) {
                this.col0x(R0x.playlist);
                return {
                    total: 0,
                    list: fb2x
                }
            },
            onerror: function() {
                this.A0x("onlisterror")
            }
        },
        "playlist_new-add": {
            url: "/api/playlist/create",
            format: function(R0x, e0x) {
                var iH4L = R0x.playlist;
                iH4L.creator = GUser;
                iH4L.isHost = !0;
                iH4L.typeFlag = "playlist";
                return iH4L
            },
            finaly: function(d0x, e0x) {
                h0x.A0x(p0x.hd2x, "listchange", d0x)
            },
            onmessage: function() {
                var kZ4d = {
                    507: "歌单数量超过上限！",
                    405: "你操作太快了，请休息一会再试！",
                    406: "你操作太快了，请休息一会再试！"
                };
                return function(ct1x) {
                    m0x.Z0x.N0x({
                        tip: kZ4d[ct1x] || "创建失败",
                        type: 2
                    })
                }
            }()
        },
        "playlist_new-del": {
            url: "/api/playlist/delete",
            type: "GET",
            filter: function(e0x) {
                e0x.id = e0x.data.pid
            },
            finaly: function(d0x, e0x) {
                h0x.A0x(p0x.hd2x, "listchange", d0x)
            },
            onmessage: function() {
                var kZ4d = {
                    404: "歌单不存在！",
                    405: "你操作太快了，请休息一会再试！",
                    406: "你操作太快了，请休息一会再试！"
                };
                return function(ct1x) {
                    m0x.Z0x.N0x({
                        tip: kZ4d[ct1x] || "删除失败",
                        type: 2
                    })
                }
            }()
        },
        "playlist_fav-add": {
            type: "GET",
            url: "/api/playlist/subscribe",
            filter: function(e0x) {
                var fl2x = e0x.ext || {};
                e0x.ext = NEJ.X(fl2x, e0x.data);
                e0x.data = {
                    id: e0x.ext.id
                }
            },
            format: function(R0x, e0x) {
                m0x.Z0x.N0x({
                    tip: "收藏成功" + (R0x.point > 0 ? ' 获得<em class="s-fc6">' + R0x.point + "积分</em>" : "")
                });
                var r0x = e0x.ext;
                r0x.subscribedCount++;
                return r0x
            },
            finaly: function(d0x, e0x) {
                h0x.A0x(p0x.cok0x, "listchange", d0x);
                h0x.A0x(p0x.cok0x, "itemchange", {
                    attr: "subscribedCount",
                    data: d0x.data
                })
            },
            onmessage: function() {
                var kZ4d = {
                    404: "歌单不存在！",
                    501: "歌单已经收藏！",
                    506: "歌单收藏数量超过上限！"
                };
                return function(ct1x) {
                    m0x.Z0x.N0x({
                        type: 2,
                        tip: kZ4d[ct1x] || "收藏失败，请稍后再试！"
                    })
                }
            }()
        },
        "playlist_fav-del": {
            url: "/api/playlist/unsubscribe",
            type: "GET",
            filter: function(e0x) {
                e0x.id = e0x.data.id = e0x.data.pid
            },
            finaly: function(d0x, e0x) {
                h0x.A0x(p0x.hd2x, "listchange", d0x)
            },
            onmessage: function() {
                var kZ4d = {
                    404: "歌单不存在！",
                    405: "你操作太快了，请休息一会再试！",
                    406: "你操作太快了，请休息一会再试！"
                };
                return function(ct1x) {
                    m0x.Z0x.N0x({
                        tip: kZ4d[ct1x],
                        type: 2
                    })
                }
            }()
        },
        "playlist_new-update": {
            url: ["playlist-update-name", "playlist-update-tag", "playlist-update-desc"],
            filter: function(e0x) {
                var j0x = e0x.data,
                    VD5I = {};
                VD5I["playlist-update-name"] = {
                    id: j0x.id,
                    name: j0x.name
                };
                VD5I["playlist-update-tag"] = {
                    id: j0x.id,
                    tags: j0x.tags.join(";")
                };
                VD5I["playlist-update-desc"] = {
                    id: j0x.id,
                    desc: j0x.description
                };
                e0x.data = VD5I;
                e0x.ext = j0x
            },
            format: function(T0x, pp5u, Nn2x, e0x) {
                if (T0x.code == 200 && pp5u.code == 200 && Nn2x.code == 200) {
                    e0x.ext.allSuccess = true;
                    m0x.Z0x.N0x({
                        tip: "保存成功"
                    })
                } else if (T0x.code == 407 || pp5u.code == 407 || Nn2x.code == 407) {
                    e0x.ext.allSuccess = false;
                    m0x.Z0x.N0x({
                        type: 2,
                        tip: "输入内容包含关键字"
                    })
                } else {
                    e0x.ext.allSuccess = false;
                    m0x.Z0x.N0x({
                        type: 2,
                        tip: "保存失败"
                    })
                }
                return this.ec2x(e0x.ext.id)
            },
            finaly: function(d0x, e0x) {
                h0x.A0x(p0x.hd2x, "listchange", d0x)
            },
            onmessage: function(ct1x) {
                m0x.Z0x.N0x({
                    type: 2,
                    tip: "保存失败"
                })
            }
        },
        "playlist-update-name": {
            url: "/api/playlist/update/name",
            format: function(R0x, e0x) {
                var r0x = this.ec2x(e0x.ext.id);
                if (R0x.code == 200) r0x.name = e0x.ext.name;
                return R0x
            }
        },
        "playlist-update-tag": {
            url: "/api/playlist/tags/update",
            format: function(R0x, e0x) {
                var r0x = this.ec2x(e0x.ext.id);
                if (R0x.code == 200) r0x.tags = e0x.ext.tags;
                return R0x
            }
        },
        "playlist-update-desc": {
            url: "/api/playlist/desc/update",
            format: function(R0x, e0x) {
                var r0x = this.ec2x(e0x.ext.id);
                if (R0x.code == 200) r0x.description = e0x.ext.description;
                return R0x
            }
        },
        "playlist-update-cover": {
            url: "/api/playlist/cover/update",
            filter: function(e0x) {
                e0x.url = e0x.data.url;
                delete e0x.data.url
            },
            format: function(R0x, e0x) {
                m0x.Z0x.N0x({
                    tip: "保存成功"
                });
                var r0x = this.ec2x(e0x.data.id);
                r0x.coverImgUrl = e0x.url;
                e0x.ext = r0x;
                return r0x
            },
            onmessage: function(ct1x) {
                m0x.Z0x.N0x({
                    type: 2,
                    tip: "保存失败"
                })
            },
            finaly: function(d0x, e0x) {
                h0x.A0x(p0x.hd2x, "itemchange", {
                    attr: "coverImgUrl",
                    data: e0x.ext
                })
            }
        },
        "playlist-upcount": {
            url: "/api/playlist/update/playcount",
            type: "GET",
            format: function(R0x, e0x) {
                var iH4L = this.ec2x(e0x.data.id);
                if (!iH4L) return;
                iH4L.playCount++;
                h0x.A0x(p0x.hd2x, "itemchange", {
                    attr: "playcount",
                    data: iH4L
                })
            }
        }
    });
    p0x.hd2x = NEJ.C();
    b0x = p0x.hd2x.O0x(p0x.gT2x);
    b0x.cl1x = function() {
        this.cr1x()
    };
    b0x.bsP1x = function() {
        var cR1x = GUser.userId;
        this.nv5A({
            limit: 1001,
            key: "playlist_my-" + cR1x,
            data: {
                offset: 0,
                limit: 1001,
                uid: cR1x
            }
        })
    };
    b0x.col0x = function(i0x) {
        var cR1x = GUser.userId,
            iQ4U = [],
            btd1x = [];
        k0x.be0x(i0x, function(r0x) {
            r0x.typeFlag = "playlist";
            if (r0x.creator && r0x.creator.userId == cR1x) {
                if (r0x.specialType == 5) r0x.name = "我喜欢的音乐";
                r0x.isHost = !0;
                iQ4U.push(r0x)
            } else {
                btd1x.push(r0x)
            }
        });
        this.rA6u("playlist_new-" + cR1x, iQ4U);
        this.rA6u("playlist_fav-" + cR1x, btd1x)
    };
    b0x.coj0x = function(j0x) {
        this.cj1x("playlist-update-cover", {
            data: j0x
        })
    };
    b0x.crC1x = function() {
        var Nu2x = this.cog0x.w0x("host-plist");
        if (Nu2x.length == 0) {
            return
        }
        if (Nu2x.length == 1 && Nu2x[0].trackCount <= 0) {
            return
        }
        for (var i = 0, len = Nu2x.length; i < len; i++) {
            var r0x = Nu2x[i];
            if (r0x.trackCount > 0) return r0x.id
        }
        return this.cog0x.w0x("host-plist")[0].id
    };
    b0x.cof0x = function(C0x) {
        if (GUser && GUser.userId > 0) {
            this.cj1x("playlist-upcount", {
                data: {
                    id: C0x
                }
            })
        }
    };
    b0x.Ck9b = function() {
        if (GUser && GUser.userId > 0) {
            return !0
        } else {
            top.login();
            return !1
        }
    };
    b0x.crD1x = function() {
        return GUser.userId
    };
    b0x.bfx8p = function(r0x) {
        if (r0x.userId == GUser.userId && r0x.specialType == 5) r0x.name = "我喜欢的音乐";
        h0x.A0x(this.constructor, "itemchange", {
            data: this.zT8L(r0x)
        });
        return r0x
    };
    H0x.ft2x.B0x({
        element: p0x.hd2x,
        event: ["listchange", "playcountchange", "itemchange"]
    })
})();
(function() {
    var c0x = NEJ.P,
        fb2x = NEJ.R,
        bm0x = NEJ.F,
        Y0x = NEJ.O,
        H0x = c0x("nej.ut"),
        h0x = c0x("nej.v"),
        k0x = c0x("nej.u"),
        l0x = c0x("nm.x"),
        p0x = c0x("nm.d"),
        m0x = c0x("nm.l"),
        b0x, K0x;
    p0x.eM2x({
        "program-get": {
            url: "/api/dj/program/detail",
            format: function(R0x) {
                return R0x.program
            }
        },
        "program_djradio-list": {
            type: "GET",
            url: "/api/dj/program/byradio",
            filter: function(e0x) {
                e0x.data.limit = 1e3;
                delete e0x.data.id
            },
            format: function(R0x, e0x) {
                var bui1x = [],
                    zx8p = R0x.programs;
                if (zx8p) {
                    for (var i = 0, l = zx8p.length; i < l; i++) {
                        if (zx8p[i].programFeeType < 10 || zx8p[i].buyed) {
                            bui1x.push(zx8p[i])
                        }
                    }
                }
                return bui1x
            }
        },
        "program_fav-list": {
            url: "/api/djprogram/subscribed/paged",
            format: function(R0x, e0x) {
                return R0x.programs
            },
            onerror: "onlisterror"
        },
        "program_fav-add": {
            url: "/api/djprogram/subscribe",
            filter: function(e0x) {
                e0x.ext = e0x.data;
                e0x.data = {
                    id: e0x.ext.id
                };
                e0x.id = e0x.data.id
            },
            format: function(R0x, e0x) {
                m0x.Z0x.N0x({
                    tip: "收藏成功"
                });
                var r0x = e0x.ext;
                r0x.subscribedCount++;
                r0x.subscribed = !0;
                return r0x
            },
            finaly: function(d0x, e0x) {
                h0x.A0x(p0x.pi5n, "listchange", d0x)
            },
            onmessage: function() {
                var kZ4d = {
                    404: "节目不存在！",
                    501: "节目已收藏！"
                };
                return function(ct1x) {
                    m0x.Z0x.N0x({
                        type: 2,
                        tip: kZ4d[ct1x] || "收藏失败！"
                    })
                }
            }()
        },
        "program_fav-del": {
            url: "/api/djprogram/unsubscribe",
            finaly: function(d0x, e0x) {
                h0x.A0x(p0x.pi5n, "listchange", d0x)
            },
            onmessage: function() {
                var kZ4d = {
                    404: "节目不存在！",
                    502: "没有收藏此节目！"
                };
                return function(ct1x) {
                    l0x.bfv8n({
                        txt: kZ4d[ct1x] || "取消收藏失败！"
                    })
                }
            }()
        },
        "program-update-count": {
            type: "GET",
            url: "/api/dj/program/listen",
            filter: function(e0x) {
                var r0x = this.ec2x(e0x.data.id) || Y0x;
                e0x.ext = (r0x.listenerCount || 0) + 1
            },
            format: function(R0x, e0x) {
                var r0x = this.ec2x(e0x.data.id);
                if ( !! r0x) {
                    r0x.listenerCount = Math.max(e0x.ext, r0x.listenerCount || 0)
                }
            },
            finaly: function(d0x, e0x) {
                h0x.A0x(p0x.pi5n, "itemchange", {
                    attr: "playCount",
                    data: this.ec2x(e0x.data.id)
                })
            }
        },
        "program-like": {
            url: "/api/resource/like",
            filter: function(e0x) {
                e0x.data = {
                    threadId: "A_DJ_1_" + e0x.id
                }
            },
            format: function(R0x, e0x) {
                var r0x = e0x.ext.data || this.ec2x(e0x.id);
                r0x.liked = true;
                r0x.likedCount++;
                e0x.ext.data = r0x;
                try {
                    top.player.setLike(r0x)
                } catch (e) {}
                return r0x
            },
            finaly: function(d0x, e0x) {
                h0x.A0x(p0x.pi5n, "itemchange", {
                    attr: "likedCount",
                    data: e0x.ext.data
                })
            }
        },
        "program-unlike": {
            url: "/api/resource/unlike",
            filter: function(e0x) {
                e0x.data = {
                    threadId: "A_DJ_1_" + e0x.id
                }
            },
            format: function(R0x, e0x) {
                var r0x = e0x.ext.data || this.ec2x(e0x.id);
                r0x.liked = false;
                r0x.likedCount--;
                e0x.ext.data = r0x;
                try {
                    top.player.setLike(r0x)
                } catch (e) {}
                return r0x
            },
            finaly: function(d0x, e0x) {
                h0x.A0x(p0x.pi5n, "itemchange", {
                    attr: "likedCount",
                    data: e0x.ext.data
                })
            }
        }
    });
    p0x.pi5n = NEJ.C();
    b0x = p0x.pi5n.O0x(p0x.gT2x);
    b0x.crE1x = function() {
        var cR1x = GUser.userId;
        this.nv5A({
            limit: 1001,
            key: "program_fav-" + cR1x,
            data: {
                offset: 0,
                limit: 1e3,
                uid: cR1x
            }
        })
    };
    b0x.crF1x = function(cS1x) {
        var ou5z = cS1x[this.ub7U];
        l0x.coa0x(4, function(Q0x) {
            Q0x.rA6u("track_program-" + ou5z, cS1x.songs)
        });
        delete cS1x.songs;
        var bJ0x = cS1x.mainSong;
        l0x.coa0x(4, function(Q0x) {
            Q0x.rA6u("track_program_main-" + ou5z, !bJ0x ? [] : [bJ0x])
        });
        cS1x.mainSong = (bJ0x || Y0x).id
    };
    b0x.crG1x = function(C0x) {
        var cS1x = this.ec2x(C0x),
            cR1x = localCache.Wm5r("host.profile.userId");
        return !!cS1x && cS1x.dj.userId == cR1x
    };
    b0x.crH1x = function(C0x) {
        return !1
    };
    b0x.bfx8p = function(r0x) {
        h0x.A0x(this.constructor, "itemchange", {
            attr: "detail",
            data: this.zT8L(r0x)
        });
        return r0x
    };
    b0x.cof0x = function(C0x) {
        this.cj1x("program-update-count", {
            data: {
                id: C0x
            }
        })
    };
    l0x.bvJ1x = function(e0x) {
        var Q0x = p0x.pi5n.B0x({
            onitemadd: function() {
                (e0x.onsuccess || bm0x)()
            },
            onerror: function() {
                (e0x.onerror || bm0x)()
            }
        });
        if (e0x.data.liked) {
            Q0x.NV2x(e0x.data)
        } else {
            Q0x.uL7E(e0x.data)
        }
    };
    b0x.uL7E = function(cS1x) {
        if (!l0x.gQ2x()) return;
        var cn1x = {
            ext: {}
        };
        if (k0x.ke4i(cS1x)) {
            cn1x.id = cS1x.id;
            cn1x.ext.data = cS1x
        } else {
            cn1x.id = cS1x
        }
        this.cj1x("program-like", cn1x)
    };
    b0x.NV2x = function(cS1x) {
        if (!l0x.gQ2x()) return;
        var cn1x = {
            ext: {}
        };
        if (k0x.ke4i(cS1x)) {
            cn1x.id = cS1x.id;
            cn1x.ext.data = cS1x
        } else {
            cn1x.id = cS1x
        }
        this.cj1x("program-unlike", cn1x)
    };
    H0x.ft2x.B0x({
        element: p0x.pi5n,
        event: ["listchange", "itemchange"]
    })
})();
(function() {
    var c0x = NEJ.P,
        bm0x = NEJ.F,
        fb2x = NEJ.R,
        H0x = c0x("nej.ut"),
        k0x = c0x("nej.u"),
        h0x = c0x("nej.v"),
        v0x = c0x("nej.j"),
        p0x = c0x("nm.d"),
        m0x = c0x("nm.l"),
        l0x = c0x("nm.x"),
        J0x = "playlist-tracks_",
        l0x = c0x("nm.x"),
        b0x;
    p0x.eM2x({
        "track-get": {
            url: "/api/v3/song/detail",
            filter: function(e0x) {
                e0x.data.c = JSON.stringify([{
                    id: e0x.data.id
                }])
            },
            format: function(R0x, e0x) {
                var bf0x = l0x.Cg9X(R0x.songs[0]);
                bf0x.privilege = R0x.privileges[0];
                return bf0x
            }
        },
        "track_playlist-list": {
            url: "/api/v3/playlist/detail",
            filter: function(e0x) {
                e0x.data.n = 1e3
            },
            format: function(R0x, e0x) {
                var gx2x = [];
                this.rC6w.bfx8p(R0x.playlist);
                k0x.be0x(R0x.playlist.tracks, function(bJ0x, s0x) {
                    var bwh1x = l0x.Cg9X(bJ0x);
                    bwh1x.privilege = R0x.privileges[s0x];
                    gx2x.push(bwh1x)
                }, this);
                return gx2x
            }
        },
        "track_album-list": {
            url: "/api/v1/album/{id}",
            format: function(R0x, e0x) {
                var gx2x = [];
                k0x.be0x(R0x.songs, function(bf0x) {
                    gx2x.push(l0x.Cg9X(bf0x))
                });
                return gx2x
            }
        },
        "track_playlist-add": {
            url: "/api/playlist/manipulate/tracks",
            filter: function(e0x) {
                var bv0x = {},
                    j0x = e0x.data,
                    cnX0x = this.gK2x(e0x.key) || [];
                Cf9W = [];
                k0x.be0x(cnX0x, function(bJ0x) {
                    var C0x = k0x.ke4i(bJ0x) ? bJ0x.id : bJ0x;
                    bv0x[C0x] = true
                });
                e0x.ext = [];
                k0x.be0x(j0x.tracks, function(bJ0x) {
                    var C0x = k0x.ke4i(bJ0x) ? bJ0x.id : bJ0x;
                    if (!bv0x[C0x]) {
                        Cf9W.push(C0x);
                        bv0x[C0x] = true;
                        e0x.ext.push(bJ0x)
                    }
                });
                j0x.trackIds = JSON.stringify(Cf9W);
                j0x.op = "add";
                if (!Cf9W.length) {
                    e0x.value = {
                        code: 502
                    }
                }
            },
            format: function(R0x, e0x) {
                m0x.Z0x.N0x({
                    tip: "已添加至歌单"
                });
                var iH4L = this.rC6w.ec2x(e0x.data.pid);
                if ( !! R0x.coverImgUrl) iH4L.coverImgUrl = R0x.coverImgUrl;
                k0x.lU4Y(e0x.ext, function(bJ0x) {
                    this.wj7c(e0x, k0x.ke4i(bJ0x) ? bJ0x : null);
                    if ( !! iH4L) iH4L.trackCount++
                }, this);
                h0x.A0x(p0x.hd2x, "itemchange", {
                    data: iH4L || {},
                    cmd: "add"
                });
                this.A0x("onaddsuccess");
                return null
            },
            finaly: function(d0x, e0x) {
                h0x.A0x(p0x.uF7y, "listchange", {
                    key: e0x.key,
                    action: "refresh"
                });
                var ou5z = e0x.data.pid,
                    cu1x = this.jx4B(e0x.key)
            },
            onmessage: function() {
                var kZ4d = {
                    502: "歌曲已存在！",
                    505: "歌单已满！"
                };
                return function(ct1x) {
                    setTimeout(function() {
                        m0x.Z0x.N0x({
                            tip: kZ4d[ct1x] || "添加失败，请稍后再试！",
                            type: 2
                        })
                    }, 0)
                }
            }()
        },
        "track_playlist-del": {
            url: "/api/playlist/manipulate/tracks",
            filter: function(e0x) {
                var j0x = e0x.data;
                e0x.ext = j0x.trackIds;
                j0x.trackIds = JSON.stringify(j0x.trackIds);
                j0x.op = "del"
            },
            format: function(R0x, e0x) {
                var iH4L = this.rC6w.ec2x(e0x.data.pid);
                k0x.be0x(e0x.ext, function(C0x) {
                    this.bgO8G({
                        id: C0x,
                        key: "track_playlist-" + e0x.data.pid
                    }, !0);
                    if ( !! iH4L) iH4L.trackCount = Math.max(0, iH4L.trackCount - 1)
                }, this);
                h0x.A0x(p0x.hd2x, "itemchange", {
                    data: iH4L || {},
                    cmd: "del"
                });
                return null
            },
            finaly: function(d0x, e0x) {
                h0x.A0x(p0x.uF7y, "listchange", {
                    key: e0x.key,
                    action: "refresh"
                })
            },
            onmessage: function(ct1x) {
                l0x.bfv8n({
                    text: "歌曲删除失败！"
                })
            }
        },
        "track_program-list": {
            url: "/api/dj/program/detail",
            format: function(R0x, e0x) {
                return this.bwn1x.bfx8p(R0x.program).songs
            },
            onerror: "onlisterror"
        },
        "track_listen_record-list": {
            url: "/api/v1/play/record",
            format: function(R0x, e0x) {
                var i0x = [];
                if (e0x.data.type == -1) {
                    if (R0x.weekData && R0x.weekData.length) {
                        e0x.data.type = 1
                    } else {
                        e0x.data.type = 0
                    }
                }
                if (e0x.data.type == 1) {
                    i0x = this.bwt1x(R0x.weekData)
                } else {
                    i0x = this.bwt1x(R0x.allData)
                }
                return i0x
            },
            onerror: "onlisterror"
        },
        "track_day-list": {
            url: "/api/v2/discovery/recommend/songs",
            format: function(R0x) {
                var mt5y = [];
                k0x.be0x(R0x.recommend, function(bf0x, s0x) {
                    mt5y.push({
                        action: "recommendimpress",
                        json: {
                            alg: bf0x.alg,
                            scene: "user-song",
                            position: s0x,
                            id: bf0x.id
                        }
                    })
                });
                this.ks4w.VQ5V(mt5y);
                return R0x.recommend
            },
            onerror: "onlisterror"
        },
        "track_lyric-get": {
            type: "GET",
            url: "/api/song/lyric",
            filter: function(e0x) {
                e0x.data.lv = 0;
                e0x.data.tv = 0
            },
            format: function(n0x, e0x) {
                return n0x
            },
            onload: "onlyricload",
            onerror: "onlyricerror"
        }
    });
    p0x.uF7y = NEJ.C();
    b0x = p0x.uF7y.O0x(p0x.gT2x);
    b0x.cl1x = function() {
        this.cr1x();
        this.rC6w = p0x.hd2x.B0x();
        this.bwn1x = p0x.pi5n.B0x();
        this.ks4w = p0x.hJ3x.B0x()
    };
    b0x.bwt1x = function(i0x) {
        var n0x = [],
            fY2x = 0;
        k0x.be0x(i0x, function(r0x, s0x) {
            var bf0x = l0x.Cg9X(r0x.song);
            if (s0x == 0) {
                fY2x = r0x.score
            }
            bf0x.max = fY2x;
            bf0x.playCount = r0x.playCount;
            bf0x.score = r0x.score;
            n0x.push(bf0x)
        });
        return n0x
    };
    H0x.ft2x.B0x({
        element: p0x.uF7y,
        event: ["listchange"]
    })
})();
(function() {
    function J() {
        var d = "6skV4PUYecGhx07l".split("");
        this.d = function(f) {
            if (null == f || void 0 == f) return f;
            if (0 != f.length % 2) throw Error("1100");
            for (var b = [], c = 0; c < f.length; c++) {
                0 == c % 2 && b.push("%");
                for (var g = d, a = 0; a < g.length; a++) if (f.charAt(c) == g[a]) {
                    b.push(a.toString(16));
                    break
                }
            }
            return decodeURIComponent(b.join(""))
        }
    }
    var k = (new J).d,
        d = (new J).d,
        e = (new J).d,
        f = (new J).d,
        g = (new J).d;
    (function() {
        var B = [e("44UsY4UP"), e("40UcU7UcUkUsYkP6UxYPUYUcU7"), d("U4UPUVUlU4UPPPPk4c4VUlU0Y6UlU7UPU7Y4"), f("47P6P6UxUsYcUPYkPVUeUPUxUx"), f("40PVk6PkUPUUUPYkUPU7UVUPk6PVUsU7YVk6PVUPYkUcUU"), e("4eUcYkUsUYUcU7Ulk6PVUsU7YVk64Y4k"), d("YVUPYkUcUU"), g("UYUPY44VUlU7Y4UPYeY4")],
            J = [g("YPU7UcUUUlYkU0VkUU")],
            b = [d(""), g("4YYkUsYcP4UPYeY4"), k("Y6UsYkUPU7Y4"), e("7Phchx7PcxeU"), k("Y6UxYPUYUcU7YV"), d("4sU4UlUkUP4PYe40UsU744UPY4UPUVY4"), e("V6V6VsV6"), d("4YUlUlUYUxUPk64PUsYkY4Uek6P6UxYPUYUcU7"), k("PUUPUPY4UxUPk6P4PUk64VUlYkUP"), f("V6V6V6VY"), f("V6V6V6V4"), d("V6V6V6Vk"), d("V6V6V6VV"), g("V6V6V6V6"), e("V6V6V6Vs"), g("PPU7UcY4Yck6P6UxUsYcUPYk"), d("PVUhYcY6UPk6PYUPUkk6P6UxYPUYUcU7"), d("PYUPUk4hUcY4k0UcU7Y4UPUYYkUcUPYkY4UPk6P6444U"), e("4kUPUxUxk640P4"), e("V6V6V6Ve"), g("UYUPY4PVYPY6Y6UlYkY4UPU44PYeY4UPU7YVUcUlU7YV"), d("YVUPY4P4UcU0UP"), e("V6V6V6Vc"), g("PVUsUUUPPVUPUsYkUVUe"), d("kk"), f("k4"), f("PPU7UcYUUPYkYV"), e("kP"), e("kU"), f("kY"), f("VsVsVsV6"), d("UYUPY4k6Y6UxYPUYUcU7k6YVY4YkUcU7UYk6UPYeUVUPY6Y4UcUlU7"), e("P4UeYkUPUP44PVUeUsU4UlYY"), g("kh"), f("kx"), d("k0"), f("4sYkUsUk"), g("7eehhc7Uc7cx74heh07YhheU7PG7eh"), d("k7"), g("4UPPPG4PPVUeUsYkUP"), g("kl"), d("V6"), k("Vs"), f("Vk"), e("VV"), e("V4"), e("74hhhl7PG7ehPl4Y4kVkVVVsVk"), g("VP"), f("VU"), e("4cU7UsUVY4UcYUUP4VUsY6Y4UcUlU7P4UPYeY4"), f("VY"), d("PY4P4kPG4P47k64kYkUlYYYVUPYkk64PYeY4UPU7YVUcUlU7"), f("Ve"), e("Vc"), g("VG"), g("44UcYUPek64kYkUlYYYVUPYkk6P6UxYPUYk04cU7"), k("Vh"), g("V0"), d("PPY6UxUsYck6P64V"), e("UVUsU7YUUsYVk6UPYeUVUPY6Y4UcUlU7"), f("4s"), k("4k"), g("4V"), g("44"), g("4P"), f("7Ph7G77eh0Gl7ccheP7chhcs"), e("4U"), k("4eUsYkYkUcU7UYY4UlU7"), f("4Y"), f("4e"), f("4c"), k("4G"), e("4YU7UlU0UPk6PVUeUPUxUxk64cU7Y4UPUYYkUsY4UcUlU7"), f("4h"), f("4x"), f("40"), e("47"), f("4l"), k("P6"), d("Ps"), k("Pk"), d("PV"), g("47UcUsUYUsYkUsk6PVUlUxUcU4"), g("P4"), e("PVUPUU4VUxUcUPU7Y4k6P6UxYPUYUcU7"), d("PP"), e("PU"), d("VsVsVsVs"), e("PY"), d("Pe"), g("Pc"), k("PG"), e("4YUlYPU4Yck64lUxU4k6PVY4YcUxUP"), k("Px"), g("PkUlUkUxUlYek64xUsYPU7UVUeUPYkk6P6UxYPUYUcU7"), d("40UcUVYkUlYVUlUUY4k64lUUUUUcUVUPk6VkV6VsVV"), f("PsPs40YPYVUcUV"), k("Us"), e("4PYPYkUlYVY4UcUxUP"), e("Uk"), k("YkU0UlUVYek7PkUPUsUxP6UxUsYcUPYkk64YVkk64VUlU7Y4YkUlUxk7Vs"), k("UV"), d("PVUVYkUcY6Y4UcU7UYk744UcUVY4UcUlU7UsYkYc"), f("U4"), f("74hhhl7PG7eh"), f("UP"), k("UU"), k("UY"), e("Ue"), d("40Usk04VUlU7UUUcUYk7UVUlU0k6Y6UxYPUYUcU7"), d("Uc"), g("VsV6VsV6"), d("4VUsYVYPUsUx"), d("UG"), e("Uh"), e("Ux"), d("U0"), g("U7"), e("Ul"), d("Y6"), k("VsV6V6Ve"), f("UVY4"), d("U4Ul47UlY4P4YkUsUVUh"), g("Ys"), d("YVUPY4P4UcU0UPUlYPY4"), f("74heh07PG7ehk6P6YkUl"), e("Yk"), k("4YUcYVUeUs"), k("UYUPY4P4UcU0UPYGUlU7UP4lUUUUYVUPY4"), g("YV"), d("VsV6V6VP"), g("VsV6V6V4"), k("Y4"), k("YP"), g("VsV6V6VV"), f("YU"), f("VsV6V6Vs"), d("YY"), e("Ye"), e("U4YkUsYY4sYkYkUsYcYV"), g("Yc"), e("YG"), f("Yh"), g("Y0"), k("Y7"), d("UUUlU7Y4"), g("VsV6V6Vc"), k("V0U7YPUxUxVhk6Y6UsY4UeV0klVhk6UPYeY6UcYkUPYVV0"), f("PVUeUPUxUxk7PP4c4eUPUxY6UPYk"), f("Y4Ul44UsY4UsPPPk4x"), f("PYUcU7U4UlYYP4UPYeY4"), e("UxUsU7UYYPUsUYUP"), g("U4Ul"), f("74heh07chhcsk6P6YkUl"), e("4eUcUYUeUxUcUYUeY4P4UPYeY4"), k("U4UcYU"), g("40UPU7YPP4UPYeY4"), e("4s4l4xk640UPU4UcUsk6P6UxUsYcUkUsUVUhk6P6UxYPUYUcU7"), f("4VUcY4YkUcYek6UlU7UxUcU7UPk6Y6UxYPUYk0UcU7"), f("UPUV"), f("44UPYVU4UPU0UlU7Us"), k("4cU7UsUVY4UcYUUP4kUlYkU4UPYk"), f("PkUPUsUxP6UxUsYcUPYk"), d("4e4P4x4x4l"), f("kxk6kYUVUlU4UPkYVG"), k("UPU0"), f("U7Y6P4UlU7UYUkYP4sU4U4UcU7"), e("UVYkUPUsY4UP4PUxUPU0UPU7Y4"), g("Y6UeUsU7Y4UlU0"), k("40PVk6P640UcU7UVUeUl"), d("7UGPhY74h0cV"), d("UPYUUsUx"), f("UPYe"), k("44UcYUPek6PU4l44k64eUPUxY6UPYkk6P6UxYPUYk0UcU7"), f("7UcUh67YhheU7Ucee774h0cV"), d("PsYPUcUVUhP4UcU0UP4VUeUPUVUh4lUkUGUPUVY4k7PsYPUcUVUhP4UcU0UP4VUeUPUVUhk7Vs"), k("4UUxYc4lYk44UcUPk64YUsU0UPYVk6P6UxYPUYUcU7"), e("UsY4Y4UsUVUePVUeUsU4UPYk"), e("P6UxUsYc4lU7k6P6UxYPUYk0UcU7"), f("UYUPY4P4UcU0UP"), e("Vsk7V6Vs"), e("4kYkUlUsU4YYUsYc"), k("UUY6"), e("4sUxUsYYUsYkk647P64sP64ck6YPY4UcUxYV"), d("4UUlYkY4UP"), g("UeUsYVUe4VUlU4UP"), e("7UcUhc7UG0GV7PGYcG74h0cV"), e("4PPV47k6PVUlU7UsYkk64sP64c"), k("4eP644UPY4UPUVY4"), e("4kUcY4U4UPUUUPU7U4UPYkk6PsYPUcUVUhPVUVUsU7"), k("4c4Pk6P4UsUkk6Y6UxYPUYUcU7"), g("kYkx"), k("4kYPY4Y4UlU74UUsUVUP"), e("UVY6YP4VUxUsYVYV"), g("4VUPU7Y4YPYkYck64YUlY4UeUcUV"), f("4lU7UxUcU7UPk6PVY4UlYkUsUYUPk6Y6UxYPUYk0UcU7"), k("PVUsUUUPYkk6PPY6U4UsY4UP"), d("40YVYeU0UxVkk7444l4044UlUVYPU0UPU7Y4"), d("4PU7UYYkUsYUUPYkYVk640P4"), d("PVUcUxYUUPYkUxUcUYUeY4k6P6UxYPUYk04cU7"), g("4YUlUlUYUxUPk64YUPUsYkYVk6V6k7VPk7VVVVk7V6"), g("4VUcY4YkUcYek64c4V4sk64VUxUcUPU7Y4"), d("UsUxY6UeUsUkUPY4UcUV"), k("PU44UlYYU7UxUlUsU4UPYk"), e("7Pe0e77UcUeY7UGPhY74h0cV"), f("UsY4Y4YkPUUPYkY4UPYe"), g("7PG7eh74h0cV"), f("UVUlUlUhUcUP"), g("kPVkVk"), k("kPVkVU"), g("4VUPU7Y4UsYPYk"), g("V4UYUsU0UP"), e("PkUlUVUhYYUPUxUx"), e("4xUlUY40UP4cU7k6P6UxYPUYUcU7k6Vsk7V6k7V6k7VcVUVs"), g("4lUVY4UlYVUeUsY6UPk6PVY4YkUPUsU0UcU7UYk6PVUPYkYUUcUVUPYV"), e("Y4Ul4Y40P4PVY4YkUcU7UY"), d("Y4UeV0kl"), d("PVYPU0UsY4YkUsP6444Uk64kYkUlYYYVUPYkk6P6UxYPUYUcU7"), k("P6444Uk7P6U4UU4VY4YkUx"), g("UUUcUxUxPVY4YcUxUP"), d("UGUP"), f("4sU4UlUkUPk640UcU7UYk6PVY4U4"), g("P4UlYkUVUe4eUPUxY6UPYk"), e("4UYkUsU7UhUxUcU7k64YUlY4UeUcUVk64eUPUsYUYc"), f("7Pe0e77UcUeY74hhhl7PG7eh"), g("4eUsYkU0UlU7Yck6P6UxYPUYk04cU7"), d("4YUcUYUc"), f("YUVsk7Vs"), g("4hUcU7Ulk640P4"), f("PVUcU04eUPUc"), k("4sUxUcPVPV4l4xUlUYUcU7k6Y6UxYPUYUcU7"), k("PkUPUsUxP6UxUsYcUPYkk7PkUPUsUxP6UxUsYcUPYkkeY4U0kck64sUVY4UcYUUPPek64VUlU7Y4YkUlUxk6keVVVkk0UkUcY4kc"), d("PcUsU7U4UPYek6P6444Uk6PUUcUPYYUPYk"), g("4VUcY4YkUcYek6PkUPUVUPUcYUUPYkk6P6UxYPUYk0UcU7"), g("U0UsUc"), g("Y4UlY6"), d("4sUVYkUlP6444Uk7P6444U"), g("UVUsU7YUUsYVk6UsY6Uck6UPYeUVUPY6Y4UcUlU7"), d("4cU7UsUVY4UcYUUP4VUsY6Y4UcUlU7"), g("40UPU7YP"), d("Y6YkUPUVUcYVUcUlU7k6U0UPU4UcYPU0Y6k6UUUxUlUsY4Vhk6YUUsYkYcUcU7UYk6YUUPUVVkk6YUUsYkYcUcU7P4UPYe4VUlUlYkU4UcU7UsY4UPVhk6YUUlUcU4k6U0UsUcU7kekck6Yhk6k6k6UYUxPl4UYkUsUY4VUlUxUlYkk6V0k6YUUPUVV4keYUUsYkYcUcU7P4UPYe4VUlUlYkU4UcU7UsY4UPkxk6V6kxk6VskcVhk6Y0"), g("PsPsVkV6VsVVk64UUcYkUPUUUlYek6P6UxYPUYUcU7"), f("4YUlUlUYUxUPk6PPY6U4UsY4UP"), k("7Pe0e77UcUeY7Ph0Gc74hGcs"), k("UP40YPYVUcUVP6UxYPUYUcU7k6444x40VU"), f("PYUPUkk64VUlU0Y6UlU7UPU7Y4YV"), e("4kUsUkYcUxUlU7k6P4UlUlUx4kUsYk"), g("4VUlUlYYUlU7k6PPY6U4UsY4UP"), k("4cU7UUUlP4UPYeY4"), f("YkU0UlUVYek7PkUPUsUxP6UxUsYcUPYkk64YVkk64VUlU7Y4YkUlUx"), d("Uc40UPYVUek6Y6UxYPUYUcU7"), e("PkUPUsUx44UlYYU7UxUlUsU4UPYkk6P6UxYPUYUcU7"), e("PVYcU0UsU7Y4UPUVk6P64h4ck64VUxUcUPU7Y4"), g("PlY6UeUsU7Y4UlU0"), g("4Y444xk64lUkUGUPUVY4k6PYUPUkk6P6UxYPUYk0UcU7k6VsVUk7V6V6"), d("YYUPUkUYUx"), k("7Pe0e77UcUeY7PG7eh74h0cV"), g("YVUVYkUPUPU7"), k("UkUlU4Yc"), f("P4Pk4c4s474Y4x4PPlPVP4Pk4cP6"), k("U7V0"), d("P4UxYYUY40UlU7Ul"), f("kYVGkY"), k("4xUlUY40UP4cU7k6P6UxYPUYUcU7k6Vsk7V6k7V6k7VcVVVP"), d("UUYPU7UVY4UcUlU7"), e("UVUlU7Y4UPYeY4k7UeUsYVUe4VUlU4UP"), k("4sYkUVUeUc4V4s44"), g("PU4PPkP44PPePlPV4e4s444PPk"), k("PPUkYPU7Y4YP"), d("4UUsUVUPUkUlUlUhk6P6UxYPUYUcU7"), e("4sUVY4UcYUUP4VUsY6Y4UcUlU7"), g("7YhheU7Ucee774h0cV"), k("40UsUxUYYPU7k64YUlY4UeUcUV"), e("47UPYYYVk64YUlY4UeUcUVk640P4"), e("4VUsY6Y4UcUlU7P4UPYeY4"), k("UsPGUkPcV6UVPeU4PYVsUPPUUUVkPPUYVVP4UeV4PVUcPkVPUGPsUhVUP6Ux4lVYU047U7Ve40Ul4xVcY64hYs4GYk4cYV4eY44YYP4UYU4PYY44Ye4VYc4kYG4s"), e("44UPUGUsPUYPk64x4Y4Vk6PVUsU7YVk640UlU7Ul"), k("4VUlY6Y6UPYkY6UxUsY4UPk64YUlY4UeUcUVk64xUcUYUeY4"), e("PVUPUYUlUPk6P6YkUcU7Y4"), g("PVUsYYUsYVU4UPUP"), d("4kUsYPUeUsYPYVk6VcVV"), f("4VUeUsUxUhU4YPYVY4UPYk"), g("4sUkUsU4Uck640P4k64VUlU7U4UPU7YVUPU4k64xUcUYUeY4"), f("4xYPUVUcU4Usk64kYkUcUYUeY4"), g("PYUcU4UPk64xUsY4UcU7"), g("UUUlU7Y4k6U4UPY4UPUVY4k6UPYkYkUlYk"), f("4hUlYGYPUhUsk64YUlY4UeUcUVk6P6YkVU47"), d("4eY4U0UxVPk6UxUlUVUsY4UcUlU7k6Y6YkUlYUUcU4UPYk"), f("44UcYUPek6P6UxYPYVk6PYUPUkk6P6UxUsYcUPYk"), f("PUUxUsU4UcU0UcYkk6PVUVYkUcY6Y4"), d("4UUcUxUPk644UlYYU7UxUlUsU4UPYkk6P6UxYPUYk0UcU7"), f("UlUk"), d("4sU4UlU4Ukk7PVY4YkUPUsU0"), d("40UPU7UxUl"), e("UVUsUxUxP6UeUsU7Y4UlU0"), k("PYUlUxUUYkUsU0k640UsY4UeUPU0UsY4UcUVUs"), e("4VUsY4UsUxUcU7Us4YYkUlYPY6k6PPY6U4UsY4UP"), k("4PYkUsYVk64kUlUxU4k64cP44V"), e("44UPYUUsUxPUPkPe4VY4YkUxk744UPYUUsUxPUPkPe4VY4YkUxk7Vs"), k("4GPV4PPVPV4c4l474c44k0PYPcPcPc"), g("7Pe0e77UcUeY7YhheU7chhcs"), k("UsU4U44kUPUeUsYUUcUlYk"), k("Y6Us"), k("4kUcY4YVY4YkUPUsU0k6PUUPYkUsk6PVUPYkUcUU"), d("keUUYPU7UVY4UcUlU7kekcYhYkUPY4YPYkU7k6VsVkVVVhY0kckekcVh"), d("Y6Uc"), d("P4UPU7UVUPU7Y4k64UP447k6Y6UxYPUYk0UcU7"), k("YkUPU0UlYUUP4VUeUcUxU4"), f("4UUlUxYek6VVk64kYkUlYYYVUPYkk6P6UxYPUYUcU7"), k("YPYVUPP6YkUlUYYkUsU0"), f("UeUlYVY4U7UsU0UP"), f("Y6UeUsU7Y4UlU0k7UcU7UGUPUVY44GYV"), f("PVUeUlUVUhYYUsYUUP4UUxUsYVUek7PVUeUlUVUhYYUsYUUP4UUxUsYVUe"), d("YkUYUkUskeVsV6Vkkxk6VkV6V4kxk6V6kxk6V6k7VYkc"), e("4sU4UkUxUlUVUhP6UxYPUYUcU7"), e("4kUsUVUhUYYkUlYPU7U4"), g("4sUY4VUlU7Y4YkUlUxk74sUY4VUlU7Y4YkUlUx"), e("P6UeUlY4Ul4VUPU7Y4UPYkP6UxYPUYUcU7Vsk7Vsk7Vkk7Vk"), g("4YYPU7UYPVUPUl"), e("YVV0"), d("U4UPUVUlU4UPPPPk4c"), g("7UcUhc7UG0GV7eeeck74h0cV"), d("7Pe0e77UcUeY7UcUh67cG0el"), d("VsVkVV"), g("YYUPUkUYUxk6UPYeUVUPY6Y4UcUlU7"), f("YkUP"), k("PY40P6UxUsYcUPYkk74l4VPe"), e("VYVkY6Ye"), f("4sY6Y6PYUlYkUhYVY6UsUVUP"), d("4eUcUYUeUxUcUYUeY4"), e("U4UlUVYPU0UPU7Y4"), d("PcUsU7U4UPYek640UPU4UcUsk6P6UxYPUYUcU7"), e("4PPV47k64xUsYPU7UVUek640UlYGUcUxUxUsk6P6UxYPUYUcU7"), d("VYV6Y6Yek6kY4sYkUcUsUxkY"), k("UcU7UGUPUVY44GYV"), g("4xUlU0Us"), d("4kUcY44VUlU0UPY44sUYUPU7Y4"), f("4VUsUxUcUkYkUc"), f("4kUlUlUhU0UsU7k64lUxU4k6PVY4YcUxUP"), d("YVUPYVYVUcUlU7PVY4UlYkUsUYUP"), f("PPY4UlY6UcUs"), k("UVUlU0Y6UcUxUPPVUeUsU4UPYk"), e("UPYVUVUsY6UP"), d("PVUVYkUlUxUxUkUsYk"), g("PYUcU7U4UlYY"), d("VsV4VYV4V4U4VcVPVVVeVVUVU4VVV6VYVP444sV4Vk4VVcVVUV44Us4sUPVYV4VUVP4V4U4sVPUU4VV64kVcVV4kVs"), d("7ccGhU74hcGU"), d("4hUsYVY6UPYkYVUhYck6P6UsYVYVYYUlYkU4k640UsU7UsUYUPYk"), e("40UcU7UY4xUcPPk04PYeY44k"), d("UYUPY4k6YVYcYVY4UPU0k6UVUlUxUlYkYVk6UPYeUVUPY6Y4UcUlU7"), d("PVUhYcY6UPk744UPY4UPUVY4UcUlU7"), k("4UUcUxUP4xUsUkk6Y6UxYPUYUcU7"), e("U7Y64sP64ck6P6UxYPUYUcU7"), g("U7UlY4PlUPYeUcYVY4PlUeUlYVY4"), e("VkU4"), d("4sUVY4UcYUUPPe4lUkUGUPUVY4"), k("44UlY4YPU0"), d("P6444Uk0Pe4VUeUsU7UYUPk6PUUcUPYYUPYk"), d("P640UcU7UY4xUcPP"), k("UVUlUxUlYk44UPY6Y4Ue")],
            c = [f("47UlUhUcUsk6PVYPUcY4UPk64PU7UsUkUxUPYkk6P6UxYPUYUcU7"), k("PkUPUsUxPUUcU4UPUlk7PkUPUsUxPUUcU4UPUlkeY4U0kck64sUVY4UcYUUPPek64VUlU7Y4YkUlUxk6keVVVkk0UkUcY4kc"), k("40UsUYU7UPY4Ul"), e("4sU4UlUkUP4PYe40UsU74V4V44UPY4UPUVY4"), f("4YUsUkYkUcUlUxUs"), k("P6UxUsYcUkUcUxUx"), e("U7UsYUUcUYUsY4UlYk"), g("PkUsUVUeUsU7Us"), e("P4YYk64VUPU7k640P4k64VUlU7U4UPU7YVUPU4k64PYeY4YkUsk64kUlUxU4"), e("PsPs40UcU7Uc444xk6P6UxYPUYUcU7"), f("kVUUVUV6"), f("UUUcUxUxPkUPUVY4"), e("V0U7YPUxUxVhk6Y6UsY4UeV0klVhk6U4UlU0UsUcU7V0"), d("44UPUUUsYPUxY4k64kYkUlYYYVUPYkk64eUPUxY6UPYk"), d("4UYkUPU7UVUek6PVUVYkUcY6Y4k640P4"), g("7UG6eY7UGPhY74h0cV"), g("UPU7UVUlU4UPPPPk4c"), e("PPU0Y6YPYVUe"), k("UcUVY6"), f("7Pe0e77UcUeY7Yc6GP7Yele6"), k("UVYkUPUsY4UPP6YkUlUYYkUsU0"), g("U0UlU7UlYVY6UsUVUP"), k("4kYPY4Y4UlU7PVUeUsU4UlYY"), k("4kUlU4UlU7Uck640P4"), g("PVP44sP44c4VPl44Pk4sPY"), e("7chhcs74h0cV"), k("U4UlYYU7UxUlUsU4PPY6U4UsY4UPYk"), k("4sUxUcUPU4UcY4k6P6UxYPUYk04cU7"), d("P6444Uk6UcU7Y4UPUYYkUsU4Ulk6U4Ulk6PYUPUk4hUcY4"), k("YPU7UcUUUlYkU04lUUUUYVUPY4"), k("UPU7UVUlU4UPPPPk4c4VUlU0Y6UlU7UPU7Y4"), f("P6UcUVUsYVUs"), f("4sU4UlUkUPk64UUsU7UYYVUlU7UYk6PVY4U4"), k("UkUcU7U44kYPUUUUUPYk"), g("4sPU4Yk6PVUcY4UPPVUsUUUPY4Yck6Y6UxYPUYUcU7"), f("4lYkUkUcY4k644UlYYU7UxUlUsU4UPYk"), d("UVUlUxUlYk"), f("UeUcU4U4UPU7"), f("UxUlUVUsUxPVY4UlYkUsUYUP"), e("4YUlUlUYUxUPk6P4UsUxUhk64PUUUUUPUVY4YVk6P6UxYPUYUcU7"), d("UcU7U4UPYeUPU4444k"), g("4xYPUVUcU4Usk64UUsYe"), g("4sU0UsYGUlU740P6VV44UlYYU7UxUlUsU4UPYkP6UxYPUYUcU7"), k("UVYkUPUsY4UP4kYPUUUUUPYk"), f("4VUsYVY4UPUxUxUsYk"), k("UxUcU7UhP6YkUlUYYkUsU0"), f("4VUsUxUcUUUlYkU7UcUsU7k64U4k"), f("P4UeYkUPUP444eUcUYUeUxUcUYUeY4"), g("UVYkUPUsY4UPPVUeUsU4UPYk"), f("4YYPUxUcU0"), f("47YcYe4xUsYPU7UVUeUPYk"), d("PcUlYPP4YPUkUPk6P6UxYPUYk0UcU7"), e("7UGPhY74h0cVPl4Y4kVkVVVsVk"), g("PVPY4VY4Uxk7PVPY4VY4Ux"), f("4YUlUlUYUxUPk64PUsYkY4Uek6P6UxYPUYk0UcU7"), k("PsPs44UlYYU7UxUlUsU4k6P6UxYPUYUcU7"), k("k7U0YPYVUcUVk7VsVUVVk7UVUlU0Vhk7UcUYUsU0UPk7VsVUVVk7UVUlU0Vhk7U0YPYVUcUVk7UeYGk7U7UPY4UPUsYVUPk7UVUlU0"), k("47UlYkY4UlU7k64cU4UPU7Y4UcY4Yck6PVUsUUUP"), d("Y6UsYkYVUP4cU7Y4"), f("PVUcU0Y6UxUPk6P6UsYVYV"), d("4VUlUxUlU7U7Usk640P4"), k("YGUsUhUl"), k("UYUPY4PPU7UcUUUlYkU04xUlUVUsY4UcUlU7"), e("YVUeUsU4UPYkPVUlYPYkUVUP"), d("44UlYYU7UxUlUsU4UPYkYVk6Y6UxYPUYUcU7"), f("UxUlUVUsY4UcUlU7"), f("4eUPYkUlUPYVk6kUk64YUPU7UPYkUsUxYVk6UxUcYUUP"), g("YYUcU7U4UlYY"), g("PVUeUlYYUVUsYkU4k64YUlY4UeUcUV"), d("7Ph7G77eh0Gl7UG0GV7chhcs74h0cV"), e("7Pe0e77UcUeY7eGsex7UGPhY"), d("4YUcU7UYUPYk"), g("PkUlUVUh40UPUxY4k6PPY6U4UsY4UP"), f("PYUcU7U4UlYY4UYkUsU0UP"), g("UPU7UsUkUxUPPUUPYkY4UPYe4sY4Y4YkUcUk4sYkYkUsYc"), k("4hUsUVYVY44lU7UP"), d("UsY4Y4YkUcUkYPY4UPk6YUUPUVVkk6UsY4Y4YkPUUPYkY4UPYeVhk6YUUsYkYcUcU7UYk6YUUPUVVkk6YUUsYkYcUcU7P4UPYe4VUlUlYkU4UcU7UsY4UPVhk6YPU7UcUUUlYkU0k6YUUPUVVkk6YPU7UcUUUlYkU04lUUUUYVUPY4Vhk6YUUlUcU4k6U0UsUcU7kekck6Yhk6k6k6YUUsYkYcUcU7P4UPYe4VUlUlYkU4UcU7UsY4UPk6V0k6UsY4Y4YkPUUPYkY4UPYek6khk6YPU7UcUUUlYkU04lUUUUYVUPY4Vhk6k6k6UYUxPlP6UlYVUcY4UcUlU7k6V0k6YUUPUVV4keUsY4Y4YkPUUPYkY4UPYekxk6V6kxk6VskcVhk6Y0"), f("P6UPYkY6UPY4YPUs"), k("UlY6UPU744UsY4UsUkUsYVUP"), f("UVUsU7YUUsYV"), d("Uc4YUPY4Y4UPYkPVUVYkUcY6Y4UsUkUxUPP6UxYPUYUcU7"), d("4cU7UUUlYkU0UsUxk6PkUlU0UsU7"), k("47UcY4YkUlk6P6444Uk6P6UxYPUYk04cU7"), g("40YVYeU0UxVkk7Pe404x4eP4P4P6"), e("7Pe0e77UcUeY7chhcs74h0cV"), f("47P64xUsYVY4P6UsYVYV"), d("P4UeYkUPUP444UUsUVUP"), f("4xUsYVY4P6UsYVYV"), f("VGVG"), k("Y6UsYkYVUP4UUxUlUsY4"), k("7Pe0e77UcUeY7ccGhU74hcGU"), d("Vhk6"), g("UYUPY44sY4Y4YkUcUk4xUlUVUsY4UcUlU7"), f("YhkYU7UsU0UPkYVG"), e("47YcUsUxUs"), f("U7UlY4PlUPYeUcYVY4PlUeUlYVY4U7UsU0UP"), f("PxkY"), g("4Y4U4s4V4Pk6P6UxYPUYUcU7"), k("YPU7U4UPUUUcU7UPU4"), d("7UcUh67PG7eh74h0cV"), g("PlUcYPYsYeUxU4U0YGYkPl"), e("Pxk7"), f("40UsY4YPYkUsk640P4k6PVUVYkUcY6Y4k64VUsY6UcY4UsUxYV"), e("4sYkUcUsUxk64kUxUsUVUh"), e("4UUsU7UYPVUlU7UY"), d("U0YY4Vk6U7UhUkUsUUUGUlYkU4k6Y6UeYVUYUxYck6UPYeYUY4k6YGYsUcYPkxk67sh0G6k6Y4Y6UeYVY4klVGklYPUeUkUYY4UcUVk7U0UlklUxUPYUYUUs"), d("4kYkUsUYUYUsU4UlUVUcUl"), f("4eUsYkU0UlU7Yck64UUcYkUPUUUlYek6P6UxYPUYUcU7"), f("P6UsUxUsUVUPk6PVUVYkUcY6Y4k640P4"), g("47UsY4UcYUUPk64VUxUcUPU7Y4"), e("YPYVUPYk4sUYUPU7Y4"), g("PsYPUcUVUhP4UcU0UPk7PsYPUcUVUhP4UcU0UP"), k("UPYeY6UPYkUcU0UPU7Y4UsUxk0YYUPUkUYUx"), f("4sPkPk4sPcPl4kPP4U4U4PPk"), f("7eehhc7Uc7cx74heh074heG07chhcs"), d("4sUxUcY6UsYck6PVUPUVYPYkUcY4Yck64VUlU7Y4YkUlUxk6VV"), d("PVUVYkUcY6Y4k640P4k64kUlUxU4"), e("kxk6kYUkYkUlYYYVUPYkP6YkUlY6kYVG"), g("P4444V4VY4Uxk7P4444V4VY4Ux"), k("YVUPUxUU"), f("4cU7UUUl4kUsUVUhUYYkUlYPU7U4"), g("P6UsU7U4Ulk6PYUPUkk6P6UxYPUYUcU7"), e("4eUsUPY4Y4UPU7YVUVUeYYUPUcUxUPYk"), d("YVY6UsU7"), g("4sUVY4UcYUUP4kUlYkU4UPYk"), k("P4UeYkUPUP444xUcUYUeY4PVUeUsU4UlYY"), g("V6VkV6Vk"), f("V6VkV6VV"), e("V6VkV6V6"), d("V6VkV6Vs"), d("PYP64ck644UPY4UPUVY4UlYkk6Vsk7V4"), g("Vhk6UPYeY6UcYkUPYVV0"), d("P4UeYkUPUP4444UsYkUhPVUeUsU4UlYY"), g("4PYeUcUUk64PYUUPYkYcYYUeUPYkUP"), d("4kUsY4Y4UxUPUxUlUYk64YUsU0UPk64xUsYPU7UVUeUPYk"), g("4cU0Y6UsUVY4"), k("PU4x4Vk640YPUxY4UcU0UPU4UcUsk6P6UxYPUYUcU7"), d("4sU4UlUkUPk64eUPUkYkUPYY"), e("4kUxYPUPPVY4UsUVUhYVk64cU7YVY4UsUxUxk644UPY4UPUVY4UlYk"), d("YYYYYYU0U0U0U0U0U0U0U0U0U0UxUxUc"), d("UeUcYVY4UlYkYc"), g("YVUsU7YVk0YVUPYkUcUU"), g("P6UsY6YcYkYPYV"), d("4kYPY4Y4UlU7P4UPYeY4"), k("V6VkVsVs"), f("4sY6Y6PPY6"), g("P6UsYkUlU0k7P4PUk6Y6UxUsYcUPYkk6Y6UxYPUYUcU7"), k("44UPUsUxP6UxYc4xUcYUUPk6PPY6U4UsY4UP"), f("4xUlUeUcY4k64YYPUGUsYkUsY4Uc"), d("4UPk4s4Y404P47P4PlPV4e4s444PPk"), d("4sUYUPU7UVYck64U4k"), e("40UsUVYkUlU0UPU4UcUs4UUxUsYVUeP6UsY6UPYkk740UsUVYkUlU0UPU4UcUs4UUxUsYVUeP6UsY6UPYk"), d("kVkVkV"), f("PYUlYkU44VUsY6Y4YPYkUPPe"), k("UYUPY44VUlU0Y6YPY4UPU4PVY4YcUxUP"), e("Y6UxUsY4UUUlYkU0"), e("V6VsV6VP"), g("4sYkUsUkUcUVk6P4YcY6UPYVUPY4Y4UcU7UY"), e("V6VsV6VU"), e("V6VsV6VV"), d("7Pe0e77UcUeY74heG07PG7eh"), g("V6VsV6V4"), f("V6VsV6Vs"), g("V6VsV6Vk"), f("V6VsV6V6"), k("V6VsV6VY"), k("4kYPY4Y4UlU74eUcUYUeUxUcUYUeY4"), k("YUUPYkY4UPYe4sY4Y4YkUcUkP6UlUcU7Y4UPYk"), e("V6VsV6Ve"), k("Y4UPYeY44kUsYVUPUxUcU7UP"), e("kVV6VUVc"), f("U4UlYPUkUxUPP4YYUcYVY4k6PYUPUkk6P6UxYPUYUcU7"), g("YPU7UPYVUVUsY6UP"), g("P4UeYPU7U4UPYkk644UsY64VY4YkUxk647P64sP64ck6P6UxYPUYUcU7"), d("4kUsY4UsU7UY"), d("444U4hUsUck0PV4k"), g("PVU7UsY6k64cP44V")],
            Ja = [e("40UlUlUx4kUlYkUsU7")];
        (function() {
            var a = [82, 73, 50, 30, 45, 29, 28, 16, 82, 41, 77, 5, 27, 92, 27, 0, 2, 1423857449, -2, 3, -3, 3432918353, 1555261956, 4, 2847714899, -4, 5, -5, 2714866558, 1281953886, 6, -6, 198958881, 1141124467, 2970347812, -7, 7, 3110523913, 8, -8, 2428444049, -9, 9, 10, -10, 11, -11, 2563907772, 12, -12, 13, 2282248934, -13, 2154129355, -14, 14, 15, -15, 16, -16, 17, -17, 18, -18, 19, -19, 20, -20, 21, -21, -22, 22, 23, -23, 24, -24, -25, 25, -26, 26, 27, -27, 28, -28, 29, -29, -30, 30, 31, -31, -32, 32, -33, 33, -34, 34, -35, 35, -37, -36, 36, 37, -38, 39, -39, 38, -41, 41, 40, -40, 42, -43, 43, -42, -45, 45, -44, 44, -46, 47, 46, -47, 48, -48, 49, -49, 50, -51, 51, -50, 570562233, 53, -52, -53, 52, 55, 54, -54, -55, 503444072, -57, -56, 57, 56, 58, -59, -58, 59, 60, 61, -61, -60, 62, 63, -63, -62, -66, 711928724, 64, -67, 66, 65, -64, -65, 67, -69, 68, 69, 70, -70, -68, -71, 71, -72, 3686517206, -75, -74, 75, 73, 72, 74, -73, 79, 76, -76, 77, -79, -78, 78, -77, 3554079995, 82, -80, 80, -83, -82, 81, -81, 83, -85, -84, -86, 86, 84, 85, 87, -87, -91, 90, 88, 89, -88, -90, 91, -89, 95, 94, -92, -95, 93, -94, -93, 92, -99, 99, -96, 98, -97, -98, 96, 97, -101, 3272380065, 100, -103, 101, 102, -102, -100, 103, 107, -105, 104, 106, 105, -106, -104, -107, 111, 108, 110, 109, -108, -110, -109, -111, 251722036, -114, 115, 113, 112, 114, -115, -112, -113, -118, 118, -116, -119, 116, 117, -117, 119, 123, 120, 122, 121, -120, -122, -121, -123, 125, 127, 3412177804, 126, 124, -125, -126, -124, -127, -128, 128, -129, 1843258603, 3803740692, 984961486, 3939845945, 4195302755, 4066508878, 255, 1706088902, 256, 1969922972, 365, 2097651377, 376229701, 853044451, 752459403, 1e3, 426522225, 3772115230, 615818150, 3904427059, 4167216745, 4027552580, 3654703836, 1886057615, 879679996, 3518719985, 3244367275, 2013776290, 3373015174, 1759359992, 285281116, 1622183637, 1006888145, 1e4, 1231636301, 83908371, 1090812512, 2463272603, 1373503546, 2596254646, 2321926636, 1504918807, 2181625025, 2882616665, 2747007092, 3009837614, 3138078467, 397917763, 81470997, 829329135, 2657392035, 956543938, 2517215374, 2262029012, 40735498, 2394877945, 3266489909, 702138776, 2808555105, 2936675148, 1258607687, 1131014506, 3218104598, 3082640443, 1404277552, 565507253, 534414190, 1541320221, 1913087877, 2053790376, 1789927666, 3965973030, 3826175755, 4107580753, 4240017532, 1658658271, 3579855332, 3708648649, 3453421203, 3317316542, 1873836001, 1742555852, 461845907, 3608007406, 1996959894, 3747672003, 3485111705, 2137656763, 3352799412, 213261112, 3993919788, 1.01, 3865271297, 4139329115, 4275313526, 282753626, 1068828381, 2768942443, 2909243462, 936918e3, 3183342108, 27492, 141376813, 174e4, 3050360625, 654459306, 2617837225, 1454621731, 2489596804, 2227061214, 1591671054, 2362670323, 4294967295, 1308918612, 2246822507, 795835527, 1181335161, 414664567, 4279200368, 1661365465, 1037604311, 4150417245, 3887607047, 1802195444, 4023717930, 2075208622, 1943803523, 901097722, 628085408, 755167117, 3322730930, 3462522015, 3736837829, 3604390888, 2366115317, .4, 2238001368, 2512341634, 2647816111, -.2, 314042704, 1510334235, 58964, 1382605366, 31158534, 450548861, 3020668471, 1119000684, 3160834842, 2898065728, 1256170817, 18e5, 2765210733, 3060149565, 3188396048, 2932959818, 124634137, 2797360999, 366619977, 62317068, -.26, 1202900863, 498536548, 1340076626, 2405801727, 2265490386, 1594198024, 1466479909, 2547177864, 249268274, 2680153253, 2125561021, 3294710456, 855842277, 3423369109, .732134444, 3705015759, 3569037538, 1994146192, 1711684554, 1852507879, 997073096, 733239954, 4251122042, 601450431, 4111451223, 167816743, 3855990285, 3988292384, 3369554304, 3233442989, 3495958263, 3624741850, 65535, 453092731, -.9, 2094854071, 1957810842, 325883990, 4057260610, 1684777152, 4189708143, 3915621685, 162941995, 1812370925, 3775830040, 783551873, 3134207493, 1172266101, 2998733608, 2724688242, 1303535960, 2852801631, 112637215, 1567103746, 651767980, 1426400815, 906185462, 2211677639, 1047427035, 2344532202, 2607071920, 2466906013, 225274430, 544179635, 2176718541, 2312317920, 1483230225, 1342533948, 2567524794, 2439277719, 1088359270, 671266974, 1219638859, 953729732, 3099436303, 2966460450, 817233897, 2685067896, 2825379669, 4089016648, 4224994405, 3943577151, 3814918930, 476864866, 1634467795, 335633487, 1762050814, 1, 2044508324, -1, 3401237130, 3268935591, 3524101629, 3663771856, 1907459465];
            (function() {
                function d(b, c) {
                    if (null == b) return null;
                    for (var l = x(c), f = [], g = b.length, e = a[15]; e < g; e++) f.push(Y(b[e], l++));
                    return f
                }
                function f(b) {
                    if (null == b) return null;
                    for (var c = [], l = a[15], d = b.length; l < d; l++) {
                        var g = b[l];
                        c[l] = Ka[(g >>> a[23] & a[56]) * a[58] + (g & a[56])]
                    }
                    return c
                }
                function g(h) {
                    var c = [];
                    if (null == h || void 0 == h || h.length == a[15]) return za(L);
                    if (h.length >= L) {
                        var c = a[15],
                            l = [];
                        if (null != h && h.length != a[15]) {
                            if (h.length < L) throw Error(b[134]);
                            for (var d = a[15]; d < L; d++) l[d] = h[c + d]
                        }
                        return l
                    }
                    for (l = a[15]; l < L; l++) c[l] = h[l % h.length];
                    return c
                }
                function e(h) {
                    var c = a[405];
                    if (null != h) for (var l = a[15]; l < h.length; l++) c = c >>> a[38] ^ La[(c ^ h[l]) & a[299]];
                    h = Aa(c ^ a[405]);
                    c = h.length;
                    if (null == h || c < a[15]) h = new String(b[0]);
                    else {
                        for (var l = [], d = a[15]; d < c; d++) l.push(Ma(h[d]));
                        h = l.join(b[0])
                    }
                    return h
                }
                function k(h, c, l) {
                    var d, f = [b[70], b[85], b[118], b[73], b[77], b[106], b[80], b[116], b[44], b[42], b[62], b[114], b[93], b[105], b[40], b[64], b[103], b[86], b[99], b[141], b[48], b[89], b[76], b[69], b[132], b[47], b[88], b[33], b[43], b[45], b[78], b[53], b[110], b[50], b[68], b[101], b[52], b[41], b[138], b[133], b[66], b[129], b[108], b[81], b[140], b[90], b[117], b[63], b[107], b[91], b[135], b[115], b[113], b[97], b[60], b[61], b[137], b[126], b[83], b[79], b[119], b[71], b[123], b[75]],
                        g = b[74],
                        e = [];
                    if (l == a[541]) l = h[c], d = a[15], e.push(f[l >>> a[16] & a[153]]), e.push(f[(l << a[23] & a[122]) + (d >>> a[23] & a[56])]), e.push(g), e.push(g);
                    else if (l == a[16]) l = h[c], d = h[c + a[541]], h = a[15], e.push(f[l >>> a[16] & a[153]]), e.push(f[(l << a[23] & a[122]) + (d >>> a[23] & a[56])]), e.push(f[(d << a[16] & a[148]) + (h >>> a[30] & a[19])]), e.push(g);
                    else if (l == a[19]) l = h[c], d = h[c + a[541]], h = h[c + a[16]], e.push(f[l >>> a[16] & a[153]]), e.push(f[(l << a[23] & a[122]) + (d >>> a[23] & a[56])]), e.push(f[(d << a[16] & a[148]) + (h >>> a[30] & a[19])]), e.push(f[h & a[153]]);
                    else throw Error(b[111]);
                    return e.join(b[0])
                }
                function za(b) {
                    for (var c = [], l = a[15]; l < b; l++) c[l] = a[15];
                    return c
                }
                function Z(h, c, l, d, f) {
                    if (null != h && h.length != a[15]) {
                        if (null == l) throw Error(b[131]);
                        if (h.length < f) throw Error(b[134]);
                        for (var e = a[15]; e < f; e++) l[d + e] = h[c + e]
                    }
                }
                function Aa(b) {
                    var c = [];
                    c[0] = b >>> a[74] & a[299];
                    c[1] = b >>> a[58] & a[299];
                    c[2] = b >>> a[38] & a[299];
                    c[3] = b & a[299];
                    return c
                }
                function ma(h) {
                    if (null == h || void 0 == h) return h;
                    h = encodeURIComponent(h);
                    for (var c = [], l = h.length, d = a[15]; d < l; d++) if (h.charAt(d) == b[27]) if (d + a[16] < l) c.push(Na(h.charAt(++d) + b[0] + h.charAt(++d))[0]);
                    else throw Error(b[146]);
                    else c.push(h.charCodeAt(d));
                    return c
                }
                function Na(b) {
                    if (null == b || b.length == a[15]) return [];
                    b = new String(b);
                    for (var c = [], l = b.length / a[16], d = a[15], f = a[15]; f < l; f++) {
                        var e = parseInt(b.charAt(d++), a[58]) << a[23],
                            g = parseInt(b.charAt(d++), a[58]);
                        c[f] = x(e + g)
                    }
                    return c
                }
                function Ma(c) {
                    var d = [];
                    d.push(aa[c >>> a[23] & a[56]]);
                    d.push(aa[c & a[56]]);
                    return d.join(b[0])
                }
                function na(b, c) {
                    if (null == b || null == c || b.length != c.length) return b;
                    for (var d = [], f = a[15], e = b.length; f < e; f++) d[f] = Y(b[f], c[f]);
                    return d
                }
                function Y(a, b) {
                    a = x(a);
                    b = x(b);
                    return x(a ^ b)
                }
                function Oa(a, b) {
                    return x(a + b)
                }
                function x(c) {
                    if (c < a[290]) return x(a[291] - (a[290] - c));
                    if (c >= a[290] && c <= a[282]) return c;
                    if (c > a[282]) return x(a[292] + c - a[282]);
                    throw Error(b[136])
                }
                function Pa(h) {
                    function d() {
                        for (var h = [b[282], c[32], c[137], b[221], c[150], b[36], c[157], c[103], c[174], b[280], b[18], b[303], c[23], b[338], c[106], b[181], b[337], c[46], c[44], b[112], b[210], b[194], b[281], c[60], b[277], b[276], b[160], c[175], b[356], b[198], b[297], b[98], c[104], b[184], b[223], c[14], c[4], b[226], b[127], b[92], c[49], b[318], c[122], b[67], B[5], c[135], c[81], c[75], b[228], b[286], c[148], b[335], b[283], c[41], c[2], b[272], c[102], b[293], b[348], Ja[0], b[169], B[4], b[273], b[82], c[94], c[108], c[142], c[77], c[5], b[358], c[7], b[212], b[279], c[116], b[278], c[68], b[229], c[176], b[261], c[8], b[268], c[17], b[26], b[340], b[289], b[284], b[104], c[160], b[224], b[256], b[243], b[322], b[204], c[19], b[300], c[70], c[90], b[206], b[3], b[65], c[99], b[186], b[321], b[170], b[346], c[25], b[174], b[271], c[15], b[46], c[52], c[69], c[84], b[153], b[125], c[114], b[37]], f = [], e = a[15]; e < h.length; e++) try {
                            var g = h[e];
                            l()(g) && f.push(g)
                        } catch (k) {}
                        return f.join(b[56])
                    }
                    function l() {
                        function h(a) {
                            var c = {};
                            return k.style.fontFamily = a, g.appendChild(k), c.height = k.offsetHeight, c.width = k.offsetWidth, g[b[307]](k), c
                        }
                        var d = [c[21], c[141], B[6]],
                            l = [],
                            f = c[139],
                            e = b[327],
                            g = C[b[258]],
                            k = C[b[167]](c[123]);
                        k.style.fontSize = e;
                        k.style.visibility = c[37];
                        k.innerHTML = f;
                        for (f = a[15]; f < d.length; f++) l[f] = h(d[f]);
                        return function(c) {
                            for (var f = a[15]; f < l.length; f++) {
                                var e = h(c + b[34] + d[f]),
                                    g = l[f];
                                if (e.height !== g.height || e.width !== g.width) return !0
                            }
                            return !1
                        }
                    }
                    function f() {
                        var a = null,
                            h = null,
                            d = [];
                        try {
                            h = C[b[167]](c[79]), a = h[B[7]](b[255]) || h[B[7]](c[112])
                        } catch (l) {}
                        if (!a) return d;
                        try {
                            d.push(a[b[20]]())
                        } catch (g) {}
                        try {
                            d.push(e(a, h))
                        } catch (k) {}
                        return d.join(b[56])
                    }
                    function e(h, d) {
                        try {
                            var f = c[76],
                                l = b[240],
                                g = h[c[43]]();
                            h[c[33]](h[c[113]], g);
                            var k = new Float32Array([a[432], a[488], a[15], a[428], a[453], a[15], a[15], a[468], a[15]]);
                            h.bufferData(h[c[113]], k, h[c[24]]);
                            g.k = a[19];
                            g.l = a[19];
                            var t = h[c[20]](),
                                X = h[c[48]](h[b[267]]);
                            h[c[63]](X, f);
                            h[b[341]](X);
                            var la = h[c[48]](h[c[149]]);
                            return h[c[63]](la, l), h[b[341]](la), h[b[177]](t, X), h[b[177]](t, la), h[c[45]](t), h[b[309]](t), t.n = h[c[92]](t, b[205]), t.m = h[c[62]](t, c[29]), h[c[74]](t.o), h[c[167]](t.n, g.k, h.FLOAT, !a[541], a[15], a[15]), h[J[0]](t.m, a[541], a[541]), h[b[139]](h[b[259]], a[15], g.l), M(d[b[149]]())
                        } catch ($a) {
                            return b[324]
                        }
                    }
                    function g() {
                        var h = C[b[167]](b[155]),
                            d = [],
                            f = [c[124], b[270], b[328], b[315], b[192], c[166], c[22], c[143], b[274], b[1], b[329], b[154], b[161], b[238], b[49], c[120], b[248], b[239], b[156], b[343], c[132], c[86], c[47], c[125], b[32], b[344], c[73], b[150]];
                        if (!window[c[154]]) return d.join(b[0]);
                        for (var l = a[15]; l < f.length; l++) try {
                            C[b[258]].appendChild(h), h.style.color = f[l], d.push(f[l]), d.push(window[c[154]](h).getPropertyValue(c[36])), C[b[258]][b[307]](h)
                        } catch (e) {
                            d.push(b[349])
                        }
                        return d.join(b[54])
                    }
                    function k() {
                        try {
                            var h = C[b[167]](c[79]),
                                d = h[B[7]](b[354]),
                                f = c[105];
                            d[c[169]] = b[235];
                            d[b[145]] = b[333];
                            d[c[169]] = b[202];
                            d[b[219]] = c[10];
                            d[c[11]](a[281], a[541], a[152], a[66]);
                            d[b[219]] = c[170];
                            d.fillText(f, a[16], a[56]);
                            d[b[219]] = b[313];
                            d.fillText(f, a[23], a[60]);
                            return h[b[149]]()
                        } catch (l) {
                            return b[237]
                        }
                    }
                    function m() {
                        try {
                            return window[b[355]] && n.h ? q() : r()
                        } catch (a) {
                            return b[31]
                        }
                    }
                    function r() {
                        if (!y[b[4]]) return b[0];
                        var h = [b[211], b[314], c[3], b[5], b[183], c[27], c[115], b[230], c[42], b[157], c[145], b[266], c[34], b[246], c[134], b[336], b[189], c[138], b[296], b[201], b[158], b[233], b[247], c[147], c[13], b[55], b[288], b[173], c[171], c[64], c[26], b[244], b[332], b[187], c[133], b[269], b[290], b[351], b[176], b[308], b[39], b[254], c[97], c[71], b[72], b[7], c[54], b[200], c[39], b[242], c[107], b[225], c[66], b[188], b[287], b[190], c[80], b[250], b[347], c[87], b[263], b[213], b[109], b[95], B[1], c[109], c[82], c[0], c[57], b[352], c[85], B[3], b[166], c[50], b[214], b[195], c[35], c[121], c[146], c[28], b[357], b[317], c[31], b[178], b[241], c[55], c[9], b[96], b[251], b[94], c[72], b[196], b[23], b[102], b[84], b[148], b[199], c[59], b[16], b[217], b[252], b[306], c[173], b[222], b[15], b[58], b[203], b[8], c[136], b[245], b[17], b[51], b[295], c[153], c[130], b[331], b[232], c[51], c[61]],
                            d = [],
                            f = {};
                        d.push(p(y[b[4]], function(h) {
                            f[h.name] = a[541];
                            var d = p(h, function(a) {
                                return [a.type, a.suffixes].join(b[144])
                            }).join(b[34]);
                            return [h.name, h.description, d].join(c[88])
                        }, this).join(b[25]));
                        d.push(p(h, function(a) {
                            if (f[a]) return b[0];
                            a = y[b[4]][a];
                            if (!a) return b[0];
                            var h = p(a, function(a) {
                                return [a.type, a.suffixes].join(b[144])
                            }).join(b[34]);
                            return [a.name, a.description, h].join(c[88])
                        }, this).join(b[56]));
                        return d.join(b[56])
                    }
                    function q() {
                        return window[b[355]] ? p([b[236], b[292], b[316], b[298], c[151], b[197], c[83], b[218], c[111], b[175], b[249], b[100], b[162], b[231], c[1], b[249], b[102], b[148], b[312], c[53], b[350], c[118], b[326]], function(a) {
                            try {
                                return new window[b[355]](a), a
                            } catch (h) {
                                return null
                            }
                        }).join(b[56]) : b[0]
                    }
                    function p(a, b, h) {
                        var c = [];
                        if (null == a) return c;
                        if (I && a.map === I) return a.map(b, h);
                        E(a, function(a, d, f) {
                            c[c.length] = b.call(h, a, d, f)
                        });
                        return c
                    }
                    function E(b, h) {
                        if (null !== b) if (z && b.forEach === z) b.forEach(h, void 0);
                        else if (b.length === +b.length) for (var c = a[15], d = b.length; c < d && h.call(void 0, b[c], c, b) !== {}; c++);
                        else for (c in b) if (b.hasOwnProperty(c) && h.call(void 0, b[c], c, b) === {}) break
                    }
                    var z = Array.prototype.forEach,
                        I = Array.prototype.map,
                        n = {
                            e: M,
                            j: !0,
                            i: !0,
                            h: !0,
                            b: !0,
                            a: !0
                        };
                    typeof h == b[264] ? n.e = h : (null != h.b && void 0 != h.b && (n.b = h.b), null != h.a && void 0 != h.a && (n.a = h.a));
                    this.get = function() {
                        var h = [],
                            l = [];
                        if (Qa) {
                            var e;
                            try {
                                e = !! window[b[339]]
                            } catch (X) {
                                e = !0
                            }
                            h.push(e);
                            var p;
                            try {
                                p = !! window[c[38]]
                            } catch (z) {
                                p = !0
                            }
                            h.push(p);
                            h.push( !! window[c[40]]);
                            C[b[258]] ? h.push(typeof C[b[258]][b[301]]) : h.push("undefined");
                            h.push(typeof window[c[78]]);
                            h.push(y[b[193]]);
                            h.push(y[c[155]]);
                            if (e = n.i) try {
                                var u = C[b[167]](c[79]);
                                e = !(!u[B[7]] || !u[B[7]](b[354]))
                            } catch (r) {
                                e = !1
                            }
                            if (e) try {
                                h.push(k()), n.b && h.push(f())
                            } catch (E) {
                                h.push(b[59])
                            }
                            h.push(g());
                            n.a && l.push(d());
                            l.push(y[c[110]]);
                            l.push(y[b[151]]);
                            l.push(window[b[257]][b[359]]);
                            n.j && (u = window[b[257]] ? [window[b[257]].height, window[b[257]].width] : [a[15], a[15]], typeof u !== c[98] && l.push(u.join(b[138])));
                            l.push((new Date)[b[128]]());
                            l.push(y[b[122]]);
                            l.push(m())
                        }
                        u = [];
                        n.e ? (u.push(n.e(h.join(c[152]))), u.push(n.e(l.join(c[152])))) : (u.push(M(h.join(c[152]))), u.push(M(l.join(c[152]))));
                        return u
                    }
                }
                function M(h) {
                    var c = a[88],
                        d, f, e, g, k, m;
                    d = h.length & a[19];
                    f = h.length - d;
                    e = c;
                    c = a[21];
                    g = a[375];
                    for (m = a[15]; m < f;) k = h.charCodeAt(m) & a[299] | (h.charCodeAt(++m) & a[299]) << a[38] | (h.charCodeAt(++m) & a[299]) << a[58] | (h.charCodeAt(++m) & a[299]) << a[74], ++m, k = (k & a[486]) * c + (((k >>> a[58]) * c & a[486]) << a[58]) & a[405], k = k << a[56] | k >>> a[60], k = (k & a[486]) * g + (((k >>> a[58]) * g & a[486]) << a[58]) & a[405], e ^= k, e = e << a[50] | e >>> a[64], e = (e & a[486]) * a[26] + (((e >>> a[58]) * a[26] & a[486]) << a[58]) & a[405], e = (e & a[486]) + a[394] + (((e >>> a[58]) + a[435] & a[486]) << a[58]);
                    k = a[15];
                    switch (d) {
                        case a[19]:
                            k ^= (h.charCodeAt(m + a[16]) & a[299]) << a[58];
                        case a[16]:
                            k ^= (h.charCodeAt(m + a[541]) & a[299]) << a[38];
                        case a[541]:
                            k ^= h.charCodeAt(m) & a[299], k = (k & a[486]) * c + (((k >>> a[58]) * c & a[486]) << a[58]) & a[405], k = k << a[56] | k >>> a[60], k = (k & a[486]) * g + (((k >>> a[58]) * g & a[486]) << a[58]) & a[405], e ^= k
                    }
                    e ^= h.length;
                    e ^= e >>> a[58];
                    e = (e & a[486]) * a[407] + (((e >>> a[58]) * a[407] & a[486]) << a[58]) & a[405];
                    e ^= e >>> a[50];
                    e = (e & a[486]) * a[349] + (((e >>> a[58]) * a[349] & a[486]) << a[58]) & a[405];
                    e ^= e >>> a[58];
                    h = e >>> a[15];
                    d = [];
                    d.push(h);
                    try {
                        for (var r, B = h + b[0], p = a[15], E = a[15], z = a[15]; z < B.length; z++) try {
                            var q = parseInt(B.charAt(z) + b[0]),
                                p = q || q === a[15] ? p + q : p + a[541];
                            E++
                        } catch (n) {
                            p += a[541], E++
                        }
                        E = E == a[15] ? a[541] : E;
                        r = ba(p * a[541] / E, N);
                        for (var x, C = Math.floor(r / Math.pow(a[43], N - a[541])), G = h + b[0], w = a[15], D = a[15], H = a[15], u = a[15], F = a[15]; F < G.length; F++) try {
                            var v = parseInt(G.charAt(F) + b[0]);
                            v || v === a[15] ? v < C ? (D++, w += v) : (u++, H += v) : (u++, H += C)
                        } catch (A) {
                            u++, H += C
                        }
                        u = u == a[15] ? a[541] : u;
                        D = D == a[15] ? a[541] : D;
                        x = ba(H * a[541] / u - w * a[541] / D, T);
                        d.push(ca(r, N, b[41]));
                        d.push(ca(x, T, b[41]))
                    } catch (y) {
                        d = [], d.push(h), d.push(U(N, b[35]).join(b[0])), d.push(U(T, b[35]).join(b[0]))
                    }
                    return d.join(b[0])
                }
                function ba(h, c) {
                    if (h < a[15] || h >= a[43]) throw Error(b[30]);
                    for (var d = U(c, b[41]), e = b[0] + h, f = a[15], g = a[15]; f < d.length && g < e.length; g++) e.charAt(g) != b[38] && (d[f++] = e.charAt(g));
                    return parseInt(d.join(b[0]))
                }
                function ca(a, c, d) {
                    a = b[0] + a;
                    if (a.length > c) throw Error(b[87]);
                    if (a.length == c) return a;
                    for (var e = [], f = a.length; f < c; f++) e.push(d);
                    e.push(a);
                    return e.join(b[0])
                }
                function U(b, c) {
                    if (b <= a[15]) return [a[15]];
                    for (var d = [], e = a[15]; e < b; e++) d.push(c);
                    return d
                }
                function r(a) {
                    return null == a || void 0 == a
                }
                function m(a, b, c) {
                    this.f = a;
                    this.c = b;
                    this.g = r(c) ? !0 : c
                }
                function Ra(a) {
                    if (r(a) || r(a.f) || r(a.c)) return !1;
                    try {
                        if (r(window[a.f])) return !1
                    } catch (b) {
                        return !1
                    }
                    return !0
                }
                function v(c, d) {
                    if (r(c)) return b[0];
                    for (var e = a[15]; e < c.length; e++) {
                        var f = c[e];
                        if (!r(f) && f.f == d) return f
                    }
                }
                function da() {
                    var h;
                    a: {
                        if (!r(q)) for (h = a[15]; h < q.length; h++) {
                            var d = q[h];
                            if (d.g && !Ra(d)) {
                                h = d;
                                break a
                            }
                        }
                        h = null
                    }
                    var e;
                    if (r(h)) {
                        try {
                            e = window.parseFloat(b[180]) === a[384] && window.isNaN(window.parseFloat(b[163]))
                        } catch (f) {
                            e = !1
                        }
                        if (e) {
                            var g;
                            try {
                                g = window.parseInt(b[323]) === a[273] && window.isNaN(window.parseInt(b[163]))
                            } catch (k) {
                                g = !1
                            }
                            if (g) {
                                var m;
                                try {
                                    m = window.decodeURI(b[208]) === b[24]
                                } catch (C) {
                                    m = !1
                                }
                                if (m) {
                                    var x;
                                    try {
                                        x = window.decodeURIComponent(b[209]) === b[28]
                                    } catch (F) {
                                        x = !1
                                    }
                                    if (x) {
                                        var p;
                                        try {
                                            p = window.encodeURI(b[24]) === b[208]
                                        } catch (E) {
                                            p = !1
                                        }
                                        if (p) {
                                            var z;
                                            try {
                                                z = window.encodeURIComponent(b[28]) === b[209]
                                            } catch (I) {
                                                z = !1
                                            }
                                            if (z) {
                                                var n;
                                                try {
                                                    n = window.escape(b[28]) === b[209]
                                                } catch (A) {
                                                    n = !1
                                                }
                                                if (n) {
                                                    var y;
                                                    try {
                                                        y = window.unescape(b[209]) === b[28]
                                                    } catch (G) {
                                                        y = !1
                                                    }
                                                    if (y) {
                                                        var w;
                                                        try {
                                                            w = window.eval(b[304]) === a[273]
                                                        } catch (D) {
                                                            w = !1
                                                        }
                                                        e = w ? null : v(q, b[171])
                                                    } else e = v(q, c[172])
                                                } else e = v(q, b[342])
                                            } else e = v(q, c[30])
                                        } else e = v(q, c[16])
                                    } else e = v(q, B[2])
                                } else e = v(q, b[320])
                            } else e = v(q, c[58])
                        } else e = v(q, c[89])
                    } else e = h;
                    return e
                }
                function Sa() {
                    var a = da();
                    if (!r(a)) return a.c;
                    try {
                        a = r(window[b[168]]) || r(window[b[168]][b[334]]) ? null : v(q, b[311])
                    } catch (c) {
                        a = null
                    }
                    if (!r(a)) return a.c;
                    try {
                        a = r(context) || r(context[b[185]]) ? null : v(q, b[265])
                    } catch (d) {
                        a = null
                    }
                    return r(a) ? null : a.c
                }
                function Ba(c) {
                    for (var d = [], e = a[15]; e < c; e++) {
                        var f = Math.random() * Ta,
                            f = Math.floor(f);
                        d.push(ea.charAt(f))
                    }
                    return d.join(b[0])
                }
                function P(h) {
                    for (var d = (C[b[207]] || b[0]).split(c[91]), e = a[15]; e < d.length; e++) {
                        var f = d[e].indexOf(b[57]);
                        if (f >= a[15]) {
                            var g = d[e].substring(f + a[541], d[e].length);
                            if (d[e].substring(a[15], f) == h) return window.decodeURIComponent(g)
                        }
                    }
                    return null
                }
                function Ca(h) {
                    var d = [b[135], b[182], b[133], b[108], b[159], b[165], c[18]],
                        e = b[0];
                    if (null == h || void 0 == h) return h;
                    if (typeof h == [b[291], b[220], b[121]].join(b[0])) {
                        for (var e = e + b[142], f = a[15]; f < d.length; f++) if (h.hasOwnProperty(d[f])) {
                            var g = b[29] + d[f] + b[262],
                                k;
                            k = b[0] + h[d[f]];
                            k = null == k || void 0 == k ? k : k.replace(/'/g, c[96]).replace(/"/g, b[24]);
                            e += g + k + b[191]
                        }
                        e.charAt(e.length - a[541]) == b[34] && (e = e.substring(a[15], e.length - a[541]));
                        return e += b[143]
                    }
                    return null
                }
                function oa(a, d, e, f) {
                    var g = [];
                    g.push(a + b[57] + encodeURIComponent(d));
                    e && (a = new Date, a = new Date(f), f = a[b[215]](), g.push(c[91]), g.push(b[172]), g.push(b[305]), g.push(b[325]), g.push(b[319]), g.push(f));
                    g.push(c[91]);
                    g.push(b[302]);
                    g.push(b[216]);
                    null != A && void 0 != A && A != b[0] && (g.push(c[91]), g.push(b[152]), g.push(b[234]), g.push(b[260]), g.push(A));
                    C[b[207]] = g.join(b[0])
                }
                function Da(a) {
                    window[pa] = a
                }
                function Ea(a) {
                    window[qa] = a
                }
                function Fa(c, d) {
                    for (var e = [], f = a[15]; f < d; f++) e.push(c);
                    return e.join(b[0])
                }
                function Ga(a, c) {
                    var d = P(a);
                    null !== d && void 0 !== d && d !== b[0] || oa(a, c, !1)
                }
                function ra() {
                    var a = P(V);
                    if (null == a || void 0 == a || a == b[0]) a = window[qa];
                    return a
                }
                function Ua() {
                    var a = ra();
                    if (null == a || void 0 == a || a == b[0]) return !1;
                    try {
                        return (a = parseInt(a)) && a >= fa ? !0 : !1
                    } catch (c) {
                        return !1
                    }
                }
                function ga(c) {
                    if (null == c || void 0 == c || c == b[0]) return null;
                    c = c.split(b[54]);
                    return c.length < a[16] || !/[0-9]+/gi.test(c[1]) ? null : parseInt(c[1])
                }
                function Q() {
                    var a = P(S);
                    if (null == a || void 0 == a || a == b[0]) a = window[pa];
                    return a
                }
                function Va() {
                    var c = Q();
                    if (null == c || void 0 == c || c == b[0]) return a[15];
                    c = ga(c);
                    return null == c ? a[15] : c - (sa - ta) - (new window[B[0]])[b[179]]()
                }
                function Ha(d, e) {
                    var f = new window[B[0]];
                    f[b[21]](f[b[179]]() - a[326]);
                    window[b[330]][b[207]] = null == e || void 0 == e || e == b[0] ? d + b[147] + f[b[215]]() : d + c[12] + e + c[131] + f[b[215]]()
                }
                function Ia() {
                    if (!(null == K || void 0 == K || K.length <= a[15])) for (var c = a[15]; c < K.length; c++) {
                        var d = K[c];
                        (null != A && void 0 != A && A != b[0] || null != d && void 0 != d && d != b[0]) && A != d && (Ha(S, d), Ha(V, d))
                    }
                }
                function ua() {
                    Ia();
                    window[qa] = null;
                    window[pa] = null;
                    var h = !0,
                        t = {
                            v: b[227]
                        },
                        l = Sa();
                    l && (t[c[18]] = l);
                    l = null;
                    t[b[108]] = Wa;
                    var m = (new window[B[0]])[b[179]]() + sa,
                        r = m + a[308] * a[148] * a[148] * a[74] * a[303] * a[26];
                    t[b[133]] = Ba(a[19]) + m + Ba(a[19]);
                    try {
                        var q = (new Pa({
                            b: Xa,
                            a: Ya
                        })).get();
                        null != q && void 0 != q && q.length > a[15] ? t[b[182]] = q.join(b[34]) : (t[b[182]] = Fa(b[41], a[43]), t[b[159]] = b[42], h = !1)
                    } catch (C) {
                        t[b[182]] = Fa(b[41], a[43]), t[b[159]] = b[42], h = !1
                    }
                    try {
                        var v = l = Ca(t),
                            t = Za;
                        if (null == t || void 0 == t) throw Error(b[120]);
                        if (null == v || void 0 == v) v = b[0];
                        var q = v,
                            y;
                        y = null == v ? e([]) : e(ma(v));
                        var A = ma(q + y),
                            p = ma(t);
                        null == A && (A = []);
                        y = [];
                        for (var E = a[15]; E < va; E++) {
                            var z = Math.random() * a[301],
                                z = Math.floor(z);
                            y[E] = x(z)
                        }
                        var p = g(p),
                            p = na(p, g(y)),
                            E = p = g(p),
                            I;
                        if (null == A || void 0 == A || A.length == a[15]) I = za(F);
                        else {
                            var n = A.length,
                                J = a[15],
                                J = n % F <= F - ha ? F - n % F - ha : F * a[16] - n % F - ha,
                                z = [];
                            Z(A, a[15], z, a[15], n);
                            for (var K = a[15]; K < J; K++) z[n + K] = a[15];
                            Z(Aa(n), a[15], z, n + J, ha);
                            I = z
                        }
                        n = I;
                        if (null == n || n.length % F != a[15]) throw Error(b[130]);
                        I = [];
                        for (var G = a[15], w = n.length / F, D = a[15]; D < w; D++) {
                            I[D] = [];
                            for (var H = a[15]; H < F; H++) I[D][H] = n[G++]
                        }
                        G = [];
                        Z(y, a[15], G, a[15], va);
                        for (var u = I.length, L = a[15]; L < u; L++) {
                            var O, M;
                            var N = I[L];
                            if (null == N) M = null;
                            else {
                                for (var T = x(a[104]), w = [], U = N.length, P = a[15]; P < U; P++) w.push(Oa(N[P], T++));
                                M = w
                            }
                            var Q;
                            w = M;
                            if (null == w) Q = null;
                            else {
                                for (var aa = x(a[143]), D = [], ba = w.length, wa = a[15]; wa < ba; wa++) D.push(Y(w[wa], aa--));
                                Q = D
                            }
                            var ca = d(Q, a[127]);
                            O = d(ca, a[36]);
                            var xa = na(O, p),
                                ia;
                            w = xa;
                            D = E;
                            if (null == w) ia = null;
                            else if (null == D) ia = w;
                            else {
                                for (var H = [], da = D.length, W = a[15], ea = w.length; W < ea; W++) H[W] = x(w[W] + D[W % da]);
                                ia = H
                            }
                            var xa = na(ia, E),
                                ja = f(xa),
                                ja = f(ja);
                            Z(ja, a[15], G, L * F + va, F);
                            E = ja
                        }
                        var ka;
                        if (null == G || void 0 == G) ka = null;
                        else if (G.length == a[15]) ka = b[0];
                        else {
                            var ya = a[19];
                            try {
                                for (var u = [], R = a[15]; R < G.length;) if (R + ya <= G.length) u.push(k(G, R, ya)), R += ya;
                                else {
                                    u.push(k(G, R, G.length - R));
                                    break
                                }
                                ka = u.join(b[0])
                            } catch (ra) {
                                throw Error(b[111])
                            }
                        }
                        l = ka
                    } catch (ga) {
                        l = Ca({
                            ec: b[43],
                            em: ga.message
                        }), h = !1
                    }
                    l = l + b[54] + m;
                    oa(S, l, h, r);
                    Ga(S, l);
                    Da(l);
                    oa(V, fa, h, r);
                    Ga(V, fa);
                    Ea(fa);
                    window[b[124]] && window[b[124]](ua, ta)
                }
                m.prototype = {
                    toString: function() {
                        return c[93] + this.f + b[164] + this.c + c[117] + this.g + b[143]
                    }
                };
                var q = [new m(c[67], b[13]), new m(b[330], b[14]), new m(c[6], b[11]), new m(c[65], b[12]), new m(c[140], b[10]), new m(b[257], b[9]), new m(b[2], b[19]), new m(b[235], b[22]), new m(c[119], b[6]), new m(c[89], c[164]), new m(c[58], c[162]), new m(b[320], c[163]), new m(B[2], c[159]), new m(c[16], c[161]), new m(c[30], c[156]), new m(b[342], c[158]), new m(c[172], c[165]), new m(b[171], c[168]), new m(b[253], c[128], !1), new m(b[294], c[129], !1), new m(b[168], c[126], !1), new m(b[311], c[127], !1), new m(b[265], c[144], !1)],
                    Qa = da() ? !1 : !0,
                    Wa = window && window[c[65]] && window[c[65]].host || b[353],
                    C = window[b[330]],
                    y = window[c[6]],
                    N = a[16],
                    T = a[16],
                    aa = [b[41], b[42], b[43], b[44], b[45], b[47], b[48], b[50], b[52], b[53], b[97], b[99], b[101], b[103], b[105], b[106]],
                    La = [a[15], a[377], a[383], a[522], a[449], a[316], a[495], a[343], a[462], a[542], a[310], a[461], a[496], a[464], a[415], a[40], a[455], a[363], a[533], a[402], a[438], a[293], a[366], a[511], a[491], a[493], a[476], a[333], a[539], a[412], a[297], a[427], a[474], a[29], a[369], a[503], a[325], a[353], a[546], a[390], a[420], a[440], a[174], a[442], a[306], a[501], a[469], a[336], a[508], a[331], a[482], a[355], a[358], a[400], a[379], a[528], a[525], a[459], a[423], a[34], a[408], a[520], a[319], a[446], a[471], a[437], a[47], a[417], a[548], a[506], a[463], a[312], a[320], a[256], a[345], a[498], a[380], a[395], a[523], a[385], a[416], a[537], a[429], a[298], a[497], a[487], a[335], a[478], a[300], a[433], a[513], a[367], a[368], a[451], a[404], a[534], a[504], a[295], a[337], a[470], a[443], a[413], a[445], a[190], a[354], a[317], a[391], a[547], a[33], a[466], a[505], a[370], a[521], a[398], a[447], a[321], a[460], a[517], a[37], a[424], a[403], a[350], a[529], a[381], a[334], a[499], a[356], a[483], a[481], a[332], a[452], a[490], a[296], a[431], a[341], a[419], a[536], a[401], a[516], a[362], a[365], a[515], a[479], a[304], a[314], a[458], a[139], a[540], a[414], a[53], a[309], a[473], a[387], a[519], a[388], a[374], a[494], a[348], a[340], a[324], a[426], a[28], a[527], a[456], a[318], a[450], a[389], a[526], a[485], a[352], a[510], a[329], a[378], a[532], a[342], a[409], a[283], a[441], a[421], a[436], a[467], a[339], a[130], a[509], a[372], a[502], a[475], a[22], a[545], a[397], a[307], a[360], a[514], a[364], a[302], a[347], a[399], a[535], a[361], a[328], a[430], a[294], a[418], a[382], a[330], a[480], a[489], a[32], a[346], a[492], a[322], a[359], a[518], a[386], a[373], a[410], a[51], a[411], a[472], a[323], a[457], a[313], a[538], a[305], a[531], a[376], a[406], a[344], a[351], a[484], a[327], a[512], a[448], a[315], a[524], a[392], a[24], a[425], a[454], a[530], a[393], a[544], a[357], a[311], a[500], a[371], a[17], a[477], a[338], a[465], a[507], a[157], a[439], a[232], a[434], a[422]],
                    Ka = [a[76], a[182], a[199], a[231], a[165], a[156], a[75], a[207], a[166], a[19], a[158], a[223], a[191], a[102], a[35], a[94], a[126], a[127], a[248], a[192], a[56], a[66], a[284], a[274], a[82], a[110], a[257], a[258], a[175], a[275], a[86], a[215], a[224], a[95], a[167], a[168], a[193], a[233], a[64], a[285], a[159], a[70], a[153], a[240], a[208], a[45], a[173], a[241], a[140], a[83], a[65], a[103], a[152], a[135], a[194], a[209], a[144], a[38], a[276], a[46], a[114], a[265], a[68], a[131], a[106], a[242], a[243], a[225], a[136], a[71], a[132], a[145], a[128], a[183], a[60], a[44], a[286], a[118], a[266], a[72], a[90], a[18], a[267], a[200], a[73], a[123], a[169], a[111], a[137], a[115], a[244], a[277], a[98], a[216], a[74], a[26], a[124], a[282], a[27], a[133], a[259], a[281], a[31], a[217], a[249], a[41], a[96], a[78], a[23], a[160], a[176], a[184], a[250], a[201], a[119], a[226], a[62], a[16], a[251], a[59], a[48], a[227], a[148], a[129], a[116], a[290], a[170], a[107], a[99], a[234], a[87], a[134], a[245], a[210], a[84], a[235], a[195], a[260], a[91], a[261], a[92], a[211], a[100], a[80], a[262], a[268], a[112], a[185], a[218], a[79], a[122], a[269], a[104], a[120], a[177], a[20], a[263], a[149], a[61], a[77], a[154], a[36], a[150], a[125], a[89], a[219], a[101], a[252], a[113], a[141], a[121], a[220], a[273], a[186], a[253], a[178], a[202], a[246], a[108], a[187], a[81], a[117], a[49], a[203], a[30], a[264], a[270], a[142], a[271], a[212], a[138], a[52], a[221], a[88], a[109], a[222], a[143], a[236], a[54], a[97], a[272], a[287], a[541], a[228], a[247], a[146], a[63], a[278], a[67], a[254], a[161], a[15], a[543], a[213], a[204], a[214], a[188], a[179], a[196], a[58], a[229], a[288], a[237], a[55], a[279], a[162], a[50], a[155], a[289], a[69], a[197], a[180], a[280], a[151], a[93], a[230], a[181], a[39], a[85], a[238], a[105], a[25], a[255], a[171], a[189], a[42], a[198], a[57], a[163], a[164], a[205], a[239], a[172], a[206], a[147], a[43]],
                    F = a[158],
                    L = a[158],
                    ha = a[23],
                    va = a[23],
                    d = function(b, c) {
                        if (null == b) return null;
                        for (var d = x(c), e = [], f = b.length, g = a[15]; g < f; g++) e.push(Y(b[g], d++));
                        return e
                    },
                    Za = b[345],
                    S = b[299],
                    V = c[100],
                    fa = a[91],
                    ea = b[275],
                    Ta = ea.length,
                    sa = a[444],
                    ta = a[396],
                    Ya = !1,
                    Xa = !1,
                    O = window && window[c[65]] && window[c[65]][b[310]] || c[95],
                    A = c[56],
                    A = function(d, e) {
                        if (null == d || void 0 == d || d == b[0] || null == e || void 0 == e || e.length <= a[15]) return null;
                        e = e.split(b[56]);
                        for (var f = a[15]; f < e.length; f++) {
                            var g = new RegExp(e[f].replace(/\./g, c[101]) + b[25]);
                            if (null != d.match(g) || null != (b[38] + d).match(g)) return e[f]
                        }
                        return null
                    }(O, A),
                    pa = S.replace(/[^a-zA-Z0-9$]/g, b[0]).toLowerCase(),
                    qa = V.replace(/[^a-zA-Z0-9$]/g, b[0]).toLowerCase(),
                    K = function(c) {
                        var d = [];
                        if (!c) return d;
                        c = c.split(b[38]);
                        for (var e = b[0], f = a[15]; f < c.length; f++) f < c.length - a[541] && (e = b[38] + c[c.length - a[541] - f] + e, d.push(e));
                        return d
                    }(O);
                K.push(null);
                K.push(b[38] + O);
                (function(d) {
                    for (var e = a[15], f = (C[b[207]] || b[0]).split(c[91]), g = a[15]; g < f.length; g++) {
                        var k = f[g].indexOf(b[57]);
                        k >= a[15] && f[g].substring(a[15], k) == d && (e += a[541])
                    }
                    return e
                })(S) > a[541] && Ia();
                (function() {
                    var a = Q();
                    if (null == a || void 0 == a || a == b[0]) a = !1;
                    else {
                        var c;
                        if (c = Ua()) a = ga(a), c = !(null == a || a - (new window[B[0]])[b[179]]() <= sa - ta);
                        a = c
                    }
                    return a
                })() ? (Da(Q()), Ea(ra()), O = Va(), window[b[124]] && window[b[124]](ua, O)) : ua()
            })()
        })()
    })()
})();
(function() {})();
(function() {
    var bwz1x;
    var ts7l = "VISITOR_CLIENT_NO_COOKIE_SUPPORT";
    var cnW0x = 0;
    var bwD1x = 0;
    var bwE1x = 1;
    var bwL1x = 0;
    var bfu8m = "";
    var bwR1x = "";
    var bwT1x = "";
    var VC5H = "";
    var VB5G = "";
    var bfp8h = "";
    var bxe1x = 0;
    var bxh1x = "";
    var Fu0x = "";
    var BT9K = 0;
    var bfo8g = ntes_get_domain();
    var bfm8e = null;
    var crI1x = "//analytics.163.com";
    var cnU0x = function() {};

    function is_spider() {
        return /baiduspider/gi.test(window.navigator.userAgent)
    }
    function ntes_get_domain() {
        var f = document.domain;
        var d = f.split(".");
        var c = d.length;
        var e = /^\d+$/g;
        if (e.test(d[c - 1])) {
            return f
        }
        if (d.length < 3) {
            return "." + f
        }
        var g = ["com", "net", "org", "gov", "co"];
        var b, a = false;
        for (b = 0; b < g.length; b++) {
            if (d[c - 2] == g[b]) {
                a = true
            }
        }
        if (!a) {
            return "." + d[c - 2] + "." + d[c - 1]
        } else {
            return "." + d[c - 3] + "." + d[c - 2] + "." + d[c - 1]
        }
    }
    function ntes_set_cookie_long(a, c) {
        var b = new Date;
        b.setTime(b.getTime() + 1e3 * 60 * 60 * 24 * 365 * 100);
        document.cookie = a + "=" + c + "; expires=" + b.toGMTString() + "; path=/; domain=" + bfo8g
    }
    function ntes_set_cookie(a, c) {
        var b = new Date;
        b.setTime(b.getTime() + 0);
        document.cookie = a + "=" + c + "; path=/; domain=" + bfo8g
    }
    function ntes_set_cookie_new(b, d, a) {
        if (!a || a == "") {
            a = 1e3 * 60 * 60 * 24 * 365 * 1
        }
        var c = new Date;
        c.setTime(c.getTime() + a);
        document.cookie = b + "=" + d + "; expires=" + c.toGMTString() + "; path=/; domain=" + bfo8g
    }
    function ntes_get_cookie(c) {
        var a = document.cookie;
        var d = c + "=";
        var g = a.length;
        var b = 0;
        while (b < g) {
            var e = b + d.length;
            if (a.substring(b, e) == d) {
                var f = a.indexOf(";", e);
                if (f == -1) {
                    f = g
                }
                return unescape(a.substring(e, f))
            }
            b = a.indexOf(" ", b) + 1;
            if (b == 0) {
                break
            }
        }
        return -1
    }
    function ntes_get_flashver() {
        var f = "",
            n = navigator;
        if (n.plugins && n.plugins.length) {
            for (var ii = 0; ii < n.plugins.length; ii++) {
                if (n.plugins[ii].name.indexOf("Shockwave Flash") != -1) {
                    f = n.plugins[ii].description.split("Shockwave Flash")[1];
                    break
                }
            }
        } else {
            if (window.ActiveXObject) {
                for (var ii = 10; ii >= 2; ii--) {
                    try {
                        var fl = eval("new ActiveXObject('ShockwaveFlash.ShockwaveFlash." + ii + "');");
                        if (fl) {
                            f = ii + ".0";
                            break
                        }
                    } catch (e) {}
                }
            }
        }
        return f
    }
    var cnR0x = 0;
    var ON3x = 8;

    function ntes_hex_md5(a) {
        return binl2hex(ntes_core_md5(str2binl(a), a.length * ON3x))
    }
    function ntes_core_md5(p, k) {
        p[k >> 5] |= 128 << k % 32;
        p[(k + 64 >>> 9 << 4) + 14] = k;
        var o = 1732584193;
        var n = -271733879;
        var m = -1732584194;
        var l = 271733878;
        for (var g = 0; g < p.length; g += 16) {
            var j = o;
            var h = n;
            var f = m;
            var e = l;
            o = md5_ff(o, n, m, l, p[g + 0], 7, -680876936);
            l = md5_ff(l, o, n, m, p[g + 1], 12, -389564586);
            m = md5_ff(m, l, o, n, p[g + 2], 17, 606105819);
            n = md5_ff(n, m, l, o, p[g + 3], 22, -1044525330);
            o = md5_ff(o, n, m, l, p[g + 4], 7, -176418897);
            l = md5_ff(l, o, n, m, p[g + 5], 12, 1200080426);
            m = md5_ff(m, l, o, n, p[g + 6], 17, -1473231341);
            n = md5_ff(n, m, l, o, p[g + 7], 22, -45705983);
            o = md5_ff(o, n, m, l, p[g + 8], 7, 1770035416);
            l = md5_ff(l, o, n, m, p[g + 9], 12, -1958414417);
            m = md5_ff(m, l, o, n, p[g + 10], 17, -42063);
            n = md5_ff(n, m, l, o, p[g + 11], 22, -1990404162);
            o = md5_ff(o, n, m, l, p[g + 12], 7, 1804603682);
            l = md5_ff(l, o, n, m, p[g + 13], 12, -40341101);
            m = md5_ff(m, l, o, n, p[g + 14], 17, -1502002290);
            n = md5_ff(n, m, l, o, p[g + 15], 22, 1236535329);
            o = md5_gg(o, n, m, l, p[g + 1], 5, -165796510);
            l = md5_gg(l, o, n, m, p[g + 6], 9, -1069501632);
            m = md5_gg(m, l, o, n, p[g + 11], 14, 643717713);
            n = md5_gg(n, m, l, o, p[g + 0], 20, -373897302);
            o = md5_gg(o, n, m, l, p[g + 5], 5, -701558691);
            l = md5_gg(l, o, n, m, p[g + 10], 9, 38016083);
            m = md5_gg(m, l, o, n, p[g + 15], 14, -660478335);
            n = md5_gg(n, m, l, o, p[g + 4], 20, -405537848);
            o = md5_gg(o, n, m, l, p[g + 9], 5, 568446438);
            l = md5_gg(l, o, n, m, p[g + 14], 9, -1019803690);
            m = md5_gg(m, l, o, n, p[g + 3], 14, -187363961);
            n = md5_gg(n, m, l, o, p[g + 8], 20, 1163531501);
            o = md5_gg(o, n, m, l, p[g + 13], 5, -1444681467);
            l = md5_gg(l, o, n, m, p[g + 2], 9, -51403784);
            m = md5_gg(m, l, o, n, p[g + 7], 14, 1735328473);
            n = md5_gg(n, m, l, o, p[g + 12], 20, -1926607734);
            o = md5_hh(o, n, m, l, p[g + 5], 4, -378558);
            l = md5_hh(l, o, n, m, p[g + 8], 11, -2022574463);
            m = md5_hh(m, l, o, n, p[g + 11], 16, 1839030562);
            n = md5_hh(n, m, l, o, p[g + 14], 23, -35309556);
            o = md5_hh(o, n, m, l, p[g + 1], 4, -1530992060);
            l = md5_hh(l, o, n, m, p[g + 4], 11, 1272893353);
            m = md5_hh(m, l, o, n, p[g + 7], 16, -155497632);
            n = md5_hh(n, m, l, o, p[g + 10], 23, -1094730640);
            o = md5_hh(o, n, m, l, p[g + 13], 4, 681279174);
            l = md5_hh(l, o, n, m, p[g + 0], 11, -358537222);
            m = md5_hh(m, l, o, n, p[g + 3], 16, -722521979);
            n = md5_hh(n, m, l, o, p[g + 6], 23, 76029189);
            o = md5_hh(o, n, m, l, p[g + 9], 4, -640364487);
            l = md5_hh(l, o, n, m, p[g + 12], 11, -421815835);
            m = md5_hh(m, l, o, n, p[g + 15], 16, 530742520);
            n = md5_hh(n, m, l, o, p[g + 2], 23, -995338651);
            o = md5_ii(o, n, m, l, p[g + 0], 6, -198630844);
            l = md5_ii(l, o, n, m, p[g + 7], 10, 1126891415);
            m = md5_ii(m, l, o, n, p[g + 14], 15, -1416354905);
            n = md5_ii(n, m, l, o, p[g + 5], 21, -57434055);
            o = md5_ii(o, n, m, l, p[g + 12], 6, 1700485571);
            l = md5_ii(l, o, n, m, p[g + 3], 10, -1894986606);
            m = md5_ii(m, l, o, n, p[g + 10], 15, -1051523);
            n = md5_ii(n, m, l, o, p[g + 1], 21, -2054922799);
            o = md5_ii(o, n, m, l, p[g + 8], 6, 1873313359);
            l = md5_ii(l, o, n, m, p[g + 15], 10, -30611744);
            m = md5_ii(m, l, o, n, p[g + 6], 15, -1560198380);
            n = md5_ii(n, m, l, o, p[g + 13], 21, 1309151649);
            o = md5_ii(o, n, m, l, p[g + 4], 6, -145523070);
            l = md5_ii(l, o, n, m, p[g + 11], 10, -1120210379);
            m = md5_ii(m, l, o, n, p[g + 2], 15, 718787259);
            n = md5_ii(n, m, l, o, p[g + 9], 21, -343485551);
            o = safe_add(o, j);
            n = safe_add(n, h);
            m = safe_add(m, f);
            l = safe_add(l, e)
        }
        return Array(o, n, m, l)
    }
    function md5_cmn(h, e, d, c, g, f) {
        return safe_add(bit_rol(safe_add(safe_add(e, h), safe_add(c, f)), g), d)
    }
    function md5_ff(g, f, k, j, e, i, h) {
        return md5_cmn(f & k | ~f & j, g, f, e, i, h)
    }
    function md5_gg(g, f, k, j, e, i, h) {
        return md5_cmn(f & j | k & ~j, g, f, e, i, h)
    }
    function md5_hh(g, f, k, j, e, i, h) {
        return md5_cmn(f ^ k ^ j, g, f, e, i, h)
    }
    function md5_ii(g, f, k, j, e, i, h) {
        return md5_cmn(k ^ (f | ~j), g, f, e, i, h)
    }
    function safe_add(a, d) {
        var c = (a & 65535) + (d & 65535);
        var b = (a >> 16) + (d >> 16) + (c >> 16);
        return b << 16 | c & 65535
    }
    function bit_rol(a, b) {
        return a << b | a >>> 32 - b
    }
    function str2binl(d) {
        var c = new Array;
        var a = (1 << ON3x) - 1;
        for (var b = 0; b < d.length * ON3x; b += ON3x) {
            c[b >> 5] |= (d.charCodeAt(b / ON3x) & a) << b % 32
        }
        return c
    }
    function binl2hex(c) {
        var b = cnR0x ? "0123456789ABCDEF" : "0123456789abcdef";
        var d = "";
        for (var a = 0; a < c.length * 4; a++) {
            d += b.charAt(c[a >> 2] >> a % 4 * 8 + 4 & 15) + b.charAt(c[a >> 2] >> a % 4 * 8 & 15)
        }
        return d
    }
    function str_to_ent(e) {
        var a = "";
        var d;
        for (d = 0; d < e.length; d++) {
            var f = e.charCodeAt(d);
            var b = "";
            if (f > 255) {
                while (f >= 1) {
                    b = "0123456789".charAt(f % 10) + b;
                    f = f / 10
                }
                if (b == "") {
                    b = "0"
                }
                b = "#" + b;
                b = "&" + b;
                b = b + ";";
                a += b
            } else {
                a += e.charAt(d)
            }
        }
        return a
    }
    function ntes_get_navigation_info() {
        VC5H = "-";
        bfp8h = "-";
        VB5G = "-";
        var c = window.self,
            b = window.screen,
            a = window.navigator;
        if (c.screen) {
            VC5H = b.width + "x" + b.height;
            bfp8h = b.colorDepth + "-bit"
        } else {
            if (c.java) {
                var e = java.awt.Toolkit.getDefaultToolkit();
                var f = e.getScreenSize();
                VC5H = f.width + "x" + f.height
            }
        }
        if (a.language) {
            VB5G = a.language.toLowerCase()
        } else {
            if (a.browserLanguage) {
                VB5G = a.browserLanguage.toLowerCase()
            }
        }
        var g = new Date(document.lastModified);
        bxe1x = g.getTime() / 1e3
    }
    function fetch_visitor_hash() {
        var c = new Date;
        var b = document.body.clientWidth + ":" + document.body.clientHeight;
        var a = str_to_ent(c.getTime() + Math.random() + document.location + document.referrer + screen.width + screen.height + navigator.userAgent + document.cookie + b);
        return ntes_hex_md5(a)
    }
    function crJ1x(c, b, f) {
        var e = c + "_" + +(new Date) + parseInt(Math.random() * 100),
            a, d = f || cnU0x;
        a = window[e] = new Image;
        a.onload = function() {
            window[e] = null;
            d()
        };
        a.onerror = function() {
            window[e] = null;
            d()
        };
        a.src = b;
        a = null
    }
    function neteaseTracker(l, a, m, k) {
        if (is_spider()) {
            return
        }
        var e = k || bwz1x;
        bfu8m = escape(a || document.location);
        bwR1x = escape(m || document.title);
        bwT1x = l === true ? "" : escape(l || document.referrer);
        bxh1x = ntes_get_flashver();
        var b = (new Date).getTime();
        if (bfm8e == null) {
            document.cookie = "__ntes__test__cookies=" + b;
            bfm8e = ntes_get_cookie("__ntes__test__cookies") == b ? true : false;
            document.cookie = "__ntes__test__cookies=" + b + "; expires=" + (new Date("1970/01/01")).toUTCString()
        }
        if (e == "undefined" || !e) {
            return
        }
        if (bfu8m.indexOf("http") != 0) {
            return
        }
        var h = ntes_get_cookie("_ntes_nnid");
        if (h == -1) {
            if (bfm8e) {
                ts7l = fetch_visitor_hash();
                bwD1x = 1;
                ntes_set_cookie_long("_ntes_nnid", ts7l + "," + (new Date).getTime());
                ntes_set_cookie_long("_ntes_nuid", ts7l)
            }
        } else {
            var o = h.indexOf(",");
            var p = h.indexOf("|");
            var f = false;
            if (p == -1) {
                p = h.length
            }
            ts7l = h.substr(0, o);
            BT9K = h.substr(o + 1, p - o - 1);
            if (BT9K == 0) {
                BT9K = (new Date).getTime();
                f = true
            }
            if (!ts7l) {
                ts7l = fetch_visitor_hash();
                f = true
            }
            if (f) {
                ntes_set_cookie_long("_ntes_nnid", ts7l + "," + BT9K);
                ntes_set_cookie_long("_ntes_nuid", ts7l)
            }
            if (BT9K != 0 && b - BT9K > 365 * 86400 * 1e3) {
                BT9K = 0;
                ntes_set_cookie_long("_ntes_nnid", ts7l + "," + (new Date).getTime());
                ntes_set_cookie_long("_ntes_nuid", ts7l)
            }
        }
        function c(q, i) {
            var s = ntes_get_cookie(q),
                r = ntes_get_cookie(i);
            return s == -1 ? r == -1 ? "" : r : s
        }
        Fu0x = c("P_INFO", "P_OINFO");
        Fu0x = Fu0x ? Fu0x.substr(0, Fu0x.indexOf("|")) : "";
        bwL1x = c("S_INFO", "S_OINFO") ? 1 : 0;
        ntes_get_navigation_info();
        var n = ["_nacc=", e, "&_nvid=", ts7l, "&_nvtm=", cnW0x, "&_nvsf=", bwE1x, "&_nvfi=", bwD1x, "&_nlag=", VB5G, "&_nlmf=", bxe1x, "&_nres=", VC5H, "&_nscd=", bfp8h, "&_nstm=", bwL1x, "&_nurl=", bfu8m, "&_ntit=", bwR1x, "&_nref=", bwT1x, "&_nfla=", bxh1x, "&_nssn=", Fu0x, "&_nxkey=", (b + "" + Math.random()).substring(6, 20), "&_end1"].join("");
        bwE1x = 0;
        neteaseTracker.callback = null
    }
    bwz1x = "iad";
    neteaseTracker()
})();
(function() {})();
var CryptoJS = CryptoJS ||
    function(u, p) {
        var d = {},
            l = d.lib = {},
            s = function() {},
            t = l.Base = {
                extend: function(a) {
                    s.prototype = this;
                    var c = new s;
                    a && c.mixIn(a);
                    c.hasOwnProperty("init") || (c.init = function() {
                        c.$super.init.apply(this, arguments)
                    });
                    c.init.prototype = c;
                    c.$super = this;
                    return c
                },
                create: function() {
                    var a = this.extend();
                    a.init.apply(a, arguments);
                    return a
                },
                init: function() {},
                mixIn: function(a) {
                    for (var c in a) a.hasOwnProperty(c) && (this[c] = a[c]);
                    a.hasOwnProperty("toString") && (this.toString = a.toString)
                },
                clone: function() {
                    return this.init.prototype.extend(this)
                }
            },
            r = l.WordArray = t.extend({
                init: function(a, c) {
                    a = this.words = a || [];
                    this.sigBytes = c != p ? c : 4 * a.length
                },
                toString: function(a) {
                    return (a || v).stringify(this)
                },
                concat: function(a) {
                    var c = this.words,
                        e = a.words,
                        j = this.sigBytes;
                    a = a.sigBytes;
                    this.clamp();
                    if (j % 4) for (var k = 0; k < a; k++) c[j + k >>> 2] |= (e[k >>> 2] >>> 24 - 8 * (k % 4) & 255) << 24 - 8 * ((j + k) % 4);
                    else if (65535 < e.length) for (k = 0; k < a; k += 4) c[j + k >>> 2] = e[k >>> 2];
                    else c.push.apply(c, e);
                    this.sigBytes += a;
                    return this
                },
                clamp: function() {
                    var a = this.words,
                        c = this.sigBytes;
                    a[c >>> 2] &= 4294967295 << 32 - 8 * (c % 4);
                    a.length = u.ceil(c / 4)
                },
                clone: function() {
                    var a = t.clone.call(this);
                    a.words = this.words.slice(0);
                    return a
                },
                random: function(a) {
                    for (var c = [], e = 0; e < a; e += 4) c.push(4294967296 * u.random() | 0);
                    return new r.init(c, a)
                }
            }),
            w = d.enc = {},
            v = w.Hex = {
                stringify: function(a) {
                    var c = a.words;
                    a = a.sigBytes;
                    for (var e = [], j = 0; j < a; j++) {
                        var k = c[j >>> 2] >>> 24 - 8 * (j % 4) & 255;
                        e.push((k >>> 4).toString(16));
                        e.push((k & 15).toString(16))
                    }
                    return e.join("")
                },
                parse: function(a) {
                    for (var c = a.length, e = [], j = 0; j < c; j += 2) e[j >>> 3] |= parseInt(a.substr(j, 2), 16) << 24 - 4 * (j % 8);
                    return new r.init(e, c / 2)
                }
            },
            b = w.Latin1 = {
                stringify: function(a) {
                    var c = a.words;
                    a = a.sigBytes;
                    for (var e = [], j = 0; j < a; j++) e.push(String.fromCharCode(c[j >>> 2] >>> 24 - 8 * (j % 4) & 255));
                    return e.join("")
                },
                parse: function(a) {
                    for (var c = a.length, e = [], j = 0; j < c; j++) e[j >>> 2] |= (a.charCodeAt(j) & 255) << 24 - 8 * (j % 4);
                    return new r.init(e, c)
                }
            },
            x = w.Utf8 = {
                stringify: function(a) {
                    try {
                        return decodeURIComponent(escape(b.stringify(a)))
                    } catch (c) {
                        throw Error("Malformed UTF-8 data")
                    }
                },
                parse: function(a) {
                    return b.parse(unescape(encodeURIComponent(a)))
                }
            },
            q = l.BufferedBlockAlgorithm = t.extend({
                reset: function() {
                    this.j0x = new r.init;
                    this.byF2x = 0
                },
                Vz5E: function(a) {
                    "string" == typeof a && (a = x.parse(a));
                    this.j0x.concat(a);
                    this.byF2x += a.sigBytes
                },
                zs8k: function(a) {
                    var c = this.j0x,
                        e = c.words,
                        j = c.sigBytes,
                        k = this.blockSize,
                        b = j / (4 * k),
                        b = a ? u.ceil(b) : u.max((b | 0) - this.byk2x, 0);
                    a = b * k;
                    j = u.min(4 * a, j);
                    if (a) {
                        for (var q = 0; q < a; q += k) this.byH2x(e, q);
                        q = e.splice(0, a);
                        c.sigBytes -= j
                    }
                    return new r.init(q, j)
                },
                clone: function() {
                    var a = t.clone.call(this);
                    a.j0x = this.j0x.clone();
                    return a
                },
                byk2x: 0
            });
        l.Hasher = q.extend({
            cfg: t.extend(),
            init: function(a) {
                this.cfg = this.cfg.extend(a);
                this.reset()
            },
            reset: function() {
                q.reset.call(this);
                this.bfe8W()
            },
            update: function(a) {
                this.Vz5E(a);
                this.zs8k();
                return this
            },
            finalize: function(a) {
                a && this.Vz5E(a);
                return this.Vx5C()
            },
            blockSize: 16,
            bfg8Y: function(a) {
                return function(b, e) {
                    return (new a.init(e)).finalize(b)
                }
            },
            cnP0x: function(a) {
                return function(b, e) {
                    return (new n.HMAC.init(a, e)).finalize(b)
                }
            }
        });
        var n = d.algo = {};
        return d
    }(Math);
(function() {
    var u = CryptoJS,
        p = u.lib.WordArray;
    u.enc.Base64 = {
        stringify: function(d) {
            var l = d.words,
                p = d.sigBytes,
                t = this.bv0x;
            d.clamp();
            d = [];
            for (var r = 0; r < p; r += 3) for (var w = (l[r >>> 2] >>> 24 - 8 * (r % 4) & 255) << 16 | (l[r + 1 >>> 2] >>> 24 - 8 * ((r + 1) % 4) & 255) << 8 | l[r + 2 >>> 2] >>> 24 - 8 * ((r + 2) % 4) & 255, v = 0; 4 > v && r + .75 * v < p; v++) d.push(t.charAt(w >>> 6 * (3 - v) & 63));
            if (l = t.charAt(64)) for (; d.length % 4;) d.push(l);
            return d.join("")
        },
        parse: function(d) {
            var l = d.length,
                s = this.bv0x,
                t = s.charAt(64);
            t && (t = d.indexOf(t), -1 != t && (l = t));
            for (var t = [], r = 0, w = 0; w < l; w++) if (w % 4) {
                var v = s.indexOf(d.charAt(w - 1)) << 2 * (w % 4),
                    b = s.indexOf(d.charAt(w)) >>> 6 - 2 * (w % 4);
                t[r >>> 2] |= (v | b) << 24 - 8 * (r % 4);
                r++
            }
            return p.create(t, r)
        },
        bv0x: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="
    }
})();
(function(u) {
    function p(b, n, a, c, e, j, k) {
        b = b + (n & a | ~n & c) + e + k;
        return (b << j | b >>> 32 - j) + n
    }
    function d(b, n, a, c, e, j, k) {
        b = b + (n & c | a & ~c) + e + k;
        return (b << j | b >>> 32 - j) + n
    }
    function l(b, n, a, c, e, j, k) {
        b = b + (n ^ a ^ c) + e + k;
        return (b << j | b >>> 32 - j) + n
    }
    function s(b, n, a, c, e, j, k) {
        b = b + (a ^ (n | ~c)) + e + k;
        return (b << j | b >>> 32 - j) + n
    }
    for (var t = CryptoJS, r = t.lib, w = r.WordArray, v = r.Hasher, r = t.algo, b = [], x = 0; 64 > x; x++) b[x] = 4294967296 * u.abs(u.sin(x + 1)) | 0;
    r = r.MD5 = v.extend({
        bfe8W: function() {
            this.dE2x = new w.init([1732584193, 4023233417, 2562383102, 271733878])
        },
        byH2x: function(q, n) {
            for (var a = 0; 16 > a; a++) {
                var c = n + a,
                    e = q[c];
                q[c] = (e << 8 | e >>> 24) & 16711935 | (e << 24 | e >>> 8) & 4278255360
            }
            var a = this.dE2x.words,
                c = q[n + 0],
                e = q[n + 1],
                j = q[n + 2],
                k = q[n + 3],
                z = q[n + 4],
                r = q[n + 5],
                t = q[n + 6],
                w = q[n + 7],
                v = q[n + 8],
                A = q[n + 9],
                B = q[n + 10],
                C = q[n + 11],
                u = q[n + 12],
                D = q[n + 13],
                E = q[n + 14],
                x = q[n + 15],
                f = a[0],
                m = a[1],
                g = a[2],
                h = a[3],
                f = p(f, m, g, h, c, 7, b[0]),
                h = p(h, f, m, g, e, 12, b[1]),
                g = p(g, h, f, m, j, 17, b[2]),
                m = p(m, g, h, f, k, 22, b[3]),
                f = p(f, m, g, h, z, 7, b[4]),
                h = p(h, f, m, g, r, 12, b[5]),
                g = p(g, h, f, m, t, 17, b[6]),
                m = p(m, g, h, f, w, 22, b[7]),
                f = p(f, m, g, h, v, 7, b[8]),
                h = p(h, f, m, g, A, 12, b[9]),
                g = p(g, h, f, m, B, 17, b[10]),
                m = p(m, g, h, f, C, 22, b[11]),
                f = p(f, m, g, h, u, 7, b[12]),
                h = p(h, f, m, g, D, 12, b[13]),
                g = p(g, h, f, m, E, 17, b[14]),
                m = p(m, g, h, f, x, 22, b[15]),
                f = d(f, m, g, h, e, 5, b[16]),
                h = d(h, f, m, g, t, 9, b[17]),
                g = d(g, h, f, m, C, 14, b[18]),
                m = d(m, g, h, f, c, 20, b[19]),
                f = d(f, m, g, h, r, 5, b[20]),
                h = d(h, f, m, g, B, 9, b[21]),
                g = d(g, h, f, m, x, 14, b[22]),
                m = d(m, g, h, f, z, 20, b[23]),
                f = d(f, m, g, h, A, 5, b[24]),
                h = d(h, f, m, g, E, 9, b[25]),
                g = d(g, h, f, m, k, 14, b[26]),
                m = d(m, g, h, f, v, 20, b[27]),
                f = d(f, m, g, h, D, 5, b[28]),
                h = d(h, f, m, g, j, 9, b[29]),
                g = d(g, h, f, m, w, 14, b[30]),
                m = d(m, g, h, f, u, 20, b[31]),
                f = l(f, m, g, h, r, 4, b[32]),
                h = l(h, f, m, g, v, 11, b[33]),
                g = l(g, h, f, m, C, 16, b[34]),
                m = l(m, g, h, f, E, 23, b[35]),
                f = l(f, m, g, h, e, 4, b[36]),
                h = l(h, f, m, g, z, 11, b[37]),
                g = l(g, h, f, m, w, 16, b[38]),
                m = l(m, g, h, f, B, 23, b[39]),
                f = l(f, m, g, h, D, 4, b[40]),
                h = l(h, f, m, g, c, 11, b[41]),
                g = l(g, h, f, m, k, 16, b[42]),
                m = l(m, g, h, f, t, 23, b[43]),
                f = l(f, m, g, h, A, 4, b[44]),
                h = l(h, f, m, g, u, 11, b[45]),
                g = l(g, h, f, m, x, 16, b[46]),
                m = l(m, g, h, f, j, 23, b[47]),
                f = s(f, m, g, h, c, 6, b[48]),
                h = s(h, f, m, g, w, 10, b[49]),
                g = s(g, h, f, m, E, 15, b[50]),
                m = s(m, g, h, f, r, 21, b[51]),
                f = s(f, m, g, h, u, 6, b[52]),
                h = s(h, f, m, g, k, 10, b[53]),
                g = s(g, h, f, m, B, 15, b[54]),
                m = s(m, g, h, f, e, 21, b[55]),
                f = s(f, m, g, h, v, 6, b[56]),
                h = s(h, f, m, g, x, 10, b[57]),
                g = s(g, h, f, m, t, 15, b[58]),
                m = s(m, g, h, f, D, 21, b[59]),
                f = s(f, m, g, h, z, 6, b[60]),
                h = s(h, f, m, g, C, 10, b[61]),
                g = s(g, h, f, m, j, 15, b[62]),
                m = s(m, g, h, f, A, 21, b[63]);
            a[0] = a[0] + f | 0;
            a[1] = a[1] + m | 0;
            a[2] = a[2] + g | 0;
            a[3] = a[3] + h | 0
        },
        Vx5C: function() {
            var b = this.j0x,
                n = b.words,
                a = 8 * this.byF2x,
                c = 8 * b.sigBytes;
            n[c >>> 5] |= 128 << 24 - c % 32;
            var e = u.floor(a / 4294967296);
            n[(c + 64 >>> 9 << 4) + 15] = (e << 8 | e >>> 24) & 16711935 | (e << 24 | e >>> 8) & 4278255360;
            n[(c + 64 >>> 9 << 4) + 14] = (a << 8 | a >>> 24) & 16711935 | (a << 24 | a >>> 8) & 4278255360;
            b.sigBytes = 4 * (n.length + 1);
            this.zs8k();
            b = this.dE2x;
            n = b.words;
            for (a = 0; 4 > a; a++) c = n[a], n[a] = (c << 8 | c >>> 24) & 16711935 | (c << 24 | c >>> 8) & 4278255360;
            return b
        },
        clone: function() {
            var b = v.clone.call(this);
            b.dE2x = this.dE2x.clone();
            return b
        }
    });
    t.MD5 = v.bfg8Y(r);
    t.HmacMD5 = v.cnP0x(r)
})(Math);
(function() {
    var u = CryptoJS,
        p = u.lib,
        d = p.Base,
        l = p.WordArray,
        p = u.algo,
        s = p.EvpKDF = d.extend({
            cfg: d.extend({
                keySize: 4,
                hasher: p.MD5,
                iterations: 1
            }),
            init: function(d) {
                this.cfg = this.cfg.extend(d)
            },
            compute: function(d, r) {
                for (var p = this.cfg, s = p.hasher.create(), b = l.create(), u = b.words, q = p.keySize, p = p.iterations; u.length < q;) {
                    n && s.update(n);
                    var n = s.update(d).finalize(r);
                    s.reset();
                    for (var a = 1; a < p; a++) n = s.finalize(n), s.reset();
                    b.concat(n)
                }
                b.sigBytes = 4 * q;
                return b
            }
        });
    u.EvpKDF = function(d, l, p) {
        return s.create(p).compute(d, l)
    }
})();
CryptoJS.lib.Cipher ||
function(u) {
    var p = CryptoJS,
        d = p.lib,
        l = d.Base,
        s = d.WordArray,
        t = d.BufferedBlockAlgorithm,
        r = p.enc.Base64,
        w = p.algo.EvpKDF,
        v = d.Cipher = t.extend({
            cfg: l.extend(),
            createEncryptor: function(e, a) {
                return this.create(this.bfc8U, e, a)
            },
            createDecryptor: function(e, a) {
                return this.create(this.cnO0x, e, a)
            },
            init: function(e, a, b) {
                this.cfg = this.cfg.extend(b);
                this.byY2x = e;
                this.J0x = a;
                this.reset()
            },
            reset: function() {
                t.reset.call(this);
                this.bfe8W()
            },
            process: function(e) {
                this.Vz5E(e);
                return this.zs8k()
            },
            finalize: function(e) {
                e && this.Vz5E(e);
                return this.Vx5C()
            },
            keySize: 4,
            ivSize: 4,
            bfc8U: 1,
            cnO0x: 2,
            bfg8Y: function(e) {
                return {
                    encrypt: function(b, k, d) {
                        return ("string" == typeof k ? c : a).encrypt(e, b, k, d)
                    },
                    decrypt: function(b, k, d) {
                        return ("string" == typeof k ? c : a).decrypt(e, b, k, d)
                    }
                }
            }
        });
    d.StreamCipher = v.extend({
        Vx5C: function() {
            return this.zs8k(!0)
        },
        blockSize: 1
    });
    var b = p.mode = {},
        x = function(e, a, b) {
            var c = this.bzd2x;
            c ? this.bzd2x = u : c = this.bzj2x;
            for (var d = 0; d < b; d++) e[a + d] ^= c[d]
        },
        q = (d.BlockCipherMode = l.extend({
            createEncryptor: function(e, a) {
                return this.Encryptor.create(e, a)
            },
            createDecryptor: function(e, a) {
                return this.Decryptor.create(e, a)
            },
            init: function(e, a) {
                this.bzp2x = e;
                this.bzd2x = a
            }
        })).extend();
    q.Encryptor = q.extend({
        processBlock: function(e, a) {
            var b = this.bzp2x,
                c = b.blockSize;
            x.call(this, e, a, c);
            b.encryptBlock(e, a);
            this.bzj2x = e.slice(a, a + c)
        }
    });
    q.Decryptor = q.extend({
        processBlock: function(e, a) {
            var b = this.bzp2x,
                c = b.blockSize,
                d = e.slice(a, a + c);
            b.decryptBlock(e, a);
            x.call(this, e, a, c);
            this.bzj2x = d
        }
    });
    b = b.CBC = q;
    q = (p.pad = {}).Pkcs7 = {
        pad: function(a, b) {
            for (var c = 4 * b, c = c - a.sigBytes % c, d = c << 24 | c << 16 | c << 8 | c, l = [], n = 0; n < c; n += 4) l.push(d);
            c = s.create(l, c);
            a.concat(c)
        },
        unpad: function(a) {
            a.sigBytes -= a.words[a.sigBytes - 1 >>> 2] & 255
        }
    };
    d.BlockCipher = v.extend({
        cfg: v.cfg.extend({
            mode: b,
            padding: q
        }),
        reset: function() {
            v.reset.call(this);
            var a = this.cfg,
                b = a.iv,
                a = a.mode;
            if (this.byY2x == this.bfc8U) var c = a.createEncryptor;
            else c = a.createDecryptor, this.byk2x = 1;
            this.eC2x = c.call(a, this, b && b.words)
        },
        byH2x: function(a, b) {
            this.eC2x.processBlock(a, b)
        },
        Vx5C: function() {
            var a = this.cfg.padding;
            if (this.byY2x == this.bfc8U) {
                a.pad(this.j0x, this.blockSize);
                var b = this.zs8k(!0)
            } else b = this.zs8k(!0), a.unpad(b);
            return b
        },
        blockSize: 4
    });
    var n = d.CipherParams = l.extend({
            init: function(a) {
                this.mixIn(a)
            },
            toString: function(a) {
                return (a || this.formatter).stringify(this)
            }
        }),
        b = (p.format = {}).OpenSSL = {
            stringify: function(a) {
                var b = a.ciphertext;
                a = a.salt;
                return (a ? s.create([1398893684, 1701076831]).concat(a).concat(b) : b).toString(r)
            },
            parse: function(a) {
                a = r.parse(a);
                var b = a.words;
                if (1398893684 == b[0] && 1701076831 == b[1]) {
                    var c = s.create(b.slice(2, 4));
                    b.splice(0, 4);
                    a.sigBytes -= 16
                }
                return n.create({
                    ciphertext: a,
                    salt: c
                })
            }
        },
        a = d.SerializableCipher = l.extend({
            cfg: l.extend({
                format: b
            }),
            encrypt: function(a, b, c, d) {
                d = this.cfg.extend(d);
                var l = a.createEncryptor(c, d);
                b = l.finalize(b);
                l = l.cfg;
                return n.create({
                    ciphertext: b,
                    key: c,
                    iv: l.iv,
                    algorithm: a,
                    mode: l.mode,
                    padding: l.padding,
                    blockSize: a.blockSize,
                    formatter: d.format
                })
            },
            decrypt: function(a, b, c, d) {
                d = this.cfg.extend(d);
                b = this.YH5M(b, d.format);
                return a.createDecryptor(c, d).finalize(b.ciphertext)
            },
            YH5M: function(a, b) {
                return "string" == typeof a ? b.parse(a, this) : a
            }
        }),
        p = (p.kdf = {}).OpenSSL = {
            execute: function(a, b, c, d) {
                d || (d = s.random(8));
                a = w.create({
                    keySize: b + c
                }).compute(a, d);
                c = s.create(a.words.slice(b), 4 * c);
                a.sigBytes = 4 * b;
                return n.create({
                    key: a,
                    iv: c,
                    salt: d
                })
            }
        },
        c = d.PasswordBasedCipher = a.extend({
            cfg: a.cfg.extend({
                kdf: p
            }),
            encrypt: function(b, c, d, l) {
                l = this.cfg.extend(l);
                d = l.kdf.execute(d, b.keySize, b.ivSize);
                l.iv = d.iv;
                b = a.encrypt.call(this, b, c, d.key, l);
                b.mixIn(d);
                return b
            },
            decrypt: function(b, c, d, l) {
                l = this.cfg.extend(l);
                c = this.YH5M(c, l.format);
                d = l.kdf.execute(d, b.keySize, b.ivSize, c.salt);
                l.iv = d.iv;
                return a.decrypt.call(this, b, c, d.key, l)
            }
        })
}();
(function() {
    for (var u = CryptoJS, p = u.lib.BlockCipher, d = u.algo, l = [], s = [], t = [], r = [], w = [], v = [], b = [], x = [], q = [], n = [], a = [], c = 0; 256 > c; c++) a[c] = 128 > c ? c << 1 : c << 1 ^ 283;
    for (var e = 0, j = 0, c = 0; 256 > c; c++) {
        var k = j ^ j << 1 ^ j << 2 ^ j << 3 ^ j << 4,
            k = k >>> 8 ^ k & 255 ^ 99;
        l[e] = k;
        s[k] = e;
        var z = a[e],
            F = a[z],
            G = a[F],
            y = 257 * a[k] ^ 16843008 * k;
        t[e] = y << 24 | y >>> 8;
        r[e] = y << 16 | y >>> 16;
        w[e] = y << 8 | y >>> 24;
        v[e] = y;
        y = 16843009 * G ^ 65537 * F ^ 257 * z ^ 16843008 * e;
        b[k] = y << 24 | y >>> 8;
        x[k] = y << 16 | y >>> 16;
        q[k] = y << 8 | y >>> 24;
        n[k] = y;
        e ? (e = z ^ a[a[a[G ^ z]]], j ^= a[a[j]]) : e = j = 1
    }
    var H = [0, 1, 2, 4, 8, 16, 32, 64, 128, 27, 54],
        d = d.AES = p.extend({
            bfe8W: function() {
                for (var a = this.J0x, c = a.words, d = a.sigBytes / 4, a = 4 * ((this.cnM0x = d + 6) + 1), e = this.cnL0x = [], j = 0; j < a; j++) if (j < d) e[j] = c[j];
                else {
                    var k = e[j - 1];
                    j % d ? 6 < d && 4 == j % d && (k = l[k >>> 24] << 24 | l[k >>> 16 & 255] << 16 | l[k >>> 8 & 255] << 8 | l[k & 255]) : (k = k << 8 | k >>> 24, k = l[k >>> 24] << 24 | l[k >>> 16 & 255] << 16 | l[k >>> 8 & 255] << 8 | l[k & 255], k ^= H[j / d | 0] << 24);
                    e[j] = e[j - d] ^ k
                }
                c = this.cnJ0x = [];
                for (d = 0; d < a; d++) j = a - d, k = d % 4 ? e[j] : e[j - 4], c[d] = 4 > d || 4 >= j ? k : b[l[k >>> 24]] ^ x[l[k >>> 16 & 255]] ^ q[l[k >>> 8 & 255]] ^ n[l[k & 255]]
            },
            encryptBlock: function(a, b) {
                this.bzq2x(a, b, this.cnL0x, t, r, w, v, l)
            },
            decryptBlock: function(a, c) {
                var d = a[c + 1];
                a[c + 1] = a[c + 3];
                a[c + 3] = d;
                this.bzq2x(a, c, this.cnJ0x, b, x, q, n, s);
                d = a[c + 1];
                a[c + 1] = a[c + 3];
                a[c + 3] = d
            },
            bzq2x: function(a, b, c, d, e, j, l, f) {
                for (var m = this.cnM0x, g = a[b] ^ c[0], h = a[b + 1] ^ c[1], k = a[b + 2] ^ c[2], n = a[b + 3] ^ c[3], p = 4, r = 1; r < m; r++) var q = d[g >>> 24] ^ e[h >>> 16 & 255] ^ j[k >>> 8 & 255] ^ l[n & 255] ^ c[p++],
                    s = d[h >>> 24] ^ e[k >>> 16 & 255] ^ j[n >>> 8 & 255] ^ l[g & 255] ^ c[p++],
                    t = d[k >>> 24] ^ e[n >>> 16 & 255] ^ j[g >>> 8 & 255] ^ l[h & 255] ^ c[p++],
                    n = d[n >>> 24] ^ e[g >>> 16 & 255] ^ j[h >>> 8 & 255] ^ l[k & 255] ^ c[p++],
                    g = q,
                    h = s,
                    k = t;
                q = (f[g >>> 24] << 24 | f[h >>> 16 & 255] << 16 | f[k >>> 8 & 255] << 8 | f[n & 255]) ^ c[p++];
                s = (f[h >>> 24] << 24 | f[k >>> 16 & 255] << 16 | f[n >>> 8 & 255] << 8 | f[g & 255]) ^ c[p++];
                t = (f[k >>> 24] << 24 | f[n >>> 16 & 255] << 16 | f[g >>> 8 & 255] << 8 | f[h & 255]) ^ c[p++];
                n = (f[n >>> 24] << 24 | f[g >>> 16 & 255] << 16 | f[h >>> 8 & 255] << 8 | f[k & 255]) ^ c[p++];
                a[b] = q;
                a[b + 1] = s;
                a[b + 2] = t;
                a[b + 3] = n
            },
            keySize: 8
        });
    u.AES = p.bfg8Y(d)
})();

function RSAKeyPair(a, b, c) {
    this.e = biFromHex(a), this.d = biFromHex(b), this.m = biFromHex(c), this.chunkSize = 2 * biHighIndex(this.m), this.radix = 16, this.barrett = new BarrettMu(this.m)
}
function twoDigit(a) {
    return (10 > a ? "0" : "") + String(a)
}
function encryptedString(a, b) {
    for (var f, g, h, i, j, k, l, c = new Array, d = b.length, e = 0; d > e;) c[e] = b.charCodeAt(e), e++;
    for (; 0 != c.length % a.chunkSize;) c[e++] = 0;
    for (f = c.length, g = "", e = 0; f > e; e += a.chunkSize) {
        for (j = new BigInt, h = 0, i = e; i < e + a.chunkSize; ++h) j.digits[h] = c[i++], j.digits[h] += c[i++] << 8;
        k = a.barrett.powMod(j, a.e), l = 16 == a.radix ? biToHex(k) : biToString(k, a.radix), g += l + " "
    }
    return g.substring(0, g.length - 1)
}
function decryptedString(a, b) {
    var e, f, g, h, c = b.split(" "),
        d = "";
    for (e = 0; e < c.length; ++e) for (h = 16 == a.radix ? biFromHex(c[e]) : biFromString(c[e], a.radix), g = a.barrett.powMod(h, a.d), f = 0; f <= biHighIndex(g); ++f) d += String.fromCharCode(255 & g.digits[f], g.digits[f] >> 8);
    return 0 == d.charCodeAt(d.length - 1) && (d = d.substring(0, d.length - 1)), d
}
function setMaxDigits(a) {
    maxDigits = a, ZERO_ARRAY = new Array(maxDigits);
    for (var b = 0; b < ZERO_ARRAY.length; b++) ZERO_ARRAY[b] = 0;
    bigZero = new BigInt, bigOne = new BigInt, bigOne.digits[0] = 1
}
function BigInt(a) {
    this.digits = "boolean" == typeof a && 1 == a ? null : ZERO_ARRAY.slice(0), this.isNeg = !1
}
function biFromDecimal(a) {
    for (var d, e, f, b = "-" == a.charAt(0), c = b ? 1 : 0; c < a.length && "0" == a.charAt(c);)++c;
    if (c == a.length) d = new BigInt;
    else {
        for (e = a.length - c, f = e % dpl10, 0 == f && (f = dpl10), d = biFromNumber(Number(a.substr(c, f))), c += f; c < a.length;) d = biAdd(biMultiply(d, lr10), biFromNumber(Number(a.substr(c, dpl10)))), c += dpl10;
        d.isNeg = b
    }
    return d
}
function biCopy(a) {
    var b = new BigInt(!0);
    return b.digits = a.digits.slice(0), b.isNeg = a.isNeg, b
}
function biFromNumber(a) {
    var c, b = new BigInt;
    for (b.isNeg = 0 > a, a = Math.abs(a), c = 0; a > 0;) b.digits[c++] = a & maxDigitVal, a >>= biRadixBits;
    return b
}
function reverseStr(a) {
    var c, b = "";
    for (c = a.length - 1; c > -1; --c) b += a.charAt(c);
    return b
}
function biToString(a, b) {
    var d, e, c = new BigInt;
    for (c.digits[0] = b, d = biDivideModulo(a, c), e = hexatrigesimalToChar[d[1].digits[0]]; 1 == biCompare(d[0], bigZero);) d = biDivideModulo(d[0], c), digit = d[1].digits[0], e += hexatrigesimalToChar[d[1].digits[0]];
    return (a.isNeg ? "-" : "") + reverseStr(e)
}
function biToDecimal(a) {
    var c, d, b = new BigInt;
    for (b.digits[0] = 10, c = biDivideModulo(a, b), d = String(c[1].digits[0]); 1 == biCompare(c[0], bigZero);) c = biDivideModulo(c[0], b), d += String(c[1].digits[0]);
    return (a.isNeg ? "-" : "") + reverseStr(d)
}
function digitToHex(a) {
    var b = 15,
        c = "";
    for (i = 0; 4 > i; ++i) c += hexToChar[a & b], a >>>= 4;
    return reverseStr(c)
}
function biToHex(a) {
    var d, b = "";
    for (biHighIndex(a), d = biHighIndex(a); d > -1; --d) b += digitToHex(a.digits[d]);
    return b
}
function charToHex(a) {
    var h, b = 48,
        c = b + 9,
        d = 97,
        e = d + 25,
        f = 65,
        g = 90;
    return h = a >= b && c >= a ? a - b : a >= f && g >= a ? 10 + a - f : a >= d && e >= a ? 10 + a - d : 0
}
function hexToDigit(a) {
    var d, b = 0,
        c = Math.min(a.length, 4);
    for (d = 0; c > d; ++d) b <<= 4, b |= charToHex(a.charCodeAt(d));
    return b
}
function biFromHex(a) {
    var d, e, b = new BigInt,
        c = a.length;
    for (d = c, e = 0; d > 0; d -= 4, ++e) b.digits[e] = hexToDigit(a.substr(Math.max(d - 4, 0), Math.min(d, 4)));
    return b
}
function biFromString(a, b) {
    var g, h, i, j, c = "-" == a.charAt(0),
        d = c ? 1 : 0,
        e = new BigInt,
        f = new BigInt;
    for (f.digits[0] = 1, g = a.length - 1; g >= d; g--) h = a.charCodeAt(g), i = charToHex(h), j = biMultiplyDigit(f, i), e = biAdd(e, j), f = biMultiplyDigit(f, b);
    return e.isNeg = c, e
}
function biDump(a) {
    return (a.isNeg ? "-" : "") + a.digits.join(" ")
}
function biAdd(a, b) {
    var c, d, e, f;
    if (a.isNeg != b.isNeg) b.isNeg = !b.isNeg, c = biSubtract(a, b), b.isNeg = !b.isNeg;
    else {
        for (c = new BigInt, d = 0, f = 0; f < a.digits.length; ++f) e = a.digits[f] + b.digits[f] + d, c.digits[f] = 65535 & e, d = Number(e >= biRadix);
        c.isNeg = a.isNeg
    }
    return c
}
function biSubtract(a, b) {
    var c, d, e, f;
    if (a.isNeg != b.isNeg) b.isNeg = !b.isNeg, c = biAdd(a, b), b.isNeg = !b.isNeg;
    else {
        for (c = new BigInt, e = 0, f = 0; f < a.digits.length; ++f) d = a.digits[f] - b.digits[f] + e, c.digits[f] = 65535 & d, c.digits[f] < 0 && (c.digits[f] += biRadix), e = 0 - Number(0 > d);
        if (-1 == e) {
            for (e = 0, f = 0; f < a.digits.length; ++f) d = 0 - c.digits[f] + e, c.digits[f] = 65535 & d, c.digits[f] < 0 && (c.digits[f] += biRadix), e = 0 - Number(0 > d);
            c.isNeg = !a.isNeg
        } else c.isNeg = a.isNeg
    }
    return c
}
function biHighIndex(a) {
    for (var b = a.digits.length - 1; b > 0 && 0 == a.digits[b];)--b;
    return b
}
function biNumBits(a) {
    var e, b = biHighIndex(a),
        c = a.digits[b],
        d = (b + 1) * bitsPerDigit;
    for (e = d; e > d - bitsPerDigit && 0 == (32768 & c); --e) c <<= 1;
    return e
}
function biMultiply(a, b) {
    var d, h, i, k, c = new BigInt,
        e = biHighIndex(a),
        f = biHighIndex(b);
    for (k = 0; f >= k; ++k) {
        for (d = 0, i = k, j = 0; e >= j; ++j, ++i) h = c.digits[i] + a.digits[j] * b.digits[k] + d, c.digits[i] = h & maxDigitVal, d = h >>> biRadixBits;
        c.digits[k + e + 1] = d
    }
    return c.isNeg = a.isNeg != b.isNeg, c
}
function biMultiplyDigit(a, b) {
    var c, d, e, f;
    for (result = new BigInt, c = biHighIndex(a), d = 0, f = 0; c >= f; ++f) e = result.digits[f] + a.digits[f] * b + d, result.digits[f] = e & maxDigitVal, d = e >>> biRadixBits;
    return result.digits[1 + c] = d, result
}
function arrayCopy(a, b, c, d, e) {
    var g, h, f = Math.min(b + e, a.length);
    for (g = b, h = d; f > g; ++g, ++h) c[h] = a[g]
}
function biShiftLeft(a, b) {
    var e, f, g, h, c = Math.floor(b / bitsPerDigit),
        d = new BigInt;
    for (arrayCopy(a.digits, 0, d.digits, c, d.digits.length - c), e = b % bitsPerDigit, f = bitsPerDigit - e, g = d.digits.length - 1, h = g - 1; g > 0; --g, --h) d.digits[g] = d.digits[g] << e & maxDigitVal | (d.digits[h] & highBitMasks[e]) >>> f;
    return d.digits[0] = d.digits[g] << e & maxDigitVal, d.isNeg = a.isNeg, d
}
function biShiftRight(a, b) {
    var e, f, g, h, c = Math.floor(b / bitsPerDigit),
        d = new BigInt;
    for (arrayCopy(a.digits, c, d.digits, 0, a.digits.length - c), e = b % bitsPerDigit, f = bitsPerDigit - e, g = 0, h = g + 1; g < d.digits.length - 1; ++g, ++h) d.digits[g] = d.digits[g] >>> e | (d.digits[h] & lowBitMasks[e]) << f;
    return d.digits[d.digits.length - 1] >>>= e, d.isNeg = a.isNeg, d
}
function biMultiplyByRadixPower(a, b) {
    var c = new BigInt;
    return arrayCopy(a.digits, 0, c.digits, b, c.digits.length - b), c
}
function biDivideByRadixPower(a, b) {
    var c = new BigInt;
    return arrayCopy(a.digits, b, c.digits, 0, c.digits.length - b), c
}
function biModuloByRadixPower(a, b) {
    var c = new BigInt;
    return arrayCopy(a.digits, 0, c.digits, 0, b), c
}
function biCompare(a, b) {
    if (a.isNeg != b.isNeg) return 1 - 2 * Number(a.isNeg);
    for (var c = a.digits.length - 1; c >= 0; --c) if (a.digits[c] != b.digits[c]) return a.isNeg ? 1 - 2 * Number(a.digits[c] > b.digits[c]) : 1 - 2 * Number(a.digits[c] < b.digits[c]);
    return 0
}
function biDivideModulo(a, b) {
    var f, g, h, i, j, k, l, m, n, o, p, q, r, s, c = biNumBits(a),
        d = biNumBits(b),
        e = b.isNeg;
    if (d > c) return a.isNeg ? (f = biCopy(bigOne), f.isNeg = !b.isNeg, a.isNeg = !1, b.isNeg = !1, g = biSubtract(b, a), a.isNeg = !0, b.isNeg = e) : (f = new BigInt, g = biCopy(a)), new Array(f, g);
    for (f = new BigInt, g = a, h = Math.ceil(d / bitsPerDigit) - 1, i = 0; b.digits[h] < biHalfRadix;) b = biShiftLeft(b, 1), ++i, ++d, h = Math.ceil(d / bitsPerDigit) - 1;
    for (g = biShiftLeft(g, i), c += i, j = Math.ceil(c / bitsPerDigit) - 1, k = biMultiplyByRadixPower(b, j - h); - 1 != biCompare(g, k);)++f.digits[j - h], g = biSubtract(g, k);
    for (l = j; l > h; --l) {
        for (m = l >= g.digits.length ? 0 : g.digits[l], n = l - 1 >= g.digits.length ? 0 : g.digits[l - 1], o = l - 2 >= g.digits.length ? 0 : g.digits[l - 2], p = h >= b.digits.length ? 0 : b.digits[h], q = h - 1 >= b.digits.length ? 0 : b.digits[h - 1], f.digits[l - h - 1] = m == p ? maxDigitVal : Math.floor((m * biRadix + n) / p), r = f.digits[l - h - 1] * (p * biRadix + q), s = m * biRadixSquared + (n * biRadix + o); r > s;)--f.digits[l - h - 1], r = f.digits[l - h - 1] * (p * biRadix | q), s = m * biRadix * biRadix + (n * biRadix + o);
        k = biMultiplyByRadixPower(b, l - h - 1), g = biSubtract(g, biMultiplyDigit(k, f.digits[l - h - 1])), g.isNeg && (g = biAdd(g, k), --f.digits[l - h - 1])
    }
    return g = biShiftRight(g, i), f.isNeg = a.isNeg != e, a.isNeg && (f = e ? biAdd(f, bigOne) : biSubtract(f, bigOne), b = biShiftRight(b, i), g = biSubtract(b, g)), 0 == g.digits[0] && 0 == biHighIndex(g) && (g.isNeg = !1), new Array(f, g)
}
function biDivide(a, b) {
    return biDivideModulo(a, b)[0]
}
function biModulo(a, b) {
    return biDivideModulo(a, b)[1]
}
function biMultiplyMod(a, b, c) {
    return biModulo(biMultiply(a, b), c)
}
function biPow(a, b) {
    for (var c = bigOne, d = a;;) {
        if (0 != (1 & b) && (c = biMultiply(c, d)), b >>= 1, 0 == b) break;
        d = biMultiply(d, d)
    }
    return c
}
function biPowMod(a, b, c) {
    for (var d = bigOne, e = a, f = b;;) {
        if (0 != (1 & f.digits[0]) && (d = biMultiplyMod(d, e, c)), f = biShiftRight(f, 1), 0 == f.digits[0] && 0 == biHighIndex(f)) break;
        e = biMultiplyMod(e, e, c)
    }
    return d
}
function BarrettMu(a) {
    this.modulus = biCopy(a), this.k = biHighIndex(this.modulus) + 1;
    var b = new BigInt;
    b.digits[2 * this.k] = 1, this.mu = biDivide(b, this.modulus), this.bkplus1 = new BigInt, this.bkplus1.digits[this.k + 1] = 1, this.modulo = BarrettMu_modulo, this.multiplyMod = BarrettMu_multiplyMod, this.powMod = BarrettMu_powMod
}
function BarrettMu_modulo(a) {
    var i, b = biDivideByRadixPower(a, this.k - 1),
        c = biMultiply(b, this.mu),
        d = biDivideByRadixPower(c, this.k + 1),
        e = biModuloByRadixPower(a, this.k + 1),
        f = biMultiply(d, this.modulus),
        g = biModuloByRadixPower(f, this.k + 1),
        h = biSubtract(e, g);
    for (h.isNeg && (h = biAdd(h, this.bkplus1)), i = biCompare(h, this.modulus) >= 0; i;) h = biSubtract(h, this.modulus), i = biCompare(h, this.modulus) >= 0;
    return h
}
function BarrettMu_multiplyMod(a, b) {
    var c = biMultiply(a, b);
    return this.modulo(c)
}
function BarrettMu_powMod(a, b) {
    var d, e, c = new BigInt;
    for (c.digits[0] = 1, d = a, e = b;;) {
        if (0 != (1 & e.digits[0]) && (c = this.multiplyMod(c, d)), e = biShiftRight(e, 1), 0 == e.digits[0] && 0 == biHighIndex(e)) break;
        d = this.multiplyMod(d, d)
    }
    return c
}
var maxDigits, ZERO_ARRAY, bigZero, bigOne, dpl10, lr10, hexatrigesimalToChar, hexToChar, highBitMasks, lowBitMasks, biRadixBase = 2,
    biRadixBits = 16,
    bitsPerDigit = biRadixBits,
    biRadix = 65536,
    biHalfRadix = biRadix >>> 1,
    biRadixSquared = biRadix * biRadix,
    maxDigitVal = biRadix - 1,
    maxInteger = 9999999999999998;
setMaxDigits(20), dpl10 = 15, lr10 = biFromNumber(1e15), hexatrigesimalToChar = new Array("0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"), hexToChar = new Array("0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f"), highBitMasks = new Array(0, 32768, 49152, 57344, 61440, 63488, 64512, 65024, 65280, 65408, 65472, 65504, 65520, 65528, 65532, 65534, 65535), lowBitMasks = new Array(0, 1, 3, 7, 15, 31, 63, 127, 255, 511, 1023, 2047, 4095, 8191, 16383, 32767, 65535);
!
    function() {
        function a(a) {
            var d, e, b = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
                c = "";
            for (d = 0; a > d; d += 1) e = Math.random() * b.length, e = Math.floor(e), c += b.charAt(e);
            return c
        }
        function b(a, b) {
            var c = CryptoJS.enc.Utf8.parse(b),
                d = CryptoJS.enc.Utf8.parse("0102030405060708"),
                e = CryptoJS.enc.Utf8.parse(a),
                f = CryptoJS.AES.encrypt(e, c, {
                    iv: d,
                    mode: CryptoJS.mode.CBC
                });
            return f.toString()
        }
        function c(a, b, c) {
            var d, e;
            return setMaxDigits(131), d = new RSAKeyPair(b, "", c), e = encryptedString(d, a)
        }
        function d(d, e, f, g) {
            var h = {},
                i = a(16);
            return h.encText = b(d, g), h.encText = b(h.encText, i), h.encSecKey = c(i, e, f), h
        }
        function e(a, b, d, e) {
            var f = {};
            return f.encText = c(a + e, b, d), f
        }
        window.asrsea = d, window.ecnonasr = e
    }();
(function() {
    var c0x = NEJ.P,
        dO2x = c0x("nej.g"),
        v0x = c0x("nej.j"),
        k0x = c0x("nej.u"),
        Pw3x = c0x("nm.x.ek");
    Pw3x.emj = {
        "色": "00e0b",
        "流感": "509f6",
        "这边": "259df",
        "弱": "8642d",
        "嘴唇": "bc356",
        "亲": "62901",
        "开心": "477df",
        "呲牙": "22677",
        "憨笑": "ec152",
        "猫": "b5ff6",
        "皱眉": "8ace6",
        "幽灵": "15bb7",
        "蛋糕": "b7251",
        "发怒": "52b3a",
        "大哭": "b17a8",
        "兔子": "76aea",
        "星星": "8a5aa",
        "钟情": "76d2e",
        "牵手": "41762",
        "公鸡": "9ec4e",
        "爱意": "e341f",
        "禁止": "56135",
        "狗": "fccf6",
        "亲亲": "95280",
        "叉": "104e0",
        "礼物": "312ec",
        "晕": "bda92",
        "呆": "557c9",
        "生病": "38701",
        "钻石": "14af6",
        "拜": "c9d05",
        "怒": "c4f7f",
        "示爱": "0c368",
        "汗": "5b7a4",
        "小鸡": "6bee2",
        "痛苦": "55932",
        "撇嘴": "575cc",
        "惶恐": "e10b4",
        "口罩": "24d81",
        "吐舌": "3cfe4",
        "心碎": "875d3",
        "生气": "e8204",
        "可爱": "7b97d",
        "鬼脸": "def52",
        "跳舞": "741d5",
        "男孩": "46b8e",
        "奸笑": "289dc",
        "猪": "6935b",
        "圈": "3ece0",
        "便便": "462db",
        "外星": "0a22b",
        "圣诞": "8e7",
        "流泪": "01000",
        "强": "1",
        "爱心": "0CoJU",
        "女孩": "m6Qyw",
        "惊恐": "8W8ju",
        "大笑": "d"
    };
    Pw3x.md = ["色", "流感", "这边", "弱", "嘴唇", "亲", "开心", "呲牙", "憨笑", "猫", "皱眉", "幽灵", "蛋糕", "发怒", "大哭", "兔子", "星星", "钟情", "牵手", "公鸡", "爱意", "禁止", "狗", "亲亲", "叉", "礼物", "晕", "呆", "生病", "钻石", "拜", "怒", "示爱", "汗", "小鸡", "痛苦", "撇嘴", "惶恐", "口罩", "吐舌", "心碎", "生气", "可爱", "鬼脸", "跳舞", "男孩", "奸笑", "猪", "圈", "便便", "外星", "圣诞"]
})();
(function() {
    var c0x = NEJ.P,
        dO2x = c0x("nej.g"),
        v0x = c0x("nej.j"),
        k0x = c0x("nej.u"),
        Pw3x = c0x("nm.x.ek"),
        l0x = c0x("nm.x");
    if (v0x.br0x.redefine) return;
    window.GEnc = true;
    var beY8Q = function(cnB0x) {
        var n0x = [];
        k0x.be0x(cnB0x, function(cnA0x) {
            n0x.push(Pw3x.emj[cnA0x])
        });
        return n0x.join("")
    };
    var cnz0x = v0x.br0x;
    v0x.br0x = function(V0x, e0x) {
        var j0x = {},
            e0x = NEJ.X({}, e0x),
            lz4D = V0x.indexOf("?");
        if (window.GEnc && /(^|\.com)\/api/.test(V0x) && !(e0x.headers && e0x.headers[dO2x.wB7u] == dO2x.CC9t) && !e0x.noEnc) {
            if (lz4D != -1) {
                j0x = k0x.ho3x(V0x.substring(lz4D + 1));
                V0x = V0x.substring(0, lz4D)
            }
            if (e0x.query) {
                j0x = NEJ.X(j0x, k0x.fj2x(e0x.query) ? k0x.ho3x(e0x.query) : e0x.query)
            }
            if (e0x.data) {
                j0x = NEJ.X(j0x, k0x.fj2x(e0x.data) ? k0x.ho3x(e0x.data) : e0x.data)
            }
            j0x["csrf_token"] = v0x.gE2x("__csrf");
            V0x = V0x.replace("api", "weapi");
            e0x.method = "post";
            delete e0x.query;
            var bzE2x = window.asrsea(JSON.stringify(j0x), beY8Q(["流泪", "强"]), beY8Q(Pw3x.md), beY8Q(["爱心", "女孩", "惊恐", "大笑"]));
            e0x.data = k0x.dh1x({
                params: bzE2x.encText,
                encSecKey: bzE2x.encSecKey
            })
        }
        cnz0x(V0x, e0x)
    };
    v0x.br0x.redefine = true
})();
(function() {})();
(function() {
    var c0x = NEJ.P,
        a9j = c0x("nej.e"),
        cG1x = c0x("nej.p"),
        k0x = c0x("nej.u"),
        h0x = c0x("nej.v"),
        v0x = c0x("nej.j"),
        dg1x = c0x("nm.u"),
        l0x = c0x("nm.x"),
        p0x = c0x("nm.d"),
        m0x = c0x("nm.l"),
        beU8M = "http://s1.music.126.net/style/web2/emt/emoji_{ID}.png",
        j0x = {
            "大笑": "86",
            "可爱": "85",
            "憨笑": "359",
            "色": "95",
            "亲亲": "363",
            "惊恐": "96",
            "流泪": "356",
            "亲": "362",
            "呆": "352",
            "哀伤": "342",
            "呲牙": "343",
            "吐舌": "348",
            "撇嘴": "353",
            "怒": "361",
            "奸笑": "341",
            "汗": "97",
            "痛苦": "346",
            "惶恐": "354",
            "生病": "350",
            "口罩": "351",
            "大哭": "357",
            "晕": "355",
            "发怒": "115",
            "开心": "360",
            "鬼脸": "94",
            "皱眉": "87",
            "流感": "358",
            "爱心": "33",
            "心碎": "34",
            "钟情": "303",
            "星星": "309",
            "生气": "314",
            "便便": "89",
            "强": "13",
            "弱": "372",
            "拜": "14",
            "牵手": "379",
            "跳舞": "380",
            "禁止": "374",
            "这边": "262",
            "爱意": "106",
            "示爱": "376",
            "嘴唇": "367",
            "狗": "81",
            "猫": "78",
            "猪": "100",
            "兔子": "459",
            "小鸡": "450",
            "公鸡": "461",
            "幽灵": "116",
            "圣诞": "411",
            "外星": "101",
            "钻石": "52",
            "礼物": "107",
            "男孩": "0",
            "女孩": "1",
            "蛋糕": "337",
            18: "186",
            "圈": "312",
            "叉": "313"
        },
        cnw0x = function() {
            if (h0x && h0x.A0x) {
                h0x.dispatchEventalias = h0x.A0x
            }
        };
    cnw0x();
    l0x.beS8K = function(bJ0x) {
        if (!bJ0x || bJ0x.copyrightId === undefined || !! bJ0x.program) return false;
        if (window.GAbroad) {
            bJ0x.fee = 0;
            return true
        }
        if (bJ0x.status < 0) return true;
        var PM3x;
        if (typeof GCopyrights !== "undefined") PM3x = GCopyrights;
        try {
            if (!PM3x && !! top.GCopyrights) PM3x = top.GCopyrights
        } catch (e) {}
        if (PM3x) {
            var s0x = k0x.cT1x(PM3x, bJ0x.copyrightId);
            if (s0x >= 0) return true
        }
        return false
    };
    l0x.beR8J = function() {
        var zp8h = /^\/m\/(song|album|artist|playlist|dj|search)\?/,
            uf7Y = {
                2: "artist",
                13: "playlist",
                17: "dj",
                19: "album",
                18: "song",
                31: "toplist",
                32: "searchsong",
                33: "searchlyric",
                34: "event",
                70: "djradio",
                24: "day",
                50: "record"
            },
            cnv0x = {
                song: "单曲",
                album: "专辑",
                artist: "歌手",
                playlist: "歌单",
                dj: "电台节目",
                searchsong: "单曲搜索",
                searchlyric: "歌词搜索",
                toplist: "榜单",
                event: "动态",
                djradio: "电台",
                day: "每日歌曲推荐",
                record: "听歌排行榜"
            };
        var cnu0x = function(J0x, j0x, PX3x) {
            switch (J0x) {
                case "event":
                    j0x = j0x.split("|");
                    return "/event?id=" + j0x[0] + "&uid=" + j0x[1];
                case "searchsong":
                case "searchlyric":
                    var t0x = J0x == "searchsong" ? 1 : 1006;
                    return "/search/m/?s=" + encodeURIComponent(j0x) + "&type=" + t0x;
                case "toplist":
                    return "/discover/toplist?id=" + j0x + "&_hash=songlist-" + PX3x;
                case "day":
                    return "/discover/recommend/taste" + "?_hash=songlist-" + PX3x;;
                case "record":
                    j0x = j0x.split("|");
                    return "/user/songs/rank?id=" + j0x[0] + "&cat=" + j0x[1];
                    break;
                default:
                    return "/" + J0x + "?id=" + j0x + "&_hash=songlist-" + PX3x
            }
        };
        return function(dG2x, PX3x) {
            if (!dG2x) return null;
            var EV0x = dG2x.fid || (dG2x.type != 18 ? dG2x.type : null),
                beP8H = dG2x.fdata || dG2x.rid,
                bAv2x = dG2x.page || dG2x.fhref;
            var J0x = uf7Y[EV0x];
            if (!J0x) {
                var vT7M = (bAv2x || "").match(zp8h);
                if (vT7M) J0x = vT7M[1]
            }
            if (!J0x) return null;
            return {
                title: cnv0x[J0x],
                link: !uf7Y[EV0x] ? bAv2x : cnu0x(J0x, beP8H, PX3x),
                fid: EV0x,
                fdata: beP8H
            }
        }
    }();
    l0x.Vu5z = function(kj4n) {
        var dp1x = kj4n;
        if (typeof GUser !== "undefined" && GUser.userId > 0) dp1x = GUser;
        return dp1x
    };
    l0x.gQ2x = function() {
        if (typeof GUser !== "undefined" && GUser.userId > 0) {
            return true
        } else {
            top.login();
            return false
        }
    };
    l0x.FL0x = function() {
        var zp8h = /#(.*?)$/;
        return function(fX2x) {
            var iE4I = fX2x === false ? location : top.location;
            return zp8h.test(iE4I.href) ? RegExp.$1 : ""
        }
    }();
    l0x.zo8g = function() {
        var bAQ2x = l0x.beN8F().supported,
            zn8f = a9j.cU1x("audio"),
            bAT2x = zn8f.canPlayType && zn8f.canPlayType("audio/mpeg");
        if (cG1x.IN1x.mac) {
            if (bAT2x) return 2;
            if (bAQ2x) return 1;
            return 0
        } else {
            if (bAQ2x) return 1;
            if (bAT2x) return 2;
            return 0
        }
    };
    l0x.beN8F = function() {
        var fU2x, beM8E = !1,
            beL8D = "";
        if (cG1x.cP1x.browser == "ie") {
            try {
                fU2x = new ActiveXObject("ShockwaveFlash.ShockwaveFlash")
            } catch (e) {
                fU2x = null
            }
            if (fU2x) {
                beM8E = !0;
                beL8D = fU2x.GetVariable("$version")
            }
        } else {
            if (navigator.plugins && navigator.plugins.length > 0) {
                fU2x = navigator.plugins["Shockwave Flash"];
                if (fU2x) {
                    beM8E = !0;
                    beL8D = fU2x.description
                }
            }
        }
        return {
            supported: beM8E,
            version: beL8D
        }
    };
    l0x.qJ6D = function() {
        return "网易云音乐"
    };
    l0x.cnr0x = function() {
        return j0x
    };
    l0x.bBj2x = function(cY1x) {
        var C0x = j0x[cY1x];
        return C0x == null ? "" : beU8M.replace("{ID}", C0x)
    };
    l0x.ti7b = function(bi0x, dC2x, FW0x) {
        if (!bi0x) return "";
        if ( !! FW0x) {
            bi0x = l0x.cnp0x(bi0x)
        }
        return l0x.beH8z(l0x.cno0x(bi0x, dC2x))
    };
    l0x.beD8v = function() {
        var IQ1x = {
                AT: /(@([\u4e00-\u9fa5A-Za-z0-9-_]{2,})((?=[ :@：])|$))/g,
                LINK: /(@([\u4e00-\u9fa5A-Za-z0-9-_]{2,})((?=[ :@：])|$))|((http[s]{0,1}):\/\/[\-a-zA-Z0-9\.]+(:(6553[0-5]|655[0-2][0-9]|65[0-4][0-9][0-9]|6[0-4][0-9][0-9][0-9]|\\d{2,4}|[1-9]))?(\/[a-zA-Z0-9\\\.\-~!@#$%\^&\*\+\?:_\/=<>]*)?)/g,
                ACT_NOLINK: /(@([\u4e00-\u9fa5A-Za-z0-9-_]{2,})((?=[ :@：])|$))|(#[^\[\]\/\\\#\r\n]+?#)/g,
                ACT: /(@([\u4e00-\u9fa5A-Za-z0-9-_]{2,})((?=[ :@：])|$))|((http[s]{0,1}):\/\/[\-a-zA-Z0-9\.]+(:(6553[0-5]|655[0-2][0-9]|65[0-4][0-9][0-9]|6[0-4][0-9][0-9][0-9]|\\d{2,4}|[1-9]))?(\/[a-zA-Z0-9\\\.\-~!@#$%\^&\*\+\?:_\/=<>]*)?)|(#[^\[\]\/\\\#\r\n]+?#)/g,
                LING: /\n/g,
                BLANK: /\s/g,
                MLINE: /([ \f\r\t\v]*\n){2,}/g
            },
            beB8t = {
                LINK: '<a href="${url}" class="${klass}">${value}</a>',
                AT: '<a href="${url}" class="${klass}">@${value}</a>',
                ACT: '<a href="javascript:;" class="${klass}" data-title="${value}" data-action="activity">${value}</a>'
            },
            cnh0x = {
                r: /\<|\>|\&lt;|\&gt;|\&|\'|\"/g,
                "<": "&lt;",
                ">": "&gt;",
                "&": "&amp;",
                " ": "&nbsp;",
                '"': "&quot;",
                "'": "&#39;",
                "&lt;": "&lt;",
                "&gt;": "&gt;"
            },
            cng0x = ["AT", "LINK", "ACT_NOLINK", "ACT"];
        var cnf0x = function(dV2x, bez8r) {
            dV2x = Gl0x(dV2x);
            if ( !! bez8r) {
                dV2x = dV2x.replace(IQ1x.MLINE, "\n\n").replace(IQ1x.LING, "</br>")
            }
            dV2x = l0x.beH8z(dV2x);
            return dV2x
        };
        var Gl0x = function(bi0x) {
            return k0x.DN9E(cnh0x, bi0x)
        };
        return function(dV2x, e0x, dW2x) {
            e0x = e0x || {};
            dW2x = dW2x || {};
            dW2x.actHash = {};
            var cmZ0x = !! e0x.parseLink,
                cmY0x = !! e0x.parseAct,
                cmP0x = e0x.linkTpl || beB8t.LINK,
                cmN0x = e0x.atTpl || beB8t.AT,
                cmM0x = e0x.actTpl || beB8t.ACT,
                bez8r = !! e0x.keepSpace,
                bex8p = e0x.linkKlass || "s-fc7";
            crP1x = e0x.actBiJson || "";
            if (!dV2x) return "";
            dV2x = dV2x.trim().replace(/&amp;/g, "&").replace(/&nbsp;/g, " ");
            var Vq5v = cng0x[cmZ0x + 2 * cmY0x],
                cO1x = IQ1x[Vq5v],
                bs0x = null,
                kE4I = null,
                gs2x = 0,
                crQ1x = "",
                crR1x = "";
            var zh8Z = [];
            cO1x.lastIndex = 0;
            while (bs0x = cO1x.exec(dV2x)) {
                var fD2x = {
                    html: "",
                    before: bs0x.index - 1,
                    after: bs0x.index + bs0x[0].length
                };
                if (bs0x[1]) {
                    var kE4I = bs0x[2].replace(/[^\x00-\xff]/g, "**");
                    if (kE4I.length < 4 || kE4I.length > 32) {} else {
                        var JE1x = a9j.eg2x(cmN0x);
                        fD2x.html = a9j.bQ0x(JE1x, {
                            value: Gl0x(bs0x[2]),
                            url: encodeURI("/user/home?nickname=" + bs0x[2]),
                            klass: bex8p
                        });
                        zh8Z.push(fD2x)
                    }
                } else if (bs0x.length > 8 && bs0x[4]) {
                    var JE1x = a9j.eg2x(cmP0x);
                    fD2x.html = a9j.bQ0x(JE1x, {
                        value: Gl0x(bs0x[4]),
                        url: encodeURI(bs0x[4]),
                        klass: bex8p
                    });
                    zh8Z.push(fD2x)
                } else {
                    var bDE3x = Vq5v == "ACT_NOLINK" ? 4 : 9;
                    var JE1x = a9j.eg2x(cmM0x);
                    fD2x.html = a9j.bQ0x(JE1x, {
                        value: Gl0x(bs0x[bDE3x]),
                        klass: bex8p
                    });
                    zh8Z.push(fD2x);
                    dW2x.actHash[bs0x[bDE3x].slice(1, -1)] = true
                }
            }
            var cmH0x = zh8Z.length,
                kj4n = {
                    before: dV2x.length - 1,
                    after: 0
                },
                bev8n = "";
            for (var i = 0; i <= cmH0x; i++) {
                var iv3x, gq2x;
                iv3x = (zh8Z[i - 1] || kj4n).after;
                gq2x = (zh8Z[i] || kj4n).before;
                if (gq2x >= iv3x && iv3x >= 0 && gq2x <= dV2x.length - 1) {
                    bev8n += cnf0x(dV2x.substring(iv3x, gq2x + 1), bez8r)
                }
                if (zh8Z[i]) {
                    bev8n += zh8Z[i].html
                }
            }
            return bev8n
        }
    }();
    l0x.cnp0x = function() {
        var cO1x = new RegExp("(http[s]{0,1})://[-a-zA-Z0-9.]+(:(6553[0-5]|655[0-2][0-9]|65[0-4][0-9][0-9]|6[0-4][0-9][0-9][0-9]|\\d{2,4}|[1-9]))?(/[a-zA-Z0-9\\.\\-~!@#$%^&*+?:_/=<>]*)?", "g");
        return function(bi0x) {
            return (bi0x || "").replace(/&amp;/g, "&").replace(/&nbsp;/g, " ").replace(cO1x, function($0, $1) {
                return "<a href=" + $0 + ' class="link u-link"><i class="u-dicn u-dicn-28"></i>网页链接</a>'
            })
        }
    }();
    l0x.cno0x = function() {
        var cO1x = /@([a-zA-Z0-9_\-\u4E00-\u9FA5]+)/g;
        var ex2x = function(kE4I, dC2x) {
            return '<a href="/user/home?nickname=' + encodeURIComponent(kE4I) + '" class="' + (dC2x || "") + '">@' + kE4I + "</a>"
        };
        return function(bi0x, dC2x) {
            return (bi0x || "").replace(cO1x, function($0, $1) {
                return ex2x($1, dC2x)
            })
        }
    }();
    l0x.beH8z = function() {
        var cO1x = /\[(.*?)\]/g;
        return function(bi0x) {
            return (bi0x || "").replace(cO1x, function($1, $2) {
                var V0x = l0x.bBj2x($2);
                return !V0x ? $1 : '<img src="' + V0x + '"/>'
            })
        }
    }();
    l0x.ys8k = function(G0x, dC2x) {
        a9j.bz0x(G0x, dC2x) ? a9j.x0x(G0x, dC2x) : a9j.y0x(G0x, dC2x)
    };
    l0x.JI1x = function(cH1x, hw3x) {
        cH1x = a9j.w0x(cH1x);
        hw3x = a9j.w0x(hw3x);
        if (!cH1x || !hw3x) return !1;
        for (hw3x = hw3x.parentNode; !! hw3x && hw3x != cH1x; hw3x = hw3x.parentNode);
        return hw3x == cH1x
    };
    l0x.lj4n = function() {
        var bEm3x = function(fp2x) {
            return (fp2x < 10 ? "0" : "") + fp2x
        };
        return function(nI5N) {
            nI5N = parseInt(nI5N) || 0;
            if (!nI5N) return "00:00";
            var JL1x = Math.floor(nI5N % 60),
                cmD0x = Math.floor(nI5N / 60);
            return bEm3x(cmD0x) + ":" + bEm3x(JL1x)
        }
    }();
    l0x.xc8U = function(fi2x, tX7Q) {
        if (!fi2x || fi2x.length == 0) return "";
        tX7Q = tX7Q || "/";
        var bs0x = [];
        for (var i = fi2x.length - 1; i >= 0; i--) {
            bs0x.unshift(fi2x[i].name)
        }
        return bs0x.join(tX7Q)
    };
    l0x.pq5v = function() {
        var JY1x = function(hi3x, dC2x, cH1x) {
            if (!hi3x || !hi3x.name) return "";
            if (!hi3x.id) return '<span class="' + dC2x + '">' + k0x.dK2x(hi3x.name) + "</span>";
            return "<a" + (cH1x ? ' target="_blank"' : "") + ' class="' + dC2x + '" href="/artist?id=' + hi3x.id + '" hidefocus="true">' + k0x.dK2x(hi3x.name) + "</a>"
        };
        return function(fi2x, T0x, tX7Q, cH1x, bFB3x) {
            if (!fi2x || !fi2x.length) return "";
            tX7Q = tX7Q || "/";
            T0x = T0x || "";
            Gu0x = "";
            var eD2x = [];
            for (var i = 0, i0x = [], rp6j = [], gu2x; i < fi2x.length; ++i) {
                eD2x.push(fi2x[i].name);
                if (!fi2x[i] || fi2x[i].id <= 0) {
                    rp6j.push(fi2x[i]);
                    continue
                }
                if (k0x.fV2x(T0x)) {
                    gu2x = T0x(fi2x[i])
                } else {
                    gu2x = JY1x(fi2x[i], T0x, cH1x)
                }
                if (gu2x && bFB3x && fi2x[i].tns && fi2x[i].tns.length > 0) {
                    Gu0x = k0x.dK2x(fi2x[i].tns[0]);
                    gu2x += '<span class="s-fc8" title="' + Gu0x + '"> - (' + Gu0x + ")</span>"
                } !! gu2x && i0x.push(gu2x)
            }
            for (var i = 0, gu2x; i < rp6j.length; ++i) {
                if (k0x.fV2x(T0x)) {
                    gu2x = T0x(rp6j[i])
                } else {
                    gu2x = JY1x(rp6j[i], T0x, cH1x)
                }
                if (gu2x && bFB3x && rp6j[i].tns && rp6j[i].tns.length > 0) {
                    Gu0x = k0x.dK2x(rp6j[i].tns[0]);
                    gu2x += '<span class="s-fc8" title="' + Gu0x + '"> - (' + Gu0x + ")</span>"
                } !! gu2x && i0x.push(gu2x)
            }
            return '<span title="' + eD2x.join(tX7Q) + '">' + i0x.join(tX7Q) + "</span>"
        }
    }();
    l0x.xk8c = function(eN2x) {
        return !!eN2x && /^[0-9]{11}$/.test(eN2x)
    };
    l0x.crS1x = function(eN2x) {
        if (!l0x.xk8c(eN2x)) return eN2x;
        return eN2x.substring(0, 3) + "****" + eN2x.substr(7)
    };
    l0x.iT4X = function() {
        var cO1x = /^\s+$/g;
        return function(hs3x) {
            return !hs3x || cO1x.test(hs3x)
        }
    }();
    l0x.Gv0x = function() {
        var ber8j = /[^\x00-\xfff]/g;
        return function(hs3x) {
            var cmx0x = hs3x.match(ber8j) || [],
                dL2x = cmx0x.length;
            return hs3x.length + dL2x
        }
    }();
    l0x.zf8X = function() {
        var ber8j = /[^\x00-\xfff]/;
        return function(hs3x, gz2x) {
            for (var i = 0, len = hs3x.length; i < len && gz2x > 0; i++) {
                if (ber8j.test(hs3x.charAt(i))) {
                    gz2x -= 2;
                    if (gz2x < 0) {
                        break
                    }
                } else {
                    gz2x -= 1
                }
            }
            return hs3x.substring(0, i)
        }
    }();
    l0x.Bc9T = function(hs3x, gz2x, JV1x) {
        gz2x = gz2x || 10;
        JV1x = JV1x || nej.p.cP1x.engine == "trident" && parseInt(nej.p.cP1x.release) < 5;
        if (JV1x && l0x.Gv0x(hs3x) > gz2x) {
            return l0x.zf8X(hs3x, gz2x) + "..."
        } else {
            return hs3x
        }
    };
    l0x.bGl3x = function(f0x) {
        return f0x === document.activeElement && (!document.hasFocus || document.hasFocus()) && !! (f0x.type || f0x.href || ~f0x.tabIndex)
    };
    l0x.cmw0x = function(d0x, cH1x) {
        if (!d0x || !cH1x) return !0;
        var f0x, t0x = d0x.type.toLowerCase();
        if (t0x == "mouseout") {
            f0x = d0x.relatedTarget || d0x.toElement
        } else if (t0x == "mouseover") {
            f0x = d0x.relatedTarget || d0x.fromElement
        }
        return !f0x || f0x !== cH1x && !l0x.JI1x(cH1x, f0x)
    };
    l0x.ry6s = function() {
        Q0x = {};
        return function(f0x, dH2x) {
            var C0x = a9j.kQ4U(f0x),
                J0x = "hover-" + C0x;
            if (!dH2x || !C0x || !! Q0x[J0x]) return;
            Q0x[J0x] = !0;
            h0x.q0x(C0x, "mouseover", function() {
                var ben8f = a9j.I0x(f0x, "hshow") || [];
                var bem8e = a9j.I0x(f0x, "icn-dislike") || [];
                a9j.y0x(C0x, "z-hover");
                a9j.W0x(ben8f[0], "display", "block");
                a9j.W0x(bem8e[0], "display", "block")
            });
            h0x.q0x(C0x, "mouseout", function() {
                var ben8f = a9j.I0x(f0x, "hshow") || [];
                var bem8e = a9j.I0x(f0x, "icn-dislike") || [];
                a9j.x0x(C0x, "z-hover");
                a9j.W0x(ben8f[0], "display", "none");
                a9j.W0x(bem8e[0], "display", "none")
            })
        }
    }();
    l0x.bGP3x = function() {
        var bv0x = {
            r: /\(|\)|\[|\]|\{|\}|\*|\+|\^|\$|\?|\!|\\|\||\./gi,
            "(": "\\(",
            ")": "\\)",
            "[": "\\[",
            "]": "\\]",
            "{": "\\{",
            "}": "\\}",
            "*": "\\*",
            "+": "\\+",
            "^": "\\^",
            $: "\\$",
            "?": "\\?",
            "!": "\\!",
            "\\": "\\\\",
            "|": "\\|",
            ".": "\\."
        };
        return function(hs3x) {
            return k0x.DN9E(bv0x, hs3x)
        }
    }();
    l0x.rL6F = function(bL0x) {
        if (k0x.Yp5u(bL0x)) bL0x = bL0x.getTime();
        var hA3x = new Date,
            Gz0x = hA3x.getTime() - bL0x;
        if (Gz0x <= 6e4) return "刚刚";
        var Vn5s = hA3x.getHours() * 36e5 + hA3x.getMinutes() * 6e4 + hA3x.getSeconds() * 1e3;
        if (Gz0x <= Vn5s) {
            if (Gz0x < 36e5) {
                var bej8b = Math.floor(Gz0x / 6e4);
                return bej8b + "分钟前"
            }
            return k0x.lP4T(bL0x, "HH:mm")
        } else {
            if (Gz0x < Vn5s + 864e5) {
                return "昨天" + k0x.lP4T(bL0x, "HH:mm")
            } else {
                var gr2x = hA3x.getFullYear(),
                    cmt0x = new Date(gr2x, 0, 1);
                var Vn5s = hA3x.getTime() - cmt0x.getTime();
                if (Gz0x < Vn5s) {
                    return k0x.lP4T(bL0x, "M月d日 HH:mm")
                }
                return k0x.lP4T(bL0x, "yyyy年M月d日")
            }
        }
    };
    l0x.Lb1x = function() {
        var cO1x = /\{(.*?)\}/gi;
        return function(qM6G, j0x) {
            return (qM6G || "").replace(cO1x, function($1, $2) {
                var z0x = j0x[$2];
                return z0x == null ? $1 : z0x
            })
        }
    }();
    l0x.eM2x = function() {
        var bg0x = Array.prototype.slice.call(arguments, 0),
            qM6G = bg0x.shift();
        if (qM6G) {
            return qM6G.replace(/{(\d+)}/g, function($1, $2) {
                return $2 < bg0x.length ? bg0x[$2] : $1
            })
        }
        return ""
    };
    l0x.GD0x = function(i0x, dC2x, kF4J) {
        return "";
        kF4J = kF4J || " - ";
        if (i0x && i0x.length) {
            return kF4J + ( !! dC2x ? '<span class="' + dC2x + '">' + i0x[0] + "</span>" : i0x[0])
        }
        return ""
    };
    l0x.bHw4A = function() {
        if (window.getSelection) {
            var pD5I = window.getSelection();
            if (pD5I && pD5I.focusNode && pD5I.focusNode.tagName) {
                var zb8T = a9j.cQ1x(pD5I.focusNode);
                for (var i = 0, vl7e; i < zb8T.length; ++i) {
                    vl7e = zb8T[i].tagName;
                    if (!vl7e) continue;
                    vl7e = vl7e.toLowerCase();
                    if (vl7e == "textarea" || vl7e == "input") return !0
                }
            }
        } else if (document.selection) {
            var cE1x = document.selection.createRange();
            if (cE1x) {
                var f0x = cE1x.parentElement();
                if (f0x && f0x.tagName) {
                    var vl7e = f0x.tagName.toLowerCase();
                    if (vl7e == "textarea" || vl7e == "input") return !0
                }
            }
        }
        return !1
    };
    l0x.za8S = function(fm2x) {
        if (/^[A-Z]\:\\/i.test(fm2x)) {
            fm2x = fm2x.split("\\")
        } else {
            fm2x = fm2x.split("/")
        }
        fm2x = fm2x[fm2x.length - 1];
        return fm2x
    };
    l0x.cmr0x = function() {
        var DT9K = [13, 17, 34, 19, 18, 21];
        return function(C0x) {
            var bs0x = (C0x || "").split("_");
            return {
                type: DT9K[bs0x[2]] || -1,
                id: bs0x[3] || ""
            }
        }
    }();
    l0x.bef8X = function(dp1x) {
        if (4 == dp1x.userType) {
            return '<sup class="icn u-icn2 u-icn2-music2"></sup>'
        } else if (dp1x.authStatus == 1) {
            return '<sup class="u-icn u-icn-1"></sup>'
        } else if (dp1x.expertTags && dp1x.expertTags.length) {
            return '<sup class="u-icn u-icn-84"></sup>'
        }
    };
    l0x.Lm1x = function(fp2x) {
        fp2x += "";
        if (fp2x) {
            return fp2x.substr(0, 3) + "****" + fp2x.substr(fp2x.length - 4)
        }
    };
    l0x.crT1x = function(s0x, cu1x) {
        return (s0x % cu1x + cu1x) % cu1x
    };
    l0x.bID4H = function() {
        var DT9K = ["playlist", "program", "event", "album", "song", "mv", "topic"];
        return function(C0x) {
            var bs0x = (C0x || "").split("_"),
                n0x = {
                    type: DT9K[bs0x[2]] || -1,
                    id: bs0x[3] || ""
                };
            if (n0x.type == "event") {
                n0x.uid = bs0x[4] || "";
                return "/" + n0x.type + "?id=" + n0x.id + "&uid=" + n0x.uid
            }
            return "/" + n0x.type + "?id=" + n0x.id
        }
    }();
    l0x.bIF4J = function() {
        var DT9K = ["歌单", "电台节目", "动态", "专辑", "单曲", "MV", "专栏文章"];
        return function(C0x) {
            var bs0x = (C0x || "").split("_");
            return DT9K[bs0x[2]] || "资源"
        }
    }();
    l0x.cmp0x = function(bB0x) {
        var qs = bB0x.length > 0 ? bB0x.substring(1) : "",
            args = {},
            items = qs.length ? qs.split("&") : [],
            item = null,
            name = null,
            value = null,
            i = 0,
            len = items.length;
        for (i = 0; i < len; i++) {
            item = items[i].split("=");
            name = decodeURIComponent(item[0]);
            value = decodeURIComponent(item[1]);
            if (name.length) {
                args[name] = value
            }
        }
        return args
    };
    l0x.bIJ4N = function(vp7i, Ls1x) {
        var Vk5p = 0,
            eW2x = new Array;
        k0x.be0x(vp7i, function(V0x, s0x) {
            var es2x = a9j.cU1x("img");
            es2x.src = V0x;
            h0x.q0x(es2x, "load", function(s0x, d0x) {
                eW2x[s0x] = 1;
                Vk5p++;
                if (Vk5p == vp7i.length) Ls1x(vp7i, eW2x)
            }.g0x(this, s0x));
            h0x.q0x(es2x, "error", function(d0x, s0x) {
                eW2x[s0x] = 0;
                Vk5p++;
                if (Vk5p == vp7i.length) Ls1x(vp7i, eW2x)
            }.g0x(this, s0x))
        })
    };
    l0x.Vi5n = function(i0x, dB2x) {
        var n0x = [];
        k0x.be0x(i0x, function(r0x, s0x, iB4F) {
            n0x.push(dB2x(r0x, s0x, iB4F))
        });
        return n0x
    };
    l0x.Xk5p = function(i0x, dB2x, iB4F) {
        var n0x = [];
        k0x.be0x(i0x, function(r0x, s0x) {
            if (dB2x.call(iB4F, r0x, s0x, i0x)) {
                n0x.push(r0x)
            }
        });
        return n0x
    };
    l0x.cmo0x = function(bi0x) {
        return k0x.dK2x((bi0x || "").replace(/\s{2,}/g, " ").trim())
    };
    l0x.bdZ8R = function(bf0x) {
        if (bf0x.transNames && bf0x.transNames.length) {
            return bf0x.transNames[0]
        } else if (bf0x.alias && bf0x.alias.length) {
            return bf0x.alias[0]
        }
    };
    l0x.bIY4c = function(Nn2x) {
        if (Nn2x) {
            return Nn2x.replace(/\n{2,}/g, "<br/><br/>").replace(/\n/g, "<br/>").replace(/(<br\/?>){2,}/g, "<br/><br/>")
        }
    };
    l0x.bdW8O = function(f0x) {
        var f0x = a9j.w0x(f0x),
            cY1x = f0x && f0x.getElementsByTagName("textarea")[0],
            J0x = a9j.u0x(f0x, "key"),
            bdV8N = a9j.u0x(f0x, "simple") == "1",
            bJr4v = p0x.uF7y.fP2x();
        if (!(f0x && cY1x && J0x)) return;
        if (bdV8N) {
            bJr4v.rA6u(J0x, l0x.Cg9X(JSON.parse(cY1x.value)))
        } else {
            bJr4v.rA6u(J0x, JSON.parse(cY1x.value || cY1x.defaultValue))
        }
        f0x.innerHTML = "";
        return J0x
    };
    l0x.cmn0x = function(or5w) {
        if (!or5w.onbeforelistload) {
            or5w.onbeforelistload = function(d0x) {
                d0x.value = '<div class="u-load s-fc4"><i class="icn"></i> 加载中...</div>'
            }
        }
        if (!or5w.onemptylist) {
            or5w.onemptylist = function(d0x) {
                d0x.value = '<div class="n-nmusic"><h3 class="f-ff2"><i class="u-icn u-icn-21"></i>' + (or5w.emptyMsg || "暂时还没有数据") + "</h3></div>"
            }
        }
        return or5w
    };
    l0x.Cg9X = function(hp3x) {
        if (k0x.eq2x(hp3x)) {
            var dW2x = [];
            k0x.be0x(hp3x, function(bdV8N) {
                dW2x.push(bJG4K(bdV8N))
            });
            return dW2x
        } else {
            return bJG4K(hp3x)
        }
        function bJG4K(hp3x) {
            if (!hp3x) return null;
            var dW2x = {
                album: hp3x.al,
                alias: hp3x.alia || hp3x.ala || [],
                artists: hp3x.ar || [],
                commentThreadId: "R_SO_4_" + hp3x.id,
                copyrightId: hp3x.cp || 0,
                duration: hp3x.dt || 0,
                id: hp3x.id,
                mvid: hp3x.mv || 0,
                name: hp3x.name || "",
                cd: hp3x.cd,
                position: hp3x.no || 0,
                ringtone: hp3x.rt,
                rtUrl: hp3x.rtUrl,
                status: hp3x.st || 0,
                pstatus: hp3x.pst || 0,
                fee: hp3x.fee || 0,
                version: hp3x.v || 0,
                eq: hp3x.eq,
                songType: hp3x.t || 0,
                mst: hp3x.mst,
                score: hp3x.pop || 0,
                ftype: hp3x.ftype,
                rtUrls: hp3x.rtUrls,
                transNames: hp3x.tns,
                privilege: hp3x.privilege,
                lyrics: hp3x.lyrics
            };
            return dW2x
        }
    };
    l0x.crV1x = function() {
        var f0x = a9j.ni5n('<div class="u-mask u-mask-light"></div>' + '<div class="m-opentip">' + '<div class="lay">' + '<div class="note">' + "<h3>分享打不开？</h3>" + '<p>请点击右上角<br>选择<span class="s-fc5">“分享到...”</span></p>' + "</div></div></div>");
        document.body.appendChild(f0x);
        h0x.q0x(f0x, "click", function(d0x) {
            h0x.bh0x(d0x);
            a9j.cF1x(f0x)
        })
    };
    l0x.lR4V = function(cg1x) {
        if (cg1x < 1e5) {
            return cg1x
        } else {
            return Math.floor(cg1x / 1e4) + "万"
        }
    };
    l0x.uX7Q = function(cg1x, cY1x) {
        return "<i>" + (cg1x ? "(" + cg1x + ")" : cY1x) + "</i>"
    };
    l0x.bKq4u = function(t0x, hl3x) {
        var e0x = {};
        if (!k0x.ke4i(hl3x)) {
            return e0x
        }
        switch (parseInt(t0x)) {
            case 17:
                e0x.title = hl3x.name;
                e0x.author = (hl3x.radio || []).name;
                e0x.picUrl = hl3x.coverUrl;
                e0x.category = hl3x.radio.category;
                break;
            case 19:
                e0x.title = hl3x.name;
                e0x.author = l0x.xc8U(hl3x.artists);
                e0x.authors = l0x.xc8U(hl3x.artists, " / ");
                e0x.picUrl = hl3x.picUrl;
                break;
            case 13:
                e0x.title = hl3x.name;
                e0x.author = (hl3x.creator || []).nickname;
                e0x.picUrl = hl3x.coverImgUrl;
                break;
            case 18:
                e0x.title = hl3x.name;
                e0x.author = l0x.xc8U(hl3x.artists);
                e0x.picUrl = (hl3x.album || []).picUrl;
                break;
            case 20:
                e0x.title = hl3x.name;
                e0x.author = "";
                e0x.picUrl = hl3x.img1v1Url;
                break;
            case 21:
                e0x.title = hl3x.name;
                e0x.author = hl3x.artistName;
                e0x.authors = l0x.xc8U(hl3x.artists, " / ");
                e0x.picUrl = hl3x.newCover || hl3x.cover;
                break;
            case 70:
                e0x.title = hl3x.name;
                e0x.author = (hl3x.dj || []).nickname;
                e0x.picUrl = hl3x.picUrl;
                e0x.category = hl3x.category;
                break;
            default:
                break
        }
        return e0x
    };
    l0x.bKI4M = function() {
        return location.hostname.indexOf("igame.163.com") >= 0
    };
    l0x.cmg9X = function(ex2x, uM7F, e0x) {
        var bK0x, bg0x, n0x;
        var jb4f = null;
        var LZ1x = 0;
        if (!e0x) e0x = {};
        var Vg4k = function() {
            LZ1x = e0x.leading === false ? 0 : +(new Date);
            jb4f = null;
            n0x = ex2x.apply(bK0x, bg0x);
            if (!jb4f) bK0x = bg0x = null
        };
        return function() {
            var hA3x = +(new Date);
            if (!LZ1x && e0x.leading === false) LZ1x = hA3x;
            var bdQ7J = uM7F - (hA3x - LZ1x);
            bK0x = this;
            bg0x = arguments;
            if (bdQ7J <= 0 || bdQ7J > uM7F) {
                if (jb4f) {
                    clearTimeout(jb4f);
                    jb4f = null
                }
                LZ1x = hA3x;
                n0x = ex2x.apply(bK0x, bg0x);
                if (!jb4f) bK0x = bg0x = null
            } else if (!jb4f && e0x.trailing !== false) {
                jb4f = setTimeout(Vg4k, bdQ7J)
            }
            return n0x
        }
    };
    l0x.bLl4p = function(ex2x, uM7F, pV5a) {
        var jb4f, bg0x, bK0x, Mi1x, n0x;
        var Vg4k = function() {
            var gs2x = new Date - Mi1x;
            if (gs2x < uM7F && gs2x >= 0) {
                jb4f = setTimeout(Vg4k, uM7F - gs2x)
            } else {
                jb4f = null;
                if (!pV5a) {
                    n0x = ex2x.apply(bK0x, bg0x);
                    if (!jb4f) bK0x = bg0x = null
                }
            }
        };
        return function() {
            bK0x = this;
            bg0x = arguments;
            Mi1x = new Date;
            var bdP7I = pV5a && !jb4f;
            if (!jb4f) jb4f = setTimeout(Vg4k, uM7F);
            if (bdP7I) {
                n0x = ex2x.apply(bK0x, bg0x);
                bK0x = bg0x = null
            }
            return n0x
        }
    };
    l0x.Mk1x = function(f0x, iu3x) {
        if (f0x) {
            var f0x = f0x.firstElementChild;
            if (f0x) {
                f0x.firstElementChild && (f0x = f0x.firstElementChild);
                f0x.setAttribute("xlink:href", "/style/pc/svg/" + iu3x)
            }
        }
    };
    l0x.bpP0x = function(eD2x) {
        if (!eD2x || !eD2x.length) {
            return
        }
        eD2x = /^#(.+?)#$/.exec(eD2x)[1];
        eD2x = eD2x.replace(/\s/g, " ");
        v0x.br0x("/api/act/detail", {
            type: "json",
            method: "post",
            data: k0x.dh1x({
                actname: eD2x
            }),
            onload: function(R0x) {
                if (!R0x || R0x.code != 200 || !R0x.act) {
                    m0x.Z0x.N0x({
                        type: 2,
                        tip: "该话题暂未创建"
                    })
                } else {
                    location.dispatch2("/activity?id=" + R0x.act.actId)
                }
            },
            onerror: function(bP0x) {
                m0x.Z0x.N0x({
                    type: 2,
                    tip: "操作失败，请稍后再试"
                })
            }
        })
    };
    l0x.bdO7H = function(Mr2x, vR7K) {
        if (!Mr2x || !vR7K) return false;
        if (Mr2x == vR7K) return true;
        return l0x.bdO7H(Mr2x, vR7K.parentNode)
    };
    a9j.fA2x = function(bA0x, kW4a) {
        if (!bA0x) return null;
        if (!kW4a) return bA0x.firstChild;
        return a9j.I0x(bA0x, kW4a)[0]
    };
    l0x.cma9R = function(hs3x) {
        return /^[-a-z0-9~!$%^&*_=+}{\'?]+(\.[-a-z0-9~!$%^&*_=+}{\'?]+)*@([a-z0-9_][-a-z0-9_]*(\.[-a-z0-9_]+)*\.(aero|arpa|biz|com|coop|edu|gov|info|int|mil|museum|name|net|org|pro|travel|mobi|[a-z][a-z])|([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}))(:[0-9]{1,5})?$/i.test(hs3x)
    };
    l0x.clV9M = function(sK6E) {
        if (!sK6E) {
            return "0b"
        }
        var clU9L = ["Bytes", "KB", "MB", "GB"];
        var bc0x = Math.floor(Math.log(sK6E) / Math.log(1024));
        return (sK6E / Math.pow(1024, Math.floor(bc0x))).toFixed(bc0x == 1 ? 0 : 1) + clU9L[bc0x]
    }
})();
(function() {
    function clT9K() {
        var yS8K = function(jf4j) {
            if (jf4j < -128) {
                return yS8K(128 - (-128 - jf4j))
            } else if (jf4j >= -128 && jf4j <= 127) {
                return jf4j
            } else if (jf4j > 127) {
                return yS8K(-129 + jf4j - 127)
            } else {
                throw new Error("1001")
            }
        };
        var clS9J = function(jf4j, bj0x) {
            return yS8K(jf4j + bj0x)
        };
        var clR9I = function(Vb4f, bdC7v) {
            if (Vb4f == null) {
                return null
            }
            if (bdC7v == null) {
                return Vb4f
            }
            var pm5r = [];
            var clQ9H = bdC7v.length;
            for (var i = 0, bo0x = Vb4f.length; i < bo0x; i++) {
                pm5r[i] = clS9J(Vb4f[i], bdC7v[i % clQ9H])
            }
            return pm5r
        };
        var clN9E = function(UY4c) {
            if (UY4c == null) {
                return UY4c
            }
            var pm5r = [];
            var clL9C = UY4c.length;
            for (var i = 0, bo0x = clL9C; i < bo0x; i++) {
                pm5r[i] = yS8K(0 - UY4c[i])
            }
            return pm5r
        };
        var clH9y = function(bdr7k, MX2x) {
            bdr7k = yS8K(bdr7k);
            MX2x = yS8K(MX2x);
            return yS8K(bdr7k ^ MX2x)
        };
        var bqQ0x = function(Na2x, bdp7i) {
            if (Na2x == null || bdp7i == null || Na2x.length != bdp7i.length) {
                return Na2x
            }
            var pm5r = [];
            var clG9x = Na2x.length;
            for (var i = 0, bo0x = clG9x; i < bo0x; i++) {
                pm5r[i] = clH9y(Na2x[i], bdp7i[i])
            }
            return pm5r
        };
        var bqZ0x = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f"];
        var clF9w = function(cG1x) {
            var GP0x = [];
            GP0x.push(bqZ0x[cG1x >>> 4 & 15]);
            GP0x.push(bqZ0x[cG1x & 15]);
            return GP0x.join("")
        };
        var clD9u = function(sK6E) {
            var bo0x = sK6E.length;
            if (sK6E == null || bo0x < 0) {
                return new String("")
            }
            var GP0x = [];
            for (var i = 0; i < bo0x; i++) {
                GP0x.push(clF9w(sK6E[i]))
            }
            return GP0x.join("")
        };
        var brj0x = function(UX4b) {
            if (UX4b == null || UX4b.length == 0) {
                return UX4b
            }
            var bdi7b = new String(UX4b);
            var pm5r = [];
            var bo0x = bdi7b.length / 2;
            var bj0x = 0;
            for (var i = 0; i < bo0x; i++) {
                var nc5h = parseInt(bdi7b.charAt(bj0x++), 16) << 4;
                var nd5i = parseInt(bdi7b.charAt(bj0x++), 16);
                pm5r[i] = yS8K(nc5h + nd5i)
            }
            return pm5r
        };
        var clC9t = function(cL1x) {
            if (cL1x == null || cL1x == undefined) {
                return cL1x
            }
            var Nq2x = encodeURIComponent(cL1x);
            var sK6E = [];
            var brA0x = Nq2x.length;
            for (var i = 0; i < brA0x; i++) {
                if (Nq2x.charAt(i) == "%") {
                    if (i + 2 < brA0x) {
                        sK6E.push(brj0x(Nq2x.charAt(++i) + "" + Nq2x.charAt(++i))[0])
                    } else {
                        throw new Error("1009")
                    }
                } else {
                    sK6E.push(Nq2x.charCodeAt(i))
                }
            }
            return sK6E
        };
        var clB9s = function(un7g) {
            var bc0x = 0;
            bc0x += (un7g[0] & 255) << 24;
            bc0x += (un7g[1] & 255) << 16;
            bc0x += (un7g[2] & 255) << 8;
            bc0x += un7g[3] & 255;
            return bc0x
        };
        var crW1x = function(bc0x) {
            var un7g = [];
            un7g[0] = bc0x >>> 24 & 255;
            un7g[1] = bc0x >>> 16 & 255;
            un7g[2] = bc0x >>> 8 & 255;
            un7g[3] = bc0x & 255;
            return un7g
        };
        var clz9q = function(dt1x, bdh7a, bo0x) {
            var dW2x = [];
            if (dt1x == null || dt1x.length == 0) {
                return dW2x
            }
            if (dt1x.length < bo0x) {
                throw new Error("1003")
            }
            for (var i = 0; i < bo0x; i++) {
                dW2x[i] = dt1x[bdh7a + i]
            }
            return dW2x
        };
        var bdf7Y = function(dt1x, bdh7a, pK5P, clx9o, bo0x) {
            if (dt1x == null || dt1x.length == 0) {
                return pK5P
            }
            if (pK5P == null) {
                throw new Error("1004")
            }
            if (dt1x.length < bo0x) {
                throw new Error("1003")
            }
            for (var i = 0; i < bo0x; i++) {
                pK5P[clx9o + i] = dt1x[bdh7a + i]
            }
            return pK5P
        };
        var clw9n = function(bo0x) {
            var bs0x = [];
            for (var i = 0; i < bo0x; i++) {
                bs0x[i] = 0
            }
            return bs0x
        };
        var clt9k = [82, 9, 106, -43, 48, 54, -91, 56, -65, 64, -93, -98, -127, -13, -41, -5, 124, -29, 57, -126, -101, 47, -1, -121, 52, -114, 67, 68, -60, -34, -23, -53, 84, 123, -108, 50, -90, -62, 35, 61, -18, 76, -107, 11, 66, -6, -61, 78, 8, 46, -95, 102, 40, -39, 36, -78, 118, 91, -94, 73, 109, -117, -47, 37, 114, -8, -10, 100, -122, 104, -104, 22, -44, -92, 92, -52, 93, 101, -74, -110, 108, 112, 72, 80, -3, -19, -71, -38, 94, 21, 70, 87, -89, -115, -99, -124, -112, -40, -85, 0, -116, -68, -45, 10, -9, -28, 88, 5, -72, -77, 69, 6, -48, 44, 30, -113, -54, 63, 15, 2, -63, -81, -67, 3, 1, 19, -118, 107, 58, -111, 17, 65, 79, 103, -36, -22, -105, -14, -49, -50, -16, -76, -26, 115, -106, -84, 116, 34, -25, -83, 53, -123, -30, -7, 55, -24, 28, 117, -33, 110, 71, -15, 26, 113, 29, 41, -59, -119, 111, -73, 98, 14, -86, 24, -66, 27, -4, 86, 62, 75, -58, -46, 121, 32, -102, -37, -64, -2, 120, -51, 90, -12, 31, -35, -88, 51, -120, 7, -57, 49, -79, 18, 16, 89, 39, -128, -20, 95, 96, 81, 127, -87, 25, -75, 74, 13, 45, -27, 122, -97, -109, -55, -100, -17, -96, -32, 59, 77, -82, 42, -11, -80, -56, -21, -69, 60, -125, 83, -103, 97, 23, 43, 4, 126, -70, 119, -42, 38, -31, 105, 20, 99, 85, 33, 12, 125];
        var GT0x = 64;
        var UV4Z = 64;
        var bsH1x = 4;
        var cls9j = function(pz5E) {
            var bsM1x = [];
            if (pz5E == null || pz5E == undefined || pz5E.length == 0) {
                return clw9n(UV4Z)
            }
            if (pz5E.length >= UV4Z) {
                return clz9q(pz5E, 0, UV4Z)
            } else {
                for (var i = 0; i < UV4Z; i++) {
                    bsM1x[i] = pz5E[i % pz5E.length]
                }
            }
            return bsM1x
        };
        var clr9i = function(UU4Y) {
            if (UU4Y == null || UU4Y.length % GT0x != 0) {
                throw new Error("1005")
            }
            var bcW7P = [];
            var bj0x = 0;
            var clq9h = UU4Y.length / GT0x;
            for (var i = 0; i < clq9h; i++) {
                bcW7P[i] = [];
                for (var j = 0; j < GT0x; j++) {
                    bcW7P[i][j] = UU4Y[bj0x++]
                }
            }
            return bcW7P
        };
        var clp9g = function(btq1x) {
            var nc5h = btq1x >>> 4 & 15;
            var nd5i = btq1x & 15;
            var bj0x = nc5h * 16 + nd5i;
            return clt9k[bj0x]
        };
        var btr1x = function(bcT7M) {
            if (bcT7M == null) {
                return null
            }
            var btB1x = [];
            for (var i = 0, bo0x = bcT7M.length; i < bo0x; i++) {
                btB1x[i] = clp9g(bcT7M[i])
            }
            return btB1x
        };
        var clm9d = function(GV0x, pz5E) {
            if (GV0x == null) {
                return null
            }
            if (GV0x.length == 0) {
                return []
            }
            if (GV0x.length % GT0x != 0) {
                throw new Error("1005")
            }
            pz5E = cls9j(pz5E);
            var bcR7K = pz5E;
            var bcQ7J = clr9i(GV0x);
            var Og3x = [];
            var cll9c = bcQ7J.length;
            for (var i = 0; i < cll9c; i++) {
                var bcP7I = btr1x(bcQ7J[i]);
                bcP7I = btr1x(bcP7I);
                var bcO7H = bqQ0x(bcP7I, bcR7K);
                var clk9b = clR9I(bcO7H, clN9E(bcR7K));
                bcO7H = bqQ0x(clk9b, pz5E);
                bdf7Y(bcO7H, 0, Og3x, i * GT0x, GT0x);
                bcR7K = bcQ7J[i]
            }
            var bul1x = [];
            bdf7Y(Og3x, Og3x.length - bsH1x, bul1x, 0, bsH1x);
            var bo0x = clB9s(bul1x);
            if (bo0x > Og3x.length) {
                throw new Error("1006")
            }
            var pm5r = [];
            bdf7Y(Og3x, 0, pm5r, 0, bo0x);
            return pm5r
        };
        var clj9a = function(UR4V, J0x) {
            if (UR4V == null) {
                return null
            }
            var buN1x = new String(UR4V);
            if (buN1x.length == 0) {
                return []
            }
            var GV0x = brj0x(buN1x);
            if (J0x == null || J0x == undefined) {
                throw new Error("1007")
            }
            var pz5E = clC9t(J0x);
            return clm9d(GV0x, pz5E)
        };
        this.clh9Y = function(UR4V, J0x) {
            var clg9X = clj9a(UR4V, J0x);
            var bcM7F = new String(clD9u(clg9X));
            var QF3x = [];
            var clf9W = bcM7F.length / 2;
            var bj0x = 0;
            for (var i = 0; i < clf9W; i++) {
                QF3x.push("%");
                QF3x.push(bcM7F.charAt(bj0x++));
                QF3x.push(bcM7F.charAt(bj0x++))
            }
            return QF3x.join("")
        }
    }
    window.settmusic = (new clT9K).clh9Y
})();
(function() {
    var c0x = NEJ.P,
        bm0x = NEJ.F,
        H0x = c0x("nej.ut"),
        k0x = c0x("nej.u"),
        h0x = c0x("nej.v"),
        v0x = c0x("nej.j"),
        p0x = c0x("nm.d"),
        l0x = c0x("nm.x"),
        J0x = "Search-tracks_",
        b0x;
    p0x.eM2x({
        "search-suggest": {
            url: "/api/search/suggest/web",
            type: "POST",
            format: function(R0x) {
                return R0x
            },
            onerror: function(R0x, e0x) {
                if (R0x.code == 407) {
                    e0x.onForbidden()
                }
            }
        },
        "search-multimatch": {
            url: "/api/search/suggest/multimatch",
            type: "GET"
        },
        "search-list": {
            url: "/api/cloudsearch/get/web",
            type: "post",
            noescape: true,
            filter: function(e0x, bd0x) {
                window.log && window.log("searchkeywordclient", {
                    type: this.cld9U(parseInt(e0x.data.type)) || "suggest",
                    keyword: e0x.data.s,
                    offset: e0x.offset
                })
            },
            format: function(R0x, e0x) {
                if (R0x.abroad) {
                    try {
                        R0x.result = JSON.parse(decodeURIComponent(settmusic(R0x.result, p0x.sk)))
                    } catch (e) {}
                }
                R0x.result = R0x.result || {};
                var i0x, cu1x, jr4v = [],
                    sv6p = e0x.data.s || "",
                    fS2x = e0x.data.limit,
                    t0x = parseInt(e0x.data.type) || 1,
                    n0x = R0x.result;
                switch (t0x) {
                    case 1:
                        i0x = this.bvk1x(n0x.songs, e0x.data.hlpretag, e0x.data.hlposttag);
                        cu1x = n0x.songCount;
                        break;
                    case 10:
                        i0x = n0x.albums;
                        cu1x = n0x.albumCount;
                        break;
                    case 100:
                        i0x = n0x.artists;
                        cu1x = n0x.artistCount;
                        break;
                    case 1e3:
                        i0x = n0x.playlists;
                        cu1x = n0x.playlistCount;
                        break;
                    case 1002:
                        i0x = n0x.userprofiles;
                        cu1x = n0x.userprofileCount;
                        break;
                    case 1004:
                        i0x = n0x.mvs;
                        cu1x = n0x.mvCount;
                        break;
                    case 1006:
                        i0x = this.bvk1x(n0x.songs, e0x.data.hlpretag, e0x.data.hlposttag);
                        cu1x = n0x.songCount;
                        break;
                    case 1009:
                        var py5D = n0x.djRadios;
                        if ( !! py5D) {
                            k0x.be0x(py5D, function(z0x, s0x, clc9T) {
                                z0x.xid = z0x.id;
                                z0x.id = z0x.id + "_rad"
                            });
                            if (py5D.length) {
                                this.rA6u("radio_search-" + e0x.data.s, py5D)
                            }
                        }
                        cu1x = Math.min(n0x.djprogramCount, 500);
                        i0x = n0x.djprograms || [];
                        if (e0x.data.isPub) {
                            k0x.lU4Y(py5D, function(z0x, s0x, clc9T) {
                                z0x.stype = 1;
                                i0x.unshift(z0x)
                            });
                            cu1x = Math.min(i0x.length, 500)
                        }
                        break
                }
                this.A0x("onsearchload", R0x);
                if (i0x && i0x.length) {
                    for (var i = 0; i < fS2x; i++) {
                        if (i < i0x.length) {
                            jr4v.push(i0x[i])
                        } else {
                            jr4v.push(null)
                        }
                    }
                }
                return {
                    more: !0,
                    total: Math.min(cu1x || 0, sv6p.length < 3 ? 500 : 5e3),
                    list: jr4v
                }
            },
            onerror: function(R0x, e0x) {
                e0x.onload(e0x, []);
                if (k0x.fV2x(e0x.onerror)) {
                    e0x.onerror(R0x)
                }
            }
        }
    });
    p0x.Eb9S = NEJ.C();
    b0x = p0x.Eb9S.O0x(p0x.gT2x);
    b0x.cl1x = function() {
        this.cr1x()
    };
    b0x.cla9R = function(J0x, e0x) {
        if (!J0x) return;
        if ( !! this.bvA1x) v0x.kq4u(this.bvA1x);
        this.bvA1x = this.cj1x("search-suggest", NEJ.X({
            data: {
                s: J0x,
                limit: 8
            }
        }, e0x))
    };
    b0x.ckZ9Q = function(J0x, e0x) {
        if (!J0x) return;
        this.cj1x("search-multimatch", NEJ.X({
            data: {
                s: J0x
            }
        }, e0x))
    };
    b0x.bvk1x = function() {
        var ckY9P = function(gR2x, bvE1x, bvF1x) {
            var ckX9O = gR2x.match(new RegExp(bvE1x + "(.+?)" + bvF1x, "gi")),
                cg1x = 0;
            k0x.be0x(ckX9O, function(r0x) {
                cg1x += r0x.replace(new RegExp(bvE1x, "g"), "").replace(new RegExp(bvF1x, "g"), "").length
            });
            return cg1x
        };
        return function(is3x, ckW9N, ckV9M) {
            var bvT1x = [];
            k0x.be0x(is3x, function(bf0x, bc0x) {
                bf0x = l0x.Cg9X(bf0x);
                var UO4S = bf0x.lyrics || [],
                    dL2x = UO4S.length,
                    iM4Q = 0,
                    cu1x = 4,
                    UN4R = {
                        l: 0,
                        v: 0
                    },
                    bcD7w;
                if (dL2x > 4) {
                    k0x.be0x(UO4S, function(gR2x, s0x) {
                        var bwb1x = ckY9P(gR2x, ckW9N, ckV9M);
                        if (bwb1x > UN4R.v) {
                            UN4R.v = bwb1x;
                            UN4R.l = s0x
                        }
                    });
                    iM4Q = UN4R.l;
                    iM4Q = Math.max(iM4Q, 0);
                    bcD7w = dL2x - iM4Q - 4;
                    if (bcD7w < 0) iM4Q += bcD7w;
                    bf0x.lrcAbstractEnd = iM4Q + cu1x - 1
                } else {
                    bf0x.lrcAbstractEnd = dL2x - 1
                }
                bf0x.lrcAbstractStart = iM4Q;
                bf0x.indexId = (UO4S && UO4S.length ? "L" : "NL") + bf0x.id;
                bvT1x.push(bf0x)
            });
            return bvT1x
        }
    }();
    b0x.cld9U = function(t0x) {
        switch (t0x) {
            case 1:
                return "song";
                break;
            case 100:
                return "artist";
                break;
            case 10:
                return "album";
                break;
            case 1004:
                return "mv";
                break;
            case 1006:
                return "lyric";
                break;
            case 1e3:
                return "list";
                break;
            case 1009:
                return "djradio";
                break;
            case 1002:
                return "user";
                break;
            default:
                return "suggest";
                break
        }
    }
})();
(function() {
    var c0x = NEJ.P,
        a9j = c0x("nej.e"),
        h0x = c0x("nej.v"),
        k0x = c0x("nej.u"),
        H0x = c0x("nej.ut"),
        v0x = c0x("nej.j"),
        p0x = c0x("nm.d"),
        l0x = c0x("nm.x"),
        D0x = c0x("nm.m"),
        m0x = c0x("nm.l"),
        cV1x = c0x("nm.i"),
        L0x = c0x("nm.m.sch"),
        b0x, K0x;
    var bcA7t = {
        songs: 1,
        artists: 100,
        albums: 10,
        playlists: 1e3
    };
    L0x.OY3x = NEJ.C();
    b0x = L0x.OY3x.O0x(H0x.cC1x);
    b0x.cl1x = function(f0x) {
        this.cr1x();
        this.bR0x(f0x);
        this.P0x = p0x.Eb9S.fP2x()
    };
    b0x.bR0x = function(f0x) {
        this.o0x = f0x;
        var i0x = a9j.I0x(f0x, "j-flag");
        this.eu2x = i0x[0];
        this.bcz7s = i0x[1];
        this.cd1x = i0x[2];
        this.mp5u = i0x[3];
        h0x.q0x(this.eu2x, "input", this.fs2x.g0x(this));
        h0x.q0x(this.eu2x, "keyup", this.fs2x.g0x(this));
        h0x.q0x(this.eu2x, "focus", this.fN2x.g0x(this));
        h0x.q0x(this.bcz7s, "click", this.fN2x.g0x(this));
        h0x.q0x(this.eu2x, "blur", this.bcy7r.g0x(this));
        h0x.q0x(this.cd1x, "click", this.UL4P.g0x(this));
        h0x.q0x(this.o0x, "keydown", this.bcv7o.g0x(this));
        h0x.q0x(this.o0x, "keypress", this.UJ4N.g0x(this));
        h0x.q0x(this.mp5u, "mouseover", this.Pv3x.g0x(this));
        h0x.q0x(this.mp5u, "mouseout", this.Pv3x.g0x(this));
        if (this.eu2x.value) {
            this.eu2x.value = ""
        }
        if (this.eu2x.style.opacity != null) {
            this.eu2x.style.opacity = 1
        }
    };
    b0x.fs2x = function(d0x) {
        if (d0x.type == "keyup" && d0x.keyCode == 8 || d0x.keyCode == 46) {
            this.DD9u()
        } else if (d0x.type == "input" || d0x.type == "propertychange") {
            setTimeout(this.DD9u.g0x(this), 0)
        }
    };
    b0x.fN2x = function() {
        this.xx8p(this.bcz7s, !1);
        a9j.y0x(this.o0x, "m-srch-fcs");
        this.eu2x.focus();
        this.DD9u();
        a9j.y0x(a9j.I0x("g-topbar", "j-showoff")[0], "f-hide")
    };
    b0x.bcy7r = function() {
        if (!this.eu2x.value) {
            this.xx8p(this.bcz7s, !0)
        }
        var Dy9p = a9j.I0x(this.mp5u, "slt");
        if (this.UI4M(this.mp5u) && Dy9p.length > 0 && a9j.u0x(Dy9p[0], "type")) {
            var iu3x = Dy9p[0].href;
            if (/#\/(song|album|artist|playlist)\?id=(\d+)/.test(iu3x)) {
                window.log("search", {
                    rid: RegExp.$2,
                    type: RegExp.$1,
                    keyword: this.eu2x.value
                })
            }
            this.bcr7k(Dy9p[0].href)
        }
        this.xx8p(this.mp5u, !1);
        a9j.x0x(this.o0x, "m-srch-fcs")
    };
    b0x.xx8p = function(f0x, kL4P) {
        a9j.W0x(f0x, "display", !kL4P ? "none" : "")
    };
    b0x.UI4M = function(f0x) {
        return a9j.cX1x(f0x, "display") != "none"
    };
    b0x.DD9u = function() {
        var Dn9e = function(sn6h, cY1x) {
            if (!cY1x) return;
            return cY1x.replace(new RegExp(l0x.bGP3x(sn6h), "gi"), function($1) {
                return '<span class="s-fc7 f-tdn">' + $1 + "</span>"
            })
        };
        var ckT9K = function(hs3x) {
            var gz2x = this.o0x.clientWidth > 250 ? 41 : 17;
            if (l0x.Gv0x(hs3x) > gz2x) {
                return l0x.zf8X(hs3x, gz2x) + "..."
            } else {
                return hs3x
            }
        };
        var UH4L = function(n0x) {
            return n0x.songs && n0x.songs.length || n0x.albums && n0x.albums.length || n0x.artists && n0x.artists.length || n0x.playlists && n0x.playlists.length
        };
        var tz7s = function(sn6h, d0x) {
            if (!l0x.bGl3x(this.eu2x) || l0x.iT4X(this.eu2x.value)) {
                this.xx8p(this.mp5u, !1);
                return
            }
            d0x.keyword = k0x.dK2x(sn6h);
            var dy2x = a9j.bQ0x("m-search-suggest", d0x, {
                    mark: Dn9e.g0x(this, sn6h),
                    cutStr: ckT9K.g0x(this)
                }),
                sm6g = d0x.result.order;
            this.mp5u.innerHTML = dy2x;
            this.xx8p(this.mp5u, UH4L(d0x.result) ? !0 : !1);
            if ( !! sm6g && !! sm6g.length) {
                this.bck7d = {
                    keyword: sn6h,
                    type: bcA7t[sm6g[0]]
                }
            }
        };
        var ckP9G = function() {
            this.xx8p(this.mp5u, !1);
            return
        };
        return function() {
            var z0x = this.eu2x.value;
            if (l0x.iT4X(z0x)) {
                this.xx8p(this.mp5u, !1);
                return
            }
            this.P0x.cla9R(z0x, {
                onload: tz7s.g0x(this, z0x),
                onForbidden: ckP9G.g0x(this)
            })
        }
    }();
    b0x.UJ4N = function(d0x) {
        if (d0x.keyCode != 13) return;
        var Dy9p = a9j.I0x(this.mp5u, "slt");
        if (this.UI4M(this.mp5u) && Dy9p.length > 0) {
            this.bcr7k(Dy9p[0].href);
            this.xx8p(this.mp5u, !1);
            return
        }
        this.UL4P();
        this.xx8p(this.mp5u, !1)
    };
    b0x.bcv7o = function(d0x) {
        if (!this.UI4M(this.mp5u)) return;
        var i0x = a9j.I0x(this.mp5u, "xtag"),
            dL2x = i0x.length,
            s0x = k0x.cT1x(i0x, function(r0x) {
                return a9j.bz0x(r0x, "slt")
            });
        switch (d0x.keyCode) {
            case 38:
                if (s0x >= 0) a9j.x0x(i0x[s0x], "slt");
                a9j.y0x(i0x[s0x <= 0 ? dL2x - 1 : s0x - 1], "slt");
                break;
            case 40:
                if (s0x >= 0) a9j.x0x(i0x[s0x], "slt");
                a9j.y0x(i0x[(s0x + 1) % dL2x], "slt");
                break
        }
    };
    b0x.Pv3x = function(d0x) {
        if (!this.UI4M(this.mp5u)) return;
        var PU3x, G0x = h0x.U0x(d0x),
            i0x = a9j.I0x(this.mp5u, "xtag");
        if (G0x.tagName.toLowerCase() == "a") PU3x = G0x;
        else if (G0x.parentNode.tagName.toLowerCase() == "a") PU3x = G0x.parentNode;
        if (!PU3x) return;
        k0x.be0x(i0x, function(r0x) {
            a9j.x0x(r0x, "slt");
            a9j.u0x(r0x, "type", "")
        });
        if (d0x.type == "mouseout") return;
        a9j.y0x(PU3x, "slt");
        a9j.u0x(PU3x, "type", "mouse")
    };
    b0x.UL4P = function() {
        var dE2x = location.hash,
            s0x = dE2x.indexOf("?"),
            bB0x = k0x.ho3x(dE2x.substring(s0x + 1));
        bB0x.s = this.eu2x.value;
        if (l0x.iT4X(bB0x.s)) return;
        if (!bB0x.type && this.bck7d && this.bck7d.keyword == bB0x.s) {
            bB0x.type = this.bck7d.type
        }
        this.bcr7k("/search/#/?" + k0x.dh1x(bB0x));
        this.eu2x.blur()
    };
    b0x.bcr7k = function(V0x) {
        if (location.dispatch2) {
            location.dispatch2(V0x)
        } else {
            location.href = V0x
        }
    };
    L0x.OY3x.ckN9E = function() {
        var i0x = a9j.I0x(document.body, "j-suggest");
        k0x.be0x(i0x, function(r0x) {
            new L0x.OY3x(r0x)
        })
    };
    L0x.OY3x.ckN9E()
})();
(function() {
    var c0x = NEJ.P,
        bm0x = NEJ.F,
        H0x = c0x("nej.ut"),
        k0x = c0x("nej.u"),
        h0x = c0x("nej.v"),
        v0x = c0x("nej.j"),
        p0x = c0x("nm.d"),
        b0x;
    p0x.eM2x({
        "mv_artist-list": {
            url: "/api/artist/mvs",
            type: "get",
            format: function(R0x) {
                return {
                    total: R0x.size || 0,
                    list: R0x.mvs || []
                }
            }
        },
        "album_artist-list": {
            url: "/api/artist/albums/{id}",
            type: "get",
            format: function(R0x) {
                return {
                    total: R0x.size || 0,
                    list: R0x.hotAlbums || []
                }
            }
        },
        "ydcailing_post-list": {
            url: "/api/cailing/all",
            type: "POST",
            format: function(R0x) {
                return R0x.result.songs
            }
        },
        "wo-list": {
            url: "/api/unicom/wo/content",
            format: function(R0x, e0x) {
                if (e0x.offset == 0) {
                    var yC8u = R0x.data[0];
                    this.A0x("onfirstload", yC8u);
                    R0x.data.splice(0, 1);
                    return R0x.data
                } else {
                    return R0x.data
                }
            }
        }
    });
    p0x.Dd9U = NEJ.C();
    b0x = p0x.Dd9U.O0x(p0x.gT2x);
    b0x.cl1x = function() {
        this.cr1x()
    };
    b0x.Qa3x = function() {
        var qZ6T = "LOCAL_FLAG";
        return function(t0x, ckK9B) {
            var j0x = this.Dq9h(qZ6T, {});
            if (j0x[t0x]) {
                return true
            } else {
                if (!ckK9B) {
                    j0x[t0x] = true;
                    this.uB7u(qZ6T, j0x)
                }
                return false
            }
        }
    }()
})();
(function() {
    var c0x = NEJ.P,
        a9j = c0x("nej.e"),
        k0x = c0x("nej.u"),
        M0x = c0x("nej.ut"),
        bcg7Z;
    if ( !! M0x.oR5W) return;
    M0x.oR5W = NEJ.C();
    bcg7Z = M0x.oR5W.O0x(M0x.cC1x);
    bcg7Z.bk0x = function() {
        var ckJ9A = function(d0x) {
            d0x.matched = d0x.source == d0x.target
        };
        return function(e0x) {
            e0x.oncheck = e0x.oncheck || ckJ9A;
            this.bl0x(e0x);
            this.bT1x = e0x.list;
            this.ig3x = e0x.dataset || "id";
            this.jA4E = e0x.selected || "js-selected"
        }
    }();
    bcg7Z.oP5U = function(z0x) {
        var G0x, d0x = {
            target: z0x
        };
        k0x.be0x(this.bT1x, function(f0x) {
            delete d0x.matched;
            d0x.source = a9j.u0x(f0x, this.ig3x);
            this.A0x("oncheck", d0x);
            if (!d0x.matched) {
                a9j.x0x(f0x, this.jA4E)
            } else {
                G0x = f0x;
                a9j.y0x(f0x, this.jA4E)
            }
        }, this);
        return G0x
    }
})();
(function() {
    var c0x = NEJ.P,
        Y0x = NEJ.O,
        bm0x = NEJ.F,
        a9j = c0x("nej.e"),
        M0x = c0x("nej.ut"),
        om5r;
    if ( !! M0x.cM1x) return;
    M0x.cM1x = NEJ.C();
    om5r = M0x.cM1x.O0x(M0x.cC1x);
    om5r.cl1x = function() {
        this.im3x = {};
        this.cr1x();
        this.bH0x()
    };
    om5r.bk0x = function(e0x) {
        this.bl0x(e0x);
        this.bcf7Y = e0x.umi || "";
        this.yB8t = e0x.dispatcher;
        this.Hk0x = e0x.composite || Y0x;
        this.bmp9g({
            onshow: this.eO2x.g0x(this),
            onhide: this.jN4R.g0x(this),
            onrefresh: this.ee2x.g0x(this),
            onmessage: this.qn6h.g0x(this),
            onbeforehide: this.ckG9x.g0x(this)
        })
    };
    om5r.bD0x = function() {
        delete this.bcf7Y;
        this.im3x = {};
        this.bI0x()
    };
    om5r.si6c = function(d0x) {
        if ( !! d0x) d0x.stopped = !0
    };
    om5r.bH0x = bm0x;
    om5r.eO2x = bm0x;
    om5r.jN4R = bm0x;
    om5r.ee2x = bm0x;
    om5r.qn6h = bm0x;
    om5r.ckG9x = bm0x;
    om5r.pf5k = function(ng5l, bF0x, eC2x) {
        this.yB8t.bzy2x({
            to: ng5l,
            mode: eC2x || 0,
            data: bF0x,
            from: this.bcf7Y
        })
    };
    om5r.crX1x = function(t0x, j0x) {
        this.yB8t.yz8r(t0x, {
            from: this.bcf7Y,
            data: j0x
        })
    };
    om5r.crY1x = function() {
        this.yB8t.ls4w.apply(this.yB8t, arguments)
    };
    om5r.ckD9u = function() {
        return this.im3x
    };
    a9j.UF4J = function() {
        if ( !! window.dispatcher) {
            dispatcher.bzI2x.apply(dispatcher, arguments)
        }
    }
})();
(function() {
    var c0x = NEJ.P,
        bm0x = NEJ.F,
        Y0x = NEJ.O,
        a9j = c0x("nej.e"),
        k0x = c0x("nej.u"),
        M0x = c0x("nej.ut"),
        vP7I;
    if ( !! M0x.dj1x) return;
    M0x.dj1x = NEJ.C();
    vP7I = M0x.dj1x.O0x(M0x.cM1x);
    vP7I.ckC9t = function(e0x) {
        var bA0x;
        if (!bA0x) {
            var j0x = e0x.input || Y0x;
            bA0x = a9j.w0x(j0x.parent)
        }
        if (!bA0x) {
            var j0x = e0x.data || Y0x;
            bA0x = a9j.w0x(j0x.parent)
        }
        if (!bA0x) {
            bA0x = a9j.w0x(e0x.parent)
        }
        return bA0x
    };
    vP7I.eO2x = function(e0x) {
        var bA0x = this.ckC9t(e0x);
        if ( !! bA0x && !! this.o0x) bA0x.appendChild(this.o0x);
        this.gn2x(e0x);
        this.bzO2x("onshow", e0x);
        this.ee2x(e0x)
    };
    vP7I.ee2x = function(e0x) {
        this.fM2x(e0x);
        this.bzO2x("onrefresh", e0x)
    };
    vP7I.jN4R = function() {
        this.kG4K();
        this.ckz9q();
        a9j.mf4j(this.o0x)
    };
    vP7I.bzU2x = function() {
        var fQ2x = /^onshow|onrefresh|delay$/;
        return function(bW1x) {
            return fQ2x.test(bW1x)
        }
    }();
    vP7I.bzW2x = bm0x;
    vP7I.bzO2x = function() {
        var bzZ2x = function(bB0x, e0x, bW1x, ou5z) {
            if (this.bzU2x(ou5z)) return;
            if ( !! bB0x) bW1x += (bW1x.indexOf("?") > 1 ? "&" : "?") + bB0x;
            var cZ1x = this.bzW2x(ou5z, e0x) || {};
            cZ1x.location = e0x;
            cZ1x.parent = this.im3x[ou5z];
            this.yB8t.hF3x(bW1x, {
                input: cZ1x
            })
        };
        return function(t0x, e0x) {
            if (!e0x.nodelay) {
                if ( !! this.Hk0x.delay) return;
                var bAd2x = this.Hk0x[t0x] || Y0x;
                if (bAd2x.delay) return
            }
            var bB0x = k0x.dh1x(e0x.param) || "";
            if (t0x == "onrefresh") {
                k0x.dZ2x(this.Hk0x, bzZ2x.g0x(this, bB0x, e0x))
            }
            k0x.dZ2x(bAd2x, bzZ2x.g0x(this, bB0x, e0x))
        }
    }();
    vP7I.ckz9q = function() {
        var Al8d = function(bW1x, ou5z) {
            if (!this.bzU2x(ou5z)) this.yB8t.bq0x(bW1x)
        };
        return function() {
            k0x.dZ2x(this.Hk0x, Al8d, this);
            k0x.dZ2x(this.Hk0x.onshow, Al8d, this);
            k0x.dZ2x(this.Hk0x.onrefresh, Al8d, this)
        }
    }()
})();
(function() {
    var c0x = NEJ.P,
        a9j = c0x("nej.e"),
        h0x = c0x("nej.v"),
        H0x = c0x("nej.ut"),
        v0x = c0x("nej.j"),
        k0x = c0x("nej.u"),
        D0x = c0x("nm.m"),
        l0x = c0x("nm.x"),
        p0x = c0x("nm.d"),
        b0x, K0x;
    D0x.Jf1x = NEJ.C();
    b0x = D0x.Jf1x.O0x(H0x.cC1x);
    b0x.cl1x = function() {
        this.cr1x();
        this.o0x = a9j.w0x("g-topbar");
        var i0x = a9j.I0x(this.o0x, "j-tflag");
        this.bbZ7S = i0x[0];
        this.Hs0x = i0x[1];
        this.sc6W = i0x[2];
        this.bAt2x = i0x[3];
        this.bbY7R = i0x[4];
        this.ckw9n = H0x.oR5W.B0x({
            list: this.bbZ7S.getElementsByTagName("a"),
            selected: "z-slt",
            dataset: "module"
        });
        this.bbU7N = H0x.oR5W.B0x({
            list: this.bbY7R.getElementsByTagName("a"),
            selected: "z-slt",
            dataset: "module"
        });
        this.bU1x([
            [this.Hs0x, "click", this.cv1x.g0x(this)],
            [this.Hs0x, "mouseout", this.bAC2x.g0x(this, 0)],
            [this.Hs0x, "mouseover", this.bAC2x.g0x(this, 1)]
        ]);
        window.scrollTopbar = this.ckv9m.g0x(this);
        window.matchNav = this.bAH2x.g0x(this);
        window.polling = this.qz6t.g0x(this);
        this.Jy1x = p0x.Dd9U.B0x();
        this.cku9l();
        this.Ht0x();
        var bB0x = k0x.ho3x(location.href.split("?")[1]) || {};
        if (bB0x.market) {
            a9j.w0x("topbar-download-link").href = "/download?market=" + bB0x.market
        }
        var bbO7H = a9j.I0x(this.o0x, "j-showoff");
        if (bbO7H && !this.Jy1x.Qa3x("newMvSearch")) {
            a9j.x0x(bbO7H[0], "f-hide");
            window.setTimeout(function() {
                a9j.y0x(bbO7H[0], "f-hide")
            }, 5e3)
        }
    };
    b0x.qz6t = function(d0x) {
        var dE2x = l0x.FL0x();
        if (!/^\/msg/.test(dE2x)) {
            var Hw0x = 0;
            Hw0x += d0x.comment;
            Hw0x += d0x.forward;
            Hw0x += d0x.msg;
            Hw0x += d0x.notice;
            if (Hw0x > 0) {
                this.sc6W.innerHTML = a9j.bQ0x("m-topbar-mesg-count", {
                    count: Hw0x
                })
            } else {
                this.sc6W.innerHTML = ""
            }
            var et2x = "/at";
            if (d0x.notice) et2x = "/notify";
            if (d0x.comment) et2x = "/comment";
            if (d0x.msg > 0) et2x = "/private";
            if (d0x.forward > 0) et2x = "/at";
            this.sc6W.href = "/msg/#" + et2x
        } else {
            this.sc6W.innerHTML = ""
        }
        var i0x = a9j.I0x(this.bbZ7S, "j-t");
        if (!/^\/friend/.test(dE2x)) {
            if (i0x && i0x.length) {
                a9j.W0x(i0x[0], "display", d0x.event > 0 ? "" : "none")
            }
        } else {
            a9j.W0x(i0x[0], "display", "none")
        }
    };
    b0x.cv1x = function(d0x) {
        var f0x = h0x.U0x(d0x, "d:action");
        if (f0x) {
            switch (a9j.u0x(f0x, "action")) {
                case "login":
                    h0x.cf1x(d0x);
                    var t0x = a9j.u0x(f0x, "type");
                    if (t0x) {
                        if (t0x == "sina" || t0x == "tencent") top.open(f0x.href);
                        else top.login(t0x == "mobile" ? 0 : 3)
                    } else {
                        top.login()
                    }
                    break;
                case "logout":
                    h0x.cf1x(d0x);
                    top.logout();
                    break;
                case "viewStore":
                    if (!this.Jy1x.Qa3x("storeNew")) {
                        a9j.y0x(this.bbM7F, "f-vhide")
                    }
                    break;
                case "viewLevel":
                    if (!this.Jy1x.Qa3x("levelNew")) {
                        a9j.y0x(this.bbJ7C, "f-vhide")
                    }
                    break
            }
        }
    };
    b0x.bAC2x = function(yo8g, d0x) {
        if (this.bBg2x) {
            this.bBg2x.style.display = !yo8g ? "none" : ""
        }
    };
    b0x.ckv9m = function(gb2x) {
        a9j.W0x(this.o0x, "top", -gb2x + "px")
    };
    b0x.bAH2x = function(et2x, ckr9i) {
        this.ckw9n.oP5U(et2x);
        if (et2x == "discover") {
            a9j.y0x(this.bAt2x, "f-hide");
            a9j.x0x(this.bbY7R, "f-hide");
            window.g_topBarHeight = 105;
            this.bbU7N.oP5U(ckr9i)
        } else {
            a9j.x0x(this.bAt2x, "f-hide");
            a9j.y0x(this.bbY7R, "f-hide");
            window.g_topBarHeight = 75
        }
    };
    b0x.cku9l = function() {
        var uN7G = a9j.w0x("g_iframe");
        if (!uN7G) return;
        var fX2x = uN7G.contentWindow.document.getElementById("g_top");
        this.bAH2x(a9j.u0x(fX2x, "module"), a9j.u0x(fX2x, "sub"))
    };
    b0x.Ht0x = function() {
        var dp1x = GUser || {},
            ckq9h = GUserAcc || {};
        if (dp1x && dp1x.userId) {
            a9j.dP2x(this.Hs0x, "m-topbar-user-login", NEJ.X(dp1x, ckq9h));
            a9j.W0x(this.sc6W, "display", "")
        } else {
            this.Hs0x.innerHTML = a9j.ih3x("m-topbar-user-unlogin");
            this.sc6W.innerHTML = "";
            var i0x = a9j.I0x(this.bbZ7S, "j-t");
            a9j.W0x(i0x[0], "display", "none");
            a9j.W0x(this.sc6W, "display", "none")
        }
        var i0x = a9j.I0x(this.Hs0x, "j-uflag");
        this.bBg2x = i0x[0];
        this.csa1x = i0x[1];
        this.bbJ7C = i0x[2];
        this.bbM7F = i0x[3];
        if (!this.Jy1x.Qa3x("storeNew", true)) {
            a9j.x0x(this.bbM7F, "f-vhide")
        } else {
            a9j.y0x(this.bbM7F, "f-vhide")
        }
        if (!this.Jy1x.Qa3x("levelNew", true)) {
            a9j.x0x(this.bbJ7C, "f-vhide")
        } else {
            a9j.y0x(this.bbJ7C, "f-vhide")
        }
    }
})();
(function() {
    var c0x = NEJ.P,
        Y0x = NEJ.O,
        bm0x = NEJ.F,
        h0x = c0x("nej.v"),
        H0x = c0x("nej.ut"),
        p0x = c0x("nm.d"),
        b0x, K0x;
    p0x.eM2x({
        "polling-get": {
            type: "GET",
            url: "/api/pl/count",
            format: function(R0x) {
                h0x.A0x(p0x.rR6L, "message", R0x)
            }
        }
    });
    p0x.rR6L = NEJ.C();
    b0x = p0x.rR6L.O0x(p0x.gT2x);
    b0x.UA4E = function() {
        this.cj1x("polling-get", {})
    };
    b0x.uW7P = function() {
        var eR2x;
        return function() {
            if ( !! eR2x) return;
            eR2x = window.setInterval(this.UA4E.g0x(this), 1e5);
            this.UA4E()
        }
    }();
    H0x.ft2x.B0x({
        event: "message",
        element: p0x.rR6L
    })
})();
var io = "undefined" === typeof module ? {} : module.exports;
(function() {
    (function(exports, global) {
        var io = exports;
        io.version = "0.9.16";
        io.protocol = 1;
        io.transports = [];
        io.j = [];
        io.sockets = {};
        io.connect = function(host, details) {
            var uri = io.util.parseUri(host),
                uuri, socket;
            if (global && global.location) {
                uri.protocol = uri.protocol || global.location.protocol.slice(0, -1);
                uri.host = uri.host || (global.document ? global.document.domain : global.location.hostname);
                uri.port = uri.port || global.location.port
            }
            uuri = io.util.uniqueUri(uri);
            var options = {
                host: uri.host,
                secure: "https" == uri.protocol,
                port: uri.port || ("https" == uri.protocol ? 443 : 80),
                query: uri.query || ""
            };
            io.util.merge(options, details);
            if (options["force new connection"] || !io.sockets[uuri]) {
                socket = new io.Socket(options)
            }
            if (!options["force new connection"] && socket) {
                io.sockets[uuri] = socket
            }
            socket = socket || io.sockets[uuri];
            return socket.of(uri.path.length > 1 ? uri.path : "")
        }
    })("object" === typeof module ? module.exports : this.io = {}, this);
    (function(exports, global) {
        var util = exports.util = {};
        var re = /^(?:(?![^:@]+:[^:@\/]*@)([^:\/?#.]+):)?(?:\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/;
        var parts = ["source", "protocol", "authority", "userInfo", "user", "password", "host", "port", "relative", "path", "directory", "file", "query", "anchor"];
        util.parseUri = function(str) {
            var m = re.exec(str || ""),
                uri = {},
                i = 14;
            while (i--) {
                uri[parts[i]] = m[i] || ""
            }
            return uri
        };
        util.uniqueUri = function(uri) {
            var protocol = uri.protocol,
                host = uri.host,
                port = uri.port;
            if ("document" in global) {
                host = host || document.domain;
                port = port || (protocol == "https" && document.location.protocol !== "https:" ? 443 : document.location.port)
            } else {
                host = host || "localhost";
                if (!port && protocol == "https") {
                    port = 443
                }
            }
            return (protocol || "http") + "://" + host + ":" + (port || 80)
        };
        util.query = function(base, addition) {
            var query = util.chunkQuery(base || ""),
                components = [];
            util.merge(query, util.chunkQuery(addition || ""));
            for (var part in query) {
                if (query.hasOwnProperty(part)) {
                    components.push(part + "=" + query[part])
                }
            }
            return components.length ? "?" + components.join("&") : ""
        };
        util.chunkQuery = function(qs) {
            var query = {},
                params = qs.split("&"),
                i = 0,
                l = params.length,
                kv;
            for (; i < l; ++i) {
                kv = params[i].split("=");
                if (kv[0]) {
                    query[kv[0]] = kv[1]
                }
            }
            return query
        };
        var pageLoaded = false;
        util.load = function(fn) {
            if ("document" in global && document.readyState === "complete" || pageLoaded) {
                return fn()
            }
            util.on(global, "load", fn, false)
        };
        util.on = function(element, event, fn, capture) {
            if (element.attachEvent) {
                element.attachEvent("on" + event, fn)
            } else if (element.addEventListener) {
                element.addEventListener(event, fn, capture)
            }
        };
        util.request = function(xdomain) {
            if (xdomain && "undefined" != typeof XDomainRequest && !util.ua.hasCORS) {
                return new XDomainRequest
            }
            if ("undefined" != typeof XMLHttpRequest && (!xdomain || util.ua.hasCORS)) {
                return new XMLHttpRequest
            }
            if (!xdomain) {
                try {
                    return new(window[["Active"].concat("Object").join("X")])("Microsoft.XMLHTTP")
                } catch (e) {}
            }
            return null
        };
        if ("undefined" != typeof window) {
            util.load(function() {
                pageLoaded = true
            })
        }
        util.defer = function(fn) {
            if (!util.ua.webkit || "undefined" != typeof importScripts) {
                return fn()
            }
            util.load(function() {
                setTimeout(fn, 100)
            })
        };
        util.merge = function merge(target, additional, deep, lastseen) {
            var seen = lastseen || [],
                depth = typeof deep == "undefined" ? 2 : deep,
                prop;
            for (prop in additional) {
                if (additional.hasOwnProperty(prop) && util.indexOf(seen, prop) < 0) {
                    if (typeof target[prop] !== "object" || !depth) {
                        target[prop] = additional[prop];
                        seen.push(additional[prop])
                    } else {
                        util.merge(target[prop], additional[prop], depth - 1, seen)
                    }
                }
            }
            return target
        };
        util.mixin = function(ctor, ctor2) {
            util.merge(ctor.prototype, ctor2.prototype)
        };
        util.inherit = function(ctor, ctor2) {
            function f() {}
            f.prototype = ctor2.prototype;
            ctor.prototype = new f
        };
        util.isArray = Array.isArray ||
            function(obj) {
                return Object.prototype.toString.call(obj) === "[object Array]"
            };
        util.intersect = function(arr, arr2) {
            var ret = [],
                longest = arr.length > arr2.length ? arr : arr2,
                shortest = arr.length > arr2.length ? arr2 : arr;
            for (var i = 0, l = shortest.length; i < l; i++) {
                if (~util.indexOf(longest, shortest[i])) ret.push(shortest[i])
            }
            return ret
        };
        util.indexOf = function(arr, o, i) {
            for (var j = arr.length, i = i < 0 ? i + j < 0 ? 0 : i + j : i || 0; i < j && arr[i] !== o; i++) {}
            return j <= i ? -1 : i
        };
        util.toArray = function(enu) {
            var arr = [];
            for (var i = 0, l = enu.length; i < l; i++) arr.push(enu[i]);
            return arr
        };
        util.ua = {};
        util.ua.hasCORS = "undefined" != typeof XMLHttpRequest &&
            function() {
                try {
                    var a = new XMLHttpRequest
                } catch (e) {
                    return false
                }
                return a.withCredentials != undefined
            }();
        util.ua.webkit = "undefined" != typeof navigator && /webkit/i.test(navigator.userAgent);
        util.ua.iDevice = "undefined" != typeof navigator && /iPad|iPhone|iPod/i.test(navigator.userAgent)
    })("undefined" != typeof io ? io : module.exports, this);
    (function(exports, io) {
        exports.EventEmitter = EventEmitter;

        function EventEmitter() {}
        EventEmitter.prototype.on = function(name, fn) {
            if (!this.$events) {
                this.$events = {}
            }
            if (!this.$events[name]) {
                this.$events[name] = fn
            } else if (io.util.isArray(this.$events[name])) {
                this.$events[name].push(fn)
            } else {
                this.$events[name] = [this.$events[name], fn]
            }
            return this
        };
        EventEmitter.prototype.addListener = EventEmitter.prototype.on;
        EventEmitter.prototype.once = function(name, fn) {
            var self = this;

            function on() {
                self.removeListener(name, on);
                fn.apply(this, arguments)
            }
            on.listener = fn;
            this.on(name, on);
            return this
        };
        EventEmitter.prototype.removeListener = function(name, fn) {
            if (this.$events && this.$events[name]) {
                var list = this.$events[name];
                if (io.util.isArray(list)) {
                    var pos = -1;
                    for (var i = 0, l = list.length; i < l; i++) {
                        if (list[i] === fn || list[i].listener && list[i].listener === fn) {
                            pos = i;
                            break
                        }
                    }
                    if (pos < 0) {
                        return this
                    }
                    list.splice(pos, 1);
                    if (!list.length) {
                        delete this.$events[name]
                    }
                } else if (list === fn || list.listener && list.listener === fn) {
                    delete this.$events[name]
                }
            }
            return this
        };
        EventEmitter.prototype.removeAllListeners = function(name) {
            if (name === undefined) {
                this.$events = {};
                return this
            }
            if (this.$events && this.$events[name]) {
                this.$events[name] = null
            }
            return this
        };
        EventEmitter.prototype.listeners = function(name) {
            if (!this.$events) {
                this.$events = {}
            }
            if (!this.$events[name]) {
                this.$events[name] = []
            }
            if (!io.util.isArray(this.$events[name])) {
                this.$events[name] = [this.$events[name]]
            }
            return this.$events[name]
        };
        EventEmitter.prototype.emit = function(name) {
            if (!this.$events) {
                return false
            }
            var handler = this.$events[name];
            if (!handler) {
                return false
            }
            var args = Array.prototype.slice.call(arguments, 1);
            if ("function" == typeof handler) {
                handler.apply(this, args)
            } else if (io.util.isArray(handler)) {
                var listeners = handler.slice();
                for (var i = 0, l = listeners.length; i < l; i++) {
                    listeners[i].apply(this, args)
                }
            } else {
                return false
            }
            return true
        }
    })("undefined" != typeof io ? io : module.exports, "undefined" != typeof io ? io : module.parent.exports);
    (function(exports, nativeJSON) {
        "use strict";
        if (nativeJSON && nativeJSON.parse) {
            return exports.JSON = {
                parse: nativeJSON.parse,
                stringify: nativeJSON.stringify
            }
        }
        var JSON = exports.JSON = {};

        function f(n) {
            return n < 10 ? "0" + n : n
        }
        function date(d, key) {
            return isFinite(d.valueOf()) ? d.getUTCFullYear() + "-" + f(d.getUTCMonth() + 1) + "-" + f(d.getUTCDate()) + "T" + f(d.getUTCHours()) + ":" + f(d.getUTCMinutes()) + ":" + f(d.getUTCSeconds()) + "Z" : null
        }
        var cx = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
            escapable = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
            gap, indent, meta = {
                "\b": "\\b",
                "\t": "\\t",
                "\n": "\\n",
                "\f": "\\f",
                "\r": "\\r",
                '"': '\\"',
                "\\": "\\\\"
            },
            rep;

        function quote(string) {
            escapable.lastIndex = 0;
            return escapable.test(string) ? '"' + string.replace(escapable, function(a) {
                var c = meta[a];
                return typeof c === "string" ? c : "\\u" + ("0000" + a.charCodeAt(0).toString(16)).slice(-4)
            }) + '"' : '"' + string + '"'
        }
        function str(key, holder) {
            var i, k, v, length, mind = gap,
                partial, value = holder[key];
            if (value instanceof Date) {
                value = date(key)
            }
            if (typeof rep === "function") {
                value = rep.call(holder, key, value)
            }
            switch (typeof value) {
                case "string":
                    return quote(value);
                case "number":
                    return isFinite(value) ? String(value) : "null";
                case "boolean":
                case "null":
                    return String(value);
                case "object":
                    if (!value) {
                        return "null"
                    }
                    gap += indent;
                    partial = [];
                    if (Object.prototype.toString.apply(value) === "[object Array]") {
                        length = value.length;
                        for (i = 0; i < length; i += 1) {
                            partial[i] = str(i, value) || "null"
                        }
                        v = partial.length === 0 ? "[]" : gap ? "[\n" + gap + partial.join(",\n" + gap) + "\n" + mind + "]" : "[" + partial.join(",") + "]";
                        gap = mind;
                        return v
                    }
                    if (rep && typeof rep === "object") {
                        length = rep.length;
                        for (i = 0; i < length; i += 1) {
                            if (typeof rep[i] === "string") {
                                k = rep[i];
                                v = str(k, value);
                                if (v) {
                                    partial.push(quote(k) + (gap ? ": " : ":") + v)
                                }
                            }
                        }
                    } else {
                        for (k in value) {
                            if (Object.prototype.hasOwnProperty.call(value, k)) {
                                v = str(k, value);
                                if (v) {
                                    partial.push(quote(k) + (gap ? ": " : ":") + v)
                                }
                            }
                        }
                    }
                    v = partial.length === 0 ? "{}" : gap ? "{\n" + gap + partial.join(",\n" + gap) + "\n" + mind + "}" : "{" + partial.join(",") + "}";
                    gap = mind;
                    return v
            }
        }
        JSON.stringify = function(value, replacer, space) {
            var i;
            gap = "";
            indent = "";
            if (typeof space === "number") {
                for (i = 0; i < space; i += 1) {
                    indent += " "
                }
            } else if (typeof space === "string") {
                indent = space
            }
            rep = replacer;
            if (replacer && typeof replacer !== "function" && (typeof replacer !== "object" || typeof replacer.length !== "number")) {
                throw new Error("JSON.stringify")
            }
            return str("", {
                "": value
            })
        };
        JSON.parse = function(text, reviver) {
            var j;

            function walk(holder, key) {
                var k, v, value = holder[key];
                if (value && typeof value === "object") {
                    for (k in value) {
                        if (Object.prototype.hasOwnProperty.call(value, k)) {
                            v = walk(value, k);
                            if (v !== undefined) {
                                value[k] = v
                            } else {
                                delete value[k]
                            }
                        }
                    }
                }
                return reviver.call(holder, key, value)
            }
            text = String(text);
            cx.lastIndex = 0;
            if (cx.test(text)) {
                text = text.replace(cx, function(a) {
                    return "\\u" + ("0000" + a.charCodeAt(0).toString(16)).slice(-4)
                })
            }
            if (/^[\],:{}\s]*$/.test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, "@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, "]").replace(/(?:^|:|,)(?:\s*\[)+/g, ""))) {
                j = eval("(" + text + ")");
                return typeof reviver === "function" ? walk({
                    "": j
                }, "") : j
            }
            throw new SyntaxError("JSON.parse")
        }
    })("undefined" != typeof io ? io : module.exports, typeof JSON !== "undefined" ? JSON : undefined);
    (function(exports, io) {
        var parser = exports.parser = {};
        var packets = parser.packets = ["disconnect", "connect", "heartbeat", "message", "json", "event", "ack", "error", "noop"];
        var reasons = parser.reasons = ["transport not supported", "client not handshaken", "unauthorized"];
        var advice = parser.advice = ["reconnect"];
        var JSON = io.JSON,
            indexOf = io.util.indexOf;
        parser.encodePacket = function(packet) {
            var type = indexOf(packets, packet.type),
                id = packet.id || "",
                endpoint = packet.endpoint || "",
                ack = packet.ack,
                data = null;
            switch (packet.type) {
                case "error":
                    var reason = packet.reason ? indexOf(reasons, packet.reason) : "",
                        adv = packet.advice ? indexOf(advice, packet.advice) : "";
                    if (reason !== "" || adv !== "") data = reason + (adv !== "" ? "+" + adv : "");
                    break;
                case "message":
                    if (packet.data !== "") data = packet.data;
                    break;
                case "event":
                    var ev = {
                        name: packet.name
                    };
                    if (packet.args && packet.args.length) {
                        ev.args = packet.args
                    }
                    data = JSON.stringify(ev);
                    break;
                case "json":
                    data = JSON.stringify(packet.data);
                    break;
                case "connect":
                    if (packet.qs) data = packet.qs;
                    break;
                case "ack":
                    data = packet.ackId + (packet.args && packet.args.length ? "+" + JSON.stringify(packet.args) : "");
                    break
            }
            var encoded = [type, id + (ack == "data" ? "+" : ""), endpoint];
            if (data !== null && data !== undefined) encoded.push(data);
            return encoded.join(":")
        };
        parser.encodePayload = function(packets) {
            var decoded = "";
            if (packets.length == 1) return packets[0];
            for (var i = 0, l = packets.length; i < l; i++) {
                var packet = packets[i];
                decoded += "�" + packet.length + "�" + packets[i]
            }
            return decoded
        };
        var regexp = /([^:]+):([0-9]+)?(\+)?:([^:]+)?:?([\s\S]*)?/;
        parser.decodePacket = function(data) {
            var pieces = data.match(regexp);
            if (!pieces) return {};
            var id = pieces[2] || "",
                data = pieces[5] || "",
                packet = {
                    type: packets[pieces[1]],
                    endpoint: pieces[4] || ""
                };
            if (id) {
                packet.id = id;
                if (pieces[3]) packet.ack = "data";
                else packet.ack = true
            }
            switch (packet.type) {
                case "error":
                    var pieces = data.split("+");
                    packet.reason = reasons[pieces[0]] || "";
                    packet.advice = advice[pieces[1]] || "";
                    break;
                case "message":
                    packet.data = data || "";
                    break;
                case "event":
                    try {
                        var opts = JSON.parse(data);
                        packet.name = opts.name;
                        packet.args = opts.args
                    } catch (e) {}
                    packet.args = packet.args || [];
                    break;
                case "json":
                    try {
                        packet.data = JSON.parse(data)
                    } catch (e) {}
                    break;
                case "connect":
                    packet.qs = data || "";
                    break;
                case "ack":
                    var pieces = data.match(/^([0-9]+)(\+)?(.*)/);
                    if (pieces) {
                        packet.ackId = pieces[1];
                        packet.args = [];
                        if (pieces[3]) {
                            try {
                                packet.args = pieces[3] ? JSON.parse(pieces[3]) : []
                            } catch (e) {}
                        }
                    }
                    break;
                case "disconnect":
                case "heartbeat":
                    break
            }
            return packet
        };
        parser.decodePayload = function(data) {
            if (data.charAt(0) == "�") {
                var ret = [];
                for (var i = 1, length = ""; i < data.length; i++) {
                    if (data.charAt(i) == "�") {
                        ret.push(parser.decodePacket(data.substr(i + 1).substr(0, length)));
                        i += Number(length) + 1;
                        length = ""
                    } else {
                        length += data.charAt(i)
                    }
                }
                return ret
            } else {
                return [parser.decodePacket(data)]
            }
        }
    })("undefined" != typeof io ? io : module.exports, "undefined" != typeof io ? io : module.parent.exports);
    (function(exports, io) {
        exports.Transport = Transport;

        function Transport(socket, sessid) {
            this.socket = socket;
            this.sessid = sessid
        }
        io.util.mixin(Transport, io.EventEmitter);
        Transport.prototype.heartbeats = function() {
            return true
        };
        Transport.prototype.onData = function(data) {
            this.clearCloseTimeout();
            if (this.socket.connected || this.socket.connecting || this.socket.reconnecting) {
                this.setCloseTimeout()
            }
            if (data !== "") {
                var msgs = io.parser.decodePayload(data);
                if (msgs && msgs.length) {
                    for (var i = 0, l = msgs.length; i < l; i++) {
                        this.onPacket(msgs[i])
                    }
                }
            }
            return this
        };
        Transport.prototype.onPacket = function(packet) {
            this.socket.setHeartbeatTimeout();
            if (packet.type == "heartbeat") {
                return this.onHeartbeat()
            }
            if (packet.type == "connect" && packet.endpoint == "") {
                this.onConnect()
            }
            if (packet.type == "error" && packet.advice == "reconnect") {
                this.isOpen = false
            }
            this.socket.onPacket(packet);
            return this
        };
        Transport.prototype.setCloseTimeout = function() {
            if (!this.closeTimeout) {
                var self = this;
                this.closeTimeout = setTimeout(function() {
                    self.onDisconnect()
                }, this.socket.closeTimeout)
            }
        };
        Transport.prototype.onDisconnect = function() {
            if (this.isOpen) this.close();
            this.clearTimeouts();
            this.socket.onDisconnect();
            return this
        };
        Transport.prototype.onConnect = function() {
            this.socket.onConnect();
            return this
        };
        Transport.prototype.clearCloseTimeout = function() {
            if (this.closeTimeout) {
                clearTimeout(this.closeTimeout);
                this.closeTimeout = null
            }
        };
        Transport.prototype.clearTimeouts = function() {
            this.clearCloseTimeout();
            if (this.reopenTimeout) {
                clearTimeout(this.reopenTimeout)
            }
        };
        Transport.prototype.packet = function(packet) {
            this.send(io.parser.encodePacket(packet))
        };
        Transport.prototype.onHeartbeat = function(heartbeat) {
            this.packet({
                type: "heartbeat"
            })
        };
        Transport.prototype.onOpen = function() {
            this.isOpen = true;
            this.clearCloseTimeout();
            this.socket.onOpen()
        };
        Transport.prototype.onClose = function() {
            var self = this;
            this.isOpen = false;
            this.socket.onClose();
            this.onDisconnect()
        };
        Transport.prototype.prepareUrl = function() {
            var options = this.socket.options;
            return this.scheme() + "://" + options.host + ":" + options.port + "/" + options.resource + "/" + io.protocol + "/" + this.name + "/" + this.sessid
        };
        Transport.prototype.ready = function(socket, fn) {
            fn.call(this)
        }
    })("undefined" != typeof io ? io : module.exports, "undefined" != typeof io ? io : module.parent.exports);
    (function(exports, io, global) {
        exports.Socket = Socket;

        function Socket(options) {
            this.options = {
                port: 80,
                secure: false,
                document: "document" in global ? document : false,
                resource: "socket.io",
                transports: io.transports,
                "connect timeout": 1e4,
                "try multiple transports": true,
                reconnect: true,
                "reconnection delay": 500,
                "reconnection limit": Infinity,
                "reopen delay": 3e3,
                "max reconnection attempts": 10,
                "sync disconnect on unload": false,
                "auto connect": true,
                "flash policy port": 10843,
                manualFlush: false
            };
            io.util.merge(this.options, options);
            this.connected = false;
            this.open = false;
            this.connecting = false;
            this.reconnecting = false;
            this.namespaces = {};
            this.buffer = [];
            this.doBuffer = false;
            if (this.options["sync disconnect on unload"] && (!this.isXDomain() || io.util.ua.hasCORS)) {
                var self = this;
                io.util.on(global, "beforeunload", function() {
                    self.disconnectSync()
                }, false)
            }
            if (this.options["auto connect"]) {
                this.connect()
            }
        }
        io.util.mixin(Socket, io.EventEmitter);
        Socket.prototype.of = function(name) {
            if (!this.namespaces[name]) {
                this.namespaces[name] = new io.SocketNamespace(this, name);
                if (name !== "") {
                    this.namespaces[name].packet({
                        type: "connect"
                    })
                }
            }
            return this.namespaces[name]
        };
        Socket.prototype.publish = function() {
            this.emit.apply(this, arguments);
            var nsp;
            for (var i in this.namespaces) {
                if (this.namespaces.hasOwnProperty(i)) {
                    nsp = this.of(i);
                    nsp.$emit.apply(nsp, arguments)
                }
            }
        };

        function empty() {}
        Socket.prototype.handshake = function(fn) {
            var self = this,
                options = this.options;

            function complete(data) {
                if (data instanceof Error) {
                    self.connecting = false;
                    self.onError(data.message)
                } else {
                    fn.apply(null, data.split(":"))
                }
            }
            var url = ["http" + (options.secure ? "s" : "") + ":/", options.host + ":" + options.port, options.resource, io.protocol, io.util.query(this.options.query, "t=" + +(new Date))].join("/");
            if (this.isXDomain() && !io.util.ua.hasCORS) {
                var insertAt = document.getElementsByTagName("script")[0],
                    script = document.createElement("script");
                script.src = url + "&jsonp=" + io.j.length;
                insertAt.parentNode.insertBefore(script, insertAt);
                io.j.push(function(data) {
                    complete(data);
                    script.parentNode.removeChild(script)
                })
            } else {
                var xhr = io.util.request();
                xhr.open("GET", url, true);
                if (this.isXDomain()) {
                    xhr.withCredentials = true
                }
                xhr.onreadystatechange = function() {
                    if (xhr.readyState == 4) {
                        xhr.onreadystatechange = empty;
                        if (xhr.status == 200) {
                            complete(xhr.responseText)
                        } else if (xhr.status == 403) {
                            self.onError(xhr.responseText)
                        } else {
                            self.connecting = false;
                            !self.reconnecting && self.onError(xhr.responseText)
                        }
                    }
                };
                xhr.send(null)
            }
        };
        Socket.prototype.getTransport = function(override) {
            var transports = override || this.transports,
                match;
            for (var i = 0, transport; transport = transports[i]; i++) {
                if (io.Transport[transport] && io.Transport[transport].check(this) && (!this.isXDomain() || io.Transport[transport].xdomainCheck(this))) {
                    return new io.Transport[transport](this, this.sessionid)
                }
            }
            return null
        };
        Socket.prototype.connect = function(fn) {
            if (this.connecting && this.transports != "jsonp-polling") {
                return this
            }
            var self = this;
            self.connecting = true;
            this.handshake(function(sid, heartbeat, close, transports) {
                self.sessionid = sid;
                self.closeTimeout = close * 1e3;
                self.heartbeatTimeout = heartbeat * 1e3;
                var check = function() {
                    return "WebSocket" in global && !("__addTask" in WebSocket) || "MozWebSocket" in global
                };
                if (!check()) {
                    transports = "jsonp-polling"
                }
                if (!self.transports) self.transports = self.origTransports = transports ? io.util.intersect(transports.split(","), self.options.transports) : self.options.transports;
                self.setHeartbeatTimeout();

                function connect(transports) {
                    if (self.transport) self.transport.clearTimeouts();
                    self.transport = self.getTransport(transports);
                    if (!self.transport) return self.publish("connect_failed");
                    self.transport.ready(self, function() {
                        self.connecting = true;
                        self.publish("connecting", self.transport.name);
                        self.transport.open();
                        if (self.options["connect timeout"]) {
                            self.connectTimeoutTimer = setTimeout(function() {
                                if (!self.connected) {
                                    self.connecting = false;
                                    if (self.options["try multiple transports"]) {
                                        var remaining = self.transports;
                                        while (remaining.length > 0 && remaining.splice(0, 1)[0] != self.transport.name) {}
                                        if (remaining.length) {
                                            connect(remaining)
                                        } else {
                                            self.publish("connect_failed")
                                        }
                                    }
                                }
                            }, self.options["connect timeout"])
                        }
                    })
                }
                connect(self.transports);
                self.once("connect", function() {
                    clearTimeout(self.connectTimeoutTimer);
                    fn && typeof fn == "function" && fn()
                })
            });
            return this
        };
        Socket.prototype.setHeartbeatTimeout = function() {
            clearTimeout(this.heartbeatTimeoutTimer);
            if (this.transport && !this.transport.heartbeats()) return;
            var self = this;
            this.heartbeatTimeoutTimer = setTimeout(function() {
                self.transport.onClose()
            }, this.heartbeatTimeout)
        };
        Socket.prototype.packet = function(data) {
            if (this.connected && !this.doBuffer) {
                this.transport.packet(data)
            } else {
                this.buffer.push(data)
            }
            return this
        };
        Socket.prototype.setBuffer = function(v) {
            this.doBuffer = v;
            if (!v && this.connected && this.buffer.length) {
                if (!this.options["manualFlush"]) {
                    this.flushBuffer()
                }
            }
        };
        Socket.prototype.flushBuffer = function() {
            this.transport.payload(this.buffer);
            this.buffer = []
        };
        Socket.prototype.disconnect = function() {
            if (this.connected || this.connecting) {
                if (this.open) {
                    this.of("").packet({
                        type: "disconnect"
                    })
                }
                this.onDisconnect("booted")
            }
            return this
        };
        Socket.prototype.disconnectSync = function() {
            var xhr = io.util.request();
            var uri = ["http" + (this.options.secure ? "s" : "") + ":/", this.options.host + ":" + this.options.port, this.options.resource, io.protocol, "", this.sessionid].join("/") + "/?disconnect=1";
            xhr.open("GET", uri, false);
            xhr.send(null);
            this.onDisconnect("booted")
        };
        Socket.prototype.isXDomain = function() {
            var port = global.location.port || ("https:" == global.location.protocol ? 443 : 80);
            return this.options.host !== global.location.hostname || this.options.port != port
        };
        Socket.prototype.onConnect = function() {
            if (!this.connected) {
                this.connected = true;
                this.connecting = false;
                if (!this.doBuffer) {
                    this.setBuffer(false)
                }
                this.emit("connect")
            }
        };
        Socket.prototype.onOpen = function() {
            this.open = true
        };
        Socket.prototype.onClose = function() {
            this.open = false;
            clearTimeout(this.heartbeatTimeoutTimer)
        };
        Socket.prototype.onPacket = function(packet) {
            this.of(packet.endpoint).onPacket(packet)
        };
        Socket.prototype.onError = function(err) {
            if (err && err.advice) {
                if (err.advice === "reconnect" && (this.connected || this.connecting)) {
                    this.disconnect();
                    if (this.options.reconnect) {
                        this.reconnect()
                    }
                }
            }
            this.publish("error", err && err.reason ? err.reason : err)
        };
        Socket.prototype.onDisconnect = function(reason) {
            var wasConnected = this.connected,
                wasConnecting = this.connecting;
            this.connected = false;
            this.connecting = false;
            this.open = false;
            if (wasConnected || wasConnecting) {
                this.transport.close();
                this.transport.clearTimeouts();
                if (wasConnected) {
                    this.publish("disconnect", reason);
                    if ("booted" != reason && this.options.reconnect && !this.reconnecting) {
                        this.reconnect()
                    }
                }
            }
        };
        Socket.prototype.reconnect = function() {
            this.reconnecting = true;
            this.reconnectionAttempts = 0;
            this.reconnectionDelay = this.options["reconnection delay"];
            var self = this,
                maxAttempts = this.options["max reconnection attempts"],
                tryMultiple = this.options["try multiple transports"],
                limit = this.options["reconnection limit"];

            function reset() {
                if (self.connected) {
                    for (var i in self.namespaces) {
                        if (self.namespaces.hasOwnProperty(i) && "" !== i) {
                            self.namespaces[i].packet({
                                type: "connect"
                            })
                        }
                    }
                    self.publish("reconnect", self.transport.name, self.reconnectionAttempts)
                }
                clearTimeout(self.reconnectionTimer);
                self.removeListener("connect_failed", maybeReconnect);
                self.removeListener("connect", maybeReconnect);
                self.reconnecting = false;
                delete self.reconnectionAttempts;
                delete self.reconnectionDelay;
                delete self.reconnectionTimer;
                delete self.redoTransports;
                self.options["try multiple transports"] = tryMultiple
            }
            function maybeReconnect() {
                if (!self.reconnecting) {
                    return
                }
                if (self.connected) {
                    return reset()
                }
                if (self.connecting && self.reconnecting && self.transports != "jsonp-polling") {
                    return self.reconnectionTimer = setTimeout(maybeReconnect, 1e3)
                }
                if (self.reconnectionAttempts++ >= maxAttempts) {
                    if (!self.redoTransports) {
                        self.on("connect_failed", maybeReconnect);
                        self.options["try multiple transports"] = true;
                        self.transports = self.origTransports;
                        self.transport = self.getTransport();
                        self.redoTransports = true;
                        self.connect()
                    } else {
                        self.publish("reconnect_failed");
                        reset()
                    }
                } else {
                    if (self.reconnectionDelay < limit) {
                        self.reconnectionDelay *= 2
                    }
                    self.connect();
                    self.publish("reconnecting", self.reconnectionDelay, self.reconnectionAttempts);
                    self.reconnectionTimer = setTimeout(maybeReconnect, self.reconnectionDelay)
                }
            }
            this.options["try multiple transports"] = false;
            this.reconnectionTimer = setTimeout(maybeReconnect, this.reconnectionDelay);
            this.on("connect", maybeReconnect)
        }
    })("undefined" != typeof io ? io : module.exports, "undefined" != typeof io ? io : module.parent.exports, this);
    (function(exports, io) {
        exports.SocketNamespace = SocketNamespace;

        function SocketNamespace(socket, name) {
            this.socket = socket;
            this.name = name || "";
            this.flags = {};
            this.json = new Flag(this, "json");
            this.ackPackets = 0;
            this.acks = {}
        }
        io.util.mixin(SocketNamespace, io.EventEmitter);
        SocketNamespace.prototype.$emit = io.EventEmitter.prototype.emit;
        SocketNamespace.prototype.of = function() {
            return this.socket.of.apply(this.socket, arguments)
        };
        SocketNamespace.prototype.packet = function(packet) {
            packet.endpoint = this.name;
            this.socket.packet(packet);
            this.flags = {};
            return this
        };
        SocketNamespace.prototype.send = function(data, fn) {
            var packet = {
                type: this.flags.json ? "json" : "message",
                data: data
            };
            if ("function" == typeof fn) {
                packet.id = ++this.ackPackets;
                packet.ack = true;
                this.acks[packet.id] = fn
            }
            return this.packet(packet)
        };
        SocketNamespace.prototype.emit = function(name) {
            var args = Array.prototype.slice.call(arguments, 1),
                lastArg = args[args.length - 1],
                packet = {
                    type: "event",
                    name: name
                };
            if ("function" == typeof lastArg) {
                packet.id = ++this.ackPackets;
                packet.ack = "data";
                this.acks[packet.id] = lastArg;
                args = args.slice(0, args.length - 1)
            }
            packet.args = args;
            return this.packet(packet)
        };
        SocketNamespace.prototype.disconnect = function() {
            if (this.name === "") {
                this.socket.disconnect()
            } else {
                this.packet({
                    type: "disconnect"
                });
                this.$emit("disconnect")
            }
            return this
        };
        SocketNamespace.prototype.onPacket = function(packet) {
            var self = this;

            function ack() {
                self.packet({
                    type: "ack",
                    args: io.util.toArray(arguments),
                    ackId: packet.id
                })
            }
            switch (packet.type) {
                case "connect":
                    this.$emit("connect");
                    break;
                case "disconnect":
                    if (this.name === "") {
                        this.socket.onDisconnect(packet.reason || "booted")
                    } else {
                        this.$emit("disconnect", packet.reason)
                    }
                    break;
                case "message":
                case "json":
                    var params = ["message", packet.data];
                    if (packet.ack == "data") {
                        params.push(ack)
                    } else if (packet.ack) {
                        this.packet({
                            type: "ack",
                            ackId: packet.id
                        })
                    }
                    this.$emit.apply(this, params);
                    break;
                case "event":
                    var params = [packet.name].concat(packet.args);
                    if (packet.ack == "data") params.push(ack);
                    this.$emit.apply(this, params);
                    break;
                case "ack":
                    if (this.acks[packet.ackId]) {
                        this.acks[packet.ackId].apply(this, packet.args);
                        delete this.acks[packet.ackId]
                    }
                    break;
                case "error":
                    if (packet.advice) {
                        this.socket.onError(packet)
                    } else {
                        if (packet.reason == "unauthorized") {
                            this.$emit("connect_failed", packet.reason)
                        } else {
                            this.$emit("error", packet.reason)
                        }
                    }
                    break
            }
        };

        function Flag(nsp, name) {
            this.namespace = nsp;
            this.name = name
        }
        Flag.prototype.send = function() {
            this.namespace.flags[this.name] = true;
            this.namespace.send.apply(this.namespace, arguments)
        };
        Flag.prototype.emit = function() {
            this.namespace.flags[this.name] = true;
            this.namespace.emit.apply(this.namespace, arguments)
        }
    })("undefined" != typeof io ? io : module.exports, "undefined" != typeof io ? io : module.parent.exports);
    (function(exports, io, global) {
        exports.websocket = WS;

        function WS(socket) {
            io.Transport.apply(this, arguments)
        }
        io.util.inherit(WS, io.Transport);
        WS.prototype.name = "websocket";
        WS.prototype.open = function() {
            var query = io.util.query(this.socket.options.query),
                self = this,
                Socket;
            if (!Socket) {
                Socket = global.MozWebSocket || global.WebSocket
            }
            this.websocket = new Socket(this.prepareUrl() + query);
            this.websocket.onopen = function() {
                self.onOpen();
                self.socket.setBuffer(false)
            };
            this.websocket.onmessage = function(ev) {
                self.onData(ev.data)
            };
            this.websocket.onclose = function() {
                self.onClose();
                self.socket.setBuffer(true)
            };
            this.websocket.onerror = function(e) {
                self.onError(e)
            };
            return this
        };
        if (io.util.ua.iDevice) {
            WS.prototype.send = function(data) {
                var self = this;
                setTimeout(function() {
                    self.websocket.send(data)
                }, 0);
                return this
            }
        } else {
            WS.prototype.send = function(data) {
                this.websocket.send(data);
                return this
            }
        }
        WS.prototype.payload = function(arr) {
            for (var i = 0, l = arr.length; i < l; i++) {
                this.packet(arr[i])
            }
            return this
        };
        WS.prototype.close = function() {
            this.websocket.close();
            return this
        };
        WS.prototype.onError = function(e) {
            this.socket.onError(e)
        };
        WS.prototype.scheme = function() {
            return this.socket.options.secure ? "wss" : "ws"
        };
        WS.check = function() {
            return "WebSocket" in global && !("__addTask" in WebSocket) || "MozWebSocket" in global
        };
        WS.xdomainCheck = function() {
            return true
        };
        io.transports.push("websocket")
    })("undefined" != typeof io ? io.Transport : module.exports, "undefined" != typeof io ? io : module.parent.exports, this);
    (function(exports, io) {
        exports.flashsocket = Flashsocket;

        function Flashsocket() {
            io.Transport.websocket.apply(this, arguments)
        }
        io.util.inherit(Flashsocket, io.Transport.websocket);
        Flashsocket.prototype.name = "flashsocket";
        Flashsocket.prototype.open = function() {
            var self = this,
                args = arguments;
            WebSocket.Uz4D(function() {
                io.Transport.websocket.prototype.open.apply(self, args)
            });
            return this
        };
        Flashsocket.prototype.send = function() {
            var self = this,
                args = arguments;
            WebSocket.Uz4D(function() {
                io.Transport.websocket.prototype.send.apply(self, args)
            });
            return this
        };
        Flashsocket.prototype.close = function() {
            WebSocket.JX1x.length = 0;
            io.Transport.websocket.prototype.close.call(this);
            return this
        };
        Flashsocket.prototype.ready = function(socket, fn) {
            function init() {
                var options = socket.options,
                    port = options["flash policy port"],
                    path = ["http" + (options.secure ? "s" : "") + ":/", options.host + ":" + options.port, options.resource, "static/flashsocket", "WebSocketMain" + (socket.isXDomain() ? "Insecure" : "") + ".swf"];
                if (!Flashsocket.loaded) {
                    if (typeof WEB_SOCKET_SWF_LOCATION === "undefined") {
                        WEB_SOCKET_SWF_LOCATION = path.join("/")
                    }
                    if (port !== 843) {
                        WebSocket.loadFlashPolicyFile("xmlsocket://" + options.host + ":" + port)
                    }
                    WebSocket.bbD7w();
                    Flashsocket.loaded = true
                }
                fn.call(self)
            }
            var self = this;
            if (document.body) return init();
            io.util.load(init)
        };
        Flashsocket.check = function() {
            if (typeof WebSocket == "undefined" || !("__initialize" in WebSocket) || !swfobject) return false;
            return swfobject.getFlashPlayerVersion().major >= 10
        };
        Flashsocket.xdomainCheck = function() {
            return true
        };
        if (typeof window != "undefined") {
            WEB_SOCKET_DISABLE_AUTO_INITIALIZATION = true
        }
        io.transports.push("flashsocket")
    })("undefined" != typeof io ? io.Transport : module.exports, "undefined" != typeof io ? io : module.parent.exports);
    if ("undefined" != typeof window) {
        var swfobject = function() {
            var D = "undefined",
                r = "object",
                S = "Shockwave Flash",
                W = "ShockwaveFlash.ShockwaveFlash",
                q = "application/x-shockwave-flash",
                R = "SWFObjectExprInst",
                x = "onreadystatechange",
                O = window,
                j = document,
                t = navigator,
                T = false,
                U = [h],
                o = [],
                N = [],
                I = [],
                l, Q, E, B, J = false,
                a = false,
                n, G, m = true,
                M = function() {
                    var aa = typeof j.getElementById != D && typeof j.getElementsByTagName != D && typeof j.createElement != D,
                        ah = t.userAgent.toLowerCase(),
                        Y = t.platform.toLowerCase(),
                        ae = Y ? /win/.test(Y) : /win/.test(ah),
                        ac = Y ? /mac/.test(Y) : /mac/.test(ah),
                        af = /webkit/.test(ah) ? parseFloat(ah.replace(/^.*webkit\/(\d+(\.\d+)?).*$/, "$1")) : false,
                        X = !+"1",
                        ag = [0, 0, 0],
                        ab = null;
                    if (typeof t.plugins != D && typeof t.plugins[S] == r) {
                        ab = t.plugins[S].description;
                        if (ab && !(typeof t.mimeTypes != D && t.mimeTypes[q] && !t.mimeTypes[q].enabledPlugin)) {
                            T = true;
                            X = false;
                            ab = ab.replace(/^.*\s+(\S+\s+\S+$)/, "$1");
                            ag[0] = parseInt(ab.replace(/^(.*)\..*$/, "$1"), 10);
                            ag[1] = parseInt(ab.replace(/^.*\.(.*)\s.*$/, "$1"), 10);
                            ag[2] = /[a-zA-Z]/.test(ab) ? parseInt(ab.replace(/^.*[a-zA-Z]+(.*)$/, "$1"), 10) : 0
                        }
                    } else {
                        if (typeof O[["Active"].concat("Object").join("X")] != D) {
                            try {
                                var ad = new(window[["Active"].concat("Object").join("X")])(W);
                                if (ad) {
                                    ab = ad.GetVariable("$version");
                                    if (ab) {
                                        X = true;
                                        ab = ab.split(" ")[1].split(",");
                                        ag = [parseInt(ab[0], 10), parseInt(ab[1], 10), parseInt(ab[2], 10)]
                                    }
                                }
                            } catch (Z) {}
                        }
                    }
                    return {
                        w3: aa,
                        pv: ag,
                        wk: af,
                        ie: X,
                        win: ae,
                        mac: ac
                    }
                }(),
                k = function() {
                    if (!M.w3) {
                        return
                    }
                    if (typeof j.readyState != D && j.readyState == "complete" || typeof j.readyState == D && (j.getElementsByTagName("body")[0] || j.body)) {
                        f()
                    }
                    if (!J) {
                        if (typeof j.addEventListener != D) {
                            j.addEventListener("DOMContentLoaded", f, false)
                        }
                        if (M.ie && M.win) {
                            j.attachEvent(x, function() {
                                if (j.readyState == "complete") {
                                    j.detachEvent(x, arguments.callee);
                                    f()
                                }
                            });
                            if (O == top) {
                                (function() {
                                    if (J) {
                                        return
                                    }
                                    try {
                                        j.documentElement.doScroll("left")
                                    } catch (X) {
                                        setTimeout(arguments.callee, 0);
                                        return
                                    }
                                    f()
                                })()
                            }
                        }
                        if (M.wk) {
                            (function() {
                                if (J) {
                                    return
                                }
                                if (!/loaded|complete/.test(j.readyState)) {
                                    setTimeout(arguments.callee, 0);
                                    return
                                }
                                f()
                            })()
                        }
                        s(f)
                    }
                }();

            function f() {
                if (J) {
                    return
                }
                try {
                    var Z = j.getElementsByTagName("body")[0].appendChild(C("span"));
                    Z.parentNode.removeChild(Z)
                } catch (aa) {
                    return
                }
                J = true;
                var X = U.length;
                for (var Y = 0; Y < X; Y++) {
                    U[Y]()
                }
            }
            function K(X) {
                if (J) {
                    X()
                } else {
                    U[U.length] = X
                }
            }
            function s(Y) {
                if (typeof O.addEventListener != D) {
                    O.addEventListener("load", Y, false)
                } else {
                    if (typeof j.addEventListener != D) {
                        j.addEventListener("load", Y, false)
                    } else {
                        if (typeof O.attachEvent != D) {
                            i(O, "onload", Y)
                        } else {
                            if (typeof O.onload == "function") {
                                var X = O.onload;
                                O.onload = function() {
                                    X();
                                    Y()
                                }
                            } else {
                                O.onload = Y
                            }
                        }
                    }
                }
            }
            function h() {
                if (T) {
                    V()
                } else {
                    H()
                }
            }
            function V() {
                var X = j.getElementsByTagName("body")[0];
                var aa = C(r);
                aa.setAttribute("type", q);
                aa.style.visibility = "hidden";
                var Z = X.appendChild(aa);
                if (Z) {
                    var Y = 0;
                    (function() {
                        if (typeof Z.GetVariable != D) {
                            var ab = Z.GetVariable("$version");
                            if (ab) {
                                ab = ab.split(" ")[1].split(",");
                                M.pv = [parseInt(ab[0], 10), parseInt(ab[1], 10), parseInt(ab[2], 10)]
                            }
                        } else {
                            if (Y < 10) {
                                Y++;
                                setTimeout(arguments.callee, 10);
                                return
                            }
                        }
                        X.removeChild(aa);
                        Z = null;
                        H()
                    })()
                } else {
                    H()
                }
            }
            function H() {
                var ag = o.length;
                if (ag > 0) {
                    for (var af = 0; af < ag; af++) {
                        var Y = o[af].id;
                        var ab = o[af].callbackFn;
                        var aa = {
                            success: false,
                            id: Y
                        };
                        if (M.pv[0] > 0) {
                            var ae = c(Y);
                            if (ae) {
                                if (F(o[af].swfVersion) && !(M.wk && M.wk < 312)) {
                                    w(Y, true);
                                    if (ab) {
                                        aa.success = true;
                                        aa.ref = z(Y);
                                        ab(aa)
                                    }
                                } else {
                                    if (o[af].expressInstall && A()) {
                                        var ai = {};
                                        ai.data = o[af].expressInstall;
                                        ai.width = ae.getAttribute("width") || "0";
                                        ai.height = ae.getAttribute("height") || "0";
                                        if (ae.getAttribute("class")) {
                                            ai.styleclass = ae.getAttribute("class")
                                        }
                                        if (ae.getAttribute("align")) {
                                            ai.align = ae.getAttribute("align")
                                        }
                                        var ah = {};
                                        var X = ae.getElementsByTagName("param");
                                        var ac = X.length;
                                        for (var ad = 0; ad < ac; ad++) {
                                            if (X[ad].getAttribute("name").toLowerCase() != "movie") {
                                                ah[X[ad].getAttribute("name")] = X[ad].getAttribute("value")
                                            }
                                        }
                                        P(ai, ah, Y, ab)
                                    } else {
                                        p(ae);
                                        if (ab) {
                                            ab(aa)
                                        }
                                    }
                                }
                            }
                        } else {
                            w(Y, true);
                            if (ab) {
                                var Z = z(Y);
                                if (Z && typeof Z.SetVariable != D) {
                                    aa.success = true;
                                    aa.ref = Z
                                }
                                ab(aa)
                            }
                        }
                    }
                }
            }
            function z(aa) {
                var X = null;
                var Y = c(aa);
                if (Y && Y.nodeName == "OBJECT") {
                    if (typeof Y.SetVariable != D) {
                        X = Y
                    } else {
                        var Z = Y.getElementsByTagName(r)[0];
                        if (Z) {
                            X = Z
                        }
                    }
                }
                return X
            }
            function A() {
                return !a && F("6.0.65") && (M.win || M.mac) && !(M.wk && M.wk < 312)
            }
            function P(aa, ab, X, Z) {
                a = true;
                E = Z || null;
                B = {
                    success: false,
                    id: X
                };
                var ae = c(X);
                if (ae) {
                    if (ae.nodeName == "OBJECT") {
                        l = g(ae);
                        Q = null
                    } else {
                        l = ae;
                        Q = X
                    }
                    aa.id = R;
                    if (typeof aa.width == D || !/%$/.test(aa.width) && parseInt(aa.width, 10) < 310) {
                        aa.width = "310"
                    }
                    if (typeof aa.height == D || !/%$/.test(aa.height) && parseInt(aa.height, 10) < 137) {
                        aa.height = "137"
                    }
                    j.title = j.title.slice(0, 47) + " - Flash Player Installation";
                    var ad = M.ie && M.win ? ["Active"].concat("").join("X") : "PlugIn",
                        ac = "MMredirectURL=" + O.location.toString().replace(/&/g, "%26") + "&MMplayerType=" + ad + "&MMdoctitle=" + j.title;
                    if (typeof ab.flashvars != D) {
                        ab.flashvars += "&" + ac
                    } else {
                        ab.flashvars = ac
                    }
                    if (M.ie && M.win && ae.readyState != 4) {
                        var Y = C("div");
                        X += "SWFObjectNew";
                        Y.setAttribute("id", X);
                        ae.parentNode.insertBefore(Y, ae);
                        ae.style.display = "none";
                        (function() {
                            if (ae.readyState == 4) {
                                ae.parentNode.removeChild(ae)
                            } else {
                                setTimeout(arguments.callee, 10)
                            }
                        })()
                    }
                    u(aa, ab, X)
                }
            }
            function p(Y) {
                if (M.ie && M.win && Y.readyState != 4) {
                    var X = C("div");
                    Y.parentNode.insertBefore(X, Y);
                    X.parentNode.replaceChild(g(Y), X);
                    Y.style.display = "none";
                    (function() {
                        if (Y.readyState == 4) {
                            Y.parentNode.removeChild(Y)
                        } else {
                            setTimeout(arguments.callee, 10)
                        }
                    })()
                } else {
                    Y.parentNode.replaceChild(g(Y), Y)
                }
            }
            function g(ab) {
                var aa = C("div");
                if (M.win && M.ie) {
                    aa.innerHTML = ab.innerHTML
                } else {
                    var Y = ab.getElementsByTagName(r)[0];
                    if (Y) {
                        var ad = Y.childNodes;
                        if (ad) {
                            var X = ad.length;
                            for (var Z = 0; Z < X; Z++) {
                                if (!(ad[Z].nodeType == 1 && ad[Z].nodeName == "PARAM") && !(ad[Z].nodeType == 8)) {
                                    aa.appendChild(ad[Z].cloneNode(true))
                                }
                            }
                        }
                    }
                }
                return aa
            }
            function u(ai, ag, Y) {
                var X, aa = c(Y);
                if (M.wk && M.wk < 312) {
                    return X
                }
                if (aa) {
                    if (typeof ai.id == D) {
                        ai.id = Y
                    }
                    if (M.ie && M.win) {
                        var ah = "";
                        for (var ae in ai) {
                            if (ai[ae] != Object.prototype[ae]) {
                                if (ae.toLowerCase() == "data") {
                                    ag.movie = ai[ae]
                                } else {
                                    if (ae.toLowerCase() == "styleclass") {
                                        ah += ' class="' + ai[ae] + '"'
                                    } else {
                                        if (ae.toLowerCase() != "classid") {
                                            ah += " " + ae + '="' + ai[ae] + '"'
                                        }
                                    }
                                }
                            }
                        }
                        var af = "";
                        for (var ad in ag) {
                            if (ag[ad] != Object.prototype[ad]) {
                                af += '<param name="' + ad + '" value="' + ag[ad] + '" />'
                            }
                        }
                        aa.outerHTML = '<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"' + ah + ">" + af + "</object>";
                        N[N.length] = ai.id;
                        X = c(ai.id)
                    } else {
                        var Z = C(r);
                        Z.setAttribute("type", q);
                        for (var ac in ai) {
                            if (ai[ac] != Object.prototype[ac]) {
                                if (ac.toLowerCase() == "styleclass") {
                                    Z.setAttribute("class", ai[ac])
                                } else {
                                    if (ac.toLowerCase() != "classid") {
                                        Z.setAttribute(ac, ai[ac])
                                    }
                                }
                            }
                        }
                        for (var ab in ag) {
                            if (ag[ab] != Object.prototype[ab] && ab.toLowerCase() != "movie") {
                                e(Z, ab, ag[ab])
                            }
                        }
                        aa.parentNode.replaceChild(Z, aa);
                        X = Z
                    }
                }
                return X
            }
            function e(Z, X, Y) {
                var aa = C("param");
                aa.setAttribute("name", X);
                aa.setAttribute("value", Y);
                Z.appendChild(aa)
            }
            function y(Y) {
                var X = c(Y);
                if (X && X.nodeName == "OBJECT") {
                    if (M.ie && M.win) {
                        X.style.display = "none";
                        (function() {
                            if (X.readyState == 4) {
                                b(Y)
                            } else {
                                setTimeout(arguments.callee, 10)
                            }
                        })()
                    } else {
                        X.parentNode.removeChild(X)
                    }
                }
            }
            function b(Z) {
                var Y = c(Z);
                if (Y) {
                    for (var X in Y) {
                        if (typeof Y[X] == "function") {
                            Y[X] = null
                        }
                    }
                    Y.parentNode.removeChild(Y)
                }
            }
            function c(Z) {
                var X = null;
                try {
                    X = j.getElementById(Z)
                } catch (Y) {}
                return X
            }
            function C(X) {
                return j.createElement(X)
            }
            function i(Z, X, Y) {
                Z.attachEvent(X, Y);
                I[I.length] = [Z, X, Y]
            }
            function F(Z) {
                var Y = M.pv,
                    X = Z.split(".");
                X[0] = parseInt(X[0], 10);
                X[1] = parseInt(X[1], 10) || 0;
                X[2] = parseInt(X[2], 10) || 0;
                return Y[0] > X[0] || Y[0] == X[0] && Y[1] > X[1] || Y[0] == X[0] && Y[1] == X[1] && Y[2] >= X[2] ? true : false
            }
            function v(ac, Y, ad, ab) {
                if (M.ie && M.mac) {
                    return
                }
                var aa = j.getElementsByTagName("head")[0];
                if (!aa) {
                    return
                }
                var X = ad && typeof ad == "string" ? ad : "screen";
                if (ab) {
                    n = null;
                    G = null
                }
                if (!n || G != X) {
                    var Z = C("style");
                    Z.setAttribute("type", "text/css");
                    Z.setAttribute("media", X);
                    n = aa.appendChild(Z);
                    if (M.ie && M.win && typeof j.styleSheets != D && j.styleSheets.length > 0) {
                        n = j.styleSheets[j.styleSheets.length - 1]
                    }
                    G = X
                }
                if (M.ie && M.win) {
                    if (n && typeof n.addRule == r) {
                        n.addRule(ac, Y)
                    }
                } else {
                    if (n && typeof j.createTextNode != D) {
                        n.appendChild(j.createTextNode(ac + " {" + Y + "}"))
                    }
                }
            }
            function w(Z, X) {
                if (!m) {
                    return
                }
                var Y = X ? "visible" : "hidden";
                if (J && c(Z)) {
                    c(Z).style.visibility = Y
                } else {
                    v("#" + Z, "visibility:" + Y)
                }
            }
            function L(Y) {
                var Z = /[\\\"<>\.;]/;
                var X = Z.exec(Y) != null;
                return X && typeof encodeURIComponent != D ? encodeURIComponent(Y) : Y
            }
            var d = function() {
                if (M.ie && M.win) {
                    window.attachEvent("onunload", function() {
                        var ac = I.length;
                        for (var ab = 0; ab < ac; ab++) {
                            I[ab][0].detachEvent(I[ab][1], I[ab][2])
                        }
                        var Z = N.length;
                        for (var aa = 0; aa < Z; aa++) {
                            y(N[aa])
                        }
                        for (var Y in M) {
                            M[Y] = null
                        }
                        M = null;
                        for (var X in swfobject) {
                            swfobject[X] = null
                        }
                        swfobject = null
                    })
                }
            }();
            return {
                registerObject: function(ab, X, aa, Z) {
                    if (M.w3 && ab && X) {
                        var Y = {};
                        Y.id = ab;
                        Y.swfVersion = X;
                        Y.expressInstall = aa;
                        Y.callbackFn = Z;
                        o[o.length] = Y;
                        w(ab, false)
                    } else {
                        if (Z) {
                            Z({
                                success: false,
                                id: ab
                            })
                        }
                    }
                },
                getObjectById: function(X) {
                    if (M.w3) {
                        return z(X)
                    }
                },
                embedSWF: function(ab, ah, ae, ag, Y, aa, Z, ad, af, ac) {
                    var X = {
                        success: false,
                        id: ah
                    };
                    if (M.w3 && !(M.wk && M.wk < 312) && ab && ah && ae && ag && Y) {
                        w(ah, false);
                        K(function() {
                            ae += "";
                            ag += "";
                            var aj = {};
                            if (af && typeof af === r) {
                                for (var al in af) {
                                    aj[al] = af[al]
                                }
                            }
                            aj.data = ab;
                            aj.width = ae;
                            aj.height = ag;
                            var am = {};
                            if (ad && typeof ad === r) {
                                for (var ak in ad) {
                                    am[ak] = ad[ak]
                                }
                            }
                            if (Z && typeof Z === r) {
                                for (var ai in Z) {
                                    if (typeof am.flashvars != D) {
                                        am.flashvars += "&" + ai + "=" + Z[ai]
                                    } else {
                                        am.flashvars = ai + "=" + Z[ai]
                                    }
                                }
                            }
                            if (F(Y)) {
                                var an = u(aj, am, ah);
                                if (aj.id == ah) {
                                    w(ah, true)
                                }
                                X.success = true;
                                X.ref = an
                            } else {
                                if (aa && A()) {
                                    aj.data = aa;
                                    P(aj, am, ah, ac);
                                    return
                                } else {
                                    w(ah, true)
                                }
                            }
                            if (ac) {
                                ac(X)
                            }
                        })
                    } else {
                        if (ac) {
                            ac(X)
                        }
                    }
                },
                switchOffAutoHideShow: function() {
                    m = false
                },
                ua: M,
                getFlashPlayerVersion: function() {
                    return {
                        major: M.pv[0],
                        minor: M.pv[1],
                        release: M.pv[2]
                    }
                },
                hasFlashPlayerVersion: F,
                createSWF: function(Z, Y, X) {
                    if (M.w3) {
                        return u(Z, Y, X)
                    } else {
                        return undefined
                    }
                },
                showExpressInstall: function(Z, aa, X, Y) {
                    if (M.w3 && A()) {
                        P(Z, aa, X, Y)
                    }
                },
                removeSWF: function(X) {
                    if (M.w3) {
                        y(X)
                    }
                },
                createCSS: function(aa, Z, Y, X) {
                    if (M.w3) {
                        v(aa, Z, Y, X)
                    }
                },
                addDomLoadEvent: K,
                addLoadEvent: s,
                getQueryParamValue: function(aa) {
                    var Z = j.location.search || j.location.hash;
                    if (Z) {
                        if (/\?/.test(Z)) {
                            Z = Z.split("?")[1]
                        }
                        if (aa == null) {
                            return L(Z)
                        }
                        var Y = Z.split("&");
                        for (var X = 0; X < Y.length; X++) {
                            if (Y[X].substring(0, Y[X].indexOf("=")) == aa) {
                                return L(Y[X].substring(Y[X].indexOf("=") + 1))
                            }
                        }
                    }
                    return ""
                },
                expressInstallCallback: function() {
                    if (a) {
                        var X = c(R);
                        if (X && l) {
                            X.parentNode.replaceChild(l, X);
                            if (Q) {
                                w(Q, true);
                                if (M.ie && M.win) {
                                    l.style.display = "block"
                                }
                            }
                            if (E) {
                                E(B)
                            }
                        }
                        a = false
                    }
                }
            }
        }()
    }(function() {
        if ("undefined" == typeof window || window.WebSocket) return;
        var console = window.console;
        if (!console || !console.log || !console.error) {
            console = {
                log: function() {},
                error: function() {}
            }
        }
        if (!swfobject.hasFlashPlayerVersion("10.0.0")) {
            console.error("Flash Player >= 10.0.0 is required.");
            return
        }
        if (location.protocol == "file:") {
            console.error("WARNING: web-socket-js doesn't work in file:///... URL " + "unless you set Flash Security Settings properly. " + "Open the page via Web server i.e. http://...")
        }
        WebSocket = function(url, protocols, proxyHost, proxyPort, headers) {
            var self = this;
            self.gp2x = WebSocket.cki9Z++;
            WebSocket.bCc2x[self.gp2x] = self;
            self.readyState = WebSocket.CONNECTING;
            self.bufferedAmount = 0;
            self.kV4Z = {};
            if (!protocols) {
                protocols = []
            } else if (typeof protocols == "string") {
                protocols = [protocols]
            }
            setTimeout(function() {
                WebSocket.Uz4D(function() {
                    WebSocket.nV5a.create(self.gp2x, url, protocols, proxyHost || null, proxyPort || 0, headers || null)
                })
            }, 0)
        };
        WebSocket.prototype.send = function(data) {
            if (this.readyState == WebSocket.CONNECTING) {
                throw "INVALID_STATE_ERR: Web Socket connection has not been established"
            }
            var result = WebSocket.nV5a.send(this.gp2x, encodeURIComponent(data));
            if (result < 0) {
                return true
            } else {
                this.bufferedAmount += result;
                return false
            }
        };
        WebSocket.prototype.close = function() {
            if (this.readyState == WebSocket.CLOSED || this.readyState == WebSocket.CLOSING) {
                return
            }
            this.readyState = WebSocket.CLOSING;
            WebSocket.nV5a.close(this.gp2x)
        };
        WebSocket.prototype.addEventListener = function(type, listener, useCapture) {
            if (!(type in this.kV4Z)) {
                this.kV4Z[type] = []
            }
            this.kV4Z[type].push(listener)
        };
        WebSocket.prototype.removeEventListener = function(type, listener, useCapture) {
            if (!(type in this.kV4Z)) return;
            var events = this.kV4Z[type];
            for (var i = events.length - 1; i >= 0; --i) {
                if (events[i] === listener) {
                    events.splice(i, 1);
                    break
                }
            }
        };
        WebSocket.prototype.dispatchEvent = function(event) {
            var events = this.kV4Z[event.type] || [];
            for (var i = 0; i < events.length; ++i) {
                events[i](event)
            }
            var handler = this["on" + event.type];
            if (handler) handler(event)
        };
        WebSocket.prototype.ckf9W = function(flashEvent) {
            if ("readyState" in flashEvent) {
                this.readyState = flashEvent.readyState
            }
            if ("protocol" in flashEvent) {
                this.protocol = flashEvent.protocol
            }
            var jsEvent;
            if (flashEvent.type == "open" || flashEvent.type == "error") {
                jsEvent = this.bCh2x(flashEvent.type)
            } else if (flashEvent.type == "close") {
                jsEvent = this.bCh2x("close")
            } else if (flashEvent.type == "message") {
                var data = decodeURIComponent(flashEvent.message);
                jsEvent = this.cke9V("message", data)
            } else {
                throw "unknown event type: " + flashEvent.type
            }
            this.dispatchEvent(jsEvent)
        };
        WebSocket.prototype.bCh2x = function(type) {
            if (document.createEvent && window.Event) {
                var event = document.createEvent("Event");
                event.initEvent(type, false, false);
                return event
            } else {
                return {
                    type: type,
                    bubbles: false,
                    cancelable: false
                }
            }
        };
        WebSocket.prototype.cke9V = function(type, data) {
            if (document.createEvent && window.MessageEvent && !window.opera) {
                var event = document.createEvent("MessageEvent");
                event.initMessageEvent("message", false, false, data, null, null, window, null);
                return event
            } else {
                return {
                    type: type,
                    data: data,
                    bubbles: false,
                    cancelable: false
                }
            }
        };
        WebSocket.CONNECTING = 0;
        WebSocket.OPEN = 1;
        WebSocket.CLOSING = 2;
        WebSocket.CLOSED = 3;
        WebSocket.nV5a = null;
        WebSocket.bCc2x = {};
        WebSocket.JX1x = [];
        WebSocket.cki9Z = 0;
        WebSocket.loadFlashPolicyFile = function(url) {
            WebSocket.Uz4D(function() {
                WebSocket.nV5a.loadManualPolicyFile(url)
            })
        };
        WebSocket.bbD7w = function() {
            if (WebSocket.nV5a) return;
            if (WebSocket.ckd9U) {
                window.WEB_SOCKET_SWF_LOCATION = WebSocket.ckd9U
            }
            if (!window.WEB_SOCKET_SWF_LOCATION) {
                console.error("[WebSocket] set WEB_SOCKET_SWF_LOCATION to location of WebSocketMain.swf");
                return
            }
            var container = document.createElement("div");
            container.id = "webSocketContainer";
            container.style.position = "absolute";
            if (WebSocket.ckc9T()) {
                container.style.left = "0px";
                container.style.top = "0px"
            } else {
                container.style.left = "-100px";
                container.style.top = "-100px"
            }
            var holder = document.createElement("div");
            holder.id = "webSocketFlash";
            container.appendChild(holder);
            document.body.appendChild(container);
            swfobject.embedSWF(WEB_SOCKET_SWF_LOCATION, "webSocketFlash", "1", "1", "10.0.0", null, null, {
                hasPriority: true,
                swliveconnect: true,
                allowScriptAccess: "always"
            }, null, function(e) {
                if (!e.success) {
                    console.error("[WebSocket] swfobject.embedSWF failed")
                }
            })
        };
        WebSocket.csb1x = function() {
            setTimeout(function() {
                WebSocket.nV5a = document.getElementById("webSocketFlash");
                WebSocket.nV5a.setCallerUrl(location.href);
                WebSocket.nV5a.setDebug( !! window.WEB_SOCKET_DEBUG);
                for (var i = 0; i < WebSocket.JX1x.length; ++i) {
                    WebSocket.JX1x[i]()
                }
                WebSocket.JX1x = []
            }, 0)
        };
        WebSocket.csc1x = function() {
            setTimeout(function() {
                try {
                    var events = WebSocket.nV5a.receiveEvents();
                    for (var i = 0; i < events.length; ++i) {
                        WebSocket.bCc2x[events[i].webSocketId].ckf9W(events[i])
                    }
                } catch (e) {
                    console.error(e)
                }
            }, 0);
            return true
        };
        WebSocket.csd1x = function(message) {
            console.log(decodeURIComponent(message))
        };
        WebSocket.dv1x = function(message) {
            console.error(decodeURIComponent(message))
        };
        WebSocket.Uz4D = function(task) {
            if (WebSocket.nV5a) {
                task()
            } else {
                WebSocket.JX1x.push(task)
            }
        };
        WebSocket.ckc9T = function() {
            if (!window.navigator || !window.navigator.mimeTypes) {
                return false
            }
            var mimeType = window.navigator.mimeTypes["application/x-shockwave-flash"];
            if (!mimeType || !mimeType.enabledPlugin || !mimeType.enabledPlugin.filename) {
                return false
            }
            return mimeType.enabledPlugin.filename.match(/flashlite/i) ? true : false
        };
        if (!window.WEB_SOCKET_DISABLE_AUTO_INITIALIZATION) {
            if (window.addEventListener) {
                window.addEventListener("load", function() {
                    WebSocket.bbD7w()
                }, false)
            } else {
                window.attachEvent("onload", function() {
                    WebSocket.bbD7w()
                })
            }
        }
    })();
    (function(exports, io, global) {
        exports.XHR = XHR;

        function XHR(socket) {
            if (!socket) return;
            io.Transport.apply(this, arguments);
            this.sendBuffer = []
        }
        io.util.inherit(XHR, io.Transport);
        XHR.prototype.open = function() {
            this.socket.setBuffer(false);
            this.onOpen();
            this.get();
            this.setCloseTimeout();
            return this
        };
        XHR.prototype.payload = function(payload) {
            var msgs = [];
            for (var i = 0, l = payload.length; i < l; i++) {
                msgs.push(io.parser.encodePacket(payload[i]))
            }
            this.send(io.parser.encodePayload(msgs))
        };
        XHR.prototype.send = function(data) {
            this.post(data);
            return this
        };

        function empty() {}
        XHR.prototype.post = function(data) {
            var self = this;
            this.socket.setBuffer(true);

            function stateChange() {
                if (this.readyState == 4) {
                    this.onreadystatechange = empty;
                    self.posting = false;
                    if (this.status == 200) {
                        self.socket.setBuffer(false)
                    } else {
                        self.onClose()
                    }
                }
            }
            function onload() {
                this.onload = empty;
                self.socket.setBuffer(false)
            }
            this.sendXHR = this.request("POST");
            if (global.XDomainRequest && this.sendXHR instanceof XDomainRequest) {
                this.sendXHR.onload = this.sendXHR.onerror = onload
            } else {
                this.sendXHR.onreadystatechange = stateChange
            }
            this.sendXHR.send(data)
        };
        XHR.prototype.close = function() {
            this.onClose();
            return this
        };
        XHR.prototype.request = function(method) {
            var req = io.util.request(this.socket.isXDomain()),
                query = io.util.query(this.socket.options.query, "t=" + +(new Date));
            req.open(method || "GET", this.prepareUrl() + query, true);
            if (method == "POST") {
                try {
                    if (req.setRequestHeader) {
                        req.setRequestHeader("Content-type", "text/plain;charset=UTF-8")
                    } else {
                        req.contentType = "text/plain"
                    }
                } catch (e) {}
            }
            return req
        };
        XHR.prototype.scheme = function() {
            return this.socket.options.secure ? "https" : "http"
        };
        XHR.check = function(socket, xdomain) {
            try {
                var request = io.util.request(xdomain),
                    usesXDomReq = global.XDomainRequest && request instanceof XDomainRequest,
                    socketProtocol = socket && socket.options && socket.options.secure ? "https:" : "http:",
                    isXProtocol = global.location && socketProtocol != global.location.protocol;
                if (request && !(usesXDomReq && isXProtocol)) {
                    return true
                }
            } catch (e) {}
            return false
        };
        XHR.xdomainCheck = function(socket) {
            return XHR.check(socket, true)
        }
    })("undefined" != typeof io ? io.Transport : module.exports, "undefined" != typeof io ? io : module.parent.exports, this);
    (function(exports, io) {
        exports.htmlfile = HTMLFile;

        function HTMLFile(socket) {
            io.Transport.XHR.apply(this, arguments)
        }
        io.util.inherit(HTMLFile, io.Transport.XHR);
        HTMLFile.prototype.name = "htmlfile";
        HTMLFile.prototype.get = function() {
            this.doc = new(window[["Active"].concat("Object").join("X")])("htmlfile");
            this.doc.open();
            this.doc.write("<html></html>");
            this.doc.close();
            this.doc.parentWindow.s = this;
            var iframeC = this.doc.createElement("div");
            iframeC.className = "socketio";
            this.doc.body.appendChild(iframeC);
            this.iframe = this.doc.createElement("iframe");
            iframeC.appendChild(this.iframe);
            var self = this,
                query = io.util.query(this.socket.options.query, "t=" + +(new Date));
            this.iframe.src = this.prepareUrl() + query;
            io.util.on(window, "unload", function() {
                self.destroy()
            })
        };
        HTMLFile.prototype.c0x = function(data, doc) {
            data = data.replace(/\\\//g, "/");
            this.onData(data);
            try {
                var script = doc.getElementsByTagName("script")[0];
                script.parentNode.removeChild(script)
            } catch (e) {}
        };
        HTMLFile.prototype.destroy = function() {
            if (this.iframe) {
                try {
                    this.iframe.src = "about:blank"
                } catch (e) {}
                this.doc = null;
                this.iframe.parentNode.removeChild(this.iframe);
                this.iframe = null;
                CollectGarbage()
            }
        };
        HTMLFile.prototype.close = function() {
            this.destroy();
            return io.Transport.XHR.prototype.close.call(this)
        };
        HTMLFile.check = function(socket) {
            if (typeof window != "undefined" && ["Active"].concat("Object").join("X") in window) {
                try {
                    var a = new(window[["Active"].concat("Object").join("X")])("htmlfile");
                    return a && io.Transport.XHR.check(socket)
                } catch (e) {}
            }
            return false
        };
        HTMLFile.xdomainCheck = function() {
            return false
        };
        io.transports.push("htmlfile")
    })("undefined" != typeof io ? io.Transport : module.exports, "undefined" != typeof io ? io : module.parent.exports);
    (function(exports, io, global) {
        exports["xhr-polling"] = XHRPolling;

        function XHRPolling() {
            io.Transport.XHR.apply(this, arguments)
        }
        io.util.inherit(XHRPolling, io.Transport.XHR);
        io.util.merge(XHRPolling, io.Transport.XHR);
        XHRPolling.prototype.name = "xhr-polling";
        XHRPolling.prototype.heartbeats = function() {
            return false
        };
        XHRPolling.prototype.open = function() {
            var self = this;
            io.Transport.XHR.prototype.open.call(self);
            return false
        };

        function empty() {}
        XHRPolling.prototype.get = function() {
            if (!this.isOpen) return;
            var self = this;

            function stateChange() {
                if (this.readyState == 4) {
                    this.onreadystatechange = empty;
                    if (this.status == 200) {
                        self.onData(this.responseText);
                        self.get()
                    } else {
                        self.onClose()
                    }
                }
            }
            function onload() {
                this.onload = empty;
                this.onerror = empty;
                self.retryCounter = 1;
                self.onData(this.responseText);
                self.get()
            }
            function onerror() {
                self.retryCounter++;
                if (!self.retryCounter || self.retryCounter > 3) {
                    self.onClose()
                } else {
                    self.get()
                }
            }
            this.xhr = this.request();
            if (global.XDomainRequest && this.xhr instanceof XDomainRequest) {
                this.xhr.onload = onload;
                this.xhr.onerror = onerror
            } else {
                this.xhr.onreadystatechange = stateChange
            }
            this.xhr.send(null)
        };
        XHRPolling.prototype.onClose = function() {
            io.Transport.XHR.prototype.onClose.call(this);
            if (this.xhr) {
                this.xhr.onreadystatechange = this.xhr.onload = this.xhr.onerror = empty;
                try {
                    this.xhr.abort()
                } catch (e) {}
                this.xhr = null
            }
        };
        XHRPolling.prototype.ready = function(socket, fn) {
            var self = this;
            io.util.defer(function() {
                fn.call(self)
            })
        };
        io.transports.push("xhr-polling")
    })("undefined" != typeof io ? io.Transport : module.exports, "undefined" != typeof io ? io : module.parent.exports, this);
    (function(exports, io, global) {
        var indicator = global.document && "MozAppearance" in global.document.documentElement.style;
        exports["jsonp-polling"] = JSONPPolling;

        function JSONPPolling(socket) {
            io.Transport["xhr-polling"].apply(this, arguments);
            this.index = io.j.length;
            var self = this;
            io.j.push(function(msg) {
                self.c0x(msg)
            })
        }
        io.util.inherit(JSONPPolling, io.Transport["xhr-polling"]);
        JSONPPolling.prototype.name = "jsonp-polling";
        JSONPPolling.prototype.post = function(data) {
            var self = this,
                query = io.util.query(this.socket.options.query, "t=" + +(new Date) + "&i=" + this.index);
            if (!this.form) {
                var form = document.createElement("form"),
                    area = document.createElement("textarea"),
                    id = this.iframeId = "socketio_iframe_" + this.index,
                    iframe;
                form.className = "socketio";
                form.style.position = "absolute";
                form.style.top = "0px";
                form.style.left = "0px";
                form.style.display = "none";
                form.target = id;
                form.method = "POST";
                form.setAttribute("accept-charset", "utf-8");
                area.name = "d";
                form.appendChild(area);
                document.body.appendChild(form);
                this.form = form;
                this.area = area
            }
            this.form.action = this.prepareUrl() + query;

            function complete() {
                initIframe();
                self.socket.setBuffer(false)
            }
            function initIframe() {
                if (self.iframe) {
                    self.form.removeChild(self.iframe)
                }
                try {
                    iframe = document.createElement('<iframe name="' + self.iframeId + '">')
                } catch (e) {
                    iframe = document.createElement("iframe");
                    iframe.name = self.iframeId
                }
                iframe.id = self.iframeId;
                self.form.appendChild(iframe);
                self.iframe = iframe
            }
            initIframe();
            this.area.value = io.JSON.stringify(data);
            try {
                this.form.submit()
            } catch (e) {}
            if (this.iframe.attachEvent) {
                iframe.onreadystatechange = function() {
                    if (self.iframe.readyState == "complete") {
                        complete()
                    }
                }
            } else {
                this.iframe.onload = complete
            }
            this.socket.setBuffer(true)
        };
        JSONPPolling.prototype.get = function() {
            var self = this,
                script = document.createElement("script"),
                query = io.util.query(this.socket.options.query, "t=" + +(new Date) + "&i=" + this.index);
            if (this.script) {
                this.script.parentNode.removeChild(this.script);
                this.script = null
            }
            script.async = true;
            script.src = this.prepareUrl() + query;
            script.onerror = function() {
                self.onClose()
            };
            var insertAt = document.getElementsByTagName("script")[0];
            insertAt.parentNode.insertBefore(script, insertAt);
            this.script = script;
            if (indicator) {
                setTimeout(function() {
                    var iframe = document.createElement("iframe");
                    document.body.appendChild(iframe);
                    document.body.removeChild(iframe)
                }, 100)
            }
        };
        JSONPPolling.prototype.c0x = function(msg) {
            this.onData(msg);
            if (this.isOpen) {
                this.get()
            }
            return this
        };
        JSONPPolling.prototype.ready = function(socket, fn) {
            var self = this;
            if (!indicator) return fn.call(this);
            io.util.load(function() {
                fn.call(self)
            })
        };
        JSONPPolling.check = function() {
            return "document" in global
        };
        JSONPPolling.xdomainCheck = function() {
            return true
        };
        io.transports.push("jsonp-polling")
    })("undefined" != typeof io ? io.Transport : module.exports, "undefined" != typeof io ? io : module.parent.exports, this);
    if (typeof define === "function" && define.amd) {
        define([], function() {
            return io
        })
    }
})();
(function() {
    var isArray = Array.isArray;
    if (isArray === undefined) {
        isArray = function(arr) {
            return Object.prototype.toString.call(arr) === "[object Array]"
        }
    }
    var root = this;

    function EventEmitter() {}
    if (typeof module !== "undefined" && module.exports) {
        module.exports.EventEmitter = EventEmitter
    } else {
        root = window;
        root.EventEmitter = EventEmitter
    }
    var defaultMaxListeners = 10;
    EventEmitter.prototype.setMaxListeners = function(n) {
        if (!this.dF2x) this.dF2x = {};
        this.bCu3x = n
    };
    EventEmitter.prototype.emit = function() {
        var type = arguments[0];
        if (type === "error") {
            if (!this.dF2x || !this.dF2x.error || isArray(this.dF2x.error) && !this.dF2x.error.length) {
                if (this.domain) {
                    var er = arguments[1];
                    er.domain_emitter = this;
                    er.domain = this.domain;
                    er.domain_thrown = false;
                    this.domain.emit("error", er);
                    return false
                }
                if (arguments[1] instanceof Error) {
                    throw arguments[1]
                } else {
                    throw new Error("Uncaught, unspecified 'error' event.")
                }
                return false
            }
        }
        if (!this.dF2x) return false;
        var handler = this.dF2x[type];
        if (!handler) return false;
        if (typeof handler == "function") {
            if (this.domain) {
                this.domain.enter()
            }
            switch (arguments.length) {
                case 1:
                    handler.call(this);
                    break;
                case 2:
                    handler.call(this, arguments[1]);
                    break;
                case 3:
                    handler.call(this, arguments[1], arguments[2]);
                    break;
                default:
                    var l = arguments.length;
                    var args = new Array(l - 1);
                    for (var i = 1; i < l; i++) args[i - 1] = arguments[i];
                    handler.apply(this, args)
            }
            if (this.domain) {
                this.domain.exit()
            }
            return true
        } else if (isArray(handler)) {
            if (this.domain) {
                this.domain.enter()
            }
            var l = arguments.length;
            var args = new Array(l - 1);
            for (var i = 1; i < l; i++) args[i - 1] = arguments[i];
            var listeners = handler.slice();
            for (var i = 0, l = listeners.length; i < l; i++) {
                listeners[i].apply(this, args)
            }
            if (this.domain) {
                this.domain.exit()
            }
            return true
        } else {
            return false
        }
    };
    EventEmitter.prototype.addListener = function(type, listener) {
        if ("function" !== typeof listener) {
            throw new Error("addListener only takes instances of Function")
        }
        if (!this.dF2x) this.dF2x = {};
        this.emit("newListener", type, typeof listener.listener === "function" ? listener.listener : listener);
        if (!this.dF2x[type]) {
            this.dF2x[type] = listener
        } else if (isArray(this.dF2x[type])) {
            this.dF2x[type].push(listener)
        } else {
            this.dF2x[type] = [this.dF2x[type], listener]
        }
        if (isArray(this.dF2x[type]) && !this.dF2x[type].warned) {
            var m;
            if (this.bCu3x !== undefined) {
                m = this.bCu3x
            } else {
                m = defaultMaxListeners
            }
            if (m && m > 0 && this.dF2x[type].length > m) {
                this.dF2x[type].warned = true;
                console.error("(node) warning: possible EventEmitter memory " + "leak detected. %d listeners added. " + "Use emitter.setMaxListeners() to increase limit.", this.dF2x[type].length);
                console.trace()
            }
        }
        return this
    };
    EventEmitter.prototype.on = EventEmitter.prototype.addListener;
    EventEmitter.prototype.once = function(type, listener) {
        if ("function" !== typeof listener) {
            throw new Error(".once only takes instances of Function")
        }
        var self = this;

        function g() {
            self.removeListener(type, g);
            listener.apply(this, arguments)
        }
        g.listener = listener;
        self.on(type, g);
        return this
    };
    EventEmitter.prototype.removeListener = function(type, listener) {
        if ("function" !== typeof listener) {
            throw new Error("removeListener only takes instances of Function")
        }
        if (!this.dF2x || !this.dF2x[type]) return this;
        var list = this.dF2x[type];
        if (isArray(list)) {
            var position = -1;
            for (var i = 0, length = list.length; i < length; i++) {
                if (list[i] === listener || list[i].listener && list[i].listener === listener) {
                    position = i;
                    break
                }
            }
            if (position < 0) return this;
            list.splice(position, 1)
        } else if (list === listener || list.listener && list.listener === listener) {
            delete this.dF2x[type]
        }
        return this
    };
    EventEmitter.prototype.removeAllListeners = function(type) {
        if (arguments.length === 0) {
            this.dF2x = {};
            return this
        }
        var events = this.dF2x && this.dF2x[type];
        if (!events) return this;
        if (isArray(events)) {
            events.splice(0)
        } else {
            this.dF2x[type] = null
        }
        return this
    };
    EventEmitter.prototype.listeners = function(type) {
        if (!this.dF2x) this.dF2x = {};
        if (!this.dF2x[type]) this.dF2x[type] = [];
        if (!isArray(this.dF2x[type])) {
            this.dF2x[type] = [this.dF2x[type]]
        }
        return this.dF2x[type]
    }
})();
(function() {
    if (typeof Object.create !== "function") {
        Object.create = function(o) {
            function F() {}
            F.prototype = o;
            return new F
        }
    }
    var root = window;
    var pomelo = Object.create(EventEmitter.prototype);
    root.pomelo = pomelo;
    var socket = null;
    var id = 1;
    var callbacks = {};
    var route = "web-connector.messageHandler.";
    var isRegister = false;
    var success = 200;
    var register_ack = "register";
    var bind_ack = "bind";
    var regBind_ack = "registerAndBind";
    var cancelBind_ack = "cancelBind";
    var message_store = {};
    var heartbeat_interval = 1e3 * 60;
    var heartbeat_timer;
    var current_user;
    var current_domain;
    var cacheMessageIds = [];
    var cacheSize = 100;
    pomelo.init = function(host, port, reconnect, cb) {
        var url = "ws://" + host;
        if (port) {
            url += ":" + port
        }
        var params;
        if (reconnect) {
            params = {
                "force new connection": true,
                reconnect: true,
                "max reconnection attempts": 50
            }
        } else {
            params = {
                "force new connection": true,
                reconnect: false
            }
        }
        socket = io.connect(url, params);
        socket.on("connect", function() {
            console.log("[pomeloclient.init] websocket connected!");
            cb()
        });
        socket.on("reconnect", function() {
            pomelo.emit("reconnect")
        });
        socket.on("message", function(data) {
            message_store = {};
            if (typeof data === "string") {
                data = JSON.parse(data)
            }
            if (data instanceof Array) {
                processMessageBatch(data)
            } else {
                processMessage(data);
                emitMessage()
            }
        });
        socket.on("error", function(err) {
            cb(err)
        });
        socket.on("disconnect", function(reason) {
            isRegister = false;
            pomelo.emit("disconnect", reason)
        })
    };
    var request = function(method, opts, cb) {
        if (!method) {
            console.error("request message error with no method.");
            return
        }
        id++;
        callbacks[id] = cb;
        sendMsg(method, id, opts)
    };
    var notify = function(method, msg) {
        if (!method) {
            console.error("notify message error with no method.");
            return
        }
        sendMsg(method, 0, msg)
    };
    var sendMsg = function(method, msgId, msg) {
        var path = route + method;
        var rs = {
            id: msgId,
            route: path,
            msg: msg
        };
        var sg = JSON.stringify(rs);
        socket.send(sg)
    };
    var processMessageBatch = function(msgs) {
        for (var i = 0, l = msgs.length; i < l; i++) {
            processMessage(msgs[i])
        }
        emitMessage()
    };
    var emitMessage = function() {
        for (var key in message_store) {
            pomelo.emit(key, message_store[key])
        }
    };
    var processMessage = function(msg) {
        if (msg.id) {
            var cb = callbacks[msg.id];
            delete callbacks[msg.id];
            if (typeof cb !== "function") {
                console.log("[pomeloclient.processMessage] cb is not a function for request " + msg.id);
                return
            }
            cb(msg.body);
            if (msg.body.type === register_ack && msg.body.code == success) {
                isRegister = true
            }
            if ((msg.body.type === bind_ack || msg.body.type === regBind_ack) && msg.body.code == success) {
                heartbeat_timer = setInterval(function() {
                    notify("heartbeat", {
                        flag: "online",
                        domain: current_domain,
                        user: current_user
                    })
                }, heartbeat_interval)
            }
            if (msg.body.type === cancelBind_ack && msg.body.code == success) {
                clearInterval(heartbeat_timer)
            }
            return
        } else {
            if (!filterMessage(msg)) {
                return
            }
            if (!message_store[msg.route]) {
                if (msg.body instanceof Array) {
                    message_store[msg.route] = msg.body
                } else {
                    message_store[msg.route] = [msg.body]
                }
            } else {
                var arr = message_store[msg.route];
                if (msg.body instanceof Array) {
                    var messages = msg.body;
                    for (var i = 0; i < messages.length; i++) {
                        arr.push(messages[i])
                    }
                } else {
                    arr.push(msg.body)
                }
                message_store[msg.route] = arr
            }
        }
    };
    var filterMessage = function(message) {
        var msgs = message.body;
        var ids = [];
        var results = {};
        if (msgs instanceof Array) {
            for (var i = 0; i < msgs.length; i++) {
                var id = msgs[i].msgId;
                ids.push(id)
            }
            var duplicatedIds = checkMessage(ids);
            if (duplicatedIds.length !== 0) {
                return false
            } else {
                cacheMessageIds = cacheMessageIds.concat(ids);
                if (cacheMessageIds.length > cacheSize) {
                    var length = cacheMessageIds - cacheSize;
                    for (var i = 0; i < length; i++) {
                        cacheMessageIds.shift()
                    }
                }
            }
        }
        return true
    };
    var checkMessage = function(ids) {
        var array = [];
        for (var i = 0; i < cacheMessageIds.length; i++) {
            var id = cacheMessageIds[i];
            for (var j = 0; j < ids.length; j++) {
                if (ids[j] === id) {
                    array.push(id)
                }
            }
        }
        return array
    };
    pomelo.register = function(opts, cb) {
        request("register", opts, cb)
    };
    pomelo.bind = function(opts, cb) {
        if (isRegister) {
            current_domain = opts.domain;
            current_user = opts.user;
            request("bind", opts, cb)
        } else {
            console.log("cannot bind without registration.")
        }
    };
    pomelo.registerAndBind = function(opts, cb) {
        current_domain = opts.domain;
        current_user = opts.user;
        request("registerAndBind", opts, cb)
    };
    pomelo.cancelBind = function(opts, cb) {
        current_domain = null;
        current_user = null;
        request("cancelBind", opts, cb)
    };
    pomelo.getOnlineUser = function(opts, cb) {
        request("getOnlineUser", opts, cb)
    };
    pomelo.disconnect = function() {
        if (socket) {
            socket.disconnect();
            socket = null
        }
    };
    pomelo.ackMessage = function(domain, msgs) {
        var msgIds = "";
        var types = "";
        var message = {};
        var user;
        for (var i = 0; i < msgs.length; i++) {
            var data = msgs[i];
            if (!user) {
                user = data.user
            }
            msgIds += data.msgId;
            types += data.type;
            if (i !== msgs.length - 1) {
                msgIds += ";";
                types += ";"
            }
        }
        var message = {
            user: user,
            msgIds: msgIds,
            types: types,
            domain: domain
        };
        notify("ack", message)
    }
})();
(function() {
    var c0x = NEJ.P,
        Y0x = NEJ.O,
        bm0x = NEJ.F,
        h0x = c0x("nej.v"),
        k0x = c0x("nej.u"),
        H0x = c0x("nej.ut"),
        l0x = c0x("nm.x"),
        dg1x = c0x("nm.u"),
        p0x = c0x("nm.d"),
        Ki1x = c0x("pomelo"),
        dl1x = 0,
        b0x, K0x;
    p0x.eM2x({
        "polling-init": {
            url: "/api/push/init",
            format: function(R0x) {
                dl1x = 2;
                var rG6A = {
                        domain: "music.163.com",
                        host: MUSIC_CONFIG.pushHost,
                        port: MUSIC_CONFIG.pushPort,
                        key: MUSIC_CONFIG.pushKey,
                        secret: "bec0b878892740c498505a85eb3dcec9"
                    },
                    j0x = R0x.account || Y0x,
                    cR1x = GUser.userId;
                Ki1x.init(rG6A.host, rG6A.port, true, this.cjY9P.g0x(this, {
                    user: cR1x,
                    nonce: j0x.nonce,
                    domain: rG6A.domain,
                    productKey: rG6A.key,
                    signature: j0x.signature,
                    expire_time: j0x.expireTime
                }))
            },
            onerror: function() {
                return this.bbC7v()
            }
        }
    });
    p0x.yl8d = NEJ.C();
    b0x = p0x.yl8d.O0x(p0x.gT2x);
    b0x.cl1x = function() {
        var pu5z = !1;
        return function(e0x) {
            if (!pu5z) {
                pu5z = !0
            }
            this.cr1x(e0x);
            Ki1x.on("specify", this.qn6h.g0x(this));
            Ki1x.on("broadcast", this.qn6h.g0x(this))
        }
    }();
    b0x.qn6h = function(d0x) {
        k0x.be0x(d0x, function(bF0x) {
            h0x.A0x(p0x.yl8d, "message", bF0x)
        }, this)
    };
    b0x.bbC7v = function() {
        var bL0x = 500;
        return function() {
            dl1x = 0;
            Ki1x.disconnect();
            if (bL0x > 6e4) bL0x = 500;
            bL0x *= 2
        }
    }();
    b0x.cjY9P = function(e0x, bP0x) {
        if ( !! bP0x) {
            return this.bbC7v()
        }
        dl1x = 3;
        Ki1x.registerAndBind(e0x, function(n0x) {
            if (n0x.code != 200) {
                return this.bbC7v()
            }
            dl1x = 4
        }.g0x(this))
    };
    b0x.cse1x = function() {
        dg1x.cjV9M.fP2x().csf1x()
    };
    b0x.csg1x = function() {
        dg1x.cjV9M.fP2x().csh1x()
    };
    b0x.bbx7q = function() {
        var pu5z = !1;
        return function() {
            if (pu5z) return;
            pu5z = !0;
            this.cj1x("polling-init", {})
        }
    }();
    H0x.ft2x.B0x({
        event: "message",
        element: p0x.yl8d
    })
})();
(function() {
    var c0x = NEJ.P,
        Y0x = NEJ.O,
        a9j = c0x("nej.e"),
        h0x = c0x("nej.v"),
        v0x = c0x("nej.j"),
        cG1x = c0x("nej.p"),
        k0x = c0x("nej.u"),
        m0x = c0x("nm.l"),
        p0x = c0x("nm.d"),
        l0x = c0x("nm.x"),
        dA2x = c0x("api"),
        b0x, K0x;
    var fW2x = a9j.hN3x('<div class="lyct f-cb"><div class="m-fdback"><div class="tip">任何产品中的问题，欢迎反馈给我们</div><div class="u-txtwrap f-pr"><textarea class="u-txt area" placeholder="请输入反馈内容"></textarea><span class="zs s-fc2">140</span></div><div class="u-txtwrap f-pr holder-parent"><textarea class="u-txt contact" placeholder="请留下联系方式（电话、QQ、邮箱）" maxLength="100"></textarea></div><div style="display:none" class="u-err"><i class="u-icn u-icn-25"></i>内容不能为空！</div></div><div class="lybtn f-tc"><a href="javascript:;" class="u-btn2 u-btn2-2 u-btn2-w4" hidefocus="true"><i>发送意见</i></a><a href="javascript:;" class="u-btn2 u-btn2-1 u-btn2-w4" hidefocus="true"><i>取 消</i></a></div></div>');
    m0x.bbw7p = NEJ.C();
    b0x = m0x.bbw7p.O0x(m0x.dT2x);
    K0x = m0x.bbw7p.ch1x;
    b0x.bk0x = function(e0x) {
        e0x.title = "意见反馈";
        this.bl0x(e0x)
    };
    b0x.bX1x = function() {
        this.bY1x = fW2x
    };
    b0x.bR0x = function() {
        this.cb1x();
        this.gB2x = {};
        var HD0x = a9j.I0x;
        var AZ9Q = h0x.q0x;
        this.gB2x.submit_btn = HD0x(this.o0x, "u-btn2")[0];
        this.gB2x.cancle_btn = HD0x(this.o0x, "u-btn2")[1];
        this.gB2x.prompt_msg = HD0x(this.o0x, "u-err")[0];
        this.gB2x.zs = HD0x(this.o0x, "zs")[0];
        a9j.W0x(this.gB2x.zs, "display", "none");
        this.gB2x.fb_txt = HD0x(this.o0x, "u-txt")[0];
        this.gB2x.contact = HD0x(this.o0x, "u-txt")[1];
        a9j.fv2x(this.gB2x.fb_txt, "holder");
        a9j.fv2x(this.gB2x.contact, "holder");
        if (a9j.bz0x(this.gB2x.fb_txt.parentNode, "holder-parent")) {
            a9j.W0x(this.gB2x.fb_txt.parentNode, "display", "block")
        }
        if (a9j.bz0x(this.gB2x.contact.parentNode, "holder-parent")) {
            a9j.W0x(this.gB2x.contact.parentNode, "display", "block")
        }
        AZ9Q(this.gB2x.submit_btn, "click", this.cjS9J.g0x(this));
        AZ9Q(this.gB2x.cancle_btn, "click", this.cjP9G.g0x(this));
        AZ9Q(this.gB2x.prompt_msg, "msgShow", this.cjO9F.g0x(this));
        AZ9Q(this.gB2x.fb_txt, "keyup", this.sf6Z.g0x(this));
        AZ9Q(this.gB2x.fb_txt, "input", this.fd2x.g0x(this));
        AZ9Q(this.gB2x.contact, "keyup", this.cjN9E.g0x(this));
        AZ9Q(this.gB2x.contact, "input", this.bEh3x.g0x(this));
        this.ks4w = p0x.hJ3x.B0x()
    };
    b0x.cjS9J = function(d0x) {
        h0x.bh0x(d0x);
        if (this.cs1x()) return;
        var bi0x = this.gB2x.fb_txt.value.trim();
        var bo0x = bi0x.length;
        var e0x = {
            type: "json",
            method: "post",
            noEnc: true
        };
        var bEn3x = this.gB2x.contact.value.trim();
        var Uw4A = {
            ua: navigator.userAgent,
            hash: top.location.hash,
            href: location.href,
            flash: l0x.beN8F(),
            contact: bEn3x
        };
        var j0x = {
                content: bi0x,
                client: "web",
                xInfo: JSON.stringify(Uw4A)
            },
            mt5y = this.ks4w.coO1x();
        if (mt5y && mt5y.length) {
            j0x.log = mt5y.join("\n")
        }
        if (bo0x == 0) {
            this.gB2x.prompt_msg.innerHTML = "反馈内容不能为空";
            a9j.W0x(this.gB2x.prompt_msg, "display", "block");
            return
        }
        if (bEn3x.length > 100) {
            this.gB2x.prompt_msg.innerHTML = "联系方式最多只能输入100个字符";
            a9j.W0x(this.gB2x.prompt_msg, "display", "block");
            return
        }
        this.cs1x(true);
        e0x.data = k0x.dh1x(j0x);
        e0x.onload = this.cjM9D.g0x(this);
        e0x.onerror = this.hM3x.g0x(this);
        v0x.br0x("/api/feedback/web", e0x)
    };
    b0x.fd2x = function(d0x) {
        var bo0x = this.gB2x.fb_txt.value.trim().length;
        if (bo0x > 0) a9j.W0x(this.gB2x.prompt_msg, "display", "none");
        cG1x.cP1x.browser == "ie" && cG1x.cP1x.version < "7.0" ? setTimeout(this.fs2x.g0x(this), 0) : this.fs2x()
    };
    b0x.sf6Z = function(d0x) {
        if (d0x.keyCode === 8) this.fs2x()
    };
    b0x.fs2x = function() {
        var bo0x = this.gB2x.fb_txt.value.trim().length;
        this.gB2x.zs.innerHTML = !bo0x ? "0/140" : bo0x + "/140"
    };
    b0x.bEh3x = function(d0x) {
        var bo0x = this.gB2x.contact.value.trim().length;
        if (bo0x > 0) a9j.W0x(this.gB2x.prompt_msg, "display", "none")
    };
    b0x.cjN9E = function(d0x) {
        if (d0x.keyCode === 8) this.bEh3x()
    };
    b0x.cjP9G = function(d0x) {
        h0x.cf1x(d0x);
        this.bq0x()
    };
    b0x.cjO9F = function(d0x) {
        var f0x = h0x.U0x(d0x);
        f0x.innerHTML = "请输入反馈内容"
    };
    b0x.csi1x = function(csj1x) {
        var f0x = h0x.U0x(d0x);
        f0x.innerHTML = ""
    };
    b0x.cjM9D = function(n0x) {
        this.cs1x(false);
        this.bq0x();
        m0x.Z0x.N0x({
            tip: "意见发送成功",
            autoclose: true
        })
    };
    b0x.hM3x = function(n0x) {
        this.cs1x(false);
        m0x.Z0x.N0x({
            tip: "意见发送失败",
            autoclose: true
        })
    };
    b0x.cs1x = function(cB1x) {
        return this.dJ2x(this.gB2x.submit_btn, cB1x, "发送意见", "发送中...")
    };
    b0x.N0x = function() {
        K0x.N0x.call(this);
        this.cs1x(false);
        this.gB2x.fb_txt.value = "";
        this.gB2x.contact.value = "";
        a9j.W0x(this.gB2x.prompt_msg, "display", "none");
        this.fs2x()
    };
    l0x.cjJ9A = function(e0x) {
        e0x = e0x || {};
        if (e0x.title === undefined) e0x.title = "意见反馈";
        m0x.bbw7p.N0x(e0x)
    };
    dA2x.feedback = l0x.feedback = l0x.cjJ9A
})();
(function() {
    var c0x = NEJ.P,
        Y0x = NEJ.O,
        bm0x = NEJ.F,
        M0x = c0x("nej.ui"),
        b0x;
    if ( !! M0x.wX8P) return;
    M0x.wX8P = NEJ.C();
    b0x = M0x.wX8P.O0x(M0x.eo2x);
    b0x.cl1x = function() {
        this.gp2x = this.bFj3x();
        this.cr1x()
    };
    b0x.bk0x = function(e0x) {
        this.bl0x(e0x);
        this.cI1x = e0x.index;
        this.gy2x = e0x.total;
        this.gt2x = e0x.range;
        this.gC2x(e0x.data)
    };
    b0x.bD0x = function() {
        this.bI0x();
        delete this.bb0x;
        delete this.cI1x;
        delete this.gy2x;
        delete this.gt2x
    };
    b0x.hf2x = bm0x;
    b0x.bFj3x = function() {
        var fR2x = +(new Date);
        return function() {
            return "itm-" + ++fR2x
        }
    }();
    b0x.CL9C = function() {
        return this.gp2x
    };
    b0x.hm3x = function() {
        return this.bb0x
    };
    b0x.gC2x = function(j0x) {
        this.bb0x = j0x || {};
        this.hf2x(this.bb0x)
    }
})();
(function() {
    var c0x = NEJ.P,
        a9j = c0x("nej.e"),
        h0x = c0x("nej.v"),
        M0x = c0x("nej.ui"),
        b0x, K0x;
    if ( !! M0x.rb6V) return;
    M0x.rb6V = NEJ.C();
    b0x = M0x.rb6V.O0x(M0x.wX8P);
    K0x = M0x.rb6V.ch1x;
    b0x.bk0x = function(e0x) {
        this.cjI9z = e0x.pkey || "id";
        this.bl0x(e0x)
    };
    b0x.AO9F = function(j0x) {
        this.A0x("ondelete", {
            ext: j0x,
            id: this.CL9C(),
            data: this.hm3x(),
            body: this.jV4Z()
        })
    };
    b0x.Lv1x = function(j0x) {
        this.A0x("onupdate", {
            ext: j0x,
            id: this.CL9C(),
            data: this.hm3x(),
            body: this.jV4Z()
        })
    };
    b0x.gC2x = function(j0x) {
        K0x.gC2x.apply(this, arguments);
        this.gp2x = this.bb0x[this.cjI9z] || this.bFj3x()
    }
})();
(function() {
    var c0x = NEJ.P,
        Y0x = NEJ.O,
        fb2x = NEJ.R,
        a9j = c0x("nej.e"),
        k0x = c0x("nej.u"),
        M0x = c0x("nej.ui"),
        b0x, hR3x, bbo7h;
    if ( !! M0x.bbn7g) return;
    M0x.bbn7g = NEJ.C();
    b0x = M0x.bbn7g.O0x(M0x.eo2x);
    b0x.bk0x = function(e0x) {
        this.Us4w = NEJ.X({}, e0x);
        this.fz2x = NEJ.X({}, e0x);
        delete this.Us4w.onchange;
        this.fz2x.onchange = this.ge2x.g0x(this);
        this.bl0x(e0x);
        this.cjG9x({
            number: e0x.number,
            label: e0x.label || Y0x
        })
    };
    b0x.bD0x = function() {
        this.bI0x();
        if ( !! this.ka4e) {
            this.ka4e.S0x();
            delete this.ka4e
        }
        delete this.Us4w;
        delete this.fz2x;
        this.cjF9w();
        this.o0x.innerHTML = "&nbsp;"
    };
    b0x.bX1x = function() {
        this.kT4X = hR3x
    };
    b0x.cjG9x = function(j0x) {
        a9j.dP2x(this.o0x, bbo7h, j0x);
        var fR2x = a9j.FP0x();
        this.fz2x.list = a9j.I0x(this.o0x, "js-i-" + fR2x);
        this.fz2x.pbtn = (a9j.I0x(this.o0x, "js-p-" + fR2x) || fb2x)[0];
        this.fz2x.nbtn = (a9j.I0x(this.o0x, "js-n-" + fR2x) || fb2x)[0]
    };
    b0x.bR0x = function() {
        this.cb1x()
    };
    b0x.csk1x = function(j0x) {
        return a9j.bQ0x(bbo7h, j0x)
    };
    b0x.ge2x = function(d0x) {
        if (this.LL1x) return;
        var s0x = d0x.index,
            cu1x = d0x.total;
        this.LL1x = !0;
        this.LM1x(s0x, cu1x);
        k0x.be0x(this.Ur4v, function(rS6M) {
            rS6M.LM1x(s0x, cu1x)
        });
        this.LL1x = !1;
        this.A0x("onchange", d0x)
    };
    b0x.g0x = function(bA0x) {
        bA0x = a9j.w0x(bA0x);
        if (!bA0x) return this;
        var cn1x = NEJ.X({}, this.Us4w);
        cn1x.parent = bA0x;
        cn1x.index = this.rO6I();
        cn1x.total = this.jx4B();
        var rS6M = this.constructor.B0x(cn1x);
        rS6M.tR7K("onchange", this.fz2x.onchange);
        if (!this.Ur4v) this.Ur4v = [];
        this.Ur4v.push(rS6M);
        return this
    };
    b0x.cjF9w = function() {
        var bhE8w = function(rS6M, s0x, i0x) {
            rS6M.S0x();
            i0x.splice(s0x, 1)
        };
        return function() {
            k0x.lU4Y(this.Ur4v, bhE8w)
        }
    }();
    b0x.jq4u = function(s0x) {
        if (!this.ka4e) return;
        this.ka4e.jq4u(s0x)
    };
    b0x.rO6I = function() {
        if (!this.ka4e) return 1;
        return this.ka4e.rO6I()
    };
    b0x.jx4B = function() {
        if (!this.ka4e) return 1;
        return this.ka4e.jx4B()
    };
    b0x.LM1x = function(s0x, cu1x) {
        if (!this.ka4e) return;
        this.ka4e.LM1x(s0x, cu1x)
    };
    b0x.bbc7V = function(cu1x) {
        if (!this.ka4e) return;
        this.ka4e.bbc7V(cu1x)
    };
    hR3x = a9j.rT6N(".#<uispace>{font-size:12px;line-height:160%;}.#<uispace> a{margin:0 2px;padding:2px 8px;color:#333;border:1px solid #aaa;text-decoration:none;}.#<uispace> .js-disabled{cursor:default;}.#<uispace> .js-selected{cursor:default;background:#bbb;}");
    bbo7h = a9j.eg2x('{trim}{if !defined("noprv")||!noprv}<a href="#" class="zbtn zprv ${\'js-p-\'|seed}">${label.prev||"上一页"}</a>{/if}{list 1..number as x}<a href="#" class="zpgi zpg${x} ${\'js-i-\'|seed}"></a>{/list}{if !defined("nonxt")||!nonxt}<a href="#" class="zbtn znxt ${\'js-n-\'|seed}">${label.next||"下一页"}</a>{/if}{/trim}')
})();
(function() {
    var c0x = NEJ.P,
        Y0x = NEJ.O,
        bm0x = NEJ.F,
        a9j = c0x("nej.e"),
        h0x = c0x("nej.v"),
        k0x = c0x("nej.u"),
        M0x = c0x("nej.ut"),
        b0x;
    if ( !! M0x.Up4t) return;
    M0x.Up4t = NEJ.C();
    b0x = M0x.Up4t.O0x(M0x.cC1x);
    b0x.bk0x = function(e0x) {
        this.bl0x(e0x);
        this.Uo4s = e0x.pbtn;
        this.cd1x = e0x.nbtn;
        this.Um4q = e0x.sbtn;
        this.Ul4p = e0x.ebtn;
        this.ig3x = e0x.event || "click";
        this.jA4E = e0x.selected || "js-selected";
        this.mN5S = e0x.disabled || "js-disabled";
        this.cjA9r(e0x.list);
        this.LM1x(e0x.index || 1, e0x.total || 1)
    };
    b0x.bD0x = function() {
        this.bI0x();
        delete this.bT1x;
        delete this.ig3x;
        delete this.Uo4s;
        delete this.cd1x;
        delete this.Um4q;
        delete this.Ul4p;
        delete this.bHn3x;
        delete this.gy2x;
        delete this.cI1x;
        delete this.jA4E;
        delete this.mN5S
    };
    b0x.cjA9r = function() {
        var baT7M = function(f0x) {
            this.bT1x.push(f0x);
            this.bU1x([
                [f0x, this.ig3x, this.cK1x.dX2x(this, 0)]
            ])
        };
        return function(i0x) {
            this.bT1x = [];
            this.bU1x([
                [this.Uo4s, "click", this.cK1x.dX2x(this, -1)],
                [this.cd1x, "click", this.cK1x.dX2x(this, 1)],
                [this.Um4q, "click", this.cK1x.dX2x(this, -2)],
                [this.Ul4p, "click", this.cK1x.dX2x(this, 2)]
            ]);
            k0x.be0x(i0x, baT7M, this)
        }
    }();
    b0x.AH9y = function(f0x, s0x) {
        if (s0x == null) {
            f0x.innerText = "";
            a9j.W0x(f0x, "display", "none");
            a9j.x0x(f0x, this.jA4E)
        } else {
            f0x.innerText = s0x;
            a9j.W0x(f0x, "display", "");
            s0x == this.cI1x ? a9j.y0x(f0x, this.jA4E) : a9j.x0x(f0x, this.jA4E)
        }
    };
    b0x.baP7I = function() {
        if (this.cI1x <= 1) {
            a9j.y0x(this.Uo4s, this.mN5S);
            a9j.y0x(this.Um4q, this.mN5S)
        } else {
            a9j.x0x(this.Uo4s, this.mN5S);
            a9j.x0x(this.Um4q, this.mN5S)
        }
        if (this.cI1x >= this.gy2x) {
            a9j.y0x(this.cd1x, this.mN5S);
            a9j.y0x(this.Ul4p, this.mN5S)
        } else {
            a9j.x0x(this.cd1x, this.mN5S);
            a9j.x0x(this.Ul4p, this.mN5S)
        }
    };
    b0x.Uh4l = bm0x;
    b0x.baG7z = function() {
        this.Uh4l();
        this.baP7I();
        this.A0x("onchange", {
            last: this.bHn3x,
            total: this.gy2x,
            index: this.cI1x,
            ext: this.baF7y
        })
    };
    b0x.bHN4R = function(s0x) {
        s0x = parseInt(s0x);
        if (isNaN(s0x) || this.gy2x == null) return !1;
        s0x = Math.max(1, Math.min(s0x, this.gy2x));
        this.bHn3x = this.cI1x;
        this.cI1x = s0x;
        return !0
    };
    b0x.baE7x = function(cu1x) {
        cu1x = parseInt(cu1x);
        if (isNaN(cu1x) || cu1x < 1) return !1;
        this.gy2x = cu1x;
        return !0
    };
    b0x.cK1x = function(d0x, ev2x) {
        h0x.cf1x(d0x);
        var G0x = h0x.U0x(d0x);
        if (!G0x || a9j.bz0x(G0x, this.jA4E) || a9j.bz0x(G0x, this.mN5S)) return;
        var s0x = G0x.innerText;
        switch (ev2x) {
            case 1:
            case -1:
                s0x = this.cI1x + ev2x;
                break;
            case 2:
                s0x = this.gy2x;
                break;
            case -2:
                s0x = 1;
                break
        }
        this.jq4u(s0x)
    };
    b0x.rO6I = function() {
        return this.cI1x
    };
    b0x.jq4u = function(s0x) {
        var cjy9p = this.cI1x;
        this.bHN4R(s0x);
        if (cjy9p != this.cI1x) this.baG7z();
        return this
    };
    b0x.jx4B = function() {
        return this.gy2x
    };
    b0x.OM3x = function(cu1x) {
        if (this.baE7x(cu1x) && this.cI1x != null) {
            this.cI1x = 1;
            this.baG7z()
        }
        return this
    };
    b0x.bbc7V = function(cu1x) {
        if (this.baE7x(cu1x)) {
            this.Uh4l();
            this.baP7I()
        }
        return this
    };
    b0x.LM1x = function(s0x, cu1x) {
        if (!this.baE7x(cu1x) || !this.bHN4R(s0x)) return this;
        this.baG7z();
        return this
    }
})();
(function() {
    var c0x = NEJ.P,
        Y0x = NEJ.O,
        a9j = c0x("nej.e"),
        k0x = c0x("nej.u"),
        cJ1x = c0x("nej.x"),
        M0x = c0x("nej.ut"),
        b0x;
    if ( !! M0x.Mo1x) return;
    M0x.Mo1x = NEJ.C();
    b0x = M0x.Mo1x.O0x(M0x.Up4t);
    b0x.cl1x = function() {
        this.cr1x();
        var f0x = a9j.cU1x("span", "zdot");
        f0x.innerText = "...";
        this.Ug4k = [f0x.cloneNode(true), f0x]
    };
    b0x.bD0x = function() {
        this.bI0x();
        this.bIv4z()
    };
    b0x.bIv4z = function() {
        a9j.mf4j(this.Ug4k[0]);
        a9j.mf4j(this.Ug4k[1])
    };
    b0x.Uh4l = function() {
        this.baF7y = {
            last: !1,
            first: !1,
            list: this.bT1x
        };
        this.bIv4z();
        this.AH9y(this.bT1x[0], 1);
        var bE0x = 1,
            bo0x = this.bT1x.length;
        if (this.gy2x < bo0x) {
            for (var pC5H; bE0x < bo0x; bE0x++) {
                pC5H = bE0x + 1;
                this.AH9y(this.bT1x[bE0x], pC5H > this.gy2x ? null : pC5H)
            }
            return
        }
        if (this.cI1x > 1) {
            var cg1x = Math.floor((bo0x - 2) / 2),
                cjx9o = this.gy2x - bo0x + 2,
                iv3x = Math.max(2, this.cI1x - cg1x);
            if (this.gy2x >= bo0x) {
                iv3x = Math.min(iv3x, cjx9o)
            }
            if (iv3x > 2) {
                this.bT1x[0].insertAdjacentElement("afterEnd", this.Ug4k[0]);
                this.baF7y.first = !0
            }
            for (var s0x;; bE0x++) {
                s0x = iv3x + bE0x - 1;
                if (s0x > this.cI1x) break;
                this.AH9y(this.bT1x[bE0x], s0x)
            }
        }
        if (this.cI1x < this.gy2x) {
            var s0x, iv3x = this.cI1x + 1;
            for (var i = 0, l = bo0x - 2;; i++, bE0x++) {
                s0x = iv3x + i;
                if (bE0x > l || s0x > this.gy2x) break;
                this.AH9y(this.bT1x[bE0x], s0x)
            }
            if (s0x < this.gy2x) {
                this.bT1x[bE0x].insertAdjacentElement("beforeBegin", this.Ug4k[1]);
                this.baF7y.last = !0
            }
            if (s0x <= this.gy2x) {
                this.AH9y(this.bT1x[bE0x++], this.gy2x)
            }
        }
        for (; bE0x < bo0x; bE0x++) {
            this.AH9y(this.bT1x[bE0x])
        }
    };
    a9j.cjw9n = cJ1x.cjw9n = function(bA0x, e0x) {
        var C0x = a9j.kQ4U(bA0x);
        if (!C0x) return null;
        if (!M0x.XZ5e(C0x, M0x.Mo1x)) {
            e0x = e0x || {};
            var i0x = !e0x.clazz ? a9j.cQ1x(C0x) : a9j.I0x(C0x, e0x.clazz);
            e0x.pbtn = i0x.shift();
            e0x.nbtn = i0x.pop();
            e0x.list = i0x;
            delete e0x.clazz
        }
        return M0x.XZ5e(C0x, M0x.Mo1x, e0x || Y0x)
    };
    cJ1x.isChange = !0
})();
(function() {
    var c0x = NEJ.P,
        Y0x = NEJ.O,
        fb2x = NEJ.R,
        a9j = c0x("nej.e"),
        k0x = c0x("nej.u"),
        H0x = c0x("nej.ut"),
        M0x = c0x("nej.ui"),
        b0x, K0x, fW2x;
    if ( !! M0x.Mv2x) return;
    M0x.Mv2x = NEJ.C();
    b0x = M0x.Mv2x.O0x(M0x.bbn7g);
    K0x = M0x.Mv2x.ch1x;
    b0x.bk0x = function(e0x) {
        e0x.number = parseInt(e0x.number) || 9;
        this.bl0x(e0x);
        this.ka4e = H0x.Mo1x.B0x(this.fz2x)
    };
    b0x.ge2x = function(d0x) {
        if ( !! this.Us4w.noend) {
            var bIH4L = d0x.ext || Y0x,
                i0x = bIH4L.list || fb2x;
            if (bIH4L.last) {
                a9j.W0x(i0x[i0x.length - 1], "display", "none")
            }
        }
        K0x.ge2x.apply(this, arguments)
    }
})();
(function() {
    var c0x = NEJ.P,
        Y0x = NEJ.O,
        bm0x = NEJ.F,
        a9j = c0x("nej.e"),
        h0x = c0x("nej.v"),
        k0x = c0x("nej.u"),
        bc0x = c0x("nej.ui"),
        M0x = c0x("nej.ut"),
        b0x;
    if ( !! M0x.Uf4j) return;
    M0x.Uf4j = NEJ.C();
    b0x = M0x.Uf4j.O0x(M0x.cC1x);
    b0x.bk0x = function(e0x) {
        this.ix3x = {};
        this.bl0x(e0x);
        this.iS4W = a9j.w0x(e0x.parent);
        this.eV2x = {
            parent: this.iS4W
        };
        this.pG5L = parseInt(e0x.limit) || 10;
        this.vq7j = parseInt(e0x.first) || this.pG5L;
        this.cjv9m(e0x.item);
        this.cju9l(e0x.cache || Y0x);
        this.cjt9k(e0x.pager || Y0x);
        this.gC2x()
    };
    b0x.bD0x = function() {
        this.A0x("onbeforerecycle");
        this.MG2x();
        this.bI0x();
        if (this.ix3x.clear) {
            this.P0x.tv7o(this.ix3x.key)
        }
        this.P0x.S0x();
        if ( !! this.ii3x) {
            this.ii3x.S0x();
            delete this.ii3x
        }
        delete this.bJa4e;
        delete this.fz2x;
        delete this.Ue4i;
        delete this.P0x;
        delete this.iS4W;
        delete this.MM2x;
        delete this.eV2x;
        delete this.ix3x
    };
    b0x.bJp4t = function(C0x) {
        return C0x + "" + a9j.FP0x()
    };
    b0x.ya8S = function(bE0x, bj0x, fS2x, bo0x) {
        var n0x = {
            index: 1,
            total: 1
        };
        if (bj0x >= bE0x) {
            n0x.index = Math.floor((bj0x - bE0x) / fS2x) + 2
        }
        if (bo0x > bE0x) {
            n0x.total = Math.ceil((bo0x - bE0x) / fS2x) + 1
        }
        return n0x
    };
    b0x.bJv4z = function(J0x) {
        delete this.MM2x;
        this.HY0x = J0x;
        this.bU1x([
            [this.iS4W, "click", this.cjs9j.g0x(this)]
        ])
    };
    b0x.cjv9m = function(r0x) {
        if (k0x.fj2x(r0x)) {
            this.bJv4z(r0x);
            return
        }
        NEJ.X(this.eV2x, r0x);
        var dC2x = this.eV2x.klass;
        delete this.eV2x.klass;
        if (k0x.fj2x(dC2x)) {
            this.bJv4z(dC2x);
            return
        }
        delete this.HY0x;
        this.MM2x = dC2x;
        this.eV2x.ondelete = this.A0x.g0x(this, "ondelete");
        this.eV2x.onupdate = this.A0x.g0x(this, "onupdate")
    };
    b0x.cju9l = function(Q0x) {
        var dC2x = Q0x.klass,
            ji4m = NEJ.X({}, Q0x);
        this.ix3x.key = ji4m.lkey;
        this.ix3x.data = ji4m.data || {};
        this.ix3x.clear = !! ji4m.clear;
        this.eV2x.pkey = ji4m.key || "id";
        ji4m.onlistload = this.bav7o.g0x(this);
        ji4m.onpullrefresh = this.cjr9i.g0x(this);
        if ( !! dC2x && "onlistchange" in dC2x) {
            this.bU1x([
                [dC2x, "listchange", this.bau7n.g0x(this)]
            ])
        } else {
            ji4m.onitemadd = this.Ud4h.g0x(this);
            ji4m.onitemdelete = this.Uc4g.g0x(this);
            ji4m.onitemupdate = this.bKk4o.g0x(this)
        }
        this.P0x = (dC2x || M0x.Oo3x).B0x(ji4m);
        if (Q0x.total != null) {
            this.P0x.OM3x(this.ix3x.key, Q0x.total)
        }
        if ( !! Q0x.list) {
            this.P0x.rA6u(this.ix3x.key, Q0x.list)
        }
    };
    b0x.cjt9k = function(rS6M) {
        this.bJa4e = rS6M.klass || bc0x.Mv2x;
        this.fz2x = NEJ.X({}, rS6M);
        if (k0x.eq2x(rS6M.parent)) {
            this.fz2x.parent = rS6M.parent[0];
            this.MZ2x = rS6M.parent.slice(1);
            if (!this.MZ2x || !this.MZ2x.length) {
                delete this.MZ2x
            }
        }
        delete this.fz2x.klass
    };
    b0x.MG2x = function() {
        var fQ2x = /^(?:table|tr|tbody|ul|ol|select)$/i;
        return function() {
            this.A0x("onbeforelistclear", {
                parent: this.iS4W
            });
            if ( !! this.fC2x && this.fC2x.length > 0) {
                this.fC2x = this.MM2x.S0x(this.fC2x);
                delete this.fC2x
            }
            if (fQ2x.test(this.iS4W.tagName)) {
                a9j.bBb2x(this.iS4W)
            } else {
                this.iS4W.innerHTML = ""
            }
        }
    }();
    b0x.bap7i = function(Ub4f) {
        if ( !! this.fz2x.fixed) return;
        a9j.W0x(this.fz2x.parent, "display", Ub4f);
        k0x.be0x(this.MZ2x, function(bA0x) {
            a9j.W0x(bA0x, "display", Ub4f)
        }, this)
    };
    b0x.bam6g = function() {
        var s0x = this.fz2x.index || 1;
        delete this.fz2x.index;
        if ( !! this.ii3x) {
            s0x = this.ii3x.rO6I()
        }
        this.xY8Q({
            last: s0x,
            index: s0x
        })
    };
    b0x.xY8Q = function(d0x) {
        this.A0x("onpagechange", d0x)
    };
    b0x.bKR4V = function(bj0x) {
        this.ix3x.offset = bj0x;
        this.VZ5e()
    };
    b0x.bKS4W = function(e0x) {
        return e0x
    };
    b0x.VZ5e = function() {
        this.Nl2x();
        var j0x = this.ix3x.data;
        j0x.offset = this.ix3x.offset;
        var yC8u = j0x.offset == 0;
        j0x.total = yC8u;
        this.ix3x.limit = yC8u ? this.vq7j : this.pG5L;
        j0x.limit = this.ix3x.limit;
        this.P0x.nv5A(this.bKS4W(NEJ.X({}, this.ix3x)))
    };
    b0x.bav7o = function(e0x) {
        if (e0x.key != this.ix3x.key || e0x.offset != this.ix3x.offset) return;
        this.TZ4d();
        var i0x = this.P0x.gK2x(e0x.key);
        if (!i0x || !i0x.length) {
            this.bai6c();
            return
        }
        var fS2x = e0x.limit,
            bj0x = e0x.offset;
        if (this.bah6b(i0x, bj0x, fS2x)) return;
        this.A0x("onbeforelistrender", {
            list: i0x,
            offset: bj0x,
            parent: this.iS4W
        });
        if ( !! this.HY0x) {
            this.eV2x.xlist = i0x;
            this.eV2x.beg = bj0x;
            this.eV2x.end = Math.min(i0x.length, bj0x + fS2x) - 1;
            this.eV2x.act = "list";
            var dy2x = a9j.bQ0x(this.HY0x, this.eV2x);
            this.TX4b(dy2x)
        } else {
            this.eV2x.limit = fS2x;
            this.eV2x.offset = bj0x;
            var hg2x = a9j.zJ8B(i0x, this.MM2x, this.eV2x);
            this.TW4a(hg2x)
        }
        this.A0x("onafterlistrender", {
            list: i0x,
            offset: bj0x,
            parent: this.iS4W
        })
    };
    b0x.cjr9i = function(e0x) {
        if (!this.Ue4i) return;
        delete this.Ue4i;
        this.TZ4d("onafterpullrefresh");
        this.gC2x()
    };
    b0x.bLA4E = function(s0x, cu1x) {
        if ( !! this.ii3x) {
            var zd8V = this.ii3x.rO6I(),
                cjq9h = this.ii3x.jx4B();
            if (zd8V > cu1x || cu1x != cjq9h) {
                this.ii3x.S0x();
                delete this.ii3x;
                this.xY8Q({
                    last: zd8V,
                    index: Math.min(s0x, cu1x)
                });
                return !0
            }
        } else {
            this.fz2x.index = s0x;
            this.fz2x.total = cu1x;
            this.ii3x = this.bJa4e.B0x(this.fz2x);
            this.ii3x.tR7K("onchange", this.xY8Q.g0x(this));
            k0x.be0x(this.MZ2x, function(bA0x) {
                this.ii3x.g0x(bA0x)
            }, this)
        }
    };
    b0x.bLC4G = function() {
        var fR2x = +(new Date);
        return function(j0x) {
            var C0x = j0x[this.eV2x.pkey];
            if (!C0x) {
                j0x["dirty-data"] = !0;
                j0x[this.eV2x.pkey] = "dirty-" + fR2x++
            }
            return j0x
        }
    }();
    b0x.bLE4I = function(j0x) {
        var C0x = j0x[this.eV2x.pkey];
        if ( !! j0x["dirty-data"]) {
            delete j0x["dirty-data"];
            delete j0x[this.eV2x.pkey]
        }
        return C0x
    };
    b0x.bLI4M = function() {
        var cjp9g = function(lA4E, ly4C) {
            this.iS4W.insertAdjacentElement(lA4E, ly4C)
        };
        return function(lA4E, j0x) {
            var FK0x = [j0x];
            if ( !! this.HY0x) {
                this.eV2x.xlist = FK0x;
                this.eV2x.beg = 0;
                this.eV2x.end = 0;
                this.eV2x.act = "add";
                this.TX4b(a9j.bQ0x(this.HY0x, this.eV2x), lA4E)
            } else {
                this.eV2x.limit = 1;
                this.eV2x.offset = 0;
                this.eV2x.parent = cjp9g.g0x(this, lA4E);
                var hg2x = a9j.zJ8B(FK0x, this.MM2x, this.eV2x);
                this.eV2x.parent = this.iS4W;
                this.TW4a(hg2x)
            }
        }
    }();
    b0x.Nl2x = bm0x;
    b0x.TZ4d = function(T0x) {
        var d0x = {
            parent: this.iS4W
        };
        this.A0x(T0x || "onafterlistload", d0x);
        if (!d0x.stopped) {
            a9j.mf4j(this.ck1x)
        }
    };
    b0x.bah6b = bm0x;
    b0x.bac6W = function(bF0x, lA4E) {
        if (k0x.fj2x(bF0x)) {
            if (!this.ck1x) this.ck1x = a9j.cU1x("div");
            this.ck1x.innerHTML = bF0x
        } else {
            this.ck1x = bF0x
        }
        this.iS4W.insertAdjacentElement(lA4E || "beforeEnd", this.ck1x)
    };
    b0x.vn7g = function(T0x, kj4n, lA4E) {
        var d0x = {
            parent: this.iS4W
        };
        this.A0x(T0x, d0x);
        if (!d0x.stopped) {
            this.bac6W(d0x.value || kj4n, lA4E)
        }
    };
    b0x.bai6c = bm0x;
    b0x.TX4b = bm0x;
    b0x.TW4a = bm0x;
    b0x.cjs9j = function() {
        var fQ2x = /^(?:delete|update)$/;
        return function(d0x) {
            var f0x = h0x.U0x(d0x, "d:action");
            if (!f0x) return;
            var X0x = a9j.u0x(f0x, "action");
            if (!fQ2x.test(X0x)) return;
            var C0x = a9j.u0x(f0x, "id");
            if (!C0x) return;
            var r0x = this.P0x.ec2x(C0x);
            if (!r0x) return;
            h0x.bh0x(d0x);
            this.A0x("on" + X0x, {
                data: r0x,
                id: r0x[this.eV2x.pkey],
                body: a9j.w0x(this.bJp4t(C0x))
            })
        }
    }();
    b0x.Ud4h = bm0x;
    b0x.VY5d = function(d0x) {
        var j0x = d0x.data || {},
            e0x = {
                data: j0x,
                key: this.ix3x.key,
                id: j0x[this.eV2x.pkey]
            };
        this.A0x("onbeforedelete", e0x);
        this.P0x.Qn3x(e0x)
    };
    b0x.Uc4g = bm0x;
    b0x.VX5c = function(d0x) {
        var j0x = d0x.data || {},
            e0x = {
                data: j0x,
                key: this.ix3x.key
            };
        this.A0x("onbeforeupdate", e0x);
        this.P0x.Wb5g(e0x)
    };
    b0x.bKk4o = function(d0x) {
        this.Ny2x(d0x, "onafterupdate");
        if (d0x.stopped) return;
        var C0x = d0x.data[this.eV2x.pkey];
        if ( !! this.fC2x) {
            var r0x = a9j.bFO3x(C0x);
            if ( !! r0x) r0x.gC2x(d0x.data)
        } else {
            var f0x = a9j.w0x(C0x + "" + a9j.FP0x());
            if (!f0x) return;
            var i0x = this.P0x.gK2x(d0x.key),
                s0x = k0x.cT1x(i0x, d0x.data);
            if (s0x < 0) return;
            this.eV2x.list = i0x;
            this.eV2x.beg = s0x;
            this.eV2x.end = s0x;
            this.eV2x.act = "update";
            var dy2x = a9j.bQ0x(this.HY0x, this.eV2x);
            f0x.insertAdjacentHTML("afterEnd", dy2x);
            a9j.cF1x(f0x)
        }
    };
    b0x.Ny2x = function(d0x, T0x) {
        var r0x = d0x.data;
        if (!r0x || r0x[this.eV2x.pkey] == null) {
            this.A0x("onerror", d0x);
            d0x.stopped = !0
        }
        if (!d0x.stopped) {
            this.A0x(T0x, d0x)
        }
    };
    b0x.bab6V = bm0x;
    b0x.baa6U = bm0x;
    b0x.bau7n = function(d0x) {
        if (d0x.key != this.ix3x.key) return;
        switch (d0x.action) {
            case "add":
                this.Ud4h(d0x);
                break;
            case "delete":
                this.Uc4g(d0x);
                break;
            case "update":
                this.bKk4o(d0x);
                break;
            case "refresh":
                this.gC2x();
                break;
            case "unshift":
                this.baa6U(d0x.offset, d0x.limit);
                break;
            case "append":
                this.bab6V(d0x.offset, d0x.limit);
                break
        }
    };
    b0x.ot5y = function(r0x) {
        this.VX5c({
            data: r0x
        })
    };
    b0x.lf4j = function(r0x) {
        this.VY5d({
            data: r0x
        })
    };
    b0x.rr6l = function(r0x) {
        this.P0x.iP4T({
            data: r0x,
            key: this.ix3x.key
        })
    };
    b0x.rq6k = function() {
        return this.P0x
    };
    b0x.bqf0x = function(j0x) {
        this.bLI4M("afterBegin", this.bLC4G(j0x));
        return this.bLE4I(j0x)
    };
    b0x.cjo9f = function(j0x) {
        this.bLI4M("beforeEnd", this.bLC4G(j0x));
        return this.bLE4I(j0x)
    };
    b0x.gC2x = function() {
        this.MG2x();
        this.bam6g()
    };
    b0x.csm1x = function() {
        this.P0x.tv7o(this.ix3x.key);
        this.gC2x()
    };
    b0x.bgR8J = function() {
        if ( !! this.Ue4i) return;
        this.Ue4i = !0;
        this.vn7g("onbeforepullrefresh", "列表刷新中...", "afterBegin");
        this.P0x.bgR8J({
            key: this.ix3x.key,
            data: this.ix3x.data
        })
    };
    b0x.jx4B = function() {
        return this.P0x.jx4B(this.ix3x.key)
    };
    b0x.bqi0x = function() {
        return this.ii3x
    };
    b0x.Wg5l = function() {
        return this.P0x.Wg5l(this.ix3x.key)
    };
    b0x.cjj9a = function() {
        return this.fC2x
    }
})();
(function() {
    var c0x = NEJ.P,
        Y0x = NEJ.O,
        fb2x = NEJ.R,
        k0x = c0x("nej.u"),
        a9j = c0x("nej.e"),
        M0x = c0x("nej.ut"),
        b0x, K0x;
    if ( !! M0x.ic3x) return;
    M0x.ic3x = NEJ.C();
    b0x = M0x.ic3x.O0x(M0x.Uf4j);
    K0x = M0x.ic3x.ch1x;
    b0x.ya8S = function(bj0x, bo0x) {
        return K0x.ya8S.call(this, this.vq7j, bj0x, this.pG5L, bo0x)
    };
    b0x.ZZ6T = function(s0x) {
        var bj0x = 0;
        if (s0x > 1) bj0x = this.vq7j + (s0x - 2) * this.pG5L;
        return bj0x
    };
    b0x.xY8Q = function(d0x) {
        K0x.xY8Q.apply(this, arguments);
        if (!d0x.stopped) {
            this.bKR4V(this.ZZ6T(d0x.index))
        }
    };
    b0x.Nl2x = function() {
        this.MG2x();
        this.vn7g("onbeforelistload", "列表加载中...")
    };
    b0x.TZ4d = function() {
        K0x.TZ4d.apply(this, arguments);
        this.MG2x()
    };
    b0x.bah6b = function(i0x, bj0x, fS2x) {
        var bt0x = this.ya8S(bj0x, i0x.length);
        if (this.bLA4E(bt0x.index, bt0x.total)) return !0;
        this.bap7i(bt0x.total > 1 ? "" : "none")
    };
    b0x.bai6c = function() {
        this.vn7g("onemptylist", "没有列表数据！")
    };
    b0x.bac6W = function(bF0x, lA4E) {
        if (!lA4E && k0x.fj2x(bF0x)) {
            this.iS4W.innerHTML = bF0x;
            return
        }
        K0x.bac6W.apply(this, arguments)
    };
    b0x.TX4b = function(dy2x) {
        this.iS4W.innerHTML = dy2x
    };
    b0x.TW4a = function(hg2x) {
        this.fC2x = hg2x
    };
    b0x.Ud4h = function(d0x) {
        this.Ny2x(d0x, "onafteradd");
        if (!d0x.stopped) this.gC2x()
    };
    b0x.Uc4g = function(d0x) {
        this.Ny2x(d0x, "onafterdelete");
        if (!d0x.stopped) this.gC2x()
    };
    b0x.bab6V = function(bj0x, fS2x) {
        var s0x = 1;
        if ( !! this.ii3x) {
            s0x = this.ii3x.rO6I()
        }
        var iM4Q = this.ZZ6T(s0x),
            gq2x = iM4Q + (s0x > 1 ? this.pG5L : this.vq7j);
        if (bj0x >= gq2x && !! this.ii3x) {
            var bt0x = this.ya8S(0, this.jx4B());
            this.ii3x.bbc7V(bt0x.total);
            this.bap7i(bt0x.total > 1 ? "" : "none")
        } else {
            this.gC2x()
        }
    };
    b0x.baa6U = function(bj0x, fS2x) {
        var s0x = 1;
        if ( !! this.ii3x) {
            s0x = this.ii3x.rO6I()
        }
        var iM4Q = this.ZZ6T(s0x),
            bt0x = this.ya8S(iM4Q, this.jx4B());
        this.xY8Q({
            last: s0x,
            index: bt0x.index
        })
    }
})();
(function() {
    var c0x = NEJ.P,
        Y0x = NEJ.O,
        bm0x = NEJ.F,
        a9j = c0x("nej.e"),
        h0x = c0x("nej.v"),
        H0x = c0x("nej.ut"),
        k0x = c0x("nej.u"),
        l0x = c0x("nm.x"),
        p0x = c0x("nm.d"),
        F0x = c0x("nm.w"),
        fY2x = 40,
        b0x, K0x;
    F0x.TV4Z = NEJ.C();
    b0x = F0x.TV4Z.O0x(H0x.cC1x);
    K0x = F0x.TV4Z.ch1x;
    b0x.cl1x = function() {
        this.cr1x()
    };
    b0x.bk0x = function(e0x) {
        this.bl0x(e0x);
        this.NS2x = e0x.inputer;
        this.ZW6Q = e0x.tipper;
        this.bU1x([
            [this.NS2x, "input", this.fd2x.g0x(this)]
        ])
    };
    b0x.bD0x = function() {
        this.bI0x();
        this.Ib0x(null, null)
    };
    b0x.fd2x = function(d0x) {
        if (d0x && d0x.type == "keyup" && (d0x.keyCode != 8 || d0x.keyCode != 68)) return;
        var T0x = this.NS2x.value,
            csn1x;
        if (l0x.Gv0x(T0x) > fY2x) {
            this.NS2x.value = l0x.zf8X(T0x, fY2x);
            this.Ib0x("歌单名不能超过20个汉字或40个英文字符！", arguments.callee.g0x(this))
        } else if (T0x.indexOf("#") >= 0 || T0x.indexOf("@") >= 0) {
            this.Ib0x("歌单名不能包含字符“@”和“#”！")
        } else {
            this.Ib0x(null, null);
            this.A0x("onchange", {
                value: T0x
            })
        }
    };
    b0x.cjh9Y = function() {
        this.fd2x()
    };
    b0x.Ib0x = function() {
        var C0x = 0;
        return function(dV2x, bqy0x) {
            if ( !! C0x) window.clearTimeout(C0x);
            if (!dV2x) {
                a9j.y0x(this.ZW6Q, "f-vhide");
                this.bqz0x = !1;
                return
            }
            this.ZW6Q.innerHTML = '<i class="u-icn u-icn-25"></i>' + dV2x;
            a9j.x0x(this.ZW6Q, "f-vhide");
            this.bqz0x = !0;
            if (k0x.fV2x(bqy0x)) C0x = window.setTimeout(function() {
                this.Ib0x(null, null);
                bqy0x()
            }.g0x(this), 1e3)
        }
    }();
    b0x.bqD0x = function() {
        if (this.bqz0x) return !1;
        if (l0x.iT4X(this.NS2x.value)) {
            this.Ib0x("歌单名不能为空");
            return !1
        }
        return !0
    };
    b0x.fr2x = function() {
        return this.NS2x.value
    }
})();
(function() {
    var c0x = NEJ.P,
        Y0x = NEJ.O,
        h0x = c0x("nej.v"),
        a9j = c0x("nej.e"),
        v0x = c0x("nej.j"),
        m0x = c0x("nm.l"),
        F0x = c0x("nm.w"),
        bG0x = c0x("nej.ui"),
        p0x = c0x("nm.d"),
        l0x = c0x("nm.x"),
        b0x, K0x;
    m0x.TU4Y = NEJ.C();
    b0x = m0x.TU4Y.O0x(m0x.dT2x);
    K0x = m0x.TU4Y.ch1x;
    b0x.cl1x = function() {
        this.cr1x()
    };
    b0x.bR0x = function() {
        this.cb1x();
        var i0x = a9j.I0x(this.o0x, "j-flag");
        this.TT4X = {
            inputer: i0x[0],
            tipper: i0x[1]
        };
        this.gN2x = {
            onerror: this.bqM0x.g0x(this),
            onitemadd: this.bqM0x.g0x(this)
        };
        this.oM5R = i0x[2];
        h0x.q0x(i0x[2], "click", this.Cv9m.g0x(this));
        h0x.q0x(i0x[3], "click", this.zY8Q.g0x(this));
        h0x.q0x(this.o0x, "keypress", this.bqT0x.g0x(this))
    };
    b0x.bX1x = function() {
        this.bY1x = "m-wgt-create"
    };
    b0x.bk0x = function(e0x) {
        e0x.clazz = " m-layer-w2";
        e0x.parent = e0x.parent || document.body;
        e0x.title = "新建歌单";
        e0x.draggable = !0;
        e0x.destroyalbe = !0;
        e0x.mask = true;
        this.bl0x(e0x);
        this.TT4X.inputer.value = e0x.name || "";
        this.sW6Q = F0x.TV4Z.B0x(this.TT4X);
        this.sW6Q.cjh9Y();
        this.P0x = p0x.hd2x.B0x(this.gN2x);
        setTimeout(function() {
            this.TT4X.inputer.focus()
        }.g0x(this), 0)
    };
    b0x.bD0x = function() {
        this.bI0x();
        if (this.sW6Q) {
            this.sW6Q.S0x();
            delete this.sW6Q
        }
        this.rK6E(!1);
        this.TT4X.inputer.value = ""
    };
    b0x.rK6E = function(On3x) {
        this.nB5G = On3x;
        if (On3x) {
            this.oM5R.innerHTML = "<i>新建中...</i>";
            a9j.y0x(this.oM5R, "u-btn2-dis")
        } else {
            this.oM5R.innerHTML = "<i>新 建</i>";
            a9j.x0x(this.oM5R, "u-btn2-dis")
        }
    };
    b0x.Cv9m = function() {
        if (this.nB5G || !this.sW6Q.bqD0x()) return;
        var cn1x = {
            key: "playlist_new-" + GUser.userId,
            data: {
                name: this.sW6Q.fr2x()
            },
            offset: 1
        };
        this.P0x.iP4T(cn1x);
        this.rK6E(!0)
    };
    b0x.bqM0x = function(d0x) {
        var ct1x = (d0x.result || Y0x).code;
        if (!ct1x) {
            this.A0x("onsuccess", d0x.data)
        } else {
            this.A0x("onerror", d0x)
        }
        this.bq0x()
    };
    b0x.zY8Q = function() {
        this.bq0x()
    };
    b0x.bqT0x = function(d0x) {
        if (d0x.keyCode == 13) this.Cv9m()
    }
})();
(function() {
    var c0x = NEJ.P,
        Y0x = NEJ.O,
        bm0x = NEJ.F,
        a9j = c0x("nej.e"),
        h0x = c0x("nej.v"),
        k0x = c0x("nej.u"),
        H0x = c0x("nej.ut"),
        v0x = c0x("nej.j"),
        l0x = c0x("nm.x"),
        p0x = c0x("nm.d"),
        m0x = c0x("nm.l"),
        b0x, K0x;
    m0x.ZP6J = NEJ.C();
    b0x = m0x.ZP6J.O0x(m0x.dT2x);
    K0x = m0x.ZP6J.ch1x;
    b0x.cl1x = function() {
        this.cr1x()
    };
    b0x.bR0x = function() {
        this.cb1x();
        var i0x = a9j.I0x(this.o0x, "j-flag");
        this.hK3x = {
            limit: 301,
            parent: i0x[1],
            cache: {
                klass: p0x.hd2x,
                lkey: "playlist_new-" + GUser.userId,
                onlisterror: this.ZN6H.g0x(this)
            },
            item: {
                klass: "m-wgt-subscribe-item",
                cutStr: l0x.Bc9T,
                escape: k0x.dK2x
            }
        };
        this.gN2x = {
            onsuccess: this.TQ4U.g0x(this),
            onerror: this.eE2x.g0x(this)
        };
        h0x.q0x(i0x[0], "click", this.Cv9m.g0x(this));
        h0x.q0x(i0x[1], "click", this.lD4H.g0x(this))
    };
    b0x.bX1x = function() {
        this.bY1x = "m-wgt-subscribe"
    };
    b0x.bk0x = function(e0x) {
        e0x.parent = e0x.parent || document.body;
        e0x.clazz = " m-layer-w2";
        e0x.title = "添加到歌单";
        e0x.draggable = !0;
        e0x.mask = !0;
        this.bl0x(e0x);
        this.TP4T = (e0x.tracks || []).reverse();
        this.hK3x.item.size = this.TP4T.length;
        this.gN2x.name = e0x.name || "";
        this.brs0x = p0x.uF7y.B0x({
            onaddsuccess: this.xT8L.g0x(this)
        });
        this.rC6w = p0x.hd2x.B0x({
            onlistload: this.cje9V.g0x(this)
        });
        this.rC6w.bsP1x();
        k0x.be0x(this.TP4T, function(r0x, s0x, i0x) {
            if (!k0x.ke4i(r0x)) {
                i0x[s0x] = this.brs0x.ec2x(r0x) || r0x
            }
        }, this)
    };
    b0x.cje9V = function() {
        if (this.do1x) this.do1x.S0x();
        this.do1x = H0x.ic3x.B0x(this.hK3x)
    };
    b0x.Cv9m = function() {
        this.bq0x();
        if (this.Cb9S) this.Cb9S.S0x();
        this.Cb9S = m0x.TU4Y.B0x(this.gN2x);
        this.Cb9S.N0x()
    };
    b0x.lD4H = function() {
        var cjd9U = function(f0x) {
            while (f0x && f0x != document) {
                if (f0x.tagName.toLowerCase() == "li") {
                    return f0x
                }
                f0x = f0x.parentNode
            }
        };
        return function(d0x) {
            h0x.cf1x(d0x);
            var G0x = h0x.U0x(d0x),
                ZH6B = cjd9U(G0x);
            if ( !! ZH6B && !a9j.bz0x(ZH6B, "dis")) {
                this.TQ4U({
                    id: a9j.u0x(ZH6B, "id")
                })
            }
        }
    }();
    b0x.TQ4U = function(d0x) {
        var C0x = d0x.id;
        if (!C0x || !this.TP4T.length) return;
        this.brs0x.iP4T({
            key: "track_playlist-" + C0x,
            data: {
                tracks: this.TP4T,
                pid: C0x
            }
        });
        this.bq0x()
    };
    b0x.xT8L = function() {
        this.A0x("onsuccess");
        m0x.Z0x.N0x({
            tip: "收藏成功"
        })
    };
    b0x.eE2x = function(d0x) {
        this.bq0x();
        this.A0x("onerror", d0x);
        var cx1x = "收藏失败";
        switch (d0x.code) {
            case 405:
                cx1x = "操作过于频繁，先休息一下再试吧";
                break;
            case 507:
                cx1x = "歌单数量超过限制";
                break;
            case 502:
                cx1x = "歌曲已经存在"
        }
        m0x.Z0x.N0x({
            tip: cx1x,
            type: 2
        })
    };
    b0x.ZN6H = function() {
        this.bq0x();
        m0x.Z0x.N0x({
            tip: "列表下载失败，请稍后再试",
            type: 2
        })
    };
    l0x.ls4w = function(e0x) {
        if (!GUser || !GUser.userId || GUser.userId <= 0) {
            top.login();
            return
        }
        m0x.ZP6J.N0x(e0x)
    }
})();
(function() {
    var c0x = NEJ.P,
        Y0x = NEJ.O,
        bm0x = NEJ.F,
        cG1x = c0x("nej.p"),
        a9j = c0x("nej.e"),
        h0x = c0x("nej.v"),
        v0x = c0x("nej.j"),
        k0x = c0x("nej.u"),
        l0x = c0x("nm.x");
    var ZG6A, nA5F, V0x = decodeURIComponent(location.href),
        iN4R = /.+(http:\/\/.+\/proxy.html)/.test(V0x) ? RegExp.$1 : "";
    if ( !! iN4R) {
        v0x.vf7Y("mail_proxy_url", iN4R)
    } else {
        iN4R = v0x.tl7e("mail_proxy_url") || "about:blank"
    }
    ZG6A = a9j.YB5G({
        src: iN4R,
        onload: function() {
            nA5F = true
        }
    });
    var brG0x = function() {
        v0x.gE2x("USER_TRIGGER", {
            value: true,
            expire: 1 / (24 * 60),
            path: "/"
        })
    };
    var cjc9T = function() {
        if (cG1x.cP1x.browser == "ie" && parseInt(cG1x.cP1x.version) < 9) {
            l0x.fc2x({
                clazz: "m-layer-w2",
                message: "当前浏览器版本过低，暂时无法使用，请升级后再试。"
            });
            return false
        }
        return true
    };
    l0x.ZF6z = function(t0x, C0x, X0x) {
        if (!cjc9T()) return;
        brG0x();
        if (X0x == "stop") {
            if (!nA5F) throw "proxy not loaded";
            brG0x();
            ZG6A.contentWindow.location.replace(iN4R + "#" + k0x.dh1x({
                    to: "ifrmMusic",
                    message: JSON.stringify({
                        s: +(new Date),
                        action: "stop"
                    })
                }))
        } else {
            ZG6A.contentWindow.location.replace(iN4R + "#" + k0x.dh1x({
                    to: "ifrmMusic",
                    message: JSON.stringify({
                        type: t0x,
                        id: C0x,
                        s: +(new Date),
                        action: X0x
                    })
                }))
        }
    }
})();
(function() {
    var c0x = NEJ.P,
        Y0x = NEJ.O,
        bm0x = NEJ.F,
        a9j = c0x("nej.e"),
        h0x = c0x("nej.v"),
        v0x = c0x("nej.j"),
        k0x = c0x("nej.u"),
        l0x = c0x("nm.x"),
        m0x = c0x("nm.l"),
        p0x = c0x("nm.d");
    var ks4w = p0x.hJ3x.B0x();
    var nK5P = p0x.uF7y.B0x({
        onlistload: cjb9S,
        onitemload: cja9R,
        onerror: eE2x
    });
    var BG9x = p0x.pi5n.B0x({
        onlistload: ciZ9Q,
        onitemload: ciX9O,
        onerror: eE2x
    });
    var bsh1x = {};

    function ug7Z(d0x) {
        var f0x = h0x.U0x(d0x, "d:resAction"),
            X0x = a9j.u0x(f0x, "resAction");
        if (f0x && (X0x == "play" || X0x == "addto")) {
            bsj1x({
                action: X0x,
                type: parseInt(a9j.u0x(f0x, "resType")),
                id: a9j.u0x(f0x, "resId"),
                from: a9j.u0x(f0x, "resFrom"),
                data: a9j.u0x(f0x, "resData"),
                order: a9j.u0x(f0x, "resOrder")
            });
            ciW9N(f0x)
        }
    }
    function bsj1x(bN0x) {
        var X0x = bN0x.action,
            t0x = bN0x.type,
            C0x = bN0x.id,
            dG2x = bN0x.from,
            j0x = bN0x.data,
            sm6g = bN0x.order,
            e0x = {
                limit: 1e3,
                offset: 0,
                data: {
                    id: C0x
                },
                ext: {
                    id: C0x,
                    action: X0x,
                    type: t0x,
                    from: dG2x,
                    data: j0x
                }
            };
        if (X0x != "play" && X0x != "addto" || !t0x) return;
        if (window.GRef && GRef == "mail") {
            l0x.ZF6z(t0x, C0x, X0x);
            return
        }
        switch (t0x) {
            case 13:
                e0x.key = "track_playlist-" + C0x;
                nK5P.nv5A(e0x);
                if (X0x == "play") {
                    v0x.br0x("/api/playlist/update/playcount", {
                        query: {
                            id: C0x
                        }
                    })
                }
                break;
            case 17:
                e0x.key = "program";
                e0x.id = C0x;
                BG9x.Wd5i(e0x);
                if (X0x == "play") {
                    v0x.br0x("/api/dj/program/listen", {
                        query: {
                            id: C0x
                        }
                    })
                }
                break;
            case 18:
                e0x.key = "track";
                e0x.id = C0x;
                nK5P.Wd5i(e0x);
                break;
            case 19:
                e0x.key = "track_album-" + C0x;
                nK5P.nv5A(e0x);
                break;
            case 24:
                e0x.key = "track_day";
                nK5P.nv5A(e0x);
                break;
            case 2:
                e0x.key = "track_artist_top-" + C0x;
                nK5P.nv5A(e0x);
                break;
            case 70:
                e0x.key = "program_djradio-" + C0x + "-" + sm6g;
                e0x.data.radioId = C0x;
                e0x.data.asc = sm6g == 2;
                BG9x.nv5A(e0x);
                break
        }
    }
    function bsn1x(i0x) {
        var n0x = [];
        k0x.be0x(i0x, function(r0x) {
            if (r0x.mainSong) {
                r0x.mainSong.program = r0x;
                n0x.push(r0x.mainSong);
                r0x.localupdatetime = +(new Date);
                nK5P.cpg1x(r0x.mainSong);
                r0x.mainTrackId = r0x.mainSong.id;
                delete r0x.mainSong
            } else {
                var bsp1x = nK5P.ec2x(r0x.mainTrackId);
                bsp1x && n0x.push(bsp1x)
            }
        });
        return n0x
    }
    function TO4S(i0x, e0x) {
        var qD6x = e0x.action == "play" && e0x.type != 17 && e0x.type != 18,
            eT2x = e0x.action == "play";
        if (!i0x.length) return;
        if (e0x.type == 19) {
            i0x = l0x.EX0x(i0x, true, {
                play: true
            }, {
                source: "album",
                sourceid: e0x.id
            })
        } else {
            i0x = l0x.EX0x(i0x, true, {
                play: true
            })
        }
        k0x.be0x(i0x, function(r0x) {
            r0x.source = l0x.beR8J({
                fid: e0x.from,
                fdata: e0x.data,
                type: e0x.type,
                rid: e0x.id
            }, r0x.id)
        });
        top.player.addTo(i0x, qD6x, eT2x);
        ks4w.JQ1x({
            rid: e0x.id,
            type: e0x.type,
            hash: l0x.FL0x(),
            play: eT2x,
            source: e0x.from,
            sourceid: e0x.data
        })
    }
    function cjb9S(d0x) {
        var i0x = nK5P.gK2x(d0x.key);
        TO4S(i0x, d0x.ext)
    }
    function cja9R(d0x) {
        var i0x = [nK5P.ec2x(d0x.id)],
            bf0x = i0x[0],
            oF5K = l0x.nU5Z(bf0x),
            ra6U = bf0x.privilege || {};
        if (oF5K == 10) {
            l0x.tE7x(ra6U.fee || bf0x.fee, bf0x.id, "song", null, ra6U)
        } else if (oF5K == 100) {
            l0x.hQ3x(null, null, null, true, bf0x)
        } else if (oF5K == 11) {
            l0x.bIS4W(bf0x.id, 18)
        } else {
            TO4S(i0x, d0x.ext)
        }
    }
    function ciZ9Q(d0x) {
        var i0x = bsn1x(BG9x.gK2x(d0x.key));
        TO4S(i0x, d0x.ext)
    }
    function ciX9O(d0x) {
        var i0x = bsn1x([BG9x.ec2x(d0x.id)]);
        TO4S(i0x, d0x.ext)
    }
    function eE2x() {
        top.player.tipPlay("无法播放，音乐已下线")
    }
    function ciW9N(f0x) {
        var t0x = a9j.u0x(f0x, "resType"),
            C0x = a9j.u0x(f0x, "resId"),
            J0x = t0x + "-" + C0x;
        if (bsh1x[J0x]) return;
        var bsB1x = a9j.w0x("play-count"),
            ZC6w = a9j.I0x(f0x.parentNode, "nb"),
            OP3x = null;
        if (bsB1x) {
            OP3x = bsB1x
        } else {
            OP3x = !! ZC6w && !! ZC6w[0] ? ZC6w[0] : null
        }
        if (OP3x) {
            var cg1x = OP3x.innerHTML;
            if (/^\d+$/.test(cg1x)) {
                OP3x.innerText = +cg1x + 1
            }
            bsh1x[J0x] = true
        }
    }
    l0x.ciV9M = function(f0x) {
        h0x.q0x(f0x || document.body, "click", ug7Z.g0x(this))
    };
    l0x.ciU9L = function(X0x, t0x, C0x) {
        bsj1x({
            action: X0x,
            type: t0x,
            id: C0x
        })
    }
})();
(function() {
    var c0x = NEJ.P,
        Y0x = NEJ.O,
        bm0x = NEJ.F,
        h0x = c0x("nej.v"),
        k0x = c0x("nej.u"),
        v0x = c0x("nej.j"),
        H0x = c0x("nej.ut"),
        p0x = c0x("nm.d"),
        b0x, K0x;
    p0x.eM2x({
        "share-all": {
            url: "/api/share/friends/resource",
            format: function(n0x, e0x) {
                this.ciT9K(n0x, e0x)
            },
            onerror: "onshareerror"
        },
        "share-sns": {
            url: "/api/share/resource/sns",
            format: function(n0x, e0x) {
                this.A0x("onshareall", e0x.result)
            },
            onerror: function(n0x, e0x) {
                this.A0x("onshareall", e0x.result)
            }
        },
        "share-private": {
            url: "/api/msg/private/send",
            onload: "onshareprivate",
            onerror: "onshareerror"
        },
        share_img_compound: {
            url: "/upload/event/img/compound",
            type: "POST",
            format: function(n0x, e0x) {
                e0x.options.picUrl = n0x.picUrl;
                this.bsO1x(e0x.options, e0x.result)
            },
            onerror: function(n0x, e0x) {
                this.A0x("onshareall", e0x.result)
            }
        },
        "vid-get": {
            url: "/api/video/coversvid/get",
            format: function(R0x, e0x) {
                this.oh5m("vid_info-" + e0x.data.nosKey, R0x);
                return R0x
            }
        }
    });
    p0x.Zx6r = NEJ.C();
    b0x = p0x.Zx6r.O0x(p0x.gT2x);
    b0x.ciS9J = function() {
        var th7a = function(R0x, e0x) {
            e0x.times++;
            if (e0x.times > 10) {
                this.A0x("onvinfoerror", e0x.key, R0x)
            } else {
                setTimeout(ex2x.g0x(this, e0x), e0x.times * 1e3)
            }
        };
        var wG7z = function(R0x, e0x) {
            this.A0x("onvinfo", e0x.key, R0x)
        };
        var ex2x = function(e0x) {
            var V0x = e0x.url;
            v0x.br0x(V0x + "?vinfo", {
                method: "GET",
                type: "json",
                mode: 1,
                onload: wG7z.dX2x(this, e0x),
                onerror: th7a.dX2x(this, e0x)
            })
        };
        return function(e0x) {
            e0x.times = 0;
            ex2x.call(this, e0x)
        }
    }();
    b0x.ciQ9H = function() {
        var Pe3x;
        var th7a = function(R0x, e0x) {
            if (R0x.code > 0) {
                clearInterval(this.AQ9H);
                this.A0x("onviderror", e0x.data.nosKey)
            }
        };
        var wG7z = function(J0x, R0x) {
            if (R0x.vid && R0x.covers) {
                clearInterval(this.AQ9H);
                this.A0x("onvid", J0x, R0x)
            }
        };
        var ex2x = function(e0x) {
            if (+(new Date) - Pe3x > 60 * 60 * 1e3) {
                clearInterval(this.AQ9H);
                this.A0x("onviderror", e0x.data.nosKey);
                return
            }
            e0x.onload = wG7z.g0x(this, e0x.data.nosKey);
            e0x.onerror = th7a.g0x(this);
            this.cj1x("vid-get", e0x)
        };
        return function(e0x) {
            if (!e0x || !e0x.data) return;
            Pe3x = +(new Date);
            this.AQ9H = clearInterval(this.AQ9H);
            this.AQ9H = setInterval(ex2x.g0x(this, e0x), 1e4);
            ex2x.apply(this, arguments)
        }
    }();
    b0x.ciP9G = function() {
        this.AQ9H = clearInterval(this.AQ9H)
    };
    b0x.ciT9K = function(n0x, mR5W) {
        if (n0x.event && mR5W.snsTypes) {
            if (mR5W.pics) {
                var btv1x = [];
                for (var i = 0, len = mR5W.pics.length; i < len; i++) {
                    btv1x[i] = mR5W.pics[i].originId
                }
                this.cj1x("share_img_compound", {
                    data: {
                        picIds: btv1x.join(",")
                    },
                    options: mR5W,
                    result: n0x
                })
            } else {
                mR5W.picUrl = mR5W.picUrl;
                this.bsO1x(mR5W, n0x)
            }
        } else {
            this.A0x("onshareall", n0x)
        }
        var CM9D = p0x.hJ3x.B0x();
        CM9D.gA2x(mR5W.isPub ? "pubevent" : "shareevent", {
            id: n0x.id
        })
    };
    b0x.bsO1x = function(mR5W, n0x) {
        var cn1x = {};
        cn1x.eventid = n0x.event.id;
        cn1x.eventtype = n0x.event.type;
        mR5W.picUrl && (cn1x.picUrl = mR5W.picUrl);
        cn1x.snsTypes = mR5W.snsTypes;
        cn1x.msg = mR5W.data.msg || "";
        cn1x.type = mR5W.data.type;
        mR5W.data.id && (cn1x.id = mR5W.data.id);
        this.cj1x("share-sns", {
            data: cn1x,
            result: n0x
        })
    };
    b0x.ciO9F = function(e0x) {
        var j0x = {
            type: "",
            id: 0,
            threadId: "",
            msg: "",
            actId: 0,
            pics: "",
            uuid: "publish-" + +(new Date) + k0x.mT5Y(5)
        };
        j0x = NEJ.EX(j0x, e0x);
        if (!(j0x.id > 0)) {
            delete j0x.id;
            j0x.type = "noresource"
        }
        if (!j0x.threadId) {
            delete j0x.threadId
        }
        if (!j0x.actId) {
            delete j0x.actId
        }
        if (!j0x.pics) {
            delete j0x.pics
        } else {
            j0x.pics = JSON.stringify(j0x.pics)
        }
        this.cj1x("share-all", {
            data: j0x,
            snsTypes: e0x.snsTypes,
            picUrl: e0x.picUrl,
            pics: e0x.pics,
            isPub: e0x.isPub
        })
    };
    b0x.ciN9E = function(e0x) {
        this.cj1x("share-private", e0x)
    };
    b0x.ciM9D = function(e0x) {
        this.cj1x("share-all", e0x)
    }
})();
(function() {
    var c0x = NEJ.P,
        Y0x = NEJ.O,
        bm0x = NEJ.F,
        h0x = c0x("nej.v"),
        k0x = c0x("nej.u"),
        H0x = c0x("nej.ut"),
        p0x = c0x("nm.d"),
        l0x = c0x("nm.x"),
        b0x, K0x;
    var ciK9B = {
        40: !0
    };
    p0x.eM2x({
        "event-list": {
            url: "/api/v1/event/get",
            filter: function(e0x) {
                e0x.data.getcounts = true;
                e0x.data.pagesize = e0x.data.limit;
                if (e0x.data.offset == 0) {
                    e0x.data.lasttime = -1
                }
                delete e0x.data.offset
            },
            format: function(R0x, e0x) {
                R0x.event = l0x.Xk5p(R0x.event, function(r0x, s0x) {
                    return !ciK9B[r0x.type]
                });
                this.ciJ9A(R0x.event);
                e0x.data.lasttime = R0x.lasttime;
                if (R0x.event.length) {
                    R0x.event.length = e0x.limit
                }
                return {
                    list: R0x.event,
                    total: R0x.size
                }
            }
        },
        "event_latest-list": {
            url: "/api/act/event/getnews",
            format: function(R0x, e0x) {
                return {
                    list: R0x.events,
                    total: R0x.count
                }
            }
        },
        "event-pull": {
            url: "/api/event/getnews",
            filter: function(e0x) {
                e0x.data.pagesize = 20
            },
            format: function(R0x, e0x) {
                return R0x.event
            }
        },
        "ievent-get": {
            type: "GET",
            url: "/api/event/get",
            onload: "oneventload",
            onerror: "oneventloaderror"
        },
        "ievent-new-get": {
            type: "GET",
            url: "/api/event/getnews",
            onload: "oneventnewload"
        },
        "ievent_user-list": {
            type: "GET",
            url: "/api/event/get/{userId}",
            filter: function(e0x) {
                e0x.data.time = -1;
                e0x.data.getcounts = true
            },
            format: function(R0x, e0x) {
                R0x.events.length = e0x.limit;
                return {
                    list: R0x.events,
                    total: R0x.size
                }
            }
        },
        "ievent-res-get": {
            url: "/api/res/status",
            format: function(n0x, e0x) {
                n0x.conf = e0x.conf;
                return n0x
            }
        },
        "ievent-like": {
            url: "/api/resource/like",
            onload: "oneventlike",
            filter: function(e0x, bd0x) {
                if (e0x.like) {
                    if (e0x.comment) {
                        bd0x.url = "/api/v1/comment/like"
                    } else {
                        bd0x.url = "/api/resource/like"
                    }
                    bd0x.onload = "oneventlike";
                    bd0x.onerror = "oneventlikeerr"
                } else {
                    if (e0x.comment) {
                        bd0x.url = "/api/v1/comment/unlike"
                    } else {
                        bd0x.url = "/api/resource/unlike"
                    }
                    bd0x.onload = "oneventunlike";
                    bd0x.onerror = "oneventunlikeerr"
                }
            },
            format: function(n0x, e0x) {
                n0x.eid = e0x.eid;
                n0x.origin = e0x.origin;
                n0x.ext = e0x.ext;
                return n0x
            }
        },
        "ievent_user-del": {
            url: "/api/event/delete",
            format: function(n0x, e0x) {
                n0x.id = e0x.data.id;
                return n0x
            }
        },
        "event-del": {
            url: "/api/event/delete",
            filter: function(e0x, bd0x) {
                if (e0x.data.type == "nointer") {
                    bd0x.url = "/api/event/rcmd/reject"
                } else {
                    bd0x.url = "/api/event/delete"
                }
            },
            format: function(n0x, e0x) {
                n0x.id = e0x.data.id;
                return n0x
            }
        },
        "event_activity-del": {
            url: "/api/event/delete",
            format: function(n0x, e0x) {
                n0x.id = e0x.data.id;
                return n0x
            }
        },
        "event_activity-list": {
            url: "/api/act/event",
            filter: function(e0x) {
                e0x.data.lasttime = e0x.data.lasttime || -1;
                e0x.data.pagesize = e0x.data.limit;
                e0x.data.getcounts = true;
                delete e0x.data.offset
            },
            format: function(R0x, e0x) {
                e0x.data.lasttime = R0x.lasttime;
                var i0x = R0x.events;
                if (R0x.more || e0x.offset + e0x.limit < R0x.size) {
                    i0x = this.ciH9y(i0x, e0x.data.pagesize)
                }
                return {
                    list: i0x,
                    total: R0x.size
                }
            },
            onerror: "onlisterror"
        }
    });
    p0x.xM8E = NEJ.C();
    b0x = p0x.xM8E.O0x(p0x.gT2x);
    b0x.cl1x = function() {
        this.cr1x()
    };
    b0x.Zu6o = function(t0x, cy1x) {
        return t0x + "-" + cy1x
    };
    b0x.csq1x = function(e0x) {
        this.cj1x("ievent-get", e0x)
    };
    b0x.csr1x = function(e0x) {
        this.cj1x("ievent-new-get", e0x)
    };
    b0x.css1x = function(e0x) {
        this.cj1x("ievent-user-get", e0x)
    };
    b0x.csu1x = function(t0x, cy1x) {
        return this.qq6k(this.Zu6o(t0x, cy1x))
    };
    b0x.csw1x = function(Iq0x, e0x) {
        if (!Iq0x || !Iq0x.length) return;
        e0x = e0x || {};
        var bv0x = {
            song: 2,
            album: 4,
            playlist: 1,
            mv: 3,
            program: 5
        };
        for (var i = 0, Cf9W = [], buu1x = [], j0x; i < Iq0x.length; ++i) {
            j0x = Iq0x[i];
            j0x = this.qq6k(this.Zu6o(j0x.type, j0x.id));
            if (!j0x) {
                Cf9W.push(Iq0x[i].id);
                buu1x.push(bv0x[Iq0x[i].type] || 0)
            }
        }
        if (!Cf9W.length) {
            this.A0x("oneventresload", e0x.conf);
            return
        }
        e0x.data = {
            ids: JSON.stringify(Cf9W),
            types: JSON.stringify(buu1x)
        };
        e0x.onload = this.ciB9s.g0x(this);
        this.cj1x("ievent-res-get", e0x)
    };
    b0x.ciB9s = function(n0x) {
        if (n0x.code != 200) {
            this.A0x("oneventreserror", n0x.code);
            return
        }
        var bv0x = {
            1: "playlist",
            2: "song",
            3: "mv",
            4: "album",
            5: "program"
        };
        for (var i = 0, i0x = n0x.results; i < i0x.length; ++i) {
            this.oh5m(this.Zu6o(bv0x[i0x[i].type], i0x[i].id), i0x[i])
        }
        this.A0x("oneventresload", n0x.conf)
    };
    b0x.buB1x = function(j0x) {
        var J0x = "event-list";
        this.bhb8T(J0x, j0x);
        this.A0x("onitemadd", {
            key: J0x,
            action: "add",
            data: j0x,
            flag: -1
        })
    };
    b0x.uL7E = function(e0x) {
        this.cj1x("ievent-like", e0x)
    };
    b0x.lf4j = function(e0x) {
        this.cj1x("ievent-delete", e0x)
    };
    b0x.ciH9y = function(i0x, fS2x) {
        for (var i = i0x.length; i < fS2x; i++) i0x.push(null);
        return i0x
    };
    b0x.ciJ9A = function(i0x) {
        var n0x = [];
        if (!i0x || !i0x.length) return;
        k0x.be0x(i0x, function(d0x) {
            d0x.biData = this.buI1x(d0x)
        }, this)
    };
    b0x.buI1x = function() {
        var bcA7t = {
                32: "comment",
                33: "activity",
                34: "recomment_artist"
            },
            ciA9r = [13, 17, 18, 19, 20, 21, 22, 28, 31];
        return function(d0x) {
            var R0x = {
                id: d0x.id,
                sourceid: d0x.user.userId,
                alg: d0x.rcmdInfo ? d0x.rcmdInfo.alg : null,
                contentType: bcA7t[d0x.type] || (k0x.cT1x(ciA9r, d0x.type) != -1 ? "user_event" : "other")
            };
            return R0x
        }
    }();
    b0x.Cz9q = function(ciz9q, d0x) {
        var R0x = this.buI1x(d0x);
        R0x.actionType = ciz9q;
        if (window.log) log("eventclick", R0x)
    };
    b0x.csy1x = function(e0x) {
        this.cj1x("event_latest-list", e0x)
    }
})();
(function() {
    var c0x = NEJ.P,
        Y0x = NEJ.O,
        bm0x = NEJ.F,
        a9j = c0x("nej.e"),
        h0x = c0x("nej.v"),
        k0x = c0x("nej.u"),
        v0x = c0x("nej.j"),
        bG0x = c0x("nej.ui"),
        l0x = c0x("nm.x"),
        L0x = c0x("nm.w"),
        b0x, K0x;
    L0x.TM4Q = NEJ.C();
    b0x = L0x.TM4Q.O0x(bG0x.eo2x);
    K0x = L0x.TM4Q.ch1x;
    b0x.bk0x = function(e0x) {
        this.bl0x(e0x);
        var gD2x = e0x.box || Y0x;
        a9j.fH2x(this.o0x, {
            position: "absolute",
            width: gD2x.width + "px",
            height: gD2x.height + "px",
            top: gD2x.top + "px",
            left: gD2x.left + "px"
        });
        window.uploader = this
    };
    b0x.bD0x = function() {
        this.bI0x()
    };
    b0x.lD4H = function(d0x) {
        this.A0x("onselect", d0x);
        console.log("select", d0x)
    };
    b0x.rQ6K = function(d0x) {
        this.A0x("onprogress", d0x);
        console.log("progress", d0x)
    };
    b0x.tt7m = function(d0x) {
        if (d0x.code == 200) {
            this.A0x("oncomplete", d0x)
        } else {
            this.eE2x(d0x)
        }
        console.log("complete", d0x)
    };
    b0x.eE2x = function(d0x) {
        this.A0x("onerror", d0x);
        console.log("error", d0x)
    };
    b0x.gd2x = bm0x;
    b0x.cix9o = bm0x
})();
(function() {
    var c0x = NEJ.P,
        Y0x = NEJ.O,
        a9j = c0x("nej.e"),
        h0x = c0x("nej.v"),
        k0x = c0x("nej.u"),
        v0x = c0x("nej.j"),
        bG0x = c0x("nej.ui"),
        l0x = c0x("nm.x"),
        L0x = c0x("nm.w"),
        hS3x = c0x("cb"),
        b0x, K0x;
    L0x.Zr6l = NEJ.C();
    b0x = L0x.Zr6l.O0x(L0x.TM4Q);
    K0x = L0x.Zr6l.ch1x;
    b0x.cl1x = function() {
        this.cr1x()
    };
    b0x.bk0x = function(e0x) {
        this.bl0x(e0x);
        var J0x = k0x.mT5Y(8),
            jc4g = "onselect" + J0x,
            je4i = "onprogress" + J0x,
            bvn1x = "oncomplete" + J0x,
            bP0x = "onerror" + J0x;
        hS3x[jc4g] = this.lD4H.g0x(this);
        hS3x[je4i] = this.rQ6K.g0x(this);
        hS3x[bvn1x] = this.tt7m.g0x(this);
        hS3x[bP0x] = this.eE2x.g0x(this);
        var ciw9n = "/style/swf/MusicUpload.swf?v=20150202",
            bv0x = {
                music: "音频(*.mp3,*.m4a,*.x-m4a)",
                image: "*.jpg;*.jpeg;*.png;*.gif;"
            },
            mF5K = {
                url: e0x.api,
                token: e0x.token,
                filter: bv0x[e0x.accept] || e0x.accept || e0x.flashAccept || "",
                multiple: e0x.multiple,
                error: "cb." + bP0x,
                select: "cb." + jc4g,
                progress: "cb." + je4i,
                complete: "cb." + bvn1x
            };
        this.nV5a = a9j.pS5X({
            src: ciw9n,
            hidden: false,
            parent: this.o0x,
            onready: this.xH8z.g0x(this),
            width: e0x.box.width,
            height: e0x.box.height,
            params: {
                flashvars: k0x.xa8S(mF5K, "&", false),
                allowscriptaccess: "always",
                wmode: "transparent"
            }
        })
    };
    b0x.bD0x = function() {
        this.bI0x();
        this.o0x.innerHTML = ""
    };
    b0x.xH8z = function(gV2x) {
        this.nV5a = gV2x
    };
    b0x.gd2x = function(ik3x) {
        this.nV5a.upload(ik3x)
    };
    b0x.cix9o = function() {
        this.nV5a.cancle()
    };
    b0x.qb6V = function(Az8r) {
        this.nV5a.disable(Az8r)
    }
})();
(function() {
    var c0x = NEJ.P,
        Y0x = NEJ.O,
        dO2x = c0x("nej.g"),
        a9j = c0x("nej.e"),
        h0x = c0x("nej.v"),
        k0x = c0x("nej.u"),
        v0x = c0x("nej.j"),
        bG0x = c0x("nej.ui"),
        l0x = c0x("nm.x"),
        L0x = c0x("nm.w"),
        b0x, K0x;
    var hR3x = a9j.rT6N(".#<uispace>{position:absolute;z-index:100;overflow:hidden;cursor:pointer;}.#<uispace> .hfile{position:absolute;top:0;left:0;width:100%;height:100%;cursor:pointer;opacity:0;filter:Alpha(opacity=0);font-size:12px;font-size:16px;*font-size:15px;}");
    var fW2x = a9j.hN3x('<div class="' + hR3x + '"><form><input multiple="multiple" type="file" name="uploadfile" class="hfile" size="70"></form></div>');
    L0x.Zq6k = NEJ.C();
    b0x = L0x.Zq6k.O0x(L0x.TM4Q);
    K0x = L0x.Zq6k.ch1x;
    b0x.bX1x = function() {
        this.kT4X = hR3x;
        this.bY1x = fW2x
    };
    b0x.bR0x = function() {
        this.cb1x();
        var bn0x = a9j.cQ1x(this.o0x);
        this.bx0x = bn0x[0];
        h0x.q0x(this.bx0x.uploadfile, "change", this.pF5K.g0x(this))
    };
    b0x.bk0x = function(e0x) {
        this.bl0x(e0x);
        this.civ9m = e0x.api || "";
        this.TL4P = e0x.multiple;
        this.bx0x.multiple = this.TL4P ? "coverImgUrl" : "";
        this.bx0x.reset();
        this.TK4O = [];
        this.TJ4N = {};
        var bv0x = {
            music: "audio/mp3,audio/x-m4a,audio/m4a",
            image: "image/*"
        };
        if (e0x.accept || e0x.htmlAccept) {
            this.bx0x.uploadfile.accept = bv0x[e0x.accept] || e0x.accept || e0x.htmlAccept
        }
        if (e0x.tipTitle) {
            this.bx0x.uploadfile.title = e0x.tipTitle
        }
    };
    b0x.bD0x = function() {
        this.bI0x();
        this.Zl6f();
        this.bx0x.reset();
        delete this.TK4O;
        delete this.TJ4N;
        this.bx0x.uploadfile.accept = "*"
    };
    b0x.pF5K = function(d0x) {
        var bvP1x = this.bx0x.uploadfile.files,
            bvS1x = [];
        if (!this.TL4P) {
            this.TK4O = [];
            this.TJ4N = {}
        }
        for (var i = 0, ii = bvP1x.length; i < ii; i++) {
            var TI4M = this.ciu9l(bvP1x[i]);
            this.TK4O.push(TI4M);
            this.TJ4N[TI4M.uuid] = TI4M;
            bvS1x.push(TI4M);
            if (!this.TL4P) break
        }
        this.lD4H(bvS1x);
        this.bx0x.reset()
    };
    b0x.Zl6f = function() {
        if (this.bvW1x) {
            this.bvY1x = true;
            v0x.kq4u(this.IG1x);
            this.bvY1x = false;
            delete this.bvW1x;
            delete this.IG1x
        }
    };
    b0x.ciu9l = function(dD2x) {
        return {
            uuid: "file-" + +(new Date) + k0x.mT5Y(5),
            name: dD2x.name,
            size: dD2x.size,
            refernce: dD2x
        }
    };
    b0x.gd2x = function(ik3x) {
        this.Zl6f();
        var dD2x = this.TL4P ? this.TJ4N[ik3x] : this.TK4O[0],
            j0x = new FormData,
            nb5g = {};
        if (dD2x) {
            nb5g[dO2x.wB7u] = dO2x.CC9t;
            j0x.append("fileupload", dD2x.refernce);
            this.bvW1x = dD2x;
            this.IG1x = v0x.br0x(this.civ9m, {
                type: "json",
                method: "post",
                headers: nb5g,
                data: j0x,
                timeout: 0,
                onload: this.xE8w.g0x(this, ik3x),
                onerror: this.xE8w.g0x(this, ik3x),
                onuploading: this.cit9k.g0x(this, ik3x)
            })
        }
    };
    b0x.xE8w = function(ik3x, d0x) {
        d0x.uuid = ik3x;
        if (d0x.code == 200) {
            this.tt7m(d0x)
        } else {
            if (!this.bvY1x) {
                this.eE2x(d0x)
            }
        }
    };
    b0x.cit9k = function(ik3x, d0x) {
        d0x.uuid = ik3x;
        this.rQ6K(d0x)
    };
    b0x.cir9i = function() {
        this.Zl6f()
    };
    b0x.qb6V = function(Az8r) {
        if (Az8r) {
            this.bq0x()
        } else {
            this.N0x()
        }
    }
})();
(function() {
    var c0x = NEJ.P,
        Y0x = NEJ.O,
        L0x = c0x("nm.w"),
        ciq9h = typeof FormData != "undefined";
    L0x.Cj9a = NEJ.C();
    L0x.Cj9a.O0x(ciq9h ? L0x.Zq6k : L0x.Zr6l)
})();
(function() {
    var c0x = NEJ.P,
        a9j = c0x("nej.e"),
        dO2x = c0x("nej.g"),
        h0x = c0x("nej.v"),
        k0x = c0x("nej.u"),
        gu2x = c0x("nej.n"),
        H0x = c0x("nej.ut"),
        bc0x = c0x("nej.ui"),
        F0x = c0x("nm.w"),
        m0x = c0x("nm.l"),
        p0x = c0x("nm.d"),
        l0x = c0x("nm.x"),
        L0x = c0x("nm.x.f"),
        b0x, K0x, Zi6c = {
            0: "",
            "-1": "不能添加重复图片",
            "-10": "最多只能添加9张",
            "-3": "请选择不超过5M的图片"
        },
        Zh6b = 5 * 1024 * 1024,
        csA1x = 80,
        cio9f = /\.(bmp|jpg|jpeg|png|gif)$/i;
    F0x.bwy1x = NEJ.C();
    b0x = F0x.bwy1x.O0x(H0x.vO7H);
    b0x.biM9D = function() {
        return {
            x: this.zW8O.clientWidth - this.o0x.offsetWidth,
            y: this.zW8O.clientHeight - this.o0x.offsetHeight
        }
    };
    F0x.Zg6a = NEJ.C();
    b0x = F0x.Zg6a.O0x(bc0x.eo2x);
    b0x.bX1x = function() {
        this.bY1x = "m-xwgt-share-upload"
    };
    b0x.bR0x = function() {
        this.cb1x();
        var i0x = a9j.I0x(this.o0x, "j-flag");
        this.TF4J = i0x.shift();
        this.Bh9Y = i0x.shift();
        this.IU1x = i0x.shift();
        this.cin9e = {
            onselect: this.bwG1x.dX2x(this, 0),
            onerror: this.eE2x.g0x(this),
            oncomplete: this.tt7m.g0x(this),
            multiple: true,
            parent: this.Bh9Y,
            api: "/upload/event/img",
            htmlAccept: "image/bmp,image/jpg,image/jpeg,image/png,image/gif",
            flashAccept: "图片(*.bmp;*.jpg;*.jpeg;*.png;*.gif;)",
            box: {
                width: 60,
                height: 60,
                top: 0,
                left: 0
            },
            tipTitle: "上传图片"
        };
        this.bwK1x = {
            onselect: this.bwG1x.dX2x(this, 1),
            onerror: this.eE2x.g0x(this),
            oncomplete: this.tt7m.g0x(this),
            multiple: true,
            parent: this.Bh9Y,
            api: "/upload/event/img",
            htmlAccept: "image/bmp,image/jpg,image/jpeg,image/png,image/gif",
            flashAccept: "图片(*.bmp;*.jpg;*.jpeg;*.png;*.gif;)",
            box: {
                width: 20,
                height: 20,
                top: 0,
                left: 0
            },
            tipTitle: "上传图片"
        };
        this.cim9d = F0x.Cj9a.B0x(this.cin9e)
    };
    b0x.bD0x = function() {
        h0x.ip3x(this.rm6g, "click");
        if ( !! this.fg2x) {
            for (var i = this.fg2x.length - 1; i >= 0; i--) {
                a9j.cF1x(this.fg2x[i].element, false);
                if (this.fg2x[i].dragger) this.fg2x[i].dragger.S0x()
            }
        }
        this.fg2x = [];
        this.TE4I = {};
        if (this.xF8x) {
            clearTimeout(this.xF8x)
        }
        this.xF8x = 0;
        this.IF1x && this.IF1x.S0x();
        delete this.IF1x;
        this.bI0x()
    };
    b0x.bwG1x = function(i0x, s0x) {
        if (!i0x) return;
        for (var i = 0, len = i0x.length; i < len; i++) {
            if (!cio9f.test(i0x[i].name)) {
                this.bpr0x({
                    path: i0x[i].name,
                    index: s0x,
                    uuid: i0x[i].uuid,
                    status: -4,
                    fail: "这不是<br>图片"
                })
            } else if (i0x[i].size > Zh6b) {
                this.bpq0x(-3);
                this.bpr0x({
                    path: i0x[i].name,
                    index: s0x,
                    uuid: i0x[i].uuid,
                    status: -3,
                    fail: "上传<br>失败"
                })
            } else {
                this.bpr0x({
                    path: i0x[i].name,
                    index: s0x,
                    uuid: i0x[i].uuid,
                    status: 0
                })
            }
        }
    };
    b0x.eE2x = function(d0x) {
        var dD2x = this.TE4I[d0x.uuid];
        dD2x.status = -4;
        dD2x.fail = "上传<br>失败";
        this.bxf1x(dD2x);
        this.xG8y()
    };
    b0x.tt7m = function(d0x) {
        var dD2x = this.TE4I[d0x.uuid];
        dD2x.status = 2;
        var bt0x = NEJ.X({}, d0x.picInfo);
        bt0x.originId = bt0x.originIdStr;
        bt0x.squareId = bt0x.squareIdStr;
        bt0x.rectangleId = bt0x.rectangleIdStr;
        bt0x.pcSquareId = bt0x.pcSquareIdStr;
        bt0x.pcRectangleId = bt0x.pcRectangleIdStr;
        bt0x.originJpgId = bt0x.originJpgIdStr || bt0x.originJpgId;
        dD2x.picInfo = bt0x;
        dD2x.picUrl = d0x.picInfo.pcSquareUrl;
        this.bxf1x(dD2x);
        this.xG8y()
    };
    b0x.bpr0x = function(dD2x) {
        if (this.fg2x.length >= 9) {
            this.bpq0x(-10, 3e3, this.bxk1x.g0x(this));
            return
        }
        this.cil9c(dD2x);
        this.fg2x.push(dD2x);
        this.TE4I[dD2x.uuid] = dD2x;
        if ( !! this.fg2x.length) {
            this.o0x.style.display = ""
        }
        if (this.fg2x.length >= 9) {
            this.Bh9Y.style.display = "none"
        } else {
            this.Bh9Y.style.display = ""
        }
        this.xG8y()
    };
    b0x.xG8y = function() {
        var bpp0x = -1,
            bxz2x = 0;
        for (var i = 0, l = this.fg2x.length; i < l; i++) {
            if (this.fg2x[i].status == 1) {
                return
            }
            if (this.fg2x[i].status == 0 && bpp0x < 0) {
                bpp0x = i
            }
            if (this.fg2x[i].status == 2 || this.fg2x[i].status < 0) {
                bxz2x++
            }
        }
        var r0x = this.fg2x[bpp0x];
        if (r0x) {
            (r0x.index == 0 ? this.cim9d : this.IF1x).gd2x(r0x.uuid);
            r0x.status = 1;
            this.A0x("onstartupload", {})
        } else if (bxz2x == this.fg2x.length) {
            this.A0x("onfinishupload", {})
        }
    };
    b0x.bpq0x = function(s0x, nI5N, hS3x) {
        if (this.Jj1x < s0x) {
            return
        }
        if (this.xF8x) {
            clearTimeout(this.xF8x);
            this.xF8x = 0
        }
        if (nI5N) {
            this.IU1x.innerText = Zi6c[s0x * 1];
            this.Jj1x = s0x;
            this.xF8x = setTimeout(this.TC4G.g0x(this, s0x, hS3x), nI5N)
        } else {
            this.IU1x.innerText = Zi6c[s0x];
            this.Jj1x = s0x
        }
        this.IU1x.style.display = ""
    };
    b0x.TC4G = function(s0x, hS3x) {
        if (s0x && this.Jj1x !== s0x) {
            return
        }
        this.Jj1x = 0;
        this.IU1x.innerText = Zi6c[0];
        this.IU1x.style.display = "none";
        hS3x && hS3x()
    };
    b0x.cil9c = function(dD2x) {
        var j0x = {};
        if (dD2x.fail) {
            j0x.fail = dD2x.fail
        }
        var dy2x = a9j.bQ0x("m-xwgt-share-upload-preview", j0x);
        dD2x.element = a9j.ni5n(dy2x);
        h0x.q0x(a9j.I0x(dD2x.element, "del")[0], "mousedown", this.cij9a.g0x(this, dD2x), false);
        this.TF4J.insertBefore(dD2x.element, this.TF4J.lastElementChild);
        dD2x.dragger = F0x.bwy1x.B0x({
            view: this.TF4J.parentNode,
            body: dD2x.element,
            overflow: false,
            direction: 0,
            isRelative: 1,
            ondragstart: this.Mm1x.g0x(this, dD2x),
            onchange: this.cii9Z.g0x(this, dD2x),
            ondragend: this.biP9G.g0x(this, dD2x)
        })
    };
    b0x.bxf1x = function(dD2x) {
        if (!dD2x || !dD2x.element) {
            return false
        }
        var j0x = {};
        if (dD2x.fail) {
            j0x.fail = dD2x.fail
        } else {
            j0x.url = dD2x.picUrl
        }
        a9j.y0x(dD2x.element, "z-fail");
        dD2x.element.firstChild.outerHTML = a9j.bQ0x("m-xwgt-share-upload-preview-img", j0x)
    };
    b0x.Mm1x = function(r0x, lA4E) {
        a9j.y0x(r0x.element, "z-sel")
    };
    b0x.cii9Z = function(r0x, lA4E) {
        var csC1x, gs2x = this.fg2x.length - 1,
            op5u;
        for (var i = gs2x; i >= 0; i--) {
            a9j.x0x(this.fg2x[i].element, "z-jump");
            if (this.fg2x[i] == r0x) {
                op5u = i
            } else {
                a9j.fH2x(this.fg2x[i].element, {
                    left: "",
                    top: ""
                })
            }
        }
        var Jr1x = {
            x: 46 + 92 * (op5u % 5) + lA4E.left,
            y: 46 + 92 * (op5u / 5 >> 0) + lA4E.top
        };
        var boK0x = Jr1x.x / 92 >> 0,
            boI0x = Jr1x.y / 92 >> 0,
            xb8T = Math.max(0, Math.min(gs2x, boI0x * 5 + boK0x));
        if (xb8T == op5u) {
            return
        }
        var cig9X = xb8T < op5u;
        for (var i = Math.min(xb8T, op5u); i <= Math.max(xb8T, op5u); i++) {
            if (i !== op5u) {
                var bxY2x = i % 5;
                if (cig9X) {
                    if (bxY2x == 4) {
                        a9j.fH2x(this.fg2x[i].element, {
                            left: "-368px",
                            top: "92px"
                        })
                    } else {
                        a9j.fH2x(this.fg2x[i].element, {
                            left: "92px",
                            top: ""
                        })
                    }
                } else {
                    if (bxY2x == 0) {
                        a9j.fH2x(this.fg2x[i].element, {
                            left: "368px",
                            top: "-92px"
                        })
                    } else {
                        a9j.fH2x(this.fg2x[i].element, {
                            left: "-92px",
                            top: ""
                        })
                    }
                }
            }
        }
    };
    b0x.biP9G = function(r0x, lA4E) {
        var csE1x, gs2x = this.fg2x.length - 1,
            op5u;
        for (var i = gs2x; i >= 0; i--) {
            a9j.fH2x(this.fg2x[i].element, {
                left: "",
                top: ""
            });
            if (this.fg2x[i] == r0x) {
                op5u = i
            }
        }
        a9j.x0x(r0x.element, "z-sel");
        var Jr1x = {
            x: 46 + 92 * (op5u % 5) + lA4E.left,
            y: 46 + 92 * (op5u / 5 >> 0) + lA4E.top
        };
        var boK0x = Jr1x.x / 92 >> 0,
            boI0x = Jr1x.y / 92 >> 0,
            xb8T = Math.max(0, Math.min(gs2x, boI0x * 5 + boK0x));
        if (xb8T == op5u) {
            return
        }
        this.TF4J.insertBefore(r0x.element, (this.fg2x[xb8T + (xb8T > op5u ? 1 : 0)] || {}).element || this.Bh9Y);
        this.fg2x.splice(op5u, 1);
        this.fg2x.splice(xb8T, 0, r0x)
    };
    b0x.cij9a = function(r0x, d0x) {
        a9j.cF1x(r0x.element, false);
        if (r0x.dragger) r0x.dragger.S0x();
        delete r0x.dragger;
        var s0x = -1;
        for (var i = this.fg2x.length - 1; i >= 0; i--) {
            if (this.fg2x[i] == r0x) {
                s0x = i;
                break
            }
        }
        this.fg2x.splice(s0x, s0x >= 0 ? 1 : 0);
        delete r0x;
        if (this.fg2x.length >= 9) {
            this.Bh9Y.style.display = "none"
        } else {
            this.Bh9Y.style.display = ""
        }
        if (!this.fg2x.length) {
            this.o0x.style.display = "none";
            this.TC4G(0)
        } else {
            this.bxk1x()
        }
        this.xG8y()
    };
    b0x.bxk1x = function() {
        var bya2x = false;
        for (var i = 0, len = this.fg2x.length; i < len; i++) {
            if (this.fg2x[i].status == -3) {
                bya2x = true
            }
        }
        if (bya2x) {
            this.bpq0x(-3)
        } else {
            this.TC4G(-3)
        }
    };
    b0x.Jx1x = function() {
        var dW2x = [];
        for (var i = this.fg2x.length - 1; i >= 0; i--) {
            if (this.fg2x[i].status == 2) {
                dW2x.unshift(this.fg2x[i].picInfo)
            }
        }
        return dW2x
    };
    b0x.bk0x = function(e0x) {
        this.bl0x(e0x);
        this.bwK1x.parent = e0x.button;
        this.IF1x && this.IF1x.S0x();
        this.IF1x = F0x.Cj9a.B0x(this.bwK1x);
        this.o0x.style.display = "none";
        if ( !! this.fg2x) {
            for (var i = this.fg2x.length - 1; i >= 0; i--) {
                a9j.cF1x(this.fg2x[i].element, false);
                if (this.fg2x[i].dragger) this.fg2x[i].dragger.S0x()
            }
        }
        this.fg2x = [];
        this.TE4I = {};
        if (this.xF8x) {
            clearTimeout(this.xF8x)
        }
        this.TC4G(0);
        this.Jj1x = 0
    };
    H0x.ft2x.B0x({
        element: F0x.Zg6a,
        event: ["onstartupload", "onfinishupload"]
    })
})();
(function() {
    var c0x = NEJ.P,
        Y0x = NEJ.O,
        fb2x = NEJ.R,
        a9j = c0x("nej.e"),
        h0x = c0x("nej.v"),
        k0x = c0x("nej.u"),
        bc0x = c0x("nej.ui"),
        M0x = c0x("nej.ut"),
        b0x, K0x;
    if ( !! M0x.nC5H) return;
    M0x.nC5H = NEJ.C();
    b0x = M0x.nC5H.O0x(M0x.Uf4j);
    K0x = M0x.nC5H.ch1x;
    b0x.bk0x = function(e0x) {
        this.cie9V(e0x.more);
        this.TA4E = a9j.w0x(e0x.sbody);
        this.bU1x([
            [this.TA4E, "scroll", this.cid9U.g0x(this)]
        ]);
        var de1x = e0x.delta;
        if (de1x == null) de1x = 30;
        this.Tz4D = Math.max(0, de1x);
        var cg1x = parseInt(e0x.count) || 0;
        this.iD4H = Math.max(0, cg1x);
        var fp2x = parseInt(e0x.number) || 0;
        if (fp2x > 1 && fp2x <= cg1x) {
            this.Ag8Y = fp2x
        }
        this.bl0x(e0x)
    };
    b0x.bD0x = function() {
        this.bI0x();
        delete this.xL8D;
        delete this.TA4E;
        delete this.tq7j;
        delete this.Ty4C
    };
    b0x.ya8S = function(bj0x, bo0x) {
        var bE0x = this.vq7j + (this.iD4H - 1) * this.pG5L,
            fS2x = this.iD4H * this.pG5L;
        return K0x.ya8S.call(this, bE0x, bj0x, fS2x, bo0x)
    };
    b0x.cie9V = function(Tx4B) {
        this.xL8D = a9j.w0x(Tx4B);
        this.bU1x([
            [this.xL8D, "click", this.nY5d.g0x(this)]
        ])
    };
    b0x.byX2x = function(G0x) {
        G0x = G0x || {};
        if (this.tq7j || !G0x) return;
        if (!G0x.scrollHeight) G0x = a9j.oN5S();
        var bj0x = a9j.hO3x(this.iS4W),
            de1x = bj0x.y + this.iS4W.offsetHeight - G0x.scrollTop - G0x.clientHeight,
            cic9T = G0x.scrollHeight <= G0x.clientHeight;
        if (de1x <= this.Tz4D || cic9T && !this.tq7j) {
            this.nY5d()
        }
    };
    b0x.cid9U = function(d0x) {
        if (this.tq7j) return;
        this.byX2x(h0x.U0x(d0x))
    };
    b0x.xY8Q = function(d0x) {
        K0x.xY8Q.apply(this, arguments);
        if (!d0x.stopped) {
            this.MG2x();
            var bj0x = 0;
            if (d0x.index > 1) {
                bj0x = this.vq7j + ((d0x.index - 1) * this.iD4H - 1) * this.pG5L
            }
            this.hV3x = bj0x;
            this.nY5d()
        }
    };
    b0x.bKS4W = function(e0x) {
        if ( !! this.Ag8Y) {
            var de1x = e0x.offset > 0 ? this.pG5L : this.vq7j,
                fS2x = de1x + this.pG5L * (this.Ag8Y - 1);
            this.hV3x = e0x.offset + fS2x;
            e0x.data.limit = fS2x;
            e0x.limit = fS2x;
            delete this.Ag8Y
        }
        return e0x
    };
    b0x.bav7o = function(e0x) {
        delete this.Ty4C;
        K0x.bav7o.apply(this, arguments);
        this.bzb2x()
    };
    b0x.bau7n = function(d0x) {
        if (d0x.key != this.ix3x.key) return;
        switch (d0x.action) {
            case "refresh":
            case "append":
                delete this.Ty4C;
                break
        }
        K0x.bau7n.apply(this, arguments)
    };
    b0x.Nl2x = function() {
        this.vn7g("onbeforelistload", "列表加载中...");
        a9j.W0x(this.xL8D, "display", "none")
    };
    b0x.bah6b = function(i0x, bj0x, fS2x) {
        var bo0x = i0x.length,
            bnV0x = i0x.loaded ? bj0x + fS2x >= bo0x : bj0x + fS2x > bo0x;
        this.hV3x = Math.min(this.hV3x, bo0x);
        a9j.W0x(this.xL8D, "display", bnV0x ? "none" : "");
        if (bnV0x) this.tq7j = !0;
        if (this.iD4H > 0) {
            var bt0x = this.ya8S(bj0x, i0x.length);
            if (this.bLA4E(bt0x.index, bt0x.total)) return !0;
            var de1x = this.vq7j - this.pG5L,
                fp2x = this.iD4H * this.pG5L;
            this.tq7j = (bj0x + fS2x - de1x) % fp2x == 0 || bnV0x;
            a9j.W0x(this.xL8D, "display", this.tq7j ? "none" : "");
            this.bap7i(this.tq7j && bt0x.total > 1 ? "" : "none")
        }
    };
    b0x.bai6c = function() {
        this.hV3x = 0;
        this.tq7j = !0;
        this.vn7g("onemptylist", "没有列表数据！")
    };
    b0x.TX4b = function(dy2x, lA4E) {
        this.iS4W.insertAdjacentHTML(lA4E || "beforeEnd", dy2x)
    };
    b0x.TW4a = function(hg2x) {
        this.fC2x = this.fC2x || [];
        if (k0x.eq2x(hg2x)) {
            fb2x.push.apply(this.fC2x, hg2x)
        } else {
            this.fC2x.push(hg2x)
        }
    };
    b0x.Ud4h = function(d0x) {
        a9j.mf4j(this.ck1x);
        this.Ny2x(d0x, "onafteradd");
        var ev2x = d0x.flag;
        if (d0x.stopped || !ev2x) return;
        if (this.iD4H > 0) {
            this.bam6g();
            return
        }
        this.hV3x += 1;
        ev2x == -1 ? this.bqf0x(d0x.data) : this.cjo9f(d0x.data)
    };
    b0x.Uc4g = function(d0x) {
        this.Ny2x(d0x, "onafterdelete");
        if (d0x.stopped) return;
        if (this.iD4H > 0) {
            this.bam6g();
            return
        }
        var C0x = d0x.data[this.eV2x.pkey];
        if ( !! this.fC2x) {
            var r0x = a9j.bFO3x(C0x),
                s0x = k0x.cT1x(this.fC2x, r0x);
            if (s0x >= 0) {
                this.fC2x.splice(s0x, 1);
                this.hV3x -= 1
            }
            if ( !! r0x) r0x.S0x()
        } else {
            var f0x = a9j.w0x(this.bJp4t(C0x));
            if ( !! f0x) this.hV3x -= 1;
            a9j.cF1x(f0x)
        }
        if (this.hV3x <= 0) this.nY5d()
    };
    b0x.bab6V = function(bj0x, fS2x) {
        if (bj0x != this.hV3x) return;
        if (this.Wg5l()) {
            this.tq7j = !1;
            this.bzb2x()
        }
    };
    b0x.baa6U = function(bj0x, fS2x) {
        if (bj0x != 0) return;
        var FK0x = this.P0x.gK2x(this.ix3x.key);
        for (var i = fS2x - 1; i >= 0; i--) {
            this.bqf0x(FK0x[i])
        }
    };
    b0x.bzb2x = function() {
        var G0x = this.TA4E;
        if (!G0x || this.tq7j) return;
        this.byX2x(this.TA4E)
    };
    b0x.gC2x = function() {
        delete this.tq7j;
        K0x.gC2x.apply(this, arguments)
    };
    b0x.nY5d = function() {
        if ( !! this.Ty4C) return;
        this.Ty4C = !0;
        var bj0x = this.hV3x;
        this.hV3x += bj0x == 0 ? this.vq7j : this.pG5L;
        this.bKR4V(bj0x)
    }
})();
(function() {
    var c0x = NEJ.P,
        Y0x = NEJ.O,
        a9j = c0x("nej.e"),
        k0x = c0x("nej.u"),
        h0x = c0x("nej.v"),
        cJ1x = c0x("nej.x"),
        M0x = c0x("nej.ut"),
        b0x;
    if ( !! M0x.AV9M) return;
    M0x.AV9M = NEJ.C();
    b0x = M0x.AV9M.O0x(M0x.cC1x);
    b0x.bk0x = function(e0x) {
        this.bl0x(e0x);
        this.ig3x = e0x.event || "click";
        this.jA4E = e0x.selected || "js-selected";
        this.mN5S = e0x.disabled || "js-disabled";
        this.bzn2x = !! e0x.inverse;
        this.cib9S(e0x.list);
        this.JO1x(e0x.index || 0)
    };
    b0x.bD0x = function() {
        var chZ9Q = function(f0x) {
            this.bnQ0x(f0x, !1)
        };
        return function() {
            this.bI0x();
            k0x.be0x(this.bT1x, chZ9Q, this);
            delete this.bT1x;
            delete this.ig3x;
            delete this.cI1x;
            delete this.mN5S;
            delete this.jA4E;
            delete this.bzn2x
        }
    }();
    b0x.cib9S = function() {
        var baT7M = function(r0x) {
            if (!r0x) return;
            this.bT1x.push(r0x);
            var s0x = this.bT1x.length - 1,
                da1x = this.bnM0x[s0x];
            if (!da1x) {
                da1x = this.JO1x.g0x(this, s0x);
                this.bnM0x[s0x] = da1x
            }
            this.bU1x([
                [r0x, this.ig3x, da1x]
            ])
        };
        return function(i0x) {
            this.bT1x = [];
            if (!this.bnM0x) this.bnM0x = [];
            k0x.be0x(i0x, baT7M, this)
        }
    }();
    b0x.bnQ0x = function(G0x, chY9P) { !! chY9P && !this.bzn2x ? a9j.y0x(G0x, this.jA4E) : a9j.x0x(G0x, this.jA4E)
    };
    b0x.JO1x = function(s0x, JT1x, j0x) {
        var G0x = this.bT1x[s0x];
        if (JT1x != !0 && (s0x == this.cI1x || !G0x || a9j.bz0x(G0x, this.mN5S))) {
            h0x.cf1x(arguments[1]);
            return this
        }
        var d0x = {
            index: s0x,
            last: this.cI1x,
            list: this.nv5A(),
            data: j0x || a9j.u0x(G0x, "value")
        };
        this.cI1x = s0x;
        G0x = this.bT1x[d0x.last];
        if ( !! G0x) this.bnQ0x(G0x, !1);
        G0x = this.bT1x[this.cI1x];
        this.bnQ0x(G0x, !0);
        this.A0x("onchange", d0x);
        if (!d0x.nostop) h0x.cf1x(arguments[1]);
        return this
    };
    b0x.rO6I = function() {
        return this.cI1x
    };
    b0x.nv5A = function() {
        return this.bT1x
    };
    a9j.chX9O = cJ1x.chX9O = function(bA0x, e0x) {
        var C0x = a9j.kQ4U(bA0x);
        if (!C0x) return null;
        if (!M0x.XZ5e(C0x, M0x.AV9M)) {
            e0x = e0x || {};
            e0x.list = !e0x.clazz ? a9j.cQ1x(C0x) : a9j.I0x(C0x, e0x.clazz);
            delete e0x.clazz
        }
        return M0x.XZ5e(C0x, M0x.AV9M, e0x || Y0x)
    };
    cJ1x.isChange = !0
})();
(function() {
    var c0x = NEJ.P,
        Y0x = NEJ.O,
        k0x = c0x("nej.u"),
        v0x = c0x("nej.j"),
        l0x = c0x("nm.x");
    var SETTING_KEY = "player-setting";
    var mo5t = {
        mode: 4,
        volume: .8,
        autoPlay: false,
        index: 0,
        lock: false
    };
    mo5t = v0x.tl7e(SETTING_KEY) || mo5t;
    l0x.bny0x = function() {
        return mo5t
    };
    l0x.If0x = function(BA9r) {
        if (BA9r) {
            mo5t = BA9r;
            v0x.vf7Y(SETTING_KEY, BA9r)
        }
    }
})();
(function() {
    var c0x = NEJ.P,
        Y0x = NEJ.O,
        a9j = c0x("nej.e"),
        h0x = c0x("nej.v"),
        k0x = c0x("nej.u"),
        H0x = c0x("nej.ut"),
        l0x = c0x("nm.x"),
        p0x = c0x("nm.d"),
        gJ2x = c0x("nm.w.player.log");
    var ks4w = p0x.hJ3x.B0x();
    var LogLevel = {
        ERROR: 10,
        INFO: 6,
        DEBUG: 2
    };
    var mr5w = function(t0x, bF0x, oF5K) {
        var cY1x = l0x.eM2x("{0} {1} {2}", k0x.lP4T(new Date, "yyyy-MM-dd HH:mm:ss"), t0x, bF0x);
        if (oF5K == LogLevel.ERROR) {
            ks4w.gA2x("playerror", {
                message: bF0x
            })
        }
        if (oF5K >= LogLevel.INFO) {
            ks4w.coR1x(cY1x)
        }
        if (location.hostname.indexOf("igame.163.com") != -1) {
            console.log(cY1x)
        }
    };
    gJ2x.ca1x = function() {
        mr5w("PLAY_ERROR", l0x.eM2x.apply(null, arguments), LogLevel.ERROR)
    };
    gJ2x.od5i = function() {
        mr5w("PLAY_INFO", l0x.eM2x.apply(null, arguments), LogLevel.INFO)
    };
    gJ2x.csI1x = function() {
        mr5w("PLAY_DEBUG", l0x.eM2x.apply(null, arguments), LogLevel.DEBUG)
    }
})();
(function() {
    var c0x = NEJ.P,
        a9j = c0x("nej.e"),
        h0x = c0x("nej.v"),
        H0x = c0x("nej.ut"),
        k0x = c0x("nej.u"),
        F0x = c0x("nm.w"),
        hS3x = c0x("flash.cb");
    var dF2x = ["loadedmetadata", "play", "pause", "ended", "waiting", "playing", "timeupdate", "progress", "stalled", "error"];
    var BZ9Q, Tv4z, td6X;
    F0x.chU9L = function(t0x, dn1x) {
        if (t0x != "flash") {
            if (!BZ9Q) {
                BZ9Q = a9j.cU1x("audio");
                k0x.be0x(dF2x, function(t0x) {
                    h0x.q0x(BZ9Q, t0x, onMediaCallBack)
                })
            }
            if (BZ9Q && BZ9Q.canPlayType && BZ9Q.canPlayType("audio/mpeg")) {
                dn1x(new MediaWrap("audio"));
                return
            }
        }
        if (!Tv4z) {
            a9j.pS5X({
                src: "/style/swf/music/music.swf?v=20151204",
                hidden: true,
                params: {
                    allowscriptaccess: "always"
                },
                onready: function(gV2x) {
                    Tv4z = gV2x;
                    k0x.be0x(dF2x, function(t0x) {
                        hS3x[t0x] = onMediaCallBack;
                        Tv4z.addCallback(t0x, "flash.cb." + t0x)
                    });
                    dn1x(new MediaWrap("flash"))
                }.g0x(this)
            })
        } else {
            dn1x(new MediaWrap("flash"))
        }
    };

    function MediaWrap(Cp9g) {
        var kl4p;
        H0x.ft2x.B0x({
            element: this,
            event: dF2x.concat(["interrupt", "recover"])
        });
        kl4p = Cp9g == "audio" ? BZ9Q : Tv4z;
        this.type = Cp9g;
        this.destroy = function() {};
        this.setSrc = function(V0x) {
            if (td6X != this) {
                var gs2x = td6X;
                if (gs2x) {
                    gs2x.interrupt()
                }
                td6X = this
            }
            if (Cp9g == "flash") {
                kl4p.setSrc(V0x)
            } else {
                kl4p.src = V0x
            }
        };
        this.play = function() {
            if (td6X != this) {
                var gs2x = td6X;
                if (gs2x) {
                    gs2x.interrupt();
                    td6X = this;
                    this.recover()
                } else {
                    td6X = this
                }
            }
            if (Cp9g == "flash") {
                kl4p.as_play()
            } else {
                kl4p.play()
            }
        };
        this.pause = function() {
            if (td6X != this) return;
            if (Cp9g == "flash") {
                kl4p.as_pause()
            } else {
                kl4p.pause()
            }
        };
        this.load = function() {
            if (td6X != this) return;
            if (Cp9g == "flash") {
                kl4p.as_load()
            } else {
                kl4p.load()
            }
        };
        this.interrupt = function() {
            onMediaCallBack({
                type: "interrupt"
            })
        };
        this.recover = function() {
            onMediaCallBack({
                type: "recover"
            })
        };
        this.getMedia = function() {
            return kl4p
        };
        var nH5M = ["Src", "Duration", "CurrentTime", "Paused", "Ended", "ReadyState", "Volume", "Error", "Buffered", "NetworkState"];
        k0x.be0x(nH5M, function(T0x) {
            var Kl1x = "get" + T0x,
                Ko1x = "set" + T0x;
            if (Cp9g == "flash") {
                if (!this[Kl1x]) {
                    this[Kl1x] = function() {
                        return kl4p[Kl1x]()
                    }
                }
                if (!this[Ko1x]) {
                    this[Ko1x] = function(value) {
                        kl4p[Ko1x](value)
                    }
                }
            } else {
                var bAa2x = T0x.slice(0, 1).toLowerCase() + T0x.slice(1);
                if (!this[Kl1x]) {
                    this[Kl1x] = function() {
                        return kl4p[bAa2x]
                    }
                }
                if (!this[Ko1x]) {
                    this[Ko1x] = function(value) {
                        kl4p[bAa2x] = value
                    }
                }
            }
        }, this)
    }
    function onMediaCallBack(d0x) {
        if (td6X) {
            h0x.A0x(td6X, d0x.type, d0x)
        }
    }
})();
(function() {
    var c0x = NEJ.P,
        h0x = c0x("nej.v"),
        v0x = c0x("nej.j"),
        H0x = c0x("nej.ut"),
        cG1x = c0x("nej.p"),
        F0x = c0x("nm.w"),
        l0x = c0x("nm.x"),
        gJ2x = c0x("nm.w.player.log"),
        b0x;
    var DEFAULT_BR = 128e3;
    var CDN_HOST_REG = /(m\d+\.music\.126\.net)/;
    var MAX_STALLED_RETRY = 2;
    var MediaError = {
        MEDIA_ERR_ABORTED: 1,
        MEDIA_ERR_NETWORK: 2,
        MEDIA_ERR_DECODE: 3,
        MEDIA_ERR_SRC_NOT_SUPPORTED: 4
    };
    var ErrorType = {
        INFO_GET_ERR: 1,
        NET_ERR: 2,
        UNKNOWN_ERR: 10
    };
    var LoadState = {
        LOAD_START: 1,
        LOADED_META: 2,
        IN_RELOAD: 3,
        IN_RE_GET_URL: 4,
        IN_SWITCH_CDN: 5,
        IN_SWITCH_MEDIA: 6
    };
    var RetryLevel = {
        NONE: 0,
        GET_URL: 1,
        RELOAD: 2,
        SWITCH_CDN: 3
    };
    var bAb2x = false;
    F0x.ff2x = NEJ.C();
    b0x = F0x.ff2x.O0x(H0x.cC1x);
    b0x.bk0x = function(e0x) {
        this.bl0x(e0x);
        this.cq1x = {};
        this.Tt4x(e0x.media);
        v0x.br0x("/api/cdns", {
            type: "json",
            onload: function(d0x) {
                if (d0x.code) {
                    this.pb5g = d0x.data
                }
            }.g0x(this)
        })
    };
    b0x.bD0x = function() {
        this.bI0x();
        delete this.cq1x
    };
    b0x.Ts4w = function(bf0x) {
        if (!bf0x) return;
        var xX8P = this.cq1x.volume;
        if (this.dq1x) {
            this.dq1x.pause()
        }
        this.cq1x = {
            time: 0,
            id: bf0x.id,
            duration: bf0x.duration / 1e3,
            play: this.cq1x.play,
            stalledRetryCount: 0
        };
        if (xX8P != null) {
            this.cq1x.volume = xX8P
        }
        this.cq1x.loadState = LoadState.LOAD_START;
        this.bAu2x(bf0x.id);
        gJ2x.od5i("play song id: {0}", bf0x.id)
    };
    b0x.eL2x = function() {
        if (this.cq1x.error) {
            this.cq1x.error = null;
            if (this.cq1x.error == ErrorType.INFO_GET_ERR || this.bAw2x()) {
                this.bAz2x()
            } else {
                this.Kz1x()
            }
        } else {
            if (this.dq1x) {
                this.dq1x.play()
            }
        }
        this.cq1x.play = true;
        this.oy5D("play")
    };
    b0x.fo2x = function() {
        if (this.dq1x) {
            this.dq1x.pause()
        }
        this.cq1x.play = false;
        this.oy5D("pause")
    };
    b0x.nr5w = function(bL0x) {
        if (this.dq1x) {
            this.dq1x.setCurrentTime(bL0x)
        }
        this.cq1x.time = bL0x;
        gJ2x.od5i("seek to: {0}", bL0x)
    };
    b0x.bmZ0x = function() {
        return this.cq1x.duration || 0
    };
    b0x.uo7h = function() {
        return !!this.cq1x.play
    };
    b0x.lc4g = function(KJ1x) {
        this.cq1x.volume = KJ1x;
        if (this.dq1x) {
            this.dq1x.setVolume(KJ1x)
        }
    };
    b0x.bmX0x = function() {
        return this.cq1x.time
    };
    b0x.Tt4x = function(t0x) {
        F0x.chU9L(t0x, function(kl4p) {
            this.dq1x = kl4p;
            gJ2x.od5i("media loaded: {0}", kl4p.type);
            this.bU1x([
                [this.dq1x, "loadedmetadata", this.chT9K.g0x(this)],
                [this.dq1x, "ended", this.chS9J.g0x(this)],
                [this.dq1x, "waiting", this.vu7n.g0x(this)],
                [this.dq1x, "play", this.sD6x.g0x(this)],
                [this.dq1x, "pause", this.bmN9E.g0x(this)],
                [this.dq1x, "playing", this.KS1x.g0x(this)],
                [this.dq1x, "timeupdate", this.chQ9H.g0x(this)],
                [this.dq1x, "progress", this.rQ6K.g0x(this)],
                [this.dq1x, "stalled", this.bmM9D.g0x(this)],
                [this.dq1x, "interrupt", this.fo2x.g0x(this)],
                [this.dq1x, "recover", this.chP9G.g0x(this)],
                [this.dq1x, "error", this.eE2x.g0x(this)]
            ]);
            if (this.cq1x) {
                if (this.cq1x.loadState == LoadState.LOAD_START || this.cq1x.loadState == LoadState.IN_SWITCH_MEDIA) {
                    this.bmE9v();
                    if (this.cq1x.volume != null) {
                        this.dq1x.setVolume(this.cq1x.volume)
                    }
                }
            }
        }.g0x(this))
    };
    b0x.chO9F = function(t0x) {
        this.GL0x();
        this.dq1x.destroy();
        this.cq1x.loadState = LoadState.IN_SWITCH_MEDIA;
        this.vu7n();
        this.Tt4x(t0x);
        gJ2x.od5i("switch media")
    };
    b0x.csJ1x = function() {
        return this.dq1x
    };
    b0x.bAu2x = function() {
        this.vu7n();
        v0x.br0x("/api/song/enhance/player/url", {
            type: "json",
            query: {
                ids: JSON.stringify([this.cq1x.id]),
                br: DEFAULT_BR
            },
            onload: this.bBu2x.g0x(this),
            onerror: this.bBu2x.g0x(this)
        })
    };
    b0x.bBu2x = function(d0x) {
        if (d0x.code == 200 && d0x.data && d0x.data.length) {
            var bt0x = d0x.data[0];
            if (!bt0x.url) {
                this.cq1x.error = ErrorType.INFO_GET_ERR;
                this.oy5D("error", {
                    code: this.cq1x.error
                });
                return
            }
            this.cq1x.playUrl = bt0x.url;
            this.cq1x.expireTime = (new Date).getTime() + bt0x.expi * 1e3;
            this.bmE9v()
        } else {
            this.cq1x.error = ErrorType.INFO_GET_ERR;
            this.oy5D("error", {
                code: this.cq1x.error
            });
            gJ2x.ca1x("info load error")
        }
    };
    b0x.bmE9v = function() {
        if (this.dq1x) {
            var V0x = this.cq1x.playUrl;
            if (this.cq1x.time > 0 && (this.cq1x.loadState == LoadState.IN_RE_GET_URL || this.cq1x.loadState == LoadState.IN_RE_GET_URL)) {
                V0x += "#t=" + this.cq1x.time
            }
            this.dq1x.setSrc(V0x);
            gJ2x.od5i("load mp3: {0},loadState: {1}.", V0x, this.cq1x.loadState)
        }
    };
    b0x.bBv2x = function() {
        if (/#t=(\d+)$/.test(this.dq1x.getSrc())) {
            return parseInt(RegExp.$1) || 0
        } else {
            return 0
        }
    };
    b0x.Kz1x = function() {
        var bL0x = parseInt(this.cq1x.time) || 0,
            chL9C = this.bBv2x();
        if (bL0x === chL9C) {
            this.dq1x.load()
        } else {
            this.dq1x.setSrc(this.cq1x.playUrl + "#t=" + bL0x)
        }
        this.cq1x.loadState = LoadState.IN_RELOAD;
        this.vu7n();
        gJ2x.od5i("reload from: {0}", bL0x)
    };
    b0x.bAz2x = function() {
        this.cq1x.loadState = LoadState.IN_RE_GET_URL;
        this.bAu2x()
    };
    b0x.bBG2x = function() {
        var uA7t = getHost(this.cq1x.playUrl);
        if (uA7t) {
            for (var i = 0; i < this.pb5g.length; i++) {
                var jC4G = this.pb5g[i] || [],
                    s0x = jC4G.indexOf(uA7t);
                if (s0x >= 0 && jC4G.length > 1) {
                    return jC4G[(s0x + 1) % jC4G.length]
                }
            }
        }
        function getHost(V0x) {
            if (CDN_HOST_REG.test(V0x)) return RegExp.$1
        }
    };
    b0x.chJ9A = function() {
        this.cq1x.playUrl = this.cq1x.playUrl.replace(CDN_HOST_REG, this.bBG2x());
        this.cq1x.loadState = LoadState.IN_SWITCH_CDN;
        this.bmE9v();
        this.vu7n()
    };
    b0x.chT9K = function() {
        if (this.cq1x.loadState == LoadState.LOAD_START) {
            this.cq1x.loadState = LoadState.LOADED_META;
            if (this.dq1x.type == "audio") {
                this.cq1x.duration = this.dq1x.getDuration()
            }
            this.oy5D("loadedmeta", {
                duration: this.cq1x.duration
            })
        } else {
            this.cq1x.loadState = LoadState.LOADED_META
        }
        if (this.cq1x.play) {
            this.dq1x.play()
        } else {
            this.dq1x.pause()
        }
        if (this.cq1x.time && parseInt(this.cq1x.time) != this.bBv2x()) {
            this.dq1x.setCurrentTime(this.cq1x.time)
        }
        this.HQ0x();
        this.KS1x();
        bAb2x = true;
        gJ2x.od5i("loaded meta")
    };
    b0x.chS9J = function() {
        this.cq1x.ended = true;
        this.oy5D("ended")
    };
    b0x.vu7n = function() {
        if (!this.cq1x.waiting) {
            this.cq1x.waiting = true;
            this.cq1x.waitTimestamp = +(new Date);
            this.oy5D("waiting")
        }
    };
    b0x.KS1x = function() {
        this.cq1x.waiting = false;
        this.cq1x.waitTimestamp = 0;
        this.oy5D("playing")
    };
    b0x.sD6x = function() {
        this.oy5D("play")
    };
    b0x.bmN9E = function() {
        this.oy5D("pause")
    };
    b0x.chQ9H = function() {
        if (this.cq1x.loadState != LoadState.LOADED_META) return;
        var bL0x = this.dq1x.getCurrentTime();
        if (this.cq1x.waiting && bL0x > this.cq1x.time) {
            this.KS1x()
        }
        this.cq1x.time = bL0x;
        this.oy5D("timeupdate", {
            time: this.cq1x.time,
            duration: this.cq1x.duration
        })
    };
    b0x.rQ6K = function(d0x) {
        if (this.cq1x.loadState != LoadState.LOADED_META) return;
        var n0x = {};
        if (d0x.data) {
            n0x.total = d0x.data.total;
            n0x.loaded = d0x.data.loaded
        } else {
            var xA8s = this.dq1x.getBuffered(),
                bL0x = this.dq1x.getCurrentTime(),
                nA5F = 0;
            for (var i = 0; i < xA8s.length; i++) {
                if (bL0x > xA8s.start(i) && bL0x < xA8s.end(i)) {
                    nA5F = xA8s.end(i);
                    break
                }
            }
            n0x.total = this.cq1x.duration;
            n0x.loaded = Math.min(nA5F, n0x.total)
        }
        this.oy5D("progress", n0x)
    };
    b0x.HQ0x = function() {
        if (this.cq1x.retry) {
            clearTimeout(this.cq1x.retry.tid);
            this.cq1x.retry = null
        }
    };
    b0x.eE2x = function() {
        var bP0x = this.dq1x.getError();
        gJ2x.ca1x("media error code: {0}, netState: {1}", bP0x.code, this.dq1x.getNetworkState());
        if (bP0x.code == MediaError.MEDIA_ERR_NETWORK || bP0x.code == MediaError.MEDIA_ERR_SRC_NOT_SUPPORTED) {
            var BA9r = l0x.bny0x();
            if (!this.cq1x.retry) {
                this.cq1x.retry = {
                    level: RetryLevel.NONE
                }
            } else {
                window.clearTimeout(this.cq1x.retry.tid)
            }
            if (this.cq1x.retry.level == RetryLevel.NONE) {
                if (this.bAw2x()) {
                    this.cq1x.retry.level = RetryLevel.GET_URL;
                    this.bAz2x();
                    gJ2x.od5i("Url expired, get url.")
                } else {
                    this.cq1x.retry.level = RetryLevel.RELOAD;
                    this.cq1x.retry.tid = setTimeout(this.Kz1x.g0x(this), 3e3);
                    gJ2x.od5i("Reload mp3 3s later.")
                }
            } else if (this.cq1x.retry.level == RetryLevel.GET_URL) {
                this.cq1x.retry.level = RetryLevel.RELOAD;
                this.cq1x.retry.tid = setTimeout(this.Kz1x.g0x(this), 3e3);
                gJ2x.od5i("Reload mp3 3s later.")
            } else if (this.cq1x.retry.level == RetryLevel.RELOAD) {
                this.cq1x.retry.level = RetryLevel.SWITCH_CDN;
                if (this.bBG2x()) {
                    this.cq1x.retry.tid = setTimeout(this.chJ9A.g0x(this), 5e3);
                    gJ2x.od5i("Switch CDN 5s later.")
                } else {
                    this.cq1x.retry.tid = setTimeout(this.Kz1x.g0x(this), 5e3);
                    gJ2x.od5i("Reload mp3 5s later.")
                }
            } else if (!bAb2x && this.dq1x.type == "audio" && !BA9r.useFlash && !cG1x.IN1x.mac && l0x.beN8F().supported) {
                BA9r.useFlash = true;
                l0x.If0x(BA9r);
                this.chO9F("flash")
            } else {
                this.HQ0x();
                this.fo2x();
                this.cq1x.error = ErrorType.NET_ERR;
                this.oy5D("error", {
                    code: this.cq1x.error
                });
                gJ2x.ca1x("error can not retry.")
            }
        } else {
            this.HQ0x();
            this.fo2x();
            this.cq1x.error = ErrorType.UNKNOWN_ERR;
            this.oy5D("error", {
                code: this.cq1x.error
            });
            gJ2x.ca1x("error can not retry.")
        }
    };
    b0x.bmM9D = function() {
        var gY2x = 0,
            bBS2x = 5e3;
        return function() {
            this.vu7n();
            clearTimeout(gY2x);
            setTimeout(function() {
                var hA3x = +(new Date);
                if (this.cq1x.waiting && hA3x - this.cq1x.waitTimestamp >= bBS2x && this.cq1x.stalledRetryCount < MAX_STALLED_RETRY) {
                    gJ2x.od5i("stalled too long retry.");
                    this.cq1x.stalledRetryCount++;
                    this.Kz1x()
                }
            }.g0x(this), bBS2x);
            gJ2x.od5i("stalled")
        }
    }();
    b0x.bAw2x = function() {
        var hA3x = +(new Date);
        return hA3x > this.cq1x.expireTime
    };
    b0x.chP9G = function() {
        var bL0x = parseInt(this.cq1x.time) || 0;
        this.dq1x.setSrc(this.cq1x.playUrl + "#t=" + bL0x);
        this.cq1x.loadState = LoadState.IN_RELOAD;
        this.vu7n();
        gJ2x.od5i("recover from: {0}", bL0x)
    };
    b0x.oy5D = function(X0x, j0x) {
        h0x.A0x(F0x.ff2x, "playaction", {
            action: X0x,
            data: j0x || {}
        })
    };
    H0x.ft2x.B0x({
        element: F0x.ff2x,
        event: ["playaction"]
    })
})();
(function() {
    if (!(window == top)) {
        return
    }
    var c0x = NEJ.P,
        h0x = c0x("nej.v"),
        H0x = c0x("nej.ut"),
        F0x = c0x("nm.w"),
        b0x;
    F0x.AL9C = NEJ.C();
    b0x = F0x.AL9C.O0x(F0x.ff2x);
    K0x = F0x.AL9C.ch1x;
    b0x.cl1x = function() {
        this.cr1x()
    };
    b0x.chI9z = function(bJ0x) {
        this.Ts4w(bJ0x);
        this.eL2x()
    };
    b0x.bmk9b = function() {
        this.fo2x()
    };
    b0x.ug7Z = function(d0x) {
        if (d0x.action == "play") {
            this.fo2x()
        }
    };
    b0x.oy5D = function(X0x, j0x) {
        h0x.A0x(F0x.AL9C, "tmpplayaction", {
            action: X0x,
            data: j0x || {},
            tmp: true
        })
    };
    b0x.qV6P = function() {
        return this.cq1x
    };
    H0x.ft2x.B0x({
        element: F0x.AL9C,
        event: ["tmpplayaction"]
    })
})();
(function() {
    var c0x = NEJ.P,
        Y0x = NEJ.O,
        a9j = c0x("nej.e"),
        h0x = c0x("nej.v"),
        k0x = c0x("nej.u"),
        gu2x = c0x("nej.n"),
        v0x = c0x("nej.j"),
        H0x = c0x("nej.ut"),
        bc0x = c0x("nej.ui"),
        F0x = c0x("nm.w"),
        m0x = c0x("nm.l"),
        jH4L = c0x("nm.c"),
        p0x = c0x("nm.d"),
        l0x = c0x("nm.x"),
        b0x, K0x, Tp4t = [{
            item: "m-publish-search-single",
            type: 1
        }, {
            item: "m-publish-search-artist",
            type: 100
        }, {
            item: "m-publish-search-album",
            type: 10
        }, {
            item: "m-publish-search-mv",
            type: 1004
        }, {
            item: "m-publish-search-playlist",
            type: 1e3
        }, {
            item: "m-publish-search-djRadio",
            type: 1009
        }];
    var bmb9S = {
        song: 0,
        artist: 1,
        album: 2,
        mv: 3,
        playlist: 4,
        djradio: 5
    };
    F0x.blJ9A = NEJ.C();
    b0x = F0x.blJ9A.O0x(bc0x.eo2x);
    b0x.cl1x = function(e0x) {
        this.cr1x(e0x);
        var i0x = a9j.I0x(this.o0x, "j-flag");
        this.csL1x = i0x.shift();
        this.chG9x = i0x.shift();
        this.HJ0x = i0x.shift();
        this.bCr2x = i0x.shift();
        this.blG9x = [i0x.shift(), i0x.shift(), i0x.shift(), i0x.shift(), i0x.shift(), i0x.shift()];
        this.Tm4q = i0x.shift();
        this.bCB3x = i0x.shift();
        this.qu6o = {
            list: this.blG9x,
            selected: "z-curr",
            onchange: this.bCF3x.g0x(this)
        };
        h0x.q0x(this.HJ0x, "input", this.Tk4o.g0x(this));
        h0x.q0x(this.HJ0x, "propertychange", this.Tk4o.g0x(this));
        h0x.q0x(this.HJ0x, "keyup", this.Tk4o.g0x(this));
        h0x.q0x(this.chG9x, "click", this.Tk4o.g0x(this));
        h0x.q0x(this.Tm4q, "click", this.cv1x.g0x(this));
        h0x.q0x(this.bCB3x, "click", function() {
            this.A0x("oncancel", {})
        }.g0x(this));
        this.P0x = p0x.Eb9S.fP2x();
        this.Lz1x = top.nm.w.AL9C.fP2x();
        H0x.ft2x.B0x({
            element: top.nm.w.AL9C,
            event: ["tmpplayaction"]
        });
        this.qc6W = {
            limit: 100,
            offset: 0,
            parent: this.Tm4q,
            onbeforelistload: this.oY5d.g0x(this)
        };
        h0x.q0x(top.nm.w.AL9C, "tmpplayaction", this.ug7Z.g0x(this))
    };
    b0x.bX1x = function() {
        this.bY1x = "m-xwgt-publish-search"
    };
    b0x.bk0x = function(e0x) {
        this.bl0x(e0x);
        if ( !! this.yi8a) {
            this.yi8a.S0x();
            delete this.yi8a
        }
        this.qu6o.index = bmb9S[e0x.type || "song"];
        this.yi8a = H0x.AV9M.B0x(this.qu6o);
        this.HJ0x.value = "";
        this.HJ0x.focus();
        this.sb6V = "";
        this.csN1x = 0;
        if (e0x.showMV == true) {
            this.blG9x[bmb9S["mv"]].parentNode.style.display = "";
            a9j.y0x(this.bCr2x, "srchtab-1")
        } else {
            this.blG9x[bmb9S["mv"]].parentNode.style.display = "none";
            a9j.x0x(this.bCr2x, "srchtab-1")
        }
        if ( !! this.do1x) {
            this.do1x = this.do1x.S0x()
        }
        if (e0x.hideBack) {
            a9j.y0x(this.bCB3x.parentNode, "f-hide")
        }
    };
    b0x.bD0x = function() {
        this.Lz1x.bmk9b();
        this.bI0x()
    };
    b0x.Tk4o = function() {
        var value = this.HJ0x.value.trim();
        if (value && value.length) {
            if (value != this.sb6V) {
                this.sb6V = value;
                this.bCF3x({
                    index: this.yi8a.rO6I()
                })
            }
        } else {
            if (this.do1x) {
                this.do1x = this.do1x.S0x()
            }
        }
        this.sb6V = value
    };
    b0x.cv1x = function() {
        var chB9s = function(G0x) {
                return a9j.bz0x(G0x, "sitm") || a9j.bz0x(G0x, "itm") || a9j.bz0x(G0x, "mv-item")
            },
            chA9r = function(G0x) {
                return a9j.bz0x(G0x, "ply")
            },
            bDo3x = function() {
                m0x.Z0x.N0x({
                    type: 2,
                    tip: "因合作方要求，该资源需付费使用"
                })
            },
            chz9q = function() {
                m0x.Z0x.N0x({
                    type: 2,
                    tip: "因合作方要求，该资源需下载后播放"
                })
            },
            blw9n = function(bf0x) {
                if (bf0x && bf0x.privilege && bf0x.privilege.toast) {
                    v0x.br0x("/api/song/toast", {
                        query: {
                            id: bf0x.id
                        },
                        type: "json",
                        onload: KB1x.g0x(this),
                        onerror: KB1x.g0x(this)
                    })
                } else {
                    Kw1x()
                }
            },
            KB1x = function(R0x) {
                Kw1x((R0x || Y0x).toast)
            },
            Kw1x = function(bF0x) {
                m0x.Z0x.N0x({
                    type: 2,
                    tip: bF0x || "因合作方要求，该资源暂时下架>_<"
                })
            };
        return function(d0x) {
            var Bx9o = h0x.U0x(d0x, chA9r),
                i0x = h0x.U0x(d0x, chB9s),
                eW2x = this.Lz1x.qV6P();
            if ( !! i0x) {
                h0x.bh0x(d0x);
                this.LJ1x = a9j.u0x(i0x, "id");
                this.LK1x = a9j.u0x(i0x, "type");
                if (this.LK1x == 18) {
                    var bJ0x = this.P0x.ec2x(this.LJ1x),
                        oF5K = l0x.nU5Z(bJ0x);
                    if (!Bx9o) {
                        if (oF5K == 10) {
                            bDo3x();
                            return
                        } else if (oF5K == 100) {
                            blw9n(bJ0x);
                            return
                        }
                    } else {
                        if (oF5K == 10) {
                            bDo3x();
                            return
                        } else if (oF5K == 100) {
                            blw9n(bJ0x);
                            return
                        } else if (oF5K == 11) {
                            chz9q();
                            return
                        } else {
                            a9j.x0x(this.ym8e, "z-pause z-loading");
                            if (Bx9o == this.ym8e && eW2x.play && !eW2x.ended) {
                                this.Lz1x.bmk9b()
                            } else {
                                this.ym8e = Bx9o;
                                this.Lz1x.chI9z(bJ0x)
                            }
                            return
                        }
                    }
                } else if (this.LK1x == 70) {
                    if (a9j.bz0x(i0x, "z-noprogram")) {
                        m0x.Z0x.N0x({
                            type: 2,
                            tip: "不能分享没有节目的电台"
                        });
                        return
                    }
                }
                this.chy9p()
            }
        }
    }();
    b0x.chy9p = function() {
        var hl3x = this.P0x.ec2x(this.LJ1x),
            rU6O = l0x.bKq4u(this.LK1x, hl3x);
        rU6O.title = rU6O.title || "";
        rU6O.author = rU6O.author || "";
        rU6O.picUrl = rU6O.picUrl || "";
        rU6O.authors = rU6O.authors || "";
        if (this.LK1x == 70) {
            this.LJ1x = this.LJ1x.slice(0, -4)
        }
        this.A0x("onfinish", {
            id: this.LJ1x,
            type: this.LK1x,
            data: rU6O
        })
    };
    b0x.ug7Z = function(d0x) {
        var j0x = d0x.data;
        if (!this.ym8e) {
            return
        }
        switch (d0x.action) {
            case "play":
                a9j.fe2x(this.ym8e, "z-pause z-play", "z-loading");
                break;
            case "pause":
            case "ended":
                a9j.x0x(this.ym8e, "z-pause z-loading");
                break;
            case "error":
                m0x.Z0x.N0x({
                    type: 2,
                    tip: "试听遇到问题，播放失败"
                });
                a9j.x0x(this.ym8e, "z-pause z-loading");
                break;
            case "playing":
                a9j.fe2x(this.ym8e, "z-loading", "z-pause");
                break;
            case "waiting":
                a9j.fe2x(this.ym8e, "z-pause", "z-loading");
                break
        }
    };
    b0x.chv9m = function(d0x) {
        if (d0x.result.code == 407) {
            this.Tm4q.innerHTML = '<div class="n-norlt s-fc1">根据相关法律法规和政策，搜索结果未予显示</div>';
            return
        }
        this.Tm4q.innerHTML = '<div class="n-norlt s-fc1">页面出错，请稍后再试！</div>'
    };
    b0x.bCF3x = function(d0x) {
        if (!this.sb6V || d0x.index < 0 || d0x.index > 5) {
            return
        }
        this.Lz1x.bmk9b();
        var bd0x = Tp4t[d0x.index],
            e0x = NEJ.X({}, this.qc6W);
        e0x.cache = {
            klass: p0x.Eb9S,
            clear: true,
            onerror: this.chv9m.g0x(this)
        };
        e0x.cache.lkey = "search-publish-" + bd0x.type + "-" + this.sb6V;
        e0x.item = {
            klass: bd0x.item,
            getRestrictLevel: l0x.nU5Z,
            dur2time: l0x.lj4n
        };
        if (!e0x.cache.data) {
            e0x.cache.data = {}
        }
        e0x.cache.data.s = this.sb6V;
        e0x.cache.data.type = bd0x.type;
        e0x.cache.data.isPub = true;
        if (bd0x.type == 1) {
            e0x.cache.data.hlpretag = '<span class="s-fc7">';
            e0x.cache.data.hlposttag = "</span>"
        }
        e0x.onemptylist = this.chu9l.g0x(this, this.sb6V);
        if ( !! this.BL9C) this.P0x.tv7o(this.BL9C);
        if ( !! this.do1x) {
            this.do1x = this.do1x.S0x()
        }
        this.do1x = H0x.nC5H.B0x(e0x);
        this.BL9C = e0x.cache.lkey
    };
    b0x.oY5d = function(d0x) {
        d0x.value = a9j.ih3x("m-publish-search-loading")
    };
    b0x.chu9l = function(J0x, d0x) {
        a9j.dP2x(d0x.parent, "m-publish-emtpy-message", {
            key: J0x
        });
        d0x.stopped = true
    }
})();
(function() {
    var c0x = NEJ.P,
        a9j = c0x("nej.e"),
        h0x = c0x("nej.v"),
        cG1x = c0x("nej.p"),
        v0x = c0x("nej.j"),
        cm1x = c0x("nej.ut"),
        bG0x = c0x("nej.ui"),
        F0x = c0x("nm.w"),
        b0x, K0x;
    var cht9k = ".j-item.j-selected a{background:#eee;text-decoration:none;color:#333;}";
    F0x.BQ9H = NEJ.C();
    b0x = F0x.BQ9H.O0x(bG0x.eo2x);
    var fW2x = a9j.eg2x("m-wgt-receiverInput");
    var chs9j = a9j.eg2x("m-wgt-receiverList");
    var hR3x = a9j.rT6N(cht9k);
    var chr9i = a9j.eg2x('<div data-id=${userId} class="blk s-fc3 j-receiver">${username}<a href="#" class="cls" title="删除">&times;</a></div>');
    b0x.cl1x = function(e0x) {
        this.bb0x = [];
        this.tY7R = e0x.receiver || null;
        this.chq9h = e0x.unique || false;
        this.mk5p = e0x.err;
        this.bEr3x(this.bEs3x, e0x.uid);
        this.cr1x(e0x)
    };
    b0x.bk0x = function(e0x) {
        this.bl0x(e0x);
        this.Md1x();
        this.Mg1x();
        this.Ti4m();
        if (e0x.receiver) this.bln9e(e0x.receiver.nickname, e0x.receiver.userId);
        a9j.W0x(this.Ai8a, "display", "block");
        a9j.W0x(this.blh9Y, "cursor", "text");
        a9j.W0x(this.Ai8a, "cursor", "text")
    };
    b0x.bX1x = function() {
        var j0x = this.bES3x();
        this.bY1x = a9j.hN3x(a9j.bQ0x(fW2x, {
            receiver: this.tY7R,
            users: j0x
        }));
        this.kT4X = hR3x
    };
    b0x.bR0x = function() {
        this.cb1x();
        var bw0x = a9j.I0x(this.o0x, "j-flag");
        var hg2x = a9j.I0x(this.o0x, "j-item");
        this.blh9Y = bw0x[0];
        this.bFd3x = bw0x[1];
        this.dz2x = bw0x[2];
        this.Ai8a = bw0x[3];
        this.Te4i = bw0x[4];
        this.bkW9N = bw0x[5];
        this.fC2x = hg2x;
        a9j.y0x(this.fC2x[0], "j-selected");
        h0x.q0x(this.dz2x, "keyup", this.bkF9w.g0x(this));
        h0x.q0x(this.dz2x, "keydown", this.Mp1x.g0x(this));
        h0x.q0x(this.dz2x, "focus", this.jP4T.g0x(this));
        h0x.q0x(this.Te4i, "click", this.chp9g.g0x(this));
        h0x.q0x(this.blh9Y, "click", this.chn9e.g0x(this));
        h0x.q0x(document.body, "click", this.mZ5e.g0x(this));
        h0x.q0x(this.dz2x, "input", this.fd2x.g0x(this));
        h0x.q0x(this.dz2x, "blur", this.oi5n.g0x(this))
    };
    b0x.bD0x = function(e0x) {
        h0x.mc4g(document.body, "click", this.mZ5e.g0x(this));
        this.bI0x();
        this.Ti4m();
        this.chm9d();
        this.mZ5e()
    };
    b0x.bkF9w = function(d0x) {
        h0x.bh0x(d0x);
        var iZ4d = d0x.keyCode || d0x.which;
        var bi0x = this.dz2x.value;
        var bo0x = this.fC2x.length;
        var qk6e = a9j.I0x(this.o0x, "j-selected")[0];
        switch (iZ4d) {
            case 13:
                var kU4Y = a9j.gU2x(qk6e, "data-username");
                var hq3x = a9j.gU2x(qk6e, "data-userId");
                this.bln9e(kU4Y, hq3x);
                this.mZ5e();
                this.dz2x.value = "";
                break;
            case 38:
                var s0x = a9j.gU2x(qk6e, "data-index") - 1 < 0 ? bo0x - 1 : a9j.gU2x(qk6e, "data-index") - 1;
                a9j.x0x(qk6e, "j-selected");
                a9j.y0x(this.fC2x[s0x], "j-selected");
                break;
            case 40:
                var s0x = parseInt(a9j.gU2x(qk6e, "data-index")) + 1 >= bo0x ? 0 : parseInt(a9j.gU2x(qk6e, "data-index")) + 1;
                a9j.x0x(qk6e, "j-selected");
                a9j.y0x(this.fC2x[s0x], "j-selected");
                break;
            default:
                this.tO7H()
        }
    };
    b0x.Mp1x = function(d0x) {
        var iZ4d = d0x.keyCode || d0x.which;
        var bi0x = this.dz2x.value;
        var s0x = a9j.I0x(this.o0x, "j-receiver").length - 1;
        if (iZ4d === 8 && bi0x === "") this.chl9c(s0x)
    };
    b0x.fd2x = function(d0x) {
        var bi0x = this.dz2x.value;
        if (bi0x.length > 10) {
            this.dz2x.value = bi0x.substring(0, 10);
            return
        }
        cG1x.cP1x.browser == "ie" && cG1x.cP1x.version < "7.0" ? setTimeout(this.bkr9i.g0x(this), 0) : this.bkr9i();
        this.Mg1x()
    };
    b0x.jP4T = function() {
        if (this.bb0x[0]) this.tO7H();
        else this.bEr3x(this.chi9Z);
        a9j.W0x(this.Ai8a, "display", "none")
    };
    b0x.oi5n = function() {
        var bo0x = a9j.I0x(this.o0x, "j-receiver").length;
        if (this.dz2x.value.trim() == "" && bo0x <= 0) a9j.W0x(this.Ai8a, "display", "block")
    };
    b0x.bln9e = function(kU4Y, hq3x) {
        var Hf0x = this.MJ2x();
        if (Hf0x.length >= 10) {
            this.dv1x();
            return
        }
        var bc0x;
        for (bc0x = 0; bc0x < Hf0x.length; bc0x++) {
            if (Hf0x[bc0x] == hq3x) {
                this.mZ5e();
                return
            }
        }
        if (!kU4Y || !hq3x) return;
        var f0x = a9j.dm1x(a9j.hN3x(a9j.bQ0x(chr9i, {
            username: kU4Y,
            userId: hq3x
        })));
        var bA0x = this.bFd3x.parentNode;
        if (this.chq9h) {
            this.Ti4m()
        }
        bA0x.insertBefore(f0x, this.bFd3x);
        this.dz2x.value = "";
        var bo0x = a9j.I0x(this.o0x, "j-receiver").length;
        if (bo0x > 1) a9j.W0x(this.Ai8a, "display", "none");
        this.bkr9i();
        this.Mg1x()
    };
    b0x.Ti4m = function() {
        var MK2x = a9j.I0x(this.o0x, "j-receiver");
        var bc0x;
        if (MK2x.length > 0) {
            for (bc0x = 0; bc0x < MK2x.length; bc0x++) {
                a9j.cF1x(MK2x[bc0x], false)
            }
        }
    };
    b0x.chm9d = function() {
        this.dz2x.value = ""
    };
    b0x.chl9c = function(s0x) {
        this.dv1x(!0);
        var MK2x = a9j.I0x(this.o0x, "j-receiver");
        a9j.cF1x(MK2x[s0x], false);
        this.Mg1x()
    };
    b0x.tO7H = function() {
        var bi0x = this.dz2x.value;
        var bB0x = bi0x.trim().toLowerCase();
        var j0x;
        bB0x = bB0x.replace(/\[/g, "\\[");
        bB0x = bB0x.replace(/\]/g, "\\]");
        j0x = this.bES3x(bB0x);
        this.chh9Y(j0x)
    };
    b0x.mZ5e = function(d0x) {
        a9j.W0x(this.Te4i, "display", "none")
    };
    b0x.dv1x = function(go2x) {
        if (go2x && this.mk5p) {
            a9j.W0x(this.mk5p, "display", "none");
            return
        }
        if (this.mk5p) a9j.W0x(this.mk5p, "display", "block")
    };
    b0x.chp9g = function(d0x) {
        h0x.cf1x(d0x);
        var di1x = d0x.target || d0x.srcElement;
        if (a9j.bz0x(di1x, "j-flag")) return;
        var bA0x = di1x.nodeName.toLowerCase() == "a" ? di1x.parentNode : di1x.parentNode.parentNode;
        var kU4Y = a9j.gU2x(bA0x, "data-username");
        var hq3x = a9j.gU2x(bA0x, "data-userId");
        this.bln9e(kU4Y, hq3x);
        this.mZ5e();
        a9j.W0x(this.Ai8a, "display", "none")
    };
    b0x.chn9e = function(d0x) {
        h0x.bh0x(d0x);
        var di1x = d0x.target || d0x.srcElement;
        if (a9j.bz0x(di1x.parentNode, "j-receiver")) {
            a9j.cF1x(di1x.parentNode, false);
            this.dv1x(!0);
            this.Mg1x()
        } else this.dz2x.focus()
    };
    b0x.bkr9i = function() {
        this.bkW9N.innerHTML = this.dz2x.value;
        var dc1x = this.bkW9N.offsetWidth + 2;
        a9j.W0x(this.dz2x, "width", dc1x + "px")
    };
    b0x.Mg1x = function() {
        var SZ4d = a9j.hO3x(this.dz2x, this.o0x).y;
        var bGW3x = Math.floor((SZ4d - 8) / 27);
        if (bGW3x < 0) return;
        a9j.W0x(this.blh9Y, "height", 19 + bGW3x * 29 + "px")
    };
    b0x.Md1x = function() {
        var pg5l = ["height", "paddingLeft", "paddingTop", "paddingRight", "paddingBottom", "fontSize", "fontFamily", "lineHeight"];
        for (var i = 0; i < pg5l.length; i++) {
            a9j.W0x(this.bkW9N, pg5l[i], a9j.cX1x(this.dz2x, pg5l[i]))
        }
    };
    b0x.bEr3x = function(dn1x, C0x) {
        var cR1x = C0x ? C0x : window.GUser.userId;
        var V0x = "/api/user/getfollows/" + cR1x;
        var fu2x = v0x.br0x(V0x, {
            sync: false,
            method: "get",
            query: "offset = 0&limit=1000&order=true",
            onload: dn1x.g0x(this),
            onerror: function(j0x) {
                this.bb0x = []
            },
            onbeforerequest: function(j0x) {}
        })
    };
    b0x.bEs3x = function(j0x) {
        this.bb0x = JSON.parse(j0x).follow || [];
        var C0x = GUser.userId;
        for (var i = 0; i < this.bb0x.length; i++) {
            if (this.bb0x[i].userId == C0x) {
                this.bb0x.splice(i, 1);
                continue
            }
            this.bb0x[i].avatarUrl = this.bb0x[i].avatarUrl + "?param=30y30"
        }
    };
    b0x.chi9Z = function(j0x) {
        if (this.bb0x[0]) return;
        this.bEs3x(j0x);
        this.tO7H()
    };
    b0x.bES3x = function(bB0x) {
        var bB0x = bB0x ? bB0x : "";
        this.bb0x = this.bb0x[0] ? this.bb0x : [];
        var bo0x = this.bb0x.length;
        var MO2x = this.MJ2x();
        var qS6M = [];
        var MQ2x, MR2x, bjZ9Q;
        if (!this.bb0x[0]) return qS6M;
        for (var bc0x = 0; bc0x < bo0x; bc0x++) {
            bjZ9Q = false;
            for (var v0x = 0; v0x < MO2x.length; v0x++) {
                if (this.bb0x[bc0x].userId == MO2x[v0x]) {
                    bjZ9Q = true;
                    break
                }
            }
            if (bjZ9Q) continue;
            MQ2x = this.bb0x[bc0x].nickname.toLowerCase().search(bB0x);
            MR2x = this.bb0x[bc0x].py ? this.bb0x[bc0x].py.toLowerCase().search(bB0x) : -1;
            if (MQ2x !== -1 || MR2x != -1) qS6M.push(this.bb0x[bc0x])
        }
        return qS6M
    };
    b0x.chh9Y = function(j0x) {
        a9j.dP2x(this.Te4i, chs9j, {
            users: j0x
        });
        a9j.y0x(a9j.I0x(this.o0x, "j-item")[0], "j-selected");
        this.fC2x = a9j.I0x(this.o0x, "j-item");
        a9j.W0x(this.Te4i, "display", "block")
    };
    b0x.MJ2x = function() {
        var qS6M = a9j.I0x(this.o0x, "j-receiver") || [];
        var hq3x = [];
        for (var i = 0; i < qS6M.length; i++) {
            hq3x.push(a9j.gU2x(qS6M[i], "data-id"))
        }
        return hq3x
    };
    b0x.csP1x = function() {
        var hq3x = this.MJ2x();
        var qS6M = [];
        for (var i = 0; i < hq3x.length; i++) {
            for (var j = 0; j < this.bb0x.length; j++) {
                if (hq3x[i] == this.bb0x[j].userId) qS6M.push(this.bb0x[j])
            }
        }
        return qS6M
    };
    b0x.che9V = function() {
        this.Ti4m()
    };
    F0x.BQ9H.N0x = function(e0x) {
        if (!GUser || !GUser.userId || GUser.userId <= 0) {
            m0x.nm5r.N0x({
                title: "登录"
            });
            return
        }
        e0x = e0x || {};
        if (e0x.parent === undefined) e0x.parent = document.body; !! this.eH2x && this.eH2x.S0x();
        this.eH2x = this.B0x(e0x)
    };
    F0x.BQ9H.bq0x = function() { !! this.eH2x && this.eH2x.S0x()
    };
    F0x.BQ9H.Hd0x = function() {
        return this.mZ5e()
    };
    F0x.BQ9H.csQ1x = function() {
        return this.tO7H()
    }
})();
(function() {
    var c0x = NEJ.P,
        a9j = c0x("nej.e"),
        k0x = c0x("nej.u"),
        h0x = c0x("nej.v"),
        l0x = c0x("nm.x"),
        m0x = c0x("nm.l"),
        b0x, K0x;
    m0x.Hc0x = NEJ.C();
    b0x = m0x.Hc0x.O0x(m0x.bfB8t);
    K0x = m0x.Hc0x.ch1x;
    b0x.bk0x = function() {
        var DR9I;
        var cgY8Q = function(z0x, J0x) {
            DR9I = DR9I || [];
            if (J0x != "18") DR9I.push({
                key: J0x,
                value: z0x
            })
        };
        return function(e0x) {
            this.bl0x(e0x);
            if (!DR9I) {
                var bv0x = l0x.cnr0x();
                k0x.dZ2x(bv0x, cgY8Q)
            }
            var bo0x = DR9I.length;
            DR9I.splice(bo0x - 2, 0, {
                key: "18",
                value: "186"
            });
            this.SU4Y = DR9I
        }
    }();
    b0x.bX1x = function() {
        this.bY1x = "ntp-portrait"
    };
    b0x.bR0x = function() {
        this.cb1x();
        var i0x = a9j.I0x(this.o0x, "j-flag");
        this.bC0x = i0x[0];
        this.cgX8P = i0x[1];
        this.cgW8O = i0x[2];
        this.cgV8N = i0x[3];
        h0x.q0x(this.bC0x, "click", this.wW8O.g0x(this));
        h0x.q0x(this.cgX8P, "click", this.Eh9Y.g0x(this, 1));
        h0x.q0x(this.cgV8N, "click", this.Eh9Y.g0x(this, 2))
    };
    b0x.bjC9t = function(s0x) {
        this.ST4X = s0x;
        var bj0x = (s0x - 1) * 50;
        var i0x = this.SU4Y.slice(bj0x, Math.min(bj0x + 50, this.SU4Y.length));
        this.bC0x.innerHTML = a9j.bQ0x("jst-portrait", {
            plist: i0x
        }, {
            purl: l0x.bBj2x
        });
        this.cgW8O.innerText = s0x + "/" + Math.ceil(this.SU4Y.length / 50)
    };
    b0x.Eh9Y = function(s0x) {
        var cgU8M = Math.ceil(this.SU4Y.length / 50);
        if (s0x == 1 && this.ST4X == 1 || s0x == 2 && this.ST4X == cgU8M) return;
        s0x == 1 ? this.bjC9t(this.ST4X - 1) : this.bjC9t(this.ST4X + 1)
    };
    b0x.wW8O = function(d0x) {
        var G0x = h0x.U0x(d0x, "d:text");
        if (!G0x) return;
        var d0x = {
            url: a9j.u0x(G0x, "url"),
            text: a9j.u0x(G0x, "text")
        };
        this.A0x("onselect", d0x);
        if (!d0x.stopped) this.bq0x()
    };
    b0x.N0x = function() {
        K0x.N0x.call(this);
        this.bjC9t(1)
    }
})();
(function() {
    var c0x = NEJ.P,
        h0x = c0x("nej.v"),
        k0x = c0x("nej.u"),
        cG1x = c0x("nej.p"),
        ba0x = c0x("nej.h"),
        H0x = c0x("nej.ut"),
        jg4k = /^[#?]+/,
        Au8m = /#(.*?)$/,
        wK7D = window,
        bju9l = !history.pushState || cG1x.IN1x.android || !history.auto;
    var SR4V = function(V0x, bjo9f) {
        wK7D.history[!bjo9f ? "pushState" : "replaceState"](null, document.title, V0x)
    };
    var SP4T = function() {
        return location.parse(wK7D.location.href)
    };
    SR4V = SR4V.dY2x(function(d0x) {
        if (!bju9l) return;
        var bg0x = d0x.args;
        d0x.stopped = !0;
        V0x = bg0x[0].replace(jg4k, "");
        !bg0x[1] ? wK7D.location.hash = V0x : wK7D.location.replace("#" + V0x)
    });
    SP4T = SP4T.dY2x(function(d0x) {
        if (!bju9l) return;
        d0x.stopped = !0;
        var dE2x = Au8m.test(wK7D.location.href) ? RegExp.$1 : "";
        d0x.value = location.parse(dE2x.replace(jg4k, ""))
    });
    location.redirect = function(V0x, bjo9f) {
        SR4V(V0x, bjo9f);
        return this
    };
    location.active = function() {
        var eR2x, V0x, iE4I, cB1x, Ls1x;
        var bji9Z = function(iu3x) {
            if ( !! cB1x) {
                cB1x = !1;
                return
            }
            var d0x = {
                oldValue: iE4I,
                newValue: SP4T()
            };
            if ( !! location.ignored) {
                location.ignored = !1
            } else {
                h0x.A0x(location, "beforeurlchange", d0x);
                if (d0x.stopped) {
                    if ( !! iE4I) {
                        cB1x = !0;
                        SR4V(iE4I.href, !0)
                    }
                    return
                }
            }
            V0x = wK7D.location.href;
            iE4I = d0x.newValue;
            h0x.A0x(location, "urlchange", iE4I);
            ba0x.boj0x(iE4I.href)
        };
        var bIM4Q = function() {
            if (V0x != wK7D.location.href) bji9Z();
            eR2x = requestAnimationFrame(bIM4Q)
        };
        return function(bK0x) {
            if ( !! Ls1x) return this;
            Ls1x = !0;
            wK7D = bK0x || window;
            if (bju9l && "onhashchange" in window && cG1x.lX4b.trident2) {
                h0x.q0x(wK7D, "hashchange", bji9Z);
                bji9Z()
            } else if (!eR2x) {
                eR2x = requestAnimationFrame(bIM4Q)
            }
            return this
        }
    }();
    location.parse = function() {
        var fQ2x = /^https?:\/\/.*?\//i,
            jg4k = /[?#]/;
        return function(V0x) {
            var n0x = {
                href: V0x
            };
            V0x = (V0x || "").replace(fQ2x, "/").split(jg4k);
            var cg1x = 1;
            if (V0x[0] == "/" && (V0x[1] || "").indexOf("/") == 0) cg1x = 2;
            n0x.path = V0x.splice(0, cg1x).join("?");
            n0x.query = k0x.ho3x(V0x.join("&"));
            return n0x
        }
    }();
    location.same = function(V0x) {
        return SP4T().href == V0x
    };
    H0x.ft2x.B0x({
        element: location,
        event: ["beforeurlchange", "urlchange"]
    })
})();
(function() {
    var c0x = NEJ.P,
        a9j = c0x("nej.e"),
        h0x = c0x("nej.v"),
        fF2x = c0x("nm.ut");
    fF2x.sE6y = function(ew2x) {
        var gg2x = {
            text: "",
            start: 0,
            end: 0
        };
        if (ew2x.setSelectionRange) {
            gg2x.start = ew2x.selectionStart;
            gg2x.end = ew2x.selectionEnd;
            gg2x.text = gg2x.start != gg2x.end ? ew2x.value.substring(gg2x.start, gg2x.end) : ""
        } else if (document.selection) {
            var i, SO4S = document.selection.createRange(),
                wl7e = document.body.createTextRange();
            wl7e.moveToElementText(ew2x);
            gg2x.text = SO4S.text;
            gg2x.bookmark = SO4S.getBookmark();
            for (i = 0; wl7e.compareEndPoints("StartToStart", SO4S) < 0 && SO4S.moveStart("character", -1) !== 0; i++) {
                if (ew2x.value.charAt(i) == "\n") {
                    i++
                }
            }
            gg2x.start = i;
            gg2x.end = gg2x.text.length + gg2x.start
        }
        return gg2x
    };
    fF2x.SN4R = function(ew2x, gg2x) {
        var wl7e;
        if (!gg2x) {
            gg2x = {
                text: "",
                start: 0,
                end: 0
            }
        }
        ew2x.focus();
        if (ew2x.setSelectionRange) {
            ew2x.setSelectionRange(gg2x.start, gg2x.end)
        } else if (ew2x.createTextRange) {
            wl7e = ew2x.createTextRange();
            if (ew2x.value.length === gg2x.start) {
                wl7e.collapse(false);
                wl7e.select()
            } else {
                wl7e.moveToBookmark(gg2x.bookmark);
                wl7e.select()
            }
        }
    };
    fF2x.GN0x = function(ew2x, gg2x, cY1x) {
        var gg2x = gg2x || {
                text: "",
                start: 0,
                end: 0
            };
        var bjb9S, bJd4h, wl7e, NJ2x, bJi4m, bJj4n, AD9u;
        this.SN4R(ew2x, gg2x);
        if (ew2x.setSelectionRange) {
            bjb9S = ew2x.value;
            bJd4h = bjb9S.substring(0, gg2x.start) + cY1x + bjb9S.substring(gg2x.end);
            bJi4m = bJj4n = gg2x.start + cY1x.length;
            AD9u = ew2x.scrollTop;
            ew2x.value = bJd4h;
            if (ew2x.scrollTop != AD9u) {
                ew2x.scrollTop = AD9u
            }
            ew2x.setSelectionRange(bJi4m, bJj4n)
        } else if (ew2x.createTextRange) {
            NJ2x = document.selection.createRange();
            NJ2x.text = cY1x;
            NJ2x.setEndPoint("StartToEnd", NJ2x);
            NJ2x.select()
        }
        h0x.A0x(ew2x, "keyup")
    }
})();
(function() {
    var c0x = NEJ.P,
        a9j = c0x("nej.e"),
        h0x = c0x("nej.v"),
        cG1x = c0x("nej.p"),
        k0x = c0x("nej.u"),
        cm1x = c0x("nej.ut"),
        F0x = c0x("nm.w"),
        fF2x = c0x("nm.ut"),
        b0x;
    F0x.bJm4q = NEJ.C();
    b0x = F0x.bJm4q.O0x(cm1x.cC1x);
    b0x.cl1x = function(e0x) {
        this.cr1x(e0x)
    };
    b0x.bk0x = function(e0x) {
        this.bl0x(e0x);
        this.fE2x = e0x.txt;
        this.AF9w = e0x.sgtsContainer;
        this.bJu4y = e0x.sgtsList[0];
        this.SM4Q = e0x.sgtsItem;
        this.ns5x = e0x.rangeData;
        this.GJ0x = e0x.atIndex;
        a9j.y0x(this.SM4Q[0], "selected-item");
        this.NT2x()
    };
    b0x.bD0x = function() {
        this.bI0x();
        h0x.mc4g(document.body, "keyup", this.bJA4E.g0x(this));
        h0x.mc4g(document.body, "click", this.bJB4F.g0x(this))
    };
    b0x.NT2x = function() {
        this.bU1x([
            [document.body, "keyup", this.bJA4E.g0x(this)],
            [document.body, "click", this.bJB4F.g0x(this)],
            [this.fE2x, "keydown", this.bJC4G.g0x(this)],
            [this.fE2x, "keypress", this.bJC4G.g0x(this)],
            [this.bJu4y, "click", this.bJE4I.g0x(this)],
            [this.bJu4y, "mouseover", this.AJ9A.g0x(this)]
        ])
    };
    b0x.AJ9A = function(d0x) {
        var di1x = h0x.U0x(d0x);
        var r0x = a9j.I0x(this.AF9w, "selected-item");
        if (a9j.bz0x(di1x, "j-sgt")) {
            a9j.x0x(r0x[0], "selected-item");
            a9j.y0x(di1x, "selected-item")
        }
    };
    b0x.bJA4E = function(d0x) {
        var r0x = a9j.I0x(this.AF9w, "selected-item");
        var bo0x = this.SM4Q.length;
        var iZ4d = d0x.keyCode || d0x.which;
        var s0x, j0x;
        switch (iZ4d) {
            case 38:
                s0x = a9j.gU2x(r0x[0], "data-index") - 1 < 0 ? bo0x - 1 : a9j.gU2x(r0x[0], "data-index") - 1;
                a9j.x0x(r0x[0], "selected-item");
                a9j.y0x(this.SM4Q[s0x], "selected-item");
                break;
            case 40:
                s0x = parseInt(a9j.gU2x(r0x[0], "data-index")) + 1 >= bo0x ? 0 : parseInt(a9j.gU2x(r0x[0], "data-index")) + 1;
                a9j.x0x(r0x[0], "selected-item");
                a9j.y0x(this.SM4Q[s0x], "selected-item");
                break;
            case 13:
                this.bJE4I(d0x);
                break;
            case 27:
                this.mZ5e();
                break;
            case 32:
                var bi0x = this.fE2x.value;
                var s0x = fF2x.sE6y(this.fE2x);
                if (bi0x.charAt(s0x.start - 1) !== " ") return;
                this.mZ5e();
                break
        }
    };
    b0x.bJC4G = function(d0x) {
        var iZ4d = d0x.keyCode || d0x.which;
        if (iZ4d === 13 || iZ4d === 38 || iZ4d === 40) {
            h0x.cf1x(d0x);
            d0x.keyCode = 0;
            d0x.which = 0;
            d0x.returnvalue = false
        }
    };
    b0x.bJB4F = function(d0x) {
        var di1x = d0x.target || d0x.srcElement;
        if (di1x === this.fE2x) return;
        this.mZ5e()
    };
    b0x.bJE4I = function(d0x) {
        h0x.bh0x(d0x);
        var r0x = a9j.I0x(this.AF9w, "selected-item")[0];
        var qk6e = d0x.target || d0x.srcElement;
        var t0x = d0x.type;
        if (a9j.bz0x(qk6e, "lst")) return;
        if (t0x == "click") {
            a9j.x0x(r0x, "selected-item");
            a9j.y0x(qk6e, "selected-item")
        } else qk6e = r0x;
        var j0x = qk6e.innerHTML + " ";
        this.mZ5e();
        var gg2x = this.ns5x;
        gg2x.start = this.GJ0x + 1;
        if (cG1x.cP1x.browser == "ie" && cG1x.cP1x.version < "9.0") {
            this.fE2x.value = this.fE2x.value.substring(0, gg2x.start) + this.fE2x.value.substring(gg2x.end, this.fE2x.value.length);
            gg2x.end = gg2x.start
        }
        fF2x.GN0x(this.fE2x, gg2x, j0x);
        h0x.A0x(this.fE2x, "keyup")
    };
    b0x.mZ5e = function(d0x) {
        if ( !! this.AF9w) a9j.W0x(this.AF9w, "display", "none");
        this.S0x()
    };
    b0x.tO7H = function(d0x) {
        if ( !! this.AF9w) a9j.W0x(this.AF9w, "display", "block")
    }
})();
(function() {
    var c0x = NEJ.P,
        a9j = c0x("nej.e"),
        h0x = c0x("nej.v"),
        k0x = c0x("nej.u"),
        v0x = c0x("nej.j"),
        F0x = c0x("nm.w"),
        cm1x = c0x("nej.ut"),
        bG0x = c0x("nej.ui"),
        b0x;
    var cgT8L = ".u-atlist{position: absolute;z-index: 10000;}.f-thide.selected-item{background-color: #eee;}";
    var cgP8H = a9j.eg2x("m-wgt-atlist");
    var hR3x = a9j.rT6N(cgT8L);
    F0x.bJO4S = NEJ.C();
    b0x = F0x.bJO4S.O0x(bG0x.eo2x);
    b0x.cl1x = function(e0x) {
        this.fz2x = {};
        this.cr1x()
    };
    b0x.bk0x = function(e0x) {
        this.fz2x.txt = a9j.w0x(e0x.target);
        this.fz2x.data = e0x.data;
        this.fz2x.offset = e0x.offset;
        this.fz2x.rangeData = e0x.rangeData;
        this.fz2x.atIndex = e0x.atIndex;
        this.cgO8G(e0x);
        this.bl0x(e0x);
        this.fz2x.sgtsContainer = this.o0x;
        this.fz2x.sgtsList = a9j.I0x(this.o0x, "lst");
        this.fz2x.sgtsItem = a9j.I0x(this.o0x, "f-thide");
        this.Wt5y(e0x);
        this.cgN8F = F0x.bJm4q.B0x(this.fz2x)
    };
    b0x.bD0x = function(e0x) {
        this.bI0x();
        this.cgN8F.S0x()
    };
    b0x.bX1x = function() {
        this.kT4X = hR3x
    };
    b0x.bR0x = function() {
        this.cb1x()
    };
    b0x.cgO8G = function(e0x) {
        this.o0x = a9j.dm1x(a9j.hN3x(a9j.bQ0x(cgP8H, e0x.data)))
    };
    b0x.Wt5y = function(e0x) {
        var bJT4X = a9j.I0x(this.o0x, "selected-item")[0];
        if (bJT4X) a9j.x0x(bJT4X, "selected-item");
        var cJ1x = e0x.offset.x + "px";
        var gF2x = e0x.offset.y + "px";
        a9j.W0x(this.o0x, "left", cJ1x);
        a9j.W0x(this.o0x, "top", gF2x)
    }
})();
(function() {
    var c0x = NEJ.P,
        v0x = c0x("nej.j"),
        fF2x = c0x("nm.ut");
    fF2x.bJW4a = function(bi0x) {
        if (!GUser || !GUser.userId || GUser.userId <= 0) return;
        var cO1x = /@([a-zA-Z0-9_\-\u4E00-\u9FA5]+)/g;
        var GH0x = bi0x.match(cO1x) || [];
        for (var bc0x = 0; bc0x < GH0x.length; bc0x++) {
            GH0x[bc0x] = GH0x[bc0x].split("@")[1]
        }
        GH0x = GH0x.reverse();
        var hq3x = GUser.userId;
        var cgM8E = v0x.tl7e("mentioners" + hq3x) || [];
        var iJ4N = GH0x.concat(cgM8E);
        if (iJ4N.length > 10) iJ4N = iJ4N.slice(0, 10);
        v0x.vf7Y("mentioners" + hq3x, iJ4N)
    };
    fF2x.cgL8D = function() {
        if (!GUser || !GUser.userId || GUser.userId <= 0) return;
        var hq3x = GUser.userId;
        return v0x.tl7e("mentioners" + hq3x) || []
    }
})();
(function() {
    var c0x = NEJ.P,
        a9j = c0x("nej.e"),
        h0x = c0x("nej.v"),
        cG1x = c0x("nej.p"),
        v0x = c0x("nej.j"),
        k0x = c0x("nej.u"),
        cm1x = c0x("nej.ut"),
        F0x = c0x("nm.w"),
        fF2x = c0x("nm.ut"),
        b0x;
    F0x.bKc4g = NEJ.C();
    b0x = F0x.bKc4g.O0x(cm1x.cC1x);
    b0x.cl1x = function(e0x) {
        this.cr1x(e0x);
        this.bKd4h()
    };
    b0x.bk0x = function(e0x) {
        this.bl0x(e0x);
        this.fE2x = e0x.txt;
        this.o0x = e0x.body;
        this.bKe4i = e0x.before;
        this.LL1x = e0x.flag;
        this.cgK8C = e0x.after;
        this.pc5h = [];
        if (cG1x.cP1x.browser != "ie") {
            setTimeout(function() {
                this.kI4M()
            }.g0x(this), 0)
        }
        this.NT2x()
    };
    b0x.bD0x = function() {
        this.bI0x();
        if (this.sR6L) this.sR6L.S0x();
        delete this.sR6L
    };
    b0x.NT2x = function() {
        this.bU1x([
            [this.fE2x, "keyup", this.bKr4v.g0x(this, this.fE2x)],
            [this.fE2x, "click", this.bKr4v.g0x(this, this.fE2x)],
            [this.fE2x, "focus", this.kI4M.g0x(this)]
        ])
    };
    b0x.kI4M = function(d0x) {
        this.ns5x = fF2x.sE6y(this.fE2x)
    };
    b0x.bKd4h = function() {
        if (!GUser || !GUser.userId || GUser.userId <= 0) {
            window.GFollowers = [];
            return
        }
        var cR1x = window.GUser.userId;
        var V0x = "/api/user/getfollows/" + cR1x;
        var fu2x = v0x.br0x(V0x, {
            sync: false,
            method: "get",
            query: "offset = 0&limit=1000&order=true",
            onload: function(j0x) {
                window.GFollowers = JSON.parse(j0x).follow
            }.g0x(this),
            onerror: function(j0x) {},
            onbeforerequest: function(j0x) {}
        })
    };
    b0x.bKz4D = function(index) {
        var z0x = this.fE2x.value,
            bj0x, biK9B, biJ9A, Oh3x;
        this.bKe4i.innerHTML = k0x.dK2x(z0x.substr(0, index)).replace(/\n/g, "<br/>").replace(/\s/g, '<span class="j-test" style="display:inline-block;white-space: pre-wrap; font-family:Arial, Helvetica, sans-serif;"></span>');
        var nx5C = a9j.I0x(this.bKe4i, "j-test");
        for (var bc0x = 0; bc0x < nx5C.length; bc0x++) {
            nx5C[bc0x].innerText = " "
        }
        this.LL1x.innerHTML = z0x.charAt(index);
        this.cgK8C.innerHTML = k0x.dK2x(z0x.substr(index + 1, z0x.length));
        Oh3x = parseInt(a9j.cX1x(this.fE2x, "lineHeight"));
        a9j.W0x(this.o0x, "display", "block");
        biK9B = a9j.hO3x(this.LL1x, this.o0x);
        biJ9A = a9j.hO3x(this.fE2x);
        a9j.W0x(this.o0x, "display", "none");
        var cJ1x = biK9B.x + biJ9A.x;
        var gF2x = biK9B.y + biJ9A.y + Oh3x;
        bj0x = {
            x: cJ1x,
            y: gF2x
        };
        this.cgI8A(bj0x)
    };
    b0x.bKr4v = function(ew2x, d0x) {
        h0x.cf1x(d0x);
        var ew2x = ew2x;
        var z0x = ew2x.value;
        var bo0x = z0x.length;
        var s0x = fF2x.sE6y(ew2x).start;
        var bKM4Q = 0;
        var iZ4d = d0x.keyCode || d0x.which;
        var iJ4N;
        this.ns5x = fF2x.sE6y(ew2x);
        var bKN4R = false;
        for (var i = 1; i < 20; i++) {
            iJ4N = s0x - i;
            if (z0x.charAt(iJ4N) === " ") break;
            if (z0x.charAt(iJ4N) === "@") {
                bKN4R = true;
                this.GJ0x = bKM4Q = iJ4N;
                break
            }
        }
        if (bKN4R && d0x.shiftKey === false && iZ4d !== 38 && iZ4d !== 40) {
            if (iZ4d !== 27 && iZ4d !== 13) {
                this.sR6L ? this.sR6L.S0x() : null;
                this.bKz4D(bKM4Q)
            }
        } else if (iZ4d !== 38 && iZ4d !== 40 && d0x.keyCode !== 32) {
            this.sR6L ? this.sR6L.S0x() : null
        }
    };
    b0x.cgI8A = function(bj0x) {
        var bj0x = bj0x;
        var j0x = this.GF0x();
        var e0x = {
            parent: document.body,
            offset: bj0x,
            data: j0x,
            target: this.fE2x,
            rangeData: this.ns5x,
            atIndex: this.GJ0x
        };
        this.sR6L ? this.sR6L.S0x() : null;
        this.sR6L = F0x.bJO4S.B0x(e0x)
    };
    b0x.GF0x = function() {
        var cgH8z = fF2x.sE6y(this.fE2x).start;
        var cgF8x = this.GJ0x + 1;
        var bKZ4d = fF2x.cgL8D() || [];
        var bLf4j = [];
        var bB0x = this.fE2x.value.substring(cgF8x, cgH8z).toLowerCase();
        bB0x = bB0x.replace(/\[/g, "\\[");
        bB0x = bB0x.replace(/\]/g, "\\]");
        if (window.GFollowers) {
            this.pc5h = window.GFollowers[0] ? window.GFollowers : []
        } else this.pc5h = [];
        if (!this.pc5h[0]) this.bKd4h();
        for (var bc0x = 0; bc0x < bKZ4d.length; bc0x++) {
            for (var v0x = 0; v0x < this.pc5h.length; v0x++) {
                if (this.pc5h[v0x].nickname == bKZ4d[bc0x]) bLf4j.push(this.pc5h[v0x])
            }
        }
        this.pc5h = k0x.bWt6n(this.pc5h, bLf4j, {
            union: true,
            begin: true
        });
        var cgE8w = this.pc5h.length;
        var SH4L = [];
        var MQ2x, MR2x;
        if (!this.pc5h[0]) return {
            suggests: SH4L
        };
        for (var i = 0; i < cgE8w; i++) {
            MQ2x = this.pc5h[i].nickname.toLowerCase().search(bB0x);
            MR2x = this.pc5h[i].py ? this.pc5h[i].py.toLowerCase().search(bB0x) : -1;
            if (MQ2x !== -1 || MR2x != -1) SH4L.push(this.pc5h[i]);
            if (SH4L.length === 10) break
        }
        return {
            suggests: SH4L
        }
    };
    b0x.Op3x = function() {
        var gg2x = this.ns5x || {
                text: "",
                start: 0,
                end: 0
            };
        h0x.A0x(this.fE2x, "focus");
        fF2x.GN0x(this.fE2x, gg2x, "@");
        this.ns5x = fF2x.sE6y(this.fE2x);
        this.GJ0x = gg2x.start;
        this.bKz4D(this.GJ0x)
    };
    b0x.Hd0x = function() {
        if (this.sR6L) this.sR6L.S0x()
    }
})();
(function() {
    var c0x = NEJ.P,
        a9j = c0x("nej.e"),
        h0x = c0x("nej.v"),
        k0x = c0x("nej.u"),
        v0x = c0x("nej.j"),
        F0x = c0x("nm.w"),
        cm1x = c0x("nej.ut"),
        bG0x = c0x("nej.ui"),
        b0x;
    var cgC8u = "#shadow-box{position: absolute;display: block;left: 450px;top: 1020px;border: 1px solid black;word-wrap: break-word;display:none;opacity: 0;filter: Alpha(opacity=0);z-index: -1000;}";
    var cgA8s = '<div id="shadow-box" style="word-wrap:break-word"><span  class="node-before"></span><span>@</span><span  class="node-after"></span></div>';
    var fW2x = a9j.hN3x(cgA8s);
    var hR3x = a9j.rT6N(cgC8u);
    F0x.Or3x = NEJ.C();
    b0x = F0x.Or3x.O0x(bG0x.eo2x);
    b0x.cl1x = function(e0x) {
        this.fz2x = {};
        this.cr1x()
    };
    b0x.bk0x = function(e0x) {
        this.bl0x(e0x);
        this.fz2x.txt = a9j.w0x(e0x.target);
        this.Md1x();
        this.Os3x = F0x.bKc4g.B0x(this.fz2x)
    };
    b0x.bD0x = function(e0x) {
        this.bI0x();
        this.Os3x.S0x()
    };
    b0x.bX1x = function() {
        this.bY1x = fW2x;
        this.kT4X = hR3x
    };
    b0x.bR0x = function() {
        this.cb1x();
        var i0x = a9j.cQ1x(a9j.w0x(this.o0x));
        this.fz2x.body = this.o0x;
        this.fz2x.before = i0x[0];
        this.fz2x.flag = i0x[1];
        this.fz2x.after = i0x[2]
    };
    b0x.Md1x = function() {
        var pg5l = ["width", "borderWidth", "border-style", "outline", "marginLeft", "marginTop", "marginRight", "marginBottom", "height", "paddingLeft", "paddingTop", "fontSize", "wordWrap", "fontFamily", "lineHeight", "overflowX", "overflowY"];
        for (var i = 0; i < pg5l.length; i++) {
            if (pg5l[i] === "width" && a9j.cX1x(this.fz2x.txt, pg5l[i]) == "100%") {
                a9j.W0x(this.o0x, pg5l[i], this.fz2x.txt.offsetWidth + "px");
                continue
            }
            a9j.W0x(this.o0x, pg5l[i], a9j.cX1x(this.fz2x.txt, pg5l[i]))
        }
    };
    b0x.Op3x = function() {
        this.Os3x.Op3x()
    };
    b0x.Hd0x = function() {
        this.Os3x.Hd0x()
    }
})();
(function() {
    var c0x = NEJ.P,
        Y0x = NEJ.O,
        bm0x = NEJ.F,
        fb2x = NEJ.R,
        a9j = c0x("nej.e"),
        h0x = c0x("nej.v"),
        k0x = c0x("nej.u"),
        H0x = c0x("nej.ut"),
        jH4L = c0x("nm.c"),
        Q0x = {},
        b0x;
    if ( !! jH4L.bic9T) return;
    jH4L.bic9T = NEJ.C();
    b0x = jH4L.bic9T.O0x(H0x.cC1x);
    b0x.cl1x = function() {
        this.cr1x()
    };
    b0x.bk0x = function(e0x) {
        this.bl0x(e0x)
    };
    b0x.bD0x = function() {
        this.bI0x()
    };
    b0x.GC0x = function(eF2x, dn1x) {
        if (Q0x[eF2x]) {
            this.hE3x("register commonJST[" + eF2x + "] duplicate");
            return
        }
        if (!k0x.fV2x(dn1x)) {
            dn1x = ctl.comJST.cgz8r(eF2x, dn1x)
        }
        Q0x[eF2x] = dn1x
    };
    b0x.cgw8o = function(SE4I) {
        if (k0x.eq2x(SE4I)) {
            k0x.be0x(SE4I, function(r0x) {
                ctl.comJST.GC0x.apply(this, r0x)
            }, this)
        } else if (k0x.ke4i(SE4I)) {
            k0x.dZ2x(SE4I, function(eK2x, J0x) {
                ctl.comJST.GC0x(J0x, eK2x)
            })
        }
    };
    b0x.cgz8r = function(eF2x, sX6R, bLK4O) {
        sX6R = sX6R || {};
        NEJ.X(sX6R, {
            comJST: this.oH5M
        });
        if (sX6R.resetDataName && !k0x.eq2x(sX6R.resetDataName)) {
            sX6R.resetDataName = [sX6R.resetDataName]
        }
        return function() {
            var j0x = arguments[0],
                iO4S = arguments[1];
            if (sX6R.resetDataName) {
                var iJ4N = {};
                for (var i = 0, ii = sX6R.resetDataName.length; i < ii; i++) {
                    iJ4N[sX6R.resetDataName[i]] = arguments[i]
                }
                j0x = iJ4N;
                iO4S = arguments[ii]
            }
            NEJ.X(j0x, sX6R, dB2x);
            if (bLK4O) {
                iO4S = iO4S || {};
                NEJ.X(iO4S, bLK4O)
            }
            return a9j.bQ0x(eF2x, j0x, iO4S)
        }
    };
    b0x.oH5M = function(eF2x) {
        if (!Q0x[eF2x]) {
            this.hE3x("commonJST[" + eF2x + "] is unregister");
            return ""
        } else {
            return Q0x[eF2x].apply(null, fb2x.slice.call(arguments, 1))
        }
    };
    b0x.dump = function() {
        return Q0x
    };
    b0x.hE3x = function(cgv8n) {
        if (console && console.log) {
            console.log(cgv8n)
        }
    };
    var dB2x = function(eK2x, J0x) {
        return J0x == "resetDataName"
    };
    c0x("ctl").comJST = jH4L.bic9T.fP2x()
})();
(function() {
    var c0x = NEJ.P,
        Y0x = NEJ.O,
        bm0x = NEJ.F,
        fb2x = NEJ.R,
        a9j = c0x("nej.e"),
        h0x = c0x("nej.v"),
        k0x = c0x("nej.u"),
        H0x = c0x("nej.ut"),
        jH4L = c0x("nm.c"),
        Q0x = {},
        b0x;
    if ( !! jH4L.bhV8N) return;
    jH4L.bhV8N = NEJ.C();
    b0x = jH4L.bhV8N.O0x(H0x.cC1x);
    b0x.cl1x = function() {
        this.cr1x();
        var e0x = {
            "com-mv-artists": function(fi2x, dH2x, Dn9e, bhU8M) {
                return a9j.bQ0x("com-mv-artists", {
                    artists: fi2x,
                    clazz: dH2x,
                    boxClazz: bhU8M,
                    mark: Dn9e ||
                    function(cL1x) {
                        return cL1x
                    },
                    escape: k0x.dK2x,
                    comJST: ctl.comJST.oH5M
                })
            },
            "com-album-artists": function(fi2x, dH2x, Dn9e, bhU8M) {
                return a9j.bQ0x("com-album-artists", {
                    artists: fi2x,
                    clazz: dH2x,
                    boxClazz: bhU8M,
                    mark: Dn9e ||
                    function(cL1x) {
                        return cL1x
                    },
                    escape: k0x.dK2x,
                    comJST: ctl.comJST.oH5M
                })
            },
            "com-artists-title": {
                resetDataName: ["artists"],
                escape: k0x.dK2x
            }
        };
        for (var C0x in e0x) {
            ctl.comJST.GC0x(C0x, e0x[C0x])
        }
    };
    b0x.bk0x = function(e0x) {
        this.bl0x(e0x)
    };
    b0x.bD0x = function() {
        this.bI0x()
    };
    c0x("ctl").comJSTUtil = jH4L.bhV8N.fP2x()
})();
(function() {
    var c0x = NEJ.P,
        Y0x = NEJ.O,
        a9j = c0x("nej.e"),
        cG1x = c0x("nej.p"),
        h0x = c0x("nej.v"),
        k0x = c0x("nej.u"),
        H0x = c0x("nej.ut"),
        v0x = c0x("nej.j"),
        F0x = c0x("nm.w"),
        fF2x = c0x("nm.ut"),
        p0x = c0x("nm.d"),
        l0x = c0x("nm.x"),
        m0x = c0x("nm.l"),
        SD4H = [2, 3],
        dC2x = ["sn", "db"],
        b0x, K0x, cgu8m = {
            13: "playlist",
            17: "djprogram",
            18: "song",
            19: "album",
            20: "artist",
            21: "mv",
            24: "topic",
            25: "activity",
            70: "djradio",
            38: "concert",
            39: "video"
        },
        SC4G = {
            djprogram: "节目",
            album: "专辑",
            playlist: "歌单",
            song: "单曲",
            yunsong: "单曲",
            artist: "歌手",
            mv: "MV",
            topic: "音乐专栏",
            djradio: "电台",
            concert: "演出",
            video: "视频"
        },
        bpX0x = {
            djprogram: " - ",
            album: " - ",
            playlist: " by ",
            song: " - ",
            yunsong: " - ",
            artist: "",
            mv: " - ",
            djradio: " by "
        },
        cgt8l = {
            0: 13,
            1: 17,
            3: 19,
            4: 18,
            5: 21,
            6: 24,
            14: 70,
            17: 20
        },
        Bk9b = {
            pubEventWithPics: false,
            pubEventWithoutResource: false,
            pubEventWithPictureForbiddenNotice: "等级达到Lv.4，即可添加图片"
        };
    m0x.wI7B = NEJ.C();
    b0x = m0x.wI7B.O0x(m0x.dT2x);
    K0x = m0x.wI7B.ch1x;
    b0x.bk0x = function(e0x) {
        if (e0x.onclose === undefined) {
            e0x.onclose = this.bqd0x.g0x(this)
        }
        this.bl0x(e0x);
        this.zj8b = e0x.isPub;
        this.jv4z = e0x.rid || -1;
        this.er2x = e0x.type || -1;
        this.SB4F = e0x.purl;
        this.Bp9g = e0x.name || "";
        this.Bq9h = e0x.author || "";
        this.bgW8O = e0x.authors || "";
        this.Sx4B = e0x.actId;
        this.Sv4z = e0x.actName;
        this.bgH8z = e0x.title;
        this.St4x = {};
        this.cgr8j = e0x.mesg || "";
        this.cgo8g = e0x.placeholder || "说点什么吧";
        this.bgo8g = e0x.hideTip;
        var i0x, hA3x = +(new Date);
        try {
            i0x = top.localCache.w0x("user") || {}
        } catch (e) {
            i0x = {}
        }
        for (var i = 0, i0x = i0x.bindings || [], en2x; i < i0x.length; ++i) {
            en2x = !i0x[i].tokenJsonStr ? null : JSON.parse(i0x[i].tokenJsonStr);
            if (!en2x || en2x.expires_in === undefined) continue;
            var Sq4u = parseInt(en2x.expires_in),
                Sp4t = parseInt(i0x[i].refreshTime),
                cgn8f = (Sq4u + Sp4t) * 1e3 - 5 * 60 * 1e3;
            if (cgn8f > hA3x) this.St4x[i0x[i].type] = !0
        }
        this.tY7R = F0x.BQ9H.B0x({
            parent: this.So4s,
            err: this.bqH0x
        });
        if (this.gZ2x) {
            this.gZ2x.S0x()
        }
        this.gZ2x = F0x.Or3x.B0x({
            parent: document.body,
            target: this.el2x
        });
        if (this.er2x == 24 || this.er2x == 21 || this.tj7c()) {
            this.vQ7J.style.display = "none"
        } else {
            this.vQ7J.style.display = "";
            this.nS5X = F0x.Zg6a.B0x({
                parent: this.bfG8y,
                button: this.vQ7J,
                onstartupload: this.bqR0x.g0x(this, true),
                onfinishupload: this.bqR0x.g0x(this, false)
            })
        }
        if (this.tj7c()) {
            this.ut7m = F0x.bfy8q.B0x({
                parent: this.o0x.parentNode,
                onfinish: this.bqW0x.g0x(this),
                oncancel: function() {
                    this.bq0x()
                }.g0x(this)
            });
            if (e0x.extError) {
                this.ut7m.cgm8e({
                    agent: e0x.videoUploadAgent,
                    code: -600
                })
            } else {
                this.ut7m.JO1x({
                    agent: e0x.videoUploadAgent,
                    fileName: e0x.videoFileName
                })
            }
            this.Sk4o = true;
            this.bfi8a("addvideo")
        } else {
            this.Sk4o = false
        }
    };
    b0x.bD0x = function() {
        this.bI0x();
        if (this.tY7R) {
            this.tY7R.S0x();
            delete this.tY7R
        }
        if (this.gZ2x) {
            this.gZ2x.S0x();
            delete this.gZ2x
        }
        if (this.nS5X) {
            this.nS5X.S0x();
            delete this.nS5X
        }
        if (this.lh4l) {
            this.lh4l.S0x();
            delete this.lh4l
        }
    };
    b0x.bX1x = function() {
        this.bY1x = "m-wgt-sharewin"
    };
    b0x.bR0x = function() {
        this.cb1x();
        this.brc0x = a9j.cQ1x(this.o0x)[0];
        var bn0x = a9j.I0x(this.o0x, "j-flag");
        this.oG5L = bn0x.shift();
        this.bqH0x = bn0x.shift();
        this.So4s = bn0x.shift();
        this.el2x = bn0x.shift();
        this.qA6u = bn0x.shift();
        this.bfh8Z = bn0x.shift();
        this.cgk8c = bn0x.shift();
        this.vQ7J = bn0x.shift();
        this.ck1x = bn0x.shift();
        this.bfG8y = bn0x.shift();
        this.zt8l = bn0x.shift();
        this.csR1x = bn0x.shift();
        this.cgh8Z = bn0x.shift();
        this.dS2x = bn0x.shift();
        this.Fv0x = a9j.I0x(this.cgh8Z, "j-t");
        this.yi8a = H0x.AV9M.B0x({
            list: a9j.cQ1x(this.oG5L),
            selected: "z-slt",
            onchange: this.beE8w.g0x(this)
        });
        if (cG1x.cP1x.browser == "ie" && cG1x.cP1x.version < "8.0") {
            a9j.W0x(this.So4s, "position", "relative");
            a9j.W0x(this.So4s, "zIndex", "10")
        }
        h0x.q0x(window, "snsbind", this.PL3x.g0x(this));
        h0x.q0x(this.el2x, "input", this.fd2x.g0x(this));
        h0x.q0x(this.el2x, "keyup", this.sf6Z.g0x(this));
        h0x.q0x(this.o0x, "click", this.cv1x.g0x(this));
        this.P0x = p0x.Zx6r.B0x();
        this.P0x.q0x("onshareall", this.Sh4l.g0x(this, 0));
        this.P0x.q0x("onshareerror", this.hM3x.g0x(this));
        this.P0x.q0x("onshareprivate", this.Sh4l.g0x(this, 1));
        this.Sg4k = p0x.xM8E.B0x();
        this.hE3x = p0x.hJ3x.B0x();
        try {
            this.PO3x = top.api.sharePermission
        } catch (e) {}
        if (!this.PO3x) {
            this.PO3x = Bk9b;
            v0x.br0x("/api/event/user/permission", {
                type: "json",
                onload: function(d0x) {
                    if (d0x.code == 200) {
                        this.PO3x = NEJ.EX(Bk9b, d0x)
                    }
                }.g0x(this)
            })
        }
    };
    b0x.beE8w = function(d0x) {
        d0x.index == 0 ? a9j.x0x(this.brc0x, "m-plshare") : a9j.y0x(this.brc0x, "m-plshare");
        this.So4s.style.display = d0x.index == 0 ? "none" : "";
        this.cgk8c.style.display = d0x.index == 0 ? "" : "none";
        this.vQ7J.style.display = d0x.index == 0 ? "" : "none";
        if (this.er2x == 24 || this.er2x == 21) {
            this.vQ7J.style.display = "none"
        }
        this.bqH0x.style.display = "none";
        this.el2x.value = "";
        this.ca1x();
        this.BX9O();
        if (d0x.index == 0) {
            var dc1x = a9j.cX1x(this.el2x, "width");
            if (dc1x == "auto" || !dc1x) {
                return
            } else {
                if (this.gZ2x) {
                    this.gZ2x.S0x()
                }
                this.gZ2x = F0x.Or3x.B0x({
                    parent: document.body,
                    target: this.el2x
                })
            }
            this.bfG8y.style.display = ""
        } else {
            if (this.gZ2x) {
                this.gZ2x.S0x();
                delete this.gZ2x
            }
            this.bfG8y.style.display = "none"
        }
    };
    b0x.cv1x = function(d0x) {
        var f0x = h0x.U0x(d0x, "d:action");
        if (!f0x) return;
        if (a9j.u0x(f0x, "default") === undefined) {
            h0x.cf1x(d0x)
        }
        switch (a9j.u0x(f0x, "action")) {
            case "txt":
                this.kI4M();
                break;
            case "search":
                if (this.tj7c()) {
                    this.Sk4o = true;
                    this.bfi8a("addvideo");
                    this.o0x.style.display = "none";
                    this.uz7s("编辑封面");
                    this.ut7m = F0x.bfy8q.B0x({
                        parent: this.o0x.parentNode,
                        onfinish: this.bqW0x.g0x(this),
                        oncancel: function() {
                            this.bq0x()
                        }.g0x(this)
                    });
                    this.ut7m.cgg8Y({
                        covers: this.Sf4j,
                        fileName: this.Bp9g,
                        fileInfo: this.Se4i.fileInfo,
                        covers: this.Se4i.covers
                    });
                    this.hE3x.gA2x("click", {
                        type: "replacecover",
                        page: "sharevideo"
                    })
                } else if (this.zj8b && this.er2x != 24) {
                    if (this.lh4l) {
                        this.lh4l.S0x()
                    }
                    this.lh4l = F0x.blJ9A.B0x({
                        parent: this.o0x.parentNode,
                        onfinish: this.bei8a.g0x(this),
                        oncancel: this.cgf8X.g0x(this)
                    });
                    this.bea8S = true;
                    this.o0x.style.display = "none";
                    this.uz7s(this.jv4z > 0 ? "更换音乐" : "添加音乐")
                }
                break;
            case "at":
                h0x.rc6W(d0x); !! this.gH2x && this.gH2x.bq0x();
                this.gZ2x.Op3x();
                this.fs2x();
                break;
            case "emot":
                h0x.rc6W(d0x); !! this.gZ2x && this.gZ2x.Hd0x();
                if (!this.gH2x) {
                    this.gH2x = m0x.Hc0x.B0x({
                        parent: this.bfh8Z
                    });
                    this.gH2x.q0x("onselect", this.wW8O.g0x(this))
                }
                this.gH2x.N0x();
                break;
            case "upload":
                break;
            case "sns":
                h0x.bh0x(d0x);
                var bdU7N, bB0x, t0x = a9j.u0x(f0x, "type");
                if (!this.St4x[t0x]) {
                    bdU7N = f0x.href.split("?");
                    bB0x = k0x.ho3x(bdU7N[1]);
                    bB0x["csrf_token"] = v0x.gE2x("__csrf");
                    top.open(bdU7N[0] + "?" + k0x.dh1x(bB0x));
                    return
                }
                var bv0x = {
                    2: "sn",
                    3: "db",
                    4: "rr"
                };
                l0x.ys8k(f0x, "u-slg-" + bv0x[t0x] + "-gray");
                break;
            case "close":
                !! this.gH2x && this.gH2x.bq0x();
                this.bqd0x();
                break;
            case "share":
                h0x.bh0x(d0x);
                if (this.tj7c()) {
                    this.cge8W()
                } else if (a9j.bz0x(f0x, "u-btn2-2-dis")) {
                    if (!this.PO3x.pubEventWithoutResource && !(this.jv4z > 0)) {
                        this.cgd8V()
                    } else {}
                } else if (!(this.jv4z > 0) && !this.el2x.value && this.nS5X && this.nS5X.Jx1x().length == 0) {
                    m0x.Z0x.N0x({
                        type: 2,
                        tip: "请输入内容"
                    })
                } else {
                    this.cgb8T()
                }
                break
        }
    };
    b0x.cgd8V = function() {
        var qQ6K = 0,
            bdN7G = function() {
                if (qQ6K % 2) {
                    a9j.x0x(this.qA6u, "z-show")
                } else {
                    a9j.y0x(this.qA6u, "z-show")
                }
                qQ6K++;
                if (qQ6K > 5) {
                    clearInterval(eR2x)
                }
            },
            eR2x;
        return function() {
            qQ6K = 0;
            clearInterval(eR2x);
            eR2x = setInterval(bdN7G.g0x(this), 200)
        }
    }();
    b0x.PL3x = function(n0x) {
        n0x = n0x.result;
        this.St4x[n0x.type] = !0;
        var s0x = k0x.cT1x(SD4H, n0x.type),
            cc1x = "u-slg-" + dC2x[s0x] + "-gray";
        a9j.x0x(this.Fv0x[s0x], cc1x)
    };
    b0x.bei8a = function(bt0x) {
        var j0x = bt0x.data;
        this.jv4z = bt0x.id;
        this.er2x = bt0x.type;
        this.o0x.style.display = "";
        this.uz7s(this.bgH8z);
        this.lh4l && this.lh4l.S0x();
        this.bea8S = false;
        this.SB4F = j0x.picUrl;
        this.Bp9g = j0x.title || "";
        this.Bq9h = j0x.author || "";
        this.bgW8O = j0x.authors || "";
        this.bsr1x();
        this.Qh3x()
    };
    b0x.bqW0x = function(bt0x) {
        this.ut7m && this.ut7m.S0x();
        this.Sk4o = false;
        this.bfi8a("sharevideo");
        this.uz7s(this.bgH8z);
        this.o0x.style.display = "";
        this.SB4F = bt0x.coverUrl;
        this.Bp9g = bt0x.fileName, this.Se4i = bt0x;
        this.Bq9h = l0x.clV9M(bt0x.fileInfo.size || bt0x.fileInfo.afterSize);
        this.el2x.focus();
        this.bsr1x();
        this.Qh3x()
    };
    b0x.cgf8X = function() {
        this.lh4l && this.lh4l.S0x();
        this.o0x.style.display = "";
        this.uz7s(this.bgH8z);
        this.bea8S = false;
        this.Qh3x()
    };
    b0x.wW8O = function(d0x) {
        var bi0x = "[" + d0x.text + "]";
        fF2x.GN0x(this.el2x, this.ns5x, bi0x);
        this.fs2x()
    };
    b0x.fd2x = function(d0x) {
        cG1x.cP1x.browser == "ie" && cG1x.cP1x.version < "7.0" ? setTimeout(this.fs2x.g0x(this), 0) : this.fs2x()
    };
    b0x.sf6Z = function(d0x) {
        this.kI4M();
        if (d0x.keyCode == 8) this.fs2x()
    };
    b0x.fs2x = function() {
        this.kI4M();
        this.BX9O()
    };
    b0x.BX9O = function() {
        var bo0x = Math.ceil(k0x.fx2x(this.el2x.value.trim()) / 2);
        this.ck1x.innerText = 140 - bo0x;
        bo0x > 140 ? a9j.fe2x(this.ck1x, "s-fc4", "s-fc6") : a9j.fe2x(this.ck1x, "s-fc6", "s-fc4")
    };
    b0x.cgb8T = function() {
        if (this.cs1x()) return;
        if (k0x.fx2x(this.el2x.value.trim()) > 280) {
            this.ca1x("字数超过140个字符");
            return
        }
        var t0x = this.yi8a.rO6I(),
            j0x;
        if (t0x == 0) {
            for (var i = 0, xh8Z = []; i < this.Fv0x.length; ++i) {
                if (!a9j.bz0x(this.Fv0x[i], "u-slg-" + dC2x[i] + "-gray")) xh8Z.push(SD4H[i])
            }
            this.cs1x(!0);
            j0x = {
                id: this.jv4z,
                msg: this.el2x.value.trim(),
                type: this.Sb4f(this.er2x),
                picUrl: this.SB4F,
                snsTypes: xh8Z.join(","),
                isPub: this.zj8b
            };
            if (this.Sx4B > 0) {
                j0x.actId = this.Sx4B;
                if (this.Sv4z) {
                    j0x.msg = "#" + this.Sv4z + "#" + j0x.msg
                }
            }
            var oA5F = this.nS5X && this.nS5X.Jx1x();
            if (oA5F && oA5F.length) {
                j0x.pics = oA5F
            }
            this.P0x.ciO9F(j0x)
        } else {
            var qS6M = this.tY7R.MJ2x();
            if (qS6M.length <= 0) {
                this.ca1x("请至少选择一位好友");
                return
            }
            this.P0x.ciN9E({
                data: {
                    id: this.jv4z,
                    msg: this.el2x.value.trim(),
                    type: this.Sb4f(this.er2x),
                    userIds: "[" + qS6M.join(",") + "]"
                }
            })
        }
    };
    b0x.cge8W = function() {
        if (this.cs1x()) {
            return
        }
        if (k0x.fx2x(this.el2x.value.trim()) > 280) {
            this.ca1x("字数超过140个字符");
            return
        }
        for (var i = 0, xh8Z = []; i < this.Fv0x.length; ++i) {
            if (!a9j.bz0x(this.Fv0x[i], "u-slg-" + dC2x[i] + "-gray")) xh8Z.push(SD4H[i])
        }
        this.cs1x(!0);
        var zz8r = this.Se4i.fileInfo,
            j0x = {
                msg: this.el2x.value.trim(),
                type: "video"
            },
            cga8S = {
                vid: zz8r.vid,
                coverId: this.Se4i.coverId,
                nosKey: zz8r.objectKey,
                size: zz8r.afterSize,
                duration: zz8r.afterDuration,
                width: zz8r.coverWidth,
                height: zz8r.coverHeight
            };
        if (this.Sx4B > 0) {
            j0x.actId = this.Sx4B;
            if (this.Sv4z) {
                j0x.msg = "#" + this.Sv4z + "#" + j0x.msg
            }
        }
        j0x.videoinfo = JSON.stringify(cga8S);
        this.P0x.ciM9D({
            data: j0x,
            snsTypes: xh8Z.join(",")
        })
    };
    b0x.Sh4l = function(t0x, n0x) {
        this.cs1x(!1);
        this.bq0x();
        if (!this.bgo8g) {
            m0x.Z0x.N0x({
                tip: "分享成功" + (n0x.point > 0 ? ' 获得<em class="s-fc6">' + n0x.point + "积分</em>" : ""),
                autoclose: true
            })
        }
        h0x.A0x(m0x.wI7B, "sharesuccess", {
            isPrivate: t0x,
            rid: this.jv4z,
            rtype: this.er2x,
            data: n0x.event
        });
        this.A0x("onshare")
    };
    b0x.hM3x = function(n0x) {
        this.cs1x(!1);
        var bF0x = "分享失败";
        if (n0x.code) {
            switch (n0x.code) {
                case 404:
                    bF0x = "分享的资源不存在";
                    break;
                case 407:
                    bF0x = "输入内容包含有关键字";
                    break;
                case 408:
                    bF0x = "分享太快了，过会再分享吧";
                    break;
                case 315:
                    bF0x = n0x.message || "根据对方设置，你没有该操作权限";
                    break
            }
        }
        this.ca1x(bF0x)
    };
    b0x.kI4M = function() {
        this.ns5x = fF2x.sE6y(this.el2x)
    };
    b0x.ca1x = function(bF0x) {
        this.dv1x(this.dS2x, bF0x)
    };
    b0x.cs1x = function(cB1x) {
        return this.dJ2x(this.zt8l, cB1x, "分享", "分享中...")
    };
    b0x.Sb4f = function(jf4j) {
        return cgu8m[jf4j] || ""
    };
    b0x.cfZ8R = function() {
        var ew2x, ty7r = this.Sb4f(this.er2x);
        this.qA6u.style.display = "";
        if (this.jv4z <= 0) {
            this.qA6u.innerHTML = '<i class="highlight"></i><div class="text f-thide f-fl f-fs1"><i class="logo f-fl u-icn2 u-icn2-quaver"></i><span class="f-fs1 f-fl">给动态配上音乐</span></div><i class="f-fr icn u-icn2 u-icn2-plus"></i>'
        } else {
            if (!this.Bp9g) {
                this.qA6u.style.display = "none";
                return
            }
            var RZ4d = this.zj8b && this.er2x != 24;
            ew2x = (SC4G[ty7r] ? SC4G[ty7r] + "：" : "") + this.Bp9g + (bpX0x[ty7r] || " ") + (ty7r == "mv" || ty7r == "album" ? this.bgW8O || this.Bq9h : this.Bq9h);
            a9j.dP2x(this.qA6u, "m-xwgt-share-infobar", {
                canChange: RZ4d,
                info: ew2x
            });
            if (RZ4d) {
                a9j.x0x(this.qA6u, "z-dis")
            } else {
                a9j.y0x(this.qA6u, "z-dis")
            }
        }
        a9j.x0x(this.qA6u, "info-video")
    };
    b0x.bsr1x = function() {
        var ty7r = this.Sb4f(this.er2x),
            ew2x = (SC4G[ty7r] ? SC4G[ty7r] + "：" : "") + this.Bp9g + (bpX0x[ty7r] || " ") + (ty7r == "mv" || ty7r == "album" ? this.bgW8O || this.Bq9h : this.Bq9h);
        RZ4d = this.zj8b && this.er2x != 24;
        if (this.tj7c()) {
            a9j.y0x(this.qA6u, "info-video");
            a9j.dP2x(this.qA6u, "m-xwgt-share-videobar", {
                cover: this.SB4F,
                name: this.Bp9g,
                size: this.Bq9h
            })
        } else {
            a9j.x0x(this.qA6u, "info-video");
            a9j.dP2x(this.qA6u, "m-xwgt-share-infobar", {
                canChange: RZ4d,
                isPub: this.zj8b,
                info: ew2x
            })
        }
    };
    b0x.cfY8Q = function() {
        var Fn0x = this.el2x.value;
        if (this.zj8b) {
            if (this.tj7c()) {
                return true
            }
            if ( !! this.bea8S) {
                return !!Fn0x && !! Fn0x.length || !! this.nS5X && this.nS5X.Jx1x().length > 0
            } else {
                return this.jv4z > 0 || !! Fn0x && !! Fn0x.length || !! this.nS5X && this.nS5X.Jx1x().length > 0
            }
        } else {
            return !!Fn0x && !! Fn0x.length || !! this.nS5X && this.nS5X.Jx1x().length > 0
        }
    };
    b0x.Qh3x = function() {
        if (!this.zj8b || this.PO3x.pubEventWithoutResource || this.jv4z > 0 || this.tj7c()) {
            a9j.x0x(this.zt8l, "u-btn2-2-dis")
        } else {
            a9j.y0x(this.zt8l, "u-btn2-2-dis")
        }
    };
    b0x.bqR0x = function(bdG7z) {
        if (bdG7z) {
            a9j.y0x(this.zt8l, "u-btn2-2-dis")
        } else {
            this.Qh3x()
        }
    };
    b0x.bqd0x = function(d0x) {
        d0x = d0x || {};
        d0x.stopped = true;
        if (this.Sk4o) {
            this.ut7m.cfX8P();
            this.hE3x.gA2x("click", {
                type: "cancel",
                page: "addvideo"
            })
        } else if (this.cfY8Q()) {
            l0x.gM2x({
                title: "提示",
                message: this.tj7c() ? "确定退出本次视频编辑？" : "是否退出本次编辑？",
                btnok: "退出",
                action: function(X0x) {
                    if (X0x == "ok") {
                        this.bq0x()
                    }
                }.g0x(this)
            });
            if (this.tj7c()) {
                this.hE3x.gA2x("click", {
                    type: "cancel",
                    page: "sharevideo"
                })
            }
        } else {
            this.bq0x()
        }
    };
    b0x.uz7s = function(eD2x, dy2x) {
        this.nt5y.Ad8V(eD2x, dy2x)
    };
    b0x.bfi8a = function(t0x) {
        this.hE3x.gA2x("page", {
            type: t0x
        })
    };
    b0x.tj7c = function() {
        return this.er2x == 39
    };
    b0x.N0x = function() {
        var cfW8O = function(r0x, s0x) {
            var cc1x = "u-slg-" + dC2x[s0x] + "-gray";
            !this.St4x[SD4H[s0x]] ? a9j.y0x(r0x, cc1x) : a9j.x0x(r0x, cc1x)
        };
        return function() {
            if (this.tj7c()) {
                this.o0x.style.display = "none";
                this.uz7s("添加视频")
            } else {
                this.o0x.style.display = ""
            }
            K0x.N0x.call(this);
            this.o0x.style.display = "";
            this.ca1x();
            this.cs1x(!1);
            this.yi8a.JO1x(0);
            this.el2x.focus();
            this.el2x.value = this.cgr8j || "";
            this.el2x.placeholder = this.cgo8g || "";
            this.cfZ8R();
            this.fs2x();
            this.tY7R.che9V();
            k0x.be0x(this.Fv0x, cfW8O, this);
            this.kI4M();
            if (this.zj8b) {
                this.oG5L.style.display = "none"
            } else {
                this.oG5L.style.display = ""
            }
            this.Qh3x();
            if (this.tj7c()) {
                this.o0x.style.display = "none"
            }
        }
    }();
    b0x.bq0x = function(d0x) {
        K0x.bq0x.call(this); !! this.gH2x && this.gH2x.bq0x();
        if (this.tY7R) {
            this.tY7R.S0x();
            delete this.tY7R
        }
        if (this.gZ2x) {
            this.gZ2x.S0x();
            delete this.gZ2x
        }
        if (this.nS5X) {
            this.nS5X.S0x();
            delete this.nS5X
        }
        if (this.ut7m) {
            this.ut7m = this.ut7m.S0x()
        }
        if (this.lh4l) {
            this.lh4l.S0x();
            delete this.lh4l
        }
    };
    l0x.lN4R = function(e0x) {
        if (!GUser || !GUser.userId || GUser.userId <= 0) {
            top.login();
            return
        }
        if (e0x.title === undefined) {
            e0x.title = "分享"
        }
        if (e0x.actId) {
            var t0x = cgt8l[e0x.resourceType],
                ds1x = e0x.resourceJson,
                hl3x;
            if (k0x.fj2x(ds1x)) {
                try {
                    ds1x = JSON.parse(ds1x)
                } catch (e) {}
            }
            if (t0x) {
                hl3x = l0x.bKq4u(t0x, ds1x);
                e0x.name = hl3x.title;
                e0x.author = hl3x.author;
                e0x.picUrl = hl3x.picUrl;
                e0x.type = t0x;
                e0x.rid = (ds1x || []).id
            }
        }
        m0x.wI7B.N0x(e0x)
    };
    H0x.ft2x.B0x({
        element: m0x.wI7B,
        event: ["sharesuccess"]
    })
})();
(function() {
    var c0x = NEJ.P,
        Y0x = NEJ.O,
        h0x = c0x("nej.v"),
        a9j = c0x("nej.e"),
        v0x = c0x("nej.j"),
        m0x = c0x("nm.l"),
        F0x = c0x("nm.w"),
        bG0x = c0x("nej.ui"),
        p0x = c0x("nm.d"),
        l0x = c0x("nm.x"),
        b0x, K0x;
    m0x.RY4c = NEJ.C();
    b0x = m0x.RY4c.O0x(m0x.dT2x);
    K0x = m0x.RY4c.ch1x;
    b0x.cl1x = function() {
        this.cr1x()
    };
    b0x.bR0x = function() {
        this.cb1x();
        var i0x = a9j.I0x(this.o0x, "j-flag");
        h0x.q0x(i0x[0], "click", this.DC9t.g0x(this))
    };
    b0x.bX1x = function() {
        this.bY1x = "m-import-ok"
    };
    b0x.bk0x = function(e0x) {
        e0x.parent = e0x.parent || document.body;
        e0x.title = "歌曲同步完成";
        this.bl0x(e0x)
    };
    b0x.bD0x = function() {
        this.bI0x()
    };
    b0x.DC9t = function(d0x) {
        this.bq0x();
        if (location.pathname.indexOf("my") >= 0) {
            location.reload()
        } else {
            location.dispatch2("/my/")
        }
    };
    b0x.zY8Q = function() {
        this.bq0x()
    };
    b0x.bqT0x = function(d0x) {
        if (d0x.keyCode == 13) this.Cv9m()
    }
})();
(function() {
    var c0x = NEJ.P,
        Y0x = NEJ.O,
        h0x = c0x("nej.v"),
        a9j = c0x("nej.e"),
        v0x = c0x("nej.j"),
        M0x = c0x("nej.p"),
        k0x = c0x("nej.u"),
        m0x = c0x("nm.l"),
        F0x = c0x("nm.w"),
        bG0x = c0x("nej.ui"),
        p0x = c0x("nm.d"),
        l0x = c0x("nm.x"),
        b0x, K0x;
    m0x.btc1x = NEJ.C();
    b0x = m0x.btc1x.O0x(m0x.dT2x);
    b0x.bX1x = function() {
        this.bY1x = "m-programtips-layer"
    };
    b0x.bR0x = function() {
        this.cb1x();
        this.bT1x = a9j.I0x(this.o0x, "j-flag")
    };
    b0x.bk0x = function(e0x) {
        e0x.clazz = " m-layer-programtips";
        e0x.parent = e0x.parent || document.body;
        e0x.title = "付费内容提示";
        e0x.draggable = !0;
        e0x.destroyalbe = !0;
        e0x.mask = true;
        this.bl0x(e0x);
        this.gp2x = e0x.id;
        this.cfT8L = e0x.radiotype;
        this.kk4o = location.protocol + "//" + (this.cfR8J() || "music.163.com") + "/m/" + this.cfT8L + "?id=" + this.gp2x;
        this.cfQ8I()
    };
    b0x.bD0x = function() {
        this.bI0x()
    };
    b0x.zY8Q = function() {
        this.bq0x()
    };
    b0x.DC9t = function(d0x) {
        this.A0x("onok", z0x);
        this.bq0x()
    };
    l0x.btl1x = function(e0x) {
        m0x.btc1x.B0x(e0x).N0x()
    };
    b0x.cfQ8I = function() {
        v0x.br0x("/api/web/qrcode/get", {
            method: "POST",
            type: "json",
            data: k0x.dh1x({
                url: this.kk4o,
                size: 180
            }),
            onload: function(j0x) {
                if (j0x.code == 200) {
                    this.cfO8G(j0x.qrcodeImageUrl)
                } else {
                    alert("二维码获取失败")
                }
            }.g0x(this)
        })
    };
    b0x.cfR8J = function() {
        var cfH8z = location.host;
        if (cfH8z.indexOf("music") >= 0) {
            return "music.163.com"
        } else {
            return "igame.163.com"
        }
    };
    b0x.cfO8G = function(kC4G) {
        this.bT1x[0].style.backgroundImage = "url(" + kC4G + ")"
    }
})();
(function() {
    var c0x = NEJ.P,
        a9j = c0x("nej.e"),
        cG1x = c0x("nej.p"),
        h0x = c0x("nej.v"),
        k0x = c0x("nej.u"),
        H0x = c0x("nej.ut"),
        v0x = c0x("nej.j"),
        p0x = c0x("nm.d"),
        l0x = c0x("nm.x"),
        D0x = c0x("nm.m"),
        m0x = c0x("nm.l"),
        L0x = c0x("nm.m.f"),
        b0x, K0x;
    D0x.cM1x = NEJ.C();
    b0x = D0x.cM1x.O0x(H0x.dj1x);
    b0x.bH0x = function() {
        var pu5z = !1;
        return function() {
            if (pu5z) return;
            pu5z = !0;
            this.bM0x();
            if (top == self) {
                return
            }
            this.rk6e = a9j.w0x("g_backtop");
            if (window.GRef != "mail") {} else {
                this.btu1x()
            }
            H0x.ft2x.B0x({
                element: window,
                event: ["share", "playchange", "snsbind", "playstatechange"]
            });
            this.bU1x([
                [window, "scroll", this.zF8x.g0x(this)],
                [document, "keyup", this.cfG8y.g0x(this)],
                [document.body, "click", this.rv6p.g0x(this)],
                [document, "mouseup", this.cfF8x.g0x(this)],
                [this.rk6e, "click", this.IO1x.g0x(this)],
                [p0x.rR6L, "message", this.qz6t.g0x(this)]
            ]);
            l0x.ciV9M(document.body);
            this.zF8x();
            if (this.zG8y !== false && typeof GUser !== "undefined" && GUser.userId > 0) p0x.rR6L.fP2x().uW7P();
            try {
                top.GUser = NEJ.X(top.GUser, GUser);
                top.api.refreshUserInfo();
                if (cG1x.cP1x.browser == "ie" && parseInt(cG1x.cP1x.version) < 9 && /#(.*?)$/.test(top.document.title)) {
                    top.document.title = "网易云音乐"
                } else {
                    var gf2x = top.player.getPlaying();
                    if (gf2x && gf2x.track && gf2x.playing) {
                        top.document.title = decodeURIComponent("%E2%96%B6%20") + gf2x.track.name
                    } else {
                        top.document.title = document.title
                    }
                }
            } catch (e) {}
            window.share = this.wi7b.g0x(this);
            this.jM4Q = p0x.hJ3x.B0x();
            window.log = this.mr5w.g0x(this);
            var rB6v = location.search;
            if (rB6v) {
                var bB0x = rB6v.substr(rB6v.indexOf("?") + 1),
                    fU2x = k0x.ho3x(bB0x);
                if (fU2x && fU2x["_hash"]) location.hash = fU2x["_hash"]
            }
        }
    }();
    b0x.cfG8y = function(d0x) {
        var f0x = h0x.U0x(d0x);
        try {
            if (d0x.keyCode == 80 && l0x.bHw4A() || ["textarea", "input"].indexOf(f0x.tagName.toLowerCase()) >= 0) return;
            h0x.A0x(top.document, "keyup", {
                ctrlKey: d0x.ctrlKey,
                keyCode: d0x.keyCode
            })
        } catch (e) {}
    };
    b0x.rv6p = function(d0x) {
        var f0x = h0x.U0x(d0x);
        if (f0x && f0x.tagName == "INPUT") return;
        var f0x = h0x.U0x(d0x, "d:pid");
        if (f0x) {
            h0x.cf1x(d0x);
            var ou5z = a9j.u0x(f0x, "pid"),
                zH8z = a9j.u0x(f0x, "ptype"),
                X0x = a9j.u0x(f0x, "action") || "play";
            switch (X0x) {
                case "subscribe":
                    l0x.ls4w({
                        tracks: [ou5z]
                    });
                    break
            }
        }
        f0x = h0x.U0x(d0x, "d:resAction");
        if (f0x && f0x.className.indexOf("-dis") == -1) {
            var cy1x = a9j.u0x(f0x, "resId"),
                t0x = a9j.u0x(f0x, "resType"),
                bdg7Z = a9j.u0x(f0x, "resRadiotype"),
                dG2x = a9j.u0x(f0x, "resFrom"),
                j0x = a9j.u0x(f0x, "resData"),
                X0x = a9j.u0x(f0x, "resAction"),
                blw9n = a9j.u0x(f0x, "resCopyright"),
                RW4a = a9j.u0x(f0x, "resAuditstatus");
            if (X0x != "log" && X0x != "bilog") h0x.cf1x(d0x);
            switch (X0x) {
                case "log":
                    j0x = (j0x || "").split("|");
                    if ( !! j0x[0]) {
                        var bd0x = {
                            id: cy1x,
                            alg: j0x[2] || "itembased",
                            scene: j0x[3],
                            position: j0x[1] || 0
                        };
                        if ( !! j0x[4]) bd0x.srcid = j0x[4];
                        window.log(j0x[0], bd0x)
                    }
                    break;
                case "bilog":
                    var cfD8v = a9j.u0x(f0x, "logAction"),
                        cfA8s = a9j.u0x(f0x, "logJson");
                    window.log(cfD8v, cfA8s);
                    break;
                case "share":
                    if (RW4a && RW4a == 1) {
                        l0x.hQ3x("由于版权问题，该节目暂时无法分享。")
                    } else {
                        share(cy1x, t0x, a9j.u0x(f0x, "resPic"), a9j.u0x(f0x, "resName"), a9j.u0x(f0x, "resAuthor"), a9j.u0x(f0x, "resAuthors"))
                    }
                    break;
                case "fav":
                case "subscribe":
                    if (t0x == 18) {
                        var oF5K = a9j.u0x(f0x, "resLevel"),
                            qd6X = a9j.u0x(f0x, "resFee");
                        if (oF5K == 10) {
                            l0x.tE7x(qd6X, cy1x, "song");
                            break
                        }
                        l0x.ls4w({
                            tracks: [cy1x]
                        })
                    }
                    break;
                case "download":
                    l0x.Wp5u({
                        id: cy1x,
                        type: t0x
                    });
                    break;
                case "programtips":
                    if (RW4a && RW4a == 1) {
                        l0x.hQ3x("由于版权问题，该节目暂时无法分享。")
                    } else {
                        l0x.btl1x({
                            id: cy1x,
                            radiotype: bdg7Z
                        })
                    }
                    break
            }
        }
        if (top == self) return;
        try {
            top.onIframeClick(d0x)
        } catch (e) {}
    };
    b0x.cfF8x = function(d0x) {
        try {
            h0x.A0x(top.document, "mouseup")
        } catch (e) {}
    };
    b0x.zF8x = function() {
        var cfy8q = function() {
            var co1x = window.innerHeight;
            if (!k0x.tT7M(co1x)) co1x = (document.documentElement || document.body).clientHeight;
            return co1x
        };
        return function(d0x) {
            if (!this.rk6e) return;
            var RV4Z = cfy8q(),
                gb2x = document.documentElement.scrollTop || document.body.scrollTop;
            a9j.W0x(this.rk6e, "display", gb2x > 0 ? "" : "none");
            if (cG1x.cP1x.browser == "ie" && cG1x.cP1x.version < "7.0") {
                var fX2x = Math.min(document.body.clientHeight, RV4Z + gb2x) - 204;
                a9j.W0x(this.rk6e, "top", fX2x + "px")
            }
        }
    }();
    b0x.IO1x = function(d0x) {
        h0x.cf1x(d0x);
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0
    };
    b0x.wi7b = function() {
        var bcU7N = function(d0x) {
            h0x.A0x(window, "share", d0x)
        };
        return function(cy1x, t0x, CG9x, T0x, IY1x, IZ1x) {
            l0x.lN4R({
                rid: cy1x,
                type: t0x,
                purl: CG9x,
                name: T0x,
                author: IY1x,
                authors: IZ1x,
                onshare: bcU7N.g0x(this)
            })
        }
    }();
    b0x.mr5w = function(X0x, bd0x) {
        try {
            top.log(X0x, bd0x)
        } catch (e) {
            switch (X0x) {
                case "play":
                    this.jM4Q.eL2x(bd0x);
                    break;
                case "search":
                    this.jM4Q.bGd3x(bd0x);
                    break;
                default:
                    this.jM4Q.gA2x(X0x, bd0x)
            }
        }
    };
    b0x.btu1x = function() {
        var RU4Y, bcJ7C = false,
            bs0x = [45, 60];
        var cfx8p = function(bF0x) {
            if (bF0x.title != "MailBoxImport") return;
            var R0x = JSON.parse(bF0x.content || "null") || Y0x;
            if (R0x.status == 10) {
                m0x.RY4c.B0x().N0x();
                window.clearTimeout(RU4Y)
            }
        };
        var tz7s = function(d0x) {
            if (d0x.code == 200) {
                if (d0x.status == 1) {
                    h0x.q0x(p0x.yl8d, "message", cfx8p.g0x(this));
                    p0x.yl8d.B0x().bbx7q();
                    bcJ7C = true
                } else {
                    if (bcJ7C) {
                        if (d0x.status == 10) {
                            m0x.RY4c.B0x().N0x();
                            h0x.ip3x(p0x.yl8d, "message");
                            window.clearTimeout(RU4Y);
                            bcJ7C = false
                        }
                    } else {
                        window.clearTimeout(RU4Y)
                    }
                }
            }
        };
        return function() {
            var rd6X = bs0x.shift() * 1e3;
            v0x.br0x("/api/musicbox/mail/status", {
                type: "json",
                method: "get",
                onload: tz7s.g0x(this)
            });
            if (rd6X) {
                RU4Y = window.setTimeout(arguments.callee, rd6X)
            }
        }
    }();
    b0x.qz6t = function(d0x) {
        try {
            top.polling(d0x)
        } catch (e) {}
    }
})()