import React from 'react';
import { Spinner } from 'react-bootstrap';

export default ({ children, animation, role, size, variant, className, style }) => {
    return (
        <div style={{textAlign: 'center'}}>
        <Spinner
                style={{margin: '0 auto', display: 'block'}}
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