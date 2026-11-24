/**
 * =========================================================================
 * VERDE DE LEI · CONFIGURAÇÃO PRINCIPAL E SCRIPTS INTERATIVOS
 * =========================================================================
 */

// 1. NÚMERO OFICIAL DO WHATSAPP
// Substitua o valor abaixo pelo número real da Verde de Lei com DDI (55) e DDD (ex: "5511999999999")
const WHATSAPP = "55DDDNUMERO";

// Mensagem padrão de abertura de conversa
const WHATSAPP_MENSAGEM = encodeURIComponent(
  "Olá! Vim pelo site da Verde de Lei e gostaria de entender como funciona o processo."
);

// 2. CONFIGURAÇÃO DE TAGS E ANALYTICS (GTM / META PIXEL)
// <!-- REVISAR: insira o ID do seu Google Tag Manager abaixo quando for publicar -->
const GTM_ID = "GTM-XXXXXXX"; 

// <!-- REVISAR: insira o ID do seu Meta Pixel abaixo quando for publicar -->
const META_PIXEL_ID = "000000000000000";

// Garante existência da fila dataLayer para Google Tag Manager
window.dataLayer = window.dataLayer || [];

/**
 * Inicializa os links de WhatsApp em todos os botões da página
 */
function inicializarLinksWhatsApp() {
  const urlFinal = `https://wa.me/${WHATSAPP}?text=${WHATSAPP_MENSAGEM}`;
  const botoes = document.querySelectorAll(".btn-whatsapp");

  botoes.forEach((btn) => {
    btn.setAttribute("href", urlFinal);
    btn.setAttribute("target", "_blank");
    btn.setAttribute("rel", "noopener noreferrer");

    btn.addEventListener("click", () => {
      const local = btn.getAttribute("data-wa-local") || "desconhecido";

      // Disparo de evento estruturado no dataLayer
      window.dataLayer.push({
        event: "whatsapp_click",
        local: local,
        timestamp: new Date().toISOString()
      });

      // Disparo no Meta Pixel (se já estiver carregado)
      if (typeof window.fbq === "function") {
        window.fbq("trackCustom", "WhatsAppClick", { local: local });
      }
    });
  });
}

/**
 * Carrega dinamicamente o Google Tag Manager após consentimento LGPD
 */
function carregarGTM(gtmId) {
  if (!gtmId || gtmId === "GTM-XXXXXXX") return;
  (function (w, d, s, l, i) {
    w[l] = w[l] || [];
    w[l].push({ "gtm.start": new Date().getTime(), event: "gtm.js" });
    var f = d.getElementsByTagName(s)[0],
      j = d.createElement(s),
      dl = l != "dataLayer" ? "&l=" + l : "";
    j.async = true;
    j.src = "https://www.googletagmanager.com/gtm.js?id=" + i + dl;
    f.parentNode.insertBefore(j, f);
  })(window, document, "script", "dataLayer", gtmId);
}

/**
 * Carrega dinamicamente o Meta Pixel após consentimento LGPD
 */
function carregarMetaPixel(pixelId) {
  if (!pixelId || pixelId === "000000000000000") return;
  (function (f, b, e, v, n, t, s) {
    if (f.fbq) return;
    n = f.fbq = function () {
      n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments);
    };
    if (!f._fbq) f._fbq = n;
    n.push = n;
    n.loaded = !0;
    n.version = "2.0";
    n.queue = [];
    t = b.createElement(e);
    t.async = !0;
    t.src = v;
    s = b.getElementsByTagName(e)[0];
    s.parentNode.insertBefore(t, s);
  })(window, document, "script", "https://connect.facebook.net/en_US/fbevents.js");
  window.fbq("init", pixelId);
  window.fbq("track", "PageView");
}

/**
 * Gestão do Banner de Consentimento de Cookies (LGPD)
 */
function inicializarLGPD() {
  const banner = document.getElementById("cookie-banner");
  const btnAccept = document.getElementById("cookie-accept");
  const btnReject = document.getElementById("cookie-reject");

  if (!banner || !btnAccept || !btnReject) return;

  const consentimento = localStorage.getItem("vdl_cookie_consent");

  if (!consentimento) {
    // Exibe o banner apenas se o usuário ainda não tiver optado
    banner.hidden = false;
  } else if (consentimento === "accepted") {
    carregarGTM(GTM_ID);
    carregarMetaPixel(META_PIXEL_ID);
  }

  btnAccept.addEventListener("click", () => {
    localStorage.setItem("vdl_cookie_consent", "accepted");
    banner.hidden = true;
    carregarGTM(GTM_ID);
    carregarMetaPixel(META_PIXEL_ID);
  });

  btnReject.addEventListener("click", () => {
    localStorage.setItem("vdl_cookie_consent", "rejected");
    banner.hidden = true;
  });
}

/**
 * Acessibilidade do Acordeão de Perguntas Frequentes
 * Fecha automaticamente itens vizinhos se o usuário preferir foco único (opcional e elegante)
 */
function inicializarAcordeao() {
  const detailsList = document.querySelectorAll(".faq-item");
  detailsList.forEach((targetDetail) => {
    targetDetail.addEventListener("toggle", () => {
      if (targetDetail.open) {
        detailsList.forEach((detail) => {
          if (detail !== targetDetail && detail.open) {
            detail.removeAttribute("open");
          }
        });
      }
    });
  });
}

// Inicialização automática ao carregar o DOM
document.addEventListener("DOMContentLoaded", () => {
  inicializarLinksWhatsApp();
  inicializarLGPD();
  inicializarAcordeao();
});

