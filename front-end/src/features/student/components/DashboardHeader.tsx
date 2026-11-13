import { IconPlayerPlayFilled } from '@tabler/icons-react';
import { Button } from '../../../shared/components/Buttons/Buttons';

export const DashboardHeader = () => {
  return (
    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8 ">
      <div>
        <h1 className="text-3xl font-bold text-white mb-2">
          Welcome back, Alex
        </h1>
        <p className="text-gray-400 text-sm">
          You are on a{' '}
          <span className="text-emerald-400 font-medium">
            14-day study streak
          </span>
          . You're 68% through your current milestone.
        </p>
      </div>
      <div className="flex items-center gap-3">
        <Button
          label="Continue Learning"
          icon={<IconPlayerPlayFilled size={16} />}
        />
      </div>
    </div>
  );
};
