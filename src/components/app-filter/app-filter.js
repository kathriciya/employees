import React from 'react';
import cn from 'classnames';
import s from './app-filter.module.scss';

const AppFilter = ({ filter, onFilterSelect }) => {
  const buttonsData = [
    { name: 'all', label: 'All' },
    { name: 'rise', label: 'Risе' },
    { name: 'moreThen1000', label: 'More then 1000 $' },
  ];

  const buttons = buttonsData.map(({ name, label }) => {
    const active = filter === name;
    const clazz = active ? 'btn-light' : 'btn-outline-light';
    return (
      <button
        type='button'
        className={cn(`btn ${clazz}`, s.button)}
        key={name}
        onClick={() => onFilterSelect(name)}
      >
        {label}
      </button>
    );
  });

  return <div className={s.btn_group}>{buttons}</div>;
};

export default AppFilter;
