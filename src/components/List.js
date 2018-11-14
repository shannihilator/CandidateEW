import React from 'react';

const List = (props) => {
  return (
    <React.Fragment>
      <td>{props.display_name}</td>
      <td>{props.email_address}</td>
      <td>{props.title}</td>
    </React.Fragment>
  )
}

export default List;