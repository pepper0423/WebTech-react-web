import { Link } from 'react-router-dom';

const SuccessModal = ({ isVisible }) => {
    if ( !isVisible ) return null;
    return (
        <div class="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center z-50">
            <div className=' bg-white rounded-xl p-10'>
                <svg viewBox="0 0 24 24" class="text-green-600 w-16 h-16 mx-auto my-6">
                    <path fill="currentColor"
                        d="M12,0A12,12,0,1,0,24,12,12.014,12.014,0,0,0,12,0Zm6.927,8.2-6.845,9.289a1.011,1.011,0,0,1-1.43.188L5.764,13.769a1,1,0,1,1,1.25-1.562l4.076,3.261,6.227-8.451A1,1,0,1,1,18.927,8.2Z">
                    </path>
                </svg>
                <div class="text-center">
                    <h3 class="md:text-2xl text-base text-gray-900 font-semibold text-center">ชำระเสร็จสิ้น!</h3>
                    <p class="text-gray-600 my-2">ขอบคุณสำหรับการใช้บริการ.</p>
                    <div class="py-10 text-center">
                        <Link to='/' class="px-12 bg-blue-600 hover:bg-blue-500 text-white font-semibold py-3 rounded-xl">
                            กลับสู่หน้าแรก
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SuccessModal;