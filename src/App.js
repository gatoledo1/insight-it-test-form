import React, { useState } from "react";
import FormTest from "./components/Form";
import PrintData from "./components/PrintData";

function App() {
  const [dataForm, setdataForm] = useState(null)
  return (
    <div className="App">
      <FormTest setData={setdataForm} />
      {
        dataForm && (
          <PrintData data={dataForm} />
        )
      }
    </div>
  );
}

export default App;