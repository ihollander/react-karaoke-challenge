const URL = 'http://localhost:4000'
const patchParams = {
  method: 'PATCH',
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  }
}

export default class KaraokeAPI {

  static getSongs() {
    return fetch(`${URL}/users/1/songs`)
            .then(r => r.json())
  }

  static playSong(id) {
    return fetch(`${URL}/users/1/songs/${id}/play`, patchParams)
            .then(r => r.json())    
  }

  static likeSong(id) {
    return fetch(`${URL}/users/1/songs/${id}/like`, patchParams)
            .then(r => r.json())
  }

  static dislikeSong(id) {
    return fetch(`${URL}/users/1/songs/${id}/dislike`, patchParams)
            .then(r => r.json())    
  }

}