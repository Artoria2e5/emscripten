var c = Module;

var d = new TextDecoder("utf8");

function e(a) {
    if (!a) return "";
    for (var k = a + NaN, b = a; !(b >= k) && f[b]; ) ++b;
    return d.decode(f.subarray(a, b));
}

var g = new WebAssembly.Memory({
    initial: 256,
    maximum: 256
}), f = new Uint8Array(g.buffer), h;

WebAssembly.instantiate(c.wasm, {
    a: {
        b: function(a) {
            console.log(e(a));
        },
        a: g
    }
}).then((function(a) {
    a = a.instance.exports;
    h = a.e;
    a.d();
    h();
}));