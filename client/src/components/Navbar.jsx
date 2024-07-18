import React from 'react';

const Navbar = () => {
  return (
    <div className="fixed bottom-0 w-full bg-white shadow-md flex justify-around items-center py-2">
      <button className="btn btn-circle btn-outline"><i className="bi bi-house"></i></button>
      <button className="btn btn-circle btn-outline"><i className="bi bi-chat"></i></button>
      <button className="btn btn-circle btn-outline"><i className="bi bi-bell"></i></button>
      <button className="btn btn-circle btn-outline"><i className="bi bi-gear"></i></button>
    </div>
  );
};

export default Navbar;
