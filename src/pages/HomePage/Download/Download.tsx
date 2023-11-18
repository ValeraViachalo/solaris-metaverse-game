import "./Download.scss";
import pdf from "../../../pdf/Application form.doc";

const Download = () => {
  return (
    <section className="download">
      <div className="download__text">
        <h2 className="download__futere_title">
          Do you want to take part in the closed beta testing of the Solaris
          MetaVerse?
        </h2>
        <a href={pdf} download>
          FILL IN THE FORM
        </a>
        <p>Please download PDF</p>
      </div>
    </section>
  );
};

export default Download;
