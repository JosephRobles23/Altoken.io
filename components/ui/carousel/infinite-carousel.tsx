"use client"

import { ReactNode } from "react"

interface InfiniteCarouselProps {
  children: ReactNode
  speed?: number // Duration in seconds
  itemWidth?: number // Width of each item in pixels
  gap?: number // Gap between items in rem
}

export function InfiniteCarousel({ children, speed = 10, itemWidth = 320, gap = 1.5 }: InfiniteCarouselProps) {
  // Calculate the number of items
  const itemCount = Array.isArray(children) ? children.length : 1

  return (
    <div className="relative">
      <div className="overflow-hidden">
        <div
          className="flex gap-6 hover:pause-animation"
          style={{
            animation: `scroll ${speed}s linear infinite`,
          }}
        >
          {children}
        </div>
      </div>

      {/* Gradient Overlays */}
      <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-background to-transparent pointer-events-none"></div>
      <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-background to-transparent pointer-events-none"></div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(calc(-${itemWidth}px * ${itemCount} - ${gap}rem * ${itemCount}));
          }
        }
      `}</style>
    </div>
  )
}
