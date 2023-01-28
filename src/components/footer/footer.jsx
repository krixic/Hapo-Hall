import React from "react";
import "./footer.css";

export const Footer = () => {
  return (
    <section className="footer-section">
      <div className="layered-spacer">
        <div className="copyright">
          <div className="copyright-title">
            © Copyright 2023 krixic.github.io/hapohall
          </div>
          <div className="copyright-subtitle">All rights reserved</div>
        </div>
        <div className="terms-of-use">
          <div className="terms-title">Terms of Use</div>
          <div className="terms-subtitle">
            All content on krixic.github.io/hapohall is provided free of charge.
            However, you may not redistribute, in any way, any original content
            found here without the creator's explicit permission. All content is
            provided without any guarantees.
          </div>
        </div>
      </div>
    </section>
  );
};
