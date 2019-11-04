const allKot = function() {
    return [{
            '$lookup': {
                'from': 'billItems',
                'localField': 'BillID',
                'foreignField': 'BillID',
                'as': 'items'
            }
        },
        {
            $project: {
                BillID: 1,
                BillNo: 1,
                BillType: 1,
                FullName: 1,
                LoginName: 1,
                TaxCategory: 1,
                items: 1
            }
        },
        {
            $limit: 100
        }
    ]
}

module.exports = { allKot };