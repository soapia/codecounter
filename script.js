var username = "soapia"
var repository = "kwkmiles"
var theLines = 0
var num = 0


function getLines(dataaa) {
    $("#addToMe").empty()
    console.log(dataaa)
    console.log(dataaa[dataaa.length-1].linesOfCode)
    var decks = Math.ceil(dataaa.length / 2)
    console.log(decks)
    for (var i = 0; i < decks; i++) {
        $("#addToMe").append(`<div class="card-deck" id="deck${i}"><p>hi</p></div>`)
        console.log("added" + i)
    }
    var deckCounter = 0
    for (var i = 0; i < dataaa.length; i++) {
        $(`#deck${deckCounter}`).append(
            `<div class="card">
                <div class="card-header">
                    ${dataaa[i].language}
                  </div>
                  <ul class="list-group list-group-flush">
                    <li class="list-group-item">lines of code: ${dataaa[i].linesOfCode}</li>
                    <li class="list-group-item">comments: ${dataaa[i].comments}</li>
                    <li class="list-group-item">number of files: ${dataaa[i].files}</li>
                  </ul>
              </div>
            </div>`
            )
        if (((i+1) % 2) == 0) {
            deckCounter+=1
            console.log("added anotha")
        }
        console.log(deckCounter)
    }
}

// function utterFailure() {
//     console.log("i failed")
//     alert("i failed :( please check to see if you made AND typos and make sure you're not making more than 1 request every 5 seconds!")
// }



function doShit() {
    username = $("#github").val()
    repository = $("#repository").val()
    fetch(`https://api.codetabs.com/count-loc/get?repo=${username}/${repository}`)
      .then(function(response) {
        return response.json()
      })
      .then(function(myJson) {
        getLines(myJson)
      })
      .catch(function(error) {
        if (error instanceof SyntaxError) {
           alert("woah there friend you might need to slow down!")
          } else if (error instanceof TypeError) {
            alert("double check to make sure you don't have any typos!")
          } else {
            alert("uh oh! there was an error :(")
          }
      })

}

