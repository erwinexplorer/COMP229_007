const isAuthenticated = () => {
  const token = localStorage.getItem("token") !== null;
  return token;
};

export default isAuthenticated;
