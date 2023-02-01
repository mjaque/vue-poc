export { Vista1 }
const Vista1 = Vue.createApp({
	data() {
    	return {
			controlador: null,
			titulo: 'Vista 1',
			clase: 'inactivo'
    	}
  	},
	template: '<div :class=clase><h1>{{ titulo }}</h1></div>',
	methods: {
		mostrar(activo){
			if (activo)
				this.clase = 'activo'
			else
				this.clase = 'inactivo'
		}
	}
})
