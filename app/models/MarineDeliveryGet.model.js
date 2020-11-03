const sql = require('mssql')
const config = require("./db.js");

const poolConn = new sql.ConnectionPool(config);
poolConn.connect();

// constructor
const getServices = function (getservices) { };

getServices.getVehicles = async (req, result) => {

    try {
        const request = poolConn.request();
        console.log("queyrParam", req)
        let companyID = req.CompanyID;
        let customerID = req.CustomerID;
        let queryStr = "exec MN_GetVehicle '" + companyID + "','" + customerID + "'";
        console.log(queryStr);
        return result = await request.query(queryStr);
    } catch (err) {
        console.error('SQL error', err);
    }
};

getServices.getVessels = async (req, result) => {

    try {
        const request = poolConn.request();
        console.log("queyrParam", req);
        let formParams = "'"+req.CompanyID + "',";
        let customerID = req.CustomerID;
        let searchTxt = req.SearchText;
        let startIndex = req.MinRecord;
        let endIndex = req.MaxRecord;

        if (searchTxt) {
            formParams += customerID + "," + '' + "," + '' + "," + searchTxt;
        } else if (startIndex && endIndex) {
            formParams += customerID + "," + startIndex + "," + endIndex;
        } else {
            formParams += customerID
        }

        let queryStr = "exec MN_GetVessels " + formParams;
        console.log("MN_GetVessels", queryStr)
        return result = await request.query(queryStr);
    } catch (err) {
        console.error('SQL error', err);
    }
};

getServices.getAllSites = async (req, result) => {
    try {
        const request = poolConn.request();
        let customerID = req.CustomerID;
        let queryStr = "exec MN_GetINSite '" + customerID + "'";
        return result = await request.query(queryStr);
    } catch (err) {
        console.error('SQL error', err);
    }
};


getServices.getShortcuts = async (req, result) => {
    try {
        const request = poolConn.request();
        let companyID = req.CompanyID;
        let customerID = req.CustomerID;
        let MasterSiteID = req.MasterSiteID;
        let formParams = "'" + companyID + "','" + customerID + "'," + MasterSiteID;
        let queryStr = "exec MN_GetProductSalesPLUButtons " + formParams;
        console.log("MN_GetProductSalesPLUButtons", queryStr)
        return result = await request.query(queryStr);
    } catch (err) {
        console.error('SQL error', err);
    }
};

getServices.getAllDestinations = async (req, result) => {
    try {
        const request = poolConn.request();
        let lat = req.lat;
        let CustomerID = req.CustomerID;
        let long = req.long;
        let formParams = CustomerID + "," + lat + "," + long;
        let queryStr = "exec MN_GetMarineLoc " + formParams;
        console.log("MN_GetMarineLoc", queryStr)
        return result = await request.query(queryStr);
    } catch (err) {
        console.error('SQL error', err);
    }
};

getServices.getDocLogo = async (req, result) => {
    try {
        const request = poolConn.request();
        let queryStr = "exec MN_GetDocLogo ";
        return result = await request.query(queryStr);
    } catch (err) {
        console.error('SQL error', err);
    }
};

getServices.getTankSubCompartments = async (req, result) => {
    try {
        const request = poolConn.request();
        let CustomerID = req.CustomerID;
        let INSiteTankID = req.INSiteTankID;
        let formParams = CustomerID + "," + INSiteTankID;
        console.log("exec MN_GetInSiteTankSubCompartments", formParams)
        let queryStr = "exec MN_GetInSiteTankSubCompartments " + formParams;
        console.log("MN_GetInSiteTankSubCompartments", queryStr)
        return result = await request.query(queryStr);
    } catch (err) {
        console.error('SQL error', err);
    }
};


getServices.getSourceTanks = async (req, result) => {
    try {
        const request = poolConn.request();
        let formParams = "";
        let CompanyID = req.CompanyID;
        let CustomerID = req.CustomerID;
        let INSiteID = req.INSiteID;
        let ProdContID = req.ProdContID;
        let IsBillingItem = req.IsBillingItem;
        let OrderDate = req.OrderDate;

        if (OrderDate) {
            let OrderDate = req.OrderDate;
            formParams = CompanyID + "," + CustomerID + "," + INSiteID + "," + ProdContID + "," + IsBillingItem + "," + OrderDate;
        }
        else {
            formParams = CompanyID + "," + CustomerID + "," + INSiteID + "," + ProdContID;
        }

        let queryStr = "exec MN_GetINSiteTank " + formParams;
        console.log("MN_GetINSiteTank", queryStr)
        return result = await request.query(queryStr);
    } catch (err) {
        console.error('SQL error', err);
    }
};

