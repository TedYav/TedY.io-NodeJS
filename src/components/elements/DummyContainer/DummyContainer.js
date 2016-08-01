import React from 'react';

// simple dummy container to get around the
// "Thou shalt compose elemnts only in containing objects"
// directive that React has.

const DummyContainer = ({children}) => children;

export default DummyContainer;