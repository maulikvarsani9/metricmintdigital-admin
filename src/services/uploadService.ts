import { apiClient, apiEndpoints } from '../lib/api';

export const uploadService = {
  // Upload blog image
  uploadBlogImage: async (file: File): Promise<string> => {
    const formData = new FormData();
    formData.append('image', file);

    const response = await apiClient.post<{ success: boolean; data: { imageUrl: string }; message?: string }>(
      apiEndpoints.uploads.blogImage,
      formData,
      {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      }
    );

    // Backend returns: { success: true, data: { imageUrl: "..." } }
    if (response.data && response.data.imageUrl) {
      return response.data.imageUrl;
    }
    throw new Error('Failed to get image URL from response');
  },

  // Upload author image
  uploadAuthorImage: async (file: File): Promise<string> => {
    const formData = new FormData();
    formData.append('image', file);

    const response = await apiClient.post<{ success: boolean; data: { imageUrl: string }; message?: string }>(
      apiEndpoints.uploads.authorImage,
      formData,
      {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      }
    );

    // Backend returns: { success: true, data: { imageUrl: "..." } }
    if (response.data && response.data.imageUrl) {
      return response.data.imageUrl;
    }
    throw new Error('Failed to get image URL from response');
  },
};

