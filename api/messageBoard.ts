import { axiosInstance } from '@/api/transport';
import { MessageBoardItem } from '@/entityTypes/messageBoard';

export const getMessageList = async () => {
  const response = await axiosInstance.request<MessageBoardItem[]>({
    method: 'get',
    url: '/messages',
  });
  console.log(response.data);
  return response.data;
};
