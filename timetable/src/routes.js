/* eslint-disable*/
import Campus from './components/Campus.vue'
import Choice from './components/ChoiceMajorLiberal.vue'
import Major from './components/MajorSelect.vue'
import Grade from './components/Grade.vue'
import Liberal from './components/LiberalStudies.vue'

export default [
    { path: '/', component: Campus },
    { path: '/campus', component: Campus },
	{ path: '/choice', component: Choice },
	{ path: '/major', component: Major },
    { path: '/grade', component: Grade },
    { path: '/liberal', component: Liberal }

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