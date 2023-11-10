<template>
  <div>
    <a-button @click="countAdd()">count++</a-button>
    {{count}}
  </div>
</template>
<script lang="ts" setup>
import { useStore } from '@/stores/pinia'
import { storeToRefs } from 'pinia'

const store = useStore()
const { count } = storeToRefs(store)
const countAdd = () => {
  count.value++
}

</script>
