import axios from 'axios';

const saveFormData = async (postingData) => {
  return await axios({
    method: 'post',
    headers: { 'Access-Control-Allow-Origin': '*' },
    url: 'http://localhost:7000/userInfo/registerOffline',
    data: postingData,
    validateStatus: (status) => {
      return true;
    },
  })
    .catch((error) => {
      console.log(error);
    })
    .then((response) => {
      // this is now called!
      return response;
    });
};

const getUserData = async (dataSetter, loadingSetter, userId) => {
  console.log(userId);
  return await axios({
    method: 'get',
    headers: { 'Access-Control-Allow-Origin': '*' },
    url: `http://localhost:7000/userInfo//getParkingLotsByNum/${userId}`,
  })
    .catch((error) => {
      console.log('error in getting userId');
      console.log(error);
    })
    .then((response) => {
      // this is now called!
      dataSetter(response.data);
      loadingSetter(true);
      console.log('getUserData-1');
      console.log(response.data);
      console.log('getUserData-2');
      return response.data;
    });
};

export { saveFormData, getUserData };
