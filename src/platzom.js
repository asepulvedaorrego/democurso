
export default function platzom (palabra) {
	let traduccion = palabra

//verifica un palindromo , cancela todas las demas validaciones y realiza la funcoin de palindromos

	const reverse = (str) => str.split('').reverse().join('')

	const minMay = (str)=>{
		const length = str.length
		let traduccion = ''
		let capitaliza = true

		for (let i = 0; i < length; i++) {
			const char = str.charAt(i)
			traduccion += capitaliza?char.toUpperCase():char.toLowerCase()
			capitaliza = !capitaliza
		}

		return traduccion
	}

	if(palabra == reverse(palabra)){
		return minMay(palabra)
	}

	// si termina en ar se eliminan esos caracteres
	if (palabra.toLowerCase().endsWith('ar')) {
		traduccion = palabra.slice(0,-2)
	}

	if (palabra.toLowerCase().startsWith('z')) {
		traduccion += 'pe'
	}

//si es mayor a 10 se corta y se pone un guion al medio
	const length = traduccion.length
	if (length >= 10){
		const primero = traduccion.slice(0,Math.round(traduccion.length/2))
		const segundo = traduccion.slice(Math.round(traduccion.length/2),length)
	
		traduccion = `${primero}-${segundo}`
	}

	return traduccion
}