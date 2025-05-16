const modal = document.getElementById("imageModal");
const modalImg = document.getElementById("modalImg");
const closeBtn = document.querySelector(".close");

// Open Modal on Image Click
document.querySelectorAll(".portfolio-item img").forEach(img => {
    img.addEventListener("click", function() {
        modal.style.display = "flex";
        modalImg.src = this.src;
    });
});

// Close Modal When Clicking the Close Button
closeBtn.addEventListener("click", function() {
    modal.style.display = "none";
});

// Close Modal When Clicking Outside Image
modal.addEventListener("click", function(event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
});