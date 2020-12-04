import React from "react";

declare module "react" {
  type FCX<P = Record<string, unknown>> = React.FunctionComponent<P & { className?: string }>;
}
