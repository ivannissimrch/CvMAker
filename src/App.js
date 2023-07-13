import { Fragment } from "react";
import "./App.css";

function App() {
  return (
    <Fragment>
      <header>
        <h1>Cv Maker</h1>
      </header>
      <div class="main-container">
        <section class="edit-section">add and delete info section</section>
        <section class="cv-section">
          <aside class="about">picture and about info</aside>
          <main class="experience">education and work experience</main>
        </section>
      </div>
    </Fragment>
  );
}

export default App;
