MojoAuthSDK.Initialize init = new MojoAuthSDK.Initialize();
init.setApiKey("___MOJOAUTH_APIKEY___");
String token = "token";
Jwks jwks = new Jwks();
jwks.verifyAccessToken(token, new AsyncHandler<VerifyTokenResponse>() {
	@Override
	public void onSuccess(VerifyTokenResponse data) {
		System.out.println(data.getAccessToken());
		System.out.println(data.getIsValid());
	}
	@Override
	public void onFailure(ErrorResponse errorcode) {
		System.out.println(errorcode.getMessage());
		System.out.println(errorcode.getDescription());
	}
});
