import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  kang_hilmy,
  kang_herdy,
  pak_agung,
  pak_wildan,
  upi,
  plabsid,
  smkassalaam,
  weather_app,
  mobile_smartstore,
  admin_smartstore,
  api_smartstore,
  arcade_pulse,
  ecosen,
  tic_tac_toe,
  temperature_converter,
  gedion_coffee,
  sansan_cinema,
  shop_ease,
  tensai_room, 
  sansan_i_news,
  portfolio,
  carrent,
  jobit,
  tripguide,
  threejs,
  mysql,
  flutter,
  vuejs,
  dart,
  nextjs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Javascript Frameworks",
    icon: mobile,
  },
  {
    title: "Frontend Developer",
    icon: backend,
  },
  {
    title: "Animation and UX",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "Dart",
    icon: dart,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Vue JS",
    icon: vuejs,
  },
  {
    name: "Next JS",
    icon: nextjs,
  },
  {
    name: "Flutter",
    icon: flutter,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "MySQL",
    icon: mysql,
  },
];

const experiences = [
  {
    title: "Software Engineering Student",
    company_name: "Universitas Pendidikan Indonesia",
    icon: upi,
    iconBg: "#383E56",
    date: "Aug 2024 - Present",
    points: [
      "Enrolled in the Software Engineering program, building a strong foundation in programming, algorithms, and system design.",
      "Engaged in coursework covering various programming languages, software development methodologies, and database management.",
      "Participating in collaborative projects to apply theoretical knowledge to real-world software development challenges.",
      "Developing problem-solving skills and a deep understanding of software engineering principles.",
    ],
  },
  {
    title: "Fullstack Developer",
    company_name: "Expertise Competency Test of SMK Assalaam Bandung",
    icon: smkassalaam,
    iconBg: "#E6DEDD",
    date: "Jan 2024 - Apr 2024",
    points: [
      "Developing and maintaining the SmartStore Home e-commerce platform using Flutter for the Mobile, React for the frontend and Node.js for the backend.",
      "Designing and implementing RESTful APIs to manage product, user, and order data.",
      "Integrating third-party services such as payment gateways and shipping providers to enhance the user experience.",
      "Collaborating with UI/UX designers to create a responsive and user-friendly interface across all devices.",
      "Ensuring data security and application performance through rigorous testing and optimization.",
      "Deploying and monitoring the application on cloud services to maintain high availability and scalability.",
    ],
  },
  {
    title: "Frontend Developer",
    company_name: "PLABS.ID",
    icon: plabsid,
    iconBg: "#383E56",
    date: "Sep 2023 - Des 2023",
    points: [
      "Developed and maintained the EcoSen e-commerce platform using React.js, ensuring seamless integration with backend APIs.",
      "Collaborated closely with designers, product managers, and backend developers to deliver a high-quality, user-friendly product.",
      "Implemented responsive design techniques to ensure optimal user experience across various devices.",
      "Participated in code reviews and provided valuable feedback to improve code quality and maintain best practices.",
    ],
  },
  {
    title: "Frontend Developer",
    company_name: "SMK Assalaam Bandung (Internship)",
    icon: smkassalaam,
    iconBg: "#E6DEDD",
    date: "Aug 2023",
    points: [
      "Developed and maintained the e-commerce platform ShopEase Fruits using Vue.js, focusing on a seamless user experience.",
      "Consumed RESTful APIs provided by the backend team to integrate dynamic data into the frontend.",
      "Collaborated with backend developers to ensure efficient data handling and smooth functionality of the application.",
      "Ensured cross-browser compatibility and responsive design for optimal performance across various devices.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Mentoring Sandy during his internship at PLABS.ID was a rewarding experience. His dedication to learning and ability to quickly grasp complex frontend concepts truly stood out. Sandy's contributions were invaluable, and his growth as a developer was evident in the quality of his work.",
    name: "M Naufal Hilmy F",
    designation: "Software Engineer",
    company: "PLABS.ID",
    image: kang_hilmy,
  },
  {
    testimonial:
      "Working with Sandy during his internship at PLABS.ID was a true pleasure. His enthusiasm for frontend development and his ability to adapt quickly to new challenges were genuinely impressive. Sandy's commitment and skill greatly contributed to our projects, and his growth as a developer was clearly visible throughout.",
    name: "Herdyansah",
    designation: "Software Engineer",
    company: "PLABS.ID",
    image: kang_herdy,
  },
  {
    testimonial:
      "As Sandy's instructor and examiner during his final project at SMK Assalaam Bandung, I was thoroughly impressed by his technical skills and dedication. His ability to tackle complex problems and his proactive approach to learning were exceptional. Sandy's work ethic and problem-solving skills truly set him apart.",
    name: "Agung Wahyudi",
    designation: "IT Administrator and Fullstack Dev",
    company: "SMK Assalaam Bandung",
    image: pak_agung,
  },
  {
    testimonial:
      "Sandy's enthusiasm and dedication to learning programming were evident throughout his time at SMK Assalaam Bandung. As his instructor, I was impressed by his ability to quickly grasp complex frontend concepts and apply them effectively. His growth and commitment to excellence were truly commendable.",
    name: "Wildan Abdul Aziz",
    designation: "Wakasek Hubin and Frontend Dev",
    company: "SMK Assalaam Bandung",
    image: pak_wildan,
  },
];

const projects = [
  {
    name: "Weather App",
    description:
      "A web-based platform that provides real-time weather information for cities worldwide. Built with React.js and CSS, this app allows users to search for cities and view current weather conditions, including temperature, humidity, and wind speed. ",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "consume-api",
        color: "consume-api-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: weather_app,
    source_code_link: "https://github.com/sandysptra09/Weather-App",
  },
  {
    name: "Mobile App - SmartStore Home",
    description:
      "A mobile e-commerce app built with Flutter, designed for seamless product browsing, secure ordering, and real-time delivery tracking, providing users with a convenient shopping experience at home.",
    tags: [
      {
        name: "dart",
        color: "dart-text-gradient",
      },
      {
        name: "consume-api",
        color: "consume-api-text-gradient",
      },
      {
        name: "flutter",
        color: "flutter-text-gradient",
      },
    ],
    image: mobile_smartstore,
    source_code_link: "https://github.com/sandysptra09/Mobile-SmartStore_Home",
  },
  {
    name: "Admin Dashboard - SmartStore Home",
    description:
      "An Admin Dashboard for SmartStore, developed to streamline the management of products, orders, and users, offering real-time analytics, intuitive navigation, and efficient control over all aspects of e-commerce operations to enhance decision-making and business performance.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "consume-api",
        color: "consume-api-text-gradient",
      },
      {
        name: "tailwind-css",
        color: "pink-text-gradient",
      },
    ],
    image: admin_smartstore,
    source_code_link: "https://github.com/sandysptra09/Admin-SmartStore_Home",
  },
  {
    name: "API - SmartStore Home",
    description:
      "The SmartStore Home API offers essential endpoints for managing e-commerce operations. It supports product browsing, user management, order processing, and inventory control, ensuring a smooth shopping experience and efficient backend operations. Designed for scalability and flexibility, it integrates seamlessly with various front-end applications to deliver a cohesive and dynamic user experience.",
    tags: [
      {
        name: "expressjs",
        color: "yellow-text-gradient",
      },
      {
        name: "rest-api",
        color: "rest-api-text-gradient",
      },
      {
        name: "sequelize",
        color: "sequelize-text-gradient",
      },
    ],
    image: api_smartstore,
    source_code_link: "https://github.com/sandysptra09/API-SmartStore_Home",
  },
  {
    name: "Arcade Pulse",
    description:
      "Arcade Pulse is an interactive platform that makes it easy for users to discover and explore the latest games. With an attractive interface and intuitive navigation, the website offers an exciting experience for gamers to discover their favorite games.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "consume-api",
        color: "green-text-gradient",
      },
      {
        name: "tailwind-css",
        color: "tailwind-text-gradient",
      },
    ],
    image: arcade_pulse,
    source_code_link: "https://github.com/sandysptra09/Arcade-Pulse",
  },
  {
    name: "E-commerce EcoSen",
    description:
      "EcoSen is an e-commerce platform that provides a wide range of cooking needs, from kitchen appliances to quality food ingredients. With a focus on ease and convenience of shopping, EcoSen is the right choice for those who want to fulfill their kitchen needs with quality products.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "consume-api",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: ecosen,
    source_code_link: "https://github.com/sandysptra09/Ecommerce-EcoSen-2023",
  },
  {
    name: "Temperature Converter",
    description:
      "Temperature Converter is a simple app that allows users to easily convert temperatures between various scales, such as Celsius, Fahrenheit, and Kelvin. With an intuitive interface, this app makes it easy for users to get accurate conversion results in an instant.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: temperature_converter,
    source_code_link:
      "https://github.com/sandysptra09/PROJECT-TEMPERATURE_CONVERTER",
  },
  {
    name: "Tic Tac Toe",
    description:
      "Tic Tac Toe is a classic game that now comes with a more personalized customization feature. In this version, player 1 and player 2 have the option to change their names to their liking, making the gaming experience more fun and interactive.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tic_tac_toe,
    source_code_link: "https://github.com/sandysptra09/Tic-Tac-Toe-with-React",
  },
  {
    name: "Gedion Coffee",
    description:
      "Gedion Coffee is a landing page designed to invite visitors to explore the world of high-quality coffee. With a captivating design and comprehensive information, this page introduces Gedion Coffee's various coffee variants, serving methods, and product advantages. Discover a satisfying and flavorful coffee experience at Gedion Coffee.",
    tags: [
      {
        name: "html",
        color: "html-text-gradient",
      },
      {
        name: "javascript",
        color: "javascript-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: gedion_coffee,
    source_code_link: "https://github.com/sandysptra09/PROJECT-GEDION-COFFEE",
  },
  {
    name: "Cinema SanSan",
    description:
      "Cinema SanSan is a movie discovery platform with a dynamic and responsive interface, built using Vue.js. This website makes it easy for visitors to explore various movies, view detailed information, and find the latest recommendations in the world of cinema.",
    tags: [
      {
        name: "vuejs",
        color: "vue-text-gradient",
      },
      {
        name: "consume-api",
        color: "consume-api-text-gradient",
      },
      {
        name: "tailwind-css",
        color: "pink-text-gradient",
      },
    ],
    image: sansan_cinema,
    source_code_link: "https://github.com/sandysptra09/Cinema-Sansan",
  },
  {
    name: "E-commerce ShopeEase",
    description:
      "ShopEase is an e-commerce that focuses on selling a wide variety of fresh fruits. With an extensive collection and user-friendly interface, ShopEase makes it easy for you to choose and buy quality fruits right from home.",
    tags: [
      {
        name: "vuejs",
        color: "vue-text-gradient",
      },
      {
        name: "consume-api",
        color: "consume-api-text-gradient",
      },
      {
        name: "tailwind-css",
        color: "pink-text-gradient",
      },
    ],
    image: shop_ease,
    source_code_link: "https://github.com/sandysptra09/PROJECT_AKHIR_VUEX",
  },
  {
    name: "Tensai Room",
    description:
      "Tensai Room is an e-learning application that provides a variety of quality educational materials. With interactive features and diverse content, this app helps users learn and access information about education easily and efficiently.",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "javascript",
        color: "javascript-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tensai_room,
    source_code_link: "https://github.com/sandysptra09/WEB-TENSAI-ROOM",
  },
  {
    name: "Sansan i News",
    description:
      "Sansan i News is the latest news platform that provides the latest and reliable information with a modern and easy-to-navigate interface. Get the latest news updates from various topics and trusted sources on Sansan i News.",
    tags: [
      {
        name: "html",
        color: "html-text-gradient",
      },
      {
        name: "bootstrap",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: sansan_i_news,
    source_code_link: "https://github.com/sandysptra09/Tugas-Revisi-Web-Berita",
  },
  {
    name: "Personal Website",
    description:
      "This simple personal website is designed using HTML and CSS, offering a clean and elegant look. It displays basic information about myself, including my profile, experience, and contacts, with a responsive and easy-to-navigate design.",
    tags: [
      {
        name: "html",
        color: "html-text-gradient",
      },
      {
        name: "javascript",
        color: "javascript-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: portfolio,
    source_code_link: "https://github.com/sandysptra09/PROJECT-GEDION-COFFEE",
  },
];

export { services, technologies, experiences, testimonials, projects };
