
import { LoaderFiveDemo } from "./LoaderFiveDemo";

import LargeCarousel from "./Carousel";
import TypewriterSection from "./TypewriterSection";
import SocialGuide from "./SocialGuide";

export function Dashboard(){
    return<div>
       <div className="">
        <div className="h">
             <LargeCarousel/> 
          {/* <TypewriterSection/> */}

          <SocialGuide/>
     
        </div>
      
        </div> 


        <div className="text-white pt-10 text-xl flex items-center ">
          {/* <LoaderFiveDemo/>  */}
          
        
        </div>
       
    </div>
}