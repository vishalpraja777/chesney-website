import React from "react";

const Footer = () => {
  return (
    <div>
      <footer id="footer">
        <div class="footer-top">
          <div class="container">
            <div class="row">
              <div class="col-lg-3 col-md-6">
                <div class="footer-info">
                  <h3>
                    <span>
                      <img
                        src="assets/img/Chesney logo footer.jpg"
                        alt="footer logo"
                        class="footerlogo"
                      ></img>
                    </span>
                  </h3>
                  <p>
                    CHESNEY ENTERPRISES PRIVATE LIMITED <br />
                    No 18 K No 164/2/18 Ramegowda Layout, Kengeri, Bengaluru –
                    560060
                    <br />
                    <br />
                    <strong>Phone:</strong>+91 8971734481
                    <br />
                    <strong>Email:</strong> Chesneyindia@gmail.com
                    <br />
                  </p>
                  <div class="social-links mt-3">
                    <a href="#" class="twitter">
                      <i class="bx bxl-twitter"></i>
                    </a>
                    <a href="#" class="facebook">
                      <i class="bx bxl-facebook"></i>
                    </a>
                    <a href="#" class="instagram">
                      <i class="bx bxl-instagram"></i>
                    </a>
                    <a href="#" class="google-plus">
                      <i class="bx bxl-skype"></i>
                    </a>
                    <a href="#" class="linkedin">
                      <i class="bx bxl-linkedin"></i>
                    </a>
                  </div>
                </div>
              </div>

              <div class="col-lg-2 col-md-6 footer-links">
                <h4>Useful Links</h4>
                <ul>
                  <li>
                    <i class="bx bx-chevron-right"></i> <a href="#">Home</a>
                  </li>
                  <li>
                    <i class="bx bx-chevron-right"></i> <a href="#">About us</a>
                  </li>
                  <li>
                    <i class="bx bx-chevron-right"></i> <a href="#">Services</a>
                  </li>
                  <li>
                    <i class="bx bx-chevron-right"></i>{" "}
                    <a href="#">Terms of service</a>
                  </li>
                  <li>
                    <i class="bx bx-chevron-right"></i>{" "}
                    <a href="#">Privacy policy</a>
                  </li>
                </ul>
              </div>

              <div class="col-lg-3 col-md-6 footer-links">
                <h4>Our Services</h4>
                <ul>
                  <li>
                    <i class="bx bx-chevron-right"></i>{" "}
                    <a href="#">Web Design</a>
                  </li>
                  <li>
                    <i class="bx bx-chevron-right"></i>{" "}
                    <a href="#">Web Development</a>
                  </li>
                  <li>
                    <i class="bx bx-chevron-right"></i>{" "}
                    <a href="#">Product Management</a>
                  </li>
                  <li>
                    <i class="bx bx-chevron-right"></i>{" "}
                    <a href="#">Marketing</a>
                  </li>
                  <li>
                    <i class="bx bx-chevron-right"></i>{" "}
                    <a href="#">Graphic Design</a>
                  </li>
                </ul>
              </div>

              <div class="col-lg-4 col-md-6 footer-newsletter">
                <h4>Our Newsletter</h4>
                <p>
                  Tamen quem nulla quae legam multos aute sint culpa legam
                  noster magna
                </p>
                <form action="" method="post">
                  <input type="email" name="email" className="emailFooter" />
                  <input
                    type="submit"
                    value="Subscribe"
                    className="submitFooter"
                  />
                </form>
              </div>
            </div>
          </div>
        </div>

        <div class="container">
          <div class="copyright">
            &copy; Copyright 2023{" "}
            <strong>
              <span>Chesneyindia</span>
            </strong>
            . All Rights Reserved
          </div>
          <div class="credits">Designed by Chesney</div>
        </div>
      </footer>
      {/* <div id="preloader"></div> */}
      <a
        href="#"
        class="back-to-top d-flex align-items-center justify-content-center active"
      >
        <i class="bi bi-arrow-up-short"></i>
      </a>
    </div>
  );
};

export default Footer;
