import axios from "axios";
import { useState } from "react";
import "./category.css"

export default function AddCategory() {

    const [categoryName, setCategoryName] = useState<string>("");

    async function handleSubmit(event: React.FormEvent) {
        event.preventDefault();
        await axios.post("http://localhost:5103/api/Category", {
            categoryName: categoryName
        });
    }

    return (

        <form onSubmit={handleSubmit} className="category-form">
            <input
                type="text"
                value={categoryName}
                onChange={(e) => setCategoryName(e.target.value)}
                placeholder="Shkruaj emrin e kategorisë"
                required
            />
            <button type="submit" className="category-button">Create</button>
        </form>

    )

}