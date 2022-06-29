const Element = (props) => {
    return (
    <>
    <div className="movie">
    <div>{props.movie.Type}</div>
    <div>{props.movie.Title}</div>
    <div>{props.movie.Year}</div>
    {/* with images */}
    {/* <div><img src={props.movie.Poster} alt="" /></div> */}
    </div>
    </>
    )
}

export default Element