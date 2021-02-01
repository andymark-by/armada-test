<template>
  <b-modal
    ref="loadModal"
    size="xl"
    centered
    hide-footer
    hide-header
    no-close-on-backdrop
    no-close-on-esc
    modal-class="modal__bg"
    content-class="modal__wrap"
    body-class="p-5"
  >
    <h3 class="modal__title">Welcome to your account John</h3>
    <div class="modal__subtitle">
      Before you can start your trial, you need to publish your company page. This is important so leads
      can get to know you.
    </div>
    <div class="modal__content">
      <p>No worries, this will only take a a few minutes. On the next pages you can add your company information,
        introduction, projects you and your team have done and what brands are used. This will help customers better
        understand what you stand for and who you are. A good company page is essential, often within 5 seconds a
        customer decides whether or not they like a company.</p>
      <p>Here are some tips to make your company profile stand out</p>
      <ul>
        <li>Be orginal and unique. Try to have a catchy intro that will m ake leads want to know more and continue
          reading.
        </li>

        <li>Get straight to business. Too many companies talk to much about themselves and not about what they can
          mean for the client. Leave words like dynamic, young, professional behind and explain in normal language
          what makes you better than the others.
        </li>

        <li>Show why you are better. There's a time to be humble and there's a time to pat yourself on the back. Have
          awards? Great reviews? Influential customers/clients? Your company profile is one of the few places where
          it's appropriate for your brand to brag about these things.
        </li>
      </ul>
      <p>Ultimately, your company profile matters. It can intrigue a new visitor to check out your products or
        services in more detail, and nudge potential customers into choosing your business over competitors.</p>
    </div>
    <b-button
      class="mt-3 px-5"
      variant="success"
      @click="hideModal"
    >
      I understand, complete my company page
    </b-button>
  </b-modal>
</template>

<script>
export default {
  name: "LoadModal",
  methods: {
    showModal() {
      this.$refs.loadModal.show()
    },
    hideModal() {
      this.$refs.loadModal.hide()
      window.localStorage.setItem('modal', false)
    }
  },
  mounted() {
    if (process.client && window.localStorage.getItem('modal') !== 'false') {
      this.showModal();
    }
  }
}
</script>

<style lang="scss" scoped>

.modal {
  &__bg {
    background-color: rgba(19, 10, 51, 0.9);
  }
  &__wrap {
    border-radius: 8px;
  }
  &__title {
    font-size: 34px;
    font-weight: 500;
    line-height: 22px;
    margin-bottom: 15px;
  }
  &__subtitle {
    font-size: 20px;
    line-height: 28px;
    margin-bottom: 28px;
  }

  &__content {
    font-size: 16px;
    line-height: 22px;

    ul {
      list-style: none;
      li {
        position: relative;
        margin-bottom: 20px;

        &::after {
          content: "";
          display: block;
          position: absolute;
          left: -35px;
          top: 0px;
          box-sizing: border-box;
          width: 20px;
          height: 20px;
          background-image: url("/icon/list_icon.svg");
          background-size: contain;
        }
      }
    }
  }

}
</style>
