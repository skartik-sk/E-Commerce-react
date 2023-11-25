import React, { useEffect, useState } from "react";

import Banner from '../ComponentsForPages/HomeComponents/Banner'
import Productlilst from '../ComponentsForPages/HomeComponents/Productlilst'
import Productslider from '../ComponentsForPages/HomeComponents/Productslider'
import Testimonials from '../ComponentsForPages/HomeComponents/Testimonials'
import Faq from '../ComponentsForPages/HomeComponents/Faq'
import Aboutus from '../ComponentsForPages/HomeComponents/Aboutus'
import Popup from '../ComponentsForPages/popup'
import { Link } from "react-router-dom";

const Home = () => {
  const [showPopUp, setShowPopUp] = useState(false);
  const showPopupHandler = () => setShowPopUp(true);
  useEffect(() => {
     const timer = setTimeout(() => {
     setShowPopUp(false);
   }, 50);
  return () => clearTimeout(timer);
  }, []);
  let popup = null;
  if(showPopUp) {
    popup = <Popup />;
   }
   useEffect(()=>{
    const timer = setTimeout(() => {
    showPopupHandler()},3000)
   })
  return (
    <> {popup}
    <Banner/>
   
    <Productslider/>
    <Aboutus/>
<Testimonials/>
<Faq/>
    </>
  )
}

export default Home