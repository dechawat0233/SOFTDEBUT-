import React from 'react'

function Search() {
    return (
        <div>
            {/* Header with orange background */}
            <header className="bg-orange-500 p-2 text-white text-left text-xl">
                <h1>ค้นหายาง</h1>
            </header>

            {/* Form with 3 select dropdowns */}
            <form
                // className="p-2 space-y-4 bg-[url('../assets/images/SOne_index_bg_searchtype.jpg')]"
                className="p-2 space-y-4 bg-[url('../assets/images/SOne_index_bg_searchtype.jpg')] bg-cover bg-no-repeat"
            >
                <div className="flex flex-col ml-24 mt-[-0.3rem]">
                    <label htmlFor="select1" className="text-white text-xl">
                        หน้ายาง
                    </label>
                    <label htmlFor="select1" className=" text-white text-sm mt-[-0.5rem]">ความกว้าง (มม.)</label>
                    <select
                        id="select1"
                        className=" bg-white"
                    >
                        <option value="option1">--เลือกหน้ายาง--</option>

                    </select>
                </div>

                <div className="flex flex-col ml-24 mt-[-1rem]">
                    <label htmlFor="select2" className="text-white text-xl ">
                        ซีรี่ย์
                    </label>
                    <label htmlFor="select2" className=" text-white text-sm mt-[-0.5rem]">อัตราส่วนความสูงแก้มยาง (%)
                    </label>
                    <select
                        id="select2"
                        className=" bg-white"
                    >
                        <option value="option1">--เลือกซีรี่ย์--
                        </option>

                    </select>
                </div>

                <div className="flex flex-col ml-24 mt-[-1rem]">
                    <label htmlFor="select2" className="text-white text-xl ">
                        กระทะล้อ

                    </label>
                    <label htmlFor="select3" className=" text-white text-sm mt-[-0.5rem]">เส้นผ่าศูนย์กลาง (นิ้ว)
                    </label>
                    <select
                        id="select1"
                        className=" bg-white"
                    >
                        <option value="option3">--เลือกกระทะล้อ--</option>

                    </select>
                </div>
                <button
                    type="submit"
                    className='ml-[8rem] mt-[-0.5rem] cursor-pointer'
                >
                    <img src="../assets/images/SOne_index_search.png" alt="Search" className="h-6" />

                </button>
            </form>
        </div>)
}

export default Search