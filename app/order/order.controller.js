const { getAllOrder } = require('./order.service');

const order = async function(req, res) {
    try {
        const order = await getAllOrder();
        res.json({
            status: true,
            msg: `All KOT's`,
            data: order
        })
    } catch (error) {
        res.json({
            status: false,
            msg: `All KOT's`,
            data: 'something happen wrong. Please try again'
        })
    }
}

module.exports = { order };