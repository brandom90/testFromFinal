// -  ,options:['','','','','']

const symptoms = [
  {instruction:'Answer these questions thinking of your hi symptoms and difficulties in the last week.'},
  {question:'Do you feel grinding, hear clicking, or any other type of noise from your hip',value:0,options:['None(+0)','Mild(+1)','Moderate(+2)','Severe(+3)','Extreme(+4)']},
  {question:'Difficulties spreading your legs wide apart',value:0,options:['None(+0)','Mild(+1)','Moderate(+2)','Severe(+3)','Extreme(+4)']},
  {question:'Difficulties to stride out when walking',value:0,options:['None(+0)','Mild(+1)','Moderate(+2)','Severe(+3)','Extreme(+4)']},
  {instruction:'Stiffness is a sensation of restriction or slowness in the ease with which you move your hip joint'},
  {question:'How severe is your hip joint stiffness after first wakening in the morning',value:0,options:['None(+0)','Mild(+1)','Moderate(+2)','Severe(+3)','Extreme(+4)']},
  {question:'How severe is your hip stiffness after sitting, lying, or resting later in the day?',value:0,options:['None(+0)','Mild(+1)','Moderate(+2)','Severe(+3)','Extreme(+4)']},
]

const pain = [
  {question:'How often is your hip painful',value:0,options:['Never(+0)','Monthly(+1)','Weekly(+2)','Daily(+3)','Always(+4)']},
  {instruction:'What amount of hip pain ahve you experienced the last week during the following activies'},
  {question:'Straightening your hip fully',value:0,options:['None(+0)','Mild(+1)','Moderate(+2)','Severe(+3)','Extreme(+4)']},
  {question:'Bending your hip fully',value:0,options:['None(+0)','Mild(+1)','Moderate(+2)','Severe(+3)','Extreme(+4)']},
  {question:'Walking on a flat surface',value:0,options:['None(+0)','Mild(+1)','Moderate(+2)','Severe(+3)','Extreme(+4)']},
  {question:'Going up or down stairs',value:0,options:['None(+0)','Mild(+1)','Moderate(+2)','Severe(+3)','Extreme(+4)']},
  {question:'At night while in bed',value:0,options:['None(+0)','Mild(+1)','Moderate(+2)','Severe(+3)','Extreme(+4)']},
  {question:'Sitting or lying',value:0,options:['None(+0)','Mild(+1)','Moderate(+2)','Severe(+3)','Extreme(+4)']},
  {question:'Standing upright',value:0,options:['None(+0)','Mild(+1)','Moderate(+2)','Severe(+3)','Extreme(+4)']},
  {question:'Walking on a hard surface (asphalt, concrete, etc)',value:0,options:['None(+0)','Mild(+1)','Moderate(+2)','Severe(+3)','Extreme(+4)']},
  {question:'Walking on an uneven surface',value:0,options:['None(+0)','Mild(+1)','Moderate(+2)','Severe(+3)','Extreme(+4)']},

]

const dailyLiving = [
  {instruction:'This section describes your ability to move around and to look after yourself. For each of the following activities, please indicate the degree of difficulty you have experienced in the last week due to your hip'},
  {question:'Descending the stairs',value:0,options:['None(+0)','Mild(+1)','Moderate(+2)','Severe(+3)','Extreme(+4)']},
  {question:'Ascending stairs',value:0,options:['None(+0)','Mild(+1)','Moderate(+2)','Severe(+3)','Extreme(+4)']},
  {question:'Rising from sitting',value:0,options:['None(+0)','Mild(+1)','Moderate(+2)','Severe(+3)','Extreme(+4)']},
  {question:'Standing',value:0,options:['None(+0)','Mild(+1)','Moderate(+2)','Severe(+3)','Extreme(+4)']},
  {question:'Bending to the floor/picking up an object',value:0,options:['None(+0)','Mild(+1)','Moderate(+2)','Severe(+3)','Extreme(+4)']},
  {question:'Walking on a flat surface',value:0,options:['None(+0)','Mild(+1)','Moderate(+2)','Severe(+3)','Extreme(+4)']},
  {question:'Getting in/out of car',value:0,options:['None(+0)','Mild(+1)','Moderate(+2)','Severe(+3)','Extreme(+4)']},
  {question:'Going shopping',value:0,options:['None(+0)','Mild(+1)','Moderate(+2)','Severe(+3)','Extreme(+4)']},
  {question:'Putting on socks/stockings',value:0,options:['None(+0)','Mild(+1)','Moderate(+2)','Severe(+3)','Extreme(+4)']},
  {question:'Rising from bed',value:0,options:['None(+0)','Mild(+1)','Moderate(+2)','Severe(+3)','Extreme(+4)']},
  {question:'Taking off socks/stockings',value:0,options:['None(+0)','Mild(+1)','Moderate(+2)','Severe(+3)','Extreme(+4)']},
  {question:'Lying in bed (turning over, maintaining hip position',value:0,options:['None(+0)','Mild(+1)','Moderate(+2)','Severe(+3)','Extreme(+4)']},
  {question:'Getting in/out of bath',value:0,options:['None(+0)','Mild(+1)','Moderate(+2)','Severe(+3)','Extreme(+4)']},
  {question:'Sitting',value:0,options:['None(+0)','Mild(+1)','Moderate(+2)','Severe(+3)','Extreme(+4)']},
  {question:'Getting on/off toilet',value:0,options:['None(+0)','Mild(+1)','Moderate(+2)','Severe(+3)','Extreme(+4)']},
  {question:'Heavy Domestic duties(moving heavy boxes, scrubbing floors,e etc)',value:0,options:['None(+0)','Mild(+1)','Moderate(+2)','Severe(+3)','Extreme(+4)']},
  {question:'Light domestic duties (cooking, dusting, etc)',value:0,options:['None(+0)','Mild(+1)','Moderate(+2)','Severe(+3)','Extreme(+4)']},
]

const functionSports = [
  {instruction:'This section describes your ability to be active on a higher level. For each of the following activities, please indicate the degree of difficulty you have experienced in the last week due to your hip.'},
  {question:'Squatting',value:0,options:['None(+0)','Mild(+1)','Moderate(+2)','Severe(+3)','Extreme(+4)']},
  {question:'Running',value:0,options:['None(+0)','Mild(+1)','Moderate(+2)','Severe(+3)','Extreme(+4)']},
  {question:'Twisting/pivoting on loaded leg',value:0,options:['None(+0)','Mild(+1)','Moderate(+2)','Severe(+3)','Extreme(+4)']},
  {question:'Walking on uneven surface',value:0,options:['None(+0)','Mild(+1)','Moderate(+2)','Severe(+3)','Extreme(+4)']},
]

const qualityOfLife = [
  {question:'How often are you aware of your hip problem',value:0,options:['Never(+0)','Monthly(+1)','Weekly(+2)','Daily(+3)','Constatnly(+4)']},
  {question:'Have you modified your life style to avoid activities potentially damagin to your hip?',value:0,options:['Not at all(+0)','Mildly(+1)','Moderately(+2)','Severely(+3)','Totally(+4)']},
  {question:'How much are you troubled with lack of confidence in your hip',value:0,options:['Not at all(+0)','Mildly(+1)','Moderately(+2)','Severely(+3)','Extrlyeme(+4)']},
  {question:'In general how much difficulty do you have with your hip',value:0,options:['None(+0)','Mild(+1)','Moderate(+2)','Severe(+3)','Extreme(+4)']},

]

const name = {first:'', last:''}

let hoosVariables = [symptoms,pain,dailyLiving,functionSports,qualityOfLife,name]

export default hoosVariables