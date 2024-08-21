import "./Contact.css";

const Contact = () => {


  return (
    <section className="contact-us">
      <h1 className="title">
        <span className="icon-envelope"> </span>
        Contact us
      </h1>
      <p className="sub-title">
        Contact us for more information and get notified when I publish
        something new.
      </p>

      <div style={{ justifyContent: "space-between" }} className="flex">
        <form className="">
          <div className="flex">
            <label htmlFor="email">Email Address:</label>
            <input
              autoComplete="off"
              required
              type="email"
              name="email"
              id="email"
></input>
          </div>

          <div className="flex" style={{ marginTop: "24px" }}>
            <label htmlFor="message">Your message:</label>
            <textarea required name="message" id="message"></textarea>
            
          </div>

          <button type="submit" className="submit">
           send
          </button>

          
            
          
        </form>
        <div className="contact-details">
          {/* You can place any additional contact details or information here */}
        </div>
      </div>
    </section>
  );
};

export default Contact;
