"use client"

import { useEffect, useId, useRef, useState, type ReactNode } from "react"
import { createPortal } from "react-dom"
import { X } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { site } from "@/data/site"
import { whatsappHref } from "@/lib/utils"

const quoteTypes = [
  { value: "business", label: "Business website" },
  { value: "store", label: "Online store" },
  { value: "wedding", label: "Wedding" },
  { value: "birthday", label: "Birthday" },
  { value: "app", label: "Web app" },
  { value: "redesign", label: "Redesign and care" },
] as const

type QuoteType = (typeof quoteTypes)[number]["value"]

const suggestedType: Record<string, QuoteType | ""> = {
  business: "business",
  landing: "business",
  portfolio: "business",
  store: "store",
  wedding: "wedding",
  birthday: "birthday",
  app: "app",
  redesign: "redesign",
}

const studioEmail = site.emails[0]

type Field = "name" | "email" | "phone" | "websiteType"
type Errors = Partial<Record<Field, string>>

function typeLabel(value: string) {
  return quoteTypes.find((item) => item.value === value)?.label ?? value
}

function validate(values: { name: string; email: string; phone: string; websiteType: string }) {
  const errors: Errors = {}
  if (values.name.trim().length < 2) errors.name = "Enter your full name."
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim())) {
    errors.email = "Enter an email address."
  }
  const digits = values.phone.replace(/\D/g, "")
  if (digits.length < 7) errors.phone = "Enter a phone number."
  if (!quoteTypes.some((item) => item.value === values.websiteType)) {
    errors.websiteType = "Choose a website type."
  }
  return errors
}

function quoteText(values: { name: string; email: string; phone: string; websiteType: string; service: string }) {
  return [
    "Hello CODE & CO. I would like a quote.",
    "",
    `Name: ${values.name.trim()}`,
    `Email: ${values.email.trim()}`,
    `Phone: ${values.phone.trim()}`,
    `Website type: ${typeLabel(values.websiteType)}`,
    `Service: ${values.service}`,
  ].join("\n")
}

function openLink(href: string, blank: boolean) {
  const link = document.createElement("a")
  link.href = href
  if (blank) {
    link.target = "_blank"
    link.rel = "noreferrer"
  }
  document.body.appendChild(link)
  link.click()
  link.remove()
}

