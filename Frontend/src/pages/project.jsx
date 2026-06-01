import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";

const projects = [
  {
    title: "HireTrack",
    image: "/hiretrack-pfp.png",
    description:
      "Full-stack job application tracking platform with authentication, application management, resume analyses with ATS and proper feedback, and dashboard analytics.",
    tech: "React, Spring Boot, MySQL, JWT, Tailwind CSS, Rest Api",
    github:
      "https://github.com/RonTheCoder50/JavaFullStack_Projects/tree/main/HireTrack",
    live: "#",
  },

  {
    title: "Blog Application",
    image: "/blog2.jpg",
    description:
      "Multi-user blog platform with authentication, role-based access, posts, comments, likes, and RESTful APIs.",
    tech: "React, Spring Boot, MySQL, Spring Security, JWT, Rest Api",
    github:
      "https://github.com/RonTheCoder50/JavaFullStack_Projects/tree/main/Blog_App",
    live: "#",
  },

  {
    title: "Mini-Mart",
    image:
      "https://static.vecteezy.com/system/resources/previews/005/051/924/original/ecommerce-website-online-store-concept-vector.jpg",
    description:
      "Responsive e-commerce application featuring product search, category filtering, sorting, dark mode, and API integration.",
    tech: "React, Tailwind CSS, JavaScript, DummyJSON API",
    github:
      "https://github.com/RonTheCoder50/JsProjects/tree/main/e-commerce_site",
    live: "https://ecommerce-site-smoky.vercel.app/",
  },
];

export default function ProjectSection({ theme }) {
  return (
    <section
      id="projects"
      className="w-full py-16 px-4 flex flex-col items-center"
    >
      <h2
        className={`text-3xl font-semibold mb-10 ${
          theme === "light" ? "text-black" : "text-white"
        }`}
      >
        Projects
      </h2>

    <div
        className={`
            w-full 
            max-w-7xl 
            grid grid-cols-1 
            md:grid-cols-2 
            lg:grid-cols-3 
            gap-8 
            place-items-center
            items-stretch
        `}
    >
        {projects.map((project) => (
          <ProjectCard
            key={project.title}
            {...project}
            theme={theme}
          />
        ))}
      </div>


    </section>
  );
}


function ProjectCard({
  image,
  title,
  description,
  tech,
  github,
  live,
  theme
}) {
  return (
    <div
      className={`
        group
        relative
        w-full
        max-w-95
        overflow-hidden
        rounded-2xl
        border
        transition-all
        duration-500
        hover:-translate-y-3
        hover:shadow-2xl
        flex 
        flex-col
        ${
          theme === "light"
            ? "bg-white border-gray-200"
            : "bg-zinc-900 border-zinc-800"
        }
      `}
    >
      <div
        className="
          absolute
          inset-0
          opacity-0
          group-hover:opacity-100
          transition-opacity
          duration-500
          bg-gradient-to-r
          from-sky-500/10
          via-purple-500/10
          to-pink-500/10
        "
      />

      {/* Image */}
      <div className="overflow-hidden">
        <img
          src={image}
          alt={title}
          className="
            w-full
            h-56
            object-cover
            object-center
            transition-transform
            duration-700
            group-hover:scale-110
          "
        />
      </div>

      {/* Content */}
      <div className="relative p-5 flex flex-col flex-1 gap-4">
        <h3 className="text-2xl font-semibold tracking-wide">
          {title}
        </h3>

        <p
          className={`
            text-sm
            leading-relaxed
            ${
              theme === "light"
                ? "text-gray-600"
                : "text-gray-300"
            }
          `}
        >
          {description}
        </p>
        
        <div className="flex flex-wrap gap-2">
            {tech.split(",").map((item) => (
              <span
                key={item}
                className="
                  px-3
                  py-1
                  text-xs
                  rounded-full
                  bg-sky-500/10
                  text-sky-500
                  border
                  border-sky-500/20
                "
              >
                {item.trim()}
              </span>
            ))}
        </div>

        <div className="flex gap-3 mt-auto">
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="
                flex-1
                flex
                items-center
                justify-center
                gap-2
                py-2.5
                rounded-xl
                border
                transition-all
                duration-300
                hover:bg-sky-500
                hover:text-white
              "
            >
              <FaGithub />
              GitHub
            </a>

            {live !== "#" && (
              <a
                href={live}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  flex-1
                  flex
                  items-center
                  justify-center
                  gap-2
                  py-2.5
                  rounded-xl
                  border
                  transition-all
                  duration-300
                  hover:bg-emerald-500
                  hover:text-white
                "
              >
                <FiExternalLink />
                Live
              </a>
            )}
        </div>
         
      </div>
    </div>
  );
}

