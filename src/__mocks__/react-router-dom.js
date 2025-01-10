// src/__mocks__/react-router-dom.js
import React from 'react';

export const BrowserRouter = ({ children }) => <div>{children}</div>;
export const Route = ({ children }) => <div>{children}</div>;
export const Link = ({ children }) => <div>{children}</div>;
export const useParams = () => ({ id: '1' });
