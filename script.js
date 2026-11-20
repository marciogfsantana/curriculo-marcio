
// PORTFÓLIO MARCIO SANTANA — V3

"use strict";

const CONFIG = {
  linkedin: "https://www.linkedin.com/in/marciogfsantana/",
  email: "marcio5903@gmail.com",
  curriculo: "curriculo.pdf"
};

document.addEventListener("DOMContentLoaded", () => {

  // MENU RESPONSIVO

  const botao = document.querySelector(".menu-toggle");
  const menu = document.querySelector("#menu");

  if (botao && menu) {

    const fechar = () => {
      menu.classList.remove("open");
      botao.setAttribute("aria-expanded", "false");
      botao.setAttribute("aria-label", "Abrir menu");
      botao.textContent = "☰";
    };

    botao.addEventListener("click", () => {
      if (menu.classList.contains("open")) {
        fechar();
      } else {
        menu.classList.add("open");
        botao.setAttribute("aria-expanded", "true");
        botao.setAttribute("aria-label", "Fechar menu");
        botao.textContent = "✕";
      }
    });

    menu.querySelectorAll("a").forEach(link => {
      link.addEventListener("click", fechar);
    });

    document.addEventListener("keydown", event => {
      if (event.key === "Escape") {
        fechar();
      }
    });

    document.addEventListener("click", event => {
      if (
        !menu.contains(event.target) &&
        !botao.contains(event.target)
      ) {
        fechar();
      }
    });

    window.addEventListener("resize", () => {
      if (window.innerWidth > 800) {
        fechar();
      }
    });
  }

  // LINKEDIN

  const linkedin = document.querySelector("#linkedin-link");

  if (linkedin) {
    linkedin.href = CONFIG.linkedin;
    linkedin.target = "_blank";
    linkedin.rel = "noopener noreferrer";
  }

  // E-MAIL

  const email = document.querySelector("#email-link");

  if (email) {
    email.href = `mailto:${CONFIG.email}`;
  }

  // CURRÍCULO PDF

  const pdf = document.querySelector("#pdf-link");

  if (pdf) {
    pdf.href = CONFIG.curriculo;
  }

  // ANO AUTOMÁTICO

  const year = document.querySelector("#year");

  if (year) {
    year.textContent = new Date().getFullYear();
  }

});
