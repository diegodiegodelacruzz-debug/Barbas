import './style.css'

const images = [
'Screenshot_20261118-094729~2.jpg',
'Screenshot_20261118-094736~2.jpg',
'Screenshot_20261118-094740.png',
'Screenshot_20261118-094748.png',
'Screenshot_20261118-094750.png',
'Screenshot_20261118-094756.png',
'Screenshot_20261118-094805~2.jpg',
'Screenshot_20261118-094810.png',
'Screenshot_20261118-094823.png',
'Screenshot_20261118-094826.png',
'Screenshot_20261118-094831~2.jpg',
'Screenshot_20261118-094849~2.jpg',
'Screenshot_20261118-094856~2.jpg',
'Screenshot_20261118-094930~2.jpg',
'Screenshot_20261118-095030~2.jpg',
'Screenshot_20261118-095041.png',
'Screenshot_20261118-095117~2.jpg',
'Screenshot_20261118-095128.png',
'Screenshot_20261118-095155~2.jpg',
'Screenshot_20261118-095211.png',
'Screenshot_20261118-095219.png',
'Screenshot_20261118-095225.png',
'Screenshot_20261118-095232.png',
'Screenshot_20261118-095252~2.jpg',
'Screenshot_20261118-095259.png',
'Screenshot_20261118-095311.png',
'Screenshot_20261118-095319~2.jpg',
'Screenshot_20261118-095329.png',
'Screenshot_20261118-095336~2.jpg',
'Screenshot_20261118-095350~2.jpg',
'Screenshot_20261118-095403.png',
'Screenshot_20261118-095416.png',
'Screenshot_20261118-095433~2.jpg',
'Screenshot_20261118-095440.png',
'Screenshot_20261118-095454~2.jpg',
'Screenshot_20261118-095502~2.jpg',
'Screenshot_20261118-095522.png',
'Screenshot_20261118-095529.png',
'Screenshot_20261118-095532~2.jpg',
'Screenshot_20261118-095605.png',
'Screenshot_20261118-095613.png',
'Screenshot_20261118-095620~2.jpg',
'Screenshot_20261118-095630.png',
'Screenshot_20261118-095637.png',
'Screenshot_20261118-095643~2.jpg',
'Screenshot_20261118-095654.png',
'Screenshot_20261118-095702.png',
'Screenshot_20261118-095709.png',
'Screenshot_20261118-095722.png',
'Screenshot_20261118-095729.png',
'Screenshot_20261118-095738.png',
'Screenshot_20261118-095744.png',
'Screenshot_20261118-095752.png',
'Screenshot_20261118-095807.png',
'Screenshot_20261118-095849.png'
'IMG-20261118-WA0011.jpg',
'IMG-20261118-WA0012.jpg',
'IMG-20261118-WA0013.jpg',
'IMG-20261118-WA0016.jpg',
'IMG-20261118-WA0017.jpg',
'IMG-20261118-WA0018.jpg',
'motion_photo_1973955191638033933.jpg',
]

