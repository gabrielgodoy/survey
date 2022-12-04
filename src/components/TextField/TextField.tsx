import { styled } from '@mui/material/styles'
import TextFieldMui, { TextFieldProps } from '@mui/material/TextField'

export type Props = TextFieldProps

const StyledTextField = styled(TextFieldMui)({
  '& input[disabled]': {
    backgroundColor: '#434343',
    borderColor: '#828282',
  },
})

export const TextField = ({
  defaultValue,
  disabled,
  error,
  fullWidth,
  label,
  required,
  size,
  type,
  value,
  variant,
  ...props
}: TextFieldProps) => {
  return (
    <StyledTextField
      defaultValue={defaultValue}
      disabled={disabled}
      error={error}
      fullWidth={fullWidth}
      label={label}
      required={required}
      size={size}
      type={type}
      value={value}
      variant={variant}
      {...props}
    />
  )
}
