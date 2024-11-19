import { useMemo } from "react";

function Header({ cart, removeElementFromCart, increaseQuantity, decreaseQuantity, clearCart }) {
    /*Lo que escriba afuera del return puede ser 
    - State o funciones 
    - Variables
    - Codigo js*/

    //*state derivado, (uso esto para no depender de carrito para saber si esta vacio o no)

    // const isEmpty = () => cart.length === 0;
    // const totalCost = cart.reduce((total, item)=> total + (item.price * item.quantity), 0)

    //Usando useMemo-------------
    //hazo el cambio cada que "cart" cambie (hace que isEmpty no sea una funcion)
    const isEmpty = useMemo(() => cart.length === 0, [cart]);
    const totalCost = useMemo(() => cart.reduce((total, item) => total + (item.price * item.quantity), 0))


    //Todo lo que coloque en el return se mostrara en el html
    return (
        <header className="py-5 header">
            <div className="container-xl">
                <div className="row justify-content-center justify-content-md-between">
                    <div className="col-8 col-md-3">
                        <a href="index.html">
                            <img className="img-fluid" src="/img/logo.svg" alt="imagen logo" />
                        </a>
                    </div>
                    <nav className="col-md-6 a mt-5 d-flex align-items-start justify-content-end">
                        <div className="carrito">
                            <img className="img-fluid" src="/img/carrito.png" alt="imagen carrito" />

                            <div id="carrito" className="bg-white p-3">
                                {isEmpty ? (
                                    <p className="text-center">El carrito esta vacio</p>)
                                    : (
                                        //Fragment, para devolver mas de un elemento
                                        <>
                                            <table className="w-100 table">
                                                <thead>
                                                    <tr>
                                                        <th>Imagen</th>
                                                        <th>Nombre</th>
                                                        <th>Precio</th>
                                                        <th>Cantidadddd</th>
                                                        <th></th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {cart.map((guitar) => (
                                                        <tr key={guitar.id}>
                                                            <td>
                                                                <img className="img-fluid" src={`/img/${guitar.image}.jpg`}
                                                                    alt="imagen guitarra" />
                                                            </td>
                                                            <td>{guitar.name}</td>
                                                            <td className="fw-bold">
                                                                ${guitar.price}
                                                            </td>
                                                            <td className="flex align-items-start gap-4">
                                                                <button type="button" className="btn btn-dark" onClick={() => decreaseQuantity(guitar.id)}>
                                                                    -
                                                                </button>
                                                                {guitar.quantity}
                                                                <button type="button" className="btn btn-dark" onClick={() => increaseQuantity(guitar.id)}>
                                                                    +
                                                                </button>
                                                            </td>
                                                            <td>
                                                                <button className="btn btn-danger" type="button" onClick={() => removeElementFromCart(guitar.id)}>
                                                                    X
                                                                </button>
                                                            </td>
                                                        </tr>
                                                    ))}
                                                </tbody>
                                            </table>

                                            <p className="text-end">Total pagar:<span className="fw-bold">${totalCost}</span></p>
                                        </>
                                    )}
                                <button className="btn btn-dark w-100 mt-3 p-2" onClick={clearCart}>Vaciar Carrito</button>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        </header>
    )
}

export default Header