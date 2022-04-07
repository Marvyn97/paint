import ColorPalette from "./ColorPalette.class.js";
import Pen from "./Pen.class.js";
import Slate from "./Slate.class.js";

class Program {
  constructor() {
    this.colorPalette = new ColorPalette();
    this.pen = new Pen();
    this.slate = new Slate(this.pen);
    // instancier 3 propriétés :
    // - ColorPalette
    // - Pen
    // - Slate
    this.start();
  }

  // écouter sur la pipette pur display la palette de dégradé

  // méthodes:

  onClickPenColor(e) {
    this.pen.newColor = e.target.dataset.color;
  }

  onClickPenSize() {}

  onPickColor() {}

  start() {
    const penColor = document.querySelectorAll(".pen-color");
    penColor.forEach((color) => {
      color.addEventListener("click", (e) => this.onClickPenColor(e));
    });

    const pipette = document.getElementById("tool-color-picker");
    pipette.addEventListener("click", (e) => {
      const palette = document.getElementById("color-palette");
      palette.classList.toggle("hide");
    });
    // installer des écouteurs sur les outils et de configuration

    // y'aura un gestionnaire d'evenement custom à créer (à ne pas faire tout de suite FFS !)
  }
}

export default Program;
