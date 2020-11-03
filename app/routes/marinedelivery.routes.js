module.exports = app => {
  const postRouter = require("../controllers/MarineDeliveryPost.controller.js");
  const getRouter = require("../controllers/MarineDeliveryGet.controller.js");

  // Create a Post Request
  app.post("/MN_GetOrdersmdaNew", postRouter.getOredersNew); 
  app.post("/MN_GetLoginUser", postRouter.login);
  app.post("/MN_ClearUserSession", postRouter.ClearUserSession);
  app.post("/MN_GetOrderStatus", postRouter.getOrderStatus);
  app.post("/MN_UpdateLogOutDetails", postRouter.logout);
  app.post("/MN_UpdateOrders", postRouter.saveOrder);
  app.post("/MN_UpdateOrderNotesFromApp", postRouter.updateOrderNote);
  app.post("/MN_CalcShipReading", postRouter.calcShipReading);
  app.post("/MN_UpdateShipmentDetails", postRouter.postShipment);
  app.post("/MN_UpdateINSiteTankVolume", postRouter.updateTankVolume);
  app.post("/MN_UpdateOrderStatusHistory", postRouter.updateOrderStatus);
  app.post("/MN_CalWeightVolumeQty", postRouter.calcWeightVolumeQty);
  app.post("/MN_UpdateAdHocVessel", postRouter.postAdHocVessel);
  app.post("/MN_CancelOrders", postRouter.updateCancelOrders);
  
  // Create a Get Request
  app.get("/MN_GetVehicle", getRouter.getVehicles);
  app.get("/MN_GetVessels", getRouter.getVessels);
  app.get("/MN_GetINSite", getRouter.getAllSites);
  app.get("/MN_GetProductSalesPLUButtons", getRouter.getShortcuts);
  app.get("/MN_GetMarineLoc", getRouter.getAllDestinations);
  app.get("/MN_GetDocLogo", getRouter.getDocLogo);
  app.get("/MN_GetInSiteTankSubCompartments", getRouter.getTankSubCompartments);
  app.get("/MN_GetINSiteTank", getRouter.getSourceTanks);
  app.get("/MN_GetVehicleCompartments", getRouter.getVehicleCompartments);
  app.get("/MN_GetVehicleSubCompartments", getRouter.getVehicleSubCompartments);
  app.get("/MN_Activity", getRouter.getActivityLog);
  app.get("/MN_GetOrderNotes", getRouter.getOrderNotes);
  app.get("/MN_GetProducts", getRouter.getProducts);
  
  app.get("/MN_GetDocMessage", getRouter.getDocMessages);


  app.get("/MN_GetARShipToTank", getRouter.getTanks);
  app.get("/MN_GetDrivers", getRouter.getDrivers);
   
  app.get("/MN_DeleteCloudAttachment", getRouter.deleteAttachment);
};