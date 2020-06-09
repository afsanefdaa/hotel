import React from 'react';
import classes from 'classnames';
import style from './style.module.scss';

const TruncateText = ({ text, className }) => (
  <div className={classes(style.module, style.lineClamp)}>
    <p className={className}>
      {text}
    </p>
  </div>
);

TruncateText.propTypes = {

};

export default TruncateText;
