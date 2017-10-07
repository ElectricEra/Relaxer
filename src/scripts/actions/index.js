import axios from 'axios';

export const changeTheme = (theme) => {
  return {
    type: 'CHANGE_THEME',
    theme
  }
}

export function getNewsArticles(source = 'the-next-web', sortBy = 'latest') { // eslint-disable-line import/prefer-default-export
  return (dispatch) => {
    axios.get(`https://newsapi.org/v1/articles?source=${source}&sortBy=${sortBy}&apiKey=${apiKey}`).then(
      (response) => {
        dispatch(getNewsAction(response.data.articles));
      },
    )
  }
}

function getHostsData(data) {
    return {
		type: 'GET_HOSTS',
		data
	}
}

export const getHosts = () => {
  return (dispatch) => {
    axios.get('/getNews').then(
      (response) => {
        dispatch(getHostsData(response.data));
      },
    )
  }
}

export const updateStoreWithHosts = (data) => {
  return {
    type: 'ADD_NEWS_TO_STORE',
    data
  }
}
