let todos = localStorage.getItem('todos')

try {
	todos = JSON.parse(todos)
	todos = todos.length ? todos : null
} catch(e) {
	todos = null
}

if (!todos) {
	todos = [
		{content :'shopping',status:true},
		{content :'watch Tv',status:true},
		{content :'chat',status:true}
	]
	localStorage.setItem('todos', JSON.stringify(todos))
}


function createTodos (todos) {
	let todosList = document.querySelector('#todos-List')
	todosList.innerHTML = ''
	todos.forEach((todo, index) =>{
		let li = document.createElement('li')
		li.className = 'list-group-item'

		let content = document.createElement('span')
		content.textContent = todo.content

		content.style.textDecoration = todo.status ? "initial" : "line-through"

		let deleteimg = document.createElement('img')
		deleteimg.src = "Media/delete.png"
		deleteimg.classList = 'float-right'

		li.append(content)
		li.append(deleteimg)

		todosList.append(li)

		deleteimg.addEventListener('click', e=>{
			todos.splice(index, 1)
			localStorage.setItem('todos', JSON.stringify(todos))
			createTodos (todos)
		})

		content.addEventListener('click', e=>{
			todos[index].status = !todos[index].status
			localStorage.setItem('todos', JSON.stringify(todos))
			createTodos (todos)
		})


	})
}

createTodos (todos)


let actions = document.querySelector('#action')
let formWrapper = document.querySelector('#form-wrapper')

Array.from(actions.children).forEach(action =>{

	if(action.dataset.action == 'add'){
		action.addEventListener('click', e=>{
			console.log(action)
			formWrapper.innerHTML = `
				<form id="add">
					<input class="form-control" placeholder="add todos" name="add"></input>
				</form>
			`
			createTodos (todos)
			let add = document.querySelector('#add')
			add.addEventListener('submit', e=>{
				e.preventDefault()
				if(add.add.value){
					todos.push({content :add.add.value,status:true})
					localStorage.setItem('todos', JSON.stringify(todos))
					createTodos (todos)
					add.add.value = ""
				}
			})
		})

	}else if (action.dataset.action = 'search') {
		action.addEventListener('click', e=>{
			console.log(action)
			formWrapper.innerHTML = `
				<form id="search">
					<input class="form-control" placeholder="search todos" name="search"></input>
				</form>
			`
			let search = document.querySelector('#search')
			search.addEventListener('keyup', e=>{
				e.preventDefault()
				if(search.search.value){
					let filter_todos = todos.filter(todo => todo.content.includes(search.search.value.toLowerCase()))
					createTodos(filter_todos)
				} else {
					createTodos(todos)
				}
			})
		})
		
	}

});

var x = 1
let counter = () => {
	let matn = document.querySelector('#matn')
	matn.textContent = `this count: ${x++} seconds`

}
var myInterval = setInterval(counter, 1000)


let stpBtn = document.querySelector(".btncount")

var stopDoingSomeThing = () => clearInterval(myInterval)

stpBtn.addEventListener("click", () => {
	
	if (stpBtn.dataset.btn ==="stop"){
		myInterval = setInterval(counter, 1000) ;
		stpBtn.textContent = "stop it"
		stpBtn.dataset.btn ="start"
		

	} else if (stpBtn.dataset.btn ==="start") {
		clearInterval(myInterval)
		stpBtn.textContent = "start it"
		stpBtn.dataset.btn ="stop"
	}
	
})