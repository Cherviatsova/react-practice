import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeFilter } from 'redux/contacts/filter-slice';
import { Label, Input } from './Filter.styled';
import { getFilter } from 'redux/contacts/contacts-selectors';

function Filter() {
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);

  return (
    <Label>
      Find contacts by name
      <Input
        type="text"
        name="filter"
        value={filter}
        onChange={e => dispatch(changeFilter(e.currentTarget.value))}
      />
    </Label>
  );
}

export default Filter;
