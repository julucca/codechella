const accordionItems = document.querySelectorAll('[data-accordion="item"]');

accordionItems.forEach(item => {

  item.addEventListener("click", () => {
    const content = item.querySelector('[data-accordion="content"]');
    const icon = item.querySelector('[data-accordion="icon"]');

    if(content.classList.contains("active")) {
      content.classList.remove("active");
      icon.style.transform = "rotate(0)";
    } else {
      content.classList.add("active");
      icon.style.transform = "rotate(180deg)";
    }
  });
})
