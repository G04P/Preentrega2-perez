import { Link } from "react-router-dom";

export const Item = ({ id, name, description, img }) => {
  return (
    <div className=" border m-2">
      <div className="card">
        <div className="card-body ">
          <h5 className="card-tittle">{name}</h5>
          <div className=" card-image-top">
            <img src={img} alt="" variant={""} />
          </div>
          <p className="card-text">{description}</p>
          <Link to={`/Item/${id}`}>
            <button className="btn btn-outline-success">Detalles</button>
          </Link>
        </div>
      </div>
    </div>
  );
};
