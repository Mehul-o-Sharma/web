<?php
require_once(__DIR__."mojoAuthAPI.php");
// mojoauth apikey replace at "MOJOAUTH_APIKEY"
$mojoAuth = new mojoAuthAPI("MOJOAUTH_APIKEY");
//Step 1 Get Public Key / Certificate from MojoAuth Server
$result = $mojoAuth->getPublicKey();
$publicKey = json_decode($result);
//Step 2 Pass JWT token and publickey to verify user
$userProfileData =$mojoAuth->getUserProfileData($access_token,$publicKey->data)
?>