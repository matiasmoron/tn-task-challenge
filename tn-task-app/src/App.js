import { Route, Switch } from 'wouter'
import './App.scss'
import MyTasks from './pages/MyTasks'

function App () {
  return (
    <div className='App'>
      <Switch>
        <Route component={MyTasks} path='/'></Route>
      </Switch>
    </div>
  )
}

export default App
