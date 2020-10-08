var app = new Vue({
    el: '#app',
    //Variables (o parametro)
    data: {
      pokemon: {},
      pokeready: false, 
      pokemonABuscar: "",
      message: false,
      pregunta: 'Hola como Te llamas',
      pokemones: [],
      persona: {
          nombre: 'Agustina',
          apellido: 'Heredia',
          edad: '14',
      },
      respuestas: [
          {respuesta: 'Juan'},
          {respuesta: 'Pedro'},
          {respuesta: 'Agustina'},
        ]
    },
    //Funciones (o metodos)
    methods: {
        llamarPokemon() {
            fetch('https://pokeapi.co/api/v2/pokemon/'+ this.pokemonABuscar.toLowerCase())
            .then(data => data.json())
            .then(json => {
                this.pokemon = json;
                this.pokeready = true;
            })
        },

    },
    created() {
        fetch('https://pokeapi.co/api/v2/pokemon/?limit=20&offset=0')
        .then(response => response.json())
        .then(json => this.pokemones = json.results)
    }
  })

