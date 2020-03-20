import apiUrl from "../apiConfig";
import axios from "axios";

//Get Resumes
export const getResumes = () => {
  return axios.get(`${apiUrl}/resumes`);
};

//Add Resumes to the User
export const addResumes = resumes => {
  return axios.post(`${apiUrl}/resumes`, resumes);
};

// Update existing Resumes
export const updateResumes = (id, resumes) => {
  return axios.patch(`${apiUrl}/resumes/${id}`, resumes);
};

// Delete Resumes by id
export const deleteResumes = id => {
  return axios.delete(`${apiUrl}/resumes/${id}`);
};
