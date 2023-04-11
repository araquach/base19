import axios from 'axios'
import format from "date-fns/format";
import {addWeeks} from "date-fns";

const today = new Date()

export const state = {
    hideOffers: false,
    newsItems: [],
    endDate: format(addWeeks(today, 4), "dd/MM/yy")
}

export const getters = {

}

export const mutations = {
    SET_NEWS_ITEMS (state, newsItems) {
        state.newsItems = newsItems
    }
}

export const actions = {
    loadNewsItems ({ commit }) {
        axios
            .get('/api/news-items')
            .then(response => response.data.slice(0, 3))
            .then(newsItems => {
                commit('SET_NEWS_ITEMS', newsItems)
            })

    }
}