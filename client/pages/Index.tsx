import { ArrowUpLeft, Cloud, UserRound } from "lucide-react";
import type { ReactNode } from "react";
import {
  BootstrapIcon,
  Css3Icon,
  DjangoIcon,
  FigmaIcon,
  GitIcon,
  GithubIcon,
  Html5Icon,
  JavascriptIcon,
  MysqlIcon,
  PythonIcon,
  TailwindIcon,
  VercelIcon,
} from "@/components/sections/skill-icons";

const projects = [
  {
    title: "Learnlogicify Landing Page",
    image:
      "https://api.builder.io/api/v1/image/assets/TEMP/7a7e9e0680208f62e4ace0f38aeea60b97f750be?width=1614",
  },
  {
    title: "Winzee Web Chat application",
    image:
      "https://api.builder.io/api/v1/image/assets/TEMP/d322f7695edec0e3b14b58b5f57aa4800484b1a1?width=1614",
  },
  {
    title: "ChatGPT clone",
    image:
      "https://api.builder.io/api/v1/image/assets/TEMP/e0dddb0dccf5ff3e75d77809621fc86b52d25434?width=472",
    dark: true,
  },
  {
    title: "Gemini Clone",
    image:
      "https://api.builder.io/api/v1/image/assets/TEMP/d0bcc2938eeb799a75638e9cc07f6a1cd4c26246?width=1614",
  },
];

const skillGroups = [
  {
    title: "Front-End Development",
    description:
      "Building engaging and user-friendly web interfaces using modern frameworks and technologies with expertise.",
    icons: [Html5Icon, JavascriptIcon],
  },
  {
    title: "Back-End Development",
    description:
      "Developing robust server-side logic and APIs to power dynamic and scalable web applications.",
    icons: [DjangoIcon],
  },
  {
    title: "Personal Development",
    description:
      "Committed to continuous learning and personal growth to excel in both professional and collaborative environments.",
    tags: ["Time Management", "Problem Solving", "Communication", "Leadership"],
  },
  {
    title: "Core Computer Science Concepts",
    description:
      "Demonstrating a strong foundation in core computer science principles, including problem-solving, system design, and efficient computing techniques.",
    tags: ["Operating Systems", "Computer Networks", "Object-Oriented Programming", "DSA", "System Design"],
  },
  {
    title: "Styling & Design",
    description:
      "Crafting visually appealing and responsive designs with advanced styling tools and frameworks.",
    icons: [Css3Icon, TailwindIcon, BootstrapIcon],
  },
  {
    title: "Cloud & Deployment",
    description:
      "Experienced in deploying and managing applications using modern cloud platforms and tools.",
    icons: [Cloud, VercelIcon],
  },
  {
    title: "Programming Languages",
    description:
      "Proficient in problem-solving and applying programming languages to implement efficient data structures and algorithms.",
    icons: [PythonIcon],
  },
  {
    title: "Database Management",
    description:
      "Designing and managing databases to ensure secure and efficient data storage and retrieval.",
    icons: [MysqlIcon],
  },
  {
    title: "Version Control & Collaboration",
    description:
      "Effectively managing code and collaborating on projects to ensure seamless teamwork.",
    icons: [GithubIcon, GitIcon],
  },
  {
    title: "UI/UX Design",
    description:
      "Designing user-centric interfaces that are intuitive, visually appealing, and easy to navigate.",
    icons: [FigmaIcon],
    tag: "Prototyping",
  },
];

function IconBubble({ children, large = false }: { children: ReactNode; large?: boolean }) {
  return (
    <div className={`flex shrink-0 items-center justify-center rounded-full bg-charcoal p-4 ${large ? "h-24 w-24" : "h-20 w-20"}`}>
      {children}
    </div>
  );
}

