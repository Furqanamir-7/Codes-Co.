import type { Metadata } from "next"
import { PageHero } from "@/components/shared/page-hero"
import { site } from "@/data/site"

export const metadata: Metadata = {
  title: "Privacy",
  description: "How CODE & CO. handles the notes you send from this website.",
}

export default function PrivacyPage() {
  return (
    <>
      <PageHero title="Privacy">
        A short account of what this site does with the information you give it.
      </PageHero>
      <article className="bg-ivory py-16 text-black">
        <div className="mx-auto w-full max-w-3xl space-y-6 px-5 text-lg leading-relaxed text-black/80 sm:px-8">
          <p>
            CODE & CO. is Furqan Amir’s studio. If you use the contact form, we receive
            your name, email, the optional phone number, and the note you wrote. That message is
            used to reply to you. It is not sold.
          </p>
          <p>
            Without an email service connected, the form opens your own email app addressed to{" "}
            <a className="font-medium text-maroon no-underline" href={`mailto:${site.email}`}>
              {site.email}
            </a>
            . In that case the message leaves from your account, not from a server we control.
          </p>
          <p>
            A hidden field on the form is there to catch automated spam. Leave it empty. Analytics
            runs only if it is explicitly switched on for the deployment. This page does not set
            advertising cookies.
          </p>
          <p>
            Questions about a message you already sent can go to the same address, or on WhatsApp at{" "}
            {site.phoneDisplay}.
          </p>
        </div>
      </article>
    </>
  )
}
