<template>
  <div id="home">
  <section class="hero">
    <div class="hero-inner">
      <!-- Logo Container -->
      <div class="hero-content">
        <!-- Rest des Hero-Inhalts -->
        <div class="text-container">
          <div class="company-tagline">- REINIGUNGSFIRMA</div>
          <h1 class="slogan">Ihr <span class="highlight">professioneller</span> Partner<br>für Gebäudereinigung</h1>
        </div>
        <p>Exzellente Reinigungsdienstleistungen, die den Glanz Ihrer Geschäftsräume unterstreichen.</p>
        <div class="button-container">
          <button class="appointment-btn">Termin vereinbaren</button>
        </div>
      </div>
      <div class="hero-image" v-if="!isMobile">
    <img src="@/assets/header-person.png" alt="Header Person">
  </div>
    </div>
  </section>
</div>
</template>
  
<script>
export default {
  name: 'HomeSection',
  data() {
    return {
      isMobile: window.innerWidth < 768 // Hier können Sie die Schwelle für "mobile" festlegen
    };
  },
  created() {
    window.addEventListener('resize', this.handleResize);
  },
  beforeUnmount() {
    window.removeEventListener('resize', this.handleResize);
  },
  methods: {
    handleResize() {
      this.isMobile = window.innerWidth < 480; // Aktualisieren Sie den Zustand bei Änderung der Fenstergröße
    }
  }
};
</script>
  
  <style scoped>
  /* Zusätzlicher Stil für das Logo */
  .hero-inner {
  display: flex;
  flex-direction: column;
  align-items: center; /* Zentriert die Inhalte horizontal */
  justify-content: center; /* Zentriert die Inhalte vertikal */
  width: 100%;
  max-width: 1200px;
}

.logo-container {
  text-align: left;
  width: 100%;
}

.logo-title:hover {
  transform: scale(1.05); /* Skaliert das Logo beim Überfahren mit der Maus leicht hoch */
}

  html,body { padding: 0;}
  .hero {
    background: linear-gradient(to right, #002D62, #0368d3);
    color: white;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    min-height: 705px;
  }
  
  .hero-inner {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%; /* Passt die Breite an den Container an */
    max-width: 1200px; /* Maximale Breite des inneren Containers */
  }
  
  .hero-content {
    flex: 1;
    text-align: left;
    margin-right: 35%;
  }
  
  .text-container {
    margin-right: 20px; /* Fügt einen Abstand zum Bild hinzu */
  }
  
  .company-tagline
    {
        color: #FFD700;
        margin-bottom: 20px;
    }
  .company-tagline, .hero-content p, .button-container {
    text-align: left;
  }
  
  .hero-content .slogan {
    font-size: 3.8rem;
    margin: 0 0 1rem 0;
    line-height: 1.2;
  }
  
  .hero-content .slogan .highlight {
    color: #FFD700;
  }
  
  .hero-content p {
    margin-bottom: 2rem;
    font-size: 1.2rem;
  }
  
  .appointment-btn {
    background-color: #FFD700;
    border: none;
    padding: 15px 30px;
    cursor: pointer;
    font-size: 1rem;
    font-weight: bold;
    border-radius: 50px;
  }
  
  .hero-image {
  position: absolute;
  bottom: -5px;
  right: 3%;
  width: 40%; /* Standardgröße für das Bild in größeren Ansichten */
  max-width: 700px; /* Maximalgröße, um zu verhindern, dass es zu groß wird */
  min-width: 300px; /* Minimalgröße, um zu verhindern, dass es zu klein wird */
}

.hero-image img {
  width: 100%; /* Bild soll die Breite seines Containers ausfüllen */
  height: auto; /* Behält das Seitenverhältnis bei */
}

.hero-image img {
  width: 100%; /* Bild soll die Breite seines Containers ausfüllen */
  height: auto; /* Behält das Seitenverhältnis bei */
}

@media (max-width: 1200px) {
  .hero-image {
    width: 40%; /* Größere Breite für mittelgroße Ansichten */
  }
}

@media (max-width: 1024px) {
  .hero-image {
    width: 50%; /* Anpassung der Breite für kleinere Desktop- oder Tablet-Ansichten */
  }
}

@media (max-width: 768px) {
  .hero-image {
    width: 50%; /* Noch größer in kleineren Ansichten, bevor es ausgeblendet wird */
  }
  .hero {
    min-height: 510px; /* Reduzierte Mindesthöhe in der mobilen Ansicht */
    padding-top: 1rem;
    padding-bottom: 2rem;
    align-items: center;
    justify-content: center; /* Zentrieren der Inhalte vertikal */
  }

  .hero-inner {
    flex-direction: column;
    align-items: center;
    justify-content: center; /* Inhalte zentral ausrichten */
  }

  .hero-content {
    text-align: center;
    margin: 0 20px; /* Fügt horizontalen Abstand hinzu, um Text von den Rändern fernzuhalten */
  }

  .hero-content .slogan,
  .hero-content p,
  .button-container {
    text-align: center;
  }

  .hero-content .slogan {
    font-size: 2.5rem;
  }

  .hero-content p {
    font-size: 1rem;
    margin-bottom: 1rem;
  }

  .appointment-btn {
    padding: 10px 20px;
  }

  .hero-image {
    display: none; /* Bild in mobiler Ansicht ausblenden */
  }
}

@media (max-width: 480px) {

  .hero-content .slogan {
    font-size: 2rem;
  }
}

</style>