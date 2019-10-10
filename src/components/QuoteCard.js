import React from 'react';
import './QuoteCard.css';

function QuoteCard(props){
    return (
        <figure class="QuoteCard">
            <img 
                class="img"
                src={props.image}
                alt={props.alt}
            />
                <figcaption>
                    <blockquote 
                        class="blockquote">
                            Shoplifting is a victimless crime, like punching someone in the dark.
                    </blockquote>
                        <cite>
                            {props.character}
                        </cite>
                </figcaption>
        </figure>
    );
}

export default QuoteCard;