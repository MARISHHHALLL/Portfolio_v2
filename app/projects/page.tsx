import { redirect } from "next/navigation";

/* The portfolio is a single page now; old links land on their section. */
export default function Page() {
  redirect("/#work");
}
