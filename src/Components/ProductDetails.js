import React from "react"

const ProductDetails = () => {
    return (
        <div>

            <header id="header" class="fixed-top header-inner-pages">
                <div class="container d-flex align-items-center justify-content-lg-between">

                    <h1 class="logo me-auto me-lg-0"><a href="index.html">Gp<span>.</span></a></h1>

                    <nav id="navbar" class="navbar order-last order-lg-0">
                        <ul>
                            <li><a class="nav-link scrollto " href="#hero">Home</a></li>
                            <li><a class="nav-link scrollto" href="#about">About</a></li>
                            <li><a class="nav-link scrollto" href="#services">Services</a></li>
                            <li><a class="nav-link scrollto active" href="#portfolio">Portfolio</a></li>
                            <li><a class="nav-link scrollto" href="#team">Team</a></li>
                            <li class="dropdown"><a href="#"><span>Drop Down</span> <i class="bi bi-chevron-down"></i></a>
                                <ul>
                                    <li><a href="#">Drop Down 1</a></li>
                                    <li class="dropdown"><a href="#"><span>Deep Drop Down</span> <i class="bi bi-chevron-right"></i></a>
                                        <ul>
                                            <li><a href="#">Deep Drop Down 1</a></li>
                                            <li><a href="#">Deep Drop Down 2</a></li>
                                            <li><a href="#">Deep Drop Down 3</a></li>
                                            <li><a href="#">Deep Drop Down 4</a></li>
                                            <li><a href="#">Deep Drop Down 5</a></li>
                                        </ul>
                                    </li>
                                    <li><a href="#">Drop Down 2</a></li>
                                    <li><a href="#">Drop Down 3</a></li>
                                    <li><a href="#">Drop Down 4</a></li>
                                </ul>
                            </li>
                            <li><a class="nav-link scrollto" href="#contact">Contact</a></li>
                        </ul>
                        <i class="bi bi-list mobile-nav-toggle"></i>
                    </nav>
                    <a href="#about" class="get-started-btn scrollto">Get Started</a>

                </div>
            </header>

            <main id="main">
                <section id="breadcrumbs" class="breadcrumbs">
                    <div class="container">

                        <div class="d-flex justify-content-between align-items-center">
                            <h2>Portfolio Details</h2>
                            <ol>
                                <li><a href="index.html">Home</a></li>
                                <li>Portfolio Details</li>
                            </ol>
                        </div>

                    </div>
                </section>
                <section id="portfolio-details" class="portfolio-details">
                    <div class="container">

                        <div class="row gy-4">

                            <div class="col-lg-8">
                                <div class="portfolio-details-slider swiper">
                                    <div class="swiper-wrapper align-items-center">

                                        <div class="swiper-slide">
                                            <img src="assets/img/portfolio/portfolio-1.jpg" alt="" />
                                        </div>

                                        <div class="swiper-slide">
                                            <img src="assets/img/portfolio/portfolio-2.jpg" alt="" />
                                        </div>

                                        <div class="swiper-slide">
                                            <img src="assets/img/portfolio/portfolio-3.jpg" alt="" />
                                        </div>

                                    </div>
                                    <div class="swiper-pagination"></div>
                                </div>
                            </div>

                            <div class="col-lg-4">
                                <div class="portfolio-info">
                                    <h3>Project information</h3>
                                    <ul>
                                        <li><strong>Category</strong>: Web design</li>
                                        <li><strong>Client</strong>: ASU Company</li>
                                        <li><strong>Project date</strong>: 01 March, 2020</li>
                                        <li><strong>Project URL</strong>: <a href="#">www.example.com</a></li>
                                    </ul>
                                </div>
                                <div class="portfolio-description">
                                    <h2>This is an example of portfolio detail</h2>
                                    <p>
                                        Autem ipsum nam porro corporis rerum. Quis eos dolorem eos itaque inventore commodi labore quia quia. Exercitationem repudiandae officiis neque suscipit non officia eaque itaque enim. Voluptatem officia accusantium nesciunt est omnis tempora consectetur dignissimos. Sequi nulla at esse enim cum deserunt eius.
                                    </p>
                                </div>
                            </div>

                        </div>

                    </div>
                </section>

            </main>

            {/* <footer id="footer">
                <div class="footer-top">
                    <div class="container">
                        <div class="row">

                            <div class="col-lg-3 col-md-6">
                                <div class="footer-info">
                                    <h3>Gp<span>.</span></h3>
                                    <p>
                                        A108 Adam Street <br>
                                            NY 535022, USA<br><br>
                                                <strong>Phone:</strong> +1 5589 55488 55<br>
                                                    <strong>Email:</strong> info@example.com<br>
                                                    </p>
                                                    <div class="social-links mt-3">
                                                        <a href="#" class="twitter"><i class="bx bxl-twitter"></i></a>
                                                        <a href="#" class="facebook"><i class="bx bxl-facebook"></i></a>
                                                        <a href="#" class="instagram"><i class="bx bxl-instagram"></i></a>
                                                        <a href="#" class="google-plus"><i class="bx bxl-skype"></i></a>
                                                        <a href="#" class="linkedin"><i class="bx bxl-linkedin"></i></a>
                                                    </div>
                                                </div>
                                            </div>

                                                <div class="col-lg-2 col-md-6 footer-links">
                                                    <h4>Useful Links</h4>
                                                    <ul>
                                                        <li><i class="bx bx-chevron-right"></i> <a href="#">Home</a></li>
                                                        <li><i class="bx bx-chevron-right"></i> <a href="#">About us</a></li>
                                                        <li><i class="bx bx-chevron-right"></i> <a href="#">Services</a></li>
                                                        <li><i class="bx bx-chevron-right"></i> <a href="#">Terms of service</a></li>
                                                        <li><i class="bx bx-chevron-right"></i> <a href="#">Privacy policy</a></li>
                                                    </ul>
                                                </div>

                                                <div class="col-lg-3 col-md-6 footer-links">
                                                    <h4>Our Services</h4>
                                                    <ul>
                                                        <li><i class="bx bx-chevron-right"></i> <a href="#">Web Design</a></li>
                                                        <li><i class="bx bx-chevron-right"></i> <a href="#">Web Development</a></li>
                                                        <li><i class="bx bx-chevron-right"></i> <a href="#">Product Management</a></li>
                                                        <li><i class="bx bx-chevron-right"></i> <a href="#">Marketing</a></li>
                                                        <li><i class="bx bx-chevron-right"></i> <a href="#">Graphic Design</a></li>
                                                    </ul>
                                                </div>

                                                <div class="col-lg-4 col-md-6 footer-newsletter">
                                                    <h4>Our Newsletter</h4>
                                                    <p>Tamen quem nulla quae legam multos aute sint culpa legam noster magna</p>
                                                    <form action="" method="post">
                                                        <input type="email" name="email"><input type="submit" value="Subscribe">
                                                        </form>

                                                        </div>

                                                </div>
                                            </div>
                                        </div>

                                        <div class="container">
                                            <div class="copyright">
                                                &copy; Copyright <strong><span>Gp</span></strong>. All Rights Reserved
                                            </div>
                                            <div class="credits">Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a>
                                            </div>
                                        </div>
                                    </footer> */}

            {/* <div id="preloader"></div> */}
            <a href="#" class="back-to-top d-flex align-items-center justify-content-center"><i class="bi bi-arrow-up-short"></i></a>

            {/* <script src="assets/vendor/purecounter/purecounter_vanilla.js"></script>
            <script src="assets/vendor/aos/aos.js"></script>
            <script src="assets/vendor/bootstrap/js/bootstrap.bundle.min.js"></script>
            <script src="assets/vendor/glightbox/js/glightbox.min.js"></script>
            <script src="assets/vendor/isotope-layout/isotope.pkgd.min.js"></script>
            <script src="assets/vendor/swiper/swiper-bundle.min.js"></script>
            <script src="assets/vendor/php-email-form/validate.js"></script>

            <script src="assets/js/main.js"></script> */}

        </div>
    );
}

export default ProductDetails;