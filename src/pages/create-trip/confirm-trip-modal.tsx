import { User, X } from "lucide-react"
import { FormEvent } from "react"

interface ConfirmTripModalProps {
  closeConfirmTripModal: () => void
  createTrip: (event: FormEvent<HTMLFormElement>) => void
}

export function ConfirmTripModal({closeConfirmTripModal, createTrip}: ConfirmTripModalProps){
  return(
    <div className='fixed inset-0 bg-black/65 flex items-center justify-center'>
            <div className='w-[640px] rounded-xl py-5 px-6 shadow-shape bg-zinc-900 space-y-5'>
              <div className='space-y-2'>
                <div className='flex items-center justify-between'>
                  <h2 className='text-lg font-semibold'>Confirmar criação de viagem</h2>
                  <button onClick={() => closeConfirmTripModal()}>
                    <X className='size-5 text-zinc-800 hover:text-lime-700'/>
                  </button>
                </div>

                <p className='text-sm text-zinc-400'>
                  Para concluir a criação da viagem para <strong className='font-semibold text-zinc-100'>Florianópolis</strong>, Brasil nas datas de <strong className='font-semibold text-zinc-100'>
                  16 a 27 de Agosto de 2024</strong> preencha seus dados abaixo:
                </p>
              </div>

              <form onSubmit={createTrip} className='space-y-3'>
                <div className='h-14 bg-zinc-950 border border-zinc-800 rounded-lg flex items-center gap-2 px-6 flex-1'>
                  <User className='size-5 text-zinc-400'/>
                  <input 
                    name='name'
                    placeholder="Seu nome completo" 
                    className="bg-transparent text-lg placeholder:text-zinc-400 outline-none flex-1 disabled:text-lime-900"
                  />
                </div>

                <div className='h-14 bg-zinc-950 border border-zinc-800 rounded-lg flex items-center gap-2 px-6 flex-1'>
                  <User className='size-5 text-zinc-400'/>
                  <input 
                    type="email" 
                    name='email'
                    placeholder="Seu e-mail pessoal" 
                    className="bg-transparent text-lg placeholder:text-zinc-400 outline-none flex-1 disabled:text-lime-900"
                  />
                </div>
                

            <button
              type='submit'
              className='bg-lime-300 text-lime-950 rounded-lg h-11 px-5 font-medium flex items-center gap-2 hover:bg-lime-400 transition-colors w-full justify-center'
            >
              Confirma criação da viagem
            </button>
              </form>
            </div>
    </div>
  )
}