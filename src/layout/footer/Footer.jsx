import logoFooter from '../../assets/logo-footer.svg';
import { getData } from '../../helpers/getData';
import { Button } from '../../components/Button';

import './footer.css';

export const Footer = () => {

    const { footer } = getData();
    
  return (
    <section className='footer'>
        <footer className='container'>
            <div className="footer__logo">
                <img src={logoFooter} alt="logo" />
            </div>
            <div className="footer__social">
              {
                footer.social.map((scl) => (
                  <a href={scl.url} className="social__img" key={scl.title}>
                    <img src={scl.image} alt={scl.title} />
                  </a>
                ))
              }
            </div>

            <ul className="footer__menu">
              {
                footer.menu.map((link) => (
                  <li key={link}>
                    <a href={`#${link}`} className="footer__menu-link">{link}</a>
                  </li>
                ))
              }
            </ul>

            <Button text='Request Invite' />

            <p className="copyright">{footer.copyright}</p>
        </footer>
    </section>
  )
}
