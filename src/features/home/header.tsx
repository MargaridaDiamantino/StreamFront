import { useNavigate } from "react-router-dom"
import imagem from "../.././assets/imageL.png"
import Button from "../../shared/componentes/button"
import { Clapperboard, Drama, Film, Home, MonitorPlay, Tv } from "lucide-react"


export default function Header() {
    const navigate = useNavigate()
    return (
        <div className=" bg-black border  fixed top-0 left-0 right-0 z-50 flex items-center justify-between" >
            <div className=" w-50 px-10">
                <img src={imagem} alt="" className="w-full " />
            </div>

            <div className="flex items-center justify-between p-4" >
                <div className="flex items-center justify-between p-4">
                    <Home size={32} className="text-gray-400" />
                    <div className="text-gray-400 px-2">Home</div>
                </div>

                <div className="flex items-center justify-between p-4">
                </div> <Film size={32} className="text-gray-400 " />
                <div className="text-gray-400 px-2">Movie</div>
            </div>
            <div className="flex items-center justify-between p-4">
                <Drama size={32} className="text-gray-400 " />
                <div className="text-gray-400 px-2">Drama</div>
            </div>
            <div className="flex items-center justify-between p-4">
                <MonitorPlay size={32} className="text-gray-400 " />
                <div className="text-gray-400 px-2">Musical video</div>
            </div >
            <div className="flex items-center justify-between p-4">
                <Tv size={32} className="text-gray-400 " />
                <div className="text-gray-400 px-2">show live</div>
            </div>
            <div className="flex items-center justify-between p-4">
                <Clapperboard size={32} className="text-gray-400 " />
                <div className="text-gray-400 px-2">comedias</div>
            </div >

            <div className="p-4">
                <Button value="Entrar" onclick={() => {
                    navigate("/login")
                }}></Button>
            </div>
        </div>
    )
}