import Input from "../../shared/componentes/Inpunt";
import imagem from "../../assets/imageL.png"
import Button from "../../shared/componentes/button";
import { useNavigate } from "react-router-dom";
export default function Login() {
    const navigate = useNavigate()
    return (

        <div className=" bg-black-500  w-screen min-h-screen flex  items-center justify-center">

            <form className="bg-black p-10 rounded-lg shadow-md w-96 space-y-8" >
                <img src={imagem} alt="logo" className="w-full h-auto p-10" />

               
                <Input placeholder="Digite o email" value="" label="" />
                <Input placeholder="Digite a senha" value="" label="" />
                <label htmlFor="" className="text-blue-600  space:10 hover:text-amber-50">Esqueceu a senha?</label>
                <Button onclick={()=>{
                 navigate("/login")
                }} value="Entrar" />

            </form>


        </div>
    )
}