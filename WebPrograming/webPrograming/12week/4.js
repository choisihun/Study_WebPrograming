function calculateDiscount() {

    const originalPrice = parseFloat(document.getElementById("originalPrice").value);
    const discountRate = parseFloat(document.getElementById("discountRate").value);

    const discountAmount = originalPrice * (discountRate / 100);
    const discountedPrice = originalPrice - discountAmount;

    const resultText = "원래 가격은 " + originalPrice + "원 이며, 할인율은 " + discountRate + "%입니다.<br>";
    resultText += discountAmount + "원을 절약한 " + discountedPrice + "원에 살 수 있습니다.";

    document.getElementById("result").innerHTML = resultText;

}
calculateDiscount();