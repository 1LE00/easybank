import './header.css';
import Link from "../Links/Link";
import Icon from "../Icons/Icon";
import Button from "../Buttons/Button";
import easyBank from '../../assets/icons/logo.svg';
import { useState } from 'react';
function Header() {
    const [isClicked, setC] = useState(false);
    function handleClick() {
        document.body.classList.toggle('nav-active');
        setC(prevValue => {
            return !prevValue
        });
    }
    return (
        <header className="header flex w-100">
            <div className="easybank">
                <Icon src={easyBank} alt="Easy Bank Logo" title="Easy Bank" id="easy-bank" />
            </div>
            <div className={isClicked ? 'nav-container w-100 invisible show' : 'nav-container w-100 invisible'}>
                <nav className={isClicked ? 'navbar flex flex-column text-center show' : 'navbar flex flex-column text-center'}>
                    <Link href="#home" id="home" name="home" />
                    <Link href="#about" id="about" name="about" />
                    <Link href="#contact" id="contact" name="contact" />
                    <Link href="#blog" id="blog" name="blog" />
                    <Link href="#careers" id="careers" name="careers" />
                </nav>
            </div>
            <Button />
            <div onClick={handleClick} className={isClicked ? 'toggle close show' : 'toggle hamburger'} title={isClicked ? 'Close Icon' : 'Hamburger Icon'} id={isClicked ? 'close' : 'hamburger'}>
            </div>
        </header>
    )
}

export default Header;
