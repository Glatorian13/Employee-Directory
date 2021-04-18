import axios from "axios";

//call the randomuser api
// eslint-disable-next-line import/no-anonymous-default-export
export default {
  getUsers: function() {
    return axios.get("https://randomuser.me/api/?results=50&nat=us");
  }
};
