document.addEventListener("DOMContentLoaded", function () {
    const rolloverWord = document.getElementById("rollover1");
    const rolloverPopup = document.getElementById("rollover1pop");

    if (rolloverWord && rolloverPopup) {
        rolloverPopup.style.display = "none";

        rolloverWord.addEventListener("mouseenter", function () {
            rolloverPopup.style.display = "block";
        });

        rolloverWord.addEventListener("mouseleave", function () {
            rolloverPopup.style.display = "none";
        });
    }
});

