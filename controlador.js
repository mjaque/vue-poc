import { Modelo } from './modelo.js'

class Controlador{
	constructor(){
		window.onload = this.iniciar
	}
	iniciar(){
		this.vista1 = Vue.createApp({
			data(){
				let data = {
					atrib1: 'valor atrib1'
				}
				return data
			},
			methods: {
				metodo1(){
					console.log('método 1')
				},
				mostrar(){
					console.log('vista1.mostrar')
					this.metodo1()
				}
			}
		}).mount('#vista1')

		this.btn1 = document.getElementsByTagName('button')[0]
		this.btn1.onclick = this.vista1.mostrar.bind(this)
	}
}
new Controlador()
