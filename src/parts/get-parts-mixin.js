export default {
  created() {
    this.$store.dispatch("getParts");
  },
  computed: {
    parts() {
      // eslint-disable-next-line
      /* eslint-disable */
      return this.$store.state.robots.parts || {
        heads: [],
        arms: [],
        torsos: [],
        bases: []
      };
    }
  }
};
