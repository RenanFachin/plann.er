import { MapPin, Calendar, ArrowRight, UserRoundPlus, Settings2 } from 'lucide-react'
import { useState } from 'react'

export function App() {
  const [isGuestsInputOpen, setIsGuestsInputOpen] = useState(false)

  function openGuestsInput(){
    setIsGuestsInputOpen(true)
  }

  function closeGuestsInput(){
    setIsGuestsInputOpen(false)
  }

  return (
    <div className="h-screen flex items-center justify-center bg-pattern bg-no-repeat bg-center">
      <div className="max-w-3xl w-full px-6 text-center space-y-10">
        <div className='flex flex-col items-center gap-3'>
          <img src='/logo.svg' alt='plann.er'/>
          <p className="text-zinc-300 text-lg">Convide seus amigos e planeje sua próxima viagem!</p>
        </div>

        <div className='space-y-3'>
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


          {
            isGuestsInputOpen && (
              <div className="h-16 bg-zinc-900 px-4 flex items-center rounded-xl shadow-shape gap-3">
            <div className='flex items-center gap-2 flex-1'>
              <UserRoundPlus className='size-5 text-zinc-400'/>
              <input 
                type="text" 
                placeholder="Quem vai com você?" 
                className="bg-transparent text-lg placeholder:text-zinc-400 outline-none flex-1"
              />
            </div>

            <div className='w-px h-6 bg-zinc-800'/>

            <button 
              className='bg-lime-300 text-lime-950 rounded-lg py-2 px-5 font-medium flex items-center gap-2 hover:bg-lime-400 transition-colors'
            >
              Confirmar viagem

              <ArrowRight className='size-5 text-zinc-950'/>
            </button>
          </div>
            )
          }
        </div>

        <p className="text-zinc-500 text-sm">
          Ao planejar sua viagem pela plann.er você automaticamente concorda <br />
        com nossos <a href="#" className="text-zinc-300 underline hover:text-lime-500">termos de uso</a> e <a href="#" className="text-zinc-300 underline hover:text-lime-500">políticas de privacidade</a>.
        </p>
      </div>
    </div>
  )
}


