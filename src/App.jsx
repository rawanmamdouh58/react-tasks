// import { useState } from "react";
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import "./App.css";
import Navbar from "./components/navbar";
import Products from "./components/products/Products";

function App() {
  // const [count, setCount] = useState(0);
  const links = [
    { title: "Home", url: "/" },
    { title: "About", url: "/" },
    { title: "servise", url: "/" },
    { title: "contact", url: "/" },
    { title: "profile", url: "/" },
  ]; //==>>> linksusing props in App.jsx

  const products = [
    { name: "lap", price: 100 },
    { name: "phone", price: 200 },
    { name: "shose", price: 300 },
  ];
  return (
    <>
      <Navbar links={links} />
      <Products products={products} />
    </>
  );
}

export default App;
