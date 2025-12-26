import axios from "axios";
import type { Category } from "../../models/Caregory";
import { useEffect, useState } from "react";
import './category.css'
import { href } from "react-router-dom";

export default function CategoryList() {
    const [categories, setCategories] = useState<Category[]>([]);
    const [newCategory, setNewCategory] = useState("");

    // Fetch all categories
    const fetchData = async () => {
        try {
            const res = await axios.get<Category[]>("http://localhost:5103/api/Category");
            setCategories(res.data);
            console.log("Categories fetched:", res.data);
        } catch (error) {
            console.error("Error fetching categories:", error);
            setCategories([]);
        }
    };

    // Delete category by id
    const deleteCategory = async (id: number) => {
        try {
            await axios.delete(`http://localhost:5103/api/Category/${id}`);
            fetchData();
        } catch (error) {
            console.error("Error deleting category:", error);
        }
    };


    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div className="category-container">
            <h2>Kategoritë:</h2>
            <table>
                <thead>
                    <tr>
                        <th>Category Name</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {categories.map(category => (
                        <tr key={category.id}>
                            <td>{category.categoryName}</td>
                            <td>
                                <button className="category-button">Edit</button>
                                <button className="category-button" onClick={() => deleteCategory(category.id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <a href="/Category/Create">
                <button className="category-button">Create</button>
            </a>



        </div>
    );
}
