import API from '@/assets/api/apiClient';

const endpoint = 'us/rss/topalbums/limit=100/json';

const topSongs = async () => {
  const call = await API;
  const response = await call.get(endpoint);
  return response.data;
};

export default topSongs;
