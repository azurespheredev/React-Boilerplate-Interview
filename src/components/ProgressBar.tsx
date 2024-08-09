interface ProgressBarProps {
  progress: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ progress }) => {
  return (
    <div className="relative w-full h-2 bg-slate-200">
      <span
        className="absolute bg-blue-500 w-full h-2"
        style={{
          width: `${progress}%`
        }}
      />
    </div>
  );
};

export default ProgressBar;