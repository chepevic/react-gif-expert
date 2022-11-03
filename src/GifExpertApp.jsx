import { useState } from "react";
import { GifGrid, AddCategory } from "./components";

const GifExpertApp = () => {
  const [categories, setCategories] = useState(["One Puch"]);
  return (
    <>
      <div className="container">
        <h1>Gif Expert App</h1>
        <AddCategory setCategories={setCategories} categories={categories} />
        {categories.map((category) => (
          <GifGrid key={category} category={category} />
        ))}
      </div>
    </>
  );
};
export default GifExpertApp;