function SkillCard({ group }: { group: (typeof skillGroups)[number] }) {
  return (
    <article className="flex min-h-[300px] flex-col gap-8 rounded-[28px] bg-charcoal-light p-8 sm:p-10">
      <div className="flex min-h-20 items-center justify-center gap-5 sm:justify-start">
        {group.icons?.map((Icon, index) => (
          <IconBubble key={index} large>
            <Icon />
          </IconBubble>
        ))}
        {group.tags && (
          <div className="flex flex-wrap gap-2">
            {group.tags.map((tag) => (
              <span key={tag} className="rounded-full bg-charcoal px-4 py-3 text-sm font-light text-white sm:text-base">
                {tag}
              </span>
            ))}
          </div>
        )}
        {group.tag && <span className="rounded-full bg-charcoal px-6 py-3 text-base text-white">{group.tag}</span>}
      </div>
      <div className="mt-auto space-y-2">
        <h3 className="font-display text-2xl font-medium text-white sm:text-[28px]">{group.title}</h3>
        <p className="max-w-xl text-base font-light leading-relaxed text-charcoal-muted sm:text-xl">{group.description}</p>
      </div>
    </article>
  );
}

function ProjectCard({ project }: { project: (typeof projects)[number] }) {
  return (
    <article className="group flex flex-col gap-5">
      <div className={`flex h-[260px] items-center justify-center overflow-hidden rounded-[30px] sm:h-[420px] lg:h-[470px] ${project.dark ? "bg-black" : "bg-[#e7e7e7]"}`}>
        <img
          src={project.image}
          alt={project.title}
          className={`h-full w-full object-cover transition duration-500 group-hover:scale-[1.02] ${project.dark ? "h-2/3 w-2/3 object-contain" : ""}`}
        />
      </div>
      <div className="flex items-center gap-3">
        <ArrowUpLeft className="h-12 w-12 shrink-0" strokeWidth={1.5} />
        <h3 className="font-display text-xl font-normal text-ink sm:text-3xl lg:text-[40px]">{project.title}</h3>
      </div>
    </article>
  );
}

