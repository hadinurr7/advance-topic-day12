import { prisma } from "../../lib/prisma";
import { PaginationQueryParams } from "../../types/pagination";

interface GetSamplesQuery extends PaginationQueryParams {}

export const getSamplesService = async (query: GetSamplesQuery) => {
  try {
    const { page, sortBy, sortOrder, take } = query;

    const samples = await prisma.sample.findMany({
      skip: (page - 1) * take,
      take: take,
      orderBy: { [sortBy]: sortOrder },
    });

    const count = await prisma.sample.count();

    return {
      data: samples,
      meta: { page, take, total: count },
    };
  } catch (error) {
    throw error;
  }
};
