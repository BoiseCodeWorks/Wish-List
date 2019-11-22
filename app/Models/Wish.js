export default class Wish {
  constructor(data) {
    //new Wish({imgUrl: '', title: ''})
    this.id =
      data.id ||
      `${Math.floor(Math.random() * 10000)}-${Math.floor(
        Math.random() * 10000
      )}`;
    this.imgUrl = data.imgUrl;
    this.title = data.title;
  }

  get Template() {
    return `
    <div class="col-4">
    <div class="card">
      <img src="${this.imgUrl}" class="card-img-top" />
      <div class="card-body">
        <h5 class="card-title">${this.title}</h5>
        <button class="btn btn-danger" onclick="app.wishesController.removeWish('${this.id}')">Remove</button>
      </div>
    </div>
  </div>
  `;
  }
}
