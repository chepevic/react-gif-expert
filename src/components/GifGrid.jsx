import {GifItem} from "./GifItem";
import useFetchGifs from "../hooks/useFetchGifs";

export const GifGrid = ({ category }) => {
  const { isLoading, images } = useFetchGifs(category);

  return (
    <>
      {isLoading ? (
        <h2>Loading.....</h2>
      ) : 
        <>
          <h3>{category}</h3>
      
          <div className="card-grid">
            {images.map(({ id, title, url }) => (
              <GifItem key={id} title={title} url={url} />
            ))}
          </div>
        </>
      }
    </>
  );
};
