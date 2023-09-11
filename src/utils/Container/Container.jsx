import React from "react";
import css from "./Container.module.css";

function Container(props) {
  return (
    <section className={css.section}>
      <div className={css.container}>{props.children}</div>
    </section>
  );
}

export default Container;
