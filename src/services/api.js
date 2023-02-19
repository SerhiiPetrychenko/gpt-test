import http from "./http_client";
import { errorMessage } from "@/services/messages";
import storage from "@/store/index";

export const baseErrHandler = async (callback) => {
  try {
    storage.commit("showLoader");
    await callback();
  } catch (e) {
    console.log(e);
    errorMessage(e?.response?.data?.error?.message);
  } finally {
    storage.commit("hideLoader");
  }
};
