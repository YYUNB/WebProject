var sections = document.querySelectorAll("section");
var navBtns = document.querySelectorAll("nav div");

// 각 버튼에 클릭 이벤트
navBtns.forEach((btn, index) => {
    btn.addEventListener("click", () => {
        scrollToSection(index);
    });
});

for (let i = 0; i < navBtns.length; i++) {
    if (i==getCurrentSectionIndex()) {
        if (i%2==0) navBtns[i].style.backgroundColor = "#4c657c";
        else navBtns[i].style.backgroundColor = "#617e6e";
        navBtns[i].style.color = "#f0f0f0";
        navBtns[i].style.width = "70px";
    }
}

document.addEventListener("wheel", handleWheel);  // 마우스 휠 감지하여 스크롤 동작

function handleWheel(event) {
    var wheelDirection = event.deltaY; // 마우스 휠 위아래 이동 방향 (위로: 음수, 아래로: 양수)
    var currentSectionIndex = getCurrentSectionIndex(); // 현재 섹션 인덱스

    // 마우스 휠 방향 양수: 다음 섹션, 음수: 이전 섹션
    if (wheelDirection > 0 && currentSectionIndex < sections.length - 1)
        scrollToSection(currentSectionIndex + 1);
    else if (wheelDirection < 0 && currentSectionIndex > 0)
        scrollToSection(currentSectionIndex - 1);

}

function scrollToSection(index) { // index 섹션으로 스크롤
    sections[index].scrollIntoView({ behavior: "smooth" });
    for (var i = 0; i < navBtns.length; i++) {
        if (i==index) {
            if (i%2==0) navBtns[i].style.backgroundColor = "#4c657c";
            else navBtns[i].style.backgroundColor = "#617e6e";
            navBtns[i].style.color = "#f0f0f0";
        }
        else {
            navBtns[i].style.backgroundColor = "transparent";
            navBtns[i].style.color = "black";
        }
    }
}

function getCurrentSectionIndex() { // 현재 섹션의 인덱스 반환
    var currentIndex = 0;
    sections.forEach((section, index) => {
        var rect = section.getBoundingClientRect(); // 섹션 위치 정보
        if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
            currentIndex = index; // 섹션이 화면에 보이면 해당 인덱스 저장
        }
    });
    return currentIndex;
}