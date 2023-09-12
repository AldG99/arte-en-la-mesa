import './App.css';

function App() {
  // Define los pasos para preparar pan
  const pasosParaPrepararPan = [
    'Mezcla los ingredientes secos en un tazón grande: harina, sal y levadura.',
    'Agrega agua tibia y revuelve para formar una masa.',
    'Amasa la masa en una superficie enharinada durante 10 minutos hasta que esté suave y elástica.',
    'Coloca la masa en un tazón, cúbrelo con un paño húmedo y déjalo reposar durante 1 hora para que la masa suba.',
    'Precalienta el horno a 220°C y coloca una bandeja en el centro.',
    'Voltea la masa sobre una superficie enharinada y forma la forma deseada de tu pan.',
    'Coloca el pan en la bandeja caliente en el horno.',
    'Hornea durante 25-30 minutos o hasta que el pan esté dorado y suene hueco al golpearlo en la parte inferior.',
    'Saca el pan del horno y déjalo enfriar antes de cortarlo y disfrutarlo.'
  ];

  return (
    <div>
      <style scoped>
        {`
          html, body {
            background-color: #f7f3e9;
          }
        `}
      </style>
      <header>
        <nav>
          <ul>
            <li><a href="#inicio">Inicio</a></li>
            <li><a href="#nuestra-historia">Nuestra Historia</a></li>
            <li><a href="#productos">Productos</a></li>
            <li><a href="#ordenar-ahora">Ordenar Ahora</a></li>
            <li><a href="#contacto">Contacto</a></li>
          </ul>
        </nav>
      </header>
      <div className='welcome-container' id="inicio">
        <div style={{ userSelect: 'none' }}>
          <img
            src={require('./images/imagen_inicio.jpg')}
            alt='Una Amiga y Un Amigo'
            onContextMenu={(e) => e.preventDefault()}
            onDragStart={(e) => e.preventDefault()}
          />
          <div className='texto-superpuesto-container'>
            <div className='texto-superpuesto'>
              <h1 style={{ userSelect: 'none' }}>Bienvenido a nuestro sitio de productos horneados</h1>
              <p style={{ userSelect: 'none' }}>Explora una variedad irresistible de pasteles, galletas y panes horneados con amor.</p>
              <p style={{ userSelect: 'none' }}>¡Embárcate en un viaje de sabores deliciosos!</p>
            </div>
          </div>
        </div>
      </div>
      <section id="preparar-pan">
        <h2>Cómo Preparar Pan en el Horno</h2>
        <ul>
          {pasosParaPrepararPan.map((paso, index) => (
            <li key={index}>{paso}</li>
          ))}
        </ul>
      </section>
      <section id="nuestra-historia" class="flex-container">
  <div class="text-container">
    <h2>Nuestra Historia</h2>
    <p>Hace más de una década, un grupo de amigos con un amor compartido por la panadería decidió convertir su pasión en una realidad palpable. Así nació nuestra panadería en horno, un lugar donde la tradición y la creatividad se entrelazan para crear experiencias gastronómicas inolvidables.</p>
    <p>Desde nuestros humildes comienzos en un pequeño local, hemos estado comprometidos con la calidad y la autenticidad en cada producto que sale de nuestro horno. Cada mañana, cuando el sol apenas se asoma en el horizonte, nuestros panaderos comienzan su labor meticulosa, seleccionando los ingredientes más frescos y preparando la masa con dedicación artesanal.</p>
    <p>La esencia de nuestra panadería radica en la comunidad que nos rodea. Hemos tenido el honor de servir a generaciones de clientes que comparten nuestro amor por el pan recién horneado y los pasteles con un toque casero. Cada visita es una oportunidad para celebrar los pequeños momentos de la vida con una deliciosa recompensa.</p>
    <p>Pero más allá de la calidad de nuestros productos, lo que realmente nos distingue es el amor con el que hacemos lo que hacemos. Cada pieza que sale de nuestro horno está impregnada de ese amor y dedicación, y eso es lo que nos impulsa a seguir horneando día tras día.</p>
    </div>
  <div class="image-container">
    <img src={require('./images/foto_ana.jpg')} alt='Foto de Ana' />
    <p>Ana</p>
  </div>
</section>
      <section id="productos">
        <h2>Nuestros Productos</h2>
        {/* Agrega imágenes de productos horneados aquí */}
        {/* Ejemplo: <img src="imagen_producto1.jpg" alt="Cupcakes decorados" />
                    <img src="imagen_producto2.jpg" alt="Pastel de chocolate" /> */}
        <p>Explora nuestra amplia gama de productos horneados, desde exquisitos cupcakes hasta pasteles personalizados y croissants recién salidos del horno.</p>
        <p>Cada producto se prepara con los ingredientes más frescos y se hornea con pasión para ofrecerte un sabor inigualable.</p>
      </section>
      <section id="ordenar-ahora">
  <h2>Ordenar Ahora</h2>
  <p>No esperes más para disfrutar de nuestros deliciosos productos horneados. Haz tu pedido ahora y deleita a tus papilas gustativas con auténticos sabores horneados.</p>
  <p>Ofrecemos opciones de entrega y retiro en tienda para tu comodidad.</p>
  <div class="subscription-buttons">
    <div class="subscription-option">
    <img
            src={require('./images/pan_1.png')}
            alt='Una Amiga y Un Amigo'
            onContextMenu={(e) => e.preventDefault()}
            onDragStart={(e) => e.preventDefault()}
          />
      <h3>3 meses</h3>
      <p>$200 la orden</p>
      <button>Ordenar Ahora</button>
    </div>
    <div class="subscription-option">
    <img
            src={require('./images/pan_2.png')}
            alt='Una Amiga y Un Amigo'
            onContextMenu={(e) => e.preventDefault()}
            onDragStart={(e) => e.preventDefault()}
          />
      <h3>6 meses</h3>
      <p>$350 la orden</p>
      <button>Ordenar Ahora</button>
    </div>
    <div class="subscription-option">
    <img
            src={require('./images/pan_3.png')}
            alt='Una Amiga y Un Amigo'
            onContextMenu={(e) => e.preventDefault()}
            onDragStart={(e) => e.preventDefault()}
          />
      <h3>12 meses</h3>
      <p>$600 la orden</p>
      <button>Ordenar Ahora</button>
    </div>
  </div>
</section>
      <section id="contacto">
        <h2>Contacto</h2>
        {/* Agrega imágenes relacionadas con la ubicación o el contacto */}
        {/* Ejemplo: <img src="imagen_mapa.jpg" alt="Ubicación de la panadería" /> */}
        <p>¿Tienes alguna pregunta o comentario? ¡No dudes en ponerte en contacto con nosotros!</p>
        <p>Estamos ubicados en [tu dirección] y puedes llamarnos al [tu número de teléfono] o enviarnos un correo electrónico a [tu dirección de correo electrónico].</p>
      </section>
    </div>
  );
}

export default App;
