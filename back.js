var puntos_finales = line_Ang({
										x1 : x,
										y1 : y,
										l : l * PxPorCm * 100,
										ang : alfa,
										color : 'black'
									},ctx);

		// punto alto
		punto({
				centroX : puntos_finales.desp_X + x,
				centroY : puntos_finales.desp_Y + y,
				radio : 10
		},ctx);
		linea({x1 : 0,
					y1 : 0,
					x2:  200,
					y2: 0 ,
					color : 'black'
		},ctx);
		line_Ang({
					x1 : puntos_finales.desp_X + x,
					y1 : puntos_finales.desp_Y + y,
					l :  0.1 * PxPorCm * 100,
					ang : 0 * Math.PI / 180,
					color : 'blue'
				},ctx);
		
		line_Ang({
					x1 : puntos_finales.desp_X + x,
					y1 : puntos_finales.desp_Y + y,
					l :  0.1 * PxPorCm * 100,
					ang : alfa,
					color : 'red'
		},ctx);