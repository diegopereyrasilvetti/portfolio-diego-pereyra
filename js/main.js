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
