import * as React from "react";

export interface ButtonProps {
  upper?: boolean;
  large?: boolean;
  children?: React.ReactNode;
  background?: ColorProps;
}

export interface ColorProps {
  primary?: string;
  secondary?: string;
  default?: string;
  gradient?: string;
  bg?: string;
  danger?: string;
}

export interface HeaderProps {
  fixed?: boolean;
}

export interface Products {
  id?: number;
  title?: string;
  price?: number;
  picture?: string;
  description?: string;
  memory?: string;
  brand?: string;
  chipType?: string;
  quantity?: number;
}
