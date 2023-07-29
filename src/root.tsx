import type { LinksFunction, MetaFunction } from "@remix-run/node";
import {
  Link,
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useCatch,
  useLoaderData,
  useLocation,
} from "@remix-run/react";
import * as React from "react";
import { useEffect, useState } from "react";

import globalStylesUrl from "~/styles/global.css";

declare global {
  interface Window {
    dataLayer: any[];
  }
}

/**
 * The `links` export is a function that returns an array of objects that map to
 * the attributes for an HTML `<link>` element. These will load `<link>` tags on
 * every route in the app, but individual routes can include their own links
 * that are automatically unloaded when a user navigates away from the route.
 *
 * https://remix.run/api/app#links
 */
export const links: LinksFunction = () => {
  return [
    { rel: "preconnect", href: "https://fonts.googleapis.com" },
    { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "" },
    { rel: "stylesheet", href: globalStylesUrl },
  ];
};

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  viewport: "width=device-width,initial-scale=1",
});

/**
 * The root module's default export is a component that renders the current
 * route via the `<Outlet />` component. Think of this as the global layout
 * component for your app.
 */
function App() {
  return (
    <Document>
      <Layout>
        <Outlet />
      </Layout>
    </Document>
  );
}

export default App;

function Document({
  children,
  title,
}: {
  children: React.ReactNode;
  title?: string;
}) {
  const [googleAnalyticsScript, setGoogleAnalyticsScript] =
    useState<React.ReactNode>(null);

  useEffect(() => {
    setGoogleAnalyticsScript(
      <script
        dangerouslySetInnerHTML={{
          __html: `
        const window = window || {};
        window.dataLayer = window.dataLayer || [];
        function gtag() { window.dataLayer.push(arguments) }
        gtag('js', new Date());
        gtag('config', "G-BJBH375MQH");
      `,
        }}
      />
    );
  }, []);

  return (
    <html lang="en">
      <head>
        {title ? <title>{title}</title> : null}
        <Meta />
        <Links />
      </head>
      <body>
        {children}
        <RouteChangeAnnouncement />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-BJBH375MQH"
        ></script>
        {googleAnalyticsScript}
      </body>
    </html>
  );
}

function Layout({ children }: React.PropsWithChildren<{}>) {
  const year = new Date().getFullYear();

  return (
    <div className="todaq-app">
      <header className="todaq-app__header">
        <div className="container todaq-app__header-content">
          <Link
            to="/"
            title="TODAQ Micro"
            className="todaq-app__header-home-link"
          >
            TODAQ
          </Link>
          <nav
            aria-label="Main navigation"
            className="todaq-app__header-nav"
          >
            <ul>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <a href="mailto:contact@todaq.io">Contact</a>
              </li>
              <li>
                <Link className="todaq-app__header-primary-link" to="">
                  Get&nbsp;started
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <div className="todaq-app__main">
        <div className="todaq-app__main-content">{children}</div>
      </div>
      <footer className="todaq-app__footer">
        <div className="container todaq-app__footer-content">
          <div className="todaq-app__footer-copyright">
            <Link
              to="/"
              title="TODAQ Micro"
              className="todaq-app__footer-home-link"
            >
             TODAQ
            </Link>
            <p>Copyright &copy; {year} TODAQ Micro Inc.</p>
          </div>
          <nav
            aria-label="Footer navigation"
            className="todaq-app__footer-nav"
          >
            <ul>
              <li>
                <Link to="/privacy">Privacy</Link>
              </li>
              <li>
                <Link to="/terms">Terms of Service</Link>
              </li>
            </ul>
          </nav>
        </div>
      </footer>
    </div>
  );
}

export function CatchBoundary() {
  const caught = useCatch();

  let message;
  switch (caught.status) {
    case 401:
      message = (
        <p>
          Oops! Looks like you tried to visit a page that you do not have access
          to.
        </p>
      );
      break;
    case 404:
      message = (
        <p>Oops! Looks like you tried to visit a page that does not exist.</p>
      );
      break;

    default:
      throw new Error(caught.data || caught.statusText);
  }

  return (
    <Document title={`${caught.status} ${caught.statusText}`}>
      <Layout>
        <div className="container">
          <h1>
            {caught.status}: {caught.statusText}
          </h1>
          {message}
        </div>
      </Layout>
    </Document>
  );
}

export function ErrorBoundary({ error }: { error: Error }) {
  console.error(error);
  return (
    <Document title="Error!">
      <Layout>
        <div className="container">
          <h1>There was an error</h1>
          <p>{error.message}</p>
          <hr />
          <p>
            Hey, developer, you should replace this with what you want your
            users to see.
          </p>
        </div>
      </Layout>
    </Document>
  );
}

/**
 * Provides an alert for screen reader users when the route changes.
 */
const RouteChangeAnnouncement = React.memo(() => {
  const [hydrated, setHydrated] = React.useState(false);
  const [innerHtml, setInnerHtml] = React.useState("");
  const location = useLocation();

  React.useEffect(() => {
    setHydrated(true);
  }, []);

  const firstRenderRef = React.useRef(true);
  React.useEffect(() => {
    // Skip the first render because we don't want an announcement on the
    // initial page load.
    if (firstRenderRef.current) {
      firstRenderRef.current = false;
      return;
    }

    const pageTitle =
      location.pathname === "/"
        ? "TODAQ Micro"
        : document.title;
    setInnerHtml(`Navigated to ${pageTitle}`);
  }, [location.pathname]);

  // Render nothing on the server. The live region provides no value unless
  // scripts are loaded and the browser takes over normal routing.
  if (!hydrated) {
    return null;
  }

  return (
    <div
      aria-live="assertive"
      aria-atomic
      id="route-change-region"
      style={{
        border: "0",
        clipPath: "inset(100%)",
        clip: "rect(0 0 0 0)",
        height: "1px",
        margin: "-1px",
        overflow: "hidden",
        padding: "0",
        position: "absolute",
        width: "1px",
        whiteSpace: "nowrap",
        wordWrap: "normal",
      }}
    >
      {innerHtml}
    </div>
  );
});
RouteChangeAnnouncement.displayName = "RouteChangeAnnouncement";
