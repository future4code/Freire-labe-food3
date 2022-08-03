  export const goToSearchPage = (history) => {
    history.push('/search')
  };

  export const goToHomePage = (history) => {
  history.push('/feed')
  };

  export const goToRestaurantsPage = (history, id) => {
    history.push(`/restaurants/${id}`)
  };