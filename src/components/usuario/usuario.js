import React from "react";
import { Link } from "react-router-dom";

const Usuario=({usuario, cerrarSesion})=>{

    const logOut =()=>{
        cerrarSesion();
    }
    
    return(
        <div className=" w-10/12  bg-white 
        absolute bottom-1 flex flex-col left-4 items-center rounded-sm shadow-sm ">
            { usuario !=null ? <h3 className="mt-1">Hola {usuario.nombre}</h3>: null}

            { (usuario!=null && usuario.isAdmin !=null) ? <Link className="m-1 p-0.5 w-10/12 text-white bg-green-700 rounded-sm shadow-md text-sm text-center " to={'/registro'}> Agregar usuario</Link>: null}

            <button className="m-1 mb-2 w-10/12 p-0.5 text-white bg-red-700 rounded-sm shadow-md text-sm 
            "
            onClick={logOut}
            >Cerrar sesion</button>

        </div>
    );
}

export default Usuario;