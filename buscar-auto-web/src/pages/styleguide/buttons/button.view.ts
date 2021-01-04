
import { Options, Vue } from 'vue-class-component'
import ButtonComponent from '@/shared/components/button/button.component.vue'

@Options({
    components: {
        ButtonComponent
    }
})

export default class ButtonPage extends Vue {

}
