import { Button } from "@/components/ui/button";

export function ContactSection() {
	return (
		<section id="contact" className="container py-20">
			<div className="mb-8">
				<h2 className="text-3xl font-semibold">Contact</h2>
				<p className="text-muted-foreground">Have an opportunity or want to say hello? Send a message.</p>
			</div>
			<form className="mx-auto grid max-w-2xl gap-4">
				<input className="w-full rounded-md border bg-background px-4 py-3 outline-none focus:ring-2 focus:ring-ring" placeholder="Your name" />
				<input className="w-full rounded-md border bg-background px-4 py-3 outline-none focus:ring-2 focus:ring-ring" placeholder="Your email" type="email" />
				<textarea className="min-h-[140px] w-full rounded-md border bg-background px-4 py-3 outline-none focus:ring-2 focus:ring-ring" placeholder="Your message" />
				<div className="flex items-center justify-end">
					<Button type="submit">Send</Button>
				</div>
			</form>
		</section>
	);
}