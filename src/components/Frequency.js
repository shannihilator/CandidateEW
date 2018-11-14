import React from 'react';

const Frequency = (props) => {
  // let char;
  // let count;
  let obj = props.frequency
  // for(let key in obj){
  //   count = `${key}: ${obj[key]}`
    // char = key;
    // count = obj[key];
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