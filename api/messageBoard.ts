import { axiosInstance } from '@/api/transport';
import { MessageBoardItem } from '@/entityTypes/messageBoard';

export const fetchMessageList = async () => {
  const response = await axiosInstance.request<MessageBoardItem[]>({
    method: 'get',
    url: '/messages',
  });
  return response.data;
};

export const addNewMessage = async (data: Omit<MessageBoardItem, 'id'>) => {
  const response = await axiosInstance.request<MessageBoardItem>({
    method: 'post',
    data,
    url: '/messages',
  });

  return response.data;
};
