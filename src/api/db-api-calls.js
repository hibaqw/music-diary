import axios from "axios";

const addNewUser = async () => {
  const res = await axios.post('/users');
}
const getCredentials = async () => {
  const response = await axios.get('/users');
  return response.data;
}

const updateToken = async (uid) => {
  const userData = {uid : uid}
  const response = await axios.put('/users', userData);
  return response;
}

const verifyReturingUser= async () => {
  getCredentials()
  .then(result => {
    const uid = result[0].uid;
    updateToken(uid);
  })
  .catch(error => console.log(error.response.data))
}

const loginUser = async () => {
  addNewUser()
  .then(() => {
    getCredentials();
  })
  .catch(err => console.log(err));

}

export {loginUser, verifyReturingUser};