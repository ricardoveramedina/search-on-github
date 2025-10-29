export type GithubDataType = {
  total: number;
  items: {
    id: number;
    name: string;
    owner: string;
    description: string;
    rate: number;
  }[];
};
