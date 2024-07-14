import { ArrowRight, Calendar, MapPin, Settings2 } from "lucide-react";

interface DestionationAndDateStepProps{
  isGuestsInputOpen: boolean
  closeGuestsInput: () => void
  openGuestsInput: () => void
}

export function DestionationAndDateStep({closeGuestsInput, isGuestsInputOpen, openGuestsInput}: DestionationAndDateStepProps){
  return(
    <div className="h-16 bg-zinc-900 px-4 flex items-center rounded-xl shadow-shape gap-3">
            <div className='flex items-center gap-2 flex-1'>
              <MapPin className='size-5 text-zinc-400'/>
              <input 
                type="text" 
                placeholder="Para onde você vai?" 
                className="bg-transparent text-lg placeholder:text-zinc-400 outline-none flex-1 disabled:text-lime-900"
                disabled={isGuestsInputOpen}
              />
            </div>

            <div className='flex items-center gap-2'>
              <Calendar className='size-5 text-zinc-400'/>
              <input 
                type="text" 
                placeholder="Quando?" 
                className="bg-transparent text-lg placeholder:text-zinc-400 max-w-40 outline-none disabled:text-lime-900"
                disabled={isGuestsInputOpen}
              />
            </div>

            <div className='w-px h-6 bg-zinc-800'/>

           {
            isGuestsInputOpen ? (
              <button 
                className='bg-zinc-800 text-zinc-200 rounded-lg py-2 px-5 font-medium flex items-center gap-2 hover:bg-zinc-600 transition-colors'
                onClick={() => closeGuestsInput()}
              >
                Alterar local/data
                <Settings2 className='size-5'/>
              </button>
            ) : (
              <button 
              className='bg-lime-300 text-lime-950 rounded-lg py-2 px-5 font-medium flex items-center gap-2 hover:bg-lime-400 transition-colors'
              onClick={() => openGuestsInput()}
            >
              Continuar

              <ArrowRight className='size-5 text-zinc-950'/>
            </button>
            )
           }
    </div>
  )
}