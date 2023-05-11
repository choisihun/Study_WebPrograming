// let nums = [1, 2, 3]
// let char = ["a", "b", "c", "d"]

// let numsChars = nums.concat(chars)
// let charsNums = chars.concat(nums)
// document.write("nums에 chars 합치면: ", numsChars,  "<br> chars에 nums 합치면", charsNums)

// let nums = [1, 2, 3]

// let ret1 = nums.push(4, 5)
// document.write("length: ", ret1, " | 배열: ", nums)
// document.write("<br>")
// let ret2 = nums.unshift(0)
// document.write("length: ", ret2, "| 배열", nums)

// let char = ["a", "b", "c", "d"]

// let popped1 = char.pop()
// document.write()

// let numbers = [1, 2, 3, 4, 5]
// let newNumbers = numbers.splice(2)
// document.write("반환된 배열: ", newNumbers + "<br>")

// let study = ["html", "css", "web", "jquery"]
// let newStudy = study.splice(2, 1)
// document.write("반환된 배열; ", newStudy + "<br>")
// document.write("변경된 배열 : ", + study)

// let newStudy = study.splice(2, 1, "js")
// document.write("반환된 배열; ", newStudy + "<br>")
// document.write("변경된 배열 : ", + study)

const addItem = document.querySelector('#addItem');
const inputText = document.querySelector('#item');
const tripResult = document.querySelector('#trip');
let arrItems = [];
const onAddItem = () => {
    arrItems.push(inputText.value);
    console.log(arrItems);
    inputText.value = "";
}

//tripResult.innerHTML = `추가한 준비물 <input type="button" value=삭제 id="rmItem_"${i} <br>`
addItem.addEventListener('click', onAddItem);