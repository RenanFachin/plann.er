import { ComponentProps, ReactNode } from "react";
import { tv, VariantProps } from 'tailwind-variants'

// criando variantes
const buttonVariants = tv({
  base: 'rounded-lg py-2 px-5 font-medium flex items-center gap-2',

  variants: {
    variant: {
      primary: 'bg-lime-300 text-lime-950 hover:bg-lime-400',
      'primary-full-width': 'bg-lime-300 text-lime-950 hover:bg-lime-400 w-full justify-center',
      secondary: 'bg-zinc-800 text-zinc-200 hover:bg-zinc-600 transition-colors',
      'secondary-full-width': 'bg-zinc-800 text-zinc-200 hover:bg-zinc-600 transition-colors w-full justify-center'
    }
  },

  defaultVariants: {
    variant: 'primary'
  }
})

interface ButtonProps extends ComponentProps<'button'>, VariantProps<typeof buttonVariants>{
  children: ReactNode
}

export function Button({children, variant ,...props}: ButtonProps){
  return(
    <button 
    className={buttonVariants({ variant })}
    {...props}
    >
      {children}
    </button>
  )
}