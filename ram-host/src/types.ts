export type ItemProps = {
  gender: string;
  id: number;
  image: string;
  name: string;
  species: string;
  status: string;
  url: string;
};

export type ListProps = {
  list: Array<ItemProps>;
};
