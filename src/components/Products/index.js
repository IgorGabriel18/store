import { useEffect } from "react";
import { getAllProducts } from "../../services";
import { setProducts } from "../../store/actions";
import { useDispatch, useSelector } from "react-redux";
import { Card } from "./Card";
import "./styles.scss";

export function Products() {
    const products = useSelector((state) => state.allProducts.products);
    const dispatch = useDispatch();

    useEffect(() => {
        getAllProducts().then((res) => dispatch(setProducts(res)));
    }, []);

    console.log("Products :", products);

    return (
        <main>
            <ul>
                {products.map((item) => {
                    return (
                        <Card
                            id={item.id}
                            image={item.image}
                            title={item.title}
                            price={item.price}
                            category={item.category}
                        />
                    );
                })}
            </ul>
        </main>
    );
}
