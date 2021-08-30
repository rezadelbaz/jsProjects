// let student3 = {
// 	firstName:"Reza",
// 	lastName:"Delbaz",
// 	feilds:['watereng','designer'],
// 	detail(){
// 		this.feilds.forEach((feild,index) =>{
// 			console.log(`${index}. ${feild}`)
// 		});
// 	},
// }

// student3.detail()


let family = {
	name: "Reza",
	age:20,
}


let family2 = JSON.parse(JSON.stringify(family))

family2.name = "Ali"


console.log(family)
console.log("================================")
console.log(family2)


