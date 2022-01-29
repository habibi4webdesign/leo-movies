import { render, screen } from "@testing-library/react";
import Movie, { IMovieProps } from "./Movie";
import { build, fake } from "@jackfranklin/test-data-bot";
const movieFakeData = build<IMovieProps>("Movie", {
  fields: {
    id: 1,
    title: fake((f) => f.lorem.words(2)),
    posterPath: fake((f) => f.image.imageUrl()),
    releaseDate: "1985-12-21",
    voteAverage: 4.3,
    voteCount: 2000,
  },
});
describe("Testing the Movie:", () => {
  it("Check if Movie render correctly", () => {
    const data = movieFakeData();

    render(
      <Movie
        id={data.id}
        title={data.title}
        posterPath={data.posterPath}
        releaseDate={data.releaseDate}
        voteAverage={data.voteAverage}
        voteCount={data.voteCount}
      />
    );

    screen.getByText(data.title);
    screen.getByText(data.releaseDate);
    screen.getByText(data.voteAverage.toString());
    screen.getByText(data.voteCount.toString());
    
    expect(screen.getByRole('img', { name: data.title })).toHaveAttribute(
      'src',
      `${process.env.REACT_APP_IMAGES_BASE_URL}/${data.posterPath}`
    )

  });
});
