import apiUrl from "../apiConfig";
import axios from "axios";

export const signUp = credentials => {
  return axios({
    method: "POST",
    url: apiUrl + "/sign-up",
    data: {
      credentials: {
        firstName: credentials.firstName,
        lastName: credentials.lastName,
        username: credentials.username,
        label: credentials.label,
        phone: credentials.phone,
        email: credentials.email,
        password: credentials.password,
        password_confirmation: credentials.passwordConfirmation
      }
    }
  });
};

export const signIn = credentials => {
  return axios({
    url: apiUrl + "/sign-in",
    method: "POST",
    data: {
      credentials: {
        username: credentials.username,
        password: credentials.password
      }
    }
  });
};

export const signOut = user => {
  return axios({
    url: apiUrl + "/sign-out",
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${user.token}` // FOR EXPRESS
      // 'Authorization': `Token ${user.token}` // FOR RAILS
    }
  });
};

export const updateUserInfo = (userNewInfo, user) => {
  return axios({
    url: apiUrl + "/update-info",
    method: "PATCH",
    headers: {
      Authorization: `Bearer ${user.token}` // FOR EXPRESS
      // 'Authorization': `Token ${user.token}` // FOR RAILS
    },
    data: {
      userNewInfo: {
        firstName: userNewInfo.firstName,
        lastName: userNewInfo.lastName,
        label: userNewInfo.label,
        phone: userNewInfo.phone,
        old: userNewInfo.oldPassword,
        new: userNewInfo.newPassword
      }
    }
  });
};

export const showUserInfo = (username) => {
  return axios({
    url: apiUrl + "/profile/" + username,
    method: "GET",
    // headers: {
    //   Authorization: `Bearer ${user.token}` // FOR EXPRESS
    //   // 'Authorization': `Token ${user.token}` // FOR RAILS
    // },
  });
};

export const deleteUserAcountFromTheDB = id => {
  return axios.delete(`${apiUrl}/deleteUserProfile/${id}`);
};