export function QuoteChooser({
  id,
  service,
  quote,
}: {
  id: string
  service: string
  quote?: string
}) {
  const titleId = useId()
  const dialogRef = useRef<HTMLDivElement>(null)
  const nameRef = useRef<HTMLInputElement>(null)
  const triggerRef = useRef<HTMLButtonElement>(null)
  const [open, setOpen] = useState(false)
  const [mounted, setMounted] = useState(false)
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [websiteType, setWebsiteType] = useState("")
  const [errors, setErrors] = useState<Errors>({})
  const [sent, setSent] = useState<"email" | "whatsapp" | null>(null)
  const [href, setHref] = useState("")

  useEffect(() => setMounted(true), [])

  useEffect(() => {
    if (!open) return
    const previous = document.body.style.overflow
    document.body.style.overflow = "hidden"
    const frame = requestAnimationFrame(() => nameRef.current?.focus())
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false)
    }
    document.addEventListener("keydown", onKey)
    return () => {
      cancelAnimationFrame(frame)
      document.body.style.overflow = previous
      document.removeEventListener("keydown", onKey)
      triggerRef.current?.focus()
    }
  }, [open])

  function close() {
    setOpen(false)
  }

  function openDialog() {
    setName("")
    setEmail("")
    setPhone("")
    setWebsiteType(quote ? suggestedType[quote] || "" : "")
    setErrors({})
    setSent(null)
    setHref("")
    setOpen(true)
  }

  function details() {
    const values = { name, email, phone, websiteType, service }
    const next = validate(values)
    setErrors(next)
    if (Object.keys(next).length > 0) {
      setSent(null)
      return null
    }
    return values
  }

  function sendEmail() {
    const values = details()
    if (!values) return
    const body = quoteText(values)
    const mailto = `mailto:${studioEmail}?subject=${encodeURIComponent(`Quote for ${typeLabel(values.websiteType)}`)}&body=${encodeURIComponent(body)}`
    setHref(mailto)
    setSent("email")
    openLink(mailto, false)
  }

  function sendWhatsApp() {
    const values = details()
    if (!values) return
    const link = whatsappHref("923262803870", quoteText(values))
    setHref(link)
    setSent("whatsapp")
    openLink(link, true)
  }

  const dialog = open ? (
    <div className="fixed inset-0 z-[80] flex items-end justify-center p-3 sm:items-center sm:p-6">
      <button
        type="button"
        aria-label="Close quote form"
        className="absolute inset-0 bg-black/70"
        onClick={close}
      />
      <div
        ref={dialogRef}
        id={`quote-${id}`}
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        className="relative flex max-h-[min(100dvh-1.5rem,44rem)] w-full max-w-lg flex-col overflow-hidden rounded-3xl bg-ivory text-black shadow-2xl"
      >
        <button
          type="button"
          onClick={close}
          className="absolute top-3 right-3 z-10 inline-flex size-11 items-center justify-center rounded-full text-black/70 hover:bg-black/5"
          aria-label="Close"
        >
          <X className="size-5" />
        </button>
        <form
          className="flex min-h-0 flex-1 flex-col"
          noValidate
          onSubmit={(event) => {
            event.preventDefault()
            sendEmail()
          }}
        >
          <div className="min-h-0 flex-1 overflow-y-auto px-5 pt-5 sm:px-8 sm:pt-8">
            <h2 id={titleId} className="pr-12 font-display text-3xl leading-none">
              Get a quote
            </h2>
            <p className="mt-3 max-w-prose text-base text-black/70">
              Add your name, email, phone, and the kind of site. Nothing is sent until those are filled.
            </p>
            <div className="mt-5 space-y-4 pb-4">
          <Field label="Full name" htmlFor={`${id}-name`} error={errors.name}>
            <Input
              ref={nameRef}
              id={`${id}-name`}
              name="name"
              autoComplete="name"
              value={name}
              onChange={(event) => setName(event.target.value)}
              aria-invalid={errors.name ? true : undefined}
            />
          </Field>
          <Field label="Email" htmlFor={`${id}-email`} error={errors.email}>
            <Input
              id={`${id}-email`}
              name="email"
              type="email"
              autoComplete="email"
              inputMode="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              aria-invalid={errors.email ? true : undefined}
            />
          </Field>
          <Field label="Phone number" htmlFor={`${id}-phone`} error={errors.phone}>
            <Input
              id={`${id}-phone`}
              name="phone"
              type="tel"
              autoComplete="tel"
              inputMode="tel"
              value={phone}
              onChange={(event) => setPhone(event.target.value)}
              aria-invalid={errors.phone ? true : undefined}
            />
          </Field>
          <Field label="Website type" htmlFor={`${id}-type`} error={errors.websiteType}>
            <select
              id={`${id}-type`}
              name="websiteType"
              value={websiteType}
              onChange={(event) => setWebsiteType(event.target.value)}
              aria-invalid={errors.websiteType ? true : undefined}
              className="h-12 w-full rounded-xl border border-black/15 bg-white px-4 text-base text-black outline-none focus-visible:border-maroon focus-visible:ring-3 focus-visible:ring-maroon/25"
            >
              <option value="">Choose one</option>
              {quoteTypes.map((item) => (
                <option key={item.value} value={item.value}>
                  {item.label}
                </option>
              ))}
            </select>
          </Field>
            {Object.keys(errors).length > 0 ? (
              <p className="text-sm text-maroon" role="alert">
                Fill in every field before sending.
              </p>
            ) : null}
            </div>
          </div>
          <div className="border-t border-black/10 bg-ivory px-5 py-4 sm:px-8">
            <div className="flex flex-col gap-2">
              <button
                type="submit"
                className="inline-flex min-h-12 items-center justify-center rounded-full bg-maroon-deep px-6 text-base font-medium text-ivory hover:bg-maroon-tint"
              >
                Email
              </button>
              <button
                type="button"
                onClick={sendWhatsApp}
                className="inline-flex min-h-12 items-center justify-center rounded-full border border-maroon bg-white px-6 text-base font-medium text-maroon hover:bg-maroon-tint hover:text-ivory"
              >
                WhatsApp
              </button>
            </div>
            {sent === "email" && href ? (
              <p className="mt-3 text-sm text-black/75" role="status">
                Your email app should open with these details addressed to {studioEmail}. If it did not,{" "}
                <a className="font-medium text-maroon no-underline" href={href}>
                  open the email again
                </a>
                .
              </p>
            ) : null}
            {sent === "whatsapp" && href ? (
              <p className="mt-3 text-sm text-black/75" role="status">
                WhatsApp should open with your name, email, phone, and website type. If it did not,{" "}
                <a className="font-medium text-maroon no-underline" href={href} target="_blank" rel="noreferrer">
                  open WhatsApp again
                </a>
                .
              </p>
            ) : null}
          </div>
        </form>
      </div>
    </div>
  ) : null

  return (
    <div className="mt-5">
      <button
        ref={triggerRef}
        type="button"
        aria-expanded={open}
        aria-controls={`quote-${id}`}
        onClick={openDialog}
        className="inline-flex min-h-11 items-center text-sm text-ivory hover:text-white"
      >
        Get a quote
      </button>
      {mounted && dialog ? createPortal(dialog, document.body) : null}
    </div>
  )
}

function Field({
  label,
  htmlFor,
  error,
  children,
}: {
  label: string
  htmlFor: string
  error?: string
  children: ReactNode
}) {
  return (
    <div className="space-y-1.5">
      <Label htmlFor={htmlFor}>{label}</Label>
      {children}
      {error ? <p className="text-sm text-maroon">{error}</p> : null}
    </div>
  )
}
