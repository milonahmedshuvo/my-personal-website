import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { toast } from 'react-hot-toast';
import contact from '../../images/contact.jpg'



const Contact = () => {

    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();

      
  
      emailjs.sendForm('service_vz8owgi', 'template_36cy8br', form.current, '4Mxt1xBz1j31xy1fB')
        .then((result) => {
            console.log(result.text);
            console.log("message seen")
            toast.success("Your message successful send...")
            e.target.reset()
        }, (error) => {
            console.log(error.text);
            toast.error("Sorry..try again..!")
        });
    };






  return (
    <div className='grid grid-cols-1 md:grid-cols-2 gap-10 my-32'>
        
        <div>
        {/* https://scorion.nl/cms/wp-content/uploads/2022/02/contact-scaled-1.jpg  */}
            <img src={contact} className='rounded-3xl ' alt="" />
        </div>


    <div className='px-4  flex-col justify-center '>
          <form ref={form} onSubmit={sendEmail}>
      
            
            <input type="text" name="to_name" placeholder="Name" className="input input-bordered input-info w-full my-2 " />

            <input type="email" name="from_name" placeholder="Email" className="input input-bordered input-info w-full my-2" />
           
            <textarea className="textarea textarea-info w-full my-2" name="message" placeholder="Textarea"></textarea>
           
            
            <input className='bg-blue-100 px-2 w-full py-2 text-blue-500 font-bold rounded' type="submit" value="Send" />
    </form>  
    </div>
    </div>
  )
}

export default Contact
