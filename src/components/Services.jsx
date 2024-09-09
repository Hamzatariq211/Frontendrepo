import React, { useState, useRef, useEffect } from "react";
import {
  Box,
  Tabs,
  Tab,
  Paper,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  IconButton,
  Rating,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import softwarehouse from "../assets/images/softwarehouse.png";
import femaleprofile from "../assets/images/femaleprofile.png";
import styled from "styled-components";
import { useNavigate, useLocation } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import logo from "../assets/images/Logo.png";
const services = [
  {
    label: "All",
    subServices: [
      {
        id: 1,
        name: "Full Stack Frameworks",
        description:
          "We build full stack frameworks that seamlessly integrate frontend and backend technologies for efficient and scalable application development",
        image:
          "https://plus.unsplash.com/premium_photo-1683288662019-c92caea8276d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8d2ViJTIwZGV2ZWxvcG1lbnQlMjBzZXJ2aWNlcyUyMGJsdWUlMjB0aGVtZXxlbnwwfHwwfHx8MA%3D%3D",
        priceInRupees: [30000, 300000],
        details: [
          `We build full stack frameworks that seamlessly integrate frontend and backend technologies for 
efficient and scalable application development. Our expertise includes: Next.js: React framework optimized for server-side rendering and static site generation.
 Nuxt.js: Vue.js framework supporting server-side rendering and static site generation 
for universal apps.
 MEAN Stack (MongoDB, Express.js, Angular, Node.js): Full stack JavaScript solution using 
a single language throughout the application.
 MERN Stack (MongoDB, Express.js, React, Node.js): Full stack JavaScript stack for 
building single-page applications (SPAs).
 WordPress: Versatile platform for creating websites and blogs.
These frameworks enable us to deliver tailored, high-performance solutions that meet 
your project’s needs.
        `,
        ],
      },
      {
        id: 2,
        name: "FrontEnd Frameworks",
        description:
          "We specialize in crafting exceptional user experiences by leveraging cutting-edge front-end frameworks.",
        image:
          "https://plus.unsplash.com/premium_photo-1720287601300-cf423c3d6760?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8d2ViJTIwZGV2ZWxvcG1lbnQlMjBzZXJ2aWNlcyUyMGJsdWUlMjB0aGVtZXxlbnwwfHwwfHx8MA%3D%3D",
        priceInRupees: [20000, 80000],
        details: `
        We craft exceptional user experiences through robust front-end development. Our expertise lies 
in leveraging cutting-edge frameworks to build dynamic, responsive, and visually stunning 
interfaces.
 React.js: A declarative, component-based library for building user interfaces. Known for 
its flexibility and large community.
 Angular: A comprehensive framework for building complex applications. Offers robust 
features and strong typing.
 Vue.js: A progressive framework that balances reactivity and performance. Ideal for 
projects of all sizes.
 Svelte: A compiler-based framework that shifts much of the work from runtime to build 
time for exceptional performance.
 Bootstrap: A popular CSS framework for rapid prototyping and responsive design.
`,
      },
      {
        id: 3,
        name: "BackEnd Frameworks",
        description:
          "Building robust and scalable back-ends is crucial for any successful application. Our expertise lies in utilizing powerful frameworks to create reliable server-side solutions.",
        image:
          "https://plus.unsplash.com/premium_photo-1685086785423-435c02d5c321?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHdlYiUyMGRldmVsb3BtZW50JTIwc2VydmljZXMlMjBibHVlJTIwdGhlbWV8ZW58MHx8MHx8fDA%3D",
        priceInRupees: [20000, 80000],
        details: `
        We excel in crafting robust and scalable back-end solutions. Our expertise lies in utilizing 
powerful frameworks to deliver efficient and reliable server-side applications.
 Node.js with Express.js: A dynamic duo for building lightweight, fast, and scalable 
server-side applications in JavaScript.
 Django: A Python-based framework known for rapid development, clean design, and 
robust security features.
 Ruby on Rails: A full-stack Ruby framework emphasizing convention over 
configuration for efficient development.
 Spring Boot: A Java-based framework simplifying enterprise application development 
with auto-configuration and dependency injection.
 Laravel: A PHP framework renowned for its expressive syntax, rich features, and a 
vibrant community.
`,
      },
      // Add more subServices from other categories
      {
        id: 4,
        name: "Native App Development Frameworks",
        description:
          "We build high-performance native apps for iOS and Android using Swift and Kotlin.",
        image:
          "https://media.istockphoto.com/id/641326216/photo/computer-service.webp?b=1&s=612x612&w=0&k=20&c=tmNGp1BgA7P_uhD8n4JKVaTioiTIoO0sOq0GrczYYps=",
        priceInRupees: [60000, 200000],
        details: `
        We specialize in building high-performance native applications for iOS and Android platforms. 
Our expertise lies in leveraging the following frameworks:
 Swift (iOS): The official language for crafting exceptional iOS apps, delivering seamless 
user experiences on iPhone and iPad.
 Kotlin (Android): The preferred language for developing modern, high-performance 
Android apps with a focus on developer productivity and code safety.
`,
      },
      {
        id: 5,
        name: "Cross App Development Framework",
        description:
          "We specialize in developing cross-platform applications that seamlessly function across multiple operating systems.",
        image:
          "https://media.istockphoto.com/id/1086792380/photo/business-internet-online-concept.webp?b=1&s=612x612&w=0&k=20&c=1gghq9Amfk9zKYNNXKc19ojrE6Vr7532Qy6nfD8Jixw=",
        priceInRupees: [30000, 150000],
        details: `
        We specialize in developing cross-platform applications that seamlessly function across 
multiple operating systems. Our expertise spans a range of frameworks, including:
 React Native: Leveraging JavaScript and React, this framework allows for efficient 
development of high-performance mobile apps.
 Flutter: Built with Dart, Flutter offers exceptional performance and a rich set of predesigned widgets for visually appealing apps.
 Xamarin: Utilizing C# and .NET, Xamarin enables code sharing between iOS and 
Android platforms.
 Ionic: Based on web technologies (HTML, CSS, and JavaScript), Ionic provides 
flexibility for building hybrid and Progressive Web Apps (PWAs)`,
      },
      {
        id: 6,
        name: "AI Solutions",
        description:
          "We specialize in developing cutting-edge artificial intelligence solutions, specializing in text generation, image and video creation, and advanced machine learning techniques.",
        image:
          "https://plus.unsplash.com/premium_photo-1701113010437-1709c96aa539?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YXJ0aWZpY2lhbCUyMGludGVsbGlnZW5jZSUyMHNlcnZpY2VzJTIwYmx1ZSUyMHRoZW1lfGVufDB8fDB8fHww",
        priceInRupees: [50000, 250000],
        details: `
        Our expertise lies in harnessing the power of artificial intelligence to create innovative solutions. 
We specialize in:
 Text Generation and Chatbots: Developing advanced language models and 
conversational AI systems.
 Image and Video Generation: Creating AI-powered tools for generating realistic and 
creative visual content.
 Generative Adversarial Networks (GANs): Building sophisticated models for 
generating realistic data.
 Transformer Models: Utilizing advanced neural network architectures for various AI 
tasks.
`,
      },
      {
        id: 7,
        name: "ML Models",
        description:
          "We specialize in building and deploying cutting-edge machine learning models using industry-leading frameworks and libraries",
        image:
          "https://plus.unsplash.com/premium_photo-1679957333019-1d2715e22c96?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bWFjaGluZSUyMGxlYXJuaW5nJTIwc2VydmljZXMlMjBibHVlJTIwdGhlbWV8ZW58MHx8MHx8fDA%3D",
        priceInRupees: [20000, 200000],
        details: `
        Our expertise lies in developing sophisticated machine learning solutions. We leverage a diverse 
range of frameworks and libraries to tackle complex problems, including:
 TensorFlow: A versatile platform for building and deploying large-scale machine 
learning models.
 PyTorch: Known for its flexibility and dynamic computation graphs, ideal for research 
and rapid prototyping.
 Keras: A high-level API simplifying the creation of neural networks.
 scikit-learn: A comprehensive library for classical machine learning algorithms.
 Apache Spark MLlib: A scalable machine learning library for large-scale data 
processing.
 XGBoost: A gradient boosting library renowned for its performance.
 H2O.ai: An open-source platform supporting various machine learning algorithms and 
AutoML.
 Fast.ai: A library built on PyTorch for rapid deep learning developmen
        `,
      },
      {
        id: 8,
        name: "Game Development",
        description:
          "We specialize in creating immersive gaming experiences using industry-leading engines like Unity and Unreal Engine.",
        image:
          "https://plus.unsplash.com/premium_photo-1720753535246-97dfc9d3283e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Z2FtZSUyMGRldmVsb3BtZW50JTIwc2VydmljZXMlMjBibHVlJTIwdGhlbWV8ZW58MHx8MHx8fDA%3D",
        priceInRupees: [30000, 130000],
        details: `
         We excel in game development, utilizing powerful engines to bring games to life across various 
platforms. Our expertise includes:
 Unity: A versatile engine for crafting 2D and 3D games, supporting multiple platforms 
with a vast community and asset store.
 Unreal Engine: Renowned for stunning visuals and complex gameplay, ideal for highend games with a focus on advanced graphics and scripting.
`,
      },
    ],
  },
  {
    label: "Web Development",
    subServices: [
      {
        id: 1,
        name: "Full Stack Frameworks",
        description:
          "We build full stack frameworks that seamlessly integrate frontend and backend technologies for efficient and scalable application development",
        image:
          "https://plus.unsplash.com/premium_photo-1683288662019-c92caea8276d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8d2ViJTIwZGV2ZWxvcG1lbnQlMjBzZXJ2aWNlcyUyMGJsdWUlMjB0aGVtZXxlbnwwfHwwfHx8MA%3D%3D",
        priceInRupees: [30000, 300000],
        details: `
        We build full stack frameworks that seamlessly integrate frontend and backend technologies for 
efficient and scalable application development. Our expertise includes:
 Next.js: React framework optimized for server-side rendering and static site generation.
 Nuxt.js: Vue.js framework supporting server-side rendering and static site generation 
for universal apps.
 MEAN Stack (MongoDB, Express.js, Angular, Node.js): Full stack JavaScript solution using 
a single language throughout the application.
 MERN Stack (MongoDB, Express.js, React, Node.js): Full stack JavaScript stack for 
building single-page applications (SPAs).
 WordPress: Versatile platform for creating websites and blogs.
These frameworks enable us to deliver tailored, high-performance solutions that meet 
your project’s needs.`,
      },
      {
        id: 2,
        name: "FrontEnd Frameworks",
        description:
          "We specialize in crafting exceptional user experiences by leveraging cutting-edge front-end frameworks.",
        image:
          "https://plus.unsplash.com/premium_photo-1720287601300-cf423c3d6760?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8d2ViJTIwZGV2ZWxvcG1lbnQlMjBzZXJ2aWNlcyUyMGJsdWUlMjB0aGVtZXxlbnwwfHwwfHx8MA%3D%3D",
        priceInRupees: [20000, 80000],
        details: `
         We craft exceptional user experiences through robust front-end development. Our expertise lies 
in leveraging cutting-edge frameworks to build dynamic, responsive, and visually stunning 
interfaces.
 React.js: A declarative, component-based library for building user interfaces. Known for 
its flexibility and large community.
 Angular: A comprehensive framework for building complex applications. Offers robust 
features and strong typing.
 Vue.js: A progressive framework that balances reactivity and performance. Ideal for 
projects of all sizes.
 Svelte: A compiler-based framework that shifts much of the work from runtime to build 
time for exceptional performance.
 Bootstrap: A popular CSS framework for rapid prototyping and responsive design.`,
      },
      {
        id: 3,
        name: "BackEnd Frameworks",
        description:
          "Building robust and scalable back-ends is crucial for any successful application. Our expertise lies in utilizing powerful frameworks to create efficient server-side solutions.",
        image:
          "https://plus.unsplash.com/premium_photo-1685086785423-435c02d5c321?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHdlYiUyMGRldmVsb3BtZW50JTIwc2VydmljZXMlMjBibHVlJTIwdGhlbWV8ZW58MHx8MHx8fDA%3D",
        priceInRupees: [20000, 80000],
        details: `
        We excel in crafting robust and scalable back-end solutions. Our expertise lies in utilizing 
powerful frameworks to deliver efficient and reliable server-side applications.
 Node.js with Express.js: A dynamic duo for building lightweight, fast, and scalable 
server-side applications in JavaScript.
 Django: A Python-based framework known for rapid development, clean design, and 
robust security features.
 Ruby on Rails: A full-stack Ruby framework emphasizing convention over 
configuration for efficient development.
 Spring Boot: A Java-based framework simplifying enterprise application development 
with auto-configuration and dependency injection.
 Laravel: A PHP framework renowned for its expressive syntax, rich features, and a 
vibrant community.
`,
      },
    ],
  },
  {
    label: "Mobile Development",
    subServices: [
      {
        id: 4,
        name: "Native App Development Frameworks",
        description:
          "We build high-performance native apps for iOS and Android using Swift and Kotlin.",
        image:
          "https://media.istockphoto.com/id/641326216/photo/computer-service.webp?b=1&s=612x612&w=0&k=20&c=tmNGp1BgA7P_uhD8n4JKVaTioiTIoO0sOq0GrczYYps=",
        priceInRupees: [60000, 200000],
        details: `
        We specialize in building high-performance native applications for iOS and Android platforms. 
Our expertise lies in leveraging the following frameworks:
 Swift (iOS): The official language for crafting exceptional iOS apps, delivering seamless 
user experiences on iPhone and iPad.
 Kotlin (Android): The preferred language for developing modern, high-performance 
Android apps with a focus on developer productivity and code safety.
`,
      },
      {
        id: 5,
        name: "Cross App Development Framework",
        description:
          "We specialize in developing cross-platform applications that seamlessly function across multiple operating systems.",
        image:
          "https://media.istockphoto.com/id/1086792380/photo/business-internet-online-concept.webp?b=1&s=612x612&w=0&k=20&c=1gghq9Amfk9zKYNNXKc19ojrE6Vr7532Qy6nfD8Jixw=",
        priceInRupees: [30000, 150000],
        details: `
        We specialize in developing cross-platform applications that seamlessly function across 
multiple operating systems. Our expertise spans a range of frameworks, including:
 React Native: Leveraging JavaScript and React, this framework allows for efficient 
development of high-performance mobile apps.
 Flutter: Built with Dart, Flutter offers exceptional performance and a rich set of predesigned widgets for visually appealing apps.
 Xamarin: Utilizing C# and .NET, Xamarin enables code sharing between iOS and 
Android platforms.
 Ionic: Based on web technologies (HTML, CSS, and JavaScript), Ionic provides 
flexibility for building hybrid and Progressive Web Apps (PWAs)`,
      },
    ],
  },
  {
    label: "Artificial Intelligence",
    subServices: [
      {
        id: 6,
        name: "AI Solutions",
        description:
          "We specialize in developing cutting-edge artificial intelligence solutions, specializing in text generation, image and video creation, and advanced machine learning techniques.",
        image:
          "https://plus.unsplash.com/premium_photo-1701113010437-1709c96aa539?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YXJ0aWZpY2lhbCUyMGludGVsbGlnZW5jZSUyMHNlcnZpY2VzJTIwYmx1ZSUyMHRoZW1lfGVufDB8fDB8fHww",
        priceInRupees: [50000, 250000],
        details: `
       Our expertise lies in harnessing the power of artificial intelligence to create innovative solutions. 
We specialize in:
 Text Generation and Chatbots: Developing advanced language models and 
conversational AI systems.
 Image and Video Generation: Creating AI-powered tools for generating realistic and 
creative visual content.
 Generative Adversarial Networks (GANs): Building sophisticated models for 
generating realistic data.
 Transformer Models: Utilizing advanced neural network architectures for various AI 
tasks.
`,
      },
    ],
  },
  {
    label: "Machine Learning",
    subServices: [
      {
        id: 7,
        name: "ML Models",
        description:
          "We specialize in building and deploying cutting-edge machine learning models using industry-leading frameworks and libraries",
        image:
          "https://plus.unsplash.com/premium_photo-1679957333019-1d2715e22c96?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bWFjaGluZSUyMGxlYXJuaW5nJTIwc2VydmljZXMlMjBibHVlJTIwdGhlbWV8ZW58MHx8MHx8fDA%3D",
        priceInRupees: [20000, 200000],
        details: `
        Our expertise lies in developing sophisticated machine learning solutions. We leverage a diverse 
range of frameworks and libraries to tackle complex problems, including:
 TensorFlow: A versatile platform for building and deploying large-scale machine 
learning models.
 PyTorch: Known for its flexibility and dynamic computation graphs, ideal for research 
and rapid prototyping.
 Keras: A high-level API simplifying the creation of neural networks.
 scikit-learn: A comprehensive library for classical machine learning algorithms.
 Apache Spark MLlib: A scalable machine learning library for large-scale data 
processing.
 XGBoost: A gradient boosting library renowned for its performance.
 H2O.ai: An open-source platform supporting various machine learning algorithms and 
AutoML.
 Fast.ai: A library built on PyTorch for rapid deep learning development`,
      },
    ],
  },
  {
    label: "Game Development",
    subServices: [
      {
        id: 8,
        name: "Game Development",
        description:
          "We specialize in creating immersive gaming experiences using industry-leading engines like Unity and Unreal Engine.",
        image:
          "https://plus.unsplash.com/premium_photo-1720753535246-97dfc9d3283e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Z2FtZSUyMGRldmVsb3BtZW50JTIwc2VydmljZXMlMjBibHVlJTIwdGhlbWV8ZW58MHx8MHx8fDA%3D",
        priceInRupees: [30000, 130000],
        details: `
         We excel in game development, utilizing powerful engines to bring games to life across various 
platforms. Our expertise includes:
 Unity: A versatile engine for crafting 2D and 3D games, supporting multiple platforms 
with a vast community and asset store.
 Unreal Engine: Renowned for stunning visuals and complex gameplay, ideal for highend games with a focus on advanced graphics and scripting.`,
      },
    ],
  },
];

const conversionRate = 278;

const Services = () => {
  const [selectedTab, setSelectedTab] = useState(0);
  const [priceStates, setPriceStates] = useState({});
  const [scrollPosition, setScrollPosition] = useState(0);
  const scrollRef = useRef(null);
  const [openDialog, setOpenDialog] = useState(false);
  const [selectedService, setSelectedService] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();

  const handleChange = (event, newValue) => {
    setSelectedTab(newValue);
  };

  const handlePriceToggle = (index) => {
    setPriceStates((prev) => ({
      ...prev,
      [index]: prev[index] === "INR" ? "USD" : "INR",
    }));
  };
  const convertToUSD = (price) => {
    return (price / conversionRate).toFixed(2);
  };
  const handleScroll = (direction) => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;

      if (direction === "left") {
        scrollRef.current.scrollTo({
          left: scrollLeft - clientWidth,
          behavior: "smooth",
        });
      } else if (direction === "right") {
        scrollRef.current.scrollTo({
          left: scrollLeft + clientWidth,
          behavior: "smooth",
        });
      }
    }
  };

  useEffect(() => {
    const handleScrollUpdate = () => {
      if (scrollRef.current) {
        setScrollPosition(scrollRef.current.scrollLeft);
      }
    };

    if (scrollRef.current) {
      scrollRef.current.addEventListener("scroll", handleScrollUpdate);
    }

    return () => {
      if (scrollRef.current) {
        scrollRef.current.removeEventListener("scroll", handleScrollUpdate);
      }
    };
  }, []);

  const handleOpenDialog = (service) => {
    setSelectedService(service);
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
    setSelectedService(null);
  };
  const [showTypeform, setShowTypeform] = useState(false);
  useEffect(() => {
    if (showTypeform) {
      const script = document.createElement("script");
      script.src = "//embed.typeform.com/next/embed.js";
      script.async = true;
      document.body.appendChild(script);
      return () => {
        document.body.removeChild(script);
      };
    }
  }, [showTypeform]);
  const handleButtonClick = () => {
    setShowTypeform(true);
  };
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const StyledBox = styled(Box)`
    border-radius: 50px;
    overflow: hidden;
    background-color: #283162;
    width: 80%;
    margin: 0 auto;
    padding-top: 20px;
    margin-top: 50px;
    height: 530px;

    @media (max-width: 768px) {
      height: auto; /* Adjust the height for smaller screens */
      padding-top: 10px;
    }
  `;

  const StyledGrid = styled(Grid)`
    width: 90%;
    margin-left: 70px;

    @media (max-width: 768px) {
      width: 80%;
      text-align: center;
      margin-left: 10px;
      justify-content: center;
    }
  `;

  const StyledTypography = styled(Typography)`
    font-weight: bold;
    margin-bottom: 16px;
    margin-left: 50px;
    text-align: center;
    color: white;

    @media (max-width: 768px) {
      font-size: 24px;
      margin-bottom: 12px;
      margin-left: 20px;
    }
  `;

  const StyledImage = styled.img`
    width: 80%;
    height: 400px;
    border-radius: 8px;
    margin-top: 20px;
    margin-left: 50px;
    @media (max-width: 768px) {
      margin-left: 20px;
      width: 90 %; /* Make the image take full width on smaller screens */
      height: 100; /* Maintain aspect ratio */
    }
  `;

  const StylBox = styled(Box)`
    border-radius: 20px;
    overflow: hidden;
    background-color: #f4f6fc;
    width: 80%;
    margin: 0 auto;
    padding-top: 20px;
    margin-top: 50px;
    height: 600px;
    @media (max-width: 768px) {
      width: 85%;
      height: 790px;
      margin-top: 20px;
      padding-top: 10px;
    }
  `;

  const StyledGridContainer = styled(Grid)`
    width: 100%;
  `;

  const StyledGridItem = styled(Grid)`
    img {
      width: 100%;
      height: 660px;
      margin-right: 50px;
      margin-top: -60px;
      @media (max-width: 768px) {
        height: 400px;
        border-radius: 5px;
        width: 100%;
      }
    }
  `;

  const StyleTypography = styled(Typography)`
    font-weight: bold;
    margin-bottom: 16px;
    color:black @media (max-width: 768px) {
      font-size: 24px;
      margin-bottom: 12px;
      margin-left: 10px;
    }
  `;

  const StyledBodyTypography = styled(Typography)`
    margin-bottom: 24px;
    color: black;
    font-weight: bold;
    @media (max-width: 768px) {
      margin-bottom: 16px;
      font-size: 14px;
      margin-left: 10px;
    }
  `;

  const StyledList = styled.ul`
    list-style: none;
    padding-left: 0;
    margin-bottom: 24px;

    @media (max-width: 768px) {
      margin-bottom: 16px;
      margin-left: 10px;
    }
  `;

  const StyledListItem = styled.li`
    display: flex;
    align-items: center;
    margin-bottom: 16px;

    @media (max-width: 768px) {
      margin-bottom: 12px;
      margin-left: 10px;
    }
  `;

  const CheckMark = styled(Box)`
    padding: 10px;

    @media (max-width: 768px) {
      font-size: 10px;
    }
  `;

  const StyledButton = styled(Button)`
    background-color: #0062ff;
    color: #fff;
    text-transform: none;
    padding: 12px 24px;
    border-radius: 8px;
    margin-top: 20px;

    @media (max-width: 768px) {
      font-size: 14px;
      margin-left: 60px;
    }
  `;

  const StyledCard = styled(Card)`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 400px;
    border-radius: 20px;
    overflow: hidden;
    width: 85%;
    color: white;
    margin-left: 20px;
    @media (max-width: 768px) {
      height: 470px;
      width: 105%;
      margin-left: 0px;
    }
  `;

  const StyledCardContent = styled(CardContent)`
    text-align: center;
    padding: 16px;
    flex: 1;
    background-color: white;
    font-size: 20px;

    @media (max-width: 768px) {
      padding: 8px;
      font-size: 16px;
    }
  `;

  const StyledDescription = styled(Typography)`
    color: black;
    font-size: 13px;

    @media (max-width: 768px) {
      font-size: 12px;
    }
  `;

  const PriceTypography = styled(Typography)`
    cursor: pointer;
    color: black;
    font-weight: boldest;
    margin-right: 5px;

    @media (max-width: 768px) {
      font-size: 14px;
    }
  `;

  const Boxes = styled(Box)`
    background-color: #283162;
    width: 80%;
    margin: 0 auto;
    border-top-left-radius: 50px;
    border-top-right-radius: 50px;
    overflow: hidden;
    margin-bottom: 50pxpx;
    height: 560px;
    margin-top: 0px;
    position: relative;
    margin-top: 50px;
    z-index: 2;
    z-index: 5;
    padding-top: 50px;
    opacity: 0.9;
    @media (max-width: 768px) {
      width: 85%;
      height: 650px;
      padding-top: 10px;
    }
  `;
  const StyledTabs = styled(Tabs)`
    border-bottom: 1px solid #fff;
    color: white;
    justify-content: center;

    @media (max-width: 600px) {
      .MuiTabs-flexContainer {
        justify-content: space-around; /* Adjust the tab spacing on smaller screens */
      }

      .MuiTab-root {
        font-size: 0.8rem; /* Reduce font size on smaller screens */
        min-width: auto; /* Allow tabs to be narrower */
      }

      .MuiTabs-scrollButtons {
        display: none; /* Hide scroll buttons on mobile */
      }
    }
  `;
  return (
    <>
      <Boxes>
        <StyledTabs
          value={selectedTab}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons="auto"
          aria-label="service tabs"
          indicatorColor="primary"
          textColor="inherit"
        >
          {services.map((service, index) => (
            <Tab key={index} label={service.label} />
          ))}
        </StyledTabs>

        <Paper
          style={{
            padding: "16px",
            marginTop: "16px",
            position: "relative",
            backgroundColor: "#283162",
          }}
        >
          {selectedTab === 0 && (
            <>
              <IconButton
                onClick={() => handleScroll("left")}
                style={{
                  position: "absolute",
                  left: "10px",
                  top: "50%",
                  transform: "translateY(-50%)",
                  zIndex: 1000,
                  backgroundColor: "white",
                  color: "black",
                }}
                disabled={scrollPosition <= 0}
              >
                <ArrowBackIosIcon />
              </IconButton>

              <div
                ref={scrollRef}
                style={{
                  display: "flex",
                  overflowX: "scroll",
                  overflowY: "hidden",
                  scrollbarWidth: "none",
                  msOverflowStyle: "none",
                }}
                className="scroll-container"
              >
                {/* Your content goes here */}
              </div>

              <IconButton
                onClick={() => handleScroll("right")}
                style={{
                  overflowX: "hidden",
                  overflowY: "hidden",
                  position: "absolute",
                  right: "10px",
                  top: "50%",
                  transform: "translateY(-50%)",
                  zIndex: 1000,
                  backgroundColor: "white",
                  color: "black",
                }}
                disabled={
                  scrollPosition >=
                  scrollRef.current?.scrollWidth -
                    scrollRef.current?.clientWidth
                }
              >
                <ArrowForwardIosIcon />
              </IconButton>
            </>
          )}
          <Grid
            container
            spacing={2}
            ref={scrollRef}
            style={{
              overflowX: "hidden",
              scrollBehavior: "smooth",
              display: "flex",
              flexWrap: "nowrap",
            }}
          >
            {services[selectedTab].subServices.length > 0 ? (
              services[selectedTab].subServices.map((subService, index) => (
                <Grid
                  item
                  xs={12}
                  sm={6}
                  md={4}
                  key={index}
                  style={{ flex: "0 0 auto" }}
                >
                  <StyledCard>
                    {subService.image ? (
                      <CardMedia
                        component="img"
                        style={{ width: "120%", height: "150px" }}
                        image={subService.image}
                        alt={subService.name || "Image"}
                      />
                    ) : (
                      <Box
                        style={{
                          width: "80%",
                          height: "180px",
                          backgroundColor: "white",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <Typography variant="body2" style={{ color: "#333" }}>
                          No Image Available
                        </Typography>
                      </Box>
                    )}

                    <StyledCardContent>
                      <Typography
                        style={{
                          color: "black",
                          fontSize: "16px",
                          fontWeight: "bold",
                        }}
                      >
                        {subService.name || "No Name Provided"}
                      </Typography>
                      <StyledDescription>
                        {subService.description || "No Description Provided"}
                      </StyledDescription>
                      <hr
                        style={{
                          border: "none",
                          height: "1px",
                          backgroundColor: "#ddd",
                          marginTop: "10px",
                        }}
                      />

                      <PriceTypography
                        variant="h6"
                        onClick={() => handlePriceToggle(index)}
                      >
                        {priceStates[index] === "INR"
                          ? `Rs.${subService.priceInRupees[0]} - ${subService.priceInRupees[1]}`
                          : `$${convertToUSD(
                              subService.priceInRupees[0]
                            )} - ${convertToUSD(subService.priceInRupees[1])}`}
                      </PriceTypography>
                      <Button
                        variant="outlined"
                        color="secondary"
                        onClick={() => handleOpenDialog(subService)}
                        style={{ color: "blue", borderColor: "white" }}
                      >
                        View Details ↗
                      </Button>
                    </StyledCardContent>
                  </StyledCard>
                </Grid>
              ))
            ) : (
              <Typography
                variant="body2"
                style={{ textAlign: "center", color: "white", width: "100%" }}
              >
                No services available.
              </Typography>
            )}
          </Grid>

          <Typography
            style={{ color: "white", textAlign: "center", marginTop: "40px" }}
          >
            <h4>
              please note that pricing may vary based on the project's scope and
              specific requirements
            </h4>
          </Typography>
        </Paper>
      </Boxes>

      {/* Modal for service details */}
      <Dialog
        style={{
          color: "black",
          opacity: 0.9,
          backgroundColor: "darkgray",
        }}
        open={openDialog}
        onClose={handleCloseDialog}
        aria-labelledby="service-details-dialog"
        aria-describedby="service-details-description"
        PaperProps={{
          style: {
            borderRadius: "30px", // Apply borderRadius directly to the Paper component
          },
        }}
      >
        <DialogTitle
          id="service-details-dialog"
          sx={{
            backgroundColor: "#283162",
            color: "white",
            textAlign: "center",
            padding: "16px 24px",
          }}
        >
          {selectedService?.name}
        </DialogTitle>
        <DialogContent
          sx={{
            padding: "24px",
            color: "black",
          }}
        >
          <DialogContentText
            id="service-details-description"
            sx={{
              fontSize: "16px",
              lineHeight: "1.5",
              color: "black",
            }}
          >
            {selectedService?.details}
          </DialogContentText>
        </DialogContent>
        <DialogActions
          sx={{
            justifyContent: "center",
            padding: "16px",
          }}
        >
          <Button
            variant="contained"
            onClick={handleCloseDialog}
            color="primary"
            style={{
              borderRadius: "20px",
              padding: "8px 16px",
              color: "#283162",
            }}
          >
            Close
          </Button>
          <Button variant="contained" onClick={handleButtonClick}>
            get Started
          </Button>
          {showTypeform && (
            <div data-tf-live="01J5WM2DJ8YF96F641KQH6S38N"></div>
          )}
        </DialogActions>
      </Dialog>

      <StylBox>
        <StyledGridContainer
          container
          alignItems="center"
          justifyContent="center"
          spacing={4}
        >
          {/* Left Section */}
          <StyledGridItem item xs={12} md={6}>
            <img src={softwarehouse} alt="Software House" />
          </StyledGridItem>

          {/* Right Section */}
          <StyledGridItem item xs={12} md={6}>
            <StyleTypography
              variant="h4"
              style={{
                fontWeight: "bolder",
                justifyContent: "center",
                marginBottom: "20px",
              }}
            >
              Get a Fair Price for Your Project and Start Today
            </StyleTypography>
            <StyledBodyTypography variant="body1">
              Contact us to receive a customized quote and begin your project
              with confidence.
            </StyledBodyTypography>
            <StyledList>
              <StyledListItem>
                <CheckMark component="span">✔</CheckMark>
                <StyledBodyTypography variant="body1">
                  Tailored services and products designed to meet your specific
                  project requirements and objectives.
                </StyledBodyTypography>
              </StyledListItem>
              <StyledListItem>
                <CheckMark component="span">✔</CheckMark>
                <StyledBodyTypography variant="body1">
                  Professional guidance and insights to ensure your project is
                  efficiently planned and executed.
                </StyledBodyTypography>
              </StyledListItem>
              <StyledListItem>
                <CheckMark component="span">✔</CheckMark>
                <StyledBodyTypography variant="body1">
                  Fair and transparent pricing based on the scope and needs of
                  your project, providing value and quality.
                </StyledBodyTypography>
              </StyledListItem>
            </StyledList>
            <StyledButton variant="contained" onClick={handleButtonClick}>
              Get Started ↗
            </StyledButton>
            {showTypeform && (
              <div data-tf-live="01J5WKSVP8WTV6RGH71GCGV30K"></div>
            )}
          </StyledGridItem>
        </StyledGridContainer>
      </StylBox>
      <StyledBox>
        <StyledGrid container alignItems="center" spacing={4}>
          {/* Left Section */}
          <Grid item xs={12} md={6}>
            <StyledTypography variant="h4">
              What our customers say
            </StyledTypography>
            <StyledImage src={femaleprofile} alt="female profile" />
          </Grid>

          {/* Right Section */}
          <Grid item xs={12} md={6}>
            <Rating
              name="customer-rating"
              value={5}
              readOnly
              precision={0.5}
              style={{}}
            />
            <h1 style={{ color: "white" }}>Tanisha Nasir</h1>
            <li
              style={{
                display: "flex",
                alignItems: "center",
                marginBottom: "16px",
              }}
            >
              <Typography
                style={{
                  color: "white",

                  fontSize: "1.2rem",
                  fontWeight: "300",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  lineHeight: "2",
                  height: "100%",
                  marginRight: "50px",
                }}
              >
                "Our experience with FusionFlare Technologies was exceptional.
                The customer service was highly responsive and attentive, while
                the project outcomes exceeded our expectations in quality and
                efficiency. We are thoroughly impressed with their
                professionalism and dedication."
              </Typography>
            </li>
          </Grid>
        </StyledGrid>
      </StyledBox>
      <hr style={{ marginTop: "60px" }}></hr>
      <Box style={{ marginTop: "40px" }}>
        <Typography style={{ textAlign: "center" }}>
          <p>
            &copy; {new Date().getFullYear()} 2023 FusionFlareTech. All rights
            reserved.
          </p>
        </Typography>
      </Box>
    </>
  );
};
export default Services;
