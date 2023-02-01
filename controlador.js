import { Menu } from './menu.js'
import { Vista1 } from './vista1.js'
import { Vista2 } from './vista2.js'

class Controlador {
	constructor(){
		window.onload = this.iniciar.bind(this)
	}
	iniciar(){
		this.menu = Menu.mount('#nav')
		this.menu.controlador = this

		this.vista1 = Vista1.mount('#vista1')
		this.vista1.controlador = this

		this.vista2 = Vista2.mount('#vista2')
		this.vista2.controlador = this

		this.cambiarAVista1()
	}
	cambiarAVista1(){
		console.log('cambiarAVista1')
		this.vista2.mostrar(false)
		this.vista1.mostrar(true)
	}
	cambiarAVista2(){
		console.log('cambiarAVista2')
		this.vista1.mostrar(false)
		this.vista2.mostrar(true)
	}
}
new Controlador()
