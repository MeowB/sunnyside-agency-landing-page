const hamburger = document.querySelector(".hamburger-menu")
const menu = document.querySelector(".wrapper")

hamburger.addEventListener("click", () => {
	if (menu.classList.contains("active")) {
		menu.style.display = "none";
	} else {
		menu.style.display = "flex";
	}

	menu.classList.toggle("active");
})