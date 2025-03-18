import { useState } from 'react';

function Context() {

    // const [point1, setPoint1] = useState("../assets/images/SOne_index_bullet1.png");
    const [point2, setPoint2] = useState("../assets/images/SOne_index_bullet2.png");
    const [point3, setPoint3] = useState("../assets/images/SOne_index_bullet2.png");

    return (
        <div className="border-2 border-black">
            <div className="grid grid-cols-2 gap-2">
                <div className="col-span-1">
                    <header className=" p-1 text-left text-xl">
                        <h1>News & Events</h1>
                    </header>
                </div>
                <div className="col-span-1 flex justify-end items-center space-x-1 mr-2">
                    <img src="../assets/images/SOne_index_bullet1.png" alt="Icon 1" className="h-3 w-3 cursor-pointer" />
                    <img src={point2} alt="Icon 2" className="h-3 w-3 cursor-pointer" 
                     onMouseEnter={() => setPoint2("../assets/images/SOne_index_bullet1.png")}
                     onMouseLeave={() => setPoint2("../assets/images/SOne_index_bullet2.png")}
                     />
                    <img src={point3} alt="Icon 3" className="h-3 w-3 cursor-pointer" 
                     onMouseEnter={() => setPoint3("../assets/images/SOne_index_bullet1.png")}
                     onMouseLeave={() => setPoint3("../assets/images/SOne_index_bullet2.png")}
                     />
                </div>
            </div>


            {/* Form with 3 select dropdowns */}
            <div
                className="p-2 space-y-4 border-t-1 border-t-black border-b-1 border-b-orange-500"
            >
                <div className="grid grid-cols-3 gap-3 pt-2">
                    <div className="col-span-1 relative">
                        <img src="../assets/images/SOne_index_pic3.jpg" alt="SOne_index_pic3" className="cursor-pointer border-b-4 border-b-orange-500" />
                        <div className="absolute top-0 left-0 p-2 text-white text-xs bg-black text-center m-1 leading-2">
                            19<br />
                            NOV<br />
                            2014<br />
                        </div>
                    </div>
                    <div className="col-span-1 relative">
                        <img src="../assets/images/SOne_index_pic3.jpg" alt="SOne_index_pic3" className="cursor-pointer" />
                        <div className="absolute top-0 left-0 p-2 text-white text-xs bg-black text-center m-1 leading-2">
                            19<br />
                            NOV<br />
                            2014<br />
                        </div>
                    </div>
                    <div className="col-span-1 relative">
                        <img src="../assets/images/SOne_index_pic3.jpg" alt="SOne_index_pic3" className="cursor-pointer" />
                        <div className="absolute top-0 left-0 p-2 text-white text-xs bg-black text-center m-1 leading-2">
                            19<br />
                            NOV<br />
                            2014<br />
                        </div>
                    </div>
                </div>

                <div className="mt-[-1rem] grid grid-cols-3 gap-3 pt-2">
                    <div className="col-span-1 ">
                        <a className="hover:underline cursor-pointer">
                            ข่าวใหม่!! ข่าวและกิจกรรมข่าว
                            และกิจกรรมข่าวและกิจกรรมข่าว
                            และกิจกรรม
                        </a>

                    </div>
                    <div className="col-span-1 ">
                        <a className="hover:underline cursor-pointer">
                            ข่าวใหม่!! ข่าวและกิจกรรมข่าว
                            และกิจกรรมข่าวและกิจกรรมข่าว
                            และกิจกรรม
                        </a>
                    </div>
                    <div className="col-span-1 ">
                        <a className="hover:underline cursor-pointer">
                            ข่าวใหม่!! ข่าวและกิจกรรมข่าว
                            และกิจกรรมข่าวและกิจกรรมข่าว
                            และกิจกรรม
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Context