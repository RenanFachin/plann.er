import { ComponentProps, ReactNode } from "react";
import { tv, VariantProps } from 'tailwind-variants'

// criando variantes
const buttonVariants = tv({
  base: 'rounded-lg py-2 px-5 font-medium flex items-center gap-2 justify-center',

  variants: {
    variant: {
      primary: 'bg-lime-300 text-lime-950 hover:bg-lime-400',
      'primary-full-width': 'bg-lime-300 text-lime-950 hover:bg-lime-400 w-full justify-center',
      secondary: 'bg-zinc-800 text-zinc-200 hover:bg-zinc-600 transition-colors',
      'secondary-full-width': 'bg-zinc-800 text-zinc-200 hover:bg-zinc-600 transition-colors w-full justify-center'
    },

    size: {
      default: 'py-2',
      full: 'w-full h-11'
    }
  },

  defaultVariants: {
    variant: 'primary'
  }
})

interface ButtonProps extends ComponentProps<'button'>, VariantProps<typeof buttonVariants>{
  children: ReactNode
}

export function Button({children, variant, size ,...props}: ButtonProps){
  return(
    <button 
    className={buttonVariants({ variant, size })}
    {...props}
    >
      {children}
    </button>
  )
}