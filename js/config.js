/*    _           _    _                     _ 
     | |         | |  | |                   | |
  ___| | ___  ___| | _| |     ___   __ _  __| |
 / __| |/ _ \/ _ \ |/ / |    / _ \ / _` |/ _` |
 \__ \ |  __/  __/   <| |___| (_) | (_| | (_| |
 |___/_|\___|\___|_|\_\______\___/ \__,_|\__,_|
    version 2.10
*/

/*URL for the server logo
Leave it blank to use text instead
(Put the files in the images folder)*/
var l_serverImage = "";

/*Display current map and gamemode?
'true' or 'false'*/
var l_displayMapGamemode = true;

/*Custom server name configuration
Leave it blank for automatic server name*/
var l_serverName = "[TSG] SWTOR Hardcore RP Server";

/*Use a video for the background?
Otherwise it will use images
'true' or 'false'*/
var l_bgVideo = false;

/*(Image-background only)
Enable map-based background image?
If enabled, the background will be an image based on the server current map
You need to have a background image with the same name as the map
Also, the image needs to be in .jpg format
E.g: gm_flatgrass.jpg, gm_construct.jpg, rp_downtown_v4c_v2.jpg
'true' or 'false'*/
var l_bgImageMapBased = false;

/*(Image-background only)
Place one or more images
Multiple images will automatically shuffle between them
(Place the files in the backgrounds/images folder)*/
var l_bgImages = [
	"load1.jpg",
	"load2.jpg",
	"load3.jpg",
	"load4.jpg",
	"load5.jpg",
	"load6.jpg",
	"load7.jpg"
];

/*(Image-background only)
Random background images order?
'true' or 'false'*/
var l_bgImagesRandom = true;

/*(Image-background only)
Delay between background images changes
in milliseconds*/
var l_bgImageDuration = 3000;

/*(Image-background only)
Image background fade velocity
in milliseconds*/
var l_bgImageFadeVelocity = 2000;

/*Enable background overlay?
'true' or 'false'*/
var l_bgOverlay = true;

/*Background darkening amount
0 for none (0%), 100 for pitch black (100%)*/
var l_bgDarkening = 50;

/*Play music during the loading screen?
'true' or 'false'*/
var l_music = true;

/*Display current music name?
'true' or 'false'*/
var l_musicDisplay = true;

/*Music playlist
Add as many youtube ids or ogg files you want
(Place the ogg files in the music folder)*/
var l_musicPlaylist = [
	{ogg: "SWTORTheme.ogg", name: "Knights of The Eternal Throne Soundtrack"},
];

/*Random music order?
'true' or 'false'*/
var l_musicRandom = true;

/*Music volume
Choose a value between 0 (quietest) and 100 (loudest)*/
var l_musicVolume = 10;

/*Enable custom messages?
'true' or 'false'*/
var l_messagesEnabled = true;

/*Enter your custom messages below*/
var l_messages = [
	"Rule One: As this is a Hardcore server, we expect mature behavior. No Minging, Fail-RP, Griefing, Public Disrespect and or further childish behavior... In Character.",
	"Rule Two: Do not attempt to Lie to, Deceive, Provoke or otherwise Scheme alongside or against a Player or Staff Member",
	"Rule Three: Always follow the orders and demands given by a Staff Member. Should a demand/request/order not be followed you will be punished accordingly.",
	"Rule Four: Disrespect to a Staff Member or Player is unacceptable in public, if you have an issue, you must bring it to said player/staff in Private Chat.",
	"Rule Five: As a requirement by the Server, you must be the age of 16 or Older. This, however, comes with an exception, should you like to request an exception a staff member will interview you.",
	"Rule Notice: This server has a 0 Tolerance for any Bullshit, said bullshit is deemed by the Owners and their High Staff, We are Adults, we expect you act accordingly. Expect punishment if any of these rules are broken."
];

/*Random message order?
'true' or 'false'*/
var l_messagesRandom = false;

/*Delay between message changes
in milliseconds*/
var l_messagesDelay = 3000;

/*Messages fade time
in milliseconds*/
var l_messagesFade = 1000;

//==============================================================
//========================== WARNING ===========================
//==============================================================
//============ Do not edit anything below this line ============
//==============================================================
var checkConfigFile = function() {
	return true;
};