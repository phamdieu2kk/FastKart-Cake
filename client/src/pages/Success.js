import React from 'react';
import SUCCESSIMAGE from '../assets/success.gif';
import { Link } from 'react-router-dom';

const Success = () => {
    return (
        <div className="flex items-center justify-center min-h-screen p-4 bg-gradient-to-br from-green-50 to-green-100">
            <div className="flex flex-col items-center justify-center w-full max-w-md p-8 text-center bg-white shadow-xl rounded-2xl animate-fadeIn">
                
                {/* Ảnh thành công hình tròn, không nền */}
                <img 
                    src={SUCCESSIMAGE} 
                    alt="Thanh toán thành công" 
                    className="object-cover mb-4 rounded-full w-36 h-36" 
                />

                {/* Tiêu đề */}
                <h2 className="text-2xl font-bold text-green-700">Thanh toán thành công 🎉</h2>
                <p className="mt-2 text-gray-600">
                    Cảm ơn bạn đã mua hàng! Đơn hàng của bạn đã được đặt thành công.
                </p>

                {/* Nút chuyển đến Order */}
                <Link
                    to="/order"
                    className="inline-block px-6 py-3 mt-6 font-semibold text-white transition-all duration-200 bg-green-600 rounded-lg shadow-md hover:bg-green-700"
                >
                    Xem đơn hàng
                </Link>
            </div>
        </div>
    );
};

export default Success;
