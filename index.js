//RASTREAR DATOS
const mejorPelicula = [
  'Ford v Ferrari',
  'The Irishman',
  'Jojo Rabbit',
  'Joker',
  'Little Women',
  'Marriage Story',
  '1917',
  'Once Upon a Time in Hollywood',
  'Parasite'
];

const mejorDirector = [
  'Martin Scorsese (The Irishman)',

  'Todd Phillips (Joker)',

  'Sam Mendes (1917)',

  'Quentin Tarantino (Once Upon a Time in Hollywood)',

  'Bong Joon Ho (Parasite)'
];

const mejorActriz = [
  'Cynthia Erivo (Harriet)',

  'Scarlett Johansson (Marriage Story)',

  'Saoirse Ronan (Little Women)',

  'Charlize Theron (Bombshell)',

  'Renée Zellweger (Judy)'
];

const mejorActor = [
  'Antonio Banderas (Pain and Glory)',

  'Leonardo DiCaprio (Once Upon a Time in Hollywood)',

  'Adam Driver (Marriage Story)',

  'Joaquin Phoenix (Joker)',

  'Jonathan Pryce (The Two Popes)'
];

const mejorActorReparto = [
  'Brad Pitt (Once Upon a Time in Hollywood)',

  'Al Pacino (The Irishman)',

  'Joe Pesci (The Irishman)',

  'Tom Hanks (A Beautiful Day in the Neighborhood)',

  'Anthony Hopkins (The Two Popes)'
];

const mejorActrizReparto = [
  'Laura Dern (Marriage Story)',

  'Kathy Bates (Richard Jewell)',

  'Scarlett Johansson (Jojo Rabbit)',

  'Margot Robbie (Bombshell)',

  'Florence Pugh (Little Women)'
];

const mejorFotografia = [
  '1917',

  'The Irishman',

  'Joker',

  'The Lighthouse',

  'Once Upon a Time in Hollywood'
];

const peliculaExtranjera = [
  'Parasite (Corea del Sur)',

  'Pain and Glory (España)',

  'Corpus Christi (Polonia)',

  'Honeyland (Macedonia)',

  'Les Miserables (Francia)'
];

const animation = [
  'How to Train Your Dragon: The Hidden World',

  'I Lost My Body',

  'Klaus',

  'Missing Link',

  'Toy Story 4'
];

const animationShort = [
  'Dcera (Daughter)',
  'Hair Love',
  'Kitbull',
  'Memorable',
  'Sister'
];

const guion = [
  'Marriage Story',
  'Once Upon a Time in Hollywood',
  'Parasite',
  'Knives Out',
  '1917'
];

const guionAdaptado = [
  'The Irishman',
  'Joker',
  'Little Women',
  'The Two Popes',
  'Jojo Rabbit'
];

const cancionOriginal = [
  'I am standing with You',
  'Into the unknown',
  'Stand Up',
  '(I am gonna)Love me again',
  'I cant let you throw yourself'
];

const bandaSonora = [
  '1917',
  'Joker',
  'Little Women',
  'Marriage Story',
  'Starwars: The Rise of Skywalker'
];

const mejorDocumental = [
  'American Factory',
  'The edge of democracy',
  'Honeyland',
  'For Sama',
  'The Cave'
];

const documentalCorto = [
  'In the abscense',
  'Live overtakes me',
  'St Louis Superman',
  'Walk Run Cha-Cha',
  'Learning to Skateboard in a Warzone'
];

const maquillaje = [
  'Joker',
  'Bombshell',
  'Judy',
  '1917',
  'Maleficent: Mistress or Evil'
];

const productionDesign = [
  'Parasite',
  '1917',
  'The Irishman',
  'Jojo Rabbit',
  'Once upon a time in Hollywood'
];

const edicion = [
  'The Irishman',
  'Parasite',
  'Joker',
  'Jojo Rabbit',
  'Ford v Ferrari'
];

const edicionSonido = [
  '1917',
  'Joker',
  'Ford v Ferrari',
  'Star Wars: The Rise of Skywalker',
  'Once upon a time in Hollywood'
];

const mezclaSonido = [
  '1917',
  'Joker',
  'Ford v Ferrari',
  'Once upon a time in Hollywood',
  'Ad Astra'
];

const visualEffects = [
  'Avengers: Endgame',
  'The Lion King',
  '1917',
  'The Irishman',
  'Star Wars: The Rise of Skywalker'
];

const actionShortfilm = [
  'Brotherhood',
  'Nefta Football Club',
  'The Neighbors Window',
  'Saria',
  'A sister'
];

//ENVIAR DATOS/YO LOS OBTENGO COMO ADMIN

