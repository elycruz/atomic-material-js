'use client';

import React from 'react';

export function AppNavToggle() {
  const onClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    e.currentTarget.ownerDocument.documentElement.classList.toggle(
      'with-app-nav-hidden'
    );
  };

  return (
    <button className="ez-hamburger-btn ez-btn" onClick={onClick}>
      <i className="md-icon">menu</i>
    </button>
  );
}
