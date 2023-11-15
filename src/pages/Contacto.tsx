import React from 'react';
import Navbar from './Navbar';
import { Footer } from './Footer';



const Contacto = () => {
  return (
    <>
      <Navbar />

      <nav className="bg-white border-gray-200 bg-zinc-900">
        <h3 className="text-5xl mx-auto text-center mb-6">Contacto:</h3>
        <div className=" flex items-center justify-between">
          <h4 className='text-xl mx-auto text-left mb-96  '>Conéctate con nosotros en redes sociales</h4>


          <div className="text-2xl font-bold text-gray-800 lg:text-xl dark:text-white mx-auto flex items-center justify-end mr-36">
            <div className="min-h-screen bg-zinc-900 py-6 flex flex-col justify-center sm:py-10">
              <div className="relative py-3 sm:max-w-xl sm:mx-auto text-center">
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-500 to-goldenrod-500 transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:p-5 w-4/3"></div>

                <div className="text-white relative px-4 py-10 bg-zinc-900 shadow-lg sm:rounded-l sm:p-10">
                  <div className="text-center pb-6">
                    <p className="text-black-300 lg:text-3xl">
                      Envíanos un mensaje
                    </p>
                  </div>
                  <form>
                    <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">Nombre:</label>
                    <input
                      id="name"
                      className="shadow mb-4 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      type="text" placeholder="Nombre" name="name" />

                    <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">Email:</label>
                    <input
                      id="email"
                      className="shadow mb-4 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      type="email" placeholder="Email" name="email" />

                    <label htmlFor="_subject" className="block text-gray-700 text-sm font-bold mb-2">Asunto:</label>
                    <input
                      id="_subject"
                      className="shadow mb-4 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      type="text" placeholder="Asunto" name="_subject" />

                    <label htmlFor="message" className="block text-gray-700 text-sm font-bold mb-2">Mensaje:</label>
                    <textarea
                      id="message"
                      className="shadow mb-4 min-h-0 appearance-none border rounded h-64 w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      placeholder="Escribe aquí tu mensaje..." name="message"></textarea>

                    <div className="flex justify-between">
                      <input
                        className="shadow bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        type="submit" value="Enviar ➤" />
                      <input
                        className="shadow bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        type="reset" />
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div> </div>
      </nav >

      <Footer />
    </>
  );
}

export default Contacto;