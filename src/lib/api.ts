import axios from 'axios';

const API_BASE_URL = process.env.EXPO_PUBLIC_API_BASE_URL || 'http://localhost:8000';

const api = axios.create({
  baseURL: API_BASE_URL,
  timeout: 30000,
  headers: {
    'Content-Type': 'application/json',
  },
});

export interface ChatMessage {
  role: 'user' | 'assistant';
  content: string;
}

export interface ChatResponse {
  response: string;
  error?: string;
}

export const sendMessage = async (
  messages: ChatMessage[],
  userToken?: string
): Promise<ChatResponse> => {
  try {
    const headers = userToken 
      ? { Authorization: `Bearer ${userToken}` }
      : {};
    
    const response = await api.post('/chat', 
      { messages },
      { headers }
    );
    
    return response.data;
  } catch (error) {
    console.error('API Error:', error);
    throw error;
  }
};

export default api;