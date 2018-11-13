import React from 'react';

export default function List(props) {
  console.log(props);

  return (

    <React.Fragment>
      <td>{props.display_name}</td>
      <td>{props.email_address}</td>
      <td>{props.title}</td>
    </React.Fragment>
  )
}