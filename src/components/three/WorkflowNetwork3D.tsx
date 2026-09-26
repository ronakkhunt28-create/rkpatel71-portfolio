"use client";

import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";

interface NodeData {
  label: string;
  sublabel: string;
  angle: number;
  radius: number;
  yOffset: number;
  color: string;
}

const NODES_CONFIG: NodeData[] = [
  { label: "LLM Gateway", sublabel: "Gemini / Groq", angle: 0, radius: 2.8, yOffset: 0.2, color: "#0ea5e9" },
  { label: "FastAPI Core", sublabel: "Async Gateway", angle: (Math.PI / 4) * 1, radius: 2.6, yOffset: -0.3, color: "#38bdf8" },
  { label: "n8n Webhook", sublabel: "Event Ingest", angle: (Math.PI / 4) * 2, radius: 2.9, yOffset: 0.4, color: "#6366f1" },
  { label: "RAG Retrieval", sublabel: "FTS5 / pgvector", angle: (Math.PI / 4) * 3, radius: 2.7, yOffset: -0.2, color: "#0ea5e9" },
  { label: "Deterministic Engine", sublabel: "7-Factor Math", angle: (Math.PI / 4) * 4, radius: 2.8, yOffset: 0.3, color: "#38bdf8" },
  { label: "Human Review Gate", sublabel: "HITL Approval", angle: (Math.PI / 4) * 5, radius: 2.6, yOffset: -0.4, color: "#f59e0b" },
  { label: "Tamper Audit", sublabel: "SHA-256 Ledger", angle: (Math.PI / 4) * 6, radius: 2.9, yOffset: 0.1, color: "#10b981" },
  { label: "Automated Tests", sublabel: "Pytest / Playwright", angle: (Math.PI / 4) * 7, radius: 2.7, yOffset: -0.2, color: "#0ea5e9" },
];

