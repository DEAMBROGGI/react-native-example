
import Test from './Test'
import { StateProvider } from './src/core/StateProvider';
import reducer, {initialState} from './src/core/reducer'

export  function App() {
return(


<StateProvider initialState={initialState } reducer = {reducer}>
<Test/>
</StateProvider>


)

}
export default App