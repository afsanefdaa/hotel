import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet/es/Helmet';
import {
  useParams,
} from 'react-router-dom';
import { useSelector } from 'react-redux';
import uuid from 'uuid';
import { getSingleRoom } from '../../api/Confirmation';
import style from './index.module.scss';

const Confirmation = () => {
  const user = useSelector((state) => state.user.data);
  const { token } = useParams();
  const [room, setRoom] = useState();

  useEffect(() => {
    let isSubscribed = true;

    if (isSubscribed) {
      getSingleRoom(token).then((res) => setRoom(res));
    }
    // eslint-disable-next-line no-return-assign
    return () => isSubscribed = false;
  }, []);

  return (
    <>
      <Helmet>
        <title>
          Confirmation
        </title>
      </Helmet>
      <div className={style.body}>
        <div className={style.box}>
          <span className={style.title}>Please Confirm</span>
          <div className={style.info}>
            <p className={style.item}>
              <span>Firs name:</span>
              <span>{user?.name}</span>
            </p>
            <p className={style.item}>
              <span>Last name:</span>
              <span>{user?.last_name}</span>
            </p>
            <p className={style.item}>
              <span>Booking number:</span>
              <span>{uuid()}</span>
            </p>
            <p className={style.item}>
              <span>Room type:</span>
              <span>{room?.name}</span>
            </p>
            <p className={style.item}>
              <span>Price per night:</span>
              <span>{room?.price_in_usd}</span>
            </p>
            <p className={style.item}>
              <span>Occupancy:</span>
              <span>{room?.max_occupancy}</span>
            </p>
          </div>
          <button type="button" className={style.submit}>Confirm</button>
        </div>
      </div>
    </>
  );
};

export default Confirmation;
