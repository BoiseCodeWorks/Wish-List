import WishesService from "../Services/WishesService.js";
import store from "../store.js";

function _draw() {
  let wishes = store.State.wishes;
  let template = "";
  wishes.forEach(wish => {
    template += wish.Template;
  });
  document.querySelector("#wishes").innerHTML = template;
}

//Public
export default class WishesController {
  constructor() {
    _draw();
  }

  removeWish(wishId) {
    WishesService.removeWish(wishId);
    _draw();
  }

  addWish(event) {
    event.preventDefault();
    let formData = event.target;
    let rawData = {
      title: formData.title.value,
      imgUrl: formData.imgUrl.value
    };
    WishesService.addWish(rawData);
    formData.reset();
    _draw();
  }
}
