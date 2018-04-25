import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { addTodo } from '../actions'

import AddTodo from '../components/AddTodo'

class AddTodoContainer extends Component {
  handleAddTodoClick = (value) => {
    const { dispatch } = this.props
    dispatch(addTodo(value))
  }

  render () {
    return (
      <AddTodo
        onAddTodoClick={this.handleAddTodoClick}
      />
    )
  }
}

AddTodoContainer.propTypes = {
  dispatch: PropTypes.func.isRequired
}

export default connect()(AddTodoContainer)
