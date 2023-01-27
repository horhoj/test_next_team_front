import { axiosInstance } from '@/api/transport';
import { AverageHistoryItem } from '@/entityTypes/averageNumbers';

export const fetchHistory = async () => {
  const response = await axiosInstance.request<AverageHistoryItem[]>({
    method: 'get',
    url: '/average-numbers',
  });
  return response.data;
};

export const addAverage = async (value: number) => {
  const response = await axiosInstance.request<AverageHistoryItem>({
    method: 'post',
    url: '/average-numbers',
    data: { value },
  });
  return response.data;
};
