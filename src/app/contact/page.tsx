import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleLeft} from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';

export default function ContactUs(){
    return(
        <main className='bg-black'>
               <div><Link href='/'><FontAwesomeIcon className='h-8 w-8 text-teal-50 pt-3 pl-20' icon={faCircleLeft} /></Link></div>
             <div className="bg-black flex flex-col items-center justify-center min-h-screen bg-white-100 p-4 md:pt-0">
      <h1 className="text-3xl text-white font-bold mb-6">Contact Us</h1>
      <form className="bg-black border-2 border-green-200 shadow-md px-8 pt-6 pb-8 mb-4 w-full max-w-md">

        <div className="mb-4">
          <label className="block text-white text-sm font-bold mb-2" htmlFor="name">
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            placeholder="Your Name"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required/>
        </div>
        <div className="mb-4">
          <label className="block text-white text-sm font-bold mb-2" htmlFor="email">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="Your Email"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline"
            required/>
        </div>
        <div className="mb-4">
          <label className="block text-white text-sm font-bold mb-2" htmlFor="message">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            placeholder="Your Message"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          ></textarea>
        </div>
        <div className="flex items-center justify-center">
        <button className=" mt-6 bg-transparent text-white text-xs font-semibold h-8 w-24 border bg-green-200 hover:border-green-200 hover:bg-slate-900">
    Send Message
</button>

        </div>
      </form>
     
    </div>
        </main>
    )
}