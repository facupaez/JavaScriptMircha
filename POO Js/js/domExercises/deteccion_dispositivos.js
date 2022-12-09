const d = document,
  n = navigator,
  ua = n.userAgent;

export default function userDeviceInfo(id) {
  const $id = d.getElementById(id),
    isMobile = {
      android: () => ua.match(/android/i),
      ios: () => ua.match(/iphone|ipad|ipad/i),
      windows: () => ua.match(/windows phone/i),
      any: function () {
        return this.android() || this.ios() || this.windows();
      },
    },
    isDesktop = {
      linux: () => ua.match(/linux/i),
      mac: () => ua.match(/mac os/i),
      windows: () => ua.match(/windows nt/i),
      any: function () {
        return this.linux() || this.mac() || this.windows();
      },
    },
    isWeb = {
      chrome: () => ua.match(/chrome/i),
      safari: () => ua.match(/safari/i),
      opera: () => ua.match(/opera|opera mini/i),
      edge: () => ua.match(/edge/i),
      ie: () => ua.match(/msie|iemobile/i),
      firefox: () => ua.match(/firefox/i),
      any: function () {
        return (
          this.chrome() ||
          this.safari() ||
          this.opera() ||
          this.edge() ||
          this.ie() ||
          this.firefox()
        );
      },
    };

  //   console.log(ua);
  $id.innerHTML = `
  <ul>
    <li>User Agent: <b>${ua}</b></li>
    <li>Plataforma: <b>${
      isMobile.any() ? isMobile.any() : isDesktop.any()
    }</b></li>
    <li>Navegador: <b>${isWeb.any()}</b></li>
  </ul>
  `;

  /*   Contenido exclusivo */

  if (isWeb.chrome()) {
    $id.innerHTML += `<p><mark>Este contenido solo se ve en Chrome</p>`;
  }

  if (isWeb.firefox()) {
    $id.innerHTML += `<p><mark>Este contenido solo se ve en firefox</p>`;
  }

  if (isWeb.safari()) {
    $id.innerHTML += `<p><mark>Este contenido solo se ve en safari</p>`;
  }

  if (isDesktop.linux()) {
    $id.innerHTML += `<p><mark>Descarga nuestro software para linux</p>`;
  }

  if (isDesktop.mac()) {
    $id.innerHTML += `<p><mark>Descarga nuestro software para mac</p>`;
  }

  if (isDesktop.windows()) {
    $id.innerHTML += `<p><mark>Descarga nuestro software para windows</p>`;
  }

  /* Redirecciones */

  if (isMobile.android()) {
    window.location.href = "https://www.google.com.ar";
  }
}
