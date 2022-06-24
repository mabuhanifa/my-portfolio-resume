import { useParams } from "react-router-dom";

const Item = () => {
  const { id } = useParams();

  return (
    <div className="text-white">
      <h1>{items?.name}</h1>
    </div>
  );
};

export default Item;
