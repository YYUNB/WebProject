const sections = document.querySelectorAll("section");
const navBtns = document.querySelectorAll("nav div");

// 각 버튼에 클릭 이벤트
navBtns.forEach((btn, index) => {
    btn.addEventListener("click", () => {
        scrollToSection(index);
    });
});

for (let i = 0; i < navBtns.length; i++) {
    if (i==getCurrentSectionIndex()) navBtns[i].style.backgroundColor = "lightgray";
    else navBtns[i].style.backgroundColor = "transparent";
}

document.addEventListener("wheel", handleWheel);  // 마우스 휠 감지하여 스크롤 동작

function handleWheel(event) {
    const wheelDirection = event.deltaY; // 마우스 휠 위아래 이동 방향 (위로: 음수, 아래로: 양수)
    const currentSectionIndex = getCurrentSectionIndex(); // 현재 섹션 인덱스

    // 마우스 휠 방향 양수: 다음 섹션, 음수: 이전 섹션
    if (wheelDirection > 0 && currentSectionIndex < sections.length - 1)
        scrollToSection(currentSectionIndex + 1);
    else if (wheelDirection < 0 && currentSectionIndex > 0)
        scrollToSection(currentSectionIndex - 1);

}

function scrollToSection(index) { // index 섹션으로 스크롤
    sections[index].scrollIntoView({ behavior: "smooth" });
    for (let i = 0; i < navBtns.length; i++) {
        if (i==index) navBtns[i].style.backgroundColor = "lightgray";
        else navBtns[i].style.backgroundColor = "transparent";
    }
}

function getCurrentSectionIndex() { // 현재 섹션의 인덱스 반환
    let currentIndex = 0;
    sections.forEach((section, index) => {
        const rect = section.getBoundingClientRect(); // 섹션 위치 정보
        if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
            currentIndex = index; // 섹션이 화면에 보이면 해당 인덱스 저장
        }
    });
    return currentIndex;
}