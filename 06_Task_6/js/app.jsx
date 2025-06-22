import React from "react";
import { createRoot } from "react-dom/client";

import animalData from './data/animals'
import productData from './data/products' //export defaultních dat

function Animal({name, type, age}) {
    return (
        <li>
            <h3>{name}</h3>
            <p>Type: {type}</p>
            <p>Vek: {age} let</p>
        </li>
    )
}
function AnimalList({animals}) {
    return (
        <div>
            <h2>Seznam zvířat</h2>
            <ul>
                {
                    animals.map(animal => <Animal
                            key={animal.id}
                            name={animal.name}
                            type={animal.type}
                            age={animal.age}
                        />
                    )
                }
            </ul>
        </div>
    )
}


//pro produkty

function Product({name, price}) {
    return (
        <li>
            <h3>{name}</h3>
            <p>Cena: {price} Kč</p>
        </li>
    )
}

function ProductList({products}) {
    return(
        <div>
            <h2>Seznam produktů</h2>
            <ul>
                {
                    products.map(product => {
                        return <Product
                            key={product.id}
                            name={product.name}
                            price={product.price}
                        />
                    })
                }
            </ul>
        </div>
    )
}



function App() {
    return (
        <>
            <AnimalList animals={animalData} />
            <ProductList products={productData} />
        </>
    )
}




/**
 * Do not modify the code below!
 */
const container = document.getElementById("app");
const root = createRoot(container);
root.render(<App />);