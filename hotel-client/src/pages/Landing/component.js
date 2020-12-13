import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet/es/Helmet';
import uuid from 'uuid';
import { getAllHotels } from '../../api/Landing/index';
import { Card, Filters } from '../../components';
import style from './index.module.scss';

type hotelProps = {
  items: Array,
};

const RenderHotels = ({ items }: hotelProps) => (
  <div className={(items.length % 4) === 2 ? style.boxTwo : style.boxOne}>
    {
        items?.map((el) => <Card data={el} key={uuid()} />)
    }
  </div>
);

const Landing = () => {
  const [hotels, setHotels] = useState([]);
  const [filters, setFilters] = useState(undefined);
  const [unsubscribe, setUnsubscribe] = useState(true);

  useEffect(() => {
    getAllHotels().then((res) => {
      if (!filters) {
        setHotels(res);
      } else {
        const rates = filters.rating.split('-');
        // eslint-disable-next-line max-len
        const result = res.filter((el) => filters.price_category && el.price_category === filters.price_category && el)
          .filter((el) => el.rating >= Number(rates[0]) && el.rating < Number(rates[1]) && el)
        // eslint-disable-next-line max-len
          .filter((el) => (filters.from_dis !== 0 && filters.to_dis !== 0) && el.rating >= Number(rates[0]) && el.rating < Number(rates[1]) && el)
          .filter((el) => filters.amenties.every((v) => el?.amenities?.includes(v)) && el);
        setHotels(result);
      }
    });

    return () => setUnsubscribe(false);
  }, [filters]);

  const submit = (e, values) => {
    e.preventDefault();
    e.stopPropagation();
    const vls = {
      from_dis: values.from_dis,
      to_dis: values.to_dis,
      price_category: values.price_category,
      rating: values.rating,
      amenties: [
        values.free_parking ? 'free_parking' : '',
        values.free_wifi ? 'free_wifi' : '',
        values.pets ? 'pets' : '',
        values.restaurant ? 'restaurant' : '',
        values.gym ? 'gym' : '',
        values.pool ? 'pool' : '',
        values.spa ? 'spa' : '',
      ].filter((el) => el !== ''),
    };
    setFilters(vls);
  };

  return (
    <>
      <Helmet>
        <title>Landing</title>
      </Helmet>
      <span className={style.caseStudy}>Welcome to CaseStudy</span>
      <Filters submit={submit} />
      {
        hotels.length !== 0
          ? <RenderHotels items={hotels} />
          : <span className={style.noMatch}>No match :( Try other filters</span>
      }
    </>
  );
};

export default Landing;
