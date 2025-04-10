import React from "react";

interface InputProps {
    label: string;
    type?: string;
    placeholder?: string;
    value?: string;
    className?: string;
}


const Input: React.FC<InputProps> = ({
    type = "text",
    placeholder = "",
    value,
})=>{
return(
    <input value={value}  type={type}className="w-full rounded bg-gray-700 p-4 text-white placeholder-gray-400 transition-all duration-300 ease-in-out" placeholder={placeholder}></input>
)
}
export default Input 