import { getData } from '../../helpers/getData';
import bgHero from '../../assets/image-mockups.png';
import './hero.css'
import { Button } from '../../components/Button';

export const Hero = () => {

  const {hero} = getData()

  return (
    <section className='hero'>
      <div className="hero__bg"></div>
      <div className='container'>
        <div className="hero__mockups">
          <img src={bgHero} alt="" />
        </div>
        <div className="hero__content">
          <h3 className="hero__title">{hero.title}</h3>
          <p className="hero__text">{hero.text}</p>

          <Button text='Request Invite' />
          
        </div>
      </div>
    </section>
  )
}
