
//========================================== Camping-Car =============================================//
var DeviceWebPage 		= 'campingcar';
var DeviceShortId 		= 'rxCNbrHrLfzxwd2AJ8sR6g';
var DeviceKey 			= 'uNmVlKSUo-8Bh0BtUFdD5Q';
var DHT22NodeShortId 	= 'tkFPTNVS1GcELUnwJ8wR6g';
var DHT22NodeKey 		= 'thlAxICXGNACIl9UZn1Ofg';
var MQ135NodeShortId 	= 'tkFPTNVS1GcSHFYAJ8wR6g';
var MQ135NodeKey 		= 'icQbhd0Lxc9azJcggcdK6g';
var SDS011NodeShortId 	= '';
var SDS011NodeKey 		= '';
//	Temperature
var t_EndFullBlue		= 7;
var t_StartFullGreen	= 17;
var t_EndFullGreen		= 24;
var t_StartFullYellow	= 27;
var t_EndFullYellow		= 29;
var t_StartFullRed		= 34;
//===================================================================================================//


//========================================== Chambre AM JL ==========================================//
var DeviceWebPage		= 'chbreamjl';
var DeviceShortId		= 'ssbN5XnOFjPOG-JwJikR6g';
var DeviceKey			= 'jDy2YhGGVqPbRrxg_fhKeA';
var DHT22NodeShortId	= 'ssbN5XnOFjPkXEuwJikR6g';
var DHT22NodeKey		= 'kLfpkfHoA3mUXPHYVJRPuA';
var MQ135NodeShortId	= 'uK-Ls4AXTQ70cZMgJikR6g';
var MQ135NodeKey		= 'pcDXKnx5e0WFRUjqOVZFzQ';
var SDS011NodeShortId	= '';
var SDS011NodeKey		= '';
//	Temperature
var t_EndFullBlue		= 15;
var t_StartFullGreen	= 17;
var t_EndFullGreen		= 20;
var t_StartFullYellow	= 22;
var t_EndFullYellow		= 25;
var t_StartFullRed		= 27;
//===================================================================================================//


//============================================ Bureau JL ============================================//
var DeviceWebPage		= 'bureaujl';
var DeviceShortId		= 'jDP5ZAlISh55VYYQWYIR6g';
var DeviceKey			= 'huodYngtUDGO58-Q8-VFLw';
var DHT22NodeShortId	= 'jDP5ZAlISh60rN5wWYIR6g';
var DHT22NodeKey		= 'iGW59GU2BO6VKDCptEFNrA';
var MQ135NodeShortId	= 'jDP5ZAlISh7TWX_gWYIR6g';
var MQ135NodeKey		= 'sd6iASTvnDK5_G45gj1EfA';
var SDS011NodeShortId	= 'tGib1WSRvEE5Mp-gYUgR6g';
var SDS011NodeKey		= 'qXlMZEFnR1DTs90DwDRGbQ';
//	Temperature
var t_EndFullBlue		= 18;
var t_StartFullGreen	= 21;
var t_EndFullGreen		= 24;
var t_StartFullYellow	= 27;
var t_EndFullYellow		= 29;
var t_StartFullRed		= 34;
//===================================================================================================//


//========================================== Quesnoy Séjour =========================================//
var DeviceWebPage		= 'quesnoysejour';
var DeviceShortId		= 'rjVNHiEP7lOaoHYQVMER6g';
var DeviceKey			= 'rgYImh2t5HBX8NGcrXFClg';
var DHT22NodeShortId	= 'miZTNmTp2NUtHRJQVMIR6g';
var DHT22NodeKey		= 'obsg1vFhggTMU5jPTXZJvw';
var MQ135NodeShortId	= 'miZTNmTp2NVJgb-QVMIR6g';
var MQ135NodeKey		= 'or5dOx2qSxUV44xqce1Akg';
var SDS011NodeShortId	= 'g46NIng-txc9VIjwZfMR6g';
var SDS011NodeKey		= 'q4qSlGXEBGCCyp-nIj5Prw';
//	Temperature
var t_EndFullBlue		= 18;
var t_StartFullGreen	= 21;
var t_EndFullGreen		= 24;
var t_StartFullYellow	= 27;
var t_EndFullYellow		= 29;
var t_StartFullRed		= 34;
//===================================================================================================//


//===================================================================================================//
//=================================== Common colors parameters ======================================//
//===================================================================================================//

//============================================ Humidity =============================================//
var h_EndFullBlue		= 35;
var h_StartFullGreen	= 45;
var h_EndFullGreen		= 55;
var h_StartFullYellow	= 65;
var h_EndFullYellow		= 75;
var h_StartFullRed		= 85;
//======================================== airquality (CO2) =========================================//
var aqc_EndFullBlue		= 400;
var aqc_StartFullGreen	= 415;
var aqc_EndFullGreen	= 550;
var aqc_StartFullYellow	= 600;
var aqc_EndFullYellow	= 900;
var aqc_StartFullRed	= 1000;
//======================================= airquality (PM2.5) ========================================//
var aq25_EndFullBlue	= -1;
var aq25_StartFullGreen	= 0;
var aq25_EndFullGreen	= 5;
var aq25_StartFullYellow	= 10;
var aq25_EndFullYellow	= 17;
var aq25_StartFullRed	= 25;
//======================================= airquality (PM10) =========================================//
var aq10_EndFullBlue	= -1;
var aq10_StartFullGreen	= 0;
var aq10_EndFullGreen	= 10;
var aq10_StartFullYellow	= 20;
var aq10_EndFullYellow	= 34;
var aq10_StartFullRed	= 50;

//===================================================================================================//
//======================================== Field to display =========================================//
//===================================================================================================//

//=========================================== temperature ============================================//
var Field_Choice	= 'temperature';
var Node_Choice	= DHT22NodeKey;
var Gauge_Name		= '°C';
var Gauge_Description= 'Température';
var minorTicks		= 5;
var majorTicks		= [5, 10, 15, 20, 25, 30, 35];
var Gauge_Min		= 5;
var Gauge_Max		= 35;


//=========================================== humidity ==============================================//
var Field_Choice	= 'humidity';
var Node_Choice	= DHT22NodeKey;
var Gauge_Name		= '%';
var Gauge_Description= 'Humidité';
var minorTicks		= 4;
var majorTicks		= ['0', 20, 40, 60, 80, 100];
var Gauge_Min		= 0;
var Gauge_Max		= 100;


//======================================== airquality (CO2) ===========================================//
var Field_Choice	= 'airquality';
var Node_Choice	= MQ135NodeKey;
var Gauge_Name		= 'ppm';
var Gauge_Description= 'Qualité de l\'air - CO2';
var minorTicks		= 4;
var majorTicks		= [200, 400, 600, 800, 1000, 1200, 1400];
var Gauge_Min		= 200;
var Gauge_Max		= 1400;
var redFrom		= 1000;
var redTo			= 1500;
var yellowFrom		= 600;
var yellowTo		= redFrom;
var greenFrom		= 410;
var greenTo		= yellowFrom;
//===================================================================================================//

//==================================== airquality (PM 2.5µm) ========================================//
var Field_Choice	= 'pm25';
var Node_Choice	= SDS011NodeKey;
var Gauge_Name		= 'µg/m³';
var Gauge_Description= 'Qualité de l\'air-2.5µm';
var minorTicks		= 5;
var majorTicks		= [0, 5, 10, 15, 20, 25, 30];
var Gauge_Min		= 0;
var Gauge_Max		= 35;


//===================================================================================================//