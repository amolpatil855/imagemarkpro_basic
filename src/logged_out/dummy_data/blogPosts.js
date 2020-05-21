import React, { Fragment } from "react";
import { Typography } from "@material-ui/core";
import blogPost1 from "./images/blogPost1.jpg";
import blogPost2 from "./images/blogPost2.jpg";
import blogPost3 from "./images/blogPost3.jpg";
import blogPost4 from "./images/blogPost4.jpg";
import blogPost5 from "./images/blogPost5.jpg";
import blogPost6 from "./images/blogPost6.jpg";

const content = (
  <Fragment>
    <Typography variant="h6" paragraph>
      Imagemarkpro is the applcation which provide you image editing, video editing
      and live streaming to most famous social platform 
    </Typography>
    <Typography paragraph>
      Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
      eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
      voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
      clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
      amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
      nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed
      diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
      Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor
      sit amet.
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

export default [
  {
    title: "Image Edititng",
    id: 1,
    date: 1576281600,
    imageSrc: blogPost1,
    snippet:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.",
    content: content
  },
  {
    title: "Video Editing",
    id: 2,
    date: 1576391600,
    imageSrc: blogPost2,
    snippet:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.",
    content: content
  },
  {
    title: "Live Streaming",
    id: 3,
    date: 1577391600,
    imageSrc: blogPost3,
    snippet:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.",
    content: content
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
