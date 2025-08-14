import { Nav } from "@/components/nav";
import { Hero } from "@/components/hero";
import { AboutSection } from "@/components/sections/about";
import { ProjectsSection } from "@/components/sections/projects";
import { SkillsSection } from "@/components/sections/skills";
import { ContactSection } from "@/components/sections/contact";

export default function HomePage() {
	return (
		<main>
			<Nav />
			<Hero />
			<AboutSection />
			<ProjectsSection />
			<SkillsSection />
			<ContactSection />
			<footer className="border-t py-10">
				<div className="container flex items-center justify-between text-sm text-muted-foreground">
					<p>© {new Date().getFullYear()} Abasiono Mbat</p>
					<p>Built with Next.js, Tailwind & shadcn/ui</p>
				</div>
			</footer>
		</main>
	);
}