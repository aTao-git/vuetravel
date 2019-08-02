<template>
  <div class="index">
    <Header></Header>
    <transition mode="out-in" enter-active-class="animated bounceInRight" leave-active-class="animated bounceOutLeft">
      <router-view></router-view>
    </transition>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from '@/components/header'
import Footer from '@/components/footer'
export default {
  components: {
    Header,
    Footer
  }
}
</script>

<style lang="stylus" scoped>

</style>
