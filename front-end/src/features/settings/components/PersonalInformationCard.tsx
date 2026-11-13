import {
  IconUser,
  IconAt,
  IconMail,
  IconBriefcase,
  IconMapPin,
  IconLink,
  IconBrandGithub,
  IconBrandLinkedin,
  IconCircleCheckFilled,
} from '@tabler/icons-react';

export const PersonalInformationCard = () => {
  return (
    <div className="bg-[#131825] border border-gray-800 rounded-xl p-6 shadow-sm mb-6">
      <div className="flex justify-between items-end mb-6">
        <div>
          <h3 className="text-white text-lg font-semibold">
            Personal Information
          </h3>
          <p className="text-gray-500 text-xs mt-1">
            Update your account credentials and public Master-Track identity.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        {/* Full Name */}
        <div>
          <label className="block text-gray-400 text-xs font-medium mb-1.5 uppercase tracking-wide">
            Full Name *
          </label>
          <div className="relative">
            <IconUser
              size={16}
              className="absolute left-3 top-2.5 text-gray-500"
            />
            <input
              type="text"
              defaultValue="Alex Vance"
              className="w-full bg-[#0B0F19] border border-gray-700 rounded-lg py-2 pl-9 pr-4 text-white text-sm focus:border-blue-500 outline-none"
            />
          </div>
        </div>

        {/* Username */}
        <div>
          <label className="block text-gray-400 text-xs font-medium mb-1.5 uppercase tracking-wide">
            Username & Public Slug *
          </label>
          <div className="relative">
            <IconAt
              size={16}
              className="absolute left-3 top-2.5 text-gray-500"
            />
            <input
              type="text"
              defaultValue="alexvance"
              className="w-full bg-[#0B0F19] border border-gray-700 rounded-lg py-2 pl-9 pr-4 text-white text-sm focus:border-blue-500 outline-none"
            />
          </div>
        </div>

        {/* Primary Email */}
        <div>
          <label className="flex items-center gap-2 text-gray-400 text-xs font-medium mb-1.5 uppercase tracking-wide">
            Primary Email *{' '}
            <IconCircleCheckFilled size={14} className="text-emerald-500" />{' '}
            <span className="text-emerald-500 text-[10px] normal-case">
              Verified
            </span>
          </label>
          <div className="relative">
            <IconMail
              size={16}
              className="absolute left-3 top-2.5 text-gray-500"
            />
            <input
              type="email"
              defaultValue="alex.vance@techlead.io"
              readOnly
              className="w-full bg-[#0B0F19]/50 border border-gray-800 rounded-lg py-2 pl-9 pr-4 text-gray-400 text-sm outline-none cursor-not-allowed"
            />
          </div>
        </div>

        {/* Headline */}
        <div>
          <label className="block text-gray-400 text-xs font-medium mb-1.5 uppercase tracking-wide">
            Headline / Role Title
          </label>
          <div className="relative">
            <IconBriefcase
              size={16}
              className="absolute left-3 top-2.5 text-gray-500"
            />
            <input
              type="text"
              defaultValue="Full-Stack Web Systems Engineer & Tier 3"
              className="w-full bg-[#0B0F19] border border-gray-700 rounded-lg py-2 pl-9 pr-4 text-white text-sm focus:border-blue-500 outline-none"
            />
          </div>
        </div>
      </div>

      {/* Developer Bio */}
      <div className="mb-6">
        <div className="flex justify-between items-center mb-1.5">
          <label className="text-gray-400 text-xs font-medium uppercase tracking-wide">
            Bio
          </label>
          <span className="text-gray-600 text-xs">264 / 500 characters</span>
        </div>
        <textarea
          rows={3}
          className="w-full bg-[#0B0F19] border border-gray-700 rounded-lg py-2.5 px-4 text-white text-sm focus:border-blue-500 outline-none resize-none leading-relaxed"
          defaultValue="Distributed systems enthusiast, building low-latency stream architectures and modern browser runtimes. Currently completing the Rust Compiler internals and Cloud-Native Microservices certifications on SkillForge. Open to systems engineering collaboration and peer reviews."
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        {/* Location */}
        <div>
          <label className="block text-gray-400 text-xs font-medium mb-1.5 uppercase tracking-wide">
            Location & Primary Timezone
          </label>
          <div className="relative">
            <IconMapPin
              size={16}
              className="absolute left-3 top-2.5 text-gray-500"
            />
            <input
              type="text"
              defaultValue="San Francisco, CA (UTC-8)"
              className="w-full bg-[#0B0F19] border border-gray-700 rounded-lg py-2 pl-9 pr-4 text-white text-sm focus:border-blue-500 outline-none"
            />
          </div>
        </div>

        {/* Portfolio */}
        <div>
          <label className="block text-gray-400 text-xs font-medium mb-1.5 uppercase tracking-wide">
            Portfolio Website
          </label>
          <div className="relative">
            <IconLink
              size={16}
              className="absolute left-3 top-2.5 text-gray-500"
            />
            <input
              type="text"
              defaultValue="https://alexvance.systems"
              className="w-full bg-[#0B0F19] border border-gray-700 rounded-lg py-2 pl-9 pr-4 text-white text-sm focus:border-blue-500 outline-none"
            />
          </div>
        </div>
      </div>

      {/* Connected Accounts */}
      <div>
        <label className="block text-gray-400 text-xs font-medium mb-3 uppercase tracking-wide">
          Connected Developer Accounts
        </label>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex items-center justify-between bg-[#0B0F19] border border-gray-700 rounded-lg p-3">
            <div className="flex items-center gap-3">
              <IconBrandGithub size={20} className="text-gray-300" />
              <div>
                <p className="text-gray-500 text-[10px] uppercase">GitHub</p>
                <p className="text-white text-sm">github.com/alexvance-eng</p>
              </div>
            </div>
            <IconCircleCheckFilled size={18} className="text-emerald-500" />
          </div>
          <div className="flex items-center justify-between bg-[#0B0F19] border border-gray-700 rounded-lg p-3">
            <div className="flex items-center gap-3">
              <IconBrandLinkedin size={20} className="text-blue-500" />
              <div>
                <p className="text-gray-500 text-[10px] uppercase">
                  LinkedIn Profile
                </p>
                <p className="text-white text-sm">
                  linkedin.com/in/alexvance-arch
                </p>
              </div>
            </div>
            <IconCircleCheckFilled size={18} className="text-emerald-500" />
          </div>
        </div>
      </div>
    </div>
  );
};
