nombres_potenciales = [
    'Eclipse', 'Aurora', 'Quantum', 'Vórtice', 'Nebulosa',
    'Fénix', 'Galaxia', 'Pulsar', 'Quasar', 'Zodiac',
    'Eterno', 'Inferno', 'Solstice', 'Equinox', 'Astral',
    'Cosmos', 'Orbit', 'Nova', 'Stellar', 'Rift',
    'Vortex', 'Pandemonium', 'Paradox', 'Phantom', 'Spectrum',
    'Reverb', 'Rhapsody', 'Ricochet', 'Serenade', 'Shadow',
    'Silhouette', 'Symphony', 'Tempest', 'Twilight', 'Whisper',
    'Radiant', 'Resonance', 'Rhythm', 'Roulette', 'Sonnet',
    'Soul', 'Spell', 'Spirit', 'Storm', 'Stratosphere',
    'Sunset', 'Supernova', 'Surge', 'Sway', 'Harmony',
    'Haze', 'Heartbeat', 'Horizon', 'Illusion', 'Inception'
]
conector=['en','de','in','of']

const gen=()=>{
    let NP = Math.floor(Math.random() * nombres_potenciales.length);
let NP2 = Math.floor(Math.random() * nombres_potenciales.length);
let CR = Math.floor(Math.random() * conector.length);
    
    document.getElementsByTagName('h1')[0].textContent=nombres_potenciales[NP]+' '+conector[CR]+' '+nombres_potenciales[NP2];    
}
gen()
