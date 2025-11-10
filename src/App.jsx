import React from 'react'
import Spline from '@splinetool/react-spline'
import { ArrowRight, Sparkles, CheckCircle2, BarChart3, Layers, Users, FileSpreadsheet, Settings2, Download, UploadCloud, Building2, Briefcase, Megaphone, Globe, ShieldCheck, Star } from 'lucide-react'

const Container = ({ children, className = '' }) => (
  <div className={`mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8 ${className}`}>{children}</div>
)

const PrimaryButton = ({ children, className = '' }) => (
  <a href="#start" className={`inline-flex items-center justify-center rounded-full bg-emerald-600 px-5 py-3 text-white font-semibold shadow-sm hover:bg-emerald-700 transition-colors ${className}`}>
    {children}
  </a>
)

const SecondaryButton = ({ children, className = '' }) => (
  <a href="#demo" className={`inline-flex items-center justify-center rounded-full border border-gray-300 bg-white px-5 py-3 text-gray-900 font-semibold hover:bg-gray-50 transition-colors ${className}`}>
    {children}
  </a>
)

const SectionTitle = ({ eyebrow, title, subtitle }) => (
  <div className="text-center space-y-3">
    {eyebrow && <p className="text-emerald-600 font-semibold tracking-wide">{eyebrow}</p>}
    <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-gray-900">{title}</h2>
    {subtitle && <p className="text-gray-600 max-w-2xl mx-auto">{subtitle}</p>}
  </div>
)

