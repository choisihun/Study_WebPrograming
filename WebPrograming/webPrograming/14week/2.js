const number = Number(prompt("몇 명이 참가하나요?"));
const $input = document.querySelector('input');
const $button = document.querySelector('button');
const $word = document.querySelector('#word');
let word;
let newWord;
const onClickButton = () => {
const koreanWordRegex = /^[가-힣ㄱ-ㅎㅏ-ㅣ]{2,}$/;
const regex = /^.{2,}$/;

if (regex.test(input)) {
    if (koreanWordRegex.test(newWord)) {
        if (!word || word[word.length - 1] === newWord[0]) {
                word = newWord;
                $word.textContent = word;
                $input.value = '';
                $input.focus();
            } else {
                alert('올바르지 않은 단어입니다.');
            }
        } else {
            alert('한국어만 입력하라고 이 씨');
        }
    } else {
        alert("두 글자 이상 입력하라고 이 씨");
    }
};
const onInput = (event) => {
       newWord = event.target.value;
};

$button.addEventListener('click', onClickButton);
$input.addEventListener('input', onInput);