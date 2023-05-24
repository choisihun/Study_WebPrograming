function calculateFahrenheit() {
    const fahrenheit = parseInt(prompt("섭씨로 변환할 화씨 온도를 입력해주세요"));
    const result = (fahrenheit - 32) * 5 / 9;
    
    
    document.getElementById("result").innerHTML = result.fixed(1);
}
calculateFahrenheit();