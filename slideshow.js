class Slideshow {
  constructor(slideshowElement) {
    this.slideshow = slideshowElement;
    this.slides = slideshowElement.getElementsByClassName("trackedimage");
    this.prevButton = slideshowElement.querySelector(".prev");
    this.nextButton = slideshowElement.querySelector(".next");
    this.slideIndex = 0;

    this.prevButton.addEventListener("click", () => this.showSlides(-1));
    this.nextButton.addEventListener("click", () => this.showSlides(1));

    this.showSlides(0);
  }

  showSlides(n) {
    this.slideIndex += n;
    if (this.slideIndex >= this.slides.length) this.slideIndex = 0;
    if (this.slideIndex < 0) this.slideIndex = this.slides.length - 1;

    for (let i = 0; i < this.slides.length; i++) {
      this.slides[i].style.display = "none";
    }
    this.slides[this.slideIndex].style.display = "block";
  }
}

window.addEventListener("load", () => {
  const slideshows = document.querySelectorAll(".projectslideshow");
  slideshows.forEach(slideshow => new Slideshow(slideshow));
});
