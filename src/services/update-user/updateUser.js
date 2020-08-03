export const updateUser = (email = "", pass) => {
  return new Promise((resolve, reject) => {
    const users = JSON.parse(localStorage.getItem("users") || "[]");
    const userFound = users.find((u) => u.email === email);
    if (userFound) {
      const newUsers = [
        ...users.filter((u) => u.email !== email),
        { ...userFound, password: pass },
      ];
      localStorage.setItem("users", JSON.stringify(newUsers));
      resolve({
        message: "Password reset successful!",
        user: userFound,
      });
    } else {
      reject({
        message: `User with ${email} not found`,
        user: {},
      });
    }
  });
};
