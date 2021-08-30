// let themes = document.querySelector('.themes')

// let name = document.querySelector('#selection')

// let selectionColor = localStorage.getItem('theme') ?  localStorage.getItem('theme') : 'dark';

// document.body.className = selectionColor
// name.textContent = selectionColor


// Array.from(themes.children).forEach(theme => {
// 	theme.addEventListener('click', e=>{
// 		let color = e.target.dataset.color
// 		document.body.className = color
// 		name.textContent = color
// 		localStorage.setItem('theme', color)
		
// 	})
// });

let themes = document.querySelector(".themes")
let selection = document.querySelector("#selection")

let selectedTheme = localStorage.getItem("theme") ? localStorage.getItem("theme") : "dark"
selection.textContent = selectedTheme
document.body.className = selectedTheme

Array.from(themes.children).forEach(theme => {
	theme.addEventListener("click", e => {
		let color = e.target.dataset.color
		document.body.className = color
		selection.textContent = color
		localStorage.setItem("theme", color)
	})
})