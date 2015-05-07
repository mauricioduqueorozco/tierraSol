var canvasInit = function(){
	document.body.style.background = "#f3f3f3";
	this.canvas = document.createElement("canvas");
	this.canvas.width = 800;
    this.canvas.height = 400;
    document.body.appendChild(this.canvas);
	this.ctx = this.canvas.getContext("2d");

	this.text = new this.FizzyText();
	this.gui = new dat.GUI();
	  this.gui.add(this.text, 'esfuerzo_1');
	  this.gui.add(this.text, 'calcular');
	  var controller = this.gui.add(this.text, 'maxSize', 0, 1);
	  this.check = this.gui.add(this.text, 'displayOutline');

	// eventos de los mandos.
	controller.onChange(function(value) {
		  this.check = value
	});

	
};

canvasInit.prototype.clear = function(){
	this.ctx.clearRect ( 0 , 0 , this.canvas.width, this.canvas.height );
};

canvasInit.prototype.FizzyText = function() {
	  this.esfuerzo_1 = 1;
	  this.maxSize = 1;
	  this.displayOutline = true;  
	 
	  this.calcular = function() {
	  	
	  };
};






	