export function Navbar(){
    return <div className="py-10">
        <div className=" flex items-center justify-between">   
            <div className="  text-white flex items-center justify-center bg-gray-700  h-15 w-40 rounded-3xl  hover:bg-gray-900 cursor-pointer">
                <div className="text-xl">Inside Tripura</div>
                </div>

                <div className=" text-white flex items-center justify-evenly bg-gray-700  h-15 w-90 rounded-3xl" >
                    <div className="hover:bg-gray-900 cursor-pointer h-11 flex justify-center items-center w-35 rounded-2xl text-xl">
                        Contact Us
                    </div>
                    <div className="hover:bg-gray-900 cursor-pointer h-11 flex justify-center items-center w-35 rounded-2xl text-xl">
                        About us
                    </div>
                   
                    
                </div>


        </div>
    </div>
}