import { Button } from "@/components/ui/button";
import { Github, Linkedin, ArrowRight } from "lucide-react";

export function Hero() {
	return (
		<section id="home" className="relative overflow-hidden">
			<div className="pointer-events-none absolute -inset-24 -z-10 opacity-40 blur-3xl">
				<div className="animate-glow h-full w-full bg-[radial-gradient(ellipse_at_center,theme(colors.primary.DEFAULT/.25)_0,transparent_60%)]" />
			</div>
			<div className="container grid gap-10 py-24 md:grid-cols-2 md:py-32">
				<div className="space-y-6">
					<p className="text-sm uppercase tracking-[0.2em] text-primary">Hello, I am</p>
					<h1 className="text-4xl font-bold leading-tight md:text-6xl">Abasiono Mbat</h1>
					<p className="max-w-prose text-muted-foreground">
						Crafting delightful web experiences with a focus on performance, accessibility, and developer experience. Lorem ipsum dolor sit amet consectetur adipisicing elit.
					</p>
					<div className="flex flex-wrap items-center gap-3">
						<Button asChild>
							<a href="#projects">View Projects <ArrowRight className="ml-2 h-4 w-4" /></a>
						</Button>
						<Button asChild variant="secondary">
							<a href="#contact">Contact</a>
						</Button>
						<Button asChild variant="ghost">
							<a href="https://github.com/AJ-505" target="_blank" rel="noreferrer"><Github className="mr-2 h-4 w-4" /> GitHub</a>
						</Button>
						<Button asChild variant="ghost">
							<a href="#" target="_blank" rel="noreferrer"><Linkedin className="mr-2 h-4 w-4" /> LinkedIn</a>
						</Button>
					</div>
				</div>
				<div className="relative flex items-center justify-center">
					<div className="relative aspect-square w-64 overflow-hidden rounded-2xl border bg-secondary/30 md:w-80">
						{/* Replace this div with your image */}
						<div className="flex h-full w-full items-center justify-center text-sm text-muted-foreground">Your Image</div>
					</div>
				</div>
			</div>
		</section>
	);
}