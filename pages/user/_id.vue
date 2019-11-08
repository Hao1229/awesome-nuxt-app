<template>
  <div>
      <p>這是測試2</p>
  </div>
</template>

<script>
export default {
    validate ({ params }) {
    return /^\d+$/.test(params.id)
  }
}
</script>

<style>

</style>