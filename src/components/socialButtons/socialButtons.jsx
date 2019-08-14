import React, { useState, useRef } from 'react';
import { Button, Overlay, Tooltip } from 'react-bootstrap';

const copyLink = (setShow) => {
    const dummy = document.createElement('input'),
        text = window.location.href;
        document.body.appendChild(dummy);
        dummy.value = text;
        dummy.select();
        document.execCommand('copy');
        setShow(true);
        setTimeout(()=>{
            setShow(false)
        }, 2000)
};

export default ({ text = 'One Bajaj' }) => {
    const url = encodeURIComponent(`${window.location.href}`);
    const [show, setShow] = useState(false);
    const target = useRef(null);
    return (
        <div className="icon-bar d-lg-block d-md-none d-none">
            <a href={`https://www.facebook.com/sharer/sharer.php?u=${url}&text=${text}`} target="_blank" rel="noopener noreferrer" className="facebook"><i className="fab fa-facebook-f" /></a>
            <a href={`http://twitter.com/share?text=${text}&url=${url}&original_referer=${url}`} target="_blank" rel="noopener noreferrer" className="twitter"><i className="fab fa-twitter" /></a>
            <a href={`https://www.linkedin.com/sharing/share-offsite?url=${url}`} target="_blank" rel="noopener noreferrer" className="linkedin"><i className="fab fa-linkedin-in" /></a>
            <Button ref={target} variant="link" onClick={() => {
                copyLink(setShow); }} className="share sharehover"><i className="fas fa-share-alt" /></Button>
            <Overlay target={target.current} show={show} placement="auto">
                {props => (
                    <Tooltip id="overlay-example" {...props}>
                        Link copied!
          </Tooltip>
                )}
            </Overlay>
        </div>
    )
}

