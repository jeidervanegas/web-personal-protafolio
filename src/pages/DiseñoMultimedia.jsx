import React from 'react'
import dise from '../img/dibujo/dise.svg'


import Image1 from '../img/dibujo/1.jpg';
import Image2 from '../img/dibujo/2.jpg';
import Image3 from '../img/dibujo/3.jpg';
import Image4 from '../img/dibujo/4.jpg';
import Image5 from '../img/dibujo/5.jpg';
import Image6 from '../img/dibujo/6.jpg';
import Image7 from '../img/dibujo/7.jpg';
import Image8 from '../img/dibujo/8.jpg';
import Image9 from '../img/dibujo/9.jpg';
import Image10 from '../img/dibujo/10.jpg';
import Image11 from '../img/dibujo/11.jpg';
import Image12 from '../img/dibujo/12.jpg';
import Image13 from '../img/dibujo/13.jpg';
import Image14 from '../img/dibujo/14.jpg';
import Image15 from '../img/dibujo/15.jpg';
import Image16 from '../img/dibujo/16.jpg';
import Image17 from '../img/dibujo/17.jpg';
import Image18 from '../img/dibujo/18.jpg';
import Image19 from '../img/dibujo/19.jpg';
import Image20 from '../img/dibujo/20.jpg';
import Image21 from '../img/dibujo/20.jpg';











export const DiseñoMultimedia = () => {
  return (
    <>
        
    <section className='w-11/12  m-auto text-3xl text-center  mb-10 '>
        <h2 className='py-16'>¡Tengo habilidades en {' '}
        <span className="text-teal-600 font-bold">Diseño y multimedia! </span>{' '}</h2>

        <div className='flex flex-col lg:flex-row   gap-20 items-center mb-[140px] '>
            <img src={dise} className='lg:w-[40%]' alt="" />
            <div className='lg:w-[60%] flex flex-col gap-10 justify-between text-xl text-left'>
                <p className='leading-10 bg-white p-4 rounded-xl shadow-lg'>Llevo más de <span className='text-teal-600 font-bold'>8 años</span> realizando diseño de personajes, historietas, diseño publicitario e ilustración digital. </p>
                <p className='leading-10  bg-white p-4 rounded-xl shadow-lg'>Soy un <span className='font-bold text-teal-600'>apacionado por el arte gráfico</span>, lo cual me ha ayudado a adquirir buen criterio respecto a lo visual..</p>
                <p className='leading-10  bg-white p-4 rounded-xl shadow-lg'> No solo <span className='font-bold text-teal-600'>manejo diferentes estilos</span> de dibujo, como lo es el realisto, manga, comic, sino que tambien realizo diseño publicitario</p>
            </div>
            
        </div>
        
    </section>
    {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">

    </svg> */}
    

        


    </>
  )
}
