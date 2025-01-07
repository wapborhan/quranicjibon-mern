const Names = require("../models/Names");

exports.getName = async (req, res, next) => {
  try {
    const data = await Names.find({});
    res.status(200).json({
      success: true,
      status: 200,
      message: "Allah 99 Names Found",
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
