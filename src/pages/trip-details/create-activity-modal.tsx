import { Calendar, Tag, X } from "lucide-react";

interface CreateActivityModalProps{
  closeCreateActivityModal: () => void
}

export function CreateActivityModal({closeCreateActivityModal}: CreateActivityModalProps){
  return(
<div className='fixed inset-0 bg-black/65 flex items-center justify-center'>
            <div className='w-[640px] rounded-xl py-5 px-6 shadow-shape bg-zinc-900 space-y-5'>
              <div className='space-y-2'>
                <div className='flex items-center justify-between'>
                  <h2 className='text-lg font-semibold'>Cadastrar atividade</h2>
                  <button onClick={() => closeCreateActivityModal()}>
                    <X className='size-5 text-zinc-800 hover:text-lime-700'/>
                  </button>
                </div>

                <p className='text-sm text-zinc-400'>
                  Todos convidados podem visualizar as atividades.
                </p>
              </div>

              <form className='space-y-3'>
                <div className='h-14 bg-zinc-950 border border-zinc-800 rounded-lg flex items-center gap-2 px-6 flex-1'>
                  <Tag className='size-5 text-zinc-400'/>
                  <input 
                    name='title'
                    placeholder="Qual a atividade" 
                    className="bg-transparent text-lg placeholder:text-zinc-400 outline-none flex-1 disabled:text-lime-900"
                  />
                </div>

                  <div className='h-14 flex-1 bg-zinc-950 border border-zinc-800 rounded-lg flex items-center gap-2 px-6'>
                    <Calendar className='size-5 text-zinc-400'/>
                    <input 
                      type="datetime-local" 
                      name='occurs_at'
                      placeholder="Data e Horário da atividade" 
                      className="bg-transparent text-lg placeholder:text-zinc-400 outline-none flex-1 disabled:text-lime-900 [color-scheme:dark]"
                    />
                  </div>

                

            <button
              type='submit'
              className='bg-lime-300 text-lime-950 rounded-lg h-11 px-5 font-medium flex items-center gap-2 hover:bg-lime-400 transition-colors w-full justify-center'
            >
              Salvar atividade
            </button>
              </form>
            </div>
          </div>
  )
}