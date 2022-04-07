class Pen {
    constructor(){
        // initialiser 2 propriétés avec des valeurs par defaut
        // - color
        // - size
        this.color = "red";
        this.size = 2;
    }

    
    // méthode de configuration de l'ardoise à l'execution d'un dessin avec le crayon

    configure(ctx){

        ctx.lineWidth = this.size;
        ctx.strokeStyle = this.color;

        // mise à jour des propriété de dessin de l'ardoise(slate)
        
    }
    
    // setter pour appliquer la couleur "au crayon", et un autre pour appliquer la taille( size)
    //...
    set newSize(size){
        this.size = size;
    }
    
    set newColor(color){
        this.color = color;
    }
    
    // methode pour appliquer une couleur rgb au crayon

}
export default Pen;