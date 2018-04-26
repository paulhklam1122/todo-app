import React from 'react'
import AddTodoContainer from '../containers/AddTodoContainer'
import VisibleTodoListContainer from '../containers/VisibleTodoListContainer'
import Footer from './Footer'

const getStyles = () => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    maxWidth: '50%',
    border: '1px solid grey',
    backgroundColor: 'lightgrey',
    marginLeft: 'auto',
    marginRight: 'auto'
  }
})

const App = () => {
  const styles = getStyles()

  return (
    <div style={styles.root}>
      <AddTodoContainer />
      <VisibleTodoListContainer />
      <Footer />
    </div>
  )
}

export default App
