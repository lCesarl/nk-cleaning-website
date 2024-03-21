<template>
  <div id="services">
  <section class="services-section">
    <div class="services-header">
      <h2>Unsere besten Dienstleistungen</h2>
      <p>Die besten Reinigungsdienste für Sie</p>
    </div>
    <div class="services-container">
      <div class="service-card" v-for="service in services" :key="service.id" data-aos="fade-up">
        <img :src="service.image" :alt="service.name" class="service-image">
        <div class="service-content">
          <h3>{{ service.name }}</h3>
          <p>{{ service.description }}</p>
        </div>
      </div>
    </div>
  </section>
</div>
</template>
  
  
  <script>
  export default {
    name: 'ServicesSection',
    data() {
      return {
        services: [
          {
            id: 1,
            name: 'Büroreinigung',
            description: 'Sorgen Sie für eine optimale Arbeitsumgebung mit glänzenden Oberflächen und reinster Luftqualität – für Effizienz an jedem Arbeitstag.',
            image: require('@/assets/card-officecleaning.png')
          },
          {
            id: 2,
            name: 'Praxisreinigung',
            description: 'Unsere sorgfältige Reinigung erfüllt alle medizinischen Hygienestandards, damit Ihre Patienten und Personal sich sicher fühlen können.',
            image: require('@/assets/card-praxiscleaning.png')
          },
          {
            id: 3,
            name: 'Fensterreinigung',
            description: 'Genießen Sie den klaren Ausblick! Unsere professionelle Fensterreinigung sorgt für einen glänzenden Eindruck von innen und außen.',
            image: require('@/assets/card-windowcleaning.png')
          },
          {
            id: 4,
            name: 'Kitareinigung',
            description: 'Ein sauberes Spielparadies wartet! Wir schaffen ein hygienisches und fröhliches Umfeld für die kleinen Entdecker.',
            image: require('@/assets/card-kita.png')
          },
          {
            id: 5,
            name: 'Treppenhausreinigung',
            description: 'Vom Keller bis zum Dach: Wir sorgen dafür, dass Ihre Treppenhäuser nicht nur sauber sind, sondern auch einen positiven Eindruck hinterlassen.',
            image: require('@/assets/card-stairwell.png')
          },
          {
            id: 6,
            name: 'Universitätsreinigung',
            description: 'Unsere Unireinigung sorgt für eine frische Lernatmosphäre, die Konzentration und Wohlbefinden fördert – für kluge Köpfe von morgen.',
            image: require('@/assets/card-uni.png')
          },
        ]
      };
    },
    computed: {
    containerClass() {
      return {
        'services-container': true,
        'flex-column': this.services.length > 3,
      };
    },
  },
}
  </script>
  
  <style scoped>
  .services-section {
    background-color: #f8f9fa;
    text-align: center;
    padding: 4rem 1rem;
  }
  
  .services-header h2 {
  font-size: 1.0rem; /* Anpassen für die Größe des Screenshots */
  font-weight: normal; /* Stellt sicher, dass es nicht fett gedruckt ist */
  color: black; /* Spezifische Blauton von "OUR BEST SERVICES" */
  text-transform: uppercase; /* Macht den Text zu Großbuchstaben */
  letter-spacing: 1px; /* Fügt Buchstabenabstand hinzu */
  margin: 0 0 2rem;
}

.services-header p {
  font-size: 2.5rem; /* Größere Schriftgröße für "We Are Offering The Best Cleaning Services For You" */
  font-weight: bold; /* Fett für die Hervorhebung */
  color: #0057B7; /* Gleiche Farbe wie der obere Text */
  margin: 0 0 2rem;
}

  
.services-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center; /* Zentriert die Karten in der Mitte, wenn weniger als 3 */
  gap: 2rem;
  max-width: 1280px; /* Max Breite des Containers, optional */
  margin: auto; /* Zentriert den Container */
}
  
  .service-card {
  background-color: white;
  border-radius: 0; /* Entfernt die abgerundeten Ecken */
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  width: 400px;
  overflow: hidden; /* Verhindert das Hinausragen von Kind-Elementen */
  transition: transform 0.3s ease;
  margin-bottom: 2rem;
}
  
  .service-card:hover {
    transform: translateY(-5px);
  }

  .service-image {
  width: 100%;
  height: auto; /* Feste Höhe für das Bild */
  object-fit: cover; /* Stellt sicher, dass das Bild den Container vollständig bedeckt */
  object-position: center 50%; /* Setzt das Bild vertikal nach unten */
  border-radius: 0; /* Entfernt die abgerundeten Ecken */
  margin-bottom: -4rem; /* Zieht die folgenden Inhalte näher ans Bild */
}

.service-content h3 {
    font-family: 'Roboto', sans-serif; /* Ersetze 'Roboto' durch deine Schriftart */
  font-weight: 800; 
text-align: left; /* Setzt die Ausrichtung des Texts auf links */
  font-size: 1.5rem; /* Vergrößerte Schriftgröße */
  font-weight: bold; /* Macht den Stil der Überschrift dicker */
  margin-top: 4.5rem; /* Schafft Platz zwischen Bild und Überschrift */
  margin-left: 1rem;
}

.service-content h3, .service-content p {
  padding: 0 1rem; /* Padding innerhalb der Karte für Text */
}

.service-content p {
  text-align: left; /* Setzt die Ausrichtung des Texts auf links */
  margin-left: 1rem;
  margin-top: -1rem;
  margin-right: 0.3rem;
}

/* Entfernt den 'Mehr Details' Button */
.details-btn {
  display: none;
}

/* Für den Call-to-Action, falls du ihn noch verwendest */
.service-content .call-to-action {
  display: flex;
  justify-content: flex-start; /* Ausrichtung der Items am Anfang des Containers */
  align-items: flex-start; /* Ausrichtung der Items am Start der Kreuzachse (top) */
}

.call-to-action i {
  margin-right: 0.5rem;
}

.call-to-action span {
  color: #0057B7;
  cursor: pointer;
}

/* Media Queries für Tablets */
@media (min-width: 768px) {
  .services-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 2rem;
  }

  .service-card {
    width: calc(50% - 1rem); /* Zwei Karten pro Zeile auf Tablets */
  }
}

/* Media Queries für Desktop */
@media (min-width: 1024px) {
  .service-card {
    width: calc(30% - 1rem); /* Drei Karten pro Zeile auf Desktop */
  }
}
</style>
  