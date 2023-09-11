class Shape{
    constructor(){
        this.color = "";
    }
}

Shape.prototype.setColor = function(newColor){
    this.color = newColor;
}
Shape.prototype.render = function(){
    return "N/A"
}

export default Shape;