const AyahsAr = require("../models/AyahsAr");
const AyahsBn = require("../models/AyahsBn");
const Suras = require("../models/Suras");

exports.getSuras = async (req, res, next) => {
  try {
    const data = await Suras.find({});
    res.status(200).json({
      success: true,
      status: 200,
      message: `Successfully found ${data.length} Suras`,
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

exports.getSingleSura = async (req, res, next) => {
  const { id } = req.params;
  console.log(id);

  try {
    const data = await Suras.findOne({ index: id });
    res.status(200).json({
      success: true,
      status: 200,
      message: `Successfully found ${data.name_bn} sura`,
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

exports.getSingleSuraAyahs = async (req, res, next) => {
  const { id } = req.params;
  console.log(id);

  try {
    const suras_ar = await AyahsAr.find({ sura_id: id });
    const suras_bn = await AyahsBn.find({ sura_id: id });

    const data = suras_ar.map((ar) => {
      const bn = suras_bn.find((b) => b.ayah_id === ar.ayah_id);
      return {
        id: ar.id,
        sura_id: ar.sura_id,
        ayah_id: ar.ayah_id,
        para: ar.para,
        hijb: ar.hijb,
        page: ar.page,
        uthmani: ar.uthmani,
        clean: ar.clean,
        qcf: ar.qcf,
        fonts: ar.fonts,
        tafsir_kathir: ar.tafsir_kathir,
        tafsir_fmazid: ar.tafsir_fmazid,
        tafsir_kathir_mujibor: ar.tafsir_kathir_mujibor,
        text_bn: bn ? bn.text : null,
      };
    });

    res.status(200).json({
      success: true,
      status: 200,
      message: `Successfully found`,
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
