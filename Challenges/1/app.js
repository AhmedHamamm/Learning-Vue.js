const app = Vue.createApp({
  data() {
    return {
      showBooks: true,
      books: [
        {
          title: "The Final Empire",
          author: "Brandon Sanderson",
          image: "assets/1.jpg",
          isFav: false,
        },
        {
          title: "The Well of Ascension",
          author: "Brandon Sanderson",
          image: "assets/2.jpg",
          isFav: this,
        },
        {
          title: "The Hero of Ages",
          author: "Brandon Sanderson",
          image: "assets/3.jpg",
          isFav: false,
        },
      ],
    };
  },
  methods: {
    toggleShowBooks() {
      this.showBooks = !this.showBooks;
    },
    toggleFav(book) {
      book.isFav = !book.isFav;
    },
  },
});

app.mount("#app");
