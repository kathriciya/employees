import React, { useState } from 'react';
import EmployeesList from '../employees-list/employees-list';
import cn from 'classnames';
import s from './app.module.scss';

const App = () => {
  const [data, setData] = useState([
    { id: 1, name: 'John C.', salary: 1000 },
    { id: 2, name: 'Alex M.', salary: 2000 },
    { id: 3, name: 'Carl W.', salary: 2500 },
  ]);
  return (
    <div className={cn('container', s.app)}>
      <h1>Employees</h1>
      <EmployeesList data={data} />
    </div>
  );
};
export default App;
