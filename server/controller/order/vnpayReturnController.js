const crypto = require('crypto');
const qs = require('qs');
const orderModel = require('../../models/orderProductModel');
const vnp = require('../../config/vnpay');
const addToCart = require('../../models/cartProduct');

require('dotenv').config();

const vnpayReturnController = async (req, res) => {
    try {
        const vnp_Params = req.query; // Các tham số từ VNPay trả về

        const idCart = vnp_Params.vnp_OrderInfo.split(' ')[4];

        const vnp_ResponseCode = vnp_Params.vnp_ResponseCode;
        if (vnp_ResponseCode === '00') {
            await addToCart.findByIdAndDelete(idCart);
            return res.redirect(`${process.env.FRONTEND_URL}/success`);
        } else {
            return res.redirect(`${process.env.FRONTEND_URL}/cancel`);
        }
    } catch (error) {
        console.error('Error in vnpayReturnController:', error);
        return res.status(500).json({
            success: false,
            message: 'Internal server error.',
            error: error.message,
        });
    }
};

module.exports = vnpayReturnController;
