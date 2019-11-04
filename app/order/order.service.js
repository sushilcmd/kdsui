const { connection } = require('mongoose');
const billModel = connection.collection('bills');

const { allKot } = require('./pipeline');

const getAllOrder = async function() {
    try {
        const pipeline = allKot()
        const kots = await billModel.aggregate(pipeline).toArray();
        return kots
    } catch (error) {
        throw new Error(error);
    }
}

module.exports = { getAllOrder };