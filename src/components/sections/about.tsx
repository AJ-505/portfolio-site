import { Github, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";

export function AboutSection() {
	return (
		<section id="about" className="container py-20">
			<div className="grid items-start gap-10 md:grid-cols-2">
				<div className="space-y-4">
					<h2 className="text-3xl font-semibold">About</h2>
					<p className="text-muted-foreground">
						I am Abasiono Mbat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer suscipit, augue non vulputate luctus, erat arcu pharetra libero, a laoreet neque sem sed orci. Add your bio, areas of interest, and mission here.
					</p>
					<div className="flex gap-3">
						<Button asChild>
							<a href="#" target="_blank" rel="noreferrer">
								<Linkedin className="mr-2 h-4 w-4" /> LinkedIn
							</a>
						</Button>
						<Button asChild variant="secondary">
							<a href="https://github.com/AJ-505" target="_blank" rel="noreferrer">
								<Github className="mr-2 h-4 w-4" /> GitHub
							</a>
						</Button>
					</div>
				</div>
				<div className="relative">
					<div className="aspect-video rounded-xl border bg-secondary/30" />
				</div>
			</div>
		</section>
	);
}