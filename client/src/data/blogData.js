import langevinContent from "../content/blog/langevin-fokker-planck.md?raw";
import langevinPdf from "../assets/blog/langevin-fokker-planck.pdf";

const blogPosts = [
  {
    slug: "langevin-fokker-planck",
    title: "Langevin Equation and Fokker–Planck Equation",
    subtitle: "A Student-Friendly Rewrite with Step-by-Step Derivations",
    date: "2026-05-26",
    tags: ["Stochastic Processes", "Statistical Physics", "Notes"],
    excerpt:
      "A step-by-step derivation from Brownian motion to the Langevin and Fokker–Planck equations, including the Kramers–Moyal expansion, Wiener and Ornstein–Uhlenbeck processes, and stationary distributions.",
    readTime: "30 min",
    content: langevinContent,
    pdfUrl: langevinPdf,
  },
];

export function getAllPosts() {
  return [...blogPosts].sort(
    (a, b) => new Date(b.date) - new Date(a.date),
  );
}

export function getPostBySlug(slug) {
  return blogPosts.find((post) => post.slug === slug) ?? null;
}

export function getLatestPosts(n = 1) {
  return getAllPosts().slice(0, n);
}
