let nextTaskId = 0

export const addTask = content => ({
  type: 'addTask',
  id: nextTaskId++,
  content
})

export const setVisibilityFilter = filter => ({
  type: 'setVisibilityFilter',
  filter
})

export const toggleTodo = id => ({
  type: 'toggleTask',
  id
})

export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE'
}
