const META = window.document.createElement("META")

META.setAttribute("name", "keywords")
META.setAttribute("content", "HTML, CSS, JavaScript")

window.document.head.appendChild(META)

setTimeout(() => {
    window.document.title = "Learn Javascript !!"
}, 1000 * 5);

const LINK = window.document.createElement("LINK")
LINK.setAttribute("rel", "icon")
LINK.setAttribute("href", "https://www.w3schools.com/favicon.ico")
LINK.setAttribute("type", "image/x-icon")
window.document.head.appendChild(LINK)