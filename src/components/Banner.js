import restaurantFood from "../assets/restauranfood.jpg";

const Banner = () => {
    return (
        <div className="banner">
            <div className="banner-text">
                <h1>Little Lemon</h1>
                <h2>Chicago</h2>
                <p className="banner-desc">
                    We are a family-owned Mediterranean restaurant, serving
                    traditional recipes with a modern twist.
                </p>
            </div>
            <img
                className="banner-image"
                src={restaurantFood}
                alt="Our bruschetta appetizer with fresh tomatoes, basil, and garlic on toasted bread"
            />
        </div>
    );
};

export default Banner;