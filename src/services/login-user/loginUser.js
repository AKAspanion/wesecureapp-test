export const loginUser = (email = "", pass) => {
  return new Promise((resolve, reject) => {
    const users = JSON.parse(localStorage.getItem("users") || "[]");
    const userFound = users.find((u) => u.email === email);
    if (userFound) {
      if (userFound.password === pass) {
        resolve({
          message: "Login success",
          user: userFound,
        });
      } else {
        reject({
          message: "Password is incorrect",
          user: {},
        });
      }
    } else {
      reject({
        message: `User with ${email} not found`,
        user: {},
      });
    }
  });
};
