import React from "react";
import { Link } from "react-router-dom";

const Mainsection = () => {
    return ( 
        <div>
            <main id="main">

<section id="about" class="about">
  <div class="container" data-aos="fade-up">
    <div class="row">
      <div class="col-lg-6 order-1 order-lg-2" data-aos="fade-left" data-aos-delay="100">
        <img src="assets/img/about.jpg" class="img-fluid" alt=""/>
      </div>
      <div class="col-lg-6 pt-4 pt-lg-0 order-2 order-lg-1 content" data-aos="fade-right" data-aos-delay="100">
        <h3>Vision.</h3>
        <p class="fst-italic">
          {/* Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore */}
          {/* magna aliqua. */}
        </p>
        
        <ul>
          {/* <li><i class="ri-check-double-line"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat.</li> */}
          {/* <li><i class="ri-check-double-line"></i> Duis aute irure dolor in reprehenderit in voluptate velit.</li> */}
          {/* <li><i class="ri-check-double-line"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate trideta storacalaperda mastiro dolore eu fugiat nulla pariatur.</li> */}
        </ul>
        <p>
        Revolutionizing advertising and marketing with drones for captivating visuals and global engagement.
        </p>
        <h3>Mission.</h3>
        <p class="Mission">
        Our mission is to leverage the power of drones to deliver exceptional advertising, marketing, and media solutions. 
        We are dedicated to providing innovative and impactful services that redefine visual experiences, elevate brands, and engage audiences worldwide. 
        Through our expertise, creativity, and commitment to excellence, we aim to be the trusted partner that transforms the way businesses connect with their target markets using cutting-edge drone technology.
        </p>
      </div>
    </div>

  </div>
</section>

{/* <section id="clients" class="clients">
  <div class="container" data-aos="zoom-in">

    <div class="clients-slider swiper">
      <div class="swiper-wrapper align-items-center">
        <div class="swiper-slide"><img src="assets/img/clients/client-1.png" class="img-fluid" alt=""/></div>
        <div class="swiper-slide"><img src="assets/img/clients/client-2.png" class="img-fluid" alt=""/></div>
        <div class="swiper-slide"><img src="assets/img/clients/client-3.png" class="img-fluid" alt=""/></div>
        <div class="swiper-slide"><img src="assets/img/clients/client-4.png" class="img-fluid" alt=""/></div>
        <div class="swiper-slide"><img src="assets/img/clients/client-5.png" class="img-fluid" alt=""/></div>
        <div class="swiper-slide"><img src="assets/img/clients/client-6.png" class="img-fluid" alt=""/></div>
        <div class="swiper-slide"><img src="assets/img/clients/client-7.png" class="img-fluid" alt=""/></div>
        <div class="swiper-slide"><img src="assets/img/clients/client-8.png" class="img-fluid" alt=""/></div>
      </div>
      <div class="swiper-pagination"></div>
    </div>

  </div>
</section>  */}

        <section id="features" class="features">
          <div class="container" data-aos="fade-up">
            <div class="row">
              <div
                class="image col-lg-6"
                style={{ backgroundImage: 'url("assets/img/features.jpg")' }}
                data-aos="fade-right"
              ></div>
              <div class="col-lg-6" data-aos="fade-left" data-aos-delay="100">
                <div
                  class="icon-box mt-5 mt-lg-0"
                  data-aos="zoom-in"
                  data-aos-delay="150"
                >
                  <i class="bx bx-receipt"></i>
                  <h4>Impactful Drone Advertising</h4>
                  <p>
                    Experience impactful, emotion-evoking drone advertising
                    campaigns that captivate audiences, leaving lasting brand
                    impressions.
                  </p>
                </div>
                <div
                  class="icon-box mt-5"
                  data-aos="zoom-in"
                  data-aos-delay="150"
                >
                  <i class="bx bx-cube-alt"></i>
                  <h4>Drone-Powered Creativity</h4>
                  <p>
                    Unleash creativity with our drone-powered digital marketing
                    services, telling visually stunning brand stories that
                    resonate across diverse digital platforms.
                  </p>
                </div>
                <div
                  class="icon-box mt-5"
                  data-aos="zoom-in"
                  data-aos-delay="150"
                >
                  <i class="bx bx-images"></i>
                  <h4>Aerial Mastery</h4>
                  <p>
                    Pushing boundaries of visual storytelling, we capture
                    breathtaking aerial footage for films, documentaries, and
                    commercials, inspiring and captivating viewers worldwide.
                  </p>
                </div>
                <div
                  class="icon-box mt-5"
                  data-aos="zoom-in"
                  data-aos-delay="150"
                >
                  <i class="bx bx-shield"></i>
                  <h4>Drone-Powered Experiences</h4>
                  <p>
                    Pioneering interactive drone campaigns, we create immersive
                    experiences like light shows and races, amplifying brand
                    recognition and deepening audience connections.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* <section id="cta" class="cta">
          <div class="container" data-aos="zoom-in">
            <div class="text-center">
              <h3>Call To Action</h3>
              <p>
                {" "}
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui officia deserunt
                mollit anim id est laborum.
              </p>
              <a class="cta-btn" href="#">
                Call To Action
              </a>
            </div>
          </div>
        </section> */}

        <section id="portfolio" class="portfolio">
          <div class="container" data-aos="fade-up">
            <div class="section-title">
              <h2>Products</h2>
              <p>Check our Products</p>
            </div>

            <div class="row" data-aos="fade-up" data-aos-delay="100">
              <div class="col-lg-12 d-flex justify-content-center">
                <ul id="portfolio-flters">
                  <li data-filter="*" class="filter-active">
                    All
                  </li>
                  <li data-filter=".filter-app">App</li>
                  <li data-filter=".filter-card">Card</li>
                  <li data-filter=".filter-web">Web</li>
                </ul>
              </div>
            </div>

            <div
              class="row portfolio-container"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div class="col-lg-4 col-md-6 portfolio-item filter-app">
                <div class="portfolio-wrap">
                  <img
                    src="assets/img/portfolio/portfolio-1.jpg"
                    class="img-fluid"
                    alt=""
                  />
                  <div class="portfolio-info">
                    <h4>App 1</h4>
                    <p>App</p>
                    <div class="portfolio-links">
                      <a
                        href="assets/img/portfolio/portfolio-1.jpg"
                        data-gallery="portfolioGallery"
                        class="portfolio-lightbox"
                        title="App 1"
                      >
                        <i class="bx bx-plus"></i>
                      </a>
                      <Link to='/productdetails'><i class="bx bx-link"></i></Link>
                      {/* <a href="portfolio-details.html" title="More Details">
                        <i class="bx bx-link"></i>
                      </a> */}
                    </div>
                  </div>
                </div>
              </div>

              <div class="col-lg-4 col-md-6 portfolio-item filter-web">
                <div class="portfolio-wrap">
                  <img
                    src="assets/img/portfolio/portfolio-2.jpg"
                    class="img-fluid"
                    alt=""
                  />
                  <div class="portfolio-info">
                    <h4>Web 3</h4>
                    <p>Web</p>
                    <div class="portfolio-links">
                      <a
                        href="assets/img/portfolio/portfolio-2.jpg"
                        data-gallery="portfolioGallery"
                        class="portfolio-lightbox"
                        title="Web 3"
                      >
                        <i class="bx bx-plus"></i>
                      </a>
                      <a href="portfolio-details.html" title="More Details">
                        <i class="bx bx-link"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div class="col-lg-4 col-md-6 portfolio-item filter-app">
                <div class="portfolio-wrap">
                  <img
                    src="assets/img/portfolio/portfolio-3.jpg"
                    class="img-fluid"
                    alt=""
                  />
                  <div class="portfolio-info">
                    <h4>App 2</h4>
                    <p>App</p>
                    <div class="portfolio-links">
                      <a
                        href="assets/img/portfolio/portfolio-3.jpg"
                        data-gallery="portfolioGallery"
                        class="portfolio-lightbox"
                        title="App 2"
                      >
                        <i class="bx bx-plus"></i>
                      </a>
                      <a href="portfolio-details.html" title="More Details">
                        <i class="bx bx-link"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div class="col-lg-4 col-md-6 portfolio-item filter-card">
                <div class="portfolio-wrap">
                  <img
                    src="assets/img/portfolio/portfolio-4.jpg"
                    class="img-fluid"
                    alt=""
                  />
                  <div class="portfolio-info">
                    <h4>Card 2</h4>
                    <p>Card</p>
                    <div class="portfolio-links">
                      <a
                        href="assets/img/portfolio/portfolio-4.jpg"
                        data-gallery="portfolioGallery"
                        class="portfolio-lightbox"
                        title="Card 2"
                      >
                        <i class="bx bx-plus"></i>
                      </a>
                      <a href="portfolio-details.html" title="More Details">
                        <i class="bx bx-link"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div class="col-lg-4 col-md-6 portfolio-item filter-web">
                <div class="portfolio-wrap">
                  <img
                    src="assets/img/portfolio/portfolio-5.jpg"
                    class="img-fluid"
                    alt=""
                  />
                  <div class="portfolio-info">
                    <h4>Web 2</h4>
                    <p>Web</p>
                    <div class="portfolio-links">
                      <a
                        href="assets/img/portfolio/portfolio-5.jpg"
                        data-gallery="portfolioGallery"
                        class="portfolio-lightbox"
                        title="Web 2"
                      >
                        <i class="bx bx-plus"></i>
                      </a>
                      <a href="portfolio-details.html" title="More Details">
                        <i class="bx bx-link"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div class="col-lg-4 col-md-6 portfolio-item filter-app">
                <div class="portfolio-wrap">
                  <img
                    src="assets/img/portfolio/portfolio-6.jpg"
                    class="img-fluid"
                    alt=""
                  />
                  <div class="portfolio-info">
                    <h4>App 3</h4>
                    <p>App</p>
                    <div class="portfolio-links">
                      <a
                        href="assets/img/portfolio/portfolio-6.jpg"
                        data-gallery="portfolioGallery"
                        class="portfolio-lightbox"
                        title="App 3"
                      >
                        <i class="bx bx-plus"></i>
                      </a>
                      <a href="portfolio-details.html" title="More Details">
                        <i class="bx bx-link"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div class="col-lg-4 col-md-6 portfolio-item filter-card">
                <div class="portfolio-wrap">
                  <img
                    src="assets/img/portfolio/portfolio-7.jpg"
                    class="img-fluid"
                    alt=""
                  />
                  <div class="portfolio-info">
                    <h4>Card 1</h4>
                    <p>Card</p>
                    <div class="portfolio-links">
                      <a
                        href="assets/img/portfolio/portfolio-7.jpg"
                        data-gallery="portfolioGallery"
                        class="portfolio-lightbox"
                        title="Card 1"
                      >
                        <i class="bx bx-plus"></i>
                      </a>
                      <a href="portfolio-details.html" title="More Details">
                        <i class="bx bx-link"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div class="col-lg-4 col-md-6 portfolio-item filter-card">
                <div class="portfolio-wrap">
                  <img
                    src="assets/img/portfolio/portfolio-8.jpg"
                    class="img-fluid"
                    alt=""
                  />
                  <div class="portfolio-info">
                    <h4>Card 3</h4>
                    <p>Card</p>
                    <div class="portfolio-links">
                      <a
                        href="assets/img/portfolio/portfolio-8.jpg"
                        data-gallery="portfolioGallery"
                        class="portfolio-lightbox"
                        title="Card 3"
                      >
                        <i class="bx bx-plus"></i>
                      </a>
                      <a href="portfolio-details.html" title="More Details">
                        <i class="bx bx-link"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div class="col-lg-4 col-md-6 portfolio-item filter-web">
                <div class="portfolio-wrap">
                  <img
                    src="assets/img/portfolio/portfolio-9.jpg"
                    class="img-fluid"
                    alt=""
                  />
                  <div class="portfolio-info">
                    <h4>Web 3</h4>
                    <p>Web</p>
                    <div class="portfolio-links">
                      <a
                        href="assets/img/portfolio/portfolio-9.jpg"
                        data-gallery="portfolioGallery"
                        class="portfolio-lightbox"
                        title="Web 3"
                      >
                        <i class="bx bx-plus"></i>
                      </a>
                      <a href="portfolio-details.html" title="More Details">
                        <i class="bx bx-link"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="services" class="services">
          <div class="container" data-aos="fade-up">
            <div class="section-title">
              <h2>Services</h2>
              <p>Check our Services</p>
            </div>

            <div class="row">
              <div
                class="col-lg-4 col-md-6 d-flex align-items-stretch"
                data-aos="zoom-in"
                data-aos-delay="100"
              >
                <div class="icon-box">
                  <div class="icon">
                    <i class="bx bxl-dribbble"></i>
                  </div>
                  <h4>
                    <a href="">Lorem Ipsum</a>
                  </h4>
                  <p>
                    Voluptatum deleniti atque corrupti quos dolores et quas
                    molestias excepturi
                  </p>
                </div>
              </div>

              <div
                class="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-md-0"
                data-aos="zoom-in"
                data-aos-delay="200"
              >
                <div class="icon-box">
                  <div class="icon">
                    <i class="bx bx-file"></i>
                  </div>
                  <h4>
                    <a href="">Sed ut perspiciatis</a>
                  </h4>
                  <p>
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore
                  </p>
                </div>
              </div>

              <div
                class="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-lg-0"
                data-aos="zoom-in"
                data-aos-delay="300"
              >
                <div class="icon-box">
                  <div class="icon">
                    <i class="bx bx-tachometer"></i>
                  </div>
                  <h4>
                    <a href="">Magni Dolores</a>
                  </h4>
                  <p>
                    Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia
                  </p>
                </div>
              </div>

              <div
                class="col-lg-4 col-md-6 d-flex align-items-stretch mt-4"
                data-aos="zoom-in"
                data-aos-delay="100"
              >
                <div class="icon-box">
                  <div class="icon">
                    <i class="bx bx-world"></i>
                  </div>
                  <h4>
                    <a href="">Nemo Enim</a>
                  </h4>
                  <p>
                    At vero eos et accusamus et iusto odio dignissimos ducimus
                    qui blanditiis
                  </p>
                </div>
              </div>

              <div
                class="col-lg-4 col-md-6 d-flex align-items-stretch mt-4"
                data-aos="zoom-in"
                data-aos-delay="200"
              >
                <div class="icon-box">
                  <div class="icon">
                    <i class="bx bx-slideshow"></i>
                  </div>
                  <h4>
                    <a href="">Dele cardo</a>
                  </h4>
                  <p>
                    Quis consequatur saepe eligendi voluptatem consequatur dolor
                    consequuntur
                  </p>
                </div>
              </div>

              <div
                class="col-lg-4 col-md-6 d-flex align-items-stretch mt-4"
                data-aos="zoom-in"
                data-aos-delay="300"
              >
                <div class="icon-box">
                  <div class="icon">
                    <i class="bx bx-arch"></i>
                  </div>
                  <h4>
                    <a href="">Divera don</a>
                  </h4>
                  <p>
                    Modi nostrum vel laborum. Porro fugit error sit minus
                    sapiente sit aspernatur
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="counts" class="counts">
          <div class="container" data-aos="fade-up">
            <div class="row no-gutters">
              <div
                class="image col-xl-5 d-flex align-items-stretch justify-content-center justify-content-lg-start"
                data-aos="fade-right"
                data-aos-delay="100"
              ></div>
              <div
                class="col-xl-7 ps-0 ps-lg-5 pe-lg-1 d-flex align-items-stretch"
                data-aos="fade-left"
                data-aos-delay="100"
              >
                <div class="content d-flex flex-column justify-content-center">
                  <h3>Voluptatem dignissimos provident quasi</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Duis aute irure dolor in reprehenderit
                  </p>
                  <div class="row">
                    <div class="col-md-6 d-md-flex align-items-md-stretch">
                      <div class="count-box">
                        <i class="bi bi-emoji-smile"></i>
                        <span
                          data-purecounter-start="0"
                          data-purecounter-end="65"
                          data-purecounter-duration="2"
                          class="purecounter"
                        ></span>
                        <p>
                          <strong>Happy Clients</strong> consequuntur voluptas
                          nostrum aliquid ipsam architecto ut.
                        </p>
                      </div>
                    </div>

                    <div class="col-md-6 d-md-flex align-items-md-stretch">
                      <div class="count-box">
                        <i class="bi bi-journal-richtext"></i>
                        <span
                          data-purecounter-start="0"
                          data-purecounter-end="85"
                          data-purecounter-duration="2"
                          class="purecounter"
                        ></span>
                        <p>
                          <strong>Projects</strong> adipisci atque cum quia
                          aspernatur totam laudantium et quia dere tan
                        </p>
                      </div>
                    </div>

                    <div class="col-md-6 d-md-flex align-items-md-stretch">
                      <div class="count-box">
                        <i class="bi bi-clock"></i>
                        <span
                          data-purecounter-start="0"
                          data-purecounter-end="35"
                          data-purecounter-duration="4"
                          class="purecounter"
                        ></span>
                        <p>
                          <strong>Years of experience</strong> aut commodi
                          quaerat modi aliquam nam ducimus aut voluptate non vel
                        </p>
                      </div>
                    </div>

                    <div class="col-md-6 d-md-flex align-items-md-stretch">
                      <div class="count-box">
                        <i class="bi bi-award"></i>
                        <span
                          data-purecounter-start="0"
                          data-purecounter-end="20"
                          data-purecounter-duration="4"
                          class="purecounter"
                        ></span>
                        <p>
                          <strong>Awards</strong> rerum asperiores dolor alias
                          quo reprehenderit eum et nemo pad der
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="testimonials" class="testimonials">
          <div class="container" data-aos="zoom-in">
            <div
              class="testimonials-slider swiper"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div class="swiper-wrapper">
                <div class="swiper-slide">
                  <div class="testimonial-item">
                    <img
                      src="assets/img/team/chethan.jpg"
                      class="testimonial-img"
                      alt=""
                    />
                    <h3>Chethan R</h3>
                    <h4>CEO &amp; Founder</h4>
                    <p>
                      <i class="bx bxs-quote-alt-left quote-icon-left"></i>
                      Proin iaculis purus consequat sem cure digni ssim donec
                      porttitora entum suscipit rhoncus. Accusantium quam,
                      ultricies eget id, aliquam eget nibh et. Maecen aliquam,
                      risus at semper.
                      <i class="bx bxs-quote-alt-right quote-icon-right"></i>
                    </p>
                  </div>
                </div>

                <div class="swiper-slide">
                  <div class="testimonial-item">
                    <img
                      src="assets/img/team/chethan.jpg"
                      class="testimonial-img"
                      alt=""
                    />
                    <h3>Sara Wilsson</h3>
                    <h4>Designer</h4>
                    <p>
                      <i class="bx bxs-quote-alt-left quote-icon-left"></i>
                      Export tempor illum tamen malis malis eram quae irure esse
                      labore quem cillum quid cillum eram malis quorum velit
                      fore eram velit sunt aliqua noster fugiat irure amet legam
                      anim culpa.
                      <i class="bx bxs-quote-alt-right quote-icon-right"></i>
                    </p>
                  </div>
                </div>

                <div class="swiper-slide">
                  <div class="testimonial-item">
                    <img
                      src="assets/img/testimonials/testimonials-3.jpg"
                      class="testimonial-img"
                      alt=""
                    />
                    <h3>Jena Karlis</h3>
                    <h4>Store Owner</h4>
                    <p>
                      <i class="bx bxs-quote-alt-left quote-icon-left"></i>
                      Enim nisi quem export duis labore cillum quae magna enim
                      sint quorum nulla quem veniam duis minim tempor labore
                      quem eram duis noster aute amet eram fore quis sint minim.
                      <i class="bx bxs-quote-alt-right quote-icon-right"></i>
                    </p>
                  </div>
                </div>

                <div class="swiper-slide">
                  <div class="testimonial-item">
                    <img
                      src="assets/img/testimonials/testimonials-4.jpg"
                      class="testimonial-img"
                      alt=""
                    />
                    <h3>Matt Brandon</h3>
                    <h4>Freelancer</h4>
                    <p>
                      <i class="bx bxs-quote-alt-left quote-icon-left"></i>
                      Fugiat enim eram quae cillum dolore dolor amet nulla culpa
                      multos export minim fugiat minim velit minim dolor enim
                      duis veniam ipsum anim magna sunt elit fore quem dolore
                      labore illum veniam.
                      <i class="bx bxs-quote-alt-right quote-icon-right"></i>
                    </p>
                  </div>
                </div>

                <div class="swiper-slide">
                  <div class="testimonial-item">
                    <img
                      src="assets/img/testimonials/testimonials-5.jpg"
                      class="testimonial-img"
                      alt=""
                    />
                    <h3>John Larson</h3>
                    <h4>Entrepreneur</h4>
                    <p>
                      <i class="bx bxs-quote-alt-left quote-icon-left"></i>
                      Quis quorum aliqua sint quem legam fore sunt eram irure
                      aliqua veniam tempor noster veniam enim culpa labore duis
                      sunt culpa nulla illum cillum fugiat legam esse veniam
                      culpa fore nisi cillum quid.
                      <i class="bx bxs-quote-alt-right quote-icon-right"></i>
                    </p>
                  </div>
                </div>
              </div>
              <div class="swiper-pagination"></div>
            </div>
          </div>
        </section>

        <section id="team" class="team">
          <div class="container" data-aos="fade-up">
            <div class="section-title">
              <h2>Team</h2>
              <p>Check our Team</p>
            </div>

            <div class="row">
              <div class="col-lg-3 col-md-6 d-flex align-items-stretch">
                <div class="member" data-aos="fade-up" data-aos-delay="100">
                  <div class="member-img">
                    <img
                      src="assets/img/team/chethan.jpg"
                      class="img-fluid"
                      alt=""
                    />
                    <div class="social">
                      <a href="">
                        <i class="bi bi-twitter"></i>
                      </a>
                      <a href="">
                        <i class="bi bi-facebook"></i>
                      </a>
                      <a href="">
                        <i class="bi bi-instagram"></i>
                      </a>
                      <a href="">
                        <i class="bi bi-linkedin"></i>
                      </a>
                    </div>
                  </div>
                  <div class="member-info">
                    <h4>Chethan R</h4>
                    <span>Chief Executive Officer</span>
                  </div>
                </div>
              </div>

              <div class="col-lg-3 col-md-6 d-flex align-items-stretch">
                <div class="member" data-aos="fade-up" data-aos-delay="200">
                  <div class="member-img">
                    <img
                      src="assets/img/team/vini.jpg"
                      class="img-fluid"
                      alt=""
                    />
                    <div class="social">
                      <a href="">
                        <i class="bi bi-twitter"></i>
                      </a>
                      <a href="">
                        <i class="bi bi-facebook"></i>
                      </a>
                      <a href="">
                        <i class="bi bi-instagram"></i>
                      </a>
                      <a href="">
                        <i class="bi bi-linkedin"></i>
                      </a>
                    </div>
                  </div>
                  <div class="member-info">
                    <h4>Vinay</h4>
                    <span>Manager</span>
                  </div>
                </div>
              </div>

              <div class="col-lg-3 col-md-6 d-flex align-items-stretch">
                <div class="member" data-aos="fade-up" data-aos-delay="300">
                  <div class="member-img">
                    <img
                      src="assets/img/team/sneha.jpg"
                      class="img-fluid"
                      alt=""
                    />
                    <div class="social">
                      <a href="">
                        <i class="bi bi-twitter"></i>
                      </a>
                      <a href="">
                        <i class="bi bi-facebook"></i>
                      </a>
                      <a href="">
                        <i class="bi bi-instagram"></i>
                      </a>
                      <a href="">
                        <i class="bi bi-linkedin"></i>
                      </a>
                    </div>
                  </div>
                  <div class="member-info">
                    <h4>Sneha</h4>
                    <span>Drone and Battery Specialist</span>
                  </div>
                </div>
              </div>

              <div class="col-lg-3 col-md-6 d-flex align-items-stretch">
                <div class="member" data-aos="fade-up" data-aos-delay="400">
                  <div class="member-img">
                    <img
                      src="assets/img/team/akash.jpg"
                      class="img-fluid"
                      alt=""
                    />
                    <div class="social">
                      <a href="">
                        <i class="bi bi-twitter"></i>
                      </a>
                      <a href="">
                        <i class="bi bi-facebook"></i>
                      </a>
                      <a href="">
                        <i class="bi bi-instagram"></i>
                      </a>
                      <a href="">
                        <i class="bi bi-linkedin"></i>
                      </a>
                    </div>
                  </div>
                  <div class="member-info">
                    <h4>Akash Verma</h4>
                    <span>Drone Specialist</span>
                  </div>
                </div>
              </div>
            </div>

            <div class="row">
              <div class="col-lg-3 col-md-6 d-flex align-items-stretch">
                <div class="member" data-aos="fade-up" data-aos-delay="100">
                  <div class="member-img">
                    <img
                      src="assets/img/team/bharath.jpg"
                      class="img-fluid"
                      alt=""
                    />
                    <div class="social">
                      <a href="">
                        <i class="bi bi-twitter"></i>
                      </a>
                      <a href="">
                        <i class="bi bi-facebook"></i>
                      </a>
                      <a href="">
                        <i class="bi bi-instagram"></i>
                      </a>
                      <a href="">
                        <i class="bi bi-linkedin"></i>
                      </a>
                    </div>
                  </div>
                  <div class="member-info">
                    <h4>Bharath V</h4>
                    <span>Web Developer and Business Development</span>
                  </div>
                </div>
              </div>

              <div class="col-lg-3 col-md-6 d-flex align-items-stretch">
                <div class="member" data-aos="fade-up" data-aos-delay="200">
                  <div class="member-img">
                    <img
                      src="assets/img/team/karthik k.png"
                      class="img-fluid"
                      alt=""
                    />
                    <div class="social">
                      <a href="">
                        <i class="bi bi-twitter"></i>
                      </a>
                      <a href="">
                        <i class="bi bi-facebook"></i>
                      </a>
                      <a href="">
                        <i class="bi bi-instagram"></i>
                      </a>
                      <a href="">
                        <i class="bi bi-linkedin"></i>
                      </a>
                    </div>
                  </div>
                  <div class="member-info">
                    <h4>Karthik K</h4>
                    <span>Web Developer and Business Development</span>
                  </div>
                </div>
              </div>

              <div class="col-lg-3 col-md-6 d-flex align-items-stretch">
                <div class="member" data-aos="fade-up" data-aos-delay="300">
                  <div class="member-img">
                    <img
                      src="assets/img/team/vishal.jpg"
                      class="img-fluid"
                      alt=""
                    />
                    <div class="social">
                      <a href="">
                        <i class="bi bi-twitter"></i>
                      </a>
                      <a href="">
                        <i class="bi bi-facebook"></i>
                      </a>
                      <a href="">
                        <i class="bi bi-instagram"></i>
                      </a>
                      <a href="">
                        <i class="bi bi-linkedin"></i>
                      </a>
                    </div>
                  </div>
                  <div class="member-info">
                    <h4>Vishal</h4>
                    <span>Full Stack Web Developer</span>
                  </div>
                </div>
              </div>

              <div class="col-lg-3 col-md-6 d-flex align-items-stretch">
                <div class="member" data-aos="fade-up" data-aos-delay="400">
                  <div class="member-img">
                    <img
                      src="assets/img/team/bal_Kishan_Reddy.jpg"
                      class="img-fluid"
                      alt=""
                    />
                    <div class="social">
                      <a href="">
                        <i class="bi bi-twitter"></i>
                      </a>
                      <a href="">
                        <i class="bi bi-facebook"></i>
                      </a>
                      <a href="">
                        <i class="bi bi-instagram"></i>
                      </a>
                      <a href="">
                        <i class="bi bi-linkedin"></i>
                      </a>
                    </div>
                  </div>
                  <div class="member-info">
                    <h4>Bal Kishan Reddy</h4>
                    <span>Designer and Web Developer</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" class="contact">
          <div class="container" data-aos="fade-up">
            <div class="section-title">
              <h2>Contact</h2>
              <p>Contact Us</p>
            </div>

            <div>
              <iframe
                style={{ border: "0", width: "100%", height: "270px" }}
                src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3889.030131934785!2d77.46291!3d12.905783999999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTLCsDU0JzIwLjgiTiA3N8KwMjcnNDYuNSJF!5e0!3m2!1sen!2sin!4v1686138599928!5m2!1sen!2sin"
                frameborder="0"
                allowfullscreen
              ></iframe>
            </div>

            <div class="row mt-5">
              <div class="col-lg-4">
                <div class="info">
                  <div class="address">
                    <i class="bi bi-geo-alt"></i>
                    <h4>Location:</h4>
                    <p>
                      <b>CHESNEY ENTERPRISES PRIVATE LIMITED</b> &nbsp; No 18 K
                      No 164/2/18 Ramegowda Layout, Kengeri, Bengaluru - 560060
                    </p>
                  </div>

                  <div class="email">
                    <i class="bi bi-envelope"></i>
                    <h4>Email:</h4>
                    <p>Chesneyindia@gmail.com</p>
                  </div>

                  <div class="phone">
                    <i class="bi bi-phone"></i>
                    <h4>Call:</h4>
                    <p>+91 8971734481</p>
                  </div>
                </div>
              </div>

              <div class="col-lg-8 mt-5 mt-lg-0">
                <form
                  action="forms/contact.php"
                  method="post"
                  role="form"
                  class="php-email-form"
                >
                  <div class="row">
                    <div class="col-md-6 form-group">
                      <input
                        type="text"
                        name="name"
                        class="form-control"
                        id="name"
                        placeholder="Your Name"
                        required
                      />
                    </div>
                    <div class="col-md-6 form-group mt-3 mt-md-0">
                      <input
                        type="email"
                        class="form-control"
                        name="email"
                        id="email"
                        placeholder="Your Email"
                        required
                      />
                    </div>
                  </div>
                  <div class="form-group mt-3">
                    <input
                      type="text"
                      class="form-control"
                      name="subject"
                      id="subject"
                      placeholder="Subject"
                      required
                    />
                  </div>
                  <div class="form-group mt-3">
                    <textarea
                      class="form-control"
                      name="message"
                      rows="5"
                      placeholder="Message"
                      required
                    ></textarea>
                  </div>
                  <div class="my-3">
                    <div class="loading">Loading</div>
                    <div class="error-message"></div>
                    <div class="sent-message">
                      Your message has been sent. Thank you!
                    </div>
                  </div>
                  <div class="text-center">
                    <button type="submit">Send Message</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Mainsection;
