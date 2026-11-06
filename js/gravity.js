// Efecto de gravedad en el fondo: una malla de puntos es atraída por el cursor
// y vuelve a su sitio con un resorte. Canvas 2D sin dependencias.
(function () {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    var SPACING = 40;
    var RADIUS = 140; // alcance de la atracción
    var PULL = 700; // fuerza de la gravedad
    var SPRING = 0.045;
    var DAMPING = 0.86;

    var canvas = document.createElement("canvas");
    canvas.setAttribute("aria-hidden", "true");
    canvas.style.cssText = "position:fixed;inset:0;width:100%;height:100%;z-index:-1;pointer-events:none";
    document.body.appendChild(canvas);
    var ctx = canvas.getContext("2d");

    var dots = [];
    var w = 0, h = 0, dpr = 1;
    var mouse = { x: -9999, y: -9999, active: false };
    var raf = 0;

    function resize() {
        dpr = Math.min(window.devicePixelRatio || 1, 2);
        w = window.innerWidth;
        h = window.innerHeight;
        canvas.width = w * dpr;
        canvas.height = h * dpr;
        ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
        dots = [];
        for (var y = SPACING / 2; y < h; y += SPACING) {
            for (var x = SPACING / 2; x < w; x += SPACING) {
                dots.push({ hx: x, hy: y, x: x, y: y, vx: 0, vy: 0 });
            }
        }
        start();
    }

    function step() {
        ctx.clearRect(0, 0, w, h);
        var moving = false;
        for (var i = 0; i < dots.length; i++) {
            var d = dots[i];
            if (mouse.active) {
                var dx = mouse.x - d.x;
                var dy = mouse.y - d.y;
                var dist = Math.sqrt(dx * dx + dy * dy);
                if (dist < RADIUS && dist > 1) {
                    // atracción suavizada: crece al acercarse y se frena en el centro
                    var f = (PULL * (1 - dist / RADIUS)) / (dist + 40);
                    d.vx += (dx / dist) * f * 0.1;
                    d.vy += (dy / dist) * f * 0.1;
                }
            }
            d.vx += (d.hx - d.x) * SPRING;
            d.vy += (d.hy - d.y) * SPRING;
            d.vx *= DAMPING;
            d.vy *= DAMPING;
            d.x += d.vx;
            d.y += d.vy;

            var off = Math.abs(d.x - d.hx) + Math.abs(d.y - d.hy);
            if (off > 0.05 || Math.abs(d.vx) + Math.abs(d.vy) > 0.05) moving = true;

            // más brillo y tamaño cuanto más desplazado está el punto
            var t = Math.min(off / 30, 1);
            ctx.fillStyle = "rgba(" + (90 + 60 * t) + "," + (120 + 60 * t) + ",255," + (0.045 + 0.2 * t) + ")";
            ctx.beginPath();
            ctx.arc(d.x, d.y, 0.8 + 0.5 * t, 0, 6.2832);
            ctx.fill();
        }
        raf = mouse.active || moving ? requestAnimationFrame(step) : 0;
    }

    function start() {
        if (!raf && !document.hidden) raf = requestAnimationFrame(step);
    }

    window.addEventListener("pointermove", function (e) {
        mouse.x = e.clientX;
        mouse.y = e.clientY;
        mouse.active = true;
        start();
    }, { passive: true });
    document.addEventListener("pointerleave", function () { mouse.active = false; });
    window.addEventListener("pointerup", function (e) {
        if (e.pointerType === "touch") mouse.active = false;
    });
    window.addEventListener("resize", resize);
    document.addEventListener("visibilitychange", function () {
        if (document.hidden) { cancelAnimationFrame(raf); raf = 0; } else start();
    });

    resize();
})();
