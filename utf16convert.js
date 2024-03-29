// original:   https://cdnjs.cloudflare.com/ajax/libs/lz-string/1.4.4/lz-string.min.js

var LZString = function() {
    function a(a, b) {
        if (!e[a]) {
            e[a] = {};
            for (var c = 0; c < a.length; c++) e[a][a.charAt(c)] = c;
        }
        return e[a][b];
    }
    var b = String.fromCharCode, c = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=", d = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+-$", e = {}, f = {
        compressToBase64: function(a) {
            if (null == a) return "";
            var b = f._compress(a, 6, function(a) {
                return c.charAt(a);
            });
            switch (b.length % 4) {
              default:
              case 0:
                return b;

              case 1:
                return b + "===";

              case 2:
                return b + "==";

              case 3:
                return b + "=";
            }
        },
        decompressFromBase64: function(b) {
            return null == b ? "" : "" == b ? null : f._decompress(b.length, 32, function(d) {
                return a(c, b.charAt(d));
            });
        },
        compressToUTF16: function(a) {
            return null == a ? "" : f._compress(a, 15, function(a) {
                return b(a + 32);
            }) + " ";
        },
        decompressFromUTF16: function(a) {
            return null == a ? "" : "" == a ? null : f._decompress(a.length, 16384, function(b) {
                return a.charCodeAt(b) - 32;
            });
        },
        compressToUint8Array: function(a) {
            for (var b = f.compress(a), c = new Uint8Array(2 * b.length), d = 0, e = b.length; e > d; d++) {
                var g = b.charCodeAt(d);
                c[2 * d] = g >>> 8, c[2 * d + 1] = g % 256;
            }
            return c;
        },
        decompressFromUint8Array: function(a) {
            if (null === a || void 0 === a) return f.decompress(a);
            for (var c = new Array(a.length / 2), d = 0, e = c.length; e > d; d++) c[d] = 256 * a[2 * d] + a[2 * d + 1];
            var g = [];
            return c.forEach(function(a) {
                g.push(b(a));
            }), f.decompress(g.join(""));
        },
        compressToEncodedURIComponent: function(a) {
            return null == a ? "" : f._compress(a, 6, function(a) {
                return d.charAt(a);
            });
        },
        decompressFromEncodedURIComponent: function(b) {
            return null == b ? "" : "" == b ? null : (b = b.replace(/ /g, "+"), f._decompress(b.length, 32, function(c) {
                return a(d, b.charAt(c));
            }));
        },
        compress: function(a) {
            return f._compress(a, 16, function(a) {
                return b(a);
            });
        },
        _compress: function(a, b, c) {
            if (null == a) return "";
            var d, e, f, g = {}, h = {}, i = "", j = "", k = "", l = 2, m = 3, n = 2, o = [], p = 0, q = 0;
            for (f = 0; f < a.length; f += 1) if (i = a.charAt(f), Object.prototype.hasOwnProperty.call(g, i) || (g[i] = m++, 
            h[i] = !0), j = k + i, Object.prototype.hasOwnProperty.call(g, j)) k = j; else {
                if (Object.prototype.hasOwnProperty.call(h, k)) {
                    if (k.charCodeAt(0) < 256) {
                        for (d = 0; n > d; d++) p <<= 1, q == b - 1 ? (q = 0, o.push(c(p)), p = 0) : q++;
                        for (e = k.charCodeAt(0), d = 0; 8 > d; d++) p = p << 1 | 1 & e, q == b - 1 ? (q = 0, 
                        o.push(c(p)), p = 0) : q++, e >>= 1;
                    } else {
                        for (e = 1, d = 0; n > d; d++) p = p << 1 | e, q == b - 1 ? (q = 0, o.push(c(p)), 
                        p = 0) : q++, e = 0;
                        for (e = k.charCodeAt(0), d = 0; 16 > d; d++) p = p << 1 | 1 & e, q == b - 1 ? (q = 0, 
                        o.push(c(p)), p = 0) : q++, e >>= 1;
                    }
                    l--, 0 == l && (l = Math.pow(2, n), n++), delete h[k];
                } else for (e = g[k], d = 0; n > d; d++) p = p << 1 | 1 & e, q == b - 1 ? (q = 0, 
                o.push(c(p)), p = 0) : q++, e >>= 1;
                l--, 0 == l && (l = Math.pow(2, n), n++), g[j] = m++, k = String(i);
            }
            if ("" !== k) {
                if (Object.prototype.hasOwnProperty.call(h, k)) {
                    if (k.charCodeAt(0) < 256) {
                        for (d = 0; n > d; d++) p <<= 1, q == b - 1 ? (q = 0, o.push(c(p)), p = 0) : q++;
                        for (e = k.charCodeAt(0), d = 0; 8 > d; d++) p = p << 1 | 1 & e, q == b - 1 ? (q = 0, 
                        o.push(c(p)), p = 0) : q++, e >>= 1;
                    } else {
                        for (e = 1, d = 0; n > d; d++) p = p << 1 | e, q == b - 1 ? (q = 0, o.push(c(p)), 
                        p = 0) : q++, e = 0;
                        for (e = k.charCodeAt(0), d = 0; 16 > d; d++) p = p << 1 | 1 & e, q == b - 1 ? (q = 0, 
                        o.push(c(p)), p = 0) : q++, e >>= 1;
                    }
                    l--, 0 == l && (l = Math.pow(2, n), n++), delete h[k];
                } else for (e = g[k], d = 0; n > d; d++) p = p << 1 | 1 & e, q == b - 1 ? (q = 0, 
                o.push(c(p)), p = 0) : q++, e >>= 1;
                l--, 0 == l && (l = Math.pow(2, n), n++);
            }
            for (e = 2, d = 0; n > d; d++) p = p << 1 | 1 & e, q == b - 1 ? (q = 0, o.push(c(p)), 
            p = 0) : q++, e >>= 1;
            for (;;) {
                if (p <<= 1, q == b - 1) {
                    o.push(c(p));
                    break;
                }
                q++;
            }
            return o.join("");
        },
        decompress: function(a) {
            return null == a ? "" : "" == a ? null : f._decompress(a.length, 32768, function(b) {
                return a.charCodeAt(b);
            });
        },
        _decompress: function(a, c, d) {
            var e, f, g, h, i, j, k, l, m = [], n = 4, o = 4, p = 3, q = "", r = [], s = {
                val: d(0),
                position: c,
                index: 1
            };
            for (f = 0; 3 > f; f += 1) m[f] = f;
            for (h = 0, j = Math.pow(2, 2), k = 1; k != j; ) i = s.val & s.position, s.position >>= 1, 
            0 == s.position && (s.position = c, s.val = d(s.index++)), h |= (i > 0 ? 1 : 0) * k, 
            k <<= 1;
            switch (e = h) {
              case 0:
                for (h = 0, j = Math.pow(2, 8), k = 1; k != j; ) i = s.val & s.position, s.position >>= 1, 
                0 == s.position && (s.position = c, s.val = d(s.index++)), h |= (i > 0 ? 1 : 0) * k, 
                k <<= 1;
                l = b(h);
                break;

              case 1:
                for (h = 0, j = Math.pow(2, 16), k = 1; k != j; ) i = s.val & s.position, s.position >>= 1, 
                0 == s.position && (s.position = c, s.val = d(s.index++)), h |= (i > 0 ? 1 : 0) * k, 
                k <<= 1;
                l = b(h);
                break;

              case 2:
                return "";
            }
            for (m[3] = l, g = l, r.push(l); ;) {
                if (s.index > a) return "";
                for (h = 0, j = Math.pow(2, p), k = 1; k != j; ) i = s.val & s.position, s.position >>= 1, 
                0 == s.position && (s.position = c, s.val = d(s.index++)), h |= (i > 0 ? 1 : 0) * k, 
                k <<= 1;
                switch (l = h) {
                  case 0:
                    for (h = 0, j = Math.pow(2, 8), k = 1; k != j; ) i = s.val & s.position, s.position >>= 1, 
                    0 == s.position && (s.position = c, s.val = d(s.index++)), h |= (i > 0 ? 1 : 0) * k, 
                    k <<= 1;
                    m[o++] = b(h), l = o - 1, n--;
                    break;

                  case 1:
                    for (h = 0, j = Math.pow(2, 16), k = 1; k != j; ) i = s.val & s.position, s.position >>= 1, 
                    0 == s.position && (s.position = c, s.val = d(s.index++)), h |= (i > 0 ? 1 : 0) * k, 
                    k <<= 1;
                    m[o++] = b(h), l = o - 1, n--;
                    break;

                  case 2:
                    return r.join("");
                }
                if (0 == n && (n = Math.pow(2, p), p++), m[l]) q = m[l]; else {
                    if (l !== o) return null;
                    q = g + g.charAt(0);
                }
                r.push(q), m[o++] = g + q.charAt(0), n--, g = q, 0 == n && (n = Math.pow(2, p), 
                p++);
            }
        }
    };
    return f;
}();

"function" == typeof define && define.amd ? define(function() {
    return LZString;
}) : "undefined" != typeof module && null != module && (module.exports = LZString);
