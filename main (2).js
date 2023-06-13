// steps
// find all lists
// iterate all items
// push list to new array
let allListItem = document.querySelectorAll('.li1');
allListItem.forEach(function (listItem) {
  console.log(listItem);
  let listItemText = listItem.innerText;
  let createArray = [];
  createArray.push(listItemText)
  console.log(createArray)
})
let getListFrom_li2 = document.querySelectorAll('.li2');
getListFrom_li2.forEach(function (youTubers) {
  let youTuberList =youTubers.innerText;
  let youTuberArray =[];
  youTuberArray.push(youTuberList)
  console.log(youTuberArray);
})