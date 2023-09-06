let element = document.querySelector(".demo");

async function holidays(){
    try{
        let data = await fetch("https://holidays.abstractapi.com/v1/?api_key=e4851a57ecd74fdb9eb8f24e51543d3c&country=US&year=2020&month=12&day=25")
    let response = await data.json()
    console.log(response);
    response.forEach((value)=>{
        element.innerHTML=`
          <div class="container">
          <div> Country: ${value.country}</div>
          <div> Country Location: ${value.location}</div>
          <div> Holiday Name: ${value.name}</div>
          <div> Holiday Type: ${value.type}</div>
          <div> Holiday Date: ${value.date}</div>
          <div> Holiday Day: ${value.date_day}</div>
          <div> Holiday Month: ${value.date_month}</div>
          <div> Holiday Year: ${value.date_year}</div>
          <div> Day: ${value.week_day}</div>
          </div>
        `
    })

    }
    catch(error){
        console.log("error")
    }
        
    
}

holidays();