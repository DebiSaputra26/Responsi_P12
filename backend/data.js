const educationHistory = [
  {
    id: 1,
    period: "2023 - Sekarang",
    institution: "Universitas Amikom Yogyakarta",
    major: "S1 Teknik Informatika",
  },
  {
    id: 2,
    period: "2020 - 2023",
    institution: "SMK BINA MITRA",
    major: "TKR",
  },
];
const skills = [
  {
    name: "Vue.js",
    level: "LanjuMahir",
  },

  {
    name: "JavaScript",
    level: "Mahir",
  },

  {
    name: "Tailwind CSS",
    level: "Mahir",
  },
  {
    name: "Node.js",
    level: "Menengah",
  },
  {
    name: "Express.js",
    level: "Menengah",
  },
  {
    name: "PostgreSQL",
    level: "Menengah",
  },
  {
    name: "Git & GitHub",
    level: "Mahir",
  },
  {
    name: "HTML5 & CSS3",
    level: "Mahir",
  },
];
const projects = [
  {
    title: "Sistem Penjualan Sparepat Motor",
    description: "Project ini untuk membantu dalam sistem Penjualan Sparepat Motor ",
    image: "/images/sparepat.jpg",
    tech: ["C++"],
    link: "https://github.com/DebiSaputra26/Responsi_P12.git",
  },
  {
    title: "Toko Online",
    description: "Website e-commerce sederhana dengan Vue dan API backend.",
    image: "/images/shop.png",
    tech: ["Vue", "PHP", "MySQL"],
    link: "https://tokoku.netlify.app",
  },
];
module.exports = { educationHistory, skills, projects };
