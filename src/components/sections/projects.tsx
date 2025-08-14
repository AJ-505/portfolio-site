import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink } from "lucide-react";

const projects = [
	{
		title: "Neural Vision",
		description: "Computer vision playground with model experiments and visualizations.",
		status: "Completed",
		type: "Solo",
		stack: ["Next.js", "PyTorch", "Tailwind"],
		links: { repo: "#", demo: "#" },
		image: "",
	},
	{
		title: "AlgoNotes",
		description: "Interactive algorithm notes inspired by The Last Algorithms Course You'll Ever Need.",
		status: "In Progress",
		type: "Solo",
		stack: ["Next.js", "TypeScript"],
		links: { repo: "#", demo: "#" },
		image: "",
	},
	{
		title: "TeamSync",
		description: "Group collaboration dashboard with real-time presence and tasks.",
		status: "Completed",
		type: "Group",
		stack: ["React", "Supabase"],
		links: { repo: "#", demo: "#" },
		image: "",
	},
];

export function ProjectsSection() {
	return (
		<section id="projects" className="container py-20">
			<div className="mb-8 flex items-end justify-between">
				<div>
					<h2 className="text-3xl font-semibold">Projects</h2>
					<p className="text-muted-foreground">A curated selection of work. More coming soon.</p>
				</div>
				<div className="flex gap-2">
					<Badge variant="info">All</Badge>
					<Badge variant="success">Completed</Badge>
					<Badge variant="warning">In Progress</Badge>
				</div>
			</div>
			<div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
				{projects.map((p) => (
					<Card key={p.title} className="group relative overflow-hidden">
						<CardHeader>
							<CardTitle>{p.title}</CardTitle>
							<CardDescription>{p.description}</CardDescription>
						</CardHeader>
						<CardContent>
							<div className="mb-3 flex flex-wrap gap-2">
								<Badge variant={p.status === "Completed" ? "success" : "warning"}>{p.status}</Badge>
								<Badge variant="secondary">{p.type}</Badge>
								{p.stack.map((s) => (
									<Badge key={s} variant="outline">{s}</Badge>
								))}
							</div>
							<div className="aspect-video w-full rounded-md bg-secondary/30" />
						</CardContent>
						<CardFooter className="justify-between">
							<Button asChild size="sm" variant="secondary">
								<a href={p.links.demo}>
									<ExternalLink className="mr-2 h-4 w-4" /> Demo
									</a>
								</Button>
							<Button asChild size="sm" variant="outline">
								<a href={p.links.repo}>
									<Github className="mr-2 h-4 w-4" /> Code
									</a>
								</Button>
						</CardFooter>
					</Card>
				))}
			</div>
		</section>
	);
}