// @flow
import React from 'react';
import { ReactComponent as StarIcon } from '../../assets/icons/star.svg';
import { ReactComponent as BankIcon } from '../../assets/icons/bank.svg';
import { ReactComponent as RoadIcon } from '../../assets/icons/road.svg';
import { ReactComponent as ParkingIcon } from '../../assets/icons/car-parking.svg';
import { ReactComponent as ResturantIcon } from '../../assets/icons/food.svg';
import { ReactComponent as GymIcon } from '../../assets/icons/gym.svg';
import { ReactComponent as SpaIcon } from '../../assets/icons/massage-spa-body-treatment.svg';
import { ReactComponent as PetIcon } from '../../assets/icons/pet.svg';
import { ReactComponent as PoolIcon } from '../../assets/icons/pool.svg';
import { ReactComponent as WifiIcon } from '../../assets/icons/wifi.svg';
import style from './style.module.scss';

type componentProps = {
  text: string,
  value?: any
}

const Icon = ({ text, value }: componentProps) => {
  let title;
  let icon;

  switch (text) {
    case 'rating':
      title = `Rating: ${value}`;
      icon = <StarIcon fill="#D48166" width={18} height={18} />;
      break;
    case 'price_category':
      title = `Price Category: ${value}`;
      icon = <BankIcon fill="#D48166" width={18} height={18} />;
      break;
    case 'distance_to_venue':
      title = `Distance To Venue: ${value} m`;
      icon = <RoadIcon fill="#D48166" width={18} height={18} />;
      break;
    case 'free_parking':
      title = 'Free Parking';
      icon = <ParkingIcon fill="#D48166" width={18} height={18} />;
      break;
    case 'free_wifi':
      title = 'Free Wifi';
      icon = <WifiIcon fill="#D48166" width={18} height={18} />;
      break;
    case 'pets':
      title = 'Pets are allowed';
      icon = <PetIcon fill="#D48166" width={18} height={18} />;
      break;
    case 'restaurant':
      title = 'Restaurant';
      icon = <ResturantIcon fill="#D48166" width={18} height={18} />;
      break;
    case 'gym':
      title = 'Free Gym';
      icon = <GymIcon fill="#D48166" width={18} height={18} />;
      break;
    case 'pool':
      title = 'Free Swimming Pool';
      icon = <PoolIcon fill="#D48166" width={18} height={18} />;
      break;
    case 'spa':
      title = 'Convenient Spa';
      icon = <SpaIcon fill="#D48166" width={18} height={18} />;
      break;

    default:
      title = 'Default';
      icon = <RoadIcon fill="#D48166" width={18} height={18} />;
  }

  return (
    <div className={style.items}>
      {icon}
      <span>
        {title}
      </span>
    </div>
  );
};

Icon.defaultProps = {
  value: '',
};

export default Icon;
