const guestbookForm = document.getElementById("guestbook-form");

guestbookForm.addEventListener("submit", (event) => {
  event.preventDefault(); // 기본 제출 동작 방지

  // 입력값 가져오기
  const nameInput = document.getElementById("name");
  const emailInput = document.getElementById("email");
  const visitDateInput = document.getElementById("visit-date");
  const messageInput = document.getElementById("message");

  // 입력값 출력
  const output = `성명: ${nameInput.value}\n이메일: ${emailInput.value}\n방문일: ${visitDateInput.value}\n내용: ${messageInput.value}`;
  alert(output);

  // 폼 초기화
  guestbookForm.reset();
});ent.getElementById("visitor-form").reset();

  document.getElementById("add-class-btn").addEventListener("click", () => {
    const classInfoContainer = document.getElementById("class-info-container");
  
    



    // 2-3반 소개 요소 생성
    const classInfo = document.createElement("div");
  
    const className = document.createElement("h3");
    const classNameText = document.createTextNode("2-3반");
    className.appendChild(classNameText);
  
    const classDescription = document.createElement("p");
    const classDescriptionText = document.createTextNode("2-3반에 대한 소개 내용과 이미지입니다.");
    classDescription.appendChild(classDescriptionText);
  
    const classImage = document.createElement("img");
    classImage.setAttribute("src", "2-3반이미지.jpg");
    classImage.setAttribute("alt", "2-3반 이미지");
  
    // 요소 추가

    classInfo.appendChild(className);
    classInfo.appendChild(classDescription);
    classInfo.appendChild(classImage);
    classInfoContainer.appendChild(classInfo);
  });


  const displayCurrentDateTime = () => {
    const currentDate = new Date();
    const dateTimeString = currentDate.toLocaleString(); // 현재 날짜와 시간 문자열
  
    document.getElementById("current-datetime").textContent = dateTimeString;
  };
  
  window.addEventListener("load", displayCurrentDateTime);
  const guestbookLink = document.getElementById("guestbook-link");
  
  const guestbookSection = document.getElementById("guestbook-section");
  
  guestbookLink.addEventListener("click", () => {
    guestbookSection.style.display = "block";
  });