// 배열을 저장할 변수 선언
let mainBtn = [];
var title = document.getElementById("contentTitle");
var content = document.getElementById("content");

const titleStr = [
    "주제 선정 동기 및 목표",
    "본인 성장 과정",
    "최근 사회 이슈와 나의 견해",
    "프로젝트 / 과제 중 가장 어려웠던 점과 해결 방안",
    "본인 역량"
];

var contentStr = [
    // 주제 선정 동기 및 목표
    "1호롤로",
    // 본인 성장 과정
    "2얏호",
    // 최근 사회 이슈와 나의 견해
    "3호잇",
    // 프로젝트, 과제 중 느낀 점
    "<p>약 정보 제공 앱을 개발하면서 가장 기술적으로 어려웠던 부분은 외부 데이터베이스를 안드로이드 내부 로컬로 연동하는 과정이었습니다. <br><br>" +
    "<span class='mcspan'># 위기</span><br>" +
    "저는 안드로이드 라이브러리인 Room DB를 이용하고자 했습니다. 그러나 Room DB에 새 데이터를 추가하는 정보는 많았지만  " +
    "외부 DB 파일을 연동하는 방법에 대한 정보가 많이 없었습니다. 안드로이드 개발 자체도 처음이라 DB 연동 여부 확인 하는 방법조차 몰라 막막한 상황이었습니다. " +
    "하지만 저는 포기하지 않았고, 다양한 국내외 영상들과 블로그 포스트를 찾기 시작했습니다. 이틀 정도는 완성된 연동 방법이 적힌 코드를 찾으려 했지만 존재하지 않았고 " +
    "부분적으로 완성된 코드들도 적용하기 어려웠습니다.<br><br>" +
    "<span class='mcspan'># 접근법의 변화</span><br>" +
    " 이렇게 찾는 방법은 장기적으로 도움이 되지 않으며 효율적이지 않다고 판단하여 접근 방법을 바꾸기로 했습니다. " +
    "먼저 Room 라이브러리의 개념부터 이해하기 시작했습니다. 메소드의 기능과 필요한 인자를 분석하며 오류 발생때마다 로그캣을 읽고 문제를 해결했습니다. " +
    "이 과정에서 가장 큰 문제는 int와 Integer 차이에서 있었습니다. 데이터베이스에서 데이터 타입이 Not null일 때, Room에서 권장하는 타입은 null 값을 허용하는 Integer였지만" +
    "null 값을 허용하지 않는 int 타입을 선언했기 때문이었습니다.<br><br>" +
    "<span class='mcspan'># 성장한 나</span><br>" +
    " 그렇게 데이터 전처리부터 이를 Room 형식으로 변환하는 작업에 " +
    "5일을 매달린 끝에 외부 데이터베이스를 성공적으로 불러올 수 있었습니다. 이번 경험을 통해 단순히 코드를 복사하여 사용하는 것이 아니라, " +
    "함수의 기능과 필요한 인자를 이해하는 것의 중요성을 깨달았습니다.  또한 int와 Integer의 차이 등 언어 기초의 중요성도 다시 한번 체감했습니다." +
    "이 과정을 통해 문제를 체계적으로 분석하고 해결하는 능력과 어려움 속에서도 포기하지 않고 끝까지 해결하려는 끈기의 중요성을 배울 수 있었습니다.</p>",
    // 본인 역량
    "5얄랄"
];

// 버튼을 생성할 부모 요소 선택
const mContainer = document.getElementById('mainBtnDiv');

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
            mainBtn[i].style.backgroundColor = "#617e6e";
            mainBtn[i].style.color = "#f0f0f0";
        }
        else {
            mainBtn[i].style.backgroundColor = "#f0f0f0";
            mainBtn[i].style.color = "dimgray";
        }

    }
}