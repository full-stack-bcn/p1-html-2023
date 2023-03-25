document.addEventListener('DOMContentLoaded', () => {
    const educacion = document.querySelectorAll('#educacion')
    const certificaciones = document.querySelectorAll('#certificaciones')
    const skills = document.querySelectorAll('#skills')
    const experiencia = document.querySelectorAll('#experiencia')

    educacion.forEach(item => {
        item.addEventListener('click', () => {
          window.scrollTo({ top: 0, behavior: 'smooth' })
        })
      })

    certificaciones.forEach(item => {
        item.addEventListener('click', () => {
          const destino = document.querySelector('.background-certificaciones')
          destino.scrollIntoView({ behavior: 'smooth' })
        })
      })
      
      skills.forEach(item => {
        item.addEventListener('click', () => {
          const destino = document.querySelector('.background-skills')
          destino.scrollIntoView({ behavior: 'smooth' })
        })
      })
      
      experiencia.forEach(item => {
        item.addEventListener('click', () => {
          const destino = document.querySelector('.background-experiencia')
          destino.scrollIntoView({ behavior: 'smooth' })
        })
})
})