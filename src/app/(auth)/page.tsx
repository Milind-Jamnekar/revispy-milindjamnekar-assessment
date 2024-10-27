import SignupForm from "@/components/auth/signup-form";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function AuthPage() {
  return (
    <section className="max-w-md mx-auto mt-10">
      <Card>
        <CardHeader>
          <CardTitle className="text-center text-2xl md:text-3xl">
            Create your account
          </CardTitle>
          <CardDescription></CardDescription>
        </CardHeader>
        <CardContent>
          <SignupForm />
        </CardContent>
      </Card>
    </section>
  );
}
