const displayModal = () => {
  $('#modal').css('display', 'block')
}

$(() => {

  const $modal = $('<div>').attr('id', 'modal')
  const $modalContent = $('<div>').attr('id', 'modal-content').appendTo($modal)
  const $modalImg = $('<img>').attr('id', 'modal-image').appendTo($modalContent)
  const $modalHeader = $('<h3>').attr('id', 'name').appendTo($modalContent)
  const $modalStatus = $('<p>').attr('id', 'status').appendTo($modalContent)
  const $modalOrigin = $('<p>').attr('id', 'origin').appendTo($modalContent)
  const $modalLoc = $('<p>').attr('id', 'location').appendTo($modalContent)
  $('#container').after($modal)


  $.ajax({
    url: 'https://rickandmortyapi.com/api/character'
  }).then(
    (data) => {
      // console.log(data.results)
      // const charactersArr = data.results
      // console.log(charactersArr)
      // charactersArr.forEach(() => {
      //   let names = $('<p>').text(data.results.name)
      //   console.log(names)
      // })
      ///////////////////////////////////////////
      //IMAGES FOR CARD GALLERY
      ///////////////////////////////////////////

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


      ///////////////

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
    },
    () => {
      console.log('bad request')
    }
  )
  $.ajax({
    url: 'https://rickandmortyapi.com/api/episode/1,2,3,4,5,6,7,8,9,10,11'
  }).then(
    (data) => {
      console.log(data)
      ////////////////////////////////////
      //SEASON 1
      ////////////////////////////////////
      for (let i = 0; i < 11; i++) {
        let $eps = $('<div>').attr('id', 'ep' + data[i].id).addClass('s01').appendTo('#episodes-s01')
        $('<p>').text(data[i].name).appendTo($eps)
      }
      $('#submit').on('click', (event) => {
        if (event.currentTarget.val() === 'Season-1') {
          $('#season1').css('display', 'block')
          console.log($(event.currentTarget))
        }
      })
      console.log(data.results)
    },
    () => {
      console.log('bad request')
    }
  )








})




      //rick. id.293
      //morty. id. 234
      //morty id.
      //summer E C137 id.338
      //beth id.38
      //jerry id.175

      //Attempt to dynamically generate cardsd from other characters
      // for (let i = 5; i < 10; i++) {
      //   $('<div>').attr('id', data.results[i].id).appendTo('.card-gallery')
      //   $('<img>').attr('src', data.results[i].image)

      // }


  ////////////////////
  //QUERIES
  ///////////////////
  //character name
  // status. DOA
  //location. current dimension

  //Dragon Ball Z style character update.




  // Filter characters
  // You can also include filters in the URL by including additional query parameters.
  // To start filtering add a ? followed by the query <query>=<value>. If you want to chain
  // several queries in the same call, use & followed by the query.

  // For example, If you want to check how many alive Ricks exist, just add ?name=rick&status=alive to the URL.

