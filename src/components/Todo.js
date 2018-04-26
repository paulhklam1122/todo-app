import React from 'react'
import PropTypes from 'prop-types'

import Checkbox from 'material-ui/Checkbox'
import { ListItem, ListItemText } from 'material-ui/List'

const Todo = ({ classes, onClick, completed, text }) => (
  <ListItem>
    <Checkbox
      onChange={onClick}
      checked={completed}
    />
    <ListItemText primary={text} style={{marginTop: 0, textDecoration: completed ? 'line-through' : 'none'}} className='test' />
  </ListItem>
)

Todo.propTypes = {
  classes: PropTypes.object.isRequired,
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
}

export default Todo
