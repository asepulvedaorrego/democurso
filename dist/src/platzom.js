'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = platzom;
function platzom(palabra) {
	var traduccion = palabra;

	//verifica un palindromo , cancela todas las demas validaciones y realiza la funcoin de palindromos

	var reverse = function reverse(str) {
		return str.split('').reverse().join('');
	};

	var minMay = function minMay(str) {
		var length = str.length;
		var traduccion = '';
		var capitaliza = true;

		for (var i = 0; i < length; i++) {
			var char = str.charAt(i);
			traduccion += capitaliza ? char.toUpperCase() : char.toLowerCase();
			capitaliza = !capitaliza;
		}

		return traduccion;
	};

	if (palabra == reverse(palabra)) {
		return minMay(palabra);
	}

	// si termina en ar se eliminan esos caracteres
	if (palabra.toLowerCase().endsWith('ar')) {
		traduccion = palabra.slice(0, -2);
	}

	if (palabra.toLowerCase().startsWith('z')) {
		traduccion += 'pe';
	}

	//si es mayor a 10 se corta y se pone un guion al medio
	var length = traduccion.length;
	if (length >= 10) {
		var primero = traduccion.slice(0, Math.round(traduccion.length / 2));
		var segundo = traduccion.slice(Math.round(traduccion.length / 2), length);

		traduccion = primero + '-' + segundo;
	}

	return traduccion;
}