import { useState } from 'react'
import './App.css'
import { Modal } from './components/Modal/Modal'

function App() {
  const [isOpen, setIsOpen] = useState(false)

  const openModal = () => {
    setIsOpen(true)
  }

  return (
    <div className="App">
      <Modal open={isOpen} onClose={() => setIsOpen(false)} />
      <button onClick={openModal}>Open modal</button>
    </div>
  )
}

export default App
