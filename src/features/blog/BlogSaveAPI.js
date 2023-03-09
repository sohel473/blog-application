import axios from "../../utils/axios";

export const saveBlogRequest = async ({ id, saved }) => {
  // console.log(id, saved);
  const response = await axios.patch(`/blogs/${id}`, {
    isSaved: saved,
  });

  return response.data;
};
