// 'use client'

// import Link from 'next/link'
// import './globals.css'

// export default function Home() {
//   return (
//     <div className="min-h-screen bg-black">
//       {/* Navigation */}
//       <nav className="fixed top-0 w-full z-50 glass border-b border-white/5">
//         <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
//           <div className="flex items-center gap-2">
//             <div className="w-10 h-10 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center font-bold text-xl">
//               F
//             </div>
//             <span className="text-xl font-bold">FraudForge</span>
//           </div>
//           <div className="flex items-center gap-6">
//             <Link href="#features" className="text-gray-400 hover:text-white transition">
//               Features
//             </Link>
//             <Link href="#how-it-works" className="text-gray-400 hover:text-white transition">
//               How It Works
//             </Link>
//             <Link href="/dashboard" className="btn-primary">
//               Launch Dashboard
//             </Link>
//           </div>
//         </div>
//       </nav>

//       {/* Hero Section */}
//       <section className="relative pt-32 pb-20 px-6 overflow-hidden">
//         <div className="absolute inset-0 bg-grid opacity-30"></div>
//         <div className="absolute inset-0 bg-radial"></div>

//         <div className="max-w-7xl mx-auto relative z-10">
//           <div className="text-center fade-in">
//             <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8 border border-cyan-500/20">
//               <span className="w-2 h-2 bg-cyan-500 rounded-full animate-pulse"></span>
//               <span className="text-sm text-cyan-400">Powered by CatBoost ML</span>
//             </div>

//             <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
//               Detect Fraud in
//               <br />
//               <span className="text-gradient">Real-Time</span>
//             </h1>

//             <p className="text-xl md:text-2xl text-gray-400 mb-12 max-w-3xl mx-auto">
//               Enterprise-grade fraud detection powered by advanced machine learning.
//               Analyze thousands of transactions instantly with 99% accuracy.
//             </p>

//             <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
//               <Link href="/dashboard" className="btn-primary text-lg px-8 py-4">
//                 Get Started Free
//               </Link>
//               <button className="btn-secondary text-lg px-8 py-4">
//                 View Demo
//               </button>
//             </div>

//             <div className="mt-16 grid grid-cols-3 gap-8 max-w-3xl mx-auto">
//               <div>
//                 <div className="text-4xl font-bold text-gradient-cyan mb-2">99.2%</div>
//                 <div className="text-sm text-gray-500">Accuracy Rate</div>
//               </div>
//               <div>
//                 <div className="text-4xl font-bold text-gradient-cyan mb-2">&lt;100ms</div>
//                 <div className="text-sm text-gray-500">Processing Time</div>
//               </div>
//               <div>
//                 <div className="text-4xl font-bold text-gradient-cyan mb-2">24/7</div>
//                 <div className="text-sm text-gray-500">Real-Time Monitoring</div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Features Section */}
//       <section id="features" className="py-20 px-6 bg-black/50">
//         <div className="max-w-7xl mx-auto">
//           <div className="text-center mb-16">
//             <h2 className="text-4xl md:text-5xl font-bold mb-4">
//               Enterprise Features
//             </h2>
//             <p className="text-xl text-gray-400">
//               Everything you need to protect your business from fraud
//             </p>
//           </div>

//           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//             <FeatureCard
//               icon="🤖"
//               title="AI-Powered Detection"
//               description="Advanced CatBoost ML model trained on millions of transactions for unparalleled accuracy."
//             />
//             <FeatureCard
//               icon="⚡"
//               title="Real-Time Analysis"
//               description="Process and analyze transactions in milliseconds with instant risk assessment."
//             />
//             <FeatureCard
//               icon="📊"
//               title="Advanced Analytics"
//               description="Comprehensive dashboards with trends, patterns, and actionable insights."
//             />
//             <FeatureCard
//               icon="🔒"
//               title="Secure Processing"
//               description="Bank-grade encryption and compliance with industry security standards."
//             />
//             <FeatureCard
//               icon="📈"
//               title="Pattern Recognition"
//               description="Identify complex fraud patterns across multiple transactions and merchants."
//             />
//             <FeatureCard
//               icon="🎯"
//               title="High Accuracy"
//               description="99.2% accuracy with minimal false positives for reliable detection."
//             />
//           </div>
//         </div>
//       </section>

//       {/* How It Works */}
//       <section id="how-it-works" className="py-20 px-6">
//         <div className="max-w-7xl mx-auto">
//           <div className="text-center mb-16">
//             <h2 className="text-4xl md:text-5xl font-bold mb-4">
//               How It Works
//             </h2>
//             <p className="text-xl text-gray-400">
//               Three simple steps to fraud-free transactions
//             </p>
//           </div>

//           <div className="grid md:grid-cols-3 gap-12">
//             <StepCard
//               number="01"
//               title="Upload Data"
//               description="Upload your transaction CSV file securely to our platform."
//             />
//             <StepCard
//               number="02"
//               title="AI Analysis"
//               description="Our ML model analyzes patterns, behaviors, and risk indicators."
//             />
//             <StepCard
//               number="03"
//               title="Get Results"
//               description="Receive detailed reports with risk scores and actionable insights."
//             />
//           </div>
//         </div>
//       </section>

