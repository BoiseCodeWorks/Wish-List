export default class Wish {
  constructor(data) {
    //new Wish({imgUrl: '', title: ''})
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
        <button class="btn btn-danger">Remove</button>
      </div>
    </div>
  </div>
  `;
  }
}
