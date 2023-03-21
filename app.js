define(["Vue"], function (Vue) {
    let firstCreatedApp;
    if (!firstCreatedApp) {
      firstCreatedApp = Vue.createApp({
        data() {
          return {
            cart: [],
            premium: true,
          };
        },
        methods: {
          updateCart(id) {
            this.cart.push(id);
          },
        },
      });
    }

    function returnApp() {
      return firstCreatedApp;
    }
    return returnApp;
});
