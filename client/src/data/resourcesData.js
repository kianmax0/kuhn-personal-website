/** @typedef {'Formal Sciences'|'Natural Sciences'|'Engineering & Applied'|'Social Sciences'} DomainFamily */
/** @typedef {'101'|'Intermediate'|'Advanced'} ProficiencyLevel */

export const DOMAIN_FAMILIES = [
  "Formal Sciences",
  "Natural Sciences",
  "Engineering & Applied",
  "Social Sciences",
];

/** Map family -> subject codes shown in UI */
export const SUBJECTS_BY_FAMILY = {
  "Formal Sciences": ["MATH", "CS"],
  "Natural Sciences": ["BIO", "NEU"],
  "Engineering & Applied": ["EE"],
  "Social Sciences": ["ECON"],
};

/** subject code -> family (single primary family per subject) */
export const SUBJECT_TO_FAMILY = Object.fromEntries(
  DOMAIN_FAMILIES.flatMap((family) =>
    SUBJECTS_BY_FAMILY[family].map((s) => [s, family]),
  ),
);

export const FORMAT_GROUPS = {
  Text: ["Textbook", "Paper", "Blog/Article", "Cheatsheet"],
  "Video/Audio": ["Course", "Tutorial", "Podcast", "Talk/Lecture"],
  "Interactive/Tool": ["Website/Wiki", "Repo", "Simulator", "Software"],
};

/** Flat list of all format values for filters */
export const ALL_FORMATS = Object.values(FORMAT_GROUPS).flat();

export const PROFICIENCY_LEVELS = ["101", "Intermediate", "Advanced"];

/** Human labels for level chips */
export const LEVEL_LABELS = {
  "101": "101 / Beginner",
  Intermediate: "Intermediate",
  Advanced: "Advanced / Research",
};

/**
 * @returns {Array<{
 *   id: string,
 *   title: string,
 *   url: string,
 *   description?: string,
 *   subjects: string[],
 *   subtopics?: string[],
 *   formats: string[],
 *   level: ProficiencyLevel,
 *   language?: string,
 *   access?: string
 * }>}
 */
