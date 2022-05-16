

// var ma = require('mojoauth-sdk')(config);
//           let access_token = "eyJhbGciOiJSUzI1NiIsImtpZCI6IndYZzRzYXR3IiwidHlwIjoiSldUIn0.eyJpZGVudGlmaWVyIjoidGVzdEBtYWlsNy5pbyIsImF1dGhfdHlwZSI6Im1hZ2ljbGluayIsInRva2VuX3R5cGUiOiJhY2Nlc3NfdG9rZW4iLCJhdWQiOiI1YTc5N2M2Ni0yOTY0LTRhYjUtOGQzZi0xZTM2MjBmYThkM2EiLCJleHAiOjE2NDUxMzQxNTcsImp0aSI6ImQxODI0MTYzLWMyMDItNDA5OS1hNjliLTE4NmQ4N2VjYzFkMiIsImlhdCI6MTY0MTE5Mzk1NywiaXNzIjoiaHR0cHM6Ly93d3cubW9qb2F1dGguY29tIiwibmJmIjoxNjQxMTkzOTU3fQ.JCN_NvYNDxM5XXLo4xZIeL7GWE2th_hBfyl-aqwJLdEkqjC2b3C5ZNPNNW4D5ludailcZ5iW7XNf3PqvIo43pmdGFG_T27DvlCBtzvnDqC0DNpsuttdYGl1JPlDxMRZOZOdqT4m6lrveesv4JKKpeeV2uuOOr3BYtbQw4cgsEgAoKpsmp0YJAzGc7Acgh_dfQApE4kgvVQ7XsEyOVOB-4wI0SSLVMubYJoRFuZjTihpH5oM1ad4iM3JGQioMPpfzH0ARV0Jza5wC6iyOBwbHWA7r0bOOsYyY88yZ3pDBy_hSAoclUKy7C8sVZtYkcfAZ6BqMYRFmfHucA8JOV_OFHw"
//           async function  call (){      
//           response = await ma.mojoAPI.verifyToken(access_token);
//                     console.log(response)
//                 }
//                 call();
    
// function validateURL(string){
// 		let pattern = new RegExp(/[a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,6}/ig); // fragment locator
// 		// let pattern = new RegExp(/\/\w+(\.\w+)*(:[0-9]+)?\/?(\/[.\w]*)*$/); // fragment locator
//         let pattern2 = new RegExp(/[(localhost)]{2,256}\:[0-9]+/ig)
//   return !!pattern2.test(string);
// }

// console.log(validateURL("localhost:30"))

const func1 = params => { foo: 'bar'};
console.log(func1());

const func2 = params => ({ foo: 'bar'});
console.log(func2());