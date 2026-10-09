import React, { useState } from 'react';
import { IconTrendingUp, IconStarFilled, IconArrowRight, IconBolt } from '@tabler/icons-react';

interface CourseCard {
  id: string;
  durationCategory: string;
  badge: {
    text: string;
    type: 'demanding' | 'enrolled' | 'rating' | 'new';
  };
  title: string;
  description: string;
  tags: string[];
  instructor: {
    name: string;
    role: string;
    avatar: string;
  };
  rating: string;
}

type TabKey = 'demand' | 'releases' | 'career' | 'rating';

const TAB_DATA: Record<TabKey, { label: string; courses: CourseCard[] }> = {
  demand: {
    label: 'Most In-Demand',
    courses: [
      {
        id: 'dist-systems',
        durationCategory: '12 Weeks • Cloud & Infra',
        badge: { text: 'Most Demanding', type: 'demanding' },
        title: 'Distributed Systems & Raft Consensus in Go & Rust',
        description:
          'Build replicated state machines, distributed WALs, and fault-tolerant consensus clusters with live partition-injection labs.',
        tags: ['Docker Swarms', 'Formal TLA+', 'Chaos Eng'],
        instructor: {
          name: 'Markus Brandt',
          role: 'Ex-AWS Kernel',
          avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80',
        },
        rating: '4.95',
      },
      {
        id: 'llm-scratch',
        durationCategory: '10 Weeks • AI Research',
        badge: { text: 'Top Enrolled', type: 'enrolled' },
        title: 'Large Language Models & Diffusion Architecture from Scratch',
        description:
          'Code RoPE attention, cross-attention pipelines, and quantized LoRA fine-tuning directly on multi-GPU PyTorch runtimes.',
        tags: ['Custom CUDA', 'Tokenizers', 'vLLM Deploy'],
        instructor: {
          name: 'Dr. Elena Rostova',
          role: 'DeepMind Fellow',
          avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100&auto=format&fit=crop&q=80',
        },
        rating: '4.98',
      },
      {
        id: 'quant-trading',
        durationCategory: '8 Weeks • Quantitative',
        badge: { text: '4.91 Rating', type: 'rating' },
        title: 'Quantitative Algorithmic Trading & High-Frequency Analytics',
        description:
          'Simulate Level-2 order books, stochastic volatility models, and sub-millisecond vectorized backtesting in modern C++ & Python.',
        tags: ['Order Books', 'Risk Parity', 'C++20 Sim'],
        instructor: {
          name: 'Christian H.',
          role: 'Citadel Alumni',
          avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80',
        },
        rating: '4.91',
      },
    ],
  },
  releases: {
    label: 'New Releases',
    courses: [
      {
        id: 'spatial-computing',
        durationCategory: '6 Weeks • Spatial Web',
        badge: { text: 'New Release', type: 'new' },
        title: 'Spatial Audio & WebXR Shader Pipelines',
        description:
          'Design immersive multi-user VR experiences with custom GLSL shaders, Three.js pipelines, and spatial audio reverberation nodes.',
        tags: ['WebXR', 'Three.js', 'GLSL Audio'],
        instructor: {
          name: 'Siddharth Roy',
          role: 'Spatial UX Lead',
          avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&auto=format&fit=crop&q=80',
        },
        rating: '4.96',
      },
      {
        id: 'agentic-workflows',
        durationCategory: '8 Weeks • AI Systems',
        badge: { text: 'New Release', type: 'new' },
        title: 'Autonomous Multi-Agent Swarms with LangGraph',
        description:
          'Construct deterministic agent graphs, cyclic state machines, self-correcting code generation, and human-in-the-loop gates.',
        tags: ['LangGraph', 'Agent Swarms', 'Evals'],
        instructor: {
          name: 'Kavita Patel',
          role: 'AI Staff Engineer',
          avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=100&auto=format&fit=crop&q=80',
        },
        rating: '4.94',
      },
      {
        id: 'kernel-dev',
        durationCategory: '12 Weeks • Low-Level Systems',
        badge: { text: 'New Release', type: 'new' },
        title: 'eBPF Kernel Observability & Tracing in Linux',
        description:
          'Write high-performance probe programs, kernel ring-buffer extractors, and low-overhead network security monitors in C & Rust.',
        tags: ['eBPF', 'BCC', 'XDP Linux'],
        instructor: {
          name: 'Alexei Vaneev',
          role: 'Kernel Maintainer',
          avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&auto=format&fit=crop&q=80',
        },
        rating: '4.99',
      },
    ],
  },
  career: {
    label: 'Career Fast-Tracks',
    courses: [
      {
        id: 'fullstack-arch',
        durationCategory: '16 Weeks • Career Track',
        badge: { text: 'Top Enrolled', type: 'enrolled' },
        title: 'Staff Frontend Engineer & Design Systems Architect',
        description:
          'From zero-runtime CSS tokens to micro-frontends, module federation, tree-shaking optimizers, and enterprise accessibility standards.',
        tags: ['Micro-frontends', 'Tokens', 'A11y'],
        instructor: {
          name: 'Tanya Morales',
          role: 'Principal UI Arch',
          avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&auto=format&fit=crop&q=80',
        },
        rating: '4.97',
      },
      {
        id: 'devops-lead',
        durationCategory: '14 Weeks • Platform Engineering',
        badge: { text: 'Most Demanding', type: 'demanding' },
        title: 'Production Kubernetes & GitOps Platform Lead',
        description:
          'Set up multi-tenant ArgoCD clusters, Cilium service meshes, zero-trust secrets with Vault, and automated blue-green rollouts.',
        tags: ['Kubernetes', 'ArgoCD', 'Cilium'],
        instructor: {
          name: 'Daniel Chen',
          role: 'VP Infrastructure',
          avatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=100&auto=format&fit=crop&q=80',
        },
        rating: '4.92',
      },
      {
        id: 'data-eng',
        durationCategory: '12 Weeks • Big Data',
        badge: { text: 'Top Enrolled', type: 'enrolled' },
        title: 'Streaming Data Architecture with Apache Flink & Kafka',
        description:
          'Master exactly-once processing semantics, stateful streaming topologies, watermarking event-time windows, and lakehouse storage.',
        tags: ['Apache Flink', 'Kafka', 'Iceberg'],
        instructor: {
          name: 'Rachel Sterling',
          role: 'Chief Data Arch',
          avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=100&auto=format&fit=crop&q=80',
        },
        rating: '4.93',
      },
    ],
  },
  rating: {
    label: 'Highest Rated',
    courses: [
      {
        id: 'crypto-zkp',
        durationCategory: '10 Weeks • Cryptography',
        badge: { text: '4.99 Rating', type: 'rating' },
        title: 'Zero-Knowledge Proofs & zk-SNARKs Implementation',
        description:
          'Deep dive into arithmetic circuits, Groth16, PLONK, and recursive proof generation for trustless decentralized verifiers.',
        tags: ['zk-SNARKs', 'Circom', 'PLONK'],
        instructor: {
          name: 'Dr. Lucas Bauer',
          role: 'Cryptography Fellow',
          avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&auto=format&fit=crop&q=80',
        },
        rating: '4.99',
      },
      {
        id: 'compilers-llvm',
        durationCategory: '12 Weeks • Compilers',
        badge: { text: '4.98 Rating', type: 'rating' },
        title: 'Compiler Construction with LLVM & Static Analysis',
        description:
          'Implement lexical analyzers, abstract syntax trees, type checkers, and custom optimization passes targeting LLVM IR.',
        tags: ['LLVM', 'AST Optimizers', 'SSA Form'],
        instructor: {
          name: 'Marta Gomez',
          role: 'Compiler Engineer',
          avatar: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=100&auto=format&fit=crop&q=80',
        },
        rating: '4.98',
      },
      {
        id: 'robotics-ros2',
        durationCategory: '10 Weeks • Robotics',
        badge: { text: '4.97 Rating', type: 'rating' },
        title: 'Autonomous Navigation with ROS 2 & LiDAR SLAM',
        description:
          'Build real-time occupancy grid mapping, extended Kalman filter localization, and dynamic obstacle trajectory planning algorithms.',
        tags: ['ROS 2', 'LiDAR SLAM', 'Nav2'],
        instructor: {
          name: 'Kenji Sato',
          role: 'Robotics Team Lead',
          avatar: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=100&auto=format&fit=crop&q=80',
        },
        rating: '4.97',
      },
    ],
  },
};

