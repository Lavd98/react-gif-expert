export const GifItem = ({title, url}) =>{
    return (
        // <li key={ img.id }>{ img.title }</li>
        <div className="card">
            <img src={ url } alt={ title }></img>
            <p>{title}</p>
        </div>
    )
}