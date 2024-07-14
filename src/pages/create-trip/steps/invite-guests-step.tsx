import { ArrowRight, UserRoundPlus } from "lucide-react";

interface InviteGuestsStepProps{
  openGuestsModal: () => void
  emailsToInvite: string[]
  openConfirmTripModal: () => void
}

export function InviteGuestsStep({emailsToInvite, openConfirmTripModal, openGuestsModal}: InviteGuestsStepProps){
  return(
    <div className="h-16 bg-zinc-900 px-4 flex items-center rounded-xl shadow-shape gap-3">
            <button type='button' onClick={() => openGuestsModal()} className='flex items-center gap-2 flex-1'>
              <UserRoundPlus className='size-5 text-zinc-400'/>

              {
                emailsToInvite.length > 0 ? (
                  <span className='text-zinc-100 text-lg  flex-1 text-left'>
                    {emailsToInvite.length} pessoas(s) convidadas(s)
                  </span>
                ) : (
                  <span  className="bg-transparent text-lg text-zinc-400 flex-1 text-left">
                    Quem vai com você?
                  </span>
                )
              }
              
            </button>

            <div className='w-px h-6 bg-zinc-800'/>

            <button 
              className='bg-lime-300 text-lime-950 rounded-lg py-2 px-5 font-medium flex items-center gap-2 hover:bg-lime-400 transition-colors'
              onClick={() => openConfirmTripModal()}
            >
              Confirmar viagem

              <ArrowRight className='size-5 text-zinc-950'/>
            </button>
          </div>
  )
}