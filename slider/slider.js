function classSwitcher(){
	slides.forEach(slide => slide.classList.remove('active'));
	slides[active].classList.add('active')
	points.forEach(point => point.classList.remove('active'));
	points[active].classList.add('active')
}

let goNext = () =>{
	active  = (active == slides.length - 1 ) ? 0 : active + 1
	classSwitcher()
}

let goPrev = () =>{
	active  = (active == 0 ) ? slides.length - 1 : active - 1
	classSwitcher()
}

// variables 
let active = 0
let timer = 2000


let slidshow = document.querySelector(".slideshow")
let slides = document.querySelectorAll(".slide")
let points = document.querySelectorAll(".points > span")
let prev = document.querySelector(".prev")
let next = document.querySelector(".next")


// setInterval
let sliderTimer = setInterval(goNext, timer)


points.forEach((point, index) => {
	point.addEventListener("click",e =>{
		active = index
		classSwitcher()
	})
});

prev.addEventListener("click", e=> goPrev())


next.addEventListener("click", e=> goNext())



slidshow.addEventListener("mouseover", e => clearInterval(sliderTimer))
slidshow.addEventListener("mouseleave", e => sliderTimer = setInterval(goNext, timer))



let timeFunction = () =>{
	let timer = document.querySelector('#timer')
	let time = new Date()
	timer.textContent = `time is: ${time.getHours()}:${time.getMinutes()}:${time.getSeconds()}`
}


timeFunction()

setInterval(timeFunction, 1000)




let calendar = document.querySelector('#calendar')

let RDate = new Date()
let Jdate = gregorian_to_jalali(
	RDate.getFullYear(),
	RDate.getMonth(),
	RDate.getDate()
);

calendar.textContent = `year: ${Jdate[0]} month: ${Jdate[1]} day: ${Jdate[2]}`

// let clock = document.querySelector("#clock")
// let myDate = new Date()
// let myJDate = gregorian_to_jalali(
// 	myDate.getFullYear(),
// 	myDate.getMonth() + 1,
// 	myDate.getDate()
// )
// clock.textContent = `امسال سال ${myJDate[0]} است. امروز ماه ${myJDate[1]} و روز ${myJDate[2]} است`
