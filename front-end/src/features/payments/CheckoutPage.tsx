import { CourseCurriculum } from '../courses/components/CourseCurriculum';
import { HeroCard } from './components/HeroCard';
import { OrderSummaryCard } from './components/OrderSummaryCard';

export const CheckoutPage = () => {
  return (
    <div className="min-h-screen text-gray-300  p-4 md:p-8">
      <HeroCard />
      <main className="w-full min-h-screen grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
        {/* Left Column */}
        <div className="lg:col-span-7 flex flex-col gap-6">
          <CourseCurriculum statBar={false} />
        </div>

        {/* Right Column */}
        <div className="lg:col-span-5 flex flex-col">
          <div className="sticky top-6">
            <OrderSummaryCard />
          </div>
        </div>
      </main>
    </div>
  );
};
