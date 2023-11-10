<template>
  <div class="pinia-content">
    <h2>pinia 使用--  {{count}}</h2>
    <hr/>
    <div class="pinia-compoments">
      <a-card style="width: 50%" title="pinia组件A">
        <piniaA/>
      </a-card>
      <a-card style="width: 50%" title="pinia组件B">
        <piniaB/>
      </a-card>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { storeToRefs } from 'pinia'
import piniaA from '@/views/piniaTest/pinia_a.vue'
import piniaB from '@/views/piniaTest/pinia_b.vue'
import { useStore } from '@/stores/pinia'

const store = useStore()
const { count } = storeToRefs(store)

// 监听store变化
store.$subscribe(
  () => {
    console.log(count.value)
  },
  { detached: true }
)
</script>
<style lang="less" scoped>
.pinia-content {
  border: 1px solid rgb(136, 136, 136);

  h2 {
    text-align: center;
  }

  .pinia-compoments {
    display: flex;
  }
}
</style>
