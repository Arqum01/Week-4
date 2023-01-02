import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import LifeCycleMethod from './Components/LifecycleMethod/LifeCycleMethod'
import Hero from './Components/ErrorBoundaries/Hero'
import ErrorBoundary from './Components/ErrorBoundaries/ErrorBoundary'
import ControlledForm from './Components/Form/ControlledForm'
import UncontrolledForm from './Components/Form/UncontrolledForm'

function App() {
  const [count, setCount] = useState(0)

  return (

    <div className="App">
      
      <LifeCycleMethod/>
      <ErrorBoundary>
     <Hero/> 
     </ErrorBoundary>

     <ControlledForm/>
     <UncontrolledForm/>
     

    </div>
    
  )
}

export default App
