export const getUsers = async () => {
  const url = "https://jsonplaceholder.typicode.com/users";
  const response = await fetch(url);
  const datos = await response.json();
  return datos;
};
 