import './App.css';

function Nav(){
  return (
    <header className='Header'>
    <div className='body'>
 Welcome to the bonsai company test page
    </div>
    </header>
  );
}

function Headerone(){
  return (
    <div>
    <h1>
    About this Company
    </h1>
    <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Euismod nisi porta lorem mollis aliquam ut. Consectetur a erat nam at lectus urna duis convallis. Leo vel fringilla est ullamcorper eget nulla facilisi etiam dignissim. Leo vel orci porta non pulvinar neque laoreet suspendisse interdum.
    </p>
    </div>
  );
}

function Headertwo(){
  return (
    <div>
    <h2>
    Our cCompany values
    </h2>
    <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Euismod nisi porta lorem mollis aliquam ut. Consectetur a erat nam at lectus urna duis convallis. Leo vel fringilla est ullamcorper eget nulla facilisi etiam dignissim. Leo vel orci porta non pulvinar neque laoreet suspendisse interdum.
    </p>
    </div>
  );
}
function Headerthree(){
  return (
    <div>
    <h3>
    Our Company Moto
    </h3>
    <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Euismod nisi porta lorem mollis aliquam ut. Consectetur a erat nam at lectus urna duis convallis. Leo vel fringilla est ullamcorper eget nulla facilisi etiam dignissim. Leo vel orci porta non pulvinar neque laoreet suspendisse interdum.
    </p>
    </div>
  );
}

function Contact(){
  return (
    <div className='container'>
  <form action="/action_page.php">
    <label for="fname">First Name</label>
    <input type="text" id="fname" name="firstname" placeholder="Your name.."></input>

    <label for="lname">Last Name</label>
    <input type="text" id="lname" name="lastname" placeholder="Your last name.."></input>

    <label for="country">Country</label>
    <select id="country" name="country">
      <option value="australia">Australia</option>
      <option value="canada">Canada</option>
      <option value="usa">USA</option>
    </select>

    <label for="subject">Subject</label>
    <textarea className='subject' name="subject" placeholder="Write something.." ></textarea>

    <input type="submit" value="Submit"></input>
  </form>
</div>
 );
}

function PageComponent() {
  return (
    <div>
    <Nav/>
    <Headerone/>
    <Headertwo/>
    <Headerthree/>
    <Contact/>
    </div>
  );
}

export default PageComponent;


