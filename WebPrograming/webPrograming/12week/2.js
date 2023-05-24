function checkNumbers() {
    const number1 = parseInt(prompt("첫 번째 수를 입력하세요:"));
    const number2 = parseInt(prompt("두 번째 수를 입력하세요:"));
    let result;

    // if (number1 % 2 === 1 && number2 % 2 === 1) { // 삼항연산자
    //     result = "두 수 모두 홀수입니다.";
    // } else if (number1 % 2 === 1 && number2 % 2 === 0) { // 삼항연산자
    //     result = "첫 번째 수는 홀수이고, 두 번째 수는 짝수입니다.";
    // } else if (number1 % 2 === 0 && number2 % 2 === 1) { // 삼항연산자
    //     result = "첫 번째 수는 짝수이고, 두 번째 수는 홀수입니다.";
    // } else { // else
    //     result = "두 수 모두 짝수입니다.";
    // }


    switch (true) {
        case number1 % 2 === 1 && number2 % 2 === 1:
            result = "두 수 모두 홀수입니다.";
            break;
        case number1 % 2 === 1 && number2 % 2 === 0:
            result = "첫 번째 수는 홀수이고, 두 번째 수는 짝수입니다.";
            break;
        case number1 % 2 === 0 && number2 % 2 === 1:
            result = "첫 번째 수는 짝수이고, 두 번째 수는 홀수입니다.";
            break;
        default:
            result = "두 수 모두 짝수입니다.";
    }


    document.getElementById("result").innerHTML = result;
}
checkNumbers();