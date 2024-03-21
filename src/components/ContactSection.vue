<template>
  <div id="contact">
    <section class="contact-section">
      <div class="contact-container">
        <h2 class="contact-title">Kontaktieren Sie uns</h2>
        <form @submit.prevent="submitForm" class="contact-form">
          <div class="form-group">
            <label for="name">Name</label>
            <input type="text" id="name" v-model="contact.name" required />
          </div>
  
          <div class="form-group">
            <label for="email">E-Mail</label>
            <input type="email" id="email" v-model="contact.email" required />
          </div>
  
          <div class="form-group">
            <label for="mobile">Mobilnummer</label>
            <input type="tel" id="mobile" v-model="contact.mobile" required />
          </div>
  
          <div class="form-group">
            <label for="service">Service auswählen</label>
            <select id="service" v-model="contact.service" required>
              <option disabled value="">Bitte wählen Sie</option>
              <option v-for="service in services" :key="service" :value="service">{{ service }}</option>
            </select>
          </div>
  
          <div class="form-group">
            <button type="submit" class="submit-button">Termin vereinbaren</button>
          </div>
        </form>
      </div>
    </section>
  </div>
  </template>
  
  <script>
  export default {
    name: 'ContactSection',
    data() {
      return {
        contact: {
          name: '',
          email: '',
          mobile: '',
          service: '',
        },
        services: [
          'Beratung',
          'Reinigungsdienst',
          'Wartung',
          'Reparatur',
          // Fügen Sie hier weitere Dienstleistungen hinzu
        ],
      };
    },
    methods: {
      submitForm() {
        // Logik zum Absenden des Formulars hinzufügen
        console.log('Kontaktinformationen:', this.contact);
        // Hier sollten Sie einen API-Endpunkt aufrufen oder eine Aktion ausführen
      },
    },
  };
  </script>
  
  <style scoped>
  .contact-section {
    background-color: #f8f9fa;
    padding: 2rem 0;
    text-align: center;
  }
  
  .contact-container {
    width: 90%; /* Start with a smaller width for better readability */
    max-width: 800px; /* Set a max-width for very large screens */
    padding: 2rem;
    margin: auto;
    background-color: white;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
  }
  
  .contact-title {
    color: #032884;
    margin-bottom: 1rem;
  }
  
  .contact-form {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  
  .form-group {
    width: 100%; /* Form fields should take the full width of the container */
    max-width: 500px; /* Set a max-width for form fields for better readability */
    margin-bottom: 1rem;
  }
  
  .form-group label {
    display: block;
    margin-bottom: .5rem;
  }
  
  .form-group input,
  .form-group select {
    width: 100%;
    padding: .5rem;
    border: 1px solid #ccc;
    border-radius: 5px;
  }
  
  .submit-button {
    width: 100%; /* Button takes full width of the form-group */
    padding: .75rem;
    border: none;
    border-radius: 5px;
    background-color: #1070CA;
    color: white;
    font-weight: bold;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }
  
  .submit-button:hover,
  .submit-button:focus {
    background-color: #0A5FCE;
  }
  
  /* Media Queries for Tablet Screens */
  @media (max-width: 768px) {
    .contact-container {
      width: 95%; /* Increase width for smaller screens */
    }
  }
  
  /* Media Queries for Mobile Screens */
  @media (max-width: 480px) {
    .contact-container {
      width: 100%; /* Make the container full width on the smallest screens */
      padding: 1rem; /* Reduce padding for smaller screens */
    }
  
    .form-group {
      max-width: none; /* Allow form fields to take full width of the container */
    }
  
    .submit-button {
      max-width: none; /* Allow the button to take full width of the form-group */
    }
  }
  </style>  