"use client";

import Link from "next/link";
import { useTheme } from "next-themes";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Moon, Sun, Github, Linkedin } from "lucide-react";

export function Nav() {
	const { theme, setTheme } = useTheme();
	return (
		<header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur">
			<div className="container flex h-16 items-center justify-between">
				<Link href="#home" className="text-sm font-semibold tracking-wide">
					<span className="text-primary">Abasiono</span> Mbat
				</Link>
				<nav className={cn("hidden items-center gap-6 text-sm md:flex")}> 
					<Link href="#about" className="text-muted-foreground hover:text-foreground">About</Link>
					<Link href="#projects" className="text-muted-foreground hover:text-foreground">Projects</Link>
					<Link href="#skills" className="text-muted-foreground hover:text-foreground">Skills & Courses</Link>
					<Link href="#contact" className="text-muted-foreground hover:text-foreground">Contact</Link>
				</nav>
				<div className="flex items-center gap-2">
					<Button variant="ghost" size="icon" aria-label="Toggle theme" onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
						<Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
						<Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
					</Button>
					<Button asChild variant="ghost" size="icon" aria-label="GitHub">
						<a href="https://github.com/AJ-505" target="_blank" rel="noreferrer">
							<Github className="h-5 w-5" />
						</a>
					</Button>
					<Button asChild variant="ghost" size="icon" aria-label="LinkedIn">
						<a href="#" target="_blank" rel="noreferrer">
							<Linkedin className="h-5 w-5" />
						</a>
					</Button>
				</div>
			</div>
		</header>
	);
}