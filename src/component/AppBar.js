import {
  faComments,
  faSearch,
  faTimes,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

function AppBar({ search, openSearch, filter, updateFilter, className }) {
  return (
    <div
      className={`flex justify-between items-center p-5 shadow-md h-16 w-full ${className}`}
    >
      {!search && (
        <FontAwesomeIcon
          style={{ minWidth: 30 + 'px', minHeight: 30 + 'px' }}
          icon={faComments}
        />
      )}

      <FontAwesomeIcon
        style={{ minWidth: 24 + 'px', minHeight: 24 + 'px' }}
        className="hover:cursor-pointer"
        icon={faSearch}
        onClick={() => openSearch(!search)}
      />

      {search && (
        <input
          type="text"
          className="grow mx-4 border-none focus:border-transparent focus:ring-0"
          placeholder="Search by contact name..."
          value={filter}
          onChange={(e) => {
            updateFilter(e.target.value);
          }}
        />
      )}
      {search && (
        <FontAwesomeIcon
          className="hover:cursor-pointer"
          icon={faTimes}
          style={{ minWidth: 24 + 'px', minHeight: 24 + 'px' }}
          onClick={() => {
            updateFilter('');
          }}
        />
      )}
    </div>
  );
}
export default AppBar;
