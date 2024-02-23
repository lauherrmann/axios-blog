import './Card.css';
import { Link } from 'react-router-dom';

function Card ({cardTitle, cardParagraph, showLink=true, cardDetails}) {
    return(
        <div>
            <h1>{cardTitle}</h1>
            <p>{cardParagraph}</p>
            {showLink && <Link to={cardDetails}>Ler mais</Link>}
        </div>
    )
}

export default Card; 