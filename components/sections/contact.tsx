import { MailIcon, MapPinIcon } from "@/components/icons";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { SectionShell } from "@/components/ui/section-shell";
import {
  contactEmail,
  contactEmailHref,
  registeredOfficeAddress,
} from "@/lib/contact";

export default function Contact() {
  return (
    <SectionShell
      id="contact"
      className="bg-brand text-surface"
      dividerClassName="text-brand-30/50 hidden"
    >
      <Container>
        <SectionHeading
          index="7"
          tone="dark"
          title="How Can We Be Contacted"
          description="Write to us or visit our registered office. We would be glad to hear from you."
        />

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <div className="flex items-start gap-3 border border-dashed border-brand-30/50 p-6">
            <MapPinIcon className="mt-1 h-6 w-6 shrink-0 text-brand-30" />
            <div>
              <p className="text-lg font-semibold">Registered Office</p>
              <p className="mt-2 text-base leading-relaxed text-brand-30/90">
                {registeredOfficeAddress}
              </p>
            </div>
          </div>
          <div className="flex items-start gap-3 border border-dashed border-brand-30/50 p-6">
            <MailIcon className="mt-1 h-6 w-6 shrink-0 text-brand-30" />
            <div>
              <p className="text-lg font-semibold">Email</p>
              <a
                href={contactEmailHref}
                className="mt-2 inline-block text-base break-all underline decoration-brand-30 underline-offset-4 hover:decoration-surface"
              >
                {contactEmail}
              </a>
            </div>
          </div>
        </div>
      </Container>
    </SectionShell>
  );
}
