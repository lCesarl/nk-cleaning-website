<template>
  <header class="header">
    <nav class="navbar">
      <div class="logo">
        <img src="@/assets/logo.png" alt="Cleaning Company Logo">
      </div>
      <div class="menu-toggle" @click="toggleMenu">&#9776;</div>
      <ul class="nav-links" v-bind:class="{ 'active': menuActive }">
        <li><a href="#home" @click.prevent="scrollToSection">Home</a></li>
        <li><a href="#services" @click.prevent="scrollToSection">Leistungen</a></li>
        <li><a href="#about" @click.prevent="scrollToSection">Über uns</a></li>
        <li><a href="#whyus" @click.prevent="scrollToSection">Vorteile</a></li>
        <li><a href="#contact" @click.prevent="scrollToSection">Kontakt</a></li>
        <li v-if="isMobile"><button class="quote-btn" @click.prevent="scrollToSection('#appointment')">Termin vereinbaren</button></li>
      </ul>
      <!-- Button bleibt außerhalb der Liste für größere Bildschirme -->
      <button class="quote-btn" v-if="!isMobile" @click.prevent="scrollToSection('#appointment')">Termin vereinbaren</button>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'NavbarSection',
  data() {
    return {
      menuActive: false,
      isMobile: false,
    };
  },
  mounted() {
    window.addEventListener('resize', this.handleResize);
    this.handleResize();
  },
  beforeUnmount() {
    window.removeEventListener('resize', this.handleResize);
  },
  methods: {
    toggleMenu() {
      this.menuActive = !this.menuActive;
    },
    handleResize() {
      this.isMobile = window.innerWidth < 1032;
      if (!this.isMobile && this.menuActive) {
        this.menuActive = false;
      }
    },
    scrollToSection(event) {
      // Überprüfen, ob `event` ein Objekt ist und `href` besitzt
      const targetId = typeof event === 'object' && event.target ? event.target.getAttribute('href') : event;

      // Spezialfall für "Angebot erhalten" Button, zeigt eine Alert-Box
      if (targetId === '#appointment') {
        alert('Seite ist im Aufbau. Bitte später wieder versuchen!');
        return;
      }

      // Finden und Scrollen zum Zielbereich, wenn nicht spezialfall
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
      }

      if (this.isMobile && this.menuActive) {
        this.menuActive = false; // Menü schließen nach dem Scrollen auf mobilen Geräten
      }
    },
  },
}
</script>


<style scoped>
.navbar {
  position: relative; /* Ermöglicht die absolute Positionierung des Logos innerhalb der Navbar */
  overflow: visible; /* Stellt sicher, dass überstehende Inhalte sichtbar sind */
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 3rem 2rem; /* Gibt der Navbar etwas Innenabstand */
  background-color: white; /* Hintergrundfarbe der Navbar */
}

.logo {
  margin-left: 20%; /* Verschiebt das Logo nach rechts */
}

.logo img {
  position: absolute; /* Absolute Positionierung, um das Logo frei zu platzieren */
  transform: translateX(-50%) translateY(-55%); /* Verschiebt das Logo genau in die Mitte und etwas nach oben */
  width: 230px; /* Erhöhte Breite des Logos */
  height: auto; /* Behält das Seitenverhältnis bei */
  z-index: 1; /* Stellt sicher, dass das Logo über anderen Elementen liegt */
}

.nav-links {
  list-style: none;
  display: flex; /* Ermöglicht eine horizontale Anordnung der Links */
  margin: 0; /* Entfernt den Margin, falls vorhanden */
}

.nav-links li {
  margin: 0 20px; /* Größerer Abstand zwischen den Links */
}

.nav-links a {
  color: black;
  font-size: 1.25rem;
  text-decoration: none;
  transition: color 0.3s ease, text-decoration 0.3s ease; /* Hinzufügen der Textdekorations-Transition */
}

.nav-links a:hover, .nav-links a:focus {
  color: lightblue;
  text-decoration: underline; /* Unterstreicht den Link beim Hover oder Fokus */
}

.quote-btn {
  background-color: #FFD700;
  color: black;
  border-radius: 20px;
  border: none;
  padding: 10px 15px;
  font-size: 1.25rem;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  cursor: pointer;
  font-weight: bold;
  transition: background-color 0.3s ease, box-shadow 0.3s ease;
}

.quote-btn:hover, .quote-btn:focus {
  background-color: #e6c200; /* Dunklerer Gelbton beim Hover oder Fokus */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3); /* Größerer Schatten für einen "Lift"-Effekt */
}

.menu-toggle:hover, .menu-toggle:focus {
  opacity: 0.8; /* Leichte Opazitätsänderung beim Hover oder Fokus */
}

.menu-toggle {
  display: none;
  font-size: 2rem;
  cursor: pointer;
  z-index: 100; /* Erhöht den z-index, um sicherzustellen, dass es über anderen Elementen liegt */
  position: relative; /* Stellt sicher, dass z-index angewendet wird */
}

@media (max-width: 1030px) {
  .menu-toggle {
    display: block;
  }

  .nav-links {
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background-color: white;
    flex-direction: column;
    align-items: center;
    padding: 0;
    transition: transform 0.3s ease, padding 0.3s ease;
    transform: scaleY(0);
    transform-origin: top;
    box-shadow: 0px 8px 16px rgba(0,0,0,0.2);
    z-index: 10;
    overflow: hidden;
  }

  .nav-links.active {
    padding: 1rem;
    transform: scaleY(1);
  }

  .nav-links li {
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  .nav-links.active li {
    opacity: 1;
    transition-delay: 0.3s;
  }

  .quote-btn {
    display: none; /* Versteckt den Button außerhalb der nav-links im mobilen Layout */
  }

  .nav-links.active .quote-btn {
    display: block; /* Zeigt den Button im mobilen Menü an, wenn es aktiv ist */
    width: auto; /* Setzt die Breite zurück auf Auto für bessere Anpassung */
    margin: 10px 0; /* Fügt vertikalen Abstand hinzu, aber keinen horizontalen */
    padding: 10px; /* Standard-Padding für den Button */
  }
}
</style>