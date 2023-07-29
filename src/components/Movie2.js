import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "./Movie2.css";

//Movie 컴포넌트는 이 property를 다 부모 컴포넌트로부터 받아온다.
function Movie({ id, coverImg, title, year, summary, genres }){

    return  (
        <div className="movie">
            {/* img에 오류가 뜨는 이유. 모든 이미지 element들은 alt 속성을 가지기 때문 */}
            <img src={coverImg} alt={title} className="img" />
            <h2 className="title">
                <Link to={`/movie/${id}`}>{title}</Link>
            </h2>
            <h3 className="year">{year}</h3>
            <p>{summary.length > 235 ? `${summary.slice(0, 235)} . . .`: summary}</p>
            <ul className="genres">
                {genres.map((g) => (
                    <li key={g}>{g}</li>)
                )}
            </ul>
        </div>
    )
}

Movie.propTypes = {
    id: PropTypes.number.isRequired,
    coverImg: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired,
}

export default Movie;