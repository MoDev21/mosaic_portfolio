import React from 'react';
import './LinkButton.css';





const LinkButton = ({ link, active, ...props}) => {
  return (
    <li>
        <a target="_blank" className={active === true ? 'active' : ''} onClick={() => props.activate_page(link.label, 'All')}>
          {link.icon && (
            <svg
              className="button-icon"
              role="presentation"
              aria-hidden="true"
              
            >
              <use href={`/icons.svg#${link.icon}`}></use>
            </svg>
          )}
          {link.label}
        </a>
    </li>
  );
}

export default LinkButton;