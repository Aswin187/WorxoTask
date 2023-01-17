import React, { useEffect, useState } from "react";
import Banner from "./Components/Banner/Banner";
import BannerTwo from "./Components/Banner2/BannerTwo";
import { Header } from "./Components/Header/Header";
import { NavBar } from "./Components/Navbar/NavBar";
import axios from "axios";
import PropertyContainer from './Components/propertyContainer'
import FooterComponent from "./Components/Footer/FooterComponent";
const url = "https://api.xentice.com/api/postadSelect";

function App() {
  const [data, setData] = useState();
  const [uniquePropertyTypes,setUniquePropertyTypes] = useState([]);
  useEffect(() => {
    axios.get(url).then((response) => {
      const data = response.data;
      console.log(data);
      const temp =data.map(el=>({
        propertyType:JSON.parse(el.propertyType),
        details:JSON.parse(el.details),
        images:JSON.parse(el.images),
        location:JSON.parse(el.location),
        priceRange:JSON.parse(el.priceRange),
        transactionType:JSON.parse(el.transactionType),
        id:el.id,
      }));
      setData(temp);
      const unique = [...new Set(temp.map(item => item.propertyType.id))]; // [ 'A', 'B']
      setUniquePropertyTypes(unique);
      console.log(temp);
    });
  
  }, []);
  
   console.log(uniquePropertyTypes);

  return (
    <div>
      <NavBar />
      <Header />
      <Banner />
      <BannerTwo />
      {uniquePropertyTypes.map((item,index)=><div key={index}>
        <PropertyContainer list={data.filter(el=>el.propertyType.id===item)} />
      </div>)}
      <FooterComponent />
    </div>
  );
}

export default App;
