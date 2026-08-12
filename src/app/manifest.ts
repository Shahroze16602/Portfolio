import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return { name: "Muhammad Shahroze — Android Engineer", short_name: "Shahroze", description: "Android engineering portfolio of Muhammad Shahroze", start_url: "/", display: "standalone", background_color: "#f1efe8", theme_color: "#2446ff" };
}
