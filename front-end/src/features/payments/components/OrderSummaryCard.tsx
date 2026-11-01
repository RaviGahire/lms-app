import {
  IconBolt,
  IconCircle2,
  IconCircleCheck,
  IconShield,
  IconShieldCheck,
  IconTag,
  IconZoomPan,
} from '@tabler/icons-react';
import { Button } from '../../../shared/components/Buttons/Buttons';

export const OrderSummaryCard = () => {
  return (
    <div className="bg-[#0B0F19] border border-gray-800 rounded-2xl p-6 lg:p-8 shadow-2xl flex flex-col h-full relative overflow-hidden">
      {/* Subtle top gradient accent */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-500 to-blue-500"></div>

      {/* Header Section */}
      <div className="mb-6 pb-6 border-b border-gray-800">
        <h2 className="text-white font-bold text-xl md:text-2xl leading-tight mb-2">
          Distributed Systems & Cloud-Native Microservices
        </h2>
        <p className="text-gray-400 text-sm flex items-center gap-1.5 font-medium">
          <span className="w-6 h-6 rounded-full bg-gray-800 flex items-center justify-center text-emerald-400 text-[10px] font-bold">
            DR
          </span>
          By Dr. Ravi Gahire
        </p>
      </div>

      {/* Course Features List */}
      <div className="space-y-4 mb-8 text-sm text-gray-300 font-medium">
        {[
          '42 Interactive Modules & Real-World Code Walkthroughs',
          '18 Dedicated AWS Firecracker In-Browser Cloud Sandboxes',
          'Weekly Live Architect Office Hours & Production Audits',
          'Lifetime Access + All 2025/2026 Microservice Updates',
        ].map((item, index) => (
          <div key={index} className="flex gap-3 items-start">
            <IconCircleCheck
              size={18}
              stroke={2}
              className="text-emerald-500 shrink-0 mt-0.5"
            />
            <p className="leading-snug">{item}</p>
          </div>
        ))}
      </div>

      {/* Coupon / Voucher Section */}
      <div className="mb-6 bg-gray-900/50 p-4 rounded-xl border border-gray-800/60">
        <div className="flex justify-between items-center mb-3">
          <span className="text-gray-400 text-xs font-semibold uppercase tracking-wider">
            Voucher Code
          </span>
          <span className="text-emerald-400 text-xs font-medium flex items-center gap-1 bg-emerald-500/10 px-2 py-0.5 rounded-md border border-emerald-500/20">
            <IconTag size={12} /> EARLYBIRD40
          </span>
        </div>
        <div className="flex gap-2">
          <input
            type="text"
            placeholder="Enter code"
            className="flex-1 bg-[#131825] border border-gray-700 rounded-lg py-2.5 px-3 text-white text-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all placeholder-gray-600"
          />
          <Button label="Apply" />
        </div>
      </div>

      {/* Pricing Breakdown */}
      <div className="space-y-3 mb-8 text-sm">
        <div className="flex justify-between text-gray-400">
          <span>Original Course Tuition</span>
          <span className="line-through decoration-gray-500">$495.00</span>
        </div>
        <div className="flex justify-between text-gray-400 border-b border-gray-800 pb-5">
          <span>Jurisdiction Tax & Regulatory Fees</span>
          <span>$0.00</span>
        </div>

        <div className="flex justify-between items-end pt-3">
          <div>
            <span className="text-gray-400 text-xs font-bold tracking-widest uppercase block mb-1">
              Total Amount Due
            </span>
            <span className="text-emerald-400 text-xs font-medium flex items-center gap-1.5">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              You save $198.00 today
            </span>
          </div>
          <div className="flex items-baseline gap-1.5 text-white">
            <span className="text-4xl font-black tracking-tight">$297.00</span>
            <span className="text-gray-500 text-sm font-semibold">USD</span>
          </div>
        </div>
      </div>

      {/* Primary Action */}
      <div className="mb-4">
        <Button label="  Complete Enrollment" className="w-full" />
      </div>

      <p className="text-gray-500 text-xs text-center mb-8 px-2 leading-relaxed">
        By completing this transaction, you agree to MasterTrack's{' '}
        <a
          href="#"
          className="text-gray-400 hover:text-white underline decoration-gray-600"
        >
          Terms of Service
        </a>{' '}
        and confirm our 30-Day Guarantee Policy.
      </p>

      {/* Trust Badges */}
      <div className="space-y-5 mt-auto pt-6 border-t border-gray-800/50">
        <div className="flex gap-3.5 items-start">
          <div className="p-2 bg-emerald-500/10 rounded-lg shrink-0 border border-emerald-500/20">
            <IconShieldCheck size={20} className="text-emerald-500" />
          </div>
          <div>
            <h4 className="text-gray-200 text-sm font-semibold mb-1">
              30-Day Unconditional Guarantee
            </h4>
            <p className="text-gray-500 text-xs leading-relaxed">
              Not satisfied with your labs? Request a one-click refund directly
              from your student console.
            </p>
          </div>
        </div>

        <div className="flex gap-3.5 items-start">
          <div className="p-2 bg-blue-500/10 rounded-lg shrink-0 border border-blue-500/20">
            <IconBolt size={20} className="text-blue-400" />
          </div>
          <div>
            <h4 className="text-gray-200 text-sm font-semibold mb-1">
              Immediate Sandbox Deployment
            </h4>
            <p className="text-gray-500 text-xs leading-relaxed">
              Access your interactive IDE, private Discord, and lesson videos
              the second payment succeeds.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
