import React from 'react'
import AddTodoContainer from '../containers/AddTodoContainer'
import VisibleTodoListContainer from '../containers/VisibleTodoListContainer'
import Footer from './Footer'

const App = () => (
  <div>
    <AddTodoContainer />
    <VisibleTodoListContainer />
    <Footer />
  </div>
)

export default App
