import type { AxiosResponse } from "axios";
import { apiClient } from "../lib/api";
import type { Author } from "../types/api";

export const authorsService = {
  // Get all authors
  getAuthors: async (params?: {
    page?: number;
    limit?: number;
    search?: string;
  }): Promise<{ authors: Author[]; pagination?: any }> => {
    const response = await apiClient.get<AxiosResponse>(
      "/admin/authors",
      params
    );
    return response.data;
  },

  // Get author by ID
  getAuthor: async (id: string): Promise<Author> => {
    const response = await apiClient.get<{ author: Author }>(`/admin/authors/${id}`);
    return response.author;
  },

  // Create author
  createAuthor: async (data: { name: string; image?: string }): Promise<Author> => {
    const response = await apiClient.post<{ author: Author }>("/admin/authors", data);
    return response.author;
  },

  // Update author
  updateAuthor: async (
    id: string,
    data: { name: string; image?: string }
  ): Promise<Author> => {
    const response = await apiClient.put<{ author: Author }>(`/admin/authors/${id}`, data);
    return response.author;
  },

  // Delete author
  deleteAuthor: async (id: string): Promise<void> => {
    await apiClient.delete(`/admin/authors/${id}`);
  },
};

