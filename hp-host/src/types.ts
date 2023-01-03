export type ItemProps = {
  gender: string;
  name: string;
  species: string;
  status: string;
  image: string;
  house: string;
  t?: Function;
};

export type ListProps = {
  list: Array<ItemProps>;
};
