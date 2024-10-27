import { Button, ButtonGroup } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";

export default function Page() {
  return (
    <section className="max-w-md mx-auto mt-10">
      <Card>
        <CardHeader>
          <CardTitle className="text-center text-2xl md:text-3xl">
            Go to route
          </CardTitle>
          <CardDescription></CardDescription>
        </CardHeader>
        <CardContent className="">
          <ButtonGroup className="justify-center">
            <Button variant="outline" asChild>
              <Link href="/login">Login</Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="/register">Register</Link>
            </Button>
          </ButtonGroup>
        </CardContent>
      </Card>
    </section>
  );
}
