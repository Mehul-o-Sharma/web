export const registerCredential = async () => {
  const opts = {
    attestation: 'none',
    authenticatorSelection: {
      authenticatorAttachment: 'platform',
      userVerification: 'required',
      requireResidentKey: false
    }
  };

  //api hit registeration begin

  const options = await fetch('/auth/registerRequest', opts); 

  options.user.id = base64url.decode(options.user.id);
  options.challenge = base64url.decode(options.challenge);

  if (options.excludeCredentials) {
    for (let cred of options.excludeCredentials) {
      cred.id = base64url.decode(cred.id);
    }
  }
  
  const cred = await navigator.credentials.create({
    publicKey: options
  });
  
  console.log(cred)

  const credential = {};
  credential.id =     cred.id;
  credential.rawId =  base64url.encode(cred.rawId);
  credential.type =   cred.type;

  if (cred.response) {
    const clientDataJSON =
      base64url.encode(cred.response.clientDataJSON);
    const attestationObject =
      base64url.encode(cred.response.attestationObject);
    credential.response = {
      clientDataJSON,
      attestationObject
    };
  }

  localStorage.setItem(`credId`, credential.id);
  
  //api hit registeration finish
  return await _fetch('/auth/registerResponse' , credential);
};