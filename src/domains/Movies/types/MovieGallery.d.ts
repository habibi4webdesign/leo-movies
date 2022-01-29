declare interface IMovieGalleryDto {
  id: number;
  poster_path: string;
  adult: boolean;
  overview: string;
  release_date: string;
  original_title: string;
  original_language: string;
  title: string;
  backdrop_path: string | null;
  popularity: number;
  vote_count: number;
  video: boolean;
  vote_average: number;
}

declare interface ISearchMovieResultDto {
  page: number;
  results: IMovieGalleryDto[];
  total_pages: number;
  total_results: number;
}
