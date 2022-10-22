
import React,{useState,useEffect} from 'react'

function Clock() {
    const[day,setDay]=useState()
    const[hours,setHours]=useState()
    const[minutes,setMinutes]=useState()
    const[seconds,setSeconds]=useState()

    let dateInterval;

    const countDown=()=>{

        const date=new Date('December 20,2022').getTime()

        dateInterval=setInterval(()=>{
            const now=new Date().getTime()
            const diferencae=date - now;

            const days=Math.floor(diferencae /(1000 * 60 * 60 *24));
            const hours=Math.floor(diferencae % (1000*60*60*24) / (1000 * 60 * 60))
            const minutes=Math.floor(diferencae % (1000*60*60) / (1000 * 60))
            const seconds=Math.floor(diferencae % (1000*60) / (1000))

            if(diferencae < 0) clearInterval(dateInterval.current)
            else{
                setDay(days)
                setHours(hours)
                setMinutes(minutes)
                setSeconds(seconds)
            }
            
        })
    }

    useEffect(()=>{
        countDown()
    },[])

  return (
    <div className='wrapper d-flex align-items-center gap-5'>
        <div className='clock_data d-flex align-items-center gap-5'>
            <div className='text-center'>
                <h1 className=' fs-3 mb-2'>{day}</h1>
                <h4 className='fs-6'>Dias</h4>
            </div>
            <span className='fs-3'>:</span>
        </div>
        <div className='clock_data d-flex align-items-center gap-5'>
            <div className='text-center'>
                <h1 className=' fs-3 mb-2'>{minutes}</h1>
                <h4 className='fs-6'>Minutos</h4>
            </div>
            <span className='fs-3'>:</span>
        </div>
        <div className='clock_data d-flex align-items-center gap-5'>
            <div className='text-center'>
                <h1 className=' fs-3 mb-2'>{seconds}</h1>
                <h4 className='fs-6'>Segundos</h4>

            </div>
        </div>
    </div>
  )
}

export default Clock