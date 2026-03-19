// import React from "react";
// import ReactDOM from "react-dom/client";
// import "./index.css";
// import App from "./page";

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals


import "./index.css";

export const metadata = {
  title: "Mohammad Portfolio",
  description: "Built with Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* You can add custom fonts or meta tags here */}
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}