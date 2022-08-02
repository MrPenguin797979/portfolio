if (window.outerWidth > 767) {
  const menuLinks = [...document.querySelectorAll(".menu-item a")];
  menuLinks.forEach((link) => link.addEventListener("click", handleHoverLink));

  const line = document.createElement("div");
  line.classList.add("line-effect");
  document.body.appendChild(line);

  function handleHoverLink(e) {
    const cords = e.target.getBoundingClientRect();
    const { top, left, width, height } = cords;
    const offsetBottom = 5;

    Object.assign(line.style, {
      left: `${left}px`,
      top: `${top + height + offsetBottom}px`,
      width: `${width}px`,
    });
  }
}
