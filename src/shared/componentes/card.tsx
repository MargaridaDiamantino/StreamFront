import React from "react";

interface ICard {
    im: string


}

const Card: React.FC<ICard> = ({ im }) => {
    return (
        <div className="flex w-50 h-80 p-4">
            <img src={im} alt="card" />
        </div>
    )
}
export default Card