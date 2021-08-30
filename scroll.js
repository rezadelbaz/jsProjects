let scroll = document.querySelector('button.scroll')

window.addEventListener('scroll', e=>{
	if (window.scrollY > 300 & window.scrollY < 1600) {
		scroll.classList.add('show')
	}else {
		scroll.classList.remove('show')
	}
})

scroll.addEventListener('click', e=>{
	if(scroll.classList.contains('show')){
		window.scrollTo({top:0, behavior: "smooth"})
	}
})

// scroll.addEventListener("click", e => {
// 		window.scrollTo({top: 0, behavior: "smooth"})

// })


let scroll2 = document.querySelector('button.scroll2')

window.addEventListener('scroll', e=>{
	if (window.scrollY > 1600) {
		scroll2.classList.add('show')
	}else {
		scroll2.classList.remove('show')
	}
})

scroll2.addEventListener('click', e=>{
	if(scroll2.classList.contains('show')){
		document.querySelector('#article').scrollIntoView({top:0, behavior: "smooth"})
	}
})