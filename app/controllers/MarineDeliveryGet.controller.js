const Models = require("../models/MarineDeliveryGet.model.js");
const { request } = require("express");

module.exports.getVehicles = async (request, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  try {
    const result = await Models.getVehicles(request.query);
    return res.json(result.recordsets[0]);
  }
  catch (err) {
    return res.json(err);
  }
};

module.exports.getVessels = async (request, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  try {
    const result = await Models.getVessels(request.query);
    return res.json(result.recordsets[0]);
  }
  catch (err) {
    return res.json(err);
  }
};

module.exports.getAllSites = async (request, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  try {
    const result = await Models.getAllSites(request.query);
    return res.json(result.recordsets[0]);
  }
  catch (err) {
    return res.json(err);
  }
};


module.exports.getShortcuts = async (request, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  try {
    console.log("getShortcuts", request.query)
    const result = await Models.getShortcuts(request.query);
    return res.json(result.recordsets[0]);
  }
  catch (err) {
    return res.json(err);
  }
};

module.exports.getAllDestinations = async (request, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  try {
    // console.log("getAllDestinations", request.query)
    const result = await Models.getAllDestinations(request.query);
    return res.json(result.recordsets[0]);
  }
  catch (err) {
    return res.json(err);
  }
};

module.exports.getDocLogo = async (request, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  try {
    // console.log("getDocLogo", request.query)
    const result = await Models.getDocLogo(request.query);
    return res.json(result.recordsets[0]);
  }
  catch (err) {
    return res.json(err);
  }
};

module.exports.getTankSubCompartments = async (request, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  try {
    // console.log("getTankSubCompartments", request.query)
    const result = await Models.getTankSubCompartments(request.query);
    return res.json(result.recordsets[0]);
  }
  catch (err) {
    return res.json(err);
  }
};

module.exports.getSourceTanks = async (request, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  try {
    // console.log("getSourceTanks", request.query)
    const result = await Models.getSourceTanks(request.query);
    return res.json(result.recordsets[0]);
  }
  catch (err) {
    return res.json(err);
  }
};

module.exports.getVehicleCompartments = async (request, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  try {
    // console.log("getVehicleCompartments", request.query)
    const result = await Models.getVehicleCompartments(request.query);
    return res.json(result.recordsets[0]);
  }
  catch (err) {
    return res.json(err);
  }
};

module.exports.getVehicleSubCompartments = async (request, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  try {
    // console.log("getVehicleSubCompartments", request.query)
    const result = await Models.getVehicleSubCompartments(request.query);
    return res.json(result.recordsets[0]);
  }
  catch (err) {
    return res.json(err);
  }
};

module.exports.getActivityLog = async (request, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  try {
    // console.log("getActivityLog", request.query)
    const result = await Models.getActivityLog(request.query);
    return res.json(result.recordsets[0]);
  }
  catch (err) {
    return res.json(err);
  }
};

module.exports.getOrderNotes = async (request, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  try {
    // console.log("getOrderNotes", request.query)
    const result = await Models.getOrderNotes(request.query);
    return res.json(result.recordsets);
  }
  catch (err) {
    return res.json(err);
  }
};

module.exports.getProducts = async (request, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  try {
    console.log("getProducts", request.query)
    const result = await Models.getProducts(request.query);
    return res.json(result.recordsets[0]);
  }
  catch (err) {
    return res.json(err);
  }
};

module.exports.deleteAttachment = async (request, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  try {
    // console.log("deleteAttachment", request.query)
    const result = await Models.deleteAttachment(request.query);
    return res.json(result.recordsets[0]);
  }
  catch (err) {
    return res.json(err);
  }
};



module.exports.getTanks = async (request, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  try {
    console.log(request.query)
    const result = await Models.tanks(request.query);
    return res.json(result.recordsets[0]);
  }
  catch (err) {
    return res.json(err);
  }
};


module.exports.getDrivers = async (request, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  try {
    const result = await Models.drivers(request.query);
    return res.json(result.recordsets[0]);

  } catch (err) {
    return res.json(err)
  }

}

module.exports.getDocMessages = async (request, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  try {
    const result = await Models.getDocMessages(request.query);
    return res.json(result.recordsets[0]);
  } catch (err) {
    return res.json(err);
  }
};
