let interestBtn = [];

const iContainer = document.getElementById('iContainer');

for (let i = 0; i < 3; i++) { // 버튼 생성 및 배열에 추가
    const button = document.createElement('button');
    button.textContent = i;
    button.classList.add('interestBtn');
    iContainer.appendChild(button);
    interestBtn.push(button);
}