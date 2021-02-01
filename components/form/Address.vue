<template>
    <div>

      <div class="block-title">
        Company Address
      </div>

      <b-row no-gutters>

        <b-col class=" mr-2">
          <b-input
            :value="street"
            @change="$emit('update:street', $event)"
            placeholder="Street name"/>
        </b-col>
        <b-col cols="3" class="mb-2">
          <b-input
            :value="number"
            @change="$emit('update:number', $event)"
            placeholder="Number"/>
        </b-col>
        <div class="w-100"></div>
        <b-col cols="3">
          <b-input
            :value="zip"
            @change="$emit('update:zip', $event)"
            placeholder="ZIP Code"/>
        </b-col>

        <b-col class="ml-2">
          <b-input
            :value="city"
            @change="$emit('update:city', $event)"
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
