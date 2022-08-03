import React from 'react';
import cn from 'classnames';
import s from './employees-item.module.scss';

const EmployeesItem = (props) => {
  const { name, salary } = props;
  return (
    <li className='list-group-item d-flex justify-content-between align-items-center'>
      <span className='list-group-item-label'>{name}</span>
      <span className='list-group-item-label'>{salary} $</span>
      <div className='d-flex justify-content-center align-items-center'>
        <button type='button' className={s.button}>
          <i className={cn('fas fa-trash', s.btn_trash)}></i>
        </button>
      </div>
    </li>
  );
};

export default EmployeesItem;
