export interface HeroResponse {
  [key: string]: { path: string; extension: string };
}

export interface ComicResponse {
  id: number;
  title: string;
  dates: [{ date: string }];
  thumbnail: { path: string; extension: string };
}
