import { defineComponent } from "vue";
import { RouterView } from 'vue-router'

export default defineComponent({
    setup(props, context) {
        return () => <>
         <div>
            <RouterView />
         </div>
        </>
    }
})
