import React from 'react';

const Layout = ({ advice }) => {
  return (
    <div className="layout-text">
      <p>{advice ? `"${advice}"` : "Cargando consejo..."}</p>
    </div>
  );
};

export default Layout;
