import React, { useState } from 'react';
import uuid from 'uuid';
import classes from 'classnames';
import style from './style.module.scss';

type componentProps = {
  submit: Function
}

const amenties = [
  {
    name: 'free_parking',
    label: 'Free Parking',
  },
  {
    name: 'free_wifi',
    label: 'Free Wifi',
  },
  {
    name: 'pets',
    label: 'Pets allowed',
  }, {
    name: 'restaurant',
    label: 'Restaurant',
  }, {
    name: 'gym',
    label: 'Gym',
  }, {
    name: 'pool',
    label: 'Pool',
  }, {
    name: 'spa',
    label: 'Spa',
  },
];

const Filters = ({ submit }: componentProps) => {
  const [values, setValues] = useState({
    from_dis: 0,
    to_dis: 0,
    price_category: 'low',
    rating: '',
    free_parking: false,
    free_wifi: false,
    pets: false,
    restaurant: false,
    gym: false,
    pool: false,
    spa: false,
  });

  const handleChange = (e) => {
    e.persist();
    setValues(
      (prevState) => ({ ...prevState, [e.target.name]: e.target.value || e.target.checked }),
    );
  };

  return (
    <form onSubmit={(e) => submit(e, values)} className={style.body}>
      <div className={style.rowOne}>
        <div className={style.col}>
          <span className={style.title}>Distance to venue</span>
          <div className={style.disFilter}>
            <input name="from_dis" onChange={handleChange} />
            to
            <input name="to_dis" onChange={handleChange} />
            meters
          </div>

          <span className={style.title}>Rating</span>
          <select value={values.rating} onChange={handleChange} name="rating">
            <option value="0-2">0-2</option>
            <option value="2-3">2-3</option>
            <option value="3-5">3-5</option>
          </select>

          <span className={style.title}>Price category</span>
          <select value={values.cat} onChange={handleChange} name="price_category">
            <option value="low">low</option>
            <option value="medium">medium</option>
            <option value="high">high</option>
          </select>
        </div>
        <div className={classes(style.col, style.amenities)}>
          <span className={style.title}>Individual amenities</span>
          <div className={style.amenities}>
            {
              amenties.map((el) => (
                // eslint-disable-next-line jsx-a11y/label-has-associated-control
                <label key={uuid()}>
                  {el.label}
                  <input
                    name={el.name}
                    type="checkbox"
                    checked={values[el.name]}
                    onChange={handleChange}
                    value={undefined}
                  />
                </label>
              ))
            }
          </div>
        </div>
      </div>
      <div className={style.rowTwo}>
        <button htmltype="submit" type="submit">Apply Filters</button>
      </div>
    </form>
  );
};

Filters.propTypes = {

};

export default Filters;
