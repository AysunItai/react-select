
import Select from "react-select";

function App() {
  const options=[
      {value:"january",label:"january"},
      {value:"Feburary",label:"Feburary"},
      {value:"March",label:"March"},
      {value:"April",label:"April"},
      

    ];
    const handleChange = selectedOption =>{
      console.log(selectedOption)

    }
  return (
    <Select options={options} onChange={handleChange}/>
  );
}

export default App;
