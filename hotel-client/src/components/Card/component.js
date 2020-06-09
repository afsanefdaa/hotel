// @flow
import React from 'react';
import { Link } from 'react-router-dom';
import style from './index.module.scss';
import TruncateText from '../TruncateText/component';
import { ReactComponent as StarIcon } from '../../assets/icons/star.svg';
import { ReactComponent as DistanceIcon } from '../../assets/icons/road.svg';

type componentProps = {
  data: Object
};

const Card = ({ data }: componentProps) => (
  <div className={style.card}>
    <div className={style.wrapper}>
      <img src={data.images[0]} alt="unsplash" />
    </div>
    <div className={style.content}>
      <span className={style.title}>{data.name}</span>
      <div className={style.descBox}>
        <TruncateText text={data.description} className={style.desc} />
      </div>
      <div className={style.footer}>
        <div className={style.rateBox}>
          <StarIcon fill="#D48166" width={18} height={18} />
          <span>{data.rating}</span>
        </div>
        <div className={style.rateBox}>
          <DistanceIcon fill="#D48166" width={18} height={18} />
          <span>
            {`${data.distance_to_venue} m`}
          </span>
        </div>
        <Link to={`/hotels/${data.id}`} className={style.detail}>Details</Link>
      </div>
    </div>
  </div>
);

export default Card;
