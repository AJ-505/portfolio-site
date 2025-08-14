import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

type Course = {
	title: string;
	provider: string;
	status: "Completed" | "In Progress";
	verifyUrl?: string;
	image?: string;
	notes?: string;
};

const courses: Course[] = [
	{
		title: "Foundations of AI",
		provider: "NVIDIA",
		status: "Completed",
		verifyUrl: "#",
		notes: "Certificate available.",
	},
	{
		title: "The Last Algorithms Course You'll Ever Need",
		provider: "Frontend Masters / ThePrimeagen",
		status: "In Progress",
		notes: "Provider does not issue certificates; link to course and your notes/repo.",
	},
	{
		title: "Fullstack Open",
		provider: "University of Helsinki",
		status: "Completed",
		verifyUrl: "#",
	},
];

export function SkillsSection() {
	return (
		<section id="skills" className="container py-20">
			<div className="mb-8">
				<h2 className="text-3xl font-semibold">Skills & Courses</h2>
				<p className="text-muted-foreground">A snapshot of the learning path and credentials.</p>
			</div>
			<div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
				{courses.map((c) => (
					<Card key={c.title}>
						<CardHeader>
							<CardTitle>{c.title}</CardTitle>
							<CardDescription>{c.provider}</CardDescription>
						</CardHeader>
						<CardContent>
							<div className="mb-3 flex flex-wrap gap-2">
								<Badge variant={c.status === "Completed" ? "success" : "warning"}>{c.status}</Badge>
								<Badge variant="outline">Certificate</Badge>
							</div>
							<div className="aspect-video w-full rounded-md bg-secondary/30" />
							{c.notes ? (
								<p className="mt-3 text-sm text-muted-foreground">{c.notes}</p>
							) : null}
						</CardContent>
						<CardFooter className="gap-2">
							<Button size="sm" variant="secondary" asChild>
								<a href={c.verifyUrl || "#"}>
									Verify
								</a>
							</Button>
							<Button size="sm" variant="outline" asChild>
								<a href="#">Details</a>
							</Button>
						</CardFooter>
					</Card>
				))}
			</div>
		</section>
	);
}