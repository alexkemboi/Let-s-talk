function toggleSidebar() {
  var row = document.getElementById("myRow");
  row.classList.toggle("sidebar-open");
}

function showAbout() {
  var homeSection = document.getElementById("homeSection");
  homeSection.style.display = "none";

  var aboutSection = document.getElementById("aboutSection");
  aboutSection.style.display = "block";

  var chatSection = document.getElementById("chatSection");
  chatSection.style.display = "none";

  var contactSection = document.getElementById("contactSection");
  contactSection.style.display = "none";
}

function showChat() {
  var homeSection = document.getElementById("homeSection");
  homeSection.style.display = "none";

  var aboutSection = document.getElementById("aboutSection");
  aboutSection.style.display = "none";

  var chatSection = document.getElementById("chatSection");
  chatSection.style.display = "block";

  var contactSection = document.getElementById("contactSection");
  contactSection.style.display = "none";
}

function showHome() {
  var homeSection = document.getElementById("homeSection");
  homeSection.style.display = "block";

  var aboutSection = document.getElementById("aboutSection");
  aboutSection.style.display = "none";

  var chatSection = document.getElementById("chatSection");
  chatSection.style.display = "none";

  var contactSection = document.getElementById("contactSection");
  contactSection.style.display = "none";
}

function showContact() {
  var homeSection = document.getElementById("homeSection");
  homeSection.style.display = "none";

  var aboutSection = document.getElementById("aboutSection");
  aboutSection.style.display = "none";

  var chatSection = document.getElementById("chatSection");
  chatSection.style.display = "none";

  var contactSection = document.getElementById("contactSection");
  contactSection.style.display = "block";
}

function showApp() {
  var letsTalk = document.getElementById("appSection");
  letsTalk.style.display = "block";

  var logInSection = document.getElementById("logInSection");
  logInSection.style.display = "none";
}

function logIn() {
  var letsTalk = document.getElementById("appSection");
  letsTalk.style.display = "none";

  var logInSection = document.getElementById("logInSection");
  logInSection.style.display = "block";
}

function sendMessage() {
  const date = new Date();
  document.getElementById("conversationDate").innerHTML = date;
  const time = date.getHours() + ":" + date.getMinutes() + "Hrs";
  const message = document.getElementById("senderMessageInput").value;
  var card = document.createElement("div");
  card.classList.add("col-md-4");
  card.classList.add("ml-auto");
  card.innerHTML = `<div class="card mb-3 " style="height:150px;">
        <div class="card-header text-white bg-dark">
         Sender
        </div>
        <div class="card-body">
          <p>${message}</p>
        </div>
        <div class="card-footer">
      <p>${time}</p>
      </div>
      </div>`;
  const encodedQuestions = encodeURIComponent(message);
  // Make a GET request to the API with the question as a query parameter
  fetch(`https://api.adviceslip.com/advice/search/${encodedQuestions}`)
    .then((response) => response.json())
    .then((data) => {
      // Check if the response contains any advice slips
      if (data.slips.length > 0) {
        // Get the advice text from the response JSON
        const advice = data.slips[0].advice; // retrieve the advice from the API response data
        console.log(advice); // display the advice in the console
        var card = document.createElement("div");
        card.classList.add("col-md-6");
        card.innerHTML = `<div class="card mb-3"style="height:150px;">
      <div class="card-header text-white bg-success">
       Let's Talk
      </div>
      <div class="card-body">
        <p>${advice}</p>
      </div>
      <div class="card-footer">
      <p>${time}</p>
      </div>
    </div>`;
        document.getElementById("rowChatBot").appendChild(card);
      } else {
        console.log("No advice found for question:", question);
      }
    })
    .catch((error) => console.error(error));

  fetch(`https://www.nimh.nih.gov/api/disorder/getbyterm?term=${message}`)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      var card = document.createElement("div");
      card.classList.add("col-md-6");
      card.innerHTML = `<div class="card mb-3">
      <div class="card-header text-white bg-success">
       Let's Talk
      </div>
      <div class="card-body">
        <p>${data}</p>
      </div>
      <div class="card-footer">
      <p>${time}</p>
      </div>
    </div>`;
      document.getElementById("rowChatBot").appendChild(card);
    });

  return document.getElementById("rowChatBot").appendChild(card);
}