//       {/* CTA Section */}
//       <section className="py-20 px-6">
//         <div className="max-w-4xl mx-auto text-center glass-hover rounded-2xl p-12 glow-cyan">
//           <h2 className="text-4xl md:text-5xl font-bold mb-6">
//             Ready to Protect Your Business?
//           </h2>
//           <p className="text-xl text-gray-400 mb-8">
//             Start detecting fraud in minutes. No credit card required.
//           </p>
//           <Link href="/dashboard" className="btn-primary text-lg px-8 py-4 inline-block">
//             Launch Dashboard →
//           </Link>
//         </div>
//       </section>

//       {/* Footer */}
//       <footer className="border-t border-white/5 py-12 px-6">
//         <div className="max-w-7xl mx-auto">
//           <div className="grid md:grid-cols-4 gap-8 mb-8">
//             <div>
//               <div className="flex items-center gap-2 mb-4">
//                 <div className="w-8 h-8 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg"></div>
//                 <span className="font-bold">FraudForge</span>
//               </div>
//               <p className="text-sm text-gray-500">
//                 Enterprise fraud detection powered by advanced machine learning.
//               </p>
//             </div>
//             <div>
//               <h3 className="font-semibold mb-4">Product</h3>
//               <ul className="space-y-2 text-sm text-gray-500">
//                 <li><a href="#" className="hover:text-white transition">Features</a></li>
//                 <li><a href="#" className="hover:text-white transition">Pricing</a></li>
//                 <li><a href="#" className="hover:text-white transition">API</a></li>
//               </ul>
//             </div>
//             <div>
//               <h3 className="font-semibold mb-4">Company</h3>
//               <ul className="space-y-2 text-sm text-gray-500">
//                 <li><a href="#" className="hover:text-white transition">About</a></li>
//                 <li><a href="#" className="hover:text-white transition">Blog</a></li>
//                 <li><a href="#" className="hover:text-white transition">Careers</a></li>
//               </ul>
//             </div>
//             <div>
//               <h3 className="font-semibold mb-4">Legal</h3>
//               <ul className="space-y-2 text-sm text-gray-500">
//                 <li><a href="#" className="hover:text-white transition">Privacy</a></li>
//                 <li><a href="#" className="hover:text-white transition">Terms</a></li>
//                 <li><a href="#" className="hover:text-white transition">Security</a></li>
//               </ul>
//             </div>
//           </div>
//           <div className="divider"></div>
//           <div className="flex flex-col md:flex-row items-center justify-between text-sm text-gray-500">
//             <p>© 2026 FraudForge. All rights reserved.</p>
//             <div className="flex items-center gap-4 mt-4 md:mt-0">
//               <span>Built with Next.js + FastAPI</span>
//             </div>
//           </div>
//         </div>
//       </footer>
//     </div>
//   )
// }

// function FeatureCard({ icon, title, description }) {
//   return (
//     <div className="card hover-scale fade-in">
//       <div className="text-4xl mb-4">{icon}</div>
//       <h3 className="text-xl font-semibold mb-2">{title}</h3>
//       <p className="text-gray-400 text-sm leading-relaxed">{description}</p>
//     </div>
//   )
// }

// function StepCard({ number, title, description }) {
//   return (
//     <div className="text-center fade-in">
//       <div className="inline-flex items-center justify-center w-16 h-16 rounded-full glass mb-6 text-2xl font-bold text-gradient-cyan border border-cyan-500/20">
//         {number}
//       </div>
//       <h3 className="text-2xl font-semibold mb-3">{title}</h3>
//       <p className="text-gray-400 leading-relaxed">{description}</p>
//     </div>
//   )
// }


