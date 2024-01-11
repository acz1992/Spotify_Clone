import type { Metadata } from "next";
import { Figtree } from "next/font/google";
import "./globals.css";
import React from "react";
import Sidebar from "@/components/Sidebar";

const font = Figtree({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Spotify Clone",
	description: "Liste to music",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<Sidebar>{children}</Sidebar>
			<body className={font.className}>{children}</body>
		</html>
	);
}
