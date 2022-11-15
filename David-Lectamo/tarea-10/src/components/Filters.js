import React from 'react'
import Filter from '../containers/Filter'
import { VisibilityFilters } from '../actions/actions'

const Filters = () => (
  <div className='addTaskcontainer'>
    <Filter filter={VisibilityFilters.SHOW_ALL}>All</Filter>
    <Filter filter={VisibilityFilters.SHOW_ACTIVE}> Active </Filter>
    <Filter filter={VisibilityFilters.SHOW_COMPLETED}> Completed </Filter>
  </div>
)

export default Filters
