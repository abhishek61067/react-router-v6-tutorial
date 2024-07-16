import ScrollSpy from "react-ui-scrollspy";

const lists = [
  { title: "Client side routing" },
  { title: "Nested route" },
  { title: "Dynamic segment" },
];

export function Docs() {
  return (
    <div className="flex relative">
      <div className="doc-section" style={{ height: "300vh" }}>
        <h1>DOCS</h1>
        <ScrollSpy>
          <div id="Client side routing">
            <h2>Client side routing</h2>
            <p>
              React Router enables "client side routing". In traditional
              websites, the browser requests a document from a web server,
              downloads and evaluates CSS and JavaScript assets, and renders the
              HTML sent from the server. When the user clicks a link, it starts
              the process all over again for a new page. Client side routing
              allows your app to update the URL from a link click without making
              another request for another document from the server. Instead,
              your app can immediately render some new UI and make data requests
              with fetch to update the page with new information. This enables
              faster user experiences because the browser doesn't need to
              request an entirely new document or re-evaluate CSS and JavaScript
              assets for the next page. It also enables more dynamic user
              experiences with things like animation. Client side routing is
              enabled by creating a Router and linking/submitting to pages with
              Link and Form
            </p>
          </div>
          <div id="Nested route">
            <h2>Nested Route</h2>
            <p>
              Nested Routing is the general idea of coupling segments of the URL
              to component hierarchy and data. React Router's nested routes were
              inspired by the routing system in Ember.js circa 2014. The Ember
              team realized that in nearly every case, segments of the URL
              determine: The layouts to render on the page The data dependencies
              of those layouts React Router embraces this convention with APIs
              for creating nested layouts coupled to URL segments and data.
              Nested Routing is the general idea of coupling segments of the URL
              to component hierarchy and data. React Router's nested routes were
              inspired by the routing system in Ember.js circa 2014. The Ember
              team realized that in nearly every case, segments of the URL
              determine: The layouts to render on the page The data dependencies
              of those layouts React Router embraces this convention with APIs
              for creating nested layouts coupled to URL segments and data.
            </p>
          </div>
          <div id="Dynamic segment">
            <h2>Dynamic Segment</h2>
            <p>
              Segments of the URL can be dynamic placeholders that are parsed
              and provided to various apis. Lorem ipsum dolor sit amet,
              consectetur adipisicing elit. Dolore quis, corporis obcaecati
              dicta inventore explicabo nisi laudantium cum nulla ipsam.
              Consequuntur ex debitis iure architecto incidunt ducimus
              exercitationem commodi? Dolorem. Lorem, ipsum dolor sit amet
              consectetur adipisicing elit. Odit, possimus aliquam eaque
              eligendi magni tempore laborum quibusdam, exercitationem nobis
              excepturi libero doloremque nulla facere similique corporis fugiat
              distinctio voluptatem atque. lorem
            </p>
          </div>
        </ScrollSpy>
      </div>
      <div className="side-link">
        <ul className="h-300 w-300 sticky">
          {lists.map((list) => (
            <li key={list.title}>
              <a data-to-scrollspy-id={list.title} href={`#${list.title}`}>
                {list.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
