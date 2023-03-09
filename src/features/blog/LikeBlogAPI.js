import axios from "../../utils/axios";

export const likeBlogRequest = async ({ id, count }) => {
  // console.log(id, count);
  const response = await axios.patch(`/blogs/${id}`, {
    likes: count,
  });

  return response.data;
};