const myForm = document.getElementById('formulario');
myForm.addEventListener('submit', event => {
  event.preventDefault();
  const formData = new FormData(myForm);
  const resultados = {
    mejorPelicula: formData.getAll('mejorPelicula')[0],
    mejorDirector: formData.getAll('mejorDirector')[0],
    mejorActriz: formData.getAll('mejorActriz')[0],
    mejorActor: formData.getAll('mejorActor')[0],
    mejorActorReparto: formData.getAll('mejorActorReparto')[0],
    mejorActrizReparto: formData.getAll('mejorActrizReparto')[0],
    mejorFotografia: formData.getAll('mejorFotografia')[0],
    peliculaExtranjera: formData.getAll('peliculaExtranjera')[0],
    animation: formData.getAll('animation')[0],
    animationShort: formData.getAll('animationShort')[0],
    guion: formData.getAll('guion')[0],
    guionAdaptado: formData.getAll('guionAdaptado')[0],
    cancionOriginal: formData.getAll('cancionOriginal')[0],
    bandaSonora: formData.getAll('bandaSonora')[0],
    mejorDocumental: formData.getAll('mejorDocumental')[0],
    documentalCorto: formData.getAll('documentalCorto')[0],
    maquillaje: formData.getAll('maquillaje')[0],
    productionDesign: formData.getAll('productionDesign')[0],
    edicion: formData.getAll('edicion')[0],
    edicionSonido: formData.getAll('edicionSonido')[0],
    mezclaSonido: formData.getAll('mezclaSonido')[0],
    visualEffects: formData.getAll('visualEffects')[0],
    actionShortfilm: formData.getAll('actionShortfilm')[0],
    enviarData: formData.getAll('enviarData')[0]
  };
  console.log(resultados);
  setTimeout(() => {
    document.getElementById('header').innerHTML = '';
    document.getElementById(
      'header'
    ).innerHTML = `<p class="mensaje-final">Buenísimo <b>${resultados.enviarData}</b>, acá están tus elegidos para que los imprimas y chequees cómo te fue el 9 de febrero! :)</p> 
    <br/>
    <div class="botoncito2" style="margin-left: 44%">
    <input type="button" value="Imprimir/BajarPDF" onClick="window.print()" class="btn btn-dark">
    </div>  
    <div class="col-md-8 container" style="line-height: 1.1">
    <table class="table table-bordered">
  <thead>
    <tr>
      <th scope="col">Categoría</th>
      <th scope="col">Ganador/a</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Mejor Película</td>
      <td>${resultados.mejorPelicula}</td>
    </tr>
    <tr>
      <td>Mejor Director</td>
      <td>${resultados.mejorDirector}</td>
    </tr>
    <tr>
      <td>Mejor Actriz</td>
      <td>${resultados.mejorActriz}</td>
    </tr>
    <tr>
      <td>Mejor Actor</td>
      <td>${resultados.mejorActor}</td>
    </tr>
    <tr>
      <td>Actor Secundario</td>
      <td>${resultados.mejorActorReparto}</td>
    </tr>
    <tr>
      <td>Actríz Secundaria</td>
      <td>${resultados.mejorActrizReparto}</td>
    </tr>
    <tr>
      <td>Mejor Fotografía</td>
      <td>${resultados.mejorFotografia}</td>
    </tr>
    <tr>
      <td>Película Extranjera</td>
      <td>${resultados.peliculaExtranjera}</td>
    </tr>
    <tr>
      <td>Película Animada</td>
      <td>${resultados.animation}</td>
    </tr>
    <tr>
      <td>Corto Animado</td>
      <td>${resultados.animationShort}</td>
    </tr>
    <tr>
      <td>Mejor Guión</td>
      <td>${resultados.guion}</td>
    </tr>
    <tr>
      <td>Guión Adaptado</td>
      <td>${resultados.guionAdaptado}</td>
    </tr>
    <tr>
      <td>Canción Original</td>
      <td>${resultados.cancionOriginal}</td>
    </tr>
    <tr>
      <td>Banda Sonora</td>
      <td>${resultados.bandaSonora}</td>
    </tr>
    <tr>
      <td>Documental</td>
      <td>${resultados.mejorDocumental}</td>
    </tr>
    <tr>
      <td>Documental Corto</td>
      <td>${resultados.documentalCorto}</td>
    </tr>
    <tr>
      <td>Maquillaje</td>
      <td>${resultados.maquillaje}</td>
    </tr>
    <tr>
      <td>Diseño de Producción</td>
      <td>${resultados.productionDesign}</td>
    </tr>
    <tr>
      <td>Edición/Montaje</td>
      <td>${resultados.edicion}</td>
    </tr>
    <tr>
      <td>Edición de Sonido</td>
      <td>${resultados.edicionSonido}</td>
    </tr>
    <tr>
      <td>Mezcla de Sonido</td>
      <td>${resultados.mezclaSonido}</td>
    </tr>
    <tr>
      <td>Efectos Visuales</td>
      <td>${resultados.visualEffects}</td>
    </tr>
    <tr>
      <td>Cortometraje de Acción</td>
      <td>${resultados.actionShortfilm}</td>
    </tr>
  </tbody>
</table>
</div>
`;
  }, 1000);
});