export const resources = [
  {
    id: "nma-cn",
    title: "Neuromatch Academy — Computational Neuroscience",
    url: "https://compneuro.neuromatch.io/",
    description:
      "Python-first comp neuro summer school: models, data, and links from spikes to behavior.",
    subjects: ["NEU", "CS"],
    subtopics: ["AI/ML"],
    formats: ["Course", "Website/Wiki"],
    level: "Intermediate",
    language: "en",
  },
  {
    id: "nma-dl",
    title: "Neuromatch Academy — Deep Learning",
    url: "https://deeplearning.neuromatch.io/",
    description:
      "Hands-on deep learning for neuroscience, with notebooks and a clear progression.",
    subjects: ["CS", "NEU"],
    subtopics: ["AI/ML"],
    formats: ["Course", "Website/Wiki"],
    level: "Intermediate",
    language: "en",
  },
  {
    id: "nma-ai",
    title: "Neuromatch Academy — AI (course hub)",
    url: "https://academy.neuromatch.io/",
    description:
      "Portal for Neuromatch tracks (incl. AI-related modules); pick your path and materials.",
    subjects: ["CS"],
    subtopics: ["AI/ML"],
    formats: ["Course", "Website/Wiki"],
    level: "Intermediate",
    language: "en",
  },
  {
    id: "mml-book",
    title: "Mathematics for Machine Learning (Deisenroth, Faisal, Ong)",
    url: "https://mml-book.com/",
    description:
      "Linear algebra, analytic geometry, and probability tailored to ML readers.",
    subjects: ["MATH", "CS"],
    subtopics: ["Linear Algebra", "Probability", "AI/ML"],
    formats: ["Textbook"],
    level: "Intermediate",
    language: "en",
  },
  {
    id: "berkeley-data100",
    title: "Berkeley DATA 100 — Principles and Techniques of Data Science",
    url: "https://ds100.org/",
    description:
      "Undergraduate data science: pandas, visualization, inference, and modeling at scale.",
    subjects: ["CS", "MATH"],
    subtopics: ["Probability", "AI/ML"],
    formats: ["Course", "Website/Wiki"],
    level: "Intermediate",
    language: "en",
  },
  {
    id: "hello-algo",
    title: "Hello Algorithm (hello-algo)",
    url: "https://www.hello-algo.com/en/",
    description:
      "Illustrated DSA tour in multiple languages—good for interviews and core CS fluency.",
    subjects: ["CS"],
    subtopics: ["Algorithm"],
    formats: ["Website/Wiki", "Repo"],
    level: "101",
    language: "en",
  },
  {
    id: "berkeley-cs189",
    title: "Berkeley CS 189 — Introduction to Machine Learning",
    url: "https://people.eecs.berkeley.edu/~jrs/189/",
    description:
      "Classic undergrad ML: theory, proofs, and assignments at Berkeley rigor.",
    subjects: ["CS", "MATH"],
    subtopics: ["AI/ML", "Probability"],
    formats: ["Course", "Talk/Lecture"],
    level: "Intermediate",
    language: "en",
  },
  {
    id: "wang-theoretical-neuroscience",
    title:
      "Theoretical Neuroscience: Understanding Cognition (Xiao-Jing Wang)",
    url: "https://mitpress.mit.edu/9780262351890/theoretical-neuroscience/",
    description:
      "Graduate-style circuits, dynamics, and cognition—bridging math and brain theory.",
    subjects: ["NEU", "MATH"],
    subtopics: [],
    formats: ["Textbook"],
    level: "Advanced",
    language: "en",
  },
  {
    id: "freecodecamp",
    title: "freeCodeCamp",
    url: "https://www.freecodecamp.org/",
    description:
      "Free certs and projects for web, data, and programming fundamentals at your pace.",
    subjects: ["CS"],
    subtopics: ["Systems"],
    formats: ["Course", "Tutorial", "Website/Wiki"],
    level: "101",
    language: "en",
  },
  {
    id: "kaggle-learn",
    title: "Kaggle Learn",
    url: "https://www.kaggle.com/learn",
    description:
      "Short micro-courses on Python, ML, SQL, and competitions—learn by doing.",
    subjects: ["CS"],
    subtopics: ["AI/ML"],
    formats: ["Course", "Tutorial", "Website/Wiki"],
    level: "101",
    language: "en",
  },
  {
    id: "leetcode",
    title: "LeetCode",
    url: "https://leetcode.com/",
    description:
      "Coding interview prep with tagged problems, discussions, and contests.",
    subjects: ["CS"],
    subtopics: ["Algorithm"],
    formats: ["Website/Wiki", "Software"],
    level: "Intermediate",
    language: "en",
  },
  {
    id: "berkeley-cs182",
    title: "Berkeley CS 182 — Deep Learning",
    url: "https://inst.eecs.berkeley.edu/~cs182/",
    description:
      "Berkeley deep learning: architectures, training, and modern applications.",
    subjects: ["CS"],
    subtopics: ["AI/ML"],
    formats: ["Course", "Website/Wiki"],
    level: "Intermediate",
    language: "en",
  },
  {
    id: "d2l-book",
    title: "Dive into Deep Learning (Zhang et al.)",
    url: "https://d2l.ai/",
    description:
      "Executable book mixing math, code, and notebooks from linear models to transformers.",
    subjects: ["CS", "MATH"],
    subtopics: ["AI/ML"],
    formats: ["Textbook", "Website/Wiki", "Repo"],
    level: "Intermediate",
    language: "en",
  },
  {
    id: "strogatz-nonlinear-dynamics",
    title: "Nonlinear Dynamics and Chaos (Steven Strogatz)",
    url: "https://www.stevenstrogatz.com/books/nonlinear-dynamics-and-chaos-with-applications-to-physics-biology-chemistry-and-engineering",
    description:
      "Classic ODEs, bifurcations, and chaos—intuition plus serious applied math.",
    subjects: ["MATH"],
    subtopics: ["Calculus", "Differential equations"],
    formats: ["Textbook"],
    level: "Intermediate",
    language: "en",
  },
  {
    id: "luo-neurobiology",
    title: "Principles of Neurobiology (Liqun Luo)",
    url: "https://www.sinauer.com/neurobiology/",
    description:
      "Integrated molecular-to-systems neurobiology with strong genetics and circuits angle.",
    subjects: ["NEU", "BIO"],
    subtopics: [],
    formats: ["Textbook"],
    level: "Intermediate",
    language: "en",
  },
  {
    id: "roitt-immunology",
    title: "Roitt's Essential Immunology (Ivan M. Roitt)",
    url: "https://www.wiley.com/en-us/Roitt%27s+Essential+Immunology%2C+13th+Edition-p-9781118016040",
    description:
      "Concise immunology primer: innate/adaptive immunity, clinical hooks, and review art.",
    subjects: ["BIO"],
    subtopics: [],
    formats: ["Textbook"],
    level: "Intermediate",
    language: "en",
  },
  {
    id: "mankiw-principles",
    title: "Principles of Economics (N. Gregory Mankiw)",
    url: "https://www.macmillanlearning.com/college/us/product/Principles-of-Economics/p/1319424714159521",
    description:
      "Standard intro micro/macro text—clear prose and graphs for economic intuition.",
    subjects: ["ECON"],
    subtopics: [],
    formats: ["Textbook"],
    level: "101",
    language: "en",
  },
  {
    id: "strang-linear-algebra",
    title: "Introduction to Linear Algebra (Gilbert Strang) + MIT 18.06",
    url: "https://ocw.mit.edu/courses/18-06-linear-algebra-spring-2010/",
    description:
      "Strang’s matrix-first linear algebra with full MIT OCW lectures and problem sets.",
    subjects: ["MATH"],
    subtopics: ["Linear Algebra"],
    formats: ["Textbook", "Course", "Talk/Lecture"],
    level: "Intermediate",
    language: "en",
  },
  {
    id: "harvard-cs50",
    title: "Harvard CS50 — Introduction to Computer Science",
    url: "https://cs50.harvard.edu/x/",
    description:
      "Broad CS0: C, Python, SQL, web, and CS ideas—friendly lectures and heavy projects.",
    subjects: ["CS"],
    subtopics: ["Algorithm", "Systems"],
    formats: ["Course", "Talk/Lecture", "Tutorial"],
    level: "101",
    language: "en",
  },
  {
    id: "3b1b-probability",
    title: "3Blue1Brown — Probability (incl. “probabilities of probabilities”)",
    url: "https://www.3blue1brown.com/topics/probability",
    description:
      "Visual probability: Bayes, expectations, and uncertainty without symbol overload.",
    subjects: ["MATH"],
    subtopics: ["Probability"],
    formats: ["Tutorial", "Course"],
    level: "101",
    language: "en",
  },
  {
    id: "3b1b-linear-algebra",
    title: "3Blue1Brown — Essence of linear algebra",
    url: "https://www.3blue1brown.com/topics/linear-algebra",
    description:
      "Geometric picture of vectors, matrices, eigenstuff—ideal before a formal course.",
    subjects: ["MATH"],
    subtopics: ["Linear Algebra"],
    formats: ["Tutorial", "Course"],
    level: "101",
    language: "en",
  },
  {
    id: "3b1b-neural-networks",
    title: "3Blue1Brown — Neural networks",
    url: "https://www.3blue1brown.com/topics/neural-networks",
    description:
      "What networks are really doing, layer by layer, with clean animations.",
    subjects: ["CS", "MATH"],
    subtopics: ["AI/ML"],
    formats: ["Tutorial", "Course"],
    level: "101",
    language: "en",
  },
  {
    id: "3b1b-diff-eq",
    title: "3Blue1Brown — Differential equations",
    url: "https://www.3blue1brown.com/topics/differential-equations",
    description:
      "ODE intuition: vector fields, exponentials, and why DEs show up everywhere.",
    subjects: ["MATH"],
    subtopics: ["Calculus", "Differential equations"],
    formats: ["Tutorial", "Course"],
    level: "101",
    language: "en",
  },
  {
    id: "principles-neural-science",
    title: "Principles of Neural Science (Kandel et al., reference)",
    url: "https://www.accessmedicine.mhmedical.com/book.aspx?bookid=2500",
    description:
      "Broad systems-neuroscience reference; best after you have an intro under your belt.",
    subjects: ["NEU"],
    subtopics: [],
    formats: ["Textbook"],
    level: "Advanced",
    language: "en",
  },
  {
    id: "mit-microeconomics",
    title: "MIT OpenCourseWare — Principles of Microeconomics",
    url: "https://ocw.mit.edu/courses/14-01-principles-of-microeconomics-fall-2018/",
    description:
      "Undergraduate micro with lectures, recitations, and problem sets—complements any ECON text.",
    subjects: ["ECON"],
    subtopics: [],
    formats: ["Course", "Talk/Lecture"],
    level: "Intermediate",
    language: "en",
  },
];

export function getAllResources() {
  return resources;
}

/** @param {string} subject */
export function getFamilyForSubject(subject) {
  return SUBJECT_TO_FAMILY[subject] ?? null;
}

/** All unique subtopics appearing in data (for filter chips) */
export function getAllSubtopics() {
  const set = new Set();
  resources.forEach((r) => (r.subtopics ?? []).forEach((t) => set.add(t)));
  return [...set].sort();
}
