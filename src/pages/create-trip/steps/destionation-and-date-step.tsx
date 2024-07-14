import { ArrowRight, Calendar, MapPin, Settings2, X } from "lucide-react";
import { Button } from "../../../components/button";
import { useState } from "react";
import { DateRange, DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import { format } from 'date-fns'

interface DestionationAndDateStepProps{
  isGuestsInputOpen: boolean
  closeGuestsInput: () => void
  openGuestsInput: () => void
}

export function DestionationAndDateStep({closeGuestsInput, isGuestsInputOpen, openGuestsInput}: DestionationAndDateStepProps){
  const [isDatePickerOpen, setIsDatePickerOpen] = useState(false)
  const [eventStartAndEventDates, setEventStartAndEventDates] = useState<DateRange | undefined>()

  function openDatePicker(){
    return setIsDatePickerOpen(true)
  }

  function closeDatePicker(){
    return setIsDatePickerOpen(false)
  }

  const displayedDate = eventStartAndEventDates && eventStartAndEventDates.from && eventStartAndEventDates.to ? format(eventStartAndEventDates.from, "d' de 'LLL").concat(' até ').concat(format(eventStartAndEventDates.to, "d' de 'LLL")) : null

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

            <button onClick={openDatePicker} className='flex items-center gap-2 outline-none text-left' disabled={isGuestsInputOpen}>
              <Calendar className='size-5 text-zinc-400'/>
              <span 
                className="text-lg text-zinc-400 flex-1"
              >
                {
                  displayedDate  || 'Quando'
                }
              </span>
            </button>

            {
              isDatePickerOpen && (
                <div className='fixed inset-0 bg-black/65 flex items-center justify-center'>
                  <div className='rounded-xl py-5 px-6 shadow-shape bg-zinc-900 space-y-5'>
                    <div className='space-y-2'>
                      <div className='flex items-center justify-between'>
                        <h2 className='text-lg font-semibold'>Selecione a data</h2>
                        <button onClick={() => closeDatePicker()}>
                          <X className='size-5 text-zinc-800 hover:text-lime-700'/>
                        </button>
                    </div>     
                  </div>

                  <DayPicker className="custom-date-picker" mode="range" selected={eventStartAndEventDates} onSelect={setEventStartAndEventDates}/>
                  </div>
                </div>
              )
            }

            <div className='w-px h-6 bg-zinc-800'/>

           {
            isGuestsInputOpen ? (
              <Button variant="secondary" onClick={() => closeGuestsInput()}>
                Alterar local/data
                <Settings2 className='size-5'/>
              </Button>
            ) : (
              <Button variant="primary" onClick={() => openGuestsInput()}>
                Continuar
                <ArrowRight className='size-5 text-zinc-950'/>
              </Button>
             
            )
           }
    </div>
  )
}