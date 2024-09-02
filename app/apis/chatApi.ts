import { IBrianInterface } from "../AskSheik/chat/type";
import { useAddMutation, useGetQuery } from "./helpers";

// api custom hooks are auto imported
const API = {
  GET: '/searchFatwa',
  ADD: '/searchHadithBrain',
  DELETE: '/example',
  UPDATE: '/example',
};

const KEY = 'chat';

export const useGetChat = (params?: any, options?: any) =>
  useGetQuery(KEY, API.GET, params, options);

export const useAddChat = ()=> useAddMutation<IBrianInterface>(KEY, API.ADD)