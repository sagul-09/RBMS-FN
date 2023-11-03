// //give a middleware which will check if the user is logged in or not
// //if the user is logged in then he cannot go to the login or signup page
// //if the user is not logged in then he cannot go to the home page
// const checkAuth = async () => {
//     try {
//         // Get the token from the local storage
//         const token = localStorage.getItem("token");
//         if (!token) {
//             throw new Error();
//         }
//         // Make a GET request to the /users/me endpoint
//         const response = await fetch("/users/me", {
//             headers: {
//                 Authorization: `Bearer ${token}`,
//             },
//         });
//         if (!response.ok) {
//             throw new Error();
//         }
//         // If the response is OK, the user is authenticated
//         const user = await response.json();
//         console.log("Authenticated user:", user);
//     } catch (e) {
//         // If the token is not valid or the request fails, the user is not authenticated
//         console.log("User not authenticated");
//     }
// };

// export default checkAuth;