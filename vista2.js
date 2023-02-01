export { Vista2 }
const Vista2 = Vue.createApp({
	data() {
    	return {
			controlador: null,
			titulo: 'Vista 2',
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
