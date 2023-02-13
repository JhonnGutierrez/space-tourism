import markShuttleworth from '$lib/crew/image-mark-shuttleworth.webp'
import douglasHurley from '$lib/crew/image-douglas-hurley.webp'
import victorGlover from '$lib/crew/image-victor-glover.webp'
import anoushehAnsari from '$lib/crew/image-anousheh-ansari.webp'

export function load () {
    return {
        crew: [
            {
              "name": "Douglas Hurley",
              "image": douglasHurley,
              "role": "Commander",
              "bio": "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2."
            },
            {
              "name": "Mark Shuttleworth",
              "image": markShuttleworth,
              "role": "Mission Specialist",
              "bio": "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist."
            },
            {
              "name": "Victor Glover",
              "image": victorGlover,
              "role": "Pilot",
              "bio": "Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer."
            },
            {
              "name": "Anousheh Ansari",
              "image": anoushehAnsari,
              "role": "Flight Engineer",
              "bio": "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space."
            }
          ]
    }
}