const productos = [
    {
    id:1, 
    nombre: "tele",
    precio:50000,
    categoria: "electronico",
},
    {
        id:1, 
        nombre: "tele",
        precio:50000,
        categoria: "electronico",
    },
        {
            id:1, 
            nombre: "tele",
            precio:50000,
            categoria: "electronico",}

]


export const getProductos = () =>{


return new Promise((resolve ,reject) =>{
    
    setTimeout(() =>{
        resolve(productos)
    }, 3000);

    }
    
)}