
import { Carousel } from "antd";
import { LoaderFiveDemo } from "./LoaderFiveDemo";
import AdjustableCarousel from "./Carousel";
import CarouselDemo from "./Carousel";
import LargeCarousel from "./Carousel";

export function Dashboard(){
    return<div>
       <div className="">
        <div className="h">
       <LargeCarousel/>
        </div>
      
        </div> 

        <div className="pt-10" >
      
        </div>

        <div className="text-white pt-10 text-xl flex items-center ">
          <LoaderFiveDemo/> 
       
          {/* <Insta/>
          <Facebook/> */}
        </div>
       
    </div>
}