const services = [
  {
    icon:'⚙️', title:'Mecánica general',
    desc:'Soluciones integrales para el funcionamiento de tu vehículo.',
    items:['Reparación integral de motores','Desmontaje y armado de motores','Distribución y puesta a punto','Juntas, retenes y pérdidas de aceite','Embragues y soportes de motor','Reparaciones de tapas de cilindros','Mantenimiento de sistemas mecánicos']
  },
  {
    icon:'💻', title:'Inyección electrónica',
    desc:'Tecnología y diagnóstico para encontrar y solucionar cada falla.',
    items:['Diagnóstico computarizado','Escaneo de módulos electrónicos','Inyección naftera y diésel','Limpieza de inyectores','Sensores y actuadores','Cuerpos de aceleración','Diagnóstico de fallas electrónicas']
  },
  {
    icon:'🚘', title:'Motores nafteros y diésel',
    desc:'Mantenimiento y reparación de sistemas de motorización.',
    items:['Reparación de motores nafteros','Reparación de motores diésel','Sistemas de alimentación','Bombas de combustible','Turboalimentación','Control de compresión','Detección de consumo de aceite']
  },
  {
    icon:'🔧', title:'Tren delantero y suspensión',
    desc:'Estabilidad, seguridad y correcto comportamiento del vehículo.',
    items:['Amortiguadores y espirales','Parrillas y bujes','Rótulas y extremos','Precaps y bieletas','Rodamientos','Cajas de dirección','Revisión de suspensión']
  },
  {
    icon:'🛑', title:'Sistema de frenos',
    desc:'Control y mantenimiento de uno de los sistemas más importantes.',
    items:['Pastillas y discos','Campanas y cintas','Bombas de freno','Cilindros y cálipers','Circuitos hidráulicos','Líquido de frenos','Diagnóstico de ABS']
  },
  {
    icon:'⚡', title:'Electricidad automotriz',
    desc:'Detección y reparación de problemas eléctricos.',
    items:['Arranques y alternadores','Baterías y sistemas de carga','Cableado eléctrico','Luces y circuitos','Fusibles y relés','Cortocircuitos','Sensores y conexiones']
  },
  {
    icon:'❄️', title:'Aire acondicionado',
    desc:'Confort y climatización durante todo el año.',
    items:['Diagnóstico del sistema','Carga de refrigerante','Detección de pérdidas','Compresores','Condensadores y evaporadores','Circuitos de climatización','Calefacción y ventilación']
  },
  {
    icon:'🛢️', title:'Lubricación y mantenimiento',
    desc:'Mantenimiento preventivo para prolongar la vida útil del motor.',
    items:['Cambio de aceite y filtros','Filtros de aire y combustible','Control de fluidos','Refrigerante','Control de correas','Revisión de batería','Mantenimiento por kilometraje']
  },
  {
    icon:'⚙️', title:'Cajas y transmisiones',
    desc:'Servicio especializado para transmisiones manuales y automáticas.',
    items:['Reparación de cajas manuales','Reparación de cajas automáticas','Diagnóstico de transmisiones','Mantenimiento de cajas automáticas','Embragues y componentes hidráulicos','Semiejes y juntas homocinéticas','Diferenciales y soportes']
  },
  {
    icon:'🛞', title:'Neumáticos',
    desc:'Control y mantenimiento para un rodamiento seguro.',
    items:['Desmontaje y montaje de neumáticos','Reparación de pinchaduras','Control de desgaste','Inspección de presión','Revisión de estado de cubiertas']
  },
  {
    icon:'📐', title:'Alineación y balanceo',
    desc:'Precisión para mejorar la conducción y el desgaste de los neumáticos.',
    items:['Alineación del tren delantero','Alineación de dirección','Balanceo de ruedas','Control de geometría','Corrección de vibraciones','Revisión de desgaste irregular']
  },
  {
    icon:'🌡️', title:'Sistema de refrigeración',
    desc:'Control de temperatura y prevención de sobrecalentamientos.',
    items:['Radiadores','Electroventiladores','Bombas de agua','Termostatos','Mangueras y conexiones','Depósitos de expansión','Detección de pérdidas']
  }
]

const app = document.querySelector<HTMLDivElement>('#app')!

