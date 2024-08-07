import { AtSign, Plus, X } from "lucide-react"
import { FormEvent } from "react"

interface InviteGuestsModalProps {
  closeGuestsModal: () => void
  emailsToInvite: string[]
  addNewEmailToInvite: (event: FormEvent<HTMLFormElement>) => void
  removeEmailFromInvite: (email: string) => void
}

export function InviteGuestsModal({addNewEmailToInvite, closeGuestsModal, emailsToInvite, removeEmailFromInvite}: InviteGuestsModalProps){
  return(
    <div className='fixed inset-0 bg-black/65 flex items-center justify-center'>
            <div className='w-[640px] rounded-xl py-5 px-6 shadow-shape bg-zinc-900 space-y-5'>
              <div className='space-y-2'>
                <div className='flex items-center justify-between'>
                  <h2 className='text-lg font-semibold'>Selecionar os convidados</h2>
                  <button onClick={() => closeGuestsModal()}>
                    <X className='size-5 text-zinc-800 hover:text-lime-700'/>
                  </button>
                </div>

                <p className='text-sm text-zinc-400'>
                  Os convidados irão receber e-mails para confirmar a participação na viagem.
                </p>
              </div>

              <div className='flex flex-wrap gap-3'>
                {
                  emailsToInvite.map((guest) => {
                    return (
                      <div key={guest} className='py-1.5 px-2.5 rounded-md bg-zinc-800 flex items-center gap-2.5'>
                        <span className='text-zinc-300'>{guest}</span>
                        <button onClick={() => removeEmailFromInvite(guest)}>
                          <X className='size-4 text-zinc-500'/>
                        </button>
                      </div>
                    )
                  })
                }              
              </div>

              <div className='w-full h-px bg-zinc-800'/>

              <form onSubmit={addNewEmailToInvite} className='p-2.5 bg-zinc-950 border border-zinc-800 rounded-lg flex items-center gap-2'>
                <AtSign className='size-5 text-zinc-400'/>
                <input 
                  type="email" 
                  name='email'
                  placeholder="Digite o e-mail do convidado" 
                  className="bg-transparent text-lg placeholder:text-zinc-400 outline-none flex-1 disabled:text-lime-900"
                  pattern="^[^\s@]+@[^\s@]+\.[^\s@]+(\.[^\s@]+)?$"
                  title="Por favor, insira um email válido com uma extensão válida"
                />

            <button
              type='submit'
              className='bg-lime-300 text-lime-950 rounded-lg py-2 px-5 font-medium flex items-center gap-2 hover:bg-lime-400 transition-colors'
            >
              Convidar

              <Plus className='size-5 text-zinc-950'/>
            </button>
              </form>
            </div>
          </div>
  )
}