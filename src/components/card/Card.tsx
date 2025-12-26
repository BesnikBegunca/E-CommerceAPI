import { useEffect, useState } from "react";
import axios from "axios";; // import type
import "./card.css";
import type { Product } from "../../models/Product";

function Card() {
    const [products, setProducts] = useState<Product[]>([]); // ✅ typed state

    const fetchData = async () => {
        try {
            const res = await axios.get<Product[]>("http://localhost:5103/api/Product");
            setProducts(res.data);
            console.log("Products fetched:", res.data); // ✅ data e saktë
        } catch (error) {
            console.error("Error fetching data:", error);
            setProducts([]);
        }
    };


    useEffect(() => {
        fetchData();
        console.log(products);
    }, [products]);

    return (
        <div className="all-cards">
            {products.map((product) => (
                <div className="card-container" key={product.id}>
                    <div className="card-image">
                        <img src={product.imagePath || "./src/assets/iphone11.png"} alt={product.name} />
                    </div>
                    <div className="card-desc">
                        <h3>{product.name}</h3>
                        <p>{product.description}</p>
                        <small>Brand: {product.brand?.brandName}</small>
                        <small>Category: {product.category?.categoryName}</small>
                    </div>
                </div>
            ))}
        </div>
    );
}
export default Card;
