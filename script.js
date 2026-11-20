
// ==================================================
// PORTFÓLIO PROFISSIONAL — MARCIO SANTANA
// VERSÃO 2 — JAVASCRIPT COMPLETO
// ==================================================

"use strict";

// ==================================================
// CONFIGURAÇÕES
// ==================================================

const CONFIG = {
  linkedin: "https://www.linkedin.com/in/marciogfsantana/",
  email: "marcio5903@gmail.com",
  curriculo: "curriculo.pdf"
};

// ==================================================
// INICIALIZAÇÃO
// ==================================================

document.addEventListener("DOMContentLoaded", () => {
  configurarMenu();
  configurarContatos();
  configurarCurriculo();
  atualizarAno();
});

// ==================================================
// MENU RESPONSIVO
// ==================================================

function configurarMenu() {
  const botao = document.querySelector(".menu-toggle");
  const menu = document.querySelector("#menu");

  if (!botao || !menu) {
    return;
  }

  function fecharMenu() {
    menu.classList.remove("open");

    botao.setAttribute("aria-expanded", "false");
    botao.setAttribute("aria-label", "Abrir menu");

    botao.textContent = "☰";
  }

  function abrirMenu() {
    menu.classList.add("open");

    botao.setAttribute("aria-expanded", "true");
    botao.setAttribute("aria-label", "Fechar menu");

    botao.textContent = "✕";
  }

  botao.addEventListener("click", () => {
    const aberto = menu.classList.contains("open");

    if (aberto) {
      fecharMenu();
    } else {
      abrirMenu();
    }
  });

  // Fecha o menu ao selecionar uma seção.

  menu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      fecharMenu();
    });
  });

  // Fecha o menu ao pressionar ESC.

  document.addEventListener("keydown", (evento) => {
    if (evento.key === "Escape") {
      fecharMenu();
    }
  });

  // Fecha o menu ao clicar fora dele.

  document.addEventListener("click", (evento) => {
    const clicouNoMenu = menu.contains(evento.target);
    const clicouNoBotao = botao.contains(evento.target);

    if (!clicouNoMenu && !clicouNoBotao) {
      fecharMenu();
    }
  });

  // Ajusta o menu ao mudar o tamanho da tela.

  window.addEventListener("resize", () => {
    if (window.innerWidth > 800) {
      fecharMenu();
    }
  });
}

// ==================================================
// LINKEDIN E E-MAIL
// ==================================================

function configurarContatos() {
  const linkedin = document.querySelector("#linkedin-link");
  const email = document.querySelector("#email-link");

  if (linkedin) {
    linkedin.href = CONFIG.linkedin;
    linkedin.target = "_blank";
    linkedin.rel = "noopener noreferrer";
  }

  if (email) {
    email.href = `mailto:${CONFIG.email}`;
  }
}

// ==================================================
// CURRÍCULO PDF
// ==================================================

async function configurarCurriculo() {
  const botaoPDF = document.querySelector("#pdf-link");

  if (!botaoPDF) {
    return;
  }

  botaoPDF.href = CONFIG.curriculo;
  botaoPDF.setAttribute("download", "");

  // Verifica se o arquivo existe no GitHub Pages.

  try {
    const resposta = await fetch(CONFIG.curriculo, {
      method: "HEAD",
      cache: "no-store"
    });

    if (resposta.status === 404) {
      botaoPDF.removeAttribute("download");
      botaoPDF.removeAttribute("href");

      botaoPDF.setAttribute("aria-disabled", "true");
      botaoPDF.setAttribute(
        "title",
        "Currículo PDF indisponível no momento"
      );

      botaoPDF.style.opacity = "0.5";
      botaoPDF.style.cursor = "not-allowed";

      botaoPDF.addEventListener("click", (evento) => {
        evento.preventDefault();
      });
    }

  } catch (erro) {
    // Se a verificação falhar por conexão ou bloqueio,
    // mantém o link disponível para tentativa manual.

    console.warn(
      "Não foi possível verificar o currículo PDF:",
      erro
    );
  }
}

// ==================================================
// ANO AUTOMÁTICO NO RODAPÉ
// ==================================================

function atualizarAno() {
  const elementoAno = document.querySelector("#year");

  if (elementoAno) {
    elementoAno.textContent = new Date().getFullYear();
  }
}
