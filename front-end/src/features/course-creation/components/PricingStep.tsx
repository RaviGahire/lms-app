import React from 'react';
import { IconCurrencyDollar, IconInfinity, IconShieldCheck } from '@tabler/icons-react';

export const PricingStep = () => {
  return (
    <div className="bg-[#131825] border border-gray-800 rounded-xl p-6 shadow-sm">
      <h2 className="text-white text-lg font-semibold mb-6">4. Pricing, Enrollment & Publishing</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        {/* Pricing Plan Cards */}
        <div className="bg-[#0B0F19] border border-gray-700 rounded-lg p-4 cursor-pointer hover:border-gray-500 transition-colors">
          <div className="flex justify-between items-start mb-2">
            <IconCurrencyDollar size={20} className="text-gray-400" />
            <div className="w-4 h-4 rounded-full border border-gray-600"></div>
          </div>
          <h3 className="text-white font-medium mb-1">Free Course</h3>
          <p className="text-gray-500 text-xs">Open enrollment for all platform users.</p>
        </div>

        <div className="bg-[#0B0F19] border-2 border-blue-500 rounded-lg p-4 cursor-pointer relative">
          <div className="absolute top-0 right-0 bg-blue-500 text-white text-[9px] font-bold px-2 py-0.5 rounded-bl-lg rounded-tr-sm uppercase">Selected</div>
          <div className="flex justify-between items-start mb-2">
            <IconInfinity size={20} className="text-blue-400" />
            <div className="w-4 h-4 rounded-full border-4 border-blue-500 bg-[#0B0F19]"></div>
          </div>
          <h3 className="text-white font-medium mb-1">One-Time Payment</h3>
          <p className="text-gray-500 text-xs">Lifetime access for a single fee.</p>
        </div>

        <div className="bg-[#0B0F19] border border-gray-700 rounded-lg p-4 cursor-pointer hover:border-gray-500 transition-colors">
          <div className="flex justify-between items-start mb-2">
            <IconShieldCheck size={20} className="text-gray-400" />
            <div className="w-4 h-4 rounded-full border border-gray-600"></div>
          </div>
          <h3 className="text-white font-medium mb-1">Subscription Only</h3>
          <p className="text-gray-500 text-xs">Included in premium membership tiers.</p>
        </div>
      </div>

      {/* Pricing Inputs */}
      <div className="bg-[#0B0F19] border border-gray-800 rounded-lg p-4 mb-6 flex gap-4 max-w-md">
        <div className="flex-1">
          <label className="block text-gray-400 text-xs font-medium mb-1.5 uppercase tracking-wide">Currency</label>
          <select className="w-full bg-[#131825] border border-gray-700 rounded-lg py-2.5 px-4 text-white text-sm outline-none">
            <option>USD ($)</option>
            <option>EUR (€)</option>
          </select>
        </div>
        <div className="flex-1">
          <label className="block text-gray-400 text-xs font-medium mb-1.5 uppercase tracking-wide">Amount</label>
          <input type="number" defaultValue="89.99" className="w-full bg-[#131825] border border-gray-700 rounded-lg py-2.5 px-4 text-white text-sm outline-none focus:border-blue-500" />
        </div>
      </div>

      {/* Visibility Toggle */}
      <div className="border-t border-gray-800 pt-6 flex items-center justify-between">
        <div>
          <h3 className="text-white font-medium text-sm mb-1">Course Visibility</h3>
          <p className="text-gray-500 text-xs">Make this course visible in the public catalog once published.</p>
        </div>
        <button className="w-12 h-6 bg-blue-600 rounded-full relative transition-colors">
          <div className="w-4 h-4 bg-white rounded-full absolute right-1 top-1 shadow-sm"></div>
        </button>
      </div>
    </div>
  );
};