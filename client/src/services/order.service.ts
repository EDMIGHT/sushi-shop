import { IOrder, IProduct, IRequestAllOrder } from '@/types/order.types';
import { IResponseAllOrderRequest } from '@/types/response.types';

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
      invalidatesTags: [
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
      providesTags: [
        {
          type: 'order',
        },
      ],
    }),
    confirmOrder: builder.mutation<IOrder, Pick<IOrder, '_id'> | string>({
      query: (id) => ({
        url: `/orders/${id}`,
        method: 'PATCH',
        credentials: 'include',
        body: {
          status: 'completed',
        },
      }),
      invalidatesTags: [
        {
          type: 'order',
        },
      ],
    }),
    cancelOrder: builder.mutation<null, Pick<IOrder, '_id'> | string>({
      query: (id) => ({
        url: `/orders/${id}`,
        method: 'DELETE',
        credentials: 'include',
      }),
      invalidatesTags: [
        {
          type: 'order',
        },
      ],
    }),
  }),
});

export const {
  useCreateOrderMutation,
  useGetAllOrdersQuery,
  useConfirmOrderMutation,
  useCancelOrderMutation,
} = orderApi;
