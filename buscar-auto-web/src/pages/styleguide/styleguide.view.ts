
import { Vue } from 'vue-class-component'
import { ROUTES } from './styleguide.const'

export default class Styleguide extends Vue {
    get routes () {
        return ROUTES
    }
}
