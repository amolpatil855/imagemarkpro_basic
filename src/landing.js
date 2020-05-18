import React, { Component } from 'react';

class LandingPage extends Component {

    render() {
        return (
            <div>
                  <div>
        <nav class="navbar navbar-expand-lg navbar-light sticky-top" id="ImpNav">
            <a class="navbar-brand" href="#">
                <img src="images/IMP_Logo.png" 
                alt="Image Mark Pro" /></a>
            <button class="navbar-toggler navbar-toggler-right collapsed" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span> </span>
                <span> </span>
                <span> </span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavDropdown">
                <ul class="navbar-nav">
                    <li class="nav-item active">
                        <a class="nav-link" href="#features">Features <span class="sr-only">(current)</span></a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#howItWorks">How it works</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#ourBlogs">Blogs</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#news">News</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#aboutUs">About Us</a>
                    </li>
                 
                    <li class="nav-item">
                        <a class="nav-link" href="#">Login</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link register-cta" href="#">Register</a>
                    </li>

                </ul>
            </div>
        </nav>
     
        <div class="bgImage" id="about">
         
            <div class="container-fluid padding_TB_8">
                <div class="row">
                    <div class="col-sm-12 col-md-12 col-lg-6">
                        <div class="content_bottom" data-aos="fade-up">
                            <h1 class="bold text_grey lh-50">
                                An intuitive <span class="text_blue">Image</span>,<br />
                                <span class="text_blue">Video</span> &amp; <span class="text_blue">Live Streaming</span><br />
                                Watermark Application<br />
                            </h1>
                            <p class="text_grey lh-35">Instantly protect and share your photos, live streaming &amp; videos
                                with a custom watermark built in. </p>
                            <div class="btn-block">
                                <button class="Imp_btn text_grey appStore" type="button" href="#" name="Appstore" vlaue="appstore">Apple Store</button>
                                <button class="Imp_btn text_grey playStore" type="button" href="#" name="playstore" vlaue="playstore">Play Store</button>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-12 col-md-12 col-lg-6">
                        <img class="Imp_app"
                         src="images/IMP_app_On_Mobile.png" 
                         alt="IMP Application ScreenShot" />
                    </div>
                </div>
            </div>
        </div>

        <div class="lightBlue_bg container_settings"
         id="features">
            <div class="container-fluid">
                <h2 class="section_heading text_grey">Main Features</h2>
                <p class="section_sub_heading text_grey">
                     ImageMark Pro was developed with the help of video journalists, photographers, to provide a flexible and intuitive video and
                    photo marking solution for professionals or newbies.</p>
                <div class="row card_layout">

                    <div class="col-sm-6 col-md-6 col-lg-3">
                        <div class="card_features" data-aos="fade-up">
                            <img src="icons/Photos%20and%20videos.png"
                             alt="One App for Photo,Videos & Live Streaming" />
                            <p class="feature_name semibold text_grey">One App for Photo,Videos &amp; Live Streaming</p>
                            <p class="feature_details regular text_grey"> Easily choose photo, video or Live Streaming, and protect your intellectual property.</p>
                        </div>
                    </div>
                    <div class="col-sm-6 col-md-6 col-lg-3">
                        <div class="card_features" data-aos="fade-up" data-aos-delay="100">
                            <img
                             src="icons/Customize.png"
                              alt="On Your Mark...Customize!" />
                            <p class="feature_name semibold text_grey"> 
                            On Your Mark...Customize!</p>
                            <p class="feature_details regular text_grey">
                                Customize your watermark’s content, size positioning, color, and opacity </p>
                        </div>
                    </div>
                    <div class="col-sm-6 col-md-6 col-lg-3">
                        <div class="card_features" data-aos="fade-up" data-aos-delay="150">
                            <img src="icons/Socialable.png" 
                            alt="So Sociable!" />
                            <p class="feature_name semibold text_grey"> 
                            So Sociable!</p>
                            <p class="feature_details regular text_grey">
                                 You can share watermarked Live Streams to major social media platforms.</p>
                        </div>
                    </div>
                    <div class="col-sm-6 col-md-6 col-lg-3">
                        <div class="card_features" data-aos="fade-up" data-aos-delay="250">
                            <img src="icons/Batch.png"
                             alt="Load ‘em Up!" />
                            <p class="feature_name semibold text_grey">Load ‘em Up!</p>
                            <p class="feature_details regular text_grey"> Batch processing feature allows you to watermark an entire photoshoot or video series in just one step.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="container_settings"
         data-aos="fade-up" id="howItWorks">
            <div class="container-fluid">
                <h2 class="section_heading text_grey">How The App Works</h2>
                <p class="section_sub_heading text_grey"> ImageMark Pro was developed with the help of video journalists, photographers, to provide a flexible and intuitive video and
                    photo marking solution for professionals or newbies.</p>
                <div class="tab_section">
                    <ul class="nav nav-pills justify-content-center" 
                    id="pills-tab" role="tablist">
                        <li class="nav-item">
                            <a class="nav-link active" 
                            id="HIW_Images" data-toggle="pill"
                             href="#pills-images" role="tab" aria-controls="pills-images" aria-selected="true">Image</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" id="HIW_Video" data-toggle="pill" href="#pills-video" role="tab" aria-controls="pills-video" aria-selected="false">Video</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" id="HIW_Live" data-toggle="pill" href="#pills-live" role="tab" aria-controls="pills-live" aria-selected="false">Live Streaming</a>
                        </li>
                    </ul>
                    <div class="tab-content"
                     id="pills-tabContent">
                        <div class="tab-pane fade show active" id="pills-images"
                         role="tabpanel" aria-labelledby="pills-images">
                            <div class="row">
                                <div class="col-sm-12 col-md-6 col-lg-6 phone_bg">
                                    <img src="images/select_edit_image.png"
                                     alt="IMP_Select_Image_Watermark" 
                                     id="IMP_app_images" />
                                </div>
                                <div class="col-sm-12 col-md-6 col-lg-6 tab_mobile">
                                    <div class="step">
                                        <a onclick="Imagechange(1)"
                                         href="#selectImage" 
                                         class="active-tab"><img 
                                         src="icons/Gallery.png" /></a>
                                        <span class="step_header">
                                            <p>Select Image</p>
                                            <p>ImageMark Pro lets you easily switch from photo to video mode, and
                                                protects your intellectual property.</p>
                                        </span>
                                    </div>
                                    <div class="step">
                                        <a onclick="Imagechange(2)"
                                         href="#addLogo"><img
                                          src="icons/add_logo.png" /></a>
                                        <span class="step_header">
                                            <p>Add Watermark</p>
                                            <p>ImageMark Pro lets you easilyswitch from photo to video mode, and
                                                protects your intellectual property.</p>
                                        </span>
                                    </div>
                                    <div class="step">
                                        <a onclick="Imagechange(3)"
                                         href="#shareSaveImage"><img
                                         src="icons/share_save.png" /></a>
                                        <span class="step_header">
                                            <p>Share/Save Your Image</p>
                                            <p>ImageMark Pro lets you easily
                                                switch from photo to video mode,
                                                 and protects your intellectual property.</p>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="tab-pane fade" 
                         id="pills-video" role="tabpanel" 
                         aria-labelledby="pills-video">
                            <div class="row">
                                <div class="col-sm-12 col-md-6 col-lg-6 phone_bg">
                                    <img src="images/video_gallery.png" 
                                    alt="IMP_Select_Video_Watermark"
                                     id="IMP_app_images_video" />
                                </div>
                                <div class="col-sm-12 col-md-6
                                 col-lg-6 tab_mobile">
                                    <div class="step">
                                        <a class="active-tab"
                                         onclick="Imagechange_video(1)" href="#selectImage">
                                             <img src="icons/video_gallery.png" /></a>
                                        <span class="step_header">
                                            <p>Select Video</p>
                                            <p>ImageMark Pro lets you easily switch from photo to video mode, and
                                                protects your intellectual property.</p>
                                        </span>
                                    </div>
                                    <div class="step">
                                        <a onclick="Imagechange_video(2)"
                                         href="#addLogo"><img src="icons/add_logo.png" /></a>
                                        <span class="step_header">
                                            <p>Add Watermark</p>
                                            <p>ImageMark Pro lets you easilyswitch from photo to video mode, and
                                                protects your intellectual property.</p>
                                        </span>
                                    </div>
                                    <div class="step">
                                        <a onclick="Imagechange_video(3)" href="#shareSaveImage">
                                            <img src="icons/share_save.png" /></a>
                                        <span class="step_header">
                                            <p>Share/Save Your Video</p>
                                            <p>ImageMark Pro lets you easily
                                                switch from photo to video mode, and protects your intellectual property.</p>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="tab-pane fade" id="pills-live" role="tabpanel"
                         aria-labelledby="pills-live">
                            <div class="row">
                                <div class="col-sm-12 col-md-6 col-lg-6 phone_bg">
                                    <img src="images/1.png" alt="IMP_Select_Image_Watermark" 
                                    id="IMP_app_images_live" />
                                </div>
                                <div class="col-sm-12 col-md-6 col-lg-6 tab_mobile">
                                    <div class="step">
                                        <a class="active-tab" onclick="Imagechange_live(1)"
                                         href="#selectImage"><img src="icons/video_gallery.png" /></a>
                                        <span class="step_header">
                                            <p>Select Streaming Platform</p>
                                            <p>ImageMark Pro lets you easily switch from photo to video mode, and
                                                protects your intellectual property.</p>
                                        </span>
                                    </div>
                                    <div class="step">
                                        <a onclick="Imagechange_live(2)" href="#addLogo">
                                            <img src="icons/add_logo.png" /></a>
                                        <span class="step_header">
                                            <p>Cutomize Your Video Screen</p>
                                            <p>ImageMark Pro lets you easilyswitch from photo to video mode, and
                                                protects your intellectual property.</p>
                                        </span>
                                    </div>
                                    <div class="step">
                                        <a onclick="Imagechange_live(3)" href="#shareSaveImage">
                                            <img src="icons/share_save.png" /></a>
                                        <span class="step_header">
                                            <p>Start Streaming</p>
                                            <p>ImageMark Pro lets you easily
                                                switch from photo to video mode, 
                                                and protects your intellectual property.</p>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
 
        <div class="container_settings" data-aos="fade-up" id="watchTutorial">
            <div class="tutorial_content">
                <a class="imp_play_icon request-loader" href="#">
                    <img class="img-fluid" src="icons/play-button.png" alt="Play" /></a>
                <h2 class="bold">Watch The Tutorial</h2>
                <p class="section_sub_heading regular">Lorem Ipsum is simply dummy text of the printing and typesetting industry.<br /> Lorem Ipsum has been
                    the industry's standard dummy text ever since the 1500s,</p>
            </div>
        </div>

        <div class="container_settings" data-aos="fade-up" data-aos-duration="800" id="appScreenShots">
            <div class="container-fluid">
                <h2 class="section_heading text_grey">App Screenshots</h2>
                <p class="section_sub_heading text_grey"> ImageMark Pro was developed with the help of video journalists, photographers, to provide a flexible and intuitive video and
                    photo marking solution for professionals or newbies.</p>
                <div class="tab_section">
                    <ul class="nav nav-pills justify-content-center" id="pills-tab-2" role="tablist">
                        <li class="nav-item">
                            <a class="nav-link active" id="Apps_Images" data-toggle="pill" href="#pills-appImages" role="tab" aria-controls="pills-appImages" aria-selected="true">Image</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" id="Apps_Video" data-toggle="pill" href="#pills-appVideo" role="tab" aria-controls="pills-appVideo" aria-selected="false">Video</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" id="Apps_Live" data-toggle="pill" href="#pills-appLive" role="tab" aria-controls="pills-appLive" aria-selected="false">Live Streaming</a>
                        </li>
                    </ul>
                    <div class="tab-content" id="pills-tabContent">
                        <div class="tab-pane fade show active" id="pills-appImages" role="tabpanel" aria-labelledby="pills-appImages">
                          <div class="row">
                            2
                            </div>
                        </div>
                        <div class="tab-pane fade" id="pills-appVideo" role="tabpanel" aria-labelledby="pills-appVideo">
                            <div class="row">
                            2
                            </div>
                        </div>
                        <div class="tab-pane fade" id="pills-appLive" role="tabpanel" aria-labelledby="pills-appLive">
                            <div class="row">
                            3
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="lightBlue_bg container_settings" data-aos="fade-up" id="customerTestimonials">
            <div class="container-fluid">
                <h2 class="section_heading text_grey">Customer Testimonials</h2>
                <div id="carouselTestimonials" class="carousel slide" data-ride="carousel">
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img src="icons/quote.png" alt="IMP Quote" />
                            <p class="testimonial medium text_grey lh-35">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.</p>
                            <img src="icons/rating_four_star.png" alt="IMP Rating" />
                            <div class="clientContainer">
                                <p class="name text_grey semibold">Melvin Louis</p>
                                <p class="designation">Photographer</p>
                            </div>
                        </div>
                        <div class="carousel-item">
                            <img src="icons/quote.png" alt="IMP Quote" />
                            <p class="testimonial medium text_grey lh-35">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.</p>
                            <img src="icons/rating_four_star.png" alt="IMP Rating" />
                            <div class="clientContainer">
                                <p class="name text_grey semibold">Melvin Louis</p>
                                <p class="designation">Photographer</p>
                            </div>
                        </div>
                        <div class="carousel-item">
                            <img src="icons/quote.png" alt="IMP Quote" />
                            <p class="testimonial medium text_grey lh-35">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.</p>
                            <img src="icons/rating_four_star.png" alt="IMP Rating" />
                            <div class="clientContainer">
                                <p class="name text_grey semibold">Melvin Louis</p>
                                <p class="designation">Photographer</p>
                            </div>
                        </div>
                    </div>
                    <a class="carousel-control-prev" href="#carouselTestimonials"
                     role="button" data-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="sr-only">Previous</span>
                    </a>
                    <a class="carousel-control-next" href="#carouselTestimonials"
                     role="button" data-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="sr-only">Next</span>
                    </a>
                </div>
            </div>
        </div>

        <div class="container_settings" id="ourBlogs">
            <div class="container-fluid">
                <h2 class="section_heading text_grey">Our Blogs</h2>
                <p class="section_sub_heading text_grey"> ImageMark Pro
                 was developed with the help of video journalists, photographers, 
                 to provide a flexible and intuitive video and
                    photo marking solution for professionals or newbies.</p>
                <div class="row blogs-conatiner">
               
                    <div class="col-sm-5 col-md-5 col-lg-3" data-aos="fade-up">
                        <div class="blog-card">
                            <img class="blog-image"
                             src="images/blog_image.png" alt="IMP How to create a flimgrian effect" />
                            <div class="blog-div">
                                <p class="published-date">24 Dec, 2020 <span><i>By Admin</i></span></p>
                                <p class="blog-title medium text_grey">Lorem Ipsum is simply dummy text of the printing.</p>
                                <p class="blog-content text_grey truncate-overflow">Lorem Ipsum has been the industry's standard dummy text.Lorem Ipsum has been the industry's standard dummy text.</p>
                                <a class="text_blue" href="#readMore">Read more</a>
                            </div>
                        </div>
                    </div>
     
                    <div class="col-sm-5 col-md-5 col-lg-3 hide_On_sm" data-aos="fade-up" data-aos-delay="100">
                        <div class="blog-card">
                            <img class="blog-image"
                            src="images/blog_image.png" alt="IMP How to create a flimgrian effect" />
                            <div class="blog-div">
                                <p class="published-date">24 Dec, 2020 <span><i>By Admin</i></span></p>
                                <p class="blog-title medium text_grey">Lorem Ipsum is simply dummy text of the printing.</p>
                                <p class="blog-content text_grey truncate-overflow">Lorem Ipsum has been the industry's standard dummy text.Lorem Ipsum has been the industry's standard dummy text.</p>
                                <a class="text_blue" href="#readMore">Read more</a>
                            </div>
                        </div>
                    </div>
       
                    <div class="col-sm-5 col-md-4 col-lg-3 hide_On_md" data-aos="fade-up" data-aos-delay="150">
                        <div class="blog-card">
                            <img class="blog-image" src="images/blog_image.png" 
                            alt="IMP How to create a flimgrian effect" />
                            <div class="blog-div">
                                <p class="published-date">24 Dec, 2020 <span><i>By Admin</i></span></p>
                                <p class="blog-title medium text_grey">Lorem Ipsum is simply dummy text of the printing.</p>
                                <p class="blog-content text_grey truncate-overflow">Lorem Ipsum has been the industry's standard dummy text.Lorem Ipsum has been the industry's standard dummy text.</p>
                                <a class="text_blue" href="#readMore">Read more</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="cta-div">
                    <a class="view_more text_grey" href="#allBlogs">VIEW MORE</a>
                </div>
            </div>
        </div>

        <div class="lightBlue_bg container_settings" data-aos="fade-up" id="news">
            <div class="container-fluid">
                <h2 class="section_heading text_grey">News Testimonials</h2>
                <p class="section_sub_heading text_grey"> ImageMark Pro was 
                developed with the help of video journalists, photographers, to provide a flexible and intuitive video and
                    photo marking solution for professionals or newbies.</p>
                <div class="row news-container">
                    <div class="col-sm-12 col-md-5 col-lg-5 news-image">
                        <div class="news-details">
                            <div class="news_tag">
                                <span>Technology</span>
                            </div>
                            <p class="news_headline text_white semibold">Twitter 
                            drafted a deepfake policy and wants you to
                                weigh in - CNET</p>
                        </div>
                    </div>
                    <div class="col-sm-12 col-md-5 col-lg-5">
                        <div class="news-div">
                            <a href="#goToNews" class="more-news">
                                <div class="news">
                                    <div class="news_tag">
                                        <span>Technology</span>
                                    </div>
                                    <p class="news_headline text_grey semibold">Top AI
                                     researchers race to detect ‘deepfake’ videos
                                        :‘We are outgunned’</p>
                                </div>
                            </a>
                            <a href="#goToNews" class="more-news">
                                <div class="news">
                                    <div class="news_tag">
                                        <span>Technology</span>
                                    </div>
                                    <p class="news_headline text_grey semibold">Deepfakes are coming. We’re not ready.</p>
                                </div>
                            </a>
                            <a href="#goToNews" class="more-news">
                                <div class="news">
                                    <div class="news_tag">
                                        <span>Technology</span>
                                    </div>
                                    <p class="news_headline text_grey semibold">Twitter drafted a deepfake policy and wants you to
                                        weigh in - CNET</p>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="container_settings" id="aboutUs">
            <div class="container-fluid">
                <h2 class="section_heading text_grey">About Us</h2>
                <p class="section_sub_heading text_grey"> This video and photo 
                watermarking application is the result of four years of dedicated research and development by Gerardo “Jerry” Gonzalez, an award-winning director of photography for network news, and Grant Witham, retired helicopter pilot turned tech entrepreneur, with valuable input from technology and journalism professionals, including a Pulitzer Prize winner.</p>
                <p class="section_sub_heading text_grey medium">Our Team</p>
                <div class="row profile_container">

                    <div class="col-sm-5 col-md-5 col-lg-3" data-aos="fade-up">
                        <div class="profile_card">
                            <div class="image-container">
                                <img class="profile_image Grant_W" 
                                src="images/default_profile_image.png" alt="Grant Witham Image Mark Pro" />
                            </div>
                            <div class="profile_details">
                                <p class="profile_name bold text_grey">Grant Witham</p>
                                <p class="profile_designation text_grey regular">Co Founder, Tech Entrepreneur,
                                    Retired helicopter pilot</p>
                            </div>
                        </div>
                    </div>

                    <div class="col-sm-5 col-md-5 col-lg-3" data-aos="fade-up" data-aos-delay="100">
                        <div class="profile_card">
                            <div class="image-container">
                                <img class="profile_image Jerry_G" src="images/default_profile_image.png"
                                 alt="Gerardo ‘Jerry’ Gonzalez Image Mark Pro" />
                            </div>
                            <div class="profile_details">
                                <p class="profile_name bold text_grey">Gerardo ‘Jerry’ Gonzalez</p>
                                <p class="profile_designation text_grey regular">Co Founder, Visionary in Chief, Former
                                    network news international cameraman</p>
                            </div>
                        </div>
                    </div>

                    <div class="col-sm-5 col-md-4 col-lg-3" data-aos="fade-up" data-aos-delay="150">
                        <div class="profile_card">
                            <div class="image-container">
                                <img class="profile_image Rodolfo_G"
                                 src="images/default_profile_image.png" alt="Rodolfo Gonzalez Image Mark Pro" />
                            </div>
                            <div class="profile_details">
                                <p class="profile_name bold text_grey">Rodolfo Gonzalez</p>
                                <p class="profile_designation text_grey regular">Partner, Tech Consultant,
                                    Pulitzer Prize winning photojournalist</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="imp_footer lightBlue_bg">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-sm-12 col-md-12 col-lg-3">
                        <a href="#about"><img class="footer_logo" src="images/IMP_Logo.png"
                         alt="Image Mark Pro" /></a>
                        <p class="imp_address">PO Box 220688,<br />Newhall CA 91322.</p>
                    </div>
                    <div class="col-sm-12 col-md-12 col-lg-6 footer_middle">
                        <div class="imp_links">
                            <a href="#features">Features</a>
                            <a href="#howItWorks">How it works</a>
                            <a href="#ourBlogs">Blogs</a>
                            <a href="#news">News</a>
                            <a href="#aboutUs">About Us</a>
                        </div>
                        <div class="btn-block">
                            <button class="Imp_btn text_grey appStore" type="button" href="#" name="Appstore" vlaue="appstore">Apple Store</button>
                            <button class="Imp_btn text_grey playStore" type="button" href="#" name="playstore" vlaue="playstore">Play Store</button>
                        </div>
                    </div>
                    <div class="col-sm-12 col-md-12 col-lg-3">
                        <p class="imp_mail">support@imagemarkpro.com</p>
                        <p class="imp_contact">+1424-732-0088</p>
                    </div>
                </div>
                <div class="row">
                    <div class="col-sm-12 col-md-8 col-lg-8 terms_and_condition">
                        <a class="policy_links">ImageMarkPro</a>
                        <a class="policy_links" href="#">Privacy Policy</a>
                        <a class="policy_links" href="#">Subscription Details</a>
                    </div>
                    <div class="col-sm-12 col-md-4 col-lg-4 rights">
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

export default LandingPage;