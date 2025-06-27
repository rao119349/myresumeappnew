// var xhr = new XMLHttpRequest();
// xhr.open("GET", "https://jsonplaceholder.typicode.com/todos/1", true);
// xhr.send();
// xhr.onload = function () {
//   if (xhr.status === 200) {
//     console.log(JSON.parse(xhr.responseText).title);
//   } else {
//     console.log("Error fetching data");
//   }
// };

(function myFun() {
  // var xhr = new XMLHttpRequest();
  // xhr.open("GET", "https://jsonplaceholder.typicode.com/todos/1", true);
  // xhr.send();
  // xhr.onload = function () {
  //   title = JSON.parse(xhr.response).title;
  //   console.log(JSON.parse(xhr.response));
  //   document.getElementById("pageTitle").textContent = `${title ?? ""}`;
  // };
  fetch("https://jsonplaceholder.typicode.com/todos/1").then((response) => {
    response.json().then((data) => {
      console.log(data);
      document.getElementById("pageTitle").textContent = `${data.title ?? ""}`;
    });
  });
})();

var arrayList = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
];

arrayList.pop();
arrayList.push(22);

arrayList = arrayList.map((item) => item * 2);
arrayList.forEach((item) => {
  console.log(item);
});

arrayList.push("Hello Saurav!");

arrayList.shift();
arrayList.unshift(13);

document.getElementById("arrayList").textContent = arrayList;
console.log(arrayList);

var xhr = new XMLHttpRequest();
xhr.open("GET", "https://jsonplaceholder.typicode.com/todos/1", true);

// xhr.onreadystatechange = function () {
//   if (xhr.readyState == 4 || xhr.status === 200) {
//     console.log(JSON.parse(xhr.responseText).title ?? "");
//   } else {
//     console.log("Error fetching data");
//   }
// };

onload = function () {
  if (xhr.readyState == 4 || xhr.status === 200) {
    console.log(JSON.parse(xhr.responseText).title ?? "");
  } else {
    console.log("Error fetching data");
  }
};
xhr.send();

(async function fetchData() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
  const data = await response.json();
  console.log(data);
})();
