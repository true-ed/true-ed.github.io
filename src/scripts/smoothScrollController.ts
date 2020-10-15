interface HTMLSmoothScrollElement extends HTMLElement {
  translateY: number;
  mass: number;
}

export default class SmoothScrollController {
  y: number;
  elements: Array<HTMLSmoothScrollElement> = [];

  constructor() {
    this.y = window.scrollY;

    window.addEventListener("scroll", (e) => {
      this.y = window.scrollY;
    });
  }

  addElement(element: HTMLSmoothScrollElement) {
    this.elements.push(element);
  }

  startAnimation() {
    let draw = () => {
      for (let i in this.elements) {
        let element = this.elements[i];
        if (element.getAttribute) {
          let element_translate_y: number = Number(
            element.getAttribute("translate-y")
          );
          let mass: number = Number(element.getAttribute("mass"));

          let aspire = this.y / window.outerHeight / (mass / 100);

          this.elements[i].style.transform = `translateY(${aspire}px)`;
          element.setAttribute("translate-y", aspire.toString());
        }
      }

      window.requestAnimationFrame(draw);
    };

    draw();
  }
}
