import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

function QueryString() {
  const location = useLocation();
  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const textQuery = searchParams.get('text');
    const statesQuery = searchParams.get('states');
    console.log(textQuery, statesQuery);
  }, [location]);
  return (
    <Link to={{ search: '?text=mrs&states=NH' }}>
      Click here to use query string for filtering
    </Link>
  );
}

export default QueryString;
