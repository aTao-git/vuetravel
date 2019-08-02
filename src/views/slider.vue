<template>
  <div class="slider">
    <el-carousel trigger="click" height="150px">
      <el-carousel-item v-for="item in slider" :key="item">
        <h3 class="small">{{ item }}</h3>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
export default {
  data () {
    return {
      slider: []
    }
  }
}
</script>

<style lang="stylus" scoped>

</style>
