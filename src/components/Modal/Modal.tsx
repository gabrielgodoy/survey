import { faTimes } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  Dialog,
  DialogContent,
  DialogProps,
  DialogTitle,
  Slide,
} from '@mui/material'

import { CSSProperties } from 'react'

import { ContainedLoading } from '../Loading'
import style from './Modal.module.scss'

interface IModalExtraProps {
  title?: string | JSX.Element
  footer?: string | JSX.Element
  hasCloseIcon?: boolean
  dataTestId?: string
  minWidth?: number | string
  width?: string
  maxWidth?: number | string
  height?: string
  maxHeight?: string
  isLoading?: boolean
  customStyle?: CSSProperties
}

export type Props = Omit<DialogProps, 'maxWidth' | 'title'> & IModalExtraProps

export function Modal({
  title,
  children,
  footer,
  open,
  onClose,
  isLoading = false,
  hasCloseIcon = true,
  dataTestId,
  className,
  fullWidth,
  minWidth = 200,
  width,
  maxWidth,
  height,
  maxHeight,
  hideBackdrop,
  customStyle,
  ...restProps
}: Props) {
  return (
    <Dialog
      open={open}
      fullWidth={fullWidth}
      maxWidth={false}
      className={className}
      onClose={onClose}
      hideBackdrop={hideBackdrop}
      data-test-id={dataTestId || 'modal'}
      PaperProps={{
        style: {
          background: '#363636',
          color: '#f2f2f2',
          minWidth,
          maxWidth,
          width,
          height,
          maxHeight,
          ...customStyle,
        },
      }}
      sx={{
        fontSize: '14px',
        zIndex: 1000,
        ...(!hideBackdrop && open && { backdropFilter: 'blur(3px)' }),
      }}
      TransitionComponent={Slide}
      {...restProps}
    >
      {hasCloseIcon && (
        <FontAwesomeIcon
          icon={faTimes}
          className={`close-modal ${style.close}`}
          onClick={onClose as () => void}
          data-testid="close-modal"
        />
      )}

      {title && (
        <DialogTitle
          sx={{
            fontWeight: 'bold',
            fontSize: '16px',
            padding: '0.7rem 0.8rem 0.7rem',
            ...(hasCloseIcon && { paddingRight: '42px' }),
          }}
        >
          {title}
        </DialogTitle>
      )}

      <DialogContent
        sx={{
          padding: '0.8rem',
          ...(!title && hasCloseIcon && { paddingTop: '45px' }),
          ...(footer && { paddingBottom: 0 }),
        }}
      >
        {isLoading ? (
          <div
            style={{
              minHeight: '70px',
              height: '100%',
              position: 'relative',
            }}
          >
            <ContainedLoading centered />
          </div>
        ) : (
          children
        )}
      </DialogContent>

      {footer && <div style={{ padding: '0.8rem' }}>{footer}</div>}
    </Dialog>
  )
}
