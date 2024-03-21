<template>
  <div id="whyus">
    <section class="choose-us-section">
      <div class="choose-us-container">
        <div class="choose-us-header">
          <h2 class="choose-us-title">WARUM SIE UNS WÄHLEN SOLLTEN</h2>
          <p class="choose-us-subtitle">Ihre Zufriedenheit ist unsere oberste Priorität.</p>
        </div>
        <div class="choose-us-content">
          <div class="benefit-column" v-for="(benefit) in benefits" :key="benefit.id">
            <div class="benefit-item" data-aos="fade-up" data-aos-delay="100">
              <font-awesome-icon :icon="benefit.icon" class="benefit-icon" />
              <div>
                <h3>{{ benefit.title }}</h3>
                <p>{{ benefit.description }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faMedal, faThumbsUp, faTags, faClock } from '@fortawesome/free-solid-svg-icons';
library.add(faMedal, faThumbsUp, faTags, faClock);

export default {
  name: 'ChooseUsSection',
  components: {
    FontAwesomeIcon,
  },
  data() {
    return {
      benefits: [
            { id: 1, icon: 'medal', title: 'Verpflichtung zur Qualität', description: 'Unsere Priorität ist es, Ihnen mit detailorientierter Sorgfalt und Expertise ein makellos sauberes Zuhause zu gewährleisten.' },
            { id: 2, icon: 'thumbs-up', title: 'Hoch bewerteter Service', description: 'Wir sind bestrebt, unseren Kunden den bestmöglichen Service zu bieten.' },  
            { id: 3, icon: 'clock', title: 'Pünktlicher Service', description: 'Wir sind immer pünktlich und bereit, die Arbeit zu erledigen.' },
            { id: 4, icon: 'tags', title: 'Bezahlbare Preise', description: 'Wir bieten wettbewerbsfähige Preise für alle unsere Dienstleistungen.' },
        ]
    };
  },
};
</script>
  
  <style scoped>
.choose-us-section {
    margin-top: 3rem;
  background-color: #032884; /* Abgedunkeltes Blau für einen moderneren Look */
  color: white;
  text-align: center;
  padding: 2rem;
}

.choose-us-container {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
}

.choose-us-title {
  color: white; /* Gold für den Titel */
  font-size: 2.5rem;
  font-weight: bold;
}

.choose-us-subtitle {
    font-size: 1.5rem;
  margin-top: 0.5rem;
  padding-bottom: 1rem;
  color: white; /* Gold für den Untertitel */
}

.choose-us-content {
  display: flex;
  justify-content: space-around;
  gap: 1rem;
}

.benefit-column {
  display: flex;
  flex-direction: column;
  flex: 1;
}

.benefit-item {
  display: flex;
  align-items: center;
  background-color: #ffffff; /* Weiße Kartenhintergrundfarbe, um dem Screenshot zu entsprechen */
  color: #333333;
  margin-bottom: 1rem;
  padding: 1rem;
  border-radius: 10px; /* Abgerundete Ecken passend zum Design auf dem Screenshot */
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); /* Subtilere Schatten für eine leichtere Tiefe */
  transition: all 0.5s ease-in-out;
}

.benefit-icon {
  color: #ffc107; /* Gelbfarbene Icons entsprechend dem Screenshot */
  margin-right: 1rem;
  font-size: 2.5rem; /* Angepasste Größe der Icons */
}

.benefit-item h3 {
  margin: 0;
  color: #032884; /* Dunkelblaue Schrift für Titel, um den Kontrast zu erhöhen */
  font-size: 1.5rem; /* Angepasste Größe für Überschriften */
}

.benefit-item p {
  color: #626262; /* Dunkelgraue Schrift für Beschreibungstexte */
}

@media (max-width: 768px) {
  .choose-us-content {
    flex-direction: column; /* Stapele die Elemente vertikal */
  }

  .benefit-item {
    /* Optional: Reduziere die Größe der Karten für kleinere Geräte */
    margin-bottom: 0.75rem;
    padding: 0.75rem;
  }

  .benefit-icon {
    /* Verkleinere die Icons leicht */
    font-size: 2rem;
  }

  .benefit-item h3 {
    /* Verkleinere die Schriftgröße für Titel */
    font-size: 1.25rem;
  }

  .benefit-item p {
    /* Verkleinere die Schriftgröße für Beschreibungstexte */
    font-size: 0.9rem;
  }
}

/* Responsive Stile für Handys */
@media (max-width: 480px) {
  .choose-us-title {
    font-size: 2rem; /* Kleinere Schriftgröße für den Titel */
  }

  .choose-us-subtitle {
    font-size: 1.2rem; /* Kleinere Schriftgröße für den Untertitel */
  }

  .benefit-item {
    /* Weitere Reduzierung für sehr kleine Geräte */
    margin-bottom: 0.5rem;
    padding: 0.5rem;
  }

  .benefit-icon {
    /* Verkleinere die Icons weiter */
    font-size: 1.5rem;
  }

  .benefit-item h3 {
    font-size: 1.1rem;
  }

  .benefit-item p {
    font-size: 0.8rem;
  }
}
</style>