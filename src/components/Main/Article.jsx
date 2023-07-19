import './article.css'
import CardA from '../Cards/CardA';
import currency from '../../assets/images/image-currency.jpg';
import restaurant from '../../assets/images/image-restaurant.jpg';
import plane from '../../assets/images/image-plane.jpg';
import confetti from '../../assets/images/image-confetti.jpg';
function Article() {
    return (
        <section className="article flex flex-column">
            <div className="article__content">
                <h2>Latest Articles</h2>
            </div>
            <div className="article__cards flex flex-column">
                <CardA by="By Claire Robinson" title="Receive money in any currency with no fees" content="The world is getting smaller and we’re becoming more mobile. So why should you be forced to only receive money in a single …" src={currency} id="currency" className="currency" alt="currency" />
                <CardA by="By Wilson Hutton" title="Treat yourself without worrying about money" content="Our simple budgeting feature allows you to separate out your spending and set realistic limits each month. That means you …" src={restaurant} id="restaurant" className="restaurant" alt="Restaurant" />
                <CardA by="By Wilson Hutton" title="Take your Easybank card wherever you go" content="We want you to enjoy your travels.This is why we don’t charge any fees on purchases while you’re abroad. We’ll even show you …" src={plane} id="plane" className="plane" alt="Plane" />
                <CardA by="By Claire Robinson" title="Our invite-only Beta accounts are now live!" content="After a lot of hard work by the whole team, we’re excited to launch our closed beta. It’s easy to request an invite through the site ..." src={confetti} id="confetti" className="confetti" alt="confetti" />
            </div>
        </section>
    );
}

export default Article;