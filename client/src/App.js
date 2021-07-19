import React from 'react';
//import { Switch, Route } from 'react-router-dom';

import MainLayout from './components/layout/MainLayout/MainLayout';

// import routes
import { Products } from './components/features/Products/Products';
import NotFound from './components/pages/NotFound/NotFoundPage';
 
class App extends React.Component {

  render() {
    return (
      <MainLayout>
        <Products></Products>
      </MainLayout>
    );
  }

}

export default App;