export default function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Nav */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-gray-100">
        <Container className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg bg-emerald-600/10 grid place-items-center">
              <Sparkles className="h-4 w-4 text-emerald-700" />
            </div>
            <span className="font-semibold tracking-tight">Sekata.ai</span>
          </div>
          <div className="hidden sm:flex items-center gap-3">
            <a href="#features" className="text-sm text-gray-600 hover:text-gray-900">Features</a>
            <a href="#integrations" className="text-sm text-gray-600 hover:text-gray-900">Integrations</a>
            <a href="#pricing" className="text-sm text-gray-600 hover:text-gray-900">Pricing</a>
            <a href="#demo" className="text-sm text-gray-600 hover:text-gray-900">Demo</a>
          </div>
          <div className="flex items-center gap-3">
            <SecondaryButton>Book Demo</SecondaryButton>
            <PrimaryButton>
              Start Free
              <ArrowRight className="ml-2 h-4 w-4" />
            </PrimaryButton>
          </div>
        </Container>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <Spline scene="https://prod.spline.design/LU2mWMPbF3Qi1Qxh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        </div>
        <div className="relative">
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/80 via-white/70 to-white" />
          <Container>
            <div className="relative z-10 pt-24 pb-28 sm:pt-28 sm:pb-36">
              <div className="max-w-3xl">
                <div className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white/80 px-3 py-1 text-xs text-gray-600 backdrop-blur">
                  <ShieldCheck className="h-3.5 w-3.5 text-emerald-600" />
                  Built for agencies
                </div>
                <h1 className="mt-4 text-4xl sm:text-6xl font-semibold tracking-tight">
                  Reporting That Practically Builds Itself
                </h1>
                <p className="mt-5 text-lg text-gray-700">
                  Automate 80% of your reporting with templates, AI insights, and multi-brand dashboards.
                </p>
                <div className="mt-8 flex flex-col sm:flex-row items-center gap-3">
                  <PrimaryButton>
                    Start Free
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </PrimaryButton>
                  <SecondaryButton>Book Demo</SecondaryButton>
                </div>
                <div className="mt-6 flex items-center gap-6 text-xs text-gray-500">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-emerald-600" /> No credit card
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-emerald-600" /> White-label
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-emerald-600" /> Multi-brand
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </div>
      </section>

      {/* Problem */}
      <section id="problem" className="py-20">
        <Container>
          <SectionTitle
            eyebrow="The Problem"
            title="Dashboards aren’t enough anymore."
            subtitle="Traditional tools show you data — then leave you doing the real work: screenshots, custom charts, and monthly analysis. That’s hours lost every reporting cycle."
          />
          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {[
              'Manual screenshots across platforms',
              'Rebuilding the same charts every month',
              'Writing analysis from scratch for each client',
            ].map((item) => (
              <div key={item} className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
                <div className="flex items-start gap-3">
                  <BarChart3 className="h-5 w-5 text-emerald-600 mt-0.5" />
                  <p className="text-gray-700">{item}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Solution with background image (fixed visibility) */}
      <section id="solution" className="relative py-24">
        <div className="absolute inset-0 -z-10">
          <img
            src="https://images.unsplash.com/photo-1551281044-57544b7e79ae?q=80&w=2000&auto=format&fit=crop"
            alt="Social dashboard background"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-white/60 backdrop-blur-[1px]" />
        </div>
        <Container className="relative z-10">
          <SectionTitle
            eyebrow="The Solution"
            title="The First Reporting Automation Engine Built for Agencies"
            subtitle="Automate data pulling, apply your own templates, add AI insights, and export beautiful, white‑labelled reports in minutes."
          />
          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {[
              { icon: Layers, title: 'Template-Driven', desc: 'Standardize layouts and narratives once. Reuse across clients with one click.' },
              { icon: Sparkles, title: 'AI Insights', desc: 'Auto-generate highlights, explanations, and next steps tailored to each brand.' },
              { icon: Users, title: 'Multi-Brand Workflows', desc: 'Manage dozens of brands in one workspace with clean separation.' },
              { icon: FileSpreadsheet, title: 'Bring Your Own Data', desc: 'Upload CSV/Sheets to enrich platform data with your custom sources.' },
            ].map(({ icon: Icon, title, desc }) => (
              <div key={title} className="rounded-2xl border border-gray-200 bg-white/90 p-6 shadow-sm backdrop-blur">
                <div className="flex items-start gap-4">
                  <div className="h-10 w-10 rounded-xl bg-emerald-600/10 grid place-items-center">
                    <Icon className="h-5 w-5 text-emerald-700" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">{title}</h3>
                    <p className="mt-1 text-gray-600">{desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Benefits split 50/50 with image */}
      <section id="benefits" className="py-20">
        <Container>
          <div className="grid gap-10 lg:grid-cols-2 items-center">
            <div>
              <div className="text-left space-y-3">
                <p className="text-emerald-600 font-semibold tracking-wide">Benefits</p>
                <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-gray-900">What you get, instantly</h2>
                <p className="text-gray-600 max-w-xl">Automate the busywork and spend time on strategy. These wins land on day one.</p>
              </div>
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {[
                  { icon: ClockIcon, label: 'Save 3–4 days per month' },
                  { icon: Sparkles, label: 'AI insights' },
                  { icon: Layers, label: 'Custom templates' },
                  { icon: Users, label: 'Multi-brand' },
                  { icon: UploadCloud, label: 'Upload your own data' },
                  { icon: Download, label: 'Export instantly' },
                ].map(({ icon: Icon, label }) => (
                  <div key={label} className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 rounded-xl bg-emerald-600/10 grid place-items-center">
                        <Icon className="h-5 w-5 text-emerald-700" />
                      </div>
                      <p className="font-medium text-gray-800">{label}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-3 bg-gradient-to-tr from-emerald-100/60 via-white to-emerald-50 rounded-3xl blur-2xl -z-10" />
              <img
                src="https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=1600&auto=format&fit=crop"
                alt="Analytics report preview"
                className="w-full rounded-2xl border border-gray-200 shadow-sm object-cover"
              />
            </div>
          </div>
        </Container>
      </section>

      {/* Features */}
      <section id="features" className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <Container>
          <SectionTitle
            eyebrow="Features"
            title="Everything you need to automate reporting"
          />
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { icon: Settings2, title: 'Automated data pulling', desc: 'Connect channels once. We refresh automatically.' },
              { icon: Layers, title: 'Template builder', desc: 'Design report sections with drag-and-drop building blocks.' },
              { icon: Sparkles, title: 'AI insights', desc: 'Let AI surface trends and write client-ready summaries.' },
              { icon: FileSpreadsheet, title: 'Upload data (CSV/Sheets)', desc: 'Blend owned metrics with external sources.' },
              { icon: Users, title: 'Multi-brand workspace', desc: 'Keep brands organized with roles and permissions.' },
              { icon: Download, title: 'Export & white-label', desc: 'PDF, slides, web links — with your logo and style.' },
            ].map(({ icon: Icon, title, desc }) => (
              <div key={title} className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
                <div className="h-12 w-12 rounded-xl bg-emerald-600/10 grid place-items-center">
                  <Icon className="h-6 w-6 text-emerald-700" />
                </div>
                <h3 className="mt-4 font-semibold text-gray-900">{title}</h3>
                <p className="mt-1 text-gray-600">{desc}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Who it's for - updated to 4 blocks */}
      <section id="who" className="py-20">
        <Container>
          <SectionTitle
            eyebrow="Who it’s for"
            title="Built for agencies and brand leaders"
            subtitle="Purpose-built blocks for the people who own reporting outcomes."
          />
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: Building2, title: 'Agencies', desc: 'Standardize reporting across clients with white‑label exports.' },
              { icon: Briefcase, title: 'Strategists', desc: 'Turn insights into ready-to-send recommendations.' },
              { icon: Megaphone, title: 'Brand Teams', desc: 'Keep stakeholders aligned with consistent, clear reports.' },
              { icon: Globe, title: 'CMOs', desc: 'See what matters, fast — outcomes, trends, and next steps.' },
            ].map(({ icon: Icon, title, desc }) => (
              <div key={title} className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
                <div className="h-10 w-10 rounded-xl bg-emerald-600/10 grid place-items-center">
                  <Icon className="h-5 w-5 text-emerald-700" />
                </div>
                <h3 className="mt-4 font-semibold text-gray-900">{title}</h3>
                <p className="mt-1 text-gray-600">{desc}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Integrations with unified green icons and removed YouTube/LinkedIn */}
      <section id="integrations" className="py-20 bg-gray-50">
        <Container>
          <SectionTitle eyebrow="Integrations" title="Plug in your channels and data" />
          <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              { label: 'Instagram', icon: IGIcon },
              { label: 'TikTok', icon: TikTokIcon },
              { label: 'Facebook', icon: FBIcon },
              { label: 'X/Twitter', icon: XIcon },
              { label: 'CSV', icon: CSVIcon },
              { label: 'Google Sheets', icon: SheetsIcon },
            ].map(({ label, icon: Icon }) => (
              <div key={label} className="rounded-xl border border-gray-200 bg-white px-4 py-3 flex items-center gap-2">
                <div className="h-6 w-6 text-gray-800"><Icon /></div>
                <span className="text-sm text-gray-700">{label}</span>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Testimonials bigger cards with names */}
      <section id="testimonials" className="py-20">
        <Container>
          <SectionTitle eyebrow="What agencies say" title="Proof from the field" />
          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            {[
              { quote: '“Cut reporting time from 3 days to 1 hour.”', name: 'Ava Patel', company: 'Northstar Digital' },
              { quote: '“Clients love the clarity.”', name: 'Liam Chen', company: 'BrightWave Agency' },
              { quote: '“A game changer for agencies.”', name: 'Sophia García', company: 'Arc & Arrow' },
            ].map(({ quote, name, company }) => (
              <div key={quote} className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
                <p className="text-lg leading-relaxed text-gray-900">{quote}</p>
                <div className="mt-6 flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-emerald-600/10 grid place-items-center text-emerald-700 font-semibold">
                    {name.split(' ').map(n=>n[0]).slice(0,2).join('')}
                  </div>
                  <div className="text-sm">
                    <div className="font-medium text-gray-900">{name}</div>
                    <div className="text-gray-600">{company}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Pricing preview updated */}
      <section id="pricing" className="py-20 bg-gradient-to-b from-white to-gray-50">
        <Container>
          <SectionTitle eyebrow="Pricing" title="Simple plans for every stage" />
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                name: 'Starter',
                desc: 'For solo operators and early teams getting started.',
                features: ['Reporting automation','Template library','Basic exports'],
                cta: 'Start Free',
              },
              {
                name: 'Pro',
                desc: 'For growing teams that want AI and advanced exports.',
                features: ['AI insights','Advanced templates','White‑label exports'],
                cta: 'Start Pro',
                featured: true,
                badge: 'Popular',
              },
              {
                name: 'Enterprise',
                desc: 'For security, compliance, and custom workflows.',
                features: ['SSO/SAML','Custom onboarding','Security reviews'],
                cta: 'Contact Us',
              },
            ].map(({ name, desc, features, cta, featured, badge }) => (
              <div
                key={name}
                className={`relative rounded-2xl border ${featured ? 'border-emerald-200 ring-2 ring-emerald-100' : 'border-gray-200'} bg-white p-6 shadow-sm flex flex-col`}
              >
                {badge && (
                  <span className="absolute -top-3 left-4 inline-flex items-center gap-1 rounded-full bg-emerald-600 px-2 py-1 text-xs font-medium text-white">
                    <Star className="h-3 w-3" /> {badge}
                  </span>
                )}
                <h3 className="text-lg font-semibold">{name}</h3>
                <p className="mt-2 text-sm text-gray-600 flex-1">{desc}</p>
                <ul className="mt-4 space-y-2 text-sm text-gray-700">
                  {features.map((f) => (
                    <li key={f} className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-emerald-600" /> {f}</li>
                  ))}
                </ul>
                <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <PrimaryButton className="w-full">{cta}</PrimaryButton>
                  <SecondaryButton className="w-full">Book Demo</SecondaryButton>
                </div>
              </div>
            ))}
          </div>

          {/* Additional CTA for multi-brand agencies */}
          <div className="mt-8 rounded-2xl border border-emerald-200 bg-emerald-50 p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <h4 className="text-lg font-semibold text-emerald-900">Managing multiple brands?</h4>
              <p className="text-emerald-900/80">Get tailored pricing and onboarding for agencies running multi‑brand workflows.</p>
            </div>
            <a href="#contact" className="inline-flex items-center justify-center rounded-full bg-emerald-600 px-5 py-3 text-white font-semibold shadow-sm hover:bg-emerald-700 transition-colors">
              Talk to our team
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </div>
        </Container>
      </section>

      {/* Final CTA */}
      <section className="py-24">
        <Container>
          <div className="relative isolate overflow-hidden rounded-3xl border border-gray-200 bg-white p-10 sm:p-14">
            <div className="absolute inset-0 -z-0 bg-gradient-to-r from-emerald-50 via-white to-emerald-50" />
            <div className="relative z-10 flex flex-col items-start gap-6 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h3 className="text-2xl sm:text-3xl font-semibold tracking-tight">Ready to Automate Your Reporting?</h3>
                <p className="mt-2 text-gray-600">Start free or book a demo — your future self will thank you.</p>
              </div>
              <div className="flex items-center gap-3">
                <PrimaryButton>
                  Start Free
                  <ArrowRight className="ml-2 h-4 w-4" />
                </PrimaryButton>
                <SecondaryButton>Book Demo</SecondaryButton>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Footer */}
      <footer className="py-10 border-t border-gray-100">
        <Container className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-gray-500">
          <div className="flex items-center gap-2">
            <div className="h-7 w-7 rounded-lg bg-emerald-600/10 grid place-items-center">
              <Sparkles className="h-4 w-4 text-emerald-700" />
            </div>
            <span className="font-medium text-gray-700">Sekata.ai</span>
          </div>
          <p>© {new Date().getFullYear()} Sekata.ai — Reporting automation for agencies</p>
        </Container>
      </footer>
    </div>
  )
}

// Local icon for time to avoid extra deps
function ClockIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5" {...props}>
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  )
}

const GREEN = '#10B981'

// Flat brand-ish icons (now unified green tone)
function IGIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="3" y="3" width="18" height="18" rx="5" fill={GREEN}/>
      <rect x="7.5" y="7.5" width="9" height="9" rx="4.5" fill="white"/>
      <circle cx="17" cy="7" r="1.3" fill="white"/>
    </svg>
  )
}
function TikTokIcon() {
  return (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <rect width="24" height="24" rx="4" fill={GREEN}/>
      <path d="M14 6c1.2 1.9 2.5 2.7 4 3v2.2c-1.7-.1-3-.7-4-1.5v4.3c0 2.5-2 4.5-4.5 4.5S5 16.5 5 14s2-4.5 4.5-4.5c.5 0 1 .1 1.5.3v2.3c-.4-.2-.9-.3-1.5-.3C7.9 11.8 7 12.8 7 14c0 1.2 1 2.2 2.2 2.2s2.3-1 2.3-2.2V6h2.5z" fill="#fff"/>
    </svg>
  )
}
function FBIcon() {
  return (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <rect width="24" height="24" rx="4" fill={GREEN}/>
      <path d="M13.5 8H15V5h-2c-2 0-3.5 1.6-3.5 3.5V11H7v3h2.5v5H13v-5h2.2l.3-3H13v-1.3c0-.4.3-.7.7-.7h-.2z" fill="#fff"/>
    </svg>
  )
}
function XIcon() {
  return (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <rect width="24" height="24" rx="4" fill={GREEN}/>
      <path d="M7 7l10 10M17 7L7 17" stroke="#fff" strokeWidth="2" strokeLinecap="round"/>
    </svg>
  )
}
function CSVIcon() {
  return (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <rect width="24" height="24" rx="4" fill={GREEN}/>
      <text x="12" y="14" textAnchor="middle" fontSize="7" fontFamily="Arial" fill="#fff">CSV</text>
    </svg>
  )
}
function SheetsIcon() {
  return (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <rect width="24" height="24" rx="4" fill={GREEN}/>
      <rect x="6" y="6" width="12" height="12" fill="#fff"/>
      <path d="M8 10h8M8 14h8" stroke={GREEN} strokeWidth="1.5"/>
    </svg>
  )
}
