import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet/es/Helmet';
import { useDispatch, useSelector } from 'react-redux';
import style from './style.module.scss';
import { getAllHotels, addHotel, removeHotel } from '../../store/admin/action';
import TruncateText from '../../components/TruncateText/component';

const Admin = () => {
  const dispatch = useDispatch();
  const hotels = useSelector((state) => state.hotels.data);
  const [values, setValues] = useState({
    name: '',
    description: '',
    rating: '',
    price_category: '',
    distance_to_venue: '',
  });

  useEffect(() => {
    let isSubscribed = true;

    if (isSubscribed) {
      dispatch(getAllHotels());
    }
    // eslint-disable-next-line no-return-assign
    return () => isSubscribed = false;
  }, []);

  const handleRemove = async (hotel) => {
    await dispatch(removeHotel(hotel.id));
  };

  const handleChange = (e) => {
    e.persist();
    setValues((prevState) => ({ ...prevState, [e.target.name]: e.target.value }));
  };
  const submit = async (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (values) {
      await dispatch(addHotel(values));
    }
  };

  return (
    <div className={style.body}>
      <Helmet>
        <title>Admin</title>
      </Helmet>

      <h2>All Hotels</h2>

      <table className={style.table}>
        <thead>
          <tr>
            <th>Hotel Name</th>
            <th>Description</th>
            <th>Rating</th>
            <th>Price category</th>
            <th>Distance to venue</th>
            <th>Remove</th>
          </tr>
        </thead>
        <tbody>
          {
          hotels?.map((el, index) => (
            <tr>
              <td><span className={style.name}>{el.name}</span></td>
              <td>
                <span>
                  <TruncateText text={el.description} className={style.desc} />
                </span>
              </td>
              <td><span>{el.rating}</span></td>
              <td><span>{el.price_category}</span></td>
              <td><span>{el.distance_to_venue}</span></td>
              <td>
                <div className={style.removeBtn}>
                  <button className={style.remove} type="button" onClick={() => handleRemove(el)}>Remove</button>
                </div>
              </td>
            </tr>
          ))
          }
        </tbody>
      </table>

      <h2>Add a new hotel</h2>
      <form className={style.form} onSubmit={submit}>
        <label>
          Name:
          <input
            placeholder="enter name"
            name="name"
            onChange={(e) => handleChange(e)}
          />
        </label>
        <label>
          Description:
          <textarea
            name="description"
            placeholder="enter description"
            onChange={(e) => handleChange(e)}
          />
        </label>
        <label>
          Distance to venue:
          <input
            placeholder="enter distance"
            name="distance_to_venue"

            onChange={(e) => handleChange(e)}
          />
        </label>
        <label>
          Rating:
          <input
            placeholder="enter rate"
            name="rating"

            onChange={(e) => handleChange(e)}
          />
        </label>
        <label>
          Price Category:
          <input
            placeholder="enter price category"
            name="price_category"
            onChange={(e) => handleChange(e)}
          />
        </label>
        <button htmltype="submit" type="submit" className={style.submit}>submit</button>
      </form>
    </div>
  );
};

export default Admin;
