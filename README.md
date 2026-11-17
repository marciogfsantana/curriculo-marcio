# Currículo online — Marcio Santana

Site estático e responsivo, sem dependências, pronto para GitHub Pages.

## Testar localmente
Abra `index.html` no navegador. Para testar o PDF, rode um servidor local: `python -m http.server 8000` e abra http://localhost:8000.

## Personalizar antes de publicar
1. Em `script.js`, altere `CONFIG.linkedin` e `CONFIG.email`.
2. Revise experiências, datas e credenciais em `index.html`. Especialmente AZ-800/AZ-801 e SC-200, cuja situação precisa ser confirmada.
3. Adicione o currículo público como `curriculo.pdf` na mesma pasta. Remova endereço, telefone ou informações que não deseja tornar públicas.
4. Revise descrições sobre o ONS para garantir que não divulguem informações confidenciais.

## Publicar gratuitamente
1. Crie um repositório público no GitHub, por exemplo `curriculo-marcio`.
2. Envie `index.html`, `style.css`, `script.js` e opcionalmente `curriculo.pdf` à raiz da branch `main`.
3. Abra **Settings > Pages > Build and deployment**, escolha **Deploy from a branch**, branch `main`, pasta `/(root)` e salve.
4. Acesse `https://SEU-USUARIO.github.io/curriculo-marcio/` após a publicação.

## Estrutura
- `index.html`: conteúdo e acessibilidade
- `style.css`: identidade visual e responsividade
- `script.js`: links, menu móvel e PDF
- `curriculo.pdf`: opcional, fornecido pelo titular
