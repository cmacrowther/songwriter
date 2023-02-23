import React from "react";

export default function Setup(props) {
  const {
    color,
    img,
    title,
    subtitle,
    tags
  } = props;

  return (
    <div class="modal is-active">
      <div class="modal-background"></div>
        <div class="modal-card">
          <header class="modal-card-head">
            <p class="modal-card-title">Songwriter.js Setup</p>
          </header>
          <section class="modal-card-body">
            <p>Thank you for using Songwriter. We've noticed the following issues with the your current instance:</p>
          </section>
          <footer class="modal-card-foot">
            <button class="button" onClick={refreshPage}>Reload</button>
          </footer>
        </div>
      </div>
  );
}

function refreshPage() {
  window.location.reload(false);
}