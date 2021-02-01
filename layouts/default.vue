<template>
  <div>
    <Header/>

    <div class="container-fluid">
      <nuxt/>
    </div>

    <Footer/>

    <LoadModal/>
  </div>
</template>

<script>
import Header from "~/components/Header";
import Footer from "~/components/Footer";
import LoadModal from "~/components/LoadModal";

export default {
  name: 'deafult',
  components: {LoadModal, Footer, Header},
}
</script>
