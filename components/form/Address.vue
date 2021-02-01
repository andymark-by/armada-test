<template>
    <div>

      <div class="block-title">
        Company Address
      </div>

      <b-row>

        <b-col cols="9" class="mb-2">
          <b-input
            :value="street"
            @change="$emit('update:street', $event)"
            class="custom-input"
            placeholder="Street name"/>
        </b-col>

        <b-col cols="3" class="mb-2">
          <b-input
            :value="number"
            @change="$emit('update:number', $event)"
            class="custom-input"
            placeholder="Number"/>
        </b-col>

        <b-col cols="3">
          <b-input
            :value="zip"
            @change="$emit('update:zip', $event)"
            class="custom-input"
            placeholder="ZIP Code"/>
        </b-col>

        <b-col cols="9">
          <b-input
            :value="city"
            @change="$emit('update:city', $event)"
            class="custom-input"
            placeholder="City name"/>
        </b-col>

      </b-row>
    </div>
</template>

<script>
export default {
  name: "Address",
  props: {
    street: String,
    number: String,
    zip: String,
    city: String
  },
}
</script>

<style scoped>

</style>
