

interface IImage {
  url: string;
  size: { width: number; height: number };
}
interface IProduct {
  id: string;
  name: string;
  price: number;
  description: string;
  image: IImage;
}
interface IBackpack<Variable> {
  id: string;
  product: Variable;
  quantity: number;
}

interface Apple extends IProduct {}

const Iphones: IBackpack<Apple> = {
  id: "1",
  product: {
    id: "1",
    name: "iPhone X",
    price: 20000,
    description: "A cool and expensive phone",
    image: { url: "/iphoneX", size: { width: 200, height: 300 } },
  },
  quantity: 200,
};
