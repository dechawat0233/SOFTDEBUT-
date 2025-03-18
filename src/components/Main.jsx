import { useState } from 'react';
import Search from './Search'
import SearchLocation from './SearchLocation';
import Context from './Context';
import Footer from './Footer';
function Main() {

    const [imgTire, setTire] = useState("../assets/images/SOne_index_bt-tire.jpg");
    const [imgBreak, setBreak] = useState("../assets/images/SOne_index_bt-break.jpg");
    const [imgBattery, setBattery] = useState("../assets/images/SOne_index_bt-battery.jpg");
    const [imgChokeup, setChokeup] = useState("../assets/images/SOne_index_bt-chokeup.jpg");
    const [imgOil, setOil] = useState("../assets/images/SOne_index_bt-oil.jpg");
    const [imgGuarantee, setGuarantee] = useState("../assets/images/SOne_index_bt-guarantee.jpg");

    return (
        <>
            <div className="grid grid-cols-4 gap-4 pt-2">
                {/* First Search Component in Column 1 */}
                <div className="col-span-1">
                    <Search />
                </div>
                <div className="col-span-3 flex flex-col items-end gap-2 pr-4 py-4"
                    style={{ backgroundImage: "url('../assets/images/SOne_index_banner.jpg')", backgroundSize: "cover", backgroundPosition: "center" }}>

                    {/* Five images stacked vertically and aligned to the right */}
                    <img src="../assets/images/SOne_index_arrowup.png" alt="Arrow Up" className="w-7 mr-10 cursor-pointer" />
                    <img src="../assets/images/SOne_index_pic01.jpg" alt="Image 1" className="w-30 border-2 border-red-500 cursor-pointer" />
                    <img src="../assets/images/SOne_index_pic02.jpg" alt="Image 2" className="w-30 border-2 border-gray-500 cursor-pointer" />
                    <img src="../assets/images/SOne_index_pic02.jpg" alt="Image 3" className="w-30 border-2 border-gray-500 cursor-pointer" />
                    <img src="../assets/images/SOne_index_arrowdown.png" alt="Arrow Down" className="w-7 mr-10 cursor-pointer" />
                </div>
            </div>
            <div className="grid grid-cols-6 gap-1 pt-2">
                {/* First Search Component in Column 1 */}
                <div className="col-span-1">
                    <img
                        src={imgTire}
                        alt="imgTire"
                        className='cursor-pointer'
                        onMouseEnter={() => setTire("../assets/images/SOne_index_bt-tire1.jpg")}
                        onMouseLeave={() => setTire("../assets/images/SOne_index_bt-tire.jpg")}
                    />
                </div>
                <div className="col-span-1">
                    <img
                        src={imgBreak}
                        alt="imgBreak"
                        className='cursor-pointer'

                        onMouseEnter={() => setBreak("../assets/images/SOne_index_bt-break1.jpg")}
                        onMouseLeave={() => setBreak("../assets/images/SOne_index_bt-break.jpg")}
                    />                </div>
                <div className="col-span-1">
                    <img
                        src={imgBattery}
                        alt="imgBattery"
                        className='cursor-pointer'

                        onMouseEnter={() => setBattery("../assets/images/SOne_index_bt-battery1.jpg")}
                        onMouseLeave={() => setBattery("../assets/images/SOne_index_bt-battery.jpg")}
                    />                </div>
                <div className="col-span-1">
                    <img
                        src={imgChokeup}
                        alt="imgChokeup"
                        className='cursor-pointer'

                        onMouseEnter={() => setChokeup("../assets/images/SOne_index_bt-chokeup1.jpg")}
                        onMouseLeave={() => setChokeup("../assets/images/SOne_index_bt-chokeup.jpg")}
                    />                </div>
                <div className="col-span-1">
                    <img
                        src={imgOil}
                        alt="imgOil"
                        className='cursor-pointer'

                        onMouseEnter={() => setOil("../assets/images/SOne_index_bt-oil1.jpg")}
                        onMouseLeave={() => setOil("../assets/images/SOne_index_bt-oil.jpg")}
                    />                </div>
                <div className="col-span-1">
                    <img
                        src={imgGuarantee}
                        alt="imgGuarantee"
                        className='cursor-pointer'

                        onMouseEnter={() => setGuarantee("../assets/images/SOne_index_bt-guarantee1.jpg")}
                        onMouseLeave={() => setGuarantee("../assets/images/SOne_index_bt-guarantee.jpg")}
                    />
                </div>

            </div>
            <div className="grid grid-cols-4 gap-4 pt-2">
                {/* First Search Component in Column 1 */}
                <div className="col-span-1">
                    <SearchLocation />
                </div>
                <div className="col-span-2">
                    <Context />
                </div>
                <div className="col-span-1 relative">
                    <img src="../assets/images/SOne_index_tips1.png" alt="Icon 1" className="cursor-pointer relative z-10 bg-cover bg-no-repeat" />
                    <img src="../assets/images/SOne_index_pic66.png" alt="Icon 2" className="cursor-pointer absolute top-8 left-40 z-10 bg-cover bg-no-repeat" />
                    <img src="../assets/images/SOne_index_pic99.png" alt="Icon 3" className="cursor-pointer absolute top-24 left-65 z-10 bg-cover bg-no-repeat" />
                    <div className="absolute top-0 left-0 w-[80%] h-[8rem] ml-15 bg-[#252525] text-white text-sm px-4 py-1 flex flex-col items-end justify-center z-0 text-center">
                        <div className="text-red-500 text-2xl font-bold mb-3 mt-[-2rem] text-center">
                            Safety Tips
                        </div>
                        <div>
                            ควรเติมน้ำมันตอนเช้า<br />
                            ขณะที่อุณหภูมิบนพื้น<br />
                            ดินยังเย็นอยู่
                        </div>
                    </div>
                    <div className="grid grid-cols-3 gap-2 pt-2 items-center" >
                        <div className="col-span-1 text-sm font-bold">
                            สมัครรับข่าวสาร
                        </div>
                        <div className="col-span-2 flex items-center">
                            <input
                                type='text'
                                placeholder="กรุณาใส่อีเมล์"
                                className="border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 w-40 px-2 py-1"
                            />
                            <button type="submit">
                                <img src="../assets/images/SOne_index_btgo.jpg" alt="Search" className="h-7" />
                            </button>
                        </div>
                    </div>
                    <div className="pt-2 items-center border-t-2 border-dashed m-2">
                        <img
                            src="../assets/images/SOne_index_call.png"
                            alt="Icon 1"
                            className="cursor-pointer max-w-full h-[50%]"
                        />
                    </div>
                </div>
            </div>
            <div className=" pt-2">
                <Footer />
            </div>
        </>


    )
}

export default Main