import React from 'react'

function SearchLocation() {
    return (
        <div>
            {/* Header with orange background */}
            <header className="bg-orange-500 p-2 text-white text-left text-xl">
                <h1>ค้นหาศูนย์บริการใกล้บ้านคุณ</h1>
            </header>

            {/* Form with 3 select dropdowns */}
            <form
                className="p-2 space-y-4 bg-[black] ">
                <div className="flex items-center justify-end mr-2">
                    <label htmlFor="select1" className="text-white text-xl font-bold mr-2">
                        จังหวัด
                    </label>
                    <select
                        id="select1"
                        className="bg-white w-[10rem]"
                    >
                        <option value="option1">--เลือกหน้ายาง--</option>
                    </select>
                </div>


                <div className="flex items-center justify-end mr-2 mt-[-0.5rem]">
                    <label htmlFor="select2" className="text-white text-xl font-bold mr-2 ">
                        เขต/อำเภอ
                    </label>
                    <select
                        id="select2"
                        className=" bg-white w-[10rem]"
                    >
                        <option value="option1">--เลือกหน้ายาง--
                        </option>
                    </select>
                </div>

                <div className="flex items-center justify-end mr-2 mt-[-0.5rem]">
                    <label htmlFor="select2" className="text-white text-xl font-bold mr-2">
                        ถนน
                    </label>
                    <select
                        id="select1"
                        className=" bg-white w-[10rem]"
                    >
                        <option value="option3">--เลือกหน้ายาง--</option>
                    </select>
                </div>
                <label className="flex items-center justify-center text-center text-red-500 text-sm mt-[-0.5rem]">
                    หมายเหตุ : กรุณาเลือกอย่างใดอย่างหนึ่ง
                </label>
                <button
                    type="submit"
                    className='ml-[8rem] mt-[-0.5rem] cursor-pointer '
                >
                    <img src="../assets/images/SOne_index_search.png" alt="Search" className="h-6" />

                </button>
            </form>
        </div>
        )
}

export default SearchLocation