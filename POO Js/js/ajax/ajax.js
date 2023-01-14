/* OBJETO HTTPREQUEST */
(() => {
  const xhr = new XMLHttpRequest(),
    $xhr = document.getElementById("xhr"),
    $fragment = document.createDocumentFragment();

  xhr.addEventListener("readystatechange", (e) => {
    if (xhr.readyState != 4) return;

    if (xhr.status >= 200 && xhr.status < 300) {
      //console.log("Éxito");
      /*       console.log(xhr.responseText);
      $xhr.innerHTML = xhr.responseText; */
      let json = JSON.parse(xhr.responseText);
      //console.log(json);

      json.forEach((el) => {
        const $li = document.createElement("li");
        $li.innerHTML = `${el.name} -- ${el.email} -- ${el.phone}`;
        $fragment.appendChild($li);
      });

      $xhr.appendChild($fragment);
    } else {
      // console.log("Error");
      let message = xhr.statusText || "Ocurrió un error en la petición";
      $xhr.innerHTML = `Error ${xhr.status}: ${message}`;
    }
  });

  xhr.open("GET", "https://jsonplaceholder.typicode.com/users");

  xhr.send();
})();
/* API FETCH */
(() => {
  const $fetch = document.getElementById("fetch"),
    $fragment = document.createDocumentFragment();

  fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => (res.ok ? res.json() : Promise.reject(res)))
    .then((json) => {
      // console.log(json);
      //$fetch.innerHTML = json;
      json.forEach((el) => {
        const $li = document.createElement("li");
        $li.innerHTML = `${el.name} -- ${el.email} -- ${el.phone}`;
        $fragment.appendChild($li);
      });

      $fetch.appendChild($fragment);
    })
    .catch((err) => {
      //console.log(err);
      let message = err.statusText || "Ocurrió un error en la petición";
      $fetch.innerHTML = `Error ${fetch.status}: ${message}`;
    })
    .finally(() => {
      //console.log("Esto se ejecutará independientemente del resultado de la promesa fetch")
    });
})();
/* API FETCH ASYNC-AWAIT */
(() => {
  const $fetchAsync = document.getElementById("fetch-async"),
    $fragment = document.createDocumentFragment();

  async function getData() {
    try {
      let res = await fetch("https://jsonplaceholder.typicode.com/users");
      json = await res.json();

      //console.log(res, json);

      if (!res.ok)
        throw {
          status: res.status,
          statusText: res.statusText,
        };

      json.forEach((el) => {
        const $li = document.createElement("li");
        $li.innerHTML = `${el.name} -- ${el.email} -- ${el.phone}`;
        $fragment.appendChild($li);
      });

      $fetchAsync.appendChild($fragment);
    } catch (err) {
      //console.log(err);
      let message = err.statusText || "Ocurrió un error en la petición";
      $fetchAsync.innerHTML = `Error ${fetch.status}: ${message}`;
    } finally {
      /* console.log(
        "Esto se ejecutará independientemente del resultado del try... catch"
      ); */
    }
  }

  getData();
})();
/* AXIOS */
(() => {
  const $axios = document.getElementById("axios"),
    $fragment = document.createDocumentFragment();

  axios
    .get("https://jsonplaceholder.typicode.com/users")
    .then((res) => {
      // console.log(res);
      let json = res.data;
      json.forEach((el) => {
        const $li = document.createElement("li");
        $li.innerHTML = `${el.name} -- ${el.email} -- ${el.phone}`;
        $fragment.appendChild($li);
      });

      $axios.appendChild($fragment);
    })
    .catch((err) => {
      // console.log(err.response);
      let message =
        err.response.statusText || "Ocurrió un error en la petición";
      $axios.innerHTML = `Error ${err.response.status}: ${message}`;
    })
    .finally(() => {
      /*   console.log(
        "Esto se ejecutará independientemente del resultado de Axios"
      ); */
    });
})();
/* AXIOS ASYNC-AWAIT */
(() => {
  const $axiosAsync = document.getElementById("axios-async"),
    $fragment = document.createDocumentFragment();

  async function getData() {
    try {
      let res = await axios.get("https://jsonplaceholder.typicode.com/users");
      json = await res.data;

      //console.log(res, json);

      json.forEach((el) => {
        const $li = document.createElement("li");
        $li.innerHTML = `${el.name} -- ${el.email} -- ${el.phone}`;
        $fragment.appendChild($li);
      });

      $axiosAsync.appendChild($fragment);
    } catch (err) {
      //console.log(err.response);
      let message =
        err.response.statusText || "Ocurrió un error en la petición";
      $axiosAsync.innerHTML = `Error ${err.response.status}: ${message}`;
    } finally {
      /* console.log(
        "Esto se ejecutará independientemente del resultado del try... catch"
      ); */
    }
  }

  getData();
})();
