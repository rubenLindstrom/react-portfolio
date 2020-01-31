import React from "react";

import TECHNOLOGIES from "./technologies";

// Gradients
const redOrange =
  "linear-gradient(135deg,rgba(222, 0, 63, 0.8),  rgba(235, 74, 0, 0.8))";

const purpleBlue =
  "linear-gradient(135deg,rgba(148, 0, 222, 0.8),rgba(0, 176, 235, 0.8))";

const greenBlue =
  " linear-gradient(135deg,  rgba(0, 222, 96, 0.8),  rgba(0, 188, 235,0.8))";

const getImages = (title, number) =>
  [...Array(number).keys()].map(num =>
    require(`../images/projects/${title}/${num + 1}.png`)
  );

export default {
  amitié: {
    title: "Amitié",
    subtitle: "Showcase website for luxurious restaurant",
    banner: require("../images/projects/amitie/main.jpg"),
    bannerGradient: redOrange,
    slides: getImages("amitie", 4),
    link: "https://amitie.netlify.com/",
    technologies: [TECHNOLOGIES.REACT, TECHNOLOGIES.STYLED_COMPONENTS],
    text: (
      <>
        <h2>Stunning graphics</h2>
        <p>
          This website need to have high customizability, in regards to effects,
          but the content was static. React was therefore the technology of
          choice, to make it possible to create any kind of dynamic interaction.
          <br />
          <br />
          The site features modern React, utalizing exclusively functional
          components, as well as the 16.8 hooks.
          <br />
          <br />
          The site features many big images, that speak for themselves.
          Continuous integration was achieved with Netlify, making it possible
          to follow the process one commit at a time.
        </p>
      </>
    ),
    prev: "/projects/iare",
    next: "/projects/soccio"
  },

  castelli: {
    title: "Castelli",
    subtitle: "Realators of luxurious homes in the Swedish archipelago",
    banner: require("../images/projects/castelli/main.jpg"),
    bannerGradient: purpleBlue,
    slides: getImages("castelli", 4),
    link: "https://castelli.se",
    technologies: [TECHNOLOGIES.WORDPRESS, TECHNOLOGIES.PHP],
    text: (
      <>
        <h2>A brand new look</h2>
        <p>
          Castelli are brokers of luxurious homes, and therefore naturally need
          to convey a high standard look. Their previous website was outdated,
          and did not compare to their competitors websites, which had been more
          recently updated with the latest design trends
          <br />
          <br />
          To combat this, we made a complete revamp in the design, with a focus
          on the images. Castelli had a lot of impressive images that needed to
          be brought forward. The page is centered around full screen images,
          and features some neat css animations to give them even more space.
          <br />
          <br />
          Lastly, it was important to Castelli that the interface was simple for
          them, and allowed them to easisly upload, edit and remove featured
          houses from the site. The Wordpress theme was developed ground up with
          this in mind, and now makes for a pleasurable editing experience, that
          allows Castelli to focus on what they do best.
        </p>
      </>
    ),
    prev: "/projects/resorts",
    next: "/projects/n0llan"
  },
  ["dagen-i"]: {
    title: "Dagen I",
    subtitle: "Enabling students and employers to meet",
    banner: require("../images/projects/dageni/main.jpg"),
    bannerGradient: greenBlue,
    slides: getImages("dageni", 3),
    link: "https://dageni.se/",
    technologies: [TECHNOLOGIES.WORDPRESS, TECHNOLOGIES.PHP],
    text: (
      <>
        <h2>Practical and usuable website</h2>
        <p>
          Dagen I is a networking event for students and companies to meet. It's
          an opportunity for students to be exposed to the possible career paths
          ahead of them
          <br />
          <br />
          Wordpress was the natural technology of choice, as the website will be
          maintained by many different students in the future, making it
          important that it's very intuitive to manage, while still being
          powerful for the end user.
          <br />
          <br />
          Appropriate Wordpress plugins were chosen, making the website easy to
          handle, while still remaining performant and customizable.
        </p>
      </>
    ),
    prev: "/projects/n0llan",
    next: "/projects/iare"
  },
  iare: {
    title: "Iare",
    subtitle: "Practical all-in-one website, used by hundreds of students",
    banner: require("../images/projects/iare/main.jpg"),
    bannerGradient: greenBlue,
    slides: getImages("iare", 4),
    link: "https://iare.one/",
    technologies: [
      TECHNOLOGIES.WORDPRESS,
      TECHNOLOGIES.PHP,
      TECHNOLOGIES.MYSQL
    ],
    text: (
      <>
        <h2>Practical and multi purpose</h2>
        <p>
          The chapter of industrial engineering and management features many
          subgroups, that all have their seperate activities and information
          that needs to be spread. Together with this, there also needed to be a
          system to handle payments and to sign up for events.
          <br />
          <br />
          To enable easy administration, Wordpress was used, and a complete
          custom backend system in php to handle events was written. This was
          also integrated with Dibs payment system to handle payments.
          <br />
          <br />
          The system was iteratively upgraded with new systems, such as a new
          interface to handle payments, since the one Dibs provided was not
          appropriate for the needs of the chapter's cashier.
        </p>
      </>
    ),
    prev: "/projects/dagen-i",
    next: "/projects/amitié"
  },
  n0llan: {
    title: "N0llan",
    subtitle: "Information hub and event-system",
    banner: require("../images/projects/n0llan/main.jpg"),
    bannerGradient: greenBlue,
    slides: getImages("n0llan", 3),
    link: "https://n0llan.nu/",
    technologies: [
      TECHNOLOGIES.WORDPRESS,
      TECHNOLOGIES.PHP,
      TECHNOLOGIES.MYSQL
    ],
    text: (
      <>
        <h2>Intuitive and robust</h2>
        <p>
          The reception event at the chapter for industrial engineering and
          management happens yearly, and each year a shallow site was set up
          through google pages, or the Wordpress blog interface
          <br />
          <br />
          The chapter needed a robust website that could be used every year,
          without putting a strain on technical aptness from the administrator.
          Wordpress was therefore the natural choice. For the parts that would
          not need to be changed, a custom backend in php was writting, and it
          remains a solid foundation to the site.
        </p>
      </>
    ),
    prev: "/projects/castelli",
    next: "/projects/dagen-i"
  },
  resorts: {
    title: "Beach Resorts",
    subtitle: "React and headless CMS for hotel showcase",
    banner: require("../images/projects/resorts/main.jpg"),
    bannerGradient: purpleBlue,
    slides: getImages("resorts", 4),
    link: "https://rubenli-react-hotels.netlify.com/",
    technologies: [
      TECHNOLOGIES.REACT,
      TECHNOLOGIES.STYLED_COMPONENTS,
      TECHNOLOGIES.CONTENTFUL
    ],
    text: (
      <>
        <h2>Headless CMS and React</h2>
        <p>
          The purpose of this website is to showcase hotel rooms. It features a
          wide range of big images, that get a lot of space to breath.
          <br />
          <br />
          To populate the rooms, a headless CMS was used, to make it easy to
          manage, with API keys of course hidden in environmental variables.
          During the development process, a continuous integration workflow was
          used, so that results were always avaliable on display through regular
          builds.
        </p>
      </>
    ),
    prev: "/projects/soccio",
    next: "/projects/castelli"
  },
  soccio: {
    title: "Soccio",
    subtitle: "Fullstack social media app",
    banner: require("../images/projects/soccio/main.jpg"),
    bannerGradient: redOrange,
    slides: getImages("soccio", 4),
    link: "https://soccio-e29bc.firebaseapp.com/",
    technologies: [
      TECHNOLOGIES.REACT,
      TECHNOLOGIES.REDUX,
      TECHNOLOGIES.NODE,
      TECHNOLOGIES.FIREBASE
    ],
    text: (
      <>
        <h2>React/Node social media app</h2>
        <p>
          This app is a complete full stack application, built with React, Node
          and Firebase. It features a fully fledges API to deal with accuonts,
          posts, likes, triggers for notifications, and more.
          <br />
          <br />
          The API is set up through Firebase cloud functions, and features an
          intuitive and easy to use API.
          <br />
          <br />
          To optimize Firebase cost efficiency through minimizing reads, two way
          references are frequently used. To make sure all documents stay up to
          date, firebase triggers are used, to update data upon certain
          transactions.
        </p>
      </>
    ),
    prev: "/projects/amitié",
    next: "/projects/resorts"
  }
};
