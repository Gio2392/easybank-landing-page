import { getData } from "../../helpers/getData";
import './profits.css';

export const Profits = () => {

    const { profits } = getData()
    
  return (
    <section className="profits">
        <div className="container">
            <div className="profits__title">
                <h3 className="title">{profits.title}</h3>
                <p className="profits__text">{profits.text}</p>
            </div>
            <div className="profits__content">
                {
                    profits.cards.map((card, index) => (
                        <div key={index} className="profits__card">
                            <div className="card__image">
                                <img src={card.image} alt={card.title} />
                            </div>
                            <h4 className="card__title">{card.title}</h4>
                            <p className="card__text">{card.text}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    </section>
  )
}
