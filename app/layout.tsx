import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "FreelanceHealth – Affordable Health Insurance for Freelancers",
  description: "Compare health insurance plans specifically for freelancers and gig workers based on your income and location. Find the best coverage at the best price."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="634fb554-ad8d-4752-a465-57a9415f79e7"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] min-h-screen">{children}</body>
    </html>
  );
}
