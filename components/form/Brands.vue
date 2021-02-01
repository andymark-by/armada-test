<template>
  <div>
    <div class="block-title">
      Brands
    </div>
    <b-card-sub-title>Select the brands you work with</b-card-sub-title>
    <b-row class="mt-2">
      <b-col
        v-for="(brand, idx) in brands" :key="idx"
        cols="6"
        sm="6"
        xl="4"
        class="col-xxl-3 mb-3 d-flex align-items-stretch"
        @click="selectBrand(idx)"
      >
        <div
          class="brand-card"
          :class="{active: selectedBrands.includes(brand)}"
        >
          <img :src="brand.img" :alt="brand.title"/>
        </div>
      </b-col>
    </b-row>
  </div>
</template>

<script>
export default {
  name: "Brands",
  props: {
    brands: Array,
    selectedBrands: Array
  },
  methods: {
    selectBrand(idx) {
      this.$emit('selectBrand', idx)
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
