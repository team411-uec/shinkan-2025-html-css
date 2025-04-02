document.addEventListener("DOMContentLoaded", function () {
  const modal = document.getElementById("modal");
  const modalImg = document.getElementById("modal-img");
  const modalName = document.getElementById("modal-name");
  const modalRole = document.getElementById("modal-role");
  const modalDescription = document.getElementById("modal-description");
  const closeBtn = document.querySelector(".close");

  // プロフィール画像をクリックしたらモーダルを表示
  document.querySelectorAll(".profile-card").forEach((card) => {
    card.addEventListener("click", function () {
      modalImg.src = this.getAttribute("data-img");
      modalName.textContent = this.getAttribute("data-name");
      modalRole.textContent = this.getAttribute("data-role");
      modalDescription.textContent = this.getAttribute("data-description");

      // モーダルを表示
      modal.style.display = "block";
    });
  });

  // モーダルを閉じる
  closeBtn.addEventListener("click", function () {
    modal.style.display = "none";
  });

  // モーダルの外側をクリックしても閉じる
  window.addEventListener("click", function (event) {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  });
});
