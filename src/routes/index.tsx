import { createFileRoute } from "@tanstack/react-router";
import App from "@/App.jsx";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Abhilash Reddy — Computer Science Student & Web Developer" },
      { name: "description", content: "Portfolio of Abhilash Reddy, a Computer Science student passionate about web development, React, and modern UI." },
      { property: "og:title", content: "Abhilash Reddy — Portfolio" },
      { property: "og:description", content: "Computer Science student building responsive, interactive web applications." },
    ],
  }),
  component: App,
});
