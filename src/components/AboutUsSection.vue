<template>
  <div id="about">
    <section class="about-us-section">
      <div class="about-us-container">
        <div class="about-us-image">
          <img src="@/assets/aboutme.png" alt="Reinigungsbedarf">
        </div>
        <div class="about-us-content">
          <p class="about-us-intro">ÜBER UNS</p>
          <h2>Ihr Reinigungsservice im Herzen des Schwarzwalds</h2>
          <p>Entdecken Sie die Freude an makelloser Sauberkeit und frischer Wohnkultur mit unserem professionellen Team.</p>
          <ul class="about-us-benefits">
            <li><font-awesome-icon class="fa-icon" icon="check-circle" />Zufriedenheit garantiert</li>
            <li><font-awesome-icon class="fa-icon" icon="check-circle" />Fachkundiges Reinigungspersonal</li>
            <li><font-awesome-icon class="fa-icon" icon="check-circle" />Pflege & Glanz für Ihr Heim</li>
          </ul>
          <button class="read-more-btn">Termin vereinbaren</button>
        </div>
      </div>
    </section>
  </div>
  </template>
  
  <script>
  import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
  import { library } from '@fortawesome/fontawesome-svg-core';
  import { faCheckCircle, faUsers, faLifeRing } from '@fortawesome/free-solid-svg-icons';
  
  library.add(faCheckCircle, faUsers, faLifeRing);
  
  export default {
    name: 'AboutUsSection',
    components: {
      FontAwesomeIcon,
    },
  };
  </script>
  
  <style scoped>
  .about-us-section {
    background-color: #f8f9fa;
    padding: 4rem 1rem; /* Gleichmäßiges Padding */
    text-align: center;
  }
  
  .about-us-container {
    max-width: 1200px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr; /* Einspaltiges Layout für mobile Geräte */
    gap: 2rem;
    align-items: center;
  }
  
  .about-us-image img {
    width: 100%;
    height: auto;
    border-radius: 1rem; /* Abgerundete Ecken für das Bild */
  }
  
  .about-us-content {
    background-color: white;
    padding: 2rem;
    border-radius: 1rem; /* Abgerundete Ecken für den Inhalt */
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Schatten für den Inhalt */
  }
  
  .about-us-intro {
    color: #0057B7;
    font-weight: 600; /* Leicht fett */
    text-transform: uppercase;
    margin-bottom: 1rem;
  }
  
  .about-us-content h2 {
    font-size: 2.2rem; /* Angepasste Schriftgröße */
    color: #0057B7;
    margin-bottom: 1.5rem;
  }
  
  .about-us-content p {
    font-size: 1.1rem; /* Leicht vergrößerte Schriftgröße */
    margin-bottom: 2rem;
    color: #333; /* Dunklere Schriftfarbe */
  }
  
  .about-us-benefits {
    list-style: none; /* Entferne Listensymbole */
    padding: 0;
    margin: 0;
    text-align: left; /* Linksbündiger Text */
  }
  
  .about-us-benefits li {
    display: flex;
    align-items: center;
    font-size: 1rem;
    margin-bottom: 0.5rem;
    color: #333; /* Dunklere Schriftfarbe */
  }
  
  .fa-icon {
    color: #000000; /* Anpassung der Icon-Farbe */
    margin-right: 0.5rem;
  }
  
  .read-more-btn {
    background-color: #0057B7;
    color: white;
    border: none;
    padding: 1rem 2rem;
    margin-top: 2rem;
    font-size: 1rem;
    cursor: pointer;
    border-radius: 20px;
    transition: background-color 0.3s ease; /* Animation für den Button */
  }
  
  .read-more-btn:hover {
    background-color: #004a9f; /* Dunklerer Blauton beim Hover */
  }
  
  /* Media Queries für Tablet-Bildschirme */
  @media (min-width: 768px) {
    .about-us-container {
      grid-template-columns: repeat(2, 1fr); /* Zweispaltiges Layout für Tablet-Bildschirme */
    }
  
    .about-us-content,
    .about-us-image img {
      max-width: 100%; /* Entferne max-width Beschränkungen */
    }
    .about-us-image img {
      order: -1; /* Setze die Reihenfolge zurück */
    }
  }
  
  /* Media Queries für Desktop-Bildschirme */
  @media (min-width: 992px) {
    .about-us-content {
      order: 1; /* Positioniere den Inhalt vor dem Bild */
    }
  
    .about-us-image {
      order: 2; /* Positioniere das Bild nach dem Inhalt */
    }
  
    .about-us-content h2 {
      font-size: 2.5rem;
    }
  
    .about-us-content p,
    .about-us-benefits li {
      font-size: 1.2rem;
    }
  }

  @media (max-width: 766px) {
  .about-us-container {
    max-width: 400px;
    flex-direction: column; /* Stapelt Elemente vertikal */
  }

  .about-us-image {
    order: 2; /* Stellt das Bild unter den Text */
  }

  .about-us-content {
    order: 1; /* Stellt den Text über das Bild */
  }

  /* Anpassen von Größen und Abständen für den Mobilansicht */
  .choose-us-title {
    font-size: 1.8rem; /* Kleinere Schriftgröße für den Titel */
  }

  .choose-us-subtitle {
    font-size: 1rem; /* Kleinere Schriftgröße für den Untertitel */
  }

  .benefit-item {
    padding: 0.5rem; /* Kleineres Padding für die Elemente */
  }

  .benefit-icon {
    font-size: 1.5rem; /* Verkleinern der Icons */
  }

  .benefit-item h3,
  .benefit-item p {
    font-size: 0.9rem; /* Verkleinern der Schrift */
  }
}

  </style>
  