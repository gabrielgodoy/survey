import { Control, Controller } from 'react-hook-form'
import style from '../../../App.module.scss'
import cx from 'classnames'
import { TextField } from '@mui/material'

interface IStep1IdentityProps {
  currentStep: number
  control: Control<any, any>
}

export const Step1Identity = ({
  currentStep,
  control,
}: IStep1IdentityProps) => {
  return (
    <div className={cx(style.step1)}>
      <div className={style.stepTitle}>Identity</div>
      {currentStep === 1 && (
        <>
          <div className={style.input}>
            <Controller
              name="name"
              control={control}
              render={({ field }) => (
                <TextField {...field} label="Name" fullWidth />
              )}
            />
          </div>
          <div className={style.input}>
            <Controller
              name="email"
              control={control}
              render={({ field }) => (
                <TextField {...field} label="Email" fullWidth />
              )}
            />
          </div>
        </>
      )}
    </div>
  )
}