export const WorkflowNetwork3D: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [webGLSupported, setWebGLSupported] = useState(true);
  const [reducedMotion, setReducedMotion] = useState(false);
  const [activeNodeIndex, setActiveNodeIndex] = useState<number | null>(null);

  useEffect(() => {
    // Check prefers-reduced-motion
    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (motionQuery.matches) {
      setReducedMotion(true);
      return;
    }

    const container = containerRef.current;
    const canvas = canvasRef.current;
    if (!container || !canvas) return;

    // Test WebGL availability on an offscreen test canvas to avoid corrupting the real canvas context
    try {
      const testCanvas = document.createElement("canvas");
      const gl = testCanvas.getContext("webgl") || testCanvas.getContext("experimental-webgl");
      if (!gl) {
        setWebGLSupported(false);
        return;
      }
    } catch {
      setWebGLSupported(false);
      return;
    }

    let renderer: THREE.WebGLRenderer;
    try {
      renderer = new THREE.WebGLRenderer({
        canvas,
        alpha: true,
        antialias: true,
        powerPreference: "high-performance",
      });
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      renderer.setSize(container.clientWidth, container.clientHeight);
    } catch (err) {
      console.warn("WebGL initialization failed, falling back to 2D view:", err);
      setWebGLSupported(false);
      return;
    }

    // Three.js Scene Setup
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x090a0f, 0.08);

    const camera = new THREE.PerspectiveCamera(
      45,
      container.clientWidth / container.clientHeight,
      0.1,
      100
    );
    camera.position.set(0, 0, 7.5);

    // Group for all rotating elements
    const networkGroup = new THREE.Group();
    scene.add(networkGroup);

    // 1. Central Intelligent Core (Double layered sphere with wireframe & core)
    const coreInnerGeo = new THREE.SphereGeometry(0.7, 32, 32);
    const coreInnerMat = new THREE.MeshBasicMaterial({
      color: 0x0ea5e9,
      wireframe: true,
      transparent: true,
      opacity: 0.35,
    });
    const coreInnerMesh = new THREE.Mesh(coreInnerGeo, coreInnerMat);
    networkGroup.add(coreInnerMesh);

    const coreSolidGeo = new THREE.SphereGeometry(0.45, 24, 24);
    const coreSolidMat = new THREE.MeshBasicMaterial({
      color: 0x38bdf8,
      transparent: true,
      opacity: 0.85,
    });
    const coreSolidMesh = new THREE.Mesh(coreSolidGeo, coreSolidMat);
    networkGroup.add(coreSolidMesh);

    // Subtle outer halo ring
    const ringGeo = new THREE.RingGeometry(1.0, 1.05, 48);
    const ringMat = new THREE.MeshBasicMaterial({
      color: 0x0ea5e9,
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 0.2,
    });
    const ringMesh = new THREE.Mesh(ringGeo, ringMat);
    ringMesh.rotation.x = Math.PI / 2.3;
    networkGroup.add(ringMesh);

    // 2. Peripheral Nodes and Line Connectors
    const nodeMeshes: THREE.Mesh[] = [];
    const linePositions: number[] = [];

    NODES_CONFIG.forEach((node) => {
      const x = Math.cos(node.angle) * node.radius;
      const y = Math.sin(node.angle) * (node.radius * 0.45) + node.yOffset;
      const z = Math.sin(node.angle) * (node.radius * 0.7);

      // Node Geometry
      const nodeGeo = new THREE.SphereGeometry(0.18, 16, 16);
      const nodeMat = new THREE.MeshBasicMaterial({
        color: new THREE.Color(node.color),
        transparent: true,
        opacity: 0.9,
      });
      const nodeMesh = new THREE.Mesh(nodeGeo, nodeMat);
      nodeMesh.position.set(x, y, z);
      nodeMeshes.push(nodeMesh);
      networkGroup.add(nodeMesh);

      // Connection from Center to Node
      linePositions.push(0, 0, 0);
      linePositions.push(x, y, z);
    });

    const linesGeo = new THREE.BufferGeometry();
    linesGeo.setAttribute(
      "position",
      new THREE.Float32BufferAttribute(linePositions, 3)
    );
    const linesMat = new THREE.LineBasicMaterial({
      color: 0x1f2b42,
      transparent: true,
      opacity: 0.6,
    });
    const linesMesh = new THREE.LineSegments(linesGeo, linesMat);
    networkGroup.add(linesMesh);

    // 3. Flowing Data Particles
    const particleCount = 45;
    const particleGeo = new THREE.BufferGeometry();
    const particlePositions = new Float32Array(particleCount * 3);
    const particleProgress = new Float32Array(particleCount);
    const particleTargets = new Uint8Array(particleCount);

    for (let i = 0; i < particleCount; i++) {
      particleTargets[i] = i % NODES_CONFIG.length;
      particleProgress[i] = Math.random();
    }

    particleGeo.setAttribute(
      "position",
      new THREE.BufferAttribute(particlePositions, 3)
    );
    const particleMat = new THREE.PointsMaterial({
      color: 0x38bdf8,
      size: 0.08,
      transparent: true,
      opacity: 0.85,
    });
    const particles = new THREE.Points(particleGeo, particleMat);
    networkGroup.add(particles);

    // Mouse Interaction
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      targetX = x * 0.6;
      targetY = y * 0.4;
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });

    // Handle Resize
    const handleResize = () => {
      if (!container || !renderer || !camera) return;
      camera.aspect = container.clientWidth / container.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(container.clientWidth, container.clientHeight);
    };

    window.addEventListener("resize", handleResize);

    // Visibility Observer to pause when scrolled out of view
    let isVisible = true;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          isVisible = entry.isIntersecting;
        });
      },
      { threshold: 0.05 }
    );
    observer.observe(container);

    // Animation Loop
    let animationFrameId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      if (!isVisible) return;

      const delta = clock.getDelta();
      const elapsedTime = clock.getElapsedTime();

      // Smooth camera / group rotation with mouse damping
      mouseX += (targetX - mouseX) * 0.05;
      mouseY += (targetY - mouseY) * 0.05;

      networkGroup.rotation.y = elapsedTime * 0.08 + mouseX;
      networkGroup.rotation.x = mouseY * 0.5;

      // Pulse core
      const coreScale = 1 + Math.sin(elapsedTime * 2) * 0.04;
      coreInnerMesh.scale.set(coreScale, coreScale, coreScale);
      ringMesh.rotation.z = elapsedTime * 0.15;

      // Update flowing data particles along connection spokes
      const positions = particleGeo.attributes.position.array as Float32Array;
      for (let i = 0; i < particleCount; i++) {
        const targetNode = NODES_CONFIG[particleTargets[i]];
        particleProgress[i] += delta * 0.35;
        if (particleProgress[i] > 1) {
          particleProgress[i] = 0;
          particleTargets[i] = (particleTargets[i] + 1) % NODES_CONFIG.length;
        }

        const t = particleProgress[i];
        const tx = Math.cos(targetNode.angle) * targetNode.radius;
        const ty = Math.sin(targetNode.angle) * (targetNode.radius * 0.45) + targetNode.yOffset;
        const tz = Math.sin(targetNode.angle) * (targetNode.radius * 0.7);

        positions[i * 3] = tx * t;
        positions[i * 3 + 1] = ty * t;
        positions[i * 3 + 2] = tz * t;
      }
      particleGeo.attributes.position.needsUpdate = true;

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
      observer.disconnect();

      // Clean up WebGL resources
      coreInnerGeo.dispose();
      coreInnerMat.dispose();
      coreSolidGeo.dispose();
      coreSolidMat.dispose();
      ringGeo.dispose();
      ringMat.dispose();
      linesGeo.dispose();
      linesMat.dispose();
      particleGeo.dispose();
      particleMat.dispose();
      renderer.dispose();
    };
  }, [reducedMotion]);

  // Fallback for reduced motion or WebGL unavailability
  if (reducedMotion || !webGLSupported) {
    return (
      <div className="relative w-full h-[360px] sm:h-[460px] flex items-center justify-center p-4">
        <div className="relative w-full max-w-lg aspect-square rounded-3xl bg-surface-100/50 border border-surface-border p-6 flex flex-col items-center justify-center">
          {/* Central System Core */}
          <div className="relative z-10 w-24 h-24 rounded-2xl bg-gradient-to-tr from-accent/20 to-surface-100 border border-accent/40 flex flex-col items-center justify-center text-center shadow-glow mb-6">
            <span className="font-mono text-xs font-bold text-accent">ORCHESTRATOR</span>
            <span className="text-[10px] text-text-tertiary">Python 3.12</span>
          </div>

          {/* Node Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 w-full">
            {NODES_CONFIG.map((node, idx) => (
              <div
                key={idx}
                className="bg-surface-200/80 border border-surface-border rounded-xl p-2.5 text-center hover:border-accent/40 transition-colors"
              >
                <div className="w-2 h-2 rounded-full mx-auto mb-1" style={{ backgroundColor: node.color }} />
                <div className="font-semibold text-xs text-text-primary truncate">{node.label}</div>
                <div className="text-[10px] text-text-tertiary truncate font-mono">{node.sublabel}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      ref={containerRef}
      className="relative w-full h-[400px] sm:h-[480px] lg:h-[540px] flex items-center justify-center select-none"
      aria-label="Interactive 3D AI Workflow Network Visualization"
    >
      <canvas
        ref={canvasRef}
        className="w-full h-full cursor-grab active:cursor-grabbing block"
      />

      {/* Floating Network Badge */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 px-3.5 py-1.5 rounded-full bg-surface-100/80 backdrop-blur-md border border-surface-border/80 flex items-center gap-2 pointer-events-none shadow-card">
        <span className="w-2 h-2 rounded-full bg-accent animate-ping" />
        <span className="text-[11px] font-mono text-text-secondary uppercase tracking-wider">
          AI Workflow Network Topology
        </span>
      </div>

      {/* Interactive Orbiting Labels Overlay */}
      <div className="absolute inset-0 pointer-events-none hidden md:block">
        <div className="relative w-full h-full max-w-4xl mx-auto">
          {/* Top Left: LLM Gateway */}
          <div className="absolute top-12 left-6 bg-surface-100/90 border border-surface-border px-3 py-1.5 rounded-lg shadow-card text-left backdrop-blur-sm">
            <span className="text-[10px] font-mono text-accent block">Multi-Provider Router</span>
            <span className="text-xs font-semibold text-text-primary">Gemini 3.7 &bull; Groq</span>
          </div>

          {/* Top Right: Deterministic Math */}
          <div className="absolute top-12 right-6 bg-surface-100/90 border border-surface-border px-3 py-1.5 rounded-lg shadow-card text-right backdrop-blur-sm">
            <span className="text-[10px] font-mono text-accent block">Deterministic Logic</span>
            <span className="text-xs font-semibold text-text-primary">7-Factor Math Engine</span>
          </div>

          {/* Bottom Left: Human Gate */}
          <div className="absolute bottom-16 left-8 bg-surface-100/90 border border-surface-border px-3 py-1.5 rounded-lg shadow-card text-left backdrop-blur-sm">
            <span className="text-[10px] font-mono text-amber-400 block">HITL Suspension Gate</span>
            <span className="text-xs font-semibold text-text-primary">Human Authorization</span>
          </div>

          {/* Bottom Right: Audit Ledger */}
          <div className="absolute bottom-16 right-8 bg-surface-100/90 border border-surface-border px-3 py-1.5 rounded-lg shadow-card text-right backdrop-blur-sm">
            <span className="text-[10px] font-mono text-emerald-400 block">Tamper-Evident</span>
            <span className="text-xs font-semibold text-text-primary">SHA-256 Audit Chain</span>
          </div>
        </div>
      </div>
    </div>
  );
};
