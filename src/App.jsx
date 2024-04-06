import { useState } from 'react'
import './App.css'

function FilterableProductTable() {
  const productsTest = [
    { category: "Fruits", price: "$1", stocked: true, name: "Apple" },
    { category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit" },
    { category: "Fruits", price: "$2", stocked: false, name: "Passionfruit" },
    { category: "Vegetables", price: "$2", stocked: true, name: "Spinach" },
    { category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin" },
    { category: "Vegetables", price: "$1", stocked: true, name: "Peas" }
  ];

  return (
    <>
      <ProductTable products={productsTest} />
    </>
  );
}

function ProductCategoryRow({ category }) {
  return (
    <div class="product-category-row">
      {category}
    </div>
  );
}

function ProductRow({ productName, price, stocked }) {
  return (
    <>
      <div class="product-row">
        <span>{productName}</span>
        <span>{price}</span>
      </div>
    </>
  );
}

function ProductTable({ products }) {
  let rows = [];

  let fruits = products.filter(p => p.category === "Fruits"); // vettore con solo frutta
  let vegetables = products.filter(p => p.category === "Vegetables"); // vettore con solo verdura

  rows.push(<ProductCategoryRow category={"Fruits"} />); // metti l'header frutta
  fruits.forEach(p => rows.push(<ProductRow productName={p.name} price={p.price} stocked={p.stocked} />)); // metti ogni frutto

  rows.push(<ProductCategoryRow category={"Vegetables"} />); // metti l'header verdura
  vegetables.forEach(p => rows.push(<ProductRow productName={p.name} price={p.price} stocked={p.stocked} />)); // metti ogni verdura

  return (
    <div class="product-table">
      <div class="product-table-header">
        <span>Name</span>
        <span>Price</span>
      </div>
      {rows}
    </div>
  );
}

export default FilterableProductTable