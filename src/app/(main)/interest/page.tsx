import InterestsCheckbox from "@/components/interest-checkbox";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { getInterests } from "./_query";
import { auth } from "../../../../auth";
import { redirect } from "next/navigation";

export default async function InterestPage() {
  const session = await auth();
  if (!session) {
    redirect("/login");
  }
  const interests = await getInterests();

  return (
    <section className="max-w-md mx-auto mt-10">
      <Card>
        <CardHeader className="text-center">
          <CardTitle className="text-2xl md:text-3xl">
            Please mark your interests!
          </CardTitle>
          <CardDescription>We will keep you notified.</CardDescription>
        </CardHeader>
        <CardContent>
          <InterestsCheckbox interests={interests} />
        </CardContent>
      </Card>
    </section>
  );
}
