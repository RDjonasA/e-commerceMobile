 import axios from 'axios'

export const fetchData = async () => {
   let data = []
    try{
    const res = await axios.get('https://devrockstore-default-rtdb.firebaseio.com/productos.json')
    data = await res
    return data
    }catch(e){
        return []
    }
}