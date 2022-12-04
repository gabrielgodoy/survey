import { useState } from 'react'
import { Modal } from './components/Modal/Modal'
import style from './App.module.scss'
import { Footer } from './components/Modal/components/Footer/Footer'

import { useForm } from 'react-hook-form'
import { Step1Identity } from './components/Form/Step1Identity/Step1Identity'
import { Step2Details } from './components/Form/Step2Details/Step2Details'
import { Step3Favorites } from './components/Form/Step3Favorites/Step3Favorites'
import { Step4Summary } from './components/Form/Step4Summary/Step4Summary'

export interface IValues {
  name: string
  email: string
  age: string
  gender: string
  favoriteBook: string
  favoriteColors: never[]
}

function App() {
  const [currentStep, setCurrentStep] = useState(1)
  const [isOpen, setIsOpen] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const {
    control,
    handleSubmit,
    formState: { errors, isValid },
    getValues,
  } = useForm({
    mode: 'all',
    defaultValues: {
      name: '',
      email: '',
      age: '',
      gender: '',
      favoriteBook: '',
      favoriteColors: [],
    },
  })

  const openModal = () => {
    if (!isSubmitted) {
      setIsOpen(true)
    }
  }

  const changeStep = (direction: 'prev' | 'next') => {
    const totalSteps = 4
    const isPrevious = direction === 'prev'
    let newStep = isPrevious ? currentStep - 1 : currentStep + 1

    handleSubmit(
      () => {},
      (errors) => {
        if (errors) {
          return
        }
      }
    )()

    if (newStep === totalSteps + 1) {
      newStep = 4
    } else if (newStep === 0) {
      newStep = 1
    }
    if (isValid) {
      setCurrentStep(newStep)
    }
  }

  const submitData = () => {
    handleSubmit(
      () => {
        setIsOpen(false)
        setIsSubmitted(true)
      },
      (errors) => {
        if (errors) {
          return
        }
      }
    )()
  }

  const handleClose = () => {
    setIsOpen(false)
  }

  return (
    <div className="App">
      <Modal
        open={isOpen}
        maxWidth={650}
        minHeight={350}
        title="Survey"
        fullWidth
        onClose={handleClose}
        footer={
          <Footer
            isValid={isValid}
            currentStep={currentStep}
            changeStep={changeStep}
            submitData={submitData}
          />
        }
      >
        <form className={`${style.form} ${style['formStep' + currentStep]}`}>
          <Step1Identity currentStep={currentStep} control={control} />
          <Step2Details
            currentStep={currentStep}
            control={control}
            errors={errors}
          />
          <Step3Favorites
            currentStep={currentStep}
            control={control}
            errors={errors}
          />
          <Step4Summary getValues={getValues} />
        </form>
      </Modal>
      <div style={{ textAlign: 'center' }}>
        <button className="modal-survey" onClick={openModal}>
          Open modal
        </button>
      </div>
    </div>
  )
}

export default App
