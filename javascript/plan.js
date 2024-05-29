// 배열을 저장할 변수 선언
let introduce = [];
var title = document.getElementById("contentTitle");
var content = document.getElementById("content");


// 버튼을 생성할 부모 요소 선택
const mContainer = document.getElementById('intBtnDiv');

for (let i = 1; i <= 4; i++) { // 버튼 생성 및 배열에 추가
    const button = document.createElement('button');
    button.textContent = i;
    button.classList.add('intBtn');
    mContainer.appendChild(button);
    introduce.push(button);
}
clickBtn(0);

introduce.forEach((btn, index) => {
    btn.addEventListener("click", () => {
        clickBtn(index);
    });
});

function clickBtn(index) {
    for (let i = 0; i < introduce.length; i++) {
        title.innerHTML = titleStr[index];
        content.innerHTML = contentStr[index];

        if (i==index) {
            introduce[i].style.backgroundColor = "#617e6e";
            introduce[i].style.color = "#f0f0f0";
        }
        else {
            introduce[i].style.backgroundColor = "#f0f0f0";
            introduce[i].style.color = "dimgray";
        }

    }
}