import MyJsonData from '@/content/myjson.json'

//data
export const state = () => ({
  siteContent: {}
})

export const getteres = {
  siteContent: state => state.siteContent
}

export const actions = {
  setSiteContent({commit}) {
    commit('SET_SITE_CONTENT', MyJsonData)
  }
}

//functions
export const mutations = {
  SET_SITE_CONTENT (state, payload) {
    state.siteContent = payload
  }
}
