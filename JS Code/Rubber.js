class Rubber extends PaintFunction {
    constructor(contextReal, contextDraft) {
        super();
        this.contextReal = contextReal;
    }
    onMouseDown(coord,event){
        this.contextReal.beginPath();
        this.contextReal.moveTo(coord[0],coord[1]);
        this.draw(coord[0],coord[1]);
    }
    onDragging(coord,event){
        this.draw(coord[0],coord[1]);
    }
    onMouseMove(){}
    onMouseUp(){}
    onMouseLeave(){}
    onMouseEnter(){}
    draw(x,y){
        this.contextReal.clearRect(x,y,100,100);
    }
}