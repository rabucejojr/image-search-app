import React from 'react';

const Button = ({onClick}) => {
    return (
        <div id='btnDiv'>
            <button id='submitBtn' type="submit" onClick={onClick}>
                SEARCH
            </button>
        </div>
    );
}

export default Button;
