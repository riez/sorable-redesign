import _ from 'lodash';
import faker from 'faker';

// Redux Types
export const types = {
  FETCH: 'PRODUCT_REQUEST',
  FETCH_ALL: 'ALL_PRODUCT_REQUEST',
  SEARCH: 'PRODUCT_SEARCH'
}

export const defaultState = {
  id: '',
  isLoading: false,
  searchKeyword: '',
  searchResult: [],
  dataProduct: [],
  dataRecommendedProduct: []
}

// Redux States
export default (state = defaultState, action) => {
  switch (action.type) {
    case types.FETCH:
      var generatedDataProduct = _.times(17, () => (
        {
          name: faker.commerce.productName(),
          featuredImage: 'assets/images/product-' + faker.random.number({min: 1, max: 6}) + '.jpg',
          price: faker.commerce.price(),
          color: faker.commerce.color()
        }
      ));

      var generateDataRecommendedProduct = _.times(10, () => (
        {
          name: faker.commerce.productName(),
          featuredImage: 'assets/images/product-' + faker.random.number({min: 1, max: 6}) + '.jpg',
          price: faker.commerce.price(),
          color: faker.commerce.color()
        }
      ))

      state.dataRecommendedProduct = generateDataRecommendedProduct;
      // For Infinite
      state.dataProduct.push(...generatedDataProduct)
      return { ...state };
    case types.FETCH_ALL:
      return state;
    case types.SEARCH:
      return { ...state };
    default:
      return state;
  }
}

// Redux Actions
export const actions = {
  fetch_product: () => ({ type: types.FETCH }),
  fetch_all_product: () => ({ type: types.FETCH_ALL }),
  search_product: () => ({ type: types.SEARCH})
}