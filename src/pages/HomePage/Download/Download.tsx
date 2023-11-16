import "./Download.scss";

const Download = () => {
  return (
    <section className="download">
      <div className="download__text">
        <h2 className="download__futere_title">
          Do you want to take part in the closed beta testing of the Solaris
          MetaVerse?
        </h2>
        <a
          href="https://docs.google.com/document/d/1UFMWkOI9SPLL8iSxf1wh8OpVTH4EG3ag/edit?usp=sharing&ouid=101690854080084727154&rtpof=true&sd=true"
          download
        >
          FILL IN THE FORM
        </a>
        <p>Please download PDF</p>
      </div>
    </section>
  );
};

export default Download;
