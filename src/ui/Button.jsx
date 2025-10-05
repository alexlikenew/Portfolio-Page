import React from 'react';

function Button({classes , children , link}) {
    return (
        <a title={link} href={link} className={classes}>{children}</a>
    );
}

export default Button;