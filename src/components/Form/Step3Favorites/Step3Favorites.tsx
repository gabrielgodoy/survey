import { Control, Controller, FieldErrorsImpl } from 'react-hook-form'
import style from '../../../App.module.scss'
import cx from 'classnames'
import {
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormHelperText,
  FormLabel,
  TextField,
} from '@mui/material'

interface IStep3FavoritesProps {
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

export const Step3Favorites = ({
  currentStep,
  control,
  errors,
}: IStep3FavoritesProps) => {
  const colorOptions = [
    {
      label: 'Blue',
      value: 'blue',
    },
    {
      label: 'Pink',
      value: 'pink',
    },
    {
      label: 'Green',
      value: 'green',
    },
    {
      label: 'Red',
      value: 'red',
    },
  ]

  return (
    <div className={cx(style.step3)}>
      <div className={style.stepTitle}>Favorites</div>
      {currentStep === 3 && (
        <div className={style.inputs}>
          <div className={style.input} style={{ width: '50%' }}>
            <Controller
              name="favoriteBook"
              control={control}
              rules={{ required: true }}
              render={({ field }) => (
                <TextField
                  {...field}
                  label="Favorite book"
                  required
                  fullWidth
                  error={!!errors.favoriteBook}
                  helperText={
                    errors.favoriteBook ? 'This field is required' : ''
                  }
                />
              )}
            />
          </div>
          <div className={style.input} style={{ width: '50%' }}>
            <FormControl error={!!errors.favoriteColors}>
              <FormLabel id="checkbox-buttons-group-label" required>
                Favorite colors
              </FormLabel>
              <FormGroup>
                <Controller
                  name="favoriteColors"
                  control={control}
                  rules={{ required: true }}
                  render={({ field }) => (
                    <>
                      {colorOptions.map((colorOption) => (
                        <FormControlLabel
                          key={colorOption.value}
                          label={colorOption.label}
                          control={
                            <Checkbox
                              value={colorOption.value}
                              checked={field.value.some(
                                (value: string) => value === colorOption.value
                              )}
                              onChange={(event, checked) => {
                                if (checked) {
                                  field.onChange([
                                    ...field.value,
                                    event.target.value,
                                  ])
                                } else {
                                  field.onChange(
                                    field.value.filter(
                                      (value: string) =>
                                        value !== event.target.value
                                    )
                                  )
                                }
                              }}
                            />
                          }
                        />
                      ))}
                    </>
                  )}
                />
              </FormGroup>
              {errors.favoriteColors && (
                <FormHelperText>Colors is required</FormHelperText>
              )}
            </FormControl>
          </div>
        </div>
      )}
    </div>
  )
}
