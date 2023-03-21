define(["VueApp"], function (VueApp) {
  function module() {
    const app = VueApp();
    const component = app.component("review-list", {
      props: {
        reviews: {
          type: Array,
          required: true,
        },
      },
      /*html*/
      template: `  
      <div class="review-container">
        <h3 class="review-header">Reviews:</h3>
        <ul class="review-ul">
          <li v-for="(review, idx) in reviews" :key="idx">
            {{review.name}} gave this product {{review.rating}} stars
            <br>
            {{review.review}}
            <br/>
            {{review.name}} would {{review.recommend === "No" ? 'not' : ''}} recommend this product
          </li>
        </ul>
      </div>
    `,
    });

    return component;
  }

  return module;
});
