/*JS DE SLIDERS DE PORTADA*/  

  (function () {
    let currentSlide = 0;
    const slideContainer = document.getElementById("headerSlideContainer");
    const slides = slideContainer.children;
    const totalSlides = slides.length;

    function updateSlide() {
      const slideWidth = slides[0].offsetWidth;
      slideContainer.style.transform = `translateX(-${currentSlide * slideWidth}px)`;
    }

    window.nextSlide = function () {
      currentSlide = (currentSlide + 1) % totalSlides;
      updateSlide();
    };

    window.prevSlide = function () {
      currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
      updateSlide();
    };

    // Auto avance cada 4 segundos
    setInterval(nextSlide, 4000);

    // Ajustar cuando cargue o redimensione
    window.addEventListener("load", updateSlide);
    window.addEventListener("resize", updateSlide);
  })();



/*JS DE SONIDO DEL MENU*/
  function playSound() {
    const audio = document.getElementById('Tecla');
    if (audio) {
      audio.currentTime = 0;
      audio.play();
    }
  }

/*JS DE DESPLEGABLE CONTENEDOR*/

const acc = document.querySelector('.accordion');
const panel = document.querySelector('.panel');

acc.addEventListener('click', () => {
  panel.classList.toggle('show');
});

/*JS DE DESPLEGABLE CONTENEDOR 4*/
  // Acordeón principal (opcional)
  document.querySelector('.accordion1').addEventListener('click', () => {
    document.querySelector('.panel1').classList.toggle('show');
  });

  // Acordeón para Detalles
  document.querySelectorAll('.detalle-toggle').forEach((toggle, index) => {
    toggle.addEventListener('click', () => {
      const panel = toggle.nextElementSibling;
      if (panel && panel.classList.contains('detalle-panel')) {
        panel.classList.toggle('show');
      }
    });
  });

/*JS DE DESPLEGABLE CONTENEDOR 5*/
 // Acordeón general de proyectos
  document.querySelector('.accordion2').addEventListener('click', () => {
    document.querySelector('.panel2').classList.toggle('show');
  });

  // Acordeón individual para cada proyecto
  document.querySelectorAll('.proyecto-toggle').forEach((toggle) => {
    toggle.addEventListener('click', () => {
      const panel = toggle.nextElementSibling;
      if (panel && panel.classList.contains('proyecto-panel')) {
        panel.classList.toggle('show');
      }
    });
  });

/*JS DE SILDERS DE LOGOS DE LENGUAGES*/

  let currentSlide = 0;
  const slides = document.getElementById("slideContainer");
  const totalSlides = slides.children.length;

  function updateSlidePosition() {
    slides.style.transform = `translateX(-${currentSlide * 350}px)`;
  }

  function nextSlide() {
    currentSlide = (currentSlide + 1) % totalSlides;
    updateSlidePosition();
  }

  function prevSlide() {
    currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
    updateSlidePosition();
  }

  
  setInterval(nextSlide, 3000);

/*JS DE CURSOS Y MAS*/
var modal = document.getElementById("myModal");

// Obtener la imagen y el elemento de texto dentro del modal
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");

// Función para abrir el modal
function openModal(imageSrc) {
  modal.style.display = "block"; // Muestra el modal
  modalImg.src = imageSrc; // Establece la fuente de la imagen ampliada
  // Opcional: Puedes establecer el texto del caption aquí si lo deseas
  // captionText.innerHTML = "Descripción de la imagen";
}

// Función para cerrar el modal
function closeModal() {
  modal.style.display = "none"; // Oculta el modal
}

// Cierra el modal si se hace clic fuera de la imagen
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

/*JS DE FEEDBACK*/
emailjs.init("SBuqNR9vKjoZoQUoB"); // Public key

  document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contact-form");
    const modal = document.getElementById("modal");
    const closeBtn = document.getElementById("closeModal");

    if (form) {
      form.addEventListener("submit", function (e) {
        e.preventDefault();

        emailjs.sendForm("service_4w02lxj", "template_tvtw24t", form)
          .then(() => {
            modal.style.display = "flex";
            form.reset(); // Limpia el formulario
          }, (error) => {
            alert("Error al enviar: " + error.text);
          });
      });
    }

    if (closeBtn && modal) {
      closeBtn.addEventListener("click", function () {
        modal.style.display = "none";
      });+

      window.addEventListener("click", function (e) {
        if (e.target === modal) {
          modal.style.display = "none";
        }
      });
    }
  });

  /*UBICACION DEL LOCAL*/

   let map;

    function initMap() {
      const ubicacion = { lat: 18.5463, lng: -69.8217 }; // Coordenadas del Bulevar de Sabana Perdida

      map = new google.maps.Map(document.getElementById("map"), {
        center: ubicacion,
        zoom: 16,
      });

      new google.maps.Marker({
        position: ubicacion,
        map: map,
        title: "Land Cord Soft Luxury",
      });
    }

    document.addEventListener("DOMContentLoaded", () => {
      const mapBtn = document.getElementById("mapToggleBtn");
      const mapBox = document.getElementById("mapContainer");
      const closeBtn = document.getElementById("closeMap");

      mapBtn.addEventListener("click", () => {
        mapBox.style.display = "block";
        setTimeout(() => {
          if (!map) initMap();
        }, 200); // Asegura que el mapa se cargue después de mostrar el contenedor
      });

      closeBtn.addEventListener("click", () => {
        mapBox.style.display = "none";
      });
    });


    /*JS LENCERIA MUJER*/

 