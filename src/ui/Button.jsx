import React from 'react';

function Button({classes, children, link, id, onClick}) {
    return (
        <>
            {link ? <a title={link} href={link} className={classes}>{children}</a> :
                <button onClick={onClick} id={id ? `${id}` : ''} className={classes}>{children}</button>}
        </>
    );
}

export default Button;