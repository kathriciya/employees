import React from 'react';
import s from './app-info.module.scss';

const AppInfo = ({ employees, increased }) => {
  return (
    <div className={s.app_info}>
      <h1>The Company N</h1>
      <h2>
        Total Number of Employees: <b>{employees}</b>
      </h2>
      <h2 className={s.title_cash}>
        Cash Bonuses will be awarded to: <b>{increased}</b>
      </h2>
    </div>
  );
};

export default AppInfo;
