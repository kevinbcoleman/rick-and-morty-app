const displayModal = () => {
  $('#modal').css('display', 'block')
}

const closeModal = () => {
  $('#modal').css('display', 'none')
}

const generateList = (appendTarg, seasonArrNum) => {
  for (let i = 0; i < seasonArrNum.length; i++) {
    const $p = $('<p>').text(seasonArrNum[i])
    $(appendTarg).append($p)
  }
}

const seasonArr = [[], [], [], []]


$(() => {

  ///////////////////////////////////////////
  //MODAL GENERATION
  ///////////////////////////////////////////
  const $modal = $('<div>').attr('id', 'modal')
  const $modalContent = $('<div>').attr('id', 'modal-content').appendTo($modal)
  const $modalImg = $('<img>').attr('id', 'modal-image').appendTo($modalContent)
  const $modalHeader = $('<h3>').attr('id', 'name').appendTo($modalContent)
  const $modalStatus = $('<p>').attr('id', 'status').appendTo($modalContent)
  const $modalOrigin = $('<p>').attr('id', 'origin').appendTo($modalContent)
  const $modalLoc = $('<p>').attr('id', 'location').appendTo($modalContent)
  const $modalClose = $('<button>').text('Close').attr('id', 'close').appendTo($modalContent)
  $('body').append($modal)


  $.ajax({
    url: 'https://rickandmortyapi.com/api/character'
  }).then(
    (data) => {

      ///////////////////////////////////////////
      //IMAGES FOR CARD GALLERY
      ///////////////////////////////////////////

      for (let i = 0; i < 15; i++) {
        const $cardDiv = $('<div>').addClass('card').attr('id', data.results[i].id)
        const $cardImg = $('<img>').attr('src', data.results[i].image)
        $cardDiv.append($cardImg)
        $('.card-gallery').append($cardDiv)
      }

      ///////////////////////////////////////////
      //MODAL CONTENT GENERATION & MODAL CLOSE
      ///////////////////////////////////////////
      const populateModal = (charInfo) => {
        for (let i = 0; i < 15; i++) {
          if (parseInt(charInfo.id) === data.results[i].id) {
            $modalImg.attr('src', data.results[i].image)
            $modalHeader.text(data.results[i].name)
            $modalStatus.text('Status: ' + data.results[i].status)
            $modalOrigin.text('Origin: ' + data.results[i].origin.name)
            $modalLoc.text('Last known location: ' + data.results[i].location.name)
          }
        }
      }

      $('.card').on('click', event => {
        displayModal()
        populateModal(event.currentTarget)
      })

      $('#close').on('click', closeModal)
    },
    () => {
      console.log('bad request')
    }
  )
  $.ajax({
    url: 'https://rickandmortyapi.com/api/episode/1,2,3,4,5,6,7,8,9,10,11'
  }).then(
    (data) => {
      ////////////////////////////////////
      //SEASON 1
      ////////////////////////////////////
      for (let i = 0; i < data.length; i++) {
        seasonArr[0].push(data[i].name)
      }

      $('#s1').on('click', () => {
        $('#seasons').empty()
        generateList('#seasons', seasonArr[0])
      })
    },
    () => {
      console.log('bad request')
    }
  )
  $.ajax({
    url: 'https://rickandmortyapi.com/api/episode/12,13,14,15,16,17,18,19,20,21'
  }).then(
    (data) => {
      console.log(data)
      ////////////////////////////////////
      //SEASON 2
      ////////////////////////////////////

      for (let i = 0; i < data.length; i++) {
        seasonArr[1].push(data[i].name)
      }

      $('#s2').on('click', (event) => {
        $('#seasons').empty()
        generateList('#seasons', seasonArr[1])
      })
    },
    () => {
      console.log('bad request')
    }
  )
  $.ajax({
    url: 'https://rickandmortyapi.com/api/episode/22,23,24,25,26,27,28,29,30,31'
  }).then(
    (data) => {
      console.log(data)
      ////////////////////////////////////
      //SEASON 3
      ////////////////////////////////////

      for (let i = 0; i < data.length; i++) {
        seasonArr[2].push(data[i].name)
      }

      $('#s3').on('click', (event) => {
        $('#seasons').empty()
        generateList('#seasons', seasonArr[2])
      })
    },
    () => {
      console.log('bad request')
    }
  )
  $.ajax({
    url: 'https://rickandmortyapi.com/api/episode/32,33,34,35,36,37,38,39,40,41'
  }).then(
    (data) => {
      console.log(data)
      ////////////////////////////////////
      //SEASON 4
      ////////////////////////////////////

      for (let i = 0; i < data.length; i++) {
        seasonArr[3].push(data[i].name)
      }

      $('#s4').on('click', (event) => {
        $('#seasons').empty()
        generateList('#seasons', seasonArr[3])
      })
    },
    () => {
      console.log('bad request')
    }
  )

})


