export default {
  created() {
    this.$store.dispatch("getParts");
  },
  computed: {
    parts() {
      // eslint-disable-next-line
      /* eslint-disable */
      return this.$store.state.parts || {
        heads: [],
        arms: [],
        torsos: [],
        bases: []
      };
    }
  }
};
