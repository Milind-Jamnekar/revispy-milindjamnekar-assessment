import OtpForm from "@/components/auth/otp-form";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function OTPPage() {
  return (
    <section className="max-w-lg mx-auto mt-10">
      <Card>
        <CardHeader className="text-center space-y-7">
          <CardTitle className="text-2xl md:text-3xl">
            Verify your email
          </CardTitle>
          <CardDescription className="max-w-sm mx-auto">
            Enter the 8 digit code you have received on dev***@revispy.com
          </CardDescription>
        </CardHeader>
        <CardContent>
          <OtpForm />
        </CardContent>
      </Card>
    </section>
  );
}
