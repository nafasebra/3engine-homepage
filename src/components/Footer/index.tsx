import React from "react";

import Style from "./Footer.module.css";
import { Container } from "@/components/index";

import { DiscordIcon, LinkedinIcon, TwitterIcon } from "@/assets/icons";

function Footer() {
  return (
    <footer>
      <Container otherClass={Style.footer_container}>
        <p className={Style.footer_copyright}>
          © 2023 3Engine. All rights reserved.
        </p>
        <div className={Style.footer_links}>
          <ul className={Style.footer_list__links}>
            <li>
              <a href="#" className="underline underline-offset-4">
                Privacy
              </a>
            </li>
            <li>
              <a href="#" className="underline underline-offset-4">
                terms and condition
              </a>
            </li>
          </ul>
          <ul className={Style.footer_list__links}>
            <li>
              <a href="#">
                <TwitterIcon />
              </a>
            </li>
            <li>
              <a href="#">
                <LinkedinIcon />
              </a>
            </li>
            <li>
              <a href="#">
                <DiscordIcon />
              </a>
            </li>
          </ul>
        </div>
      </Container>
    </footer>
  );
}

Footer.displayName = "Footer";

export default Footer;
