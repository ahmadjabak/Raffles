import "./contact.css"
import Footer from "../Footer/Footer"
export default function ContactUs() {
  return (
    <div>

      <Footer />
      <div class="card">
        <h2>Contact Us</h2>
        <div class="row">
          <div class="col">
            <div class="form-group">
              <label>First Name</label>
              <input type="text" />
            </div>
          </div>

          <div class="col">
            <div class="form-group">
              <label>Last name</label>
              <input type="text" />
            </div>
          </div>

          <div class="col">
            <div class="form-group">
              <label>Email</label>
              <input type="email" />
            </div>
          </div>

          <div class="col">
            <div class="form-group">
              <label>Phone Number</label>
              <input type="text" />
            </div>
          </div>

          <div class="col">
            <div class="form-group">
              <label>Message</label>
              <textarea></textarea>
            </div>
          </div>

          <div class="col">
            <input type="submit" value="Submit" />
          </div>
        </div>
      </div>
    </div>
  )
}