export const CuratedPathways: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TabKey>('demand');

  const renderBadge = (badge: CourseCard['badge']) => {
    switch (badge.type) {
      case 'demanding':
        return (
          <span className="inline-flex items-center gap-1.5 rounded-full bg-red-950/70 border border-red-800/40 px-2.5 py-0.5 text-[11px] font-semibold text-red-400">
            <span className="h-1.5 w-1.5 rounded-full bg-red-500" />
            {badge.text}
          </span>
        );
      case 'enrolled':
        return (
          <span className="inline-flex items-center gap-1 rounded-full bg-indigo-900/60 border border-indigo-700/40 px-2.5 py-0.5 text-[11px] font-semibold text-indigo-300">
            <IconBolt size={12} className="text-amber-400 fill-amber-400" />
            {badge.text}
          </span>
        );
      case 'rating':
        return (
          <span className="inline-flex items-center gap-1 rounded-full bg-yellow-950/40 border border-yellow-700/30 px-2.5 py-0.5 text-[11px] font-semibold text-yellow-300">
            <IconStarFilled size={11} className="text-amber-400" />
            {badge.text}
          </span>
        );
      case 'new':
        return (
          <span className="inline-flex items-center gap-1 rounded-full bg-emerald-950/50 border border-emerald-700/30 px-2.5 py-0.5 text-[11px] font-semibold text-emerald-400">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            {badge.text}
          </span>
        );
    }
  };

  return (
    <section className="w-full bg-[#060D18] py-14 px-4 sm:px-8 lg:px-12 text-slate-100 font-sans">
      <div className="mx-auto max-w-7xl">
        {/* Top Header & Tab Controls */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-10">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-blue-400">
              <IconTrendingUp size={15} stroke={2.2} />
              <span>Curated Pathways</span>
            </div>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-[2.6rem] leading-tight">
              Trending Tracks &amp; High-Velocity Learning
            </h2>
            <p className="mt-3 max-w-2xl text-sm sm:text-base text-slate-400 leading-relaxed">
              Filter through the industry&apos;s most rigorous hands-on technical programs updated weekly.
            </p>
          </div>

          {/* Interactive Navigation Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar rounded-xl border border-slate-800/80 bg-[#0B1220]/90 p-1.5 backdrop-blur-md">
            {(Object.keys(TAB_DATA) as TabKey[]).map((tabKey) => {
              const isActive = activeTab === tabKey;
              return (
                <button
                  key={tabKey}
                  type="button"
                  onClick={() => setActiveTab(tabKey)}
                  className={`rounded-lg px-4 py-2 text-xs sm:text-sm font-medium transition-all duration-200 whitespace-nowrap ${
                    isActive
                      ? 'bg-[#3B82F6] text-white shadow-md font-semibold'
                      : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
                  }`}
                >
                  {TAB_DATA[tabKey].label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Dynamic Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {TAB_DATA[activeTab].courses.map((course) => (
            <div
              key={course.id}
              className="flex flex-col justify-between rounded-2xl border border-slate-800/80 bg-[#0B1220]/80 p-6 transition-all duration-200 hover:border-slate-700 hover:bg-[#0E1728] hover:shadow-xl"
            >
              <div>
                {/* Meta pills header */}
                <div className="flex items-center justify-between gap-2">
                  <span className="rounded-lg border border-slate-800/80 bg-[#121A2A] px-3 py-1 text-xs text-slate-300 font-medium">
                    {course.durationCategory}
                  </span>
                  {renderBadge(course.badge)}
                </div>

                {/* Card Title */}
                <h3 className="mt-5 text-xl font-bold leading-snug text-white line-clamp-2">
                  {course.title}
                </h3>

                {/* Card Description */}
                <p className="mt-3 text-xs sm:text-sm text-slate-400 leading-relaxed line-clamp-3">
                  {course.description}
                </p>

                {/* Skill tags */}
                <div className="mt-5 flex flex-wrap gap-2">
                  {course.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-md border border-slate-800 bg-[#070D18] px-2.5 py-1 text-[11px] font-medium text-slate-400"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Footer: Instructor & Enroll CTA */}
              <div className="mt-8 flex items-center justify-between border-t border-slate-800/60 pt-5">
                <div className="flex items-center gap-3">
                  <img
                    src={course.instructor.avatar}
                    alt={course.instructor.name}
                    className="h-9 w-9 rounded-full object-cover ring-1 ring-slate-700"
                  />
                  <div>
                    <h4 className="text-xs font-semibold text-white leading-tight">
                      {course.instructor.name}
                    </h4>
                    <span className="text-[11px] text-slate-400">
                      {course.instructor.role}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-1 text-xs font-semibold text-slate-200">
                    <IconStarFilled size={12} className="text-emerald-400" />
                    <span>{course.rating}</span>
                  </div>
                  <button
                    type="button"
                    className="inline-flex items-center gap-1 rounded-lg border border-slate-700/80 bg-[#141F32] px-3 py-1.5 text-xs font-medium text-white transition-all hover:bg-blue-600 hover:border-blue-500 active:scale-95 shadow-sm"
                  >
                    <span>Enroll</span>
                    <IconArrowRight size={13} stroke={2} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
