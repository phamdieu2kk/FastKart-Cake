import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import SUCCESSIMAGE from '../assets/success.gif';
import FAILEDIMAGE from '../assets/cancel.gif';
import displayVNDCurrency from '../helpers/displayCurrency';

const Cancel = () => {
    const location = useLocation();
    const query = new URLSearchParams(location.search);
    const status = query.get('status'); // success / failed
    const orderId = query.get('orderId');
    const amount = query.get('amount');

    const isSuccess = status === 'success';

    return (
        <div className="flex items-center justify-center min-h-screen px-2 py-4 bg-white">
            <div className="flex flex-col items-center justify-center text-center animate-fadeIn">
                {/* Ảnh trạng thái */}
                <img
                    src={isSuccess ? SUCCESSIMAGE : FAILEDIMAGE}
                    alt={isSuccess ? 'Thanh toán thành công' : 'Thanh toán thất bại'}
                    className="object-cover mb-6 rounded-full w-52 h-52"
                />

                {/* Tiêu đề */}
                <h2 className={`text-3xl font-extrabold ${isSuccess ? 'text-green-700' : 'text-red-600'}`}>
                    {isSuccess ? 'Thanh toán thành công 🎉' : 'Thanh toán thất bại ❌'}
                </h2>

                {/* Hiển thị số tiền */}
                {amount && (
                    <p className="mt-4 text-lg text-gray-700">
                        Tổng tiền: <span className="font-bold">{displayVNDCurrency(Number(amount))}</span>
                    </p>
                )}

                {/* Nút chuyển hướng */}
                <Link
                    to={isSuccess ? `/orders/${orderId}` : '/cart'}
                    className={`inline-block px-8 py-4 mt-8 text-lg font-semibold text-white transition-all duration-200 rounded-xl ${
                        isSuccess ? 'bg-green-600 hover:bg-green-700' : 'bg-red-600 hover:bg-red-700'
                    }`}
                >
                    {isSuccess ? 'Xem đơn hàng' : 'Quay lại giỏ hàng'}
                </Link>
            </div>
        </div>
    );
};

export default Cancel;
