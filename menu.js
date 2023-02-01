export { Menu }
const Menu = Vue.createApp({
	data() {
		return {
			controlador: null
		}
	},
	template: '<p><span @click=handler1>Vista 1</span> <span @click=handler2>Vista 2</span></p>',
	methods: {
		handler1(evento){
			console.log('handler1')
			this.controlador.cambiarAVista1()
		},
		handler2(evento){
			console.log('handler2')
			this.controlador.cambiarAVista2()
		}
	}
})