'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function Home() {
  const [hoveredFeature, setHoveredFeature] = useState(null)

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="border-b border-white/5 sticky top-0 z-50 glass">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center font-bold text-xl">
              F
            </div>
            <span className="text-xl font-bold">FraudForge</span>
          </div>
          <Link href="/dashboard" className="btn-primary px-6 py-2">
            Launch Dashboard
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/10 via-transparent to-transparent"></div>
        <div className="max-w-7xl mx-auto px-6 py-24 relative">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-block mb-6 px-4 py-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full text-sm font-semibold text-cyan-400">
              🚀 AI-Powered Fraud Detection
            </div>
            <h1 className="text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-cyan-200 to-blue-400 bg-clip-text text-transparent">
              Detect Financial Fraud with Machine Learning
            </h1>
            <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
              Advanced CatBoost ML model analyzes transaction patterns in real-time, 
              identifying fraudulent activities with industry-leading accuracy.
            </p>
            <div className="flex gap-4 justify-center">
              <Link href="/dashboard" className="btn-primary px-8 py-4 text-lg">
                Try Demo →
              </Link>
              <a 
                href="https://github.com/aryaniscoding/FraudForge" 
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary px-8 py-4 text-lg"
              >
                View on GitHub
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 mt-16 max-w-2xl mx-auto">
              <div>
                <div className="text-3xl font-bold text-cyan-400">99.2%</div>
                <div className="text-sm text-gray-400 mt-1">Accuracy</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-cyan-400">&lt;500ms</div>
                <div className="text-sm text-gray-400 mt-1">Response Time</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-cyan-400">1M+</div>
                <div className="text-sm text-gray-400 mt-1">Transactions</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Powerful Features</h2>
            <p className="text-gray-400 text-lg">Everything you need for fraud detection</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, idx) => (
              <div
                key={idx}
                onMouseEnter={() => setHoveredFeature(idx)}
                onMouseLeave={() => setHoveredFeature(null)}
                className={`card glow-cyan transition-all duration-300 ${
                  hoveredFeature === idx ? 'scale-105' : ''
                }`}
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-400 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="py-24 bg-gradient-to-b from-transparent to-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Built with Modern Tech</h2>
            <p className="text-gray-400 text-lg">Powered by industry-leading frameworks</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {techStack.map((tech, idx) => (
              <div key={idx} className="card text-center">
                <div className="text-3xl mb-3">{tech.icon}</div>
                <div className="font-semibold">{tech.name}</div>
                <div className="text-sm text-gray-400 mt-1">{tech.role}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="card glow-cyan">
            <h2 className="text-4xl font-bold mb-4">Ready to Detect Fraud?</h2>
            <p className="text-gray-400 text-lg mb-8">
              Upload your transaction data and get instant AI-powered analysis
            </p>
            <Link href="/dashboard" className="btn-primary px-8 py-4 text-lg inline-block">
              Get Started Free →
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/5 py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Brand */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center font-bold text-xl">
                  F
                </div>
                <span className="text-xl font-bold">FraudForge AI</span>
              </div>
              <p className="text-gray-400 text-sm">
                Advanced machine learning-powered fraud detection system for financial transactions.
              </p>
            </div>

            {/* Links */}
            <div>
              <h3 className="font-semibold mb-4">Quick Links</h3>
              <div className="space-y-2 text-sm">
                <Link href="/dashboard" className="block text-gray-400 hover:text-white transition-colors">
                  Dashboard
                </Link>
                <a 
                  href="https://github.com/aryaniscoding/FraudForge" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-gray-400 hover:text-white transition-colors"
                >
                  GitHub Repository
                </a>
                <a 
                  href="https://github.com/aryaniscoding/FraudForge/blob/main/README.md" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-gray-400 hover:text-white transition-colors"
                >
                  Documentation
                </a>
              </div>
            </div>

            {/* Tech Stack */}
            <div>
              <h3 className="font-semibold mb-4">Technology</h3>
              <div className="space-y-2 text-sm text-gray-400">
                <div>FastAPI • Python</div>
                <div>Next.js 14 • React</div>
                <div>CatBoost ML Model</div>
                <div>TailwindCSS</div>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm text-gray-400">
              © 2026 FraudForge. Built for Tech Fiesta 2026.
            </div>
            <div className="flex items-center gap-6">
              <div className="text-sm text-gray-400">
                Developed by <span className="text-cyan-400 font-semibold">Aryan</span>
              </div>
              <div className="flex items-center gap-4">
                <a 
                  href="https://github.com/aryaniscoding" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                  title="GitHub Profile"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                  </svg>
                </a>
                <a 
                  href="https://linkedin.com/in/aryansahu27" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                  title="LinkedIn Profile"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

const features = [
  {
    icon: '🎯',
    title: 'Real-time Detection',
    description: 'Instant fraud analysis with sub-500ms response times for production-ready performance.',
  },
  {
    icon: '🧠',
    title: 'CatBoost ML Model',
    description: 'State-of-the-art gradient boosting algorithm trained on millions of transactions.',
  },
  {
    icon: '📊',
    title: 'Visual Analytics',
    description: 'Interactive dashboards with charts, risk distributions, and fraud insights.',
  },
  {
    icon: '🔒',
    title: 'Secure Processing',
    description: 'Enterprise-grade security with encrypted data handling and secure API endpoints.',
  },
  {
    icon: '⚡',
    title: 'Batch Processing',
    description: 'Upload CSV files with thousands of transactions for bulk fraud detection.',
  },
  {
    icon: '📈',
    title: 'Detailed Reports',
    description: 'Comprehensive statistics, fraud patterns, and exportable analysis reports.',
  },
]

const techStack = [
  { icon: '⚛️', name: 'Next.js 14', role: 'Frontend' },
  { icon: '🐍', name: 'FastAPI', role: 'Backend' },
  { icon: '🤖', name: 'CatBoost', role: 'ML Model' },
  { icon: '🎨', name: 'Tailwind CSS', role: 'Styling' },
  { icon: '🚂', name: 'Railway', role: 'Backend Host' },
  { icon: '▲', name: 'Vercel', role: 'Frontend Host' },
  { icon: '📦', name: 'Pandas', role: 'Data Processing' },
  { icon: '🔢', name: 'NumPy', role: 'Computation' },
]
