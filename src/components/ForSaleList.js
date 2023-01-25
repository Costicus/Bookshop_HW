import React from "react";
import ForSaleItem from "./ForSaleItem";

const ForSaleList = ({listOfBooks, sellItem}) => {
    const booksJSXElements = listOfBooks.map((book, index) => 
    <ForSaleItem bookProp = {book} key={index} sellItem ={sellItem}/>)

    return (
        <ul>
            {booksJSXElements}
        </ul>
    )
}

export default ForSaleList
