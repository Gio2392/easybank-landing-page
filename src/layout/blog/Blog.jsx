import { getData } from '../../helpers/getData';
import './blog.css';

export const Blog = () => {

    const {blog} = getData()
    
  return (
    <section className="blog">
        <div className="container">
            <h3 className='title'>{blog.title}</h3>
            <div className="articles">
            {
                blog.articles.map((art, index) => (
                    <article key={index}>
                        <div className="art__image">
                            <img src={art.image} alt={art.title} />
                        </div>
                        <div className="art__content">
                            <span>{art.author}</span>
                            <a href='#'>{art.title}</a>
                            <p>{art.text}</p>
                        </div>
                    </article>
                ))
            }
            </div>
        </div>        
    </section>
  )
}
