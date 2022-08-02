import { Key } from "react";
import CategoryItem from "../category-item/category-item";

import "./directory.scss";

export type DirectoryCategory = {
  id: Key;
  title: string;
  imageUrl: string;
  linkUrl: string;
};

const categories: DirectoryCategory[] = [
  {
    title: "HATS",
    imageUrl: "https://i.ibb.co/cvpntL1/hats.png",
    id: 1,
    linkUrl: "shop/hats",
  },
  {
    title: "JACKETS",
    imageUrl: "https://i.ibb.co/px2tCc3/jackets.png",
    id: 2,
    linkUrl: "shop/jackets",
  },
  {
    title: "SNEAKERS",
    imageUrl: "https://i.ibb.co/0jqHpnp/sneakers.png",
    id: 3,
    linkUrl: "shop/sneakers",
  },
  {
    title: "All WOMEN'S",
    imageUrl: "https://i.ibb.co/chBkt65/Women.jpg",
    id: 4,
    linkUrl: "shop/womens",
  },
  {
    title: "All MEN'S",
    imageUrl: "https://i.ibb.co/f2RqqvL/Men.jpg",
    id: 5,
    linkUrl: "shop/mens",
  },
];

const Directory = () => {
  return (
    <div className="directory-container">
      {categories.map((category) => (
        <CategoryItem key={category.id} category={category} />
      ))}
    </div>
  );
};

export default Directory;
