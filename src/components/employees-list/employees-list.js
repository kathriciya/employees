import React from 'react';
import EmployeesItem from '../employees-item/employees-item';

const EmployeesList = ({ data }) => {
  const elements = data.map((item) => {
    const { id, ...itemProps } = item;
    return <EmployeesItem key={id} {...itemProps} />;
  });
  return <ul className='list-group'>{elements}</ul>;
};

export default EmployeesList;
