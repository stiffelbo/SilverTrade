import React from 'react';
import {AnimatedSwitch} from 'react-router-transition';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import styles from './styles/animationSwitch.scss';

import MainLayout from './components/layout/MainLayout/MainLayout';

// import routes
import { Home } from './components/pages/Home/Home';
import { Cart } from './components/pages/Cart/Cart';
import { NotFound } from './components/pages/NotFound/NotFound';
 
class App extends React.Component {

  render() {
    return (
    <BrowserRouter>
      <MainLayout>
        <AnimatedSwitch
          atEnter={{ opacity: 0}}
          atLeave={{ opacity: 0}}
          atActive={{ opacity: 1}}            
          className={styles.switchWrapper}
        >
          <Switch location={location}>
            <Route exact path='/' component={Home} />
            <Route exact path='/cart' component={Cart} />

            <Route path='*' component={NotFound} />
          </Switch>
        </AnimatedSwitch>
      </MainLayout>
    </BrowserRouter>
    );
  }

}

export default App;