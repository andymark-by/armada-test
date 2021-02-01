<template>
  <b-card>
    <b-col class="py-4">

      <b-row>
        <b-col cols="3">
          <div class="preview__logo">
            <img class="d-block mx-auto" src="/img/logo-tr.svg" alt="">
          </div>
        </b-col>
        <b-col cols="9">
          <h2 class="title">Energie Voor Morgen</h2>
          <div class="d-flex align-baseline mb-2">
            <img class="mr-2" src="/icon/map-marker.svg" width="10" alt="">
            <span class="text-muted" v-if="address">{{ address }}</span>
            <span class="text-muted" v-else>Your company Address</span>
          </div>
          <span>{{ introduction }}</span>
        </b-col>
      </b-row>

      <b-row class="mt-5">
        <b-col>
          <div class="block-title">Company Description</div>
          <div v-html="description"></div>
        </b-col>
      </b-row>

      <b-row class="mt-5">
        <b-col>
          <div class="block-title">Brands</div>
          <b-row class="mt-2">
            <b-col
              cols="6"
              sm="6"
              xl="4"
              class="col-xxl-3 mb-3 d-flex align-items-stretch"
              v-for="(brand, idx) in brands" :key="idx"
            >
              <div class="brand-card">
                <img :src="brand.img" :alt="brand.title"/>
              </div>
            </b-col>
          </b-row>

        </b-col>
      </b-row>

    </b-col>
  </b-card>
</template>

<script>
export default {
  name: "Preview",
  props: {
    location: {
      type: Object,
      required: true
    },
    introduction: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    brands: {
      type: Array
    }
  },
  computed: {
    address() {
      let a = Object.values(this.location)
      a = a.filter(i => i.length > 0)

      return a.join(', ')
    }
  }
}
</script>

<style lang="scss" scoped>
.preview {
  &__logo {
    height: 120px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #F5F6F8;
    border-radius: 12px;
  }
}
</style>
