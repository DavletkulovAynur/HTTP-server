let url = 'http://localhost:4000/public'

async function testFetch() {
  let response = await fetch(`${url}`, {
    headers: {
      'Access-Control-Allow-Origin': 'no-cors',
    },
  })
  if(response.status != 200) return null
  console.log('super')
  return await console.log(response.json())
}

const button = document.querySelector('#fetchButton')

button.addEventListener('click', testFetch)
