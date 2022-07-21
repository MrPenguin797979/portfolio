const links = [...document.querySelectorAll("a")];
const result = links.findIndex((link) => link.className === "header-contact");

for (let i = 0; i < result; ++i) links.shift();

links.forEach((link) => link.setAttribute("target", "_blank"));
