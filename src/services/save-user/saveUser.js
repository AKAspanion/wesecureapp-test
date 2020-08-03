export const saveUser = (user = {}) => {
  return new Promise((resolve, reject) => {
    const users = JSON.parse(localStorage.getItem("users") || "[]");
    const userFound = users.find((u) => u.email === user.email);
    if (userFound) {
      reject({
        message: "User already exists",
        user: userFound,
      });
    } else {
      users.push(user);
      localStorage.setItem("users", JSON.stringify(users));
      resolve({
        message: "User created successfully",
        user,
      });
    }
  });
};
