const modal = document.getElementById("myModal");
const btn = document.getElementById("myBtn");
const span = document.getElementsByClassName("close")[0];

// open the modal
btn.onclick = function () {
    modal.style.display = "block";
};

// on X click, close the modal
span.onclick = function () {
    modal.style.display = "none";
};

// on outside modal click, close the modal
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
};
