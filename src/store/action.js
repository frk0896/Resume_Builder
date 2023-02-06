export const getUsers = (params) => ({
    type: "GET_USERS",
    payload:{
        params,
    },
});
export const saveBasicDetails = (basicDetails) =>(
    {
        type: "BASIC_DETAILS",
        payload:basicDetails,
    });