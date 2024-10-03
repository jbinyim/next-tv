import { API_KEY, API_URL } from "../../app/dataLink";
import MainSliderSub from "./MaibSliderSub";

const getPopularMovie = async () => {
  const response = await fetch(
    `${API_URL}/movie/popular?language=ko-kr&page=1&api_key=${API_KEY}`
  );
  const json = await response.json();
  return json.results;
};

const MaibSlider = async () => {
  const popMovies = await getPopularMovie();

  return <MainSliderSub popMovies={popMovies} />;
};

export default MaibSlider;
