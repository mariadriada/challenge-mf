export type ItemProps = {
  gender: string;
  id: number;
  image: string;
  name: string;
  species: string;
  status?: string;
  house?: string;
  t?: Function;
};

export type ListProps = {
  list: Array<ItemProps>;
};
