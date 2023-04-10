// 1-
// function num(number) {
//   return function numplus() {
//     return number + 5;
//   };
// }

// var a = num(6);
// console.log(a());

// 2
// var a = [1, 2, 3];
// var number = 0;
// function value(num) {
//   if (a.length == 0) {
//     return false;
//   }
//   if (a[number] == num) {
//     return true;
//   }
//   number++;
//   a.shift();
//   return value(num);
// }
// console.log(value(7));

// 3
// function para(text) {
//   var p = document.createElement("p");
//   p.innerText = text;
//   document.body.appendChild(p);
// }
// para("abc");

//4
// function addList() {
//   var name = prompt("Enter List Items");
//   var ul = document.getElementById("ul");
//   var li = document.createElement("li");
//   li.innerText = name;
//   ul.appendChild(li);
// }

// 5
// function color(element, color) {
//   element.style.backgroundColor = color;
// }

//6
// function setUser() {
//   var b = {
//     name: "elsa",
//     age: 23,
//   };
//   localStorage.setItem("user", JSON.stringify(b));
// }
// setUser();

//7
// function getUser() {
//   var user = localStorage.getItem("user");
//   console.log(JSON.parse(user));
// }
// getUser();

//8
// function setUser() {
//   var b = {
//     name: "elsa",
//     age: 23,
//   };
//   for (let [keys, values] of Object.entries(b)) {
//     localStorage.setItem(keys, values);
//   }
//   let newObj = {};

//   for (let i = 0; i < localStorage.length; i++) {
//     let key = localStorage.key(i);

//     newObj[key] = localStorage.getItem(key);
//   }
//   console.log(newObj);
// }
// setUser();
