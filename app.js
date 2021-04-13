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

const season1Arr = []
const season2Arr = []
const season3Arr = []
const season4Arr = []

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

      const $testDiv = $('<div>').appendTo('body')
      for (let i = 0; i < 15; i++) {
        $('<div>').addClass('testing').appendTo($testDiv)
        $('<img>').attr('src', data.results[i].image).appendTo('.testing')
        $('<p>').text(data.results[i].name).appendTo('.testing')
      }

      const $rickPic = $('.img1').attr('src', data.results[0].image)
      $('#1').append($rickPic)
      const $mortyPic = $('.img2').attr('src', data.results[1].image)
      $('#2').append($mortyPic)
      const $summerPic = $('.img3').attr('src', data.results[2].image)
      $('#3').append($summerPic)
      const $bethPic = $('.img4').attr('src', data.results[3].image)
      $('#4').append($bethPic)
      const $jerryPic = $('.img5').attr('src', data.results[4].image)
      $('#5').append($jerryPic)


      ///////////////////////////////////////////
      //MODAL CONTENT GENERATION & MODAL CLOSE
      ///////////////////////////////////////////
      $('.card').on('click', event => {
        displayModal()

        for (let i = 0; i < 5; i++) {
          if (parseInt(event.currentTarget.id) === data.results[i].id) {
            $modalImg.attr('src', data.results[i].image)
            $modalHeader.text(data.results[i].name)
            $modalStatus.text('Status: ' + data.results[i].status)
            $modalOrigin.text('Origin: ' + data.results[i].origin.name)
            $modalLoc.text('Last known location: ' + data.results[i].location.name)
          }
        }
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

      for (let i = 0; i < data.length; i++) {
        season1Arr.push(data[i].name)
      }

      $('#s1').on('click', () => {
        $('#seasons').empty()
        generateList('#seasons', season1Arr)
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
        season2Arr.push(data[i].name)
      }

      $('#s2').on('click', (event) => {
        $('#seasons').empty()
        generateList('#seasons', season2Arr)
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
        season3Arr.push(data[i].name)
      }

      $('#s3').on('click', (event) => {
        $('#seasons').empty()
        generateList('#seasons', season3Arr)
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
        season4Arr.push(data[i].name)
      }

      $('#s4').on('click', (event) => {
        $('#seasons').empty()
        generateList('#seasons', season4Arr)
      })
    },
    () => {
      console.log('bad request')
    }
  )

})


