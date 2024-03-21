import * as React from "react"

import { cn } from "@/lib/utils"

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, ...props }, ref) => {
    return (
      <textarea
        className={cn(
          "flex h-12 font-semibold w-full border-2 overflow-hidden border-gray-800 resize-none rounded-md pt-3 lg:px-3 lg:py-2 ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 text-md lg:text-lg placeholder-slate-500 focus:placeholder-slate-400 bg-gray-800 bg:border-transparent text-gray-300 focus:outline-none"
          
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Textarea.displayName = "Textarea"

export { Textarea }
