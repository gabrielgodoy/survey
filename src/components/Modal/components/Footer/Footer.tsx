import { Button } from '@mui/material'
import cx from 'classnames'
import style from './Footer.module.scss'

interface IFooterProps {
  currentStep: number
  changeStep: (direction: 'prev' | 'next') => void
  submitData: () => void
  isValid: boolean
}

export const Footer = ({
  changeStep,
  currentStep,
  isValid,
  submitData,
}: IFooterProps) => {
  return (
    <div className={style.footer}>
      <button
        className={cx(style.navButton, {
          [style.disabled]: currentStep === 1 || !isValid,
        })}
        onClick={() => changeStep('prev')}
      >
        &lt; Previous
      </button>

      {currentStep === 4 && (
        <Button variant="contained" onClick={submitData}>
          Submit
        </Button>
      )}

      <button
        className={cx(style.navButton, {
          [style.disabled]: currentStep === 4 || !isValid,
        })}
        onClick={() => changeStep('next')}
      >
        Next &gt;
      </button>
    </div>
  )
}
