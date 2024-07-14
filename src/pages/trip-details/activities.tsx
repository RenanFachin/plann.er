import { CircleCheck } from "lucide-react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { api } from "../../lib/axios";
import { format } from "date-fns";
import { ptBR } from 'date-fns/locale'

interface Activity {
  date: string
  activities: {
    id: string
    title: string
    occurs_at: string
  }[]
}

export function Acitivities(){
  const params = useParams() // tripID
  const [activities, setActivities] = useState<Activity[]>([])
  
  useEffect(() => {
    api.get(`/trips/${params.tripId}/activities`)
    .then(response => setActivities(response.data.activities))
  },[params.tripId])
  

  
  return(
    <div className="space-y-8">
          {
            activities.map(activity => {
            return(
              <div key={activity.date} className="space-y-2.5">
                <div className="flex gap-2 items-baseline">
                  <span className="text-xl text-zinc-300 font-semibold">
                    Dia {format(activity.date, 'd')}
                  </span>
                  <span className="text-xs text-zinc-500">
                    {format(activity.date, 'EEEE', {
                      locale: ptBR
                    })}
                  </span>
                </div>

               {
                activity.activities.length > 0 ? (
                  <div  className="space-y-2.5">
                    {
                      activity.activities.map(event => {
                        return(
                          <div key={event.id} className="space-y-2.5">
                            <div className="px-4 py-2.5 bg-zinc-900 rounded-xl shadow-shape flex items-center gap-3" >
                              <CircleCheck className="size-5 text-lime-300"/>
                              <span className="text-zinc-100">{event.title}</span>
                              <span className="text-zinc-400 text-sm ml-auto">
                                {format(event.occurs_at, 'HH:mm')}h
                              </span>
                            </div>
                          </div>
                        )
                      })
                    }
                  </div>
                ) : (
                  <p className="text-zinc-500 text-sm">Nenhuma atividade cadastrada nesta data.</p>
                )
               }
              </div>
            )
            })
          }
    </div>
  )
}