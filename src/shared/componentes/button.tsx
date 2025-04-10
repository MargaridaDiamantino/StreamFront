import React from "react"

interface ButtonProps{
    value:string
    onclick:()=>void
}
const Button:React.FC<ButtonProps>=({value="string",onclick})=>{
    return (
        <button onClick={onclick} className="w-full rounded bg-red-500 p-3 font-medium text-white hover:bg-red-600">{value}</button>
    )

}
export default Button