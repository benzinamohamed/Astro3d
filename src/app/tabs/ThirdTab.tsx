"use client";
import React, { useState, useEffect, useRef } from 'react';

function ThirdTab() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [mass, setMass] = useState(5); // Solar masses
  const [distance, setDistance] = useState(10); // Distance from black hole
  const [timeDialation, setTimeDialation] = useState(0);
  const [eventHorizonRadius, setEventHorizonRadius] = useState(0);
  
  useEffect(() => {
    // Calculate Schwarzschild radius (event horizon)
    const schwarzschildRadius = 2.95 * mass; // km
    setEventHorizonRadius(schwarzschildRadius);
    
    // Calculate time dilation
    const timeDialationFactor = 1 / Math.sqrt(1 - (schwarzschildRadius / distance));
    setTimeDialation(timeDialationFactor);
    
    // Render black hole
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    
    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    // Draw stars background
    for (let i = 0; i < 200; i++) {
      const x = Math.random() * canvas.width;
      const y = Math.random() * canvas.height;
      const radius = Math.random() * 1.5;
      ctx.fillStyle = `rgba(255, 255, 255, ${Math.random() * 0.8 + 0.2})`;
      ctx.beginPath();
      ctx.arc(x, y, radius, 0, Math.PI * 2);
      ctx.fill();
    }
    
    // Draw accretion disk
    const diskRadius = schwarzschildRadius * 5;
    const gradient = ctx.createRadialGradient(
      centerX, centerY, schwarzschildRadius,
      centerX, centerY, diskRadius
    );
    gradient.addColorStop(0, 'rgba(0, 0, 0, 1)');
    gradient.addColorStop(0.7, 'rgba(255, 165, 0, 0.8)');
    gradient.addColorStop(1, 'rgba(255, 69, 0, 0)');
    
    ctx.save();
    ctx.translate(centerX, centerY);
    ctx.rotate(Math.PI / 4);
    ctx.scale(1, 0.3); // Flatten to create disk effect
    ctx.beginPath();
    ctx.arc(0, 0, diskRadius, 0, Math.PI * 2);
    ctx.fillStyle = gradient;
    ctx.fill();
    ctx.restore();
    
    // Draw event horizon
    ctx.beginPath();
    ctx.arc(centerX, centerY, schwarzschildRadius, 0, Math.PI * 2);
    ctx.fillStyle = 'black';
    ctx.shadowColor = 'rgba(0, 0, 255, 0.5)';
    ctx.shadowBlur = 20;
    ctx.fill();
    
    // Draw gravitational lensing effect
    ctx.beginPath();
    ctx.arc(centerX, centerY, schwarzschildRadius * 1.5, 0, Math.PI * 2);
    ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
    ctx.fill();
    
  }, [mass, distance]);

  return (
    <div className="w-full h-full bg-black text-white p-4 flex flex-col md:flex-row gap-6">
      <div className="flex-1">
        <canvas 
          ref={canvasRef} 
          width={500} 
          height={500} 
          className="w-full h-auto bg-black rounded-lg"
        />
      </div>
      
      <div className="flex-1 space-y-6">
        <h1 className="text-2xl font-bold">Black Hole Explorer</h1>
        
        <div>
          <label className="block text-sm mb-2">Black Hole Mass (Solar Masses)</label>
          <input 
            type="range" 
            min="1" 
            max="50" 
            value={mass} 
            onChange={(e) => setMass(Number(e.target.value))}
            className="w-full"
          />
          <div className="flex justify-between text-sm">
            <span>1</span>
            <span>{mass}</span>
            <span>50</span>
          </div>
        </div>
        
        <div>
          <label className="block text-sm mb-2">Observer Distance (Schwarzschild radii)</label>
          <input 
            type="range" 
            min={eventHorizonRadius * 1.1} 
            max="100" 
            value={distance} 
            onChange={(e) => setDistance(Number(e.target.value))}
            className="w-full"
          />
          <div className="flex justify-between text-sm">
            <span>Event Horizon</span>
            <span>{distance.toFixed(1)}</span>
            <span>100</span>
          </div>
        </div>
        
        <div className="bg-gray-900/50 p-4 rounded-lg">
          <h3 className="font-bold mb-4">Black Hole Properties</h3>
          <div className="space-y-2">
            <div className="flex justify-between">
              <span>Event Horizon Radius:</span>
              <span>{eventHorizonRadius.toFixed(2)} km</span>
            </div>
            <div className="flex justify-between">
              <span>Time Dilation Factor:</span>
              <span>{isFinite(timeDialation) ? timeDialation.toFixed(2) : '∞'}</span>
            </div>
            <div className="flex justify-between">
              <span>1 Earth hour equals:</span>
              <span>
                {isFinite(timeDialation) 
                  ? `${(timeDialation * 60).toFixed(0)} minutes for distant observer` 
                  : 'Infinite time'}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ThirdTab;