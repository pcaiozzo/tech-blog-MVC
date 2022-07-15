const universal = {};

module.exports = {
  formatDate: (date) => {
    return `${new Date(date).getMonth() + 1}/${new Date(
      date
    ).getDate()}/${new Date(date).getFullYear()}`;
  },
  isLocalUser: (userId) => {
    const locUserId = universal.userId;
    if (locUserId === null || locUserId === undefined) {
      console.log("there was no local user id found!");
      return;
    }

    const isLocalUser = locUserId === userId;

    console.log("is local user: ", isLocalUser);
    return isLocalUser;
  },
  print: (data) => console.log("from helper: ", data),
  setGlobalVar: (key, value) => {
    universal[key] = value;
    console.log("set  key: ", key, " to value: ", value);
  },
  getGlobalVar: (key) => {
    const value = universal[key];
    console.log("got universal key: ", key, " who's value is: ", value);
    return value;
  },
  notEmpty: (arr) => arr.length > 0,
};