app.innerHTML = `
<header class="topbar">
  <a class="brand" href="#inicio">BARBA'S <span>AUTOMECÁNICA</span></a>
  <button class="menu-toggle" id="menuToggle" aria-label="Abrir menú">☰</button>
  <nav id="navigation">
    <a href="#inicio">INICIO</a>
    <a href="#servicios">SERVICIOS</a>
    <a href="#flotas">FLOTAS</a>
    <a href="#galeria">GALERÍA</a>
    <a href="#contacto">CONTACTO</a>
  </nav>
</header>

<main id="inicio">

<section class="logo-area">
  <img src="/images/logo.jpg" alt="Automecánica Barba's" class="main-logo">
</section>

<section class="cartel-area">
  <img src="/images/cartel.jpg" alt="Cartel de Automecánica Barba's y automovilismo" class="cartel-img">
  <div class="cartel-caption">
    <span>IDENTIDAD</span>
    <i></i>
    <span>EXPERIENCIA</span>
    <i></i>
    <span>PASIÓN POR LOS MOTORES</span>
  </div>
</section>

<section class="workshop-cover">
  <img src="/images/portada-negocio.jpg" alt="Frente de Automecánica Barba's" class="cover-img">
  <div class="cover-overlay">
    <span class="eyebrow">SERVICIO INTEGRAL DEL AUTOMOTOR</span>
    <h1>LA MECÁNICA<br>EN SU <span>MÁXIMA EXPRESIÓN.</span></h1>
    <p>Experiencia, tecnología y compromiso para cuidar lo que te mueve.</p>
    <a class="btn-red" href="https://wa.me/5491159336270?text=Hola%20Barba's,%20quisiera%20consultar%20por%20un%20servicio.">SOLICITAR ATENCIÓN <b>↗</b></a>
  </div>
  <div class="cover-bottom">AUTOMECÁNICA BARBA'S <span>PENSANDO EN VOS...!</span></div>
</section>

<section class="intro section-pad">
  <div class="section-kicker">BIENVENIDOS A BARBA'S</div>
  <h2>MUCHO MÁS QUE<br>UN TALLER. <span>UNA SOLUCIÓN INTEGRAL.</span></h2>
  <p>En Automecánica Barba's trabajamos para ofrecer soluciones completas para tu vehículo. Contamos con servicios de mecánica general, diagnóstico computarizado, electricidad, inyección electrónica, transmisiones y mantenimiento integral.</p>
  <p>Atendemos vehículos particulares, empresas, flotas y cocheras fúnebres, con un enfoque basado en la responsabilidad, la experiencia y la atención personalizada.</p>
  <div class="intro-stats">
    <div><strong>INTEGRAL</strong><small>SERVICIO MECÁNICO</small></div>
    <div><strong>NAFTA & DIÉSEL</strong><small>TODOS LOS SISTEMAS</small></div>
    <div><strong>EMPRESAS</strong><small>ATENCIÓN A FLOTAS</small></div>
  </div>
</section>

<section class="services-section section-pad" id="servicios">
  <div class="section-kicker">NUESTRAS ESPECIALIDADES</div>
  <h2>TODO LO QUE TU VEHÍCULO <span>NECESITA.</span></h2>
  <p class="section-description">Un taller preparado para resolver una amplia variedad de necesidades mecánicas, eléctricas y de mantenimiento.</p>
  <div class="services-grid">
    ${services.map((s)=>`
      <article class="service-card">
        <div class="service-icon">${s.icon}</div>
        <h3>${s.title}</h3>
        <p>${s.desc}</p>
        <ul>${s.items.map(item=>`<li>${item}</li>`).join('')}</ul>
        <a class="service-link" href="https://wa.me/5491159336270?text=${encodeURIComponent("Hola Barba's, quisiera consultar por "+s.title+".")}">CONSULTAR SERVICIO ↗</a>
      </article>
    `).join('')}
  </div>
</section>

<section class="fleet-section" id="flotas">
  <div class="fleet-content section-pad">
    <div class="section-kicker">SOLUCIONES PARA EMPRESAS</div>
    <h2>SU FLOTA EN<br><span>BUENAS MANOS.</span></h2>
    <p>Sabemos que cada vehículo de una empresa es una herramienta de trabajo. Por eso ofrecemos atención mecánica para organizaciones que necesitan mantener sus unidades en condiciones.</p>
    <div class="fleet-grid">
      <div><span>01</span><h3>Flotas corporativas</h3><p>Atención para empresas con vehículos de uso diario y unidades de trabajo.</p></div>
      <div><span>02</span><h3>Cocheras fúnebres</h3><p>Servicio mecánico para vehículos de servicios funerarios y sus necesidades operativas.</p></div>
      <div><span>03</span><h3>Mantenimiento preventivo</h3><p>Controles periódicos para anticipar fallas y cuidar las unidades.</p></div>
      <div><span>04</span><h3>Reparación integral</h3><p>Soluciones mecánicas, eléctricas y electrónicas para mantener los vehículos operativos.</p></div>
    </div>
    <a class="btn-red" href="https://wa.me/5491159336270?text=Hola,%20quisiera%20consultar%20por%20atención%20para%20una%20flota%20de%20vehículos.">CONSULTAR POR MI EMPRESA ↗</a>
  </div>
</section>

<section class="gallery-section section-pad" id="galeria">
  <div class="section-kicker">NUESTRO TRABAJO</div>
  <h2>TRABAJO REAL.<br><span>RESULTADOS REALES.</span></h2>
  <p class="section-description">Una mirada a nuestro taller y a los trabajos que realizamos.</p>
  <div class="gallery-grid" id="galleryGrid">
    ${images.map((img,i)=>`
      <button class="gallery-item" data-index="${i}" aria-label="Ver fotografía ${i+1}">
        <img src="/images/${img}" alt="Trabajo de Automecánica Barba's ${i+1}" loading="lazy">
        <span>VER FOTO ↗</span>
      </button>
    `).join('')}
  </div>
  <p class="gallery-note">AUTOMECÁNICA BARBA'S • PENSANDO EN VOS...!</p>
</section>

<section class="promo-section">
  <div class="promo-inner">
    <span>¿NECESITÁS UN TALLER DE CONFIANZA?</span>
    <h2>ESTAMOS PARA<br><strong>AYUDARTE.</strong></h2>
    <p>Consultanos por tu vehículo, empresa o flota.</p>
    <a class="btn-white" href="https://wa.me/5491159336270?text=Hola%20Barba's,%20quisiera%20hacer%20una%20consulta.">HABLAR POR WHATSAPP ↗</a>
  </div>
</section>

<section class="contact-section section-pad" id="contacto">
  <div class="section-kicker">ESTAMOS PARA ATENDERTE</div>
  <h2>CONTACTÁ CON <span>BARBA'S.</span></h2>
  <p class="section-description">Comunicate con nosotros y contanos qué necesita tu vehículo.</p>
  <div class="contact-grid">
    <a href="tel:1149112333" class="contact-card"><span>☎</span><small>TELÉFONO FIJO</small><strong>4911-2333</strong><b>LLAMAR ↗</b></a>
    <a href="https://wa.me/5491159336270" class="contact-card"><span>◉</span><small>WHATSAPP</small><strong>11 5933-6270</strong><b>ESCRIBIR ↗</b></a>
    <a href="https://instagram.com/automecanica_barbas" target="_blank" rel="noopener" class="contact-card"><span>◎</span><small>INSTAGRAM</small><strong>@automecanica_barbas</strong><b>SEGUIRNOS ↗</b></a>
    <a href="https://www.google.com/maps/search/?api=1&query=Uspallata+3802+CABA+Argentina" target="_blank" rel="noopener" class="contact-card"><span>⌖</span><small>UBICACIÓN</small><strong>Uspallata 3802</strong><b>VER MAPA ↗</b></a>
  </div>
  <div class="address-box">
    <span>ENCONTRANOS EN</span>
    <h3>USPALLATA 3802</h3>
    <p>Altura Sáenz al 200 • Ciudad Autónoma de Buenos Aires</p>
    <a href="https://www.google.com/maps/search/?api=1&query=Uspallata+3802+CABA+Argentina" target="_blank" rel="noopener">CÓMO LLEGAR ↗</a>
  </div>
</section>

</main>

<footer>
  <div class="footer-brand">BARBA'S <span>AUTOMECÁNICA</span></div>
  <p>SERVICIO Y REPARACIÓN INTEGRAL DEL AUTOMOTOR</p>
  <p class="footer-slogan">PENSANDO EN VOS...!</p>
  <div class="footer-line"></div>
  <small>© ${new Date().getFullYear()} AUTOMECÁNICA BARBA'S. TODOS LOS DERECHOS RESERVADOS.</small>
</footer>

<a class="whatsapp-float" href="https://wa.me/5491159336270?text=Hola%20Barba's,%20quisiera%20hacer%20una%20consulta." target="_blank" rel="noopener" aria-label="WhatsApp">◉</a>

<div class="lightbox" id="lightbox" aria-hidden="true">
  <button class="lightbox-close" id="lightboxClose" aria-label="Cerrar">×</button>
  <button class="lightbox-prev" id="lightboxPrev" aria-label="Anterior">‹</button>
  <img id="lightboxImage" src="" alt="Fotografía ampliada">
  <button class="lightbox-next" id="lightboxNext" aria-label="Siguiente">›</button>
  <div class="lightbox-counter" id="lightboxCounter"></div>
</div>
`

