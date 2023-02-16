function sendMessage() {
  const message = document.getElementById("senderMessageInput").value;
  var card = document.createElement("div");
  card.classList.add("col-md-4");
  card.classList.add("ml-auto");
  card.innerHTML = `<div class="card mb-3 ">
        <div class="card-header text-white bg-dark">
         Sender
        </div>
        <div class="card-body">
          <p>${message}</p>
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
        card.classList.add("col-md-4");
        card.innerHTML = `<div class="card mb-3">
      <div class="card-header text-white bg-success">
       Let's Talk
      </div>
      <div class="card-body">
        <p>${advice}</p>
      </div>
    </div>`;
        document.getElementById("rowChatBot").appendChild(card);
      } else {
        console.log("No advice found for question:", question);
      }
    })
    .catch((error) => console.error(error));

  return document.getElementById("rowChatBot").appendChild(card);
}
