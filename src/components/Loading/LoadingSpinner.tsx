import { CSSProperties } from "react";

import style from "./LoadingSpinner.module.scss";

export interface Props {
  size?: number | string;
  dataTestId?: string;
  customStyle?: CSSProperties;
}

export const LoadingSpinner = ({
  dataTestId,
  size = 38,
  customStyle,
}: Props) => {
  return (
    <div
      data-testid={dataTestId}
      className="spin"
      style={{
        ...customStyle,
      }}
    >
      <div
        className={`loading-spinner ${style.LoadingSpinner}`}
        style={{
          height: size,
          width: size,
        }}
      />
    </div>
  );
};
