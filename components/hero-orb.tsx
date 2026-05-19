"use client"

import { useEffect, useRef } from "react"

type P3 = { x: number; y: number; z: number }

// Brand palette — cyan blends into violet across the sphere
const NODE_CYAN = [122, 245, 228]
const NODE_VIOLET = [184, 148, 255]
const EDGE_CYAN = [40, 224, 205]
const EDGE_VIOLET = [128, 96, 232]

const mixRgb = (a: number[], b: number[], t: number) =>
  `${Math.round(a[0] + (b[0] - a[0]) * t)}, ${Math.round(
    a[1] + (b[1] - a[1]) * t,
  )}, ${Math.round(a[2] + (b[2] - a[2]) * t)}`

export function HeroOrb() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches

    const dpr = Math.min(window.devicePixelRatio || 1, 2)
    let width = 0
    let height = 0

    // Fibonacci-sphere point cloud
    const NUM = 156
    const points: P3[] = []
    const nodeMix: number[] = []
    for (let i = 0; i < NUM; i++) {
      const t = (i + 0.5) / NUM
      const inclination = Math.acos(1 - 2 * t)
      const azimuth = Math.PI * (1 + Math.sqrt(5)) * i
      const x = Math.sin(inclination) * Math.cos(azimuth)
      const y = Math.sin(inclination) * Math.sin(azimuth)
      const z = Math.cos(inclination)
      points.push({ x, y, z })
      // colour mix runs from cyan (one pole) to violet (the other)
      nodeMix.push(Math.min(1, Math.max(0, (y + 1) / 2)))
    }

    // Static edges between nearby nodes
    const edges: [number, number][] = []
    const edgeMix: number[] = []
    for (let i = 0; i < NUM; i++) {
      for (let j = i + 1; j < NUM; j++) {
        const dx = points[i].x - points[j].x
        const dy = points[i].y - points[j].y
        const dz = points[i].z - points[j].z
        if (dx * dx + dy * dy + dz * dz < 0.205) {
          edges.push([i, j])
          edgeMix.push((nodeMix[i] + nodeMix[j]) / 2)
        }
      }
    }

    // Data pulses travelling along edges
    const pulses = Array.from({ length: 9 }, () => ({
      edge: Math.floor(Math.random() * edges.length),
      t: Math.random(),
      speed: 0.004 + Math.random() * 0.006,
    }))

    let targetMX = 0
    let targetMY = 0
    let mouseX = 0
    let mouseY = 0
    let rotY = 0

    const resize = () => {
      const rect = canvas.getBoundingClientRect()
      width = rect.width
      height = rect.height
      canvas.width = Math.round(width * dpr)
      canvas.height = Math.round(height * dpr)
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
    }
    resize()
    const ro = new ResizeObserver(resize)
    ro.observe(canvas)

    const onMove = (e: PointerEvent) => {
      const rect = canvas.getBoundingClientRect()
      targetMX = (e.clientX - rect.left) / rect.width - 0.5
      targetMY = (e.clientY - rect.top) / rect.height - 0.5
    }
    window.addEventListener("pointermove", onMove)

    const projected = new Array(NUM)
    let raf = 0

    const render = () => {
      mouseX += (targetMX - mouseX) * 0.06
      mouseY += (targetMY - mouseY) * 0.06
      if (!prefersReduced) rotY += 0.0026

      const ry = rotY + mouseX * 0.9
      const rx = -mouseY * 0.7
      const cosY = Math.cos(ry)
      const sinY = Math.sin(ry)
      const cosX = Math.cos(rx)
      const sinX = Math.sin(rx)

      const cx = width / 2
      const cy = height / 2
      const radius = Math.min(width, height) * 0.37
      const persp = 2.6

      for (let i = 0; i < NUM; i++) {
        const p = points[i]
        const x1 = p.x * cosY - p.z * sinY
        const z1 = p.x * sinY + p.z * cosY
        const y2 = p.y * cosX - z1 * sinX
        const z2 = p.y * sinX + z1 * cosX
        const scale = persp / (persp - z2)
        projected[i] = {
          sx: cx + x1 * radius * scale,
          sy: cy + y2 * radius * scale,
          depth: z2,
          scale,
        }
      }

      ctx.clearRect(0, 0, width, height)
      ctx.lineCap = "round"

      // Edges
      for (let e = 0; e < edges.length; e++) {
        const a = projected[edges[e][0]]
        const b = projected[edges[e][1]]
        const op = Math.max(0, (a.depth + b.depth) / 2 + 1) / 2
        if (op < 0.04) continue
        ctx.strokeStyle = `rgba(${mixRgb(EDGE_CYAN, EDGE_VIOLET, edgeMix[e])}, ${
          op * 0.34
        })`
        ctx.lineWidth = 0.55
        ctx.beginPath()
        ctx.moveTo(a.sx, a.sy)
        ctx.lineTo(b.sx, b.sy)
        ctx.stroke()
      }

      // Nodes, painter-sorted back to front
      const order = []
      for (let i = 0; i < NUM; i++) order.push(i)
      order.sort((a, b) => projected[a].depth - projected[b].depth)

      for (let o = 0; o < order.length; o++) {
        const idx = order[o]
        const p = projected[idx]
        const front = (p.depth + 1) / 2
        const r = 0.7 + p.scale * 1.5
        const node = mixRgb(NODE_CYAN, NODE_VIOLET, nodeMix[idx])
        ctx.beginPath()
        ctx.arc(p.sx, p.sy, r, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(${node}, ${Math.max(0.16, front)})`
        ctx.fill()
        if (front > 0.78) {
          const edge = mixRgb(EDGE_CYAN, EDGE_VIOLET, nodeMix[idx])
          ctx.beginPath()
          ctx.arc(p.sx, p.sy, r * 2.6, 0, Math.PI * 2)
          ctx.fillStyle = `rgba(${edge}, ${(front - 0.78) * 0.5})`
          ctx.fill()
        }
      }

      // Travelling data pulses
      for (let i = 0; i < pulses.length; i++) {
        const pulse = pulses[i]
        if (!prefersReduced) pulse.t += pulse.speed
        if (pulse.t > 1) {
          pulse.t = 0
          pulse.edge = Math.floor(Math.random() * edges.length)
        }
        const a = projected[edges[pulse.edge][0]]
        const b = projected[edges[pulse.edge][1]]
        const px = a.sx + (b.sx - a.sx) * pulse.t
        const py = a.sy + (b.sy - a.sy) * pulse.t
        const depth = a.depth + (b.depth - a.depth) * pulse.t
        const op = Math.max(0.1, (depth + 1) / 2)
        const fade = Math.sin(pulse.t * Math.PI)
        const halo = mixRgb(EDGE_CYAN, EDGE_VIOLET, edgeMix[pulse.edge])
        ctx.beginPath()
        ctx.arc(px, py, 2.4, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(235, 255, 252, ${op * fade})`
        ctx.fill()
        ctx.beginPath()
        ctx.arc(px, py, 6, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(${halo}, ${op * fade * 0.4})`
        ctx.fill()
      }

      raf = requestAnimationFrame(render)
    }
    render()

    return () => {
      cancelAnimationFrame(raf)
      ro.disconnect()
      window.removeEventListener("pointermove", onMove)
    }
  }, [])

  return (
    <canvas ref={canvasRef} aria-hidden="true" className="h-full w-full" />
  )
}
