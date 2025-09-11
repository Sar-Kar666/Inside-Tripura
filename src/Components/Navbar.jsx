export function Navbar(){
    return <div className="py-5">
        <div className=" flex items-center justify-between">   
            <div className="  text-white flex items-center justify-center bg-gray-700  h-10 w-30 rounded-3xl  hover:bg-gray-900 cursor-pointer">
                <div className="">Inside Tripura</div>
                </div>

                <div className=" text-white flex items-center justify-evenly bg-gray-700  h-10 w-80 rounded-3xl" >
                    <div className="hover:bg-gray-900 cursor-pointer h-9 flex justify-center items-center w-25 rounded-2xl">
                        Contact Us
                    </div>
                    <div className="hover:bg-gray-900 cursor-pointer h-9 flex justify-center items-center w-25 rounded-2xl">
                        About us
                    </div>
                   
                    
                </div>


        </div>
    </div>
}