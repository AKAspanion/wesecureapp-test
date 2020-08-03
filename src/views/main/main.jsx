import React from "react";

export default function MainView({ page }) {
  return (
    <div className="main-view">
      <div className="main-panel">
        <div className="panel-title">
          <div className="panel-title__head">Risk-centered</div>
          <div className="panel-title__sub">Vulnerability Management</div>
        </div>
        <div className="panel-intro">
          <div className="panel-intro__icon">
            <img src="images/infinity.svg" />
          </div>
          <div className="panel-intro__head">Security Workflows</div>
          <div className="panel-intro__sub">
            Create and run playbooks to integrate security into your CI/CD
            pi-peline.
          </div>
          <div className="three-dots" />
        </div>
      </div>
      <div className="main-content">
        <div className="content-headline">strobes</div>
        {page && <div className="content-container">{page}</div>}
        <div className="content-copyright">
          © Copyright Strobes 2020. All Rights Reserved.
        </div>
      </div>
    </div>
  );
}
