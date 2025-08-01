const getAvatarFromName = (name) =>
  `https://api.dicebear.com/9.x/fun-emoji/svg?seed=${encodeURIComponent(name)}`;

export const dummyEvents = [
  {
    id: 1,
    title: "Hack the Future",
    description: "48hr AI & ML Hackathon",
    location: "Online",
    date: "July 25–27, 2025",
    eventType: "Hackathon",
    teamSize: "3/5",
    skillsNeeded: ["Machine Learning", "React", "APIs"],
    creatorNote: "Looking for someone who’s good with ML models 💡",
    createdBy: "Aryan Dev",
    creatorAvatar: getAvatarFromName("Aryan Dev"),
    techStack: ["React", "Node.js", "Python"],
    image: "/event-images/hackfuture.jpeg.jpeg",
    tags: ["AI", "Remote", "TeamMatch"],
    link: "#",
  },
  {
    id: 2,
    title: "UI Sprint 2.0",
    description: "Design fast, build faster.",
    location: "Hyderabad, India",
    date: "Aug 5–6, 2025",
    eventType: "UI Design Jam",
    teamSize: "2/4",
    skillsNeeded: ["Figma", "Framer", "Tailwind CSS"],
    creatorNote: "Need a Framer expert for animation magic!",
    createdBy: "Nikita Rao",
    creatorAvatar: getAvatarFromName("Nikita Rao"),
    techStack: ["Figma", "Framer", "HTML"],
    image: "/event-images/uisprint.jpeg.jpeg",
    tags: ["Design", "UI/UX", "InPerson"],
    link: "#",
  },
  {
    id: 3,
    title: "Web3 Warriors",
    description: "Solidity + dApps weekend warzone",
    location: "Bangalore, India",
    date: "Sept 1–3, 2025",
    eventType: "Blockchain Sprint",
    teamSize: "4/5",
    skillsNeeded: ["Solidity", "Next.js", "Ethers.js"],
    creatorNote: "We’ve got a solid backend, just need UI support!",
    createdBy: "Kabir Jain",
    creatorAvatar: getAvatarFromName("Kabir Jain"),
    techStack: ["Solidity", "Next.js", "Hardhat"],
    image: "/event-images/web3warriors.jpeg.jpeg",
    tags: ["Web3", "Solidity", "Hybrid"],
    link: "#",
  },
  {
    id: 4,
    title: "AI in Healthcare",
    description: "Solving real-world problems using AI",
    location: "Online",
    date: "July 28–30, 2025",
    eventType: "Research Hackathon",
    teamSize: "1/3",
    skillsNeeded: ["Data Science", "TensorFlow", "UI/UX"],
    creatorNote: "Need someone passionate about impact 🚑",
    createdBy: "Sarah Mistry",
    creatorAvatar: getAvatarFromName("Sarah Mistry"),
    techStack: ["Python", "TensorFlow", "Streamlit"],
    image: "/event-images/aihealth.jpeg.jpeg",
    tags: ["Health", "AI", "Remote"],
    link: "#",
  },
  {
    id: 5,
    title: "Green Code Hack",
    description: "Build climate-focused apps 🌍",
    location: "Remote",
    date: "Aug 15–17, 2025",
    eventType: "Sustainability Hack",
    teamSize: "2/5",
    skillsNeeded: ["Node.js", "MongoDB", "Svelte"],
    creatorNote: "Design-first thinkers welcome!",
    createdBy: "Amar Bhatt",
    creatorAvatar: getAvatarFromName("Amar Bhatt"),
    techStack: ["Svelte", "MongoDB", "Node.js"],
    image: "/event-images/greencode.jpeg.jpeg",
    tags: ["Climate", "Remote", "Eco"],
    link: "#",
  },
  {
    id: 6,
    title: "Dev Clash 2025",
    description: "Competitive code battles 🔥",
    location: "Mumbai, India",
    date: "Aug 10, 2025",
    eventType: "Coding Contest",
    teamSize: "1/2",
    skillsNeeded: ["DSA", "C++", "Java"],
    creatorNote: "Fast fingers needed — leaderboard hype!",
    createdBy: "Kriti Arora",
    creatorAvatar: getAvatarFromName("Kriti Arora"),
    techStack: ["C++", "Python", "Java"],
    image: "/event-images/devclash.jpeg.jpeg",
    tags: ["DSA", "Competitive", "Offline"],
    link: "#",
  },
  {
    id: 7,
    title: "Startup Weekend",
    description: "Ideate. Pitch. Prototype.",
    location: "Delhi, India",
    date: "Sept 12–14, 2025",
    eventType: "Startup Jam",
    teamSize: "3/6",
    skillsNeeded: ["Pitching", "UI Design", "Rapid Prototyping"],
    creatorNote: "Need a hustler who can pitch like a boss",
    createdBy: "Ishaan Verma",
    creatorAvatar: getAvatarFromName("Ishaan Verma"),
    techStack: ["Figma", "Notion", "React"],
    image: "/event-images/startupweekend.jpeg.jpeg",
    tags: ["Startup", "Pitch", "InPerson"],
    link: "#",
  },
  {
    id: 8,
    title: "GameCraft Jam",
    description: "2D/3D game jam — 72 hrs",
    location: "Online",
    date: "Aug 25–28, 2025",
    eventType: "Game Jam",
    teamSize: "4/5",
    skillsNeeded: ["Unity", "C#", "Game Design"],
    creatorNote: "Our artist’s insane. Just need a Unity wizard 🎮",
    createdBy: "Tanya Reddy",
    creatorAvatar: getAvatarFromName("Tanya Reddy"),
    techStack: ["Unity", "C#", "Blender"],
    image: "/event-images/gamejam.jpeg.jpeg",
    tags: ["Gaming", "Unity", "Remote"],
    link: "#",
  },
  {
    id: 9,
    title: "UXathon",
    description: "Solve UX problems in under 24hrs",
    location: "Chennai, India",
    date: "Aug 3, 2025",
    eventType: "UX Hackathon",
    teamSize: "2/3",
    skillsNeeded: ["User Research", "Wireframing", "Prototyping"],
    creatorNote: "Looking for a strong empathy-driven designer",
    createdBy: "Manan Kaur",
    creatorAvatar: getAvatarFromName("Manan Kaur"),
    techStack: ["Figma", "Miro", "Notion"],
    image: "/event-images/uxathon.jpeg.jpeg",
    tags: ["UX", "Design", "FastHack"],
    link: "#",
  },
  {
    id: 10,
    title: "Voice AI Build-Off",
    description: "Create apps using voice interaction",
    location: "Remote",
    date: "July 20–22, 2025",
    eventType: "AI Hack",
    teamSize: "1/4",
    skillsNeeded: ["Voice APIs", "React Native", "NLP"],
    creatorNote: "Need someone with chatbot/NLP experience",
    createdBy: "Zoya Sheikh",
    creatorAvatar: getAvatarFromName("Zoya Sheikh"),
    techStack: ["React Native", "Dialogflow", "Express.js"],
    image: "/event-images/voiceai.jpeg.jpeg",
    tags: ["Voice", "AI", "Remote"],
    link: "#",
  },
];
