import React, { useState } from 'react'
// import { Link } from 'react-router-dom'
import imageProfile from '../img/jeider.png'
import imageProfile2 from '../img/jeider2.png'
import imgageMain from '../img/graduation-image.svg'
import imgageFondo from '../img/fondo.jpg'
import imgage1 from '../img/galeria-1.jpg'
import imgage2 from '../img/galeria-2.jpg'
import imgage3 from '../img/galeria-3.jpg'
import { Portafolio } from './Portafolio'
import { Link } from 'react-scroll'
import { DiseñoMultimedia } from './DiseñoMultimedia'

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

import pho from '../img/software/photshop.png';
import ai from '../img/software/ai.png';
import cor from '../img/software/corel.jpg';
import clip from '../img/software/clip.png';
import pre from '../img/software/premier.png';
import can from '../img/software/camtasia.jpg';
import pro from '../img/software/protools.png';
import off from '../img/software/office.svg';

import pu1 from '../img/publicidad/pu1.jpeg';
import pu2 from '../img/publicidad/pu2.jpeg';
import pu3 from '../img/publicidad/pu3.jpeg';
import pu4 from '../img/publicidad/pu4.jpeg';
import pu5 from '../img/publicidad/pu5.jpeg';
import pu6 from '../img/publicidad/pu6.jpeg';
import pu7 from '../img/publicidad/pu7.jpeg';

