var G = 6.67384E-11, //[Nm2/kg2]
	DDsol = 1391684000, // Diametro del sol
	DDtie = 12742000, // Diametro tierra [m]
	DDlun = 374600, // Dia luna
	Msol = 1.989E30, // masa sol Kg
	Mtie = 5.972E24, // masa tierra
	Mlun = 7.349E22,
	dST = 15E10,
	dTL = 3844E5,
	TT = 365.25 * 24 * 3600, // periodo orbita de tierra
	TL = ((27 * 24 + 7) * 60 + 43.7) * 60, 
	VtgT = 2 * Math.PI * dST / TT, // Vel orbita de tierra
	VtgL = 2 * Math.PI * dTL / TL,
	dt = 24 * 3600,
	Vx = 0,
	Vy= VtgT, // cambia la velocidad por tanto cambia la trayectoria
	x = dST,
	y = 0,
	alpha = 0;


window.onload = function() {
	
    
	
	canvasInit.prototype.engine = function(){
		console.log(this.check);
		this.clear();		
		var X0 = this.canvas.width / 2;
		var Y0 = this.canvas.height / 2;
		var escG = 1E-9;
		var F = G * Msol * Mtie / Math.pow(dST , 2);
		var ac = F / Mtie;
		var acx = - ac * x / dST;
		var acy = - ac * y / dST;
		Vx = Vx + acx * dt;
		Vy = Vy + acy * dt;
		x = x + Vx * dt;
		y = y + Vy * dt;
		dST = Math.sqrt ( Math.pow(x , 2) + Math.pow(y , 2));
		var t = t + dt;
		var X1 = X0 + x * escG;
		var Y1 = Y0 - y * escG;
		punto({
				centroX : X0,
				centroY : Y0,
				radio : 10,
				color : 'red'
		},this.ctx);
		
		punto({
				centroX : X1,
				centroY : Y1,
				radio : 5,
				color : 'blue'
		},this.ctx);
 		
	}
	var gd = new canvasInit();
	gd.engine();

	setInterval(function () {
		gd.engine();
		
	}, 5);

	
};