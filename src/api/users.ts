import { octokit } from "@lib/github";

export async function getUsers() {
  const result = await octokit.request("/user");
  return result;
}
