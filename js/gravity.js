// Fondo de partículas conectadas: los puntos flotan despacio, se unen con líneas
// cuando están cerca y son atraídos por el cursor. Canvas 2D sin dependencias.
(function () {
    var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    var RADIUS = 160; // alcance de la atracción del cursor
    var PULL = 0.6; // fuerza de la atracción
    var LINK = 110; // distancia máxima para unir dos puntos

    var canvas = document.createElement("canvas");
    canvas.setAttribute("aria-hidden", "true");
    canvas.style.cssText = "position:fixed;inset:0;width:100%;height:100%;z-index:-1;pointer-events:none";
    document.body.appendChild(canvas);
    var ctx = canvas.getContext("2d");

    var pts = [];
    var w = 0, h = 0, dpr = 1;
    var mouse = { x: -9999, y: -9999 };
    var raf = 0;

    function resize() {
        dpr = Math.min(window.devicePixelRatio || 1, 2);
        w = window.innerWidth;
        h = window.innerHeight;
        canvas.width = w * dpr;
        canvas.height = h * dpr;
        ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
        var count = Math.min(90, Math.floor(w / 14));
        pts = [];
        for (var i = 0; i < count; i++) {
            pts.push({
                x: Math.random() * w,
                y: Math.random() * h,
                vx: (Math.random() - 0.5) * 0.25,
                vy: (Math.random() - 0.5) * 0.25
            });
        }
        draw();
        start();
    }

    function draw() {
        ctx.clearRect(0, 0, w, h);
        var i, j, p, a, b, dx, dy, d;

        for (i = 0; i < pts.length; i++) {
            p = pts[i];
            dx = mouse.x - p.x;
            dy = mouse.y - p.y;
            d = Math.sqrt(dx * dx + dy * dy);
            if (d < RADIUS && d > 1) {
                p.x += (dx / d) * PULL;
                p.y += (dy / d) * PULL;
            }
            if (!reduce) {
                p.x += p.vx;
                p.y += p.vy;
            }
            if (p.x < 0 || p.x > w) p.vx *= -1;
            if (p.y < 0 || p.y > h) p.vy *= -1;

            ctx.fillStyle = "rgba(140,168,255,0.55)";
            ctx.beginPath();
            ctx.arc(p.x, p.y, 1.4, 0, 6.2832);
            ctx.fill();
        }

        for (i = 0; i < pts.length; i++) {
            for (j = i + 1; j < pts.length; j++) {
                a = pts[i];
                b = pts[j];
                d = Math.sqrt((a.x - b.x) * (a.x - b.x) + (a.y - b.y) * (a.y - b.y));
                if (d < LINK) {
                    ctx.strokeStyle = "rgba(120,150,255," + (0.16 * (1 - d / LINK)) + ")";
                    ctx.beginPath();
                    ctx.moveTo(a.x, a.y);
                    ctx.lineTo(b.x, b.y);
                    ctx.stroke();
                }
            }
        }
    }

    function loop() {
        draw();
        raf = reduce || document.hidden ? 0 : requestAnimationFrame(loop);
    }

    function start() {
        if (!raf && !reduce && !document.hidden) raf = requestAnimationFrame(loop);
    }

    window.addEventListener("pointermove", function (e) {
        mouse.x = e.clientX;
        mouse.y = e.clientY;
    }, { passive: true });
    document.addEventListener("pointerleave", function () {
        mouse.x = mouse.y = -9999;
    });
    window.addEventListener("pointerup", function (e) {
        if (e.pointerType === "touch") mouse.x = mouse.y = -9999;
    });
    window.addEventListener("resize", resize);
    document.addEventListener("visibilitychange", function () {
        if (document.hidden) { cancelAnimationFrame(raf); raf = 0; } else start();
    });

    resize();
})();
