import { Link } from "react-router-dom";

export function BackButton(){
    return(
        <Link to={"/"} className="text-white100 p-4 flex">
            Voltar
        </Link>
    )
    
}