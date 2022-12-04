import style from '../../../App.module.scss'
import cx from 'classnames'
import { IValues } from '../../../App'

interface IStep4SummaryProps {
  getValues: () => IValues
}

export const Step4Summary = ({ getValues }: IStep4SummaryProps) => {
  const capitalizeFirstLetter = (string: string) => {
    return string.charAt(0).toUpperCase() + string.slice(1)
  }

  return (
    <div className={cx(style.step4)}>
      <div className={style.stepTitle}>Summary</div>

      <div className={style.info}>
        <div className={style.summaryLabel}>Name: </div>
        <div className={style.summaryValue}>{getValues().name}</div>
      </div>
      <div className={style.info}>
        <div className={style.summaryLabel}>Email:</div>
        <div className={style.summaryValue}>{getValues().email}</div>
      </div>
      <div className={style.info}>
        <div className={style.summaryLabel}>Age:</div>
        <div className={style.summaryValue}>{getValues().age}</div>
      </div>
      <div className={style.info}>
        <div className={style.summaryLabel}>Gender:</div>
        <div className={style.summaryValue}>
          {capitalizeFirstLetter(getValues().gender)}
        </div>
      </div>
      <div className={style.info}>
        <div className={style.summaryLabel}>Favorite book:</div>
        <div className={style.summaryValue}>{getValues().favoriteBook}</div>
      </div>
      <div className={style.info}>
        <div className={style.summaryLabel}>Favorite colors:</div>
        <div className={style.summaryValue}>
          {getValues().favoriteColors.map((color, index) => {
            const renderComma =
              getValues().favoriteColors.length > index + 1 ? ', ' : ''
            return `${capitalizeFirstLetter(color)}${renderComma}`
          })}
        </div>
      </div>
    </div>
  )
}
