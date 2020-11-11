const Models = require("../models/MarineDeliveryPost.model.js");


//MarineDelivery all POST Requests

//MN_GetLoginUser
module.exports.login = async (request, res) =>{
  try {
    res.setHeader('Access-Control-Allow-Origin', '*');
    let reqParam = request.body.params[0].value;
    console.log("reqParam",reqParam)
    const result = await Models.login(reqParam);
    return res.json(result.recordsets[0]);
  }
  catch (err) {
    console.log("error", err);
    return res.json(err);
  }
}

//MN_UpdateLogOutDetails
module.exports.logout = async (request, res) =>{
  res.setHeader('Access-Control-Allow-Origin', '*');
  try {
    const result = await Models.logout(request);
    return res.json(result.recordsets[0]);
  }
  catch (err) {
    console.log("error", err);
    return res.json(err);
  }
} 

//MN_UpdateOrders
module.exports.saveOrder = async (request, res) =>{
  res.setHeader('Access-Control-Allow-Origin', '*');
  try {
    const result = await Models.saveOrder(request);
    return res.json(result.recordsets[0]);
  }
  catch (err) {
    console.log("error", err);
    return res.json(err);
  }
}

//MN_UpdateOrderNotesFromApp
module.exports.updateOrderNote = async (request, res) =>{
  res.setHeader('Access-Control-Allow-Origin', '*');
  try {
    const result = await Models.updateOrderNote(request);
    return res.json(result.recordsets[0]);
  }
  catch (err) {
    console.log("error", err);
    return res.json(err);
  }
}

//MN_CalcShipReading
module.exports.calcShipReading = async (request, res) =>{
  res.setHeader('Access-Control-Allow-Origin', '*');
  try {
    const result = await Models.calcShipReading(request);
    return res.json(result.recordsets[0]);
  }
  catch (err) {
    console.log("error", err);
    return res.json(err);
  }
}

//MN_UpdateShipmentDetails
module.exports.postShipment = async (request, res) =>{
  res.setHeader('Access-Control-Allow-Origin', '*');
  try {
    const result = await Models.postShipment(request);
    return res.json(result.recordsets[0]);
  }
  catch (err) {
    console.log("error", err);
    return res.json(err);
  }
}

//MN_UpdateINSiteTankVolume
module.exports.updateTankVolume = async (request, res) =>{
  res.setHeader('Access-Control-Allow-Origin', '*');
  try {
    const result = await Models.updateTankVolume(request);
    return res.json(result.recordsets[0]);
  }
  catch (err) {
    console.log("error", err);
    return res.json(err);
  }
}

//MN_UpdateOrderStatusHistory
module.exports.updateOrderStatus = async (request, res) =>{
  res.setHeader('Access-Control-Allow-Origin', '*');
  try {
    const result = await Models.updateOrderStatus(request);
    return res.json(result.recordsets[0]);
  }
  catch (err) {
    console.log("error", err);
    return res.json(err);
  }
}


//MN_ClearUserSession
module.exports.ClearUserSession = async (request, res) =>{
  res.setHeader('Access-Control-Allow-Origin', '*');
  try {
    const result = await Models.ClearUserSession(request);
    return res.json(result.recordsets[0]);
  }
  catch (err) {
    console.log("error", err);
    return res.json(err);
  }
}

//MN_GetOrderStatus
module.exports.getOrderStatus = async (request, res) =>{
  res.setHeader('Access-Control-Allow-Origin', '*');
  try {
    const result = await Models.getOrderStatus(request);
    console.log("result", result)
    return res.json(result.recordsets[0]);
  }
  catch (err) {
    console.log("error", err);
    return res.json(err);
  }
}

//MN_CalWeightVolumeQty
module.exports.calcWeightVolumeQty = async (request, res) =>{
  res.setHeader('Access-Control-Allow-Origin', '*');
  try {
    const result = await Models.calcWeightVolumeQty(request);
    console.log("result", result)
    return res.json(result.recordsets[0]);
  }
  catch (err) {
    console.log("error", err);
    return res.json(err);
  }
}

//MN_UpdateAdHocVessel
module.exports.postAdHocVessel = async (request, res) =>{
  res.setHeader('Access-Control-Allow-Origin', '*');
  try {
    const result = await Models.postAdHocVessel(request);
    console.log("result", result)
    return res.json(result.recordsets[0]);
  }
  catch (err) {
    console.log("error", err);
    return res.json(err);
  }
}

