<template>
  <div class="container">
      <p>這是測試</p>
       <nuxt-link to="/">首頁</nuxt-link>
  </div>
</template>

<script>
export default {
    data () {
    return {
      title: 'Hello World!'
    }
  },
  head () {
    return {
      title: this.title,
      meta: [
        { hid: 'description', name: 'description', content: 'My custom description' }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>

</style>