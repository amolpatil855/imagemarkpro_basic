import React, { Fragment } from "react";
import { Typography } from "@material-ui/core";
import blogPost1 from "./images/blogPost1.jpg";
import blogPost2 from "./images/blogPost2.jpg";
import blogPost3 from "./images/blogPost3.jpg";
import blogPost4 from "./images/blogPost4.jpg";
import blogPost5 from "./images/blogPost5.jpg";
import blogPost6 from "./images/blogPost6.jpg";

const contentImageEditing = (
  <Fragment>
    <Typography variant="h6" paragraph>
      Imagemarkpro is the applcation which provide you image editing, video editing
      and live streaming to most famous social platform 
    </Typography>
    <Typography paragraph>
    In the digital age, it is absolutely essential for your business to have an online presence. Whether it’s a website, an e-commerce platform, a social media page or a combination of all three, getting your company online will reap major benefits. Even if your company does not conduct business online, customers and potential customers are expecting to see you online. If they don’t see you there, you could be losing out on the opportunity to increase your customer base and get the word out about your business.
    </Typography>
  
    <Typography variant="h6" paragraph>
    What is Photo Editing?
    </Typography>
    <Typography paragraph>
Photo editing is the art of enhancing an image to make it look more like what you saw with your eyes. While digital cameras are great tools, capable of capturing a myriad of images, they're also notorious for producing muted colors, low contrast, and off-balanced lighting. Photo editing helps correct these issues to bring out the true beauty of your photo the way you remember it. Use photo editing to bring out the vividness of colors, adjust exposure and get the lighting just right, remove unwanted objects, add photo effects to create a vintage look, and more.
 The possibilities are endless when it comes to editing photos with Imagemark pro! 
    </Typography>
  
   
  </Fragment>
);

const contentVideoEditing = (
  <Fragment>
    <Typography variant="h6" paragraph>
      Imagemarkpro is the applcation which provide you image editing, video editing
      and live streaming to most famous social platform 
    </Typography>
    <Typography paragraph>
    In the digital age, it is absolutely essential for your business to have an online presence. Whether it’s a website, an e-commerce platform, a social media page or a combination of all three, getting your company online will reap major benefits. Even if your company does not conduct business online, customers and potential customers are expecting to see you online. If they don’t see you there, you could be losing out on the opportunity to increase your customer base and get the word out about your business.
    </Typography>
  
    <Typography variant="h6" paragraph>
    What is Video Editing?
    </Typography>
    <Typography paragraph>
    Video editing is the process of manipulating and rearranging video shots to create a new work. Editing is usually considered to be one part of the post production process — other post-production tasks include titling, colour correction, sound mixing, etc.

Many people use the term editing to describe all their 
post-production work, especially in non-professional situations.
 Whether or not you choose to be picky about terminology is up to you.
 Imagemark pro is help you to edit your video faster and smart way.   </Typography>
  
   
  </Fragment>
);

const contentLivestreaming = (
  <Fragment>
    <Typography variant="h6" paragraph>
      Imagemarkpro is the applcation which provide you image editing, video editing
      and live streaming to most famous social platform 
    </Typography>
    <Typography paragraph>
    In the digital age, it is absolutely essential for your business to have an online presence. Whether it’s a website, an e-commerce platform, a social media page or a combination of all three, getting your company online will reap major benefits. Even if your company does not conduct business online, customers and potential customers are expecting to see you online. If they don’t see you there, you could be losing out on the opportunity to increase your customer base and get the word out about your business.
    </Typography>
  
    <Typography variant="h6" paragraph>
    What is Live Streaming ?
    </Typography>
    <Typography paragraph>
Photo editing is the art of enhancing an image to make it look more like what you saw with your eyes. While digital cameras are great tools, capable of capturing a myriad of images, they're also notorious for producing muted colors, low contrast, and off-balanced lighting. Photo editing helps correct these issues to bring out the true beauty of your photo the way you remember it. Use photo editing to bring out the vividness of colors, adjust exposure and get the lighting just right, remove unwanted objects, add photo effects to create a vintage look, and more.
 The possibilities are endless when it comes to editing photos with Imagemark pro! 
    </Typography>
  
   
  </Fragment>
);




export default [
  {
    title: "Image Edititng",
    id: 1,
    date: 1585008000,
    imageSrc: blogPost1,
    snippet:"With Imagemark pro, you can easily create stunning, professional-quality images with a single click. The process might be simple, but the results are incredibly ...", 
   content: contentImageEditing
  },
  {
    title: "Video Editing",
    id: 2,
    date: 1587513600,
    imageSrc: blogPost2,
    snippet:
      "Video editing applications are typically desktop programs, however there are several cloud-based options that allow you to upload a video and edit the file online. Cloud video editing applications typically allow you to connect to various social and online accounts to share your movie.",
    content: contentVideoEditing
  },
  {
    title: "Live Streaming",
    id: 3,
    date: 1588723200,
    imageSrc: blogPost3,
    snippet:"Interactive broadcasting creates a higher level of user engagement. Easily embed live interactive broadcasting directly into your app" ,
       content: contentLivestreaming
  },
  // {
  //   title: "Post 4",
  //   id: 4,
  //   date: 1572281600,
  //   imageSrc: blogPost4,
  //   snippet:
  //     "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.",
  //   content: content
  // },
  // {
  //   title: "Post 5",
  //   id: 5,
  //   date: 1573281600,
  //   imageSrc: blogPost5,
  //   snippet:
  //     "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.",
  //   content: content
  // },
  // {
  //   title: "Post 6",
  //   id: 6,
  //   date: 1575281600,
  //   imageSrc: blogPost6,
  //   snippet:
  //     "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.",
  //   content: content
  // }
];