const menu = document.querySelector('#navigation')!
document.querySelector('#menuToggle')!.addEventListener('click', () => {
  menu.classList.toggle('open')
})

menu.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => menu.classList.remove('open'))
})

const lightbox = document.querySelector<HTMLDivElement>('#lightbox')!
const lightboxImage = document.querySelector<HTMLImageElement>('#lightboxImage')!
const counter = document.querySelector<HTMLDivElement>('#lightboxCounter')!
let currentImage = 0

function showImage(index:number) {
  currentImage = (index + images.length) % images.length
  lightboxImage.src = '/images/' + images[currentImage]
  counter.textContent = `${currentImage+1} / ${images.length}`
  lightbox.classList.add('active')
  lightbox.setAttribute('aria-hidden','false')
  document.body.style.overflow = 'hidden'
}

function closeImage() {
  lightbox.classList.remove('active')
  lightbox.setAttribute('aria-hidden','true')
  document.body.style.overflow = ''
}

document.querySelectorAll<HTMLButtonElement>('.gallery-item').forEach(button => {
  button.addEventListener('click', () => showImage(Number(button.dataset.index)))
})

document.querySelector('#lightboxClose')!.addEventListener('click', closeImage)
document.querySelector('#lightboxPrev')!.addEventListener('click', () => showImage(currentImage-1))
document.querySelector('#lightboxNext')!.addEventListener('click', () => showImage(currentImage+1))

lightbox.addEventListener('click', event => {
  if(event.target === lightbox) closeImage()
})

document.addEventListener('keydown', event => {
  if(!lightbox.classList.contains('active')) return
  if(event.key === 'Escape') closeImage()
  if(event.key === 'ArrowRight') showImage(currentImage+1)
  if(event.key === 'ArrowLeft') showImage(currentImage-1)
})
