import AppleButton from '../../../components/AppleButton';
import Nav from '../../../components/nav';

const AddForm = () => {
    return (
        <div>
            <header>
                <Nav />
            </header>
            <section className='container py-10 mx-auto'>
                <h2 className='text-2xl text-center pb-8'>กรอกข้อมูล</h2>
                <form class="w-full max-w-lg mx-auto">
                    <div class="flex flex-wrap -mx-3 mb-6">
                        <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                            <label class="block tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                                ชื่อ
                            </label>
                            <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" />
                        </div>
                        <div class="w-full md:w-1/2 px-3">
                            <label class="block tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
                                นามสกุล
                            </label>
                            <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" />
                        </div>
                    </div>
                    <div class="flex flex-wrap -mx-3 mb-6">
                        <div class="w-full px-3">
                            <label class="block tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-address">
                                ที่อยู่
                            </label>
                            <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-address" type="text" />
                            <p class="text-gray-600 text-xs">หมายเลขหรือชื่ออาคาร, ชื่อถนน</p>
                        </div>
                    </div>
                    <div class="flex flex-wrap -mx-2 mb-2">
                        <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                            <label class="block tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-city">
                                เมือง
                            </label>
                            <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-city" type="text" />
                        </div>
                        <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                            <label class="block tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-state">
                                จังหวัด
                            </label>
                            <div class="relative">
                                <select class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
                                    <option>กรุงเทพมหานคร</option>
                                    <option>จันทบุรี</option>
                                    <option>ฉะเชิงเทรา</option>
                                    <option>ชลบุรี</option>
                                    <option>อยุธยา</option>
                                    <option>อุทัยธานี</option>
                                    <option>อุบลราชธานี</option>
                                </select>
                                <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                    <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                                </div>
                            </div>
                        </div>
                        <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                            <label class="block tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-zip">
                                รหัสไปรษณีย์
                            </label>
                            <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-zip" type="text" />
                        </div>
                    </div>
                </form>
                <AppleButton className="px-28 text-xl block mx-auto mt-8">
                    ยืนยัน
                </AppleButton>
            </section>
        </div>
    );
}

export default AddForm;
