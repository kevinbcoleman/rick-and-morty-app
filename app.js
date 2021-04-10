

$(() => {


  $.ajax({
    url: 'https://rickandmortyapi.com/api/character'
  }).then(
    (data) => {
      const $rickPic = $('<img>').attr('src', data.results[0].image)
      $('#rick').append($rickPic)


      // ('#rick').text(data.results[0].name)

      // $('#rick').append($rick)


      console.log(data.results[0].image)



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

