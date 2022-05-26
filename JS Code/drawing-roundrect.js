class DrawingRoundRect extends PaintFunction {
    constructor(contextReal, contextDraft) {
        super();
        this.contextReal = contextReal;
        this.contextDraft = contextDraft;
    }
    onMouseDown(coord, event) {
        this.contextReal.storkeStyle = "cornflowerblue";
        this.origX = coord[0];
        this.origY = coord[1];
    }
    onDragging(coord, event) {
        this.contextDraft.storkeStyle = "cornflowerblue";
        this.contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
        this.contextDraft.beginPath();
        this.contextDraft.moveTo(coord[0],coord[1]-((coord[1] - this.origY)/5))
        this.contextDraft.quadraticCurveTo(coord[0],coord[1], coord[0]-((coord[0] - this.origX)/5), coord[1]);
        this.contextDraft.lineTo(this.origX+((coord[0] - this.origX)/5),coord[1]);
        this.contextDraft.quadraticCurveTo(this.origX,coord[1],this.origX, coord[1]-((coord[1] - this.origY)/5));
        this.contextDraft.lineTo(this.origX,this.origY+((coord[1] - this.origY)/5));
        this.contextDraft.quadraticCurveTo(this.origX,this.origY,this.origX+((coord[0] - this.origX)/5), this.origY);
        this.contextDraft.lineTo(coord[0]-((coord[0] - this.origX)/5),this.origY);
        this.contextDraft.quadraticCurveTo(coord[0],this.origY,coord[0], this.origY+((coord[1] - this.origY)/5));
        this.contextDraft.lineTo(coord[0],coord[1]-((coord[1] - this.origY)/5));
        this.contextDraft.closePath();
        this.contextDraft.stroke();
    }
    onMouseMove(){}
    onMouseUp(coord,event){
        this.contextDraft.clearRect(0,0,canvasDraft.width, canvasDraft.height);
        this.contextReal.strokeStyle=strokecolor;
        this.contextReal.lineWidth = 1;
        this.contextReal.beginPath();
        this.contextReal.moveTo(coord[0],coord[1]-((coord[1] - this.origY)/5))
        this.contextReal.quadraticCurveTo(coord[0],coord[1], coord[0]-((coord[0] - this.origX)/5), coord[1]);
        this.contextReal.lineTo(this.origX+((coord[0] - this.origX)/5),coord[1]);
        this.contextReal.quadraticCurveTo(this.origX,coord[1],this.origX, coord[1]-((coord[1] - this.origY)/5));
        this.contextReal.lineTo(this.origX,this.origY+((coord[1] - this.origY)/5));
        this.contextReal.quadraticCurveTo(this.origX,this.origY,this.origX+((coord[0] - this.origX)/5), this.origY);
        this.contextReal.lineTo(coord[0]-((coord[0] - this.origX)/5),this.origY);
        this.contextReal.quadraticCurveTo(coord[0],this.origY,coord[0], this.origY+((coord[1] - this.origY)/5));
        this.contextReal.lineTo(coord[0],coord[1]-((coord[1] - this.origY)/5));
        this.contextReal.closePath();
        this.contextReal.stroke();
    }
    onMouseLeave(){}
    onMouseEnter(){}
}
console.log(contexReal);
