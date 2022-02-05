import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import Products from './components/Products';
import { useState } from "react";
import Cart from "./components/Cart";
import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  const stil = { margin: 1 + "em", height:120, width:150 };
  const [cartNum, setCartNum] = useState(0);
  const [cartProducts, setCartProducts] = useState([]);
  const [products] = useState([
    {
      id: 1,
      title: "Odry šešir",
      description:
        "Odry šešir je radjen od parasisala sa trakom boje cigle i zlatnim logom. Obod je savršene duzine da vas zaštiti od sunca a da ne sakrije vaše lice.",
      price:"12,900.00 rsd ",
      amount: 0,
      img:<img src="https://www.mmcouture.co/wp-content/uploads/2019/07/IMG_9606-400x240.jpg"style={stil} />
    },
    {
      id: 2,
      title: "Panama šešir",
      description:
        "Panama šešir je izradjen od slame. Sa širinom oboda od oko 5.5cm savrsen je za užurbane letnje dane. Dubina kalote je 9cm.",
      price:"12,800.00 rsd",
      amount: 0,
      img:<img src="https://www.mmcouture.co/wp-content/uploads/2018/06/letnji-sesir-2-400x240.jpg" style={stil} />
      
    },
    {
      id: 3,
      title: "Shade šešir",
      description:
        "Ovaj šešir ima širok i ponalo oboren obod koji će štititi vašu kožu od sunca. Tkan je od slame, tako da vam ne treba bilo kakav dodatni asesoar.",
      price:"16,200.00 rsd ",
      amount: 0,
      img:<img src="https://www.mmcouture.co/wp-content/uploads/2019/07/IMG_0939-2.jpg" style={stil}/>
    },
    {
      id: 4,
      title: "Alex šešir",
      description:
        "Alex šešir je jedan od najprepoznatljivijih modela brenda. Izradjen je od perforirane rafije,lagan i prozračan, savršen za zalazak sunca.",
      price:"10,800.00 rsd ",
      amount: 0,
      img:<img src="https://www.mmcouture.co/wp-content/uploads/2021/08/mm-couture_9a-400x240.jpg" style={stil}/>
    },
    {
      id: 5,
      title: "Marony šešir",
      description:
        "Marrony šešir je chic opcija da zaštitite lice od sunca bilo da šetate gradom ili ste na bazenu. Izradjen od čoko-braon parasisala sa trakom.",
      price:"13,200.00 rsd",
      amount: 0,
      img:<img src="https://www.mmcouture.co/wp-content/uploads/2021/06/marrony-hat-400x240.jpg" style={stil} />
    },
    {
      id: 6,
      title: "Lumy šešir",
      description:
        "Lumy šešir je pedantno tkan od rafije u stukturiranoj silueti širokog oboda koja je chic i u isto vreme zaštitna. Idealan za sve.",
      price:"11,700.00",
      amount: 0,
      img:<img src="https://www.mmcouture.co/wp-content/uploads/2021/06/lumy-hat-1.jpg" style={stil}/>
    }
  ]);
  function refreshCart() {
    let newProducts = products.filter((prod) => prod.amount > 0);
    setCartProducts(newProducts);
  }

  function addProduct(title, id) {
    console.log("Dodat je proizvod: " + title);
    setCartNum(cartNum + 1);
  
    products.forEach((prod) => {
      if (prod.id === id) {
        prod.amount++;
      }
      console.log(prod.amount);
    });
    refreshCart();
  }
    
  return (
   <BrowserRouter className="App">
  <NavBar cartNum={cartNum}></NavBar>
  <Routes>
    <Route
      path="/"
      element={<Products products={products} onAdd={addProduct} />}
    />
    <Route path="/cart" element={<Cart products={cartProducts} />} />
  </Routes>
</BrowserRouter> 
  );
  }

export default App;
