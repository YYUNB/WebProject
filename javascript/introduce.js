document.addEventListener("DOMContentLoaded", () => {
    var introduce = [];
    var title = document.getElementById("contentTitle");
    var content = document.getElementById("content");

    var titleStr = [
        "나의 성장 과정과 목표",
        "최근 사회 이슈와 나의 견해",
        "프로젝트 / 과제 중 가장 어려웠던 점과 해결 방안",
        "본인 역량"
    ];

    var contentStr = [
        // 주제 선정 동기 및 목표 & 본인 성장 과정
        "<p><span class='icspan'># 첫 위기</span><br>" +
        "&nbsp어렸을 때 저는 좋아하는 것에만 관심을 가지곤 했습니다. 성적도 좋아하는 과목만 공부하여 과목 간 점수 차가 컸습니다. 중학교 때 영어와 한문에서 낮은 성적을 받은 후, " +
        "부모님께서는 \"<span style='background: #ededc0'>다양한 과목을 공부하는 것은 나중에 꼭 도움이 될 것이다. 또 스스로 알을 깨고 나와야 병아리가 된다.</span> \"" +
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
        "저는 제가 좋아하는 것에 대해 열정적이고, 싫어하는 것도 흥미를 올릴 방법을 찾아 항상 <span style='background: #ededc0'>병아리</span>가 될 수 있도록 노력할 것입니다.",
        // 최근 사회 이슈와 나의 견해
        "<p><span class='icspan'># 생성형 AI</span><br>" +
        "&nbsp;ChatGPT와 같은 생성형 AI 기술은 삼성, 애플, 네이버 등 다양한 기업에 도입되면서 현재 많은 관심을 끌고 있습니다. " +
        "생성형 AI는 빠르고 유연하게 다양한 정보를 제공하여 우리의 생활에 많은 변화와 도움을 주고 있지만 " +
        "이와 함께 다양한 이슈들이 생겨나고 있습니다.<br><br>" +
        "<span class='icspan'># 생성형 AI의 활용 방향성</span><br>" +
        "&nbsp;예를 들어, 최근 학생들이 수업 과제나 시험 준비에 생성형 AI를 활용하는 경우가 많아졌습니다. " +
        "생성형 AI는 모르는 정보를 빠르게 얻는 데 유용하지만 과제 전체의 해답을 AI에게 묻는 경우도 많아 " +
        "문제 해결 능력과 깊이 있는 사고를 기를 기회를 놓치곤 합니다. 이렇게 우리는 새로운 기술을 받아들이는 것은 좋지만 " +
        "더 좋은 영향을 주고 받을 수 있도록 활용하는 것이 중요합니다.<br><br>" +
        "<span class='icspan'># 앞으로</span><br>" +
        "&nbsp;교육 기관의 목적은 단순히 지식을 전달하는 것을 넘어 사회에 기여할 수 있는 인재를 양성하는 것으로 " +
        "생성형 AI를 올바르게 활용하여 사고력, 어휘력, 자기결정능력 등 본인이 성장하는 것이 중요하다고 생각합니다. " +
        "현재 AI는 우리에게 많은 편리함을 주고있지만 무분별한 의존에 대해 경계할 필요가 있습니다. 따라서 교육 과정에서 AI의 올바른 활용법을 알려주고, " +
        "학생들이 주도적인 학습을 할 수 있도록 유도해야 합니다. 대학에서도 과제나 시험에서 AI의 활용 지침과 정책을 마련하는 것이 필요할 것입니다. " +
        "또 개발자는 사용자가 제품을 통해 어떤 영향을 받을지 고려해야 합니다. 저는 그저 경쟁력을 위해 다양한 기술을 개발하기보다는 사용자들이 올바르게 활용할 수 있도록 유도하고 알려줄 수 있는 개발자가 되고 싶습니다." +
        " 우리는 사용자들이 직관적이고 효율적으로 제품을 사용할 수 있도록 돕는 기능에 대해 끊임없이 생각하고 올바른 문화가 정착될 수 있도록 노력해야 합니다. </p>",
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
        "이 과정에서 가장 큰 문제는 int와 Integer 차이에서 있었습니다. 데이터베이스에서 데이터 타입이 Not null일 때, Room에서 권장하는 타입은 null 값을 허용하는 Integer였지만 " +
        "null 값을 허용하지 않는 int 타입을 선언했기 때문이었습니다.<br><br>" +
        "<span class='icspan'># 성장한 나</span><br>" +
        " 그렇게 데이터 전처리부터 이를 Room 형식으로 변환하는 작업에 " +
        "총 5일을 매달린 끝에 외부 데이터베이스를 성공적으로 불러올 수 있었습니다. 이번 경험을 통해 단순히 코드를 복사하여 사용하는 것이 아니라, " +
        "함수의 기능과 필요한 인자를 이해하는 것의 중요성을 깨달았습니다.  또한 int와 Integer의 차이 등 언어 기초의 중요성도 다시 한번 체감했습니다. " +
        "이 과정을 통해 문제를 체계적으로 분석하고 해결하는 능력과 어려움 속에서도 포기하지 않고 끝까지 해결하려는 끈기의 중요성을 배울 수 있었습니다.</p>",
        // 본인 역량 - 첫 페이지
        [
            `<div class="content-page">
        <video src='/content/subway.mp4' controls class="content-video"></video>
        <div class="content-text">
            <p><span class='icspan'># Subway Kiosk</span></p>
            <p>&nbsp; 첫 토이프로젝트로 순수 자바로만 개발한 서브웨이 주문 프로그램<br>
            처음 화면을 클릭하면 메뉴를 담는 화면으로 넘어가며 샌드위치, 샐러드, 사이드와 음료를 모두 주문할 수 있다.
            사용자는 빵 종류와 길이부터 토핑, 야채, 소스, 세트와 사이드까지 모두 선택 가능하다.
            이후 상품 개수를 조정할 수도 있으며 결제 시 영수증이 출력된다.<br>
            Swing을 이용하여 UI를 설계하였고 Enum을 이용해 각 샌드위치, 토핑 등 객체를 설계하였다.<br><br></p>
        </div>
    </div>`,
            `<div class="content-page">
        <img src='/content/gongguli.png' class="content-image-horizontal" />
        <div class="content-text">
            <p><span class='icspan'># GongGuLi</span></p>
            <p>&nbsp; 첫 팀 프로젝트로 Java, mariaDB, AWS 서버를 이용해 개발한 공동 구매 프로그램<br>
            사용자는 로그인을 하면 다른 사용자가 올린 공동 구매 게시글을 볼 수 있으며 지역, 물품, 인원 등 다양한 조건을
            필터나 검색을 통해 확인 가능하다. 원하는 게시물을 찾으면 채팅창에 참여할 수 있고 다른 사용자와 소통할 수 있다.
            마이페이지에서 그동안 참여한 공동구매와 참여 중인 공동구매 게시물을 확인할 수 있다. 당시 팀장이 되어 프로젝트의 계획과 진행을 맡았고 Swing을 이용해 UI를 구성하였다.<br><br></p>
        </div>
    </div>`,
            `<div class="content-page">
        <p><span class='icspan'># MedSearch</span></p>
        <p>&nbsp; 현재 개발 중인 안드로이드 프로그램<br>
        사용자는 원하는 약의 이름 혹은 특징을 검색하여 정보를 확인할 수 있다. 또 본인의 질병을 검색하여
        해당되는 질병에 복용하는 약의 정보를 제공한다. 사용자가 관심 표시를 해둔 약은 '일지'에서 알람을 통해
        복용 시간을 알려줄 수 있고 짧은 일기를 작성할 수 있다. 또, '소식'을 통해 최근 유행하는 질병이나 약에 재미있는 정보들을 제공한다.
        더 나아가 사용자의 증상을 확인하여 어떤 질병이 의심되는지 알려주는 '증상 체커' 기능과
        사용자의 건강 기록, 알레르기 정보, 현재 복용 중인 약을 통해 약물 간 상호작용을 확인하여 경고해주는 기능,
        사용자가 약의 부작용을 입력하면 다른 사용자에게 알려주는 기능, 사용자가 약에 대한 리뷰를 남기고 평가할 수 있는 기능,
        근처 약국과 병원의 위치를 제공하는 기능, 응급 상황 시 대처법을 제공하는 기능을 개발할 계획이다.
        위 기능이 모두 구현된다면 건강기능식품, 건강보조식품까지 나아가 사용자들의 후기를 확인하고 순위를 제공하는 앱을 구현할 계획이다.</p>
    </div>`
        ]

    ];

    var iContainer = document.getElementById('intBtnDiv');

    for (var i = 1; i <= 4; i++) {
        const button = document.createElement('button');
        button.textContent = i;
        button.classList.add('intBtn');
        iContainer.appendChild(button);
        introduce.push(button);
    }
    clickIntBtn(0);

    introduce.forEach((btn, index) => {
        btn.addEventListener("click", () => {
            clickIntBtn(index);
        });
    });

    function clickIntBtn(index) {
        if (index === 3) {
            myCapabilityPage();
        } else {
            title.innerHTML = titleStr[index];
            content.innerHTML = contentStr[index];
            removeMyCapabilityBtn();
        }

        for (var i = 0; i < introduce.length; i++) {
            if (i == index) {
                introduce[i].style.backgroundColor = "#617e6e";
                introduce[i].style.color = "#f0f0f0";
            } else {
                introduce[i].style.backgroundColor = "#f0f0f0";
                introduce[i].style.color = "dimgray";
            }
        }
    }

    function myCapabilityPage() {
        var index = 0;

        title.innerHTML = titleStr[3];
        content.innerHTML = contentStr[3][index];

        setMyCapabilityBtn();

        document.getElementById('leftBtn').addEventListener("click", () => {
            if (index > 0) {
                index--;
                content.innerHTML = contentStr[3][index];
            }
        });

        document.getElementById('rightBtn').addEventListener("click", () => {
            if (index < contentStr[3].length - 1) {
                index++;
                content.innerHTML = contentStr[3][index];
            }
        });
    }

    function setMyCapabilityBtn() {
        var intContentDiv = document.getElementById('intContentDiv');

        var leftBtn = document.createElement('button');
        leftBtn.id = 'leftBtn';
        leftBtn.textContent = '◀';
        leftBtn.classList.add('navBtn');

        var rightBtn = document.createElement('button');
        rightBtn.id = 'rightBtn';
        rightBtn.textContent = '▶';
        rightBtn.classList.add('navBtn');

        intContentDiv.appendChild(leftBtn);
        intContentDiv.appendChild(rightBtn);
    }

    function removeMyCapabilityBtn() {
        var leftBtn = document.getElementById('leftBtn');
        var rightBtn = document.getElementById('rightBtn');

        if (leftBtn) leftBtn.remove();
        if (rightBtn) rightBtn.remove();
    }
});
