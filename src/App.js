import './common/template/dependencies';

import React from 'react';
import { BrowserRouter } from 'react-router-dom'

import Header from './common/template/header';
import Sidebar from './common/template/sidebar';
import Footer from './common/template/footer';
import Routes from './routes';

export default props => (
  <BrowserRouter>
    <div className="wrapper">
      <Header />
      <Sidebar />

      <Routes />

      <Footer />
    </div>
  </BrowserRouter>

)
