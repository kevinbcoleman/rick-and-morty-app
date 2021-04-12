

$(() => {


  $.ajax({
    url: 'https://rickandmortyapi.com/api/character'
  }).then(
    (data) => {


      const personArr = []

      let $nameHeader = $('#name')
      let $status = $('#status')
      let $location = $('#location')

      // for (let i = 0; i < 5; i++) {
      //   let $personImg = $('<img>').attr('src', data.results[i].image).attr('value', data.results[i].name).appendTo('modal-details')
      //   $nameHeader = $('<h3>').text(data.results[i].name).addClass(data.results[i].name).appendTo('modal-details')
      //   $status = $('<p>').text(data.results[i].status).addClass(data.results[i].name).appendTo('modal-details')
      //   $location = $('<p>').text(data.results[i].location).addClass(data.results[i].name).appendTo('modal-details')
      //   personArr.push('modal-details')
      // }


      ///////////////////////////////////////////
      //IMAGES FOR CARDS/MODAL
      ///////////////////////////////////////////


      const $rickPic = $('.img1').attr('src', data.results[0].image)
      $('#1').append($rickPic)
      const $mortyPic = $('<img>').addClass('card-img').attr('src', data.results[1].image)
      $('#2').append($mortyPic)
      const $summerPic = $('<img>').addClass('card-img').attr('src', data.results[2].image)
      $('#3').append($summerPic)
      const $bethPic = $('<img>').addClass('card-img').attr('src', data.results[3].image)
      $('#4').append($bethPic)
      const $jerryPic = $('<img>').addClass('card-img').attr('src', data.results[4].image)
      $('#5').append($jerryPic)

      ///////////////

      $('.card').on('click', event => {

        $('#modal').css('display', 'block')
        for (let i = 0; i < 5; i++) {
          if (parseInt(event.currentTarget.id) === data.results[i].id) {
            $nameHeader.text(data.results[i].name)
            $status.text('Status: ' + data.results[i].status)
            $location.text('Last known location: ' + data.results[i].location.name)
          }
        }

      })
      console.log(data)


    },
    () => {
      console.log('bad request')
    }
  )
})




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

