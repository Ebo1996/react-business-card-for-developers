export const teamMembers = [
  {
    id: 1,
    category: "development",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80",
    alt: "Michael Chen",
    name: "Michael Chen",
    position: "Senior Developer",
    company: "TechSolutions Inc.",
    email: "michael.chen@techsolutions.com",
    phone: "+1 (555) 123-4567",
    location: "San Francisco, CA",
    skills: ["JavaScript", "React", "Node.js"],
    linkedin: "https://linkedin.com/in/michael-chen",
    github: "https://github.com/michael-chen",
    twitter: "https://twitter.com/michael-chen"
  },
  {
    id: 2,
    category: "design",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA==&auto=format&fit=crop&w=100&q=80",
    alt: "Sarah Johnson",
    name: "Sarah Johnson",
    position: "UX/UI Designer",
    company: "CreativeMind Studios",
    email: "sarah@creativemind.com",
    phone: "+1 (555) 987-6543",
    location: "New York, NY",
    skills: ["UI Design", "Illustration", "Prototyping"],
    linkedin: "https://linkedin.com/in/sarah-johnson",
    github: "https://github.com/sarah-johnson",
    twitter: "https://twitter.com/sarah-johnson"
  },
  {
    id: 3,
    category: "management",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80",
    alt: "David Wilson",
    name: "David Wilson",
    position: "Project Manager",
    company: "NextGen Innovations",
    email: "david.wilson@nextgen.com",
    phone: "+1 (444) 555-6789",
    location: "Austin, TX",
    skills: ["Agile", "Scrum", "Product Management"],
    linkedin: "https://linkedin.com/in/david-wilson",
    github: "https://github.com/david-wilson",
    twitter: "https://twitter.com/david-wilson"
  },
  {
    id: 4,
    category: "development",
    image: "https://images.unsplash.com/photo-1614289371518-722f2615943d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80",
    alt: "Emma Rodriguez",
    name: "Emma Rodriguez",
    position: "Frontend Developer",
    company: "WebCraft Inc.",
    email: "emma@webcraft.com",
    phone: "+1 (777) 888-9999",
    location: "Seattle, WA",
    skills: ["Vue.js", "CSS", "Responsive Design"],
    linkedin: "https://linkedin.com/in/emma-rodriguez",
    github: "https://github.com/emma-rodriguez",
    twitter: "https://twitter.com/emma-rodriguez"
  },
  {
    id: 5,
    category: "design",
    image: "https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80",
    alt: "James Anderson",
    name: "James Anderson",
    position: "Graphic Designer",
    company: "DesignHub Agency",
    email: "james@designhub.com",
    phone: "+1 (333) 444-5555",
    location: "Chicago, IL",
    skills: ["Branding", "Typography", "Print Design"],
    linkedin: "https://linkedin.com/in/james-anderson",
    github: "https://github.com/james-anderson",
    twitter: "https://twitter.com/james-anderson"
  },
  {
    id: 6,
    category: "management",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80",
    alt: "Sophia Williams",
    name: "Sophia Williams",
    position: "Product Manager",
    company: "InnovateTech",
    email: "sophia@innovatetech.com",
    phone: "+1 (222) 333-4444",
    location: "Boston, MA",
    skills: ["Product Strategy", "Analytics", "UX Research"],
    linkedin: "https://linkedin.com/in/sophia-williams",
    github: "https://github.com/sophia-williams",
    twitter: "https://twitter.com/sophia-williams"
  }
];

export const getCategoryColors = (id) => {
  const colors = {
    1: ['#ff7e5f', '#feb47b'],
    2: ['#00c9ff', '#92fe9d'],
    3: ['#f09819', '#edde5d'],
    4: ['#834d9b', '#d04ed6'],
    5: ['#4b6cb7', '#182848'],
    6: ['#fd746c', '#ff9068']
  };
  return colors[id] || colors[1];
};

