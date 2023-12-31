import imageProfile from '../img/jeider.png'
import imgageMain from '../img/graduation-image.svg'
import imgageFondo from '../img/crud-empleados-completo.png'
import imgageVeterinaria from '../img/veterinaria.png'
import imgageVeterinariaJ from '../img/veterinaria-javascript.png'
import imgageControlPresupuestoJavascript from '../img/control-presupuesto-javascript.png'
import garyGif from '../img/garyGif.png'
import clonePinterest from '../img/clone-pinterest.png'
import imageLogin from '../img/login-mern.png'
import imagePortafolio from '../img/portafolio-servicios.png'
import rusas from '../img/rusas.png'
import imgage1 from '../img/galeria-1.jpg'
import imgage2 from '../img/galeria-2.jpg'
import imgage3 from '../img/galeria-3.jpg'

export const Portafolio = () => {
  return (
    <div className=" text-black mb-20    ">
      <div className="flex flex-col  w-full ">
        <div id="fullstack" className="w-11/12 m-auto">
          <h4 className="text-2xl py-10 font-bold text-gray-700">
            Proyectos Full stack
          </h4>
          <div className="grid md:grid-cols-3 gap-6 ">
            <div className="shadow-xl   rounded-xl        overflow-hidden ">
              <div className="overflow-hidden">
                <a target="_blank" href="https://apv-frontend-2.vercel.app/">
                  <img
                    className="hover:scale-110 transition-all cursor-pointer"
                    src={imgageVeterinaria}
                    alt=""
                  />
                </a>
              </div>
              <div>
                <h4
                  className="text-center
              my-3 text-teal-700 font-bold text-lg"
                >
                  Administrador de Pacientes de Veterinaria
                </h4>

                <div className="flex flex-wrap justify-center gap-3 p-2 ">
                  <div className="flex gap-2 justify-center items-center">
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="icon icon-tabler icon-tabler-brand-react"
                        width="22"
                        height="22"
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
                    </div>
                    <p>react</p>
                  </div>

                  <div className="flex gap-2 justify-center items-center">
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="icon icon-tabler icon-tabler-brand-nodejs"
                        width="22"
                        height="22"
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
                    </div>
                    <p>nodejs</p>
                  </div>

                  <div className="flex gap-2 justify-center items-center">
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="icon icon-tabler icon-tabler-brand-mongodb"
                        width="22"
                        height="22"
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
                    </div>
                    <p>MongoDB</p>
                  </div>

                  <div className="flex gap-2 justify-center items-center">
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="icon icon-tabler icon-tabler-brand-javascript"
                        width="22"
                        height="22"
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
                    </div>
                    <p>express</p>
                  </div>
                </div>
                <div className=" ">
                  <div className="m-auto w-11/12">
                    <h4 className="font-bold text-gray-700">Descripción</h4>

                    <p>
                      Este proyecto tiene autenticación, registro y manipulación
                      de los pacientes de veterianria, funciones de crear,
                      editar y eliminar.
                    </p>
                  </div>
                </div>
              </div>
              <footer className="flex justify-center gap-10 py-4 ">
                <button className=" h-10 w-10 flex flex-col justify-center items-center bg-teal-800 hover:rotate-12 hover:cursor-pointer hover:scale-110 transition-all rounded-full">
                  <a
                    target="_blank"
                    href="https://github.com/jeidervanegas/apv-frontend.git"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="icon icon-tabler icon-tabler-brand-github"
                      width="42"
                      height="32"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="#fff"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" />
                    </svg>
                  </a>
                  {/* <p className='text-xs'>Front end</p> */}
                </button>
                <button className=" h-10 w-10 flex justify-center items-center bg-teal-800 hover:rotate-12 hover:cursor-pointer hover:scale-110 transition-all rounded-full">
                  <a
                    target="_blank"
                    href="https://github.com/jeidervanegas/apv-backend.git"
                  >
                    <p className="text-white font-bold">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="icon icon-tabler icon-tabler-api"
                        width="30"
                        height="30"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="#ffffff"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M4 13h5" />
                        <path d="M12 16v-8h3a2 2 0 0 1 2 2v1a2 2 0 0 1 -2 2h-3" />
                        <path d="M20 8v8" />
                        <path d="M9 16v-5.5a2.5 2.5 0 0 0 -5 0v5.5" />
                      </svg>
                    </p>
                  </a>
                </button>
                <button className="h-10 w-10 flex justify-center items-center bg-teal-800 rounded-full hover:rotate-12 hover:cursor-pointer hover:scale-110 transition-all ">
                  <a target="_blank" href="https://apv-frontend-2.vercel.app/">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="icon icon-tabler icon-tabler-world-www"
                      width="42"
                      height="42"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="#ffffff"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <path d="M19.5 7a9 9 0 0 0 -7.5 -4a8.991 8.991 0 0 0 -7.484 4" />
                      <path d="M11.5 3a16.989 16.989 0 0 0 -1.826 4" />
                      <path d="M12.5 3a16.989 16.989 0 0 1 1.828 4" />
                      <path d="M19.5 17a9 9 0 0 1 -7.5 4a8.991 8.991 0 0 1 -7.484 -4" />
                      <path d="M11.5 21a16.989 16.989 0 0 1 -1.826 -4" />
                      <path d="M12.5 21a16.989 16.989 0 0 0 1.828 -4" />
                      <path d="M2 10l1 4l1.5 -4l1.5 4l1 -4" />
                      <path d="M17 10l1 4l1.5 -4l1.5 4l1 -4" />
                      <path d="M9.5 10l1 4l1.5 -4l1.5 4l1 -4" />
                    </svg>
                  </a>
                </button>
              </footer>
            </div>

            <div className="shadow-xl   rounded-xl        overflow-hidden ">
              <div className="overflow-hidden">
                <a
                  target="_blank"
                  href="https://crud-completo-fronted.vercel.app/"
                >
                  <img
                    className="hover:scale-110 transition-all cursor-pointer"
                    src={imgageFondo}
                    alt=""
                  />
                </a>
              </div>
              <div>
                <h4
                  className="text-center
              my-3 text-teal-700 font-bold text-lg"
                >
                  Administrador de Empleados
                </h4>

                <div className="flex flex-wrap justify-center gap-3 p-2 ">
                  <div className="flex gap-2 justify-center items-center">
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="icon icon-tabler icon-tabler-brand-react"
                        width="22"
                        height="22"
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
                    </div>
                    <p>react</p>
                  </div>

                  <div className="flex gap-2 justify-center items-center">
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="icon icon-tabler icon-tabler-brand-nodejs"
                        width="22"
                        height="22"
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
                    </div>
                    <p>nodejs</p>
                  </div>

                  <div className="flex gap-2 justify-center items-center">
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="icon icon-tabler icon-tabler-brand-mongodb"
                        width="22"
                        height="22"
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
                    </div>
                    <p>MongoDB</p>
                  </div>

                  <div className="flex gap-2 justify-center items-center">
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="icon icon-tabler icon-tabler-brand-javascript"
                        width="22"
                        height="22"
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
                    </div>
                    <p>express</p>
                  </div>
                </div>
                <div className=" ">
                  <div className="m-auto w-11/12">
                    <h4 className="font-bold text-gray-700">Descripción</h4>

                    <p>
                      Este es un proyecto full stack donde se implementa un CRUD
                      con las funciones básicas, listar, crear, editar,
                      eliminar. Tambien se implementa un buscador con su
                      respectiva ruta en el backend.
                    </p>
                  </div>
                </div>
              </div>
              <footer className="flex justify-center gap-10 py-4 ">
                <button className=" h-10 w-10 flex flex-col justify-center items-center bg-teal-800 hover:rotate-12 hover:cursor-pointer hover:scale-110 transition-all rounded-full">
                  <a
                    target="_blank"
                    href="https://github.com/jeidervanegas/crud-completo-fronted.git"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="icon icon-tabler icon-tabler-brand-github"
                      width="42"
                      height="32"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="#fff"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" />
                    </svg>
                  </a>
                  {/* <p className='text-xs'>Front end</p> */}
                </button>
                <button className=" h-10 w-10 flex justify-center items-center bg-teal-800 hover:rotate-12 hover:cursor-pointer hover:scale-110 transition-all rounded-full">
                  <a
                    target="_blank"
                    href="https://github.com/jeidervanegas/crud-completo-api.git"
                  >
                    <p className="text-white font-bold">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="icon icon-tabler icon-tabler-api"
                        width="30"
                        height="30"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="#ffffff"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M4 13h5" />
                        <path d="M12 16v-8h3a2 2 0 0 1 2 2v1a2 2 0 0 1 -2 2h-3" />
                        <path d="M20 8v8" />
                        <path d="M9 16v-5.5a2.5 2.5 0 0 0 -5 0v5.5" />
                      </svg>
                    </p>
                  </a>
                </button>
                <button className="h-10 w-10 flex justify-center items-center bg-teal-800 rounded-full hover:rotate-12 hover:cursor-pointer hover:scale-110 transition-all ">
                  <a
                    target="_blank"
                    href="https://crud-completo-fronted.vercel.app/"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="icon icon-tabler icon-tabler-world-www"
                      width="42"
                      height="42"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="#ffffff"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <path d="M19.5 7a9 9 0 0 0 -7.5 -4a8.991 8.991 0 0 0 -7.484 4" />
                      <path d="M11.5 3a16.989 16.989 0 0 0 -1.826 4" />
                      <path d="M12.5 3a16.989 16.989 0 0 1 1.828 4" />
                      <path d="M19.5 17a9 9 0 0 1 -7.5 4a8.991 8.991 0 0 1 -7.484 -4" />
                      <path d="M11.5 21a16.989 16.989 0 0 1 -1.826 -4" />
                      <path d="M12.5 21a16.989 16.989 0 0 0 1.828 -4" />
                      <path d="M2 10l1 4l1.5 -4l1.5 4l1 -4" />
                      <path d="M17 10l1 4l1.5 -4l1.5 4l1 -4" />
                      <path d="M9.5 10l1 4l1.5 -4l1.5 4l1 -4" />
                    </svg>
                  </a>
                </button>
              </footer>
            </div>

            <div className="shadow-xl   rounded-xl        overflow-hidden ">
              <div className="overflow-hidden">
                <a
                  target="_blank"
                  href="https://monta-as-rusas-frontend.vercel.app/"
                >
                  <img
                    className="hover:scale-110 transition-all cursor-pointer"
                    src={rusas}
                    alt=""
                  />
                </a>
              </div>
              <div>
                <h4
                  className="text-center
              my-3 text-teal-700 font-bold text-lg"
                >
                  Las mejores Montañas Rusas
                </h4>

                <div className="flex flex-wrap justify-center gap-3 p-2 ">
                  <div className="flex gap-2 justify-center items-center">
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="icon icon-tabler icon-tabler-brand-react"
                        width="22"
                        height="22"
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
                    </div>
                    <p>react</p>
                  </div>

                  <div className="flex gap-2 justify-center items-center">
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="icon icon-tabler icon-tabler-brand-nodejs"
                        width="22"
                        height="22"
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
                    </div>
                    <p>nodejs</p>
                  </div>

                  <div className="flex gap-2 justify-center items-center">
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="icon icon-tabler icon-tabler-brand-mongodb"
                        width="22"
                        height="22"
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
                    </div>
                    <p>MongoDB</p>
                  </div>

                  <div className="flex gap-2 justify-center items-center">
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="icon icon-tabler icon-tabler-brand-javascript"
                        width="22"
                        height="22"
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
                    </div>
                    <p>express</p>
                  </div>
                </div>

                <div className=" ">
                  <div className="m-auto w-11/12">
                    <h4 className="font-bold text-gray-700">Descripción</h4>

                    <p>
                      Este proyecto usa un archivo json en la base de datos,
                      realizamos rutas en el backend para consumirlas en el
                      front por medio de react
                    </p>
                  </div>
                </div>
              </div>
              <footer className="flex justify-center gap-10 py-4 ">
                <button className=" h-10 w-10 flex flex-col justify-center items-center bg-teal-800 hover:rotate-12 hover:cursor-pointer hover:scale-110 transition-all rounded-full">
                  <a
                    target="_blank"
                    href="https://github.com/jeidervanegas/monta-as-rusas-frontend.git"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="icon icon-tabler icon-tabler-brand-github"
                      width="42"
                      height="32"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="#fff"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" />
                    </svg>
                  </a>
                  {/* <p className='text-xs'>Front end</p> */}
                </button>
                <button className=" h-10 w-10 flex justify-center items-center bg-teal-800 hover:rotate-12 hover:cursor-pointer hover:scale-110 transition-all rounded-full">
                  <a
                    target="_blank"
                    href="https://github.com/jeidervanegas/monta-as-rusas-api.git"
                  >
                    <p className="text-white font-bold">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="icon icon-tabler icon-tabler-api"
                        width="30"
                        height="30"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="#ffffff"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M4 13h5" />
                        <path d="M12 16v-8h3a2 2 0 0 1 2 2v1a2 2 0 0 1 -2 2h-3" />
                        <path d="M20 8v8" />
                        <path d="M9 16v-5.5a2.5 2.5 0 0 0 -5 0v5.5" />
                      </svg>
                    </p>
                  </a>
                </button>
                <button className="h-10 w-10 flex justify-center items-center bg-teal-800 rounded-full hover:rotate-12 hover:cursor-pointer hover:scale-110 transition-all ">
                  <a
                    target="_blank"
                    href="https://monta-as-rusas-frontend.vercel.app/"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="icon icon-tabler icon-tabler-world-www"
                      width="42"
                      height="42"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="#ffffff"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <path d="M19.5 7a9 9 0 0 0 -7.5 -4a8.991 8.991 0 0 0 -7.484 4" />
                      <path d="M11.5 3a16.989 16.989 0 0 0 -1.826 4" />
                      <path d="M12.5 3a16.989 16.989 0 0 1 1.828 4" />
                      <path d="M19.5 17a9 9 0 0 1 -7.5 4a8.991 8.991 0 0 1 -7.484 -4" />
                      <path d="M11.5 21a16.989 16.989 0 0 1 -1.826 -4" />
                      <path d="M12.5 21a16.989 16.989 0 0 0 1.828 -4" />
                      <path d="M2 10l1 4l1.5 -4l1.5 4l1 -4" />
                      <path d="M17 10l1 4l1.5 -4l1.5 4l1 -4" />
                      <path d="M9.5 10l1 4l1.5 -4l1.5 4l1 -4" />
                    </svg>
                  </a>
                </button>
              </footer>
            </div>
          </div>
        </div>

        <div id="frontendreact" className="w-11/12 m-auto">
          <h4 className="text-2xl mt-6 py-10 text-gray-700 font-bold">
            Frontend React
          </h4>
          <div className="grid md:grid-cols-3 gap-6 ">
            <div className="shadow-xl   rounded-xl        overflow-hidden ">
              <div className="overflow-hidden">
                <a
                  target="_blank"
                  href="https://login-mern-frontend-one.vercel.app/"
                >
                  <img
                    className="hover:scale-110 transition-all cursor-pointer"
                    src={imageLogin}
                    alt=""
                  />
                </a>
              </div>
              <div>
                <h4
                  className="text-center
              my-3 text-teal-700 font-bold text-lg"
                >
                  Login Mern Stack
                </h4>

                <div className="flex flex-wrap justify-center gap-3 p-2 ">
                  <div className="flex gap-2 justify-center items-center">
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="icon icon-tabler icon-tabler-brand-react"
                        width="22"
                        height="22"
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
                    </div>
                    <p>react</p>
                  </div>

                  <div className="flex gap-2 justify-center items-center">
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="icon icon-tabler icon-tabler-brand-nodejs"
                        width="22"
                        height="22"
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
                    </div>
                    <p>nodejs</p>
                  </div>

                  <div className="flex gap-2 justify-center items-center">
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="icon icon-tabler icon-tabler-brand-mongodb"
                        width="22"
                        height="22"
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
                    </div>
                    <p>MongoDB</p>
                  </div>

                  <div className="flex gap-2 justify-center items-center">
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="icon icon-tabler icon-tabler-brand-javascript"
                        width="22"
                        height="22"
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
                    </div>
                    <p>express</p>
                  </div>
                </div>
                <div className=" ">
                  <div className="m-auto w-11/12">
                    <h4 className="font-bold text-gray-700">Descripción</h4>

                    <p>
                      En este proyecto full stack se realiza un login con las
                      validaciones recomendadas, está incluido el registro y un
                      perfil básico para que nos lleve una ves validemos.
                    </p>
                  </div>
                </div>
              </div>
              <footer className="flex justify-center gap-10 py-4 ">
                <button className=" h-10 w-10 flex flex-col justify-center items-center bg-teal-800 hover:rotate-12 hover:cursor-pointer hover:scale-110 transition-all rounded-full">
                  <a
                    target="_blank"
                    href="https://github.com/jeidervanegas/login-mern-frontend.git"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="icon icon-tabler icon-tabler-brand-github"
                      width="42"
                      height="32"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="#fff"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" />
                    </svg>
                  </a>
                  {/* <p className='text-xs'>Front end</p> */}
                </button>

                <button className=" h-10 w-10 flex justify-center items-center bg-teal-800 hover:rotate-12 hover:cursor-pointer hover:scale-110 transition-all rounded-full">
                  <a
                    target="_blank"
                    href="https://github.com/jeidervanegas/login-mern-api.git"
                  >
                    <p className="text-white font-bold">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="icon icon-tabler icon-tabler-api"
                        width="30"
                        height="30"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="#ffffff"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M4 13h5" />
                        <path d="M12 16v-8h3a2 2 0 0 1 2 2v1a2 2 0 0 1 -2 2h-3" />
                        <path d="M20 8v8" />
                        <path d="M9 16v-5.5a2.5 2.5 0 0 0 -5 0v5.5" />
                      </svg>
                    </p>
                  </a>
                </button>
                <button className="h-10 w-10 flex justify-center items-center bg-teal-800 rounded-full hover:rotate-12 hover:cursor-pointer hover:scale-110 transition-all ">
                  <a
                    target="_blank"
                    href="https://login-mern-frontend-one.vercel.app/"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="icon icon-tabler icon-tabler-world-www"
                      width="42"
                      height="42"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="#ffffff"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <path d="M19.5 7a9 9 0 0 0 -7.5 -4a8.991 8.991 0 0 0 -7.484 4" />
                      <path d="M11.5 3a16.989 16.989 0 0 0 -1.826 4" />
                      <path d="M12.5 3a16.989 16.989 0 0 1 1.828 4" />
                      <path d="M19.5 17a9 9 0 0 1 -7.5 4a8.991 8.991 0 0 1 -7.484 -4" />
                      <path d="M11.5 21a16.989 16.989 0 0 1 -1.826 -4" />
                      <path d="M12.5 21a16.989 16.989 0 0 0 1.828 -4" />
                      <path d="M2 10l1 4l1.5 -4l1.5 4l1 -4" />
                      <path d="M17 10l1 4l1.5 -4l1.5 4l1 -4" />
                      <path d="M9.5 10l1 4l1.5 -4l1.5 4l1 -4" />
                    </svg>
                  </a>
                </button>
              </footer>
            </div>

            <div className="shadow-xl   rounded-xl        overflow-hidden ">
              <div className="overflow-hidden">
                <a target="_blank" href="https://gary-gif-front.vercel.app/">
                  <img
                    className="hover:scale-110 transition-all cursor-pointer"
                    src={garyGif}
                    alt=""
                  />
                </a>
              </div>
              <div>
                <h4
                  className="text-center
              my-3 text-teal-700 font-bold text-lg"
                >
                  GaryGif - Buscador de gifs
                </h4>

                <div className="flex flex-wrap justify-center gap-3 p-2 ">
                  <div className="flex gap-2 justify-center items-center">
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="icon icon-tabler icon-tabler-brand-react"
                        width="22"
                        height="22"
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
                    </div>
                    <p>react</p>
                  </div>

                  <div className="flex gap-2 justify-center items-center">
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="icon icon-tabler icon-tabler-brand-tailwind"
                        width="22"
                        height="22"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="#00abfb"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M11.667 6c-2.49 0 -4.044 1.222 -4.667 3.667c.933 -1.223 2.023 -1.68 3.267 -1.375c.71 .174 1.217 .68 1.778 1.24c.916 .912 2 1.968 4.288 1.968c2.49 0 4.044 -1.222 4.667 -3.667c-.933 1.223 -2.023 1.68 -3.267 1.375c-.71 -.174 -1.217 -.68 -1.778 -1.24c-.916 -.912 -1.975 -1.968 -4.288 -1.968zm-4 6.5c-2.49 0 -4.044 1.222 -4.667 3.667c.933 -1.223 2.023 -1.68 3.267 -1.375c.71 .174 1.217 .68 1.778 1.24c.916 .912 1.975 1.968 4.288 1.968c2.49 0 4.044 -1.222 4.667 -3.667c-.933 1.223 -2.023 1.68 -3.267 1.375c-.71 -.174 -1.217 -.68 -1.778 -1.24c-.916 -.912 -1.975 -1.968 -4.288 -1.968z" />
                      </svg>
                    </div>
                    <p>Tailwind</p>
                  </div>
                </div>
                <div className=" ">
                  <div className="m-auto w-11/12">
                    <h4 className="font-bold text-gray-700">Descripción</h4>

                    <p>
                      Esta es una página web donde puedes consultar gifs de
                      todos tus personajes favoritos. Consultamos la api de
                      giphy.com
                    </p>
                  </div>
                </div>
              </div>
              <footer className="flex justify-center gap-10 py-4 ">
                <button className=" h-10 w-10 flex justify-center items-center bg-teal-800 hover:rotate-12 hover:cursor-pointer hover:scale-110 transition-all rounded-full">
                  <a
                    target="_blank"
                    href="https://github.com/jeidervanegas/GaryGif.git"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="icon icon-tabler icon-tabler-brand-github"
                      width="42"
                      height="32"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="#fff"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" />
                    </svg>
                  </a>
                </button>
                <button className="h-10 w-10 flex justify-center items-center bg-teal-800 rounded-full hover:rotate-12 hover:cursor-pointer hover:scale-110 transition-all ">
                  <a target="_blank" href="https://gary-gif-front.vercel.app/">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="icon icon-tabler icon-tabler-world-www"
                      width="42"
                      height="42"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="#ffffff"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <path d="M19.5 7a9 9 0 0 0 -7.5 -4a8.991 8.991 0 0 0 -7.484 4" />
                      <path d="M11.5 3a16.989 16.989 0 0 0 -1.826 4" />
                      <path d="M12.5 3a16.989 16.989 0 0 1 1.828 4" />
                      <path d="M19.5 17a9 9 0 0 1 -7.5 4a8.991 8.991 0 0 1 -7.484 -4" />
                      <path d="M11.5 21a16.989 16.989 0 0 1 -1.826 -4" />
                      <path d="M12.5 21a16.989 16.989 0 0 0 1.828 -4" />
                      <path d="M2 10l1 4l1.5 -4l1.5 4l1 -4" />
                      <path d="M17 10l1 4l1.5 -4l1.5 4l1 -4" />
                      <path d="M9.5 10l1 4l1.5 -4l1.5 4l1 -4" />
                    </svg>
                  </a>
                </button>
              </footer>
            </div>

            <div className="shadow-xl   rounded-xl        overflow-hidden ">
              <div className="overflow-hidden">
                <a
                  target="_blank"
                  href="https://clone-pinterest-three.vercel.app/"
                >
                  <img
                    className="hover:scale-110 transition-all cursor-pointer"
                    src={clonePinterest}
                    alt=""
                  />
                </a>
              </div>
              <div>
                <h4
                  className="text-center
              my-3 text-teal-700 font-bold text-lg"
                >
                  Clone de Pinterest
                </h4>

                <div className="flex flex-wrap justify-center gap-3 p-2 ">
                  <div className="flex gap-2 justify-center items-center">
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="icon icon-tabler icon-tabler-brand-react"
                        width="22"
                        height="22"
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
                    </div>
                    <p>react</p>
                  </div>

                  <div className="flex gap-2 justify-center items-center">
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="icon icon-tabler icon-tabler-brand-tailwind"
                        width="22"
                        height="22"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="#00abfb"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M11.667 6c-2.49 0 -4.044 1.222 -4.667 3.667c.933 -1.223 2.023 -1.68 3.267 -1.375c.71 .174 1.217 .68 1.778 1.24c.916 .912 2 1.968 4.288 1.968c2.49 0 4.044 -1.222 4.667 -3.667c-.933 1.223 -2.023 1.68 -3.267 1.375c-.71 -.174 -1.217 -.68 -1.778 -1.24c-.916 -.912 -1.975 -1.968 -4.288 -1.968zm-4 6.5c-2.49 0 -4.044 1.222 -4.667 3.667c.933 -1.223 2.023 -1.68 3.267 -1.375c.71 .174 1.217 .68 1.778 1.24c.916 .912 1.975 1.968 4.288 1.968c2.49 0 4.044 -1.222 4.667 -3.667c-.933 1.223 -2.023 1.68 -3.267 1.375c-.71 -.174 -1.217 -.68 -1.778 -1.24c-.916 -.912 -1.975 -1.968 -4.288 -1.968z" />
                      </svg>
                    </div>
                    <p>Tailwind</p>
                  </div>
                </div>

                <div className=" ">
                  <div className="m-auto w-11/12">
                    <h4 className="font-bold text-gray-700">Descripción</h4>

                    <p>
                      Este es un clone de Pinterest. Consumo la api de
                      unsplash.com para generar las imágenes. Tiene integrado un
                      scroll infinito con react infinite scroll, el cual limité
                      para no pasar el plan gratuito de nuestra api.
                    </p>
                  </div>
                </div>
              </div>
              <footer className="flex justify-center gap-10 py-4 ">
                <button className=" h-10 w-10 flex justify-center items-center bg-teal-800 hover:rotate-12 hover:cursor-pointer hover:scale-110 transition-all rounded-full">
                  <a
                    target="_blank"
                    href="https://github.com/jeidervanegas/clone-pinterest.git"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="icon icon-tabler icon-tabler-brand-github"
                      width="42"
                      height="32"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="#fff"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" />
                    </svg>
                  </a>
                </button>
                <button className="h-10 w-10 flex justify-center items-center bg-teal-800 rounded-full hover:rotate-12 hover:cursor-pointer hover:scale-110 transition-all ">
                  <a
                    target="_blank"
                    href="https://clone-pinterest-three.vercel.app/"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="icon icon-tabler icon-tabler-world-www"
                      width="42"
                      height="42"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="#ffffff"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <path d="M19.5 7a9 9 0 0 0 -7.5 -4a8.991 8.991 0 0 0 -7.484 4" />
                      <path d="M11.5 3a16.989 16.989 0 0 0 -1.826 4" />
                      <path d="M12.5 3a16.989 16.989 0 0 1 1.828 4" />
                      <path d="M19.5 17a9 9 0 0 1 -7.5 4a8.991 8.991 0 0 1 -7.484 -4" />
                      <path d="M11.5 21a16.989 16.989 0 0 1 -1.826 -4" />
                      <path d="M12.5 21a16.989 16.989 0 0 0 1.828 -4" />
                      <path d="M2 10l1 4l1.5 -4l1.5 4l1 -4" />
                      <path d="M17 10l1 4l1.5 -4l1.5 4l1 -4" />
                      <path d="M9.5 10l1 4l1.5 -4l1.5 4l1 -4" />
                    </svg>
                  </a>
                </button>
              </footer>
            </div>
          </div>
        </div>

        <div id="javascript" className="w-11/12 m-auto">
          <h4 className="text-2xl mt-6 py-10 text-gray-700 font-bold">
            Frontend Javascript
          </h4>
          <div className="grid md:grid-cols-3 gap-6 ">
            <div className="shadow-xl   rounded-xl        overflow-hidden ">
              <div className="overflow-hidden">
                <a
                  target="_blank"
                  href="https://control-presupuesto01.netlify.app/"
                >
                  <img
                    className="hover:scale-110 transition-all cursor-pointer"
                    src={imgageControlPresupuestoJavascript}
                    alt=""
                  />
                </a>
              </div>
              <div>
                <h4
                  className="text-center
              my-3 text-teal-700 font-bold text-lg"
                >
                  Control de Presupuesto
                </h4>

                <div className="flex flex-wrap justify-center gap-3 p-2 ">
                  <div className="flex gap-2 justify-center items-center">
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="icon icon-tabler icon-tabler-brand-javascript"
                        width="22"
                        height="22"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="#ffbf00"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M20 4l-2 14.5l-6 2l-6 -2l-2 -14.5z" />
                        <path d="M7.5 8h3v8l-2 -1" />
                        <path d="M16.5 8h-2.5a.5 .5 0 0 0 -.5 .5v3a.5 .5 0 0 0 .5 .5h1.423a.5 .5 0 0 1 .495 .57l-.418 2.93l-2 .5" />
                      </svg>
                    </div>
                    <p>Javascript</p>
                  </div>

                  <div className="flex gap-2 justify-center items-center">
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="icon icon-tabler icon-tabler-brand-html5"
                        width="22"
                        height="22"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="#E96228"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M20 4l-2 14.5l-6 2l-6 -2l-2 -14.5z" />
                        <path d="M15.5 8h-7l.5 4h6l-.5 3.5l-2.5 .75l-2.5 -.75l-.1 -.5" />
                      </svg>
                    </div>
                    <p>html</p>
                  </div>

                  <div className="flex gap-2 justify-center items-center">
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="icon icon-tabler icon-tabler-brand-css3"
                        width="22"
                        height="22"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="#254BDD"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M20 4l-2 14.5l-6 2l-6 -2l-2 -14.5z" />
                        <path d="M8.5 8h7l-4.5 4h4l-.5 3.5l-2.5 .75l-2.5 -.75l-.1 -.5" />
                      </svg>
                    </div>
                    <p>css</p>
                  </div>
                </div>

                <div className=" ">
                  <div className="m-auto w-11/12">
                    <h4 className="font-bold text-gray-700">Descripción</h4>

                    <p>
                      En esta aplicación se aplican varios conceptos avanzados
                      en la programación orientada a objetos, tambien hacemos
                      uso de diversos métodos para los arreglos y los objetos
                    </p>
                  </div>
                </div>
              </div>
              <footer className="flex justify-center gap-10 py-4 ">
                <button className=" h-10 w-10 flex flex-col justify-center items-center bg-teal-800 hover:rotate-12 hover:cursor-pointer hover:scale-110 transition-all rounded-full">
                  <a
                    target="_blank"
                    href="https://github.com/jeidervanegas/control-de-presupuesto.git"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="icon icon-tabler icon-tabler-brand-github"
                      width="42"
                      height="32"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="#fff"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" />
                    </svg>
                  </a>
                  {/* <p className='text-xs'>Front end</p> */}
                </button>

                <button className="h-10 w-10 flex justify-center items-center bg-teal-800 rounded-full hover:rotate-12 hover:cursor-pointer hover:scale-110 transition-all ">
                  <a
                    target="_blank"
                    href="https://control-presupuesto01.netlify.app/"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="icon icon-tabler icon-tabler-world-www"
                      width="42"
                      height="42"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="#ffffff"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <path d="M19.5 7a9 9 0 0 0 -7.5 -4a8.991 8.991 0 0 0 -7.484 4" />
                      <path d="M11.5 3a16.989 16.989 0 0 0 -1.826 4" />
                      <path d="M12.5 3a16.989 16.989 0 0 1 1.828 4" />
                      <path d="M19.5 17a9 9 0 0 1 -7.5 4a8.991 8.991 0 0 1 -7.484 -4" />
                      <path d="M11.5 21a16.989 16.989 0 0 1 -1.826 -4" />
                      <path d="M12.5 21a16.989 16.989 0 0 0 1.828 -4" />
                      <path d="M2 10l1 4l1.5 -4l1.5 4l1 -4" />
                      <path d="M17 10l1 4l1.5 -4l1.5 4l1 -4" />
                      <path d="M9.5 10l1 4l1.5 -4l1.5 4l1 -4" />
                    </svg>
                  </a>
                </button>
              </footer>
            </div>

            <div className="shadow-xl   rounded-xl        overflow-hidden ">
              <div className="overflow-hidden">
                <a
                  target="_blank"
                  href="https://web-zatori.netlify.app/"
                >
                  <img
                    className="hover:scale-110 transition-all cursor-pointer"
                    src={imagePortafolio}
                    alt=""
                  />
                </a>
              </div>
              <div>
                <h4
                  className="text-center
              my-3 text-teal-700 font-bold text-lg"
                >
                  Portafolio de Servicios Blog
                </h4>
             
                <div className="flex flex-wrap justify-center gap-3 p-2 ">
                  {/* <div className="flex gap-2 justify-center items-center">
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="icon icon-tabler icon-tabler-brand-javascript"
                        width="22"
                        height="22"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="#ffbf00"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M20 4l-2 14.5l-6 2l-6 -2l-2 -14.5z" />
                        <path d="M7.5 8h3v8l-2 -1" />
                        <path d="M16.5 8h-2.5a.5 .5 0 0 0 -.5 .5v3a.5 .5 0 0 0 .5 .5h1.423a.5 .5 0 0 1 .495 .57l-.418 2.93l-2 .5" />
                      </svg>
                    </div>
                    <p>Javascript</p>
                  </div> */}

                  <div className="flex gap-2 justify-center items-center">
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="icon icon-tabler icon-tabler-brand-html5"
                        width="22"
                        height="22"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="#E96228"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M20 4l-2 14.5l-6 2l-6 -2l-2 -14.5z" />
                        <path d="M15.5 8h-7l.5 4h6l-.5 3.5l-2.5 .75l-2.5 -.75l-.1 -.5" />
                      </svg>
                    </div>
                    <p>html</p>
                  </div>

                  <div className="flex gap-2 justify-center items-center">
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="icon icon-tabler icon-tabler-brand-css3"
                        width="22"
                        height="22"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="#254BDD"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M20 4l-2 14.5l-6 2l-6 -2l-2 -14.5z" />
                        <path d="M8.5 8h7l-4.5 4h4l-.5 3.5l-2.5 .75l-2.5 -.75l-.1 -.5" />
                      </svg>
                    </div>
                    <p>css</p>
                  </div>
                </div>
                <div className=" ">
                  <div className="m-auto w-11/12">
                    <h4 className="font-bold text-gray-700">Descripción</h4>

                    <p>
                      Este es un proyecto estático, el cual solo expone el manejo de css. Usa flexbox, grid, en otras funciones más avanzadas en css3
                    </p>
                  </div>
                </div>
              </div>
              <footer className="flex justify-center gap-10 py-4 ">
                {/* <button className=" h-10 w-10 flex flex-col justify-center items-center bg-teal-800 hover:rotate-12 hover:cursor-pointer hover:scale-110 transition-all rounded-full">
                  <a
                    target="_blank"
                    href="https://github.com/jeidervanegas/crud-completo-fronted.git"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="icon icon-tabler icon-tabler-brand-github"
                      width="42"
                      height="32"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="#fff"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" />
                    </svg>
                  </a>
           
                </button> */}

                <button className="h-10 w-10 flex justify-center items-center bg-teal-800 rounded-full hover:rotate-12 hover:cursor-pointer hover:scale-110 transition-all ">
                  <a
                    target="_blank"
                    href="https://crud-completo-fronted.vercel.app/"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="icon icon-tabler icon-tabler-world-www"
                      width="42"
                      height="42"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="#ffffff"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <path d="M19.5 7a9 9 0 0 0 -7.5 -4a8.991 8.991 0 0 0 -7.484 4" />
                      <path d="M11.5 3a16.989 16.989 0 0 0 -1.826 4" />
                      <path d="M12.5 3a16.989 16.989 0 0 1 1.828 4" />
                      <path d="M19.5 17a9 9 0 0 1 -7.5 4a8.991 8.991 0 0 1 -7.484 -4" />
                      <path d="M11.5 21a16.989 16.989 0 0 1 -1.826 -4" />
                      <path d="M12.5 21a16.989 16.989 0 0 0 1.828 -4" />
                      <path d="M2 10l1 4l1.5 -4l1.5 4l1 -4" />
                      <path d="M17 10l1 4l1.5 -4l1.5 4l1 -4" />
                      <path d="M9.5 10l1 4l1.5 -4l1.5 4l1 -4" />
                    </svg>
                  </a>
                </button>
              </footer>
            </div>

            <div className="shadow-xl   rounded-xl        overflow-hidden ">
              <div className="overflow-hidden">
                <a
                  target="_blank"
                  href="https://jeidervanegas.github.io/veterinaria/"
                >
                  <img
                    className="hover:scale-110 transition-all cursor-pointer"
                    src={imgageVeterinariaJ}
                    alt=""
                  />
                </a>
              </div>
              <div>
                <h4
                  className="text-center
              my-3 text-teal-700 font-bold text-lg"
                >
                  Crud Administrador de Veterinaria
                </h4>

                <div className="flex flex-wrap justify-center gap-3 p-2 ">
                  <div className="flex gap-2 justify-center items-center">
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="icon icon-tabler icon-tabler-brand-javascript"
                        width="22"
                        height="22"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="#ffbf00"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M20 4l-2 14.5l-6 2l-6 -2l-2 -14.5z" />
                        <path d="M7.5 8h3v8l-2 -1" />
                        <path d="M16.5 8h-2.5a.5 .5 0 0 0 -.5 .5v3a.5 .5 0 0 0 .5 .5h1.423a.5 .5 0 0 1 .495 .57l-.418 2.93l-2 .5" />
                      </svg>
                    </div>
                    <p>Javascript</p>
                  </div>

                  <div className="flex gap-2 justify-center items-center">
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="icon icon-tabler icon-tabler-brand-html5"
                        width="22"
                        height="22"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="#E96228"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M20 4l-2 14.5l-6 2l-6 -2l-2 -14.5z" />
                        <path d="M15.5 8h-7l.5 4h6l-.5 3.5l-2.5 .75l-2.5 -.75l-.1 -.5" />
                      </svg>
                    </div>
                    <p>html</p>
                  </div>

                  <div className="flex gap-2 justify-center items-center">
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="icon icon-tabler icon-tabler-brand-css3"
                        width="22"
                        height="22"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="#254BDD"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M20 4l-2 14.5l-6 2l-6 -2l-2 -14.5z" />
                        <path d="M8.5 8h7l-4.5 4h4l-.5 3.5l-2.5 .75l-2.5 -.75l-.1 -.5" />
                      </svg>
                    </div>
                    <p>css</p>
                  </div>
                </div>

                <div className=" ">
                  <div className="m-auto w-11/12">
                    <h4 className="font-bold text-gray-700">Descripción</h4>

                    <p>
                      Administrador de pacientes con programación orientada a
                      objetos. Tiene funciones de crear, editar y eliminar
                      pacientes
                    </p>
                  </div>
                </div>
              </div>
              <footer className="flex justify-center gap-10 py-4 ">
                <button className=" h-10 w-10 flex justify-center items-center bg-teal-800 hover:rotate-12 hover:cursor-pointer hover:scale-110 transition-all rounded-full">
                  <a
                    target="_blank"
                    href="https://github.com/jeidervanegas/veterinaria.git"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="icon icon-tabler icon-tabler-brand-github"
                      width="42"
                      height="32"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="#fff"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" />
                    </svg>
                  </a>
                </button>
                <button className="h-10 w-10 flex justify-center items-center bg-teal-800 rounded-full hover:rotate-12 hover:cursor-pointer hover:scale-110 transition-all ">
                  <a
                    target="_blank"
                    href="https://veterinaria-javascript.netlify.app/"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="icon icon-tabler icon-tabler-world-www"
                      width="42"
                      height="42"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="#ffffff"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <path d="M19.5 7a9 9 0 0 0 -7.5 -4a8.991 8.991 0 0 0 -7.484 4" />
                      <path d="M11.5 3a16.989 16.989 0 0 0 -1.826 4" />
                      <path d="M12.5 3a16.989 16.989 0 0 1 1.828 4" />
                      <path d="M19.5 17a9 9 0 0 1 -7.5 4a8.991 8.991 0 0 1 -7.484 -4" />
                      <path d="M11.5 21a16.989 16.989 0 0 1 -1.826 -4" />
                      <path d="M12.5 21a16.989 16.989 0 0 0 1.828 -4" />
                      <path d="M2 10l1 4l1.5 -4l1.5 4l1 -4" />
                      <path d="M17 10l1 4l1.5 -4l1.5 4l1 -4" />
                      <path d="M9.5 10l1 4l1.5 -4l1.5 4l1 -4" />
                    </svg>
                  </a>
                </button>
              </footer>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
