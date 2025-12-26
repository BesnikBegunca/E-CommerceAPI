import React from 'react';
import Navbar from '../../components/navbar/Navbar';
import Card from '../../components/card/Card';
import CategoryList from '../../components/category/CategoryList';

export default function Home() {
    return (
        <div >
            <Navbar />
            <Card />
            <CategoryList />
        </div>
    );
}
