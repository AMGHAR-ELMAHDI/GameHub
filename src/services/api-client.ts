import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api/",
  params: {
    key: "df27e4993da9449092a8d70e190ca300",
  },
});
