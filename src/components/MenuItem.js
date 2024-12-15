import React from 'react';

function MenuItem({ link, label }) {
  return (
    <li>
      <a href={link}>{label}</a>
    </li>
  );
}

export default MenuItem;