export default function Index() {
  return (
    <div className="bg-white text-ink">
      <section id="home" className="scroll-mt-8 bg-charcoal px-5 py-12 text-white sm:px-10 lg:px-[6.9vw] lg:py-16">
        <header className="mx-auto flex max-w-[1654px] flex-col gap-20">
          <div className="grid min-h-[530px] items-center gap-12 lg:grid-cols-[1.65fr_0.8fr]">
            <div>
              <p className="mb-6 font-mono text-sm uppercase tracking-[0.25em] text-charcoal-muted">Portfolio / 2024</p>
              <h1 className="font-display text-[clamp(3.5rem,8.5vw,8.75rem)] font-normal leading-[0.95] tracking-[-0.06em]">
                Bariq Ainul Fikri
              </h1>
            </div>
            <div className="flex flex-col items-end gap-7 justify-self-end">
              <div className="flex h-36 w-36 items-center justify-center rounded-full border border-white/25 bg-charcoal-light text-charcoal-muted sm:h-44 sm:w-44" aria-label="Portrait placeholder">
                <UserRound className="h-14 w-14 sm:h-16 sm:w-16" strokeWidth={1} />
              </div>
              <p className="max-w-md text-right text-base font-light leading-relaxed text-charcoal-muted-3 sm:text-xl">
                Blending curiosity, design, and technology, I’m exploring web development while continuously learning, experimenting, and building meaningful digital experiences.
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-10 border-t border-white/20 pt-8 lg:flex-row lg:items-start lg:justify-between">
            <p className="max-w-4xl text-2xl font-medium leading-tight sm:text-4xl lg:text-[40px]">
              Driven by curiosity and a passion for growth, I’m exploring web development and digital design one step at a time. Still learning, experimenting, and building simple yet meaningful projects while improving my coding, creativity, and communication skills.
            </p>
            <div className="max-w-sm shrink-0 text-right">
              <p className="text-sm font-light uppercase leading-relaxed tracking-wide text-white sm:text-lg">
                Here’s a selection of projects that showcase my passion for design and development, reflecting creativity and innovation.
              </p>
            </div>
          </div>
        </header>
      </section>

      <section id="projects" className="px-5 py-20 sm:px-10 lg:px-[6.9vw] lg:py-28">
        <div className="mx-auto max-w-[1654px]">
          <div className="mb-16 flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
            <div>
              <p className="mb-5 font-mono text-sm text-charcoal-muted-2">Selected work</p>
              <h2 className="max-w-4xl font-display text-[clamp(3rem,6vw,5rem)] font-medium leading-[0.95] tracking-[-0.05em]">
                Welcome to my realm of wild projects and awesome creations
              </h2>
            </div>
            <p className="max-w-xs text-right text-sm leading-relaxed text-charcoal-muted-2">
              A growing collection of interfaces, experiments, and digital products.
            </p>
          </div>
          <div className="grid gap-x-10 gap-y-16 lg:grid-cols-2">{projects.map((project) => <ProjectCard key={project.title} project={project} />)}</div>
        </div>
      </section>

      <section id="skills" className="bg-charcoal px-5 py-20 text-white sm:px-10 lg:px-[6.9vw] lg:py-28">
        <div className="mx-auto max-w-[1654px]">
          <div className="mb-16 text-center">
            <p className="mb-6 font-mono text-sm uppercase tracking-[0.25em] text-charcoal-muted">Capabilities</p>
            <h2 className="font-display text-[clamp(3.5rem,9vw,8.75rem)] font-normal leading-[0.9] tracking-[-0.06em]">Skills that fuel my passion</h2>
          </div>
          <div className="grid gap-5 md:grid-cols-2">{skillGroups.map((group) => <SkillCard key={group.title} group={group} />)}</div>
          <div className="mt-14 flex justify-end">
            <p className="max-w-xl text-right text-base font-light leading-relaxed text-white sm:text-xl">Passionate Creative Designer and Developer, dedicated to crafting innovative solutions and exceptional digital experiences through modern technologies</p>
          </div>
        </div>
      </section>

      <footer id="contact" className="px-5 py-20 sm:px-10 lg:px-[6.9vw] lg:py-24">
        <div className="mx-auto max-w-[1654px]">
          <p className="mb-3 font-mono text-sm text-charcoal-muted-2">That’s all for now.</p>
          <h2 className="max-w-4xl font-display text-[clamp(3.5rem,7vw,6.5rem)] font-normal leading-[0.95] tracking-[-0.06em]">Got a project in mind?<br />Let’s talk</h2>
          <div className="my-16 h-px bg-black" />
          <div className="flex flex-col gap-12 sm:flex-row sm:items-end sm:justify-between">
            <div className="flex flex-wrap gap-12 sm:gap-20">
              <div><p className="text-sm text-charcoal-muted-2">Email:</p><a className="mt-1 block text-lg hover:underline sm:text-2xl" href="mailto:its.ashwin.23@gmail.com">its.ashwin.23@gmail.com</a></div>
              <div><p className="text-sm text-charcoal-muted-2">Phone</p><a className="mt-1 block text-lg hover:underline sm:text-2xl" href="tel:+918248669086">(+91) 8248669086</a></div>
            </div>
            <a href="mailto:its.ashwin.23@gmail.com" className="flex h-48 w-48 items-center justify-center rounded-full bg-accent-blue text-lg text-white transition-transform hover:scale-105 sm:h-56 sm:w-56">Get in touch</a>
          </div>
          <div className="mt-24 flex flex-col justify-between gap-6 border-t border-black/10 pt-6 text-sm text-charcoal-muted-2 sm:flex-row"><span>@ by Bariq</span><span className="max-w-md text-left sm:text-right">Passionate Creative Designer and Developer, dedicated to crafting innovative solutions and exceptional digital experiences through modern technologies</span></div>
        </div>
      </footer>
    </div>
  );
}
