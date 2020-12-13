import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Container } from '..';
import style from './index.module.scss';
import avatar from '../../assets/account.png';

export const Header = () => {
  const user = useSelector((state) => state.user.data);
  return (
    <Container className={style.body}>
      <div className={style.nav}>
        <div className={style.box}>
          <Link to="/">
            Home
          </Link>
        </div>
        <div className={style.box}>
          <Link to="/">
            About
          </Link>
        </div>
      </div>
      <div className={style.user}>
        <span className={style.name}>{`${user?.name} ${user?.last_name}`}</span>
        <div className={style.wrapper}>
          <img src={avatar} alt={user?.name} />
        </div>
      </div>
    </Container>
  );
};

export default Header;
