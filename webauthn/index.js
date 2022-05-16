import React from "react"
import MojoAuth from "mojoauth-web-sdk"
function App() {
const [payload, setPayload] = React.useState(null)
// 1 Initialize and show the form
React.useEffect(() => {
	const mojoauth = new MojoAuth("test-8ab08292-fd4a-4646-b7b9-240f7e8af834",{
            source:[{type:'email', feature:'magiclink'}]
        });
	mojoauth.signIn().then(payload => {
	    setPayload(payload)
	})
}, [payload])
return (
	<div>
	    // 2 Put a div that will contain the form
	    <div id="mojoauth-passwordless-form" />
	    <pre>{JSON.stringify(payload, null, 4)}</pre>
	</div>
	)
}
export default App
