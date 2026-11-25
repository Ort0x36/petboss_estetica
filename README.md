# Pet Boss Estética Animal

Landing page de prévia da Pet Boss (banho e tosa em Mauá/SP).

Site estático em um único arquivo (`index.html`), publicado pela Vercel (framework "Other", sem build).

- **WhatsApp:** edite `WHATSAPP_NUMBER` no fim do `index.html` (DDI + DDD + número, só dígitos). Na prévia ele fica vazio.
- **Serviços:** edite o array `SERVICES` (duração e preço inicial).
- **Regerar o HTML** a partir dos desenhos da marca: `node assets-src/build_index.js` (sobrescreve o `index.html`; prefira editar o gerador).
- **Imagem de prévia do link:** `python3 assets-src/make_og.py`.

A pasta `assets-src/` não é publicada (`.vercelignore`).
