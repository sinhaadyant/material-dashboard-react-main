import { useMutation } from "@tanstack/react-query";
import { apiV1Instance } from "api";

export const useSigninUser = () => {
  const mutation = useMutation({
    mutationFn: async function ({ email, password }) {
      const data = await apiV1Instance.post("/auth/signin", {
        email,
        password,
      });
      return data;
    },
    onSuccess: () => {
      console.log("revalidate user query");
    },
    onError: (error) => {
      console.log("error");
    },
  });
  return mutation;
};
