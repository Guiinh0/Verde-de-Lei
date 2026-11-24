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

## 2. Configuração do WhatsApp

O número oficial da assessoria está configurado no topo do arquivo [`script.js`](./script.js):

```javascript
const WHATSAPP = "5513991934138"; // (13) 99193-4138
```

Todos os 5 botões de WhatsApp do site (hero, meio, checklist, flutuante e menu de navegação) já apontam para esse número com a mensagem de abertura padrão pré-configurada e o horário de atendimento informado (segunda a sexta, das 9h às 18h).

---

## 3. Onde Configurar o Google Tag Manager e o Meta Pixel (Opcional)

Para ativar a medição de cliques e conversões:
1. Abra o arquivo `script.js`.
2. Localize as linhas 17 e 20:
   ```javascript
   const GTM_ID = "GTM-XXXXXXX"; 
   const META_PIXEL_ID = "000000000000000";
   ```
3. Insira o seu ID do GTM ou do Meta Pixel. O carregamento ocorre de forma limpa e direta, sem banners intrusivos.
4. Cada clique em qualquer botão do WhatsApp dispara um evento estruturado para o `dataLayer`:
   ```javascript
   dataLayer.push({
     event: "whatsapp_click",
     local: "hero" | "meio" | "fim" | "flutuante" | "menu",
     timestamp: "..."
   });
   ```

---

## 4. Como Publicar na Vercel (Passo a Passo)

Como este repositório Git contém diretamente os arquivos do site na raiz:
1. Acesse [vercel.com/new](https://vercel.com/new).
2. Conecte sua conta do GitHub e selecione o repositório **`Verde-de-Lei`**.
3. Deixe as opções padrão e clique em **Deploy**.
4. O site estará online imediatamente com HTTPS e alta velocidade global.

---

## 5. Conformidade Sanitária e Jurídica

Todas as respostas e etapas do site foram alinhadas com as normas vigentes:
- **RDC nº 660/2022:** Procedimento de importação excepcional por pessoa física para uso próprio via Gov.br (validade de 2 anos, sem cobrança de taxa da Anvisa).
- **RDC nº 1.015/2026:** Dispensação farmacêutica em farmácias nacionais com receituário de controle especial.
- **RDC nº 1.014/2026:** Marco regulatório para associações de pacientes sem fins lucrativos (filiação formal com receita, laudo com CID, Termo de Adesão e Termo de Consentimento - TCLE).
- **Canais diretos:** Contato direto via WhatsApp `(13) 99193-4138` e Instagram `@verdedelei.assessoria`, sem exigência de CNPJ no ar.

