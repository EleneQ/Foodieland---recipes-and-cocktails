//convert date to the "DD/MM/YYYY" format
const formatDate = (dateString) => {
  const date = new Date(dateString);
  const options = { day: "2-digit", month: "2-digit", year: "numeric" };

  return date.toLocaleDateString(undefined, options);
};

export default formatDate;
