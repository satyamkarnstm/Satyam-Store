import "./contact.css";

function Contact() {
   
    return (
        <div className="main">
            <h2>Please send me your views about my this project</h2>
            <form action="https://formspree.io/f/mwpkdbwk" method="POST">
            <fieldset>
           <label>Name</label><sup>*</sup><br/>
                <input
                    type="text"
                    name="name"
                    required
                    autoComplete="off"
                />
                <br />
                <label>Email</label><sup>*</sup><br/>
                <input
                    type="email"
                    name="email"
                    required
                    autoComplete="off"
                />
                <br />
                <label>Company name</label><br/>
                <input
                    type="text"
                    name="company name"
                    
                    autoComplete="off"
                />
                <br />
                <label>your message</label><sup>*</sup><br/>
                <textarea
                    name="message"
                    placeholder="type your message here"
                    required
                    autoComplete="off"
                ></textarea>
                <br />

                <button type="submit">Send</button>
                </fieldset>
            </form>
        </div>
    );
}
export default Contact;
