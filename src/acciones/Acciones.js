//aquí van los generadores de acciones
//una acción es un objeto con pares clave-valor siendo necesario un tipo y el resto es estructura libre.

export const incrementar = ()=>{ return {
    type: "INCREMENTAR",
    payload: 1
}   };

export const decrementar = ()=>{
    return {
        type: "DECREMENTAR",
        payload: 1
    }
}