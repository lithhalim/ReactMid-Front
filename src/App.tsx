import {BrowserRouter,Routes,Route,} from "react-router-dom";
import { QueryClient,QueryClientProvider} from '@tanstack/react-query'
import Signup_Section from "./combonants/Reguster/signupSection/Signup_Section";
import Page_Not_Found from "./combonants/page-not-found/Page_Not_Found";
import Header_system from "./combonants/UserPage/HeaderSection/Header_system";
import User_Section from "./combonants/UserPage/UserSection/User_Section";
import Alert_Section from "./combonants/Alert_Section/Alert_Item";
import { Alert_Provider } from "./context-api/Alert_context";
import { Login_Provider } from "./context-api/authntication-context";
import { UpdateReguster_Provider } from "./context-api/Update_Reguster_Context";


const queryClient = new QueryClient()


function App() {
  return (
    <UpdateReguster_Provider>
      <Alert_Provider>
        <Login_Provider>
          <QueryClientProvider client={queryClient}>
              <BrowserRouter>
                  <Routes>
                          <Route path="*" element={<><Page_Not_Found/></>}/>
                          <Route path="/" element={<><Signup_Section/></>}/>
                          <Route path="/Admin" element={<><Alert_Section/> <Header_system/> <User_Section/> </>}/>
                  </Routes>
              </BrowserRouter>
          </QueryClientProvider>
        </Login_Provider>
      </Alert_Provider>
    </UpdateReguster_Provider>
  );
}

export default App;
