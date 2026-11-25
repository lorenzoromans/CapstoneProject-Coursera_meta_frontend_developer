import Card from "../components/Card";
import Banner from "../components/Banner";
import greekSaladPic from "./../assets/greekSalad.jpg";
import bruschettaPic from "./../assets/bruschetta.jpg";
import lemonDessertPic from "./../assets/lemonDessert.jpg";

const Homepage = () => {
    return (
        <>
        <div className="homepage">
            <Banner/>
            <h1 className="specials-title">This weeks specials!</h1>
            <div className="card-container">
            <section>
                <Card 
                    image={greekSaladPic}
                    title="Greek salad"
                    description="The Greek Salad is a traditional Mediterranean dish made with fresh vegetables, olives, and feta cheese. 
                        It is refreshing, healthy, and often served as a starter."
                />
                <Card 
                    image={bruschettaPic}
                    title="Bruschetta"
                    description="Bruschetta is a traditional Italian appetizer made with grilled bread topped with tomatoes, garlic, and fresh basil. 
                        It is simple, flavorful, and often served as a starter."
                />
                <Card 
                    image={lemonDessertPic}
                    title="Lemon Dessert"
                    description="The Lemon Dessert is a refreshing and light treat made with fresh lemons, sugar, and cream. 
                        It is perfect for ending a meal on a sweet note."
                />
            </section>
            </div>
        </div>
        
        </>
    );
};

export default Homepage;