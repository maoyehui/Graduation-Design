(function() {
    var c0x = NEJ.P,
        bm0x = NEJ.F,
        a9j = c0x("nej.e"),
        h0x = c0x("nej.v"),
        k0x = c0x("nej.u"),
        ba0x = c0x("nej.h"),
        M0x = c0x("nej.p");
    var jw4A = {
        opacity: 1,
        "z-index": 1,
        background: 1,
        "font-weight": 1,
        filter: 1
    };
    ba0x.bqa0x = function(hz3x) {
        return jw4A[hz3x] === undefined && hz3x.indexOf("color") < 0
    };
    ba0x.QM3x = function(f0x, md4h, pt5y) {
        pt5y = pt5y.slice(0, -1);
        a9j.W0x(f0x, "transition", pt5y);
        a9j.fH2x(f0x, md4h);
        return this
    };
    ba0x.Qc3x = function(f0x, dl1x, mW5b) {
        a9j.fH2x(f0x, dl1x);
        a9j.W0x(f0x, "transition", "none");
        mW5b.call(null, dl1x);
        return this
    }
})();
(function() {
    var c0x = NEJ.P,
        bm0x = NEJ.F,
        ba0x = c0x("nej.h"),
        M0x = c0x("nej.p");
    if (M0x.lX4b.trident1) return;
    ba0x.DO9F = function() {
        return !0
    }
})();
(function() {
    var c0x = NEJ.P,
        Y0x = NEJ.O,
        bm0x = NEJ.F,
        M0x = c0x("nej.ut"),
        b0x;
    if ( !! M0x.bfs8k) return;
    M0x.bfs8k = NEJ.C();
    b0x = M0x.bfs8k.O0x(M0x.cC1x);
    b0x.bk0x = function(e0x) {
        this.bl0x(e0x);
        this.Rb4f = e0x.to || Y0x;
        this.NX3x = e0x.from || {};
        this.ccv8n = Math.max(0, parseInt(e0x.delay) || 0)
    };
    b0x.bD0x = function() {
        this.bI0x();
        this.bh0x();
        if ( !! this.NZ3x) {
            window.clearTimeout(this.NZ3x);
            delete this.NZ3x
        }
        delete this.Rb4f;
        delete this.NX3x
    };
    b0x.bHr4v = function(bL0x) {
        if (!this.NX3x) return;
        if (("" + bL0x).indexOf(".") >= 0) bL0x = +(new Date);
        if (this.bHs4w(bL0x)) {
            this.bh0x();
            return
        }
        this.dI2x = requestAnimationFrame(this.bHr4v.g0x(this))
    };
    b0x.bHs4w = bm0x;
    b0x.eL2x = function() {
        var ccu8m = function() {
            this.NZ3x = window.clearTimeout(this.NZ3x);
            this.NX3x.time = +(new Date);
            this.dI2x = requestAnimationFrame(this.bHr4v.g0x(this))
        };
        return function() {
            this.NZ3x = window.setTimeout(ccu8m.g0x(this), this.ccv8n);
            return this
        }
    }();
    b0x.bh0x = function() {
        this.dI2x = cancelRequestAnimationFrame(this.dI2x);
        this.A0x("onstop");
        return this
    }
})();
(function() {
    var c0x = NEJ.P,
        Y0x = NEJ.O,
        k0x = c0x("nej.u"),
        M0x = c0x("nej.ut"),
        b0x, K0x;
    if ( !! M0x.AK9B) return;
    M0x.AK9B = NEJ.C();
    b0x = M0x.AK9B.O0x(M0x.bfs8k);
    K0x = M0x.AK9B.ch1x;
    b0x.bk0x = function(e0x) {
        this.bl0x(e0x);
        this.bfd8V = e0x.duration || 200;
        this.cct8l = 1 / (200 * this.bfd8V);
        this.ccs8k(e0x.timing);
        this.ccl8d()
    };
    b0x.bD0x = function() {
        this.bI0x();
        delete this.GK0x;
        delete this.beu8m
    };
    b0x.ccs8k = function() {
        var fQ2x = /^cubic\-bezier\((.*?)\)$/i,
            jg4k = /\s*,\s*/i,
            bHJ4N = {
                linear: [0, 0, 1, 1],
                ease: [.25, .1, .25, 1],
                easein: [.42, 0, 1, 1],
                easeout: [0, 0, .58, 1],
                easeinout: [0, 0, .58, 1]
            };
        var cck8c = function(z0x, s0x, i0x) {
            i0x[s0x] = parseFloat(z0x)
        };
        return function(Ra4e) {
            Ra4e = (Ra4e || "").toLowerCase();
            this.GK0x = bHJ4N[Ra4e];
            if (fQ2x.test(Ra4e)) {
                this.GK0x = RegExp.$1.split(jg4k);
                k0x.be0x(this.GK0x, cck8c)
            }
            if ( !! this.GK0x) return;
            this.GK0x = bHJ4N.ease
        }
    }();
    b0x.ccl8d = function() {
        var GM0x = this.GK0x,
            bdI7B = 3 * GM0x[0],
            bHP4T = 3 * (GM0x[2] - GM0x[0]) - bdI7B,
            bLR4V = 1 - bdI7B - bHP4T,
            bdy7r = 3 * GM0x[1],
            bHS4W = 3 * (GM0x[3] - GM0x[1]) - bdy7r,
            cch8Z = 1 - bdy7r - bHS4W;
        this.beu8m = {
            ax: bLR4V,
            ay: cch8Z,
            bx: bHP4T,
            by: bHS4W,
            cx: bdI7B,
            cy: bdy7r
        }
    };
    b0x.ccb8T = function() {
        var bIl4p = function(bL0x, nW5b) {
            return ((nW5b.ax * bL0x + nW5b.bx) * bL0x + nW5b.cx) * bL0x
        };
        var cbY8Q = function(bL0x, nW5b) {
            return ((nW5b.ay * bL0x + nW5b.by) * bL0x + nW5b.cy) * bL0x
        };
        var cbU8M = function(bL0x, nW5b) {
            return (3 * nW5b.ax * bL0x + 2 * nW5b.bx) * bL0x + nW5b.cx
        };
        var cbT7M = function(bL0x, bIA4E, nW5b) {
            var t0, t1, t2, x2, d2, i;
            for (t2 = bL0x, i = 0; i < 8; i++) {
                x2 = bIl4p(t2, nW5b) - bL0x;
                if (Math.abs(x2) < bIA4E) return t2;
                d2 = cbU8M(t2, nW5b);
                if (Math.abs(d2) < 1e-6) break;
                t2 = t2 - x2 / d2
            }
            t0 = 0;
            t1 = 1;
            t2 = bL0x;
            if (t2 < t0) return t0;
            if (t2 > t1) return t1;
            while (t0 < t1) {
                x2 = bIl4p(t2, nW5b);
                if (Math.abs(x2 - bL0x) < bIA4E) return t2;
                if (bL0x > x2) t0 = t2;
                else t1 = t2;
                t2 = (t1 - t0) * .5 + t0
            }
            return t2
        };
        return function(de1x) {
            return cbY8Q(cbT7M(de1x / this.bfd8V, this.cct8l, this.beu8m), this.beu8m)
        }
    }();
    b0x.bHs4w = function(bL0x) {
        var de1x = bL0x - this.NX3x.time,
            xq8i = this.ccb8T(de1x),
            bj0x = k0x.Hu0x(this.NX3x.offset * (1 - xq8i) + this.Rb4f.offset * xq8i, 2),
            mW5b = !1;
        if (de1x >= this.bfd8V) {
            bj0x = this.Rb4f.offset;
            mW5b = !0
        }
        this.A0x("onupdate", {
            offset: bj0x
        });
        return mW5b
    };
    b0x.bh0x = function() {
        this.A0x("onupdate", {
            offset: this.Rb4f.offset
        });
        K0x.bh0x.apply(this, arguments);
        return this
    }
})();
(function() {
    var M0x = NEJ.P("nej.ut"),
        bIE4I;
    if ( !! M0x.rZ6T) return;
    M0x.rZ6T = NEJ.C();
    bIE4I = M0x.rZ6T.O0x(M0x.AK9B);
    bIE4I.bk0x = function(e0x) {
        e0x = NEJ.X({}, e0x);
        e0x.timing = "linear";
        this.bl0x(e0x)
    }
})();
(function() {
    var c0x = NEJ.P,
        M0x = c0x("nej.ut"),
        b0x;
    if ( !! M0x.Ip0x) return;
    M0x.Ip0x = NEJ.C();
    b0x = M0x.Ip0x.O0x(M0x.AK9B);
    b0x.bk0x = function(e0x) {
        e0x = NEJ.X({}, e0x);
        e0x.timing = "easein";
        this.bl0x(e0x)
    }
})();
(function() {
    var c0x = NEJ.P,
        M0x = c0x("nej.ut"),
        b0x;
    if ( !! M0x.bgG8y) return;
    M0x.bgG8y = NEJ.C();
    b0x = M0x.bgG8y.O0x(M0x.AK9B);
    b0x.bk0x = function(e0x) {
        e0x = NEJ.X({}, e0x);
        e0x.timing = "easeout";
        this.bl0x(e0x)
    }
})();
(function() {
    var c0x = NEJ.P,
        M0x = c0x("nej.ut"),
        b0x;
    if ( !! M0x.bgc8U) return;
    M0x.bgc8U = NEJ.C();
    b0x = M0x.bgc8U.O0x(M0x.AK9B);
    b0x.bk0x = function(e0x) {
        e0x = NEJ.X({}, e0x);
        e0x.timing = "easeinout";
        this.bl0x(e0x)
    }
})();
(function() {
    var c0x = NEJ.P,
        bm0x = NEJ.F,
        a9j = c0x("nej.e"),
        h0x = c0x("nej.v"),
        k0x = c0x("nej.u"),
        ba0x = c0x("nej.h"),
        M0x = c0x("nej.p"),
        cJ1x = c0x("nej.x"),
        cm1x = c0x("nej.ut");
    if (M0x.lX4b.trident) return;
    var bqj0x = {
        linear: cm1x.rZ6T,
        "ease-in": cm1x.Ip0x,
        "ease-out": cm1x.bgG8y,
        "ease-in-out": cm1x.bgc8U
    };
    ba0x.QM3x = function() {
        var caS7L = function(md4h, pt5y) {
            var cL1x = "";
            k0x.dZ2x(md4h, function(z0x, T0x) {
                cL1x += pt5y.replace("all", T0x)
            });
            return cL1x
        };
        var caR7K = function(z0x, hz3x) {
            if (hz3x === "filter") {
                z0x = k0x.Hu0x(z0x, 0);
                z0x = "alpha(opacity=" + z0x + ")"
            }
            if (hz3x === "z-index") z0x = k0x.Hu0x(z0x, 0);
            return z0x
        };
        var caQ7J = function(z0x) {
            return bqj0x[z0x.split(" ")[2]]
        };
        var caP7I = function(f0x, z0x, md4h, mW5b, s0x) {
            var z0x = z0x.split(" "),
                hz3x = z0x[0],
                dG2x = parseFloat(a9j.cX1x(f0x, hz3x)) || 0,
                ng5l = parseFloat(md4h[hz3x]) || 0,
                caO7H = bqj0x[z0x[2]],
                beh8Z = z0x[1].slice(0, -1) * 1e3 + z0x[3].slice(0, 1) * 1e3;
            if (beh8Z >= f0x.sumTime) {
                f0x.sumTime = beh8Z;
                f0x.isLastOne = s0x
            }
            var Qm3x = nej.p.cP1x.engine === "trident" && nej.p.cP1x.release - 5 < 0;
            if (hz3x === "opacity" && Qm3x) {
                hz3x = "filter";
                var dB2x = a9j.cX1x(f0x, hz3x);
                dG2x = parseFloat(dB2x.split("=")[1]) || 0;
                ng5l = ng5l * 100
            }
            var e0x = {
                from: {
                    offset: dG2x
                },
                to: {
                    offset: ng5l
                },
                duration: beh8Z,
                onupdate: function(bj0x) {
                    var z0x = bj0x.offset;
                    if (!ba0x.bqa0x(hz3x)) {
                        z0x = caR7K(z0x, hz3x);
                        a9j.W0x(f0x, hz3x, z0x)
                    } else {
                        a9j.W0x(f0x, hz3x, z0x + "px")
                    }
                },
                onstop: function(hz3x) {
                    var Iw1x = f0x.effects[s0x];
                    if (!Iw1x) return;
                    Iw1x = caO7H.S0x(Iw1x);
                    if (f0x.isLastOne === s0x) mW5b.apply(this)
                }.g0x(this, s0x)
            };
            return e0x
        };
        return ba0x.QM3x.dY2x(function(d0x) {
            d0x.stopped = !0;
            var i0x = d0x.args;
            var f0x = i0x[0],
                md4h = i0x[1],
                pt5y = i0x[2],
                mW5b = i0x[3];
            f0x.sumTime = 0, f0x.isLastOne = 0;
            var bqv0x = [];
            if (pt5y.indexOf("all") > -1) pt5y = caS7L(md4h, pt5y);
            var bdH7A = pt5y.slice(0, -1);
            bdH7A = bdH7A.split(",");
            f0x.effects = [];
            k0x.be0x(bdH7A, function(z0x, s0x) {
                var e0x = caP7I(f0x, z0x, md4h, mW5b, s0x);
                bqv0x.push({
                    o: e0x,
                    c: caQ7J(z0x)
                })
            });
            k0x.be0x(bqv0x, function(r0x, s0x) {
                var Iw1x = r0x.c.B0x(r0x.o);
                f0x.effects[s0x] = Iw1x;
                Iw1x.eL2x()
            });
            return this
        })
    }();
    ba0x.Qc3x = ba0x.Qc3x.dY2x(function(d0x) {
        d0x.stopped = !0;
        var i0x = d0x.args;
        var f0x = i0x[0];
        k0x.be0x(f0x.effects, function(Y0x) {
            Y0x.bh0x()
        });
        f0x.effects = [];
        return this
    })
})();
(function() {
    var c0x = NEJ.P,
        bm0x = NEJ.F,
        ba0x = c0x("nej.h"),
        a9j = c0x("nej.e"),
        M0x = c0x("nej.p");
    if (M0x.lX4b.gecko) return;
    ba0x.QM3x = function(f0x, md4h, pt5y) {
        pt5y = pt5y.slice(0, -1);
        a9j.W0x(f0x, "transition", pt5y);
        setTimeout(function() {
            a9j.fH2x(f0x, md4h)
        }, 33);
        return this
    }
})();
(function() {
    var c0x = NEJ.P,
        bm0x = NEJ.F,
        ba0x = c0x("nej.h"),
        M0x = c0x("nej.p");
    if (M0x.lX4b.webkit) return
})();
(function() {
    var c0x = NEJ.P,
        bm0x = NEJ.F,
        ba0x = c0x("nej.h"),
        M0x = c0x("nej.p");
    if (M0x.lX4b.presto) return
})();
(function() {
    var c0x = NEJ.P,
        Y0x = NEJ.O,
        bm0x = NEJ.F,
        k0x = c0x("nej.u"),
        ba0x = c0x("nej.h"),
        a9j = c0x("nej.e"),
        h0x = c0x("nej.v"),
        M0x = c0x("nej.ut"),
        tu7n;
    if ( !! M0x.qh6b) return;
    M0x.qh6b = NEJ.C();
    tu7n = M0x.qh6b.O0x(M0x.cC1x);
    tu7n.bk0x = function(e0x) {
        this.bl0x(e0x);
        this.IA1x = a9j.w0x(e0x.node);
        this.bqB0x = e0x.styles || [];
        this.bqC0x = e0x.onstop || bm0x;
        this.bbP7I = e0x.transition || [];
        this.Qt3x = {};
        this.bqG0x = this.caN7G();
        if ( !! ba0x.DO9F && ba0x.DO9F()) {
            setTimeout(this.DO9F.g0x(this), this.bhe8W * 1e3)
        } else {
            this.bU1x([
                [this.IA1x, "transitionend", this.DO9F.g0x(this)]
            ])
        }
    };
    tu7n.bD0x = function() {
        if ( !! this.IC1x) {
            this.IC1x = window.clearInterval(this.IC1x)
        }
        delete this.IA1x;
        delete this.bqB0x;
        delete this.bqG0x;
        delete this.Qt3x;
        delete this.baf6Z;
        delete this.bbP7I;
        delete this.IC1x;
        this.bI0x()
    };
    tu7n.DO9F = function(d0x) {
        if ( !! ba0x.DO9F && ba0x.DO9F()) {
            this.bcx7q = !1;
            this.bh0x();
            return
        }
        if ( !! this.bcx7q && this.caM7F(d0x)) {
            this.bcx7q = !1;
            this.bh0x()
        }
    };
    tu7n.caM7F = function(d0x) {
        var T0x = d0x.propertyName;
        if (T0x === this.baf6Z || T0x.indexOf(this.baf6Z) > -1) return !0;
        else return !1
    };
    tu7n.caN7G = function() {
        var caL7E = function(cc1x) {
            var i0x = cc1x.split(":"),
                hz3x = i0x[0],
                z0x = i0x[1],
                f0x = this.IA1x;
            if (z0x.indexOf("=") > -1) {
                var ok5p = parseInt(a9j.cX1x(f0x, hz3x)) || 0;
                var cG1x = parseInt(z0x.split("=")[1]);
                if (z0x.indexOf("+") > -1) z0x = ok5p + cG1x;
                else z0x = ok5p - cG1x
            }
            if (ba0x.bqa0x(hz3x)) {
                if (z0x.toString().indexOf("px") < 0) z0x += "px"
            }
            this.Qt3x[hz3x] = z0x
        };
        var caK7D = function(s0x) {
            if (!this.bbP7I[s0x]) return "";
            var qw6q = this.bbP7I[s0x],
                H0x = qw6q.duration + qw6q.delay;
            if (H0x >= this.bhe8W) {
                this.bhe8W = H0x;
                this.baf6Z = qw6q.property
            }
            return qw6q.property + " " + qw6q.duration + "s " + qw6q.timing + " " + qw6q.delay + "s,"
        };
        return function() {
            var bqU0x = "";
            this.bhe8W = 0;
            k0x.be0x(this.bqB0x, function(cc1x, s0x) {
                caL7E.call(this, cc1x);
                bqU0x += caK7D.call(this, s0x)
            }.g0x(this));
            return bqU0x
        }
    }();
    tu7n.caI7B = function() {
        this.vL7E = {};
        k0x.dZ2x(this.Qt3x, function(z0x, hz3x) {
            this.vL7E[hz3x] = a9j.cX1x(this.IA1x, hz3x)
        }.g0x(this));
        this.A0x("onplaystate", this.vL7E)
    };
    tu7n.uW7P = function() {
        this.bcx7q = !0;
        ba0x.QM3x(this.IA1x, this.Qt3x, this.bqG0x, this.bqC0x);
        this.IC1x = window.setInterval(this.caI7B.g0x(this), 49);
        return this
    };
    tu7n.bh0x = function() {
        ba0x.Qc3x(this.IA1x, this.Qt3x, this.bqC0x);
        this.IC1x = window.clearInterval(this.IC1x);
        return this
    };
    tu7n.ctB2x = function() {};
    tu7n.ctC2x = function() {}
})();
(function() {
    var c0x = NEJ.P,
        bm0x = NEJ.F,
        k0x = c0x("nej.u"),
        a9j = c0x("nej.e"),
        k0x = c0x("nej.u"),
        M0x = c0x("nej.ut");
    a9j.UQ4U = function(e0x) {
        e0x = e0x || {};
        e0x.onstop = e0x.onstop || bm0x;
        e0x.onplaystate = e0x.onplaystate || bm0x;
        return e0x
    };
    a9j.bra0x = function() {
        var caF7y = function(f0x, QH3x, Qm3x) {
            var fp2x, ev2x = true;
            if ( !! Qm3x) {
                k0x.dZ2x(QH3x, function(z0x, T0x) {
                    if (T0x === "opacity") {
                        T0x = "filter";
                        var dB2x = a9j.cX1x(f0x, T0x);
                        if (dB2x === "") {
                            a9j.W0x(f0x, "filter", "alpha(opacity=100)");
                            fp2x = 100
                        } else {
                            fp2x = parseFloat(dB2x.split("=")[1]) || 0
                        }
                        z0x = z0x * 100
                    } else {
                        fp2x = a9j.cX1x(f0x, T0x)
                    }
                    if (parseInt(fp2x) === z0x) ev2x = false
                }.g0x(this))
            } else {
                k0x.dZ2x(QH3x, function(z0x, T0x) {
                    fp2x = a9j.cX1x(f0x, T0x);
                    if (parseInt(fp2x) === z0x) ev2x = false
                }.g0x(this))
            }
            return ev2x
        };
        return function(f0x, QH3x) {
            var Qm3x = nej.p.cP1x.engine === "trident" && nej.p.cP1x.release - 5 < 0;
            if (!caF7y(f0x, QH3x, Qm3x)) return !1;
            return !0
        }
    }();
    a9j.bre0x = function() {
        var caE7x = function(f0x) {
            var Ub4f = a9j.cX1x(f0x, "display");
            if (Ub4f === "none") return !1;
            return !0
        };
        return function(f0x, e0x, kj4n) {
            var GB0x = e0x.opacity || kj4n;
            f0x = a9j.w0x(f0x);
            if (!caE7x.call(f0x)) return !1;
            if ( !! f0x.effect) return !1;
            if (!a9j.bra0x(f0x, {
                    opacity: GB0x
                })) return !1;
            e0x = a9j.UQ4U(e0x);
            f0x.effect = M0x.qh6b.B0x({
                node: f0x,
                transition: [{
                    property: "opacity",
                    timing: e0x.timing || "ease-in",
                    delay: e0x.delay || 0,
                    duration: e0x.duration || 1
                }],
                styles: ["opacity:" + GB0x],
                onstop: function(dl1x) {
                    f0x.effect = M0x.qh6b.S0x(f0x.effect);
                    e0x.onstop.call(null, dl1x)
                },
                onplaystate: e0x.onplaystate.g0x(f0x.effect)
            });
            f0x.effect.uW7P();
            return this
        }
    }.g0x(this)();
    a9j.QI3x = function(f0x, e0x) {
        return a9j.bre0x(f0x, e0x, 1)
    };
    a9j.caD7w = function(f0x, e0x) {
        return a9j.bre0x(f0x, e0x, 0)
    };
    a9j.caC7v = function(f0x) {
        a9j.Qu3x(f0x);
        return this
    };
    a9j.Qu3x = function(f0x) {
        f0x = a9j.w0x(f0x);
        if (f0x.effect && f0x.effect.bh0x()) {
            if ( !! f0x.effect) f0x.effect = M0x.qh6b.S0x(f0x.effect)
        }
        return this
    };
    a9j.brq0x = function(f0x, mJ5O, e0x) {
        f0x = a9j.w0x(f0x);
        if ( !! f0x.effect) return !1;
        if (!a9j.bra0x(f0x, mJ5O)) return !1;
        e0x = a9j.UQ4U(e0x);
        e0x.duration = e0x.duration || [];
        var fX2x = mJ5O.top || 0,
            fL2x = mJ5O.left || 0;
        f0x.effect = M0x.qh6b.B0x({
            node: f0x,
            transition: [{
                property: "top",
                timing: e0x.timing || "ease-in",
                delay: e0x.delay || 0,
                duration: e0x.duration[0] || 1
            }, {
                property: "left",
                timing: e0x.timing || "ease-in",
                delay: e0x.delay || 0,
                duration: e0x.duration[1] || 1
            }],
            styles: ["top:" + fX2x, "left:" + fL2x],
            onstop: function(dl1x) {
                e0x.onstop.call(null, dl1x);
                f0x.effect = M0x.qh6b.S0x(f0x.effect)
            },
            onplaystate: e0x.onplaystate.g0x(f0x.effect)
        });
        f0x.effect.uW7P();
        return this
    };
    a9j.bmc9T = function() {
        return function(f0x, mJ5O, e0x) {
            f0x = a9j.w0x(f0x);
            if ( !! f0x.effect) return !1;
            e0x = a9j.UQ4U(e0x);
            var i0x = mJ5O.split(":"),
                caB7u = i0x[0],
                brv0x = [];
            brv0x.push(mJ5O);
            f0x.effect = M0x.qh6b.B0x({
                node: f0x,
                transition: [{
                    property: caB7u,
                    timing: e0x.timing || "ease-in",
                    delay: e0x.delay || 0,
                    duration: e0x.duration || 1
                }],
                styles: brv0x,
                onstop: function(dl1x) {
                    e0x.onstop.call(null, dl1x);
                    f0x.effect = M0x.qh6b.S0x(f0x.effect)
                },
                onplaystate: e0x.onplaystate.g0x(f0x.effect)
            });
            f0x.effect.uW7P();
            return this
        }
    }();
    a9j.ctD2x = function() {
        var Zf6Z = function(f0x, t0x) {
            return t0x == "height" ? f0x.clientHeight : f0x.clientWidth
        };
        return function(f0x, t0x, e0x) {
            f0x = a9j.w0x(f0x);
            if ( !! f0x.effect) return !1;
            e0x = a9j.UQ4U(e0x);
            var z0x = e0x.value || false;
            if (!z0x) {
                a9j.W0x(f0x, "display", "block");
                var f0x = a9j.w0x(f0x);
                z0x = Zf6Z(f0x, t0x)
            }
            var ev2x = a9j.cX1x(f0x, "visibility");
            if (ev2x === "hidden") {
                f0x.style.height = 0;
                a9j.W0x(f0x, "visibility", "inherit");
                f0x.effect = M0x.qh6b.B0x({
                    node: f0x,
                    transition: [{
                        property: t0x,
                        timing: e0x.timing || "ease-in",
                        delay: e0x.delay || 0,
                        duration: e0x.duration || 1
                    }],
                    styles: [t0x + ":" + z0x],
                    onstop: function(dl1x) {
                        e0x.onstop.call(null, dl1x);
                        f0x.effect = M0x.qh6b.S0x(f0x.effect);
                        QJ3x = window.clearTimeout(QJ3x)
                    },
                    onplaystate: e0x.onplaystate.g0x(f0x.effect)
                })
            } else {
                f0x.style.height = z0x;
                f0x.effect = M0x.qh6b.B0x({
                    node: f0x,
                    transition: [{
                        property: t0x,
                        timing: e0x.timing || "ease-in",
                        delay: e0x.delay || 0,
                        duration: e0x.duration || 1
                    }],
                    styles: [t0x + ":" + 0],
                    onstop: function(dl1x) {
                        a9j.W0x(f0x, "visibility", "hidden");
                        a9j.W0x(f0x, t0x, "auto");
                        e0x.onstop.call(null, dl1x);
                        f0x.effect = M0x.qh6b.S0x(f0x.effect);
                        QJ3x = window.clearTimeout(QJ3x)
                    },
                    onplaystate: e0x.onplaystate.g0x(f0x.effect)
                })
            }
            var QJ3x = window.setTimeout(function() {
                f0x.effect.uW7P()
            }.g0x(this), 0);
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
        H0x = c0x("nej.ut"),
        v0x = c0x("nej.j"),
        p0x = c0x("nm.d"),
        l0x = c0x("nm.x"),
        D0x = c0x("nm.m"),
        F0x = c0x("nm.w"),
        L0x = c0x("nm.m.disc"),
        m0x = c0x("nm.l"),
        b0x, K0x,FX0x;
    var bannerTypeMap = {
        1: "歌曲",
        10: "专辑",
        100: "艺人",
        1e3: "歌单",
        1001: "电台节目",
        1002: "用户",
        1003: "活动",
        1004: "MV",
        1005: "专题",
        "-1004": "明星访谈",
        2e3: "抽奖活动",
        2001: "熟人抢票",
        2003: "歌单(webview)",
        2004: "首发",
        3e3: "推广",
        3001: "直播",
        1009: "电台",
        4001: "动态话题"
    };
    L0x.Nt2x = NEJ.C();
    b0x = L0x.Nt2x.O0x(D0x.cM1x);
    // b0x.bH0x = function(e0x) {
    //     this.bM0x();
    //     this.bjQ9H = p0x.hd2x.B0x({
    //         onitemadd: this.xp8h.g0x(this)
    //     });
    //     this.ks4w = p0x.hJ3x.B0x();
    //     this.ctY2x = F0x.FX0x.B0x({
    //         cat: "homepage"
    //     });
    //     this.bjW9N = undefined;
    //     this.bXi7b();
    //     this.bXh7a();
    //     this.bXg7Z();
    //     this.He0x = [];
    //     Array.prototype.push.apply(this.He0x, a9j.I0x("album-roller", "j-img"));
    //     Array.prototype.push.apply(this.He0x, a9j.I0x("top-flag", "j-img"));
    //     Array.prototype.push.apply(this.He0x, a9j.I0x("hotdj-list", "j-img"));
    //     h0x.q0x(window, "scroll", this.bkc9T.g0x(this));
    //     h0x.q0x(window, "resize", this.bkc9T.g0x(this));
    //     h0x.q0x("top-flag", "click", this.bXf7Y.g0x(this));
    //     h0x.q0x("personalRec", "click", this.bXe7X.g0x(this));
    //     h0x.q0x("discover-module", "click", this.bO0x.g0x(this));
    //     this.bkc9T();
    //     this.bXd7W();
    //     var bEo3x = k0x.ho3x(top.location.search.slice(1));
    //     if (bEo3x.market) {
    //         a9j.w0x("side-download").href = "/download?market=" + bEo3x.market
    //     }
    // };
    b0x.bkc9T = function() {
        var bXc7V = function(iF4J, bj0x, dR2x) {
            var MX2x = bj0x.y < iF4J.scrollTop + iF4J.clientHeight;
            return MX2x
        };
        return function(d0x) {
            if (this.He0x.length < 1) return;
            var iF4J = a9j.oN5S();
            for (var i = 0, lZ4d = this.He0x, bj0x; i < lZ4d.length; ++i) {
                bj0x = a9j.hO3x(lZ4d[i]);
                if (bXc7V(iF4J, bj0x)) {
                    lZ4d[i].src = a9j.u0x(lZ4d[i], "src");
                    this.He0x.splice(i, 1);
                    --i
                }
            }
        }
    }();
    b0x.bXf7Y = function(d0x) {
        var f0x = h0x.U0x(d0x, "subscribe-flag");
        if ( !! f0x && !a9j.bz0x(f0x, "s-bg-10-slt")) {
            h0x.cf1x(d0x);
            var xV8N = l0x.Vu5z();
            if (!xV8N) {
                top.login();
                return
            }
            var bXb7U = parseInt(a9j.u0x(f0x, "plid"));
            this.bjQ9H.iP4T({
                key: "playlist_fav-" + GUser.userId,
                data: {
                    id: bXb7U
                },
                ext: {
                    node: f0x
                }
            })
        }
    };
    b0x.bXi7b = function() {
        var yQ8I = window.Gbanners;
        var My2x = yQ8I.length;
        var Hl0x = a9j.w0x("index-banner");
        var bn0x = a9j.I0x(document.body, "d-flag");
        var bXa7T = bn0x[0];
        var bkD9u = bn0x[1];
        var bkE9v = bn0x[2];
        var yy8q = 0;
        var bkL9C = false;
        var bkP9G = false;
        var bkQ9H = a9j.I0x(Hl0x, "pg-flag");
        var Tc4g = function(s0x) {
            s0x = (s0x + My2x) % My2x;
            var ma4e = yQ8I[s0x];
            a9j.gU2x(bkE9v, "src", ma4e.picUrl);
            a9j.gU2x(bkD9u, "href", ma4e.url);
            if ((ma4e.targetType == 1003 || ma4e.targetType == 3e3) && ma4e.url.indexOf(location.hostname + "/#") < 0) {
                a9j.gU2x(bkD9u, "target", "_blank")
            } else {
                a9j.gU2x(bkD9u, "target", "")
            }
            a9j.W0x(bXa7T, "background-image", "url(" + ma4e.backgroundUrl + ")");
            a9j.x0x(bkQ9H[yy8q], "z-slt");
            a9j.y0x(bkQ9H[s0x], "z-slt");
            yy8q = s0x;
            bEN3x((s0x + 1 + My2x) % My2x);
            bEO3x(s0x)
        };
        var bEO3x = function(s0x) {
            var ma4e = yQ8I[s0x];
            if (window.log && ma4e) {
                window.log("bannerimpress", {
                    type: ma4e.targetType + "_" + bannerTypeMap[ma4e.targetType],
                    url: ma4e.url || null,
                    id: ma4e.targetId || null,
                    position: s0x
                })
            }
        };
        var bWZ7S = function(s0x) {
            a9j.x0x(bkQ9H[yy8q], "z-slt");
            a9j.caD7w(bkE9v, {
                timing: "ease-in",
                opacity: .2,
                onstop: function(d0x) {
                    Tc4g(s0x);
                    a9j.QI3x(bkE9v, {
                        timing: "ease-out",
                        onstop: function(d0x) {},
                        onplaystate: function(d0x) {}
                    })
                },
                onplaystate: function(d0x) {}
            })
        };
        var bER3x = function(V0x) {
            var img = new Image;
            img.src = V0x
        };
        var bEN3x = function(s0x) {
            bER3x(yQ8I[s0x].backgroundUrl);
            bER3x(yQ8I[s0x].picUrl)
        };
        bEO3x(0);
        h0x.q0x(Hl0x, "click", function(d0x) {
            var f0x = h0x.U0x(d0x, "click-flag");
            if ( !! f0x) {
                h0x.cf1x(d0x);
                if (a9j.bz0x(f0x, "btnl")) {
                    Tc4g(yy8q - 1)
                } else if (a9j.bz0x(f0x, "btnr")) {
                    Tc4g(yy8q + 1)
                } else if (a9j.bz0x(f0x, "pg-flag")) {
                    var s0x = parseInt(a9j.u0x(f0x, "index"));
                    Tc4g(s0x)
                }
            } else {
                f0x = h0x.U0x(d0x, "c:active");
                if (f0x && f0x.href) {
                    var ma4e = yQ8I[yy8q];
                    if (window.log && ma4e) {
                        window.log("click", {
                            type: "banners",
                            object: ma4e.targetType + "_" + bannerTypeMap[ma4e.targetType],
                            url: ma4e.url || null,
                            id: ma4e.targetId || null,
                            position: yy8q
                        })
                    }
                }
            }
        }.g0x(this));
        h0x.q0x(Hl0x, "mouseover", function(d0x) {
            bkL9C = true
        }.g0x(this));
        h0x.q0x(Hl0x, "mouseout", function(d0x) {
            bkL9C = false
        }.g0x(this));
        setInterval(function() {
            if (!bkL9C && !bkP9G) {
                bWZ7S((yy8q + 1) % My2x)
            }
        }.g0x(this), 5e3);
        bEN3x(1);
        var bWW7P = a9j.hO3x(Hl0x, document.body).y + Hl0x.clientHeight;
        h0x.q0x(window, "scroll", function() {
            var scrollTop = Math.max(document.body.scrollTop, document.documentElement.scrollTop);
            if (scrollTop < bWW7P) {
                bkP9G = false
            } else {
                bkP9G = true
            }
        })
    };
    b0x.bXh7a = function() {
        var bEW3x = a9j.w0x("album-roller");
        var Td4h = a9j.I0x(bEW3x, "roller-flag");
        var yw8o = Td4h.length;
        var Tf4j = 1;
        var isOnPlay = false;
        var bFe3x = function(e0x) {
            isOnPlay = true;
            var Tg4k = e0x.direction == "left" ? "-" : "";
            var Th4l = Tg4k == "-" ? (Tf4j + 1 + yw8o) % yw8o : (Tf4j - 1 + yw8o) % yw8o;
            var bWV7O = Tg4k == "-" ? (Th4l + 1 + yw8o) % yw8o : (Th4l - 1 + yw8o) % yw8o;
            a9j.bmc9T(Td4h[Tf4j], "left:" + Tg4k + "645", {
                timing: "ease-out",
                delay: 0,
                duration: 1,
                onstop: function(d0x) {
                    Tf4j = Th4l;
                    a9j.W0x(Td4h[bWV7O], "left", -645 * parseInt(Tg4k + "1") + "px");
                    setTimeout(function() {
                        isOnPlay = false
                    }, 200)
                },
                onplaystate: function(d0x) {}
            });
            a9j.bmc9T(Td4h[Th4l], "left:0", {
                timing: "ease-out",
                delay: 0,
                duration: 1,
                onstop: function(d0x) {},
                onplaystate: function(d0x) {}
            })
        };
        var leftRoll = function() {
            if (!isOnPlay) {
                bFe3x({
                    direction: "left"
                })
            }
        };
        var rightRoll = function() {
            if (!isOnPlay) {
                bFe3x({
                    direction: "right"
                })
            }
        };
        h0x.q0x(bEW3x, "click", function(d0x) {
            var f0x = h0x.U0x(d0x, "click-flag");
            if ( !! f0x) {
                h0x.cf1x(d0x);
                if (a9j.bz0x(f0x, "pre")) {
                    rightRoll()
                } else if (a9j.bz0x(f0x, "nxt")) {
                    leftRoll()
                }
            }
        }.g0x(this))
    };
    b0x.bXg7Z = function() {
        var f0x = a9j.w0x("personalRec");
        v0x.br0x("/api/discovery/recommend/resource", {
            type: "json",
            onload: function(d0x) {
                var vS7L = new Date,
                    vV7O, j0x, Cl9c, js4w, LH1x;
                LH1x = ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"];
                if (GUser) {
                    vV7O = new Date(parseInt(GUser.birthday))
                }
                js4w = vS7L.getDate();
                Cl9c = LH1x[vS7L.getDay()];
                if (vV7O && vS7L.getMonth() == vV7O.getMonth() && vS7L.getDate() == vV7O.getDate()) {
                    j0x = {
                        weekday: Cl9c,
                        day: js4w,
                        dec1: "生日特别推荐",
                        dec2: "亲爱的" + GUser.nickname + "，",
                        dec3: "祝你生日快乐"
                    }
                } else {
                    j0x = {
                        weekday: Cl9c,
                        day: js4w,
                        dec1: "每日歌曲推荐",
                        dec2: "根据你的口味生成，",
                        dec3: "每天6:00更新"
                    }
                }
                if (d0x.code == 200) {
                    var mt5y = [];
                    if (d0x.recommend && d0x.recommend.length) {
                        for (var i = 0; i < d0x.recommend.length; i++) {
                            var gJ2x = {};
                            gJ2x.position = i;
                            gJ2x.id = d0x.recommend[i].id;
                            gJ2x.alg = d0x.recommend[i].alg;
                            switch (d0x.recommend[i].type) {
                                case 0:
                                    d0x.recommend[i].rtype = 17;
                                    d0x.recommend[i].link = "/program?id=" + d0x.recommend[i].id;
                                    gJ2x.scene = "user-dj-recommend";
                                    break;
                                case 1:
                                    d0x.recommend[i].rtype = 13;
                                    d0x.recommend[i].link = "/playlist?id=" + d0x.recommend[i].id;
                                    gJ2x.scene = "user-playlist";
                                    break
                            }
                            if (i < 3) mt5y.push({
                                action: "recommendimpress",
                                json: gJ2x
                            })
                        }
                        this.ks4w.VQ5V(mt5y);
                        f0x.innerHTML = a9j.bQ0x("m-wgt-rmd", {
                            data: j0x,
                            recommend: d0x.recommend.slice(0, 3)
                        }, {
                            getPlayCount: l0x.lR4V,
                            cutString: l0x.Bc9T
                        })
                    }
                }
            }.g0x(this),
            onerror: function() {}
        })
    };
    b0x.xp8h = function(d0x) {
        a9j.y0x(d0x.ext.node, "s-bg-10-slt");
        d0x.ext.node.title = "已收藏"
    };
    b0x.bXe7X = function(d0x) {
        var f0x = h0x.U0x(d0x, "d:action");
        var X0x = a9j.u0x(f0x, "action");
        var C0x, t0x, bFt3x, bB0x;
        if (X0x) h0x.cf1x(d0x);
        switch (X0x) {
            case "dislike":
                C0x = a9j.u0x(f0x, "resId");
                t0x = a9j.u0x(f0x, "resType");
                bFt3x = a9j.u0x(f0x, "alg");
                this.bjW9N = a9j.u0x(f0x, "index");
                bB0x = {
                    resId: C0x,
                    resType: t0x,
                    alg: bFt3x
                };
                v0x.br0x("/api/discovery/recommend/dislike", {
                    type: "json",
                    query: k0x.dh1x(bB0x),
                    onload: function(d0x) {
                        if (d0x.code == 200) {
                            var wH7A = d0x.data[this.bjW9N];
                            if (wH7A.type == 0) {
                                wH7A.rtype = 17;
                                wH7A.link = "/dj?id=" + wH7A.id
                            } else if (wH7A.type == 1) {
                                wH7A.rtype = 13;
                                wH7A.link = "/playlist?id=" + wH7A.id
                            }
                            f0x.parentNode.parentNode.innerHTML = a9j.bQ0x("m-rmd-item", {
                                rec: wH7A,
                                index: this.bjW9N
                            })
                        } else {
                            m0x.Z0x.N0x({
                                tip: "暂无更多推荐",
                                autoclose: true
                            })
                        }
                    }.g0x(this),
                    onerror: function() {
                        m0x.Z0x.N0x({
                            tip: "暂无更多推荐",
                            autoclose: true
                        })
                    }
                });
                break
        }
    };
    b0x.bO0x = function(d0x) {
        var f0x = h0x.U0x(d0x, "d:action");
        switch (a9j.u0x(f0x, "action")) {
            case "checkfee":
                h0x.bh0x(d0x);
                l0x.hQ3x("", a9j.u0x(f0x, "resId"), a9j.u0x(f0x, "resType"));
                break;
            case "checkin":
                v0x.br0x("/api/point/dailyTask", {
                    type: "json",
                    method: "get",
                    query: {
                        type: 1
                    },
                    onload: function(d0x) {
                        if (d0x.code == 200) {
                            var bFy3x = a9j.ni5n(l0x.eM2x('<div class="tip s-bg s-bg-14 f-pa">获得 <span class="s-fc6 f-fw1">{0}</span> 积分</div>', d0x.point || 0));
                            f0x.parentNode.appendChild(bFy3x);
                            f0x.innerHTML = "<i>已签到</i>";
                            a9j.fe2x(f0x, "u-btn2-2", "u-btn2-dis");
                            window.setTimeout(function() {
                                a9j.cF1x(bFy3x)
                            }, 1500);
                            var bWU7N = a9j.u0x(f0x, "needSafety") == "true";
                            if (bWU7N) {
                                l0x.jl4p({
                                    title: "安全认证提示",
                                    clazz: "m-layer-w5",
                                    html: a9j.bQ0x("m-popup-info", {
                                        tip: "您目前的积分数额较高，为避免安全风险<br>请尽快完成安全认证。",
                                        oktext: "去安全认证",
                                        cctext: "我知道了"
                                    }),
                                    onaction: function(d0x) {
                                        if (d0x.action == "ok") {
                                            window.open("/#/store/security/");
                                            d0x.stopped = true;
                                            window.g_cbSafety = function() {
                                                location.reload()
                                            }
                                        }
                                    }
                                })
                            }
                        } else {}
                    }
                });
                break
        }
    };
    b0x.bXd7W = function() {
        var bB0x = k0x.ho3x(location.search.slice(1)),
            blz9q = bB0x.pids;
        if (blz9q) {
            v0x.br0x("/api/song/detail", {
                query: {
                    ids: blz9q
                },
                type: "json",
                method: "get",
                onload: function(d0x) {
                    var i0x = l0x.EX0x(d0x.songs, true, true),
                        bs0x = [];
                    k0x.be0x(JSON.parse(blz9q), function(C0x) {
                        var hn3x = k0x.cT1x(i0x, function(bf0x) {
                            return bf0x.id == C0x
                        });
                        if (hn3x >= 0) {
                            bs0x.push(i0x[hn3x])
                        }
                    });
                    top.player.addTo(bs0x, false, true)
                }
            })
        }
    };
    a9j.cD1x("template-box");
    new L0x.Nt2x
})()