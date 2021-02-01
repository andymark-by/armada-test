<template>
  <div>
    <div class="block-title">
      Company logo
    </div>
    <div>
      <Dropzone
        id="dropzone"
        url="http://httpbin.org/anything"
        :options="dropzoneOptions"
        :use-custom-slot="true"
        class="custom-dropdown"
      >
        <div class="text-center">
          <img class="d-block mx-auto" src="/img/logo-tr.svg" alt="">
          <div class="custom-dropdown__link p-2">Upload logo</div>
        </div>
      </Dropzone>
    </div>
  </div>
</template>

<script>
import Dropzone from 'nuxt-dropzone'
import 'vue2-dropzone/dist/vue2Dropzone.min.css'

export default {
  name: "Logo",
  components: {
    Dropzone,
  },
  data: () => ({
    dropzoneOptions: {
      url: 'https://httpbin.org/post',
      thumbnailWidth: null,
      maxFilesize: 2.5, // Mb
      maxFiles: 1,
      acceptedFiles: '.png,.jpg,.jpeg',
      addRemoveLinks: true,
    },
  }),
}
</script>

<style lang="scss" scoped>
.custom-dropdown {
  height: 110px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #F5F6F8;
  border: 1px dashed #979797;
  border-radius: 12px;

  &__link {
    color: #2775F9;
  }
}
</style>
