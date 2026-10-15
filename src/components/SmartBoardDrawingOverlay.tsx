import React, { useRef, useState, useEffect, useCallback } from 'react';
import { Pen, Eraser, Trash2, X, Highlighter, Undo } from 'lucide-react';

interface Point {
  x: number;
  y: number;
}

interface Path {
  points: Point[];
  color: string;
  size: number;
  isHighlighter?: boolean;
  isEraser?: boolean;
}

interface Props {
  isActive: boolean;
  onClose: () => void;
}

export const SmartBoardDrawingOverlay: React.FC<Props> = ({ isActive, onClose }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const isDrawingRef = useRef(false);
  const [tool, setTool] = useState<'pen' | 'highlighter' | 'eraser'>('pen');
  const [color, setColor] = useState('#ef4444'); // Default red
  const [size, setSize] = useState(4);
  const [paths, setPaths] = useState<Path[]>([]);
  
  // Use refs so all callbacks and event listeners always access the latest values
  const pathsRef = useRef<Path[]>([]);
  const currentPathRef = useRef<Point[]>([]);
  const toolRef = useRef<'pen' | 'highlighter' | 'eraser'>('pen');
  const colorRef = useRef('#ef4444');
  const sizeRef = useRef(4);

  // Keep refs in sync with states
  useEffect(() => {
    toolRef.current = tool;
  }, [tool]);

  useEffect(() => {
    colorRef.current = color;
  }, [color]);

  useEffect(() => {
    sizeRef.current = size;
  }, [size]);

  // Redraw all paths cleanly onto the canvas
  const redrawAll = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const dpr = window.devicePixelRatio || 1;
    // Reset transform before clearing
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    // Apply DPR scale
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

    const pathsToDraw = pathsRef.current;
    pathsToDraw.forEach(p => {
      if (p.points.length === 0) return;
      ctx.save();
      ctx.lineCap = 'round';
      ctx.lineJoin = 'round';

      if (p.isEraser) {
        ctx.globalCompositeOperation = 'destination-out';
        ctx.strokeStyle = 'rgba(0,0,0,1)';
        ctx.lineWidth = p.size;
        ctx.globalAlpha = 1.0;
      } else if (p.isHighlighter) {
        ctx.globalCompositeOperation = 'source-over';
        ctx.strokeStyle = p.color;
        ctx.lineWidth = p.size;
        ctx.globalAlpha = 0.35;
      } else {
        ctx.globalCompositeOperation = 'source-over';
        ctx.strokeStyle = p.color;
        ctx.lineWidth = p.size;
        ctx.globalAlpha = 1.0;
      }

      ctx.beginPath();
      ctx.moveTo(p.points[0].x, p.points[0].y);
      if (p.points.length === 1) {
        ctx.lineTo(p.points[0].x + 0.1, p.points[0].y + 0.1);
      } else {
        for (let i = 1; i < p.points.length; i++) {
          ctx.lineTo(p.points[i].x, p.points[i].y);
        }
      }
      ctx.stroke();
      ctx.restore();
    });
  }, []);

  // Update canvas internal buffer size to match client bounding rect
  const updateCanvasSize = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const rect = canvas.getBoundingClientRect();
    if (rect.width === 0 || rect.height === 0) return;

    const dpr = window.devicePixelRatio || 1;
    const targetWidth = Math.round(rect.width * dpr);
    const targetHeight = Math.round(rect.height * dpr);

    if (canvas.width !== targetWidth || canvas.height !== targetHeight) {
      canvas.width = targetWidth;
      canvas.height = targetHeight;
    }
    redrawAll();
  }, [redrawAll]);

  // Handle resize and visibility changes
  useEffect(() => {
    if (!isActive) return;

    updateCanvasSize();
    const animId = requestAnimationFrame(updateCanvasSize);
    window.addEventListener('resize', updateCanvasSize);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', updateCanvasSize);
    };
  }, [isActive, updateCanvasSize]);

  // Coordinates helper
  const getCoordinates = (e: React.PointerEvent<HTMLCanvasElement>): Point | null => {
    const canvas = canvasRef.current;
    if (!canvas) return null;
    const rect = canvas.getBoundingClientRect();
    return {
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    };
  };

  const startDrawing = (e: React.PointerEvent<HTMLCanvasElement>) => {
    if (!isActive) return;
    // Only accept primary button (left mouse click, touch, or pen tap)
    if (e.button !== 0 && e.pointerType === 'mouse') return;

    try {
      e.currentTarget.setPointerCapture(e.pointerId);
    } catch {
      // Ignore if pointer capture fails
    }

    const pt = getCoordinates(e);
    if (!pt) return;

    isDrawingRef.current = true;
    currentPathRef.current = [pt];

    const canvas = canvasRef.current;
    const ctx = canvas?.getContext('2d');
    if (!ctx) return;

    const currentTool = toolRef.current;
    const currentColor = colorRef.current;
    const currentStrokeSize = currentTool === 'highlighter' ? sizeRef.current * 4 : currentTool === 'eraser' ? sizeRef.current * 6 : sizeRef.current;

    ctx.save();
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';

    if (currentTool === 'eraser') {
      ctx.globalCompositeOperation = 'destination-out';
      ctx.strokeStyle = 'rgba(0,0,0,1)';
      ctx.lineWidth = currentStrokeSize;
      ctx.globalAlpha = 1.0;
    } else if (currentTool === 'highlighter') {
      ctx.globalCompositeOperation = 'source-over';
      ctx.strokeStyle = currentColor;
      ctx.lineWidth = currentStrokeSize;
      ctx.globalAlpha = 0.35;
    } else {
      ctx.globalCompositeOperation = 'source-over';
      ctx.strokeStyle = currentColor;
      ctx.lineWidth = currentStrokeSize;
      ctx.globalAlpha = 1.0;
    }

    ctx.beginPath();
    ctx.moveTo(pt.x, pt.y);
    ctx.lineTo(pt.x + 0.1, pt.y + 0.1);
    ctx.stroke();
    ctx.restore();
  };

  const draw = (e: React.PointerEvent<HTMLCanvasElement>) => {
    if (!isDrawingRef.current || !isActive) return;

    const pt = getCoordinates(e);
    if (!pt) return;

    const points = currentPathRef.current;
    if (points.length === 0) {
      points.push(pt);
      return;
    }

    const prevPt = points[points.length - 1];
    points.push(pt);

    const canvas = canvasRef.current;
    const ctx = canvas?.getContext('2d');
    if (!ctx) return;

    const currentTool = toolRef.current;
    const currentColor = colorRef.current;
    const currentStrokeSize = currentTool === 'highlighter' ? sizeRef.current * 4 : currentTool === 'eraser' ? sizeRef.current * 6 : sizeRef.current;

    ctx.save();
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';

    if (currentTool === 'eraser') {
      ctx.globalCompositeOperation = 'destination-out';
      ctx.strokeStyle = 'rgba(0,0,0,1)';
      ctx.lineWidth = currentStrokeSize;
      ctx.globalAlpha = 1.0;
    } else if (currentTool === 'highlighter') {
      ctx.globalCompositeOperation = 'source-over';
      ctx.strokeStyle = currentColor;
      ctx.lineWidth = currentStrokeSize;
      ctx.globalAlpha = 0.35;
    } else {
      ctx.globalCompositeOperation = 'source-over';
      ctx.strokeStyle = currentColor;
      ctx.lineWidth = currentStrokeSize;
      ctx.globalAlpha = 1.0;
    }

    ctx.beginPath();
    ctx.moveTo(prevPt.x, prevPt.y);
    ctx.lineTo(pt.x, pt.y);
    ctx.stroke();
    ctx.restore();
  };

  const stopDrawing = (e?: React.PointerEvent<HTMLCanvasElement>) => {
    if (e) {
      try {
        if (e.currentTarget.hasPointerCapture(e.pointerId)) {
          e.currentTarget.releasePointerCapture(e.pointerId);
        }
      } catch {
        // Ignore
      }
    }

    if (!isDrawingRef.current) return;
    isDrawingRef.current = false;

    // CRITICAL FIX: Snapshot current points before clearing currentPathRef
    // Previously, currentPath.current = [] was called synchronously before React executed
    // the state updater queue, wiping out the entire drawing as soon as mouse was lifted!
    const pointsToSave = [...currentPathRef.current];
    currentPathRef.current = [];

    if (pointsToSave.length > 0) {
      const currentTool = toolRef.current;
      const newPath: Path = {
        points: pointsToSave,
        color: colorRef.current,
        size: currentTool === 'highlighter' ? sizeRef.current * 4 : currentTool === 'eraser' ? sizeRef.current * 6 : sizeRef.current,
        isHighlighter: currentTool === 'highlighter',
        isEraser: currentTool === 'eraser'
      };

      // Immediately save to ref and update state
      pathsRef.current = [...pathsRef.current, newPath];
      setPaths(pathsRef.current);
    }
  };

  const handleClear = () => {
    pathsRef.current = [];
    currentPathRef.current = [];
    setPaths([]);
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  };

  const handleUndo = () => {
    if (pathsRef.current.length === 0) return;
    pathsRef.current = pathsRef.current.slice(0, pathsRef.current.length - 1);
    setPaths([...pathsRef.current]);
    redrawAll();
  };

  const colorPalette = [
    { name: 'Kırmızı', code: '#ef4444' },
    { name: 'Mavi', code: '#3b82f6' },
    { name: 'Yeşil', code: '#10b981' },
    { name: 'Sarı', code: '#eab308' },
    { name: 'Beyaz', code: '#ffffff' },
    { name: 'Mor', code: '#a855f7' }
  ];

  return (
    <div className={`fixed inset-0 z-50 select-none ${isActive ? 'pointer-events-none' : 'pointer-events-none hidden'}`}>
      {/* Canvas Layer */}
      <canvas
        ref={canvasRef}
        className="w-full h-full pointer-events-auto touch-none cursor-crosshair"
        onPointerDown={startDrawing}
        onPointerMove={draw}
        onPointerUp={stopDrawing}
        onPointerCancel={stopDrawing}
      />

      {/* Floating Smartboard Toolbar */}
      <div className="absolute top-4 left-1/2 -translate-x-1/2 pointer-events-auto bg-slate-900/95 border border-slate-700/80 shadow-2xl rounded-2xl p-2.5 flex items-center gap-3 backdrop-blur-md">
        <span className="text-xs font-bold text-amber-400 pl-2 pr-1 uppercase tracking-wider hidden sm:inline">
          Tahta Kalemi
        </span>

        <div className="flex items-center gap-1 bg-slate-800/80 p-1 rounded-xl">
          <button
            onClick={() => setTool('pen')}
            className={`p-2 rounded-lg transition-colors flex items-center gap-1.5 text-xs font-semibold ${
              tool === 'pen' ? 'bg-amber-500 text-slate-950 shadow-md' : 'text-slate-300 hover:text-white'
            }`}
            title="Normal Kalem"
          >
            <Pen className="w-4 h-4" />
            <span className="hidden md:inline">Kalem</span>
          </button>

          <button
            onClick={() => setTool('highlighter')}
            className={`p-2 rounded-lg transition-colors flex items-center gap-1.5 text-xs font-semibold ${
              tool === 'highlighter' ? 'bg-amber-500 text-slate-950 shadow-md' : 'text-slate-300 hover:text-white'
            }`}
            title="Fosforlu Kalem"
          >
            <Highlighter className="w-4 h-4" />
            <span className="hidden md:inline">Fosforlu</span>
          </button>

          <button
            onClick={() => setTool('eraser')}
            className={`p-2 rounded-lg transition-colors flex items-center gap-1.5 text-xs font-semibold ${
              tool === 'eraser' ? 'bg-amber-500 text-slate-950 shadow-md' : 'text-slate-300 hover:text-white'
            }`}
            title="Silgi"
          >
            <Eraser className="w-4 h-4" />
            <span className="hidden md:inline">Silgi</span>
          </button>
        </div>

        {/* Colors */}
        <div className="flex items-center gap-1.5 px-2">
          {colorPalette.map(c => (
            <button
              key={c.code}
              onClick={() => {
                setColor(c.code);
                if (tool === 'eraser') setTool('pen');
              }}
              style={{ backgroundColor: c.code }}
              className={`w-6 h-6 rounded-full transition-transform border border-slate-600 ${
                color === c.code && tool !== 'eraser' ? 'scale-125 ring-2 ring-white ring-offset-2 ring-offset-slate-900' : 'hover:scale-110'
              }`}
              title={c.name}
            />
          ))}
        </div>

        {/* Stroke thickness */}
        <div className="hidden sm:flex items-center gap-1 text-xs text-slate-400 font-mono">
          <button
            onClick={() => setSize(2)}
            className={`px-2 py-1 rounded ${size === 2 ? 'bg-slate-700 text-white font-bold' : 'hover:text-white'}`}
          >
            İnce
          </button>
          <button
            onClick={() => setSize(4)}
            className={`px-2 py-1 rounded ${size === 4 ? 'bg-slate-700 text-white font-bold' : 'hover:text-white'}`}
          >
            Orta
          </button>
          <button
            onClick={() => setSize(8)}
            className={`px-2 py-1 rounded ${size === 8 ? 'bg-slate-700 text-white font-bold' : 'hover:text-white'}`}
          >
            Kalın
          </button>
        </div>

        <div className="h-5 w-px bg-slate-700 mx-1" />

        {/* Undo & Clear */}
        <button
          onClick={handleUndo}
          disabled={paths.length === 0}
          className="p-2 text-slate-400 hover:text-white disabled:opacity-30 disabled:hover:text-slate-400 transition-colors"
          title="Geri Al"
        >
          <Undo className="w-4 h-4" />
        </button>

        <button
          onClick={handleClear}
          className="p-2 text-rose-400 hover:text-rose-300 transition-colors"
          title="Tümünü Temizle"
        >
          <Trash2 className="w-4 h-4" />
        </button>

        <button
          onClick={onClose}
          className="p-2 ml-1 text-slate-400 hover:text-white bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors"
          title="Kalemi Kapat"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
