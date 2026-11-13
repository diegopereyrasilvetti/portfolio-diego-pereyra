const modal = document.getElementById("cert-modal");
const img = document.getElementById("cert-modal-img");
const title = document.getElementById("cert-modal-title");
const link = document.getElementById("cert-modal-link");

document.querySelectorAll(".cert-card").forEach(function (card) {
    card.addEventListener("click", function () {
        title.textContent = card.dataset.title;
        link.href = card.dataset.img;
        img.src = card.dataset.img;
        img.alt = "Certificado de " + card.dataset.title;
        if (typeof modal.showModal === "function") {
            modal.showModal();
        } else {
            window.open(card.dataset.img, "_blank");
        }
    });
});

document.getElementById("cert-modal-close").addEventListener("click", function () {
    modal.close();
});

modal.addEventListener("click", function (e) {
    if (e.target === modal) modal.close();
});

modal.addEventListener("close", function () {
    img.removeAttribute("src");
});

const menuBtn = document.getElementById("menu-toggle");
const menuList = document.getElementById("menu-list");

function setMenu(open) {
    menuList.classList.toggle("open", open);
    document.documentElement.classList.toggle("menu-open", open);
    menuBtn.setAttribute("aria-expanded", open);
    menuBtn.setAttribute("aria-label", open ? "Cerrar menú" : "Abrir menú");
}

menuBtn.addEventListener("click", function () {
    setMenu(!menuList.classList.contains("open"));
});

menuList.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", function () {
        setMenu(false);
    });
});

document.addEventListener("click", function (e) {
    if (!menuList.contains(e.target) && !menuBtn.contains(e.target)) setMenu(false);
});

document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") setMenu(false);
});

window.matchMedia("(min-width: 1100px)").addEventListener("change", function (e) {
    if (e.matches) setMenu(false);
});

const progressBar = document.getElementById("scroll-progress");

function updateProgress() {
    const max = document.documentElement.scrollHeight - window.innerHeight;
    progressBar.style.width = (max > 0 ? (window.scrollY / max) * 100 : 0) + "%";
}

window.addEventListener("scroll", updateProgress, { passive: true });
window.addEventListener("resize", updateProgress);
updateProgress();

const siteHeader = document.querySelector("body > header");

function updateHeader() {
    siteHeader.classList.toggle("scrolled", window.scrollY > 20);
}

window.addEventListener("scroll", updateHeader, { passive: true });
updateHeader();

const navLinks = Array.from(menuList.querySelectorAll("a"));
const navTargets = navLinks.map(function (a) {
    return document.getElementById(a.getAttribute("href").slice(1));
});

function updateActiveLink() {
    const atBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4;
    let current = -1;
    navTargets.forEach(function (el, i) {
        if (el && el.getBoundingClientRect().top <= 140) current = i;
    });
    if (atBottom) current = navTargets.length - 1;
    navLinks.forEach(function (a, i) {
        a.classList.toggle("active", i === current);
        if (i === current) a.setAttribute("aria-current", "true");
        else a.removeAttribute("aria-current");
    });
}

window.addEventListener("scroll", updateActiveLink, { passive: true });
window.addEventListener("resize", updateActiveLink);
updateActiveLink();
