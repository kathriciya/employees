import React, { useState } from 'react';
import cn from 'classnames';
import s from './employees-form.module.scss';

const EmployeesForm = ({
  onAdd,
  isEditing,
  onEdit,
  nameEdit,
  salaryEdit,
  setNameEdit,
  setSalaryEdit,
  setIsEditing,
}) => {
  const [name, setName] = useState('');
  const [salary, setSalary] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    if (isEditing) {
      onEdit(nameEdit, salaryEdit);
      setNameEdit('');
      setSalaryEdit('');
      setIsEditing(false);
    } else {
      if (name.length < 3 || !salary) return;
      onAdd(name, Number(salary));
      setName('');
      setSalary('');
    }
  };

  return (
    <div className={s.app_form}>
      <h3>{isEditing ? 'Update an employee' : 'Add a new employee'}</h3>
      <form className={cn('d-flex', s.form)} onSubmit={onSubmit}>
        <input
          type='text'
          name='name'
          value={isEditing ? nameEdit : name}
          className='form-control new-post-label'
          placeholder='Name'
          onChange={
            isEditing
              ? (e) => setNameEdit(e.target.value)
              : (e) => setName(e.target.value)
          }
        />
        <input
          type='number'
          name='salary'
          value={isEditing ? salaryEdit : salary}
          className='form-control new-post-label'
          placeholder='Salary'
          onChange={
            isEditing
              ? (e) => setSalaryEdit(e.target.value)
              : (e) => setSalary(e.target.value)
          }
        />

        <button type='submit' className='btn btn-outline-light'>
          {isEditing ? 'Update' : 'Add'}
        </button>
      </form>
    </div>
  );
};

export default EmployeesForm;
