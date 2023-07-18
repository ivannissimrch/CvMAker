import classes from "./Header.module.css";
import JsPDF from "jspdf";
const Header = () => {
  const generatePDF = () => {
    const report = new JsPDF("portrait", "pt", "a4");
    report.html(document.querySelector("#display")).then(() => {
      report.save("Resume.pdf");
    });
  };
  return (
    <header className={classes.headerContainer}>
      <h1 className={classes.title}>Cv Maker</h1>
      <button className="save-pdf" onClick={generatePDF}>
        Save as Pdf
      </button>
    </header>
  );
};

export default Header;