getServices.getVehicleCompartments = async (req, result) => {
    try {
        const request = poolConn.request();
        let CustomerID = req.CustomerID;
        let vehicleID = req.vehicleID;
        let formParams = CustomerID + "," + vehicleID;
        let queryStr = "exec MN_GetVehicleCompartments " + formParams;
        console.log("MN_GetVehicleCompartments", queryStr)
        return result = await request.query(queryStr);
    } catch (err) {
        console.error('SQL error', err);
    }
};

getServices.getVehicleSubCompartments = async (req, result) => {
    try {
        const request = poolConn.request();
        let CustomerID = req.CustomerID;
        let vehicleID = req.vehicleID;
        let compartmentID = req.compartmentID;

        let formParams = CustomerID + "," + vehicleID + "," + compartmentID;
        let queryStr = "exec MN_GetVehicleSubCompartments " + formParams;
        console.log("MN_GetVehicleSubCompartments", queryStr)
        return result = await request.query(queryStr);
    } catch (err) {
        console.error('SQL error', err);
    }
};

getServices.getActivityLog = async (req, result) => {
    try {
        const request = poolConn.request();
        let CompanyID = req.CompanyID;
        let CustomerID = req.CustomerID;
        let orderNo = req.OrderNo;

        let formParams = "'" + CompanyID + "','" + CustomerID + "'," + orderNo;
        let queryStr = "exec MN_Activity " + formParams;
        console.log("MN_Activity", queryStr)
        return result = await request.query(queryStr);
    } catch (err) {
        console.error('SQL error', err);
    }
};

getServices.getOrderNotes = async (req, result) => {
    try {
        const request = poolConn.request();
        let SysTrxNo = req.SysTrxNo;

        let formParams = SysTrxNo;
        let queryStr = "exec MN_GetOrderNotes " + formParams;
        console.log("MN_GetOrderNotes", queryStr)
        return result = await request.query(queryStr);
    } catch (err) {
        console.error('SQL error', err);
    }
};

getServices.deleteAttachment = async (req, result) => {
    try {
        const request = poolConn.request();
        let attachmentId = req.attachmentId;
        let orderNo = req.orderNo;

        let formParams = attachmentId + "," + orderNo;
        let queryStr = "exec MN_DeleteCloudAttachment " + formParams;
        console.log("MN_DeleteCloudAttachment", queryStr)
        return result = await request.query(queryStr);
    } catch (err) {
        console.error('SQL error', err);
    }
};

getServices.getProducts = async (req, result) => {
    try {
        const request = poolConn.request();

        let formParams = "'"+req.CompanyID + "',";
        let CustomerID = req.CustomerID;
        let searchTxt = req.SearchText;
        let startIndex = req.MinRecord;
        let endIndex = req.MaxRecord;
        let MasterSiteID = req.MasterSiteID;

        if (searchTxt) {
            formParams += CustomerID + "," + MasterSiteID + "," + '' + "," + '' + "," + searchTxt;
        } else if (startIndex && endIndex) {
            formParams += CustomerID + "," + MasterSiteID + "," + startIndex + "," + endIndex;
        } else {
            formParams += CustomerID + "," + MasterSiteID;
        }

        let queryStr = "exec MN_GetProducts " + formParams;
        console.log("MN_GetProducts", queryStr)
        return result = await request.query(queryStr);
    } catch (err) {
        // console.error('SQL error', err);
    }
};

getServices.tanks = async (req, result) => {
    try {
        const request = poolConn.request();
        let customerID = req.CustomerID;
        let queryStr = "exec MN_GetARShipToTank '" + customerID + "'";
        console.log("Tanks", queryStr)
        return result = await request.query(queryStr);
    } catch (err) {
        console.error('SQL error', err);
    }
};

getServices.drivers = async (req, result) => {
    try {
        const request = poolConn.request();
        let customerID = req.CustomerID;
        let formParams = "'" + customerID + "'";
        let queryStr = "exec MN_GetDrivers " + formParams;
        console.log("Query", queryStr)
        return result = await request.query(queryStr);
    } catch (err) {
        console.error('SQL error', err);
    }
};

getServices.getDocMessages = async (req, result) => {
    try {
        const request = poolConn.request();
        let companyID = req.CompanyID;
        let customerID = req.CustomerID;
        let formParams = companyID + "," + customerID;
        let queryStr = "exec MN_GetDocMessage " + formParams;
        console.log("queryStr", queryStr)
        return result = await request.query(queryStr);
    } catch (err) {
        console.error('SQL error', err);
    }
};

module.exports = getServices;
