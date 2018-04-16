/* eslint-disable*/
import Campus from './components/Campus.vue'
import Choice from './components/ChoiceMajorLiberal.vue'
import Major from './components/MajorSelect.vue'
import Grade from './components/Grade.vue'

export default [
	{ path: '/campus', component: Campus },
	{ path: '/choice', component: Choice },
	{ path: '/major', component: Major },
	{ path: '/grade', component: Grade }

]
/*app
|--header
|--campus(pg)
|--choice(pg)
    |------major-select(pg)
    |------grade(pg)
              |--------list of subjects
              |--------card
    |------liberal studies(pg)
*/