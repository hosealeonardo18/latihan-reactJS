import React from 'react';

const List = ({ dataList }) => {
  return (
    <ul>
      {dataList.map((item) => {
        return <li>{item}</li>;
      })}
    </ul>
  );
};

export default List;
