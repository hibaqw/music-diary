import axios from "axios";
const store = require("store2");
// axios request to add new user into the db
const addNewUser = async () => {
  const res = await axios.post('/users');
}
// axios request to retrieve user info from db
const getCredentials = async () => {
  const response = await axios.get('/users');
  return response.data;
}
// axios request to update token in db
const updateToken = async (uid) => {
  const userData = { uid: uid }
  const response = await axios.put('/users', userData);
  return response;
}
/**
 * function to add new refresh and access tokens on login of a returning user
 */
const verifyReturingUser = async () =>
  getCredentials()
    .then(result => {
      if (result[0].uid) {
        console.log(result);
        const uid = result[0].uid;
        updateToken(uid);
        return result;
      }

    })
    .catch(error => {
      console.log(error);
      loginUser();
      return error;
    })


/**
 * function to add new user and return new user's info upon login
 */
const loginUser = async () =>
  addNewUser()
    .then((result) => {
      getCredentials();
      return result;
    })
    .catch(err => {
      console.log(err);
      return err;
    });


export { loginUser, verifyReturingUser};