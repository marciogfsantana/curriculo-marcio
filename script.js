// CONFIGURE AQUI OS SEUS LINKS ANTES DE PUBLICAR.
const CONFIG = {
  linkedin: 'www.linkedin.com/in/marciogfsantana', // Substituir pela URL exata do perfil
  email: 'marcio5903@gmail.com'           // Substituir pelo e-mail profissional
};

document.getElementById('year').textContent = new Date().getFullYear();
document.getElementById('linkedin-link').href = CONFIG.linkedin;
document.getElementById('email-link').href = `mailto:${CONFIG.email}`;

const toggle = document.querySelector('.menu-toggle');
const menu = document.querySelector('.menu');
toggle.addEventListener('click', () => {
  const open = menu.classList.toggle('open');
  toggle.setAttribute('aria-expanded', String(open));
  toggle.setAttribute('aria-label', open ? 'Fechar menu' : 'Abrir menu');
});
menu.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  menu.classList.remove('open');
  toggle.setAttribute('aria-expanded', 'false');
  toggle.setAttribute('aria-label', 'Abrir menu');
}));

// O botão PDF só fica ativo após você adicionar curriculo.pdf à pasta.
const pdfLink = document.getElementById('pdf-link');
fetch('curriculo.pdf', {method:'HEAD'}).then(response => {
  if (!response.ok) throw new Error('PDF não encontrado');
}).catch(() => {
  pdfLink.removeAttribute('href');
  pdfLink.removeAttribute('download');
  pdfLink.setAttribute('aria-disabled','true');
  pdfLink.title = 'Adicione curriculo.pdf à pasta do site para ativar';
  pdfLink.addEventListener('click', event => event.preventDefault());
});
