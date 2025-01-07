const Kalemas = require("../models/Kalema");
const Names = require("../models/Names");

exports.getKalema = async (req, res, next) => {
  try {
    const data = await Kalemas.find({});
    res.status(200).json({
      success: true,
      status: 200,
      message: `Successfully fetched ${data.length} kalemas`,
      data: data,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      status: 500,
      message: error.message,
      data: {},
    });
  }
};
