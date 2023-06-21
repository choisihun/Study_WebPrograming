const p = document.querySelector('#t'); //누구 차례인지
const num = parseInt(prompt('몇 명이 참가하나요?'));
const submitBtn = document.querySelector('#submitBtn'); //다음 버튼
const input = document.querySelector('#input'); //입력란
const mem = document.querySelector('#mem'); //몇명인지 화면에 띄우는 div
const proWord = document.querySelector('#proWord');
const orders = document.querySelector('#order');
const wordList = document.querySelector('#wordList');
let word;
let newWord;
let wordArray = [];
mem.innerHTML = `${num}명이 참가하였습니다.`;

const isDuplicate = () => {
  if (wordArray.includes(newWord)) {
    alert('중복된 단어가 있습니다.');
    return false;
  } else {
    return true;
  }
};

const onClickButton = () => {
  input.value = "";
  input.focus();

  if (isDuplicate()) {
    wordArray.push(newWord);
  }else{
    return;
  }
  
  if (!word || word[word.length - 1] === newWord[0]) {
    word = newWord;
    proWord.textContent = word;
    
    const order = Number(orders.textContent);
    if (order + 1 > num) {
      orders.textContent = 1;
    } else {
      orders.textContent = order + 1;
    }
    proWord.innerHTML = `${newWord}<br>`;
    wordList.innerHTML = `${wordArray.reverse()}`;
    
  } else {
    alert('올바르지 않습니다.');
  }
};


const onInput = (e) => {
  const inputValue = e.target.value;
  
  if (!isKoreanWord(inputValue)) {
    e.target.value = inputValue.replace(/[^\가-힣ㄱ-ㅎㅏ-ㅣ\s]/g, '');
  }
  
  newWord = e.target.value;
};

const isKoreanWord = (word) => {
  const koreanRegex = /^[가-힣ㄱ-ㅎㅏ-ㅣ\s]+$/;
  return koreanRegex.test(word);
};

submitBtn.addEventListener("click", onClickButton);
input.addEventListener("input", onInput);