import { AppHeader } from "./components/AppHeader.js";
import { MobileNav } from "./components/MobileNav.js";
import { HeroSection } from "./components/HeroSection.js";
import { FeaturedProjects } from "./components/FeaturedProjects.js";
import { ExperienceEducation } from "./components/ExperienceEducation.js";
import { SkillsInterests } from "./components/SkillsInterests.js";
import { AppFooter } from "./components/AppFooter.js";
import { ProjectCard } from "./components/ProjectCard.js";
import { ProjectCatalog } from "./components/ProjectCatalog.js";

customElements.define("app-header", AppHeader);
customElements.define("mobile-nav", MobileNav);
customElements.define("hero-section", HeroSection);
customElements.define("featured-projects", FeaturedProjects);
customElements.define("experience-education", ExperienceEducation);
customElements.define("skills-interests", SkillsInterests);
customElements.define("app-footer", AppFooter);
customElements.define("project-card", ProjectCard);
customElements.define("project-catalog", ProjectCatalog);
