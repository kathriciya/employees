import React, { useState } from 'react';
import cn from 'classnames';
import EmployeesList from '../employees-list/employees-list';
import EmployeesForm from '../employees-form/employees-form';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import AppInfo from '../app-info/app-info';
import s from './app.module.scss';

const MIN = 10;
const MAX = 100;
const EMPLOYEES = [
  { name: 'John C.', salary: 1000, increase: false, rise: true, id: 1 },
  { name: 'Alex M.', salary: 2000, increase: true, rise: false, id: 2 },
  { name: 'Carl W.', salary: 2500, increase: false, rise: false, id: 3 },
  { name: 'Alexander Y.', salary: 3500, increase: false, rise: false, id: 4 },
];

const App = () => {
  const [data, setData] = useState(EMPLOYEES);
  const [term, setTerm] = useState('');
  const [filter, setFilter] = useState('all');
  const [isEditing, setIsEditing] = useState(false);
  const [nameEdit, setNameEdit] = useState('');
  const [salaryEdit, setSalaryEdit] = useState('');
  const [stateId, setStateId] = useState(null);

  const deleteItem = (id) => {
    setData((data) => data.filter((item) => item.id !== id));
  };

  function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }

  const onToggleProp = (id, prop) => {
    setData((data) =>
      data.map((item) => {
        if (item.id === id) {
          return { ...item, [prop]: !item[prop] };
        }
        return item;
      })
    );
  };

  const searchEmp = (items, term) => {
    if (term.length === 0) {
      return items;
    }

    const value = term.toLowerCase();
    return items.filter((item) => {
      return item.name.toLowerCase().startsWith(value);
    });
  };

  const onUpdateSearch = (term) => {
    setTerm(term);
  };

  const addItem = (name, salary) => {
    const newItem = {
      name,
      salary,
      increase: false,
      rise: false,
      id: getRandomInt(MIN, MAX),
    };
    const newArr = [...data, newItem];
    setData(newArr);
  };

  const changeStateEdit = (id) => {
    setIsEditing(!isEditing);
    const newItem = data.find((item) => item.id === id);
    setNameEdit(newItem.name);
    setSalaryEdit(newItem.salary);
    setStateId(id);
  };

  const editItem = (name, salary) => {
    setData((data) =>
      data.map((item) => {
        if (item.id === stateId) {
          return { ...item, name: name, salary: salary };
        }
        return item;
      })
    );
  };

  const filterPost = (items, filter) => {
    switch (filter) {
      case 'rise':
        return items.filter((item) => item.rise);
      case 'moreThen1000':
        return items.filter((item) => item.salary > 1000);
      default:
        return items;
    }
  };

  const onFilterSelect = (filter) => {
    setFilter(filter);
  };

  const employees = data.length;
  const increased = data.filter((item) => item.increase).length;
  const visibleEmployees = filterPost(searchEmp(data, term), filter);

  return (
    <div className={cn('container', s.app)}>
      <AppInfo employees={employees} increased={increased} />
      <div className={s.search}>
        <SearchPanel onUpdateSearch={onUpdateSearch} />
        <AppFilter filter={filter} onFilterSelect={onFilterSelect} />
      </div>
      <EmployeesList
        data={visibleEmployees}
        onDelete={deleteItem}
        onToggleProp={onToggleProp}
        changeStateEdit={changeStateEdit}
      />
      <EmployeesForm
        onAdd={addItem}
        isEditing={isEditing}
        onEdit={editItem}
        nameEdit={nameEdit}
        setNameEdit={setNameEdit}
        salaryEdit={salaryEdit}
        setSalaryEdit={setSalaryEdit}
        setIsEditing={setIsEditing}
      />
    </div>
  );
};
export default App;
