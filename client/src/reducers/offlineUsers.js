const offlineUsersReducer = (offlineUsers = [], action) => {
  switch (action.type) {
    case 'FETCH DATA':
      return offlineUsers;

    default:
      return offlineUsers;
  }
};

export default offlineUsersReducer;
