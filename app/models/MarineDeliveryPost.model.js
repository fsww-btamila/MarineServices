const sql = require('mssql')
const config = require("./db.js");

// async/await style:
const pool1 = new sql.ConnectionPool(config);
pool1.connect();

// constructor
const postServices = function (postservices) { };

//MN_GetLoginUser
postServices.login = async (req, result) => {
  try {
    const request = pool1.request();
    let queyrParam = req;
    console.log("exec MN_GetLoginUser", queyrParam);
    let queryStr = "exec MN_GetLoginUser '" + queyrParam + "'";
    console.log("queryStr", queryStr)
    return result = await request.query(queryStr);
  } catch (error) {
    console.error('SQL error', error);
  }
}

//MN_UpdateLogOutDetails
postServices.logout = async (req, result) => {
  try {
    console.log("req", req.body.params[0].value);
    const request = pool1.request();
    let queyrParam = req.body.params[0].value;
    console.log("exec MN_UpdateLogOutDetails", queyrParam);
    let queryStr = "exec MN_UpdateLogOutDetails '" + queyrParam + "'";
    return result = await request.query(queryStr);
  } catch (error) {
    console.error('SQL error', error);
  }
}


//MN_ClearUserSession
postServices.ClearUserSession = async (req, result) => {
  try {
    console.log("req", req.body.params[0].value);
    const request = pool1.request();
    let queyrParam = req.body.params[0].value;
    console.log("exec MN_ClearUserSession", queyrParam);
    let queryStr = "exec MN_ClearUserSession '" + queyrParam + "'";
    return result = await request.query(queryStr);
  } catch (error) {
    console.error('SQL error', error);
  }
}

//MN_GetOrderStatus
postServices.getOrderStatus = async (req, result) => {
  try {
    // console.log("req", req.body.params[0].value);
    const request = pool1.request();
    let queyrParam = req.body.params[0].value; 
    let queryStr = "exec MN_GetOrderStatus '" + queyrParam + "'";
    console.log("exec MN_GetOrderStatus", queryStr);
    return result = await request.query(queryStr);
  } catch (error) {
    // console.error('SQL error', error);
  }
}

//MN_UpdateOrders
postServices.saveOrder = async (req, result) => {
  try {
    // console.log("req", req.body.params[0].value);
    const request = pool1.request();
    let queyrParam = req.body.params[0].value;
    queyrParam = encodeXml(queyrParam);
    let queryStr = "exec MN_UpdateOrders '" + queyrParam + "'";
    console.log("exec MN_UpdateOrders", queryStr);
    return result = await request.query(queryStr);
  } catch (error) {
    console.error('SQL error', error);
  }
}

//MN_UpdateOrderNotesFromApp
postServices.updateOrderNote = async (req, result) => {
  try {
    // console.log("req", req.body.params[0].value);
    const request = pool1.request();
    let queyrParam = req.body.params[0].value;
    queyrParam = encodeXml(queyrParam);
    let queryStr = "exec MN_UpdateOrderNotesFromApp '" + queyrParam + "'";
    console.log("exec MN_UpdateOrderNotesFromApp", queryStr);
    return result = await request.query(queryStr);
  } catch (error) {
    console.error('SQL error', error);
  }
}

//MN_CalcShipReading
postServices.calcShipReading = async (req, result) => {
  try {
    // console.log("req", req.body.params[0].value);
    const request = pool1.request();
    let queyrParam = req.body.params[0].value;
    let queryStr = "exec MN_CalcShipReading '" + queyrParam + "'";
    console.log("exec MN_CalcShipReading", queryStr);
    return result = await request.query(queryStr);
  } catch (error) {
    console.error('SQL error', error);
  }
}

//MN_UpdateShipmentDetails
postServices.postShipment = async (req, result) => {
  try {
    // console.log("req", req.body.params[0].value);
    const request = pool1.request();
    let queyrParam = req.body.params[0].value;
    queyrParam = encodeXml(queyrParam);
    let queryStr = "exec MN_UpdateShipmentDetails '" + queyrParam + "'";
    console.log("exec MN_UpdateShipmentDetails", queryStr);
    return result = await request.query(queryStr);
  } catch (error) {
    console.error('SQL error', error);
  }
}

//MN_UpdateINSiteTankVolume
postServices.updateTankVolume = async (req, result) => {
  try {
    // console.log("req", req.body.params[0].value);
    const request = pool1.request();
    let queyrParam = req.body.params[0].value;
    let queryStr = "exec MN_UpdateINSiteTankVolume '" + queyrParam + "'";
    console.log("exec MN_UpdateINSiteTankVolume", queryStr);
    return result = await request.query(queryStr);
  } catch (error) {
    console.error('SQL error', error);
  }
}

//MN_UpdateOrderStatusHistory
postServices.updateOrderStatus = async (req, result) => {
  try {
    // console.log("req", req.body.params[0].value);
    const request = pool1.request();
    let queyrParam = req.body.params[0].value;
    let queryStr = "exec MN_UpdateOrderStatusHistory '" + queyrParam + "'";
    console.log("exec MN_UpdateOrderStatusHistory", queryStr);
    return result = await request.query(queryStr);
  } catch (error) {
    console.error('SQL error', error);
  }
}

//MN_CalWeightVolumeQty
postServices.calcWeightVolumeQty = async (req, result) => {
  try {
    // console.log("req", req.body.params[0].value);
    const request = pool1.request();
    let queyrParam = req.body.params[0].value;
    let queryStr = "exec MN_CalWeightVolumeQty '" + queyrParam + "'";
    console.log("exec MN_CalWeightVolumeQty", queryStr);
    return result = await request.query(queryStr);
  } catch (error) {
    console.error('SQL error', error);
  }
}

//MN_UpdateAdHocVessel
postServices.postAdHocVessel = async (req, result) => {
  try {
    // console.log("req", req.body.params[0].value);
    const request = pool1.request();
    let queyrParam = req.body.params[0].value;
    let queryStr = "exec MN_UpdateAdHocVessel '" + queyrParam + "'";
    console.log("exec MN_UpdateAdHocVessel", queryStr);
    return result = await request.query(queryStr);
  } catch (error) {
    console.error('SQL error', error);
  }
}

//MN_CancelOrders
postServices.updateCancelOrders = async (req, result) => {
  try {
    // console.log("req", req.body.params[0].value);
    const request = pool1.request();
    let queyrParam = req.body.params[0].value;
    let queryStr = "exec MN_CancelOrders '" + queyrParam + "'";
    console.log("exec MN_CancelOrders", queryStr);
    return result = await request.query(queryStr);
  } catch (error) {
    console.error('SQL error', error);
  }
}

//MN_GetOrdersmdaNew
postServices.getOredersNew = async (req, result) => {
  try {
    // console.log("req", req.body);
    const request = pool1.request();
    let queyrParam = req;
    console.log("exec MN_GetOrdersmdaNew", queyrParam,)
    // console.log("queyrParam", queyrParam);
    let queryStr = "exec MN_GetOrdersmdaNew '" + queyrParam + "'";
    return result = await request.query(queryStr);
  } catch (err) {
    console.error('SQL error', err);
  }
};

function encodeXml(s) {
  return (s
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/\*/g, '&#42;')
      .replace(/\?/g, '&#63;')
      .replace(/'/g, '&#39;')
  );
}


module.exports = postServices;
