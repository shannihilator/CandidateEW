import React from 'react';

const Frequency = (props) => {
  let obj = props.frequency
  let count = Object.keys(obj).map(function(key, index) {
      return (
        <tr key={index}>
          <td>{key}</td>
          <td>{obj[key]}</td>
        </tr>

        );
  })

  return (
    <table>
      <thead>
        <tr>
          <th>Character</th>
          <th>Count</th>
        </tr>
      </thead>
      <tbody>
        {count}
      </tbody>
    </table>
  )

}

export default Frequency;