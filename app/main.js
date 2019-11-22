import WishesController from "./Controllers/WishesController.js";

class App {
  wishesController = new WishesController();
}

window["app"] = new App();
