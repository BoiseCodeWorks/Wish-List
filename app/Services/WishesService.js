import Wish from "../Models/Wish.js";
import store from "../store.js";

//Public
class WishesService {
  removeWish(wishId) {
    let wishIndex = store.State.wishes.findIndex(wish => wish.id == wishId);
    store.State.wishes.splice(wishIndex, 1);
    store.saveState();
  }
  addWish(rawWishData) {
    let wish = new Wish(rawWishData);
    store.State.wishes.push(wish);
    store.saveState();
  }
}

let service = new WishesService();
export default service;
