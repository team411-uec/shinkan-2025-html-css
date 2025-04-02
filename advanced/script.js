document.addEventListener("DOMContentLoaded", function () {
  const modal = document.getElementById("modal");
  const modalImg = document.getElementById("modal-img");
  const modalName = document.getElementById("modal-name");
  const modalRole = document.getElementById("modal-role");
  const modalDescription = document.getElementById("modal-description");
  const closeBtn = document.querySelector(".close");

  // プロフィールカードのクリックでモーダルを表示
  document.querySelectorAll(".profile-card").forEach((card) => {
    card.addEventListener("click", function () {
      modalImg.src = this.getAttribute("data-img");
      modalName.textContent = this.getAttribute("data-name");
      modalRole.textContent = this.getAttribute("data-role");
      modalDescription.textContent = this.getAttribute("data-description");

      modal.classList.remove("hidden");
      modal.classList.add("opacity-100");
    });
  });

  // モーダルを閉じる
  closeBtn.addEventListener("click", function () {
    modal.classList.add("hidden");
    modal.classList.remove("opacity-100");
  });

  // モーダル外をクリックで閉じる
  modal.addEventListener("click", function (event) {
    if (event.target === modal) {
      modal.classList.add("hidden");
      modal.classList.remove("opacity-100");
    }
  });
});
