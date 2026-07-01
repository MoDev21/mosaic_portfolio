import React from 'react';
import './LinkButton.css';





const LinkButton = ({ link, active }) => {
  return (
    <li>
        <a href={link.href} target="_blank" className={active === true ? 'active' : ''}>
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