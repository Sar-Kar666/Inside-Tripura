import { Facebook } from "./icons/Facebook";
import { Insta } from "./icons/Ista";
import { LoaderFive } from "./Loader";
import { LoaderFiveDemo } from "./LoaderFiveDemo";

export function Dashboard(){
    return<div>
       <div className="text-white text-6xl font-bold ">
        <div>Comming soon</div>
        <div></div>
        </div> 

        <div className="pt-10" >
            <div className="text-white text-lg" >Something crazy is on its way!!</div>
        </div>

        <div className="text-white pt-10 text-xl flex items-center ">
          <LoaderFiveDemo/> 
          {/* <Insta/>
          <Facebook/> */}
        </div>
    </div>
}