// @flow
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import style from './index.module.scss';
import { Header, Footer, Container } from '..';
import { getUserAction } from '../../store/global/action';

type componentProps = {
  children: any
};

export const Layout = ({ children }:componentProps) => {
  const dispatch = useDispatch();
  useEffect(() => dispatch(getUserAction()), []);
  return (
    <div>
      <Header />
      <Container>
        <div className={style.content}>
          {children}
        </div>
      </Container>
      <Footer />
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.any.isRequired,
};

export default Layout;
