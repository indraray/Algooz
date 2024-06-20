import React from "react";
import "./Contact.css"
function Contact() {
   return (
      <>
         <div class="parent-contact">
            <div class="div1-contact">
               <section id="contact">
                  <h1 className="title">Contact Me</h1>

                  <div className="contact-form-container">
                     <div className="contact-contents">
                        <h2>Send a Message</h2>
                        <form action="https://api.web3forms.com/submit" method="POST">
                           {/* Replace with your Access Key */}
                           <input type="hidden" name="access_key" value="383c919e-c791-4a9b-ad0c-d619b41f3dfb" />

                           {/* Form Inputs. Each input must have a name="" attribute */}
                           <label htmlFor="name">Name:</label>
                           <input type="text" id="name" name="name" required />

                           <label htmlFor="email">Email:</label>
                           <input type="email" id="email" name="email" required />

                           <label htmlFor="message">Message:</label>
                           <textarea id="message" name="message" rows="4" required></textarea>

                           <button type="submit" className="btn-btn-color-1">Send</button>
                        </form>
                     </div>
                  </div>
               </section> </div>
            <div class="div2-contact"> </div>
         </div>

      </>
   );
}
export default Contact;