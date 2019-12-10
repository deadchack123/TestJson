<template>
  <div class="hello">
    <comp1 v-on:remove='test' />
    <comp2 v-bind:title='v' />
  </div>
</template>

<script>
import Comp1 from './comp1.vue'
import Comp2 from './comp2.vue'
export default {
  name: 'HelloWorld',
  data () {
    return {
      v: ''
    }
  },
  components: {
    Comp1,
    Comp2
  },
  props: {
    msg: String
  },
  methods: {
    test (value) {
      this.v = value
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello {
  display: flex;
}
</style>
