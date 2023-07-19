import './reason.css';
import CardR from '../Cards/CardR';
import online from '../../assets/icons/icon-online.svg';
import budgeting from '../../assets/icons/icon-budgeting.svg';
import onboarding from '../../assets/icons/icon-onboarding.svg';
import api from '../../assets/icons/icon-api.svg';
function Reason() {
    return (
        <section className="reason flex flex-column">
            <div className="reason__content flex flex-column">
                <h2> Why choose Easybank?</h2>
                <p>We leverage Open Banking to turn your bank account into your financial hub. Control your finances like never before.</p>
            </div>
            <div className="reason__cards flex flex-column">
                <CardR title="Online Banking" content="Our modern web and mobile applications allow you to keep track of your finances   wherever you are in the world." src={online} id="online-banking" className="online-banking" alt="Online Banking" />
                <CardR title="Simple Budgeting" content="See exactly where your money goes each month. Receive notifications when you’re   close to hitting your limits." src={budgeting} id="simple-budgeting" className="simple-budgeting" alt="Simple Budgeting" />
                <CardR title="Fast Onboarding" content="We don’t do branches. Open your account in minutes online and start taking control of your finances right away." src={onboarding} id="fast-onboarding" className="fast-onboarding" alt="Fast Onoboarding" />
                <CardR title="Open Api" content="Manage your savings, investments, pension, and much more from one account. Tracking your money has never been easier." src={api} id="open-api" className="open-api" alt="Open Api" />
            </div>
        </section>
    );
}

export default Reason;