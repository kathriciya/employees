import React from 'react';
import cn from 'classnames';
import s from './employees-item.module.scss';

const EmployeesItem = (props) => {
  const {
    name,
    salary,
    onDelete,
    onToggleProp,
    rise,
    increase,
    changeStateEdit,
  } = props;

  let clazzNames =
    'list-group-item d-flex justify-content-between align-items-center';

  return (
    <li
      className={cn(clazzNames, {
        [s.increase]: increase,
        [s.like]: rise,
      })}
    >
      <span
        className={cn('list-group-item-label', s.name_label)}
        onClick={onToggleProp}
        data-toggle='rise'
      >
        {name}
      </span>
      <span className='list-group-item-label'>{salary} $</span>

      <div className='d-flex justify-content-center align-items-center'>
        <button
          type='button'
          className={s.button}
          onClick={onToggleProp}
          data-toggle='increase'
        >
          <i className={cn('fas fa-cookie', s.btn_cookie)}></i>
        </button>
        <button type='button' className={s.button} onClick={changeStateEdit}>
          <i className={cn('fas fa-pen-to-square', s.btn_edit)}></i>
        </button>
        <button type='button' className={s.button} onClick={onDelete}>
          <i className={cn('fas fa-trash', s.btn_trash)}></i>
        </button>
        <i className={cn('fas fa-star', s.btn_star)}></i>
      </div>
    </li>
  );
};

export default EmployeesItem;
