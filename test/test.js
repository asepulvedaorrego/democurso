
//test y mocha son modulos de node que permiten hacer test del codigo 
const expect = require('chai').expect
const platzom = require('..').default

describe('#platzom', function () {
	it('si termina en ar se eliminan esos caracteres',function(){
		const traduccion = platzom('Programar')
		expect(traduccion).to.equal("Program")
	})

	it('si es mayor a 10 se corta y se pone un guion al medio',function(){
		const traduccion = platzom('abecedario')
		expect(traduccion).to.equal("abece-dario")
	})

	it('verifica un palindromo , si lo es, intercala entre mayúsculas y minusculas todas las letras de la palabra',function(){
		const traduccion = platzom('sometemos')
		expect(traduccion).to.equal("SoMeTeMoS")
	})

	it('Si la palabra inicia con Z se le añade pe',function(){
		const traduccion = platzom('Zorro')
		const traduccion2 = platzom('Zarpar')

		expect(traduccion).to.equal("Zorrope")
		expect(traduccion2).to.equal("Zarppe")
	})
})