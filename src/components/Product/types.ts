type TProductParams = {
  name: string;
  value: string;
};

export interface IProduct {
  id: number;
  availability: boolean;
  code: number;
  imgUrl: string;
  inFav: boolean;
  params: TProductParams[];
  price: number;
  rating: number;
  title: string;
}
