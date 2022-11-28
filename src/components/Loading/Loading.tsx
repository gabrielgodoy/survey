import "./Loading.scss";

import { CSSProperties } from "react";

import { LoadingSpinner } from "./LoadingSpinner";

export const Loading = ({ showBackdrop = false }) => {
  return (
    <div
      className="loading-backdrop show"
      style={{ ...(!showBackdrop && { backgroundColor: "transparent" }) }}
    >
      <LoadingSpinner dataTestId="global-loading" />
    </div>
  );
};

export type ContainedLoadingProps = {
  maxWidth?: string;
  topValue?: string;
  position?: "static" | "relative" | "absolute" | "sticky" | "fixed";
  style?: CSSProperties;
  size?: number;
  centered?: boolean;
};

export const ContainedLoading = ({
  topValue = "50%",
  position = "relative",
  style,
  size,
  centered = false,
}: ContainedLoadingProps) => {
  return (
    <div
      className="loading-contained"
      style={{
        display: "flex",
        alignSelf: "center",
        alignItems: "center",
        justifyContent: "center",
        flexGrow: 1,
        top: topValue,
        position: centered ? "absolute" : position,
        ...(size && { width: size }),
        ...style,
        ...(centered && {
          left: "50%",
          transform: "translate(-50%, -50%)",
        }),
      }}
    >
      <LoadingSpinner size={size} dataTestId="contained-loading" />
    </div>
  );
};
