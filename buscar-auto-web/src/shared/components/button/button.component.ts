
import { Options, Vue } from 'vue-class-component'

@Options({
    props: {
        label: String,
        disabled: Boolean,
        isLoading: Boolean
    }
})

export default class ButtonComponent extends Vue {

}
