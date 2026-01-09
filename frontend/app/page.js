'use client'

import Link from 'next/link'
import './globals.css'

export default function Home() {
  return (
    <div className="min-h-screen bg-black">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 glass border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center font-bold text-xl">
              F
            </div>
            <span className="text-xl font-bold">FraudForge</span>
          </div>
          <div className="flex items-center gap-6">
            <Link href="#features" className="text-gray-400 hover:text-white transition">
              Features
            </Link>
            <Link href="#how-it-works" className="text-gray-400 hover:text-white transition">
              How It Works
            </Link>
            <Link href="/dashboard" className="btn-primary">
              Launch Dashboard
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-30"></div>
        <div className="absolute inset-0 bg-radial"></div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center fade-in">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8 border border-cyan-500/20">
              <span className="w-2 h-2 bg-cyan-500 rounded-full animate-pulse"></span>
              <span className="text-sm text-cyan-400">Powered by CatBoost ML</span>
            </div>

            <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
              Detect Fraud in
              <br />
              <span className="text-gradient">Real-Time</span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-400 mb-12 max-w-3xl mx-auto">
              Enterprise-grade fraud detection powered by advanced machine learning.
              Analyze thousands of transactions instantly with 99% accuracy.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/dashboard" className="btn-primary text-lg px-8 py-4">
                Get Started Free
              </Link>
              <button className="btn-secondary text-lg px-8 py-4">
                View Demo
              </button>
            </div>

            <div className="mt-16 grid grid-cols-3 gap-8 max-w-3xl mx-auto">
              <div>
                <div className="text-4xl font-bold text-gradient-cyan mb-2">99.2%</div>
                <div className="text-sm text-gray-500">Accuracy Rate</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-gradient-cyan mb-2">&lt;100ms</div>
                <div className="text-sm text-gray-500">Processing Time</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-gradient-cyan mb-2">24/7</div>
                <div className="text-sm text-gray-500">Real-Time Monitoring</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-6 bg-black/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Enterprise Features
            </h2>
            <p className="text-xl text-gray-400">
              Everything you need to protect your business from fraud
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard
              icon="🤖"
              title="AI-Powered Detection"
              description="Advanced CatBoost ML model trained on millions of transactions for unparalleled accuracy."
            />
            <FeatureCard
              icon="⚡"
              title="Real-Time Analysis"
              description="Process and analyze transactions in milliseconds with instant risk assessment."
            />
            <FeatureCard
              icon="📊"
              title="Advanced Analytics"
              description="Comprehensive dashboards with trends, patterns, and actionable insights."
            />
            <FeatureCard
              icon="🔒"
              title="Secure Processing"
              description="Bank-grade encryption and compliance with industry security standards."
            />
            <FeatureCard
              icon="📈"
              title="Pattern Recognition"
              description="Identify complex fraud patterns across multiple transactions and merchants."
            />
            <FeatureCard
              icon="🎯"
              title="High Accuracy"
              description="99.2% accuracy with minimal false positives for reliable detection."
            />
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              How It Works
            </h2>
            <p className="text-xl text-gray-400">
              Three simple steps to fraud-free transactions
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            <StepCard
              number="01"
              title="Upload Data"
              description="Upload your transaction CSV file securely to our platform."
            />
            <StepCard
              number="02"
              title="AI Analysis"
              description="Our ML model analyzes patterns, behaviors, and risk indicators."
            />
            <StepCard
              number="03"
              title="Get Results"
              description="Receive detailed reports with risk scores and actionable insights."
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center glass-hover rounded-2xl p-12 glow-cyan">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Protect Your Business?
          </h2>
          <p className="text-xl text-gray-400 mb-8">
            Start detecting fraud in minutes. No credit card required.
          </p>
          <Link href="/dashboard" className="btn-primary text-lg px-8 py-4 inline-block">
            Launch Dashboard →
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/5 py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg"></div>
                <span className="font-bold">FraudGuard AI</span>
              </div>
              <p className="text-sm text-gray-500">
                Enterprise fraud detection powered by advanced machine learning.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Product</h3>
              <ul className="space-y-2 text-sm text-gray-500">
                <li><a href="#" className="hover:text-white transition">Features</a></li>
                <li><a href="#" className="hover:text-white transition">Pricing</a></li>
                <li><a href="#" className="hover:text-white transition">API</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-sm text-gray-500">
                <li><a href="#" className="hover:text-white transition">About</a></li>
                <li><a href="#" className="hover:text-white transition">Blog</a></li>
                <li><a href="#" className="hover:text-white transition">Careers</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Legal</h3>
              <ul className="space-y-2 text-sm text-gray-500">
                <li><a href="#" className="hover:text-white transition">Privacy</a></li>
                <li><a href="#" className="hover:text-white transition">Terms</a></li>
                <li><a href="#" className="hover:text-white transition">Security</a></li>
              </ul>
            </div>
          </div>
          <div className="divider"></div>
          <div className="flex flex-col md:flex-row items-center justify-between text-sm text-gray-500">
            <p>© 2026 FraudGuard AI. All rights reserved.</p>
            <div className="flex items-center gap-4 mt-4 md:mt-0">
              <span>Built with Next.js + FastAPI</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

function FeatureCard({ icon, title, description }) {
  return (
    <div className="card hover-scale fade-in">
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-400 text-sm leading-relaxed">{description}</p>
    </div>
  )
}

function StepCard({ number, title, description }) {
  return (
    <div className="text-center fade-in">
      <div className="inline-flex items-center justify-center w-16 h-16 rounded-full glass mb-6 text-2xl font-bold text-gradient-cyan border border-cyan-500/20">
        {number}
      </div>
      <h3 className="text-2xl font-semibold mb-3">{title}</h3>
      <p className="text-gray-400 leading-relaxed">{description}</p>
    </div>
  )
}
