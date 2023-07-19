import './hero.css'
import Icon from '../Icons/Icon';
import Button from '../Buttons/Button';
import mobileBg from '../../assets/icons/bg-intro-mobile.svg';
import desktopBg from '../../assets/icons/bg-intro-desktop.svg';
import mockups from '../../assets/images/image-mockups.png';
function Hero() {
    return (
        <section className="hero flex flex-column">
            <div className="hero__content flex flex-column">
                <h1>Next generation digital banking</h1>
                <p>Take your financial life online. Your Easybank account will be a one-stop-shop for spending, saving, budgeting, investing, and much more.</p>
                <Button></Button>
            </div>
            <div className="hero__img_holder w-100">
                <Icon src={window.screen.width >= 768 ? desktopBg : mobileBg} id="bg" className="bg" alt="easy-bank-bg" title={window.screen.width >= 768 ? "desktop-bg" : "mobile-bg"} />
                <Icon src={mockups} id="mockups" className="mockups" alt="easy-bank-mockups" title="Mockups" />
            </div>
        </section>
    );
}

export default Hero;