import { RouterProvider, createBrowserRouter } from "react-router-dom";
import ROUTES from "./routes/routes";
import MainContext from "./context/context";
import { useState, useEffect } from "react";
import axios from "axios";
import { HelmetProvider } from "react-helmet-async";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css"

function App() {
   
 
    const router = createBrowserRouter(ROUTES);
    
    const [data, setData] = useState([]);
    const[basket,setBasket]=useState([])
    useEffect(()=>{
        axios.get("http://localhost:8080/api/products").then(res=>(setData([...res.data])))
    },[])

  function addToBasket(id){
    let basketItem=basket.find(item=>item._id==id)
    if(basketItem){
        basketItem.count++
        basketItem.totalPrice+=basketItem.totalPrice
        setBasket([...basket])
      }
      else{
        let target=data.find(item=>item._id==id)
        let newItem={
            ...target,count:1,totalPrice:target.price
        }
        setBasket([...basket,newItem])
      }
  }
  
  

    const contextData = {
      data, setData,basket,setBasket,addToBasket
    }

    return (
        <>
        <MainContext.Provider value={contextData}>
                <HelmetProvider>
                    <RouterProvider router={router} />
                </HelmetProvider>
            </MainContext.Provider>
        </>
    );
}

export default App;
