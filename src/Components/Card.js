import React from 'react';

const Card = ({name,email,id}) => {
    return(
        <div className='bg-light-blue dib  pa3 ma2 br3 grow tc shadow-4 '>
            <img  alt = "robots" src = {`https://robohash.org/${id}?200x200`} />
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    );

}

export default Card;