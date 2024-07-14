import { FormEvent, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { InviteGuestsModal } from './invite-guests-modal'
import { ConfirmTripModal } from './confirm-trip-modal'
import { DestionationAndDateStep } from './steps/destionation-and-date-step'
import { InviteGuestsStep } from './steps/invite-guests-step'
import { DateRange } from 'react-day-picker'

export function CreateTripPage() {
  const navigate = useNavigate()

  const [isGuestsInputOpen, setIsGuestsInputOpen] = useState(false)
  const [isGuestsModalOpen, setIsGuestsModalOpen] = useState(false)
  const [isConfirmTripModalOpen, setIsConfirmTripModalOpen] = useState(false)

  const [destination, setDestination] = useState('')
  const [ownerName, setOwnerName] = useState('')
  const [ownerEmail, setOwnerEmail] = useState('')
  const [eventStartAndEventDates, setEventStartAndEventDates] = useState<DateRange | undefined>()

  const [emailsToInvite, setEmailToInvite] = useState<string[]>([])


  function openGuestsInput(){
    setIsGuestsInputOpen(true)
  }

  function closeGuestsInput(){
    setIsGuestsInputOpen(false)
  }

  function openGuestsModal(){
    setIsGuestsModalOpen(true)
  }

  function closeGuestsModal(){
    setIsGuestsModalOpen(false)
  }

  function openConfirmTripModal(){
    setIsConfirmTripModalOpen(true)
  }

  function closeConfirmTripModal(){
    setIsConfirmTripModalOpen(false)
  }

  function addNewEmailToInvite(event: FormEvent<HTMLFormElement>){
    event.preventDefault()

    const data = new FormData(event.currentTarget)
    const email = data.get('email')?.toString()

    if(!email){
      return
    }

    // Validação de emails repetidos
    if(emailsToInvite.includes(email)){
      return
    }

    setEmailToInvite([
      ...emailsToInvite,
      email
    ])

    event.currentTarget.reset()
  }
  
  function removeEmailFromInvite(emailToRemove: string){
    const newEmailList = emailsToInvite.filter(invited => invited !== emailToRemove)

    setEmailToInvite(newEmailList)
  }

  function createTrip(event: FormEvent<HTMLFormElement>){
    event.preventDefault()
    console.log(destination)
    console.log(eventStartAndEventDates)
    console.log(ownerName)
    console.log(ownerEmail)

    // navigate('/trips/123')
  }

  return (
    <div className="h-screen flex items-center justify-center bg-pattern bg-no-repeat bg-center">
      <div className="max-w-3xl w-full px-6 text-center space-y-10">
        <div className='flex flex-col items-center gap-3'>
          <img src='/logo.svg' alt='plann.er'/>
          <p className="text-zinc-300 text-lg">Convide seus amigos e planeje sua próxima viagem!</p>
        </div>

        <div className='space-y-3'>
          <DestionationAndDateStep 
            closeGuestsInput={closeGuestsInput}
            isGuestsInputOpen={isGuestsInputOpen}
            openGuestsInput={openGuestsInput}
            setDestination={setDestination}
            setEventStartAndEventDates={setEventStartAndEventDates}
            eventStartAndEventDates={eventStartAndEventDates}
          />

          {
            isGuestsInputOpen && (
              <InviteGuestsStep
                emailsToInvite={emailsToInvite}
                openConfirmTripModal={openConfirmTripModal}
                openGuestsModal={openGuestsModal}
              />
            )
          }
        </div>

        <p className="text-zinc-500 text-sm">
          Ao planejar sua viagem pela plann.er você automaticamente concorda <br />
        com nossos <a href="#" className="text-zinc-300 underline hover:text-lime-500">termos de uso</a> e <a href="#" className="text-zinc-300 underline hover:text-lime-500">políticas de privacidade</a>.
        </p>
      </div>


      {
        isGuestsModalOpen && (
          <InviteGuestsModal 
            addNewEmailToInvite={addNewEmailToInvite} 
            closeGuestsModal={closeGuestsModal} 
            emailsToInvite={emailsToInvite} 
            removeEmailFromInvite={removeEmailFromInvite}
          />
        )
      }


          {
            isConfirmTripModalOpen && (
              <ConfirmTripModal 
              closeConfirmTripModal={closeConfirmTripModal} 
              createTrip={createTrip}
              setOwnerName={setOwnerName}
              setOwnerEmail={setOwnerEmail}
              />
            )
          
          }
    </div>
  )
}


