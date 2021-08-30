// let el = document.createElement('div')


// document.querySelector('.content').prepend(el)

// el.textContent = 'you are Online!'

// window.addEventListener('online', (event) => {
//     el.textContent = 'you are Online!'
//     el.className = "alert"
//     el.classList.add('alert-success')
// });


// window.addEventListener('offline', (event) => {
//     el.textContent = 'you are offline!'
//     el.className = "alert"
//     el.classList.add('alert-danger')
// });

let el = document.createElement("div")
document.querySelector(".content").prepend(el)

window.addEventListener('online', (event) => {
    el.textContent = "Online"
    el.className = "alert"
    el.classList.add("alert-success")
});

window.addEventListener('offline', (event) => {
    el.textContent = "Offline"
    el.className = "alert"
    el.classList.add("alert-danger")
});
