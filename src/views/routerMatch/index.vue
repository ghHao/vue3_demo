<template>
  <div>
    <p>带参数的动态路由匹配</p>
    <p> 地址：{{path}} </p>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const path = ref()
const router = useRouter()
path.value = router.currentRoute.value.fullPath
console.log('path: ', path.value)

</script>
