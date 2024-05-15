import { BotMessageSquare } from "lucide-react";
import { BatteryCharging } from "lucide-react";
import { Fingerprint } from "lucide-react";
import { ShieldHalf } from "lucide-react";
import { PlugZap } from "lucide-react";
import { GlobeLock } from "lucide-react";
import { Linkedin } from "lucide-react";



import user1 from "../assets/profile-pictures/user1.jpg";
import user2 from "../assets/profile-pictures/user2.jpg";
import user3 from "../assets/profile-pictures/user3.jpg";
import user4 from "../assets/profile-pictures/user4.jpg";
import user5 from "../assets/profile-pictures/user5.jpg";
import user6 from "../assets/profile-pictures/user6.jpg";

export const navItems = [
  { label: "About", href: "#" },
  { label: "Find us", href: "#" },
  { label: "Features", href: "#" },
  { label: "Workflow", href: "#" },
  { label: "Pricing", href: "#" },
  { label: "Ratings", href: "#" },

];

export const testimonials = [
  {
    user: "John Doe",
    company: "Stellar Solutions",
    image: user1,
    text: "I am extremely satisfied with the services provided. The team was responsive, professional, and delivered results beyond my expectations.",
  },
  {
    user: "Jane Smith",
    company: "Blue Horizon Technologies",
    image: user2,
    text: "I couldn't be happier with the outcome of our project. The team's creativity and problem-solving skills were instrumental in bringing our vision to life",
  },
  {
    user: "David Johnson",
    company: "Quantum Innovations",
    image: user3,
    text: "Working with this company was a pleasure. Their attention to detail and commitment to excellence are commendable. I would highly recommend them to anyone looking for top-notch service.",
  },
  {
    user: "Ronee Brown",
    company: "Fusion Dynamics",
    image: user4,
    text: "Working with the team at XYZ Company was a game-changer for our project. Their attention to detail and innovative solutions helped us achieve our goals faster",
  },
  {
    user: "Michael Wilson",
    company: "Visionary Creations",
    image: user5,
    text: "I am amazed by the level of professionalism and dedication shown by the team. They were able to exceed our expectations and deliver outstanding results.",
  },
  {
    user: "Emily Davis",
    company: "Synergy Systems",
    image: user6,
    text: "The team went above and beyond to ensure our project was a success. Their expertise and dedication are unmatched. I look forward to working with them again in the future.",
  },
];

export const features = [
  {
    icon: <BotMessageSquare />,
    text: "Fast Charging",
    description:
      "Provide high-speed charging capabilities to reduce the time required for EVs to charge their batteries.",
  },
  {
    icon: <Fingerprint />,
    text: "Multiple Charging Ports",
    description:
      "Offer multiple charging ports to accommodate several vehicles simultaneously, increasing the station's efficiency and capacity.",
  },
  {
    icon: <ShieldHalf />,
    text: "Compatibility",
    description:
      "Ensure compatibility with various EV models and charging standards to cater to a wide range of customers.",
  },
  {
    icon: <BatteryCharging />,
    text: "Payment Options",
    description:
      "Provide flexible payment options such as credit/debit card payments, mobile payment apps, or subscription plans for charging services.",
  },
  {
    icon: <PlugZap />,
    text: "Remote Monitoring and Management",
    description:
      "Enable remote monitoring and management capabilities for station operators to track usage, perform diagnostics, and manage billing remotely.",
  },
  {
    icon: <GlobeLock />,
    text: "Safety Features",
    description:
      "Include safety features such as surge protection, overcurrent protection, and secure locking mechanisms to ensure safe charging experiences.",
  },
];

export const checklistItems = [
  {
    title: "Research and Planning",
    description:
      "Provide resources and guidance on market analysis, location selection, and regulatory requirements.",
  },
  {
    title: "Equipment Selection and Procurement",
    description:
      "Provide access to a range of charging equipment options, including charging stations, connectors, and ancillary components. ",
  },
  {
    title: "Installation and Setup",
    description:
      "Provide guidance on site preparation, electrical infrastructure requirements, and installation best practices.",
  },
  {
    title: "Operational Support and Maintenance",
    description:
      "Offer maintenance services or maintenance contracts to ensure that stations are kept in optimal working condition.",
  },
];

export const pricingOptions = [
  {
    title: "Standard",
    price: "₹3 Lakhs",
    features: [
      "Two charging booth",
      "One Year maintenance free",
      "Three year warranty",
      "No installation",
    ],
  },
  {
    title: "Pro",
    price: "₹5 Lakhs",
    features: [
      "Five charging booth",
      "Two year maintenance free",
      "Three year warranty",
      "Installation free",
    ],
  },
  {
    title: "Enterprise",
    price: "₹7 Lakhs",
    features: [
      "Seven charging booth",
      "Five year maintenance free",
      "Three year warranty",
      "Installation free",
    ],
  },
];

export const resourcesLinks = [

];

export const platformLinks = [

];

export const communityLinks = [

];
