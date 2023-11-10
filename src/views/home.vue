<template>
    <h2>
      <router-link to="pinia-test">pinia测试</router-link>
    </h2>
    <hr>
    <h2>带参数的动态路由匹配</h2>
    <div>
      <h3>
        <router-link to="router-match/">动态路由匹配测试: A</router-link>
      </h3>
      <h3>
        <router-link to="router-match/456">动态路由匹配测试: B</router-link>
      </h3>
    </div>
    <hr>
    <div>
      <h3>
        <router-link to="tsStudy">TS</router-link>
      </h3>
    </div>
</template>

<script lang="ts" setup>
import { onMounted } from 'vue'
import { useRouter } from 'vue-router'
import axios from 'axios' // 引入axios
import { arrayToTreeLoop } from '@/utils/toTree'

const router = useRouter()
onMounted(() => {
  console.log(router)
  axios.get('/mock/news').then(res => { // url即在mock.js中定义的
    const treeData = arrayToTreeLoop(res.data, 'id', 'pId')
    console.log(treeData) // 打印一下响应数据
  })
})
</script>

<style scoped>

</style>
