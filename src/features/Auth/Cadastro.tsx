import Input from "../../shared/componentes/Inpunt";
import imagemL from "../../assets/imageL.png"
import Button from "../../shared/componentes/button";
import { useNavigate } from "react-router-dom";
export default function Cadastro(){
    const navigate = useNavigate()
    return(
       
        <div className="bg-black-500  w-screen min-h-screen flex  items-center justify-center ">
           
            <form className="bg-black p-6 rounded-lg inset-shadow-emerald-100 w-96 space-y-10" >
                <img src={imagemL} alt="logo"  className="w-full h-auto p-10" />
                
                <Input placeholder="Digite o nome" value="" label="" />
                <Input placeholder="Digite o email" value="" label="" />
                <Input placeholder="Digite a senha" value="" label="" />
                <Button onclick={() => {
                    navigate("/login")
                }} value="Cadastrar" />
                
            </form>
      
        
        </div>
    )
}