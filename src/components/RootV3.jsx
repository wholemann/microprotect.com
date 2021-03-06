/* @jsx jsx */

import React from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import { useSelector } from 'react-redux';

import { jsx } from '@emotion/core';

import Header from './HeaderV3';
import Footer from './FooterV2';
import Menu from './Menu';

import Home from './HomeV3';
import FreeInsurance from './FreeInsurance';
import SubscriptionInsurance from './SubscriptionInsurance';
import AboutUs from './AboutUs';

import { mq } from '../styles/utils';

const styles = {
  container: {
    [mq(1024)]: {
      fontSize: '20px',
    },
  },
};

export default function RootV3({ t, locale }) {
  const menuOpen = useSelector((state) => state.menuOpen);

  return (
    <Router>
      <Header locale={locale} menuOpen={menuOpen} />
      <Menu open={menuOpen} />
      <div css={styles.container}>
        <Switch>
          <Route path="/free-insurance">
            <FreeInsurance t={t} />
          </Route>
          <Route path="/subscription-insurance">
            <SubscriptionInsurance t={t} />
          </Route>
          <Route path="/about-us">
            <AboutUs t={t} />
          </Route>
          <Route path="/">
            <Home t={t} />
          </Route>
        </Switch>
      </div>
      <Footer t={t} />
    </Router>
  );
}
