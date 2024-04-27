const WedData = [
  { id: 1, data: "Social Media Management", link: "#" },
  { id: 2, data: "Social Media Marketing", link: "#" },
  { id: 3, data: "SEO Blogs", link: "#" },
  { id: 4, data: "Branding & Design", link: "#" },
  { id: 5, data: "Resell", link: "#" },
  { id: 6, data: "Referall Scheme", link: "#" },
];
const divIds = [
  { id: "#Break", name: "Break" },
  { id: "#Choose", name: "Choose" },
  { id: "#StatPage", name: "StatPage" },
  { id: "#Pricing", name: "Pricing" },
  { id: "#Reviews", name: "Reviews" },
  { id: "#Platforms", name: "Platforms" },
  { id: "#FAQs", name: "FAQs" },
];
const animationData = [
  {
    id: 0,
    afters: "scale-100 opacity-100",
    befores: "scale-x-0 opacity-0",
    duration: "duration-1000",
  },
  {
    id: 1,
    afters: "translate-y-0 opacity-100",
    befores: "translate-y-36 opacity-0",
    duration: "duration-1000",
  },
  {
    id: 2,
    afters: "translate-y-0",
    befores: "translate-y-64",
    duration: "duration-700",
  },
  {
    id: 3,
    afters: "translate-x-0 scale-100 opacity-100",
    befores: "-translate-x-64 scale-75 opacity-10",
    duration: "duration-700",
  },
  {
    id: 4,
    afters: "translate-x-0 scale-100 opacity-100",
    befores: "translate-x-64 scale-75 opacity-10",
    duration: "duration-700",
  },
  {
    id: 5,
    afters: "translate-x-0 scale-100 opacity-100",
    befores: "translate-x-14 scale-50 opacity-10",
    duration: "duration-700",
  },
];

const slideShow = [
  { src: "/assets/slack.jpg", alt: "Slack" },
  { src: "/assets/fbads.jpg", alt: "Disney" },
  { src: "/assets/Analytics.jpg", alt: "Google Analytics" },
  { src: "/assets/wp.jpg", alt: "WordPress" },
  { src: "/assets/semrush.jpg", alt: "SemRush" },
];
const qnaData = [
  {
    question: "What Is social media management?",
    answer:
      "Social media management involves creating post visuals, captions and hashtags and scheduling content to be posted on social media platforms such as Facebook, Instagram, Twitter, and LinkedIn.",
  },
  {
    question: "Why do I need social media management for my business?",
    answer:
      "Having effective social media management is crucial for establishing and sustaining an online presence, connecting with your audience, and expanding your brand. Furthermore, it plays a key role in raising brand awareness, driving traffic to your website, generating leads, and ultimately increasing sales.",
  },
  {
    question: "What services do you offer as part of social media management? ",
    answer:
      "First, we design visuals, craft captions, curate hashtags, and schedule posts upon client approval. Additionally, our social media management services encompass content creation, scheduling, analytics, and tailored strategy development.",
  },
  {
    question: "Can I see examples of the content you create?",
    answer:
      "Absolutely! We'd be happy to share examples of our previous work to give you an idea of the quality and style of content we create for our clients.",
  },
  {
    question: "Can I provide input or feedback on the content you create?",
    answer:
      "Yes, we encourage collaboration and welcome your input and feedback on the content we create. Your satisfaction is our priority, and we'll work closely with you to ensure the content aligns with your brand voice and goals.",
  },
  {
    question: "Do you offer social media advertising services?",
    answer:
      "Yes, we provide social media advertising services to help boost your reach, engagement, and conversions on platforms like Facebook & Instagram. We'll develop targeted ad campaigns tailored to your objectives and budget.",
  },
  {
    question:
      "How do I get started with your social media management services?",
    answer:
      "Getting started is easy! Simply reach out to us via BOOK CALL or email using the contact us link to schedule a consultation. We'll discuss your goals, needs, and budget, and tailor a social media management plan that works for you.",
  },
  {
    question:
      "What sets your social media management services apart from others?",
    answer:
      "Our personalised approach, attention to detail, commitment to client satisfaction, and results-driven strategies set us apart. We prioritise building long-term partnerships with our clients and helping them achieve their social media goals.",
  },
];
const reviews = [
  {
    stars: 5,
    content:
      "'Been with 49 Pound Social for 2 years now. First, they set up our website, then handled our socials. Now, they're onto SEO and blogs. Great team to work with, I highly recommend using them for budget and quality.'",
    name: "MICK ELLIS",
    role: "Taxi Company Owner",
  },
  {
    stars: 5,
    content:
      "'Thanks to 49, our beauty academy's online presence has soared! From building our stunning website to expertly managing social media and meta ads, they've been instrumental in our success. Couldn't be happier!'",
    name: "DANIELLE DOWNES",
    role: "Beauty Academy owner",
  },
  {
    stars: 5,
    content:
      "'Super happy with the social media management and website they set up for our cleaning business! Quick responses, awesome ideas, and they nailed our style. Our online presence is top-notch now. Definitely recommend!'",
    name: "WALTER FIELDS",
    role: "Student",
  },
  {
    stars: 5,
    content:
      "'Big shoutout for their outstanding work! They not only created an amazing website for our valeting business but also handled all our social media management and facebook ads. Their expertise has been invaluable.'",
    name: "EDDIE",
    role: "Car Valet Owner",
  },
];

export { WedData, animationData, reviews, slideShow, qnaData, divIds };
