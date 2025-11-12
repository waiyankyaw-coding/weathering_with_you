const app = Vue.createApp({
    data(){
         return {
               location : 'Yangon',
               data : {},
               errorMessage: '',
             months : [
  "Jan",
  "Feb",
  "Mar",
  "April",
  "May",
  "June",
  "July",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec"
],
days : [
  "Sun", "Mon", "Tues", "Wed", "Thu", "Fri", "Sat"
]

         }
    },
   methods:{
                 async  getWeather ()  {
              try{
                  const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.location}&units=metric&appid=b5ba98407243c107002729a05fc9efd9`);
                    if(!res.ok){
                         throw new Error (`${res.errorStatus}`);
                    }
                          const data =  await res.json(); 
                    
                    this.data = data;
                    this.errorMessage = '';
               
              }catch(err){
                  if(err){
                     this.errorMessage = 'please use a valid location or country..'
                  }
              }
          },
          createDate (){
              const now= new Date();
              const dayName = this.days[now.getDay()];     
              const monthName = this.months[now.getMonth()]; 
              const date = now.getDate();         
              const year = now.getFullYear();
              return `${date},${monthName},${dayName},${year}`
          },
   },
   mounted(){
    this.getWeather();
   }
});
app.mount('#weather-app');