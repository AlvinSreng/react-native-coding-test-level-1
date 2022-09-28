import moment from "moment";

const dateFormatter = (value) => {
  return moment(value).format("DD MMMM YYYY");
};

export { dateFormatter };
