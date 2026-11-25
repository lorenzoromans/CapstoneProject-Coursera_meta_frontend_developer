const Card = ({ image, title, description }) => {
    return ( 
        <article>
            <img src={image} alt={title + " photo"} className="card-image"/>
            <h3>{title}</h3>
            <p>{description}</p>
        </article>
    );
};

export default Card;  