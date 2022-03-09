import '../assets/css/cartItem.css'
const CarItem = ({data,dellOneFromCart,dellAllFromCart,addToCart}) => {
    let {id,nombre,precio,quantity,img} = data
    let precioCant = 0
    if (quantity<10){
        precioCant= precio
    }else if (quantity<20){
        precioCant= 170
    }else if (quantity<30){
        precioCant=133
    }else if (quantity>29){
        precioCant= 100
    }
    return (
        <>
        <button className='btn' onClick={()=> dellAllFromCart(id)}>Quitar los {quantity} productos</button> 
        <div className='container'>
            <div className='row justify-content-center'>
                <div className='col-3 center-img'>
                    <img src={img} height='80vh' width='80vh'/>
                </div>
                <div className='col-4'>
                    <h2>{nombre}</h2>
                </div>
                <div className='col-4'>
                    Precio:
                    <h2>${precioCant}</h2>
                    Total:
                    <h2>${precioCant * quantity}</h2>
                </div>
                <div className='col-4'>
                    <div className='line'>
                        <h2 className='btn' onClick={()=> dellOneFromCart(id)}>−</h2>
                        <h2>{quantity}</h2>
                        <h2 className='btn' onClick={()=> addToCart(id) }>✚</h2>
                    </div>
                </div>
            </div>
        </div>
        <hr/>
        </>
    )
}

export default CarItem