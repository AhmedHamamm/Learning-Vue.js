<template>
  <!-- Title -->
  <h1>{{ title }}</h1>

  <!-- First Modal -->
  <div v-if="showModal">
    <Modal :theme="theme" @close="toggleModal">
      <template #header>
        <h1>{{ header }}</h1>
      </template>
      <template #text>
        <p>{{ text }}</p>
      </template>
      <template v-slot:links>
        <a href="#">Sign Up</a>
        <a href="#">Sign In</a>
      </template>
    </Modal>
  </div>

  <!-- Second Modal -->
  <div v-if="showModalTwo">
    <Modal :theme="theme" @close="toggleModalTwo">
      <template #header-two>
        <h1>Modal Two</h1>
      </template>
      <template #text-two>
        <p>This is the second modal</p>
      </template>
      <template v-slot:links-two>
        <a href="#">Sign Up</a>
        <a href="#">Sign In</a>
      </template>
    </Modal>
  </div>

  <!-- Buttons -->
  <button class="open-modal" @click.alt="toggleModal">Open Modal</button>
  <button class="open-modal" @click.alt="toggleModalTwo">
    open Another modal
  </button>
  <p>press alt + click to open the modal</p>
</template>

<script>
import Modal from "./components/Modal.vue";

export default {
  name: "App",
  data() {
    return {
      title: "My First Component Modal in Vue",
      header: "Sign Up for the Giveaway",
      text: "Sign up for the Giveaway to win a free trip to Paris",
      // theme: "dark",
      showModal: false,
      showModalTwo: false,
    };
  },
  methods: {
    toggleModal() {
      this.showModal = !this.showModal;
    },
    toggleModalTwo() {
      this.showModalTwo = !this.showModalTwo;
    },
  },
  components: {
    Modal,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.open-modal {
  background-color: #000;
  color: white;
  border: none;
  padding: 1rem 2rem;
  border-radius: 2rem;
  cursor: pointer;
  font-size: 1rem;
  margin: 1rem;
  transition: all 0.3s ease-in-out;
}
button:hover {
  background-color: #fff;
  color: #000;
  border: 1px solid #000;
  scale: 1.05;
}
.action {
  display: flex;
  justify-content: center;
}
.action a {
  text-decoration: none;
  color: #fff;
  background-color: #000;
  font-size: 1rem;
  padding: 0.5rem 1rem;
  border-radius: 2rem;
  margin: 2rem 0.5rem;
  transition: all 0.3s ease-in-out;
}
a:hover {
  color: #000;
  background-color: #fff;
}
</style>
