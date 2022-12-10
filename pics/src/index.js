import React from "react";
import ReactDom from 'react-dom/client';
import App from './App';
// import searchImages from "./api";

// searchImages('cars');

const element = document.getElementById('root');
const root = ReactDom.createRoot(element);

root.render(<App/>);