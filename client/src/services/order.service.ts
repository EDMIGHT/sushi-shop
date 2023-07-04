import { IOrder, IProduct, IRequestAllOrder, IResponseAllOrderRequest } from '@/types';

import { api } from './api';

const orderApi = api.injectEndpoints({
  endpoints: (builder) => ({
    createOrder: builder.mutation<IOrder, IProduct[]>({
      query: (products) => ({
        url: '/orders',
        method: 'POST',
        credentials: 'include',
        body: {
          products,
        },
      }),
      invalidatesTags: () => [
        {
          type: 'order',
        },
      ],
    }),
    getAllOrders: builder.query<IResponseAllOrderRequest, IRequestAllOrder>({
      query: ({ page = 1, limit = 6, sort = 'createdAt', order = 'desc' }) => ({
        url: `/orders?page=${page}&limit=${limit}&sort=${sort}&order=${order}`,
        credentials: 'include',
      }),
      providesTags: (result, error) => [
        {
          type: 'order',
        },
      ],
    }),
  }),
});

export const { useCreateOrderMutation, useGetAllOrdersQuery } = orderApi;