export const Home = () => {
  const Project = ['fullStack', 'frontendReact', 'nativo']

  const menuItems = [
    {
      id: 1,
      title: 'descripcion'
    },
    {
      id: 2,
      title: 'skills'
    },
    {
      id: 3,
      title: 'portafolio'
    },
    {
      id: 3,
      title: 'multimedia'
    },
    {
      id: 3,
      title: 'diseño'
    },
    {
      id: 3,
      title: 'ilustraciones'
    },

    {
      id: 3,
      title: 'informatica'
    },

    {
      id: 4,
      title: 'estudios'
    }
  ]

  return (
    <div className="">
      <div className=" bg-gray-50 fixed z-10 w-full">
        <div className="w-11/12 m-auto ">
          <header className="flex flex-col md:flex-row text-center md:justify-between py-4 ">
            <div className="mb-3 md:mb-0">
              <li className="list-none">
                <a className="text-3xl font-extrabold ">
                  <span className="italic">JV</span>.
                </a>
              </li>
            </div>
            <nav className="flex justify-center items-center text-sm  md:text-lg text-gray-700 font-semibold py-10 md:py-0">
              <ul className="grid grid-cols-4 md:flex  md:flex-row gap-4 justify-center items-center  ">
                {menuItems.map((menu) => (
                  <li className="hover:text-gray-900" key={menu.id}>
                    <Link
                      className="hover:text-teal-700 cursor-pointer"
                      to={menu.title}
                      smooth={true}
                      offset={-100}
                      duration={500}
                    >
                      {menu.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </header>
        </div>
      </div>

      <section id="descripcion" className="pt-56 md:pt-12">
        <div className="md:w-4/5 m-auto p-10 ">
          <div className="flex  flex-col-reverse lg:flex-row justify-center items-center ">
            <div className=" lg:w-4/5 mt-6 md:0 ">
              <h2 className="text-3xl text-center md:text-left md:text-5xl">
                Hola, soy{' '}
                <span className="text-teal-600 font-bold">
                  {' '}
                  Jeider Gomez Vanegas.{' '}
                </span>
                Programador{' '}
                <span className="text-gray-600 font-bold">
                  Junior Full Stack
                </span>
              </h2>
              <p className="mt-6  md:w-11/12 leading-7">
                Me considero una persona proactiva, visionaria y emprendedora.
                Siempre estoy dispuesto a aprender y a compartir el conocimiento
                con las personas que me rodean, busco la excelencia y sé que
                para lograrlo debo rodearme de personas capacitadas. Soy de buen
                ambiente laboral, pero, sobre todo, exigente conmigo mismo, lo
                cual me impulsa a realizar mis labores con excelencia.
              </p>
              <p className="w-11/12">
                También poseo cualidades comunicativas, las cuales me permiten
                trabajar en equipo y poder integrarme o adaptarme a cualquier
                ambiente laboral. Contácto:{' '}
                <span className="text-gray-500 font-bold">
                  {' '}
                  +57 323 832 3994
                </span>
              </p>

              <div className="flex flex-col md:flex-row justify-between items-center gap-6 mt-6 mb-6 w-11/12">
                <a
                  target="_blank"
                  href="https://www.mediafire.com/file/5tzgvuk7ly1bcbr/CV_jeider_gomez_vanegass.pdf/file"
                >
                  <button className="shadow-lg w-full md:w-auto py-3 text-teal-500 font-bold border-2 border-teal-500 hover:bg-teal-500 hover:text-white transition-all px-8 rounded-full ">
                    Descargar CV
                  </button>
                </a>

                <div>
                  <div className="flex justify-end gap-10">
                    <a
                      target="_blank"
                      href="https://www.youtube.com/watch?v=CP4E7ZCIclI&t=52s"
                    >
                      <div className="hover:cursor-pointer">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="icon icon-tabler icon-tabler-brand-youtube"
                          width="32"
                          height="32"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="#4B5563"
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                          <path d="M2 8a4 4 0 0 1 4 -4h12a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-12a4 4 0 0 1 -4 -4v-8z" />
                          <path d="M10 9l5 3l-5 3z" />
                        </svg>
                      </div>
                    </a>
                    <a
                      target="_blank"
                      href="https://www.linkedin.com/in/jeider-gomez-8b278328a/"
                    >
                      <div className="hover:cursor-pointer">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="icon icon-tabler icon-tabler-brand-linkedin"
                          width="32"
                          height="32"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="#4B5563"
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                          <path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z" />
                          <path d="M8 11l0 5" />
                          <path d="M8 8l0 .01" />
                          <path d="M12 16l0 -5" />
                          <path d="M16 16v-3a2 2 0 0 0 -4 0" />
                        </svg>
                      </div>
                    </a>
                    <div className="hover:cursor-pointer">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="icon icon-tabler icon-tabler-brand-instagram"
                        width="32"
                        height="32"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="#4B5563"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M4 4m0 4a4 4 0 0 1 4 -4h8a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-8a4 4 0 0 1 -4 -4z" />
                        <path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
                        <path d="M16.5 7.5l0 .01" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="">
              <img
                className="shadow-md  w-72 rounded-full"
                src={imageProfile2}
                alt=""
              />
            </div>
          </div>
        </div>
      </section>

      <p className="text-white text-xl  bg-teal-800 inline-block p-4 rounded-se-2xl">
        Habilidades blandas:
      </p>
      <div className="bg-gray-800">
        <div className="py-10 md:py-6 w-11/12 m-auto">
          <div className="grid grid-cols-3 gap-6 md:flex  md:text-center md:flex-row  md_gap-0 md:justify-between uppercase text-white text-xs md:text-sm">
            <p>Empatía</p>
            <p>Adaptabilidad</p>
            <p>Pensamiento crítico</p>
            <p>Comunicación</p>
            <p>Puntualidad</p>
            <p>Aprendizaje Rápido</p>
            <p>Tolerancia a la frustración</p>
            <p>liderazgo </p>
          </div>
        </div>
      </div>
      <p id="skills"></p>
      <section  className="w-4/5 mx-auto mb-20">
        <h2 className="text-3xl text-center mt-14 mb-10">
          Experiencia con el{' '}
          <span className="text-teal-600 font-bold">Stack Mern </span>{' '}
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 p-4  gap-6  w-full  rounded-b-xl ">
          <div className=" flex flex-col justify-center items-center   shadow-lg rounded-xl pb-2 hover:shadow-lg  cursor-pointer bg-white  hover:-translate-y-4 transition-all ">
            <div className="flex justify-center items-center rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-brand-html5"
                width="72"
                height="72"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="#DD4B25"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M20 4l-2 14.5l-6 2l-6 -2l-2 -14.5z" />
                <path d="M15.5 8h-7l.5 4h6l-.5 3.5l-2.5 .75l-2.5 -.75l-.1 -.5" />
              </svg>
            </div>
            <p className="text-lg uppercase text-gray-700 font-bold">html</p>
          </div>

          <div className="flex flex-col justify-center items-center   shadow-lg rounded-xl p-2 hover:shadow-lg  cursor-pointer bg-white hover:-translate-y-4 transition-all">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-brand-css3"
              width="72"
              height="72"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="#0070B8"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M20 4l-2 14.5l-6 2l-6 -2l-2 -14.5z" />
              <path d="M8.5 8h7l-4.5 4h4l-.5 3.5l-2.5 .75l-2.5 -.75l-.1 -.5" />
            </svg>
            <p className="text-lg uppercase text-gray-700 font-bold">css</p>
          </div>

          <div className="flex flex-col justify-center items-center   shadow-lg rounded-xl p-2 hover:shadow-lg cursor-pointer bg-white hover:-translate-y-4 transition-all">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-brand-bootstrap"
              width="72"
              height="72"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="#7C4DB3"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M2 12a2 2 0 0 0 2 -2v-4a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v4a2 2 0 0 0 2 2" />
              <path d="M2 12a2 2 0 0 1 2 2v4a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-4a2 2 0 0 1 2 -2" />
              <path d="M9 16v-8h3.5a2 2 0 1 1 0 4h-3.5h4a2 2 0 1 1 0 4h-4z" />
            </svg>
            <p className="text-lg uppercase text-gray-700 font-bold">
              bootstrap
            </p>
          </div>

          <div className="flex flex-col justify-center items-center   shadow-lg rounded-xl p-2 hover:shadow-lg  cursor-pointer bg-white hover:-translate-y-4 transition-all">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-brand-tailwind"
              width="72"
              height="72"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="#36B7F0"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M11.667 6c-2.49 0 -4.044 1.222 -4.667 3.667c.933 -1.223 2.023 -1.68 3.267 -1.375c.71 .174 1.217 .68 1.778 1.24c.916 .912 2 1.968 4.288 1.968c2.49 0 4.044 -1.222 4.667 -3.667c-.933 1.223 -2.023 1.68 -3.267 1.375c-.71 -.174 -1.217 -.68 -1.778 -1.24c-.916 -.912 -1.975 -1.968 -4.288 -1.968zm-4 6.5c-2.49 0 -4.044 1.222 -4.667 3.667c.933 -1.223 2.023 -1.68 3.267 -1.375c.71 .174 1.217 .68 1.778 1.24c.916 .912 1.975 1.968 4.288 1.968c2.49 0 4.044 -1.222 4.667 -3.667c-.933 1.223 -2.023 1.68 -3.267 1.375c-.71 -.174 -1.217 -.68 -1.778 -1.24c-.916 -.912 -1.975 -1.968 -4.288 -1.968z" />
            </svg>
            <p className="text-lg uppercase text-gray-700 font-bold">
              tailwind
            </p>
          </div>

          <div className="flex flex-col justify-center items-center   shadow-lg rounded-xl p-2 hover:shadow-lg cursor-pointer bg-white hover:-translate-y-4 transition-all">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-brand-javascript"
              width="72"
              height="72"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="#EFD81D"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M20 4l-2 14.5l-6 2l-6 -2l-2 -14.5z" />
              <path d="M7.5 8h3v8l-2 -1" />
              <path d="M16.5 8h-2.5a.5 .5 0 0 0 -.5 .5v3a.5 .5 0 0 0 .5 .5h1.423a.5 .5 0 0 1 .495 .57l-.418 2.93l-2 .5" />
            </svg>
            <p className="text-lg uppercase text-gray-700 font-bold">
              javascript
            </p>
          </div>

          <div className="flex flex-col justify-center items-center   shadow-lg rounded-xl p-2 hover:shadow-lg transition-all cursor-pointer bg-white hover:-translate-y-4 ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-brand-react"
              width="72"
              height="72"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="#00abfb"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M6.306 8.711c-2.602 .723 -4.306 1.926 -4.306 3.289c0 2.21 4.477 4 10 4c.773 0 1.526 -.035 2.248 -.102" />
              <path d="M17.692 15.289c2.603 -.722 4.308 -1.926 4.308 -3.289c0 -2.21 -4.477 -4 -10 -4c-.773 0 -1.526 .035 -2.25 .102" />
              <path d="M6.305 15.287c-.676 2.615 -.485 4.693 .695 5.373c1.913 1.105 5.703 -1.877 8.464 -6.66c.387 -.67 .733 -1.339 1.036 -2" />
              <path d="M17.694 8.716c.677 -2.616 .487 -4.696 -.694 -5.376c-1.913 -1.105 -5.703 1.877 -8.464 6.66c-.387 .67 -.733 1.34 -1.037 2" />
              <path d="M12 5.424c-1.925 -1.892 -3.82 -2.766 -5 -2.084c-1.913 1.104 -1.226 5.877 1.536 10.66c.386 .67 .793 1.304 1.212 1.896" />
              <path d="M12 18.574c1.926 1.893 3.821 2.768 5 2.086c1.913 -1.104 1.226 -5.877 -1.536 -10.66c-.375 -.65 -.78 -1.283 -1.212 -1.897" />
              <path d="M11.5 12.866a1 1 0 1 0 1 -1.732a1 1 0 0 0 -1 1.732z" />
            </svg>
            <p className="text-lg uppercase text-gray-700 font-bold">react</p>
          </div>

          <div className="flex flex-col justify-center items-center   shadow-lg rounded-xl p-2 hover:shadow-lg cursor-pointer bg-white hover:-translate-y-4 transition-all">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-brand-nodejs"
              width="72"
              height="72"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="#87BF00"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M9 9v8.044a2 2 0 0 1 -2.996 1.734l-1.568 -.9a3 3 0 0 1 -1.436 -2.561v-6.635a3 3 0 0 1 1.436 -2.56l6 -3.667a3 3 0 0 1 3.128 0l6 3.667a3 3 0 0 1 1.436 2.561v6.634a3 3 0 0 1 -1.436 2.56l-6 3.667a3 3 0 0 1 -3.128 0" />
              <path d="M17 9h-3.5a1.5 1.5 0 0 0 0 3h2a1.5 1.5 0 0 1 0 3h-3.5" />
            </svg>
            <p className="text-lg uppercase text-gray-700 font-bold">node</p>
          </div>

          <div className="flex flex-col justify-center items-center   shadow-lg rounded-xl p-2 hover:shadow-lg cursor-pointer bg-white hover:-translate-y-4 transition-all">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-brand-javascript"
              width="72"
              height="72"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="#F3B719"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M20 4l-2 14.5l-6 2l-6 -2l-2 -14.5z" />
              <path d="M7.5 8h3v8l-2 -1" />
              <path d="M16.5 8h-2.5a.5 .5 0 0 0 -.5 .5v3a.5 .5 0 0 0 .5 .5h1.423a.5 .5 0 0 1 .495 .57l-.418 2.93l-2 .5" />
            </svg>
            <p className="text-lg uppercase text-gray-700 font-bold">express</p>
          </div>

          <div className="flex flex-col justify-center items-center   shadow-lg rounded-xl p-2 hover:shadow-lg  cursor-pointer bg-white hover:-translate-y-4 transition-all">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-brand-mongodb"
              width="72"
              height="72"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="#49A248"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M12 3v19" />
              <path d="M18 11.227c0 3.273 -1.812 4.77 -6 9.273c-4.188 -4.503 -6 -6 -6 -9.273c0 -4.454 3.071 -6.927 6 -9.227c2.929 2.3 6 4.773 6 9.227z" />
            </svg>
            <p className="text-lg uppercase text-gray-700 font-bold">
              mongo db
            </p>
          </div>
          <div className="flex flex-col justify-center items-center   shadow-lg rounded-xl p-2 hover:shadow-lg  cursor-pointer bg-white hover:-translate-y-4 transition-all">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="icon icon-tabler icon-tabler-sql"
              width="72"
              height="72"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="#00abfb"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M12 8a2 2 0 0 1 2 2v4a2 2 0 1 1 -4 0v-4a2 2 0 0 1 2 -2z" />
              <path d="M17 8v8h4" />
              <path d="M13 15l1 1" />
              <path d="M3 15a1 1 0 0 0 1 1h2a1 1 0 0 0 1 -1v-2a1 1 0 0 0 -1 -1h-2a1 1 0 0 1 -1 -1v-2a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1" />
            </svg>
            <p className="text-lg uppercase text-gray-700 font-bold">SQL</p>
          </div>
          <div className="flex flex-col justify-center items-center   shadow-lg rounded-xl p-2 hover:shadow-lg  cursor-pointer bg-white hover:-translate-y-4 transition-all">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="icon icon-tabler icon-tabler-brand-python"
              width="72"
              height="72"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="#00abfb"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M12 9h-7a2 2 0 0 0 -2 2v4a2 2 0 0 0 2 2h3" />
              <path d="M12 15h7a2 2 0 0 0 2 -2v-4a2 2 0 0 0 -2 -2h-3" />
              <path d="M8 9v-4a2 2 0 0 1 2 -2h4a2 2 0 0 1 2 2v5a2 2 0 0 1 -2 2h-4a2 2 0 0 0 -2 2v5a2 2 0 0 0 2 2h4a2 2 0 0 0 2 -2v-4" />
              <path d="M11 6l0 .01" />
              <path d="M13 18l0 .01" />
            </svg>
            <p className="text-lg uppercase text-gray-700 font-bold">PYTHON</p>
          </div>

          <div className="flex flex-col justify-center items-center   shadow-lg rounded-xl p-2 hover:shadow-lg  cursor-pointer bg-white hover:-translate-y-4 transition-all">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-brand-git"
              width="72"
              height="72"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="#F44D27"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M16 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
              <path d="M12 8m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
              <path d="M12 16m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
              <path d="M12 15v-6" />
              <path d="M15 11l-2 -2" />
              <path d="M11 7l-1.9 -1.9" />
              <path d="M13.446 2.6l7.955 7.954a2.045 2.045 0 0 1 0 2.892l-7.955 7.955a2.045 2.045 0 0 1 -2.892 0l-7.955 -7.955a2.045 2.045 0 0 1 0 -2.892l7.955 -7.955a2.045 2.045 0 0 1 2.892 0z" />
            </svg>
            <p className="text-lg uppercase text-gray-700 font-bold">git</p>
          </div>

          <div className="flex flex-col justify-center items-center   shadow-lg rounded-xl p-2 hover:shadow-lg hover:-translate-y-4 transition-all cursor-pointer bg-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-brand-github"
              width="72"
              height="72"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="#202B3C"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" />
            </svg>
            <p className="text-lg uppercase text-gray-700 font-bold">github</p>
          </div>
        </div>
      </section>

      {/*Portafolio */}
      <p
        id="portafolio"
        className="text-xl bg-teal-800 inline-block py-4 pl-4 pr-28 text-white rounded-se-2xl"
      >
        Portafolio
      </p>
      <main className="bg-white flex flex-col md:flex-row   ">
        <Portafolio />
      </main>
        <div className='bg-white'>

        <p id='multimedia'></p>
        <p
          id="portafolio"
          className="text-xl bg-teal-800 inline-block py-4 pl-4 pr-28 text-white rounded-se-2xl"
        >
          Diseño Multimedia
        </p>
      </div>

        <section  className=''>
          <DiseñoMultimedia/>
          <p id='diseño'></p>        
        </section>


        <section className=' bg-gradient-to-r from-teal-600 to-blue-500 p-3 mb-20 '>
          <div className=''>
            <div className='shadow-xl translate-y-[-80px] w-3/4 m-auto bg-teal-500'>
              <article className='grid md:grid-cols-3 gap-4 p-4  '>
                <img src={pu6} alt="" />
                <img className='h-full object-cover'  src={pu5} alt="" />
                <img className='h-full object-cover' src={pu2} alt="" />
                <img className='h-full object-cover' src={pu3} alt="" />
                <img className='h-full object-cover' src={pu1} alt="" />
                <img className='h-full object-cover' src={pu4} alt="" />
              </article>
            </div>
          </div>
        </section>

        <p id='ilustraciones'></p>
        <section>
          <section className='flex flex-col gap-4  m-auto bg-white py-10 mb-20 '>
              <article className='w-11/12 m-auto'>
          <h3 className='text-xl md:text-3xl text-center  md:py-20'>Mi nombre artístico es <span className='font-bold text-teal-600'>zotari</span>, aquí tienes algunas de mis obras...</h3>

                  <article className=' grid md:grid- lg:grid-cols-5 gap-4 p-6'>
                  {/* <img className='w-[400px] h-full shadow-xl rounded-lg object-cover' src={Image19} alt="" /> */}
                  {/* <img className='w-[400px] h-full object-cover shadow-xl rounded-lg' src={Image20} alt="" />
                  <img className='w-[400px] h-full shadow-xl rounded-lg' src={Image17} alt="" />
                  <img className='w-[400px] h-full shadow-xl rounded-lg' src={Image18} alt="" />
                  <img className='w-[400px] h-full shadow-xl rounded-lg' src={Image1} alt="" /> */}

                  </article>

                  <article className=' grid grid-cols-2 md:grid-cols-4 gap-4 p-6'>
                  <img className='w-[400px] h-full shadow-lg rounded-lg shadow-xl rounded-lg' src={Image5} alt="" />
                  <img className='w-[400px] h-full shadow-xl rounded-lg' src={Image10} alt="" />
                  <img className='w-[400px] h-full shadow-xl rounded-lg' src={Image2} alt="" />
                  <img className='w-[400px] h-full shadow-xl rounded-lg' src={Image16} alt="" />

                  </article>

                  <article className=' grid grid-cols-2 md:grid-cols-4 gap-4 p-6'>
                      <img className='w-[400px] h-full shadow-xl rounded-lg' src={Image3} alt="" />
                      <img className='w-[400px] h-full shadow-xl rounded-lg' src={Image7} alt="" />
                      <img className='w-[400px] h-full shadow-xl rounded-lg' src={Image8} alt="" />
                      <img className='w-[400px] h-full shadow-xl rounded-lg' src={Image14} alt="" />

                  </article>
              </article>
          </section>
        </section>

        <p
        id="informatica"
        className="text-xl bg-teal-800 inline-block py-4 pl-4 pr-28 text-white rounded-se-2xl"
        >
        Conocimientos Informáticos
        </p>

        <article className='mb-20  fondo'>
            <div className='sombra'>

            <div className='w-3/4 py-20 m-auto '>

                {/* <h3 className='text-xl text-center md:text-left py-10 text-white'>Progrmas que manejo</h3> */}
            <div className=' my-10'>
                <section className='grid 
                md:grid-cols-3 lg:grid-cols-5 items-center justify-center gap-20'>
                    <div className='flex flex-col items-center text-xl text-white '>
                        <img className=' w-[180px] h-[180px] md:w-[120px] md:h-[120px] lg:w-[170px] lg:h-[170px] rounded-full border border-2' src={pho} alt="" />
                        <p>Photoshop</p>
                    </div>
                    <div className='flex flex-col items-center text-xl text-white '>
                        <img className=' w-[180px] h-[180px] md:w-[120px] md:h-[120px] lg:w-[170px] lg:h-[170px] rounded-full border border-2 '  src={ai} alt="" />
                        <p>Adobe Illustrator</p>
                    </div>
                    <div className='flex flex-col items-center text-xl text-white'>
                        <img className=' w-[180px] h-[180px] md:w-[120px] md:h-[120px] lg:w-[170px] lg:h-[170px] rounded-full border border-2' src={cor} alt="" />
                        <p>Corel Draw</p>
                    </div>
                    <div className='flex flex-col items-center text-xl text-white'>
                        <img className=' w-[180px] h-[180px] md:w-[120px] md:h-[120px] lg:w-[170px] lg:h-[170px] rounded-full border border-2' src={pre} alt="" />
                        <p>Adobe Premier</p>
                    </div>
                    <div className='flex flex-col items-center text-xl text-white'>
                        <img className=' w-[180px] h-[180px] md:w-[120px] md:h-[120px] lg:w-[170px] lg:h-[170px] rounded-full border border-2' src={clip} alt="" />
                        <p>Clip Studio Paint</p>
                    </div>
                    <div className='flex flex-col items-center text-xl text-white'>
                        <img className=' w-[180px] h-[180px] md:w-[120px] md:h-[120px] lg:w-[170px] lg:h-[170px] rounded-full border border-2' src={can} alt="" />
                        <p>Camtasia</p>
                    </div>
                    <div className='flex flex-col items-center text-xl text-white'>
                        <img className=' w-[180px] h-[180px] md:w-[120px] md:h-[120px] lg:w-[170px] lg:h-[170px] rounded-full border border-2' src={pro} alt="" />
                        <p>Pro Tools</p>
                    </div>
                    <div className='flex flex-col items-center text-xl text-white'>
                        <img className=' w-[180px] h-[180px] md:w-[120px] md:h-[120px] lg:w-[170px] lg:h-[170px] rounded-full border border-2' src={off} alt="" />
                        <p>Office</p>
                    </div>
                </section>
            </div>
            </div>
            </div>
        </article>


      {/* <section className='bg-white' id='programas'>
          <h3>hola</h3>
      </section> */}
      <p
        id="plus"
        className="text-xl bg-teal-800 inline-block py-4 pl-4 pr-28 text-white rounded-se-2xl"
      >
        Estudios
      </p>
      <section id="estudios" className="bg-gray-800 text-white py-10 ">
        <div className="w-11/12 m-auto ">
          <div className="lg:flex md:gap-6 ">
            <div className="lg:w-4/12  shadow-2xl  border border-gray-500 rounded-xl mb-10 md:mb-0 bg-gray-100/10 ">
              <div className="p-4 border-b border-gray-500 ">
                <h3 className="text-2xl mb-3">Estudios</h3>
                <div>
                  <p className="text-lg font-bold mb-3">
                    Tecnología en Desarrollo de Software y Aplicativos Móviles -{' '}
                    <span className="font-normal">
                      {' '}
                      Politécnico Internacional
                    </span>
                    <button className=" bg-indigo-800 p-3 rounded-xl  my-3 text-sm hover:bg-indigo-700 shadow-xl font-normal block">
                      Descargar Certificado
                    </button>
                  </p>
                </div>

                <div>
                  <p className="text-lg font-bold ">
                    Diplomado en Diseño y Programación Web Interactivo -{' '}
                    <span className="font-normal ">
                      Politécnico Internacional
                    </span>
                  </p>
                  <button className=" bg-indigo-800 p-3 rounded-xl  my-3 text-sm hover:bg-indigo-700 shadow-xl block">
                    Descargar Certificado
                  </button>
                </div>

                <div>
                  <p className="text-lg font-bold ">
                    Emprendedor en Producción de Piezas Audíbles para Industrias CULTURALES -{' '}
                    <span className="font-normal ">
                      Politécnico Internacional
                    </span>
                  </p>
                  <button className=" bg-indigo-800 p-3 rounded-xl  my-3 text-sm hover:bg-indigo-700 shadow-xl block ">
                    Descargar Certificado
                  </button>
                </div>
              </div>

              <div className="text-lg p-4">
                <h4 className="text-2xl mt-2 mb-3">Datos personales</h4>
                {/* <p className="font-bold">
                  Edad: <span className="font-normal">31</span>
                </p> */}
                <p className="font-bold">
                  Ciudad: <span className="font-normal">Medellin</span>
                </p>
                <p className="font-bold">
                  Pais: <span className="font-normal">Colombia</span>
                </p>
                {/* <p className="font-bold">
                  Dirección:{' '}
                  <span className="font-normal">
                    Calle 25 # 7-78 tuluá valle
                  </span>
                </p> */}
                <p className="font-bold">
                  Correo:{' '}
                  <span className="font-normal">jeidergomezv@gmail.com</span>
                </p>
                <p className="font-bold">
                  Celular: <span className="font-normal">316-839-9561 | 315-380-3250</span>
                </p>
              </div>
            </div>

            <div className="bg-white text-gray-800 w-full rounded-xl shadow-2xl flex flex-col lg:flex-row md:items-center md:justify-center gap-6 py-6">
              <div className="lg:w-2/5 flex justify-center mt-12 md:mt-0">
                <img className="max-h-96" src={imgageMain} alt="" />
              </div>

              <div className=" h-full lg:w-3/5 flex flex-col gap-6 md:gap-0 justify-evenly rounded-xl">
                <h3 className="text-blue-600 text-3xl text-center lg:text-left font-bold py-6">
                  ¿Cómo pienso?
                </h3>
                <div className="  w-3/4 m-auto shadow-md p-6 rounded-xl">
                  <p>
                    Siempre he creído en la educación formal, por eso sigo
                    capacitándome en mi carrera como desarrollador software, sin
                    embargo, soy un apasionado por el aprendizaje autónomo, soy
                    autodidacta desde que tengo memoria.
                  </p>
                </div>
                <div className="  w-3/4 m-auto shadow-md p-6 rounded-xl">
                  <p className="">
                    Disfruto de los retos ya que la vida me ha
                    enseñado, a través de experiencias, que las buenas cosas
                    toman tiempo. No existe nada más satisfactorio que la
                    sensación de haber alcanzado una meta o haber culminado un
                    proyecto.
                  </p>
                </div>
                <div className="  w-3/4 m-auto shadow-md p-6 rounded-xl">
                  <p className="">
                    Tengo voluntad de hierro, cuando hay algo que quiero
                    desarrollar lo intento hasta lograrlo. Aunque debo decir que
                    soy una persona centrada y realista, pero eso sí, sin llegar
                    a ser pesimista o negativo. Me Pongo metas reales, que se
                    pueden lograr a través del tiempo.
                  </p>
                </div>
                {/* <div className=" w-3/4 m-auto shadow-md p-6 rounded-xl">
                  <p className="">
                    Siempre me gusta hacer las cosas con responsabilidad
                  </p>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
