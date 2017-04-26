//自定义windowToCanvas坐标转换函数

function windowToCanvas(canvas,x,y) { 

	var canvasBox = canvas.getBoundingClientRect();

	var canvasX = x - canvasBox.left;
	var canvasY = y - canvasBox.top;

	// console.log(canvasX,canvasY);

	return {x:canvasX,y:canvasY};

}