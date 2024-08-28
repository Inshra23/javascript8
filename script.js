// function myFunction(){
// let node = document.createElement("li")
// let myList = document.createTextNode("water")
// node.appendChild(myList)
// document.getElementById("list").appendChild(node)
// }

// function myFunction(){
//     const list = document.getElementById("list")
//     while (list.hasChildNodes()){
//         list.removeChild(list.firstChild)
//     }
//     // list.removeChild(list.firstElementChild)
// }

// let plan1 = {
//     name : ["Basic","Professional"],
//     price : 3.99,
//     space : 100,
//     transfer : 1000,
//     pages : 10
// }
// //plan1.price = 455

// console.log(plan1.name[1]);
// delete plan1.space
// console.log(plan1);


// let plan2 = {
//     name : "Professional",
//     price : 5.99,
//     space : 500,
//     transfer : 5000,
//     pages : 50
// }
// console.log(plan2);

// let plan3 = {
//     name : "Ultimate",
//     price : 9.99,
//     space : 2000,
//     transfer : 20000,
//     pages : 500
// }


// console.log(plan3);

//alert("The cost of the"+ plan1.name + "packing is $" + plan2.price + " per month.")


// const person = {};


// person.firstName = "John";
// person.age = 50;
// person.email = john4@gmail.com
// document.getElementById("demo").innerHTML =
// person.firstName + " is " + person.age + " years old.";


//class
class ToyotaCar{
    start(){
        console.log("start");
    }
    stop(){
        console.log("stop");
    }
}

let fortuner = new ToyotaCar()
let lexus = new ToyotaCar()