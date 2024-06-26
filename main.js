const hamburger = document.querySelector(".hamburger-menu")
const menu = document.querySelector(".wrapper")


addEventListener("resize", (event) => {
	panelLayout()
	artSrc()
});

window.onload = () => {
	console.log("loaded")
	panelLayout()
	artSrc()
}


hamburger.addEventListener("click", () => {
	if (menu.classList.contains("active")) {
		menu.style.display = "none";
	} else {
		menu.style.display = "flex";
	}

	menu.classList.toggle("active");
})

function getWidth() {
	if (self.innerWidth) {
	  return self.innerWidth;
	}
  
	if (document.documentElement && document.documentElement.clientWidth) {
	  return document.documentElement.clientWidth;
	}
  
	if (document.body) {
	  return document.body.clientWidth;
	}
  }

function artSrc() {
	const pageWidth = getWidth()
	if(pageWidth >= 850) {
		document.querySelector("#milkBottles").src = './images/desktop/image-gallery-milkbottles.jpg'
		document.querySelector("#orange").src = './images/desktop/image-gallery-orange.jpg'
		document.querySelector("#cone").src = './images/desktop/image-gallery-cone.jpg'
		document.querySelector("#sugar-cubes").src = './images/desktop/image-gallery-sugarcubes.jpg'

  
	  } else {
		document.querySelector("#milkBottles").src = './images/mobile/image-gallery-milkbottles.jpg'
		document.querySelector("#orange").src = './images/mobile/image-gallery-orange.jpg'
		document.querySelector("#cone").src = './images/mobile/image-gallery-cone.jpg'
		document.querySelector("#sugar-cubes").src = './images/mobile/image-gallery-sugar-cubes.jpg'
	
	  }

}


function panelLayout() 	{
	const pagePanel = document.querySelector(".panel")
	const pageWidth = getWidth()

	panelMobile = `
	<img src="./images/mobile/image-transform.jpg" alt="egg">
	<div class="text test">
		<h2>Transform your brand</h2>
		<p>
			We are a full-service creative agency specializing in helping brands grow fast. 
			Engage your clients through compelling visuals that do most of the marketing for you.				  
		</p>
		<div class="learn-more-btn">
			<a href="#">Learn more <div class="line-through-yellow"></div></a>
		</div>
	</div>
	<img src="./images/mobile/image-stand-out.jpg" alt="cup">
	<div class="text">
		<h2>Stand out to the right audience</h2>
		<p>
			Using a collaborative formula of designers, researchers, photographers, videographers, and copywriters, we’ll build and extend your brand in digital places. 
		</p>
		<div class="learn-more-btn">
			<a href="#">Learn more <div class="line-through-pink"></div></a>
		</div>
	</div>`

	panelDesktop = `
		  <div class="text">
			  <h2>Transform your brand</h2>
			  <p>
				  We are a full-service creative agency specializing in helping brands grow fast. 
				  Engage your clients through compelling visuals that do most of the marketing for you.				  
			  </p>
			  <div class="learn-more-btn">
				  <a href="#">Learn more <div class="line-through-yellow"></div></a>
			  </div>
		  </div>
		  <img src="./images/mobile/image-transform.jpg" alt="egg">
		  <img src="./images/mobile/image-stand-out.jpg" alt="cup">
		  <div class="text">
			  <h2>Stand out to the right audience</h2>
			  <p>
				  Using a collaborative formula of designers, researchers, photographers, videographers, and copywriters, we’ll build and extend your brand in digital places. 
			  </p>
			  <div class="learn-more-btn">
				  <a href="#">Learn more <div class="line-through-pink"></div></a>
			  </div>
		  </div>
	  `

	if(pageWidth >= 850) {
  
	  pagePanel.innerHTML = panelDesktop

	} else {
		pagePanel.innerHTML = panelMobile
	}
}