//MN_CancelOrders
module.exports.updateCancelOrders = async (request, res) =>{
  res.setHeader('Access-Control-Allow-Origin', '*');
  try {
    const result = await Models.updateCancelOrders(request);
    console.log("result", result)
    return res.json(result.recordsets[0]);
  }
  catch (err) {
    console.log("error", err);
    return res.json(err);
  }
}


//MN_GetOrdersmdaNew
module.exports.getOredersNew = async (request, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  try {
    let reqParam = request.body.params[0].value;
    console.log("reqParam",reqParam)
    const result = await Models.getOredersNew(reqParam);
    formOrdersMdaNew(request, result, function(OrdersArr){
    console.log("-----", Object.keys(OrdersArr).length);
    // let ordersArray = OrdersArr.slice(1, 5);
    return res.json(OrdersArr);
    });

  }
  catch (err) {
    console.log("error", err);
    return res.json(err);
  }
};


const formOrdersMdaNew = (request, result, cb) => {
  var orderArr = new Array(), orItemArr = new Array(), Arraydata = new Array(), OrderNotesArr = new Array(), OrdersUpDtTm = new Array(), userSession = new Array();
  orderArr = result.recordsets[0];
  orItemArr = result.recordsets[1];
  Arraydata = result.recordsets[2];
  OrderNotesArr = result.recordsets[3];
  OrdersUpDtTm = result.recordsets[4];
  userSession = result.recordsets[5];

  // console.log("Arraydata", Arraydata);
  // console.log("orderArr", orderArr); 
  var orderStsArr = new Array(), OrdersArr = new Array();

  if (Object.keys(orderArr).length > 0) {

    for (let oh = 0; oh < orderArr.length; oh++) {
      let row = orderArr[oh];
      // console.log("OH SysTrxno", row.SysTrxNo);
      var returnData = {}, ordersObj = {}, orderItemObj = new Array();
      if (row.SysTrxNo != null) {
        const formData = {},
          Driver = {},
          OrderNotes = {},
          Vehicle = {},
          Vessels = {},
          OrderUpdTime = {},
          Destination = {};
        let orSysTNo = (row.SysTrxNo) ? parseInt(row.SysTrxNo) : 0;

        let LastUpdatedTime = row.LastUpdatedTime ? row.LastUpdatedTime : 0;
        if (Object.keys(orItemArr).length > 0) {
          for (let oi = 0; oi < orItemArr.length; oi++) {
            // console.log("itemObj.SysTrxNo", orItemArr[oi].SysTrxNo);

            let itemObj = orItemArr[oi];
            let orderItemSysTNo = (itemObj.SysTrxNo) ? parseInt(itemObj.SysTrxNo) : 0;
            // console.log("before Check ",orSysTNo, orderItemSysTNo )
            if (orSysTNo == orderItemSysTNo) {
              // console.log("Check ",orSysTNo, orderItemSysTNo )
              var myArr = {},
                Receiving = {},
                Source = {};
              var MasterSiteID = itemObj.MasterSiteID ? parseInt(itemObj.MasterSiteID) : 0;
              var INSiteCode = itemObj.INSiteCode ? itemObj.INSiteCode : null;
              var INSiteAddress = itemObj.INSiteAddress ? itemObj.INSiteAddress : null;
              var EnableElectronicDOI = itemObj.EnableElectronicDOI ? itemObj.EnableElectronicDOI : 'N';

              myArr["INSiteCode"] = INSiteCode;
              myArr["MasterSiteID"] = MasterSiteID;
              myArr["ARShipToTankID"] = itemObj.ARShipToTankID ? parseInt(itemObj.ARShipToTankID) : null;
              myArr["AdditionalCost"] = itemObj.AdditionalCost ? itemObj.AdditionalCost : null;
              myArr["AvailableQty"] = itemObj.AvailableQty ? parseInt(itemObj.AvailableQty) : 0;
              myArr["BIEnableTankReadings"] = itemObj.BIEnableTankReadings ? itemObj.BIEnableTankReadings : 0;
              myArr["BIUOM"] = itemObj.BIUOM ? itemObj.BIUOM : null;
              myArr["BIUOMID"] = itemObj.BIUOMID ? parseInt(itemObj.BIUOMID) : 0;
              // myArr["Code"] = itemObj.Code ? str_ireplace("\u0027", "'", itemObj.Code) : 0;
              myArr["Code"] = itemObj.Code ? (itemObj.Code).replace('\u0027', "'") : 0;
              myArr["ConversionFactor"] = itemObj.ConversionFactor ? parseInt(itemObj.ConversionFactor) : 0;
              myArr["CustomerID"] = itemObj.CustomerID ? itemObj.CustomerID : 0;
              myArr["DefConversionUOMID"] = itemObj.DefConversionUOMID ? parseInt(itemObj.DefConversionUOMID) : 0;
              myArr["DefOnHandUOMID"] = itemObj.DefOnHandUOMID ? parseInt(itemObj.DefOnHandUOMID) : 0;
              // myArr["Descr"] = itemObj.Descr ? str_ireplace("\u0027", "'", itemObj.Descr) : 0;
              myArr["Descr"] = itemObj.Descr ? (itemObj.Descr).replace('\u0027', "'") : 0;
              myArr["DtTm"] = itemObj.DtTm ? itemObj.DtTm : 0;
              myArr["FromCsTankFuelHistoryID"] = itemObj.FromCsTankFuelHistoryID ? parseInt(itemObj.FromCsTankFuelHistoryID) : 0;
              myArr["IsBillable"] = itemObj.IsBillable ? itemObj.IsBillable : 0;
              myArr["IsPackaged"] = itemObj.IsPackaged ? itemObj.IsPackaged : 0;
              myArr["MasterProdID"] = itemObj.MasterProdID ? parseInt(itemObj.MasterProdID) : 0;
              myArr["Notes"] = itemObj.Notes ? (itemObj.Notes).trim() : null;
              myArr["OnConversionUOM"] = itemObj.OnConversionUOM ? itemObj.OnConversionUOM : null;
              myArr["OnCountUOM"] = itemObj.OnCountUOM ? itemObj.OnCountUOM : 0;
              myArr["OnCountUOMID"] = itemObj.OnCountUOMID ? parseInt(itemObj.OnCountUOMID) : 0;
              myArr["OnHandUOM"] = itemObj.OnHandUOM ? itemObj.OnHandUOM : 0;
              myArr["Priority"] = itemObj.Priority ? itemObj.Priority : 0;
              myArr["ProdContID"] = itemObj.ProdContID ? parseInt(itemObj.ProdContID) : 0;
              myArr["PromisedDtTm"] = itemObj.PromisedDtTm ? itemObj.PromisedDtTm : 0;
              myArr["Qty"] = itemObj.Qty ? parseInt(itemObj.Qty) : 0;
              myArr["RackPriceKeyed"] = itemObj.RackPriceKeyed ? itemObj.RackPriceKeyed : null;
              myArr["RequestedDtTm"] = itemObj.RequestedDtTm ? itemObj.RequestedDtTm : 0;
              myArr["SellByUOM"] = itemObj.SellByUOM ? itemObj.SellByUOM : 0;
              myArr["SellByUOMID"] = itemObj.SellByUOMID ? parseInt(itemObj.SellByUOMID) : 0;
              myArr["ShipToTankID"] = itemObj.ShipToTankID ? parseInt(itemObj.ShipToTankID) : null;
              myArr["Status"] = itemObj.Status ? itemObj.Status : 0;
              myArr["StatusCode"] = itemObj.StatusCode ? itemObj.StatusCode : 0;
              myArr["SysTrxLine"] = itemObj.SysTrxLine ? parseInt(itemObj.SysTrxLine) : 0;
              myArr["SysTrxNo"] = itemObj.SysTrxNo ? parseInt(itemObj.SysTrxNo) : 0;
              myArr["ToCsTankFuelHistoryID"] = itemObj.ToCsTankFuelHistoryID ? parseInt(itemObj.ToCsTankFuelHistoryID) : 0;
              myArr["UnitPrice"] = itemObj.UnitPrice ? parseFloat(itemObj.UnitPrice) : 0;
              myArr["UnitPriceKeyed"] = itemObj.UnitPriceKeyed ? parseFloat(itemObj.UnitPriceKeyed) : 0;
              myArr["AllowNegative"] = itemObj.AllowNegative ? itemObj.AllowNegative : 'N';
              myArr["CriticalDescription"] = itemObj.CriticalDescription ? itemObj.CriticalDescription : null;
              myArr['PONo'] = (itemObj.PONo) ? (itemObj.PONo).trim() : '';
              myArr["IsBulk"] = itemObj.IsBulk ? itemObj.IsBulk : 'N';
              myArr["VendorProductxRef"] = itemObj.VendorProductxRef ? itemObj.VendorProductxRef : null;
              myArr["SrcProdContID"] = itemObj.SrcProdContID ? itemObj.SrcProdContID : null;

              //form source tank
              myArr["Source"] = Source;
              if (myArr["FromCsTankFuelHistoryID"] != null && myArr["FromCsTankFuelHistoryID"] > 0) {
                Source['Code'] = itemObj.SrcINSiteCode ? itemObj.SrcINSiteCode : null;
                Source['Denominator'] = itemObj.SrcDenominator ? itemObj.SrcDenominator : null;
                Source['Depth'] = itemObj.SrcDepth ? itemObj.SrcDepth : null;
                Source['DepthFeet'] = itemObj.SrcDepthFeet ? itemObj.SrcDepthFeet : null;
                Source['DepthFraction'] = itemObj.SrcDepthFraction ? itemObj.SrcDepthFraction : null;
                Source['Descr'] = itemObj.SrcINSiteDescription ? itemObj.SrcINSiteDescription : null;
                Source['INSiteID'] = itemObj.SrcINSiteID ? itemObj.SrcINSiteID : null;
                Source['TankCapacity'] = itemObj.SrcTankCapacity ? itemObj.SrcTankCapacity : null;
                Source['TankID'] = itemObj.SrcINSiteTankID ? itemObj.SrcINSiteTankID : null;
                Source['HasLinearExpansionCoeff'] = itemObj.SrcHasLinearExpansionCoeff ? itemObj.SrcHasLinearExpansionCoeff : null;
                Source['Insulated'] = itemObj.SrcInsulated ? itemObj.SrcInsulated : null;
                Source['MaxInch'] = itemObj.SrcMaxInch ? itemObj.SrcMaxInch : null;
                Source['MaxDenominator'] = itemObj.SrcMaxDenominator ? itemObj.SrcMaxDenominator : null;
                Source['TankChartID'] = itemObj.SrcTankChartID ? itemObj.SrcTankChartID : null;
                Source['LinearExpansionCoeff'] = itemObj.SrcLinearExpansionCoeff ? itemObj.SrcLinearExpansionCoeff : null;
                Source['TankOperatingTemp'] = itemObj.SrcTankOperatingTemp ? itemObj.SrcTankOperatingTemp : null;
                myArr["Source"] = Source;
              }

              //form receiving tank
              myArr["Receiving"] = Receiving;
              if (myArr["ToCsTankFuelHistoryID"] != null && myArr["ToCsTankFuelHistoryID"] > 0) {
                Receiving['Code'] = itemObj.RcvINSiteCode ? itemObj.RcvINSiteCode : null;
                Receiving['Denominator'] = itemObj.RcvDenominator ? itemObj.RcvDenominator : null;
                Receiving['Depth'] = itemObj.RcvDepth ? itemObj.RcvDepth : null;
                Receiving['DepthFeet'] = itemObj.RcvDepthFeet ? itemObj.RcvDepthFeet : null;
                Receiving['DepthFraction'] = itemObj.RcvDepthFraction ? itemObj.RcvDepthFraction : null;
                Receiving['Descr'] = itemObj.RcvINSiteDescription ? itemObj.RcvINSiteDescription : null;
                Receiving['INSiteID'] = itemObj.RcvINSiteID ? itemObj.RcvINSiteID : null;
                Receiving['TankCapacity'] = itemObj.RcvTankCapacity ? itemObj.RcvTankCapacity : null;
                Receiving['TankID'] = itemObj.RcvINSiteTankID ? itemObj.RcvINSiteTankID : null;
                Receiving['HasLinearExpansionCoeff'] = itemObj.RcvHasLinearExpansionCoeff ? itemObj.RcvHasLinearExpansionCoeff : null;
                Receiving['Insulated'] = itemObj.RcvInsulated ? itemObj.RcvInsulated : null;
                Receiving['MaxInch'] = itemObj.RcvMaxInch ? itemObj.RcvMaxInch : null;
                Receiving['MaxDenominator'] = itemObj.RcvMaxDenominator ? itemObj.RcvMaxDenominator : null;
                Receiving['TankChartID'] = itemObj.RcvTankChartID ? itemObj.RcvTankChartID : null;
                Receiving['LinearExpansionCoeff'] = itemObj.RcvLinearExpansionCoeff ? itemObj.RcvLinearExpansionCoeff : null;
                Receiving['TankOperatingTemp'] = itemObj.RcvTankOperatingTemp ? itemObj.RcvTankOperatingTemp : null;
                myArr["Receiving"] = Receiving;
              }

              orderItemObj.push(myArr);

            }
          }
          returnData['OrderItems'] = orderItemObj;
        }

        // orderHeader form
        let ShipToVesselID = row.ShipToVesselID ? parseInt(row.ShipToVesselID) : null;
        let userId = row.UserID ? row.UserID : '';
        let DtTm = row.DtTm ? row.DtTm : '';
        let InternalTransferOrder = row.InternalTransferOrder ? row.InternalTransferOrder : 0;
        let SiteType = row.SiteType ? row.SiteType : null;
        formData['DtTm'] = DtTm;
        formData['LastUpdatedTime'] = LastUpdatedTime;
        formData['ShipToVesselID'] = ShipToVesselID;
        formData['SysTrxNo'] = orSysTNo;
        formData['UserID'] = userId;
        formData['AuxiliaryVesselCount'] = row.AuxiliaryVesselCount ? parseInt(row.AuxiliaryVesselCount) : null;
        formData['AuxiliaryVesselID'] = row.AuxiliaryVesselID ? parseInt(row.AuxiliaryVesselID) : null;
        formData['CompanyID'] = row.CompanyID ? row.CompanyID : 0;
        formData['CreditAvailable'] = row.CreditAvailable ? parseInt(row.CreditAvailable) : null;
        formData['CustomerID'] = row.CustomerID ? row.CustomerID : 0;
        formData['CustomerName'] = row.CustomerName ? row.CustomerName : '';
        // formData['CustomerName'] = row.CustomerName ? htmlspecialchars_decode(row.CustomerName, ENT_NOQUOTES) : null;
        formData['CustomerNumber'] = row.CustomerNumber ? row.CustomerNumber : '';
        formData['DefCarrierID'] = row.DefCarrierID ? parseInt(row.DefCarrierID) : 0;
        formData['DefDriverID'] = row.DefDriverID ? parseInt(row.DefDriverID) : 0;
        formData['DefVehicleID'] = row.DefVehicleID ? parseInt(row.DefVehicleID) : 0;
        formData['EnteredBy'] = userId;
        formData['FreightIN'] = row.FreightIN ? row.FreightIN : 0;
        formData['FreightOUT'] = row.FreightOUT ? row.FreightOUT : 0;
        formData['InternalTransferOrder'] = InternalTransferOrder;
        formData['LastModifiedUser'] = row.LastModifiedUser ? row.LastModifiedUser : 0;
        formData['LastStatusDate'] = row.LastStatusDate ? row.LastStatusDate : 0;
        formData['LoadNo'] = row.LoadNo ? row.LoadNo : 0;
        formData['MarineLocDescr'] = row.MarineLocDescr ? row.MarineLocDescr : null;
        formData['MarineLocID'] = row.MarineLocID ? parseInt(row.MarineLocID) : 0;
        formData['MarineSessionID'] = row.MarineSessionID ? parseInt(row.MarineSessionID) : 0;
        formData['MarineDefaultLocDescr'] = row.DefLocDescr ? row.DefLocDescr : null;
        formData['MarineLocCode'] = row.MarineLocCode ? row.MarineLocCode : null;
        // formData['MasterSiteID'] = row.MasterSiteID ? row.MasterSiteID : 0;
        formData['OrderDtTm'] = row.OrderDtTm ? row.OrderDtTm : 0;
        formData['OrderNo'] = row.OrderNo ? row.OrderNo : 0;
        formData['OrderType'] = row.OrderType ? row.OrderType : 0;
        formData['PONo'] = row.PONo ? (row.PONo).trim() : '';
        formData['ReceivingContactName'] = row.ReceivingContactName ? row.ReceivingContactName : null;
        formData['ReceivingContactNumber'] = row.ReceivingContactNumber ? row.ReceivingContactNumber : '';
        formData['ShiptoID'] = row.ShiptoID ? parseInt(row.ShiptoID) : null;
        formData['SiteType'] = SiteType;
        formData['Status'] = (row.Status && row.Status!='undefined') ? row.Status : 0;
        formData['StatusCode'] = row.StatusCode ? row.StatusCode : 0;
        formData['ToSiteID'] = row.ToSiteID ? parseInt(row.ToSiteID) : 0;
        formData['INSiteAddress'] = INSiteAddress;
        formData["INSiteCode"] = INSiteCode;
        formData['ToSiteAddress'] = (row.ToSiteAddress) ? row.ToSiteAddress : null;
        formData['ToSiteCode'] = row.ToSiteCode ? row.ToSiteCode : null;
        formData["MasterSiteID"] = MasterSiteID;
        formData["EnableElectronicDOI"] = EnableElectronicDOI;
        formData['StandardAcctID'] = row.StandardAcctID ? row.StandardAcctID : null;
        formData['Contracts'] = row.Contracts ? row.Contracts : "";
        formData['AllowDOI'] = row.AllowDOI ? row.AllowDOI : null;
        formData['AllowDOIShipTo'] = row.AllowDOIShipTo ? row.AllowDOIShipTo : null;


        formData['firstDoiComplete'] = false;
        formData['shipDocPost'] = false;

        //Check session
        formData["SessionID"] = row.SessionID ? row.SessionID : null;
        formData["IsSessionActive"] = row.IsSessionActive ? row.IsSessionActive : null;
        formData["UserSesion"] = row.UserSesion ? row.UserSesion : null;

        //  form destination array
        if (InternalTransferOrder == 'Y' && SiteType == 'I') {
          formData['Destination'] = null;
        } else {
          Destination['Code'] = row.MLCode ? row.MLCode : null;
          Destination['Descr'] = row.MLDescr ? row.MLDescr : null;
          Destination['Latitude'] = row.Latitude ? row.Latitude : null;
          Destination['Longitude'] = row.Longitude ? row.Longitude : null;
          Destination['MarineLocID'] = row.MarineLocID ? parseInt(row.MarineLocID) : 0;
          Destination['DefLocDescr'] = row.DefLocDescr ? row.DefLocDescr : null;
          formData['Destination'] = Destination;
        }

        //  form Driver array
        Driver['DriverID'] = row.DriverID ? row.DriverID : null;
        Driver['Name'] = row.Name ? row.Name : null;
        formData['Driver'] = Driver;

        //  form vehicle array
        Vehicle['Code'] = row.Code ? row.Code : '';
        Vehicle['Descr'] = row.Descr ? row.Descr : '';
        Vehicle['EnableSubCompartment'] = row.EnableSubCompartment ? row.EnableSubCompartment : null;
        Vehicle['EnforceShipmentMarineApp'] = row.EnforceShipmentMarineApp ? row.EnforceShipmentMarineApp : null;
        Vehicle['TankCount'] = row.TankCount ? parseInt(row.TankCount) : 0;
        Vehicle['VehicleID'] = row.VehicleID ? parseInt(row.VehicleID) : 0;
        formData['Vehicle'] = Vehicle;

        //  form vessel array
        var vesselArr = new Array();
        if (ShipToVesselID > 0) {
          Vessels['CustomerName'] = row.ARCustomerName ? row.ARCustomerName : '';
          Vessels['GrossTonnage'] = row.GrossTonnage ? row.GrossTonnage : '';
          Vessels['IMONo'] = row.IMONo ? row.IMONo : null;
          Vessels['OwnershipStdAcctID'] = row.OwnershipStdAcctID ? parseInt(row.OwnershipStdAcctID) : null;
          Vessels['StandardAcctNo'] = row.StandardAcctNo ? row.StandardAcctNo : null;
          Vessels['VesselCode'] = row.VesselCode ? row.VesselCode : null;
          Vessels['VesselDescr'] = row.VesselDescr ? row.VesselDescr : null;
          Vessels['VesselID'] = row.VesselID ? parseInt(row.VesselID) : null;
          Vessels['dfVesselCode'] = row.VesselCode ? row.VesselCode : null;
          vesselArr.push(Vessels);
        }
        formData['Vessels'] = vesselArr;

        var OrderNotesArr = new Array();
        formData['OrderNotes'] = OrderNotesArr;
        OrderUpdTime['LastUpdatedTime'] = LastUpdatedTime;
        returnData['OrderHdr'] = formData;

        //  form OrderNotes array 
        if (Object.keys(OrderNotesArr).length > 0) {
          for (let on = 0; on < OrderNotesArr.length; on++) {
            var notesArr = OrderNotesArr[on];
            orderNotesSysTNo = notesArr.SysTrxNo ? parseInt(notesArr.SysTrxNo) : 0;
            if (orSysTNo == orderNotesSysTNo) {
              OrderNotes['SysTrxNo'] = orderNotesSysTNo;
              OrderNotes['NoteNo'] = notesArr.NoteNo ? parseInt(notesArr.NoteNo) : 0;
              OrderNotes['Note'] = notesArr.Note ? notesArr.Note : '';
              OrderNotes['UserID'] = userId;
              OrderNotes['DtTm'] = DtTm;
              OrderNotesArr.push(OrderNotes);
            }
          }
          formData['OrderNotes'] = OrderNotesArr;
          returnData['OrderHdr'] = formData;
        }
        OrdersArr.push(returnData);
      }

    }
  }
  // console.log("Arraydata", Arraydata);
  // form not Open Orders
  // var notOpenOdr = {};
  // console.log("Arraydata[i]", Arraydata, Object.keys(Arraydata).length);
  if (Arraydata && Object.keys(Arraydata).length > 1) {
    for (var i = 0; i < Arraydata.length; i++) {
      let orders = new Array();
      let row = Arraydata[i];
      let odrProcessed = {};
      odrProcessed = JSON.parse(row.JsonParam);
      odrProcessed = (odrProcessed['OrderList']['Orders']) ? odrProcessed['OrderList']['Orders'] : new Array();
      if (Object.keys(odrProcessed).length > 0) {
        odrProcessed[0]['OrderHdr']['SessionID'] = row.SessionID ? row.SessionID : null;
        odrProcessed[0]['OrderHdr']['IsSessionActive'] = row.IsSessionActive ? row.IsSessionActive : 'N';
        odrProcessed[0]['OrderHdr']['UserSesion'] = row.UserSesion ? row.UserSesion : null;
        // notOpenOdr['Orders'] = odrProcessed;
        orders.push(odrProcessed);
      }
      orderStsArr = [...orderStsArr, ...orders[0]];
    }
  }
  ordersObj['Orders'] = [...OrdersArr, ...orderStsArr];


  // form  orders last updated date and time
  // const getParams = JSON.stringify(request.body.OrdersInp);
  // var ParamsVal = JSON.parse(getParams);
  const ParamsVal =  JSON.parse(request.body.params[0].value);
  var OrderLUDTM = ParamsVal.OrdersInp.LastUpdatedDtTm;
  var OrderSUDTM = ParamsVal.OrdersInp.ShipLastUpdatedDtTm;
  const OrderUpdTime = {};
  if (OrdersUpDtTm && Object.keys(OrdersUpDtTm).length > 0) {
    OrderUpdTime['LastUpdatedTime'] =  OrdersUpDtTm[0].LastUpdatedTime;
    OrderUpdTime['ShipLastUpdatedTime'] = OrdersUpDtTm[0].ShipLastUpdatedTime;
  }else{
    OrderUpdTime['LastUpdatedTime'] =  OrderLUDTM;
    OrderUpdTime['ShipLastUpdatedTime'] = OrderSUDTM;
  }
  ordersObj['OrderUpdTime'] = OrderUpdTime;

  const userSessionArr = {};
  if (userSession && Object.keys(userSession).length > 0) {
    userSessionArr['SessionID'] = userSession[0].SessionID;
    userSessionArr['LogOffTime'] = userSession[0].LogOffTime;
    userSessionArr['IsSessionActive'] =  userSession[0].IsSessionActive;
  }
  else{
    userSessionArr['SessionID'] =  null;
    userSessionArr['LogOffTime'] =  null;
    userSessionArr['IsSessionActive'] = "N";
  }
  ordersObj["userSession"] = userSessionArr;

  cb(ordersObj);
}