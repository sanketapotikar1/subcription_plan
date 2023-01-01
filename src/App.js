import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import { Free_Tier } from "./Free_Tier";
import { Plus_tier } from "./Plus_tier";
import { Pro_tier } from "./Pro_tier";

function App() {
  return (
    <div className="App">
      <h2>Welcome to our services </h2>

      <section class="pricing py-5">
        <div class="container">
          <div class="row">
          <Free_Tier />  
          <Plus_tier/> 
          <Pro_tier />   
          </div>
        </div>
      </section>


    </div>
  );
}

export default App;


