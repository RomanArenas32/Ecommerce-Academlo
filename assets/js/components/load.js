export function load () {
    const load = document.getElementById('load')
    if (load) {
      setTimeout(() => {
        load.style.display = 'none'
      }, 3000)
    }
  }
  //Pasados 3 segundos le aplica Display none