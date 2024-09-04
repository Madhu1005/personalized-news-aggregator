import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import "./tailwind.css";

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <div className="bg-blue-950 text-cyan-300 py-4 px-2 flex justify-center">
          <a href="/Madhu" className="bg-blue-900 my-4 px-2 py-4 hover:bg-yellow-400 hover:text-pink-700">
            hello boss
          </a>
          <div className="bg-blue-900 my-4 px-2 py-4">hello boss</div>
          <div className="bg-blue-900 my-4 px-2 py-4">hello boss</div>
          <div className="bg-blue-900 my-4 px-2 py-4">hello boss</div>
        </div>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}
