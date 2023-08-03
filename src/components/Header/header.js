// Мобильное меню бургера
export const menuBurger = document.querySelector(".burger");
export const menu = document.querySelector(".menu");
if (menuBurger) {
    menuBurger.addEventListener("click", function(e) {
        document.body.classList.toggle("lock");
        menuBurger.classList.toggle("burger_active");
        menu.classList.toggle("menu_active");
    });
}

export const menuLinks = document.querySelectorAll(".menu_item_link[data-scroll]");
if (menuLinks.length > 0) {
	menuLinks.forEach(menuLink => {
		menuLink.addEventListener("click", onMenuLinkClick);
	});

	function onMenuLinkClick(e) {
		const menuLink = e.target;
		if (menuLink.dataset.scroll && document.querySelector(menuLink.dataset.scroll)){
			const scrollBlock = document.querySelector(menuLink.dataset.scroll);
			const scrollBlockValue = scrollBlock.getBoundingClientRect().top + pageYOffset - document.querySelector("header").offsetHeight;
			
			if (menuBurger.classList.contains("menu_active")) {
				document.body.classList.remove("lock");
				menuBurger.classList.remove("burger_active");
				menu.classList.remove("menu_active");
			}

			window.scrollTo({
				top: scrollBlockValue,
				behavior: "smooth"
			});
			e.preventDefault();
		}
	}
}