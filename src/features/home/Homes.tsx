import Header from "./header";
import imagemU from "../../assets/imageU.png"
import imagem from "../../assets/image.png"
import Input from "../../shared/componentes/Inpunt";
import Button from "../../shared/componentes/button";
import Card from "../../shared/componentes/card";
import { useEffect, useState } from "react";
export const HOME=() =>{
    const [movies, setMovies] =  useState();
    const [page, setPage] = useState(2);

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/discover/movie?api_key=SUA_API_KEY&language=pt-BR&page=${page}`)
            .then((res) => res.json())
            .then((data) => setMovies(data.results));
    },[page]);
    return (
        

        <div className="w-screen h-screen">
            <img src={imagemU} className="w-screen h-screen  object-cover  bg-black bg-opacity-50" />
            <img src={imagem} alt="" className="absolute inset-0 w-screen h-screen flex items-center justify-center text-9xl" />

            <div className=" absolute  inset-0 w-50 h-50 py-30 ">
                <h4 className="w-150 h-100 text-white flex items-center justify-center  text-6xl ">Download Unlimited Movies, Drama, Music Video and More Content.</h4>
                <div className=" flex w-100">
                    <Input value="" placeholder="Enter mobile number" label="" className=" w-100"></Input>
                    <Button onclick={() => { }} value="Subscribe"  ></Button>
                </div>
            </div>



            <Header></Header>
            <div className="flex p-5 bg-black">
                {(movies ?? []).map((movie:any) => (
                    <div key={movie.id} className="p-4 bg-gray-800 text-white rounded-lg">
                        <img
                            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                            alt={movie.title}
                            className="w-full h-auto"
                        />
                        <h3 className="text-lg mt-2">{movie.title}</h3>
                    </div>
                ))}
            </div>
            <button
                className="mt-4 p-2 bg-blue-500 text-white rounded-lg"
                onClick={() => setPage(page + 1)}
            >
                Carregar Mais
            </button>
            <div className="flex p-5 bg-black">
               
               
               
            </div>

        </div>



    )
}