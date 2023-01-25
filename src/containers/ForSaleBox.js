import React from "react";
import ForSaleList from "../components/ForSaleList";
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';

const ForSaleBox = () => {
    const [listOfBooks, setListOfBooks] = useState ([
        {title: "Fight Club", author: "Chuck Palanyk", price: 10}, 
        {title: "The Midnight Library", author: "Matt Haig", price: 5},
        {title: "Johnatan Livingstone Seagull", author: "Richard Bach", price: 8},
        {title: "The Thursday Murder Club", author: "Richard Osman", price: 7}
    ])

    const [basket, setBasket] = useState ([])
    const sellItem = (book) => {
        const updatedBasket = [...basket, book]
        setBasket (updatedBasket)
    }

    console.log (basket)

    return (
        <Router>
            <Link to = "/basket">Go to basket!</Link>
        <Routes>
        <Route path = "/" element={<ForSaleList listOfBooks = {listOfBooks} sellItem={sellItem}/>}/>
        <Route path = "/basket" element={<ForSaleList listOfBooks = {basket} sellItem={sellItem}/>}/>
        </Routes>
        </Router>
    )
}

export default ForSaleBox
