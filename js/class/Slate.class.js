import Pen from "./Pen.class.js";

class Slate {
  // le constructor reçoit un argument
  constructor(pen) {
    // récupération du canvas, du context
    this.canvas = document.getElementById("slate");
    this.ctx = this.canvas.getContext("2d");

    // au début, on ne sait pas où se trouve la souris (currentLocation)
    this.currentLocation = null;
    // au début on dessine pas (isDrawing)
    this.isDrawing = false;
    // stockage de l'objet crayon
    this.pen = pen;
    // installer les écouteur lié à la souris
    this.canvas.addEventListener("mousedown", (e) => {
      this.currentLocation = this.getMouseLocation(e);
      this.isDrawing = true;
    });

    this.canvas.addEventListener("mousemove", (e) => {
      let newLocation = this.getMouseLocation(e);
      if (this.isDrawing === true) {
        this.pen.configure(this.ctx);
        this.ctx.beginPath();
        console.log(this.currentLocation);
        this.ctx.moveTo(this.currentLocation.x, this.currentLocation.y);
        this.ctx.lineTo(newLocation.x, newLocation.y);
        this.ctx.stroke();
        this.ctx.closePath();
        this.currentLocation = newLocation;
      }
    });
  }
  

  // méthode de nettoyage de l'ardoise
  clear() {}

  getMouseLocation(e) {
    const position = {
      x: e.offsetX,
      y: e.offsetY,
    };
    return position;
  }

  // méthodes sur la gestion de la souris
  //...
}
export default Slate;
