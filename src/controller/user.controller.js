const { asyncHandler } = require('../utils/asyncHandler.js');

module.exports.registerUser = asyncHandler(async (req, res) => {
    res.status(200).json({
        message: "ok"
    })
})

