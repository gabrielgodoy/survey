import { Control, Controller, FieldErrorsImpl } from 'react-hook-form'
import style from '../../../App.module.scss'
import cx from 'classnames'
import {
  FormControl,
  FormControlLabel,
  FormHelperText,
  FormLabel,
  InputLabel,
  MenuItem,
  Radio,
  RadioGroup,
  Select,
} from '@mui/material'

interface IStep2DetailsProps {
  currentStep: number
  control: Control<any, any>
  errors: Partial<
    FieldErrorsImpl<{
      name: string
      email: string
      age: string
      gender: string
      favoriteBook: string
      favoriteColors: never[]
    }>
  >
}

export const Step2Details = ({
  currentStep,
  control,
  errors,
}: IStep2DetailsProps) => {
  const range = (start: number, end: number) => {
    const foo = []
    for (let i = start; i <= end; i++) {
      foo.push(i)
    }
    return foo
  }

  return (
    <div className={cx(style.step2)}>
      <div className={style.stepTitle}>Details</div>
      {currentStep === 2 && (
        <div className={style.inputs}>
          <div
            className={style.input}
            style={{
              width: '50%',
            }}
          >
            <Controller
              name="age"
              control={control}
              rules={{ required: true }}
              render={({ field }) => (
                <FormControl fullWidth error={!!errors.age}>
                  <InputLabel>Age</InputLabel>
                  <Select {...field} label="Age" fullWidth>
                    {range(18, 90).map((number) => {
                      return (
                        <MenuItem key={number} value={number}>
                          {number}
                        </MenuItem>
                      )
                    })}
                  </Select>
                  {errors.age && (
                    <FormHelperText>Age is required</FormHelperText>
                  )}
                </FormControl>
              )}
            />
          </div>
          <div
            className={style.input}
            style={{
              width: '50%',
            }}
          >
            <Controller
              name="gender"
              control={control}
              rules={{ required: true }}
              render={({ field }) => (
                <FormControl error={!!errors.gender}>
                  <FormLabel id="demo-radio-buttons-group-label" required>
                    Gender
                  </FormLabel>
                  <RadioGroup
                    {...field}
                    aria-labelledby="demo-radio-buttons-group-label"
                    name="radio-buttons-group"
                  >
                    <FormControlLabel
                      value="female"
                      control={<Radio />}
                      label="Female"
                    />
                    <FormControlLabel
                      value="male"
                      control={<Radio />}
                      label="Male"
                    />
                    <FormControlLabel
                      value="other"
                      control={<Radio />}
                      label="Other"
                    />
                  </RadioGroup>
                  {errors.gender && (
                    <FormHelperText>Age is required</FormHelperText>
                  )}
                </FormControl>
              )}
            />
          </div>
        </div>
      )}
    </div>
  )
}
