import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import { withRouter } from "react-router";
const PLANS = [
  {
    heading: "BASIC",
    subheading: "5",
    price: 5,
    features: ["Select Image", "Add Watermark", "Share/Save Your Image"],
  },
  {
    heading: "STANDARD",
    subheading: "15",
    price: 15,
    features: [
      "All BASIC plan features",
      "Select Video",
      "Share/Save Your Video",
    ],
  },
  {
    heading: "PREMIUM",
    subheading: "30",
    price: 30,
    features: [
      "BASIC + STANDARD covered",
      "Select Streaming Platform",
      "Cutomize Your Video Screen",
    ],
  },
];
const Plan = ({
  price,
  features,
  heading,
  subheading,
  planType,
  onPressBuy,
  selectedPlan,
}) => {
  return (
    <div className="col-sm-6 col-md-6 col-lg-3">
      <div
        className={
          selectedPlan ? "selected-card" : "card_features subscription-card"
        }
      >
        <div className="subscription-card-heading">
          <span>{heading}</span>
        </div>
        {planType === "free" ? (
          <div className="subscription-card-price">
            <span className="price">{subheading}</span>
          </div>
        ) : (
          <div className="subscription-card-price">
            $<span className="price">{subheading}</span>
            {price === 30 ? <span className="text">/month</span> : ""}
          </div>
        )}
        <hr className="m-3" />
        <div className="features">
          {features.map((feature) => {
            return (
              <div className="feature-container">
                <img src="icons/back.png" className="back-icon" />
                <span>{feature}</span>
              </div>
            );
          })}
        </div>
        <button onClick={() => onPressBuy()} className="buy py-2 my-4">
          <span className="mx-4 px-2"> Buy Now</span>
        </button>
      </div>
    </div>
  );
};

class LandingPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedPlan: null,
      redirect: false,
    };
  }

  onBuyplan = (plan) => {
    this.setState({ selectedPlan: plan });
    localStorage.setItem("selectedPlan", JSON.stringify(plan));
    this.props.history.push("/register");
  };

  renderRedirect = () => {
    if (this.state.redirect) {
      return <Redirect to="/register" />;
    }
  };

  render() {
    return (
      <div>
        {this.renderRedirect()}
        <div>
          <nav
            className="navbar navbar-expand-lg navbar-light sticky-top"
            id="ImpNav"
          >
            <a className="navbar-brand" href="#">
              <img src="images/IMP_Logo.png" alt="Image Mark Pro" />
            </a>
            <button
              className="navbar-toggler navbar-toggler-right collapsed"
              type="button"
              data-toggle="collapse"
              data-target="#navbarNavDropdown"
              aria-controls="navbarNavDropdown"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span> </span>
              <span> </span>
              <span> </span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
              <ul className="navbar-nav">
                <li className="nav-item active">
                  <a className="nav-link" href="#features">
                    Features <span className="sr-only">(current)</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#howItWorks">
                    How it works
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#ourBlogs">
                    Blogs
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#subscriptionPlans">
                    Pricing
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#aboutUs">
                    About Us
                  </a>
                </li>

                <li className="nav-item">
                  <Link to={"/login"} className="nav-link">
                    Login
                  </Link>
                </li>
              </ul>
            </div>
          </nav>

          <div className="bgImage" id="about">
            <div className="container-fluid padding_TB_8">
              <div className="row">
                <div className="col-sm-12 col-md-12 col-lg-6">
                  <div className="content_bottom">
                    <h1 className="bold text_grey lh-50">
                      An intuitive <span className="text_blue">Image</span>,
                      <br />
                      <span className="text_blue">Video</span> &amp;{" "}
                      <span className="text_blue">Live Streaming</span>
                      <br />
                      Watermark Application
                      <br />
                    </h1>
                    <p className="text_grey lh-35">
                      Instantly protect and share your photos, live streaming
                      &amp; videos with a custom watermark built in.{" "}
                    </p>
                    <div className="btn-block">
                      <button
                        className="Imp_btn text_grey appStore"
                        type="button"
                        href="#"
                        name="Appstore"
                        vlaue="appstore"
                      >
                        Apple Store
                      </button>
                      <button
                        className="Imp_btn text_grey playStore"
                        type="button"
                        href="#"
                        name="playstore"
                        vlaue="playstore"
                      >
                        Play Store
                      </button>
                    </div>
                  </div>
                </div>
                <div className="col-sm-12 col-md-12 col-lg-6">
                  <img
                    className="Imp_app"
                    src="images/mobile.png"
                    alt="IMP Application ScreenShot"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="lightBlue_bg container_settings" id="features">
            <div className="container-fluid">
              <h2 className="section_heading text_grey">Main Features</h2>
              <p className="section_sub_heading text_grey">
                ImageMark Pro was developed with the help of video journalists,
                photographers, to provide a flexible and intuitive video and
                photo marking solution for professionals or newbies.
              </p>
              <div className="row card_layout">
                <div className="col-sm-6 col-md-6 col-lg-3">
                  <div className="card_features">
                    <img
                      src="icons/Photos%20and%20videos.png"
                      alt="One App for Photo,Videos & Live Streaming"
                    />
                    <p className="feature_name semibold text_grey">
                      One App for Photo,Videos &amp; Live Streaming
                    </p>
                    <p className="feature_details regular text_grey">
                      {" "}
                      Easily choose photo, video or Live Streaming, and protect
                      your intellectual property.
                    </p>
                  </div>
                </div>
                <div className="col-sm-6 col-md-6 col-lg-3">
                  <div className="card_features">
                    <img
                      src="icons/Customize.png"
                      alt="On Your Mark...Customize!"
                    />
                    <p className="feature_name semibold text_grey">
                      On Your Mark...Customize!
                    </p>
                    <p className="feature_details regular text_grey">
                      Customize your watermark’s content, size positioning,
                      color, and opacity{" "}
                    </p>
                  </div>
                </div>
                <div className="col-sm-6 col-md-6 col-lg-3">
                  <div className="card_features">
                    <img src="icons/Socialable.png" alt="So Sociable!" />
                    <p className="feature_name semibold text_grey">
                      So Sociable!
                    </p>
                    <p className="feature_details regular text_grey">
                      You can share watermarked Live Streams to major social
                      media platforms.
                    </p>
                  </div>
                </div>
                <div className="col-sm-6 col-md-6 col-lg-3">
                  <div className="card_features">
                    <img src="icons/Batch.png" alt="Load ‘em Up!" />
                    <p className="feature_name semibold text_grey">
                      Load ‘em Up!
                    </p>
                    <p className="feature_details regular text_grey">
                      {" "}
                      Batch processing feature allows you to watermark an entire
                      photoshoot or video series in just one step.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="container_settings" id="howItWorks">
            <div className="container-fluid">
              <h2 className="section_heading text_grey">How The App Works</h2>
              <p className="section_sub_heading text_grey">
                {" "}
                Easily mark your photos for proofing, online viewing, or sharing
                on social media. Protect and get credit for your work wherever
                it goes.
              </p>
              <div className="tab_section">
                <ul
                  className="nav nav-pills justify-content-center"
                  id="pills-tab"
                  role="tablist"
                >
                  <li className="nav-item">
                    <a
                      className="nav-link active"
                      id="HIW_Images"
                      data-toggle="pill"
                      href="#pills-images"
                      role="tab"
                      aria-controls="pills-images"
                      aria-selected="true"
                    >
                      Image
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      id="HIW_Video"
                      data-toggle="pill"
                      href="#pills-video"
                      role="tab"
                      aria-controls="pills-video"
                      aria-selected="false"
                    >
                      Video
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      id="HIW_Live"
                      data-toggle="pill"
                      href="#pills-live"
                      role="tab"
                      aria-controls="pills-live"
                      aria-selected="false"
                    >
                      Live Streaming
                    </a>
                  </li>
                </ul>
                <div className="tab-content" id="pills-tabContent">
                  <div
                    className="tab-pane fade show active"
                    id="pills-images"
                    role="tabpanel"
                    aria-labelledby="pills-images"
                  >
                    <div className="row">
                      <div className="col-sm-12 col-md-6 col-lg-6 phone_bg">
                        <img
                          src="images/select_edit_image.png"
                          alt="IMP_Select_Image_Watermark"
                          id="IMP_app_images"
                        />
                      </div>
                      <div className="col-sm-12 col-md-6 col-lg-6 tab_mobile">
                        <div className="step">
                          <a
                            onclick="Imagechange(1)"
                            href="#selectImage"
                            className="active-tab"
                          >
                            <img src="icons/Gallery.png" />
                          </a>
                          <span className="step_header">
                            <p>Select Image</p>
                            <p>
                              ImageMark Pro lets you easily switch from photo to
                              video mode, and protects your intellectual
                              property.
                            </p>
                          </span>
                        </div>
                        <div className="step">
                          <a onclick="Imagechange(2)" href="#addLogo">
                            <img src="icons/add_logo.png" />
                          </a>
                          <span className="step_header">
                            <p>Add Watermark</p>
                            <p>
                              ImageMark Pro lets you easilyswitch from photo to
                              video mode, and protects your intellectual
                              property.
                            </p>
                          </span>
                        </div>
                        <div className="step">
                          <a onclick="Imagechange(3)" href="#shareSaveImage">
                            <img src="icons/share_save.png" />
                          </a>
                          <span className="step_header">
                            <p>Share/Save Your Image</p>
                            <p>
                              ImageMark Pro lets you easily switch from photo to
                              video mode, and protects your intellectual
                              property.
                            </p>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="pills-video"
                    role="tabpanel"
                    aria-labelledby="pills-video"
                  >
                    <div className="row">
                      <div className="col-sm-12 col-md-6 col-lg-6 phone_bg">
                        <img
                          src="images/video_gallery.png"
                          alt="IMP_Select_Video_Watermark"
                          id="IMP_app_images_video"
                        />
                      </div>
                      <div
                        className="col-sm-12 col-md-6
                                 col-lg-6 tab_mobile"
                      >
                        <div className="step">
                          <a
                            className="active-tab"
                            onclick="Imagechange_video(1)"
                            href="#selectImage"
                          >
                            <img src="icons/video_gallery.png" />
                          </a>
                          <span className="step_header">
                            <p>Select Video</p>
                            <p>
                              ImageMark Pro lets you easily switch from photo to
                              video mode, and protects your intellectual
                              property.
                            </p>
                          </span>
                        </div>
                        <div className="step">
                          <a onclick="Imagechange_video(2)" href="#addLogo">
                            <img src="icons/add_logo.png" />
                          </a>
                          <span className="step_header">
                            <p>Add Watermark</p>
                            <p>
                              ImageMark Pro lets you easilyswitch from photo to
                              video mode, and protects your intellectual
                              property.
                            </p>
                          </span>
                        </div>
                        <div className="step">
                          <a
                            onclick="Imagechange_video(3)"
                            href="#shareSaveImage"
                          >
                            <img src="icons/share_save.png" />
                          </a>
                          <span className="step_header">
                            <p>Share/Save Your Video</p>
                            <p>
                              ImageMark Pro lets you easily switch from photo to
                              video mode, and protects your intellectual
                              property.
                            </p>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="pills-live"
                    role="tabpanel"
                    aria-labelledby="pills-live"
                  >
                    <div className="row">
                      <div className="col-sm-12 col-md-6 col-lg-6 phone_bg">
                        <img
                          src="images/1.png"
                          alt="IMP_Select_Image_Watermark"
                          id="IMP_app_images_live"
                        />
                      </div>
                      <div className="col-sm-12 col-md-6 col-lg-6 tab_mobile">
                        <div className="step">
                          <a
                            className="active-tab"
                            onclick="Imagechange_live(1)"
                            href="#selectImage"
                          >
                            <img src="icons/video_gallery.png" />
                          </a>
                          <span className="step_header">
                            <p>Select Streaming Platform</p>
                            <p>
                              ImageMark Pro lets you easily switch from photo to
                              video mode, and protects your intellectual
                              property.
                            </p>
                          </span>
                        </div>
                        <div className="step">
                          <a onclick="Imagechange_live(2)" href="#addLogo">
                            <img src="icons/add_logo.png" />
                          </a>
                          <span className="step_header">
                            <p>Cutomize Your Video Screen</p>
                            <p>
                              ImageMark Pro lets you easilyswitch from photo to
                              video mode, and protects your intellectual
                              property.
                            </p>
                          </span>
                        </div>
                        <div className="step">
                          <a
                            onclick="Imagechange_live(3)"
                            href="#shareSaveImage"
                          >
                            <img src="icons/share_save.png" />
                          </a>
                          <span className="step_header">
                            <p>Start Streaming</p>
                            <p>
                              ImageMark Pro lets you easily switch from photo to
                              video mode, and protects your intellectual
                              property.
                            </p>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="container_settings" id="watchTutorial">
            <div className="tutorial_content">
              <a className="imp_play_icon request-loader" href="#">
                <img
                  className="img-fluid"
                  src="icons/play-button.png"
                  alt="Play"
                />
              </a>
              <h2 className="bold">Watch The Tutorial</h2>
              <p className="section_sub_heading regular">
                Mark your product images so that when viewers Pin or share your
                images, customers can always find your shop!
              </p>
            </div>
          </div>

          <div className="container_settings" id="subscriptionPlans">
            <div className="container-fluid">
              <h2 className="section_heading text_grey">Subscription Plans</h2>
              <p className="section_sub_heading text_grey">
                {" "}
                Instantly protect and share your photos & videos with a custom
                watermark built in.
                <br /> Check our Plans
              </p>
              <div className="row subscription-wrapper">
                {PLANS.map((plan) => {
                  return (
                    <Plan
                      heading={plan.heading}
                      subheading={plan.subheading}
                      planType={plan.planType}
                      price={plan.price}
                      features={plan.features}
                      onPressBuy={() => this.onBuyplan(plan)}
                      selectedPlan={this.state.selectedPlan}
                    />
                  );
                })}
              </div>
            </div>
          </div>

          <div className="lightBlue_bg container_settings">
            <div className="container-fluid">
              <h2 className="section_heading text_grey">
                Customer Testimonials
              </h2>
              <div
                id="carouselTestimonials"
                className="carousel slide"
                data-ride="carousel"
              >
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img src="icons/quote.png" alt="IMP Quote" />
                    <p className="testimonial medium text_grey lh-35">
                      ImageMark Pro lets me easily mark and distribute my images
                      and videos freely on social media with a custom watermark
                      that promotes my blog.
                    </p>
                    <img src="icons/rating_four_star.png" alt="IMP Rating" />
                    <div className="clientContainer">
                      <p className="name text_grey semibold">
                        Chef Boy oh Boy, MyFoodBlog.com
                      </p>
                      {/* <p className="designation">Photographer</p> */}
                    </div>
                  </div>
                  <div className="carousel-item">
                    <img src="icons/quote.png" alt="IMP Quote" />
                    <p className="testimonial medium text_grey lh-35">
                      A huge thank you for your exemplary efforts!"
                    </p>
                    <img src="icons/rating_four_star.png" alt="IMP Rating" />
                    <div className="clientContainer">
                      <p className="name text_grey semibold">Melvin Louis</p>
                      <p className="designation">Photographer</p>
                    </div>
                  </div>
                  {/* <div className="carousel-item">
                    <img src="icons/quote.png" alt="IMP Quote" />
                    <p className="testimonial medium text_grey lh-35">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Quis ipsum suspendisse ultrices gravida. Risus
                      commodo viverra maecenas accumsan lacus vel facilisis.
                    </p>
                    <img src="icons/rating_four_star.png" alt="IMP Rating" />
                    <div className="clientContainer">
                      <p className="name text_grey semibold">Melvin Louis</p>
                      <p className="designation">Photographer</p>
                    </div>
                  </div> */}
                </div>
                <a
                  className="carousel-control-prev"
                  href="#carouselTestimonials"
                  role="button"
                  data-slide="prev"
                >
                  <span
                    className="carousel-control-prev-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="sr-only">Previous</span>
                </a>
                <a
                  className="carousel-control-next"
                  href="#carouselTestimonials"
                  role="button"
                  data-slide="next"
                >
                  <span
                    className="carousel-control-next-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="sr-only">Next</span>
                </a>
              </div>
            </div>
          </div>

          <div className="container_settings" id="ourBlogs">
            <div className="container-fluid">
              <h2 className="section_heading text_grey">Our Blogs</h2>
              <p className="section_sub_heading text_grey">
                {" "}
                With a custom watermark on your blog images, your fans can share
                them anywhere online, and they’ll be promoting your blog when
                they do it!
              </p>
              <div className="row blogs-conatiner">
                <div className="col-sm-5 col-md-5 col-lg-3">
                  <div className="blog-card">
                    <img
                      className="blog-image"
                      src="https://imagemarkpro.com/wp-content/themes/maintheme/images/phone1.png"
                      alt="IMP How to create a flimgrian effect"
                    />
                    <div className="blog-div">
                      <p className="published-date">
                        24 Mar, 2020{" "}
                        <span>
                          <i>By Admin</i>
                        </span>
                      </p>
                      <p className="blog-title medium text_grey">
                        Image Editing
                      </p>
                      <p className="blog-content text_grey truncate-overflow">
                        
                      With Imagemark pro, you can easily create stunning, professional-quality images with a single click. The process might be simple, but the results are incredibly ...


                      </p>
                      <Link className="text_blue" to="/blog">
                        Read more
                      </Link>
                    </div>
                  </div>
                </div>

                <div className="col-sm-5 col-md-5 col-lg-3 hide_On_sm">
                  <div className="blog-card">
                    <img
                      className="blog-image"
                      src="https://cdn.mos.cms.futurecdn.net/6ZSTwXkAVAcsmqP5gvGAKj.jpg"
                      alt="IMP How to create a flimgrian effect"
                    />
                    <div className="blog-div">
                      <p className="published-date">
                        22 Apr, 2020{" "}
                        <span>
                          <i>By Admin</i>
                        </span>
                      </p>
                      <p className="blog-title medium text_grey">
                        Video Editing
                      </p>
                      <p className="blog-content text_grey truncate-overflow">
                       Video editing applications are typically desktop programs, however there are several cloud-based options that allow you to upload a video and edit the file online. Cloud video editing applications typically allow you to connect to various social and online accounts to share your movie.
                      </p>
                      <Link className="text_blue" to="/blog">
                        Read more
                      </Link>
                    </div>
                  </div>
                </div>

                <div className="col-sm-5 col-md-4 col-lg-3 hide_On_md">
                  <div className="blog-card">
                    <img
                      className="blog-image"
                      src="https://www.aer.io/img/blog-images/live-stream-tools-blog.jpg"
                      alt="IMP How to create a flimgrian effect"
                    />
                    <div className="blog-div">
                      <p className="published-date">
                        06 May, 2020{" "}
                        <span>
                          <i>By Admin</i>
                        </span>
                      </p>
                      <p className="blog-title medium text_grey">
                        Live Streaming
                      </p>
                      <p className="blog-content text_grey truncate-overflow">
                      Interactive broadcasting creates a higher level of user engagement. Easily embed live interactive broadcasting directly into your app.
                      </p>
                      <Link className="text_blue" to="/blog">
                        Read more
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="cta-div">
                <Link to={"/blog"} className="view_more text_grey">
                  VIEW MORE
                </Link>
              </div>
            </div>
          </div>

          <div className="lightBlue_bg container_settings">
            <div className="container-fluid">
              <h2 className="section_heading text_grey">News Testimonials</h2>
              <p className="section_sub_heading text_grey">
                {" "}
                Make sure you get the proper credit and recognition for your
                news image and video posts. Your post may go viral, but the
                source will remain clear.
              </p>
              <div className="row news-container">
                <div className="col-sm-12 col-md-5 col-lg-5 news-image">
                  <div className="news-details">
                    <div className="news_tag">
                      <span>Technology</span>
                    </div>
                    <p className="news_headline text_white semibold">
                      Twitter drafted a deepfake policy and wants you to weigh
                      in - CNET
                    </p>
                  </div>
                </div>
                <div className="col-sm-12 col-md-5 col-lg-5">
                  <div className="news-div">
                    <a href="#goToNews" className="more-news">
                      <div className="news">
                        <div className="news_tag">
                          <span>Technology</span>
                        </div>
                        <p className="news_headline text_grey semibold">
                          Top AI researchers race to detect ‘deepfake’ videos
                          :‘We are outgunned’
                        </p>
                      </div>
                    </a>
                    <a href="#goToNews" className="more-news">
                      <div className="news">
                        <div className="news_tag">
                          <span>Technology</span>
                        </div>
                        <p className="news_headline text_grey semibold">
                          Deepfakes are coming. We’re not ready.
                        </p>
                      </div>
                    </a>
                    <a href="#goToNews" className="more-news">
                      <div className="news">
                        <div className="news_tag">
                          <span>Technology</span>
                        </div>
                        <p className="news_headline text_grey semibold">
                          Twitter drafted a deepfake policy and wants you to
                          weigh in - CNET
                        </p>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="container_settings" id="aboutUs">
            <div className="container-fluid">
              <h2 className="section_heading text_grey">About Us</h2>
              <p className="section_sub_heading text_grey">
                {" "}
                This video and photo watermarking application is the result of
                four years of dedicated research and development by Gerardo
                “Jerry” Gonzalez, an award-winning director of photography for
                network news, and Grant Witham, retired helicopter pilot turned
                tech entrepreneur, with valuable input from technology and
                journalism professionals, including a Pulitzer Prize winner.
              </p>
              <p className="section_sub_heading text_grey medium">Our Team</p>
              <div className="row profile_container">
                <div className="col-sm-5 col-md-5 col-lg-3">
                  <div className="profile_card">
                    <div className="image-container">
                      <img
                        className="profile_image Grant_W"
                        src="images/default_profile_image.png"
                        alt="Grant Witham Image Mark Pro"
                      />
                    </div>
                    <div className="profile_details">
                      <p className="profile_name bold text_grey">
                        Grant Witham
                      </p>
                      <p className="profile_designation text_grey regular">
                        Co Founder, Tech Entrepreneur, Retired helicopter pilot
                      </p>
                    </div>
                  </div>
                </div>

                <div className="col-sm-5 col-md-5 col-lg-3">
                  <div className="profile_card">
                    <div className="image-container">
                      <img
                        className="profile_image Jerry_G"
                        src="images/default_profile_image.png"
                        alt="Gerardo ‘Jerry’ Gonzalez Image Mark Pro"
                      />
                    </div>
                    <div className="profile_details">
                      <p className="profile_name bold text_grey">
                        Gerardo ‘Jerry’ Gonzalez
                      </p>
                      <p className="profile_designation text_grey regular">
                        Co Founder, Visionary in Chief, Former network news
                        international cameraman
                      </p>
                    </div>
                  </div>
                </div>

                <div className="col-sm-5 col-md-4 col-lg-3">
                  <div className="profile_card">
                    <div className="image-container">
                      <img
                        className="profile_image Rodolfo_G"
                        src="images/default_profile_image.png"
                        alt="Rodolfo Gonzalez Image Mark Pro"
                      />
                    </div>
                    <div className="profile_details">
                      <p className="profile_name bold text_grey">
                        Rodolfo Gonzalez
                      </p>
                      <p className="profile_designation text_grey regular">
                        Partner, Tech Consultant, Pulitzer Prize winning
                        photojournalist
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="imp_footer lightBlue_bg">
            <div className="container-fluid">
              <div className="row">
                <div className="col-sm-12 col-md-12 col-lg-3">
                  <a href="#about">
                    <img
                      className="footer_logo"
                      src="images/IMP_Logo.png"
                      alt="Image Mark Pro"
                    />
                  </a>
                  <p className="imp_address">
                    PO Box 220688,
                    <br />
                    Newhall CA 91322.
                  </p>
                </div>
                <div className="col-sm-12 col-md-12 col-lg-6 footer_middle">
                  <div className="imp_links">
                    <a href="#features">Features</a>
                    <a href="#howItWorks">How it works</a>
                    <a href="#ourBlogs">Blogs</a>
                    <a href="#subscriptionPlans">Pricing</a>
                    <a href="#aboutUs">About Us</a>
                  </div>
                  <div className="btn-block">
                    <button
                      className="Imp_btn text_grey appStore"
                      type="button"
                      href="#"
                      name="Appstore"
                      vlaue="appstore"
                    >
                      Apple Store
                    </button>
                    <button
                      className="Imp_btn text_grey playStore"
                      type="button"
                      href="#"
                      name="playstore"
                      vlaue="playstore"
                    >
                      Play Store
                    </button>
                  </div>
                </div>
                <div className="col-sm-12 col-md-12 col-lg-3">
                  <p className="imp_mail">support@imagemarkpro.com</p>
                  <p className="imp_contact">+1424-732-0088</p>
                </div>
              </div>
              <div className="row">
                <div className="col-sm-12 col-md-8 col-lg-8 terms_and_condition">
                  <a className="policy_links">ImageMarkPro</a>
                  <a className="policy_links" href="#">
                    Privacy Policy
                  </a>
                  <a className="policy_links" href="#">
                    Subscription Details
                  </a>
                </div>
                <div className="col-sm-12 col-md-4 col-lg-4 rights">
                  <p>All Rights Reserved</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(LandingPage);
