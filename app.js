//helper functions
function getElement(selection) {
  const element = document.querySelector(selection);
  if (element) {
    return element;
  } else {
    throw new Error(`error in ${selection}, fix it`);
  }
}

//constructor
function Gallery(element) {
  this.list = [...element.querySelectorAll('.img')];
  //target modal using document not elemet scope
  this.modal = getElement('.modal');
  this.modalImg = getElement('.modal-img');
  this.modalImages = getElement('.modal-images');
  this.closeBtn = getElement('.close-btn');
  this.prevBtn = getElement('.prev-btn');
  this.nextBtn = getElement('.next-btn');
  console.log(this);
}

//instances
const nature = new Gallery(getElement('.nature'));
const city = new Gallery(getElement('.city'));
