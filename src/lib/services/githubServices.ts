import { searchRepo } from "@api/repositories";
import { DEFAULT_PER_PAGE } from "@constants/api";

export async function search(
  page: number,
  searchDescription: string,
  name?: string
) {
  const response = await searchRepo(
    searchDescription,
    name,
    page,
    DEFAULT_PER_PAGE
  );
  if (response.data.items) {
    const items = response.data.items.map((item) => {
      return {
        id: item.id,
        name: item.name,
        owner: item.owner?.login,
        description: item.description,
        rate: item.stargazers_count,
      };
    });
    return {
      total: response.data.total_count,
      items,
    };
  }
  return {
    total: 0,
    items: [],
  };
}
