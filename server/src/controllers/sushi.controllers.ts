import { Request, Response } from 'express';

import Sushi from '@/db/schemas/sushi.schema';
import { CustomResponse } from '@/utils/helpers/customResponse';

interface Query {
  name?: { $regex: RegExp } | string;
  category?: string;
}

export const getAllSushi = async (request: Request, response: Response): Promise<Response> => {
  const { page = 1, limit = 9, sort = 'name', order = 'asc', name, category } = request.query;
  try {
    const orderValue = order === 'asc' ? 1 : order === 'desc' ? -1 : -1;
    const query: Query = {};
    if (name) {
      query.name = { $regex: new RegExp(`${name}`, 'i') };
    }
    if (category) {
      query.category = category as string;
    }

    const sushi = await Sushi.find(query)
      .sort({ [sort as string]: orderValue })
      .limit(+limit * 1)
      .skip((+page - 1) * +limit)
      .exec();

    const count = await Sushi.countDocuments();
    return CustomResponse.ok(response, {
      sushi,
      totalPages: Math.ceil(count / +limit),
      currentPage: +page,
    });
  } catch (error) {
    return CustomResponse.serverError(response, {
      message: `failed to get sushi`,
    });
  }
};

export const getSushiById = async (
  request: Request,
  response: Response
): Promise<Response> => {
  const { id } = request.params;
  try {
    const sushi = await Sushi.findById(id);
    return CustomResponse.ok(response, sushi);
  } catch (error) {
    console.log(`[GET] sushi by id ${id} unsuccessfully received`);
    return CustomResponse.serverError(response, {
      message: `failed to get sushi by id: ${id}`,
    });
  }
};
