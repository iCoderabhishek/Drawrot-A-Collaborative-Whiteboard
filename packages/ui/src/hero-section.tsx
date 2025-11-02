"use client"

import { Pencil, Zap, Users, Lock } from 'lucide-react';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

interface HeroProps {
  onDashboard?: () => void; 
  onSignin?: () => void; 
  onCTA?: () => void; 
}



function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <div className="bg-white border-2 border-gray-900 p-6 hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all duration-200 hover:-translate-y-1">
      <div className="mb-4 text-gray-900">{icon}</div>
      <h3 className="text-xl font-bold mb-2 text-gray-900">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

export const Hero: React.FC<HeroProps> = ({ onDashboard, onSignin, onCTA }) => {
  return (
    <div className="min-h-screen bg-amber-50">
      <nav className="border-b-2 border-gray-900 bg-white">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Pencil className="w-8 h-8 text-gray-900" strokeWidth={2.5} />
            <span className="text-2xl font-bold text-gray-900">Drawrot</span>
          </div>
          <div className="flex items-center gap-4">
            <button onClick={onSignin} className="px-6 py-2 font-semibold cursor-pointer text-gray-900 hover:underline">
              Sign In
            </button>
            <button onClick={onDashboard}
            className="px-6 rounded-sm py-2 bg-gray-900 cursor-pointer text-white font-semibold border-2 border-gray-900 hover:bg-gray-800 transition-colors">
              Start Drawing
            </button>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-20">
          <h1 className="text-6xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
            Sketch ideas.
            <br />
            <span className="relative inline-block">
              Think freely.
              <svg
                className="absolute -bottom-2 left-0 w-full"
                height="12"
                viewBox="0 0 300 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2 10C70 3 230 3 298 10"
                  stroke="#EAB308"
                  strokeWidth="4"
                  strokeLinecap="round"
                />
              </svg>
            </span>
          </h1>
          <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
            The collaborative whiteboard that brings your ideas to life with a
            hand-drawn feel. No learning curve, just pure creativity.
          </p>
          <div className="flex items-center justify-center gap-4">
            <button onClick={onCTA}
            className="px-8 py-4 bg-gray-900 text-white font-semibold text-lg border-2 border-gray-900 hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all duration-200 hover:-translate-y-1">
              Try Drawrot Free
            </button>
            <button className="px-8 py-4 bg-white text-gray-900 font-semibold text-lg border-2 border-gray-900 hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all duration-200 hover:-translate-y-1">
              View Examples
            </button>
          </div>
        </div>

        <div className="mb-20">
          <div className="bg-white border-4 border-gray-900 p-8 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]">
            <div className="aspect-video bg-amber-50 border-2 border-gray-900 flex items-center justify-center">
              <div className="text-center">
                <Pencil className="w-16 h-16 mx-auto mb-4 text-gray-400" />
                <p className="text-gray-400 text-lg font-medium">
                  Canvas Preview
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-20">
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-12">
            Everything you need to collaborate
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <FeatureCard
              icon={<Zap className="w-10 h-10" strokeWidth={2.5} />}
              title="Lightning Fast"
              description="Start drawing instantly. No setup, no friction, just your ideas."
            />
            <FeatureCard
              icon={<Users className="w-10 h-10" strokeWidth={2.5} />}
              title="Real-time Sync"
              description="Work together in real-time with your team, anywhere in the world."
            />
            <FeatureCard
              icon={<Lock className="w-10 h-10" strokeWidth={2.5} />}
              title="Private & Secure"
              description="End-to-end encryption keeps your work safe and confidential."
            />
            <FeatureCard
              icon={<Pencil className="w-10 h-10" strokeWidth={2.5} />}
              title="Hand-drawn Feel"
              description="Beautiful sketchy aesthetics that feel natural and creative."
            />
          </div>
        </div>

        <div className="bg-yellow-400 border-4 border-gray-900 p-12 text-center shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Ready to start drawing?
          </h2>
          <p className="text-xl text-gray-900 mb-8 max-w-2xl mx-auto">
            Join thousands of teams who sketch, brainstorm, and collaborate on
            Drawrot every day.
          </p>
          <button className="px-10 py-4 bg-gray-900 text-white font-semibold text-lg border-2 border-gray-900 hover:bg-gray-800 transition-colors">
            Get Started Now
          </button>
        </div>
      </main>

      <footer className="border-t-2 border-gray-900 bg-white mt-20">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Pencil className="w-6 h-6 text-gray-900" strokeWidth={2.5} />
                <span className="text-xl font-bold text-gray-900">Drawrot</span>
              </div>
              <p className="text-gray-600">
                The collaborative whiteboard built for creativity.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-gray-900 mb-4">Product</h4>
              <ul className="space-y-2 text-gray-600">
                <li>
                  <a href="#" className="hover:underline">
                    Features
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Pricing
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Templates
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-gray-900 mb-4">Company</h4>
              <ul className="space-y-2 text-gray-600">
                <li>
                  <a href="#" className="hover:underline">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Careers
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-gray-900 mb-4">Legal</h4>
              <ul className="space-y-2 text-gray-600">
                <li>
                  <a href="#" className="hover:underline">
                    Privacy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Terms
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Security
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t-2 border-gray-900 text-center text-gray-600">
            <p>© 2025 Drawrot. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
