const offlineUsersReducer = (offlineUsers = [], action) => {
  switch (action.type) {
    case 'OFFLINE GET DATA':
      console.log('this is offlineUsers reducer');
      console.log(action);
      return action.payload;

    default:
      return offlineUsers;
  }
};

export default offlineUsersReducer;
