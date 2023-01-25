import React from "react";

const ForSaleItem = ({bookProp, sellItem}) => {
    const handleClick = () => {
        sellItem (bookProp)
    }
    
    return (
    <li>
    <p>{bookProp.title}</p>
    <p>{bookProp.author}</p>
    <p>£{bookProp.price}</p>
    <button onClick={handleClick}>Add to basket</button>
    </li>
    )
}

export default ForSaleItem
