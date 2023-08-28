import { RouterProvider } from "react-router-dom"
import { router } from "./router"
import GlobalStyle from "./components/global/global"

// as để đổi tên
import { Provider as ReduxProvider } from "react-redux"
import { store } from "./redux/store"

function App() {
  return (
    <ReduxProvider store={store}>
      <GlobalStyle> 
      <RouterProvider router={router}></RouterProvider>
    </GlobalStyle>
    </ReduxProvider>
    
  
  ) 
  
}

export default App
