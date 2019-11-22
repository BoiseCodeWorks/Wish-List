import Wish from "./Models/Wish.js";

let _state = {
  /** @type {Wish[]} */
  wishes: []
};

function _loadState() {
  try {
    let state = localStorage.getItem("wishState");
    if (state) {
      let data = JSON.parse(state);
      data.wishes = data.wishes.map(w => new Wish(w));
      _state = data;
    }
  } catch (error) {}
}
_loadState();

class Store {
  /**
   * Provides access to application state data
   */
  get State() {
    return _state;
  }

  saveState() {
    localStorage.setItem("wishState", JSON.stringify(_state));
  }
}

const STORE = new Store();
export default STORE;
