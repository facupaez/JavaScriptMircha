const Component = (function () {
  //creamos el constructor del componente
  const Constructor = function (options) {
    this.el = options.el;
    this.data = options.data;
    this.template = options.template;
  };

  //agregamos metodos al prototipo del constructor del componente

  //render UI
  Constructor.prototype.render = function () {
    const $el = d.querySelector(this.el);

    if (!$el) return;
    $el.innerHTML = this.template(this.data);

    console.log(this.data);
  };

  //actualizar el state de forma reactiva
  Constructor.prototype.setState = function (obj) {
    for (let key in obj) {
      if (this.data.hasOwnProperty(key)) {
        this.data[key] = obj[key];
      }
    }
    this.render();
  };

  //obtenemos una copia inmutable del state
  Constructor.prototype.getState = function () {
    return JSON.parse(JSON.stringify(this.data));
  };

  return Constructor;
})();
