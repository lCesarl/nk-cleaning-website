<template>
  <div class="top-bar">
    <div class="scroll-container">
      <div class="social-media">
        <i class="bi bi-facebook"></i>
        <i class="bi bi-instagram"></i>
        <i class="bi bi-whatsapp"></i>
      </div>
      <div class="contact-info">
          <i class="bi bi-telephone-fill"></i> Hilfe benötigt? +49 172 12345678
          <i class="bi bi-envelope-fill"></i> Schreiben Sie uns: info@nt-cleaning.de
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TopbarSection'
}
</script>

<style scoped>
.top-bar {
  background-color: #002D62;
  color: white;
  padding: 1.5rem 4rem; /* Erhöhter vertikaler Padding-Wert für mehr Höhe */
}

.scroll-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  overflow-x: auto;
}

.social-media {
  margin-right: 15%;
  white-space: nowrap;
}

.social-media i,
.contact-info i {
  margin-right: 15px; /* Erhöhter Abstand zwischen Icons */
  font-size: 1.2rem;
}

.contact-info {
  white-space: nowrap;
}

.contact-info > * {
  margin-right: 20px; /* Erhöhter Abstand zwischen den Elementen im Kontaktbereich */
}

@media (max-width: 768px) {
  .top-bar {
    padding: 1.5rem 2rem; /* Angepasster Padding für responsive Ansicht */
  }

  .scroll-container {
    flex-wrap: nowrap;
  }

  .social-media i,
  .contact-info i,
  .contact-info > * {
    margin-right: 10px; /* Anpassung der Abstände für kleinere Bildschirme */
  }
}
</style>