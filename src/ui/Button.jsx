import React from 'react';

function Button({classes, children, link, id, onClick, type}) {
    return (
        <>
            {link ? <a title={link} href={link} className={classes}>{children}</a> :
                <button type={type} onClick={onClick} id={id ? `${id}` : ''} className={classes}>{children}</button>}
        </>
    );
}

export default Button;