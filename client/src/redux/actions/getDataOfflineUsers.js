import * as dataFetch from '../../functions/dataFetch';

export const getOfflineUsersData =
  (dataSetter, loadingSetter, userId) => async (dispatch) => {
    try {
      const offlineUserData = await dataFetch.getUserData(
        dataSetter,
        loadingSetter,
        userId
      );
      dispatch({ type: 'OFFLINE GET DATA', payload: offlineUserData });
    } catch (error) {
      console.log(error.message);
    }
  };
