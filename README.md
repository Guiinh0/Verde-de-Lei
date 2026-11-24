# Landing Page Institucional · Verde de Lei (@verdedelei.assessoria)

Landing page institucional estática de alta conversão e performance, desenvolvida especialmente para o tráfego mobile do Instagram, em estrita conformidade com as diretrizes regulatórias e sanitárias da cannabis medicinal no Brasil.

---

## 1. Estrutura de Arquivos

```
site/
├── index.html                  # Landing page principal (SEO, Schema.org, semântica)
├── style.css                   # Estilos mobile-first (360px a 1440px), acessibilidade AA
├── script.js                   # Lógica interativa, links do WhatsApp, dataLayer e LGPD
├── politica-de-privacidade.html # Página complementar de privacidade (LGPD)
├── termos-de-uso.html          # Condições de uso e limites legais de atuação
├── robots.txt                  # Diretrizes para indexadores de busca
├── sitemap.xml                 # Mapa do site indexável
├── assets/                     # Imagens institucionais da marca
│   ├── logo-h.png              # Logo horizontal sobre fundo claro
│   ├── logo-h-claro.png        # Logo horizontal sobre fundo escuro
│   ├── logo-icone.png          # Ícone institucional
│   ├── favicon.png             # Favicon otimizado (32x32)
│   └── og-image.png            # Imagem de compartilhamento social (1200x630)
└── README.md                   # Manual de configuração e deploy
```

---

## 2. Como Trocar o Número do WhatsApp

Toda a lógica de contato está centralizada em uma única constante no topo do arquivo [`script.js`](./script.js):

1. Abra o arquivo `site/script.js`.
2. Localize a linha 9:
   ```javascript
   const WHATSAPP = "55DDDNUMERO";
   ```
3. Substitua `"55DDDNUMERO"` pelo número oficial com código do país (55) e DDD, apenas dígitos.  
   *Exemplo:* `const WHATSAPP = "5511987654321";`
4. Todos os 5 botões de WhatsApp do site (hero, meio, fim, flutuante e menu) serão atualizados automaticamente com o link correto e a mensagem de abertura pré-definida.

---

## 3. Onde Configurar o Google Tag Manager e o Meta Pixel

A landing page inclui suporte nativo à LGPD: tags de telemetria só disparam após o visitante clicar em **"Aceitar"** no banner de cookies.

Para ativar seu rastreamento:
1. Abra o arquivo `site/script.js`.
2. Localize as linhas 17 e 20:
   ```javascript
   const GTM_ID = "GTM-XXXXXXX"; 
   const META_PIXEL_ID = "000000000000000";
   ```
3. Insira o seu ID do GTM (ex: `"GTM-K89ABC"`) e o ID numérico do Meta Pixel.
4. Cada clique em qualquer botão do WhatsApp dispara um evento estruturado para o `dataLayer`:
   ```javascript
   dataLayer.push({
     event: "whatsapp_click",
     local: "hero" | "meio" | "fim" | "flutuante" | "menu",
     timestamp: "..."
   });
   ```

---

## 4. Como Publicar (Deploy em 3 Passos)

Esta landing page é 100% estática (HTML, CSS e JS puros), sem necessidade de build ou servidor Node.js.

### Opção A: Vercel
1. Acesse [vercel.com](https://vercel.com) e conecte seu repositório Git.
2. Nas configurações do projeto, defina o **Root Directory** como `site`.
3. Clique em **Deploy**.

### Opção B: Netlify
1. Acesse [netlify.com](https://netlify.com).
2. Arraste e solte a pasta `site` diretamente no painel do Netlify, ou vincule via Git definindo a pasta de publicação como `site`.
3. O site estará online com HTTPS gratuito instantaneamente.

### Opção C: Cloudflare Pages
1. Acesse o painel da Cloudflare e navegue até **Workers & Pages** > **Create application** > **Pages**.
2. Conecte o repositório, defina o diretório de build como `site` (sem comando de build).
3. Conclua o deploy.

---

## 5. Lista de Pontos Marcados com `REVISAR`

Para sua conferência prévia antes do lançamento oficial:

1. **index.html & script.js:**
   - Número do WhatsApp (`55DDDNUMERO`);
   - ID do Google Tag Manager (`GTM-XXXXXXX`);
   - ID do Meta Pixel (`000000000000000`);
   - No rodapé: E-mail de contato oficial (`contato@verdedelei.com.br`) e CNPJ da assessoria (`00.000.000/0001-00`);
   - Seção FAQ: Conferência das referências regulatórias (RDC 660/2022, RDC 1.015/2026, RDC 1.014/2026).
2. **politica-de-privacidade.html:**
   - E-mail do encarregado de dados (`privacidade@verdedelei.com.br`);
   - Data de vigência oficial.
3. **termos-de-uso.html:**
   - Comarca de eleição jurídica para o foro.

