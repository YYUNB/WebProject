// 배열을 저장할 변수 선언
let mainBtn = [];
var title = document.getElementById("contentTitle");
var content = document.getElementById("content");

const titleStr = [
    "주제 선정 동기 및 목표",
    "본인 성장 과정",
    "최근 사회 이슈와 나의 견해",
    "프로젝트, 과제 중 느낀 점",
    "본인 역량"
];

var contentStr = [
    "1호롤로",
    "2얏호",
    "3호잇",
    "4우항",
    "5얄랄"
];

// 버튼을 생성할 부모 요소 선택
const mContainer = document.getElementById('mContainer');

for (let i = 1; i <= 5; i++) { // 버튼 생성 및 배열에 추가
    const button = document.createElement('button');
    button.textContent = i;
    button.classList.add('mainBtn');
    mContainer.appendChild(button);
    mainBtn.push(button);
}
clickBtn(0);

mainBtn.forEach((btn, index) => {
    btn.addEventListener("click", () => {
        clickBtn(index);
    });
});

function clickBtn(index) {
    for (let i = 0; i < mainBtn.length; i++) {
        title.innerHTML = titleStr[index];
        content.innerHTML = contentStr[index];

        if (i==index) {
            mainBtn[i].style.backgroundColor = "gray";
            mainBtn[i].style.color = "white";
        }
        else {
            mainBtn[i].style.backgroundColor = "#f0f0f0";
            mainBtn[i].style.color = "black";
        }

    }
}