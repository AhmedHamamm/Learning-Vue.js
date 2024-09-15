<template>
  <div class="backdrop" @click.self="closeModal">
    <div class="modal" :class="{ theme: theme === 'dark' }">
      <div class="modal-header">
        <slot name="header"></slot>
        <slot name="header-two"></slot>
        <button @click="closeModal" class="close-button">X</button>
      </div>
      <slot v-if="paragraphVisible" name="text"></slot>
      <slot v-if="paragraphVisible" name="text-two"></slot>
      <button class="modal-button" @click.shift="toggleParagraph">
        {{ paragraphTitle }}
      </button>
      <div class="action">
        <slot name="links"></slot>
        <slot name="links-two"></slot>
      </div>
      <p>press shift + click to toggle the paragraph</p>
    </div>
  </div>
</template>

<script>
export default {
  props: ["header", "text", "theme"],
  data() {
    return {
      paragraphVisible: false,
      paragraphTitle: "Show the Giveaway",
    };
  },
  methods: {
    closeModal() {
      this.$emit("close");
    },
    toggleParagraph() {
      this.paragraphVisible = !this.paragraphVisible;
      this.paragraphTitle = this.paragraphVisible
        ? "Hide the Giveaway"
        : "Show the Giveaway";
    },
  },
};
</script>

<style>
.backdrop {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
}

.modal-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.close-button {
  margin-left: 2rem;
  background-color: #000;
  color: #fff;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 1rem;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
}
.modal {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #faec2ecc;
  padding: 2rem 5rem;
  border-radius: 1rem;
  box-shadow: 0 0 1rem rgba(0, 0, 0, 0.5);
}

.modal p {
  font-size: 1.5rem;
}

.modal-button {
  background-color: #000;
  color: #fff;
  border: none;
  padding: 1rem 2rem;
  border-radius: 1rem;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
}

.modal-button:hover {
  background-color: #fff;
  color: #000;
}
</style>
