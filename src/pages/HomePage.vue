<template>
  <div class="p-text-center p-p-4">
    <h1>Comidapp CRUD</h1>
    <p>CRUD de la APP</p>
    <Button label="Acceder" class="p-m-2" icon="pi pi-lock" @click="onClick" />
  </div>
</template>

<script>
  import { defineComponent } from 'vue'

  export default defineComponent({
    setup() {
      const url = 'https://github.com/itmarck/primevue-vite-template'

      function onClick() {
        window.open(url)
      }

      return { onClick }
    },
  })
</script>
