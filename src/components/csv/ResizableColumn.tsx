import { useState, useRef, useEffect } from 'react';

interface ResizableColumnProps {
  width: number;
  onResize: (width: number) => void;
  children: React.ReactNode;
}

export function ResizableColumn({ width, onResize, children }: ResizableColumnProps) {
  const [isResizing, setIsResizing] = useState(false);
  const startX = useRef<number>(0);
  const startWidth = useRef<number>(0);

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsResizing(true);
    startX.current = e.pageX;
    startWidth.current = width;
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (!isResizing) return;
    const diff = e.pageX - startX.current;
    onResize(Math.max(100, startWidth.current + diff));
  };

  const handleMouseUp = () => {
    setIsResizing(false);
  };

  useEffect(() => {
    if (isResizing) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleMouseUp);
    }
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isResizing]);

  return (
    <div style={{ width: `${width}px`, position: 'relative' }}>
      {children}
      <div
        className="absolute top-0 right-0 h-full w-1 cursor-col-resize hover:bg-indigo-500/50"
        onMouseDown={handleMouseDown}
      />
    </div>
  );
}