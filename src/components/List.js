import React from 'react';

export default function List(props) {
  console.log(props);

  return (
    <div>
      <ul>
        <li>{props.display_name}</li>
        <li>{props.email_address}</li>
        <li>{props.title}</li>
      </ul>
    </div>
  )
}