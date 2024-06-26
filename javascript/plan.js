document.addEventListener("DOMContentLoaded", () => {
    var planBtnArr = [];
    var pContainer = document.getElementById('planBtnDiv');
    var planContents = document.querySelectorAll('.planContentDiv');

    // Create buttons dynamically
    for (var i = 3; i < 5; i++) {
        var button = document.createElement('button');
        button.textContent = i;
        button.classList.add('intBtn');
        pContainer.appendChild(button);
        planBtnArr.push(button);
    }

    // Initial call to display the first plan
    clickPlanBtn(0);

    planBtnArr.forEach((btn, index) => {
        btn.addEventListener("click", () => {
            clickPlanBtn(index);
        });
    });

    function clickPlanBtn(index) {
        planBtnArr.forEach((btn, i) => {
            if (i == index) {
                btn.style.backgroundColor = "#617e6e";
                btn.style.color = "#f0f0f0";
            } else {
                btn.style.backgroundColor = "#f0f0f0";
                btn.style.color = "dimgray";
            }
        });

        planContents.forEach((content, i) => {
            if (i == index) content.style.visibility = "visible";
            else content.style.visibility = "hidden";
        });
    }
});
