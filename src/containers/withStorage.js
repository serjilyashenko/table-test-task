import React from 'react';
import ls from 'local-storage';

export const withStorage = key => Component => props => {
  const onChange = data => ls.set(key, JSON.stringify(data));
  let storage = null;

  try {
    storage = JSON.parse(ls.get(key));
  } catch (e) {
    console.warn(`>> incorrect localStorage data for key=${key}; ${e}`);
  }

  return <Component {...props} storage={storage} onStorageChange={onChange} />;
};
