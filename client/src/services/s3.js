import axios from "axios";

export const uploadImage = async (imageData) => {
  const resp = await axios.post(`/api/s3/upload`, imageData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
  return resp;
};
