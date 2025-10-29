import { describe, test, expect } from "vitest";
import { searchRepo } from "@api/repositories";

describe("search repos in github", () => {
  test("search repos global", async () => {
    const response = await searchRepo("vs code", "VS code");
    console.log("response", response, response.data.items[0]);
    expect(response.data.items[0].id).toBe(41881900);
  });

  test("search repos by description and name", async () => {
    const response = await searchRepo("octokit/core.js", "REST");
    console.log("response", response, response.data.items);
    expect(response.data.total_count).toBe(1);
  }, 10000);

  test("check throttling", async () => {
    let totalCount = 0;
    for (let index = 0; index < 11; index++) {
      const response = await searchRepo("octokit/core.js", "REST");
      totalCount = response.data.total_count;
    }
    expect(totalCount).toBe(1);
  }, 60000);
});
