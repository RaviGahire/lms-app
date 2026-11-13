import { IconPlus } from '@tabler/icons-react';
import { Button } from '../../../shared/components/Buttons/Buttons';
import { useNavigate } from 'react-router-dom';

export const StudioHeader = () => {

  const navigate = useNavigate()
  
  return (
    <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-8">
      <div>
        <div className="flex items-center gap-3 mb-2">
          <h1 className="text-3xl font-bold text-highlight tracking-tight text-balance">
            Course Management
          </h1>
          <span className="hidden md:block  bg-indigo-600 text-white text-[10px] font-bold px-2 py-1 rounded uppercase tracking-wider">
            Instructor Workspace
          </span>
        </div>
        <p className="text-muted text-sm max-w-2xl">
          Create new curriculum tracks, configure interactive modules, and
          manage active courses in one unified hub.
        </p>
      </div>
      {/* Create New Course btn */}
      <Button
        label="Create New Course"
        icon={<IconPlus size={18} stroke={2} />}
        onClick={()=> navigate("/course/create")}
      />
    </div>
  );
};
