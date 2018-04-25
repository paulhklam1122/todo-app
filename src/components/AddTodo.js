import React from 'react'
import PropTypes from 'prop-types'

const AddTodo = ({ onAddTodoClick }) => {
  let input

  return (
    <div>
      <input
        ref={(node) => {
          input = node
        }}
      />
      <button
        onClick={() => onAddTodoClick(input.value)}
      >
        Add Todo
      </button>
    </div>
  )
}
AddTodo.propTypes = {
  onAddTodoClick: PropTypes.func.isRequired
}

export default AddTodo
