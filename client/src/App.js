import React from 'react';
import styles from './styles/animationSwitch.scss';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { checkMode } from './config';
import { setRwdMode } from './redux/configRedux';

import {AnimatedSwitch} from 'react-router-transition';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import MainLayout from './components/layout/MainLayout/MainLayout';

// Components for routes

import { Home } from './components/pages/Home/Home';
import { Shop } from './components/pages/Shop/Shop';
import { Cart } from './components/pages/Cart/Cart';
import { Product } from './components/pages/Product/Product';
import { NotFound } from './components/pages/NotFound/NotFound';
 
class App extends React.Component {

  componentWillMount() {
    const { setRwdMode } = this.props;
    let currentRwdMode = '';
    window.addEventListener('resize', e => {
      const mode = checkMode(e.target.window.innerWidth);
      if (mode !== currentRwdMode) {
        currentRwdMode = mode;
        setRwdMode(mode);
      }
      return null;
    });
  }

  componentDidMount() {
    const { setRwdMode } = this.props;
    setRwdMode(checkMode(window.innerWidth));
  }
    
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
            <Route exact path='/shop' component={Shop} />
            <Route exact path='/cart' component={Cart} />
            <Route exact path='/product/:id' component={Product} />
            <Route path='*' component={NotFound} />
          </Switch>
        </AnimatedSwitch>
      </MainLayout>
    </BrowserRouter>
    );
  }
}

App.propTypes = {  
  className: PropTypes.string,
};

// const mapStateToProps = state => ({
//   setRwdMode: setRwdMode(state),
// });

const mapDispatchToProps = dispatch => ({
  setRwdMode: arg => dispatch(setRwdMode(arg)),
});

const Container = connect(null, mapDispatchToProps)(App);

export {Container as  App};
