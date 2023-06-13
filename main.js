let carList = ["volvo", "bmw", 'toyota', 'wagoner', 'hyundai'];
let htmlElement = document.getElementById('list0');
for (let brand of carList) {
  let create = document.createElement('li');
  create.innerText = brand
  htmlElement.appendChild(create)
  console.log(create);
}

let bikeList = ["Trek", "Specialized", "Giant", "Cannondale", "Scott"];
let bikeListHtml = document.getElementById('list1');
for (let bikeBrands of bikeList) {
  let bikeListCreate = document.createElement('li');
  bikeListCreate.innerText = bikeBrands
  bikeListHtml.appendChild(bikeListCreate)
}

let pcList = ["Apple", "Dell", "HP", "Lenovo", "ASUS"];
let pcHtml = document.getElementById('list2');
for (let iteratePc of pcList) {
  let createList = document.createElement('li');
  createList.innerText = iteratePc
  pcHtml.appendChild(createList)
}

// let mobileArray = ["Apple", "Samsung", "Huawei", "Xiaomi", "OnePlus", "Google", "Sony", "LG", "Motorola", "Nokia"];
// let mobileHtml = document.getElementById('list3');
// for (let iterateMobile of mobileArray) {
//   let listCreating = document.createElement('li');
//   listCreating.innerText = iterateMobile
//   mobileHtml.appendChild(listCreating)
// }
let mobileArray = ["Apple", "Samsung", "Huawei", "Xiaomi", "OnePlus", "Google", "Sony", "LG"];
let htmlElements = document.getElementById('list3');
mobileArray.forEach(function (brand) {
  let createList = document.createElement('li');
  createList.innerText = brand
  htmlElements.appendChild(createList)
  console.log(brand);
})