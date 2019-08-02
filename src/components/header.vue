<template>
  <div class="header">
      <div class="main">
        <el-row type="flex" justify="space-between">
          <div class="logo">
            <img src="http://157.122.54.189:9093/images/logo.jpg" alt="">
          </div>
          <div class="menu">
            <router-link to="/">首页</router-link>
            <router-link to="/post">旅游攻略</router-link>
            <router-link to="/hotel">酒店</router-link>
            <router-link to="/air">国内机票</router-link>
          </div>
          <div class="login">
            <el-dropdown>
              <span class="el-dropdown-link">
                <img src="http://157.122.54.189:9095/assets/images/avatar.jpg" alt="">
                地球发动机<i class="el-icon-arrow-down el-icon--right"></i>
              </span>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item>个人中心</el-dropdown-item>
                <el-dropdown-item>退出</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </div>
        </el-row>
      </div>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="stylus" scoped>
$bl = #409eff
.header
  height 60px
  border-bottom 1px solid #cccccc
  .main
    width 1000px
    margin 0 auto
    .logo
      img
        width 150px
        height 42px
        margin-top 9px
    .menu
      margin-left 30px
      flex 1
      display flex
      a
        display block
        padding 0 20px
        height 60px
        line-height 60px
        &:hover
          border-bottom 5px solid $bl
          color $bl
      .router-link-exact-active
        background $bl
        color #fff
        &:hover
          color #ffffff
    .login
      .el-dropdown-link
        line-height 60px
        img
          width 36px
          height 36px
          border 2px solid #ffffff
          border-radius 50%
        &:hover
          color $bl
          img
            border 2px solid $bl
</style>
