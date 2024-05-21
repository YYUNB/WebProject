let interestBtn = [];

const iContainer = document.getElementById('iBtns');

for (let i = 0; i < 3; i++) { // 버튼 생성 및 배열에 추가
    const button = document.createElement('button');
    button.textContent = i;
    button.classList.add('interestBtn');
    iContainer.appendChild(button);
    interestBtn.push(button);
}

var interestContent = [
    "content1", "content2", "content3"
];

document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.interestBtn');

    buttons.forEach(button => {
        button.addEventListener('click', function() {
            // 모든 버튼의 이동을 초기화
            buttons.forEach(btn => btn.classList.remove('moved'));

            // 클릭된 버튼 이동
            button.classList.add('moved');

            // 설명문 업데이트
            const context = button.getAttribute('data-context');
            const td = button.parentNode.nextElementSibling;
            td.textContent = context;
        });
    });
});
