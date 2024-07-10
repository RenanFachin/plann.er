import { MapPin, Calendar, ArrowRight, UserRoundPlus, Settings2, X, AtSign, Plus, User } from 'lucide-react'
import { FormEvent, useState } from 'react'
import { useNavigate } from 'react-router-dom'

export function CreateTripPage() {
  const navigate = useNavigate()

  const [isGuestsInputOpen, setIsGuestsInputOpen] = useState(false)
  const [isGuestsModalOpen, setIsGuestsModalOpen] = useState(false)
  const [isConfirmTripModalOpen, setIsConfirmTripModalOpen] = useState(false)
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

  function createTrip(){
    navigate('/trips/123')
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
        </div>

        <p className="text-zinc-500 text-sm">
          Ao planejar sua viagem pela plann.er você automaticamente concorda <br />
        com nossos <a href="#" className="text-zinc-300 underline hover:text-lime-500">termos de uso</a> e <a href="#" className="text-zinc-300 underline hover:text-lime-500">políticas de privacidade</a>.
        </p>
      </div>


      {
        isGuestsModalOpen && (
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


          {
            isConfirmTripModalOpen && (
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

              <form onSubmit={addNewEmailToInvite} className='space-y-3'>
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
              onClick={createTrip}
            >
              Confirma criação da viagem
            </button>
              </form>
            </div>
          </div>
            )
          
          }
    </div>
  )
}


