import { octokit } from "@lib/github";

export async function searchRepo(
  searchDescription: string,
  name?: string,
  page?: number,
  per_page?: number
) {
  let q: string = "";
  q += name && `${name} in:name `;
  q += searchDescription && `${searchDescription} in:description `;

  const result = await octokit.request("GET /search/repositories", {
    q,
    sort: "stars",
    direction: "desc",
    page,
    per_page,
  });
  return result;
}
