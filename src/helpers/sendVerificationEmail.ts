import resend from "@/lib/resend";
import VerificationEmail from "../../emails/VerificationEmail";

import { ApiResponse } from "@/types/ApiResponse";

export async function sendVerificationEmail(
  email: string,
  username: string,
  verifyCode: string
): Promise<ApiResponse> {
  try {
    await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "priyankarokhade789@gmail.com",
      subject: "Message App Verfication Code",
      react: VerificationEmail({ username, otp: verifyCode })
    });
    return { success: true, message: "Verfication email sent successfully" };
  } catch (emailError) {
    console.log("Error sending verfication email", emailError);
    return { success: false, message: "Failed to send verfication email" };
  }
}
