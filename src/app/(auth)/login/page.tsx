import SigninForm from "@/components/auth/signin-form";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { auth } from "../../../../auth";
import { redirect } from "next/navigation";

export default async function LoginPage() {
  const session = await auth();
  if (session) {
    redirect("/interest");
  }
  return (
    <section className="max-w-md mx-auto mt-10">
      <Card>
        <CardHeader className="text-center space-y-6">
          <CardTitle className="text-3xl">Login</CardTitle>
          <CardDescription>
            <span className="text-lg text-slate-700">
              Welcome back to ECOMMERCE
            </span>
            <span>The next gen business marketplace</span>
          </CardDescription>
        </CardHeader>
        <CardContent>
          <SigninForm />
        </CardContent>
      </Card>
    </section>
  );
}
