export type LanguajeProps = {
  t?: Function;
  i18n?: {
    changeLanguage: Function;
  };
};

export type HeaderProps = {
  primary: boolean;
  t?: Function;
};

export type ButtonProps = {
  handleClick: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
};
