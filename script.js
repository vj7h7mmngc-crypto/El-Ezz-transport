document.addEventListener("DOMContentLoaded", () => {
  // زر القائمة في الموبايل
  const hamburger = document.querySelector(".hamb");
  const links = document.querySelector(".links");

  if (hamburger && links) {
    hamburger.addEventListener("click", () => {
      links.classList.toggle("open");
    });

    // إغلاق القائمة بعد اختيار أي رابط
    links.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        links.classList.remove("open");
      });
    });
  }

  // السنة الحالية في الفوتر
  const year = document.getElementById("year");

  if (year) {
    year.textContent = new Date().getFullYear();
  }
});
