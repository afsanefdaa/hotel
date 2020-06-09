import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet/es/Helmet';
import {
  useParams, Link,
} from 'react-router-dom';
import { getSingleHotel } from '../../api/Hotel';
import style from './index.module.scss';
import { Icon } from '../../components';


const Hotel = () => {
  const [image, setImage] = useState();
  const [more, setMore] = useState(2);
  const [belowImages, setBelowImages] = useState();
  const { id } = useParams();
  const [hotel, setHotel] = useState({});

  useEffect(() => {
    let isSubscribed = true;

    if (isSubscribed) {
      getSingleHotel(id).then((res) => {
        if (res) {
          setHotel(res);
          setImage(res.images[0]);
          setBelowImages(res.images.filter((el) => el !== res.images[0]));
        }
      });
    }
    // eslint-disable-next-line no-return-assign
    return () => isSubscribed = false;
  }, []);

  const handleImage = (el) => {
    setImage(el);
    setBelowImages(hotel?.images?.filter((img) => img !== el));
  };

  return (
    <div className={style.main}>
      <Helmet>
        <title>
          {`Hotel | ${hotel?.name}`}
        </title>
      </Helmet>
      <div className={style.body}>
        <div className={style.cols}>
          <h1 className={style.title}>{hotel?.name}</h1>
          <div className={style.infoBox}>
            <Icon text="rating" value={hotel?.rating} />
            <Icon text="price_category" value={hotel?.price_category} />
            <Icon text="distance_to_venue" value={hotel?.distance_to_venue} />
          </div>
          <p className={style.desc}>{hotel?.description}</p>

          <div className={style.amenities}>
            <h2>Amenities</h2>
            {
              hotel?.amenities?.map((el) => <Icon text={el} />)
            }
          </div>
        </div>
        <div className={style.cols}>
          <div className={style.wrapper}>
            <img src={image} alt="hotel" />
          </div>
          <div className={style.below}>
            {
              belowImages?.slice(0, 5).map((el) => (
                <div className={style.wrapper} onClick={() => handleImage(el)}>
                  <img src={el} alt="hotel" />
                </div>
              ))
            }
          </div>
        </div>
      </div>
      <div>
        <div className={style.room}>
          <h2>Rooms</h2>
          <table className={style.table}>
            <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Price</th>
                <th>Occupancy</th>
                <th>Book</th>
              </tr>
            </thead>
            <tbody>
              {
              hotel?.rooms?.slice(0, more)
                .sort((a, b) => Number(b.price_in_usd) - Number(a.price_in_usd))
                .map((el, index) => (
                  <tr>
                    <td>{index}</td>
                    <td><span className={style.name}>{el.name}</span></td>
                    <td>{`${el.price_in_usd} $ per night`}</td>
                    <td>
                      {el.max_occupancy}
                    </td>
                    <td>
                      <div className={style.bookBox}>
                        <Link to={`/confirmation/${el.id}`} className={style.book}>Book now</Link>
                      </div>
                    </td>
                  </tr>
                ))
              }
            </tbody>
          </table>
          <span className={style.more} onClick={() => setMore(hotel?.rooms?.length)}>More ...</span>
        </div>
      </div>
    </div>
  );
};

export default Hotel;
