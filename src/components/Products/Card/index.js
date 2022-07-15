import { Link } from "react-router-dom";
import "./styles.scss";

export function Card(props) {
    return (
        <Link to={`/product/${props.id}`} className="container" id={props.id}>
            <figure className="product">
                <img src={props.image} alt={props.title} />
                <figcaption>{props.title}</figcaption>
            </figure>
            <span className="price">$ {props.price}</span>
            <span className="category">{props.category}</span>
        </Link>
    );
}
