import React from 'react';
import { Spinner } from 'react-bootstrap';

export default ({ children, animation, role, size, variant, className }) => {
    return (
        <div style={{position: 'relative', top: '50%', left: '50%'}}>
        <Spinner
                animation={animation || 'border'}
                role={role}
                size={size}
                variant={variant}
                className={className}
            >
                {children}
            </Spinner>
        </div>
    )
}