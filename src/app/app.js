import React from 'react';
import { Provider } from 'react-redux';
import { HashRouter as Router, Route} from 'react-router-dom';

// Page
import HomepageContainer from '../containers/homepage';
import ProductCategoryContainer from '../containers/product-category';

// Redux
import configStore from './store';
const store = configStore();

class App extends React.Component{
  render() {
    return (
      // Initial Setup + Redux
      <Provider store={store}>
        <Router>
          <Route exact={true} path='/' render={ () => <HomepageContainer/> }/>
          <Route exact={true} path='/product-category' render={ () => <ProductCategoryContainer/> }/>
        </Router>
      </Provider>
    )
  }
}
export default App;