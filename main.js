const app = Vue.createApp({ //Controlador de la aplicación
  data(){
    return {
      producto: 'Calcetines',
      descripcion: 'Peazo calcetos.',
      imagen: './assets/imagenes/calcetines_verdes.jpg',
      inventario: 8,
      detalles: ['algodón 100%', 'disponible en varios colores', 'válido para celíacos'],
      variantes: [{talla: 'xs', color: 'rojo'}, {talla: 'xl', color: 'verde'}],
      carrito: 0
    }
  }
  methods: {
    anadirAlCarrito() {
      this.carrito++
    }
  }
})

function iniciar(){
  const appMontada = app.mount('#app')
}

window.onload = iniciar
