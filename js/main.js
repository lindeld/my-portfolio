import React from 'react';
import ReactDOM from 'react-dom';
import ExampleWork from './example-work.js';

const myWork = [
  {
    'title': "ICT Development",
    'href': "images/BeaconPoster.pdf",
    'desc': "There are 17 Sustainable Development Goals (SDGs) adopted by all United Nations members. These goals seek to, '...improve health and education, reduce inequality, and spur economic growth - all while tackling climate change and working to preserve our oceans and forests.' As a group of four, we decided to focus on SDG number 3, 'Good Health and Well-Being'. Specifically we wanted to use Information and Communication Technologies (ICT) to help those who suffer from anxiety and depression. Over the course of 10 weeks we researched, designed and developed a working prototype of our solution. We implemented the prototype using react-native and Expo.",
    'image': {
      'desc': "beacon logo",
      'src': "images/BeaconWelcome.png",
      'comment': ""
    }
  },
 {
    'title': "'make' Program",
    'href': "https://linux.die.net/man/1/make",
    'desc':"Developed a make program over the course of 10 weeks. The functionality included targets, dependencies and rules. When invoked on a target the program follows dependencies and executes rules to prepare files. Supports I/O redirection, handles append, truncate and redirecting input (>>, >, <). Omits line following a pound sign (#) for commenting as well as environment variable assignment. Linked is the make man page, send me an email for accessing the program. Due to the academic honesty code of conduct I am unable to make it openly available online.",
     'image': {
      'desc': "",
      'src': "images/umake.png",
      'comment': ""
    }
  },
  {
    'title': "This Portfolio!",
    'href': "https://github.com/lindele/my-portfolio",
    'desc': "Created this online portfolio using A Cloud Guru's online course, 'Create a Serverless Portfolio with AWS and ReactJS'. After taking this course I took a University course where we developed an application using React-Native (see Beacon) and have continued to update my portfolio. In the course I learned to automate deployment using CodeBuild, CloudFront, S3 and Lamda.",
    'image': {
      'desc': "",
      'src': "images/",
      'comment': ""
    }
  }
];

ReactDOM.render(<ExampleWork work={myWork}/>, document.getElementById('example-work'));
