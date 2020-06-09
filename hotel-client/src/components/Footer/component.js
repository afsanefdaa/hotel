import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from '..';
import style from './index.module.scss';

export const Footer = () => (
  <div className={style.body}>
    <Container className={style.box}>
      <div className={style.cols}>
        <span className={style.title}>Case Study</span>
        <Link to="/">Careers</Link>
        <Link to="/">News</Link>
        <Link to="/">Policies</Link>
        <Link to="/">About</Link>
      </div>
      <div className={style.cols}>
        <span className={style.title}>Discover</span>
        <Link to="/">Leipzig Conference</Link>
        <Link to="/">Berlin Conference</Link>
        <Link to="/">Munich Conference</Link>
      </div>
      <div className={style.cols}>
        <span className={style.title}>Support</span>
        <Link to="/">Help</Link>
        <Link to="/">Contact</Link>
      </div>
    </Container>
    <span className={style.copyRight}>© 2020 Case study, Inc. All rights reserved</span>
  </div>
);


export default Footer;
