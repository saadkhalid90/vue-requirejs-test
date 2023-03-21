require.config({
  paths: {
    Vue: "./vue@3.2.47/Vue.global",
    VueApp: "./app",
    ProductDisplay: "./components/ProductDisplay",
    ReviewForm: "./components/ReviewForm",
    ReviewList: "./components/ReviewList",
  },

  shim: {
    Vue: {
      exports: "Vue",
    },
  },
});

define(["VueApp", "ProductDisplay", "ReviewForm", "ReviewList"], function (
  VueApp,
  ProductDisplay,
  ReviewForm,
  ReviewList
) {
  const app = VueApp();
  ProductDisplay();
  ReviewForm();
  ReviewList();

  const mountedApp = app.mount("#app");  
});
