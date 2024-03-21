<template>
  <TopbarSection />
  <NavbarSection />
  <HomeSection />
  <ServicesSection />
  <AboutUsSection />
  <ChooseUsSection />
  <ContactSection />
</template>

<script>
import TopbarSection from './components/TopbarSection.vue'
import NavbarSection from './components/NavbarSection.vue'
import HomeSection from './components/HomeSection.vue'
import ServicesSection from './components/ServicesSection.vue'
import AboutUsSection from './components/AboutUsSection.vue'
import ChooseUsSection from './components/ChooseUsSection.vue'
import ContactSection from './components/ContactSection.vue'

export default {
  name: 'App',
  components: {
    TopbarSection,
    NavbarSection,
    HomeSection,
    ServicesSection,
    AboutUsSection,
    ChooseUsSection,
    ContactSection
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
