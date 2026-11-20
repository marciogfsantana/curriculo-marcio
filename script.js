
document.addEventListener("DOMContentLoaded", () => {
  // Atualização automática do ano no rodapé
  const year = document.getElementById("year");

  if (year) {
    year.textContent = new Date().getFullYear();
  }

  // Menu de navegação para dispositivos móveis
  const menuToggle = document.querySelector(".menu-toggle");
  const menu = document.getElementById("menu");

  if (menuToggle && menu) {
    const closeMenu = () => {
      menu.classList.remove("open");
      menuToggle.setAttribute("aria-expanded", "false");
      menuToggle.setAttribute("aria-label", "Abrir menu");
    };

    menuToggle.addEventListener("click", () => {
      const isOpen = menu.classList.toggle("open");

      menuToggle.setAttribute(
        "aria-expanded",
        String(isOpen)
      );

      menuToggle.setAttribute(
        "aria-label",
        isOpen ? "Fechar menu" : "Abrir menu"
      );
    });

    // Fecha o menu após selecionar uma seção
    menu.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", closeMenu);
    });

    // Fecha o menu ao pressionar Escape
    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") {
        closeMenu();
      }
    });

    // Fecha o menu ao retornar para a versão desktop
    window.addEventListener("resize", () => {
      if (window.innerWidth > 850) {
        closeMenu();
      }
    });
  }

  // Links profissionais
  const linkedinLink = document.getElementById("linkedin-link");
  const emailLink = document.getElementById("email-link");
  const pdfLink = document.getElementById("pdf-link");

  if (linkedinLink) {
    linkedinLink.href =
      "https://www.linkedin.com/in/marciogfsantana/";
  }

  if (emailLink) {
    emailLink.href = "mailto:marcio5903@gmail.com";
  }

  if (pdfLink) {
    pdfLink.href = "curriculo.pdf";
  }
});
