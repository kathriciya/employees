import React from 'react';
import EmployeesItem from '../employees-item/employees-item';

const EmployeesList = ({ data, onDelete, onToggleProp, changeStateEdit }) => {
  const elements = data.map((item) => {
    const { id, ...itemProps } = item;
    return (
      <EmployeesItem
        key={id}
        {...itemProps}
        onDelete={() => onDelete(id)}
        onToggleProp={(e) =>
          onToggleProp(id, e.currentTarget.getAttribute('data-toggle'))
        }
        changeStateEdit={() => changeStateEdit(id)}
      />
    );
  });
  return <ul className='list-group'>{elements}</ul>;
};

export default EmployeesList;
