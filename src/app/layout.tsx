import type { Metadata } from "next";
import { ThemeProvider } from "@/components/theme-provider";
import "@/styles/globals.css";

export const metadata: Metadata = {
	title: "Abasiono Mbat — Portfolio",
	description: "The personal portfolio of Abasiono Mbat. Projects, courses, and contact.",
	metadataBase: new URL("https://example.com"),
	openGraph: {
		title: "Abasiono Mbat — Portfolio",
		description: "Projects, skills, courses, and more.",
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Abasiono Mbat — Portfolio",
		description: "Projects, skills, courses, and more.",
	},
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en" suppressHydrationWarning>
			<body>
				<ThemeProvider>
					{children}
				</ThemeProvider>
			</body>
		</html>
	);
}