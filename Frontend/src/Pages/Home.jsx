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
    <> 
    {popup}
    <Banner/>
    {/* <div class="flex items-center space-x-2">
  <div aria-label="Loading..." role="status">
    <svg width="24" height="24" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" xmlns="http://www.w3.org/2000/svg" class="animate-spin w-4 h-4 stroke-slate-500">
      <path d="M12 3v3m6.366-.366-2.12 2.12M21 12h-3m.366 6.366-2.12-2.12M12 21v-3m-6.366.366 2.12-2.12M3 12h3m-.366-6.366 2.12 2.12">
      </path>
    </svg>
  </div>
  <span class="text-xs font-medium text-slate-500">Loading...</span>
</div> */}
    <Productslider/>
    <Aboutus/>
<Testimonials/>
<Faq/>
    </>
  )
}

export default Home