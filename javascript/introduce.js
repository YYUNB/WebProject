// 배열을 저장할 변수 선언
let introduce = [];
var title = document.getElementById("contentTitle");
var content = document.getElementById("content");

const titleStr = [
    "나의 성장 과정과 목표",
    "최근 사회 이슈와 나의 견해",
    "프로젝트 / 과제 중 가장 어려웠던 점과 해결 방안",
    "본인 역량"
];

var contentStr = [
    // 주제 선정 동기 및 목표 & 본인 성장 과정
    "<p><span class='icspan'># 첫 위기</span><br>" +
    "&nbsp어렸을 때 저는 좋아하는 것에만 관심을 가지곤 했습니다. 성적도 좋아하는 과목만 공부하여 과목 간 점수 차가 컸습니다. 중학교 때 영어와 한문에서 낮은 성적을 받은 후, " +
    "부모님께서는 \"<span style='background: #e6e6b9'>다양한 과목을 공부하는 것은 나중에 꼭 도움이 될 것이다. 또 스스로 알을 깨고 나와야 병아리가 된다.</span> \"" +
    "라고 조언해 주셨습니다. 조금씩 영어와 한문에 시간을 투자하기 시작했고, 아는 내용이 생기니 수업에도 점점 흥미를 느끼게 되어" +
    " 저는 결국 상위권의 성적을 받을 수 있었습니다. 이를 통해 끈기와 균형 잡힌 학습의 중요성을 깨달았고, " +
    "싫어하는 일에도 흥미를 끌어올릴 방법을 찾는 것이 중요하다는 것을 배웠습니다.<br><br> " +
    "<span class='icspan'># 관심의 시작</span><br>" +
    "&nbsp고등학교 때 진로 고민 중 친구의 관심사였던 프로그래밍에 처음 접하게 되었습니다. " +
    "처음에는 문법이나 변수 등 개념을 이해하는 데 어려움을 겪고 그닥 흥미를 느끼지 못했지만, " +
    "그래도 친구와 함께 기본적인 코딩 연습을 하며 기초를 다져갔습니다. 이후 친구들과 함께 음성 대화 채널에서 이름을 입력하면 " +
    "별명, 성격 정보 등을 제공하고 벌칙 대상을 랜덤으로 뽑는 기능을 가진 봇을 만들었는데," +
    " 이는 우리만의 장난감을 직접 만든 느낌이라 더욱 즐겁고 흥미를 느낄 수 있었습니다." +
    " 또 제 취미는 그림 그리기인데 다른 사람들처럼 만화, 게임 캐릭터를 그리기보다는 인물을 창작해 그리는 것을 좋아했습니다. " +
    "개발하면서 그림 그리기와 프로그램 개발은 비슷한 맥락을 가지고 있다고 느꼈습니다." +
    " 선을 이어 그림을 완성하듯이, 프로그래밍에서는 글자를 모아 프로그램을 만들어 간다는 점이 친근했고 저에게 매력으로 다가왔습니다.<br><br>" +
    "<span class='icspan'># 앞으로의 나</span><br>" +
    "&nbsp이렇게 프로그래밍에 대한 열정을 발견하며, 이를 통해 제 창의력을 극대화할 수 있겠다고 느껴 소프트웨어학과로 진학했습니다. " +
    "저는 앞으로도 배우고 성장하며 제 아이디어를 현실로 만들어가는 과정을 즐기고자 합니다. " +
    "다음 프로젝트로는 약의 정보를 편리하게 제공하는 웹 개발을 목표로 하고 있습니다. " +
    "이를 통해 사회에 긍정적인 영향을 미치는 개발자가 되고자 합니다. " +
    "저는 제가 좋아하는 것에 대해 열정적이고, 싫어하는 것도 흥미를 올릴 방법을 찾아 항상 <span style='background: #e6e6b9'>병아리</span>가 될 수 있도록 노력할 것입니다.",
    // 최근 사회 이슈와 나의 견해
    "3호잇",
    // 프로젝트, 과제 중 느낀 점
    "<p>약 정보 제공 앱을 개발하면서 가장 기술적으로 어려웠던 부분은 외부 데이터베이스를 안드로이드 내부 로컬로 연동하는 과정이었습니다. <br><br>" +
    "<span class='icspan'># 위기</span><br>" +
    "저는 안드로이드 라이브러리인 Room DB를 이용하고자 했습니다. 그러나 Room DB에 새 데이터를 추가하는 정보는 많았지만  " +
    "외부 DB 파일을 연동하는 방법에 대한 정보가 많이 없었습니다. 안드로이드 개발 자체도 처음이라 DB 연동 여부 확인 하는 방법조차 몰라 막막한 상황이었습니다. " +
    "하지만 저는 포기하지 않았고, 다양한 국내외 영상들과 블로그 포스트를 찾기 시작했습니다. 이틀 정도는 완성된 연동 방법이 적힌 코드를 찾으려 했지만 존재하지 않았고 " +
    "부분적으로 완성된 코드들도 적용하기 어려웠습니다.<br><br>" +
    "<span class='icspan'># 접근법의 변화</span><br>" +
    " 이렇게 찾는 방법은 장기적으로 도움이 되지 않으며 효율적이지 않다고 판단하여 접근 방법을 바꾸기로 했습니다. " +
    "먼저 Room 라이브러리의 개념부터 이해하기 시작했습니다. 메소드의 기능과 필요한 인자를 분석하며 오류 발생때마다 로그캣을 읽고 문제를 해결했습니다. " +
    "이 과정에서 가장 큰 문제는 int와 Integer 차이에서 있었습니다. 데이터베이스에서 데이터 타입이 Not null일 때, Room에서 권장하는 타입은 null 값을 허용하는 Integer였지만" +
    "null 값을 허용하지 않는 int 타입을 선언했기 때문이었습니다.<br><br>" +
    "<span class='icspan'># 성장한 나</span><br>" +
    " 그렇게 데이터 전처리부터 이를 Room 형식으로 변환하는 작업에 " +
    "5일을 매달린 끝에 외부 데이터베이스를 성공적으로 불러올 수 있었습니다. 이번 경험을 통해 단순히 코드를 복사하여 사용하는 것이 아니라, " +
    "함수의 기능과 필요한 인자를 이해하는 것의 중요성을 깨달았습니다.  또한 int와 Integer의 차이 등 언어 기초의 중요성도 다시 한번 체감했습니다." +
    "이 과정을 통해 문제를 체계적으로 분석하고 해결하는 능력과 어려움 속에서도 포기하지 않고 끝까지 해결하려는 끈기의 중요성을 배울 수 있었습니다.</p>",
    // 본인 역량
    "5얄랄"
];

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