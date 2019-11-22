import Wish from "../Models/Wish.js";
import store from "../store.js";

//Public
class WishesService {
  addWish(rawWishData) {
    let wish = new Wish(rawWishData);
    store.State.wishes.push(wish);
    store.saveState();
  }
}

let service = new WishesService();
export default service;
