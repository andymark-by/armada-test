<template>
  <b-row class="bg-main min-vh-100">
    <b-col md="6" cols="12" class="px-5">
      <b-row class="mt-5">
        <b-col cols="9">
          <Address
            :street.sync="location.street"
            :city.sync="location.city"
            :zip.sync="location.zip"
            :number.sync="location.number"
          />
        </b-col>
        <b-col cols="3">
          <Logo/>
        </b-col>
      </b-row>
      <b-row class="mt-5">
        <b-col>
          <div class="block-title">
            Company Introduction
          </div>
          <b-textarea
            rows="5"
            no-resize
            v-model="introduction"
          />
        </b-col>
      </b-row>
      <b-row class="mt-5">
        <b-col>
          <div class="block-title">
            Company Introduction
          </div>
          <client-only placeholder="loading...">
            <ckeditor-nuxt v-model="description" :config="editorConfig"/>
          </client-only>
        </b-col>
      </b-row>
      <b-row class="mt-5">
        <b-col>
          <Brands
            :brands="brands"
            :selectedBrands="selectedBrands"
            @selectBrand="selectBrand"
          />
        </b-col>
      </b-row>
    </b-col>
    <b-col md="6" cols="12" class="bg-white px-5">
      <b-row class="mt-5">
        <b-col cols="12">
          <div class="block-title">Your profile is {{ progress }}% completed</div>
          <b-progress
            :value="progress"
            height="7px"
            max="100"
            class="mb-3"
          />
        </b-col>
        <b-col>
          <Preview
            :introduction="introduction"
            :description="description"
            :location="location"
            :brands="selectedBrands"
          />
        </b-col>
      </b-row>

    </b-col>
  </b-row>
</template>

<script>

import Address from "~/components/form/Address"
import Brands from "~/components/form/Brands"
import Logo from "~/components/form/Logo"
import Preview from "~/components/form/Preview"

export default {
  components: {
    Preview,
    Logo,
    Brands,
    Address,
    'ckeditor-nuxt': () => { if (process.client) { return import('@blowstack/ckeditor-nuxt') } },
  },
  data: () => ({
    introduction: 'This is a small introduction of your company highlighting your strenghts and what makes you different.',
    description: '<p>Add a detailed description about your company page. Show why a customer should choose you, list your experience, company history and other details you would think would be interesting for people to read</p>' +
      '<p>What we do</p>' +
      '<ul>' +
      '<li>We specialise in ground-mounted systems</li>' +
      '<li>Batteries from LG Chem</li>' +
      '<li>We have a 24h after service available</li>' +
      '</ul>',
    location: {
      zip: '',
      city: '',
      street: '',
      number: '',
    },
    brands: [
      {img: '/img/brands/canadian-solar.png', title: ''},
      {img: '/img/brands/cells.png', title: ''},
      {img: '/img/brands/jinko.png', title: ''},
      {img: '/img/brands/lg.png', title: ''},
      {img: '/img/brands/rec.png', title: ''},
      {img: '/img/brands/solarwatt.png', title: ''},
      {img: '/img/brands/sunpower.png', title: ''},
      {img: '/img/brands/trina-solar.png', title: ''},
    ],
    selectedBrands: [],


    // configs
    editorConfig: {
      toolbar: {items: ['heading', '|', 'bold', 'italic', 'link', 'bulletedList', 'numberedList', 'code']},
      heading: {
        options: [
          {model: 'paragraph', title: 'Paragraph', class: 'ck-heading_paragraph'},
          {model: 'heading1', view: 'h1', title: 'Heading 1', class: 'ck-heading_heading1'},
          {model: 'heading2', view: 'h2', title: 'Heading 2', class: 'ck-heading_heading2'}
        ]
      }
    },
  }),
  methods: {
    selectBrand: function (idx) {
      if (this.selectedBrands.includes(this.brands[idx]))
        this.selectedBrands = this.selectedBrands.filter(i => this.brands[idx] !== i)
      else
        this.selectedBrands.push(this.brands[idx])
    }
  },
  computed: {
    progress() {
      let score = 0;

      if (this.location.zip) score += 5
      if (this.location.city) score += 5
      if (this.location.street) score += 5
      if (this.location.number) score += 5
      if (this.introduction) score += 20
      if (this.description) score += 20
      if (this.selectedBrands.length > 0) score += 20


      return score;
    }
  }
}
</script>
