export const state = () => ({
  modal: true
})

export const mutations = {
  hideModal(state) {
    state.modal = false
  },
}

export const actions = {
  hideModal({commit}) {
    commit('hideModal')
  },
}
